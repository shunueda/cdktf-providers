// https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/metadata_wdtv
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetadataWdtvConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/metadata_wdtv#enable MetadataWdtv#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Movie images flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/metadata_wdtv#movie_images MetadataWdtv#movie_images}
  */
  readonly movieImages: boolean | cdktf.IResolvable;
  /**
  * Movie metadata flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/metadata_wdtv#movie_metadata MetadataWdtv#movie_metadata}
  */
  readonly movieMetadata: boolean | cdktf.IResolvable;
  /**
  * Metadata name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/metadata_wdtv#name MetadataWdtv#name}
  */
  readonly name: string;
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/metadata_wdtv#tags MetadataWdtv#tags}
  */
  readonly tags?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/metadata_wdtv radarr_metadata_wdtv}
*/
export class MetadataWdtv extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_metadata_wdtv";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MetadataWdtv resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MetadataWdtv to import
  * @param importFromId The id of the existing MetadataWdtv that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/metadata_wdtv#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MetadataWdtv to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_metadata_wdtv", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/metadata_wdtv radarr_metadata_wdtv} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetadataWdtvConfig
  */
  public constructor(scope: Construct, id: string, config: MetadataWdtvConfig) {
    super(scope, id, {
      terraformResourceType: 'radarr_metadata_wdtv',
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
    this._enable = config.enable;
    this._movieImages = config.movieImages;
    this._movieMetadata = config.movieMetadata;
    this._name = config.name;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // movie_images - computed: false, optional: false, required: true
  private _movieImages?: boolean | cdktf.IResolvable; 
  public get movieImages() {
    return this.getBooleanAttribute('movie_images');
  }
  public set movieImages(value: boolean | cdktf.IResolvable) {
    this._movieImages = value;
  }
  // Temporarily expose input value. Use with caution.
  public get movieImagesInput() {
    return this._movieImages;
  }

  // movie_metadata - computed: false, optional: false, required: true
  private _movieMetadata?: boolean | cdktf.IResolvable; 
  public get movieMetadata() {
    return this.getBooleanAttribute('movie_metadata');
  }
  public set movieMetadata(value: boolean | cdktf.IResolvable) {
    this._movieMetadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get movieMetadataInput() {
    return this._movieMetadata;
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
      movie_images: cdktf.booleanToTerraform(this._movieImages),
      movie_metadata: cdktf.booleanToTerraform(this._movieMetadata),
      name: cdktf.stringToTerraform(this._name),
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
      movie_images: {
        value: cdktf.booleanToHclTerraform(this._movieImages),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      movie_metadata: {
        value: cdktf.booleanToHclTerraform(this._movieMetadata),
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
