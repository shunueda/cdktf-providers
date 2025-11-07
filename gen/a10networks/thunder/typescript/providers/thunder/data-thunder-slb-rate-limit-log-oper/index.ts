// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rate_limit_log_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbRateLimitLogOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rate_limit_log_oper#id DataThunderSlbRateLimitLogOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rate_limit_log_oper#oper DataThunderSlbRateLimitLogOper#oper}
  */
  readonly oper?: DataThunderSlbRateLimitLogOperOper;
}
export interface DataThunderSlbRateLimitLogOperOperRateLimitLogCpuListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rate_limit_log_oper#alloc_conn DataThunderSlbRateLimitLogOper#alloc_conn}
  */
  readonly allocConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rate_limit_log_oper#buff_alloc_fail DataThunderSlbRateLimitLogOper#buff_alloc_fail}
  */
  readonly buffAllocFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rate_limit_log_oper#buff_send_fail DataThunderSlbRateLimitLogOper#buff_send_fail}
  */
  readonly buffSendFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rate_limit_log_oper#conn_alloc_fail DataThunderSlbRateLimitLogOper#conn_alloc_fail}
  */
  readonly connAllocFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rate_limit_log_oper#free_conn DataThunderSlbRateLimitLogOper#free_conn}
  */
  readonly freeConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rate_limit_log_oper#local_log_dropped DataThunderSlbRateLimitLogOper#local_log_dropped}
  */
  readonly localLogDropped?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rate_limit_log_oper#local_log_msg DataThunderSlbRateLimitLogOper#local_log_msg}
  */
  readonly localLogMsg?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rate_limit_log_oper#local_log_rate DataThunderSlbRateLimitLogOper#local_log_rate}
  */
  readonly localLogRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rate_limit_log_oper#msg_too_big DataThunderSlbRateLimitLogOper#msg_too_big}
  */
  readonly msgTooBig?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rate_limit_log_oper#no_repeat_msg DataThunderSlbRateLimitLogOper#no_repeat_msg}
  */
  readonly noRepeatMsg?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rate_limit_log_oper#no_route DataThunderSlbRateLimitLogOper#no_route}
  */
  readonly noRoute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rate_limit_log_oper#remote_log_msg DataThunderSlbRateLimitLogOper#remote_log_msg}
  */
  readonly remoteLogMsg?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rate_limit_log_oper#remote_log_rate DataThunderSlbRateLimitLogOper#remote_log_rate}
  */
  readonly remoteLogRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rate_limit_log_oper#total_log_msg DataThunderSlbRateLimitLogOper#total_log_msg}
  */
  readonly totalLogMsg?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rate_limit_log_oper#total_log_times DataThunderSlbRateLimitLogOper#total_log_times}
  */
  readonly totalLogTimes?: number;
}

export function dataThunderSlbRateLimitLogOperOperRateLimitLogCpuListStructToTerraform(struct?: DataThunderSlbRateLimitLogOperOperRateLimitLogCpuListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alloc_conn: cdktf.numberToTerraform(struct!.allocConn),
    buff_alloc_fail: cdktf.numberToTerraform(struct!.buffAllocFail),
    buff_send_fail: cdktf.numberToTerraform(struct!.buffSendFail),
    conn_alloc_fail: cdktf.numberToTerraform(struct!.connAllocFail),
    free_conn: cdktf.numberToTerraform(struct!.freeConn),
    local_log_dropped: cdktf.numberToTerraform(struct!.localLogDropped),
    local_log_msg: cdktf.numberToTerraform(struct!.localLogMsg),
    local_log_rate: cdktf.numberToTerraform(struct!.localLogRate),
    msg_too_big: cdktf.numberToTerraform(struct!.msgTooBig),
    no_repeat_msg: cdktf.numberToTerraform(struct!.noRepeatMsg),
    no_route: cdktf.numberToTerraform(struct!.noRoute),
    remote_log_msg: cdktf.numberToTerraform(struct!.remoteLogMsg),
    remote_log_rate: cdktf.numberToTerraform(struct!.remoteLogRate),
    total_log_msg: cdktf.numberToTerraform(struct!.totalLogMsg),
    total_log_times: cdktf.numberToTerraform(struct!.totalLogTimes),
  }
}


export function dataThunderSlbRateLimitLogOperOperRateLimitLogCpuListStructToHclTerraform(struct?: DataThunderSlbRateLimitLogOperOperRateLimitLogCpuListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alloc_conn: {
      value: cdktf.numberToHclTerraform(struct!.allocConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buff_alloc_fail: {
      value: cdktf.numberToHclTerraform(struct!.buffAllocFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buff_send_fail: {
      value: cdktf.numberToHclTerraform(struct!.buffSendFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_alloc_fail: {
      value: cdktf.numberToHclTerraform(struct!.connAllocFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    free_conn: {
      value: cdktf.numberToHclTerraform(struct!.freeConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_log_dropped: {
      value: cdktf.numberToHclTerraform(struct!.localLogDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_log_msg: {
      value: cdktf.numberToHclTerraform(struct!.localLogMsg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_log_rate: {
      value: cdktf.numberToHclTerraform(struct!.localLogRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_too_big: {
      value: cdktf.numberToHclTerraform(struct!.msgTooBig),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_repeat_msg: {
      value: cdktf.numberToHclTerraform(struct!.noRepeatMsg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_route: {
      value: cdktf.numberToHclTerraform(struct!.noRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remote_log_msg: {
      value: cdktf.numberToHclTerraform(struct!.remoteLogMsg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remote_log_rate: {
      value: cdktf.numberToHclTerraform(struct!.remoteLogRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_log_msg: {
      value: cdktf.numberToHclTerraform(struct!.totalLogMsg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_log_times: {
      value: cdktf.numberToHclTerraform(struct!.totalLogTimes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbRateLimitLogOperOperRateLimitLogCpuListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbRateLimitLogOperOperRateLimitLogCpuListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocConn = this._allocConn;
    }
    if (this._buffAllocFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffAllocFail = this._buffAllocFail;
    }
    if (this._buffSendFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffSendFail = this._buffSendFail;
    }
    if (this._connAllocFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.connAllocFail = this._connAllocFail;
    }
    if (this._freeConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeConn = this._freeConn;
    }
    if (this._localLogDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.localLogDropped = this._localLogDropped;
    }
    if (this._localLogMsg !== undefined) {
      hasAnyValues = true;
      internalValueResult.localLogMsg = this._localLogMsg;
    }
    if (this._localLogRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.localLogRate = this._localLogRate;
    }
    if (this._msgTooBig !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgTooBig = this._msgTooBig;
    }
    if (this._noRepeatMsg !== undefined) {
      hasAnyValues = true;
      internalValueResult.noRepeatMsg = this._noRepeatMsg;
    }
    if (this._noRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.noRoute = this._noRoute;
    }
    if (this._remoteLogMsg !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteLogMsg = this._remoteLogMsg;
    }
    if (this._remoteLogRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteLogRate = this._remoteLogRate;
    }
    if (this._totalLogMsg !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalLogMsg = this._totalLogMsg;
    }
    if (this._totalLogTimes !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalLogTimes = this._totalLogTimes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbRateLimitLogOperOperRateLimitLogCpuListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocConn = undefined;
      this._buffAllocFail = undefined;
      this._buffSendFail = undefined;
      this._connAllocFail = undefined;
      this._freeConn = undefined;
      this._localLogDropped = undefined;
      this._localLogMsg = undefined;
      this._localLogRate = undefined;
      this._msgTooBig = undefined;
      this._noRepeatMsg = undefined;
      this._noRoute = undefined;
      this._remoteLogMsg = undefined;
      this._remoteLogRate = undefined;
      this._totalLogMsg = undefined;
      this._totalLogTimes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocConn = value.allocConn;
      this._buffAllocFail = value.buffAllocFail;
      this._buffSendFail = value.buffSendFail;
      this._connAllocFail = value.connAllocFail;
      this._freeConn = value.freeConn;
      this._localLogDropped = value.localLogDropped;
      this._localLogMsg = value.localLogMsg;
      this._localLogRate = value.localLogRate;
      this._msgTooBig = value.msgTooBig;
      this._noRepeatMsg = value.noRepeatMsg;
      this._noRoute = value.noRoute;
      this._remoteLogMsg = value.remoteLogMsg;
      this._remoteLogRate = value.remoteLogRate;
      this._totalLogMsg = value.totalLogMsg;
      this._totalLogTimes = value.totalLogTimes;
    }
  }

  // alloc_conn - computed: false, optional: true, required: false
  private _allocConn?: number; 
  public get allocConn() {
    return this.getNumberAttribute('alloc_conn');
  }
  public set allocConn(value: number) {
    this._allocConn = value;
  }
  public resetAllocConn() {
    this._allocConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocConnInput() {
    return this._allocConn;
  }

  // buff_alloc_fail - computed: false, optional: true, required: false
  private _buffAllocFail?: number; 
  public get buffAllocFail() {
    return this.getNumberAttribute('buff_alloc_fail');
  }
  public set buffAllocFail(value: number) {
    this._buffAllocFail = value;
  }
  public resetBuffAllocFail() {
    this._buffAllocFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buffAllocFailInput() {
    return this._buffAllocFail;
  }

  // buff_send_fail - computed: false, optional: true, required: false
  private _buffSendFail?: number; 
  public get buffSendFail() {
    return this.getNumberAttribute('buff_send_fail');
  }
  public set buffSendFail(value: number) {
    this._buffSendFail = value;
  }
  public resetBuffSendFail() {
    this._buffSendFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buffSendFailInput() {
    return this._buffSendFail;
  }

  // conn_alloc_fail - computed: false, optional: true, required: false
  private _connAllocFail?: number; 
  public get connAllocFail() {
    return this.getNumberAttribute('conn_alloc_fail');
  }
  public set connAllocFail(value: number) {
    this._connAllocFail = value;
  }
  public resetConnAllocFail() {
    this._connAllocFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connAllocFailInput() {
    return this._connAllocFail;
  }

  // free_conn - computed: false, optional: true, required: false
  private _freeConn?: number; 
  public get freeConn() {
    return this.getNumberAttribute('free_conn');
  }
  public set freeConn(value: number) {
    this._freeConn = value;
  }
  public resetFreeConn() {
    this._freeConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeConnInput() {
    return this._freeConn;
  }

  // local_log_dropped - computed: false, optional: true, required: false
  private _localLogDropped?: number; 
  public get localLogDropped() {
    return this.getNumberAttribute('local_log_dropped');
  }
  public set localLogDropped(value: number) {
    this._localLogDropped = value;
  }
  public resetLocalLogDropped() {
    this._localLogDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localLogDroppedInput() {
    return this._localLogDropped;
  }

  // local_log_msg - computed: false, optional: true, required: false
  private _localLogMsg?: number; 
  public get localLogMsg() {
    return this.getNumberAttribute('local_log_msg');
  }
  public set localLogMsg(value: number) {
    this._localLogMsg = value;
  }
  public resetLocalLogMsg() {
    this._localLogMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localLogMsgInput() {
    return this._localLogMsg;
  }

  // local_log_rate - computed: false, optional: true, required: false
  private _localLogRate?: number; 
  public get localLogRate() {
    return this.getNumberAttribute('local_log_rate');
  }
  public set localLogRate(value: number) {
    this._localLogRate = value;
  }
  public resetLocalLogRate() {
    this._localLogRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localLogRateInput() {
    return this._localLogRate;
  }

  // msg_too_big - computed: false, optional: true, required: false
  private _msgTooBig?: number; 
  public get msgTooBig() {
    return this.getNumberAttribute('msg_too_big');
  }
  public set msgTooBig(value: number) {
    this._msgTooBig = value;
  }
  public resetMsgTooBig() {
    this._msgTooBig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgTooBigInput() {
    return this._msgTooBig;
  }

  // no_repeat_msg - computed: false, optional: true, required: false
  private _noRepeatMsg?: number; 
  public get noRepeatMsg() {
    return this.getNumberAttribute('no_repeat_msg');
  }
  public set noRepeatMsg(value: number) {
    this._noRepeatMsg = value;
  }
  public resetNoRepeatMsg() {
    this._noRepeatMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRepeatMsgInput() {
    return this._noRepeatMsg;
  }

  // no_route - computed: false, optional: true, required: false
  private _noRoute?: number; 
  public get noRoute() {
    return this.getNumberAttribute('no_route');
  }
  public set noRoute(value: number) {
    this._noRoute = value;
  }
  public resetNoRoute() {
    this._noRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRouteInput() {
    return this._noRoute;
  }

  // remote_log_msg - computed: false, optional: true, required: false
  private _remoteLogMsg?: number; 
  public get remoteLogMsg() {
    return this.getNumberAttribute('remote_log_msg');
  }
  public set remoteLogMsg(value: number) {
    this._remoteLogMsg = value;
  }
  public resetRemoteLogMsg() {
    this._remoteLogMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteLogMsgInput() {
    return this._remoteLogMsg;
  }

  // remote_log_rate - computed: false, optional: true, required: false
  private _remoteLogRate?: number; 
  public get remoteLogRate() {
    return this.getNumberAttribute('remote_log_rate');
  }
  public set remoteLogRate(value: number) {
    this._remoteLogRate = value;
  }
  public resetRemoteLogRate() {
    this._remoteLogRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteLogRateInput() {
    return this._remoteLogRate;
  }

  // total_log_msg - computed: false, optional: true, required: false
  private _totalLogMsg?: number; 
  public get totalLogMsg() {
    return this.getNumberAttribute('total_log_msg');
  }
  public set totalLogMsg(value: number) {
    this._totalLogMsg = value;
  }
  public resetTotalLogMsg() {
    this._totalLogMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalLogMsgInput() {
    return this._totalLogMsg;
  }

  // total_log_times - computed: false, optional: true, required: false
  private _totalLogTimes?: number; 
  public get totalLogTimes() {
    return this.getNumberAttribute('total_log_times');
  }
  public set totalLogTimes(value: number) {
    this._totalLogTimes = value;
  }
  public resetTotalLogTimes() {
    this._totalLogTimes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalLogTimesInput() {
    return this._totalLogTimes;
  }
}

export class DataThunderSlbRateLimitLogOperOperRateLimitLogCpuListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbRateLimitLogOperOperRateLimitLogCpuListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbRateLimitLogOperOperRateLimitLogCpuListStructOutputReference {
    return new DataThunderSlbRateLimitLogOperOperRateLimitLogCpuListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbRateLimitLogOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rate_limit_log_oper#cpu_count DataThunderSlbRateLimitLogOper#cpu_count}
  */
  readonly cpuCount?: number;
  /**
  * rate_limit_log_cpu_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rate_limit_log_oper#rate_limit_log_cpu_list DataThunderSlbRateLimitLogOper#rate_limit_log_cpu_list}
  */
  readonly rateLimitLogCpuList?: DataThunderSlbRateLimitLogOperOperRateLimitLogCpuListStruct[] | cdktf.IResolvable;
}

export function dataThunderSlbRateLimitLogOperOperToTerraform(struct?: DataThunderSlbRateLimitLogOperOperOutputReference | DataThunderSlbRateLimitLogOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_count: cdktf.numberToTerraform(struct!.cpuCount),
    rate_limit_log_cpu_list: cdktf.listMapper(dataThunderSlbRateLimitLogOperOperRateLimitLogCpuListStructToTerraform, true)(struct!.rateLimitLogCpuList),
  }
}


export function dataThunderSlbRateLimitLogOperOperToHclTerraform(struct?: DataThunderSlbRateLimitLogOperOperOutputReference | DataThunderSlbRateLimitLogOperOper): any {
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
    rate_limit_log_cpu_list: {
      value: cdktf.listMapperHcl(dataThunderSlbRateLimitLogOperOperRateLimitLogCpuListStructToHclTerraform, true)(struct!.rateLimitLogCpuList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbRateLimitLogOperOperRateLimitLogCpuListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbRateLimitLogOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbRateLimitLogOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCount = this._cpuCount;
    }
    if (this._rateLimitLogCpuList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitLogCpuList = this._rateLimitLogCpuList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbRateLimitLogOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuCount = undefined;
      this._rateLimitLogCpuList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuCount = value.cpuCount;
      this._rateLimitLogCpuList.internalValue = value.rateLimitLogCpuList;
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

  // rate_limit_log_cpu_list - computed: false, optional: true, required: false
  private _rateLimitLogCpuList = new DataThunderSlbRateLimitLogOperOperRateLimitLogCpuListStructList(this, "rate_limit_log_cpu_list", false);
  public get rateLimitLogCpuList() {
    return this._rateLimitLogCpuList;
  }
  public putRateLimitLogCpuList(value: DataThunderSlbRateLimitLogOperOperRateLimitLogCpuListStruct[] | cdktf.IResolvable) {
    this._rateLimitLogCpuList.internalValue = value;
  }
  public resetRateLimitLogCpuList() {
    this._rateLimitLogCpuList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitLogCpuListInput() {
    return this._rateLimitLogCpuList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rate_limit_log_oper thunder_slb_rate_limit_log_oper}
*/
export class DataThunderSlbRateLimitLogOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_rate_limit_log_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbRateLimitLogOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbRateLimitLogOper to import
  * @param importFromId The id of the existing DataThunderSlbRateLimitLogOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rate_limit_log_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbRateLimitLogOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_rate_limit_log_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rate_limit_log_oper thunder_slb_rate_limit_log_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbRateLimitLogOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbRateLimitLogOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_rate_limit_log_oper',
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
  private _oper = new DataThunderSlbRateLimitLogOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbRateLimitLogOperOper) {
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
      oper: dataThunderSlbRateLimitLogOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSlbRateLimitLogOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbRateLimitLogOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
