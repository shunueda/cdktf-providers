// https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/naming
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NamingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Anime episode format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/naming#anime_episode_format Naming#anime_episode_format}
  */
  readonly animeEpisodeFormat: string;
  /**
  * Colon replacement format. 0 - 'Delete' 1 - 'Replace with Dash' 2 - 'Replace with Space Dash' 3 - 'Replace with Space Dash Space' 4 - 'Smart Replace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/naming#colon_replacement_format Naming#colon_replacement_format}
  */
  readonly colonReplacementFormat: number;
  /**
  * Daily episode format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/naming#daily_episode_format Naming#daily_episode_format}
  */
  readonly dailyEpisodeFormat: string;
  /**
  * Multi episode style. 0 - 'Extend' 1 - 'Duplicate' 2 - 'Repeat' 3 - 'Scene' 4 - 'Range' 5 - 'Prefixed Range'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/naming#multi_episode_style Naming#multi_episode_style}
  */
  readonly multiEpisodeStyle: number;
  /**
  * Sonarr will use the existing file name if false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/naming#rename_episodes Naming#rename_episodes}
  */
  readonly renameEpisodes: boolean | cdktf.IResolvable;
  /**
  * Replace illegal characters. They will be removed if false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/naming#replace_illegal_characters Naming#replace_illegal_characters}
  */
  readonly replaceIllegalCharacters: boolean | cdktf.IResolvable;
  /**
  * Season folder format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/naming#season_folder_format Naming#season_folder_format}
  */
  readonly seasonFolderFormat: string;
  /**
  * Series folder format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/naming#series_folder_format Naming#series_folder_format}
  */
  readonly seriesFolderFormat: string;
  /**
  * Special folder format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/naming#specials_folder_format Naming#specials_folder_format}
  */
  readonly specialsFolderFormat: string;
  /**
  * Standard episode formatss.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/naming#standard_episode_format Naming#standard_episode_format}
  */
  readonly standardEpisodeFormat: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/naming sonarr_naming}
*/
export class Naming extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarr_naming";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Naming resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Naming to import
  * @param importFromId The id of the existing Naming that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/naming#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Naming to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarr_naming", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/naming sonarr_naming} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NamingConfig
  */
  public constructor(scope: Construct, id: string, config: NamingConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarr_naming',
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
    this._animeEpisodeFormat = config.animeEpisodeFormat;
    this._colonReplacementFormat = config.colonReplacementFormat;
    this._dailyEpisodeFormat = config.dailyEpisodeFormat;
    this._multiEpisodeStyle = config.multiEpisodeStyle;
    this._renameEpisodes = config.renameEpisodes;
    this._replaceIllegalCharacters = config.replaceIllegalCharacters;
    this._seasonFolderFormat = config.seasonFolderFormat;
    this._seriesFolderFormat = config.seriesFolderFormat;
    this._specialsFolderFormat = config.specialsFolderFormat;
    this._standardEpisodeFormat = config.standardEpisodeFormat;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anime_episode_format - computed: false, optional: false, required: true
  private _animeEpisodeFormat?: string; 
  public get animeEpisodeFormat() {
    return this.getStringAttribute('anime_episode_format');
  }
  public set animeEpisodeFormat(value: string) {
    this._animeEpisodeFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get animeEpisodeFormatInput() {
    return this._animeEpisodeFormat;
  }

  // colon_replacement_format - computed: false, optional: false, required: true
  private _colonReplacementFormat?: number; 
  public get colonReplacementFormat() {
    return this.getNumberAttribute('colon_replacement_format');
  }
  public set colonReplacementFormat(value: number) {
    this._colonReplacementFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get colonReplacementFormatInput() {
    return this._colonReplacementFormat;
  }

  // daily_episode_format - computed: false, optional: false, required: true
  private _dailyEpisodeFormat?: string; 
  public get dailyEpisodeFormat() {
    return this.getStringAttribute('daily_episode_format');
  }
  public set dailyEpisodeFormat(value: string) {
    this._dailyEpisodeFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyEpisodeFormatInput() {
    return this._dailyEpisodeFormat;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // multi_episode_style - computed: false, optional: false, required: true
  private _multiEpisodeStyle?: number; 
  public get multiEpisodeStyle() {
    return this.getNumberAttribute('multi_episode_style');
  }
  public set multiEpisodeStyle(value: number) {
    this._multiEpisodeStyle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get multiEpisodeStyleInput() {
    return this._multiEpisodeStyle;
  }

  // rename_episodes - computed: false, optional: false, required: true
  private _renameEpisodes?: boolean | cdktf.IResolvable; 
  public get renameEpisodes() {
    return this.getBooleanAttribute('rename_episodes');
  }
  public set renameEpisodes(value: boolean | cdktf.IResolvable) {
    this._renameEpisodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get renameEpisodesInput() {
    return this._renameEpisodes;
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

  // season_folder_format - computed: false, optional: false, required: true
  private _seasonFolderFormat?: string; 
  public get seasonFolderFormat() {
    return this.getStringAttribute('season_folder_format');
  }
  public set seasonFolderFormat(value: string) {
    this._seasonFolderFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get seasonFolderFormatInput() {
    return this._seasonFolderFormat;
  }

  // series_folder_format - computed: false, optional: false, required: true
  private _seriesFolderFormat?: string; 
  public get seriesFolderFormat() {
    return this.getStringAttribute('series_folder_format');
  }
  public set seriesFolderFormat(value: string) {
    this._seriesFolderFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesFolderFormatInput() {
    return this._seriesFolderFormat;
  }

  // specials_folder_format - computed: false, optional: false, required: true
  private _specialsFolderFormat?: string; 
  public get specialsFolderFormat() {
    return this.getStringAttribute('specials_folder_format');
  }
  public set specialsFolderFormat(value: string) {
    this._specialsFolderFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specialsFolderFormatInput() {
    return this._specialsFolderFormat;
  }

  // standard_episode_format - computed: false, optional: false, required: true
  private _standardEpisodeFormat?: string; 
  public get standardEpisodeFormat() {
    return this.getStringAttribute('standard_episode_format');
  }
  public set standardEpisodeFormat(value: string) {
    this._standardEpisodeFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get standardEpisodeFormatInput() {
    return this._standardEpisodeFormat;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anime_episode_format: cdktf.stringToTerraform(this._animeEpisodeFormat),
      colon_replacement_format: cdktf.numberToTerraform(this._colonReplacementFormat),
      daily_episode_format: cdktf.stringToTerraform(this._dailyEpisodeFormat),
      multi_episode_style: cdktf.numberToTerraform(this._multiEpisodeStyle),
      rename_episodes: cdktf.booleanToTerraform(this._renameEpisodes),
      replace_illegal_characters: cdktf.booleanToTerraform(this._replaceIllegalCharacters),
      season_folder_format: cdktf.stringToTerraform(this._seasonFolderFormat),
      series_folder_format: cdktf.stringToTerraform(this._seriesFolderFormat),
      specials_folder_format: cdktf.stringToTerraform(this._specialsFolderFormat),
      standard_episode_format: cdktf.stringToTerraform(this._standardEpisodeFormat),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anime_episode_format: {
        value: cdktf.stringToHclTerraform(this._animeEpisodeFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      colon_replacement_format: {
        value: cdktf.numberToHclTerraform(this._colonReplacementFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      daily_episode_format: {
        value: cdktf.stringToHclTerraform(this._dailyEpisodeFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_episode_style: {
        value: cdktf.numberToHclTerraform(this._multiEpisodeStyle),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rename_episodes: {
        value: cdktf.booleanToHclTerraform(this._renameEpisodes),
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
      season_folder_format: {
        value: cdktf.stringToHclTerraform(this._seasonFolderFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      series_folder_format: {
        value: cdktf.stringToHclTerraform(this._seriesFolderFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      specials_folder_format: {
        value: cdktf.stringToHclTerraform(this._specialsFolderFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      standard_episode_format: {
        value: cdktf.stringToHclTerraform(this._standardEpisodeFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
