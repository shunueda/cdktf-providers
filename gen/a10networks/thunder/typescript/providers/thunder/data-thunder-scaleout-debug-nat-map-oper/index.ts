// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_nat_map_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderScaleoutDebugNatMapOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_nat_map_oper#id DataThunderScaleoutDebugNatMapOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_nat_map_oper#oper DataThunderScaleoutDebugNatMapOper#oper}
  */
  readonly oper?: DataThunderScaleoutDebugNatMapOperOper;
}
export interface DataThunderScaleoutDebugNatMapOperOperVnpIdListNatMapListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_nat_map_oper#active DataThunderScaleoutDebugNatMapOper#active}
  */
  readonly active?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_nat_map_oper#ip DataThunderScaleoutDebugNatMapOper#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_nat_map_oper#owner DataThunderScaleoutDebugNatMapOper#owner}
  */
  readonly owner?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_nat_map_oper#vnp_id DataThunderScaleoutDebugNatMapOper#vnp_id}
  */
  readonly vnpId?: number;
}

export function dataThunderScaleoutDebugNatMapOperOperVnpIdListNatMapListStructToTerraform(struct?: DataThunderScaleoutDebugNatMapOperOperVnpIdListNatMapListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.numberToTerraform(struct!.active),
    ip: cdktf.stringToTerraform(struct!.ip),
    owner: cdktf.numberToTerraform(struct!.owner),
    vnp_id: cdktf.numberToTerraform(struct!.vnpId),
  }
}


export function dataThunderScaleoutDebugNatMapOperOperVnpIdListNatMapListStructToHclTerraform(struct?: DataThunderScaleoutDebugNatMapOperOperVnpIdListNatMapListStruct | cdktf.IResolvable): any {
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
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner: {
      value: cdktf.numberToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vnp_id: {
      value: cdktf.numberToHclTerraform(struct!.vnpId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutDebugNatMapOperOperVnpIdListNatMapListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderScaleoutDebugNatMapOperOperVnpIdListNatMapListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._vnpId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnpId = this._vnpId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutDebugNatMapOperOperVnpIdListNatMapListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active = undefined;
      this._ip = undefined;
      this._owner = undefined;
      this._vnpId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._active = value.active;
      this._ip = value.ip;
      this._owner = value.owner;
      this._vnpId = value.vnpId;
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

  // owner - computed: false, optional: true, required: false
  private _owner?: number; 
  public get owner() {
    return this.getNumberAttribute('owner');
  }
  public set owner(value: number) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // vnp_id - computed: false, optional: true, required: false
  private _vnpId?: number; 
  public get vnpId() {
    return this.getNumberAttribute('vnp_id');
  }
  public set vnpId(value: number) {
    this._vnpId = value;
  }
  public resetVnpId() {
    this._vnpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnpIdInput() {
    return this._vnpId;
  }
}

export class DataThunderScaleoutDebugNatMapOperOperVnpIdListNatMapListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderScaleoutDebugNatMapOperOperVnpIdListNatMapListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderScaleoutDebugNatMapOperOperVnpIdListNatMapListStructOutputReference {
    return new DataThunderScaleoutDebugNatMapOperOperVnpIdListNatMapListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderScaleoutDebugNatMapOperOperVnpIdListStruct {
  /**
  * nat_map_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_nat_map_oper#nat_map_list DataThunderScaleoutDebugNatMapOper#nat_map_list}
  */
  readonly natMapList?: DataThunderScaleoutDebugNatMapOperOperVnpIdListNatMapListStruct[] | cdktf.IResolvable;
}

export function dataThunderScaleoutDebugNatMapOperOperVnpIdListStructToTerraform(struct?: DataThunderScaleoutDebugNatMapOperOperVnpIdListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nat_map_list: cdktf.listMapper(dataThunderScaleoutDebugNatMapOperOperVnpIdListNatMapListStructToTerraform, true)(struct!.natMapList),
  }
}


export function dataThunderScaleoutDebugNatMapOperOperVnpIdListStructToHclTerraform(struct?: DataThunderScaleoutDebugNatMapOperOperVnpIdListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nat_map_list: {
      value: cdktf.listMapperHcl(dataThunderScaleoutDebugNatMapOperOperVnpIdListNatMapListStructToHclTerraform, true)(struct!.natMapList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderScaleoutDebugNatMapOperOperVnpIdListNatMapListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutDebugNatMapOperOperVnpIdListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderScaleoutDebugNatMapOperOperVnpIdListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._natMapList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.natMapList = this._natMapList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutDebugNatMapOperOperVnpIdListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._natMapList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._natMapList.internalValue = value.natMapList;
    }
  }

  // nat_map_list - computed: false, optional: true, required: false
  private _natMapList = new DataThunderScaleoutDebugNatMapOperOperVnpIdListNatMapListStructList(this, "nat_map_list", false);
  public get natMapList() {
    return this._natMapList;
  }
  public putNatMapList(value: DataThunderScaleoutDebugNatMapOperOperVnpIdListNatMapListStruct[] | cdktf.IResolvable) {
    this._natMapList.internalValue = value;
  }
  public resetNatMapList() {
    this._natMapList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natMapListInput() {
    return this._natMapList.internalValue;
  }
}

export class DataThunderScaleoutDebugNatMapOperOperVnpIdListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderScaleoutDebugNatMapOperOperVnpIdListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderScaleoutDebugNatMapOperOperVnpIdListStructOutputReference {
    return new DataThunderScaleoutDebugNatMapOperOperVnpIdListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderScaleoutDebugNatMapOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_nat_map_oper#device_id DataThunderScaleoutDebugNatMapOper#device_id}
  */
  readonly deviceId?: number;
  /**
  * vnp_id_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_nat_map_oper#vnp_id_list DataThunderScaleoutDebugNatMapOper#vnp_id_list}
  */
  readonly vnpIdList?: DataThunderScaleoutDebugNatMapOperOperVnpIdListStruct[] | cdktf.IResolvable;
}

export function dataThunderScaleoutDebugNatMapOperOperToTerraform(struct?: DataThunderScaleoutDebugNatMapOperOperOutputReference | DataThunderScaleoutDebugNatMapOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_id: cdktf.numberToTerraform(struct!.deviceId),
    vnp_id_list: cdktf.listMapper(dataThunderScaleoutDebugNatMapOperOperVnpIdListStructToTerraform, true)(struct!.vnpIdList),
  }
}


export function dataThunderScaleoutDebugNatMapOperOperToHclTerraform(struct?: DataThunderScaleoutDebugNatMapOperOperOutputReference | DataThunderScaleoutDebugNatMapOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_id: {
      value: cdktf.numberToHclTerraform(struct!.deviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vnp_id_list: {
      value: cdktf.listMapperHcl(dataThunderScaleoutDebugNatMapOperOperVnpIdListStructToHclTerraform, true)(struct!.vnpIdList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderScaleoutDebugNatMapOperOperVnpIdListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutDebugNatMapOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderScaleoutDebugNatMapOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceId = this._deviceId;
    }
    if (this._vnpIdList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnpIdList = this._vnpIdList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutDebugNatMapOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deviceId = undefined;
      this._vnpIdList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deviceId = value.deviceId;
      this._vnpIdList.internalValue = value.vnpIdList;
    }
  }

  // device_id - computed: false, optional: true, required: false
  private _deviceId?: number; 
  public get deviceId() {
    return this.getNumberAttribute('device_id');
  }
  public set deviceId(value: number) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // vnp_id_list - computed: false, optional: true, required: false
  private _vnpIdList = new DataThunderScaleoutDebugNatMapOperOperVnpIdListStructList(this, "vnp_id_list", false);
  public get vnpIdList() {
    return this._vnpIdList;
  }
  public putVnpIdList(value: DataThunderScaleoutDebugNatMapOperOperVnpIdListStruct[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_nat_map_oper thunder_scaleout_debug_nat_map_oper}
*/
export class DataThunderScaleoutDebugNatMapOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_scaleout_debug_nat_map_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderScaleoutDebugNatMapOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderScaleoutDebugNatMapOper to import
  * @param importFromId The id of the existing DataThunderScaleoutDebugNatMapOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_nat_map_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderScaleoutDebugNatMapOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_scaleout_debug_nat_map_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_nat_map_oper thunder_scaleout_debug_nat_map_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderScaleoutDebugNatMapOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderScaleoutDebugNatMapOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_scaleout_debug_nat_map_oper',
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
  private _oper = new DataThunderScaleoutDebugNatMapOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderScaleoutDebugNatMapOperOper) {
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
      oper: dataThunderScaleoutDebugNatMapOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderScaleoutDebugNatMapOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderScaleoutDebugNatMapOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
