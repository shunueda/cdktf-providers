// https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/data-sources/recommendations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGrafanaAdaptiveMetricsRecommendationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Limit the types of recommended actions to list. Valid recommended actions are 'add', 'remove', 'keep', and 'update'. Defaults to listing all actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/data-sources/recommendations#action DataGrafanaAdaptiveMetricsRecommendations#action}
  */
  readonly action?: string[];
  /**
  * The name of the segment to get recommendations for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/data-sources/recommendations#segment DataGrafanaAdaptiveMetricsRecommendations#segment}
  */
  readonly segment?: string;
  /**
  * If true, the response will include additional information about the recommendation, such as the number of rules, queries, and dashboards that use the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/data-sources/recommendations#verbose DataGrafanaAdaptiveMetricsRecommendations#verbose}
  */
  readonly verbose?: boolean | cdktf.IResolvable;
}
export interface DataGrafanaAdaptiveMetricsRecommendationsRecommendations {
}

export function dataGrafanaAdaptiveMetricsRecommendationsRecommendationsToTerraform(struct?: DataGrafanaAdaptiveMetricsRecommendationsRecommendations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGrafanaAdaptiveMetricsRecommendationsRecommendationsToHclTerraform(struct?: DataGrafanaAdaptiveMetricsRecommendationsRecommendations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGrafanaAdaptiveMetricsRecommendationsRecommendationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGrafanaAdaptiveMetricsRecommendationsRecommendations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGrafanaAdaptiveMetricsRecommendationsRecommendations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation_delay - computed: true, optional: false, required: false
  public get aggregationDelay() {
    return this.getStringAttribute('aggregation_delay');
  }

  // aggregation_interval - computed: true, optional: false, required: false
  public get aggregationInterval() {
    return this.getStringAttribute('aggregation_interval');
  }

  // aggregations - computed: true, optional: false, required: false
  public get aggregations() {
    return this.getListAttribute('aggregations');
  }

  // drop - computed: true, optional: false, required: false
  public get drop() {
    return this.getBooleanAttribute('drop');
  }

  // drop_labels - computed: true, optional: false, required: false
  public get dropLabels() {
    return this.getListAttribute('drop_labels');
  }

  // keep_labels - computed: true, optional: false, required: false
  public get keepLabels() {
    return this.getListAttribute('keep_labels');
  }

  // kept_labels - computed: true, optional: false, required: false
  public get keptLabels() {
    return this.getListAttribute('kept_labels');
  }

  // match_type - computed: true, optional: false, required: false
  public get matchType() {
    return this.getStringAttribute('match_type');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getStringAttribute('metric');
  }

  // recommended_action - computed: true, optional: false, required: false
  public get recommendedAction() {
    return this.getStringAttribute('recommended_action');
  }

  // total_series_after_aggregation - computed: true, optional: false, required: false
  public get totalSeriesAfterAggregation() {
    return this.getNumberAttribute('total_series_after_aggregation');
  }

  // total_series_before_aggregation - computed: true, optional: false, required: false
  public get totalSeriesBeforeAggregation() {
    return this.getNumberAttribute('total_series_before_aggregation');
  }

  // usages_in_dashboards - computed: true, optional: false, required: false
  public get usagesInDashboards() {
    return this.getNumberAttribute('usages_in_dashboards');
  }

  // usages_in_queries - computed: true, optional: false, required: false
  public get usagesInQueries() {
    return this.getNumberAttribute('usages_in_queries');
  }

  // usages_in_rules - computed: true, optional: false, required: false
  public get usagesInRules() {
    return this.getNumberAttribute('usages_in_rules');
  }
}

export class DataGrafanaAdaptiveMetricsRecommendationsRecommendationsList extends cdktf.ComplexList {

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
  public get(index: number): DataGrafanaAdaptiveMetricsRecommendationsRecommendationsOutputReference {
    return new DataGrafanaAdaptiveMetricsRecommendationsRecommendationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/data-sources/recommendations grafana-adaptive-metrics_recommendations}
*/
export class DataGrafanaAdaptiveMetricsRecommendations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana-adaptive-metrics_recommendations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGrafanaAdaptiveMetricsRecommendations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGrafanaAdaptiveMetricsRecommendations to import
  * @param importFromId The id of the existing DataGrafanaAdaptiveMetricsRecommendations that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/data-sources/recommendations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGrafanaAdaptiveMetricsRecommendations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana-adaptive-metrics_recommendations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/data-sources/recommendations grafana-adaptive-metrics_recommendations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGrafanaAdaptiveMetricsRecommendationsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGrafanaAdaptiveMetricsRecommendationsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'grafana-adaptive-metrics_recommendations',
      terraformGeneratorMetadata: {
        providerName: 'grafana-adaptive-metrics',
        providerVersion: '0.3.3',
        providerVersionConstraint: '0.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._segment = config.segment;
    this._verbose = config.verbose;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string[]; 
  public get action() {
    return this.getListAttribute('action');
  }
  public set action(value: string[]) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // recommendations - computed: true, optional: false, required: false
  private _recommendations = new DataGrafanaAdaptiveMetricsRecommendationsRecommendationsList(this, "recommendations", false);
  public get recommendations() {
    return this._recommendations;
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

  // verbose - computed: false, optional: true, required: false
  private _verbose?: boolean | cdktf.IResolvable; 
  public get verbose() {
    return this.getBooleanAttribute('verbose');
  }
  public set verbose(value: boolean | cdktf.IResolvable) {
    this._verbose = value;
  }
  public resetVerbose() {
    this._verbose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verboseInput() {
    return this._verbose;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.listMapper(cdktf.stringToTerraform, false)(this._action),
      segment: cdktf.stringToTerraform(this._segment),
      verbose: cdktf.booleanToTerraform(this._verbose),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._action),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      segment: {
        value: cdktf.stringToHclTerraform(this._segment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verbose: {
        value: cdktf.booleanToHclTerraform(this._verbose),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
