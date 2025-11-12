// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_monitor_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbHealthMonitorOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_monitor_oper#id DataThunderSlbHealthMonitorOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_monitor_oper#oper DataThunderSlbHealthMonitorOper#oper}
  */
  readonly oper?: DataThunderSlbHealthMonitorOperOper;
}
export interface DataThunderSlbHealthMonitorOperOperHealthMonitorListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_monitor_oper#all_partitions DataThunderSlbHealthMonitorOper#all_partitions}
  */
  readonly allPartitions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_monitor_oper#interval DataThunderSlbHealthMonitorOper#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_monitor_oper#method DataThunderSlbHealthMonitorOper#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_monitor_oper#name DataThunderSlbHealthMonitorOper#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_monitor_oper#partition DataThunderSlbHealthMonitorOper#partition}
  */
  readonly partition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_monitor_oper#pin_id DataThunderSlbHealthMonitorOper#pin_id}
  */
  readonly pinId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_monitor_oper#pin_process_index DataThunderSlbHealthMonitorOper#pin_process_index}
  */
  readonly pinProcessIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_monitor_oper#retries DataThunderSlbHealthMonitorOper#retries}
  */
  readonly retries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_monitor_oper#ssl_refresh DataThunderSlbHealthMonitorOper#ssl_refresh}
  */
  readonly sslRefresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_monitor_oper#status DataThunderSlbHealthMonitorOper#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_monitor_oper#timeout DataThunderSlbHealthMonitorOper#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_monitor_oper#up_retries DataThunderSlbHealthMonitorOper#up_retries}
  */
  readonly upRetries?: number;
}

export function dataThunderSlbHealthMonitorOperOperHealthMonitorListStructToTerraform(struct?: DataThunderSlbHealthMonitorOperOperHealthMonitorListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_partitions: cdktf.numberToTerraform(struct!.allPartitions),
    interval: cdktf.numberToTerraform(struct!.interval),
    method: cdktf.stringToTerraform(struct!.method),
    name: cdktf.stringToTerraform(struct!.name),
    partition: cdktf.stringToTerraform(struct!.partition),
    pin_id: cdktf.numberToTerraform(struct!.pinId),
    pin_process_index: cdktf.numberToTerraform(struct!.pinProcessIndex),
    retries: cdktf.numberToTerraform(struct!.retries),
    ssl_refresh: cdktf.numberToTerraform(struct!.sslRefresh),
    status: cdktf.stringToTerraform(struct!.status),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    up_retries: cdktf.numberToTerraform(struct!.upRetries),
  }
}


export function dataThunderSlbHealthMonitorOperOperHealthMonitorListStructToHclTerraform(struct?: DataThunderSlbHealthMonitorOperOperHealthMonitorListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_partitions: {
      value: cdktf.numberToHclTerraform(struct!.allPartitions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition: {
      value: cdktf.stringToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pin_id: {
      value: cdktf.numberToHclTerraform(struct!.pinId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pin_process_index: {
      value: cdktf.numberToHclTerraform(struct!.pinProcessIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retries: {
      value: cdktf.numberToHclTerraform(struct!.retries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_refresh: {
      value: cdktf.numberToHclTerraform(struct!.sslRefresh),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    up_retries: {
      value: cdktf.numberToHclTerraform(struct!.upRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbHealthMonitorOperOperHealthMonitorListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbHealthMonitorOperOperHealthMonitorListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allPartitions !== undefined) {
      hasAnyValues = true;
      internalValueResult.allPartitions = this._allPartitions;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._pinId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pinId = this._pinId;
    }
    if (this._pinProcessIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.pinProcessIndex = this._pinProcessIndex;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    if (this._sslRefresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslRefresh = this._sslRefresh;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._upRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.upRetries = this._upRetries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbHealthMonitorOperOperHealthMonitorListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allPartitions = undefined;
      this._interval = undefined;
      this._method = undefined;
      this._name = undefined;
      this._partition = undefined;
      this._pinId = undefined;
      this._pinProcessIndex = undefined;
      this._retries = undefined;
      this._sslRefresh = undefined;
      this._status = undefined;
      this._timeout = undefined;
      this._upRetries = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allPartitions = value.allPartitions;
      this._interval = value.interval;
      this._method = value.method;
      this._name = value.name;
      this._partition = value.partition;
      this._pinId = value.pinId;
      this._pinProcessIndex = value.pinProcessIndex;
      this._retries = value.retries;
      this._sslRefresh = value.sslRefresh;
      this._status = value.status;
      this._timeout = value.timeout;
      this._upRetries = value.upRetries;
    }
  }

  // all_partitions - computed: false, optional: true, required: false
  private _allPartitions?: number; 
  public get allPartitions() {
    return this.getNumberAttribute('all_partitions');
  }
  public set allPartitions(value: number) {
    this._allPartitions = value;
  }
  public resetAllPartitions() {
    this._allPartitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allPartitionsInput() {
    return this._allPartitions;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // pin_id - computed: false, optional: true, required: false
  private _pinId?: number; 
  public get pinId() {
    return this.getNumberAttribute('pin_id');
  }
  public set pinId(value: number) {
    this._pinId = value;
  }
  public resetPinId() {
    this._pinId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pinIdInput() {
    return this._pinId;
  }

  // pin_process_index - computed: false, optional: true, required: false
  private _pinProcessIndex?: number; 
  public get pinProcessIndex() {
    return this.getNumberAttribute('pin_process_index');
  }
  public set pinProcessIndex(value: number) {
    this._pinProcessIndex = value;
  }
  public resetPinProcessIndex() {
    this._pinProcessIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pinProcessIndexInput() {
    return this._pinProcessIndex;
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // ssl_refresh - computed: false, optional: true, required: false
  private _sslRefresh?: number; 
  public get sslRefresh() {
    return this.getNumberAttribute('ssl_refresh');
  }
  public set sslRefresh(value: number) {
    this._sslRefresh = value;
  }
  public resetSslRefresh() {
    this._sslRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslRefreshInput() {
    return this._sslRefresh;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // up_retries - computed: false, optional: true, required: false
  private _upRetries?: number; 
  public get upRetries() {
    return this.getNumberAttribute('up_retries');
  }
  public set upRetries(value: number) {
    this._upRetries = value;
  }
  public resetUpRetries() {
    this._upRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upRetriesInput() {
    return this._upRetries;
  }
}

export class DataThunderSlbHealthMonitorOperOperHealthMonitorListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbHealthMonitorOperOperHealthMonitorListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbHealthMonitorOperOperHealthMonitorListStructOutputReference {
    return new DataThunderSlbHealthMonitorOperOperHealthMonitorListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbHealthMonitorOperOper {
  /**
  * health_monitor_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_monitor_oper#health_monitor_list DataThunderSlbHealthMonitorOper#health_monitor_list}
  */
  readonly healthMonitorList?: DataThunderSlbHealthMonitorOperOperHealthMonitorListStruct[] | cdktf.IResolvable;
}

export function dataThunderSlbHealthMonitorOperOperToTerraform(struct?: DataThunderSlbHealthMonitorOperOperOutputReference | DataThunderSlbHealthMonitorOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_monitor_list: cdktf.listMapper(dataThunderSlbHealthMonitorOperOperHealthMonitorListStructToTerraform, true)(struct!.healthMonitorList),
  }
}


export function dataThunderSlbHealthMonitorOperOperToHclTerraform(struct?: DataThunderSlbHealthMonitorOperOperOutputReference | DataThunderSlbHealthMonitorOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health_monitor_list: {
      value: cdktf.listMapperHcl(dataThunderSlbHealthMonitorOperOperHealthMonitorListStructToHclTerraform, true)(struct!.healthMonitorList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbHealthMonitorOperOperHealthMonitorListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbHealthMonitorOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbHealthMonitorOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthMonitorList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthMonitorList = this._healthMonitorList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbHealthMonitorOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._healthMonitorList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._healthMonitorList.internalValue = value.healthMonitorList;
    }
  }

  // health_monitor_list - computed: false, optional: true, required: false
  private _healthMonitorList = new DataThunderSlbHealthMonitorOperOperHealthMonitorListStructList(this, "health_monitor_list", false);
  public get healthMonitorList() {
    return this._healthMonitorList;
  }
  public putHealthMonitorList(value: DataThunderSlbHealthMonitorOperOperHealthMonitorListStruct[] | cdktf.IResolvable) {
    this._healthMonitorList.internalValue = value;
  }
  public resetHealthMonitorList() {
    this._healthMonitorList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthMonitorListInput() {
    return this._healthMonitorList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_monitor_oper thunder_slb_health_monitor_oper}
*/
export class DataThunderSlbHealthMonitorOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_health_monitor_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbHealthMonitorOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbHealthMonitorOper to import
  * @param importFromId The id of the existing DataThunderSlbHealthMonitorOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_monitor_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbHealthMonitorOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_health_monitor_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_monitor_oper thunder_slb_health_monitor_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbHealthMonitorOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbHealthMonitorOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_health_monitor_oper',
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
  private _oper = new DataThunderSlbHealthMonitorOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbHealthMonitorOperOper) {
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
      oper: dataThunderSlbHealthMonitorOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSlbHealthMonitorOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbHealthMonitorOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
