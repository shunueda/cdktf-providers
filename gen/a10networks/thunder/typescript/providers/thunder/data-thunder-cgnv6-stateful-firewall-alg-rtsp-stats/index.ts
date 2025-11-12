// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_rtsp_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6StatefulFirewallAlgRtspStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_rtsp_stats#id DataThunderCgnv6StatefulFirewallAlgRtspStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_rtsp_stats#stats DataThunderCgnv6StatefulFirewallAlgRtspStats#stats}
  */
  readonly stats?: DataThunderCgnv6StatefulFirewallAlgRtspStatsStats;
}
export interface DataThunderCgnv6StatefulFirewallAlgRtspStatsStats {
  /**
  * Data Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_rtsp_stats#data_session_created DataThunderCgnv6StatefulFirewallAlgRtspStats#data_session_created}
  */
  readonly dataSessionCreated?: number;
  /**
  * Data Session Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_rtsp_stats#data_session_freed DataThunderCgnv6StatefulFirewallAlgRtspStats#data_session_freed}
  */
  readonly dataSessionFreed?: number;
  /**
  * Transport Alloc Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_rtsp_stats#transport_alloc_failure DataThunderCgnv6StatefulFirewallAlgRtspStats#transport_alloc_failure}
  */
  readonly transportAllocFailure?: number;
  /**
  * Transport Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_rtsp_stats#transport_freed DataThunderCgnv6StatefulFirewallAlgRtspStats#transport_freed}
  */
  readonly transportFreed?: number;
  /**
  * Transport Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_rtsp_stats#transport_inserted DataThunderCgnv6StatefulFirewallAlgRtspStats#transport_inserted}
  */
  readonly transportInserted?: number;
}

export function dataThunderCgnv6StatefulFirewallAlgRtspStatsStatsToTerraform(struct?: DataThunderCgnv6StatefulFirewallAlgRtspStatsStatsOutputReference | DataThunderCgnv6StatefulFirewallAlgRtspStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_session_created: cdktf.numberToTerraform(struct!.dataSessionCreated),
    data_session_freed: cdktf.numberToTerraform(struct!.dataSessionFreed),
    transport_alloc_failure: cdktf.numberToTerraform(struct!.transportAllocFailure),
    transport_freed: cdktf.numberToTerraform(struct!.transportFreed),
    transport_inserted: cdktf.numberToTerraform(struct!.transportInserted),
  }
}


export function dataThunderCgnv6StatefulFirewallAlgRtspStatsStatsToHclTerraform(struct?: DataThunderCgnv6StatefulFirewallAlgRtspStatsStatsOutputReference | DataThunderCgnv6StatefulFirewallAlgRtspStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_session_created: {
      value: cdktf.numberToHclTerraform(struct!.dataSessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_session_freed: {
      value: cdktf.numberToHclTerraform(struct!.dataSessionFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transport_alloc_failure: {
      value: cdktf.numberToHclTerraform(struct!.transportAllocFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transport_freed: {
      value: cdktf.numberToHclTerraform(struct!.transportFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transport_inserted: {
      value: cdktf.numberToHclTerraform(struct!.transportInserted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6StatefulFirewallAlgRtspStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6StatefulFirewallAlgRtspStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSessionCreated = this._dataSessionCreated;
    }
    if (this._dataSessionFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSessionFreed = this._dataSessionFreed;
    }
    if (this._transportAllocFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportAllocFailure = this._transportAllocFailure;
    }
    if (this._transportFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportFreed = this._transportFreed;
    }
    if (this._transportInserted !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportInserted = this._transportInserted;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6StatefulFirewallAlgRtspStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSessionCreated = undefined;
      this._dataSessionFreed = undefined;
      this._transportAllocFailure = undefined;
      this._transportFreed = undefined;
      this._transportInserted = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSessionCreated = value.dataSessionCreated;
      this._dataSessionFreed = value.dataSessionFreed;
      this._transportAllocFailure = value.transportAllocFailure;
      this._transportFreed = value.transportFreed;
      this._transportInserted = value.transportInserted;
    }
  }

  // data_session_created - computed: false, optional: true, required: false
  private _dataSessionCreated?: number; 
  public get dataSessionCreated() {
    return this.getNumberAttribute('data_session_created');
  }
  public set dataSessionCreated(value: number) {
    this._dataSessionCreated = value;
  }
  public resetDataSessionCreated() {
    this._dataSessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSessionCreatedInput() {
    return this._dataSessionCreated;
  }

  // data_session_freed - computed: false, optional: true, required: false
  private _dataSessionFreed?: number; 
  public get dataSessionFreed() {
    return this.getNumberAttribute('data_session_freed');
  }
  public set dataSessionFreed(value: number) {
    this._dataSessionFreed = value;
  }
  public resetDataSessionFreed() {
    this._dataSessionFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSessionFreedInput() {
    return this._dataSessionFreed;
  }

  // transport_alloc_failure - computed: false, optional: true, required: false
  private _transportAllocFailure?: number; 
  public get transportAllocFailure() {
    return this.getNumberAttribute('transport_alloc_failure');
  }
  public set transportAllocFailure(value: number) {
    this._transportAllocFailure = value;
  }
  public resetTransportAllocFailure() {
    this._transportAllocFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportAllocFailureInput() {
    return this._transportAllocFailure;
  }

  // transport_freed - computed: false, optional: true, required: false
  private _transportFreed?: number; 
  public get transportFreed() {
    return this.getNumberAttribute('transport_freed');
  }
  public set transportFreed(value: number) {
    this._transportFreed = value;
  }
  public resetTransportFreed() {
    this._transportFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportFreedInput() {
    return this._transportFreed;
  }

  // transport_inserted - computed: false, optional: true, required: false
  private _transportInserted?: number; 
  public get transportInserted() {
    return this.getNumberAttribute('transport_inserted');
  }
  public set transportInserted(value: number) {
    this._transportInserted = value;
  }
  public resetTransportInserted() {
    this._transportInserted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInsertedInput() {
    return this._transportInserted;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_rtsp_stats thunder_cgnv6_stateful_firewall_alg_rtsp_stats}
*/
export class DataThunderCgnv6StatefulFirewallAlgRtspStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_stateful_firewall_alg_rtsp_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6StatefulFirewallAlgRtspStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6StatefulFirewallAlgRtspStats to import
  * @param importFromId The id of the existing DataThunderCgnv6StatefulFirewallAlgRtspStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_rtsp_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6StatefulFirewallAlgRtspStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_stateful_firewall_alg_rtsp_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_rtsp_stats thunder_cgnv6_stateful_firewall_alg_rtsp_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6StatefulFirewallAlgRtspStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6StatefulFirewallAlgRtspStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_stateful_firewall_alg_rtsp_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
  private _stats = new DataThunderCgnv6StatefulFirewallAlgRtspStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderCgnv6StatefulFirewallAlgRtspStatsStats) {
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
      stats: dataThunderCgnv6StatefulFirewallAlgRtspStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderCgnv6StatefulFirewallAlgRtspStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6StatefulFirewallAlgRtspStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
