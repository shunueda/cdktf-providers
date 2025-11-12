// https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/metadata
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSonarrMetadataConfig extends cdktf.TerraformMetaArguments {
  /**
  * Episode images flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/metadata#episode_images DataSonarrMetadata#episode_images}
  */
  readonly episodeImages?: boolean | cdktf.IResolvable;
  /**
  * Metadata name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/metadata#name DataSonarrMetadata#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/metadata sonarr_metadata}
*/
export class DataSonarrMetadata extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarr_metadata";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSonarrMetadata resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSonarrMetadata to import
  * @param importFromId The id of the existing DataSonarrMetadata that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/metadata#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSonarrMetadata to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarr_metadata", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/metadata sonarr_metadata} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSonarrMetadataConfig
  */
  public constructor(scope: Construct, id: string, config: DataSonarrMetadataConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarr_metadata',
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
    this._episodeImages = config.episodeImages;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_contract - computed: true, optional: false, required: false
  public get configContract() {
    return this.getStringAttribute('config_contract');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // episode_images - computed: false, optional: true, required: false
  private _episodeImages?: boolean | cdktf.IResolvable; 
  public get episodeImages() {
    return this.getBooleanAttribute('episode_images');
  }
  public set episodeImages(value: boolean | cdktf.IResolvable) {
    this._episodeImages = value;
  }
  public resetEpisodeImages() {
    this._episodeImages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get episodeImagesInput() {
    return this._episodeImages;
  }

  // episode_metadata - computed: true, optional: false, required: false
  public get episodeMetadata() {
    return this.getBooleanAttribute('episode_metadata');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // implementation - computed: true, optional: false, required: false
  public get implementation() {
    return this.getStringAttribute('implementation');
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

  // season_images - computed: true, optional: false, required: false
  public get seasonImages() {
    return this.getBooleanAttribute('season_images');
  }

  // series_images - computed: true, optional: false, required: false
  public get seriesImages() {
    return this.getBooleanAttribute('series_images');
  }

  // series_metadata - computed: true, optional: false, required: false
  public get seriesMetadata() {
    return this.getBooleanAttribute('series_metadata');
  }

  // series_metadata_url - computed: true, optional: false, required: false
  public get seriesMetadataUrl() {
    return this.getBooleanAttribute('series_metadata_url');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tags')));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      episode_images: cdktf.booleanToTerraform(this._episodeImages),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      episode_images: {
        value: cdktf.booleanToHclTerraform(this._episodeImages),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
