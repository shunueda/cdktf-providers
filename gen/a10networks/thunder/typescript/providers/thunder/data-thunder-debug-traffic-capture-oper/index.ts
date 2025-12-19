// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/debug_traffic_capture_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDebugTrafficCaptureOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/debug_traffic_capture_oper#id DataThunderDebugTrafficCaptureOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/debug_traffic_capture_oper#oper DataThunderDebugTrafficCaptureOper#oper}
  */
  readonly oper?: DataThunderDebugTrafficCaptureOperOper;
}
export interface DataThunderDebugTrafficCaptureOperOperStatusInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/debug_traffic_capture_oper#disk_size DataThunderDebugTrafficCaptureOper#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/debug_traffic_capture_oper#end_reason DataThunderDebugTrafficCaptureOper#end_reason}
  */
  readonly endReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/debug_traffic_capture_oper#end_time DataThunderDebugTrafficCaptureOper#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/debug_traffic_capture_oper#name DataThunderDebugTrafficCaptureOper#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/debug_traffic_capture_oper#pkt_count DataThunderDebugTrafficCaptureOper#pkt_count}
  */
  readonly pktCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/debug_traffic_capture_oper#pkt_dropped DataThunderDebugTrafficCaptureOper#pkt_dropped}
  */
  readonly pktDropped?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/debug_traffic_capture_oper#status DataThunderDebugTrafficCaptureOper#status}
  */
  readonly status?: string;
}

export function dataThunderDebugTrafficCaptureOperOperStatusInfoToTerraform(struct?: DataThunderDebugTrafficCaptureOperOperStatusInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    end_reason: cdktf.stringToTerraform(struct!.endReason),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    name: cdktf.stringToTerraform(struct!.name),
    pkt_count: cdktf.numberToTerraform(struct!.pktCount),
    pkt_dropped: cdktf.numberToTerraform(struct!.pktDropped),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataThunderDebugTrafficCaptureOperOperStatusInfoToHclTerraform(struct?: DataThunderDebugTrafficCaptureOperOperStatusInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_reason: {
      value: cdktf.stringToHclTerraform(struct!.endReason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
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
    pkt_count: {
      value: cdktf.numberToHclTerraform(struct!.pktCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkt_dropped: {
      value: cdktf.numberToHclTerraform(struct!.pktDropped),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDebugTrafficCaptureOperOperStatusInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDebugTrafficCaptureOperOperStatusInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._endReason !== undefined) {
      hasAnyValues = true;
      internalValueResult.endReason = this._endReason;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pktCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktCount = this._pktCount;
    }
    if (this._pktDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktDropped = this._pktDropped;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDebugTrafficCaptureOperOperStatusInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskSize = undefined;
      this._endReason = undefined;
      this._endTime = undefined;
      this._name = undefined;
      this._pktCount = undefined;
      this._pktDropped = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskSize = value.diskSize;
      this._endReason = value.endReason;
      this._endTime = value.endTime;
      this._name = value.name;
      this._pktCount = value.pktCount;
      this._pktDropped = value.pktDropped;
      this._status = value.status;
    }
  }

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // end_reason - computed: false, optional: true, required: false
  private _endReason?: string; 
  public get endReason() {
    return this.getStringAttribute('end_reason');
  }
  public set endReason(value: string) {
    this._endReason = value;
  }
  public resetEndReason() {
    this._endReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endReasonInput() {
    return this._endReason;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
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

  // pkt_count - computed: false, optional: true, required: false
  private _pktCount?: number; 
  public get pktCount() {
    return this.getNumberAttribute('pkt_count');
  }
  public set pktCount(value: number) {
    this._pktCount = value;
  }
  public resetPktCount() {
    this._pktCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktCountInput() {
    return this._pktCount;
  }

  // pkt_dropped - computed: false, optional: true, required: false
  private _pktDropped?: number; 
  public get pktDropped() {
    return this.getNumberAttribute('pkt_dropped');
  }
  public set pktDropped(value: number) {
    this._pktDropped = value;
  }
  public resetPktDropped() {
    this._pktDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktDroppedInput() {
    return this._pktDropped;
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
}

export class DataThunderDebugTrafficCaptureOperOperStatusInfoList extends cdktf.ComplexList {
  public internalValue? : DataThunderDebugTrafficCaptureOperOperStatusInfo[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDebugTrafficCaptureOperOperStatusInfoOutputReference {
    return new DataThunderDebugTrafficCaptureOperOperStatusInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDebugTrafficCaptureOperOper {
  /**
  * status_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/debug_traffic_capture_oper#status_info DataThunderDebugTrafficCaptureOper#status_info}
  */
  readonly statusInfo?: DataThunderDebugTrafficCaptureOperOperStatusInfo[] | cdktf.IResolvable;
}

export function dataThunderDebugTrafficCaptureOperOperToTerraform(struct?: DataThunderDebugTrafficCaptureOperOperOutputReference | DataThunderDebugTrafficCaptureOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status_info: cdktf.listMapper(dataThunderDebugTrafficCaptureOperOperStatusInfoToTerraform, true)(struct!.statusInfo),
  }
}


export function dataThunderDebugTrafficCaptureOperOperToHclTerraform(struct?: DataThunderDebugTrafficCaptureOperOperOutputReference | DataThunderDebugTrafficCaptureOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status_info: {
      value: cdktf.listMapperHcl(dataThunderDebugTrafficCaptureOperOperStatusInfoToHclTerraform, true)(struct!.statusInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDebugTrafficCaptureOperOperStatusInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDebugTrafficCaptureOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDebugTrafficCaptureOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statusInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusInfo = this._statusInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDebugTrafficCaptureOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._statusInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._statusInfo.internalValue = value.statusInfo;
    }
  }

  // status_info - computed: false, optional: true, required: false
  private _statusInfo = new DataThunderDebugTrafficCaptureOperOperStatusInfoList(this, "status_info", false);
  public get statusInfo() {
    return this._statusInfo;
  }
  public putStatusInfo(value: DataThunderDebugTrafficCaptureOperOperStatusInfo[] | cdktf.IResolvable) {
    this._statusInfo.internalValue = value;
  }
  public resetStatusInfo() {
    this._statusInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInfoInput() {
    return this._statusInfo.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/debug_traffic_capture_oper thunder_debug_traffic_capture_oper}
*/
export class DataThunderDebugTrafficCaptureOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_debug_traffic_capture_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDebugTrafficCaptureOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDebugTrafficCaptureOper to import
  * @param importFromId The id of the existing DataThunderDebugTrafficCaptureOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/debug_traffic_capture_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDebugTrafficCaptureOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_debug_traffic_capture_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/debug_traffic_capture_oper thunder_debug_traffic_capture_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDebugTrafficCaptureOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDebugTrafficCaptureOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_debug_traffic_capture_oper',
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
  private _oper = new DataThunderDebugTrafficCaptureOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDebugTrafficCaptureOperOper) {
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
      oper: dataThunderDebugTrafficCaptureOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderDebugTrafficCaptureOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDebugTrafficCaptureOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
