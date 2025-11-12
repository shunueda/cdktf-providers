// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_inside_source_statistics_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6NatInsideSourceStatisticsOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_inside_source_statistics_oper#id DataThunderCgnv6NatInsideSourceStatisticsOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_inside_source_statistics_oper#oper DataThunderCgnv6NatInsideSourceStatisticsOper#oper}
  */
  readonly oper?: DataThunderCgnv6NatInsideSourceStatisticsOperOper;
}
export interface DataThunderCgnv6NatInsideSourceStatisticsOperOperStaticListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_inside_source_statistics_oper#nat_address DataThunderCgnv6NatInsideSourceStatisticsOper#nat_address}
  */
  readonly natAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_inside_source_statistics_oper#port_usage DataThunderCgnv6NatInsideSourceStatisticsOper#port_usage}
  */
  readonly portUsage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_inside_source_statistics_oper#src_address DataThunderCgnv6NatInsideSourceStatisticsOper#src_address}
  */
  readonly srcAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_inside_source_statistics_oper#total_freed DataThunderCgnv6NatInsideSourceStatisticsOper#total_freed}
  */
  readonly totalFreed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_inside_source_statistics_oper#total_used DataThunderCgnv6NatInsideSourceStatisticsOper#total_used}
  */
  readonly totalUsed?: number;
}

export function dataThunderCgnv6NatInsideSourceStatisticsOperOperStaticListStructToTerraform(struct?: DataThunderCgnv6NatInsideSourceStatisticsOperOperStaticListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nat_address: cdktf.stringToTerraform(struct!.natAddress),
    port_usage: cdktf.numberToTerraform(struct!.portUsage),
    src_address: cdktf.stringToTerraform(struct!.srcAddress),
    total_freed: cdktf.numberToTerraform(struct!.totalFreed),
    total_used: cdktf.numberToTerraform(struct!.totalUsed),
  }
}


export function dataThunderCgnv6NatInsideSourceStatisticsOperOperStaticListStructToHclTerraform(struct?: DataThunderCgnv6NatInsideSourceStatisticsOperOperStaticListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nat_address: {
      value: cdktf.stringToHclTerraform(struct!.natAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_usage: {
      value: cdktf.numberToHclTerraform(struct!.portUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_address: {
      value: cdktf.stringToHclTerraform(struct!.srcAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_freed: {
      value: cdktf.numberToHclTerraform(struct!.totalFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_used: {
      value: cdktf.numberToHclTerraform(struct!.totalUsed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6NatInsideSourceStatisticsOperOperStaticListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderCgnv6NatInsideSourceStatisticsOperOperStaticListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._natAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.natAddress = this._natAddress;
    }
    if (this._portUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.portUsage = this._portUsage;
    }
    if (this._srcAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAddress = this._srcAddress;
    }
    if (this._totalFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalFreed = this._totalFreed;
    }
    if (this._totalUsed !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalUsed = this._totalUsed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6NatInsideSourceStatisticsOperOperStaticListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._natAddress = undefined;
      this._portUsage = undefined;
      this._srcAddress = undefined;
      this._totalFreed = undefined;
      this._totalUsed = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._natAddress = value.natAddress;
      this._portUsage = value.portUsage;
      this._srcAddress = value.srcAddress;
      this._totalFreed = value.totalFreed;
      this._totalUsed = value.totalUsed;
    }
  }

  // nat_address - computed: false, optional: true, required: false
  private _natAddress?: string; 
  public get natAddress() {
    return this.getStringAttribute('nat_address');
  }
  public set natAddress(value: string) {
    this._natAddress = value;
  }
  public resetNatAddress() {
    this._natAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natAddressInput() {
    return this._natAddress;
  }

  // port_usage - computed: false, optional: true, required: false
  private _portUsage?: number; 
  public get portUsage() {
    return this.getNumberAttribute('port_usage');
  }
  public set portUsage(value: number) {
    this._portUsage = value;
  }
  public resetPortUsage() {
    this._portUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portUsageInput() {
    return this._portUsage;
  }

  // src_address - computed: false, optional: true, required: false
  private _srcAddress?: string; 
  public get srcAddress() {
    return this.getStringAttribute('src_address');
  }
  public set srcAddress(value: string) {
    this._srcAddress = value;
  }
  public resetSrcAddress() {
    this._srcAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAddressInput() {
    return this._srcAddress;
  }

  // total_freed - computed: false, optional: true, required: false
  private _totalFreed?: number; 
  public get totalFreed() {
    return this.getNumberAttribute('total_freed');
  }
  public set totalFreed(value: number) {
    this._totalFreed = value;
  }
  public resetTotalFreed() {
    this._totalFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalFreedInput() {
    return this._totalFreed;
  }

  // total_used - computed: false, optional: true, required: false
  private _totalUsed?: number; 
  public get totalUsed() {
    return this.getNumberAttribute('total_used');
  }
  public set totalUsed(value: number) {
    this._totalUsed = value;
  }
  public resetTotalUsed() {
    this._totalUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalUsedInput() {
    return this._totalUsed;
  }
}

export class DataThunderCgnv6NatInsideSourceStatisticsOperOperStaticListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderCgnv6NatInsideSourceStatisticsOperOperStaticListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderCgnv6NatInsideSourceStatisticsOperOperStaticListStructOutputReference {
    return new DataThunderCgnv6NatInsideSourceStatisticsOperOperStaticListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderCgnv6NatInsideSourceStatisticsOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_inside_source_statistics_oper#total DataThunderCgnv6NatInsideSourceStatisticsOper#total}
  */
  readonly total?: number;
  /**
  * static_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_inside_source_statistics_oper#static_list DataThunderCgnv6NatInsideSourceStatisticsOper#static_list}
  */
  readonly staticList?: DataThunderCgnv6NatInsideSourceStatisticsOperOperStaticListStruct[] | cdktf.IResolvable;
}

export function dataThunderCgnv6NatInsideSourceStatisticsOperOperToTerraform(struct?: DataThunderCgnv6NatInsideSourceStatisticsOperOperOutputReference | DataThunderCgnv6NatInsideSourceStatisticsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    total: cdktf.numberToTerraform(struct!.total),
    static_list: cdktf.listMapper(dataThunderCgnv6NatInsideSourceStatisticsOperOperStaticListStructToTerraform, true)(struct!.staticList),
  }
}


export function dataThunderCgnv6NatInsideSourceStatisticsOperOperToHclTerraform(struct?: DataThunderCgnv6NatInsideSourceStatisticsOperOperOutputReference | DataThunderCgnv6NatInsideSourceStatisticsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    total: {
      value: cdktf.numberToHclTerraform(struct!.total),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_list: {
      value: cdktf.listMapperHcl(dataThunderCgnv6NatInsideSourceStatisticsOperOperStaticListStructToHclTerraform, true)(struct!.staticList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6NatInsideSourceStatisticsOperOperStaticListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6NatInsideSourceStatisticsOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6NatInsideSourceStatisticsOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._total !== undefined) {
      hasAnyValues = true;
      internalValueResult.total = this._total;
    }
    if (this._staticList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticList = this._staticList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6NatInsideSourceStatisticsOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._total = undefined;
      this._staticList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._total = value.total;
      this._staticList.internalValue = value.staticList;
    }
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

  // static_list - computed: false, optional: true, required: false
  private _staticList = new DataThunderCgnv6NatInsideSourceStatisticsOperOperStaticListStructList(this, "static_list", false);
  public get staticList() {
    return this._staticList;
  }
  public putStaticList(value: DataThunderCgnv6NatInsideSourceStatisticsOperOperStaticListStruct[] | cdktf.IResolvable) {
    this._staticList.internalValue = value;
  }
  public resetStaticList() {
    this._staticList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticListInput() {
    return this._staticList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_inside_source_statistics_oper thunder_cgnv6_nat_inside_source_statistics_oper}
*/
export class DataThunderCgnv6NatInsideSourceStatisticsOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_nat_inside_source_statistics_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6NatInsideSourceStatisticsOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6NatInsideSourceStatisticsOper to import
  * @param importFromId The id of the existing DataThunderCgnv6NatInsideSourceStatisticsOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_inside_source_statistics_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6NatInsideSourceStatisticsOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_nat_inside_source_statistics_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat_inside_source_statistics_oper thunder_cgnv6_nat_inside_source_statistics_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6NatInsideSourceStatisticsOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6NatInsideSourceStatisticsOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_nat_inside_source_statistics_oper',
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
  private _oper = new DataThunderCgnv6NatInsideSourceStatisticsOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderCgnv6NatInsideSourceStatisticsOperOper) {
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
      oper: dataThunderCgnv6NatInsideSourceStatisticsOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderCgnv6NatInsideSourceStatisticsOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6NatInsideSourceStatisticsOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
