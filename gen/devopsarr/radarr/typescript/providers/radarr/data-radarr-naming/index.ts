// https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/naming
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRadarrNamingConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/naming radarr_naming}
*/
export class DataRadarrNaming extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_naming";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRadarrNaming resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRadarrNaming to import
  * @param importFromId The id of the existing DataRadarrNaming that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/naming#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRadarrNaming to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_naming", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/naming radarr_naming} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRadarrNamingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRadarrNamingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'radarr_naming',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // colon_replacement_format - computed: true, optional: false, required: false
  public get colonReplacementFormat() {
    return this.getStringAttribute('colon_replacement_format');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // movie_folder_format - computed: true, optional: false, required: false
  public get movieFolderFormat() {
    return this.getStringAttribute('movie_folder_format');
  }

  // rename_movies - computed: true, optional: false, required: false
  public get renameMovies() {
    return this.getBooleanAttribute('rename_movies');
  }

  // replace_illegal_characters - computed: true, optional: false, required: false
  public get replaceIllegalCharacters() {
    return this.getBooleanAttribute('replace_illegal_characters');
  }

  // standard_movie_format - computed: true, optional: false, required: false
  public get standardMovieFormat() {
    return this.getStringAttribute('standard_movie_format');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
