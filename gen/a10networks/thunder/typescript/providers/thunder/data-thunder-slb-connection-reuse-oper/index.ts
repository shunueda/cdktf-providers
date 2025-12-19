// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_connection_reuse_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbConnectionReuseOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_connection_reuse_oper#id DataThunderSlbConnectionReuseOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_connection_reuse_oper#oper DataThunderSlbConnectionReuseOper#oper}
  */
  readonly oper?: DataThunderSlbConnectionReuseOperOper;
}
export interface DataThunderSlbConnectionReuseOperOperConnectionReuseCpuListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_connection_reuse_oper#current_active DataThunderSlbConnectionReuseOper#current_active}
  */
  readonly currentActive?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_connection_reuse_oper#current_http1_conn_in_the_pool DataThunderSlbConnectionReuseOper#current_http1_conn_in_the_pool}
  */
  readonly currentHttp1ConnInThePool?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_connection_reuse_oper#current_http2_conn_in_the_pool DataThunderSlbConnectionReuseOper#current_http2_conn_in_the_pool}
  */
  readonly currentHttp2ConnInThePool?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_connection_reuse_oper#current_open DataThunderSlbConnectionReuseOper#current_open}
  */
  readonly currentOpen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_connection_reuse_oper#delay_unbind DataThunderSlbConnectionReuseOper#delay_unbind}
  */
  readonly delayUnbind?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_connection_reuse_oper#long_resp DataThunderSlbConnectionReuseOper#long_resp}
  */
  readonly longResp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_connection_reuse_oper#miss_resp DataThunderSlbConnectionReuseOper#miss_resp}
  */
  readonly missResp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_connection_reuse_oper#nbind DataThunderSlbConnectionReuseOper#nbind}
  */
  readonly nbind?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_connection_reuse_oper#nestab DataThunderSlbConnectionReuseOper#nestab}
  */
  readonly nestab?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_connection_reuse_oper#not_remove_from_rport DataThunderSlbConnectionReuseOper#not_remove_from_rport}
  */
  readonly notRemoveFromRport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_connection_reuse_oper#ntermi DataThunderSlbConnectionReuseOper#ntermi}
  */
  readonly ntermi?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_connection_reuse_oper#ntermi_err DataThunderSlbConnectionReuseOper#ntermi_err}
  */
  readonly ntermiErr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_connection_reuse_oper#nunbind DataThunderSlbConnectionReuseOper#nunbind}
  */
  readonly nunbind?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_connection_reuse_oper#pause_conn DataThunderSlbConnectionReuseOper#pause_conn}
  */
  readonly pauseConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_connection_reuse_oper#pause_conn_fail DataThunderSlbConnectionReuseOper#pause_conn_fail}
  */
  readonly pauseConnFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_connection_reuse_oper#resume_conn DataThunderSlbConnectionReuseOper#resume_conn}
  */
  readonly resumeConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_connection_reuse_oper#unbound_data_rcv DataThunderSlbConnectionReuseOper#unbound_data_rcv}
  */
  readonly unboundDataRcv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_connection_reuse_oper#zero_pconn_bind_value DataThunderSlbConnectionReuseOper#zero_pconn_bind_value}
  */
  readonly zeroPconnBindValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_connection_reuse_oper#zero_pconn_value DataThunderSlbConnectionReuseOper#zero_pconn_value}
  */
  readonly zeroPconnValue?: number;
}

export function dataThunderSlbConnectionReuseOperOperConnectionReuseCpuListStructToTerraform(struct?: DataThunderSlbConnectionReuseOperOperConnectionReuseCpuListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    current_active: cdktf.numberToTerraform(struct!.currentActive),
    current_http1_conn_in_the_pool: cdktf.numberToTerraform(struct!.currentHttp1ConnInThePool),
    current_http2_conn_in_the_pool: cdktf.numberToTerraform(struct!.currentHttp2ConnInThePool),
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
    zero_pconn_bind_value: cdktf.numberToTerraform(struct!.zeroPconnBindValue),
    zero_pconn_value: cdktf.numberToTerraform(struct!.zeroPconnValue),
  }
}


export function dataThunderSlbConnectionReuseOperOperConnectionReuseCpuListStructToHclTerraform(struct?: DataThunderSlbConnectionReuseOperOperConnectionReuseCpuListStruct | cdktf.IResolvable): any {
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
    current_http1_conn_in_the_pool: {
      value: cdktf.numberToHclTerraform(struct!.currentHttp1ConnInThePool),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    current_http2_conn_in_the_pool: {
      value: cdktf.numberToHclTerraform(struct!.currentHttp2ConnInThePool),
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
    zero_pconn_bind_value: {
      value: cdktf.numberToHclTerraform(struct!.zeroPconnBindValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zero_pconn_value: {
      value: cdktf.numberToHclTerraform(struct!.zeroPconnValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbConnectionReuseOperOperConnectionReuseCpuListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataThunderSlbConnectionReuseOperOperConnectionReuseCpuListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currentActive !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentActive = this._currentActive;
    }
    if (this._currentHttp1ConnInThePool !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentHttp1ConnInThePool = this._currentHttp1ConnInThePool;
    }
    if (this._currentHttp2ConnInThePool !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentHttp2ConnInThePool = this._currentHttp2ConnInThePool;
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
    if (this._zeroPconnBindValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeroPconnBindValue = this._zeroPconnBindValue;
    }
    if (this._zeroPconnValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeroPconnValue = this._zeroPconnValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbConnectionReuseOperOperConnectionReuseCpuListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._currentActive = undefined;
      this._currentHttp1ConnInThePool = undefined;
      this._currentHttp2ConnInThePool = undefined;
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
      this._zeroPconnBindValue = undefined;
      this._zeroPconnValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._currentActive = value.currentActive;
      this._currentHttp1ConnInThePool = value.currentHttp1ConnInThePool;
      this._currentHttp2ConnInThePool = value.currentHttp2ConnInThePool;
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
      this._zeroPconnBindValue = value.zeroPconnBindValue;
      this._zeroPconnValue = value.zeroPconnValue;
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

  // current_http1_conn_in_the_pool - computed: false, optional: true, required: false
  private _currentHttp1ConnInThePool?: number; 
  public get currentHttp1ConnInThePool() {
    return this.getNumberAttribute('current_http1_conn_in_the_pool');
  }
  public set currentHttp1ConnInThePool(value: number) {
    this._currentHttp1ConnInThePool = value;
  }
  public resetCurrentHttp1ConnInThePool() {
    this._currentHttp1ConnInThePool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentHttp1ConnInThePoolInput() {
    return this._currentHttp1ConnInThePool;
  }

  // current_http2_conn_in_the_pool - computed: false, optional: true, required: false
  private _currentHttp2ConnInThePool?: number; 
  public get currentHttp2ConnInThePool() {
    return this.getNumberAttribute('current_http2_conn_in_the_pool');
  }
  public set currentHttp2ConnInThePool(value: number) {
    this._currentHttp2ConnInThePool = value;
  }
  public resetCurrentHttp2ConnInThePool() {
    this._currentHttp2ConnInThePool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentHttp2ConnInThePoolInput() {
    return this._currentHttp2ConnInThePool;
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

  // zero_pconn_bind_value - computed: false, optional: true, required: false
  private _zeroPconnBindValue?: number; 
  public get zeroPconnBindValue() {
    return this.getNumberAttribute('zero_pconn_bind_value');
  }
  public set zeroPconnBindValue(value: number) {
    this._zeroPconnBindValue = value;
  }
  public resetZeroPconnBindValue() {
    this._zeroPconnBindValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroPconnBindValueInput() {
    return this._zeroPconnBindValue;
  }

  // zero_pconn_value - computed: false, optional: true, required: false
  private _zeroPconnValue?: number; 
  public get zeroPconnValue() {
    return this.getNumberAttribute('zero_pconn_value');
  }
  public set zeroPconnValue(value: number) {
    this._zeroPconnValue = value;
  }
  public resetZeroPconnValue() {
    this._zeroPconnValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroPconnValueInput() {
    return this._zeroPconnValue;
  }
}

export class DataThunderSlbConnectionReuseOperOperConnectionReuseCpuListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbConnectionReuseOperOperConnectionReuseCpuListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataThunderSlbConnectionReuseOperOperConnectionReuseCpuListStructOutputReference {
    return new DataThunderSlbConnectionReuseOperOperConnectionReuseCpuListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbConnectionReuseOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_connection_reuse_oper#cpu_count DataThunderSlbConnectionReuseOper#cpu_count}
  */
  readonly cpuCount?: number;
  /**
  * connection_reuse_cpu_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_connection_reuse_oper#connection_reuse_cpu_list DataThunderSlbConnectionReuseOper#connection_reuse_cpu_list}
  */
  readonly connectionReuseCpuList?: DataThunderSlbConnectionReuseOperOperConnectionReuseCpuListStruct[] | cdktf.IResolvable;
}

export function dataThunderSlbConnectionReuseOperOperToTerraform(struct?: DataThunderSlbConnectionReuseOperOperOutputReference | DataThunderSlbConnectionReuseOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_count: cdktf.numberToTerraform(struct!.cpuCount),
    connection_reuse_cpu_list: cdktf.listMapper(dataThunderSlbConnectionReuseOperOperConnectionReuseCpuListStructToTerraform, true)(struct!.connectionReuseCpuList),
  }
}


export function dataThunderSlbConnectionReuseOperOperToHclTerraform(struct?: DataThunderSlbConnectionReuseOperOperOutputReference | DataThunderSlbConnectionReuseOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_count: {
      value: cdktf.numberToHclTerraform(struct!.cpuCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connection_reuse_cpu_list: {
      value: cdktf.listMapperHcl(dataThunderSlbConnectionReuseOperOperConnectionReuseCpuListStructToHclTerraform, true)(struct!.connectionReuseCpuList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbConnectionReuseOperOperConnectionReuseCpuListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbConnectionReuseOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbConnectionReuseOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCount = this._cpuCount;
    }
    if (this._connectionReuseCpuList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionReuseCpuList = this._connectionReuseCpuList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbConnectionReuseOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuCount = undefined;
      this._connectionReuseCpuList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuCount = value.cpuCount;
      this._connectionReuseCpuList.internalValue = value.connectionReuseCpuList;
    }
  }

  // cpu_count - computed: false, optional: true, required: false
  private _cpuCount?: number; 
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }
  public set cpuCount(value: number) {
    this._cpuCount = value;
  }
  public resetCpuCount() {
    this._cpuCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCountInput() {
    return this._cpuCount;
  }

  // connection_reuse_cpu_list - computed: false, optional: true, required: false
  private _connectionReuseCpuList = new DataThunderSlbConnectionReuseOperOperConnectionReuseCpuListStructList(this, "connection_reuse_cpu_list", false);
  public get connectionReuseCpuList() {
    return this._connectionReuseCpuList;
  }
  public putConnectionReuseCpuList(value: DataThunderSlbConnectionReuseOperOperConnectionReuseCpuListStruct[] | cdktf.IResolvable) {
    this._connectionReuseCpuList.internalValue = value;
  }
  public resetConnectionReuseCpuList() {
    this._connectionReuseCpuList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionReuseCpuListInput() {
    return this._connectionReuseCpuList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_connection_reuse_oper thunder_slb_connection_reuse_oper}
*/
export class DataThunderSlbConnectionReuseOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_connection_reuse_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbConnectionReuseOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbConnectionReuseOper to import
  * @param importFromId The id of the existing DataThunderSlbConnectionReuseOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_connection_reuse_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbConnectionReuseOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_connection_reuse_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_connection_reuse_oper thunder_slb_connection_reuse_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbConnectionReuseOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbConnectionReuseOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_connection_reuse_oper',
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
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderSlbConnectionReuseOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbConnectionReuseOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderSlbConnectionReuseOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderSlbConnectionReuseOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbConnectionReuseOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
