// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/tacacs_server_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderTacacsServerOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/tacacs_server_oper#id DataThunderTacacsServerOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/tacacs_server_oper#oper DataThunderTacacsServerOper#oper}
  */
  readonly oper?: DataThunderTacacsServerOperOper;
}
export interface DataThunderTacacsServerOperOperTacacsServerListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/tacacs_server_oper#con_fail_attempts DataThunderTacacsServerOper#con_fail_attempts}
  */
  readonly conFailAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/tacacs_server_oper#last_available DataThunderTacacsServerOper#last_available}
  */
  readonly lastAvailable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/tacacs_server_oper#monitor_oper DataThunderTacacsServerOper#monitor_oper}
  */
  readonly monitorOper?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/tacacs_server_oper#name DataThunderTacacsServerOper#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/tacacs_server_oper#port DataThunderTacacsServerOper#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/tacacs_server_oper#socket_aborts DataThunderTacacsServerOper#socket_aborts}
  */
  readonly socketAborts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/tacacs_server_oper#socket_close DataThunderTacacsServerOper#socket_close}
  */
  readonly socketClose?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/tacacs_server_oper#socket_errors DataThunderTacacsServerOper#socket_errors}
  */
  readonly socketErrors?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/tacacs_server_oper#socket_failconn DataThunderTacacsServerOper#socket_failconn}
  */
  readonly socketFailconn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/tacacs_server_oper#socket_open DataThunderTacacsServerOper#socket_open}
  */
  readonly socketOpen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/tacacs_server_oper#socket_rev DataThunderTacacsServerOper#socket_rev}
  */
  readonly socketRev?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/tacacs_server_oper#socket_send DataThunderTacacsServerOper#socket_send}
  */
  readonly socketSend?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/tacacs_server_oper#socket_timeout DataThunderTacacsServerOper#socket_timeout}
  */
  readonly socketTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/tacacs_server_oper#total_fail_auth DataThunderTacacsServerOper#total_fail_auth}
  */
  readonly totalFailAuth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/tacacs_server_oper#total_fail_conn DataThunderTacacsServerOper#total_fail_conn}
  */
  readonly totalFailConn?: number;
}

export function dataThunderTacacsServerOperOperTacacsServerListStructToTerraform(struct?: DataThunderTacacsServerOperOperTacacsServerListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    con_fail_attempts: cdktf.numberToTerraform(struct!.conFailAttempts),
    last_available: cdktf.numberToTerraform(struct!.lastAvailable),
    monitor_oper: cdktf.numberToTerraform(struct!.monitorOper),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    socket_aborts: cdktf.numberToTerraform(struct!.socketAborts),
    socket_close: cdktf.numberToTerraform(struct!.socketClose),
    socket_errors: cdktf.numberToTerraform(struct!.socketErrors),
    socket_failconn: cdktf.numberToTerraform(struct!.socketFailconn),
    socket_open: cdktf.numberToTerraform(struct!.socketOpen),
    socket_rev: cdktf.numberToTerraform(struct!.socketRev),
    socket_send: cdktf.numberToTerraform(struct!.socketSend),
    socket_timeout: cdktf.numberToTerraform(struct!.socketTimeout),
    total_fail_auth: cdktf.numberToTerraform(struct!.totalFailAuth),
    total_fail_conn: cdktf.numberToTerraform(struct!.totalFailConn),
  }
}


export function dataThunderTacacsServerOperOperTacacsServerListStructToHclTerraform(struct?: DataThunderTacacsServerOperOperTacacsServerListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    con_fail_attempts: {
      value: cdktf.numberToHclTerraform(struct!.conFailAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last_available: {
      value: cdktf.numberToHclTerraform(struct!.lastAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitor_oper: {
      value: cdktf.numberToHclTerraform(struct!.monitorOper),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    socket_aborts: {
      value: cdktf.numberToHclTerraform(struct!.socketAborts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    socket_close: {
      value: cdktf.numberToHclTerraform(struct!.socketClose),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    socket_errors: {
      value: cdktf.numberToHclTerraform(struct!.socketErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    socket_failconn: {
      value: cdktf.numberToHclTerraform(struct!.socketFailconn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    socket_open: {
      value: cdktf.numberToHclTerraform(struct!.socketOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    socket_rev: {
      value: cdktf.numberToHclTerraform(struct!.socketRev),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    socket_send: {
      value: cdktf.numberToHclTerraform(struct!.socketSend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    socket_timeout: {
      value: cdktf.numberToHclTerraform(struct!.socketTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_fail_auth: {
      value: cdktf.numberToHclTerraform(struct!.totalFailAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_fail_conn: {
      value: cdktf.numberToHclTerraform(struct!.totalFailConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderTacacsServerOperOperTacacsServerListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderTacacsServerOperOperTacacsServerListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conFailAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.conFailAttempts = this._conFailAttempts;
    }
    if (this._lastAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastAvailable = this._lastAvailable;
    }
    if (this._monitorOper !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorOper = this._monitorOper;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._socketAborts !== undefined) {
      hasAnyValues = true;
      internalValueResult.socketAborts = this._socketAborts;
    }
    if (this._socketClose !== undefined) {
      hasAnyValues = true;
      internalValueResult.socketClose = this._socketClose;
    }
    if (this._socketErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.socketErrors = this._socketErrors;
    }
    if (this._socketFailconn !== undefined) {
      hasAnyValues = true;
      internalValueResult.socketFailconn = this._socketFailconn;
    }
    if (this._socketOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.socketOpen = this._socketOpen;
    }
    if (this._socketRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.socketRev = this._socketRev;
    }
    if (this._socketSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.socketSend = this._socketSend;
    }
    if (this._socketTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.socketTimeout = this._socketTimeout;
    }
    if (this._totalFailAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalFailAuth = this._totalFailAuth;
    }
    if (this._totalFailConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalFailConn = this._totalFailConn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderTacacsServerOperOperTacacsServerListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conFailAttempts = undefined;
      this._lastAvailable = undefined;
      this._monitorOper = undefined;
      this._name = undefined;
      this._port = undefined;
      this._socketAborts = undefined;
      this._socketClose = undefined;
      this._socketErrors = undefined;
      this._socketFailconn = undefined;
      this._socketOpen = undefined;
      this._socketRev = undefined;
      this._socketSend = undefined;
      this._socketTimeout = undefined;
      this._totalFailAuth = undefined;
      this._totalFailConn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conFailAttempts = value.conFailAttempts;
      this._lastAvailable = value.lastAvailable;
      this._monitorOper = value.monitorOper;
      this._name = value.name;
      this._port = value.port;
      this._socketAborts = value.socketAborts;
      this._socketClose = value.socketClose;
      this._socketErrors = value.socketErrors;
      this._socketFailconn = value.socketFailconn;
      this._socketOpen = value.socketOpen;
      this._socketRev = value.socketRev;
      this._socketSend = value.socketSend;
      this._socketTimeout = value.socketTimeout;
      this._totalFailAuth = value.totalFailAuth;
      this._totalFailConn = value.totalFailConn;
    }
  }

  // con_fail_attempts - computed: false, optional: true, required: false
  private _conFailAttempts?: number; 
  public get conFailAttempts() {
    return this.getNumberAttribute('con_fail_attempts');
  }
  public set conFailAttempts(value: number) {
    this._conFailAttempts = value;
  }
  public resetConFailAttempts() {
    this._conFailAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conFailAttemptsInput() {
    return this._conFailAttempts;
  }

  // last_available - computed: false, optional: true, required: false
  private _lastAvailable?: number; 
  public get lastAvailable() {
    return this.getNumberAttribute('last_available');
  }
  public set lastAvailable(value: number) {
    this._lastAvailable = value;
  }
  public resetLastAvailable() {
    this._lastAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastAvailableInput() {
    return this._lastAvailable;
  }

  // monitor_oper - computed: false, optional: true, required: false
  private _monitorOper?: number; 
  public get monitorOper() {
    return this.getNumberAttribute('monitor_oper');
  }
  public set monitorOper(value: number) {
    this._monitorOper = value;
  }
  public resetMonitorOper() {
    this._monitorOper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorOperInput() {
    return this._monitorOper;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // socket_aborts - computed: false, optional: true, required: false
  private _socketAborts?: number; 
  public get socketAborts() {
    return this.getNumberAttribute('socket_aborts');
  }
  public set socketAborts(value: number) {
    this._socketAborts = value;
  }
  public resetSocketAborts() {
    this._socketAborts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketAbortsInput() {
    return this._socketAborts;
  }

  // socket_close - computed: false, optional: true, required: false
  private _socketClose?: number; 
  public get socketClose() {
    return this.getNumberAttribute('socket_close');
  }
  public set socketClose(value: number) {
    this._socketClose = value;
  }
  public resetSocketClose() {
    this._socketClose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketCloseInput() {
    return this._socketClose;
  }

  // socket_errors - computed: false, optional: true, required: false
  private _socketErrors?: number; 
  public get socketErrors() {
    return this.getNumberAttribute('socket_errors');
  }
  public set socketErrors(value: number) {
    this._socketErrors = value;
  }
  public resetSocketErrors() {
    this._socketErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketErrorsInput() {
    return this._socketErrors;
  }

  // socket_failconn - computed: false, optional: true, required: false
  private _socketFailconn?: number; 
  public get socketFailconn() {
    return this.getNumberAttribute('socket_failconn');
  }
  public set socketFailconn(value: number) {
    this._socketFailconn = value;
  }
  public resetSocketFailconn() {
    this._socketFailconn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketFailconnInput() {
    return this._socketFailconn;
  }

  // socket_open - computed: false, optional: true, required: false
  private _socketOpen?: number; 
  public get socketOpen() {
    return this.getNumberAttribute('socket_open');
  }
  public set socketOpen(value: number) {
    this._socketOpen = value;
  }
  public resetSocketOpen() {
    this._socketOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketOpenInput() {
    return this._socketOpen;
  }

  // socket_rev - computed: false, optional: true, required: false
  private _socketRev?: number; 
  public get socketRev() {
    return this.getNumberAttribute('socket_rev');
  }
  public set socketRev(value: number) {
    this._socketRev = value;
  }
  public resetSocketRev() {
    this._socketRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketRevInput() {
    return this._socketRev;
  }

  // socket_send - computed: false, optional: true, required: false
  private _socketSend?: number; 
  public get socketSend() {
    return this.getNumberAttribute('socket_send');
  }
  public set socketSend(value: number) {
    this._socketSend = value;
  }
  public resetSocketSend() {
    this._socketSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketSendInput() {
    return this._socketSend;
  }

  // socket_timeout - computed: false, optional: true, required: false
  private _socketTimeout?: number; 
  public get socketTimeout() {
    return this.getNumberAttribute('socket_timeout');
  }
  public set socketTimeout(value: number) {
    this._socketTimeout = value;
  }
  public resetSocketTimeout() {
    this._socketTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketTimeoutInput() {
    return this._socketTimeout;
  }

  // total_fail_auth - computed: false, optional: true, required: false
  private _totalFailAuth?: number; 
  public get totalFailAuth() {
    return this.getNumberAttribute('total_fail_auth');
  }
  public set totalFailAuth(value: number) {
    this._totalFailAuth = value;
  }
  public resetTotalFailAuth() {
    this._totalFailAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalFailAuthInput() {
    return this._totalFailAuth;
  }

  // total_fail_conn - computed: false, optional: true, required: false
  private _totalFailConn?: number; 
  public get totalFailConn() {
    return this.getNumberAttribute('total_fail_conn');
  }
  public set totalFailConn(value: number) {
    this._totalFailConn = value;
  }
  public resetTotalFailConn() {
    this._totalFailConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalFailConnInput() {
    return this._totalFailConn;
  }
}

export class DataThunderTacacsServerOperOperTacacsServerListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderTacacsServerOperOperTacacsServerListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderTacacsServerOperOperTacacsServerListStructOutputReference {
    return new DataThunderTacacsServerOperOperTacacsServerListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderTacacsServerOperOper {
  /**
  * tacacs_server_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/tacacs_server_oper#tacacs_server_list DataThunderTacacsServerOper#tacacs_server_list}
  */
  readonly tacacsServerList?: DataThunderTacacsServerOperOperTacacsServerListStruct[] | cdktf.IResolvable;
}

export function dataThunderTacacsServerOperOperToTerraform(struct?: DataThunderTacacsServerOperOperOutputReference | DataThunderTacacsServerOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tacacs_server_list: cdktf.listMapper(dataThunderTacacsServerOperOperTacacsServerListStructToTerraform, true)(struct!.tacacsServerList),
  }
}


export function dataThunderTacacsServerOperOperToHclTerraform(struct?: DataThunderTacacsServerOperOperOutputReference | DataThunderTacacsServerOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tacacs_server_list: {
      value: cdktf.listMapperHcl(dataThunderTacacsServerOperOperTacacsServerListStructToHclTerraform, true)(struct!.tacacsServerList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderTacacsServerOperOperTacacsServerListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderTacacsServerOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderTacacsServerOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tacacsServerList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tacacsServerList = this._tacacsServerList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderTacacsServerOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tacacsServerList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tacacsServerList.internalValue = value.tacacsServerList;
    }
  }

  // tacacs_server_list - computed: false, optional: true, required: false
  private _tacacsServerList = new DataThunderTacacsServerOperOperTacacsServerListStructList(this, "tacacs_server_list", false);
  public get tacacsServerList() {
    return this._tacacsServerList;
  }
  public putTacacsServerList(value: DataThunderTacacsServerOperOperTacacsServerListStruct[] | cdktf.IResolvable) {
    this._tacacsServerList.internalValue = value;
  }
  public resetTacacsServerList() {
    this._tacacsServerList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacacsServerListInput() {
    return this._tacacsServerList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/tacacs_server_oper thunder_tacacs_server_oper}
*/
export class DataThunderTacacsServerOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_tacacs_server_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderTacacsServerOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderTacacsServerOper to import
  * @param importFromId The id of the existing DataThunderTacacsServerOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/tacacs_server_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderTacacsServerOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_tacacs_server_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/tacacs_server_oper thunder_tacacs_server_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderTacacsServerOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderTacacsServerOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_tacacs_server_oper',
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
  private _oper = new DataThunderTacacsServerOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderTacacsServerOperOper) {
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
      oper: dataThunderTacacsServerOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderTacacsServerOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderTacacsServerOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
