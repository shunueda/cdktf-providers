// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_authentication_top_n_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderLoggingLocalLogAuthenticationTopNOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_authentication_top_n_oper#id DataThunderLoggingLocalLogAuthenticationTopNOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_authentication_top_n_oper#oper DataThunderLoggingLocalLogAuthenticationTopNOper#oper}
  */
  readonly oper?: DataThunderLoggingLocalLogAuthenticationTopNOperOper;
}
export interface DataThunderLoggingLocalLogAuthenticationTopNOperOperLogListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_authentication_top_n_oper#counter DataThunderLoggingLocalLogAuthenticationTopNOper#counter}
  */
  readonly counter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_authentication_top_n_oper#name DataThunderLoggingLocalLogAuthenticationTopNOper#name}
  */
  readonly name?: string;
}

export function dataThunderLoggingLocalLogAuthenticationTopNOperOperLogListStructToTerraform(struct?: DataThunderLoggingLocalLogAuthenticationTopNOperOperLogListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counter: cdktf.numberToTerraform(struct!.counter),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataThunderLoggingLocalLogAuthenticationTopNOperOperLogListStructToHclTerraform(struct?: DataThunderLoggingLocalLogAuthenticationTopNOperOperLogListStruct | cdktf.IResolvable): any {
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

export class DataThunderLoggingLocalLogAuthenticationTopNOperOperLogListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderLoggingLocalLogAuthenticationTopNOperOperLogListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderLoggingLocalLogAuthenticationTopNOperOperLogListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderLoggingLocalLogAuthenticationTopNOperOperLogListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderLoggingLocalLogAuthenticationTopNOperOperLogListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderLoggingLocalLogAuthenticationTopNOperOperLogListStructOutputReference {
    return new DataThunderLoggingLocalLogAuthenticationTopNOperOperLogListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderLoggingLocalLogAuthenticationTopNOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_authentication_top_n_oper#auth_result DataThunderLoggingLocalLogAuthenticationTopNOper#auth_result}
  */
  readonly authResult?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_authentication_top_n_oper#interval DataThunderLoggingLocalLogAuthenticationTopNOper#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_authentication_top_n_oper#interval_position DataThunderLoggingLocalLogAuthenticationTopNOper#interval_position}
  */
  readonly intervalPosition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_authentication_top_n_oper#max_entries DataThunderLoggingLocalLogAuthenticationTopNOper#max_entries}
  */
  readonly maxEntries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_authentication_top_n_oper#start_time DataThunderLoggingLocalLogAuthenticationTopNOper#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_authentication_top_n_oper#top DataThunderLoggingLocalLogAuthenticationTopNOper#top}
  */
  readonly top?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_authentication_top_n_oper#total DataThunderLoggingLocalLogAuthenticationTopNOper#total}
  */
  readonly total?: number;
  /**
  * log_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_authentication_top_n_oper#log_list DataThunderLoggingLocalLogAuthenticationTopNOper#log_list}
  */
  readonly logList?: DataThunderLoggingLocalLogAuthenticationTopNOperOperLogListStruct[] | cdktf.IResolvable;
}

export function dataThunderLoggingLocalLogAuthenticationTopNOperOperToTerraform(struct?: DataThunderLoggingLocalLogAuthenticationTopNOperOperOutputReference | DataThunderLoggingLocalLogAuthenticationTopNOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_result: cdktf.stringToTerraform(struct!.authResult),
    interval: cdktf.stringToTerraform(struct!.interval),
    interval_position: cdktf.stringToTerraform(struct!.intervalPosition),
    max_entries: cdktf.numberToTerraform(struct!.maxEntries),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    top: cdktf.stringToTerraform(struct!.top),
    total: cdktf.numberToTerraform(struct!.total),
    log_list: cdktf.listMapper(dataThunderLoggingLocalLogAuthenticationTopNOperOperLogListStructToTerraform, true)(struct!.logList),
  }
}


export function dataThunderLoggingLocalLogAuthenticationTopNOperOperToHclTerraform(struct?: DataThunderLoggingLocalLogAuthenticationTopNOperOperOutputReference | DataThunderLoggingLocalLogAuthenticationTopNOperOper): any {
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
      value: cdktf.listMapperHcl(dataThunderLoggingLocalLogAuthenticationTopNOperOperLogListStructToHclTerraform, true)(struct!.logList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderLoggingLocalLogAuthenticationTopNOperOperLogListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderLoggingLocalLogAuthenticationTopNOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderLoggingLocalLogAuthenticationTopNOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authResult !== undefined) {
      hasAnyValues = true;
      internalValueResult.authResult = this._authResult;
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

  public set internalValue(value: DataThunderLoggingLocalLogAuthenticationTopNOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authResult = undefined;
      this._interval = undefined;
      this._intervalPosition = undefined;
      this._maxEntries = undefined;
      this._startTime = undefined;
      this._top = undefined;
      this._total = undefined;
      this._logList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authResult = value.authResult;
      this._interval = value.interval;
      this._intervalPosition = value.intervalPosition;
      this._maxEntries = value.maxEntries;
      this._startTime = value.startTime;
      this._top = value.top;
      this._total = value.total;
      this._logList.internalValue = value.logList;
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
  private _logList = new DataThunderLoggingLocalLogAuthenticationTopNOperOperLogListStructList(this, "log_list", false);
  public get logList() {
    return this._logList;
  }
  public putLogList(value: DataThunderLoggingLocalLogAuthenticationTopNOperOperLogListStruct[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_authentication_top_n_oper thunder_logging_local_log_authentication_top_n_oper}
*/
export class DataThunderLoggingLocalLogAuthenticationTopNOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_logging_local_log_authentication_top_n_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderLoggingLocalLogAuthenticationTopNOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderLoggingLocalLogAuthenticationTopNOper to import
  * @param importFromId The id of the existing DataThunderLoggingLocalLogAuthenticationTopNOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_authentication_top_n_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderLoggingLocalLogAuthenticationTopNOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_logging_local_log_authentication_top_n_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/logging_local_log_authentication_top_n_oper thunder_logging_local_log_authentication_top_n_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderLoggingLocalLogAuthenticationTopNOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderLoggingLocalLogAuthenticationTopNOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_logging_local_log_authentication_top_n_oper',
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
  private _oper = new DataThunderLoggingLocalLogAuthenticationTopNOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderLoggingLocalLogAuthenticationTopNOperOper) {
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
      oper: dataThunderLoggingLocalLogAuthenticationTopNOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderLoggingLocalLogAuthenticationTopNOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderLoggingLocalLogAuthenticationTopNOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
