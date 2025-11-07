// https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/search_series
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSonarrSearchSeriesConfig extends cdktf.TerraformMetaArguments {
  /**
  * TVDB ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/search_series#tvdb_id DataSonarrSearchSeries#tvdb_id}
  */
  readonly tvdbId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/search_series sonarr_search_series}
*/
export class DataSonarrSearchSeries extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarr_search_series";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSonarrSearchSeries resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSonarrSearchSeries to import
  * @param importFromId The id of the existing DataSonarrSearchSeries that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/search_series#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSonarrSearchSeries to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarr_search_series", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/search_series sonarr_search_series} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSonarrSearchSeriesConfig
  */
  public constructor(scope: Construct, id: string, config: DataSonarrSearchSeriesConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarr_search_series',
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
    this._tvdbId = config.tvdbId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // monitored - computed: true, optional: false, required: false
  public get monitored() {
    return this.getBooleanAttribute('monitored');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // quality_profile_id - computed: true, optional: false, required: false
  public get qualityProfileId() {
    return this.getNumberAttribute('quality_profile_id');
  }

  // root_folder_path - computed: true, optional: false, required: false
  public get rootFolderPath() {
    return this.getStringAttribute('root_folder_path');
  }

  // season_folder - computed: true, optional: false, required: false
  public get seasonFolder() {
    return this.getBooleanAttribute('season_folder');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tags')));
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // title_slug - computed: true, optional: false, required: false
  public get titleSlug() {
    return this.getStringAttribute('title_slug');
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

  // use_scene_numbering - computed: true, optional: false, required: false
  public get useSceneNumbering() {
    return this.getBooleanAttribute('use_scene_numbering');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      tvdb_id: cdktf.numberToTerraform(this._tvdbId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      tvdb_id: {
        value: cdktf.numberToHclTerraform(this._tvdbId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
