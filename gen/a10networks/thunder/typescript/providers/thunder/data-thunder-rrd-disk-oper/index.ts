// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rrd_disk_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderRrdDiskOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rrd_disk_oper#id DataThunderRrdDiskOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rrd_disk_oper#oper DataThunderRrdDiskOper#oper}
  */
  readonly oper?: DataThunderRrdDiskOperOper;
}
export interface DataThunderRrdDiskOperOperDiskUsage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rrd_disk_oper#disk_usage DataThunderRrdDiskOper#disk_usage}
  */
  readonly diskUsage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rrd_disk_oper#time DataThunderRrdDiskOper#time}
  */
  readonly time?: number;
}

export function dataThunderRrdDiskOperOperDiskUsageToTerraform(struct?: DataThunderRrdDiskOperOperDiskUsage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_usage: cdktf.stringToTerraform(struct!.diskUsage),
    time: cdktf.numberToTerraform(struct!.time),
  }
}


export function dataThunderRrdDiskOperOperDiskUsageToHclTerraform(struct?: DataThunderRrdDiskOperOperDiskUsage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_usage: {
      value: cdktf.stringToHclTerraform(struct!.diskUsage),
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

export class DataThunderRrdDiskOperOperDiskUsageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderRrdDiskOperOperDiskUsage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskUsage = this._diskUsage;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRrdDiskOperOperDiskUsage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskUsage = undefined;
      this._time = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskUsage = value.diskUsage;
      this._time = value.time;
    }
  }

  // disk_usage - computed: false, optional: true, required: false
  private _diskUsage?: string; 
  public get diskUsage() {
    return this.getStringAttribute('disk_usage');
  }
  public set diskUsage(value: string) {
    this._diskUsage = value;
  }
  public resetDiskUsage() {
    this._diskUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskUsageInput() {
    return this._diskUsage;
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

export class DataThunderRrdDiskOperOperDiskUsageList extends cdktf.ComplexList {
  public internalValue? : DataThunderRrdDiskOperOperDiskUsage[] | cdktf.IResolvable

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
  public get(index: number): DataThunderRrdDiskOperOperDiskUsageOutputReference {
    return new DataThunderRrdDiskOperOperDiskUsageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderRrdDiskOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rrd_disk_oper#alldynamic DataThunderRrdDiskOper#alldynamic}
  */
  readonly alldynamic?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rrd_disk_oper#end_time DataThunderRrdDiskOper#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rrd_disk_oper#start_time DataThunderRrdDiskOper#start_time}
  */
  readonly startTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rrd_disk_oper#total_disk DataThunderRrdDiskOper#total_disk}
  */
  readonly totalDisk?: string;
  /**
  * disk_usage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rrd_disk_oper#disk_usage DataThunderRrdDiskOper#disk_usage}
  */
  readonly diskUsage?: DataThunderRrdDiskOperOperDiskUsage[] | cdktf.IResolvable;
}

export function dataThunderRrdDiskOperOperToTerraform(struct?: DataThunderRrdDiskOperOperOutputReference | DataThunderRrdDiskOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alldynamic: cdktf.numberToTerraform(struct!.alldynamic),
    end_time: cdktf.numberToTerraform(struct!.endTime),
    start_time: cdktf.numberToTerraform(struct!.startTime),
    total_disk: cdktf.stringToTerraform(struct!.totalDisk),
    disk_usage: cdktf.listMapper(dataThunderRrdDiskOperOperDiskUsageToTerraform, true)(struct!.diskUsage),
  }
}


export function dataThunderRrdDiskOperOperToHclTerraform(struct?: DataThunderRrdDiskOperOperOutputReference | DataThunderRrdDiskOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alldynamic: {
      value: cdktf.numberToHclTerraform(struct!.alldynamic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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
    total_disk: {
      value: cdktf.stringToHclTerraform(struct!.totalDisk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_usage: {
      value: cdktf.listMapperHcl(dataThunderRrdDiskOperOperDiskUsageToHclTerraform, true)(struct!.diskUsage),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderRrdDiskOperOperDiskUsageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRrdDiskOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderRrdDiskOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alldynamic !== undefined) {
      hasAnyValues = true;
      internalValueResult.alldynamic = this._alldynamic;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._totalDisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalDisk = this._totalDisk;
    }
    if (this._diskUsage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskUsage = this._diskUsage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRrdDiskOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alldynamic = undefined;
      this._endTime = undefined;
      this._startTime = undefined;
      this._totalDisk = undefined;
      this._diskUsage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alldynamic = value.alldynamic;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
      this._totalDisk = value.totalDisk;
      this._diskUsage.internalValue = value.diskUsage;
    }
  }

  // alldynamic - computed: false, optional: true, required: false
  private _alldynamic?: number; 
  public get alldynamic() {
    return this.getNumberAttribute('alldynamic');
  }
  public set alldynamic(value: number) {
    this._alldynamic = value;
  }
  public resetAlldynamic() {
    this._alldynamic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alldynamicInput() {
    return this._alldynamic;
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

  // total_disk - computed: false, optional: true, required: false
  private _totalDisk?: string; 
  public get totalDisk() {
    return this.getStringAttribute('total_disk');
  }
  public set totalDisk(value: string) {
    this._totalDisk = value;
  }
  public resetTotalDisk() {
    this._totalDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalDiskInput() {
    return this._totalDisk;
  }

  // disk_usage - computed: false, optional: true, required: false
  private _diskUsage = new DataThunderRrdDiskOperOperDiskUsageList(this, "disk_usage", false);
  public get diskUsage() {
    return this._diskUsage;
  }
  public putDiskUsage(value: DataThunderRrdDiskOperOperDiskUsage[] | cdktf.IResolvable) {
    this._diskUsage.internalValue = value;
  }
  public resetDiskUsage() {
    this._diskUsage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskUsageInput() {
    return this._diskUsage.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rrd_disk_oper thunder_rrd_disk_oper}
*/
export class DataThunderRrdDiskOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_rrd_disk_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderRrdDiskOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderRrdDiskOper to import
  * @param importFromId The id of the existing DataThunderRrdDiskOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rrd_disk_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderRrdDiskOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_rrd_disk_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rrd_disk_oper thunder_rrd_disk_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderRrdDiskOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderRrdDiskOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_rrd_disk_oper',
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
  private _oper = new DataThunderRrdDiskOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderRrdDiskOperOper) {
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
      oper: dataThunderRrdDiskOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderRrdDiskOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderRrdDiskOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
