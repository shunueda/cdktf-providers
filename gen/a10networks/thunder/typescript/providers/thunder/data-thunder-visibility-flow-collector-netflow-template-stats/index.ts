// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_flow_collector_netflow_template_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVisibilityFlowCollectorNetflowTemplateStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_flow_collector_netflow_template_stats#id DataThunderVisibilityFlowCollectorNetflowTemplateStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_flow_collector_netflow_template_stats#stats DataThunderVisibilityFlowCollectorNetflowTemplateStats#stats}
  */
  readonly stats?: DataThunderVisibilityFlowCollectorNetflowTemplateStatsStats;
}
export interface DataThunderVisibilityFlowCollectorNetflowTemplateStatsStats {
  /**
  * Netflow templates added to the delete queue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_flow_collector_netflow_template_stats#templates_added_to_delq DataThunderVisibilityFlowCollectorNetflowTemplateStats#templates_added_to_delq}
  */
  readonly templatesAddedToDelq?: number;
  /**
  * Netflow templates removed from the delete queue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_flow_collector_netflow_template_stats#templates_removed_from_delq DataThunderVisibilityFlowCollectorNetflowTemplateStats#templates_removed_from_delq}
  */
  readonly templatesRemovedFromDelq?: number;
}

export function dataThunderVisibilityFlowCollectorNetflowTemplateStatsStatsToTerraform(struct?: DataThunderVisibilityFlowCollectorNetflowTemplateStatsStatsOutputReference | DataThunderVisibilityFlowCollectorNetflowTemplateStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    templates_added_to_delq: cdktf.numberToTerraform(struct!.templatesAddedToDelq),
    templates_removed_from_delq: cdktf.numberToTerraform(struct!.templatesRemovedFromDelq),
  }
}


export function dataThunderVisibilityFlowCollectorNetflowTemplateStatsStatsToHclTerraform(struct?: DataThunderVisibilityFlowCollectorNetflowTemplateStatsStatsOutputReference | DataThunderVisibilityFlowCollectorNetflowTemplateStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    templates_added_to_delq: {
      value: cdktf.numberToHclTerraform(struct!.templatesAddedToDelq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    templates_removed_from_delq: {
      value: cdktf.numberToHclTerraform(struct!.templatesRemovedFromDelq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityFlowCollectorNetflowTemplateStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityFlowCollectorNetflowTemplateStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._templatesAddedToDelq !== undefined) {
      hasAnyValues = true;
      internalValueResult.templatesAddedToDelq = this._templatesAddedToDelq;
    }
    if (this._templatesRemovedFromDelq !== undefined) {
      hasAnyValues = true;
      internalValueResult.templatesRemovedFromDelq = this._templatesRemovedFromDelq;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityFlowCollectorNetflowTemplateStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._templatesAddedToDelq = undefined;
      this._templatesRemovedFromDelq = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._templatesAddedToDelq = value.templatesAddedToDelq;
      this._templatesRemovedFromDelq = value.templatesRemovedFromDelq;
    }
  }

  // templates_added_to_delq - computed: false, optional: true, required: false
  private _templatesAddedToDelq?: number; 
  public get templatesAddedToDelq() {
    return this.getNumberAttribute('templates_added_to_delq');
  }
  public set templatesAddedToDelq(value: number) {
    this._templatesAddedToDelq = value;
  }
  public resetTemplatesAddedToDelq() {
    this._templatesAddedToDelq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatesAddedToDelqInput() {
    return this._templatesAddedToDelq;
  }

  // templates_removed_from_delq - computed: false, optional: true, required: false
  private _templatesRemovedFromDelq?: number; 
  public get templatesRemovedFromDelq() {
    return this.getNumberAttribute('templates_removed_from_delq');
  }
  public set templatesRemovedFromDelq(value: number) {
    this._templatesRemovedFromDelq = value;
  }
  public resetTemplatesRemovedFromDelq() {
    this._templatesRemovedFromDelq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatesRemovedFromDelqInput() {
    return this._templatesRemovedFromDelq;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_flow_collector_netflow_template_stats thunder_visibility_flow_collector_netflow_template_stats}
*/
export class DataThunderVisibilityFlowCollectorNetflowTemplateStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_flow_collector_netflow_template_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVisibilityFlowCollectorNetflowTemplateStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVisibilityFlowCollectorNetflowTemplateStats to import
  * @param importFromId The id of the existing DataThunderVisibilityFlowCollectorNetflowTemplateStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_flow_collector_netflow_template_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVisibilityFlowCollectorNetflowTemplateStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_flow_collector_netflow_template_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_flow_collector_netflow_template_stats thunder_visibility_flow_collector_netflow_template_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVisibilityFlowCollectorNetflowTemplateStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVisibilityFlowCollectorNetflowTemplateStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_flow_collector_netflow_template_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._stats.internalValue = config.stats;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderVisibilityFlowCollectorNetflowTemplateStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderVisibilityFlowCollectorNetflowTemplateStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      stats: dataThunderVisibilityFlowCollectorNetflowTemplateStatsStatsToTerraform(this._stats.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: dataThunderVisibilityFlowCollectorNetflowTemplateStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityFlowCollectorNetflowTemplateStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
