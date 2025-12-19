// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_auth_log_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAamAuthLogOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_auth_log_oper#id DataThunderAamAuthLogOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_auth_log_oper#oper DataThunderAamAuthLogOper#oper}
  */
  readonly oper?: DataThunderAamAuthLogOperOper;
}
export interface DataThunderAamAuthLogOperOperLogListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_auth_log_oper#auth_result DataThunderAamAuthLogOper#auth_result}
  */
  readonly authResult?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_auth_log_oper#client_ip DataThunderAamAuthLogOper#client_ip}
  */
  readonly clientIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_auth_log_oper#counter DataThunderAamAuthLogOper#counter}
  */
  readonly counter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_auth_log_oper#destination_ip DataThunderAamAuthLogOper#destination_ip}
  */
  readonly destinationIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_auth_log_oper#destination_port DataThunderAamAuthLogOper#destination_port}
  */
  readonly destinationPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_auth_log_oper#record_id DataThunderAamAuthLogOper#record_id}
  */
  readonly recordId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_auth_log_oper#source_port DataThunderAamAuthLogOper#source_port}
  */
  readonly sourcePort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_auth_log_oper#time DataThunderAamAuthLogOper#time}
  */
  readonly time?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_auth_log_oper#user_domain DataThunderAamAuthLogOper#user_domain}
  */
  readonly userDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_auth_log_oper#user_name DataThunderAamAuthLogOper#user_name}
  */
  readonly userName?: string;
}

export function dataThunderAamAuthLogOperOperLogListStructToTerraform(struct?: DataThunderAamAuthLogOperOperLogListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_result: cdktf.stringToTerraform(struct!.authResult),
    client_ip: cdktf.stringToTerraform(struct!.clientIp),
    counter: cdktf.numberToTerraform(struct!.counter),
    destination_ip: cdktf.stringToTerraform(struct!.destinationIp),
    destination_port: cdktf.numberToTerraform(struct!.destinationPort),
    record_id: cdktf.numberToTerraform(struct!.recordId),
    source_port: cdktf.numberToTerraform(struct!.sourcePort),
    time: cdktf.stringToTerraform(struct!.time),
    user_domain: cdktf.stringToTerraform(struct!.userDomain),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function dataThunderAamAuthLogOperOperLogListStructToHclTerraform(struct?: DataThunderAamAuthLogOperOperLogListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_result: {
      value: cdktf.stringToHclTerraform(struct!.authResult),
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
    counter: {
      value: cdktf.numberToHclTerraform(struct!.counter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    record_id: {
      value: cdktf.numberToHclTerraform(struct!.recordId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_port: {
      value: cdktf.numberToHclTerraform(struct!.sourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time: {
      value: cdktf.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_domain: {
      value: cdktf.stringToHclTerraform(struct!.userDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthLogOperOperLogListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderAamAuthLogOperOperLogListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authResult !== undefined) {
      hasAnyValues = true;
      internalValueResult.authResult = this._authResult;
    }
    if (this._clientIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIp = this._clientIp;
    }
    if (this._counter !== undefined) {
      hasAnyValues = true;
      internalValueResult.counter = this._counter;
    }
    if (this._destinationIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationIp = this._destinationIp;
    }
    if (this._destinationPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPort = this._destinationPort;
    }
    if (this._recordId !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordId = this._recordId;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    if (this._userDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDomain = this._userDomain;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthLogOperOperLogListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authResult = undefined;
      this._clientIp = undefined;
      this._counter = undefined;
      this._destinationIp = undefined;
      this._destinationPort = undefined;
      this._recordId = undefined;
      this._sourcePort = undefined;
      this._time = undefined;
      this._userDomain = undefined;
      this._userName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authResult = value.authResult;
      this._clientIp = value.clientIp;
      this._counter = value.counter;
      this._destinationIp = value.destinationIp;
      this._destinationPort = value.destinationPort;
      this._recordId = value.recordId;
      this._sourcePort = value.sourcePort;
      this._time = value.time;
      this._userDomain = value.userDomain;
      this._userName = value.userName;
    }
  }

  // auth_result - computed: false, optional: true, required: false
  private _authResult?: string; 
  public get authResult() {
    return this.getStringAttribute('auth_result');
  }
  public set authResult(value: string) {
    this._authResult = value;
  }
  public resetAuthResult() {
    this._authResult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authResultInput() {
    return this._authResult;
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

  // record_id - computed: false, optional: true, required: false
  private _recordId?: number; 
  public get recordId() {
    return this.getNumberAttribute('record_id');
  }
  public set recordId(value: number) {
    this._recordId = value;
  }
  public resetRecordId() {
    this._recordId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIdInput() {
    return this._recordId;
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

  // user_domain - computed: false, optional: true, required: false
  private _userDomain?: string; 
  public get userDomain() {
    return this.getStringAttribute('user_domain');
  }
  public set userDomain(value: string) {
    this._userDomain = value;
  }
  public resetUserDomain() {
    this._userDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDomainInput() {
    return this._userDomain;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}

export class DataThunderAamAuthLogOperOperLogListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderAamAuthLogOperOperLogListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderAamAuthLogOperOperLogListStructOutputReference {
    return new DataThunderAamAuthLogOperOperLogListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderAamAuthLogOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_auth_log_oper#auth_status DataThunderAamAuthLogOper#auth_status}
  */
  readonly authStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_auth_log_oper#last DataThunderAamAuthLogOper#last}
  */
  readonly last?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_auth_log_oper#tail DataThunderAamAuthLogOper#tail}
  */
  readonly tail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_auth_log_oper#target DataThunderAamAuthLogOper#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_auth_log_oper#top DataThunderAamAuthLogOper#top}
  */
  readonly top?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_auth_log_oper#total DataThunderAamAuthLogOper#total}
  */
  readonly total?: number;
  /**
  * log_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_auth_log_oper#log_list DataThunderAamAuthLogOper#log_list}
  */
  readonly logList?: DataThunderAamAuthLogOperOperLogListStruct[] | cdktf.IResolvable;
}

export function dataThunderAamAuthLogOperOperToTerraform(struct?: DataThunderAamAuthLogOperOperOutputReference | DataThunderAamAuthLogOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_status: cdktf.stringToTerraform(struct!.authStatus),
    last: cdktf.numberToTerraform(struct!.last),
    tail: cdktf.numberToTerraform(struct!.tail),
    target: cdktf.stringToTerraform(struct!.target),
    top: cdktf.numberToTerraform(struct!.top),
    total: cdktf.numberToTerraform(struct!.total),
    log_list: cdktf.listMapper(dataThunderAamAuthLogOperOperLogListStructToTerraform, true)(struct!.logList),
  }
}


export function dataThunderAamAuthLogOperOperToHclTerraform(struct?: DataThunderAamAuthLogOperOperOutputReference | DataThunderAamAuthLogOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_status: {
      value: cdktf.stringToHclTerraform(struct!.authStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last: {
      value: cdktf.numberToHclTerraform(struct!.last),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tail: {
      value: cdktf.numberToHclTerraform(struct!.tail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    top: {
      value: cdktf.numberToHclTerraform(struct!.top),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total: {
      value: cdktf.numberToHclTerraform(struct!.total),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_list: {
      value: cdktf.listMapperHcl(dataThunderAamAuthLogOperOperLogListStructToHclTerraform, true)(struct!.logList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderAamAuthLogOperOperLogListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthLogOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAuthLogOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.authStatus = this._authStatus;
    }
    if (this._last !== undefined) {
      hasAnyValues = true;
      internalValueResult.last = this._last;
    }
    if (this._tail !== undefined) {
      hasAnyValues = true;
      internalValueResult.tail = this._tail;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
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

  public set internalValue(value: DataThunderAamAuthLogOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authStatus = undefined;
      this._last = undefined;
      this._tail = undefined;
      this._target = undefined;
      this._top = undefined;
      this._total = undefined;
      this._logList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authStatus = value.authStatus;
      this._last = value.last;
      this._tail = value.tail;
      this._target = value.target;
      this._top = value.top;
      this._total = value.total;
      this._logList.internalValue = value.logList;
    }
  }

  // auth_status - computed: false, optional: true, required: false
  private _authStatus?: string; 
  public get authStatus() {
    return this.getStringAttribute('auth_status');
  }
  public set authStatus(value: string) {
    this._authStatus = value;
  }
  public resetAuthStatus() {
    this._authStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authStatusInput() {
    return this._authStatus;
  }

  // last - computed: false, optional: true, required: false
  private _last?: number; 
  public get last() {
    return this.getNumberAttribute('last');
  }
  public set last(value: number) {
    this._last = value;
  }
  public resetLast() {
    this._last = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastInput() {
    return this._last;
  }

  // tail - computed: false, optional: true, required: false
  private _tail?: number; 
  public get tail() {
    return this.getNumberAttribute('tail');
  }
  public set tail(value: number) {
    this._tail = value;
  }
  public resetTail() {
    this._tail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tailInput() {
    return this._tail;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // top - computed: false, optional: true, required: false
  private _top?: number; 
  public get top() {
    return this.getNumberAttribute('top');
  }
  public set top(value: number) {
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
  private _logList = new DataThunderAamAuthLogOperOperLogListStructList(this, "log_list", false);
  public get logList() {
    return this._logList;
  }
  public putLogList(value: DataThunderAamAuthLogOperOperLogListStruct[] | cdktf.IResolvable) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_auth_log_oper thunder_aam_auth_log_oper}
*/
export class DataThunderAamAuthLogOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_auth_log_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAamAuthLogOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAamAuthLogOper to import
  * @param importFromId The id of the existing DataThunderAamAuthLogOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_auth_log_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAamAuthLogOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_auth_log_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_auth_log_oper thunder_aam_auth_log_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAamAuthLogOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderAamAuthLogOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_auth_log_oper',
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
  private _oper = new DataThunderAamAuthLogOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderAamAuthLogOperOper) {
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
      oper: dataThunderAamAuthLogOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderAamAuthLogOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAuthLogOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
