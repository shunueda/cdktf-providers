// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_slb_virtual_server_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderRrdSlbVirtualServerOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_slb_virtual_server_oper#id DataThunderRrdSlbVirtualServerOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_slb_virtual_server_oper#oper DataThunderRrdSlbVirtualServerOper#oper}
  */
  readonly oper?: DataThunderRrdSlbVirtualServerOperOper;
}
export interface DataThunderRrdSlbVirtualServerOperOperSlbServerStatistics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_slb_virtual_server_oper#cur_conn DataThunderRrdSlbVirtualServerOper#cur_conn}
  */
  readonly curConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_slb_virtual_server_oper#in_bytes DataThunderRrdSlbVirtualServerOper#in_bytes}
  */
  readonly inBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_slb_virtual_server_oper#in_pkts DataThunderRrdSlbVirtualServerOper#in_pkts}
  */
  readonly inPkts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_slb_virtual_server_oper#out_bytes DataThunderRrdSlbVirtualServerOper#out_bytes}
  */
  readonly outBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_slb_virtual_server_oper#out_pkts DataThunderRrdSlbVirtualServerOper#out_pkts}
  */
  readonly outPkts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_slb_virtual_server_oper#p_conn DataThunderRrdSlbVirtualServerOper#p_conn}
  */
  readonly pConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_slb_virtual_server_oper#time DataThunderRrdSlbVirtualServerOper#time}
  */
  readonly time?: number;
}

export function dataThunderRrdSlbVirtualServerOperOperSlbServerStatisticsToTerraform(struct?: DataThunderRrdSlbVirtualServerOperOperSlbServerStatistics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cur_conn: cdktf.numberToTerraform(struct!.curConn),
    in_bytes: cdktf.numberToTerraform(struct!.inBytes),
    in_pkts: cdktf.numberToTerraform(struct!.inPkts),
    out_bytes: cdktf.numberToTerraform(struct!.outBytes),
    out_pkts: cdktf.numberToTerraform(struct!.outPkts),
    p_conn: cdktf.numberToTerraform(struct!.pConn),
    time: cdktf.numberToTerraform(struct!.time),
  }
}


export function dataThunderRrdSlbVirtualServerOperOperSlbServerStatisticsToHclTerraform(struct?: DataThunderRrdSlbVirtualServerOperOperSlbServerStatistics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cur_conn: {
      value: cdktf.numberToHclTerraform(struct!.curConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    in_bytes: {
      value: cdktf.numberToHclTerraform(struct!.inBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    in_pkts: {
      value: cdktf.numberToHclTerraform(struct!.inPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_bytes: {
      value: cdktf.numberToHclTerraform(struct!.outBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_pkts: {
      value: cdktf.numberToHclTerraform(struct!.outPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    p_conn: {
      value: cdktf.numberToHclTerraform(struct!.pConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time: {
      value: cdktf.numberToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRrdSlbVirtualServerOperOperSlbServerStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderRrdSlbVirtualServerOperOperSlbServerStatistics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._curConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.curConn = this._curConn;
    }
    if (this._inBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.inBytes = this._inBytes;
    }
    if (this._inPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.inPkts = this._inPkts;
    }
    if (this._outBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.outBytes = this._outBytes;
    }
    if (this._outPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.outPkts = this._outPkts;
    }
    if (this._pConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.pConn = this._pConn;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRrdSlbVirtualServerOperOperSlbServerStatistics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._curConn = undefined;
      this._inBytes = undefined;
      this._inPkts = undefined;
      this._outBytes = undefined;
      this._outPkts = undefined;
      this._pConn = undefined;
      this._time = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._curConn = value.curConn;
      this._inBytes = value.inBytes;
      this._inPkts = value.inPkts;
      this._outBytes = value.outBytes;
      this._outPkts = value.outPkts;
      this._pConn = value.pConn;
      this._time = value.time;
    }
  }

  // cur_conn - computed: false, optional: true, required: false
  private _curConn?: number; 
  public get curConn() {
    return this.getNumberAttribute('cur_conn');
  }
  public set curConn(value: number) {
    this._curConn = value;
  }
  public resetCurConn() {
    this._curConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get curConnInput() {
    return this._curConn;
  }

  // in_bytes - computed: false, optional: true, required: false
  private _inBytes?: number; 
  public get inBytes() {
    return this.getNumberAttribute('in_bytes');
  }
  public set inBytes(value: number) {
    this._inBytes = value;
  }
  public resetInBytes() {
    this._inBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inBytesInput() {
    return this._inBytes;
  }

  // in_pkts - computed: false, optional: true, required: false
  private _inPkts?: number; 
  public get inPkts() {
    return this.getNumberAttribute('in_pkts');
  }
  public set inPkts(value: number) {
    this._inPkts = value;
  }
  public resetInPkts() {
    this._inPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inPktsInput() {
    return this._inPkts;
  }

  // out_bytes - computed: false, optional: true, required: false
  private _outBytes?: number; 
  public get outBytes() {
    return this.getNumberAttribute('out_bytes');
  }
  public set outBytes(value: number) {
    this._outBytes = value;
  }
  public resetOutBytes() {
    this._outBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outBytesInput() {
    return this._outBytes;
  }

  // out_pkts - computed: false, optional: true, required: false
  private _outPkts?: number; 
  public get outPkts() {
    return this.getNumberAttribute('out_pkts');
  }
  public set outPkts(value: number) {
    this._outPkts = value;
  }
  public resetOutPkts() {
    this._outPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outPktsInput() {
    return this._outPkts;
  }

  // p_conn - computed: false, optional: true, required: false
  private _pConn?: number; 
  public get pConn() {
    return this.getNumberAttribute('p_conn');
  }
  public set pConn(value: number) {
    this._pConn = value;
  }
  public resetPConn() {
    this._pConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pConnInput() {
    return this._pConn;
  }

  // time - computed: false, optional: true, required: false
  private _time?: number; 
  public get time() {
    return this.getNumberAttribute('time');
  }
  public set time(value: number) {
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

export class DataThunderRrdSlbVirtualServerOperOperSlbServerStatisticsList extends cdktf.ComplexList {
  public internalValue? : DataThunderRrdSlbVirtualServerOperOperSlbServerStatistics[] | cdktf.IResolvable

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
  public get(index: number): DataThunderRrdSlbVirtualServerOperOperSlbServerStatisticsOutputReference {
    return new DataThunderRrdSlbVirtualServerOperOperSlbServerStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderRrdSlbVirtualServerOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_slb_virtual_server_oper#end_time DataThunderRrdSlbVirtualServerOper#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_slb_virtual_server_oper#slb_virtual_server_name DataThunderRrdSlbVirtualServerOper#slb_virtual_server_name}
  */
  readonly slbVirtualServerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_slb_virtual_server_oper#start_time DataThunderRrdSlbVirtualServerOper#start_time}
  */
  readonly startTime?: number;
  /**
  * slb_server_statistics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_slb_virtual_server_oper#slb_server_statistics DataThunderRrdSlbVirtualServerOper#slb_server_statistics}
  */
  readonly slbServerStatistics?: DataThunderRrdSlbVirtualServerOperOperSlbServerStatistics[] | cdktf.IResolvable;
}

export function dataThunderRrdSlbVirtualServerOperOperToTerraform(struct?: DataThunderRrdSlbVirtualServerOperOperOutputReference | DataThunderRrdSlbVirtualServerOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.numberToTerraform(struct!.endTime),
    slb_virtual_server_name: cdktf.stringToTerraform(struct!.slbVirtualServerName),
    start_time: cdktf.numberToTerraform(struct!.startTime),
    slb_server_statistics: cdktf.listMapper(dataThunderRrdSlbVirtualServerOperOperSlbServerStatisticsToTerraform, true)(struct!.slbServerStatistics),
  }
}


export function dataThunderRrdSlbVirtualServerOperOperToHclTerraform(struct?: DataThunderRrdSlbVirtualServerOperOperOutputReference | DataThunderRrdSlbVirtualServerOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time: {
      value: cdktf.numberToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_virtual_server_name: {
      value: cdktf.stringToHclTerraform(struct!.slbVirtualServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.numberToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_server_statistics: {
      value: cdktf.listMapperHcl(dataThunderRrdSlbVirtualServerOperOperSlbServerStatisticsToHclTerraform, true)(struct!.slbServerStatistics),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderRrdSlbVirtualServerOperOperSlbServerStatisticsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRrdSlbVirtualServerOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderRrdSlbVirtualServerOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._slbVirtualServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbVirtualServerName = this._slbVirtualServerName;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._slbServerStatistics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbServerStatistics = this._slbServerStatistics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRrdSlbVirtualServerOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endTime = undefined;
      this._slbVirtualServerName = undefined;
      this._startTime = undefined;
      this._slbServerStatistics.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endTime = value.endTime;
      this._slbVirtualServerName = value.slbVirtualServerName;
      this._startTime = value.startTime;
      this._slbServerStatistics.internalValue = value.slbServerStatistics;
    }
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: number; 
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }
  public set endTime(value: number) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // slb_virtual_server_name - computed: false, optional: true, required: false
  private _slbVirtualServerName?: string; 
  public get slbVirtualServerName() {
    return this.getStringAttribute('slb_virtual_server_name');
  }
  public set slbVirtualServerName(value: string) {
    this._slbVirtualServerName = value;
  }
  public resetSlbVirtualServerName() {
    this._slbVirtualServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbVirtualServerNameInput() {
    return this._slbVirtualServerName;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // slb_server_statistics - computed: false, optional: true, required: false
  private _slbServerStatistics = new DataThunderRrdSlbVirtualServerOperOperSlbServerStatisticsList(this, "slb_server_statistics", false);
  public get slbServerStatistics() {
    return this._slbServerStatistics;
  }
  public putSlbServerStatistics(value: DataThunderRrdSlbVirtualServerOperOperSlbServerStatistics[] | cdktf.IResolvable) {
    this._slbServerStatistics.internalValue = value;
  }
  public resetSlbServerStatistics() {
    this._slbServerStatistics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbServerStatisticsInput() {
    return this._slbServerStatistics.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_slb_virtual_server_oper thunder_rrd_slb_virtual_server_oper}
*/
export class DataThunderRrdSlbVirtualServerOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_rrd_slb_virtual_server_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderRrdSlbVirtualServerOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderRrdSlbVirtualServerOper to import
  * @param importFromId The id of the existing DataThunderRrdSlbVirtualServerOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_slb_virtual_server_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderRrdSlbVirtualServerOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_rrd_slb_virtual_server_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_slb_virtual_server_oper thunder_rrd_slb_virtual_server_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderRrdSlbVirtualServerOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderRrdSlbVirtualServerOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_rrd_slb_virtual_server_oper',
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
  private _oper = new DataThunderRrdSlbVirtualServerOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderRrdSlbVirtualServerOperOper) {
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
      oper: dataThunderRrdSlbVirtualServerOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderRrdSlbVirtualServerOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderRrdSlbVirtualServerOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
