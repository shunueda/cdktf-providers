// https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/data-sources/collection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPineconeCollectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/data-sources/collection#name DataPineconeCollection#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/data-sources/collection pinecone_collection}
*/
export class DataPineconeCollection extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pinecone_collection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPineconeCollection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPineconeCollection to import
  * @param importFromId The id of the existing DataPineconeCollection that should be imported. Refer to the {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/data-sources/collection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPineconeCollection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pinecone_collection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/data-sources/collection pinecone_collection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPineconeCollectionConfig
  */
  public constructor(scope: Construct, id: string, config: DataPineconeCollectionConfig) {
    super(scope, id, {
      terraformResourceType: 'pinecone_collection',
      terraformGeneratorMetadata: {
        providerName: 'pinecone',
        providerVersion: '2.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dimension - computed: true, optional: false, required: false
  public get dimension() {
    return this.getNumberAttribute('dimension');
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.getStringAttribute('environment');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vector_count - computed: true, optional: false, required: false
  public get vectorCount() {
    return this.getNumberAttribute('vector_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
