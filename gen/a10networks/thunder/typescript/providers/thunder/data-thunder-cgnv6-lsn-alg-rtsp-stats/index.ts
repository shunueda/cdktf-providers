// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_rtsp_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6LsnAlgRtspStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_rtsp_stats#id DataThunderCgnv6LsnAlgRtspStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_rtsp_stats#stats DataThunderCgnv6LsnAlgRtspStats#stats}
  */
  readonly stats?: DataThunderCgnv6LsnAlgRtspStatsStats;
}
export interface DataThunderCgnv6LsnAlgRtspStatsStats {
  /**
  * Data Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_rtsp_stats#data_session_created DataThunderCgnv6LsnAlgRtspStats#data_session_created}
  */
  readonly dataSessionCreated?: number;
  /**
  * Data Session Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_rtsp_stats#data_session_freed DataThunderCgnv6LsnAlgRtspStats#data_session_freed}
  */
  readonly dataSessionFreed?: number;
  /**
  * Data Session Creation Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_rtsp_stats#no_session_mem DataThunderCgnv6LsnAlgRtspStats#no_session_mem}
  */
  readonly noSessionMem?: number;
  /**
  * Stream Client Port Allocation Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_rtsp_stats#port_allocation_failure DataThunderCgnv6LsnAlgRtspStats#port_allocation_failure}
  */
  readonly portAllocationFailure?: number;
  /**
  * Stream Client Ports Allocated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_rtsp_stats#ports_allocated DataThunderCgnv6LsnAlgRtspStats#ports_allocated}
  */
  readonly portsAllocated?: number;
  /**
  * Stream Client Ports Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_rtsp_stats#ports_freed DataThunderCgnv6LsnAlgRtspStats#ports_freed}
  */
  readonly portsFreed?: number;
  /**
  * Stream Creation Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_rtsp_stats#stream_creation_failure DataThunderCgnv6LsnAlgRtspStats#stream_creation_failure}
  */
  readonly streamCreationFailure?: number;
  /**
  * Streams Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_rtsp_stats#streams_created DataThunderCgnv6LsnAlgRtspStats#streams_created}
  */
  readonly streamsCreated?: number;
  /**
  * Streams Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_rtsp_stats#streams_freed DataThunderCgnv6LsnAlgRtspStats#streams_freed}
  */
  readonly streamsFreed?: number;
  /**
  * Server Replies With Unknown Client Ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_rtsp_stats#unknown_client_port_from_server DataThunderCgnv6LsnAlgRtspStats#unknown_client_port_from_server}
  */
  readonly unknownClientPortFromServer?: number;
}

export function dataThunderCgnv6LsnAlgRtspStatsStatsToTerraform(struct?: DataThunderCgnv6LsnAlgRtspStatsStatsOutputReference | DataThunderCgnv6LsnAlgRtspStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_session_created: cdktf.numberToTerraform(struct!.dataSessionCreated),
    data_session_freed: cdktf.numberToTerraform(struct!.dataSessionFreed),
    no_session_mem: cdktf.numberToTerraform(struct!.noSessionMem),
    port_allocation_failure: cdktf.numberToTerraform(struct!.portAllocationFailure),
    ports_allocated: cdktf.numberToTerraform(struct!.portsAllocated),
    ports_freed: cdktf.numberToTerraform(struct!.portsFreed),
    stream_creation_failure: cdktf.numberToTerraform(struct!.streamCreationFailure),
    streams_created: cdktf.numberToTerraform(struct!.streamsCreated),
    streams_freed: cdktf.numberToTerraform(struct!.streamsFreed),
    unknown_client_port_from_server: cdktf.numberToTerraform(struct!.unknownClientPortFromServer),
  }
}


export function dataThunderCgnv6LsnAlgRtspStatsStatsToHclTerraform(struct?: DataThunderCgnv6LsnAlgRtspStatsStatsOutputReference | DataThunderCgnv6LsnAlgRtspStatsStats): any {
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
    no_session_mem: {
      value: cdktf.numberToHclTerraform(struct!.noSessionMem),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_allocation_failure: {
      value: cdktf.numberToHclTerraform(struct!.portAllocationFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports_allocated: {
      value: cdktf.numberToHclTerraform(struct!.portsAllocated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports_freed: {
      value: cdktf.numberToHclTerraform(struct!.portsFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_creation_failure: {
      value: cdktf.numberToHclTerraform(struct!.streamCreationFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    streams_created: {
      value: cdktf.numberToHclTerraform(struct!.streamsCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    streams_freed: {
      value: cdktf.numberToHclTerraform(struct!.streamsFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_client_port_from_server: {
      value: cdktf.numberToHclTerraform(struct!.unknownClientPortFromServer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6LsnAlgRtspStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6LsnAlgRtspStatsStats | undefined {
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
    if (this._noSessionMem !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSessionMem = this._noSessionMem;
    }
    if (this._portAllocationFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.portAllocationFailure = this._portAllocationFailure;
    }
    if (this._portsAllocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.portsAllocated = this._portsAllocated;
    }
    if (this._portsFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.portsFreed = this._portsFreed;
    }
    if (this._streamCreationFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamCreationFailure = this._streamCreationFailure;
    }
    if (this._streamsCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamsCreated = this._streamsCreated;
    }
    if (this._streamsFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamsFreed = this._streamsFreed;
    }
    if (this._unknownClientPortFromServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownClientPortFromServer = this._unknownClientPortFromServer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6LsnAlgRtspStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSessionCreated = undefined;
      this._dataSessionFreed = undefined;
      this._noSessionMem = undefined;
      this._portAllocationFailure = undefined;
      this._portsAllocated = undefined;
      this._portsFreed = undefined;
      this._streamCreationFailure = undefined;
      this._streamsCreated = undefined;
      this._streamsFreed = undefined;
      this._unknownClientPortFromServer = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSessionCreated = value.dataSessionCreated;
      this._dataSessionFreed = value.dataSessionFreed;
      this._noSessionMem = value.noSessionMem;
      this._portAllocationFailure = value.portAllocationFailure;
      this._portsAllocated = value.portsAllocated;
      this._portsFreed = value.portsFreed;
      this._streamCreationFailure = value.streamCreationFailure;
      this._streamsCreated = value.streamsCreated;
      this._streamsFreed = value.streamsFreed;
      this._unknownClientPortFromServer = value.unknownClientPortFromServer;
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

  // no_session_mem - computed: false, optional: true, required: false
  private _noSessionMem?: number; 
  public get noSessionMem() {
    return this.getNumberAttribute('no_session_mem');
  }
  public set noSessionMem(value: number) {
    this._noSessionMem = value;
  }
  public resetNoSessionMem() {
    this._noSessionMem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSessionMemInput() {
    return this._noSessionMem;
  }

  // port_allocation_failure - computed: false, optional: true, required: false
  private _portAllocationFailure?: number; 
  public get portAllocationFailure() {
    return this.getNumberAttribute('port_allocation_failure');
  }
  public set portAllocationFailure(value: number) {
    this._portAllocationFailure = value;
  }
  public resetPortAllocationFailure() {
    this._portAllocationFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portAllocationFailureInput() {
    return this._portAllocationFailure;
  }

  // ports_allocated - computed: false, optional: true, required: false
  private _portsAllocated?: number; 
  public get portsAllocated() {
    return this.getNumberAttribute('ports_allocated');
  }
  public set portsAllocated(value: number) {
    this._portsAllocated = value;
  }
  public resetPortsAllocated() {
    this._portsAllocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsAllocatedInput() {
    return this._portsAllocated;
  }

  // ports_freed - computed: false, optional: true, required: false
  private _portsFreed?: number; 
  public get portsFreed() {
    return this.getNumberAttribute('ports_freed');
  }
  public set portsFreed(value: number) {
    this._portsFreed = value;
  }
  public resetPortsFreed() {
    this._portsFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsFreedInput() {
    return this._portsFreed;
  }

  // stream_creation_failure - computed: false, optional: true, required: false
  private _streamCreationFailure?: number; 
  public get streamCreationFailure() {
    return this.getNumberAttribute('stream_creation_failure');
  }
  public set streamCreationFailure(value: number) {
    this._streamCreationFailure = value;
  }
  public resetStreamCreationFailure() {
    this._streamCreationFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamCreationFailureInput() {
    return this._streamCreationFailure;
  }

  // streams_created - computed: false, optional: true, required: false
  private _streamsCreated?: number; 
  public get streamsCreated() {
    return this.getNumberAttribute('streams_created');
  }
  public set streamsCreated(value: number) {
    this._streamsCreated = value;
  }
  public resetStreamsCreated() {
    this._streamsCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamsCreatedInput() {
    return this._streamsCreated;
  }

  // streams_freed - computed: false, optional: true, required: false
  private _streamsFreed?: number; 
  public get streamsFreed() {
    return this.getNumberAttribute('streams_freed');
  }
  public set streamsFreed(value: number) {
    this._streamsFreed = value;
  }
  public resetStreamsFreed() {
    this._streamsFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamsFreedInput() {
    return this._streamsFreed;
  }

  // unknown_client_port_from_server - computed: false, optional: true, required: false
  private _unknownClientPortFromServer?: number; 
  public get unknownClientPortFromServer() {
    return this.getNumberAttribute('unknown_client_port_from_server');
  }
  public set unknownClientPortFromServer(value: number) {
    this._unknownClientPortFromServer = value;
  }
  public resetUnknownClientPortFromServer() {
    this._unknownClientPortFromServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownClientPortFromServerInput() {
    return this._unknownClientPortFromServer;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_rtsp_stats thunder_cgnv6_lsn_alg_rtsp_stats}
*/
export class DataThunderCgnv6LsnAlgRtspStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_lsn_alg_rtsp_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6LsnAlgRtspStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6LsnAlgRtspStats to import
  * @param importFromId The id of the existing DataThunderCgnv6LsnAlgRtspStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_rtsp_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6LsnAlgRtspStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_lsn_alg_rtsp_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_rtsp_stats thunder_cgnv6_lsn_alg_rtsp_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6LsnAlgRtspStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6LsnAlgRtspStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_lsn_alg_rtsp_stats',
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
  private _stats = new DataThunderCgnv6LsnAlgRtspStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderCgnv6LsnAlgRtspStatsStats) {
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
      stats: dataThunderCgnv6LsnAlgRtspStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderCgnv6LsnAlgRtspStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6LsnAlgRtspStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
