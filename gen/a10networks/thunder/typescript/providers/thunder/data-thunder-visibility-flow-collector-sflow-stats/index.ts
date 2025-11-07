// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_flow_collector_sflow_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVisibilityFlowCollectorSflowStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_flow_collector_sflow_stats#id DataThunderVisibilityFlowCollectorSflowStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_flow_collector_sflow_stats#stats DataThunderVisibilityFlowCollectorSflowStats#stats}
  */
  readonly stats?: DataThunderVisibilityFlowCollectorSflowStatsStats;
}
export interface DataThunderVisibilityFlowCollectorSflowStatsStats {
  /**
  * sflow pkts from not configured agents
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_flow_collector_sflow_stats#agent_not_found DataThunderVisibilityFlowCollectorSflowStats#agent_not_found}
  */
  readonly agentNotFound?: number;
  /**
  * Total sflow fragment packets droppped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_flow_collector_sflow_stats#frag_dropped DataThunderVisibilityFlowCollectorSflowStats#frag_dropped}
  */
  readonly fragDropped?: number;
  /**
  * Total sflow pkts received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_flow_collector_sflow_stats#pkts_received DataThunderVisibilityFlowCollectorSflowStats#pkts_received}
  */
  readonly pktsReceived?: number;
  /**
  * sflow sample direction is unknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_flow_collector_sflow_stats#unknown_dir DataThunderVisibilityFlowCollectorSflowStats#unknown_dir}
  */
  readonly unknownDir?: number;
  /**
  * sflow version not supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_flow_collector_sflow_stats#version_not_supported DataThunderVisibilityFlowCollectorSflowStats#version_not_supported}
  */
  readonly versionNotSupported?: number;
}

export function dataThunderVisibilityFlowCollectorSflowStatsStatsToTerraform(struct?: DataThunderVisibilityFlowCollectorSflowStatsStatsOutputReference | DataThunderVisibilityFlowCollectorSflowStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_not_found: cdktf.numberToTerraform(struct!.agentNotFound),
    frag_dropped: cdktf.numberToTerraform(struct!.fragDropped),
    pkts_received: cdktf.numberToTerraform(struct!.pktsReceived),
    unknown_dir: cdktf.numberToTerraform(struct!.unknownDir),
    version_not_supported: cdktf.numberToTerraform(struct!.versionNotSupported),
  }
}


export function dataThunderVisibilityFlowCollectorSflowStatsStatsToHclTerraform(struct?: DataThunderVisibilityFlowCollectorSflowStatsStatsOutputReference | DataThunderVisibilityFlowCollectorSflowStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_not_found: {
      value: cdktf.numberToHclTerraform(struct!.agentNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frag_dropped: {
      value: cdktf.numberToHclTerraform(struct!.fragDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkts_received: {
      value: cdktf.numberToHclTerraform(struct!.pktsReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_dir: {
      value: cdktf.numberToHclTerraform(struct!.unknownDir),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version_not_supported: {
      value: cdktf.numberToHclTerraform(struct!.versionNotSupported),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityFlowCollectorSflowStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityFlowCollectorSflowStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentNotFound = this._agentNotFound;
    }
    if (this._fragDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragDropped = this._fragDropped;
    }
    if (this._pktsReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktsReceived = this._pktsReceived;
    }
    if (this._unknownDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownDir = this._unknownDir;
    }
    if (this._versionNotSupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionNotSupported = this._versionNotSupported;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityFlowCollectorSflowStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agentNotFound = undefined;
      this._fragDropped = undefined;
      this._pktsReceived = undefined;
      this._unknownDir = undefined;
      this._versionNotSupported = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agentNotFound = value.agentNotFound;
      this._fragDropped = value.fragDropped;
      this._pktsReceived = value.pktsReceived;
      this._unknownDir = value.unknownDir;
      this._versionNotSupported = value.versionNotSupported;
    }
  }

  // agent_not_found - computed: false, optional: true, required: false
  private _agentNotFound?: number; 
  public get agentNotFound() {
    return this.getNumberAttribute('agent_not_found');
  }
  public set agentNotFound(value: number) {
    this._agentNotFound = value;
  }
  public resetAgentNotFound() {
    this._agentNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentNotFoundInput() {
    return this._agentNotFound;
  }

  // frag_dropped - computed: false, optional: true, required: false
  private _fragDropped?: number; 
  public get fragDropped() {
    return this.getNumberAttribute('frag_dropped');
  }
  public set fragDropped(value: number) {
    this._fragDropped = value;
  }
  public resetFragDropped() {
    this._fragDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragDroppedInput() {
    return this._fragDropped;
  }

  // pkts_received - computed: false, optional: true, required: false
  private _pktsReceived?: number; 
  public get pktsReceived() {
    return this.getNumberAttribute('pkts_received');
  }
  public set pktsReceived(value: number) {
    this._pktsReceived = value;
  }
  public resetPktsReceived() {
    this._pktsReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktsReceivedInput() {
    return this._pktsReceived;
  }

  // unknown_dir - computed: false, optional: true, required: false
  private _unknownDir?: number; 
  public get unknownDir() {
    return this.getNumberAttribute('unknown_dir');
  }
  public set unknownDir(value: number) {
    this._unknownDir = value;
  }
  public resetUnknownDir() {
    this._unknownDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownDirInput() {
    return this._unknownDir;
  }

  // version_not_supported - computed: false, optional: true, required: false
  private _versionNotSupported?: number; 
  public get versionNotSupported() {
    return this.getNumberAttribute('version_not_supported');
  }
  public set versionNotSupported(value: number) {
    this._versionNotSupported = value;
  }
  public resetVersionNotSupported() {
    this._versionNotSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionNotSupportedInput() {
    return this._versionNotSupported;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_flow_collector_sflow_stats thunder_visibility_flow_collector_sflow_stats}
*/
export class DataThunderVisibilityFlowCollectorSflowStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_flow_collector_sflow_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVisibilityFlowCollectorSflowStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVisibilityFlowCollectorSflowStats to import
  * @param importFromId The id of the existing DataThunderVisibilityFlowCollectorSflowStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_flow_collector_sflow_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVisibilityFlowCollectorSflowStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_flow_collector_sflow_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_flow_collector_sflow_stats thunder_visibility_flow_collector_sflow_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVisibilityFlowCollectorSflowStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVisibilityFlowCollectorSflowStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_flow_collector_sflow_stats',
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
  private _stats = new DataThunderVisibilityFlowCollectorSflowStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderVisibilityFlowCollectorSflowStatsStats) {
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
      stats: dataThunderVisibilityFlowCollectorSflowStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderVisibilityFlowCollectorSflowStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityFlowCollectorSflowStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
