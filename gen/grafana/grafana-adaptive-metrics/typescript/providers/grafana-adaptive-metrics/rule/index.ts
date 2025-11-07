// https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/resources/rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The delay until aggregation is performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/resources/rule#aggregation_delay Rule#aggregation_delay}
  */
  readonly aggregationDelay?: string;
  /**
  * The interval at which to generate the aggregated series.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/resources/rule#aggregation_interval Rule#aggregation_interval}
  */
  readonly aggregationInterval?: string;
  /**
  * The array of aggregation types to calculate for this metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/resources/rule#aggregations Rule#aggregations}
  */
  readonly aggregations?: string[];
  /**
  * When set to true, the rule will be automatically imported if it is not already in Terraform state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/resources/rule#auto_import Rule#auto_import}
  */
  readonly autoImport?: boolean | cdktf.IResolvable;
  /**
  * Set to true to skip both ingestion and aggregation and drop the metric entirely.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/resources/rule#drop Rule#drop}
  */
  readonly drop?: boolean | cdktf.IResolvable;
  /**
  * The array of labels that will be aggregated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/resources/rule#drop_labels Rule#drop_labels}
  */
  readonly dropLabels?: string[];
  /**
  * The array of labels to keep; labels not in this array will be aggregated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/resources/rule#keep_labels Rule#keep_labels}
  */
  readonly keepLabels?: string[];
  /**
  * Specifies how the metric field matches to incoming metric names. Can be 'prefix', 'suffix', or 'exact', defaults to 'exact'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/resources/rule#match_type Rule#match_type}
  */
  readonly matchType?: string;
  /**
  * The name of the metric to be aggregated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/resources/rule#metric Rule#metric}
  */
  readonly metric: string;
  /**
  * The name of the segment to aggregate metrics for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/resources/rule#segment Rule#segment}
  */
  readonly segment?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/resources/rule grafana-adaptive-metrics_rule}
*/
export class Rule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana-adaptive-metrics_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Rule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Rule to import
  * @param importFromId The id of the existing Rule that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/resources/rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Rule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana-adaptive-metrics_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/resources/rule grafana-adaptive-metrics_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RuleConfig
  */
  public constructor(scope: Construct, id: string, config: RuleConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana-adaptive-metrics_rule',
      terraformGeneratorMetadata: {
        providerName: 'grafana-adaptive-metrics',
        providerVersion: '0.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aggregationDelay = config.aggregationDelay;
    this._aggregationInterval = config.aggregationInterval;
    this._aggregations = config.aggregations;
    this._autoImport = config.autoImport;
    this._drop = config.drop;
    this._dropLabels = config.dropLabels;
    this._keepLabels = config.keepLabels;
    this._matchType = config.matchType;
    this._metric = config.metric;
    this._segment = config.segment;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregation_delay - computed: true, optional: true, required: false
  private _aggregationDelay?: string; 
  public get aggregationDelay() {
    return this.getStringAttribute('aggregation_delay');
  }
  public set aggregationDelay(value: string) {
    this._aggregationDelay = value;
  }
  public resetAggregationDelay() {
    this._aggregationDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationDelayInput() {
    return this._aggregationDelay;
  }

  // aggregation_interval - computed: true, optional: true, required: false
  private _aggregationInterval?: string; 
  public get aggregationInterval() {
    return this.getStringAttribute('aggregation_interval');
  }
  public set aggregationInterval(value: string) {
    this._aggregationInterval = value;
  }
  public resetAggregationInterval() {
    this._aggregationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationIntervalInput() {
    return this._aggregationInterval;
  }

  // aggregations - computed: true, optional: true, required: false
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

  // auto_import - computed: true, optional: true, required: false
  private _autoImport?: boolean | cdktf.IResolvable; 
  public get autoImport() {
    return this.getBooleanAttribute('auto_import');
  }
  public set autoImport(value: boolean | cdktf.IResolvable) {
    this._autoImport = value;
  }
  public resetAutoImport() {
    this._autoImport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoImportInput() {
    return this._autoImport;
  }

  // drop - computed: true, optional: true, required: false
  private _drop?: boolean | cdktf.IResolvable; 
  public get drop() {
    return this.getBooleanAttribute('drop');
  }
  public set drop(value: boolean | cdktf.IResolvable) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }

  // drop_labels - computed: true, optional: true, required: false
  private _dropLabels?: string[]; 
  public get dropLabels() {
    return this.getListAttribute('drop_labels');
  }
  public set dropLabels(value: string[]) {
    this._dropLabels = value;
  }
  public resetDropLabels() {
    this._dropLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropLabelsInput() {
    return this._dropLabels;
  }

  // keep_labels - computed: true, optional: true, required: false
  private _keepLabels?: string[]; 
  public get keepLabels() {
    return this.getListAttribute('keep_labels');
  }
  public set keepLabels(value: string[]) {
    this._keepLabels = value;
  }
  public resetKeepLabels() {
    this._keepLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepLabelsInput() {
    return this._keepLabels;
  }

  // match_type - computed: true, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // metric - computed: false, optional: false, required: true
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // segment - computed: false, optional: true, required: false
  private _segment?: string; 
  public get segment() {
    return this.getStringAttribute('segment');
  }
  public set segment(value: string) {
    this._segment = value;
  }
  public resetSegment() {
    this._segment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aggregation_delay: cdktf.stringToTerraform(this._aggregationDelay),
      aggregation_interval: cdktf.stringToTerraform(this._aggregationInterval),
      aggregations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._aggregations),
      auto_import: cdktf.booleanToTerraform(this._autoImport),
      drop: cdktf.booleanToTerraform(this._drop),
      drop_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dropLabels),
      keep_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keepLabels),
      match_type: cdktf.stringToTerraform(this._matchType),
      metric: cdktf.stringToTerraform(this._metric),
      segment: cdktf.stringToTerraform(this._segment),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aggregation_delay: {
        value: cdktf.stringToHclTerraform(this._aggregationDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aggregation_interval: {
        value: cdktf.stringToHclTerraform(this._aggregationInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aggregations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._aggregations),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      auto_import: {
        value: cdktf.booleanToHclTerraform(this._autoImport),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      drop: {
        value: cdktf.booleanToHclTerraform(this._drop),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      drop_labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dropLabels),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      keep_labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._keepLabels),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      match_type: {
        value: cdktf.stringToHclTerraform(this._matchType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric: {
        value: cdktf.stringToHclTerraform(this._metric),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      segment: {
        value: cdktf.stringToHclTerraform(this._segment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
