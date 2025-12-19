// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_rate_limit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DebugRateLimitConfig extends cdktf.TerraformMetaArguments {
  /**
  * Starting From 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_rate_limit#cpu_id DebugRateLimit#cpu_id}
  */
  readonly cpuId?: number;
  /**
  * Dummy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_rate_limit#dumy DebugRateLimit#dumy}
  */
  readonly dumy?: number;
  /**
  * Source Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_rate_limit#entry_ip DebugRateLimit#entry_ip}
  */
  readonly entryIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_rate_limit#id DebugRateLimit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Print entry life cycle info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_rate_limit#life_cycle_log DebugRateLimit#life_cycle_log}
  */
  readonly lifeCycleLog?: number;
  /**
  * CPS 0 Uplink 1 Downlink 2 Total 3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_rate_limit#metric DebugRateLimit#metric}
  */
  readonly metric?: number;
  /**
  * Print entry info based on code path of each pkt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_rate_limit#per_pkt_log DebugRateLimit#per_pkt_log}
  */
  readonly perPktLog?: number;
  /**
  * Print entry info per second
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_rate_limit#raw_log DebugRateLimit#raw_log}
  */
  readonly rawLog?: number;
  /**
  * Template ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_rate_limit#tpl_id DebugRateLimit#tpl_id}
  */
  readonly tplId?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_rate_limit#uuid DebugRateLimit#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_rate_limit thunder_debug_rate_limit}
*/
export class DebugRateLimit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_debug_rate_limit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DebugRateLimit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DebugRateLimit to import
  * @param importFromId The id of the existing DebugRateLimit that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_rate_limit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DebugRateLimit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_debug_rate_limit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_rate_limit thunder_debug_rate_limit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DebugRateLimitConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DebugRateLimitConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_debug_rate_limit',
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
    this._cpuId = config.cpuId;
    this._dumy = config.dumy;
    this._entryIp = config.entryIp;
    this._id = config.id;
    this._lifeCycleLog = config.lifeCycleLog;
    this._metric = config.metric;
    this._perPktLog = config.perPktLog;
    this._rawLog = config.rawLog;
    this._tplId = config.tplId;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpu_id - computed: false, optional: true, required: false
  private _cpuId?: number; 
  public get cpuId() {
    return this.getNumberAttribute('cpu_id');
  }
  public set cpuId(value: number) {
    this._cpuId = value;
  }
  public resetCpuId() {
    this._cpuId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuIdInput() {
    return this._cpuId;
  }

  // dumy - computed: false, optional: true, required: false
  private _dumy?: number; 
  public get dumy() {
    return this.getNumberAttribute('dumy');
  }
  public set dumy(value: number) {
    this._dumy = value;
  }
  public resetDumy() {
    this._dumy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dumyInput() {
    return this._dumy;
  }

  // entry_ip - computed: false, optional: true, required: false
  private _entryIp?: string; 
  public get entryIp() {
    return this.getStringAttribute('entry_ip');
  }
  public set entryIp(value: string) {
    this._entryIp = value;
  }
  public resetEntryIp() {
    this._entryIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryIpInput() {
    return this._entryIp;
  }

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

  // life_cycle_log - computed: false, optional: true, required: false
  private _lifeCycleLog?: number; 
  public get lifeCycleLog() {
    return this.getNumberAttribute('life_cycle_log');
  }
  public set lifeCycleLog(value: number) {
    this._lifeCycleLog = value;
  }
  public resetLifeCycleLog() {
    this._lifeCycleLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifeCycleLogInput() {
    return this._lifeCycleLog;
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // per_pkt_log - computed: false, optional: true, required: false
  private _perPktLog?: number; 
  public get perPktLog() {
    return this.getNumberAttribute('per_pkt_log');
  }
  public set perPktLog(value: number) {
    this._perPktLog = value;
  }
  public resetPerPktLog() {
    this._perPktLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perPktLogInput() {
    return this._perPktLog;
  }

  // raw_log - computed: false, optional: true, required: false
  private _rawLog?: number; 
  public get rawLog() {
    return this.getNumberAttribute('raw_log');
  }
  public set rawLog(value: number) {
    this._rawLog = value;
  }
  public resetRawLog() {
    this._rawLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawLogInput() {
    return this._rawLog;
  }

  // tpl_id - computed: false, optional: true, required: false
  private _tplId?: number; 
  public get tplId() {
    return this.getNumberAttribute('tpl_id');
  }
  public set tplId(value: number) {
    this._tplId = value;
  }
  public resetTplId() {
    this._tplId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tplIdInput() {
    return this._tplId;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cpu_id: cdktf.numberToTerraform(this._cpuId),
      dumy: cdktf.numberToTerraform(this._dumy),
      entry_ip: cdktf.stringToTerraform(this._entryIp),
      id: cdktf.stringToTerraform(this._id),
      life_cycle_log: cdktf.numberToTerraform(this._lifeCycleLog),
      metric: cdktf.numberToTerraform(this._metric),
      per_pkt_log: cdktf.numberToTerraform(this._perPktLog),
      raw_log: cdktf.numberToTerraform(this._rawLog),
      tpl_id: cdktf.numberToTerraform(this._tplId),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cpu_id: {
        value: cdktf.numberToHclTerraform(this._cpuId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dumy: {
        value: cdktf.numberToHclTerraform(this._dumy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      entry_ip: {
        value: cdktf.stringToHclTerraform(this._entryIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      life_cycle_log: {
        value: cdktf.numberToHclTerraform(this._lifeCycleLog),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metric: {
        value: cdktf.numberToHclTerraform(this._metric),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      per_pkt_log: {
        value: cdktf.numberToHclTerraform(this._perPktLog),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      raw_log: {
        value: cdktf.numberToHclTerraform(this._rawLog),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tpl_id: {
        value: cdktf.numberToHclTerraform(this._tplId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
