// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_link_cost_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbTemplateLinkCostStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_link_cost_stats#id DataThunderSlbTemplateLinkCostStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Server Link-Cost Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_link_cost_stats#name DataThunderSlbTemplateLinkCostStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_link_cost_stats#stats DataThunderSlbTemplateLinkCostStats#stats}
  */
  readonly stats?: DataThunderSlbTemplateLinkCostStatsStats;
}
export interface DataThunderSlbTemplateLinkCostStatsStats {
  /**
  * Link Cost average throughput per interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_link_cost_stats#interval_avg_throughput DataThunderSlbTemplateLinkCostStats#interval_avg_throughput}
  */
  readonly intervalAvgThroughput?: number;
  /**
  * Link Cost bytes processed in forward direction per interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_link_cost_stats#interval_fwd_bytes DataThunderSlbTemplateLinkCostStats#interval_fwd_bytes}
  */
  readonly intervalFwdBytes?: number;
  /**
  * Link Cost max throughput per interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_link_cost_stats#interval_max_throughput DataThunderSlbTemplateLinkCostStats#interval_max_throughput}
  */
  readonly intervalMaxThroughput?: number;
  /**
  * Link Cost total connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_link_cost_stats#link_total_conn DataThunderSlbTemplateLinkCostStats#link_total_conn}
  */
  readonly linkTotalConn?: number;
  /**
  * Total bytes fwd for link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_link_cost_stats#link_total_fwd_bytes DataThunderSlbTemplateLinkCostStats#link_total_fwd_bytes}
  */
  readonly linkTotalFwdBytes?: number;
}

export function dataThunderSlbTemplateLinkCostStatsStatsToTerraform(struct?: DataThunderSlbTemplateLinkCostStatsStatsOutputReference | DataThunderSlbTemplateLinkCostStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval_avg_throughput: cdktf.numberToTerraform(struct!.intervalAvgThroughput),
    interval_fwd_bytes: cdktf.numberToTerraform(struct!.intervalFwdBytes),
    interval_max_throughput: cdktf.numberToTerraform(struct!.intervalMaxThroughput),
    link_total_conn: cdktf.numberToTerraform(struct!.linkTotalConn),
    link_total_fwd_bytes: cdktf.numberToTerraform(struct!.linkTotalFwdBytes),
  }
}


export function dataThunderSlbTemplateLinkCostStatsStatsToHclTerraform(struct?: DataThunderSlbTemplateLinkCostStatsStatsOutputReference | DataThunderSlbTemplateLinkCostStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval_avg_throughput: {
      value: cdktf.numberToHclTerraform(struct!.intervalAvgThroughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_fwd_bytes: {
      value: cdktf.numberToHclTerraform(struct!.intervalFwdBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_max_throughput: {
      value: cdktf.numberToHclTerraform(struct!.intervalMaxThroughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    link_total_conn: {
      value: cdktf.numberToHclTerraform(struct!.linkTotalConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    link_total_fwd_bytes: {
      value: cdktf.numberToHclTerraform(struct!.linkTotalFwdBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbTemplateLinkCostStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbTemplateLinkCostStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intervalAvgThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalAvgThroughput = this._intervalAvgThroughput;
    }
    if (this._intervalFwdBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalFwdBytes = this._intervalFwdBytes;
    }
    if (this._intervalMaxThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalMaxThroughput = this._intervalMaxThroughput;
    }
    if (this._linkTotalConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkTotalConn = this._linkTotalConn;
    }
    if (this._linkTotalFwdBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkTotalFwdBytes = this._linkTotalFwdBytes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbTemplateLinkCostStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._intervalAvgThroughput = undefined;
      this._intervalFwdBytes = undefined;
      this._intervalMaxThroughput = undefined;
      this._linkTotalConn = undefined;
      this._linkTotalFwdBytes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._intervalAvgThroughput = value.intervalAvgThroughput;
      this._intervalFwdBytes = value.intervalFwdBytes;
      this._intervalMaxThroughput = value.intervalMaxThroughput;
      this._linkTotalConn = value.linkTotalConn;
      this._linkTotalFwdBytes = value.linkTotalFwdBytes;
    }
  }

  // interval_avg_throughput - computed: false, optional: true, required: false
  private _intervalAvgThroughput?: number; 
  public get intervalAvgThroughput() {
    return this.getNumberAttribute('interval_avg_throughput');
  }
  public set intervalAvgThroughput(value: number) {
    this._intervalAvgThroughput = value;
  }
  public resetIntervalAvgThroughput() {
    this._intervalAvgThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalAvgThroughputInput() {
    return this._intervalAvgThroughput;
  }

  // interval_fwd_bytes - computed: false, optional: true, required: false
  private _intervalFwdBytes?: number; 
  public get intervalFwdBytes() {
    return this.getNumberAttribute('interval_fwd_bytes');
  }
  public set intervalFwdBytes(value: number) {
    this._intervalFwdBytes = value;
  }
  public resetIntervalFwdBytes() {
    this._intervalFwdBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalFwdBytesInput() {
    return this._intervalFwdBytes;
  }

  // interval_max_throughput - computed: false, optional: true, required: false
  private _intervalMaxThroughput?: number; 
  public get intervalMaxThroughput() {
    return this.getNumberAttribute('interval_max_throughput');
  }
  public set intervalMaxThroughput(value: number) {
    this._intervalMaxThroughput = value;
  }
  public resetIntervalMaxThroughput() {
    this._intervalMaxThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalMaxThroughputInput() {
    return this._intervalMaxThroughput;
  }

  // link_total_conn - computed: false, optional: true, required: false
  private _linkTotalConn?: number; 
  public get linkTotalConn() {
    return this.getNumberAttribute('link_total_conn');
  }
  public set linkTotalConn(value: number) {
    this._linkTotalConn = value;
  }
  public resetLinkTotalConn() {
    this._linkTotalConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkTotalConnInput() {
    return this._linkTotalConn;
  }

  // link_total_fwd_bytes - computed: false, optional: true, required: false
  private _linkTotalFwdBytes?: number; 
  public get linkTotalFwdBytes() {
    return this.getNumberAttribute('link_total_fwd_bytes');
  }
  public set linkTotalFwdBytes(value: number) {
    this._linkTotalFwdBytes = value;
  }
  public resetLinkTotalFwdBytes() {
    this._linkTotalFwdBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkTotalFwdBytesInput() {
    return this._linkTotalFwdBytes;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_link_cost_stats thunder_slb_template_link_cost_stats}
*/
export class DataThunderSlbTemplateLinkCostStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_link_cost_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbTemplateLinkCostStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbTemplateLinkCostStats to import
  * @param importFromId The id of the existing DataThunderSlbTemplateLinkCostStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_link_cost_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbTemplateLinkCostStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_link_cost_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_link_cost_stats thunder_slb_template_link_cost_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbTemplateLinkCostStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbTemplateLinkCostStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_link_cost_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
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
    this._id = config.id;
    this._name = config.name;
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderSlbTemplateLinkCostStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbTemplateLinkCostStatsStats) {
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
      name: cdktf.stringToTerraform(this._name),
      stats: dataThunderSlbTemplateLinkCostStatsStatsToTerraform(this._stats.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: dataThunderSlbTemplateLinkCostStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbTemplateLinkCostStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
