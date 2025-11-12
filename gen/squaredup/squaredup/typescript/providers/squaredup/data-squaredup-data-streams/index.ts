// https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/data-sources/data_streams
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSquaredupDataStreamsConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the data source to get data streams for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/data-sources/data_streams#data_source_id DataSquaredupDataStreams#data_source_id}
  */
  readonly dataSourceId: string;
  /**
  * Name of the data stream definition to get particular data stream details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/data-sources/data_streams#data_stream_definition_name DataSquaredupDataStreams#data_stream_definition_name}
  */
  readonly dataStreamDefinitionName?: string;
}
export interface DataSquaredupDataStreamsDataStreams {
}

export function dataSquaredupDataStreamsDataStreamsToTerraform(struct?: DataSquaredupDataStreamsDataStreams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSquaredupDataStreamsDataStreamsToHclTerraform(struct?: DataSquaredupDataStreamsDataStreams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSquaredupDataStreamsDataStreamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSquaredupDataStreamsDataStreams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSquaredupDataStreamsDataStreams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_source_name - computed: true, optional: false, required: false
  public get dataSourceName() {
    return this.getStringAttribute('data_source_name');
  }

  // definition_name - computed: true, optional: false, required: false
  public get definitionName() {
    return this.getStringAttribute('definition_name');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataSquaredupDataStreamsDataStreamsList extends cdktf.ComplexList {

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
  public get(index: number): DataSquaredupDataStreamsDataStreamsOutputReference {
    return new DataSquaredupDataStreamsDataStreamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/data-sources/data_streams squaredup_data_streams}
*/
export class DataSquaredupDataStreams extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "squaredup_data_streams";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSquaredupDataStreams resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSquaredupDataStreams to import
  * @param importFromId The id of the existing DataSquaredupDataStreams that should be imported. Refer to the {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/data-sources/data_streams#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSquaredupDataStreams to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "squaredup_data_streams", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/data-sources/data_streams squaredup_data_streams} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSquaredupDataStreamsConfig
  */
  public constructor(scope: Construct, id: string, config: DataSquaredupDataStreamsConfig) {
    super(scope, id, {
      terraformResourceType: 'squaredup_data_streams',
      terraformGeneratorMetadata: {
        providerName: 'squaredup',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataSourceId = config.dataSourceId;
    this._dataStreamDefinitionName = config.dataStreamDefinitionName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_source_id - computed: false, optional: false, required: true
  private _dataSourceId?: string; 
  public get dataSourceId() {
    return this.getStringAttribute('data_source_id');
  }
  public set dataSourceId(value: string) {
    this._dataSourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceIdInput() {
    return this._dataSourceId;
  }

  // data_stream_definition_name - computed: false, optional: true, required: false
  private _dataStreamDefinitionName?: string; 
  public get dataStreamDefinitionName() {
    return this.getStringAttribute('data_stream_definition_name');
  }
  public set dataStreamDefinitionName(value: string) {
    this._dataStreamDefinitionName = value;
  }
  public resetDataStreamDefinitionName() {
    this._dataStreamDefinitionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStreamDefinitionNameInput() {
    return this._dataStreamDefinitionName;
  }

  // data_streams - computed: true, optional: false, required: false
  private _dataStreams = new DataSquaredupDataStreamsDataStreamsList(this, "data_streams", false);
  public get dataStreams() {
    return this._dataStreams;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_source_id: cdktf.stringToTerraform(this._dataSourceId),
      data_stream_definition_name: cdktf.stringToTerraform(this._dataStreamDefinitionName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_source_id: {
        value: cdktf.stringToHclTerraform(this._dataSourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_stream_definition_name: {
        value: cdktf.stringToHclTerraform(this._dataStreamDefinitionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
