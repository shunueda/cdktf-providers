// https://registry.terraform.io/providers/stackexchange/stackoverflow/1.0.5/docs/data-sources/collection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataStackoverflowCollectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The identifier for the collection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackexchange/stackoverflow/1.0.5/docs/data-sources/collection#collection_id DataStackoverflowCollection#collection_id}
  */
  readonly collectionId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackexchange/stackoverflow/1.0.5/docs/data-sources/collection#id DataStackoverflowCollection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackexchange/stackoverflow/1.0.5/docs/data-sources/collection stackoverflow_collection}
*/
export class DataStackoverflowCollection extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackoverflow_collection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataStackoverflowCollection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataStackoverflowCollection to import
  * @param importFromId The id of the existing DataStackoverflowCollection that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackexchange/stackoverflow/1.0.5/docs/data-sources/collection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataStackoverflowCollection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackoverflow_collection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackexchange/stackoverflow/1.0.5/docs/data-sources/collection stackoverflow_collection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataStackoverflowCollectionConfig
  */
  public constructor(scope: Construct, id: string, config: DataStackoverflowCollectionConfig) {
    super(scope, id, {
      terraformResourceType: 'stackoverflow_collection',
      terraformGeneratorMetadata: {
        providerName: 'stackoverflow',
        providerVersion: '1.0.5',
        providerVersionConstraint: '1.0.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._collectionId = config.collectionId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collection_id - computed: false, optional: false, required: true
  private _collectionId?: number; 
  public get collectionId() {
    return this.getNumberAttribute('collection_id');
  }
  public set collectionId(value: number) {
    this._collectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionIdInput() {
    return this._collectionId;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      collection_id: cdktf.numberToTerraform(this._collectionId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      collection_id: {
        value: cdktf.numberToHclTerraform(this._collectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
