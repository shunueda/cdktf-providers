// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderLoggingLocalLogAppFwOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#id DataThunderLoggingLocalLogAppFwOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * dot_plot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#dot_plot DataThunderLoggingLocalLogAppFwOper#dot_plot}
  */
  readonly dotPlot?: DataThunderLoggingLocalLogAppFwOperDotPlot;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#oper DataThunderLoggingLocalLogAppFwOper#oper}
  */
  readonly oper?: DataThunderLoggingLocalLogAppFwOperOper;
  /**
  * top_n block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#top_n DataThunderLoggingLocalLogAppFwOper#top_n}
  */
  readonly topN?: DataThunderLoggingLocalLogAppFwOperTopN;
}
export interface DataThunderLoggingLocalLogAppFwOperDotPlotOperLogListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#counter DataThunderLoggingLocalLogAppFwOper#counter}
  */
  readonly counter?: number;
}

export function dataThunderLoggingLocalLogAppFwOperDotPlotOperLogListStructToTerraform(struct?: DataThunderLoggingLocalLogAppFwOperDotPlotOperLogListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counter: cdktf.numberToTerraform(struct!.counter),
  }
}


export function dataThunderLoggingLocalLogAppFwOperDotPlotOperLogListStructToHclTerraform(struct?: DataThunderLoggingLocalLogAppFwOperDotPlotOperLogListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counter: {
      value: cdktf.numberToHclTerraform(struct!.counter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderLoggingLocalLogAppFwOperDotPlotOperLogListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderLoggingLocalLogAppFwOperDotPlotOperLogListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counter !== undefined) {
      hasAnyValues = true;
      internalValueResult.counter = this._counter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderLoggingLocalLogAppFwOperDotPlotOperLogListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counter = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counter = value.counter;
    }
  }

  // counter - computed: false, optional: true, required: false
  private _counter?: number; 
  public get counter() {
    return this.getNumberAttribute('counter');
  }
  public set counter(value: number) {
    this._counter = value;
  }
  public resetCounter() {
    this._counter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counterInput() {
    return this._counter;
  }
}

export class DataThunderLoggingLocalLogAppFwOperDotPlotOperLogListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderLoggingLocalLogAppFwOperDotPlotOperLogListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderLoggingLocalLogAppFwOperDotPlotOperLogListStructOutputReference {
    return new DataThunderLoggingLocalLogAppFwOperDotPlotOperLogListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderLoggingLocalLogAppFwOperDotPlotOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#application_name DataThunderLoggingLocalLogAppFwOper#application_name}
  */
  readonly applicationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#client_ip DataThunderLoggingLocalLogAppFwOper#client_ip}
  */
  readonly clientIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#data DataThunderLoggingLocalLogAppFwOper#data}
  */
  readonly data?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#interval DataThunderLoggingLocalLogAppFwOper#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#interval_position DataThunderLoggingLocalLogAppFwOper#interval_position}
  */
  readonly intervalPosition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#start_time DataThunderLoggingLocalLogAppFwOper#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#total DataThunderLoggingLocalLogAppFwOper#total}
  */
  readonly total?: number;
  /**
  * log_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#log_list DataThunderLoggingLocalLogAppFwOper#log_list}
  */
  readonly logList?: DataThunderLoggingLocalLogAppFwOperDotPlotOperLogListStruct[] | cdktf.IResolvable;
}

export function dataThunderLoggingLocalLogAppFwOperDotPlotOperToTerraform(struct?: DataThunderLoggingLocalLogAppFwOperDotPlotOperOutputReference | DataThunderLoggingLocalLogAppFwOperDotPlotOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_name: cdktf.stringToTerraform(struct!.applicationName),
    client_ip: cdktf.stringToTerraform(struct!.clientIp),
    data: cdktf.stringToTerraform(struct!.data),
    interval: cdktf.stringToTerraform(struct!.interval),
    interval_position: cdktf.stringToTerraform(struct!.intervalPosition),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    total: cdktf.numberToTerraform(struct!.total),
    log_list: cdktf.listMapper(dataThunderLoggingLocalLogAppFwOperDotPlotOperLogListStructToTerraform, true)(struct!.logList),
  }
}


export function dataThunderLoggingLocalLogAppFwOperDotPlotOperToHclTerraform(struct?: DataThunderLoggingLocalLogAppFwOperDotPlotOperOutputReference | DataThunderLoggingLocalLogAppFwOperDotPlotOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_name: {
      value: cdktf.stringToHclTerraform(struct!.applicationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_ip: {
      value: cdktf.stringToHclTerraform(struct!.clientIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval_position: {
      value: cdktf.stringToHclTerraform(struct!.intervalPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total: {
      value: cdktf.numberToHclTerraform(struct!.total),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_list: {
      value: cdktf.listMapperHcl(dataThunderLoggingLocalLogAppFwOperDotPlotOperLogListStructToHclTerraform, true)(struct!.logList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderLoggingLocalLogAppFwOperDotPlotOperLogListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderLoggingLocalLogAppFwOperDotPlotOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderLoggingLocalLogAppFwOperDotPlotOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationName = this._applicationName;
    }
    if (this._clientIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIp = this._clientIp;
    }
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._intervalPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalPosition = this._intervalPosition;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._total !== undefined) {
      hasAnyValues = true;
      internalValueResult.total = this._total;
    }
    if (this._logList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logList = this._logList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderLoggingLocalLogAppFwOperDotPlotOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationName = undefined;
      this._clientIp = undefined;
      this._data = undefined;
      this._interval = undefined;
      this._intervalPosition = undefined;
      this._startTime = undefined;
      this._total = undefined;
      this._logList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationName = value.applicationName;
      this._clientIp = value.clientIp;
      this._data = value.data;
      this._interval = value.interval;
      this._intervalPosition = value.intervalPosition;
      this._startTime = value.startTime;
      this._total = value.total;
      this._logList.internalValue = value.logList;
    }
  }

  // application_name - computed: false, optional: true, required: false
  private _applicationName?: string; 
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }
  public set applicationName(value: string) {
    this._applicationName = value;
  }
  public resetApplicationName() {
    this._applicationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationNameInput() {
    return this._applicationName;
  }

  // client_ip - computed: false, optional: true, required: false
  private _clientIp?: string; 
  public get clientIp() {
    return this.getStringAttribute('client_ip');
  }
  public set clientIp(value: string) {
    this._clientIp = value;
  }
  public resetClientIp() {
    this._clientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpInput() {
    return this._clientIp;
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // interval_position - computed: false, optional: true, required: false
  private _intervalPosition?: string; 
  public get intervalPosition() {
    return this.getStringAttribute('interval_position');
  }
  public set intervalPosition(value: string) {
    this._intervalPosition = value;
  }
  public resetIntervalPosition() {
    this._intervalPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalPositionInput() {
    return this._intervalPosition;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // total - computed: false, optional: true, required: false
  private _total?: number; 
  public get total() {
    return this.getNumberAttribute('total');
  }
  public set total(value: number) {
    this._total = value;
  }
  public resetTotal() {
    this._total = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalInput() {
    return this._total;
  }

  // log_list - computed: false, optional: true, required: false
  private _logList = new DataThunderLoggingLocalLogAppFwOperDotPlotOperLogListStructList(this, "log_list", false);
  public get logList() {
    return this._logList;
  }
  public putLogList(value: DataThunderLoggingLocalLogAppFwOperDotPlotOperLogListStruct[] | cdktf.IResolvable) {
    this._logList.internalValue = value;
  }
  public resetLogList() {
    this._logList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logListInput() {
    return this._logList.internalValue;
  }
}
export interface DataThunderLoggingLocalLogAppFwOperDotPlot {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#oper DataThunderLoggingLocalLogAppFwOper#oper}
  */
  readonly oper?: DataThunderLoggingLocalLogAppFwOperDotPlotOper;
}

export function dataThunderLoggingLocalLogAppFwOperDotPlotToTerraform(struct?: DataThunderLoggingLocalLogAppFwOperDotPlotOutputReference | DataThunderLoggingLocalLogAppFwOperDotPlot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderLoggingLocalLogAppFwOperDotPlotOperToTerraform(struct!.oper),
  }
}


export function dataThunderLoggingLocalLogAppFwOperDotPlotToHclTerraform(struct?: DataThunderLoggingLocalLogAppFwOperDotPlotOutputReference | DataThunderLoggingLocalLogAppFwOperDotPlot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderLoggingLocalLogAppFwOperDotPlotOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderLoggingLocalLogAppFwOperDotPlotOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderLoggingLocalLogAppFwOperDotPlotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderLoggingLocalLogAppFwOperDotPlot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderLoggingLocalLogAppFwOperDotPlot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderLoggingLocalLogAppFwOperDotPlotOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderLoggingLocalLogAppFwOperDotPlotOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}
export interface DataThunderLoggingLocalLogAppFwOperOperLogListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#action DataThunderLoggingLocalLogAppFwOper#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#application_name DataThunderLoggingLocalLogAppFwOper#application_name}
  */
  readonly applicationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#bytes DataThunderLoggingLocalLogAppFwOper#bytes}
  */
  readonly bytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#category DataThunderLoggingLocalLogAppFwOper#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#client_ip DataThunderLoggingLocalLogAppFwOper#client_ip}
  */
  readonly clientIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#destination_ip DataThunderLoggingLocalLogAppFwOper#destination_ip}
  */
  readonly destinationIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#destination_port DataThunderLoggingLocalLogAppFwOper#destination_port}
  */
  readonly destinationPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#destination_threat_category DataThunderLoggingLocalLogAppFwOper#destination_threat_category}
  */
  readonly destinationThreatCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#destination_threat_list_name DataThunderLoggingLocalLogAppFwOper#destination_threat_list_name}
  */
  readonly destinationThreatListName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#policy_name DataThunderLoggingLocalLogAppFwOper#policy_name}
  */
  readonly policyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#rule_name DataThunderLoggingLocalLogAppFwOper#rule_name}
  */
  readonly ruleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#source_port DataThunderLoggingLocalLogAppFwOper#source_port}
  */
  readonly sourcePort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#source_threat_category DataThunderLoggingLocalLogAppFwOper#source_threat_category}
  */
  readonly sourceThreatCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#source_threat_list_name DataThunderLoggingLocalLogAppFwOper#source_threat_list_name}
  */
  readonly sourceThreatListName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#time DataThunderLoggingLocalLogAppFwOper#time}
  */
  readonly time?: string;
}

export function dataThunderLoggingLocalLogAppFwOperOperLogListStructToTerraform(struct?: DataThunderLoggingLocalLogAppFwOperOperLogListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    application_name: cdktf.stringToTerraform(struct!.applicationName),
    bytes: cdktf.numberToTerraform(struct!.bytes),
    category: cdktf.stringToTerraform(struct!.category),
    client_ip: cdktf.stringToTerraform(struct!.clientIp),
    destination_ip: cdktf.stringToTerraform(struct!.destinationIp),
    destination_port: cdktf.numberToTerraform(struct!.destinationPort),
    destination_threat_category: cdktf.stringToTerraform(struct!.destinationThreatCategory),
    destination_threat_list_name: cdktf.stringToTerraform(struct!.destinationThreatListName),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
    source_port: cdktf.numberToTerraform(struct!.sourcePort),
    source_threat_category: cdktf.stringToTerraform(struct!.sourceThreatCategory),
    source_threat_list_name: cdktf.stringToTerraform(struct!.sourceThreatListName),
    time: cdktf.stringToTerraform(struct!.time),
  }
}


export function dataThunderLoggingLocalLogAppFwOperOperLogListStructToHclTerraform(struct?: DataThunderLoggingLocalLogAppFwOperOperLogListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_name: {
      value: cdktf.stringToHclTerraform(struct!.applicationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bytes: {
      value: cdktf.numberToHclTerraform(struct!.bytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_ip: {
      value: cdktf.stringToHclTerraform(struct!.clientIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_ip: {
      value: cdktf.stringToHclTerraform(struct!.destinationIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port: {
      value: cdktf.numberToHclTerraform(struct!.destinationPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    destination_threat_category: {
      value: cdktf.stringToHclTerraform(struct!.destinationThreatCategory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_threat_list_name: {
      value: cdktf.stringToHclTerraform(struct!.destinationThreatListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_name: {
      value: cdktf.stringToHclTerraform(struct!.policyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_name: {
      value: cdktf.stringToHclTerraform(struct!.ruleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port: {
      value: cdktf.numberToHclTerraform(struct!.sourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_threat_category: {
      value: cdktf.stringToHclTerraform(struct!.sourceThreatCategory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_threat_list_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceThreatListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time: {
      value: cdktf.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderLoggingLocalLogAppFwOperOperLogListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderLoggingLocalLogAppFwOperOperLogListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._applicationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationName = this._applicationName;
    }
    if (this._bytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytes = this._bytes;
    }
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._clientIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIp = this._clientIp;
    }
    if (this._destinationIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationIp = this._destinationIp;
    }
    if (this._destinationPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPort = this._destinationPort;
    }
    if (this._destinationThreatCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationThreatCategory = this._destinationThreatCategory;
    }
    if (this._destinationThreatListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationThreatListName = this._destinationThreatListName;
    }
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    if (this._sourceThreatCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceThreatCategory = this._sourceThreatCategory;
    }
    if (this._sourceThreatListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceThreatListName = this._sourceThreatListName;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderLoggingLocalLogAppFwOperOperLogListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._applicationName = undefined;
      this._bytes = undefined;
      this._category = undefined;
      this._clientIp = undefined;
      this._destinationIp = undefined;
      this._destinationPort = undefined;
      this._destinationThreatCategory = undefined;
      this._destinationThreatListName = undefined;
      this._policyName = undefined;
      this._ruleName = undefined;
      this._sourcePort = undefined;
      this._sourceThreatCategory = undefined;
      this._sourceThreatListName = undefined;
      this._time = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._applicationName = value.applicationName;
      this._bytes = value.bytes;
      this._category = value.category;
      this._clientIp = value.clientIp;
      this._destinationIp = value.destinationIp;
      this._destinationPort = value.destinationPort;
      this._destinationThreatCategory = value.destinationThreatCategory;
      this._destinationThreatListName = value.destinationThreatListName;
      this._policyName = value.policyName;
      this._ruleName = value.ruleName;
      this._sourcePort = value.sourcePort;
      this._sourceThreatCategory = value.sourceThreatCategory;
      this._sourceThreatListName = value.sourceThreatListName;
      this._time = value.time;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // application_name - computed: false, optional: true, required: false
  private _applicationName?: string; 
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }
  public set applicationName(value: string) {
    this._applicationName = value;
  }
  public resetApplicationName() {
    this._applicationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationNameInput() {
    return this._applicationName;
  }

  // bytes - computed: false, optional: true, required: false
  private _bytes?: number; 
  public get bytes() {
    return this.getNumberAttribute('bytes');
  }
  public set bytes(value: number) {
    this._bytes = value;
  }
  public resetBytes() {
    this._bytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesInput() {
    return this._bytes;
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // client_ip - computed: false, optional: true, required: false
  private _clientIp?: string; 
  public get clientIp() {
    return this.getStringAttribute('client_ip');
  }
  public set clientIp(value: string) {
    this._clientIp = value;
  }
  public resetClientIp() {
    this._clientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpInput() {
    return this._clientIp;
  }

  // destination_ip - computed: false, optional: true, required: false
  private _destinationIp?: string; 
  public get destinationIp() {
    return this.getStringAttribute('destination_ip');
  }
  public set destinationIp(value: string) {
    this._destinationIp = value;
  }
  public resetDestinationIp() {
    this._destinationIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpInput() {
    return this._destinationIp;
  }

  // destination_port - computed: false, optional: true, required: false
  private _destinationPort?: number; 
  public get destinationPort() {
    return this.getNumberAttribute('destination_port');
  }
  public set destinationPort(value: number) {
    this._destinationPort = value;
  }
  public resetDestinationPort() {
    this._destinationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort;
  }

  // destination_threat_category - computed: false, optional: true, required: false
  private _destinationThreatCategory?: string; 
  public get destinationThreatCategory() {
    return this.getStringAttribute('destination_threat_category');
  }
  public set destinationThreatCategory(value: string) {
    this._destinationThreatCategory = value;
  }
  public resetDestinationThreatCategory() {
    this._destinationThreatCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationThreatCategoryInput() {
    return this._destinationThreatCategory;
  }

  // destination_threat_list_name - computed: false, optional: true, required: false
  private _destinationThreatListName?: string; 
  public get destinationThreatListName() {
    return this.getStringAttribute('destination_threat_list_name');
  }
  public set destinationThreatListName(value: string) {
    this._destinationThreatListName = value;
  }
  public resetDestinationThreatListName() {
    this._destinationThreatListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationThreatListNameInput() {
    return this._destinationThreatListName;
  }

  // policy_name - computed: false, optional: true, required: false
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  public resetPolicyName() {
    this._policyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // rule_name - computed: false, optional: true, required: false
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  public resetRuleName() {
    this._ruleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // source_port - computed: false, optional: true, required: false
  private _sourcePort?: number; 
  public get sourcePort() {
    return this.getNumberAttribute('source_port');
  }
  public set sourcePort(value: number) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }

  // source_threat_category - computed: false, optional: true, required: false
  private _sourceThreatCategory?: string; 
  public get sourceThreatCategory() {
    return this.getStringAttribute('source_threat_category');
  }
  public set sourceThreatCategory(value: string) {
    this._sourceThreatCategory = value;
  }
  public resetSourceThreatCategory() {
    this._sourceThreatCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceThreatCategoryInput() {
    return this._sourceThreatCategory;
  }

  // source_threat_list_name - computed: false, optional: true, required: false
  private _sourceThreatListName?: string; 
  public get sourceThreatListName() {
    return this.getStringAttribute('source_threat_list_name');
  }
  public set sourceThreatListName(value: string) {
    this._sourceThreatListName = value;
  }
  public resetSourceThreatListName() {
    this._sourceThreatListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceThreatListNameInput() {
    return this._sourceThreatListName;
  }

  // time - computed: false, optional: true, required: false
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}

export class DataThunderLoggingLocalLogAppFwOperOperLogListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderLoggingLocalLogAppFwOperOperLogListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderLoggingLocalLogAppFwOperOperLogListStructOutputReference {
    return new DataThunderLoggingLocalLogAppFwOperOperLogListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderLoggingLocalLogAppFwOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#destination_threat_category_match DataThunderLoggingLocalLogAppFwOper#destination_threat_category_match}
  */
  readonly destinationThreatCategoryMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#interval DataThunderLoggingLocalLogAppFwOper#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#interval_position DataThunderLoggingLocalLogAppFwOper#interval_position}
  */
  readonly intervalPosition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#max_entries DataThunderLoggingLocalLogAppFwOper#max_entries}
  */
  readonly maxEntries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#source_threat_category_match DataThunderLoggingLocalLogAppFwOper#source_threat_category_match}
  */
  readonly sourceThreatCategoryMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#start_time DataThunderLoggingLocalLogAppFwOper#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#total DataThunderLoggingLocalLogAppFwOper#total}
  */
  readonly total?: number;
  /**
  * log_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#log_list DataThunderLoggingLocalLogAppFwOper#log_list}
  */
  readonly logList?: DataThunderLoggingLocalLogAppFwOperOperLogListStruct[] | cdktf.IResolvable;
}

export function dataThunderLoggingLocalLogAppFwOperOperToTerraform(struct?: DataThunderLoggingLocalLogAppFwOperOperOutputReference | DataThunderLoggingLocalLogAppFwOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_threat_category_match: cdktf.stringToTerraform(struct!.destinationThreatCategoryMatch),
    interval: cdktf.stringToTerraform(struct!.interval),
    interval_position: cdktf.stringToTerraform(struct!.intervalPosition),
    max_entries: cdktf.numberToTerraform(struct!.maxEntries),
    source_threat_category_match: cdktf.stringToTerraform(struct!.sourceThreatCategoryMatch),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    total: cdktf.numberToTerraform(struct!.total),
    log_list: cdktf.listMapper(dataThunderLoggingLocalLogAppFwOperOperLogListStructToTerraform, true)(struct!.logList),
  }
}


export function dataThunderLoggingLocalLogAppFwOperOperToHclTerraform(struct?: DataThunderLoggingLocalLogAppFwOperOperOutputReference | DataThunderLoggingLocalLogAppFwOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_threat_category_match: {
      value: cdktf.stringToHclTerraform(struct!.destinationThreatCategoryMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval_position: {
      value: cdktf.stringToHclTerraform(struct!.intervalPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_entries: {
      value: cdktf.numberToHclTerraform(struct!.maxEntries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_threat_category_match: {
      value: cdktf.stringToHclTerraform(struct!.sourceThreatCategoryMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total: {
      value: cdktf.numberToHclTerraform(struct!.total),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_list: {
      value: cdktf.listMapperHcl(dataThunderLoggingLocalLogAppFwOperOperLogListStructToHclTerraform, true)(struct!.logList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderLoggingLocalLogAppFwOperOperLogListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderLoggingLocalLogAppFwOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderLoggingLocalLogAppFwOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationThreatCategoryMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationThreatCategoryMatch = this._destinationThreatCategoryMatch;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._intervalPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalPosition = this._intervalPosition;
    }
    if (this._maxEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEntries = this._maxEntries;
    }
    if (this._sourceThreatCategoryMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceThreatCategoryMatch = this._sourceThreatCategoryMatch;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._total !== undefined) {
      hasAnyValues = true;
      internalValueResult.total = this._total;
    }
    if (this._logList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logList = this._logList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderLoggingLocalLogAppFwOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationThreatCategoryMatch = undefined;
      this._interval = undefined;
      this._intervalPosition = undefined;
      this._maxEntries = undefined;
      this._sourceThreatCategoryMatch = undefined;
      this._startTime = undefined;
      this._total = undefined;
      this._logList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationThreatCategoryMatch = value.destinationThreatCategoryMatch;
      this._interval = value.interval;
      this._intervalPosition = value.intervalPosition;
      this._maxEntries = value.maxEntries;
      this._sourceThreatCategoryMatch = value.sourceThreatCategoryMatch;
      this._startTime = value.startTime;
      this._total = value.total;
      this._logList.internalValue = value.logList;
    }
  }

  // destination_threat_category_match - computed: false, optional: true, required: false
  private _destinationThreatCategoryMatch?: string; 
  public get destinationThreatCategoryMatch() {
    return this.getStringAttribute('destination_threat_category_match');
  }
  public set destinationThreatCategoryMatch(value: string) {
    this._destinationThreatCategoryMatch = value;
  }
  public resetDestinationThreatCategoryMatch() {
    this._destinationThreatCategoryMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationThreatCategoryMatchInput() {
    return this._destinationThreatCategoryMatch;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // interval_position - computed: false, optional: true, required: false
  private _intervalPosition?: string; 
  public get intervalPosition() {
    return this.getStringAttribute('interval_position');
  }
  public set intervalPosition(value: string) {
    this._intervalPosition = value;
  }
  public resetIntervalPosition() {
    this._intervalPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalPositionInput() {
    return this._intervalPosition;
  }

  // max_entries - computed: false, optional: true, required: false
  private _maxEntries?: number; 
  public get maxEntries() {
    return this.getNumberAttribute('max_entries');
  }
  public set maxEntries(value: number) {
    this._maxEntries = value;
  }
  public resetMaxEntries() {
    this._maxEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEntriesInput() {
    return this._maxEntries;
  }

  // source_threat_category_match - computed: false, optional: true, required: false
  private _sourceThreatCategoryMatch?: string; 
  public get sourceThreatCategoryMatch() {
    return this.getStringAttribute('source_threat_category_match');
  }
  public set sourceThreatCategoryMatch(value: string) {
    this._sourceThreatCategoryMatch = value;
  }
  public resetSourceThreatCategoryMatch() {
    this._sourceThreatCategoryMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceThreatCategoryMatchInput() {
    return this._sourceThreatCategoryMatch;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // total - computed: false, optional: true, required: false
  private _total?: number; 
  public get total() {
    return this.getNumberAttribute('total');
  }
  public set total(value: number) {
    this._total = value;
  }
  public resetTotal() {
    this._total = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalInput() {
    return this._total;
  }

  // log_list - computed: false, optional: true, required: false
  private _logList = new DataThunderLoggingLocalLogAppFwOperOperLogListStructList(this, "log_list", false);
  public get logList() {
    return this._logList;
  }
  public putLogList(value: DataThunderLoggingLocalLogAppFwOperOperLogListStruct[] | cdktf.IResolvable) {
    this._logList.internalValue = value;
  }
  public resetLogList() {
    this._logList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logListInput() {
    return this._logList.internalValue;
  }
}
export interface DataThunderLoggingLocalLogAppFwOperTopNOperLogListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#counter DataThunderLoggingLocalLogAppFwOper#counter}
  */
  readonly counter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#name DataThunderLoggingLocalLogAppFwOper#name}
  */
  readonly name?: string;
}

export function dataThunderLoggingLocalLogAppFwOperTopNOperLogListStructToTerraform(struct?: DataThunderLoggingLocalLogAppFwOperTopNOperLogListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counter: cdktf.numberToTerraform(struct!.counter),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataThunderLoggingLocalLogAppFwOperTopNOperLogListStructToHclTerraform(struct?: DataThunderLoggingLocalLogAppFwOperTopNOperLogListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counter: {
      value: cdktf.numberToHclTerraform(struct!.counter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderLoggingLocalLogAppFwOperTopNOperLogListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderLoggingLocalLogAppFwOperTopNOperLogListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counter !== undefined) {
      hasAnyValues = true;
      internalValueResult.counter = this._counter;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderLoggingLocalLogAppFwOperTopNOperLogListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counter = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counter = value.counter;
      this._name = value.name;
    }
  }

  // counter - computed: false, optional: true, required: false
  private _counter?: number; 
  public get counter() {
    return this.getNumberAttribute('counter');
  }
  public set counter(value: number) {
    this._counter = value;
  }
  public resetCounter() {
    this._counter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counterInput() {
    return this._counter;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class DataThunderLoggingLocalLogAppFwOperTopNOperLogListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderLoggingLocalLogAppFwOperTopNOperLogListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderLoggingLocalLogAppFwOperTopNOperLogListStructOutputReference {
    return new DataThunderLoggingLocalLogAppFwOperTopNOperLogListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderLoggingLocalLogAppFwOperTopNOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#action DataThunderLoggingLocalLogAppFwOper#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#application_name DataThunderLoggingLocalLogAppFwOper#application_name}
  */
  readonly applicationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#category DataThunderLoggingLocalLogAppFwOper#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#client_ip DataThunderLoggingLocalLogAppFwOper#client_ip}
  */
  readonly clientIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#interval DataThunderLoggingLocalLogAppFwOper#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#interval_position DataThunderLoggingLocalLogAppFwOper#interval_position}
  */
  readonly intervalPosition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#max_entries DataThunderLoggingLocalLogAppFwOper#max_entries}
  */
  readonly maxEntries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#start_time DataThunderLoggingLocalLogAppFwOper#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#threat_category DataThunderLoggingLocalLogAppFwOper#threat_category}
  */
  readonly threatCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#threat_category_match DataThunderLoggingLocalLogAppFwOper#threat_category_match}
  */
  readonly threatCategoryMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#top DataThunderLoggingLocalLogAppFwOper#top}
  */
  readonly top?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#total DataThunderLoggingLocalLogAppFwOper#total}
  */
  readonly total?: number;
  /**
  * log_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#log_list DataThunderLoggingLocalLogAppFwOper#log_list}
  */
  readonly logList?: DataThunderLoggingLocalLogAppFwOperTopNOperLogListStruct[] | cdktf.IResolvable;
}

export function dataThunderLoggingLocalLogAppFwOperTopNOperToTerraform(struct?: DataThunderLoggingLocalLogAppFwOperTopNOperOutputReference | DataThunderLoggingLocalLogAppFwOperTopNOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    application_name: cdktf.stringToTerraform(struct!.applicationName),
    category: cdktf.stringToTerraform(struct!.category),
    client_ip: cdktf.stringToTerraform(struct!.clientIp),
    interval: cdktf.stringToTerraform(struct!.interval),
    interval_position: cdktf.stringToTerraform(struct!.intervalPosition),
    max_entries: cdktf.numberToTerraform(struct!.maxEntries),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    threat_category: cdktf.stringToTerraform(struct!.threatCategory),
    threat_category_match: cdktf.stringToTerraform(struct!.threatCategoryMatch),
    top: cdktf.stringToTerraform(struct!.top),
    total: cdktf.numberToTerraform(struct!.total),
    log_list: cdktf.listMapper(dataThunderLoggingLocalLogAppFwOperTopNOperLogListStructToTerraform, true)(struct!.logList),
  }
}


export function dataThunderLoggingLocalLogAppFwOperTopNOperToHclTerraform(struct?: DataThunderLoggingLocalLogAppFwOperTopNOperOutputReference | DataThunderLoggingLocalLogAppFwOperTopNOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_name: {
      value: cdktf.stringToHclTerraform(struct!.applicationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_ip: {
      value: cdktf.stringToHclTerraform(struct!.clientIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval_position: {
      value: cdktf.stringToHclTerraform(struct!.intervalPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_entries: {
      value: cdktf.numberToHclTerraform(struct!.maxEntries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threat_category: {
      value: cdktf.stringToHclTerraform(struct!.threatCategory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threat_category_match: {
      value: cdktf.stringToHclTerraform(struct!.threatCategoryMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    top: {
      value: cdktf.stringToHclTerraform(struct!.top),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total: {
      value: cdktf.numberToHclTerraform(struct!.total),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_list: {
      value: cdktf.listMapperHcl(dataThunderLoggingLocalLogAppFwOperTopNOperLogListStructToHclTerraform, true)(struct!.logList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderLoggingLocalLogAppFwOperTopNOperLogListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderLoggingLocalLogAppFwOperTopNOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderLoggingLocalLogAppFwOperTopNOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._applicationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationName = this._applicationName;
    }
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._clientIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIp = this._clientIp;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._intervalPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalPosition = this._intervalPosition;
    }
    if (this._maxEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEntries = this._maxEntries;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._threatCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatCategory = this._threatCategory;
    }
    if (this._threatCategoryMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatCategoryMatch = this._threatCategoryMatch;
    }
    if (this._top !== undefined) {
      hasAnyValues = true;
      internalValueResult.top = this._top;
    }
    if (this._total !== undefined) {
      hasAnyValues = true;
      internalValueResult.total = this._total;
    }
    if (this._logList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logList = this._logList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderLoggingLocalLogAppFwOperTopNOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._applicationName = undefined;
      this._category = undefined;
      this._clientIp = undefined;
      this._interval = undefined;
      this._intervalPosition = undefined;
      this._maxEntries = undefined;
      this._startTime = undefined;
      this._threatCategory = undefined;
      this._threatCategoryMatch = undefined;
      this._top = undefined;
      this._total = undefined;
      this._logList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._applicationName = value.applicationName;
      this._category = value.category;
      this._clientIp = value.clientIp;
      this._interval = value.interval;
      this._intervalPosition = value.intervalPosition;
      this._maxEntries = value.maxEntries;
      this._startTime = value.startTime;
      this._threatCategory = value.threatCategory;
      this._threatCategoryMatch = value.threatCategoryMatch;
      this._top = value.top;
      this._total = value.total;
      this._logList.internalValue = value.logList;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // application_name - computed: false, optional: true, required: false
  private _applicationName?: string; 
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }
  public set applicationName(value: string) {
    this._applicationName = value;
  }
  public resetApplicationName() {
    this._applicationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationNameInput() {
    return this._applicationName;
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // client_ip - computed: false, optional: true, required: false
  private _clientIp?: string; 
  public get clientIp() {
    return this.getStringAttribute('client_ip');
  }
  public set clientIp(value: string) {
    this._clientIp = value;
  }
  public resetClientIp() {
    this._clientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpInput() {
    return this._clientIp;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // interval_position - computed: false, optional: true, required: false
  private _intervalPosition?: string; 
  public get intervalPosition() {
    return this.getStringAttribute('interval_position');
  }
  public set intervalPosition(value: string) {
    this._intervalPosition = value;
  }
  public resetIntervalPosition() {
    this._intervalPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalPositionInput() {
    return this._intervalPosition;
  }

  // max_entries - computed: false, optional: true, required: false
  private _maxEntries?: number; 
  public get maxEntries() {
    return this.getNumberAttribute('max_entries');
  }
  public set maxEntries(value: number) {
    this._maxEntries = value;
  }
  public resetMaxEntries() {
    this._maxEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEntriesInput() {
    return this._maxEntries;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // threat_category - computed: false, optional: true, required: false
  private _threatCategory?: string; 
  public get threatCategory() {
    return this.getStringAttribute('threat_category');
  }
  public set threatCategory(value: string) {
    this._threatCategory = value;
  }
  public resetThreatCategory() {
    this._threatCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatCategoryInput() {
    return this._threatCategory;
  }

  // threat_category_match - computed: false, optional: true, required: false
  private _threatCategoryMatch?: string; 
  public get threatCategoryMatch() {
    return this.getStringAttribute('threat_category_match');
  }
  public set threatCategoryMatch(value: string) {
    this._threatCategoryMatch = value;
  }
  public resetThreatCategoryMatch() {
    this._threatCategoryMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatCategoryMatchInput() {
    return this._threatCategoryMatch;
  }

  // top - computed: false, optional: true, required: false
  private _top?: string; 
  public get top() {
    return this.getStringAttribute('top');
  }
  public set top(value: string) {
    this._top = value;
  }
  public resetTop() {
    this._top = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topInput() {
    return this._top;
  }

  // total - computed: false, optional: true, required: false
  private _total?: number; 
  public get total() {
    return this.getNumberAttribute('total');
  }
  public set total(value: number) {
    this._total = value;
  }
  public resetTotal() {
    this._total = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalInput() {
    return this._total;
  }

  // log_list - computed: false, optional: true, required: false
  private _logList = new DataThunderLoggingLocalLogAppFwOperTopNOperLogListStructList(this, "log_list", false);
  public get logList() {
    return this._logList;
  }
  public putLogList(value: DataThunderLoggingLocalLogAppFwOperTopNOperLogListStruct[] | cdktf.IResolvable) {
    this._logList.internalValue = value;
  }
  public resetLogList() {
    this._logList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logListInput() {
    return this._logList.internalValue;
  }
}
export interface DataThunderLoggingLocalLogAppFwOperTopN {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#oper DataThunderLoggingLocalLogAppFwOper#oper}
  */
  readonly oper?: DataThunderLoggingLocalLogAppFwOperTopNOper;
}

export function dataThunderLoggingLocalLogAppFwOperTopNToTerraform(struct?: DataThunderLoggingLocalLogAppFwOperTopNOutputReference | DataThunderLoggingLocalLogAppFwOperTopN): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderLoggingLocalLogAppFwOperTopNOperToTerraform(struct!.oper),
  }
}


export function dataThunderLoggingLocalLogAppFwOperTopNToHclTerraform(struct?: DataThunderLoggingLocalLogAppFwOperTopNOutputReference | DataThunderLoggingLocalLogAppFwOperTopN): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderLoggingLocalLogAppFwOperTopNOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderLoggingLocalLogAppFwOperTopNOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderLoggingLocalLogAppFwOperTopNOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderLoggingLocalLogAppFwOperTopN | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderLoggingLocalLogAppFwOperTopN | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderLoggingLocalLogAppFwOperTopNOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderLoggingLocalLogAppFwOperTopNOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper thunder_logging_local_log_app_fw_oper}
*/
export class DataThunderLoggingLocalLogAppFwOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_logging_local_log_app_fw_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderLoggingLocalLogAppFwOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderLoggingLocalLogAppFwOper to import
  * @param importFromId The id of the existing DataThunderLoggingLocalLogAppFwOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderLoggingLocalLogAppFwOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_logging_local_log_app_fw_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_app_fw_oper thunder_logging_local_log_app_fw_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderLoggingLocalLogAppFwOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderLoggingLocalLogAppFwOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_logging_local_log_app_fw_oper',
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
    this._dotPlot.internalValue = config.dotPlot;
    this._oper.internalValue = config.oper;
    this._topN.internalValue = config.topN;
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

  // dot_plot - computed: false, optional: true, required: false
  private _dotPlot = new DataThunderLoggingLocalLogAppFwOperDotPlotOutputReference(this, "dot_plot");
  public get dotPlot() {
    return this._dotPlot;
  }
  public putDotPlot(value: DataThunderLoggingLocalLogAppFwOperDotPlot) {
    this._dotPlot.internalValue = value;
  }
  public resetDotPlot() {
    this._dotPlot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dotPlotInput() {
    return this._dotPlot.internalValue;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderLoggingLocalLogAppFwOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderLoggingLocalLogAppFwOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // top_n - computed: false, optional: true, required: false
  private _topN = new DataThunderLoggingLocalLogAppFwOperTopNOutputReference(this, "top_n");
  public get topN() {
    return this._topN;
  }
  public putTopN(value: DataThunderLoggingLocalLogAppFwOperTopN) {
    this._topN.internalValue = value;
  }
  public resetTopN() {
    this._topN.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topNInput() {
    return this._topN.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      dot_plot: dataThunderLoggingLocalLogAppFwOperDotPlotToTerraform(this._dotPlot.internalValue),
      oper: dataThunderLoggingLocalLogAppFwOperOperToTerraform(this._oper.internalValue),
      top_n: dataThunderLoggingLocalLogAppFwOperTopNToTerraform(this._topN.internalValue),
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
      dot_plot: {
        value: dataThunderLoggingLocalLogAppFwOperDotPlotToHclTerraform(this._dotPlot.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderLoggingLocalLogAppFwOperDotPlotList",
      },
      oper: {
        value: dataThunderLoggingLocalLogAppFwOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderLoggingLocalLogAppFwOperOperList",
      },
      top_n: {
        value: dataThunderLoggingLocalLogAppFwOperTopNToHclTerraform(this._topN.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderLoggingLocalLogAppFwOperTopNList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
