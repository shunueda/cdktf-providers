// https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/reverse_etl_model
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReverseEtlModelConfig extends cdktf.TerraformMetaArguments {
  /**
  * A longer, more descriptive explanation of the Model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/reverse_etl_model#description ReverseEtlModel#description}
  */
  readonly description: string;
  /**
  * Indicates whether the Model should have syncs enabled. When disabled, no syncs will be triggered, regardless of the enabled status of the attached destinations/subscriptions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/reverse_etl_model#enabled ReverseEtlModel#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * A short, human-readable description of the Model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/reverse_etl_model#name ReverseEtlModel#name}
  */
  readonly name: string;
  /**
  * The SQL query that will be executed to extract data from the connected Source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/reverse_etl_model#query ReverseEtlModel#query}
  */
  readonly query: string;
  /**
  * Indicates the column named in `query` that should be used to uniquely identify the extracted records.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/reverse_etl_model#query_identifier_column ReverseEtlModel#query_identifier_column}
  */
  readonly queryIdentifierColumn: string;
  /**
  * Depending on the chosen strategy, configures the schedule for this model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/reverse_etl_model#schedule_config ReverseEtlModel#schedule_config}
  */
  readonly scheduleConfig?: string;
  /**
  * Determines the strategy used for triggering syncs, which will be used in conjunction with scheduleConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/reverse_etl_model#schedule_strategy ReverseEtlModel#schedule_strategy}
  */
  readonly scheduleStrategy?: string;
  /**
  * Indicates which Source to attach this model to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/reverse_etl_model#source_id ReverseEtlModel#source_id}
  */
  readonly sourceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/reverse_etl_model segment_reverse_etl_model}
*/
export class ReverseEtlModel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "segment_reverse_etl_model";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ReverseEtlModel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ReverseEtlModel to import
  * @param importFromId The id of the existing ReverseEtlModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/reverse_etl_model#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ReverseEtlModel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "segment_reverse_etl_model", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/reverse_etl_model segment_reverse_etl_model} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReverseEtlModelConfig
  */
  public constructor(scope: Construct, id: string, config: ReverseEtlModelConfig) {
    super(scope, id, {
      terraformResourceType: 'segment_reverse_etl_model',
      terraformGeneratorMetadata: {
        providerName: 'segment',
        providerVersion: '1.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._enabled = config.enabled;
    this._name = config.name;
    this._query = config.query;
    this._queryIdentifierColumn = config.queryIdentifierColumn;
    this._scheduleConfig = config.scheduleConfig;
    this._scheduleStrategy = config.scheduleStrategy;
    this._sourceId = config.sourceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // query_identifier_column - computed: false, optional: false, required: true
  private _queryIdentifierColumn?: string; 
  public get queryIdentifierColumn() {
    return this.getStringAttribute('query_identifier_column');
  }
  public set queryIdentifierColumn(value: string) {
    this._queryIdentifierColumn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryIdentifierColumnInput() {
    return this._queryIdentifierColumn;
  }

  // schedule_config - computed: false, optional: true, required: false
  private _scheduleConfig?: string; 
  public get scheduleConfig() {
    return this.getStringAttribute('schedule_config');
  }
  public set scheduleConfig(value: string) {
    this._scheduleConfig = value;
  }
  public resetScheduleConfig() {
    this._scheduleConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleConfigInput() {
    return this._scheduleConfig;
  }

  // schedule_strategy - computed: false, optional: true, required: false
  private _scheduleStrategy?: string; 
  public get scheduleStrategy() {
    return this.getStringAttribute('schedule_strategy');
  }
  public set scheduleStrategy(value: string) {
    this._scheduleStrategy = value;
  }
  public resetScheduleStrategy() {
    this._scheduleStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleStrategyInput() {
    return this._scheduleStrategy;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      query: cdktf.stringToTerraform(this._query),
      query_identifier_column: cdktf.stringToTerraform(this._queryIdentifierColumn),
      schedule_config: cdktf.stringToTerraform(this._scheduleConfig),
      schedule_strategy: cdktf.stringToTerraform(this._scheduleStrategy),
      source_id: cdktf.stringToTerraform(this._sourceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query: {
        value: cdktf.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_identifier_column: {
        value: cdktf.stringToHclTerraform(this._queryIdentifierColumn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_config: {
        value: cdktf.stringToHclTerraform(this._scheduleConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_strategy: {
        value: cdktf.stringToHclTerraform(this._scheduleStrategy),
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
