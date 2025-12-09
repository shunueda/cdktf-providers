// https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/metadata_consumers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRadarrMetadataConsumersConfig extends cdktf.TerraformMetaArguments {
}
export interface DataRadarrMetadataConsumersMetadataConsumers {
}

export function dataRadarrMetadataConsumersMetadataConsumersToTerraform(struct?: DataRadarrMetadataConsumersMetadataConsumers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRadarrMetadataConsumersMetadataConsumersToHclTerraform(struct?: DataRadarrMetadataConsumersMetadataConsumers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRadarrMetadataConsumersMetadataConsumersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRadarrMetadataConsumersMetadataConsumers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRadarrMetadataConsumersMetadataConsumers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_collection_name - computed: true, optional: false, required: false
  public get addCollectionName() {
    return this.getBooleanAttribute('add_collection_name');
  }

  // config_contract - computed: true, optional: false, required: false
  public get configContract() {
    return this.getStringAttribute('config_contract');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // implementation - computed: true, optional: false, required: false
  public get implementation() {
    return this.getStringAttribute('implementation');
  }

  // movie_images - computed: true, optional: false, required: false
  public get movieImages() {
    return this.getBooleanAttribute('movie_images');
  }

  // movie_metadata - computed: true, optional: false, required: false
  public get movieMetadata() {
    return this.getBooleanAttribute('movie_metadata');
  }

  // movie_metadata_language - computed: true, optional: false, required: false
  public get movieMetadataLanguage() {
    return this.getNumberAttribute('movie_metadata_language');
  }

  // movie_metadata_url - computed: true, optional: false, required: false
  public get movieMetadataUrl() {
    return this.getBooleanAttribute('movie_metadata_url');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tags')));
  }

  // use_movie_nfo - computed: true, optional: false, required: false
  public get useMovieNfo() {
    return this.getBooleanAttribute('use_movie_nfo');
  }
}

export class DataRadarrMetadataConsumersMetadataConsumersList extends cdktf.ComplexList {

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
  public get(index: number): DataRadarrMetadataConsumersMetadataConsumersOutputReference {
    return new DataRadarrMetadataConsumersMetadataConsumersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/metadata_consumers radarr_metadata_consumers}
*/
export class DataRadarrMetadataConsumers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_metadata_consumers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRadarrMetadataConsumers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRadarrMetadataConsumers to import
  * @param importFromId The id of the existing DataRadarrMetadataConsumers that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/metadata_consumers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRadarrMetadataConsumers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_metadata_consumers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/metadata_consumers radarr_metadata_consumers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRadarrMetadataConsumersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRadarrMetadataConsumersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'radarr_metadata_consumers',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata_consumers - computed: true, optional: false, required: false
  private _metadataConsumers = new DataRadarrMetadataConsumersMetadataConsumersList(this, "metadata_consumers", true);
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
