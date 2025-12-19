// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_cpuavg_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderRrdCpuavgOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_cpuavg_oper#id DataThunderRrdCpuavgOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_cpuavg_oper#oper DataThunderRrdCpuavgOper#oper}
  */
  readonly oper?: DataThunderRrdCpuavgOperOper;
}
export interface DataThunderRrdCpuavgOperOperCpuUsage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_cpuavg_oper#cpu_num DataThunderRrdCpuavgOper#cpu_num}
  */
  readonly cpuNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_cpuavg_oper#cpu_type DataThunderRrdCpuavgOper#cpu_type}
  */
  readonly cpuType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_cpuavg_oper#cpu_usage DataThunderRrdCpuavgOper#cpu_usage}
  */
  readonly cpuUsage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_cpuavg_oper#time DataThunderRrdCpuavgOper#time}
  */
  readonly time?: number;
}

export function dataThunderRrdCpuavgOperOperCpuUsageToTerraform(struct?: DataThunderRrdCpuavgOperOperCpuUsage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_num: cdktf.numberToTerraform(struct!.cpuNum),
    cpu_type: cdktf.numberToTerraform(struct!.cpuType),
    cpu_usage: cdktf.stringToTerraform(struct!.cpuUsage),
    time: cdktf.numberToTerraform(struct!.time),
  }
}


export function dataThunderRrdCpuavgOperOperCpuUsageToHclTerraform(struct?: DataThunderRrdCpuavgOperOperCpuUsage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_num: {
      value: cdktf.numberToHclTerraform(struct!.cpuNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_type: {
      value: cdktf.numberToHclTerraform(struct!.cpuType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_usage: {
      value: cdktf.stringToHclTerraform(struct!.cpuUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataThunderRrdCpuavgOperOperCpuUsageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderRrdCpuavgOperOperCpuUsage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuNum = this._cpuNum;
    }
    if (this._cpuType !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuType = this._cpuType;
    }
    if (this._cpuUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuUsage = this._cpuUsage;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRrdCpuavgOperOperCpuUsage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuNum = undefined;
      this._cpuType = undefined;
      this._cpuUsage = undefined;
      this._time = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuNum = value.cpuNum;
      this._cpuType = value.cpuType;
      this._cpuUsage = value.cpuUsage;
      this._time = value.time;
    }
  }

  // cpu_num - computed: false, optional: true, required: false
  private _cpuNum?: number; 
  public get cpuNum() {
    return this.getNumberAttribute('cpu_num');
  }
  public set cpuNum(value: number) {
    this._cpuNum = value;
  }
  public resetCpuNum() {
    this._cpuNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuNumInput() {
    return this._cpuNum;
  }

  // cpu_type - computed: false, optional: true, required: false
  private _cpuType?: number; 
  public get cpuType() {
    return this.getNumberAttribute('cpu_type');
  }
  public set cpuType(value: number) {
    this._cpuType = value;
  }
  public resetCpuType() {
    this._cpuType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuTypeInput() {
    return this._cpuType;
  }

  // cpu_usage - computed: false, optional: true, required: false
  private _cpuUsage?: string; 
  public get cpuUsage() {
    return this.getStringAttribute('cpu_usage');
  }
  public set cpuUsage(value: string) {
    this._cpuUsage = value;
  }
  public resetCpuUsage() {
    this._cpuUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuUsageInput() {
    return this._cpuUsage;
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

export class DataThunderRrdCpuavgOperOperCpuUsageList extends cdktf.ComplexList {
  public internalValue? : DataThunderRrdCpuavgOperOperCpuUsage[] | cdktf.IResolvable

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
  public get(index: number): DataThunderRrdCpuavgOperOperCpuUsageOutputReference {
    return new DataThunderRrdCpuavgOperOperCpuUsageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderRrdCpuavgOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_cpuavg_oper#end_time DataThunderRrdCpuavgOper#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_cpuavg_oper#start_time DataThunderRrdCpuavgOper#start_time}
  */
  readonly startTime?: number;
  /**
  * cpu_usage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_cpuavg_oper#cpu_usage DataThunderRrdCpuavgOper#cpu_usage}
  */
  readonly cpuUsage?: DataThunderRrdCpuavgOperOperCpuUsage[] | cdktf.IResolvable;
}

export function dataThunderRrdCpuavgOperOperToTerraform(struct?: DataThunderRrdCpuavgOperOperOutputReference | DataThunderRrdCpuavgOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.numberToTerraform(struct!.endTime),
    start_time: cdktf.numberToTerraform(struct!.startTime),
    cpu_usage: cdktf.listMapper(dataThunderRrdCpuavgOperOperCpuUsageToTerraform, true)(struct!.cpuUsage),
  }
}


export function dataThunderRrdCpuavgOperOperToHclTerraform(struct?: DataThunderRrdCpuavgOperOperOutputReference | DataThunderRrdCpuavgOperOper): any {
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
    start_time: {
      value: cdktf.numberToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_usage: {
      value: cdktf.listMapperHcl(dataThunderRrdCpuavgOperOperCpuUsageToHclTerraform, true)(struct!.cpuUsage),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderRrdCpuavgOperOperCpuUsageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRrdCpuavgOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderRrdCpuavgOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._cpuUsage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuUsage = this._cpuUsage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRrdCpuavgOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endTime = undefined;
      this._startTime = undefined;
      this._cpuUsage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
      this._cpuUsage.internalValue = value.cpuUsage;
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

  // cpu_usage - computed: false, optional: true, required: false
  private _cpuUsage = new DataThunderRrdCpuavgOperOperCpuUsageList(this, "cpu_usage", false);
  public get cpuUsage() {
    return this._cpuUsage;
  }
  public putCpuUsage(value: DataThunderRrdCpuavgOperOperCpuUsage[] | cdktf.IResolvable) {
    this._cpuUsage.internalValue = value;
  }
  public resetCpuUsage() {
    this._cpuUsage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuUsageInput() {
    return this._cpuUsage.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_cpuavg_oper thunder_rrd_cpuavg_oper}
*/
export class DataThunderRrdCpuavgOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_rrd_cpuavg_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderRrdCpuavgOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderRrdCpuavgOper to import
  * @param importFromId The id of the existing DataThunderRrdCpuavgOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_cpuavg_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderRrdCpuavgOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_rrd_cpuavg_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_cpuavg_oper thunder_rrd_cpuavg_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderRrdCpuavgOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderRrdCpuavgOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_rrd_cpuavg_oper',
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
  private _oper = new DataThunderRrdCpuavgOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderRrdCpuavgOperOper) {
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
      oper: dataThunderRrdCpuavgOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderRrdCpuavgOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderRrdCpuavgOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
