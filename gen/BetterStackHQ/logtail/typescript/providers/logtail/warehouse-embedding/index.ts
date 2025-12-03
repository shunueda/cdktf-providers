// https://registry.terraform.io/providers/betterstackhq/logtail/0.7.3/docs/resources/warehouse_embedding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WarehouseEmbeddingConfig extends cdktf.TerraformMetaArguments {
  /**
  * The vector dimension of the embeddings to generate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.3/docs/resources/warehouse_embedding#dimension WarehouseEmbedding#dimension}
  */
  readonly dimension: number;
  /**
  * The source column name containing the text to embed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.3/docs/resources/warehouse_embedding#embed_from WarehouseEmbedding#embed_from}
  */
  readonly embedFrom: string;
  /**
  * The target column name where the generated embeddings will be stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.3/docs/resources/warehouse_embedding#embed_to WarehouseEmbedding#embed_to}
  */
  readonly embedTo: string;
  /**
  * The name of the embedding model to use (e.g., `embeddinggemma:300m`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.3/docs/resources/warehouse_embedding#model WarehouseEmbedding#model}
  */
  readonly model: string;
  /**
  * The ID of the Warehouse source to create the embedding for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.3/docs/resources/warehouse_embedding#source_id WarehouseEmbedding#source_id}
  */
  readonly sourceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.3/docs/resources/warehouse_embedding logtail_warehouse_embedding}
*/
export class WarehouseEmbedding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logtail_warehouse_embedding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WarehouseEmbedding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WarehouseEmbedding to import
  * @param importFromId The id of the existing WarehouseEmbedding that should be imported. Refer to the {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.3/docs/resources/warehouse_embedding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WarehouseEmbedding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logtail_warehouse_embedding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.3/docs/resources/warehouse_embedding logtail_warehouse_embedding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WarehouseEmbeddingConfig
  */
  public constructor(scope: Construct, id: string, config: WarehouseEmbeddingConfig) {
    super(scope, id, {
      terraformResourceType: 'logtail_warehouse_embedding',
      terraformGeneratorMetadata: {
        providerName: 'logtail',
        providerVersion: '0.7.3',
        providerVersionConstraint: '0.7.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dimension = config.dimension;
    this._embedFrom = config.embedFrom;
    this._embedTo = config.embedTo;
    this._model = config.model;
    this._sourceId = config.sourceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dimension - computed: false, optional: false, required: true
  private _dimension?: number; 
  public get dimension() {
    return this.getNumberAttribute('dimension');
  }
  public set dimension(value: number) {
    this._dimension = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension;
  }

  // embed_from - computed: false, optional: false, required: true
  private _embedFrom?: string; 
  public get embedFrom() {
    return this.getStringAttribute('embed_from');
  }
  public set embedFrom(value: string) {
    this._embedFrom = value;
  }
  // Temporarily expose input value. Use with caution.
  public get embedFromInput() {
    return this._embedFrom;
  }

  // embed_to - computed: false, optional: false, required: true
  private _embedTo?: string; 
  public get embedTo() {
    return this.getStringAttribute('embed_to');
  }
  public set embedTo(value: string) {
    this._embedTo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get embedToInput() {
    return this._embedTo;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // model - computed: false, optional: false, required: true
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // source_id - computed: false, optional: false, required: true
  private _sourceId?: string; 
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }
  public set sourceId(value: string) {
    this._sourceId = value;
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
      dimension: cdktf.numberToTerraform(this._dimension),
      embed_from: cdktf.stringToTerraform(this._embedFrom),
      embed_to: cdktf.stringToTerraform(this._embedTo),
      model: cdktf.stringToTerraform(this._model),
      source_id: cdktf.stringToTerraform(this._sourceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dimension: {
        value: cdktf.numberToHclTerraform(this._dimension),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      embed_from: {
        value: cdktf.stringToHclTerraform(this._embedFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      embed_to: {
        value: cdktf.stringToHclTerraform(this._embedTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model: {
        value: cdktf.stringToHclTerraform(this._model),
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
