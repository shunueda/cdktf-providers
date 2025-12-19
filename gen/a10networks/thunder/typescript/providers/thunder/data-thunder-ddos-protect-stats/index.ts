// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protect_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosProtectStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protect_stats#id DataThunderDdosProtectStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protect_stats#stats DataThunderDdosProtectStats#stats}
  */
  readonly stats?: DataThunderDdosProtectStatsStats;
}
export interface DataThunderDdosProtectStatsStats {
  /**
  * DDOS DCMSG Pkt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protect_stats#dcmsg_pkt DataThunderDdosProtectStats#dcmsg_pkt}
  */
  readonly dcmsgPkt?: number;
  /**
  * DDOS RR Session Lookup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protect_stats#rr_sess_lookup DataThunderDdosProtectStats#rr_sess_lookup}
  */
  readonly rrSessLookup?: number;
  /**
  * DDOS Runtime Disable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protect_stats#runtime_disable DataThunderDdosProtectStats#runtime_disable}
  */
  readonly runtimeDisable?: number;
  /**
  * DDOS Runtime Enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protect_stats#runtime_enable DataThunderDdosProtectStats#runtime_enable}
  */
  readonly runtimeEnable?: number;
}

export function dataThunderDdosProtectStatsStatsToTerraform(struct?: DataThunderDdosProtectStatsStatsOutputReference | DataThunderDdosProtectStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dcmsg_pkt: cdktf.numberToTerraform(struct!.dcmsgPkt),
    rr_sess_lookup: cdktf.numberToTerraform(struct!.rrSessLookup),
    runtime_disable: cdktf.numberToTerraform(struct!.runtimeDisable),
    runtime_enable: cdktf.numberToTerraform(struct!.runtimeEnable),
  }
}


export function dataThunderDdosProtectStatsStatsToHclTerraform(struct?: DataThunderDdosProtectStatsStatsOutputReference | DataThunderDdosProtectStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dcmsg_pkt: {
      value: cdktf.numberToHclTerraform(struct!.dcmsgPkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rr_sess_lookup: {
      value: cdktf.numberToHclTerraform(struct!.rrSessLookup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    runtime_disable: {
      value: cdktf.numberToHclTerraform(struct!.runtimeDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    runtime_enable: {
      value: cdktf.numberToHclTerraform(struct!.runtimeEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosProtectStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosProtectStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dcmsgPkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcmsgPkt = this._dcmsgPkt;
    }
    if (this._rrSessLookup !== undefined) {
      hasAnyValues = true;
      internalValueResult.rrSessLookup = this._rrSessLookup;
    }
    if (this._runtimeDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeDisable = this._runtimeDisable;
    }
    if (this._runtimeEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeEnable = this._runtimeEnable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosProtectStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dcmsgPkt = undefined;
      this._rrSessLookup = undefined;
      this._runtimeDisable = undefined;
      this._runtimeEnable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dcmsgPkt = value.dcmsgPkt;
      this._rrSessLookup = value.rrSessLookup;
      this._runtimeDisable = value.runtimeDisable;
      this._runtimeEnable = value.runtimeEnable;
    }
  }

  // dcmsg_pkt - computed: false, optional: true, required: false
  private _dcmsgPkt?: number; 
  public get dcmsgPkt() {
    return this.getNumberAttribute('dcmsg_pkt');
  }
  public set dcmsgPkt(value: number) {
    this._dcmsgPkt = value;
  }
  public resetDcmsgPkt() {
    this._dcmsgPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcmsgPktInput() {
    return this._dcmsgPkt;
  }

  // rr_sess_lookup - computed: false, optional: true, required: false
  private _rrSessLookup?: number; 
  public get rrSessLookup() {
    return this.getNumberAttribute('rr_sess_lookup');
  }
  public set rrSessLookup(value: number) {
    this._rrSessLookup = value;
  }
  public resetRrSessLookup() {
    this._rrSessLookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrSessLookupInput() {
    return this._rrSessLookup;
  }

  // runtime_disable - computed: false, optional: true, required: false
  private _runtimeDisable?: number; 
  public get runtimeDisable() {
    return this.getNumberAttribute('runtime_disable');
  }
  public set runtimeDisable(value: number) {
    this._runtimeDisable = value;
  }
  public resetRuntimeDisable() {
    this._runtimeDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeDisableInput() {
    return this._runtimeDisable;
  }

  // runtime_enable - computed: false, optional: true, required: false
  private _runtimeEnable?: number; 
  public get runtimeEnable() {
    return this.getNumberAttribute('runtime_enable');
  }
  public set runtimeEnable(value: number) {
    this._runtimeEnable = value;
  }
  public resetRuntimeEnable() {
    this._runtimeEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeEnableInput() {
    return this._runtimeEnable;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protect_stats thunder_ddos_protect_stats}
*/
export class DataThunderDdosProtectStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_protect_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosProtectStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosProtectStats to import
  * @param importFromId The id of the existing DataThunderDdosProtectStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protect_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosProtectStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_protect_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protect_stats thunder_ddos_protect_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosProtectStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosProtectStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_protect_stats',
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
  private _stats = new DataThunderDdosProtectStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderDdosProtectStatsStats) {
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
      stats: dataThunderDdosProtectStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderDdosProtectStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosProtectStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
