// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_smp_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSessionsSmpOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_smp_oper#id DataThunderSessionsSmpOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_smp_oper#oper DataThunderSessionsSmpOper#oper}
  */
  readonly oper?: DataThunderSessionsSmpOperOper;
}
export interface DataThunderSessionsSmpOperOperSessionSmpListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_smp_oper#alloc DataThunderSessionsSmpOper#alloc}
  */
  readonly alloc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_smp_oper#alloc_fail DataThunderSessionsSmpOper#alloc_fail}
  */
  readonly allocFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_smp_oper#free DataThunderSessionsSmpOper#free}
  */
  readonly free?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_smp_oper#type DataThunderSessionsSmpOper#type}
  */
  readonly type?: string;
}

export function dataThunderSessionsSmpOperOperSessionSmpListStructToTerraform(struct?: DataThunderSessionsSmpOperOperSessionSmpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alloc: cdktf.numberToTerraform(struct!.alloc),
    alloc_fail: cdktf.numberToTerraform(struct!.allocFail),
    free: cdktf.numberToTerraform(struct!.free),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataThunderSessionsSmpOperOperSessionSmpListStructToHclTerraform(struct?: DataThunderSessionsSmpOperOperSessionSmpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alloc: {
      value: cdktf.numberToHclTerraform(struct!.alloc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alloc_fail: {
      value: cdktf.numberToHclTerraform(struct!.allocFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    free: {
      value: cdktf.numberToHclTerraform(struct!.free),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSessionsSmpOperOperSessionSmpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSessionsSmpOperOperSessionSmpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.alloc = this._alloc;
    }
    if (this._allocFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocFail = this._allocFail;
    }
    if (this._free !== undefined) {
      hasAnyValues = true;
      internalValueResult.free = this._free;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSessionsSmpOperOperSessionSmpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alloc = undefined;
      this._allocFail = undefined;
      this._free = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alloc = value.alloc;
      this._allocFail = value.allocFail;
      this._free = value.free;
      this._type = value.type;
    }
  }

  // alloc - computed: false, optional: true, required: false
  private _alloc?: number; 
  public get alloc() {
    return this.getNumberAttribute('alloc');
  }
  public set alloc(value: number) {
    this._alloc = value;
  }
  public resetAlloc() {
    this._alloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocInput() {
    return this._alloc;
  }

  // alloc_fail - computed: false, optional: true, required: false
  private _allocFail?: number; 
  public get allocFail() {
    return this.getNumberAttribute('alloc_fail');
  }
  public set allocFail(value: number) {
    this._allocFail = value;
  }
  public resetAllocFail() {
    this._allocFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocFailInput() {
    return this._allocFail;
  }

  // free - computed: false, optional: true, required: false
  private _free?: number; 
  public get free() {
    return this.getNumberAttribute('free');
  }
  public set free(value: number) {
    this._free = value;
  }
  public resetFree() {
    this._free = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeInput() {
    return this._free;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataThunderSessionsSmpOperOperSessionSmpListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSessionsSmpOperOperSessionSmpListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSessionsSmpOperOperSessionSmpListStructOutputReference {
    return new DataThunderSessionsSmpOperOperSessionSmpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSessionsSmpOperOper {
  /**
  * session_smp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_smp_oper#session_smp_list DataThunderSessionsSmpOper#session_smp_list}
  */
  readonly sessionSmpList?: DataThunderSessionsSmpOperOperSessionSmpListStruct[] | cdktf.IResolvable;
}

export function dataThunderSessionsSmpOperOperToTerraform(struct?: DataThunderSessionsSmpOperOperOutputReference | DataThunderSessionsSmpOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    session_smp_list: cdktf.listMapper(dataThunderSessionsSmpOperOperSessionSmpListStructToTerraform, true)(struct!.sessionSmpList),
  }
}


export function dataThunderSessionsSmpOperOperToHclTerraform(struct?: DataThunderSessionsSmpOperOperOutputReference | DataThunderSessionsSmpOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    session_smp_list: {
      value: cdktf.listMapperHcl(dataThunderSessionsSmpOperOperSessionSmpListStructToHclTerraform, true)(struct!.sessionSmpList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSessionsSmpOperOperSessionSmpListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSessionsSmpOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSessionsSmpOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sessionSmpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionSmpList = this._sessionSmpList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSessionsSmpOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sessionSmpList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sessionSmpList.internalValue = value.sessionSmpList;
    }
  }

  // session_smp_list - computed: false, optional: true, required: false
  private _sessionSmpList = new DataThunderSessionsSmpOperOperSessionSmpListStructList(this, "session_smp_list", false);
  public get sessionSmpList() {
    return this._sessionSmpList;
  }
  public putSessionSmpList(value: DataThunderSessionsSmpOperOperSessionSmpListStruct[] | cdktf.IResolvable) {
    this._sessionSmpList.internalValue = value;
  }
  public resetSessionSmpList() {
    this._sessionSmpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionSmpListInput() {
    return this._sessionSmpList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_smp_oper thunder_sessions_smp_oper}
*/
export class DataThunderSessionsSmpOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_sessions_smp_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSessionsSmpOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSessionsSmpOper to import
  * @param importFromId The id of the existing DataThunderSessionsSmpOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_smp_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSessionsSmpOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_sessions_smp_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_smp_oper thunder_sessions_smp_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSessionsSmpOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSessionsSmpOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_sessions_smp_oper',
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
  private _oper = new DataThunderSessionsSmpOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSessionsSmpOperOper) {
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
      oper: dataThunderSessionsSmpOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSessionsSmpOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSessionsSmpOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
