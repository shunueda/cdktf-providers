// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_collector_group_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAcosEventsCollectorGroupStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_collector_group_stats#id DataThunderAcosEventsCollectorGroupStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify log server group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_collector_group_stats#name DataThunderAcosEventsCollectorGroupStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_collector_group_stats#stats DataThunderAcosEventsCollectorGroupStats#stats}
  */
  readonly stats?: DataThunderAcosEventsCollectorGroupStatsStats;
}
export interface DataThunderAcosEventsCollectorGroupStatsStats {
  /**
  * Number of log messages sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_collector_group_stats#msgs_sent DataThunderAcosEventsCollectorGroupStats#msgs_sent}
  */
  readonly msgsSent?: number;
}

export function dataThunderAcosEventsCollectorGroupStatsStatsToTerraform(struct?: DataThunderAcosEventsCollectorGroupStatsStatsOutputReference | DataThunderAcosEventsCollectorGroupStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    msgs_sent: cdktf.numberToTerraform(struct!.msgsSent),
  }
}


export function dataThunderAcosEventsCollectorGroupStatsStatsToHclTerraform(struct?: DataThunderAcosEventsCollectorGroupStatsStatsOutputReference | DataThunderAcosEventsCollectorGroupStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    msgs_sent: {
      value: cdktf.numberToHclTerraform(struct!.msgsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAcosEventsCollectorGroupStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAcosEventsCollectorGroupStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._msgsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgsSent = this._msgsSent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAcosEventsCollectorGroupStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._msgsSent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._msgsSent = value.msgsSent;
    }
  }

  // msgs_sent - computed: false, optional: true, required: false
  private _msgsSent?: number; 
  public get msgsSent() {
    return this.getNumberAttribute('msgs_sent');
  }
  public set msgsSent(value: number) {
    this._msgsSent = value;
  }
  public resetMsgsSent() {
    this._msgsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgsSentInput() {
    return this._msgsSent;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_collector_group_stats thunder_acos_events_collector_group_stats}
*/
export class DataThunderAcosEventsCollectorGroupStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_acos_events_collector_group_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAcosEventsCollectorGroupStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAcosEventsCollectorGroupStats to import
  * @param importFromId The id of the existing DataThunderAcosEventsCollectorGroupStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_collector_group_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAcosEventsCollectorGroupStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_acos_events_collector_group_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_collector_group_stats thunder_acos_events_collector_group_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAcosEventsCollectorGroupStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderAcosEventsCollectorGroupStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_acos_events_collector_group_stats',
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
  private _stats = new DataThunderAcosEventsCollectorGroupStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderAcosEventsCollectorGroupStatsStats) {
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
      stats: dataThunderAcosEventsCollectorGroupStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderAcosEventsCollectorGroupStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAcosEventsCollectorGroupStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
