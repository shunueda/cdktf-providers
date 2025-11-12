// https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/naming
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NamingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Change how Radarr handles colon replacement. Valid values are: 'smart', 'delete', 'dash', 'spaceDash', and 'spaceDashSpace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/naming#colon_replacement_format Naming#colon_replacement_format}
  */
  readonly colonReplacementFormat: string;
  /**
  * Movie folder format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/naming#movie_folder_format Naming#movie_folder_format}
  */
  readonly movieFolderFormat: string;
  /**
  * Radarr will use the existing file name if false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/naming#rename_movies Naming#rename_movies}
  */
  readonly renameMovies: boolean | cdktf.IResolvable;
  /**
  * Replace illegal characters. They will be removed if false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/naming#replace_illegal_characters Naming#replace_illegal_characters}
  */
  readonly replaceIllegalCharacters: boolean | cdktf.IResolvable;
  /**
  * Standard movie formatss.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/naming#standard_movie_format Naming#standard_movie_format}
  */
  readonly standardMovieFormat: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/naming radarr_naming}
*/
export class Naming extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_naming";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Naming resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Naming to import
  * @param importFromId The id of the existing Naming that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/naming#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Naming to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_naming", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/naming radarr_naming} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NamingConfig
  */
  public constructor(scope: Construct, id: string, config: NamingConfig) {
    super(scope, id, {
      terraformResourceType: 'radarr_naming',
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
    this._colonReplacementFormat = config.colonReplacementFormat;
    this._movieFolderFormat = config.movieFolderFormat;
    this._renameMovies = config.renameMovies;
    this._replaceIllegalCharacters = config.replaceIllegalCharacters;
    this._standardMovieFormat = config.standardMovieFormat;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // colon_replacement_format - computed: false, optional: false, required: true
  private _colonReplacementFormat?: string; 
  public get colonReplacementFormat() {
    return this.getStringAttribute('colon_replacement_format');
  }
  public set colonReplacementFormat(value: string) {
    this._colonReplacementFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get colonReplacementFormatInput() {
    return this._colonReplacementFormat;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // movie_folder_format - computed: false, optional: false, required: true
  private _movieFolderFormat?: string; 
  public get movieFolderFormat() {
    return this.getStringAttribute('movie_folder_format');
  }
  public set movieFolderFormat(value: string) {
    this._movieFolderFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get movieFolderFormatInput() {
    return this._movieFolderFormat;
  }

  // rename_movies - computed: false, optional: false, required: true
  private _renameMovies?: boolean | cdktf.IResolvable; 
  public get renameMovies() {
    return this.getBooleanAttribute('rename_movies');
  }
  public set renameMovies(value: boolean | cdktf.IResolvable) {
    this._renameMovies = value;
  }
  // Temporarily expose input value. Use with caution.
  public get renameMoviesInput() {
    return this._renameMovies;
  }

  // replace_illegal_characters - computed: false, optional: false, required: true
  private _replaceIllegalCharacters?: boolean | cdktf.IResolvable; 
  public get replaceIllegalCharacters() {
    return this.getBooleanAttribute('replace_illegal_characters');
  }
  public set replaceIllegalCharacters(value: boolean | cdktf.IResolvable) {
    this._replaceIllegalCharacters = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceIllegalCharactersInput() {
    return this._replaceIllegalCharacters;
  }

  // standard_movie_format - computed: false, optional: false, required: true
  private _standardMovieFormat?: string; 
  public get standardMovieFormat() {
    return this.getStringAttribute('standard_movie_format');
  }
  public set standardMovieFormat(value: string) {
    this._standardMovieFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get standardMovieFormatInput() {
    return this._standardMovieFormat;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      colon_replacement_format: cdktf.stringToTerraform(this._colonReplacementFormat),
      movie_folder_format: cdktf.stringToTerraform(this._movieFolderFormat),
      rename_movies: cdktf.booleanToTerraform(this._renameMovies),
      replace_illegal_characters: cdktf.booleanToTerraform(this._replaceIllegalCharacters),
      standard_movie_format: cdktf.stringToTerraform(this._standardMovieFormat),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      colon_replacement_format: {
        value: cdktf.stringToHclTerraform(this._colonReplacementFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      movie_folder_format: {
        value: cdktf.stringToHclTerraform(this._movieFolderFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rename_movies: {
        value: cdktf.booleanToHclTerraform(this._renameMovies),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      replace_illegal_characters: {
        value: cdktf.booleanToHclTerraform(this._replaceIllegalCharacters),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      standard_movie_format: {
        value: cdktf.stringToHclTerraform(this._standardMovieFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
