// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/syslog_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSyslogOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/syslog_oper#id DataThunderSyslogOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/syslog_oper#oper DataThunderSyslogOper#oper}
  */
  readonly oper?: DataThunderSyslogOperOper;
}
export interface DataThunderSyslogOperOperSystemLog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/syslog_oper#add_slot_info DataThunderSyslogOper#add_slot_info}
  */
  readonly addSlotInfo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/syslog_oper#log_data DataThunderSyslogOper#log_data}
  */
  readonly logData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/syslog_oper#log_data_search DataThunderSyslogOper#log_data_search}
  */
  readonly logDataSearch?: string;
}

export function dataThunderSyslogOperOperSystemLogToTerraform(struct?: DataThunderSyslogOperOperSystemLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_slot_info: cdktf.numberToTerraform(struct!.addSlotInfo),
    log_data: cdktf.stringToTerraform(struct!.logData),
    log_data_search: cdktf.stringToTerraform(struct!.logDataSearch),
  }
}


export function dataThunderSyslogOperOperSystemLogToHclTerraform(struct?: DataThunderSyslogOperOperSystemLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_slot_info: {
      value: cdktf.numberToHclTerraform(struct!.addSlotInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_data: {
      value: cdktf.stringToHclTerraform(struct!.logData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_data_search: {
      value: cdktf.stringToHclTerraform(struct!.logDataSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSyslogOperOperSystemLogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSyslogOperOperSystemLog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addSlotInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.addSlotInfo = this._addSlotInfo;
    }
    if (this._logData !== undefined) {
      hasAnyValues = true;
      internalValueResult.logData = this._logData;
    }
    if (this._logDataSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.logDataSearch = this._logDataSearch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSyslogOperOperSystemLog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addSlotInfo = undefined;
      this._logData = undefined;
      this._logDataSearch = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addSlotInfo = value.addSlotInfo;
      this._logData = value.logData;
      this._logDataSearch = value.logDataSearch;
    }
  }

  // add_slot_info - computed: false, optional: true, required: false
  private _addSlotInfo?: number; 
  public get addSlotInfo() {
    return this.getNumberAttribute('add_slot_info');
  }
  public set addSlotInfo(value: number) {
    this._addSlotInfo = value;
  }
  public resetAddSlotInfo() {
    this._addSlotInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addSlotInfoInput() {
    return this._addSlotInfo;
  }

  // log_data - computed: false, optional: true, required: false
  private _logData?: string; 
  public get logData() {
    return this.getStringAttribute('log_data');
  }
  public set logData(value: string) {
    this._logData = value;
  }
  public resetLogData() {
    this._logData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDataInput() {
    return this._logData;
  }

  // log_data_search - computed: false, optional: true, required: false
  private _logDataSearch?: string; 
  public get logDataSearch() {
    return this.getStringAttribute('log_data_search');
  }
  public set logDataSearch(value: string) {
    this._logDataSearch = value;
  }
  public resetLogDataSearch() {
    this._logDataSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDataSearchInput() {
    return this._logDataSearch;
  }
}

export class DataThunderSyslogOperOperSystemLogList extends cdktf.ComplexList {
  public internalValue? : DataThunderSyslogOperOperSystemLog[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSyslogOperOperSystemLogOutputReference {
    return new DataThunderSyslogOperOperSystemLogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSyslogOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/syslog_oper#next_msg_idx DataThunderSyslogOper#next_msg_idx}
  */
  readonly nextMsgIdx?: number;
  /**
  * system_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/syslog_oper#system_log DataThunderSyslogOper#system_log}
  */
  readonly systemLog?: DataThunderSyslogOperOperSystemLog[] | cdktf.IResolvable;
}

export function dataThunderSyslogOperOperToTerraform(struct?: DataThunderSyslogOperOperOutputReference | DataThunderSyslogOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    next_msg_idx: cdktf.numberToTerraform(struct!.nextMsgIdx),
    system_log: cdktf.listMapper(dataThunderSyslogOperOperSystemLogToTerraform, true)(struct!.systemLog),
  }
}


export function dataThunderSyslogOperOperToHclTerraform(struct?: DataThunderSyslogOperOperOutputReference | DataThunderSyslogOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    next_msg_idx: {
      value: cdktf.numberToHclTerraform(struct!.nextMsgIdx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    system_log: {
      value: cdktf.listMapperHcl(dataThunderSyslogOperOperSystemLogToHclTerraform, true)(struct!.systemLog),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSyslogOperOperSystemLogList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSyslogOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSyslogOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nextMsgIdx !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextMsgIdx = this._nextMsgIdx;
    }
    if (this._systemLog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemLog = this._systemLog?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSyslogOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nextMsgIdx = undefined;
      this._systemLog.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nextMsgIdx = value.nextMsgIdx;
      this._systemLog.internalValue = value.systemLog;
    }
  }

  // next_msg_idx - computed: false, optional: true, required: false
  private _nextMsgIdx?: number; 
  public get nextMsgIdx() {
    return this.getNumberAttribute('next_msg_idx');
  }
  public set nextMsgIdx(value: number) {
    this._nextMsgIdx = value;
  }
  public resetNextMsgIdx() {
    this._nextMsgIdx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextMsgIdxInput() {
    return this._nextMsgIdx;
  }

  // system_log - computed: false, optional: true, required: false
  private _systemLog = new DataThunderSyslogOperOperSystemLogList(this, "system_log", false);
  public get systemLog() {
    return this._systemLog;
  }
  public putSystemLog(value: DataThunderSyslogOperOperSystemLog[] | cdktf.IResolvable) {
    this._systemLog.internalValue = value;
  }
  public resetSystemLog() {
    this._systemLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemLogInput() {
    return this._systemLog.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/syslog_oper thunder_syslog_oper}
*/
export class DataThunderSyslogOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_syslog_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSyslogOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSyslogOper to import
  * @param importFromId The id of the existing DataThunderSyslogOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/syslog_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSyslogOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_syslog_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/syslog_oper thunder_syslog_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSyslogOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSyslogOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_syslog_oper',
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
  private _oper = new DataThunderSyslogOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSyslogOperOper) {
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
      oper: dataThunderSyslogOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSyslogOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSyslogOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
