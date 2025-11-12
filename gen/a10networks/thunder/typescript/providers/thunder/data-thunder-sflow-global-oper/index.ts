// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sflow_global_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSflowGlobalOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sflow_global_oper#id DataThunderSflowGlobalOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sflow_global_oper#oper DataThunderSflowGlobalOper#oper}
  */
  readonly oper?: DataThunderSflowGlobalOperOper;
}
export interface DataThunderSflowGlobalOperOperIfStatsListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sflow_global_oper#counter_sample_records DataThunderSflowGlobalOper#counter_sample_records}
  */
  readonly counterSampleRecords?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sflow_global_oper#if_num DataThunderSflowGlobalOper#if_num}
  */
  readonly ifNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sflow_global_oper#if_type DataThunderSflowGlobalOper#if_type}
  */
  readonly ifType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sflow_global_oper#packet_sample_records DataThunderSflowGlobalOper#packet_sample_records}
  */
  readonly packetSampleRecords?: number;
}

export function dataThunderSflowGlobalOperOperIfStatsListStructToTerraform(struct?: DataThunderSflowGlobalOperOperIfStatsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counter_sample_records: cdktf.numberToTerraform(struct!.counterSampleRecords),
    if_num: cdktf.numberToTerraform(struct!.ifNum),
    if_type: cdktf.stringToTerraform(struct!.ifType),
    packet_sample_records: cdktf.numberToTerraform(struct!.packetSampleRecords),
  }
}


export function dataThunderSflowGlobalOperOperIfStatsListStructToHclTerraform(struct?: DataThunderSflowGlobalOperOperIfStatsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counter_sample_records: {
      value: cdktf.numberToHclTerraform(struct!.counterSampleRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    if_num: {
      value: cdktf.numberToHclTerraform(struct!.ifNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    if_type: {
      value: cdktf.stringToHclTerraform(struct!.ifType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    packet_sample_records: {
      value: cdktf.numberToHclTerraform(struct!.packetSampleRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSflowGlobalOperOperIfStatsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSflowGlobalOperOperIfStatsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counterSampleRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.counterSampleRecords = this._counterSampleRecords;
    }
    if (this._ifNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifNum = this._ifNum;
    }
    if (this._ifType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifType = this._ifType;
    }
    if (this._packetSampleRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetSampleRecords = this._packetSampleRecords;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSflowGlobalOperOperIfStatsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counterSampleRecords = undefined;
      this._ifNum = undefined;
      this._ifType = undefined;
      this._packetSampleRecords = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counterSampleRecords = value.counterSampleRecords;
      this._ifNum = value.ifNum;
      this._ifType = value.ifType;
      this._packetSampleRecords = value.packetSampleRecords;
    }
  }

  // counter_sample_records - computed: false, optional: true, required: false
  private _counterSampleRecords?: number; 
  public get counterSampleRecords() {
    return this.getNumberAttribute('counter_sample_records');
  }
  public set counterSampleRecords(value: number) {
    this._counterSampleRecords = value;
  }
  public resetCounterSampleRecords() {
    this._counterSampleRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counterSampleRecordsInput() {
    return this._counterSampleRecords;
  }

  // if_num - computed: false, optional: true, required: false
  private _ifNum?: number; 
  public get ifNum() {
    return this.getNumberAttribute('if_num');
  }
  public set ifNum(value: number) {
    this._ifNum = value;
  }
  public resetIfNum() {
    this._ifNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifNumInput() {
    return this._ifNum;
  }

  // if_type - computed: false, optional: true, required: false
  private _ifType?: string; 
  public get ifType() {
    return this.getStringAttribute('if_type');
  }
  public set ifType(value: string) {
    this._ifType = value;
  }
  public resetIfType() {
    this._ifType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifTypeInput() {
    return this._ifType;
  }

  // packet_sample_records - computed: false, optional: true, required: false
  private _packetSampleRecords?: number; 
  public get packetSampleRecords() {
    return this.getNumberAttribute('packet_sample_records');
  }
  public set packetSampleRecords(value: number) {
    this._packetSampleRecords = value;
  }
  public resetPacketSampleRecords() {
    this._packetSampleRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetSampleRecordsInput() {
    return this._packetSampleRecords;
  }
}

export class DataThunderSflowGlobalOperOperIfStatsListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSflowGlobalOperOperIfStatsListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSflowGlobalOperOperIfStatsListStructOutputReference {
    return new DataThunderSflowGlobalOperOperIfStatsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSflowGlobalOperOper {
  /**
  * if_stats_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sflow_global_oper#if_stats_list DataThunderSflowGlobalOper#if_stats_list}
  */
  readonly ifStatsList?: DataThunderSflowGlobalOperOperIfStatsListStruct[] | cdktf.IResolvable;
}

export function dataThunderSflowGlobalOperOperToTerraform(struct?: DataThunderSflowGlobalOperOperOutputReference | DataThunderSflowGlobalOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    if_stats_list: cdktf.listMapper(dataThunderSflowGlobalOperOperIfStatsListStructToTerraform, true)(struct!.ifStatsList),
  }
}


export function dataThunderSflowGlobalOperOperToHclTerraform(struct?: DataThunderSflowGlobalOperOperOutputReference | DataThunderSflowGlobalOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    if_stats_list: {
      value: cdktf.listMapperHcl(dataThunderSflowGlobalOperOperIfStatsListStructToHclTerraform, true)(struct!.ifStatsList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSflowGlobalOperOperIfStatsListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSflowGlobalOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSflowGlobalOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ifStatsList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifStatsList = this._ifStatsList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSflowGlobalOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ifStatsList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ifStatsList.internalValue = value.ifStatsList;
    }
  }

  // if_stats_list - computed: false, optional: true, required: false
  private _ifStatsList = new DataThunderSflowGlobalOperOperIfStatsListStructList(this, "if_stats_list", false);
  public get ifStatsList() {
    return this._ifStatsList;
  }
  public putIfStatsList(value: DataThunderSflowGlobalOperOperIfStatsListStruct[] | cdktf.IResolvable) {
    this._ifStatsList.internalValue = value;
  }
  public resetIfStatsList() {
    this._ifStatsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifStatsListInput() {
    return this._ifStatsList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sflow_global_oper thunder_sflow_global_oper}
*/
export class DataThunderSflowGlobalOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_sflow_global_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSflowGlobalOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSflowGlobalOper to import
  * @param importFromId The id of the existing DataThunderSflowGlobalOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sflow_global_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSflowGlobalOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_sflow_global_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sflow_global_oper thunder_sflow_global_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSflowGlobalOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSflowGlobalOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_sflow_global_oper',
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
  private _oper = new DataThunderSflowGlobalOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSflowGlobalOperOper) {
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
      oper: dataThunderSflowGlobalOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSflowGlobalOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSflowGlobalOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
