// https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/data-sources/collections
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPineconeCollectionsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataPineconeCollectionsCollections {
  /**
  * The dimension of the vectors stored in each record held in the collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/data-sources/collections#dimension DataPineconeCollections#dimension}
  */
  readonly dimension?: number;
  /**
  * The name of the collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/data-sources/collections#name DataPineconeCollections#name}
  */
  readonly name: string;
  /**
  * The number of records stored in the collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/data-sources/collections#vector_count DataPineconeCollections#vector_count}
  */
  readonly vectorCount?: number;
}

export function dataPineconeCollectionsCollectionsToTerraform(struct?: DataPineconeCollectionsCollections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.numberToTerraform(struct!.dimension),
    name: cdktf.stringToTerraform(struct!.name),
    vector_count: cdktf.numberToTerraform(struct!.vectorCount),
  }
}


export function dataPineconeCollectionsCollectionsToHclTerraform(struct?: DataPineconeCollectionsCollections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.numberToHclTerraform(struct!.dimension),
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
    vector_count: {
      value: cdktf.numberToHclTerraform(struct!.vectorCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPineconeCollectionsCollectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPineconeCollectionsCollections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vectorCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorCount = this._vectorCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPineconeCollectionsCollections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dimension = undefined;
      this._name = undefined;
      this._vectorCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dimension = value.dimension;
      this._name = value.name;
      this._vectorCount = value.vectorCount;
    }
  }

  // dimension - computed: true, optional: true, required: false
  private _dimension?: number; 
  public get dimension() {
    return this.getNumberAttribute('dimension');
  }
  public set dimension(value: number) {
    this._dimension = value;
  }
  public resetDimension() {
    this._dimension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension;
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.getStringAttribute('environment');
  }

  // name - computed: true, optional: false, required: true
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

  // vector_count - computed: true, optional: true, required: false
  private _vectorCount?: number; 
  public get vectorCount() {
    return this.getNumberAttribute('vector_count');
  }
  public set vectorCount(value: number) {
    this._vectorCount = value;
  }
  public resetVectorCount() {
    this._vectorCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorCountInput() {
    return this._vectorCount;
  }
}

export class DataPineconeCollectionsCollectionsList extends cdktf.ComplexList {
  public internalValue? : DataPineconeCollectionsCollections[] | cdktf.IResolvable

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
  public get(index: number): DataPineconeCollectionsCollectionsOutputReference {
    return new DataPineconeCollectionsCollectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/data-sources/collections pinecone_collections}
*/
export class DataPineconeCollections extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pinecone_collections";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPineconeCollections resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPineconeCollections to import
  * @param importFromId The id of the existing DataPineconeCollections that should be imported. Refer to the {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/data-sources/collections#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPineconeCollections to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pinecone_collections", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/data-sources/collections pinecone_collections} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPineconeCollectionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPineconeCollectionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pinecone_collections',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collections - computed: true, optional: false, required: false
  private _collections = new DataPineconeCollectionsCollectionsList(this, "collections", false);
  public get collections() {
    return this._collections;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
