// https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/metadata_roksbox
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetadataRoksboxConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/metadata_roksbox#enable MetadataRoksbox#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Episode images flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/metadata_roksbox#episode_images MetadataRoksbox#episode_images}
  */
  readonly episodeImages: boolean | cdktf.IResolvable;
  /**
  * Episode metadata flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/metadata_roksbox#episode_metadata MetadataRoksbox#episode_metadata}
  */
  readonly episodeMetadata: boolean | cdktf.IResolvable;
  /**
  * Metadata name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/metadata_roksbox#name MetadataRoksbox#name}
  */
  readonly name: string;
  /**
  * Season images flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/metadata_roksbox#season_images MetadataRoksbox#season_images}
  */
  readonly seasonImages: boolean | cdktf.IResolvable;
  /**
  * Series images flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/metadata_roksbox#series_images MetadataRoksbox#series_images}
  */
  readonly seriesImages: boolean | cdktf.IResolvable;
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/metadata_roksbox#tags MetadataRoksbox#tags}
  */
  readonly tags?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/metadata_roksbox sonarr_metadata_roksbox}
*/
export class MetadataRoksbox extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarr_metadata_roksbox";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MetadataRoksbox resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MetadataRoksbox to import
  * @param importFromId The id of the existing MetadataRoksbox that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/metadata_roksbox#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MetadataRoksbox to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarr_metadata_roksbox", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/metadata_roksbox sonarr_metadata_roksbox} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetadataRoksboxConfig
  */
  public constructor(scope: Construct, id: string, config: MetadataRoksboxConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarr_metadata_roksbox',
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
    this._enable = config.enable;
    this._episodeImages = config.episodeImages;
    this._episodeMetadata = config.episodeMetadata;
    this._name = config.name;
    this._seasonImages = config.seasonImages;
    this._seriesImages = config.seriesImages;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // episode_images - computed: false, optional: false, required: true
  private _episodeImages?: boolean | cdktf.IResolvable; 
  public get episodeImages() {
    return this.getBooleanAttribute('episode_images');
  }
  public set episodeImages(value: boolean | cdktf.IResolvable) {
    this._episodeImages = value;
  }
  // Temporarily expose input value. Use with caution.
  public get episodeImagesInput() {
    return this._episodeImages;
  }

  // episode_metadata - computed: false, optional: false, required: true
  private _episodeMetadata?: boolean | cdktf.IResolvable; 
  public get episodeMetadata() {
    return this.getBooleanAttribute('episode_metadata');
  }
  public set episodeMetadata(value: boolean | cdktf.IResolvable) {
    this._episodeMetadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get episodeMetadataInput() {
    return this._episodeMetadata;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // season_images - computed: false, optional: false, required: true
  private _seasonImages?: boolean | cdktf.IResolvable; 
  public get seasonImages() {
    return this.getBooleanAttribute('season_images');
  }
  public set seasonImages(value: boolean | cdktf.IResolvable) {
    this._seasonImages = value;
  }
  // Temporarily expose input value. Use with caution.
  public get seasonImagesInput() {
    return this._seasonImages;
  }

  // series_images - computed: false, optional: false, required: true
  private _seriesImages?: boolean | cdktf.IResolvable; 
  public get seriesImages() {
    return this.getBooleanAttribute('series_images');
  }
  public set seriesImages(value: boolean | cdktf.IResolvable) {
    this._seriesImages = value;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesImagesInput() {
    return this._seriesImages;
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
      enable: cdktf.booleanToTerraform(this._enable),
      episode_images: cdktf.booleanToTerraform(this._episodeImages),
      episode_metadata: cdktf.booleanToTerraform(this._episodeMetadata),
      name: cdktf.stringToTerraform(this._name),
      season_images: cdktf.booleanToTerraform(this._seasonImages),
      series_images: cdktf.booleanToTerraform(this._seriesImages),
      tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tags),
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
      episode_images: {
        value: cdktf.booleanToHclTerraform(this._episodeImages),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      episode_metadata: {
        value: cdktf.booleanToHclTerraform(this._episodeMetadata),
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
      season_images: {
        value: cdktf.booleanToHclTerraform(this._seasonImages),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      series_images: {
        value: cdktf.booleanToHclTerraform(this._seriesImages),
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
