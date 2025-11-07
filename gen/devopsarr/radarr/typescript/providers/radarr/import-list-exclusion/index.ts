// https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_exclusion
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImportListExclusionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Movie to be excluded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_exclusion#title ImportListExclusion#title}
  */
  readonly title: string;
  /**
  * Movie TMDB ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_exclusion#tmdb_id ImportListExclusion#tmdb_id}
  */
  readonly tmdbId: number;
  /**
  * Year.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_exclusion#year ImportListExclusion#year}
  */
  readonly year: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_exclusion radarr_import_list_exclusion}
*/
export class ImportListExclusion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_import_list_exclusion";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ImportListExclusion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ImportListExclusion to import
  * @param importFromId The id of the existing ImportListExclusion that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_exclusion#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ImportListExclusion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_import_list_exclusion", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_exclusion radarr_import_list_exclusion} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImportListExclusionConfig
  */
  public constructor(scope: Construct, id: string, config: ImportListExclusionConfig) {
    super(scope, id, {
      terraformResourceType: 'radarr_import_list_exclusion',
      terraformGeneratorMetadata: {
        providerName: 'radarr',
        providerVersion: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._title = config.title;
    this._tmdbId = config.tmdbId;
    this._year = config.year;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // tmdb_id - computed: false, optional: false, required: true
  private _tmdbId?: number; 
  public get tmdbId() {
    return this.getNumberAttribute('tmdb_id');
  }
  public set tmdbId(value: number) {
    this._tmdbId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tmdbIdInput() {
    return this._tmdbId;
  }

  // year - computed: false, optional: false, required: true
  private _year?: number; 
  public get year() {
    return this.getNumberAttribute('year');
  }
  public set year(value: number) {
    this._year = value;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      title: cdktf.stringToTerraform(this._title),
      tmdb_id: cdktf.numberToTerraform(this._tmdbId),
      year: cdktf.numberToTerraform(this._year),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tmdb_id: {
        value: cdktf.numberToHclTerraform(this._tmdbId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      year: {
        value: cdktf.numberToHclTerraform(this._year),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
