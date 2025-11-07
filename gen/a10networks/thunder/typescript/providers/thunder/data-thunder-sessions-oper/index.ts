// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSessionsOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#id DataThunderSessionsOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ext block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#ext DataThunderSessionsOper#ext}
  */
  readonly ext?: DataThunderSessionsOperExt;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#oper DataThunderSessionsOper#oper}
  */
  readonly oper?: DataThunderSessionsOperOper;
  /**
  * smp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#smp DataThunderSessionsOper#smp}
  */
  readonly smp?: DataThunderSessionsOperSmp;
  /**
  * smp_table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#smp_table DataThunderSessionsOper#smp_table}
  */
  readonly smpTable?: DataThunderSessionsOperSmpTable;
}
export interface DataThunderSessionsOperExtOperSessionExtListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#alloc DataThunderSessionsOper#alloc}
  */
  readonly alloc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#alloc_exceed DataThunderSessionsOper#alloc_exceed}
  */
  readonly allocExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#cpu_round_robin_fail DataThunderSessionsOper#cpu_round_robin_fail}
  */
  readonly cpuRoundRobinFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#fail DataThunderSessionsOper#fail}
  */
  readonly fail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#free DataThunderSessionsOper#free}
  */
  readonly free?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#type DataThunderSessionsOper#type}
  */
  readonly type?: string;
}

export function dataThunderSessionsOperExtOperSessionExtListStructToTerraform(struct?: DataThunderSessionsOperExtOperSessionExtListStruct | cdktf.IResolvable): any {
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


export function dataThunderSessionsOperExtOperSessionExtListStructToHclTerraform(struct?: DataThunderSessionsOperExtOperSessionExtListStruct | cdktf.IResolvable): any {
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

export class DataThunderSessionsOperExtOperSessionExtListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSessionsOperExtOperSessionExtListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderSessionsOperExtOperSessionExtListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderSessionsOperExtOperSessionExtListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSessionsOperExtOperSessionExtListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSessionsOperExtOperSessionExtListStructOutputReference {
    return new DataThunderSessionsOperExtOperSessionExtListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSessionsOperExtOper {
  /**
  * session_ext_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#session_ext_list DataThunderSessionsOper#session_ext_list}
  */
  readonly sessionExtList?: DataThunderSessionsOperExtOperSessionExtListStruct[] | cdktf.IResolvable;
}

export function dataThunderSessionsOperExtOperToTerraform(struct?: DataThunderSessionsOperExtOperOutputReference | DataThunderSessionsOperExtOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    session_ext_list: cdktf.listMapper(dataThunderSessionsOperExtOperSessionExtListStructToTerraform, true)(struct!.sessionExtList),
  }
}


export function dataThunderSessionsOperExtOperToHclTerraform(struct?: DataThunderSessionsOperExtOperOutputReference | DataThunderSessionsOperExtOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    session_ext_list: {
      value: cdktf.listMapperHcl(dataThunderSessionsOperExtOperSessionExtListStructToHclTerraform, true)(struct!.sessionExtList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSessionsOperExtOperSessionExtListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSessionsOperExtOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSessionsOperExtOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sessionExtList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionExtList = this._sessionExtList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSessionsOperExtOper | undefined) {
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
  private _sessionExtList = new DataThunderSessionsOperExtOperSessionExtListStructList(this, "session_ext_list", false);
  public get sessionExtList() {
    return this._sessionExtList;
  }
  public putSessionExtList(value: DataThunderSessionsOperExtOperSessionExtListStruct[] | cdktf.IResolvable) {
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
export interface DataThunderSessionsOperExt {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#oper DataThunderSessionsOper#oper}
  */
  readonly oper?: DataThunderSessionsOperExtOper;
}

export function dataThunderSessionsOperExtToTerraform(struct?: DataThunderSessionsOperExtOutputReference | DataThunderSessionsOperExt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderSessionsOperExtOperToTerraform(struct!.oper),
  }
}


export function dataThunderSessionsOperExtToHclTerraform(struct?: DataThunderSessionsOperExtOutputReference | DataThunderSessionsOperExt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderSessionsOperExtOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSessionsOperExtOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSessionsOperExtOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSessionsOperExt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSessionsOperExt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderSessionsOperExtOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSessionsOperExtOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}
export interface DataThunderSessionsOperOperSessionListExtensionFieldsListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#ext_field_name DataThunderSessionsOper#ext_field_name}
  */
  readonly extFieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#ext_field_val DataThunderSessionsOper#ext_field_val}
  */
  readonly extFieldVal?: string;
}

export function dataThunderSessionsOperOperSessionListExtensionFieldsListStructToTerraform(struct?: DataThunderSessionsOperOperSessionListExtensionFieldsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_field_name: cdktf.stringToTerraform(struct!.extFieldName),
    ext_field_val: cdktf.stringToTerraform(struct!.extFieldVal),
  }
}


export function dataThunderSessionsOperOperSessionListExtensionFieldsListStructToHclTerraform(struct?: DataThunderSessionsOperOperSessionListExtensionFieldsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_field_name: {
      value: cdktf.stringToHclTerraform(struct!.extFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ext_field_val: {
      value: cdktf.stringToHclTerraform(struct!.extFieldVal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSessionsOperOperSessionListExtensionFieldsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSessionsOperOperSessionListExtensionFieldsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.extFieldName = this._extFieldName;
    }
    if (this._extFieldVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.extFieldVal = this._extFieldVal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSessionsOperOperSessionListExtensionFieldsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extFieldName = undefined;
      this._extFieldVal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extFieldName = value.extFieldName;
      this._extFieldVal = value.extFieldVal;
    }
  }

  // ext_field_name - computed: false, optional: true, required: false
  private _extFieldName?: string; 
  public get extFieldName() {
    return this.getStringAttribute('ext_field_name');
  }
  public set extFieldName(value: string) {
    this._extFieldName = value;
  }
  public resetExtFieldName() {
    this._extFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extFieldNameInput() {
    return this._extFieldName;
  }

  // ext_field_val - computed: false, optional: true, required: false
  private _extFieldVal?: string; 
  public get extFieldVal() {
    return this.getStringAttribute('ext_field_val');
  }
  public set extFieldVal(value: string) {
    this._extFieldVal = value;
  }
  public resetExtFieldVal() {
    this._extFieldVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extFieldValInput() {
    return this._extFieldVal;
  }
}

export class DataThunderSessionsOperOperSessionListExtensionFieldsListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSessionsOperOperSessionListExtensionFieldsListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSessionsOperOperSessionListExtensionFieldsListStructOutputReference {
    return new DataThunderSessionsOperOperSessionListExtensionFieldsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSessionsOperOperSessionListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#age DataThunderSessionsOper#age}
  */
  readonly age?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#app_name DataThunderSessionsOper#app_name}
  */
  readonly appName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#app_type DataThunderSessionsOper#app_type}
  */
  readonly appType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#bytes DataThunderSessionsOper#bytes}
  */
  readonly bytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#category_name DataThunderSessionsOper#category_name}
  */
  readonly categoryName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#conn_idx DataThunderSessionsOper#conn_idx}
  */
  readonly connIdx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#ddos_current_pkt_rate DataThunderSessionsOper#ddos_current_pkt_rate}
  */
  readonly ddosCurrentPktRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#ddos_exceeded_pkt_rate DataThunderSessionsOper#ddos_exceeded_pkt_rate}
  */
  readonly ddosExceededPktRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#ddos_total_fwd_bytes DataThunderSessionsOper#ddos_total_fwd_bytes}
  */
  readonly ddosTotalFwdBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#ddos_total_out_of_order DataThunderSessionsOper#ddos_total_out_of_order}
  */
  readonly ddosTotalOutOfOrder?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#ddos_total_retrans DataThunderSessionsOper#ddos_total_retrans}
  */
  readonly ddosTotalRetrans?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#ddos_total_rev_bytes DataThunderSessionsOper#ddos_total_rev_bytes}
  */
  readonly ddosTotalRevBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#ddos_total_zero_window DataThunderSessionsOper#ddos_total_zero_window}
  */
  readonly ddosTotalZeroWindow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#dns_id DataThunderSessionsOper#dns_id}
  */
  readonly dnsId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#drop DataThunderSessionsOper#drop}
  */
  readonly drop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#duration DataThunderSessionsOper#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#flags DataThunderSessionsOper#flags}
  */
  readonly flags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#forward_dest DataThunderSessionsOper#forward_dest}
  */
  readonly forwardDest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#forward_source DataThunderSessionsOper#forward_source}
  */
  readonly forwardSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#hash DataThunderSessionsOper#hash}
  */
  readonly hash?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#hash_idx DataThunderSessionsOper#hash_idx}
  */
  readonly hashIdx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#limit DataThunderSessionsOper#limit}
  */
  readonly limit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#ms100 DataThunderSessionsOper#ms100}
  */
  readonly ms100?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#peak_rate DataThunderSessionsOper#peak_rate}
  */
  readonly peakRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#protocol DataThunderSessionsOper#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#rate DataThunderSessionsOper#rate}
  */
  readonly rate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#reverse_dest DataThunderSessionsOper#reverse_dest}
  */
  readonly reverseDest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#reverse_source DataThunderSessionsOper#reverse_source}
  */
  readonly reverseSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#rserver_name DataThunderSessionsOper#rserver_name}
  */
  readonly rserverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#service_name DataThunderSessionsOper#service_name}
  */
  readonly serviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#sip_call_id DataThunderSessionsOper#sip_call_id}
  */
  readonly sipCallId?: string;
  /**
  * extension_fields_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#extension_fields_list DataThunderSessionsOper#extension_fields_list}
  */
  readonly extensionFieldsList?: DataThunderSessionsOperOperSessionListExtensionFieldsListStruct[] | cdktf.IResolvable;
}

export function dataThunderSessionsOperOperSessionListStructToTerraform(struct?: DataThunderSessionsOperOperSessionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    age: cdktf.numberToTerraform(struct!.age),
    app_name: cdktf.stringToTerraform(struct!.appName),
    app_type: cdktf.stringToTerraform(struct!.appType),
    bytes: cdktf.numberToTerraform(struct!.bytes),
    category_name: cdktf.stringToTerraform(struct!.categoryName),
    conn_idx: cdktf.numberToTerraform(struct!.connIdx),
    ddos_current_pkt_rate: cdktf.numberToTerraform(struct!.ddosCurrentPktRate),
    ddos_exceeded_pkt_rate: cdktf.numberToTerraform(struct!.ddosExceededPktRate),
    ddos_total_fwd_bytes: cdktf.numberToTerraform(struct!.ddosTotalFwdBytes),
    ddos_total_out_of_order: cdktf.numberToTerraform(struct!.ddosTotalOutOfOrder),
    ddos_total_retrans: cdktf.numberToTerraform(struct!.ddosTotalRetrans),
    ddos_total_rev_bytes: cdktf.numberToTerraform(struct!.ddosTotalRevBytes),
    ddos_total_zero_window: cdktf.numberToTerraform(struct!.ddosTotalZeroWindow),
    dns_id: cdktf.numberToTerraform(struct!.dnsId),
    drop: cdktf.numberToTerraform(struct!.drop),
    duration: cdktf.numberToTerraform(struct!.duration),
    flags: cdktf.stringToTerraform(struct!.flags),
    forward_dest: cdktf.stringToTerraform(struct!.forwardDest),
    forward_source: cdktf.stringToTerraform(struct!.forwardSource),
    hash: cdktf.numberToTerraform(struct!.hash),
    hash_idx: cdktf.numberToTerraform(struct!.hashIdx),
    limit: cdktf.numberToTerraform(struct!.limit),
    ms100: cdktf.stringToTerraform(struct!.ms100),
    peak_rate: cdktf.numberToTerraform(struct!.peakRate),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    rate: cdktf.numberToTerraform(struct!.rate),
    reverse_dest: cdktf.stringToTerraform(struct!.reverseDest),
    reverse_source: cdktf.stringToTerraform(struct!.reverseSource),
    rserver_name: cdktf.stringToTerraform(struct!.rserverName),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    sip_call_id: cdktf.stringToTerraform(struct!.sipCallId),
    extension_fields_list: cdktf.listMapper(dataThunderSessionsOperOperSessionListExtensionFieldsListStructToTerraform, true)(struct!.extensionFieldsList),
  }
}


export function dataThunderSessionsOperOperSessionListStructToHclTerraform(struct?: DataThunderSessionsOperOperSessionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    age: {
      value: cdktf.numberToHclTerraform(struct!.age),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    app_name: {
      value: cdktf.stringToHclTerraform(struct!.appName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_type: {
      value: cdktf.stringToHclTerraform(struct!.appType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bytes: {
      value: cdktf.numberToHclTerraform(struct!.bytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    category_name: {
      value: cdktf.stringToHclTerraform(struct!.categoryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conn_idx: {
      value: cdktf.numberToHclTerraform(struct!.connIdx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddos_current_pkt_rate: {
      value: cdktf.numberToHclTerraform(struct!.ddosCurrentPktRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddos_exceeded_pkt_rate: {
      value: cdktf.numberToHclTerraform(struct!.ddosExceededPktRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddos_total_fwd_bytes: {
      value: cdktf.numberToHclTerraform(struct!.ddosTotalFwdBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddos_total_out_of_order: {
      value: cdktf.numberToHclTerraform(struct!.ddosTotalOutOfOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddos_total_retrans: {
      value: cdktf.numberToHclTerraform(struct!.ddosTotalRetrans),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddos_total_rev_bytes: {
      value: cdktf.numberToHclTerraform(struct!.ddosTotalRevBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddos_total_zero_window: {
      value: cdktf.numberToHclTerraform(struct!.ddosTotalZeroWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_id: {
      value: cdktf.numberToHclTerraform(struct!.dnsId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop: {
      value: cdktf.numberToHclTerraform(struct!.drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    flags: {
      value: cdktf.stringToHclTerraform(struct!.flags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forward_dest: {
      value: cdktf.stringToHclTerraform(struct!.forwardDest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forward_source: {
      value: cdktf.stringToHclTerraform(struct!.forwardSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hash: {
      value: cdktf.numberToHclTerraform(struct!.hash),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hash_idx: {
      value: cdktf.numberToHclTerraform(struct!.hashIdx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ms100: {
      value: cdktf.stringToHclTerraform(struct!.ms100),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peak_rate: {
      value: cdktf.numberToHclTerraform(struct!.peakRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate: {
      value: cdktf.numberToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reverse_dest: {
      value: cdktf.stringToHclTerraform(struct!.reverseDest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reverse_source: {
      value: cdktf.stringToHclTerraform(struct!.reverseSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rserver_name: {
      value: cdktf.stringToHclTerraform(struct!.rserverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sip_call_id: {
      value: cdktf.stringToHclTerraform(struct!.sipCallId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extension_fields_list: {
      value: cdktf.listMapperHcl(dataThunderSessionsOperOperSessionListExtensionFieldsListStructToHclTerraform, true)(struct!.extensionFieldsList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSessionsOperOperSessionListExtensionFieldsListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSessionsOperOperSessionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSessionsOperOperSessionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._age !== undefined) {
      hasAnyValues = true;
      internalValueResult.age = this._age;
    }
    if (this._appName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appName = this._appName;
    }
    if (this._appType !== undefined) {
      hasAnyValues = true;
      internalValueResult.appType = this._appType;
    }
    if (this._bytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytes = this._bytes;
    }
    if (this._categoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryName = this._categoryName;
    }
    if (this._connIdx !== undefined) {
      hasAnyValues = true;
      internalValueResult.connIdx = this._connIdx;
    }
    if (this._ddosCurrentPktRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosCurrentPktRate = this._ddosCurrentPktRate;
    }
    if (this._ddosExceededPktRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosExceededPktRate = this._ddosExceededPktRate;
    }
    if (this._ddosTotalFwdBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosTotalFwdBytes = this._ddosTotalFwdBytes;
    }
    if (this._ddosTotalOutOfOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosTotalOutOfOrder = this._ddosTotalOutOfOrder;
    }
    if (this._ddosTotalRetrans !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosTotalRetrans = this._ddosTotalRetrans;
    }
    if (this._ddosTotalRevBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosTotalRevBytes = this._ddosTotalRevBytes;
    }
    if (this._ddosTotalZeroWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosTotalZeroWindow = this._ddosTotalZeroWindow;
    }
    if (this._dnsId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsId = this._dnsId;
    }
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags;
    }
    if (this._forwardDest !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardDest = this._forwardDest;
    }
    if (this._forwardSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardSource = this._forwardSource;
    }
    if (this._hash !== undefined) {
      hasAnyValues = true;
      internalValueResult.hash = this._hash;
    }
    if (this._hashIdx !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashIdx = this._hashIdx;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._ms100 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ms100 = this._ms100;
    }
    if (this._peakRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakRate = this._peakRate;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    if (this._reverseDest !== undefined) {
      hasAnyValues = true;
      internalValueResult.reverseDest = this._reverseDest;
    }
    if (this._reverseSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.reverseSource = this._reverseSource;
    }
    if (this._rserverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.rserverName = this._rserverName;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._sipCallId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipCallId = this._sipCallId;
    }
    if (this._extensionFieldsList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionFieldsList = this._extensionFieldsList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSessionsOperOperSessionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._age = undefined;
      this._appName = undefined;
      this._appType = undefined;
      this._bytes = undefined;
      this._categoryName = undefined;
      this._connIdx = undefined;
      this._ddosCurrentPktRate = undefined;
      this._ddosExceededPktRate = undefined;
      this._ddosTotalFwdBytes = undefined;
      this._ddosTotalOutOfOrder = undefined;
      this._ddosTotalRetrans = undefined;
      this._ddosTotalRevBytes = undefined;
      this._ddosTotalZeroWindow = undefined;
      this._dnsId = undefined;
      this._drop = undefined;
      this._duration = undefined;
      this._flags = undefined;
      this._forwardDest = undefined;
      this._forwardSource = undefined;
      this._hash = undefined;
      this._hashIdx = undefined;
      this._limit = undefined;
      this._ms100 = undefined;
      this._peakRate = undefined;
      this._protocol = undefined;
      this._rate = undefined;
      this._reverseDest = undefined;
      this._reverseSource = undefined;
      this._rserverName = undefined;
      this._serviceName = undefined;
      this._sipCallId = undefined;
      this._extensionFieldsList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._age = value.age;
      this._appName = value.appName;
      this._appType = value.appType;
      this._bytes = value.bytes;
      this._categoryName = value.categoryName;
      this._connIdx = value.connIdx;
      this._ddosCurrentPktRate = value.ddosCurrentPktRate;
      this._ddosExceededPktRate = value.ddosExceededPktRate;
      this._ddosTotalFwdBytes = value.ddosTotalFwdBytes;
      this._ddosTotalOutOfOrder = value.ddosTotalOutOfOrder;
      this._ddosTotalRetrans = value.ddosTotalRetrans;
      this._ddosTotalRevBytes = value.ddosTotalRevBytes;
      this._ddosTotalZeroWindow = value.ddosTotalZeroWindow;
      this._dnsId = value.dnsId;
      this._drop = value.drop;
      this._duration = value.duration;
      this._flags = value.flags;
      this._forwardDest = value.forwardDest;
      this._forwardSource = value.forwardSource;
      this._hash = value.hash;
      this._hashIdx = value.hashIdx;
      this._limit = value.limit;
      this._ms100 = value.ms100;
      this._peakRate = value.peakRate;
      this._protocol = value.protocol;
      this._rate = value.rate;
      this._reverseDest = value.reverseDest;
      this._reverseSource = value.reverseSource;
      this._rserverName = value.rserverName;
      this._serviceName = value.serviceName;
      this._sipCallId = value.sipCallId;
      this._extensionFieldsList.internalValue = value.extensionFieldsList;
    }
  }

  // age - computed: false, optional: true, required: false
  private _age?: number; 
  public get age() {
    return this.getNumberAttribute('age');
  }
  public set age(value: number) {
    this._age = value;
  }
  public resetAge() {
    this._age = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageInput() {
    return this._age;
  }

  // app_name - computed: false, optional: true, required: false
  private _appName?: string; 
  public get appName() {
    return this.getStringAttribute('app_name');
  }
  public set appName(value: string) {
    this._appName = value;
  }
  public resetAppName() {
    this._appName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appNameInput() {
    return this._appName;
  }

  // app_type - computed: false, optional: true, required: false
  private _appType?: string; 
  public get appType() {
    return this.getStringAttribute('app_type');
  }
  public set appType(value: string) {
    this._appType = value;
  }
  public resetAppType() {
    this._appType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appTypeInput() {
    return this._appType;
  }

  // bytes - computed: false, optional: true, required: false
  private _bytes?: number; 
  public get bytes() {
    return this.getNumberAttribute('bytes');
  }
  public set bytes(value: number) {
    this._bytes = value;
  }
  public resetBytes() {
    this._bytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesInput() {
    return this._bytes;
  }

  // category_name - computed: false, optional: true, required: false
  private _categoryName?: string; 
  public get categoryName() {
    return this.getStringAttribute('category_name');
  }
  public set categoryName(value: string) {
    this._categoryName = value;
  }
  public resetCategoryName() {
    this._categoryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryNameInput() {
    return this._categoryName;
  }

  // conn_idx - computed: false, optional: true, required: false
  private _connIdx?: number; 
  public get connIdx() {
    return this.getNumberAttribute('conn_idx');
  }
  public set connIdx(value: number) {
    this._connIdx = value;
  }
  public resetConnIdx() {
    this._connIdx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connIdxInput() {
    return this._connIdx;
  }

  // ddos_current_pkt_rate - computed: false, optional: true, required: false
  private _ddosCurrentPktRate?: number; 
  public get ddosCurrentPktRate() {
    return this.getNumberAttribute('ddos_current_pkt_rate');
  }
  public set ddosCurrentPktRate(value: number) {
    this._ddosCurrentPktRate = value;
  }
  public resetDdosCurrentPktRate() {
    this._ddosCurrentPktRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosCurrentPktRateInput() {
    return this._ddosCurrentPktRate;
  }

  // ddos_exceeded_pkt_rate - computed: false, optional: true, required: false
  private _ddosExceededPktRate?: number; 
  public get ddosExceededPktRate() {
    return this.getNumberAttribute('ddos_exceeded_pkt_rate');
  }
  public set ddosExceededPktRate(value: number) {
    this._ddosExceededPktRate = value;
  }
  public resetDdosExceededPktRate() {
    this._ddosExceededPktRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosExceededPktRateInput() {
    return this._ddosExceededPktRate;
  }

  // ddos_total_fwd_bytes - computed: false, optional: true, required: false
  private _ddosTotalFwdBytes?: number; 
  public get ddosTotalFwdBytes() {
    return this.getNumberAttribute('ddos_total_fwd_bytes');
  }
  public set ddosTotalFwdBytes(value: number) {
    this._ddosTotalFwdBytes = value;
  }
  public resetDdosTotalFwdBytes() {
    this._ddosTotalFwdBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosTotalFwdBytesInput() {
    return this._ddosTotalFwdBytes;
  }

  // ddos_total_out_of_order - computed: false, optional: true, required: false
  private _ddosTotalOutOfOrder?: number; 
  public get ddosTotalOutOfOrder() {
    return this.getNumberAttribute('ddos_total_out_of_order');
  }
  public set ddosTotalOutOfOrder(value: number) {
    this._ddosTotalOutOfOrder = value;
  }
  public resetDdosTotalOutOfOrder() {
    this._ddosTotalOutOfOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosTotalOutOfOrderInput() {
    return this._ddosTotalOutOfOrder;
  }

  // ddos_total_retrans - computed: false, optional: true, required: false
  private _ddosTotalRetrans?: number; 
  public get ddosTotalRetrans() {
    return this.getNumberAttribute('ddos_total_retrans');
  }
  public set ddosTotalRetrans(value: number) {
    this._ddosTotalRetrans = value;
  }
  public resetDdosTotalRetrans() {
    this._ddosTotalRetrans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosTotalRetransInput() {
    return this._ddosTotalRetrans;
  }

  // ddos_total_rev_bytes - computed: false, optional: true, required: false
  private _ddosTotalRevBytes?: number; 
  public get ddosTotalRevBytes() {
    return this.getNumberAttribute('ddos_total_rev_bytes');
  }
  public set ddosTotalRevBytes(value: number) {
    this._ddosTotalRevBytes = value;
  }
  public resetDdosTotalRevBytes() {
    this._ddosTotalRevBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosTotalRevBytesInput() {
    return this._ddosTotalRevBytes;
  }

  // ddos_total_zero_window - computed: false, optional: true, required: false
  private _ddosTotalZeroWindow?: number; 
  public get ddosTotalZeroWindow() {
    return this.getNumberAttribute('ddos_total_zero_window');
  }
  public set ddosTotalZeroWindow(value: number) {
    this._ddosTotalZeroWindow = value;
  }
  public resetDdosTotalZeroWindow() {
    this._ddosTotalZeroWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosTotalZeroWindowInput() {
    return this._ddosTotalZeroWindow;
  }

  // dns_id - computed: false, optional: true, required: false
  private _dnsId?: number; 
  public get dnsId() {
    return this.getNumberAttribute('dns_id');
  }
  public set dnsId(value: number) {
    this._dnsId = value;
  }
  public resetDnsId() {
    this._dnsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIdInput() {
    return this._dnsId;
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: number; 
  public get drop() {
    return this.getNumberAttribute('drop');
  }
  public set drop(value: number) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // flags - computed: false, optional: true, required: false
  private _flags?: string; 
  public get flags() {
    return this.getStringAttribute('flags');
  }
  public set flags(value: string) {
    this._flags = value;
  }
  public resetFlags() {
    this._flags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags;
  }

  // forward_dest - computed: false, optional: true, required: false
  private _forwardDest?: string; 
  public get forwardDest() {
    return this.getStringAttribute('forward_dest');
  }
  public set forwardDest(value: string) {
    this._forwardDest = value;
  }
  public resetForwardDest() {
    this._forwardDest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardDestInput() {
    return this._forwardDest;
  }

  // forward_source - computed: false, optional: true, required: false
  private _forwardSource?: string; 
  public get forwardSource() {
    return this.getStringAttribute('forward_source');
  }
  public set forwardSource(value: string) {
    this._forwardSource = value;
  }
  public resetForwardSource() {
    this._forwardSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardSourceInput() {
    return this._forwardSource;
  }

  // hash - computed: false, optional: true, required: false
  private _hash?: number; 
  public get hash() {
    return this.getNumberAttribute('hash');
  }
  public set hash(value: number) {
    this._hash = value;
  }
  public resetHash() {
    this._hash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash;
  }

  // hash_idx - computed: false, optional: true, required: false
  private _hashIdx?: number; 
  public get hashIdx() {
    return this.getNumberAttribute('hash_idx');
  }
  public set hashIdx(value: number) {
    this._hashIdx = value;
  }
  public resetHashIdx() {
    this._hashIdx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashIdxInput() {
    return this._hashIdx;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // ms100 - computed: false, optional: true, required: false
  private _ms100?: string; 
  public get ms100() {
    return this.getStringAttribute('ms100');
  }
  public set ms100(value: string) {
    this._ms100 = value;
  }
  public resetMs100() {
    this._ms100 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ms100Input() {
    return this._ms100;
  }

  // peak_rate - computed: false, optional: true, required: false
  private _peakRate?: number; 
  public get peakRate() {
    return this.getNumberAttribute('peak_rate');
  }
  public set peakRate(value: number) {
    this._peakRate = value;
  }
  public resetPeakRate() {
    this._peakRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peakRateInput() {
    return this._peakRate;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // rate - computed: false, optional: true, required: false
  private _rate?: number; 
  public get rate() {
    return this.getNumberAttribute('rate');
  }
  public set rate(value: number) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }

  // reverse_dest - computed: false, optional: true, required: false
  private _reverseDest?: string; 
  public get reverseDest() {
    return this.getStringAttribute('reverse_dest');
  }
  public set reverseDest(value: string) {
    this._reverseDest = value;
  }
  public resetReverseDest() {
    this._reverseDest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseDestInput() {
    return this._reverseDest;
  }

  // reverse_source - computed: false, optional: true, required: false
  private _reverseSource?: string; 
  public get reverseSource() {
    return this.getStringAttribute('reverse_source');
  }
  public set reverseSource(value: string) {
    this._reverseSource = value;
  }
  public resetReverseSource() {
    this._reverseSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseSourceInput() {
    return this._reverseSource;
  }

  // rserver_name - computed: false, optional: true, required: false
  private _rserverName?: string; 
  public get rserverName() {
    return this.getStringAttribute('rserver_name');
  }
  public set rserverName(value: string) {
    this._rserverName = value;
  }
  public resetRserverName() {
    this._rserverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rserverNameInput() {
    return this._rserverName;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // sip_call_id - computed: false, optional: true, required: false
  private _sipCallId?: string; 
  public get sipCallId() {
    return this.getStringAttribute('sip_call_id');
  }
  public set sipCallId(value: string) {
    this._sipCallId = value;
  }
  public resetSipCallId() {
    this._sipCallId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipCallIdInput() {
    return this._sipCallId;
  }

  // extension_fields_list - computed: false, optional: true, required: false
  private _extensionFieldsList = new DataThunderSessionsOperOperSessionListExtensionFieldsListStructList(this, "extension_fields_list", false);
  public get extensionFieldsList() {
    return this._extensionFieldsList;
  }
  public putExtensionFieldsList(value: DataThunderSessionsOperOperSessionListExtensionFieldsListStruct[] | cdktf.IResolvable) {
    this._extensionFieldsList.internalValue = value;
  }
  public resetExtensionFieldsList() {
    this._extensionFieldsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionFieldsListInput() {
    return this._extensionFieldsList.internalValue;
  }
}

export class DataThunderSessionsOperOperSessionListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSessionsOperOperSessionListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSessionsOperOperSessionListStructOutputReference {
    return new DataThunderSessionsOperOperSessionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSessionsOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#app DataThunderSessionsOper#app}
  */
  readonly app?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#app_category DataThunderSessionsOper#app_category}
  */
  readonly appCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#app_sessions DataThunderSessionsOper#app_sessions}
  */
  readonly appSessions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#application DataThunderSessionsOper#application}
  */
  readonly application?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#bucket DataThunderSessionsOper#bucket}
  */
  readonly bucket?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#check_inside_user DataThunderSessionsOper#check_inside_user}
  */
  readonly checkInsideUser?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#dest_port DataThunderSessionsOper#dest_port}
  */
  readonly destPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#dst_ipv4_addr DataThunderSessionsOper#dst_ipv4_addr}
  */
  readonly dstIpv4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#dst_ipv6_addr DataThunderSessionsOper#dst_ipv6_addr}
  */
  readonly dstIpv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#dst_ipv6_prefix DataThunderSessionsOper#dst_ipv6_prefix}
  */
  readonly dstIpv6Prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#ext_filter_name DataThunderSessionsOper#ext_filter_name}
  */
  readonly extFilterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#filter_type DataThunderSessionsOper#filter_type}
  */
  readonly filterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#full_width DataThunderSessionsOper#full_width}
  */
  readonly fullWidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#fw_dest_obj DataThunderSessionsOper#fw_dest_obj}
  */
  readonly fwDestObj?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#fw_dest_obj_grp DataThunderSessionsOper#fw_dest_obj_grp}
  */
  readonly fwDestObjGrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#fw_dest_rserver DataThunderSessionsOper#fw_dest_rserver}
  */
  readonly fwDestRserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#fw_dest_vserver DataThunderSessionsOper#fw_dest_vserver}
  */
  readonly fwDestVserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#fw_dest_zone DataThunderSessionsOper#fw_dest_zone}
  */
  readonly fwDestZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#fw_helper_sessions DataThunderSessionsOper#fw_helper_sessions}
  */
  readonly fwHelperSessions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#fw_ip_type DataThunderSessionsOper#fw_ip_type}
  */
  readonly fwIpType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#fw_rule DataThunderSessionsOper#fw_rule}
  */
  readonly fwRule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#fw_src_obj DataThunderSessionsOper#fw_src_obj}
  */
  readonly fwSrcObj?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#fw_src_obj_grp DataThunderSessionsOper#fw_src_obj_grp}
  */
  readonly fwSrcObjGrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#fw_src_rserver DataThunderSessionsOper#fw_src_rserver}
  */
  readonly fwSrcRserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#fw_src_zone DataThunderSessionsOper#fw_src_zone}
  */
  readonly fwSrcZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#gtp_msg_type DataThunderSessionsOper#gtp_msg_type}
  */
  readonly gtpMsgType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#gtp_version DataThunderSessionsOper#gtp_version}
  */
  readonly gtpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#imsi DataThunderSessionsOper#imsi}
  */
  readonly imsi?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#imsi_val DataThunderSessionsOper#imsi_val}
  */
  readonly imsiVal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#l4_protocol DataThunderSessionsOper#l4_protocol}
  */
  readonly l4Protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#msisdn DataThunderSessionsOper#msisdn}
  */
  readonly msisdn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#msisdn_val DataThunderSessionsOper#msisdn_val}
  */
  readonly msisdnVal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#name_str DataThunderSessionsOper#name_str}
  */
  readonly nameStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#nat_ipv4_addr DataThunderSessionsOper#nat_ipv4_addr}
  */
  readonly natIpv4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#nat_port DataThunderSessionsOper#nat_port}
  */
  readonly natPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#persist_dest_addr DataThunderSessionsOper#persist_dest_addr}
  */
  readonly persistDestAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#persist_dest_port DataThunderSessionsOper#persist_dest_port}
  */
  readonly persistDestPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#persist_ipv4 DataThunderSessionsOper#persist_ipv4}
  */
  readonly persistIpv4?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#persist_ipv6 DataThunderSessionsOper#persist_ipv6}
  */
  readonly persistIpv6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#persist_ipv6_type DataThunderSessionsOper#persist_ipv6_type}
  */
  readonly persistIpv6Type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#persist_source_addr DataThunderSessionsOper#persist_source_addr}
  */
  readonly persistSourceAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#persist_source_port DataThunderSessionsOper#persist_source_port}
  */
  readonly persistSourcePort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#persist_type DataThunderSessionsOper#persist_type}
  */
  readonly persistType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#persist_v6_dest_addr DataThunderSessionsOper#persist_v6_dest_addr}
  */
  readonly persistV6DestAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#persist_v6_dest_port DataThunderSessionsOper#persist_v6_dest_port}
  */
  readonly persistV6DestPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#persist_v6_source_addr DataThunderSessionsOper#persist_v6_source_addr}
  */
  readonly persistV6SourceAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#persist_v6_source_port DataThunderSessionsOper#persist_v6_source_port}
  */
  readonly persistV6SourcePort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#rev_dest_teid DataThunderSessionsOper#rev_dest_teid}
  */
  readonly revDestTeid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#session_id DataThunderSessionsOper#session_id}
  */
  readonly sessionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#sport_rate_limit_curr DataThunderSessionsOper#sport_rate_limit_curr}
  */
  readonly sportRateLimitCurr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#sport_rate_limit_exceed DataThunderSessionsOper#sport_rate_limit_exceed}
  */
  readonly sportRateLimitExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#src_ipv4_addr DataThunderSessionsOper#src_ipv4_addr}
  */
  readonly srcIpv4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#src_ipv6_addr DataThunderSessionsOper#src_ipv6_addr}
  */
  readonly srcIpv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#src_ipv6_prefix DataThunderSessionsOper#src_ipv6_prefix}
  */
  readonly srcIpv6Prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#src_port DataThunderSessionsOper#src_port}
  */
  readonly srcPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#thread DataThunderSessionsOper#thread}
  */
  readonly thread?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#total_sessions DataThunderSessionsOper#total_sessions}
  */
  readonly totalSessions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#uie DataThunderSessionsOper#uie}
  */
  readonly uie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#zone_name DataThunderSessionsOper#zone_name}
  */
  readonly zoneName?: string;
  /**
  * session_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#session_list DataThunderSessionsOper#session_list}
  */
  readonly sessionList?: DataThunderSessionsOperOperSessionListStruct[] | cdktf.IResolvable;
}

export function dataThunderSessionsOperOperToTerraform(struct?: DataThunderSessionsOperOperOutputReference | DataThunderSessionsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app: cdktf.stringToTerraform(struct!.app),
    app_category: cdktf.stringToTerraform(struct!.appCategory),
    app_sessions: cdktf.numberToTerraform(struct!.appSessions),
    application: cdktf.stringToTerraform(struct!.application),
    bucket: cdktf.numberToTerraform(struct!.bucket),
    check_inside_user: cdktf.numberToTerraform(struct!.checkInsideUser),
    dest_port: cdktf.numberToTerraform(struct!.destPort),
    dst_ipv4_addr: cdktf.stringToTerraform(struct!.dstIpv4Addr),
    dst_ipv6_addr: cdktf.stringToTerraform(struct!.dstIpv6Addr),
    dst_ipv6_prefix: cdktf.stringToTerraform(struct!.dstIpv6Prefix),
    ext_filter_name: cdktf.stringToTerraform(struct!.extFilterName),
    filter_type: cdktf.stringToTerraform(struct!.filterType),
    full_width: cdktf.numberToTerraform(struct!.fullWidth),
    fw_dest_obj: cdktf.stringToTerraform(struct!.fwDestObj),
    fw_dest_obj_grp: cdktf.stringToTerraform(struct!.fwDestObjGrp),
    fw_dest_rserver: cdktf.stringToTerraform(struct!.fwDestRserver),
    fw_dest_vserver: cdktf.stringToTerraform(struct!.fwDestVserver),
    fw_dest_zone: cdktf.stringToTerraform(struct!.fwDestZone),
    fw_helper_sessions: cdktf.numberToTerraform(struct!.fwHelperSessions),
    fw_ip_type: cdktf.stringToTerraform(struct!.fwIpType),
    fw_rule: cdktf.stringToTerraform(struct!.fwRule),
    fw_src_obj: cdktf.stringToTerraform(struct!.fwSrcObj),
    fw_src_obj_grp: cdktf.stringToTerraform(struct!.fwSrcObjGrp),
    fw_src_rserver: cdktf.stringToTerraform(struct!.fwSrcRserver),
    fw_src_zone: cdktf.stringToTerraform(struct!.fwSrcZone),
    gtp_msg_type: cdktf.stringToTerraform(struct!.gtpMsgType),
    gtp_version: cdktf.stringToTerraform(struct!.gtpVersion),
    imsi: cdktf.numberToTerraform(struct!.imsi),
    imsi_val: cdktf.stringToTerraform(struct!.imsiVal),
    l4_protocol: cdktf.stringToTerraform(struct!.l4Protocol),
    msisdn: cdktf.numberToTerraform(struct!.msisdn),
    msisdn_val: cdktf.stringToTerraform(struct!.msisdnVal),
    name_str: cdktf.stringToTerraform(struct!.nameStr),
    nat_ipv4_addr: cdktf.stringToTerraform(struct!.natIpv4Addr),
    nat_port: cdktf.numberToTerraform(struct!.natPort),
    persist_dest_addr: cdktf.stringToTerraform(struct!.persistDestAddr),
    persist_dest_port: cdktf.numberToTerraform(struct!.persistDestPort),
    persist_ipv4: cdktf.numberToTerraform(struct!.persistIpv4),
    persist_ipv6: cdktf.numberToTerraform(struct!.persistIpv6),
    persist_ipv6_type: cdktf.stringToTerraform(struct!.persistIpv6Type),
    persist_source_addr: cdktf.stringToTerraform(struct!.persistSourceAddr),
    persist_source_port: cdktf.numberToTerraform(struct!.persistSourcePort),
    persist_type: cdktf.stringToTerraform(struct!.persistType),
    persist_v6_dest_addr: cdktf.stringToTerraform(struct!.persistV6DestAddr),
    persist_v6_dest_port: cdktf.numberToTerraform(struct!.persistV6DestPort),
    persist_v6_source_addr: cdktf.stringToTerraform(struct!.persistV6SourceAddr),
    persist_v6_source_port: cdktf.numberToTerraform(struct!.persistV6SourcePort),
    rev_dest_teid: cdktf.numberToTerraform(struct!.revDestTeid),
    session_id: cdktf.stringToTerraform(struct!.sessionId),
    sport_rate_limit_curr: cdktf.numberToTerraform(struct!.sportRateLimitCurr),
    sport_rate_limit_exceed: cdktf.numberToTerraform(struct!.sportRateLimitExceed),
    src_ipv4_addr: cdktf.stringToTerraform(struct!.srcIpv4Addr),
    src_ipv6_addr: cdktf.stringToTerraform(struct!.srcIpv6Addr),
    src_ipv6_prefix: cdktf.stringToTerraform(struct!.srcIpv6Prefix),
    src_port: cdktf.numberToTerraform(struct!.srcPort),
    thread: cdktf.numberToTerraform(struct!.thread),
    total_sessions: cdktf.numberToTerraform(struct!.totalSessions),
    uie: cdktf.stringToTerraform(struct!.uie),
    zone_name: cdktf.stringToTerraform(struct!.zoneName),
    session_list: cdktf.listMapper(dataThunderSessionsOperOperSessionListStructToTerraform, true)(struct!.sessionList),
  }
}


export function dataThunderSessionsOperOperToHclTerraform(struct?: DataThunderSessionsOperOperOutputReference | DataThunderSessionsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app: {
      value: cdktf.stringToHclTerraform(struct!.app),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_category: {
      value: cdktf.stringToHclTerraform(struct!.appCategory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_sessions: {
      value: cdktf.numberToHclTerraform(struct!.appSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    application: {
      value: cdktf.stringToHclTerraform(struct!.application),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket: {
      value: cdktf.numberToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    check_inside_user: {
      value: cdktf.numberToHclTerraform(struct!.checkInsideUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dest_port: {
      value: cdktf.numberToHclTerraform(struct!.destPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_ipv4_addr: {
      value: cdktf.stringToHclTerraform(struct!.dstIpv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.dstIpv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_ipv6_prefix: {
      value: cdktf.stringToHclTerraform(struct!.dstIpv6Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ext_filter_name: {
      value: cdktf.stringToHclTerraform(struct!.extFilterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_type: {
      value: cdktf.stringToHclTerraform(struct!.filterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    full_width: {
      value: cdktf.numberToHclTerraform(struct!.fullWidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fw_dest_obj: {
      value: cdktf.stringToHclTerraform(struct!.fwDestObj),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fw_dest_obj_grp: {
      value: cdktf.stringToHclTerraform(struct!.fwDestObjGrp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fw_dest_rserver: {
      value: cdktf.stringToHclTerraform(struct!.fwDestRserver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fw_dest_vserver: {
      value: cdktf.stringToHclTerraform(struct!.fwDestVserver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fw_dest_zone: {
      value: cdktf.stringToHclTerraform(struct!.fwDestZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fw_helper_sessions: {
      value: cdktf.numberToHclTerraform(struct!.fwHelperSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fw_ip_type: {
      value: cdktf.stringToHclTerraform(struct!.fwIpType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fw_rule: {
      value: cdktf.stringToHclTerraform(struct!.fwRule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fw_src_obj: {
      value: cdktf.stringToHclTerraform(struct!.fwSrcObj),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fw_src_obj_grp: {
      value: cdktf.stringToHclTerraform(struct!.fwSrcObjGrp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fw_src_rserver: {
      value: cdktf.stringToHclTerraform(struct!.fwSrcRserver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fw_src_zone: {
      value: cdktf.stringToHclTerraform(struct!.fwSrcZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gtp_msg_type: {
      value: cdktf.stringToHclTerraform(struct!.gtpMsgType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gtp_version: {
      value: cdktf.stringToHclTerraform(struct!.gtpVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    imsi: {
      value: cdktf.numberToHclTerraform(struct!.imsi),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    imsi_val: {
      value: cdktf.stringToHclTerraform(struct!.imsiVal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    l4_protocol: {
      value: cdktf.stringToHclTerraform(struct!.l4Protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    msisdn: {
      value: cdktf.numberToHclTerraform(struct!.msisdn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msisdn_val: {
      value: cdktf.stringToHclTerraform(struct!.msisdnVal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_str: {
      value: cdktf.stringToHclTerraform(struct!.nameStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_ipv4_addr: {
      value: cdktf.stringToHclTerraform(struct!.natIpv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_port: {
      value: cdktf.numberToHclTerraform(struct!.natPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    persist_dest_addr: {
      value: cdktf.stringToHclTerraform(struct!.persistDestAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persist_dest_port: {
      value: cdktf.numberToHclTerraform(struct!.persistDestPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    persist_ipv4: {
      value: cdktf.numberToHclTerraform(struct!.persistIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    persist_ipv6: {
      value: cdktf.numberToHclTerraform(struct!.persistIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    persist_ipv6_type: {
      value: cdktf.stringToHclTerraform(struct!.persistIpv6Type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persist_source_addr: {
      value: cdktf.stringToHclTerraform(struct!.persistSourceAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persist_source_port: {
      value: cdktf.numberToHclTerraform(struct!.persistSourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    persist_type: {
      value: cdktf.stringToHclTerraform(struct!.persistType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persist_v6_dest_addr: {
      value: cdktf.stringToHclTerraform(struct!.persistV6DestAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persist_v6_dest_port: {
      value: cdktf.numberToHclTerraform(struct!.persistV6DestPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    persist_v6_source_addr: {
      value: cdktf.stringToHclTerraform(struct!.persistV6SourceAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persist_v6_source_port: {
      value: cdktf.numberToHclTerraform(struct!.persistV6SourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rev_dest_teid: {
      value: cdktf.numberToHclTerraform(struct!.revDestTeid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_id: {
      value: cdktf.stringToHclTerraform(struct!.sessionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sport_rate_limit_curr: {
      value: cdktf.numberToHclTerraform(struct!.sportRateLimitCurr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sport_rate_limit_exceed: {
      value: cdktf.numberToHclTerraform(struct!.sportRateLimitExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ipv4_addr: {
      value: cdktf.stringToHclTerraform(struct!.srcIpv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.srcIpv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_ipv6_prefix: {
      value: cdktf.stringToHclTerraform(struct!.srcIpv6Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_port: {
      value: cdktf.numberToHclTerraform(struct!.srcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    thread: {
      value: cdktf.numberToHclTerraform(struct!.thread),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_sessions: {
      value: cdktf.numberToHclTerraform(struct!.totalSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uie: {
      value: cdktf.stringToHclTerraform(struct!.uie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_name: {
      value: cdktf.stringToHclTerraform(struct!.zoneName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_list: {
      value: cdktf.listMapperHcl(dataThunderSessionsOperOperSessionListStructToHclTerraform, true)(struct!.sessionList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSessionsOperOperSessionListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSessionsOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSessionsOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._app !== undefined) {
      hasAnyValues = true;
      internalValueResult.app = this._app;
    }
    if (this._appCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.appCategory = this._appCategory;
    }
    if (this._appSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.appSessions = this._appSessions;
    }
    if (this._application !== undefined) {
      hasAnyValues = true;
      internalValueResult.application = this._application;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._checkInsideUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkInsideUser = this._checkInsideUser;
    }
    if (this._destPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destPort = this._destPort;
    }
    if (this._dstIpv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpv4Addr = this._dstIpv4Addr;
    }
    if (this._dstIpv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpv6Addr = this._dstIpv6Addr;
    }
    if (this._dstIpv6Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpv6Prefix = this._dstIpv6Prefix;
    }
    if (this._extFilterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.extFilterName = this._extFilterName;
    }
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    if (this._fullWidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullWidth = this._fullWidth;
    }
    if (this._fwDestObj !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwDestObj = this._fwDestObj;
    }
    if (this._fwDestObjGrp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwDestObjGrp = this._fwDestObjGrp;
    }
    if (this._fwDestRserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwDestRserver = this._fwDestRserver;
    }
    if (this._fwDestVserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwDestVserver = this._fwDestVserver;
    }
    if (this._fwDestZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwDestZone = this._fwDestZone;
    }
    if (this._fwHelperSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwHelperSessions = this._fwHelperSessions;
    }
    if (this._fwIpType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwIpType = this._fwIpType;
    }
    if (this._fwRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwRule = this._fwRule;
    }
    if (this._fwSrcObj !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwSrcObj = this._fwSrcObj;
    }
    if (this._fwSrcObjGrp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwSrcObjGrp = this._fwSrcObjGrp;
    }
    if (this._fwSrcRserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwSrcRserver = this._fwSrcRserver;
    }
    if (this._fwSrcZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwSrcZone = this._fwSrcZone;
    }
    if (this._gtpMsgType !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpMsgType = this._gtpMsgType;
    }
    if (this._gtpVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpVersion = this._gtpVersion;
    }
    if (this._imsi !== undefined) {
      hasAnyValues = true;
      internalValueResult.imsi = this._imsi;
    }
    if (this._imsiVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.imsiVal = this._imsiVal;
    }
    if (this._l4Protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4Protocol = this._l4Protocol;
    }
    if (this._msisdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.msisdn = this._msisdn;
    }
    if (this._msisdnVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.msisdnVal = this._msisdnVal;
    }
    if (this._nameStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameStr = this._nameStr;
    }
    if (this._natIpv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.natIpv4Addr = this._natIpv4Addr;
    }
    if (this._natPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPort = this._natPort;
    }
    if (this._persistDestAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistDestAddr = this._persistDestAddr;
    }
    if (this._persistDestPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistDestPort = this._persistDestPort;
    }
    if (this._persistIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistIpv4 = this._persistIpv4;
    }
    if (this._persistIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistIpv6 = this._persistIpv6;
    }
    if (this._persistIpv6Type !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistIpv6Type = this._persistIpv6Type;
    }
    if (this._persistSourceAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistSourceAddr = this._persistSourceAddr;
    }
    if (this._persistSourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistSourcePort = this._persistSourcePort;
    }
    if (this._persistType !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistType = this._persistType;
    }
    if (this._persistV6DestAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistV6DestAddr = this._persistV6DestAddr;
    }
    if (this._persistV6DestPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistV6DestPort = this._persistV6DestPort;
    }
    if (this._persistV6SourceAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistV6SourceAddr = this._persistV6SourceAddr;
    }
    if (this._persistV6SourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistV6SourcePort = this._persistV6SourcePort;
    }
    if (this._revDestTeid !== undefined) {
      hasAnyValues = true;
      internalValueResult.revDestTeid = this._revDestTeid;
    }
    if (this._sessionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionId = this._sessionId;
    }
    if (this._sportRateLimitCurr !== undefined) {
      hasAnyValues = true;
      internalValueResult.sportRateLimitCurr = this._sportRateLimitCurr;
    }
    if (this._sportRateLimitExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.sportRateLimitExceed = this._sportRateLimitExceed;
    }
    if (this._srcIpv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpv4Addr = this._srcIpv4Addr;
    }
    if (this._srcIpv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpv6Addr = this._srcIpv6Addr;
    }
    if (this._srcIpv6Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpv6Prefix = this._srcIpv6Prefix;
    }
    if (this._srcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPort = this._srcPort;
    }
    if (this._thread !== undefined) {
      hasAnyValues = true;
      internalValueResult.thread = this._thread;
    }
    if (this._totalSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalSessions = this._totalSessions;
    }
    if (this._uie !== undefined) {
      hasAnyValues = true;
      internalValueResult.uie = this._uie;
    }
    if (this._zoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneName = this._zoneName;
    }
    if (this._sessionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionList = this._sessionList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSessionsOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._app = undefined;
      this._appCategory = undefined;
      this._appSessions = undefined;
      this._application = undefined;
      this._bucket = undefined;
      this._checkInsideUser = undefined;
      this._destPort = undefined;
      this._dstIpv4Addr = undefined;
      this._dstIpv6Addr = undefined;
      this._dstIpv6Prefix = undefined;
      this._extFilterName = undefined;
      this._filterType = undefined;
      this._fullWidth = undefined;
      this._fwDestObj = undefined;
      this._fwDestObjGrp = undefined;
      this._fwDestRserver = undefined;
      this._fwDestVserver = undefined;
      this._fwDestZone = undefined;
      this._fwHelperSessions = undefined;
      this._fwIpType = undefined;
      this._fwRule = undefined;
      this._fwSrcObj = undefined;
      this._fwSrcObjGrp = undefined;
      this._fwSrcRserver = undefined;
      this._fwSrcZone = undefined;
      this._gtpMsgType = undefined;
      this._gtpVersion = undefined;
      this._imsi = undefined;
      this._imsiVal = undefined;
      this._l4Protocol = undefined;
      this._msisdn = undefined;
      this._msisdnVal = undefined;
      this._nameStr = undefined;
      this._natIpv4Addr = undefined;
      this._natPort = undefined;
      this._persistDestAddr = undefined;
      this._persistDestPort = undefined;
      this._persistIpv4 = undefined;
      this._persistIpv6 = undefined;
      this._persistIpv6Type = undefined;
      this._persistSourceAddr = undefined;
      this._persistSourcePort = undefined;
      this._persistType = undefined;
      this._persistV6DestAddr = undefined;
      this._persistV6DestPort = undefined;
      this._persistV6SourceAddr = undefined;
      this._persistV6SourcePort = undefined;
      this._revDestTeid = undefined;
      this._sessionId = undefined;
      this._sportRateLimitCurr = undefined;
      this._sportRateLimitExceed = undefined;
      this._srcIpv4Addr = undefined;
      this._srcIpv6Addr = undefined;
      this._srcIpv6Prefix = undefined;
      this._srcPort = undefined;
      this._thread = undefined;
      this._totalSessions = undefined;
      this._uie = undefined;
      this._zoneName = undefined;
      this._sessionList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._app = value.app;
      this._appCategory = value.appCategory;
      this._appSessions = value.appSessions;
      this._application = value.application;
      this._bucket = value.bucket;
      this._checkInsideUser = value.checkInsideUser;
      this._destPort = value.destPort;
      this._dstIpv4Addr = value.dstIpv4Addr;
      this._dstIpv6Addr = value.dstIpv6Addr;
      this._dstIpv6Prefix = value.dstIpv6Prefix;
      this._extFilterName = value.extFilterName;
      this._filterType = value.filterType;
      this._fullWidth = value.fullWidth;
      this._fwDestObj = value.fwDestObj;
      this._fwDestObjGrp = value.fwDestObjGrp;
      this._fwDestRserver = value.fwDestRserver;
      this._fwDestVserver = value.fwDestVserver;
      this._fwDestZone = value.fwDestZone;
      this._fwHelperSessions = value.fwHelperSessions;
      this._fwIpType = value.fwIpType;
      this._fwRule = value.fwRule;
      this._fwSrcObj = value.fwSrcObj;
      this._fwSrcObjGrp = value.fwSrcObjGrp;
      this._fwSrcRserver = value.fwSrcRserver;
      this._fwSrcZone = value.fwSrcZone;
      this._gtpMsgType = value.gtpMsgType;
      this._gtpVersion = value.gtpVersion;
      this._imsi = value.imsi;
      this._imsiVal = value.imsiVal;
      this._l4Protocol = value.l4Protocol;
      this._msisdn = value.msisdn;
      this._msisdnVal = value.msisdnVal;
      this._nameStr = value.nameStr;
      this._natIpv4Addr = value.natIpv4Addr;
      this._natPort = value.natPort;
      this._persistDestAddr = value.persistDestAddr;
      this._persistDestPort = value.persistDestPort;
      this._persistIpv4 = value.persistIpv4;
      this._persistIpv6 = value.persistIpv6;
      this._persistIpv6Type = value.persistIpv6Type;
      this._persistSourceAddr = value.persistSourceAddr;
      this._persistSourcePort = value.persistSourcePort;
      this._persistType = value.persistType;
      this._persistV6DestAddr = value.persistV6DestAddr;
      this._persistV6DestPort = value.persistV6DestPort;
      this._persistV6SourceAddr = value.persistV6SourceAddr;
      this._persistV6SourcePort = value.persistV6SourcePort;
      this._revDestTeid = value.revDestTeid;
      this._sessionId = value.sessionId;
      this._sportRateLimitCurr = value.sportRateLimitCurr;
      this._sportRateLimitExceed = value.sportRateLimitExceed;
      this._srcIpv4Addr = value.srcIpv4Addr;
      this._srcIpv6Addr = value.srcIpv6Addr;
      this._srcIpv6Prefix = value.srcIpv6Prefix;
      this._srcPort = value.srcPort;
      this._thread = value.thread;
      this._totalSessions = value.totalSessions;
      this._uie = value.uie;
      this._zoneName = value.zoneName;
      this._sessionList.internalValue = value.sessionList;
    }
  }

  // app - computed: false, optional: true, required: false
  private _app?: string; 
  public get app() {
    return this.getStringAttribute('app');
  }
  public set app(value: string) {
    this._app = value;
  }
  public resetApp() {
    this._app = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appInput() {
    return this._app;
  }

  // app_category - computed: false, optional: true, required: false
  private _appCategory?: string; 
  public get appCategory() {
    return this.getStringAttribute('app_category');
  }
  public set appCategory(value: string) {
    this._appCategory = value;
  }
  public resetAppCategory() {
    this._appCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appCategoryInput() {
    return this._appCategory;
  }

  // app_sessions - computed: false, optional: true, required: false
  private _appSessions?: number; 
  public get appSessions() {
    return this.getNumberAttribute('app_sessions');
  }
  public set appSessions(value: number) {
    this._appSessions = value;
  }
  public resetAppSessions() {
    this._appSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSessionsInput() {
    return this._appSessions;
  }

  // application - computed: false, optional: true, required: false
  private _application?: string; 
  public get application() {
    return this.getStringAttribute('application');
  }
  public set application(value: string) {
    this._application = value;
  }
  public resetApplication() {
    this._application = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: number; 
  public get bucket() {
    return this.getNumberAttribute('bucket');
  }
  public set bucket(value: number) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // check_inside_user - computed: false, optional: true, required: false
  private _checkInsideUser?: number; 
  public get checkInsideUser() {
    return this.getNumberAttribute('check_inside_user');
  }
  public set checkInsideUser(value: number) {
    this._checkInsideUser = value;
  }
  public resetCheckInsideUser() {
    this._checkInsideUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkInsideUserInput() {
    return this._checkInsideUser;
  }

  // dest_port - computed: false, optional: true, required: false
  private _destPort?: number; 
  public get destPort() {
    return this.getNumberAttribute('dest_port');
  }
  public set destPort(value: number) {
    this._destPort = value;
  }
  public resetDestPort() {
    this._destPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destPortInput() {
    return this._destPort;
  }

  // dst_ipv4_addr - computed: false, optional: true, required: false
  private _dstIpv4Addr?: string; 
  public get dstIpv4Addr() {
    return this.getStringAttribute('dst_ipv4_addr');
  }
  public set dstIpv4Addr(value: string) {
    this._dstIpv4Addr = value;
  }
  public resetDstIpv4Addr() {
    this._dstIpv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpv4AddrInput() {
    return this._dstIpv4Addr;
  }

  // dst_ipv6_addr - computed: false, optional: true, required: false
  private _dstIpv6Addr?: string; 
  public get dstIpv6Addr() {
    return this.getStringAttribute('dst_ipv6_addr');
  }
  public set dstIpv6Addr(value: string) {
    this._dstIpv6Addr = value;
  }
  public resetDstIpv6Addr() {
    this._dstIpv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpv6AddrInput() {
    return this._dstIpv6Addr;
  }

  // dst_ipv6_prefix - computed: false, optional: true, required: false
  private _dstIpv6Prefix?: string; 
  public get dstIpv6Prefix() {
    return this.getStringAttribute('dst_ipv6_prefix');
  }
  public set dstIpv6Prefix(value: string) {
    this._dstIpv6Prefix = value;
  }
  public resetDstIpv6Prefix() {
    this._dstIpv6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpv6PrefixInput() {
    return this._dstIpv6Prefix;
  }

  // ext_filter_name - computed: false, optional: true, required: false
  private _extFilterName?: string; 
  public get extFilterName() {
    return this.getStringAttribute('ext_filter_name');
  }
  public set extFilterName(value: string) {
    this._extFilterName = value;
  }
  public resetExtFilterName() {
    this._extFilterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extFilterNameInput() {
    return this._extFilterName;
  }

  // filter_type - computed: false, optional: true, required: false
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  public resetFilterType() {
    this._filterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }

  // full_width - computed: false, optional: true, required: false
  private _fullWidth?: number; 
  public get fullWidth() {
    return this.getNumberAttribute('full_width');
  }
  public set fullWidth(value: number) {
    this._fullWidth = value;
  }
  public resetFullWidth() {
    this._fullWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullWidthInput() {
    return this._fullWidth;
  }

  // fw_dest_obj - computed: false, optional: true, required: false
  private _fwDestObj?: string; 
  public get fwDestObj() {
    return this.getStringAttribute('fw_dest_obj');
  }
  public set fwDestObj(value: string) {
    this._fwDestObj = value;
  }
  public resetFwDestObj() {
    this._fwDestObj = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwDestObjInput() {
    return this._fwDestObj;
  }

  // fw_dest_obj_grp - computed: false, optional: true, required: false
  private _fwDestObjGrp?: string; 
  public get fwDestObjGrp() {
    return this.getStringAttribute('fw_dest_obj_grp');
  }
  public set fwDestObjGrp(value: string) {
    this._fwDestObjGrp = value;
  }
  public resetFwDestObjGrp() {
    this._fwDestObjGrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwDestObjGrpInput() {
    return this._fwDestObjGrp;
  }

  // fw_dest_rserver - computed: false, optional: true, required: false
  private _fwDestRserver?: string; 
  public get fwDestRserver() {
    return this.getStringAttribute('fw_dest_rserver');
  }
  public set fwDestRserver(value: string) {
    this._fwDestRserver = value;
  }
  public resetFwDestRserver() {
    this._fwDestRserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwDestRserverInput() {
    return this._fwDestRserver;
  }

  // fw_dest_vserver - computed: false, optional: true, required: false
  private _fwDestVserver?: string; 
  public get fwDestVserver() {
    return this.getStringAttribute('fw_dest_vserver');
  }
  public set fwDestVserver(value: string) {
    this._fwDestVserver = value;
  }
  public resetFwDestVserver() {
    this._fwDestVserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwDestVserverInput() {
    return this._fwDestVserver;
  }

  // fw_dest_zone - computed: false, optional: true, required: false
  private _fwDestZone?: string; 
  public get fwDestZone() {
    return this.getStringAttribute('fw_dest_zone');
  }
  public set fwDestZone(value: string) {
    this._fwDestZone = value;
  }
  public resetFwDestZone() {
    this._fwDestZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwDestZoneInput() {
    return this._fwDestZone;
  }

  // fw_helper_sessions - computed: false, optional: true, required: false
  private _fwHelperSessions?: number; 
  public get fwHelperSessions() {
    return this.getNumberAttribute('fw_helper_sessions');
  }
  public set fwHelperSessions(value: number) {
    this._fwHelperSessions = value;
  }
  public resetFwHelperSessions() {
    this._fwHelperSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwHelperSessionsInput() {
    return this._fwHelperSessions;
  }

  // fw_ip_type - computed: false, optional: true, required: false
  private _fwIpType?: string; 
  public get fwIpType() {
    return this.getStringAttribute('fw_ip_type');
  }
  public set fwIpType(value: string) {
    this._fwIpType = value;
  }
  public resetFwIpType() {
    this._fwIpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwIpTypeInput() {
    return this._fwIpType;
  }

  // fw_rule - computed: false, optional: true, required: false
  private _fwRule?: string; 
  public get fwRule() {
    return this.getStringAttribute('fw_rule');
  }
  public set fwRule(value: string) {
    this._fwRule = value;
  }
  public resetFwRule() {
    this._fwRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwRuleInput() {
    return this._fwRule;
  }

  // fw_src_obj - computed: false, optional: true, required: false
  private _fwSrcObj?: string; 
  public get fwSrcObj() {
    return this.getStringAttribute('fw_src_obj');
  }
  public set fwSrcObj(value: string) {
    this._fwSrcObj = value;
  }
  public resetFwSrcObj() {
    this._fwSrcObj = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwSrcObjInput() {
    return this._fwSrcObj;
  }

  // fw_src_obj_grp - computed: false, optional: true, required: false
  private _fwSrcObjGrp?: string; 
  public get fwSrcObjGrp() {
    return this.getStringAttribute('fw_src_obj_grp');
  }
  public set fwSrcObjGrp(value: string) {
    this._fwSrcObjGrp = value;
  }
  public resetFwSrcObjGrp() {
    this._fwSrcObjGrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwSrcObjGrpInput() {
    return this._fwSrcObjGrp;
  }

  // fw_src_rserver - computed: false, optional: true, required: false
  private _fwSrcRserver?: string; 
  public get fwSrcRserver() {
    return this.getStringAttribute('fw_src_rserver');
  }
  public set fwSrcRserver(value: string) {
    this._fwSrcRserver = value;
  }
  public resetFwSrcRserver() {
    this._fwSrcRserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwSrcRserverInput() {
    return this._fwSrcRserver;
  }

  // fw_src_zone - computed: false, optional: true, required: false
  private _fwSrcZone?: string; 
  public get fwSrcZone() {
    return this.getStringAttribute('fw_src_zone');
  }
  public set fwSrcZone(value: string) {
    this._fwSrcZone = value;
  }
  public resetFwSrcZone() {
    this._fwSrcZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwSrcZoneInput() {
    return this._fwSrcZone;
  }

  // gtp_msg_type - computed: false, optional: true, required: false
  private _gtpMsgType?: string; 
  public get gtpMsgType() {
    return this.getStringAttribute('gtp_msg_type');
  }
  public set gtpMsgType(value: string) {
    this._gtpMsgType = value;
  }
  public resetGtpMsgType() {
    this._gtpMsgType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpMsgTypeInput() {
    return this._gtpMsgType;
  }

  // gtp_version - computed: false, optional: true, required: false
  private _gtpVersion?: string; 
  public get gtpVersion() {
    return this.getStringAttribute('gtp_version');
  }
  public set gtpVersion(value: string) {
    this._gtpVersion = value;
  }
  public resetGtpVersion() {
    this._gtpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpVersionInput() {
    return this._gtpVersion;
  }

  // imsi - computed: false, optional: true, required: false
  private _imsi?: number; 
  public get imsi() {
    return this.getNumberAttribute('imsi');
  }
  public set imsi(value: number) {
    this._imsi = value;
  }
  public resetImsi() {
    this._imsi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imsiInput() {
    return this._imsi;
  }

  // imsi_val - computed: false, optional: true, required: false
  private _imsiVal?: string; 
  public get imsiVal() {
    return this.getStringAttribute('imsi_val');
  }
  public set imsiVal(value: string) {
    this._imsiVal = value;
  }
  public resetImsiVal() {
    this._imsiVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imsiValInput() {
    return this._imsiVal;
  }

  // l4_protocol - computed: false, optional: true, required: false
  private _l4Protocol?: string; 
  public get l4Protocol() {
    return this.getStringAttribute('l4_protocol');
  }
  public set l4Protocol(value: string) {
    this._l4Protocol = value;
  }
  public resetL4Protocol() {
    this._l4Protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4ProtocolInput() {
    return this._l4Protocol;
  }

  // msisdn - computed: false, optional: true, required: false
  private _msisdn?: number; 
  public get msisdn() {
    return this.getNumberAttribute('msisdn');
  }
  public set msisdn(value: number) {
    this._msisdn = value;
  }
  public resetMsisdn() {
    this._msisdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msisdnInput() {
    return this._msisdn;
  }

  // msisdn_val - computed: false, optional: true, required: false
  private _msisdnVal?: string; 
  public get msisdnVal() {
    return this.getStringAttribute('msisdn_val');
  }
  public set msisdnVal(value: string) {
    this._msisdnVal = value;
  }
  public resetMsisdnVal() {
    this._msisdnVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msisdnValInput() {
    return this._msisdnVal;
  }

  // name_str - computed: false, optional: true, required: false
  private _nameStr?: string; 
  public get nameStr() {
    return this.getStringAttribute('name_str');
  }
  public set nameStr(value: string) {
    this._nameStr = value;
  }
  public resetNameStr() {
    this._nameStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameStrInput() {
    return this._nameStr;
  }

  // nat_ipv4_addr - computed: false, optional: true, required: false
  private _natIpv4Addr?: string; 
  public get natIpv4Addr() {
    return this.getStringAttribute('nat_ipv4_addr');
  }
  public set natIpv4Addr(value: string) {
    this._natIpv4Addr = value;
  }
  public resetNatIpv4Addr() {
    this._natIpv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpv4AddrInput() {
    return this._natIpv4Addr;
  }

  // nat_port - computed: false, optional: true, required: false
  private _natPort?: number; 
  public get natPort() {
    return this.getNumberAttribute('nat_port');
  }
  public set natPort(value: number) {
    this._natPort = value;
  }
  public resetNatPort() {
    this._natPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPortInput() {
    return this._natPort;
  }

  // persist_dest_addr - computed: false, optional: true, required: false
  private _persistDestAddr?: string; 
  public get persistDestAddr() {
    return this.getStringAttribute('persist_dest_addr');
  }
  public set persistDestAddr(value: string) {
    this._persistDestAddr = value;
  }
  public resetPersistDestAddr() {
    this._persistDestAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistDestAddrInput() {
    return this._persistDestAddr;
  }

  // persist_dest_port - computed: false, optional: true, required: false
  private _persistDestPort?: number; 
  public get persistDestPort() {
    return this.getNumberAttribute('persist_dest_port');
  }
  public set persistDestPort(value: number) {
    this._persistDestPort = value;
  }
  public resetPersistDestPort() {
    this._persistDestPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistDestPortInput() {
    return this._persistDestPort;
  }

  // persist_ipv4 - computed: false, optional: true, required: false
  private _persistIpv4?: number; 
  public get persistIpv4() {
    return this.getNumberAttribute('persist_ipv4');
  }
  public set persistIpv4(value: number) {
    this._persistIpv4 = value;
  }
  public resetPersistIpv4() {
    this._persistIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistIpv4Input() {
    return this._persistIpv4;
  }

  // persist_ipv6 - computed: false, optional: true, required: false
  private _persistIpv6?: number; 
  public get persistIpv6() {
    return this.getNumberAttribute('persist_ipv6');
  }
  public set persistIpv6(value: number) {
    this._persistIpv6 = value;
  }
  public resetPersistIpv6() {
    this._persistIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistIpv6Input() {
    return this._persistIpv6;
  }

  // persist_ipv6_type - computed: false, optional: true, required: false
  private _persistIpv6Type?: string; 
  public get persistIpv6Type() {
    return this.getStringAttribute('persist_ipv6_type');
  }
  public set persistIpv6Type(value: string) {
    this._persistIpv6Type = value;
  }
  public resetPersistIpv6Type() {
    this._persistIpv6Type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistIpv6TypeInput() {
    return this._persistIpv6Type;
  }

  // persist_source_addr - computed: false, optional: true, required: false
  private _persistSourceAddr?: string; 
  public get persistSourceAddr() {
    return this.getStringAttribute('persist_source_addr');
  }
  public set persistSourceAddr(value: string) {
    this._persistSourceAddr = value;
  }
  public resetPersistSourceAddr() {
    this._persistSourceAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistSourceAddrInput() {
    return this._persistSourceAddr;
  }

  // persist_source_port - computed: false, optional: true, required: false
  private _persistSourcePort?: number; 
  public get persistSourcePort() {
    return this.getNumberAttribute('persist_source_port');
  }
  public set persistSourcePort(value: number) {
    this._persistSourcePort = value;
  }
  public resetPersistSourcePort() {
    this._persistSourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistSourcePortInput() {
    return this._persistSourcePort;
  }

  // persist_type - computed: false, optional: true, required: false
  private _persistType?: string; 
  public get persistType() {
    return this.getStringAttribute('persist_type');
  }
  public set persistType(value: string) {
    this._persistType = value;
  }
  public resetPersistType() {
    this._persistType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistTypeInput() {
    return this._persistType;
  }

  // persist_v6_dest_addr - computed: false, optional: true, required: false
  private _persistV6DestAddr?: string; 
  public get persistV6DestAddr() {
    return this.getStringAttribute('persist_v6_dest_addr');
  }
  public set persistV6DestAddr(value: string) {
    this._persistV6DestAddr = value;
  }
  public resetPersistV6DestAddr() {
    this._persistV6DestAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistV6DestAddrInput() {
    return this._persistV6DestAddr;
  }

  // persist_v6_dest_port - computed: false, optional: true, required: false
  private _persistV6DestPort?: number; 
  public get persistV6DestPort() {
    return this.getNumberAttribute('persist_v6_dest_port');
  }
  public set persistV6DestPort(value: number) {
    this._persistV6DestPort = value;
  }
  public resetPersistV6DestPort() {
    this._persistV6DestPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistV6DestPortInput() {
    return this._persistV6DestPort;
  }

  // persist_v6_source_addr - computed: false, optional: true, required: false
  private _persistV6SourceAddr?: string; 
  public get persistV6SourceAddr() {
    return this.getStringAttribute('persist_v6_source_addr');
  }
  public set persistV6SourceAddr(value: string) {
    this._persistV6SourceAddr = value;
  }
  public resetPersistV6SourceAddr() {
    this._persistV6SourceAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistV6SourceAddrInput() {
    return this._persistV6SourceAddr;
  }

  // persist_v6_source_port - computed: false, optional: true, required: false
  private _persistV6SourcePort?: number; 
  public get persistV6SourcePort() {
    return this.getNumberAttribute('persist_v6_source_port');
  }
  public set persistV6SourcePort(value: number) {
    this._persistV6SourcePort = value;
  }
  public resetPersistV6SourcePort() {
    this._persistV6SourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistV6SourcePortInput() {
    return this._persistV6SourcePort;
  }

  // rev_dest_teid - computed: false, optional: true, required: false
  private _revDestTeid?: number; 
  public get revDestTeid() {
    return this.getNumberAttribute('rev_dest_teid');
  }
  public set revDestTeid(value: number) {
    this._revDestTeid = value;
  }
  public resetRevDestTeid() {
    this._revDestTeid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revDestTeidInput() {
    return this._revDestTeid;
  }

  // session_id - computed: false, optional: true, required: false
  private _sessionId?: string; 
  public get sessionId() {
    return this.getStringAttribute('session_id');
  }
  public set sessionId(value: string) {
    this._sessionId = value;
  }
  public resetSessionId() {
    this._sessionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionIdInput() {
    return this._sessionId;
  }

  // sport_rate_limit_curr - computed: false, optional: true, required: false
  private _sportRateLimitCurr?: number; 
  public get sportRateLimitCurr() {
    return this.getNumberAttribute('sport_rate_limit_curr');
  }
  public set sportRateLimitCurr(value: number) {
    this._sportRateLimitCurr = value;
  }
  public resetSportRateLimitCurr() {
    this._sportRateLimitCurr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sportRateLimitCurrInput() {
    return this._sportRateLimitCurr;
  }

  // sport_rate_limit_exceed - computed: false, optional: true, required: false
  private _sportRateLimitExceed?: number; 
  public get sportRateLimitExceed() {
    return this.getNumberAttribute('sport_rate_limit_exceed');
  }
  public set sportRateLimitExceed(value: number) {
    this._sportRateLimitExceed = value;
  }
  public resetSportRateLimitExceed() {
    this._sportRateLimitExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sportRateLimitExceedInput() {
    return this._sportRateLimitExceed;
  }

  // src_ipv4_addr - computed: false, optional: true, required: false
  private _srcIpv4Addr?: string; 
  public get srcIpv4Addr() {
    return this.getStringAttribute('src_ipv4_addr');
  }
  public set srcIpv4Addr(value: string) {
    this._srcIpv4Addr = value;
  }
  public resetSrcIpv4Addr() {
    this._srcIpv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpv4AddrInput() {
    return this._srcIpv4Addr;
  }

  // src_ipv6_addr - computed: false, optional: true, required: false
  private _srcIpv6Addr?: string; 
  public get srcIpv6Addr() {
    return this.getStringAttribute('src_ipv6_addr');
  }
  public set srcIpv6Addr(value: string) {
    this._srcIpv6Addr = value;
  }
  public resetSrcIpv6Addr() {
    this._srcIpv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpv6AddrInput() {
    return this._srcIpv6Addr;
  }

  // src_ipv6_prefix - computed: false, optional: true, required: false
  private _srcIpv6Prefix?: string; 
  public get srcIpv6Prefix() {
    return this.getStringAttribute('src_ipv6_prefix');
  }
  public set srcIpv6Prefix(value: string) {
    this._srcIpv6Prefix = value;
  }
  public resetSrcIpv6Prefix() {
    this._srcIpv6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpv6PrefixInput() {
    return this._srcIpv6Prefix;
  }

  // src_port - computed: false, optional: true, required: false
  private _srcPort?: number; 
  public get srcPort() {
    return this.getNumberAttribute('src_port');
  }
  public set srcPort(value: number) {
    this._srcPort = value;
  }
  public resetSrcPort() {
    this._srcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortInput() {
    return this._srcPort;
  }

  // thread - computed: false, optional: true, required: false
  private _thread?: number; 
  public get thread() {
    return this.getNumberAttribute('thread');
  }
  public set thread(value: number) {
    this._thread = value;
  }
  public resetThread() {
    this._thread = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadInput() {
    return this._thread;
  }

  // total_sessions - computed: false, optional: true, required: false
  private _totalSessions?: number; 
  public get totalSessions() {
    return this.getNumberAttribute('total_sessions');
  }
  public set totalSessions(value: number) {
    this._totalSessions = value;
  }
  public resetTotalSessions() {
    this._totalSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalSessionsInput() {
    return this._totalSessions;
  }

  // uie - computed: false, optional: true, required: false
  private _uie?: string; 
  public get uie() {
    return this.getStringAttribute('uie');
  }
  public set uie(value: string) {
    this._uie = value;
  }
  public resetUie() {
    this._uie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uieInput() {
    return this._uie;
  }

  // zone_name - computed: false, optional: true, required: false
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  public resetZoneName() {
    this._zoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // session_list - computed: false, optional: true, required: false
  private _sessionList = new DataThunderSessionsOperOperSessionListStructList(this, "session_list", false);
  public get sessionList() {
    return this._sessionList;
  }
  public putSessionList(value: DataThunderSessionsOperOperSessionListStruct[] | cdktf.IResolvable) {
    this._sessionList.internalValue = value;
  }
  public resetSessionList() {
    this._sessionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionListInput() {
    return this._sessionList.internalValue;
  }
}
export interface DataThunderSessionsOperSmpOperSessionSmpListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#alloc DataThunderSessionsOper#alloc}
  */
  readonly alloc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#alloc_fail DataThunderSessionsOper#alloc_fail}
  */
  readonly allocFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#free DataThunderSessionsOper#free}
  */
  readonly free?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#type DataThunderSessionsOper#type}
  */
  readonly type?: string;
}

export function dataThunderSessionsOperSmpOperSessionSmpListStructToTerraform(struct?: DataThunderSessionsOperSmpOperSessionSmpListStruct | cdktf.IResolvable): any {
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


export function dataThunderSessionsOperSmpOperSessionSmpListStructToHclTerraform(struct?: DataThunderSessionsOperSmpOperSessionSmpListStruct | cdktf.IResolvable): any {
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

export class DataThunderSessionsOperSmpOperSessionSmpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSessionsOperSmpOperSessionSmpListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderSessionsOperSmpOperSessionSmpListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderSessionsOperSmpOperSessionSmpListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSessionsOperSmpOperSessionSmpListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSessionsOperSmpOperSessionSmpListStructOutputReference {
    return new DataThunderSessionsOperSmpOperSessionSmpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSessionsOperSmpOper {
  /**
  * session_smp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#session_smp_list DataThunderSessionsOper#session_smp_list}
  */
  readonly sessionSmpList?: DataThunderSessionsOperSmpOperSessionSmpListStruct[] | cdktf.IResolvable;
}

export function dataThunderSessionsOperSmpOperToTerraform(struct?: DataThunderSessionsOperSmpOperOutputReference | DataThunderSessionsOperSmpOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    session_smp_list: cdktf.listMapper(dataThunderSessionsOperSmpOperSessionSmpListStructToTerraform, true)(struct!.sessionSmpList),
  }
}


export function dataThunderSessionsOperSmpOperToHclTerraform(struct?: DataThunderSessionsOperSmpOperOutputReference | DataThunderSessionsOperSmpOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    session_smp_list: {
      value: cdktf.listMapperHcl(dataThunderSessionsOperSmpOperSessionSmpListStructToHclTerraform, true)(struct!.sessionSmpList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSessionsOperSmpOperSessionSmpListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSessionsOperSmpOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSessionsOperSmpOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sessionSmpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionSmpList = this._sessionSmpList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSessionsOperSmpOper | undefined) {
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
  private _sessionSmpList = new DataThunderSessionsOperSmpOperSessionSmpListStructList(this, "session_smp_list", false);
  public get sessionSmpList() {
    return this._sessionSmpList;
  }
  public putSessionSmpList(value: DataThunderSessionsOperSmpOperSessionSmpListStruct[] | cdktf.IResolvable) {
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
export interface DataThunderSessionsOperSmp {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#oper DataThunderSessionsOper#oper}
  */
  readonly oper?: DataThunderSessionsOperSmpOper;
}

export function dataThunderSessionsOperSmpToTerraform(struct?: DataThunderSessionsOperSmpOutputReference | DataThunderSessionsOperSmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderSessionsOperSmpOperToTerraform(struct!.oper),
  }
}


export function dataThunderSessionsOperSmpToHclTerraform(struct?: DataThunderSessionsOperSmpOutputReference | DataThunderSessionsOperSmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderSessionsOperSmpOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSessionsOperSmpOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSessionsOperSmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSessionsOperSmp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSessionsOperSmp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderSessionsOperSmpOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSessionsOperSmpOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}
export interface DataThunderSessionsOperSmpTableOperEntryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#dst4 DataThunderSessionsOper#dst4}
  */
  readonly dst4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#dst6 DataThunderSessionsOper#dst6}
  */
  readonly dst6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#dstport DataThunderSessionsOper#dstport}
  */
  readonly dstport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#payload DataThunderSessionsOper#payload}
  */
  readonly payload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#src4 DataThunderSessionsOper#src4}
  */
  readonly src4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#src6 DataThunderSessionsOper#src6}
  */
  readonly src6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#srcport DataThunderSessionsOper#srcport}
  */
  readonly srcport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#ttl DataThunderSessionsOper#ttl}
  */
  readonly ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#type DataThunderSessionsOper#type}
  */
  readonly type?: string;
}

export function dataThunderSessionsOperSmpTableOperEntryListStructToTerraform(struct?: DataThunderSessionsOperSmpTableOperEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst4: cdktf.stringToTerraform(struct!.dst4),
    dst6: cdktf.stringToTerraform(struct!.dst6),
    dstport: cdktf.numberToTerraform(struct!.dstport),
    payload: cdktf.stringToTerraform(struct!.payload),
    src4: cdktf.stringToTerraform(struct!.src4),
    src6: cdktf.stringToTerraform(struct!.src6),
    srcport: cdktf.numberToTerraform(struct!.srcport),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataThunderSessionsOperSmpTableOperEntryListStructToHclTerraform(struct?: DataThunderSessionsOperSmpTableOperEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst4: {
      value: cdktf.stringToHclTerraform(struct!.dst4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst6: {
      value: cdktf.stringToHclTerraform(struct!.dst6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dstport: {
      value: cdktf.numberToHclTerraform(struct!.dstport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    payload: {
      value: cdktf.stringToHclTerraform(struct!.payload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src4: {
      value: cdktf.stringToHclTerraform(struct!.src4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src6: {
      value: cdktf.stringToHclTerraform(struct!.src6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srcport: {
      value: cdktf.numberToHclTerraform(struct!.srcport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
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

export class DataThunderSessionsOperSmpTableOperEntryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSessionsOperSmpTableOperEntryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dst4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dst4 = this._dst4;
    }
    if (this._dst6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dst6 = this._dst6;
    }
    if (this._dstport !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstport = this._dstport;
    }
    if (this._payload !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload;
    }
    if (this._src4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.src4 = this._src4;
    }
    if (this._src6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.src6 = this._src6;
    }
    if (this._srcport !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcport = this._srcport;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSessionsOperSmpTableOperEntryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dst4 = undefined;
      this._dst6 = undefined;
      this._dstport = undefined;
      this._payload = undefined;
      this._src4 = undefined;
      this._src6 = undefined;
      this._srcport = undefined;
      this._ttl = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dst4 = value.dst4;
      this._dst6 = value.dst6;
      this._dstport = value.dstport;
      this._payload = value.payload;
      this._src4 = value.src4;
      this._src6 = value.src6;
      this._srcport = value.srcport;
      this._ttl = value.ttl;
      this._type = value.type;
    }
  }

  // dst4 - computed: false, optional: true, required: false
  private _dst4?: string; 
  public get dst4() {
    return this.getStringAttribute('dst4');
  }
  public set dst4(value: string) {
    this._dst4 = value;
  }
  public resetDst4() {
    this._dst4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dst4Input() {
    return this._dst4;
  }

  // dst6 - computed: false, optional: true, required: false
  private _dst6?: string; 
  public get dst6() {
    return this.getStringAttribute('dst6');
  }
  public set dst6(value: string) {
    this._dst6 = value;
  }
  public resetDst6() {
    this._dst6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dst6Input() {
    return this._dst6;
  }

  // dstport - computed: false, optional: true, required: false
  private _dstport?: number; 
  public get dstport() {
    return this.getNumberAttribute('dstport');
  }
  public set dstport(value: number) {
    this._dstport = value;
  }
  public resetDstport() {
    this._dstport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstportInput() {
    return this._dstport;
  }

  // payload - computed: false, optional: true, required: false
  private _payload?: string; 
  public get payload() {
    return this.getStringAttribute('payload');
  }
  public set payload(value: string) {
    this._payload = value;
  }
  public resetPayload() {
    this._payload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }

  // src4 - computed: false, optional: true, required: false
  private _src4?: string; 
  public get src4() {
    return this.getStringAttribute('src4');
  }
  public set src4(value: string) {
    this._src4 = value;
  }
  public resetSrc4() {
    this._src4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get src4Input() {
    return this._src4;
  }

  // src6 - computed: false, optional: true, required: false
  private _src6?: string; 
  public get src6() {
    return this.getStringAttribute('src6');
  }
  public set src6(value: string) {
    this._src6 = value;
  }
  public resetSrc6() {
    this._src6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get src6Input() {
    return this._src6;
  }

  // srcport - computed: false, optional: true, required: false
  private _srcport?: number; 
  public get srcport() {
    return this.getNumberAttribute('srcport');
  }
  public set srcport(value: number) {
    this._srcport = value;
  }
  public resetSrcport() {
    this._srcport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcportInput() {
    return this._srcport;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
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

export class DataThunderSessionsOperSmpTableOperEntryListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSessionsOperSmpTableOperEntryListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSessionsOperSmpTableOperEntryListStructOutputReference {
    return new DataThunderSessionsOperSmpTableOperEntryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSessionsOperSmpTableOper {
  /**
  * entry_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#entry_list DataThunderSessionsOper#entry_list}
  */
  readonly entryList?: DataThunderSessionsOperSmpTableOperEntryListStruct[] | cdktf.IResolvable;
}

export function dataThunderSessionsOperSmpTableOperToTerraform(struct?: DataThunderSessionsOperSmpTableOperOutputReference | DataThunderSessionsOperSmpTableOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry_list: cdktf.listMapper(dataThunderSessionsOperSmpTableOperEntryListStructToTerraform, true)(struct!.entryList),
  }
}


export function dataThunderSessionsOperSmpTableOperToHclTerraform(struct?: DataThunderSessionsOperSmpTableOperOutputReference | DataThunderSessionsOperSmpTableOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry_list: {
      value: cdktf.listMapperHcl(dataThunderSessionsOperSmpTableOperEntryListStructToHclTerraform, true)(struct!.entryList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSessionsOperSmpTableOperEntryListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSessionsOperSmpTableOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSessionsOperSmpTableOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryList = this._entryList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSessionsOperSmpTableOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entryList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entryList.internalValue = value.entryList;
    }
  }

  // entry_list - computed: false, optional: true, required: false
  private _entryList = new DataThunderSessionsOperSmpTableOperEntryListStructList(this, "entry_list", false);
  public get entryList() {
    return this._entryList;
  }
  public putEntryList(value: DataThunderSessionsOperSmpTableOperEntryListStruct[] | cdktf.IResolvable) {
    this._entryList.internalValue = value;
  }
  public resetEntryList() {
    this._entryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryListInput() {
    return this._entryList.internalValue;
  }
}
export interface DataThunderSessionsOperSmpTable {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#oper DataThunderSessionsOper#oper}
  */
  readonly oper?: DataThunderSessionsOperSmpTableOper;
}

export function dataThunderSessionsOperSmpTableToTerraform(struct?: DataThunderSessionsOperSmpTableOutputReference | DataThunderSessionsOperSmpTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderSessionsOperSmpTableOperToTerraform(struct!.oper),
  }
}


export function dataThunderSessionsOperSmpTableToHclTerraform(struct?: DataThunderSessionsOperSmpTableOutputReference | DataThunderSessionsOperSmpTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderSessionsOperSmpTableOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSessionsOperSmpTableOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSessionsOperSmpTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSessionsOperSmpTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSessionsOperSmpTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderSessionsOperSmpTableOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSessionsOperSmpTableOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper thunder_sessions_oper}
*/
export class DataThunderSessionsOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_sessions_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSessionsOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSessionsOper to import
  * @param importFromId The id of the existing DataThunderSessionsOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSessionsOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_sessions_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/sessions_oper thunder_sessions_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSessionsOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSessionsOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_sessions_oper',
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
    this._ext.internalValue = config.ext;
    this._oper.internalValue = config.oper;
    this._smp.internalValue = config.smp;
    this._smpTable.internalValue = config.smpTable;
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

  // ext - computed: false, optional: true, required: false
  private _ext = new DataThunderSessionsOperExtOutputReference(this, "ext");
  public get ext() {
    return this._ext;
  }
  public putExt(value: DataThunderSessionsOperExt) {
    this._ext.internalValue = value;
  }
  public resetExt() {
    this._ext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extInput() {
    return this._ext.internalValue;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderSessionsOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSessionsOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // smp - computed: false, optional: true, required: false
  private _smp = new DataThunderSessionsOperSmpOutputReference(this, "smp");
  public get smp() {
    return this._smp;
  }
  public putSmp(value: DataThunderSessionsOperSmp) {
    this._smp.internalValue = value;
  }
  public resetSmp() {
    this._smp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smpInput() {
    return this._smp.internalValue;
  }

  // smp_table - computed: false, optional: true, required: false
  private _smpTable = new DataThunderSessionsOperSmpTableOutputReference(this, "smp_table");
  public get smpTable() {
    return this._smpTable;
  }
  public putSmpTable(value: DataThunderSessionsOperSmpTable) {
    this._smpTable.internalValue = value;
  }
  public resetSmpTable() {
    this._smpTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smpTableInput() {
    return this._smpTable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ext: dataThunderSessionsOperExtToTerraform(this._ext.internalValue),
      oper: dataThunderSessionsOperOperToTerraform(this._oper.internalValue),
      smp: dataThunderSessionsOperSmpToTerraform(this._smp.internalValue),
      smp_table: dataThunderSessionsOperSmpTableToTerraform(this._smpTable.internalValue),
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
      ext: {
        value: dataThunderSessionsOperExtToHclTerraform(this._ext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSessionsOperExtList",
      },
      oper: {
        value: dataThunderSessionsOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSessionsOperOperList",
      },
      smp: {
        value: dataThunderSessionsOperSmpToHclTerraform(this._smp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSessionsOperSmpList",
      },
      smp_table: {
        value: dataThunderSessionsOperSmpTableToHclTerraform(this._smpTable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSessionsOperSmpTableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
