// https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.4/docs/resources/ruleset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RulesetConfig extends cdktf.TerraformMetaArguments {
  /**
  * The complete list of aggregation rules for this segment. This will replace all existing rules in the segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.4/docs/resources/ruleset#rules Ruleset#rules}
  */
  readonly rules: RulesetRules[] | cdktf.IResolvable;
  /**
  * The name of the segment to aggregate metrics for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.4/docs/resources/ruleset#segment Ruleset#segment}
  */
  readonly segment?: string;
}
export interface RulesetRules {
  /**
  * The delay until aggregation is performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.4/docs/resources/ruleset#aggregation_delay Ruleset#aggregation_delay}
  */
  readonly aggregationDelay?: string;
  /**
  * The interval at which to generate the aggregated series.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.4/docs/resources/ruleset#aggregation_interval Ruleset#aggregation_interval}
  */
  readonly aggregationInterval?: string;
  /**
  * The array of aggregation types to calculate for this metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.4/docs/resources/ruleset#aggregations Ruleset#aggregations}
  */
  readonly aggregations?: string[];
  /**
  * Set to true to skip both ingestion and aggregation and drop the metric entirely.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.4/docs/resources/ruleset#drop Ruleset#drop}
  */
  readonly drop?: boolean | cdktf.IResolvable;
  /**
  * The array of labels that will be aggregated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.4/docs/resources/ruleset#drop_labels Ruleset#drop_labels}
  */
  readonly dropLabels?: string[];
  /**
  * The array of labels to keep; labels not in this array will be aggregated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.4/docs/resources/ruleset#keep_labels Ruleset#keep_labels}
  */
  readonly keepLabels?: string[];
  /**
  * Specifies how the metric field matches to incoming metric names. Can be 'prefix', 'suffix', or 'exact', defaults to 'exact'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.4/docs/resources/ruleset#match_type Ruleset#match_type}
  */
  readonly matchType?: string;
  /**
  * The name of the metric to be aggregated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.4/docs/resources/ruleset#metric Ruleset#metric}
  */
  readonly metric: string;
}

export function rulesetRulesToTerraform(struct?: RulesetRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation_delay: cdktf.stringToTerraform(struct!.aggregationDelay),
    aggregation_interval: cdktf.stringToTerraform(struct!.aggregationInterval),
    aggregations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.aggregations),
    drop: cdktf.booleanToTerraform(struct!.drop),
    drop_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dropLabels),
    keep_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keepLabels),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    metric: cdktf.stringToTerraform(struct!.metric),
  }
}


export function rulesetRulesToHclTerraform(struct?: RulesetRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation_delay: {
      value: cdktf.stringToHclTerraform(struct!.aggregationDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aggregation_interval: {
      value: cdktf.stringToHclTerraform(struct!.aggregationInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aggregations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.aggregations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    drop: {
      value: cdktf.booleanToHclTerraform(struct!.drop),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    drop_labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dropLabels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    keep_labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keepLabels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: cdktf.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesetRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RulesetRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregationDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationDelay = this._aggregationDelay;
    }
    if (this._aggregationInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationInterval = this._aggregationInterval;
    }
    if (this._aggregations !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregations = this._aggregations;
    }
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    if (this._dropLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropLabels = this._dropLabels;
    }
    if (this._keepLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepLabels = this._keepLabels;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesetRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregationDelay = undefined;
      this._aggregationInterval = undefined;
      this._aggregations = undefined;
      this._drop = undefined;
      this._dropLabels = undefined;
      this._keepLabels = undefined;
      this._matchType = undefined;
      this._metric = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregationDelay = value.aggregationDelay;
      this._aggregationInterval = value.aggregationInterval;
      this._aggregations = value.aggregations;
      this._drop = value.drop;
      this._dropLabels = value.dropLabels;
      this._keepLabels = value.keepLabels;
      this._matchType = value.matchType;
      this._metric = value.metric;
    }
  }

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
}

export class RulesetRulesList extends cdktf.ComplexList {
  public internalValue? : RulesetRules[] | cdktf.IResolvable

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
  public get(index: number): RulesetRulesOutputReference {
    return new RulesetRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.4/docs/resources/ruleset grafana-adaptive-metrics_ruleset}
*/
export class Ruleset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana-adaptive-metrics_ruleset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ruleset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ruleset to import
  * @param importFromId The id of the existing Ruleset that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.4/docs/resources/ruleset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ruleset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana-adaptive-metrics_ruleset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.4/docs/resources/ruleset grafana-adaptive-metrics_ruleset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RulesetConfig
  */
  public constructor(scope: Construct, id: string, config: RulesetConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana-adaptive-metrics_ruleset',
      terraformGeneratorMetadata: {
        providerName: 'grafana-adaptive-metrics',
        providerVersion: '0.3.4',
        providerVersionConstraint: '0.3.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._rules.internalValue = config.rules;
    this._segment = config.segment;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // rules - computed: false, optional: false, required: true
  private _rules = new RulesetRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: RulesetRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
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
      rules: cdktf.listMapper(rulesetRulesToTerraform, false)(this._rules.internalValue),
      segment: cdktf.stringToTerraform(this._segment),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      rules: {
        value: cdktf.listMapperHcl(rulesetRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RulesetRulesList",
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
