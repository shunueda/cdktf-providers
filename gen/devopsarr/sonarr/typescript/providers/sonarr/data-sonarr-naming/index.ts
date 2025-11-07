// https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/naming
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSonarrNamingConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/naming sonarr_naming}
*/
export class DataSonarrNaming extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarr_naming";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSonarrNaming resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSonarrNaming to import
  * @param importFromId The id of the existing DataSonarrNaming that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/naming#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSonarrNaming to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarr_naming", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/naming sonarr_naming} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSonarrNamingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSonarrNamingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sonarr_naming',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anime_episode_format - computed: true, optional: false, required: false
  public get animeEpisodeFormat() {
    return this.getStringAttribute('anime_episode_format');
  }

  // colon_replacement_format - computed: true, optional: false, required: false
  public get colonReplacementFormat() {
    return this.getNumberAttribute('colon_replacement_format');
  }

  // daily_episode_format - computed: true, optional: false, required: false
  public get dailyEpisodeFormat() {
    return this.getStringAttribute('daily_episode_format');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // multi_episode_style - computed: true, optional: false, required: false
  public get multiEpisodeStyle() {
    return this.getNumberAttribute('multi_episode_style');
  }

  // rename_episodes - computed: true, optional: false, required: false
  public get renameEpisodes() {
    return this.getBooleanAttribute('rename_episodes');
  }

  // replace_illegal_characters - computed: true, optional: false, required: false
  public get replaceIllegalCharacters() {
    return this.getBooleanAttribute('replace_illegal_characters');
  }

  // season_folder_format - computed: true, optional: false, required: false
  public get seasonFolderFormat() {
    return this.getStringAttribute('season_folder_format');
  }

  // series_folder_format - computed: true, optional: false, required: false
  public get seriesFolderFormat() {
    return this.getStringAttribute('series_folder_format');
  }

  // specials_folder_format - computed: true, optional: false, required: false
  public get specialsFolderFormat() {
    return this.getStringAttribute('specials_folder_format');
  }

  // standard_episode_format - computed: true, optional: false, required: false
  public get standardEpisodeFormat() {
    return this.getStringAttribute('standard_episode_format');
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
