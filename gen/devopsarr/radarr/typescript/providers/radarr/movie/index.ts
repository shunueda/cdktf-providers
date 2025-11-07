// https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/movie
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MovieConfig extends cdktf.TerraformMetaArguments {
  /**
  * Minimum availability.
  * Allowed values: 'tba', 'announced', 'inCinemas', 'released', 'deleted'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/movie#minimum_availability Movie#minimum_availability}
  */
  readonly minimumAvailability?: string;
  /**
  * Monitored flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/movie#monitored Movie#monitored}
  */
  readonly monitored: boolean | cdktf.IResolvable;
  /**
  * Full movie path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/movie#path Movie#path}
  */
  readonly path: string;
  /**
  * Quality profile ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/movie#quality_profile_id Movie#quality_profile_id}
  */
  readonly qualityProfileId: number;
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/movie#tags Movie#tags}
  */
  readonly tags?: number[];
  /**
  * Movie title.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/movie#title Movie#title}
  */
  readonly title: string;
  /**
  * TMDB ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/movie#tmdb_id Movie#tmdb_id}
  */
  readonly tmdbId: number;
}
export interface MovieOriginalLanguage {
  /**
  * ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/movie#id Movie#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/movie#name Movie#name}
  */
  readonly name?: string;
}

export function movieOriginalLanguageToTerraform(struct?: MovieOriginalLanguage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function movieOriginalLanguageToHclTerraform(struct?: MovieOriginalLanguage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MovieOriginalLanguageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MovieOriginalLanguage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MovieOriginalLanguage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/movie radarr_movie}
*/
export class Movie extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_movie";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Movie resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Movie to import
  * @param importFromId The id of the existing Movie that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/movie#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Movie to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_movie", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/movie radarr_movie} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MovieConfig
  */
  public constructor(scope: Construct, id: string, config: MovieConfig) {
    super(scope, id, {
      terraformResourceType: 'radarr_movie',
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
    this._minimumAvailability = config.minimumAvailability;
    this._monitored = config.monitored;
    this._path = config.path;
    this._qualityProfileId = config.qualityProfileId;
    this._tags = config.tags;
    this._title = config.title;
    this._tmdbId = config.tmdbId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // genres - computed: true, optional: false, required: false
  public get genres() {
    return cdktf.Fn.tolist(this.getListAttribute('genres'));
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // imdb_id - computed: true, optional: false, required: false
  public get imdbId() {
    return this.getStringAttribute('imdb_id');
  }

  // is_available - computed: true, optional: false, required: false
  public get isAvailable() {
    return this.getBooleanAttribute('is_available');
  }

  // minimum_availability - computed: true, optional: true, required: false
  private _minimumAvailability?: string; 
  public get minimumAvailability() {
    return this.getStringAttribute('minimum_availability');
  }
  public set minimumAvailability(value: string) {
    this._minimumAvailability = value;
  }
  public resetMinimumAvailability() {
    this._minimumAvailability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumAvailabilityInput() {
    return this._minimumAvailability;
  }

  // monitored - computed: false, optional: false, required: true
  private _monitored?: boolean | cdktf.IResolvable; 
  public get monitored() {
    return this.getBooleanAttribute('monitored');
  }
  public set monitored(value: boolean | cdktf.IResolvable) {
    this._monitored = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredInput() {
    return this._monitored;
  }

  // original_language - computed: true, optional: false, required: false
  private _originalLanguage = new MovieOriginalLanguageOutputReference(this, "original_language");
  public get originalLanguage() {
    return this._originalLanguage;
  }

  // original_title - computed: true, optional: false, required: false
  public get originalTitle() {
    return this.getStringAttribute('original_title');
  }

  // overview - computed: true, optional: false, required: false
  public get overview() {
    return this.getStringAttribute('overview');
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // quality_profile_id - computed: false, optional: false, required: true
  private _qualityProfileId?: number; 
  public get qualityProfileId() {
    return this.getNumberAttribute('quality_profile_id');
  }
  public set qualityProfileId(value: number) {
    this._qualityProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get qualityProfileIdInput() {
    return this._qualityProfileId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
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

  // website - computed: true, optional: false, required: false
  public get website() {
    return this.getStringAttribute('website');
  }

  // year - computed: true, optional: false, required: false
  public get year() {
    return this.getNumberAttribute('year');
  }

  // youtube_trailer_id - computed: true, optional: false, required: false
  public get youtubeTrailerId() {
    return this.getStringAttribute('youtube_trailer_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      minimum_availability: cdktf.stringToTerraform(this._minimumAvailability),
      monitored: cdktf.booleanToTerraform(this._monitored),
      path: cdktf.stringToTerraform(this._path),
      quality_profile_id: cdktf.numberToTerraform(this._qualityProfileId),
      tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tags),
      title: cdktf.stringToTerraform(this._title),
      tmdb_id: cdktf.numberToTerraform(this._tmdbId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      minimum_availability: {
        value: cdktf.stringToHclTerraform(this._minimumAvailability),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitored: {
        value: cdktf.booleanToHclTerraform(this._monitored),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quality_profile_id: {
        value: cdktf.numberToHclTerraform(this._qualityProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
