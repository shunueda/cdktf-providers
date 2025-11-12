// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_connection_reuse_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbConnectionReuseStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_connection_reuse_stats#id DataThunderSlbConnectionReuseStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_connection_reuse_stats#stats DataThunderSlbConnectionReuseStats#stats}
  */
  readonly stats?: DataThunderSlbConnectionReuseStatsStats;
}
export interface DataThunderSlbConnectionReuseStatsStats {
  /**
  * Active persist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_connection_reuse_stats#current_active DataThunderSlbConnectionReuseStats#current_active}
  */
  readonly currentActive?: number;
  /**
  * Open persist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_connection_reuse_stats#current_open DataThunderSlbConnectionReuseStats#current_open}
  */
  readonly currentOpen?: number;
  /**
  * Delayed unbind
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_connection_reuse_stats#delay_unbind DataThunderSlbConnectionReuseStats#delay_unbind}
  */
  readonly delayUnbind?: number;
  /**
  * Long resp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_connection_reuse_stats#long_resp DataThunderSlbConnectionReuseStats#long_resp}
  */
  readonly longResp?: number;
  /**
  * Missed resp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_connection_reuse_stats#miss_resp DataThunderSlbConnectionReuseStats#miss_resp}
  */
  readonly missResp?: number;
  /**
  * Total bind
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_connection_reuse_stats#nbind DataThunderSlbConnectionReuseStats#nbind}
  */
  readonly nbind?: number;
  /**
  * Total established
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_connection_reuse_stats#nestab DataThunderSlbConnectionReuseStats#nestab}
  */
  readonly nestab?: number;
  /**
  * Not remove from list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_connection_reuse_stats#not_remove_from_rport DataThunderSlbConnectionReuseStats#not_remove_from_rport}
  */
  readonly notRemoveFromRport?: number;
  /**
  * Total terminated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_connection_reuse_stats#ntermi DataThunderSlbConnectionReuseStats#ntermi}
  */
  readonly ntermi?: number;
  /**
  * Total terminated by err
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_connection_reuse_stats#ntermi_err DataThunderSlbConnectionReuseStats#ntermi_err}
  */
  readonly ntermiErr?: number;
  /**
  * Total unbind
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_connection_reuse_stats#nunbind DataThunderSlbConnectionReuseStats#nunbind}
  */
  readonly nunbind?: number;
  /**
  * Pause request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_connection_reuse_stats#pause_conn DataThunderSlbConnectionReuseStats#pause_conn}
  */
  readonly pauseConn?: number;
  /**
  * Pause request fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_connection_reuse_stats#pause_conn_fail DataThunderSlbConnectionReuseStats#pause_conn_fail}
  */
  readonly pauseConnFail?: number;
  /**
  * Resume request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_connection_reuse_stats#resume_conn DataThunderSlbConnectionReuseStats#resume_conn}
  */
  readonly resumeConn?: number;
  /**
  * Unbound data rcvd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_connection_reuse_stats#unbound_data_rcv DataThunderSlbConnectionReuseStats#unbound_data_rcv}
  */
  readonly unboundDataRcv?: number;
}

export function dataThunderSlbConnectionReuseStatsStatsToTerraform(struct?: DataThunderSlbConnectionReuseStatsStatsOutputReference | DataThunderSlbConnectionReuseStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    current_active: cdktf.numberToTerraform(struct!.currentActive),
    current_open: cdktf.numberToTerraform(struct!.currentOpen),
    delay_unbind: cdktf.numberToTerraform(struct!.delayUnbind),
    long_resp: cdktf.numberToTerraform(struct!.longResp),
    miss_resp: cdktf.numberToTerraform(struct!.missResp),
    nbind: cdktf.numberToTerraform(struct!.nbind),
    nestab: cdktf.numberToTerraform(struct!.nestab),
    not_remove_from_rport: cdktf.numberToTerraform(struct!.notRemoveFromRport),
    ntermi: cdktf.numberToTerraform(struct!.ntermi),
    ntermi_err: cdktf.numberToTerraform(struct!.ntermiErr),
    nunbind: cdktf.numberToTerraform(struct!.nunbind),
    pause_conn: cdktf.numberToTerraform(struct!.pauseConn),
    pause_conn_fail: cdktf.numberToTerraform(struct!.pauseConnFail),
    resume_conn: cdktf.numberToTerraform(struct!.resumeConn),
    unbound_data_rcv: cdktf.numberToTerraform(struct!.unboundDataRcv),
  }
}


export function dataThunderSlbConnectionReuseStatsStatsToHclTerraform(struct?: DataThunderSlbConnectionReuseStatsStatsOutputReference | DataThunderSlbConnectionReuseStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    current_active: {
      value: cdktf.numberToHclTerraform(struct!.currentActive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    current_open: {
      value: cdktf.numberToHclTerraform(struct!.currentOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delay_unbind: {
      value: cdktf.numberToHclTerraform(struct!.delayUnbind),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    long_resp: {
      value: cdktf.numberToHclTerraform(struct!.longResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    miss_resp: {
      value: cdktf.numberToHclTerraform(struct!.missResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nbind: {
      value: cdktf.numberToHclTerraform(struct!.nbind),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nestab: {
      value: cdktf.numberToHclTerraform(struct!.nestab),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    not_remove_from_rport: {
      value: cdktf.numberToHclTerraform(struct!.notRemoveFromRport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntermi: {
      value: cdktf.numberToHclTerraform(struct!.ntermi),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntermi_err: {
      value: cdktf.numberToHclTerraform(struct!.ntermiErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nunbind: {
      value: cdktf.numberToHclTerraform(struct!.nunbind),
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
    unbound_data_rcv: {
      value: cdktf.numberToHclTerraform(struct!.unboundDataRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbConnectionReuseStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbConnectionReuseStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currentActive !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentActive = this._currentActive;
    }
    if (this._currentOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentOpen = this._currentOpen;
    }
    if (this._delayUnbind !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayUnbind = this._delayUnbind;
    }
    if (this._longResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.longResp = this._longResp;
    }
    if (this._missResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.missResp = this._missResp;
    }
    if (this._nbind !== undefined) {
      hasAnyValues = true;
      internalValueResult.nbind = this._nbind;
    }
    if (this._nestab !== undefined) {
      hasAnyValues = true;
      internalValueResult.nestab = this._nestab;
    }
    if (this._notRemoveFromRport !== undefined) {
      hasAnyValues = true;
      internalValueResult.notRemoveFromRport = this._notRemoveFromRport;
    }
    if (this._ntermi !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntermi = this._ntermi;
    }
    if (this._ntermiErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntermiErr = this._ntermiErr;
    }
    if (this._nunbind !== undefined) {
      hasAnyValues = true;
      internalValueResult.nunbind = this._nunbind;
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
    if (this._unboundDataRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.unboundDataRcv = this._unboundDataRcv;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbConnectionReuseStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._currentActive = undefined;
      this._currentOpen = undefined;
      this._delayUnbind = undefined;
      this._longResp = undefined;
      this._missResp = undefined;
      this._nbind = undefined;
      this._nestab = undefined;
      this._notRemoveFromRport = undefined;
      this._ntermi = undefined;
      this._ntermiErr = undefined;
      this._nunbind = undefined;
      this._pauseConn = undefined;
      this._pauseConnFail = undefined;
      this._resumeConn = undefined;
      this._unboundDataRcv = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._currentActive = value.currentActive;
      this._currentOpen = value.currentOpen;
      this._delayUnbind = value.delayUnbind;
      this._longResp = value.longResp;
      this._missResp = value.missResp;
      this._nbind = value.nbind;
      this._nestab = value.nestab;
      this._notRemoveFromRport = value.notRemoveFromRport;
      this._ntermi = value.ntermi;
      this._ntermiErr = value.ntermiErr;
      this._nunbind = value.nunbind;
      this._pauseConn = value.pauseConn;
      this._pauseConnFail = value.pauseConnFail;
      this._resumeConn = value.resumeConn;
      this._unboundDataRcv = value.unboundDataRcv;
    }
  }

  // current_active - computed: false, optional: true, required: false
  private _currentActive?: number; 
  public get currentActive() {
    return this.getNumberAttribute('current_active');
  }
  public set currentActive(value: number) {
    this._currentActive = value;
  }
  public resetCurrentActive() {
    this._currentActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentActiveInput() {
    return this._currentActive;
  }

  // current_open - computed: false, optional: true, required: false
  private _currentOpen?: number; 
  public get currentOpen() {
    return this.getNumberAttribute('current_open');
  }
  public set currentOpen(value: number) {
    this._currentOpen = value;
  }
  public resetCurrentOpen() {
    this._currentOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentOpenInput() {
    return this._currentOpen;
  }

  // delay_unbind - computed: false, optional: true, required: false
  private _delayUnbind?: number; 
  public get delayUnbind() {
    return this.getNumberAttribute('delay_unbind');
  }
  public set delayUnbind(value: number) {
    this._delayUnbind = value;
  }
  public resetDelayUnbind() {
    this._delayUnbind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayUnbindInput() {
    return this._delayUnbind;
  }

  // long_resp - computed: false, optional: true, required: false
  private _longResp?: number; 
  public get longResp() {
    return this.getNumberAttribute('long_resp');
  }
  public set longResp(value: number) {
    this._longResp = value;
  }
  public resetLongResp() {
    this._longResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longRespInput() {
    return this._longResp;
  }

  // miss_resp - computed: false, optional: true, required: false
  private _missResp?: number; 
  public get missResp() {
    return this.getNumberAttribute('miss_resp');
  }
  public set missResp(value: number) {
    this._missResp = value;
  }
  public resetMissResp() {
    this._missResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missRespInput() {
    return this._missResp;
  }

  // nbind - computed: false, optional: true, required: false
  private _nbind?: number; 
  public get nbind() {
    return this.getNumberAttribute('nbind');
  }
  public set nbind(value: number) {
    this._nbind = value;
  }
  public resetNbind() {
    this._nbind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nbindInput() {
    return this._nbind;
  }

  // nestab - computed: false, optional: true, required: false
  private _nestab?: number; 
  public get nestab() {
    return this.getNumberAttribute('nestab');
  }
  public set nestab(value: number) {
    this._nestab = value;
  }
  public resetNestab() {
    this._nestab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nestabInput() {
    return this._nestab;
  }

  // not_remove_from_rport - computed: false, optional: true, required: false
  private _notRemoveFromRport?: number; 
  public get notRemoveFromRport() {
    return this.getNumberAttribute('not_remove_from_rport');
  }
  public set notRemoveFromRport(value: number) {
    this._notRemoveFromRport = value;
  }
  public resetNotRemoveFromRport() {
    this._notRemoveFromRport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notRemoveFromRportInput() {
    return this._notRemoveFromRport;
  }

  // ntermi - computed: false, optional: true, required: false
  private _ntermi?: number; 
  public get ntermi() {
    return this.getNumberAttribute('ntermi');
  }
  public set ntermi(value: number) {
    this._ntermi = value;
  }
  public resetNtermi() {
    this._ntermi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntermiInput() {
    return this._ntermi;
  }

  // ntermi_err - computed: false, optional: true, required: false
  private _ntermiErr?: number; 
  public get ntermiErr() {
    return this.getNumberAttribute('ntermi_err');
  }
  public set ntermiErr(value: number) {
    this._ntermiErr = value;
  }
  public resetNtermiErr() {
    this._ntermiErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntermiErrInput() {
    return this._ntermiErr;
  }

  // nunbind - computed: false, optional: true, required: false
  private _nunbind?: number; 
  public get nunbind() {
    return this.getNumberAttribute('nunbind');
  }
  public set nunbind(value: number) {
    this._nunbind = value;
  }
  public resetNunbind() {
    this._nunbind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nunbindInput() {
    return this._nunbind;
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

  // unbound_data_rcv - computed: false, optional: true, required: false
  private _unboundDataRcv?: number; 
  public get unboundDataRcv() {
    return this.getNumberAttribute('unbound_data_rcv');
  }
  public set unboundDataRcv(value: number) {
    this._unboundDataRcv = value;
  }
  public resetUnboundDataRcv() {
    this._unboundDataRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unboundDataRcvInput() {
    return this._unboundDataRcv;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_connection_reuse_stats thunder_slb_connection_reuse_stats}
*/
export class DataThunderSlbConnectionReuseStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_connection_reuse_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbConnectionReuseStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbConnectionReuseStats to import
  * @param importFromId The id of the existing DataThunderSlbConnectionReuseStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_connection_reuse_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbConnectionReuseStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_connection_reuse_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_connection_reuse_stats thunder_slb_connection_reuse_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbConnectionReuseStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbConnectionReuseStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_connection_reuse_stats',
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
  private _stats = new DataThunderSlbConnectionReuseStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbConnectionReuseStatsStats) {
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
      stats: dataThunderSlbConnectionReuseStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSlbConnectionReuseStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbConnectionReuseStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
