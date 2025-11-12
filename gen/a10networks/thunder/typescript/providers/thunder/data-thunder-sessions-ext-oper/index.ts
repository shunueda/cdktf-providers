// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_ext_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSessionsExtOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_ext_oper#id DataThunderSessionsExtOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_ext_oper#oper DataThunderSessionsExtOper#oper}
  */
  readonly oper?: DataThunderSessionsExtOperOper;
}
export interface DataThunderSessionsExtOperOperSessionExtListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_ext_oper#alloc DataThunderSessionsExtOper#alloc}
  */
  readonly alloc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_ext_oper#alloc_exceed DataThunderSessionsExtOper#alloc_exceed}
  */
  readonly allocExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_ext_oper#cpu_round_robin_fail DataThunderSessionsExtOper#cpu_round_robin_fail}
  */
  readonly cpuRoundRobinFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_ext_oper#fail DataThunderSessionsExtOper#fail}
  */
  readonly fail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_ext_oper#free DataThunderSessionsExtOper#free}
  */
  readonly free?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_ext_oper#type DataThunderSessionsExtOper#type}
  */
  readonly type?: string;
}

export function dataThunderSessionsExtOperOperSessionExtListStructToTerraform(struct?: DataThunderSessionsExtOperOperSessionExtListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alloc: cdktf.numberToTerraform(struct!.alloc),
    alloc_exceed: cdktf.numberToTerraform(struct!.allocExceed),
    cpu_round_robin_fail: cdktf.numberToTerraform(struct!.cpuRoundRobinFail),
    fail: cdktf.numberToTerraform(struct!.fail),
    free: cdktf.numberToTerraform(struct!.free),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataThunderSessionsExtOperOperSessionExtListStructToHclTerraform(struct?: DataThunderSessionsExtOperOperSessionExtListStruct | cdktf.IResolvable): any {
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
    alloc_exceed: {
      value: cdktf.numberToHclTerraform(struct!.allocExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_round_robin_fail: {
      value: cdktf.numberToHclTerraform(struct!.cpuRoundRobinFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fail: {
      value: cdktf.numberToHclTerraform(struct!.fail),
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

export class DataThunderSessionsExtOperOperSessionExtListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSessionsExtOperOperSessionExtListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.alloc = this._alloc;
    }
    if (this._allocExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocExceed = this._allocExceed;
    }
    if (this._cpuRoundRobinFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuRoundRobinFail = this._cpuRoundRobinFail;
    }
    if (this._fail !== undefined) {
      hasAnyValues = true;
      internalValueResult.fail = this._fail;
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

  public set internalValue(value: DataThunderSessionsExtOperOperSessionExtListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alloc = undefined;
      this._allocExceed = undefined;
      this._cpuRoundRobinFail = undefined;
      this._fail = undefined;
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
      this._allocExceed = value.allocExceed;
      this._cpuRoundRobinFail = value.cpuRoundRobinFail;
      this._fail = value.fail;
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

  // alloc_exceed - computed: false, optional: true, required: false
  private _allocExceed?: number; 
  public get allocExceed() {
    return this.getNumberAttribute('alloc_exceed');
  }
  public set allocExceed(value: number) {
    this._allocExceed = value;
  }
  public resetAllocExceed() {
    this._allocExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocExceedInput() {
    return this._allocExceed;
  }

  // cpu_round_robin_fail - computed: false, optional: true, required: false
  private _cpuRoundRobinFail?: number; 
  public get cpuRoundRobinFail() {
    return this.getNumberAttribute('cpu_round_robin_fail');
  }
  public set cpuRoundRobinFail(value: number) {
    this._cpuRoundRobinFail = value;
  }
  public resetCpuRoundRobinFail() {
    this._cpuRoundRobinFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuRoundRobinFailInput() {
    return this._cpuRoundRobinFail;
  }

  // fail - computed: false, optional: true, required: false
  private _fail?: number; 
  public get fail() {
    return this.getNumberAttribute('fail');
  }
  public set fail(value: number) {
    this._fail = value;
  }
  public resetFail() {
    this._fail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failInput() {
    return this._fail;
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

export class DataThunderSessionsExtOperOperSessionExtListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSessionsExtOperOperSessionExtListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSessionsExtOperOperSessionExtListStructOutputReference {
    return new DataThunderSessionsExtOperOperSessionExtListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSessionsExtOperOper {
  /**
  * session_ext_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_ext_oper#session_ext_list DataThunderSessionsExtOper#session_ext_list}
  */
  readonly sessionExtList?: DataThunderSessionsExtOperOperSessionExtListStruct[] | cdktf.IResolvable;
}

export function dataThunderSessionsExtOperOperToTerraform(struct?: DataThunderSessionsExtOperOperOutputReference | DataThunderSessionsExtOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    session_ext_list: cdktf.listMapper(dataThunderSessionsExtOperOperSessionExtListStructToTerraform, true)(struct!.sessionExtList),
  }
}


export function dataThunderSessionsExtOperOperToHclTerraform(struct?: DataThunderSessionsExtOperOperOutputReference | DataThunderSessionsExtOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    session_ext_list: {
      value: cdktf.listMapperHcl(dataThunderSessionsExtOperOperSessionExtListStructToHclTerraform, true)(struct!.sessionExtList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSessionsExtOperOperSessionExtListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSessionsExtOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSessionsExtOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sessionExtList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionExtList = this._sessionExtList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSessionsExtOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sessionExtList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sessionExtList.internalValue = value.sessionExtList;
    }
  }

  // session_ext_list - computed: false, optional: true, required: false
  private _sessionExtList = new DataThunderSessionsExtOperOperSessionExtListStructList(this, "session_ext_list", false);
  public get sessionExtList() {
    return this._sessionExtList;
  }
  public putSessionExtList(value: DataThunderSessionsExtOperOperSessionExtListStruct[] | cdktf.IResolvable) {
    this._sessionExtList.internalValue = value;
  }
  public resetSessionExtList() {
    this._sessionExtList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionExtListInput() {
    return this._sessionExtList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_ext_oper thunder_sessions_ext_oper}
*/
export class DataThunderSessionsExtOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_sessions_ext_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSessionsExtOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSessionsExtOper to import
  * @param importFromId The id of the existing DataThunderSessionsExtOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_ext_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSessionsExtOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_sessions_ext_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_ext_oper thunder_sessions_ext_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSessionsExtOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSessionsExtOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_sessions_ext_oper',
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
  private _oper = new DataThunderSessionsExtOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSessionsExtOperOper) {
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
      oper: dataThunderSessionsExtOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSessionsExtOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSessionsExtOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
