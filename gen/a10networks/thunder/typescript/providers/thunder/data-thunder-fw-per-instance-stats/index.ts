// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_per_instance_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderFwPerInstanceStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_per_instance_stats#id DataThunderFwPerInstanceStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_per_instance_stats#stats DataThunderFwPerInstanceStats#stats}
  */
  readonly stats?: DataThunderFwPerInstanceStatsStats;
}
export interface DataThunderFwPerInstanceStatsStats {
  /**
  * Data Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_per_instance_stats#data_session_created DataThunderFwPerInstanceStats#data_session_created}
  */
  readonly dataSessionCreated?: number;
  /**
  * Data Session Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_per_instance_stats#data_session_freed DataThunderFwPerInstanceStats#data_session_freed}
  */
  readonly dataSessionFreed?: number;
  /**
  * Dynamic Blacklist Packet Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_per_instance_stats#dyn_blist_pkt_drop DataThunderFwPerInstanceStats#dyn_blist_pkt_drop}
  */
  readonly dynBlistPktDrop?: number;
  /**
  * Dynamic Blacklist - Pkt Rate High
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_per_instance_stats#dyn_blist_pkt_rate_high DataThunderFwPerInstanceStats#dyn_blist_pkt_rate_high}
  */
  readonly dynBlistPktRateHigh?: number;
  /**
  * Dynamic Blacklist - Pkt Rate Low
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_per_instance_stats#dyn_blist_pkt_rate_low DataThunderFwPerInstanceStats#dyn_blist_pkt_rate_low}
  */
  readonly dynBlistPktRateLow?: number;
  /**
  * Dynamic Blacklist Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_per_instance_stats#dyn_blist_sess_created DataThunderFwPerInstanceStats#dyn_blist_sess_created}
  */
  readonly dynBlistSessCreated?: number;
  /**
  * Dynamic Blacklist Session Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_per_instance_stats#dyn_blist_sess_freed DataThunderFwPerInstanceStats#dyn_blist_sess_freed}
  */
  readonly dynBlistSessFreed?: number;
  /**
  * Dynamic Blacklist - Version Mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_per_instance_stats#dyn_blist_version_mismatch DataThunderFwPerInstanceStats#dyn_blist_version_mismatch}
  */
  readonly dynBlistVersionMismatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_per_instance_stats#key_name DataThunderFwPerInstanceStats#key_name}
  */
  readonly keyName?: string;
  /**
  * TCP Full-cone Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_per_instance_stats#tcp_fullcone_created DataThunderFwPerInstanceStats#tcp_fullcone_created}
  */
  readonly tcpFullconeCreated?: number;
  /**
  * TCP Full-cone Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_per_instance_stats#tcp_fullcone_freed DataThunderFwPerInstanceStats#tcp_fullcone_freed}
  */
  readonly tcpFullconeFreed?: number;
  /**
  * UDP Full-cone Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_per_instance_stats#udp_fullcone_created DataThunderFwPerInstanceStats#udp_fullcone_created}
  */
  readonly udpFullconeCreated?: number;
  /**
  * UDP Full-cone Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_per_instance_stats#udp_fullcone_freed DataThunderFwPerInstanceStats#udp_fullcone_freed}
  */
  readonly udpFullconeFreed?: number;
}

export function dataThunderFwPerInstanceStatsStatsToTerraform(struct?: DataThunderFwPerInstanceStatsStatsOutputReference | DataThunderFwPerInstanceStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_session_created: cdktf.numberToTerraform(struct!.dataSessionCreated),
    data_session_freed: cdktf.numberToTerraform(struct!.dataSessionFreed),
    dyn_blist_pkt_drop: cdktf.numberToTerraform(struct!.dynBlistPktDrop),
    dyn_blist_pkt_rate_high: cdktf.numberToTerraform(struct!.dynBlistPktRateHigh),
    dyn_blist_pkt_rate_low: cdktf.numberToTerraform(struct!.dynBlistPktRateLow),
    dyn_blist_sess_created: cdktf.numberToTerraform(struct!.dynBlistSessCreated),
    dyn_blist_sess_freed: cdktf.numberToTerraform(struct!.dynBlistSessFreed),
    dyn_blist_version_mismatch: cdktf.numberToTerraform(struct!.dynBlistVersionMismatch),
    key_name: cdktf.stringToTerraform(struct!.keyName),
    tcp_fullcone_created: cdktf.numberToTerraform(struct!.tcpFullconeCreated),
    tcp_fullcone_freed: cdktf.numberToTerraform(struct!.tcpFullconeFreed),
    udp_fullcone_created: cdktf.numberToTerraform(struct!.udpFullconeCreated),
    udp_fullcone_freed: cdktf.numberToTerraform(struct!.udpFullconeFreed),
  }
}


export function dataThunderFwPerInstanceStatsStatsToHclTerraform(struct?: DataThunderFwPerInstanceStatsStatsOutputReference | DataThunderFwPerInstanceStatsStats): any {
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
    dyn_blist_pkt_drop: {
      value: cdktf.numberToHclTerraform(struct!.dynBlistPktDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dyn_blist_pkt_rate_high: {
      value: cdktf.numberToHclTerraform(struct!.dynBlistPktRateHigh),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dyn_blist_pkt_rate_low: {
      value: cdktf.numberToHclTerraform(struct!.dynBlistPktRateLow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dyn_blist_sess_created: {
      value: cdktf.numberToHclTerraform(struct!.dynBlistSessCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dyn_blist_sess_freed: {
      value: cdktf.numberToHclTerraform(struct!.dynBlistSessFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dyn_blist_version_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.dynBlistVersionMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key_name: {
      value: cdktf.stringToHclTerraform(struct!.keyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_fullcone_created: {
      value: cdktf.numberToHclTerraform(struct!.tcpFullconeCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_fullcone_freed: {
      value: cdktf.numberToHclTerraform(struct!.tcpFullconeFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_fullcone_created: {
      value: cdktf.numberToHclTerraform(struct!.udpFullconeCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_fullcone_freed: {
      value: cdktf.numberToHclTerraform(struct!.udpFullconeFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFwPerInstanceStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderFwPerInstanceStatsStats | undefined {
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
    if (this._dynBlistPktDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynBlistPktDrop = this._dynBlistPktDrop;
    }
    if (this._dynBlistPktRateHigh !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynBlistPktRateHigh = this._dynBlistPktRateHigh;
    }
    if (this._dynBlistPktRateLow !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynBlistPktRateLow = this._dynBlistPktRateLow;
    }
    if (this._dynBlistSessCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynBlistSessCreated = this._dynBlistSessCreated;
    }
    if (this._dynBlistSessFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynBlistSessFreed = this._dynBlistSessFreed;
    }
    if (this._dynBlistVersionMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynBlistVersionMismatch = this._dynBlistVersionMismatch;
    }
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._tcpFullconeCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFullconeCreated = this._tcpFullconeCreated;
    }
    if (this._tcpFullconeFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFullconeFreed = this._tcpFullconeFreed;
    }
    if (this._udpFullconeCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpFullconeCreated = this._udpFullconeCreated;
    }
    if (this._udpFullconeFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpFullconeFreed = this._udpFullconeFreed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFwPerInstanceStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSessionCreated = undefined;
      this._dataSessionFreed = undefined;
      this._dynBlistPktDrop = undefined;
      this._dynBlistPktRateHigh = undefined;
      this._dynBlistPktRateLow = undefined;
      this._dynBlistSessCreated = undefined;
      this._dynBlistSessFreed = undefined;
      this._dynBlistVersionMismatch = undefined;
      this._keyName = undefined;
      this._tcpFullconeCreated = undefined;
      this._tcpFullconeFreed = undefined;
      this._udpFullconeCreated = undefined;
      this._udpFullconeFreed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSessionCreated = value.dataSessionCreated;
      this._dataSessionFreed = value.dataSessionFreed;
      this._dynBlistPktDrop = value.dynBlistPktDrop;
      this._dynBlistPktRateHigh = value.dynBlistPktRateHigh;
      this._dynBlistPktRateLow = value.dynBlistPktRateLow;
      this._dynBlistSessCreated = value.dynBlistSessCreated;
      this._dynBlistSessFreed = value.dynBlistSessFreed;
      this._dynBlistVersionMismatch = value.dynBlistVersionMismatch;
      this._keyName = value.keyName;
      this._tcpFullconeCreated = value.tcpFullconeCreated;
      this._tcpFullconeFreed = value.tcpFullconeFreed;
      this._udpFullconeCreated = value.udpFullconeCreated;
      this._udpFullconeFreed = value.udpFullconeFreed;
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

  // dyn_blist_pkt_drop - computed: false, optional: true, required: false
  private _dynBlistPktDrop?: number; 
  public get dynBlistPktDrop() {
    return this.getNumberAttribute('dyn_blist_pkt_drop');
  }
  public set dynBlistPktDrop(value: number) {
    this._dynBlistPktDrop = value;
  }
  public resetDynBlistPktDrop() {
    this._dynBlistPktDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynBlistPktDropInput() {
    return this._dynBlistPktDrop;
  }

  // dyn_blist_pkt_rate_high - computed: false, optional: true, required: false
  private _dynBlistPktRateHigh?: number; 
  public get dynBlistPktRateHigh() {
    return this.getNumberAttribute('dyn_blist_pkt_rate_high');
  }
  public set dynBlistPktRateHigh(value: number) {
    this._dynBlistPktRateHigh = value;
  }
  public resetDynBlistPktRateHigh() {
    this._dynBlistPktRateHigh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynBlistPktRateHighInput() {
    return this._dynBlistPktRateHigh;
  }

  // dyn_blist_pkt_rate_low - computed: false, optional: true, required: false
  private _dynBlistPktRateLow?: number; 
  public get dynBlistPktRateLow() {
    return this.getNumberAttribute('dyn_blist_pkt_rate_low');
  }
  public set dynBlistPktRateLow(value: number) {
    this._dynBlistPktRateLow = value;
  }
  public resetDynBlistPktRateLow() {
    this._dynBlistPktRateLow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynBlistPktRateLowInput() {
    return this._dynBlistPktRateLow;
  }

  // dyn_blist_sess_created - computed: false, optional: true, required: false
  private _dynBlistSessCreated?: number; 
  public get dynBlistSessCreated() {
    return this.getNumberAttribute('dyn_blist_sess_created');
  }
  public set dynBlistSessCreated(value: number) {
    this._dynBlistSessCreated = value;
  }
  public resetDynBlistSessCreated() {
    this._dynBlistSessCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynBlistSessCreatedInput() {
    return this._dynBlistSessCreated;
  }

  // dyn_blist_sess_freed - computed: false, optional: true, required: false
  private _dynBlistSessFreed?: number; 
  public get dynBlistSessFreed() {
    return this.getNumberAttribute('dyn_blist_sess_freed');
  }
  public set dynBlistSessFreed(value: number) {
    this._dynBlistSessFreed = value;
  }
  public resetDynBlistSessFreed() {
    this._dynBlistSessFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynBlistSessFreedInput() {
    return this._dynBlistSessFreed;
  }

  // dyn_blist_version_mismatch - computed: false, optional: true, required: false
  private _dynBlistVersionMismatch?: number; 
  public get dynBlistVersionMismatch() {
    return this.getNumberAttribute('dyn_blist_version_mismatch');
  }
  public set dynBlistVersionMismatch(value: number) {
    this._dynBlistVersionMismatch = value;
  }
  public resetDynBlistVersionMismatch() {
    this._dynBlistVersionMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynBlistVersionMismatchInput() {
    return this._dynBlistVersionMismatch;
  }

  // key_name - computed: false, optional: true, required: false
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // tcp_fullcone_created - computed: false, optional: true, required: false
  private _tcpFullconeCreated?: number; 
  public get tcpFullconeCreated() {
    return this.getNumberAttribute('tcp_fullcone_created');
  }
  public set tcpFullconeCreated(value: number) {
    this._tcpFullconeCreated = value;
  }
  public resetTcpFullconeCreated() {
    this._tcpFullconeCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFullconeCreatedInput() {
    return this._tcpFullconeCreated;
  }

  // tcp_fullcone_freed - computed: false, optional: true, required: false
  private _tcpFullconeFreed?: number; 
  public get tcpFullconeFreed() {
    return this.getNumberAttribute('tcp_fullcone_freed');
  }
  public set tcpFullconeFreed(value: number) {
    this._tcpFullconeFreed = value;
  }
  public resetTcpFullconeFreed() {
    this._tcpFullconeFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFullconeFreedInput() {
    return this._tcpFullconeFreed;
  }

  // udp_fullcone_created - computed: false, optional: true, required: false
  private _udpFullconeCreated?: number; 
  public get udpFullconeCreated() {
    return this.getNumberAttribute('udp_fullcone_created');
  }
  public set udpFullconeCreated(value: number) {
    this._udpFullconeCreated = value;
  }
  public resetUdpFullconeCreated() {
    this._udpFullconeCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpFullconeCreatedInput() {
    return this._udpFullconeCreated;
  }

  // udp_fullcone_freed - computed: false, optional: true, required: false
  private _udpFullconeFreed?: number; 
  public get udpFullconeFreed() {
    return this.getNumberAttribute('udp_fullcone_freed');
  }
  public set udpFullconeFreed(value: number) {
    this._udpFullconeFreed = value;
  }
  public resetUdpFullconeFreed() {
    this._udpFullconeFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpFullconeFreedInput() {
    return this._udpFullconeFreed;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_per_instance_stats thunder_fw_per_instance_stats}
*/
export class DataThunderFwPerInstanceStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_per_instance_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderFwPerInstanceStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderFwPerInstanceStats to import
  * @param importFromId The id of the existing DataThunderFwPerInstanceStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_per_instance_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderFwPerInstanceStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_per_instance_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_per_instance_stats thunder_fw_per_instance_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderFwPerInstanceStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderFwPerInstanceStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_per_instance_stats',
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
  private _stats = new DataThunderFwPerInstanceStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderFwPerInstanceStatsStats) {
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
      stats: dataThunderFwPerInstanceStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderFwPerInstanceStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderFwPerInstanceStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
