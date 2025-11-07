// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rrd_ethernet_all_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderRrdEthernetAllOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rrd_ethernet_all_oper#id DataThunderRrdEthernetAllOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rrd_ethernet_all_oper#oper DataThunderRrdEthernetAllOper#oper}
  */
  readonly oper?: DataThunderRrdEthernetAllOperOper;
}
export interface DataThunderRrdEthernetAllOperOperEthernetStatisticsStat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rrd_ethernet_all_oper#time DataThunderRrdEthernetAllOper#time}
  */
  readonly time?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rrd_ethernet_all_oper#tx_bits DataThunderRrdEthernetAllOper#tx_bits}
  */
  readonly txBits?: number;
}

export function dataThunderRrdEthernetAllOperOperEthernetStatisticsStatToTerraform(struct?: DataThunderRrdEthernetAllOperOperEthernetStatisticsStat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time: cdktf.numberToTerraform(struct!.time),
    tx_bits: cdktf.numberToTerraform(struct!.txBits),
  }
}


export function dataThunderRrdEthernetAllOperOperEthernetStatisticsStatToHclTerraform(struct?: DataThunderRrdEthernetAllOperOperEthernetStatisticsStat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time: {
      value: cdktf.numberToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tx_bits: {
      value: cdktf.numberToHclTerraform(struct!.txBits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRrdEthernetAllOperOperEthernetStatisticsStatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderRrdEthernetAllOperOperEthernetStatisticsStat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    if (this._txBits !== undefined) {
      hasAnyValues = true;
      internalValueResult.txBits = this._txBits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRrdEthernetAllOperOperEthernetStatisticsStat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._time = undefined;
      this._txBits = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._time = value.time;
      this._txBits = value.txBits;
    }
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

  // tx_bits - computed: false, optional: true, required: false
  private _txBits?: number; 
  public get txBits() {
    return this.getNumberAttribute('tx_bits');
  }
  public set txBits(value: number) {
    this._txBits = value;
  }
  public resetTxBits() {
    this._txBits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txBitsInput() {
    return this._txBits;
  }
}

export class DataThunderRrdEthernetAllOperOperEthernetStatisticsStatList extends cdktf.ComplexList {
  public internalValue? : DataThunderRrdEthernetAllOperOperEthernetStatisticsStat[] | cdktf.IResolvable

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
  public get(index: number): DataThunderRrdEthernetAllOperOperEthernetStatisticsStatOutputReference {
    return new DataThunderRrdEthernetAllOperOperEthernetStatisticsStatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderRrdEthernetAllOperOperEthernetStatistics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rrd_ethernet_all_oper#ethernet_index DataThunderRrdEthernetAllOper#ethernet_index}
  */
  readonly ethernetIndex?: number;
  /**
  * stat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rrd_ethernet_all_oper#stat DataThunderRrdEthernetAllOper#stat}
  */
  readonly stat?: DataThunderRrdEthernetAllOperOperEthernetStatisticsStat[] | cdktf.IResolvable;
}

export function dataThunderRrdEthernetAllOperOperEthernetStatisticsToTerraform(struct?: DataThunderRrdEthernetAllOperOperEthernetStatistics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet_index: cdktf.numberToTerraform(struct!.ethernetIndex),
    stat: cdktf.listMapper(dataThunderRrdEthernetAllOperOperEthernetStatisticsStatToTerraform, true)(struct!.stat),
  }
}


export function dataThunderRrdEthernetAllOperOperEthernetStatisticsToHclTerraform(struct?: DataThunderRrdEthernetAllOperOperEthernetStatistics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ethernet_index: {
      value: cdktf.numberToHclTerraform(struct!.ethernetIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stat: {
      value: cdktf.listMapperHcl(dataThunderRrdEthernetAllOperOperEthernetStatisticsStatToHclTerraform, true)(struct!.stat),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderRrdEthernetAllOperOperEthernetStatisticsStatList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRrdEthernetAllOperOperEthernetStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderRrdEthernetAllOperOperEthernetStatistics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethernetIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernetIndex = this._ethernetIndex;
    }
    if (this._stat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stat = this._stat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRrdEthernetAllOperOperEthernetStatistics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ethernetIndex = undefined;
      this._stat.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ethernetIndex = value.ethernetIndex;
      this._stat.internalValue = value.stat;
    }
  }

  // ethernet_index - computed: false, optional: true, required: false
  private _ethernetIndex?: number; 
  public get ethernetIndex() {
    return this.getNumberAttribute('ethernet_index');
  }
  public set ethernetIndex(value: number) {
    this._ethernetIndex = value;
  }
  public resetEthernetIndex() {
    this._ethernetIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetIndexInput() {
    return this._ethernetIndex;
  }

  // stat - computed: false, optional: true, required: false
  private _stat = new DataThunderRrdEthernetAllOperOperEthernetStatisticsStatList(this, "stat", false);
  public get stat() {
    return this._stat;
  }
  public putStat(value: DataThunderRrdEthernetAllOperOperEthernetStatisticsStat[] | cdktf.IResolvable) {
    this._stat.internalValue = value;
  }
  public resetStat() {
    this._stat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statInput() {
    return this._stat.internalValue;
  }
}

export class DataThunderRrdEthernetAllOperOperEthernetStatisticsList extends cdktf.ComplexList {
  public internalValue? : DataThunderRrdEthernetAllOperOperEthernetStatistics[] | cdktf.IResolvable

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
  public get(index: number): DataThunderRrdEthernetAllOperOperEthernetStatisticsOutputReference {
    return new DataThunderRrdEthernetAllOperOperEthernetStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderRrdEthernetAllOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rrd_ethernet_all_oper#end_time DataThunderRrdEthernetAllOper#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rrd_ethernet_all_oper#start_time DataThunderRrdEthernetAllOper#start_time}
  */
  readonly startTime?: number;
  /**
  * ethernet_statistics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rrd_ethernet_all_oper#ethernet_statistics DataThunderRrdEthernetAllOper#ethernet_statistics}
  */
  readonly ethernetStatistics?: DataThunderRrdEthernetAllOperOperEthernetStatistics[] | cdktf.IResolvable;
}

export function dataThunderRrdEthernetAllOperOperToTerraform(struct?: DataThunderRrdEthernetAllOperOperOutputReference | DataThunderRrdEthernetAllOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.numberToTerraform(struct!.endTime),
    start_time: cdktf.numberToTerraform(struct!.startTime),
    ethernet_statistics: cdktf.listMapper(dataThunderRrdEthernetAllOperOperEthernetStatisticsToTerraform, true)(struct!.ethernetStatistics),
  }
}


export function dataThunderRrdEthernetAllOperOperToHclTerraform(struct?: DataThunderRrdEthernetAllOperOperOutputReference | DataThunderRrdEthernetAllOperOper): any {
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
    ethernet_statistics: {
      value: cdktf.listMapperHcl(dataThunderRrdEthernetAllOperOperEthernetStatisticsToHclTerraform, true)(struct!.ethernetStatistics),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderRrdEthernetAllOperOperEthernetStatisticsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRrdEthernetAllOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderRrdEthernetAllOperOper | undefined {
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
    if (this._ethernetStatistics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernetStatistics = this._ethernetStatistics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRrdEthernetAllOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endTime = undefined;
      this._startTime = undefined;
      this._ethernetStatistics.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
      this._ethernetStatistics.internalValue = value.ethernetStatistics;
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

  // ethernet_statistics - computed: false, optional: true, required: false
  private _ethernetStatistics = new DataThunderRrdEthernetAllOperOperEthernetStatisticsList(this, "ethernet_statistics", false);
  public get ethernetStatistics() {
    return this._ethernetStatistics;
  }
  public putEthernetStatistics(value: DataThunderRrdEthernetAllOperOperEthernetStatistics[] | cdktf.IResolvable) {
    this._ethernetStatistics.internalValue = value;
  }
  public resetEthernetStatistics() {
    this._ethernetStatistics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetStatisticsInput() {
    return this._ethernetStatistics.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rrd_ethernet_all_oper thunder_rrd_ethernet_all_oper}
*/
export class DataThunderRrdEthernetAllOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_rrd_ethernet_all_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderRrdEthernetAllOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderRrdEthernetAllOper to import
  * @param importFromId The id of the existing DataThunderRrdEthernetAllOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rrd_ethernet_all_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderRrdEthernetAllOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_rrd_ethernet_all_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rrd_ethernet_all_oper thunder_rrd_ethernet_all_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderRrdEthernetAllOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderRrdEthernetAllOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_rrd_ethernet_all_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
  private _oper = new DataThunderRrdEthernetAllOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderRrdEthernetAllOperOper) {
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
      oper: dataThunderRrdEthernetAllOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderRrdEthernetAllOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderRrdEthernetAllOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
