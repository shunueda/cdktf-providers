// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_aflow_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbAflowStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_aflow_stats#id DataThunderSlbAflowStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_aflow_stats#stats DataThunderSlbAflowStats#stats}
  */
  readonly stats?: DataThunderSlbAflowStatsStats;
}
export interface DataThunderSlbAflowStatsStats {
  /**
  * Resume conn by error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_aflow_stats#error_resume_conn DataThunderSlbAflowStats#error_resume_conn}
  */
  readonly errorResumeConn?: number;
  /**
  * Resume conn by event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_aflow_stats#event_resume_conn DataThunderSlbAflowStats#event_resume_conn}
  */
  readonly eventResumeConn?: number;
  /**
  * Inc aFlow limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_aflow_stats#inc_aflow_limit DataThunderSlbAflowStats#inc_aflow_limit}
  */
  readonly incAflowLimit?: number;
  /**
  * Open new server conn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_aflow_stats#open_new_server_conn DataThunderSlbAflowStats#open_new_server_conn}
  */
  readonly openNewServerConn?: number;
  /**
  * Pause connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_aflow_stats#pause_conn DataThunderSlbAflowStats#pause_conn}
  */
  readonly pauseConn?: number;
  /**
  * Pause connection fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_aflow_stats#pause_conn_fail DataThunderSlbAflowStats#pause_conn_fail}
  */
  readonly pauseConnFail?: number;
  /**
  * Resume connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_aflow_stats#resume_conn DataThunderSlbAflowStats#resume_conn}
  */
  readonly resumeConn?: number;
  /**
  * Resume conn by retry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_aflow_stats#retry_resume_conn DataThunderSlbAflowStats#retry_resume_conn}
  */
  readonly retryResumeConn?: number;
  /**
  * Reuse idle server conn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_aflow_stats#reuse_server_idle_conn DataThunderSlbAflowStats#reuse_server_idle_conn}
  */
  readonly reuseServerIdleConn?: number;
  /**
  * Resume conn by timer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_aflow_stats#timer_resume_conn DataThunderSlbAflowStats#timer_resume_conn}
  */
  readonly timerResumeConn?: number;
  /**
  * Resume conn by trying
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_aflow_stats#try_to_resume_conn DataThunderSlbAflowStats#try_to_resume_conn}
  */
  readonly tryToResumeConn?: number;
}

export function dataThunderSlbAflowStatsStatsToTerraform(struct?: DataThunderSlbAflowStatsStatsOutputReference | DataThunderSlbAflowStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_resume_conn: cdktf.numberToTerraform(struct!.errorResumeConn),
    event_resume_conn: cdktf.numberToTerraform(struct!.eventResumeConn),
    inc_aflow_limit: cdktf.numberToTerraform(struct!.incAflowLimit),
    open_new_server_conn: cdktf.numberToTerraform(struct!.openNewServerConn),
    pause_conn: cdktf.numberToTerraform(struct!.pauseConn),
    pause_conn_fail: cdktf.numberToTerraform(struct!.pauseConnFail),
    resume_conn: cdktf.numberToTerraform(struct!.resumeConn),
    retry_resume_conn: cdktf.numberToTerraform(struct!.retryResumeConn),
    reuse_server_idle_conn: cdktf.numberToTerraform(struct!.reuseServerIdleConn),
    timer_resume_conn: cdktf.numberToTerraform(struct!.timerResumeConn),
    try_to_resume_conn: cdktf.numberToTerraform(struct!.tryToResumeConn),
  }
}


export function dataThunderSlbAflowStatsStatsToHclTerraform(struct?: DataThunderSlbAflowStatsStatsOutputReference | DataThunderSlbAflowStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_resume_conn: {
      value: cdktf.numberToHclTerraform(struct!.errorResumeConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    event_resume_conn: {
      value: cdktf.numberToHclTerraform(struct!.eventResumeConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inc_aflow_limit: {
      value: cdktf.numberToHclTerraform(struct!.incAflowLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    open_new_server_conn: {
      value: cdktf.numberToHclTerraform(struct!.openNewServerConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pause_conn: {
      value: cdktf.numberToHclTerraform(struct!.pauseConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pause_conn_fail: {
      value: cdktf.numberToHclTerraform(struct!.pauseConnFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resume_conn: {
      value: cdktf.numberToHclTerraform(struct!.resumeConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_resume_conn: {
      value: cdktf.numberToHclTerraform(struct!.retryResumeConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reuse_server_idle_conn: {
      value: cdktf.numberToHclTerraform(struct!.reuseServerIdleConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timer_resume_conn: {
      value: cdktf.numberToHclTerraform(struct!.timerResumeConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    try_to_resume_conn: {
      value: cdktf.numberToHclTerraform(struct!.tryToResumeConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbAflowStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbAflowStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorResumeConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorResumeConn = this._errorResumeConn;
    }
    if (this._eventResumeConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventResumeConn = this._eventResumeConn;
    }
    if (this._incAflowLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.incAflowLimit = this._incAflowLimit;
    }
    if (this._openNewServerConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.openNewServerConn = this._openNewServerConn;
    }
    if (this._pauseConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.pauseConn = this._pauseConn;
    }
    if (this._pauseConnFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.pauseConnFail = this._pauseConnFail;
    }
    if (this._resumeConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resumeConn = this._resumeConn;
    }
    if (this._retryResumeConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryResumeConn = this._retryResumeConn;
    }
    if (this._reuseServerIdleConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.reuseServerIdleConn = this._reuseServerIdleConn;
    }
    if (this._timerResumeConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.timerResumeConn = this._timerResumeConn;
    }
    if (this._tryToResumeConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.tryToResumeConn = this._tryToResumeConn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbAflowStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._errorResumeConn = undefined;
      this._eventResumeConn = undefined;
      this._incAflowLimit = undefined;
      this._openNewServerConn = undefined;
      this._pauseConn = undefined;
      this._pauseConnFail = undefined;
      this._resumeConn = undefined;
      this._retryResumeConn = undefined;
      this._reuseServerIdleConn = undefined;
      this._timerResumeConn = undefined;
      this._tryToResumeConn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._errorResumeConn = value.errorResumeConn;
      this._eventResumeConn = value.eventResumeConn;
      this._incAflowLimit = value.incAflowLimit;
      this._openNewServerConn = value.openNewServerConn;
      this._pauseConn = value.pauseConn;
      this._pauseConnFail = value.pauseConnFail;
      this._resumeConn = value.resumeConn;
      this._retryResumeConn = value.retryResumeConn;
      this._reuseServerIdleConn = value.reuseServerIdleConn;
      this._timerResumeConn = value.timerResumeConn;
      this._tryToResumeConn = value.tryToResumeConn;
    }
  }

  // error_resume_conn - computed: false, optional: true, required: false
  private _errorResumeConn?: number; 
  public get errorResumeConn() {
    return this.getNumberAttribute('error_resume_conn');
  }
  public set errorResumeConn(value: number) {
    this._errorResumeConn = value;
  }
  public resetErrorResumeConn() {
    this._errorResumeConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorResumeConnInput() {
    return this._errorResumeConn;
  }

  // event_resume_conn - computed: false, optional: true, required: false
  private _eventResumeConn?: number; 
  public get eventResumeConn() {
    return this.getNumberAttribute('event_resume_conn');
  }
  public set eventResumeConn(value: number) {
    this._eventResumeConn = value;
  }
  public resetEventResumeConn() {
    this._eventResumeConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventResumeConnInput() {
    return this._eventResumeConn;
  }

  // inc_aflow_limit - computed: false, optional: true, required: false
  private _incAflowLimit?: number; 
  public get incAflowLimit() {
    return this.getNumberAttribute('inc_aflow_limit');
  }
  public set incAflowLimit(value: number) {
    this._incAflowLimit = value;
  }
  public resetIncAflowLimit() {
    this._incAflowLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incAflowLimitInput() {
    return this._incAflowLimit;
  }

  // open_new_server_conn - computed: false, optional: true, required: false
  private _openNewServerConn?: number; 
  public get openNewServerConn() {
    return this.getNumberAttribute('open_new_server_conn');
  }
  public set openNewServerConn(value: number) {
    this._openNewServerConn = value;
  }
  public resetOpenNewServerConn() {
    this._openNewServerConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openNewServerConnInput() {
    return this._openNewServerConn;
  }

  // pause_conn - computed: false, optional: true, required: false
  private _pauseConn?: number; 
  public get pauseConn() {
    return this.getNumberAttribute('pause_conn');
  }
  public set pauseConn(value: number) {
    this._pauseConn = value;
  }
  public resetPauseConn() {
    this._pauseConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseConnInput() {
    return this._pauseConn;
  }

  // pause_conn_fail - computed: false, optional: true, required: false
  private _pauseConnFail?: number; 
  public get pauseConnFail() {
    return this.getNumberAttribute('pause_conn_fail');
  }
  public set pauseConnFail(value: number) {
    this._pauseConnFail = value;
  }
  public resetPauseConnFail() {
    this._pauseConnFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseConnFailInput() {
    return this._pauseConnFail;
  }

  // resume_conn - computed: false, optional: true, required: false
  private _resumeConn?: number; 
  public get resumeConn() {
    return this.getNumberAttribute('resume_conn');
  }
  public set resumeConn(value: number) {
    this._resumeConn = value;
  }
  public resetResumeConn() {
    this._resumeConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resumeConnInput() {
    return this._resumeConn;
  }

  // retry_resume_conn - computed: false, optional: true, required: false
  private _retryResumeConn?: number; 
  public get retryResumeConn() {
    return this.getNumberAttribute('retry_resume_conn');
  }
  public set retryResumeConn(value: number) {
    this._retryResumeConn = value;
  }
  public resetRetryResumeConn() {
    this._retryResumeConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryResumeConnInput() {
    return this._retryResumeConn;
  }

  // reuse_server_idle_conn - computed: false, optional: true, required: false
  private _reuseServerIdleConn?: number; 
  public get reuseServerIdleConn() {
    return this.getNumberAttribute('reuse_server_idle_conn');
  }
  public set reuseServerIdleConn(value: number) {
    this._reuseServerIdleConn = value;
  }
  public resetReuseServerIdleConn() {
    this._reuseServerIdleConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reuseServerIdleConnInput() {
    return this._reuseServerIdleConn;
  }

  // timer_resume_conn - computed: false, optional: true, required: false
  private _timerResumeConn?: number; 
  public get timerResumeConn() {
    return this.getNumberAttribute('timer_resume_conn');
  }
  public set timerResumeConn(value: number) {
    this._timerResumeConn = value;
  }
  public resetTimerResumeConn() {
    this._timerResumeConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerResumeConnInput() {
    return this._timerResumeConn;
  }

  // try_to_resume_conn - computed: false, optional: true, required: false
  private _tryToResumeConn?: number; 
  public get tryToResumeConn() {
    return this.getNumberAttribute('try_to_resume_conn');
  }
  public set tryToResumeConn(value: number) {
    this._tryToResumeConn = value;
  }
  public resetTryToResumeConn() {
    this._tryToResumeConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tryToResumeConnInput() {
    return this._tryToResumeConn;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_aflow_stats thunder_slb_aflow_stats}
*/
export class DataThunderSlbAflowStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_aflow_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbAflowStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbAflowStats to import
  * @param importFromId The id of the existing DataThunderSlbAflowStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_aflow_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbAflowStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_aflow_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_aflow_stats thunder_slb_aflow_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbAflowStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbAflowStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_aflow_stats',
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
  private _stats = new DataThunderSlbAflowStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbAflowStatsStats) {
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
      stats: dataThunderSlbAflowStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSlbAflowStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbAflowStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
