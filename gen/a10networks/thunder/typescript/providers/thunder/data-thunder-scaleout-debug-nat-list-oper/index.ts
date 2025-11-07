// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_nat_list_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderScaleoutDebugNatListOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_nat_list_oper#id DataThunderScaleoutDebugNatListOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_nat_list_oper#oper DataThunderScaleoutDebugNatListOper#oper}
  */
  readonly oper?: DataThunderScaleoutDebugNatListOperOper;
}
export interface DataThunderScaleoutDebugNatListOperOperVnpIdListNatListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_nat_list_oper#active DataThunderScaleoutDebugNatListOper#active}
  */
  readonly active?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_nat_list_oper#device DataThunderScaleoutDebugNatListOper#device}
  */
  readonly device?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_nat_list_oper#ip DataThunderScaleoutDebugNatListOper#ip}
  */
  readonly ip?: string;
}

export function dataThunderScaleoutDebugNatListOperOperVnpIdListNatListStructToTerraform(struct?: DataThunderScaleoutDebugNatListOperOperVnpIdListNatListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.numberToTerraform(struct!.active),
    device: cdktf.numberToTerraform(struct!.device),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function dataThunderScaleoutDebugNatListOperOperVnpIdListNatListStructToHclTerraform(struct?: DataThunderScaleoutDebugNatListOperOperVnpIdListNatListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.numberToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    device: {
      value: cdktf.numberToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutDebugNatListOperOperVnpIdListNatListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderScaleoutDebugNatListOperOperVnpIdListNatListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutDebugNatListOperOperVnpIdListNatListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active = undefined;
      this._device = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._active = value.active;
      this._device = value.device;
      this._ip = value.ip;
    }
  }

  // active - computed: false, optional: true, required: false
  private _active?: number; 
  public get active() {
    return this.getNumberAttribute('active');
  }
  public set active(value: number) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // device - computed: false, optional: true, required: false
  private _device?: number; 
  public get device() {
    return this.getNumberAttribute('device');
  }
  public set device(value: number) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}

export class DataThunderScaleoutDebugNatListOperOperVnpIdListNatListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderScaleoutDebugNatListOperOperVnpIdListNatListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderScaleoutDebugNatListOperOperVnpIdListNatListStructOutputReference {
    return new DataThunderScaleoutDebugNatListOperOperVnpIdListNatListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderScaleoutDebugNatListOperOperVnpIdListStruct {
  /**
  * nat_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_nat_list_oper#nat_list DataThunderScaleoutDebugNatListOper#nat_list}
  */
  readonly natList?: DataThunderScaleoutDebugNatListOperOperVnpIdListNatListStruct[] | cdktf.IResolvable;
}

export function dataThunderScaleoutDebugNatListOperOperVnpIdListStructToTerraform(struct?: DataThunderScaleoutDebugNatListOperOperVnpIdListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nat_list: cdktf.listMapper(dataThunderScaleoutDebugNatListOperOperVnpIdListNatListStructToTerraform, true)(struct!.natList),
  }
}


export function dataThunderScaleoutDebugNatListOperOperVnpIdListStructToHclTerraform(struct?: DataThunderScaleoutDebugNatListOperOperVnpIdListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nat_list: {
      value: cdktf.listMapperHcl(dataThunderScaleoutDebugNatListOperOperVnpIdListNatListStructToHclTerraform, true)(struct!.natList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderScaleoutDebugNatListOperOperVnpIdListNatListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutDebugNatListOperOperVnpIdListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderScaleoutDebugNatListOperOperVnpIdListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._natList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.natList = this._natList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutDebugNatListOperOperVnpIdListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._natList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._natList.internalValue = value.natList;
    }
  }

  // nat_list - computed: false, optional: true, required: false
  private _natList = new DataThunderScaleoutDebugNatListOperOperVnpIdListNatListStructList(this, "nat_list", false);
  public get natList() {
    return this._natList;
  }
  public putNatList(value: DataThunderScaleoutDebugNatListOperOperVnpIdListNatListStruct[] | cdktf.IResolvable) {
    this._natList.internalValue = value;
  }
  public resetNatList() {
    this._natList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natListInput() {
    return this._natList.internalValue;
  }
}

export class DataThunderScaleoutDebugNatListOperOperVnpIdListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderScaleoutDebugNatListOperOperVnpIdListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderScaleoutDebugNatListOperOperVnpIdListStructOutputReference {
    return new DataThunderScaleoutDebugNatListOperOperVnpIdListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderScaleoutDebugNatListOperOper {
  /**
  * vnp_id_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_nat_list_oper#vnp_id_list DataThunderScaleoutDebugNatListOper#vnp_id_list}
  */
  readonly vnpIdList?: DataThunderScaleoutDebugNatListOperOperVnpIdListStruct[] | cdktf.IResolvable;
}

export function dataThunderScaleoutDebugNatListOperOperToTerraform(struct?: DataThunderScaleoutDebugNatListOperOperOutputReference | DataThunderScaleoutDebugNatListOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vnp_id_list: cdktf.listMapper(dataThunderScaleoutDebugNatListOperOperVnpIdListStructToTerraform, true)(struct!.vnpIdList),
  }
}


export function dataThunderScaleoutDebugNatListOperOperToHclTerraform(struct?: DataThunderScaleoutDebugNatListOperOperOutputReference | DataThunderScaleoutDebugNatListOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vnp_id_list: {
      value: cdktf.listMapperHcl(dataThunderScaleoutDebugNatListOperOperVnpIdListStructToHclTerraform, true)(struct!.vnpIdList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderScaleoutDebugNatListOperOperVnpIdListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutDebugNatListOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderScaleoutDebugNatListOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vnpIdList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnpIdList = this._vnpIdList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutDebugNatListOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vnpIdList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vnpIdList.internalValue = value.vnpIdList;
    }
  }

  // vnp_id_list - computed: false, optional: true, required: false
  private _vnpIdList = new DataThunderScaleoutDebugNatListOperOperVnpIdListStructList(this, "vnp_id_list", false);
  public get vnpIdList() {
    return this._vnpIdList;
  }
  public putVnpIdList(value: DataThunderScaleoutDebugNatListOperOperVnpIdListStruct[] | cdktf.IResolvable) {
    this._vnpIdList.internalValue = value;
  }
  public resetVnpIdList() {
    this._vnpIdList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnpIdListInput() {
    return this._vnpIdList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_nat_list_oper thunder_scaleout_debug_nat_list_oper}
*/
export class DataThunderScaleoutDebugNatListOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_scaleout_debug_nat_list_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderScaleoutDebugNatListOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderScaleoutDebugNatListOper to import
  * @param importFromId The id of the existing DataThunderScaleoutDebugNatListOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_nat_list_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderScaleoutDebugNatListOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_scaleout_debug_nat_list_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_nat_list_oper thunder_scaleout_debug_nat_list_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderScaleoutDebugNatListOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderScaleoutDebugNatListOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_scaleout_debug_nat_list_oper',
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
  private _oper = new DataThunderScaleoutDebugNatListOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderScaleoutDebugNatListOperOper) {
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
      oper: dataThunderScaleoutDebugNatListOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderScaleoutDebugNatListOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderScaleoutDebugNatListOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
