// https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/metadata
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetadataConfig extends cdktf.TerraformMetaArguments {
  /**
  * Add collection name flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/metadata#add_collection_name Metadata#add_collection_name}
  */
  readonly addCollectionName?: boolean | cdktf.IResolvable;
  /**
  * Metadata configuration template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/metadata#config_contract Metadata#config_contract}
  */
  readonly configContract: string;
  /**
  * Enable flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/metadata#enable Metadata#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Metadata implementation name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/metadata#implementation Metadata#implementation}
  */
  readonly implementation: string;
  /**
  * Movie images flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/metadata#movie_images Metadata#movie_images}
  */
  readonly movieImages?: boolean | cdktf.IResolvable;
  /**
  * Movie metadata flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/metadata#movie_metadata Metadata#movie_metadata}
  */
  readonly movieMetadata?: boolean | cdktf.IResolvable;
  /**
  * Movie metadata language.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/metadata#movie_metadata_language Metadata#movie_metadata_language}
  */
  readonly movieMetadataLanguage?: number;
  /**
  * Movie metadata URL flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/metadata#movie_metadata_url Metadata#movie_metadata_url}
  */
  readonly movieMetadataUrl?: boolean | cdktf.IResolvable;
  /**
  * Metadata name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/metadata#name Metadata#name}
  */
  readonly name: string;
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/metadata#tags Metadata#tags}
  */
  readonly tags?: number[];
  /**
  * Use movie nfo flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/metadata#use_movie_nfo Metadata#use_movie_nfo}
  */
  readonly useMovieNfo?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/metadata radarr_metadata}
*/
export class Metadata extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_metadata";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Metadata resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Metadata to import
  * @param importFromId The id of the existing Metadata that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/metadata#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Metadata to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_metadata", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/metadata radarr_metadata} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetadataConfig
  */
  public constructor(scope: Construct, id: string, config: MetadataConfig) {
    super(scope, id, {
      terraformResourceType: 'radarr_metadata',
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
    this._addCollectionName = config.addCollectionName;
    this._configContract = config.configContract;
    this._enable = config.enable;
    this._implementation = config.implementation;
    this._movieImages = config.movieImages;
    this._movieMetadata = config.movieMetadata;
    this._movieMetadataLanguage = config.movieMetadataLanguage;
    this._movieMetadataUrl = config.movieMetadataUrl;
    this._name = config.name;
    this._tags = config.tags;
    this._useMovieNfo = config.useMovieNfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_collection_name - computed: true, optional: true, required: false
  private _addCollectionName?: boolean | cdktf.IResolvable; 
  public get addCollectionName() {
    return this.getBooleanAttribute('add_collection_name');
  }
  public set addCollectionName(value: boolean | cdktf.IResolvable) {
    this._addCollectionName = value;
  }
  public resetAddCollectionName() {
    this._addCollectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addCollectionNameInput() {
    return this._addCollectionName;
  }

  // config_contract - computed: false, optional: false, required: true
  private _configContract?: string; 
  public get configContract() {
    return this.getStringAttribute('config_contract');
  }
  public set configContract(value: string) {
    this._configContract = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configContractInput() {
    return this._configContract;
  }

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

  // implementation - computed: false, optional: false, required: true
  private _implementation?: string; 
  public get implementation() {
    return this.getStringAttribute('implementation');
  }
  public set implementation(value: string) {
    this._implementation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get implementationInput() {
    return this._implementation;
  }

  // movie_images - computed: true, optional: true, required: false
  private _movieImages?: boolean | cdktf.IResolvable; 
  public get movieImages() {
    return this.getBooleanAttribute('movie_images');
  }
  public set movieImages(value: boolean | cdktf.IResolvable) {
    this._movieImages = value;
  }
  public resetMovieImages() {
    this._movieImages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get movieImagesInput() {
    return this._movieImages;
  }

  // movie_metadata - computed: true, optional: true, required: false
  private _movieMetadata?: boolean | cdktf.IResolvable; 
  public get movieMetadata() {
    return this.getBooleanAttribute('movie_metadata');
  }
  public set movieMetadata(value: boolean | cdktf.IResolvable) {
    this._movieMetadata = value;
  }
  public resetMovieMetadata() {
    this._movieMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get movieMetadataInput() {
    return this._movieMetadata;
  }

  // movie_metadata_language - computed: true, optional: true, required: false
  private _movieMetadataLanguage?: number; 
  public get movieMetadataLanguage() {
    return this.getNumberAttribute('movie_metadata_language');
  }
  public set movieMetadataLanguage(value: number) {
    this._movieMetadataLanguage = value;
  }
  public resetMovieMetadataLanguage() {
    this._movieMetadataLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get movieMetadataLanguageInput() {
    return this._movieMetadataLanguage;
  }

  // movie_metadata_url - computed: true, optional: true, required: false
  private _movieMetadataUrl?: boolean | cdktf.IResolvable; 
  public get movieMetadataUrl() {
    return this.getBooleanAttribute('movie_metadata_url');
  }
  public set movieMetadataUrl(value: boolean | cdktf.IResolvable) {
    this._movieMetadataUrl = value;
  }
  public resetMovieMetadataUrl() {
    this._movieMetadataUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get movieMetadataUrlInput() {
    return this._movieMetadataUrl;
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

  // use_movie_nfo - computed: true, optional: true, required: false
  private _useMovieNfo?: boolean | cdktf.IResolvable; 
  public get useMovieNfo() {
    return this.getBooleanAttribute('use_movie_nfo');
  }
  public set useMovieNfo(value: boolean | cdktf.IResolvable) {
    this._useMovieNfo = value;
  }
  public resetUseMovieNfo() {
    this._useMovieNfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMovieNfoInput() {
    return this._useMovieNfo;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_collection_name: cdktf.booleanToTerraform(this._addCollectionName),
      config_contract: cdktf.stringToTerraform(this._configContract),
      enable: cdktf.booleanToTerraform(this._enable),
      implementation: cdktf.stringToTerraform(this._implementation),
      movie_images: cdktf.booleanToTerraform(this._movieImages),
      movie_metadata: cdktf.booleanToTerraform(this._movieMetadata),
      movie_metadata_language: cdktf.numberToTerraform(this._movieMetadataLanguage),
      movie_metadata_url: cdktf.booleanToTerraform(this._movieMetadataUrl),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tags),
      use_movie_nfo: cdktf.booleanToTerraform(this._useMovieNfo),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_collection_name: {
        value: cdktf.booleanToHclTerraform(this._addCollectionName),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      config_contract: {
        value: cdktf.stringToHclTerraform(this._configContract),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable: {
        value: cdktf.booleanToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      implementation: {
        value: cdktf.stringToHclTerraform(this._implementation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      movie_metadata_language: {
        value: cdktf.numberToHclTerraform(this._movieMetadataLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      movie_metadata_url: {
        value: cdktf.booleanToHclTerraform(this._movieMetadataUrl),
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
      use_movie_nfo: {
        value: cdktf.booleanToHclTerraform(this._useMovieNfo),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
