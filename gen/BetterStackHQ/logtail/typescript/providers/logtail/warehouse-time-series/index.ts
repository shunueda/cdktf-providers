// https://registry.terraform.io/providers/betterstackhq/logtail/0.7.2/docs/resources/warehouse_time_series
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WarehouseTimeSeriesConfig extends cdktf.TerraformMetaArguments {
  /**
  * An array of aggregation functions (e.g., `avg`, `min`, `max`). If omitted, no aggregations are applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.2/docs/resources/warehouse_time_series#aggregations WarehouseTimeSeries#aggregations}
  */
  readonly aggregations?: string[];
  /**
  * The type of vector index to apply (e.g., `vector_similarity`). Only applicable for vector types (`array_bfloat16`, `array_float32`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.2/docs/resources/warehouse_time_series#expression_index WarehouseTimeSeries#expression_index}
  */
  readonly expressionIndex?: string;
  /**
  * The name of the time series. Must contain only letters, numbers, and underscores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.2/docs/resources/warehouse_time_series#name WarehouseTimeSeries#name}
  */
  readonly name: string;
  /**
  * The ID of the Warehouse source to create the time series for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.2/docs/resources/warehouse_time_series#source_id WarehouseTimeSeries#source_id}
  */
  readonly sourceId: string;
  /**
  * The SQL expression used to compute the time series. For example `JSONExtract(raw, 'response_time', 'Nullable(Float64)')`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.2/docs/resources/warehouse_time_series#sql_expression WarehouseTimeSeries#sql_expression}
  */
  readonly sqlExpression: string;
  /**
  * The data type of the time series. Valid types are: `string`, `string_low_cardinality`, `int64_delta`, `int64`, `uint64_delta`, `uint64`, `float64_delta`, `datetime64_delta`, `boolean`, `array_bfloat16`, `array_float32`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.2/docs/resources/warehouse_time_series#type WarehouseTimeSeries#type}
  */
  readonly type: string;
  /**
  * The vector dimension if `expression_index` is `vector_similarity` (e.g., `512`). Supported values: 256, 384, 512, 768, 1024, 1536, 3072, 4096, 10752.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.2/docs/resources/warehouse_time_series#vector_dimension WarehouseTimeSeries#vector_dimension}
  */
  readonly vectorDimension?: number;
  /**
  * The distance function to use for vector similarity (e.g., `cosine`, `l2`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.2/docs/resources/warehouse_time_series#vector_distance_function WarehouseTimeSeries#vector_distance_function}
  */
  readonly vectorDistanceFunction?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.2/docs/resources/warehouse_time_series logtail_warehouse_time_series}
*/
export class WarehouseTimeSeries extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logtail_warehouse_time_series";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WarehouseTimeSeries resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WarehouseTimeSeries to import
  * @param importFromId The id of the existing WarehouseTimeSeries that should be imported. Refer to the {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.2/docs/resources/warehouse_time_series#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WarehouseTimeSeries to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logtail_warehouse_time_series", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.2/docs/resources/warehouse_time_series logtail_warehouse_time_series} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WarehouseTimeSeriesConfig
  */
  public constructor(scope: Construct, id: string, config: WarehouseTimeSeriesConfig) {
    super(scope, id, {
      terraformResourceType: 'logtail_warehouse_time_series',
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
    this._aggregations = config.aggregations;
    this._expressionIndex = config.expressionIndex;
    this._name = config.name;
    this._sourceId = config.sourceId;
    this._sqlExpression = config.sqlExpression;
    this._type = config.type;
    this._vectorDimension = config.vectorDimension;
    this._vectorDistanceFunction = config.vectorDistanceFunction;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregations - computed: false, optional: true, required: false
  private _aggregations?: string[]; 
  public get aggregations() {
    return this.getListAttribute('aggregations');
  }
  public set aggregations(value: string[]) {
    this._aggregations = value;
  }
  public resetAggregations() {
    this._aggregations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationsInput() {
    return this._aggregations;
  }

  // expression_index - computed: false, optional: true, required: false
  private _expressionIndex?: string; 
  public get expressionIndex() {
    return this.getStringAttribute('expression_index');
  }
  public set expressionIndex(value: string) {
    this._expressionIndex = value;
  }
  public resetExpressionIndex() {
    this._expressionIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionIndexInput() {
    return this._expressionIndex;
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

  // sql_expression - computed: false, optional: false, required: true
  private _sqlExpression?: string; 
  public get sqlExpression() {
    return this.getStringAttribute('sql_expression');
  }
  public set sqlExpression(value: string) {
    this._sqlExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlExpressionInput() {
    return this._sqlExpression;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vector_dimension - computed: false, optional: true, required: false
  private _vectorDimension?: number; 
  public get vectorDimension() {
    return this.getNumberAttribute('vector_dimension');
  }
  public set vectorDimension(value: number) {
    this._vectorDimension = value;
  }
  public resetVectorDimension() {
    this._vectorDimension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorDimensionInput() {
    return this._vectorDimension;
  }

  // vector_distance_function - computed: false, optional: true, required: false
  private _vectorDistanceFunction?: string; 
  public get vectorDistanceFunction() {
    return this.getStringAttribute('vector_distance_function');
  }
  public set vectorDistanceFunction(value: string) {
    this._vectorDistanceFunction = value;
  }
  public resetVectorDistanceFunction() {
    this._vectorDistanceFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorDistanceFunctionInput() {
    return this._vectorDistanceFunction;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aggregations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._aggregations),
      expression_index: cdktf.stringToTerraform(this._expressionIndex),
      name: cdktf.stringToTerraform(this._name),
      source_id: cdktf.stringToTerraform(this._sourceId),
      sql_expression: cdktf.stringToTerraform(this._sqlExpression),
      type: cdktf.stringToTerraform(this._type),
      vector_dimension: cdktf.numberToTerraform(this._vectorDimension),
      vector_distance_function: cdktf.stringToTerraform(this._vectorDistanceFunction),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aggregations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._aggregations),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      expression_index: {
        value: cdktf.stringToHclTerraform(this._expressionIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      sql_expression: {
        value: cdktf.stringToHclTerraform(this._sqlExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vector_dimension: {
        value: cdktf.numberToHclTerraform(this._vectorDimension),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vector_distance_function: {
        value: cdktf.stringToHclTerraform(this._vectorDistanceFunction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
