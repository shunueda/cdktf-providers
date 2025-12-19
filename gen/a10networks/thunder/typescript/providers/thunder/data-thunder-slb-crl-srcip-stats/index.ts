// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_crl_srcip_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbCrlSrcipStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_crl_srcip_stats#id DataThunderSlbCrlSrcipStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_crl_srcip_stats#stats DataThunderSlbCrlSrcipStats#stats}
  */
  readonly stats?: DataThunderSlbCrlSrcipStatsStats;
}
export interface DataThunderSlbCrlSrcipStatsStats {
  /**
  * Threshold check count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_crl_srcip_stats#called DataThunderSlbCrlSrcipStats#called}
  */
  readonly called?: number;
  /**
  * Lockout drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_crl_srcip_stats#lockout_drop DataThunderSlbCrlSrcipStats#lockout_drop}
  */
  readonly lockoutDrop?: number;
  /**
  * Log messages sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_crl_srcip_stats#log_msg_sent DataThunderSlbCrlSrcipStats#log_msg_sent}
  */
  readonly logMsgSent?: number;
  /**
  * Out of sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_crl_srcip_stats#out_of_sessions DataThunderSlbCrlSrcipStats#out_of_sessions}
  */
  readonly outOfSessions?: number;
  /**
  * Honor threshold  count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_crl_srcip_stats#permitted DataThunderSlbCrlSrcipStats#permitted}
  */
  readonly permitted?: number;
  /**
  * Sessions allocated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_crl_srcip_stats#sessions_alloc DataThunderSlbCrlSrcipStats#sessions_alloc}
  */
  readonly sessionsAlloc?: number;
  /**
  * Sessions freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_crl_srcip_stats#sessions_freed DataThunderSlbCrlSrcipStats#sessions_freed}
  */
  readonly sessionsFreed?: number;
  /**
  * Threshold exceeded count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_crl_srcip_stats#threshold_exceed DataThunderSlbCrlSrcipStats#threshold_exceed}
  */
  readonly thresholdExceed?: number;
  /**
  * Too many sessions consumed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_crl_srcip_stats#too_many_sessions DataThunderSlbCrlSrcipStats#too_many_sessions}
  */
  readonly tooManySessions?: number;
}

export function dataThunderSlbCrlSrcipStatsStatsToTerraform(struct?: DataThunderSlbCrlSrcipStatsStatsOutputReference | DataThunderSlbCrlSrcipStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    called: cdktf.numberToTerraform(struct!.called),
    lockout_drop: cdktf.numberToTerraform(struct!.lockoutDrop),
    log_msg_sent: cdktf.numberToTerraform(struct!.logMsgSent),
    out_of_sessions: cdktf.numberToTerraform(struct!.outOfSessions),
    permitted: cdktf.numberToTerraform(struct!.permitted),
    sessions_alloc: cdktf.numberToTerraform(struct!.sessionsAlloc),
    sessions_freed: cdktf.numberToTerraform(struct!.sessionsFreed),
    threshold_exceed: cdktf.numberToTerraform(struct!.thresholdExceed),
    too_many_sessions: cdktf.numberToTerraform(struct!.tooManySessions),
  }
}


export function dataThunderSlbCrlSrcipStatsStatsToHclTerraform(struct?: DataThunderSlbCrlSrcipStatsStatsOutputReference | DataThunderSlbCrlSrcipStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    called: {
      value: cdktf.numberToHclTerraform(struct!.called),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lockout_drop: {
      value: cdktf.numberToHclTerraform(struct!.lockoutDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_msg_sent: {
      value: cdktf.numberToHclTerraform(struct!.logMsgSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_of_sessions: {
      value: cdktf.numberToHclTerraform(struct!.outOfSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permitted: {
      value: cdktf.numberToHclTerraform(struct!.permitted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sessions_alloc: {
      value: cdktf.numberToHclTerraform(struct!.sessionsAlloc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sessions_freed: {
      value: cdktf.numberToHclTerraform(struct!.sessionsFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_exceed: {
      value: cdktf.numberToHclTerraform(struct!.thresholdExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    too_many_sessions: {
      value: cdktf.numberToHclTerraform(struct!.tooManySessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbCrlSrcipStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbCrlSrcipStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._called !== undefined) {
      hasAnyValues = true;
      internalValueResult.called = this._called;
    }
    if (this._lockoutDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockoutDrop = this._lockoutDrop;
    }
    if (this._logMsgSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.logMsgSent = this._logMsgSent;
    }
    if (this._outOfSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.outOfSessions = this._outOfSessions;
    }
    if (this._permitted !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitted = this._permitted;
    }
    if (this._sessionsAlloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionsAlloc = this._sessionsAlloc;
    }
    if (this._sessionsFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionsFreed = this._sessionsFreed;
    }
    if (this._thresholdExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdExceed = this._thresholdExceed;
    }
    if (this._tooManySessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooManySessions = this._tooManySessions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbCrlSrcipStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._called = undefined;
      this._lockoutDrop = undefined;
      this._logMsgSent = undefined;
      this._outOfSessions = undefined;
      this._permitted = undefined;
      this._sessionsAlloc = undefined;
      this._sessionsFreed = undefined;
      this._thresholdExceed = undefined;
      this._tooManySessions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._called = value.called;
      this._lockoutDrop = value.lockoutDrop;
      this._logMsgSent = value.logMsgSent;
      this._outOfSessions = value.outOfSessions;
      this._permitted = value.permitted;
      this._sessionsAlloc = value.sessionsAlloc;
      this._sessionsFreed = value.sessionsFreed;
      this._thresholdExceed = value.thresholdExceed;
      this._tooManySessions = value.tooManySessions;
    }
  }

  // called - computed: false, optional: true, required: false
  private _called?: number; 
  public get called() {
    return this.getNumberAttribute('called');
  }
  public set called(value: number) {
    this._called = value;
  }
  public resetCalled() {
    this._called = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calledInput() {
    return this._called;
  }

  // lockout_drop - computed: false, optional: true, required: false
  private _lockoutDrop?: number; 
  public get lockoutDrop() {
    return this.getNumberAttribute('lockout_drop');
  }
  public set lockoutDrop(value: number) {
    this._lockoutDrop = value;
  }
  public resetLockoutDrop() {
    this._lockoutDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockoutDropInput() {
    return this._lockoutDrop;
  }

  // log_msg_sent - computed: false, optional: true, required: false
  private _logMsgSent?: number; 
  public get logMsgSent() {
    return this.getNumberAttribute('log_msg_sent');
  }
  public set logMsgSent(value: number) {
    this._logMsgSent = value;
  }
  public resetLogMsgSent() {
    this._logMsgSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logMsgSentInput() {
    return this._logMsgSent;
  }

  // out_of_sessions - computed: false, optional: true, required: false
  private _outOfSessions?: number; 
  public get outOfSessions() {
    return this.getNumberAttribute('out_of_sessions');
  }
  public set outOfSessions(value: number) {
    this._outOfSessions = value;
  }
  public resetOutOfSessions() {
    this._outOfSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfSessionsInput() {
    return this._outOfSessions;
  }

  // permitted - computed: false, optional: true, required: false
  private _permitted?: number; 
  public get permitted() {
    return this.getNumberAttribute('permitted');
  }
  public set permitted(value: number) {
    this._permitted = value;
  }
  public resetPermitted() {
    this._permitted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permittedInput() {
    return this._permitted;
  }

  // sessions_alloc - computed: false, optional: true, required: false
  private _sessionsAlloc?: number; 
  public get sessionsAlloc() {
    return this.getNumberAttribute('sessions_alloc');
  }
  public set sessionsAlloc(value: number) {
    this._sessionsAlloc = value;
  }
  public resetSessionsAlloc() {
    this._sessionsAlloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionsAllocInput() {
    return this._sessionsAlloc;
  }

  // sessions_freed - computed: false, optional: true, required: false
  private _sessionsFreed?: number; 
  public get sessionsFreed() {
    return this.getNumberAttribute('sessions_freed');
  }
  public set sessionsFreed(value: number) {
    this._sessionsFreed = value;
  }
  public resetSessionsFreed() {
    this._sessionsFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionsFreedInput() {
    return this._sessionsFreed;
  }

  // threshold_exceed - computed: false, optional: true, required: false
  private _thresholdExceed?: number; 
  public get thresholdExceed() {
    return this.getNumberAttribute('threshold_exceed');
  }
  public set thresholdExceed(value: number) {
    this._thresholdExceed = value;
  }
  public resetThresholdExceed() {
    this._thresholdExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdExceedInput() {
    return this._thresholdExceed;
  }

  // too_many_sessions - computed: false, optional: true, required: false
  private _tooManySessions?: number; 
  public get tooManySessions() {
    return this.getNumberAttribute('too_many_sessions');
  }
  public set tooManySessions(value: number) {
    this._tooManySessions = value;
  }
  public resetTooManySessions() {
    this._tooManySessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tooManySessionsInput() {
    return this._tooManySessions;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_crl_srcip_stats thunder_slb_crl_srcip_stats}
*/
export class DataThunderSlbCrlSrcipStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_crl_srcip_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbCrlSrcipStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbCrlSrcipStats to import
  * @param importFromId The id of the existing DataThunderSlbCrlSrcipStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_crl_srcip_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbCrlSrcipStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_crl_srcip_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_crl_srcip_stats thunder_slb_crl_srcip_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbCrlSrcipStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbCrlSrcipStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_crl_srcip_stats',
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
  private _stats = new DataThunderSlbCrlSrcipStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbCrlSrcipStatsStats) {
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
      stats: dataThunderSlbCrlSrcipStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSlbCrlSrcipStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbCrlSrcipStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
