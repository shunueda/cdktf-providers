// https://registry.terraform.io/providers/betterstackhq/logtail/0.7.2/docs/data-sources/warehouse_embedding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLogtailWarehouseEmbeddingConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the embedding to retrieve.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.2/docs/data-sources/warehouse_embedding#id DataLogtailWarehouseEmbedding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the warehouse source to filter embeddings by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.2/docs/data-sources/warehouse_embedding#source_id DataLogtailWarehouseEmbedding#source_id}
  */
  readonly sourceId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.2/docs/data-sources/warehouse_embedding logtail_warehouse_embedding}
*/
export class DataLogtailWarehouseEmbedding extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logtail_warehouse_embedding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLogtailWarehouseEmbedding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLogtailWarehouseEmbedding to import
  * @param importFromId The id of the existing DataLogtailWarehouseEmbedding that should be imported. Refer to the {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.2/docs/data-sources/warehouse_embedding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLogtailWarehouseEmbedding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logtail_warehouse_embedding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.2/docs/data-sources/warehouse_embedding logtail_warehouse_embedding} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLogtailWarehouseEmbeddingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataLogtailWarehouseEmbeddingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'logtail_warehouse_embedding',
      terraformGeneratorMetadata: {
        providerName: 'logtail',
        providerVersion: '0.7.2',
        providerVersionConstraint: '0.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._sourceId = config.sourceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dimension - computed: true, optional: false, required: false
  public get dimension() {
    return this.getNumberAttribute('dimension');
  }

  // embed_from - computed: true, optional: false, required: false
  public get embedFrom() {
    return this.getStringAttribute('embed_from');
  }

  // embed_to - computed: true, optional: false, required: false
  public get embedTo() {
    return this.getStringAttribute('embed_to');
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

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // source_id - computed: false, optional: true, required: false
  private _sourceId?: string; 
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }
  public set sourceId(value: string) {
    this._sourceId = value;
  }
  public resetSourceId() {
    this._sourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdInput() {
    return this._sourceId;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      source_id: cdktf.stringToTerraform(this._sourceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_id: {
        value: cdktf.stringToHclTerraform(this._sourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
