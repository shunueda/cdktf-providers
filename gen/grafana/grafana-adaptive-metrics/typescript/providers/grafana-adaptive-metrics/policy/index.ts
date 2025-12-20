// https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.4/docs/resources/policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The minimum number of query usages required for a metric to be considered for recommendations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.4/docs/resources/policy#min_query_usages Policy#min_query_usages}
  */
  readonly minQueryUsages?: number;
  /**
  * The name of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.4/docs/resources/policy#name Policy#name}
  */
  readonly name: string;
  /**
  * The action to take for metrics with no recorded usage. Valid values are: drop_all_labels, drop_custom_labels, keep_custom_labels, best_guess.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.4/docs/resources/policy#unused_metrics_action Policy#unused_metrics_action}
  */
  readonly unusedMetricsAction?: string;
  /**
  * The list of custom labels to act on when unused_metrics_action is drop_custom_labels or keep_custom_labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.4/docs/resources/policy#unused_metrics_action_act_on_custom_labels Policy#unused_metrics_action_act_on_custom_labels}
  */
  readonly unusedMetricsActionActOnCustomLabels?: string[];
  /**
  * The sources of usage data to consider when generating recommendations. Valid values are: dashboard, rules, queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.4/docs/resources/policy#usage_sources Policy#usage_sources}
  */
  readonly usageSources?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.4/docs/resources/policy grafana-adaptive-metrics_policy}
*/
export class Policy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana-adaptive-metrics_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Policy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Policy to import
  * @param importFromId The id of the existing Policy that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.4/docs/resources/policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Policy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana-adaptive-metrics_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.4/docs/resources/policy grafana-adaptive-metrics_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana-adaptive-metrics_policy',
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
    this._minQueryUsages = config.minQueryUsages;
    this._name = config.name;
    this._unusedMetricsAction = config.unusedMetricsAction;
    this._unusedMetricsActionActOnCustomLabels = config.unusedMetricsActionActOnCustomLabels;
    this._usageSources = config.usageSources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // min_query_usages - computed: false, optional: true, required: false
  private _minQueryUsages?: number; 
  public get minQueryUsages() {
    return this.getNumberAttribute('min_query_usages');
  }
  public set minQueryUsages(value: number) {
    this._minQueryUsages = value;
  }
  public resetMinQueryUsages() {
    this._minQueryUsages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minQueryUsagesInput() {
    return this._minQueryUsages;
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

  // unused_metrics_action - computed: false, optional: true, required: false
  private _unusedMetricsAction?: string; 
  public get unusedMetricsAction() {
    return this.getStringAttribute('unused_metrics_action');
  }
  public set unusedMetricsAction(value: string) {
    this._unusedMetricsAction = value;
  }
  public resetUnusedMetricsAction() {
    this._unusedMetricsAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unusedMetricsActionInput() {
    return this._unusedMetricsAction;
  }

  // unused_metrics_action_act_on_custom_labels - computed: false, optional: true, required: false
  private _unusedMetricsActionActOnCustomLabels?: string[]; 
  public get unusedMetricsActionActOnCustomLabels() {
    return this.getListAttribute('unused_metrics_action_act_on_custom_labels');
  }
  public set unusedMetricsActionActOnCustomLabels(value: string[]) {
    this._unusedMetricsActionActOnCustomLabels = value;
  }
  public resetUnusedMetricsActionActOnCustomLabels() {
    this._unusedMetricsActionActOnCustomLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unusedMetricsActionActOnCustomLabelsInput() {
    return this._unusedMetricsActionActOnCustomLabels;
  }

  // usage_sources - computed: false, optional: true, required: false
  private _usageSources?: string[]; 
  public get usageSources() {
    return this.getListAttribute('usage_sources');
  }
  public set usageSources(value: string[]) {
    this._usageSources = value;
  }
  public resetUsageSources() {
    this._usageSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageSourcesInput() {
    return this._usageSources;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      min_query_usages: cdktf.numberToTerraform(this._minQueryUsages),
      name: cdktf.stringToTerraform(this._name),
      unused_metrics_action: cdktf.stringToTerraform(this._unusedMetricsAction),
      unused_metrics_action_act_on_custom_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._unusedMetricsActionActOnCustomLabels),
      usage_sources: cdktf.listMapper(cdktf.stringToTerraform, false)(this._usageSources),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      min_query_usages: {
        value: cdktf.numberToHclTerraform(this._minQueryUsages),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unused_metrics_action: {
        value: cdktf.stringToHclTerraform(this._unusedMetricsAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unused_metrics_action_act_on_custom_labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._unusedMetricsActionActOnCustomLabels),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      usage_sources: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._usageSources),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
