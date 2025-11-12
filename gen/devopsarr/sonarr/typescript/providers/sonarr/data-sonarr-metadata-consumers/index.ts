// https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/metadata_consumers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSonarrMetadataConsumersConfig extends cdktf.TerraformMetaArguments {
}
export interface DataSonarrMetadataConsumersMetadataConsumers {
  /**
  * Episode images flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/metadata_consumers#episode_images DataSonarrMetadataConsumers#episode_images}
  */
  readonly episodeImages?: boolean | cdktf.IResolvable;
}

export function dataSonarrMetadataConsumersMetadataConsumersToTerraform(struct?: DataSonarrMetadataConsumersMetadataConsumers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    episode_images: cdktf.booleanToTerraform(struct!.episodeImages),
  }
}


export function dataSonarrMetadataConsumersMetadataConsumersToHclTerraform(struct?: DataSonarrMetadataConsumersMetadataConsumers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    episode_images: {
      value: cdktf.booleanToHclTerraform(struct!.episodeImages),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSonarrMetadataConsumersMetadataConsumersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSonarrMetadataConsumersMetadataConsumers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._episodeImages !== undefined) {
      hasAnyValues = true;
      internalValueResult.episodeImages = this._episodeImages;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSonarrMetadataConsumersMetadataConsumers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._episodeImages = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._episodeImages = value.episodeImages;
    }
  }

  // config_contract - computed: true, optional: false, required: false
  public get configContract() {
    return this.getStringAttribute('config_contract');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // episode_images - computed: true, optional: true, required: false
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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
}

export class DataSonarrMetadataConsumersMetadataConsumersList extends cdktf.ComplexList {
  public internalValue? : DataSonarrMetadataConsumersMetadataConsumers[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSonarrMetadataConsumersMetadataConsumersOutputReference {
    return new DataSonarrMetadataConsumersMetadataConsumersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/metadata_consumers sonarr_metadata_consumers}
*/
export class DataSonarrMetadataConsumers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarr_metadata_consumers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSonarrMetadataConsumers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSonarrMetadataConsumers to import
  * @param importFromId The id of the existing DataSonarrMetadataConsumers that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/metadata_consumers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSonarrMetadataConsumers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarr_metadata_consumers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/metadata_consumers sonarr_metadata_consumers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSonarrMetadataConsumersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSonarrMetadataConsumersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sonarr_metadata_consumers',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata_consumers - computed: true, optional: false, required: false
  private _metadataConsumers = new DataSonarrMetadataConsumersMetadataConsumersList(this, "metadata_consumers", true);
  public get metadataConsumers() {
    return this._metadataConsumers;
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
