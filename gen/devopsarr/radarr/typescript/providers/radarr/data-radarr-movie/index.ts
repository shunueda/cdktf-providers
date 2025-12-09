// https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/movie
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRadarrMovieConfig extends cdktf.TerraformMetaArguments {
  /**
  * TMDB ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/movie#tmdb_id DataRadarrMovie#tmdb_id}
  */
  readonly tmdbId: number;
}
export interface DataRadarrMovieOriginalLanguage {
}

export function dataRadarrMovieOriginalLanguageToTerraform(struct?: DataRadarrMovieOriginalLanguage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRadarrMovieOriginalLanguageToHclTerraform(struct?: DataRadarrMovieOriginalLanguage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRadarrMovieOriginalLanguageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRadarrMovieOriginalLanguage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRadarrMovieOriginalLanguage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/movie radarr_movie}
*/
export class DataRadarrMovie extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_movie";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRadarrMovie resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRadarrMovie to import
  * @param importFromId The id of the existing DataRadarrMovie that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/movie#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRadarrMovie to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_movie", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/movie radarr_movie} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRadarrMovieConfig
  */
  public constructor(scope: Construct, id: string, config: DataRadarrMovieConfig) {
    super(scope, id, {
      terraformResourceType: 'radarr_movie',
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

  // minimum_availability - computed: true, optional: false, required: false
  public get minimumAvailability() {
    return this.getStringAttribute('minimum_availability');
  }

  // monitored - computed: true, optional: false, required: false
  public get monitored() {
    return this.getBooleanAttribute('monitored');
  }

  // original_language - computed: true, optional: false, required: false
  private _originalLanguage = new DataRadarrMovieOriginalLanguageOutputReference(this, "original_language");
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

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // quality_profile_id - computed: true, optional: false, required: false
  public get qualityProfileId() {
    return this.getNumberAttribute('quality_profile_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tags')));
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
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
      tmdb_id: cdktf.numberToTerraform(this._tmdbId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
