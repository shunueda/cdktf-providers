// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_cosq_stats_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemCosqStatsOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_cosq_stats_oper#id DataThunderSystemCosqStatsOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_cosq_stats_oper#oper DataThunderSystemCosqStatsOper#oper}
  */
  readonly oper?: DataThunderSystemCosqStatsOperOper;
}
export interface DataThunderSystemCosqStatsOperOperCosqListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_cosq_stats_oper#cosq_congdrop DataThunderSystemCosqStatsOper#cosq_congdrop}
  */
  readonly cosqCongdrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_cosq_stats_oper#cosq_drop DataThunderSystemCosqStatsOper#cosq_drop}
  */
  readonly cosqDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_cosq_stats_oper#cosq_inpkt DataThunderSystemCosqStatsOper#cosq_inpkt}
  */
  readonly cosqInpkt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_cosq_stats_oper#cosq_outpkt DataThunderSystemCosqStatsOper#cosq_outpkt}
  */
  readonly cosqOutpkt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_cosq_stats_oper#cosq_sharedpkt DataThunderSystemCosqStatsOper#cosq_sharedpkt}
  */
  readonly cosqSharedpkt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_cosq_stats_oper#cosq_uccongdrop DataThunderSystemCosqStatsOper#cosq_uccongdrop}
  */
  readonly cosqUccongdrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_cosq_stats_oper#cosq_ucpeakpkt DataThunderSystemCosqStatsOper#cosq_ucpeakpkt}
  */
  readonly cosqUcpeakpkt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_cosq_stats_oper#ethernet_index DataThunderSystemCosqStatsOper#ethernet_index}
  */
  readonly ethernetIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_cosq_stats_oper#interface_name DataThunderSystemCosqStatsOper#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_cosq_stats_oper#xaui_index DataThunderSystemCosqStatsOper#xaui_index}
  */
  readonly xauiIndex?: number;
}

export function dataThunderSystemCosqStatsOperOperCosqListStructToTerraform(struct?: DataThunderSystemCosqStatsOperOperCosqListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cosq_congdrop: cdktf.numberToTerraform(struct!.cosqCongdrop),
    cosq_drop: cdktf.numberToTerraform(struct!.cosqDrop),
    cosq_inpkt: cdktf.numberToTerraform(struct!.cosqInpkt),
    cosq_outpkt: cdktf.numberToTerraform(struct!.cosqOutpkt),
    cosq_sharedpkt: cdktf.numberToTerraform(struct!.cosqSharedpkt),
    cosq_uccongdrop: cdktf.numberToTerraform(struct!.cosqUccongdrop),
    cosq_ucpeakpkt: cdktf.numberToTerraform(struct!.cosqUcpeakpkt),
    ethernet_index: cdktf.numberToTerraform(struct!.ethernetIndex),
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    xaui_index: cdktf.numberToTerraform(struct!.xauiIndex),
  }
}


export function dataThunderSystemCosqStatsOperOperCosqListStructToHclTerraform(struct?: DataThunderSystemCosqStatsOperOperCosqListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cosq_congdrop: {
      value: cdktf.numberToHclTerraform(struct!.cosqCongdrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cosq_drop: {
      value: cdktf.numberToHclTerraform(struct!.cosqDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cosq_inpkt: {
      value: cdktf.numberToHclTerraform(struct!.cosqInpkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cosq_outpkt: {
      value: cdktf.numberToHclTerraform(struct!.cosqOutpkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cosq_sharedpkt: {
      value: cdktf.numberToHclTerraform(struct!.cosqSharedpkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cosq_uccongdrop: {
      value: cdktf.numberToHclTerraform(struct!.cosqUccongdrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cosq_ucpeakpkt: {
      value: cdktf.numberToHclTerraform(struct!.cosqUcpeakpkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ethernet_index: {
      value: cdktf.numberToHclTerraform(struct!.ethernetIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xaui_index: {
      value: cdktf.numberToHclTerraform(struct!.xauiIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemCosqStatsOperOperCosqListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSystemCosqStatsOperOperCosqListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cosqCongdrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosqCongdrop = this._cosqCongdrop;
    }
    if (this._cosqDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosqDrop = this._cosqDrop;
    }
    if (this._cosqInpkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosqInpkt = this._cosqInpkt;
    }
    if (this._cosqOutpkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosqOutpkt = this._cosqOutpkt;
    }
    if (this._cosqSharedpkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosqSharedpkt = this._cosqSharedpkt;
    }
    if (this._cosqUccongdrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosqUccongdrop = this._cosqUccongdrop;
    }
    if (this._cosqUcpeakpkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosqUcpeakpkt = this._cosqUcpeakpkt;
    }
    if (this._ethernetIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernetIndex = this._ethernetIndex;
    }
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._xauiIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.xauiIndex = this._xauiIndex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemCosqStatsOperOperCosqListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cosqCongdrop = undefined;
      this._cosqDrop = undefined;
      this._cosqInpkt = undefined;
      this._cosqOutpkt = undefined;
      this._cosqSharedpkt = undefined;
      this._cosqUccongdrop = undefined;
      this._cosqUcpeakpkt = undefined;
      this._ethernetIndex = undefined;
      this._interfaceName = undefined;
      this._xauiIndex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cosqCongdrop = value.cosqCongdrop;
      this._cosqDrop = value.cosqDrop;
      this._cosqInpkt = value.cosqInpkt;
      this._cosqOutpkt = value.cosqOutpkt;
      this._cosqSharedpkt = value.cosqSharedpkt;
      this._cosqUccongdrop = value.cosqUccongdrop;
      this._cosqUcpeakpkt = value.cosqUcpeakpkt;
      this._ethernetIndex = value.ethernetIndex;
      this._interfaceName = value.interfaceName;
      this._xauiIndex = value.xauiIndex;
    }
  }

  // cosq_congdrop - computed: false, optional: true, required: false
  private _cosqCongdrop?: number; 
  public get cosqCongdrop() {
    return this.getNumberAttribute('cosq_congdrop');
  }
  public set cosqCongdrop(value: number) {
    this._cosqCongdrop = value;
  }
  public resetCosqCongdrop() {
    this._cosqCongdrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosqCongdropInput() {
    return this._cosqCongdrop;
  }

  // cosq_drop - computed: false, optional: true, required: false
  private _cosqDrop?: number; 
  public get cosqDrop() {
    return this.getNumberAttribute('cosq_drop');
  }
  public set cosqDrop(value: number) {
    this._cosqDrop = value;
  }
  public resetCosqDrop() {
    this._cosqDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosqDropInput() {
    return this._cosqDrop;
  }

  // cosq_inpkt - computed: false, optional: true, required: false
  private _cosqInpkt?: number; 
  public get cosqInpkt() {
    return this.getNumberAttribute('cosq_inpkt');
  }
  public set cosqInpkt(value: number) {
    this._cosqInpkt = value;
  }
  public resetCosqInpkt() {
    this._cosqInpkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosqInpktInput() {
    return this._cosqInpkt;
  }

  // cosq_outpkt - computed: false, optional: true, required: false
  private _cosqOutpkt?: number; 
  public get cosqOutpkt() {
    return this.getNumberAttribute('cosq_outpkt');
  }
  public set cosqOutpkt(value: number) {
    this._cosqOutpkt = value;
  }
  public resetCosqOutpkt() {
    this._cosqOutpkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosqOutpktInput() {
    return this._cosqOutpkt;
  }

  // cosq_sharedpkt - computed: false, optional: true, required: false
  private _cosqSharedpkt?: number; 
  public get cosqSharedpkt() {
    return this.getNumberAttribute('cosq_sharedpkt');
  }
  public set cosqSharedpkt(value: number) {
    this._cosqSharedpkt = value;
  }
  public resetCosqSharedpkt() {
    this._cosqSharedpkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosqSharedpktInput() {
    return this._cosqSharedpkt;
  }

  // cosq_uccongdrop - computed: false, optional: true, required: false
  private _cosqUccongdrop?: number; 
  public get cosqUccongdrop() {
    return this.getNumberAttribute('cosq_uccongdrop');
  }
  public set cosqUccongdrop(value: number) {
    this._cosqUccongdrop = value;
  }
  public resetCosqUccongdrop() {
    this._cosqUccongdrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosqUccongdropInput() {
    return this._cosqUccongdrop;
  }

  // cosq_ucpeakpkt - computed: false, optional: true, required: false
  private _cosqUcpeakpkt?: number; 
  public get cosqUcpeakpkt() {
    return this.getNumberAttribute('cosq_ucpeakpkt');
  }
  public set cosqUcpeakpkt(value: number) {
    this._cosqUcpeakpkt = value;
  }
  public resetCosqUcpeakpkt() {
    this._cosqUcpeakpkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosqUcpeakpktInput() {
    return this._cosqUcpeakpkt;
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

  // interface_name - computed: false, optional: true, required: false
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  public resetInterfaceName() {
    this._interfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // xaui_index - computed: false, optional: true, required: false
  private _xauiIndex?: number; 
  public get xauiIndex() {
    return this.getNumberAttribute('xaui_index');
  }
  public set xauiIndex(value: number) {
    this._xauiIndex = value;
  }
  public resetXauiIndex() {
    this._xauiIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xauiIndexInput() {
    return this._xauiIndex;
  }
}

export class DataThunderSystemCosqStatsOperOperCosqListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSystemCosqStatsOperOperCosqListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSystemCosqStatsOperOperCosqListStructOutputReference {
    return new DataThunderSystemCosqStatsOperOperCosqListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSystemCosqStatsOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_cosq_stats_oper#cosq_index DataThunderSystemCosqStatsOper#cosq_index}
  */
  readonly cosqIndex?: number;
  /**
  * cosq_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_cosq_stats_oper#cosq_list DataThunderSystemCosqStatsOper#cosq_list}
  */
  readonly cosqList?: DataThunderSystemCosqStatsOperOperCosqListStruct[] | cdktf.IResolvable;
}

export function dataThunderSystemCosqStatsOperOperToTerraform(struct?: DataThunderSystemCosqStatsOperOperOutputReference | DataThunderSystemCosqStatsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cosq_index: cdktf.numberToTerraform(struct!.cosqIndex),
    cosq_list: cdktf.listMapper(dataThunderSystemCosqStatsOperOperCosqListStructToTerraform, true)(struct!.cosqList),
  }
}


export function dataThunderSystemCosqStatsOperOperToHclTerraform(struct?: DataThunderSystemCosqStatsOperOperOutputReference | DataThunderSystemCosqStatsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cosq_index: {
      value: cdktf.numberToHclTerraform(struct!.cosqIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cosq_list: {
      value: cdktf.listMapperHcl(dataThunderSystemCosqStatsOperOperCosqListStructToHclTerraform, true)(struct!.cosqList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSystemCosqStatsOperOperCosqListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemCosqStatsOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemCosqStatsOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cosqIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosqIndex = this._cosqIndex;
    }
    if (this._cosqList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosqList = this._cosqList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemCosqStatsOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cosqIndex = undefined;
      this._cosqList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cosqIndex = value.cosqIndex;
      this._cosqList.internalValue = value.cosqList;
    }
  }

  // cosq_index - computed: false, optional: true, required: false
  private _cosqIndex?: number; 
  public get cosqIndex() {
    return this.getNumberAttribute('cosq_index');
  }
  public set cosqIndex(value: number) {
    this._cosqIndex = value;
  }
  public resetCosqIndex() {
    this._cosqIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosqIndexInput() {
    return this._cosqIndex;
  }

  // cosq_list - computed: false, optional: true, required: false
  private _cosqList = new DataThunderSystemCosqStatsOperOperCosqListStructList(this, "cosq_list", false);
  public get cosqList() {
    return this._cosqList;
  }
  public putCosqList(value: DataThunderSystemCosqStatsOperOperCosqListStruct[] | cdktf.IResolvable) {
    this._cosqList.internalValue = value;
  }
  public resetCosqList() {
    this._cosqList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosqListInput() {
    return this._cosqList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_cosq_stats_oper thunder_system_cosq_stats_oper}
*/
export class DataThunderSystemCosqStatsOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_cosq_stats_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemCosqStatsOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemCosqStatsOper to import
  * @param importFromId The id of the existing DataThunderSystemCosqStatsOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_cosq_stats_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemCosqStatsOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_cosq_stats_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_cosq_stats_oper thunder_system_cosq_stats_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemCosqStatsOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemCosqStatsOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_cosq_stats_oper',
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
  private _oper = new DataThunderSystemCosqStatsOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemCosqStatsOperOper) {
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
      oper: dataThunderSystemCosqStatsOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSystemCosqStatsOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemCosqStatsOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
