// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_authentication_log_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderLoggingLocalLogAuthenticationLogOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_authentication_log_oper#id DataThunderLoggingLocalLogAuthenticationLogOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_authentication_log_oper#oper DataThunderLoggingLocalLogAuthenticationLogOper#oper}
  */
  readonly oper?: DataThunderLoggingLocalLogAuthenticationLogOperOper;
}
export interface DataThunderLoggingLocalLogAuthenticationLogOperOperLogListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_authentication_log_oper#auth_result DataThunderLoggingLocalLogAuthenticationLogOper#auth_result}
  */
  readonly authResult?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_authentication_log_oper#client_ip DataThunderLoggingLocalLogAuthenticationLogOper#client_ip}
  */
  readonly clientIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_authentication_log_oper#destination_ip DataThunderLoggingLocalLogAuthenticationLogOper#destination_ip}
  */
  readonly destinationIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_authentication_log_oper#destination_port DataThunderLoggingLocalLogAuthenticationLogOper#destination_port}
  */
  readonly destinationPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_authentication_log_oper#source_port DataThunderLoggingLocalLogAuthenticationLogOper#source_port}
  */
  readonly sourcePort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_authentication_log_oper#time DataThunderLoggingLocalLogAuthenticationLogOper#time}
  */
  readonly time?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_authentication_log_oper#user_domain DataThunderLoggingLocalLogAuthenticationLogOper#user_domain}
  */
  readonly userDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_authentication_log_oper#user_name DataThunderLoggingLocalLogAuthenticationLogOper#user_name}
  */
  readonly userName?: string;
}

export function dataThunderLoggingLocalLogAuthenticationLogOperOperLogListStructToTerraform(struct?: DataThunderLoggingLocalLogAuthenticationLogOperOperLogListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_result: cdktf.stringToTerraform(struct!.authResult),
    client_ip: cdktf.stringToTerraform(struct!.clientIp),
    destination_ip: cdktf.stringToTerraform(struct!.destinationIp),
    destination_port: cdktf.numberToTerraform(struct!.destinationPort),
    source_port: cdktf.numberToTerraform(struct!.sourcePort),
    time: cdktf.stringToTerraform(struct!.time),
    user_domain: cdktf.stringToTerraform(struct!.userDomain),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function dataThunderLoggingLocalLogAuthenticationLogOperOperLogListStructToHclTerraform(struct?: DataThunderLoggingLocalLogAuthenticationLogOperOperLogListStruct | cdktf.IResolvable): any {
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

export class DataThunderLoggingLocalLogAuthenticationLogOperOperLogListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderLoggingLocalLogAuthenticationLogOperOperLogListStruct | cdktf.IResolvable | undefined {
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
    if (this._destinationIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationIp = this._destinationIp;
    }
    if (this._destinationPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPort = this._destinationPort;
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

  public set internalValue(value: DataThunderLoggingLocalLogAuthenticationLogOperOperLogListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authResult = undefined;
      this._clientIp = undefined;
      this._destinationIp = undefined;
      this._destinationPort = undefined;
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
      this._destinationIp = value.destinationIp;
      this._destinationPort = value.destinationPort;
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

export class DataThunderLoggingLocalLogAuthenticationLogOperOperLogListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderLoggingLocalLogAuthenticationLogOperOperLogListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderLoggingLocalLogAuthenticationLogOperOperLogListStructOutputReference {
    return new DataThunderLoggingLocalLogAuthenticationLogOperOperLogListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderLoggingLocalLogAuthenticationLogOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_authentication_log_oper#interval DataThunderLoggingLocalLogAuthenticationLogOper#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_authentication_log_oper#interval_position DataThunderLoggingLocalLogAuthenticationLogOper#interval_position}
  */
  readonly intervalPosition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_authentication_log_oper#max_entries DataThunderLoggingLocalLogAuthenticationLogOper#max_entries}
  */
  readonly maxEntries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_authentication_log_oper#start_time DataThunderLoggingLocalLogAuthenticationLogOper#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_authentication_log_oper#total DataThunderLoggingLocalLogAuthenticationLogOper#total}
  */
  readonly total?: number;
  /**
  * log_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_authentication_log_oper#log_list DataThunderLoggingLocalLogAuthenticationLogOper#log_list}
  */
  readonly logList?: DataThunderLoggingLocalLogAuthenticationLogOperOperLogListStruct[] | cdktf.IResolvable;
}

export function dataThunderLoggingLocalLogAuthenticationLogOperOperToTerraform(struct?: DataThunderLoggingLocalLogAuthenticationLogOperOperOutputReference | DataThunderLoggingLocalLogAuthenticationLogOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    interval_position: cdktf.stringToTerraform(struct!.intervalPosition),
    max_entries: cdktf.numberToTerraform(struct!.maxEntries),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    total: cdktf.numberToTerraform(struct!.total),
    log_list: cdktf.listMapper(dataThunderLoggingLocalLogAuthenticationLogOperOperLogListStructToTerraform, true)(struct!.logList),
  }
}


export function dataThunderLoggingLocalLogAuthenticationLogOperOperToHclTerraform(struct?: DataThunderLoggingLocalLogAuthenticationLogOperOperOutputReference | DataThunderLoggingLocalLogAuthenticationLogOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    total: {
      value: cdktf.numberToHclTerraform(struct!.total),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_list: {
      value: cdktf.listMapperHcl(dataThunderLoggingLocalLogAuthenticationLogOperOperLogListStructToHclTerraform, true)(struct!.logList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderLoggingLocalLogAuthenticationLogOperOperLogListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderLoggingLocalLogAuthenticationLogOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderLoggingLocalLogAuthenticationLogOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataThunderLoggingLocalLogAuthenticationLogOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._intervalPosition = undefined;
      this._maxEntries = undefined;
      this._startTime = undefined;
      this._total = undefined;
      this._logList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._intervalPosition = value.intervalPosition;
      this._maxEntries = value.maxEntries;
      this._startTime = value.startTime;
      this._total = value.total;
      this._logList.internalValue = value.logList;
    }
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
  private _logList = new DataThunderLoggingLocalLogAuthenticationLogOperOperLogListStructList(this, "log_list", false);
  public get logList() {
    return this._logList;
  }
  public putLogList(value: DataThunderLoggingLocalLogAuthenticationLogOperOperLogListStruct[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_authentication_log_oper thunder_logging_local_log_authentication_log_oper}
*/
export class DataThunderLoggingLocalLogAuthenticationLogOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_logging_local_log_authentication_log_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderLoggingLocalLogAuthenticationLogOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderLoggingLocalLogAuthenticationLogOper to import
  * @param importFromId The id of the existing DataThunderLoggingLocalLogAuthenticationLogOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_authentication_log_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderLoggingLocalLogAuthenticationLogOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_logging_local_log_authentication_log_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_authentication_log_oper thunder_logging_local_log_authentication_log_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderLoggingLocalLogAuthenticationLogOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderLoggingLocalLogAuthenticationLogOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_logging_local_log_authentication_log_oper',
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
  private _oper = new DataThunderLoggingLocalLogAuthenticationLogOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderLoggingLocalLogAuthenticationLogOperOper) {
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
      oper: dataThunderLoggingLocalLogAuthenticationLogOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderLoggingLocalLogAuthenticationLogOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderLoggingLocalLogAuthenticationLogOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
