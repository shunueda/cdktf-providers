// https://registry.terraform.io/providers/betterstackhq/logtail/0.6.4/docs/resources/metric
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetricConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of aggregations to perform on the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.6.4/docs/resources/metric#aggregations Metric#aggregations}
  */
  readonly aggregations: string[];
  /**
  * The name of this metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.6.4/docs/resources/metric#name Metric#name}
  */
  readonly name: string;
  /**
  * The ID of the source this metric belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.6.4/docs/resources/metric#source_id Metric#source_id}
  */
  readonly sourceId: string;
  /**
  * The SQL expression used to extract the metric value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.6.4/docs/resources/metric#sql_expression Metric#sql_expression}
  */
  readonly sqlExpression: string;
  /**
  * Used to specify the team the resource should be created in when using global tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.6.4/docs/resources/metric#team_name Metric#team_name}
  */
  readonly teamName?: string;
  /**
  * The type of the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.6.4/docs/resources/metric#type Metric#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.6.4/docs/resources/metric logtail_metric}
*/
export class Metric extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logtail_metric";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Metric resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Metric to import
  * @param importFromId The id of the existing Metric that should be imported. Refer to the {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.6.4/docs/resources/metric#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Metric to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logtail_metric", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.6.4/docs/resources/metric logtail_metric} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetricConfig
  */
  public constructor(scope: Construct, id: string, config: MetricConfig) {
    super(scope, id, {
      terraformResourceType: 'logtail_metric',
      terraformGeneratorMetadata: {
        providerName: 'logtail',
        providerVersion: '0.6.4'
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
    this._name = config.name;
    this._sourceId = config.sourceId;
    this._sqlExpression = config.sqlExpression;
    this._teamName = config.teamName;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregations - computed: false, optional: false, required: true
  private _aggregations?: string[]; 
  public get aggregations() {
    return this.getListAttribute('aggregations');
  }
  public set aggregations(value: string[]) {
    this._aggregations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationsInput() {
    return this._aggregations;
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

  // team_name - computed: false, optional: true, required: false
  private _teamName?: string; 
  public get teamName() {
    return this.getStringAttribute('team_name');
  }
  public set teamName(value: string) {
    this._teamName = value;
  }
  public resetTeamName() {
    this._teamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamNameInput() {
    return this._teamName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aggregations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._aggregations),
      name: cdktf.stringToTerraform(this._name),
      source_id: cdktf.stringToTerraform(this._sourceId),
      sql_expression: cdktf.stringToTerraform(this._sqlExpression),
      team_name: cdktf.stringToTerraform(this._teamName),
      type: cdktf.stringToTerraform(this._type),
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
      team_name: {
        value: cdktf.stringToHclTerraform(this._teamName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
