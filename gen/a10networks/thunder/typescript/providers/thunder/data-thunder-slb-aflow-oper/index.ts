// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_aflow_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbAflowOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_aflow_oper#id DataThunderSlbAflowOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_aflow_oper#oper DataThunderSlbAflowOper#oper}
  */
  readonly oper?: DataThunderSlbAflowOperOper;
}
export interface DataThunderSlbAflowOperOperAflowCpuListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_aflow_oper#error_resume_conn DataThunderSlbAflowOper#error_resume_conn}
  */
  readonly errorResumeConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_aflow_oper#event_resume_conn DataThunderSlbAflowOper#event_resume_conn}
  */
  readonly eventResumeConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_aflow_oper#inc_aflow_limit DataThunderSlbAflowOper#inc_aflow_limit}
  */
  readonly incAflowLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_aflow_oper#open_new_server_conn DataThunderSlbAflowOper#open_new_server_conn}
  */
  readonly openNewServerConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_aflow_oper#pause_conn DataThunderSlbAflowOper#pause_conn}
  */
  readonly pauseConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_aflow_oper#pause_conn_fail DataThunderSlbAflowOper#pause_conn_fail}
  */
  readonly pauseConnFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_aflow_oper#resume_conn DataThunderSlbAflowOper#resume_conn}
  */
  readonly resumeConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_aflow_oper#retry_resume_conn DataThunderSlbAflowOper#retry_resume_conn}
  */
  readonly retryResumeConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_aflow_oper#reuse_server_idle_conn DataThunderSlbAflowOper#reuse_server_idle_conn}
  */
  readonly reuseServerIdleConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_aflow_oper#timer_resume_conn DataThunderSlbAflowOper#timer_resume_conn}
  */
  readonly timerResumeConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_aflow_oper#try_to_resume_conn DataThunderSlbAflowOper#try_to_resume_conn}
  */
  readonly tryToResumeConn?: number;
}

export function dataThunderSlbAflowOperOperAflowCpuListStructToTerraform(struct?: DataThunderSlbAflowOperOperAflowCpuListStruct | cdktf.IResolvable): any {
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


export function dataThunderSlbAflowOperOperAflowCpuListStructToHclTerraform(struct?: DataThunderSlbAflowOperOperAflowCpuListStruct | cdktf.IResolvable): any {
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

export class DataThunderSlbAflowOperOperAflowCpuListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbAflowOperOperAflowCpuListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: DataThunderSlbAflowOperOperAflowCpuListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class DataThunderSlbAflowOperOperAflowCpuListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbAflowOperOperAflowCpuListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbAflowOperOperAflowCpuListStructOutputReference {
    return new DataThunderSlbAflowOperOperAflowCpuListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbAflowOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_aflow_oper#cpu_count DataThunderSlbAflowOper#cpu_count}
  */
  readonly cpuCount?: number;
  /**
  * aflow_cpu_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_aflow_oper#aflow_cpu_list DataThunderSlbAflowOper#aflow_cpu_list}
  */
  readonly aflowCpuList?: DataThunderSlbAflowOperOperAflowCpuListStruct[] | cdktf.IResolvable;
}

export function dataThunderSlbAflowOperOperToTerraform(struct?: DataThunderSlbAflowOperOperOutputReference | DataThunderSlbAflowOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_count: cdktf.numberToTerraform(struct!.cpuCount),
    aflow_cpu_list: cdktf.listMapper(dataThunderSlbAflowOperOperAflowCpuListStructToTerraform, true)(struct!.aflowCpuList),
  }
}


export function dataThunderSlbAflowOperOperToHclTerraform(struct?: DataThunderSlbAflowOperOperOutputReference | DataThunderSlbAflowOperOper): any {
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
    aflow_cpu_list: {
      value: cdktf.listMapperHcl(dataThunderSlbAflowOperOperAflowCpuListStructToHclTerraform, true)(struct!.aflowCpuList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbAflowOperOperAflowCpuListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbAflowOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbAflowOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCount = this._cpuCount;
    }
    if (this._aflowCpuList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflowCpuList = this._aflowCpuList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbAflowOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuCount = undefined;
      this._aflowCpuList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuCount = value.cpuCount;
      this._aflowCpuList.internalValue = value.aflowCpuList;
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

  // aflow_cpu_list - computed: false, optional: true, required: false
  private _aflowCpuList = new DataThunderSlbAflowOperOperAflowCpuListStructList(this, "aflow_cpu_list", false);
  public get aflowCpuList() {
    return this._aflowCpuList;
  }
  public putAflowCpuList(value: DataThunderSlbAflowOperOperAflowCpuListStruct[] | cdktf.IResolvable) {
    this._aflowCpuList.internalValue = value;
  }
  public resetAflowCpuList() {
    this._aflowCpuList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflowCpuListInput() {
    return this._aflowCpuList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_aflow_oper thunder_slb_aflow_oper}
*/
export class DataThunderSlbAflowOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_aflow_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbAflowOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbAflowOper to import
  * @param importFromId The id of the existing DataThunderSlbAflowOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_aflow_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbAflowOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_aflow_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_aflow_oper thunder_slb_aflow_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbAflowOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbAflowOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_aflow_oper',
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
  private _oper = new DataThunderSlbAflowOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbAflowOperOper) {
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
      oper: dataThunderSlbAflowOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSlbAflowOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbAflowOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
