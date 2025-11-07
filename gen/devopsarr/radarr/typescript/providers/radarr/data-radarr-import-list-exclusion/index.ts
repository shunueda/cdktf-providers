// https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/data-sources/import_list_exclusion
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRadarrImportListExclusionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Movie TMDB ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/data-sources/import_list_exclusion#tmdb_id DataRadarrImportListExclusion#tmdb_id}
  */
  readonly tmdbId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/data-sources/import_list_exclusion radarr_import_list_exclusion}
*/
export class DataRadarrImportListExclusion extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_import_list_exclusion";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRadarrImportListExclusion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRadarrImportListExclusion to import
  * @param importFromId The id of the existing DataRadarrImportListExclusion that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/data-sources/import_list_exclusion#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRadarrImportListExclusion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_import_list_exclusion", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/data-sources/import_list_exclusion radarr_import_list_exclusion} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRadarrImportListExclusionConfig
  */
  public constructor(scope: Construct, id: string, config: DataRadarrImportListExclusionConfig) {
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
    this._tmdbId = config.tmdbId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
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

  // year - computed: true, optional: false, required: false
  public get year() {
    return this.getNumberAttribute('year');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      tmdb_id: cdktf.numberToTerraform(this._tmdbId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      tmdb_id: {
        value: cdktf.numberToHclTerraform(this._tmdbId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
