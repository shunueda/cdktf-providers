// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_redirect_table_l3_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderScaleoutDebugRedirectTableL3OperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_redirect_table_l3_oper#id DataThunderScaleoutDebugRedirectTableL3Oper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_redirect_table_l3_oper#oper DataThunderScaleoutDebugRedirectTableL3Oper#oper}
  */
  readonly oper?: DataThunderScaleoutDebugRedirectTableL3OperOper;
}
export interface DataThunderScaleoutDebugRedirectTableL3OperOperDeviceListRedTableListCountListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_redirect_table_l3_oper#dst_index DataThunderScaleoutDebugRedirectTableL3Oper#dst_index}
  */
  readonly dstIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_redirect_table_l3_oper#dst_index_valid DataThunderScaleoutDebugRedirectTableL3Oper#dst_index_valid}
  */
  readonly dstIndexValid?: number;
}

export function dataThunderScaleoutDebugRedirectTableL3OperOperDeviceListRedTableListCountListStructToTerraform(struct?: DataThunderScaleoutDebugRedirectTableL3OperOperDeviceListRedTableListCountListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_index: cdktf.numberToTerraform(struct!.dstIndex),
    dst_index_valid: cdktf.numberToTerraform(struct!.dstIndexValid),
  }
}


export function dataThunderScaleoutDebugRedirectTableL3OperOperDeviceListRedTableListCountListStructToHclTerraform(struct?: DataThunderScaleoutDebugRedirectTableL3OperOperDeviceListRedTableListCountListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_index: {
      value: cdktf.numberToHclTerraform(struct!.dstIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_index_valid: {
      value: cdktf.numberToHclTerraform(struct!.dstIndexValid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutDebugRedirectTableL3OperOperDeviceListRedTableListCountListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderScaleoutDebugRedirectTableL3OperOperDeviceListRedTableListCountListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIndex = this._dstIndex;
    }
    if (this._dstIndexValid !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIndexValid = this._dstIndexValid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutDebugRedirectTableL3OperOperDeviceListRedTableListCountListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dstIndex = undefined;
      this._dstIndexValid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dstIndex = value.dstIndex;
      this._dstIndexValid = value.dstIndexValid;
    }
  }

  // dst_index - computed: false, optional: true, required: false
  private _dstIndex?: number; 
  public get dstIndex() {
    return this.getNumberAttribute('dst_index');
  }
  public set dstIndex(value: number) {
    this._dstIndex = value;
  }
  public resetDstIndex() {
    this._dstIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIndexInput() {
    return this._dstIndex;
  }

  // dst_index_valid - computed: false, optional: true, required: false
  private _dstIndexValid?: number; 
  public get dstIndexValid() {
    return this.getNumberAttribute('dst_index_valid');
  }
  public set dstIndexValid(value: number) {
    this._dstIndexValid = value;
  }
  public resetDstIndexValid() {
    this._dstIndexValid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIndexValidInput() {
    return this._dstIndexValid;
  }
}

export class DataThunderScaleoutDebugRedirectTableL3OperOperDeviceListRedTableListCountListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderScaleoutDebugRedirectTableL3OperOperDeviceListRedTableListCountListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderScaleoutDebugRedirectTableL3OperOperDeviceListRedTableListCountListStructOutputReference {
    return new DataThunderScaleoutDebugRedirectTableL3OperOperDeviceListRedTableListCountListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderScaleoutDebugRedirectTableL3OperOperDeviceListRedTableListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_redirect_table_l3_oper#dir DataThunderScaleoutDebugRedirectTableL3Oper#dir}
  */
  readonly dir?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_redirect_table_l3_oper#dst_ip DataThunderScaleoutDebugRedirectTableL3Oper#dst_ip}
  */
  readonly dstIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_redirect_table_l3_oper#id1 DataThunderScaleoutDebugRedirectTableL3Oper#id1}
  */
  readonly id1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_redirect_table_l3_oper#mac DataThunderScaleoutDebugRedirectTableL3Oper#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_redirect_table_l3_oper#real_port DataThunderScaleoutDebugRedirectTableL3Oper#real_port}
  */
  readonly realPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_redirect_table_l3_oper#total_count DataThunderScaleoutDebugRedirectTableL3Oper#total_count}
  */
  readonly totalCount?: number;
  /**
  * count_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_redirect_table_l3_oper#count_list DataThunderScaleoutDebugRedirectTableL3Oper#count_list}
  */
  readonly countList?: DataThunderScaleoutDebugRedirectTableL3OperOperDeviceListRedTableListCountListStruct[] | cdktf.IResolvable;
}

export function dataThunderScaleoutDebugRedirectTableL3OperOperDeviceListRedTableListStructToTerraform(struct?: DataThunderScaleoutDebugRedirectTableL3OperOperDeviceListRedTableListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dir: cdktf.stringToTerraform(struct!.dir),
    dst_ip: cdktf.stringToTerraform(struct!.dstIp),
    id1: cdktf.numberToTerraform(struct!.id1),
    mac: cdktf.stringToTerraform(struct!.mac),
    real_port: cdktf.numberToTerraform(struct!.realPort),
    total_count: cdktf.numberToTerraform(struct!.totalCount),
    count_list: cdktf.listMapper(dataThunderScaleoutDebugRedirectTableL3OperOperDeviceListRedTableListCountListStructToTerraform, true)(struct!.countList),
  }
}


export function dataThunderScaleoutDebugRedirectTableL3OperOperDeviceListRedTableListStructToHclTerraform(struct?: DataThunderScaleoutDebugRedirectTableL3OperOperDeviceListRedTableListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dir: {
      value: cdktf.stringToHclTerraform(struct!.dir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_ip: {
      value: cdktf.stringToHclTerraform(struct!.dstIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id1: {
      value: cdktf.numberToHclTerraform(struct!.id1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    real_port: {
      value: cdktf.numberToHclTerraform(struct!.realPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_count: {
      value: cdktf.numberToHclTerraform(struct!.totalCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    count_list: {
      value: cdktf.listMapperHcl(dataThunderScaleoutDebugRedirectTableL3OperOperDeviceListRedTableListCountListStructToHclTerraform, true)(struct!.countList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderScaleoutDebugRedirectTableL3OperOperDeviceListRedTableListCountListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutDebugRedirectTableL3OperOperDeviceListRedTableListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderScaleoutDebugRedirectTableL3OperOperDeviceListRedTableListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dir !== undefined) {
      hasAnyValues = true;
      internalValueResult.dir = this._dir;
    }
    if (this._dstIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIp = this._dstIp;
    }
    if (this._id1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.id1 = this._id1;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    if (this._realPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.realPort = this._realPort;
    }
    if (this._totalCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalCount = this._totalCount;
    }
    if (this._countList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.countList = this._countList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutDebugRedirectTableL3OperOperDeviceListRedTableListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dir = undefined;
      this._dstIp = undefined;
      this._id1 = undefined;
      this._mac = undefined;
      this._realPort = undefined;
      this._totalCount = undefined;
      this._countList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dir = value.dir;
      this._dstIp = value.dstIp;
      this._id1 = value.id1;
      this._mac = value.mac;
      this._realPort = value.realPort;
      this._totalCount = value.totalCount;
      this._countList.internalValue = value.countList;
    }
  }

  // dir - computed: false, optional: true, required: false
  private _dir?: string; 
  public get dir() {
    return this.getStringAttribute('dir');
  }
  public set dir(value: string) {
    this._dir = value;
  }
  public resetDir() {
    this._dir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dirInput() {
    return this._dir;
  }

  // dst_ip - computed: false, optional: true, required: false
  private _dstIp?: string; 
  public get dstIp() {
    return this.getStringAttribute('dst_ip');
  }
  public set dstIp(value: string) {
    this._dstIp = value;
  }
  public resetDstIp() {
    this._dstIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpInput() {
    return this._dstIp;
  }

  // id1 - computed: false, optional: true, required: false
  private _id1?: number; 
  public get id1() {
    return this.getNumberAttribute('id1');
  }
  public set id1(value: number) {
    this._id1 = value;
  }
  public resetId1() {
    this._id1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get id1Input() {
    return this._id1;
  }

  // mac - computed: false, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }

  // real_port - computed: false, optional: true, required: false
  private _realPort?: number; 
  public get realPort() {
    return this.getNumberAttribute('real_port');
  }
  public set realPort(value: number) {
    this._realPort = value;
  }
  public resetRealPort() {
    this._realPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realPortInput() {
    return this._realPort;
  }

  // total_count - computed: false, optional: true, required: false
  private _totalCount?: number; 
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }
  public set totalCount(value: number) {
    this._totalCount = value;
  }
  public resetTotalCount() {
    this._totalCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalCountInput() {
    return this._totalCount;
  }

  // count_list - computed: false, optional: true, required: false
  private _countList = new DataThunderScaleoutDebugRedirectTableL3OperOperDeviceListRedTableListCountListStructList(this, "count_list", false);
  public get countList() {
    return this._countList;
  }
  public putCountList(value: DataThunderScaleoutDebugRedirectTableL3OperOperDeviceListRedTableListCountListStruct[] | cdktf.IResolvable) {
    this._countList.internalValue = value;
  }
  public resetCountList() {
    this._countList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countListInput() {
    return this._countList.internalValue;
  }
}

export class DataThunderScaleoutDebugRedirectTableL3OperOperDeviceListRedTableListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderScaleoutDebugRedirectTableL3OperOperDeviceListRedTableListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderScaleoutDebugRedirectTableL3OperOperDeviceListRedTableListStructOutputReference {
    return new DataThunderScaleoutDebugRedirectTableL3OperOperDeviceListRedTableListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderScaleoutDebugRedirectTableL3OperOperDeviceListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_redirect_table_l3_oper#device_id DataThunderScaleoutDebugRedirectTableL3Oper#device_id}
  */
  readonly deviceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_redirect_table_l3_oper#red_follow_shared DataThunderScaleoutDebugRedirectTableL3Oper#red_follow_shared}
  */
  readonly redFollowShared?: number;
  /**
  * red_table_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_redirect_table_l3_oper#red_table_list DataThunderScaleoutDebugRedirectTableL3Oper#red_table_list}
  */
  readonly redTableList?: DataThunderScaleoutDebugRedirectTableL3OperOperDeviceListRedTableListStruct[] | cdktf.IResolvable;
}

export function dataThunderScaleoutDebugRedirectTableL3OperOperDeviceListStructToTerraform(struct?: DataThunderScaleoutDebugRedirectTableL3OperOperDeviceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_id: cdktf.numberToTerraform(struct!.deviceId),
    red_follow_shared: cdktf.numberToTerraform(struct!.redFollowShared),
    red_table_list: cdktf.listMapper(dataThunderScaleoutDebugRedirectTableL3OperOperDeviceListRedTableListStructToTerraform, true)(struct!.redTableList),
  }
}


export function dataThunderScaleoutDebugRedirectTableL3OperOperDeviceListStructToHclTerraform(struct?: DataThunderScaleoutDebugRedirectTableL3OperOperDeviceListStruct | cdktf.IResolvable): any {
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
    red_follow_shared: {
      value: cdktf.numberToHclTerraform(struct!.redFollowShared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    red_table_list: {
      value: cdktf.listMapperHcl(dataThunderScaleoutDebugRedirectTableL3OperOperDeviceListRedTableListStructToHclTerraform, true)(struct!.redTableList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderScaleoutDebugRedirectTableL3OperOperDeviceListRedTableListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutDebugRedirectTableL3OperOperDeviceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderScaleoutDebugRedirectTableL3OperOperDeviceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceId = this._deviceId;
    }
    if (this._redFollowShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.redFollowShared = this._redFollowShared;
    }
    if (this._redTableList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redTableList = this._redTableList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutDebugRedirectTableL3OperOperDeviceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceId = undefined;
      this._redFollowShared = undefined;
      this._redTableList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceId = value.deviceId;
      this._redFollowShared = value.redFollowShared;
      this._redTableList.internalValue = value.redTableList;
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

  // red_follow_shared - computed: false, optional: true, required: false
  private _redFollowShared?: number; 
  public get redFollowShared() {
    return this.getNumberAttribute('red_follow_shared');
  }
  public set redFollowShared(value: number) {
    this._redFollowShared = value;
  }
  public resetRedFollowShared() {
    this._redFollowShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redFollowSharedInput() {
    return this._redFollowShared;
  }

  // red_table_list - computed: false, optional: true, required: false
  private _redTableList = new DataThunderScaleoutDebugRedirectTableL3OperOperDeviceListRedTableListStructList(this, "red_table_list", false);
  public get redTableList() {
    return this._redTableList;
  }
  public putRedTableList(value: DataThunderScaleoutDebugRedirectTableL3OperOperDeviceListRedTableListStruct[] | cdktf.IResolvable) {
    this._redTableList.internalValue = value;
  }
  public resetRedTableList() {
    this._redTableList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redTableListInput() {
    return this._redTableList.internalValue;
  }
}

export class DataThunderScaleoutDebugRedirectTableL3OperOperDeviceListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderScaleoutDebugRedirectTableL3OperOperDeviceListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderScaleoutDebugRedirectTableL3OperOperDeviceListStructOutputReference {
    return new DataThunderScaleoutDebugRedirectTableL3OperOperDeviceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderScaleoutDebugRedirectTableL3OperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_redirect_table_l3_oper#part_name DataThunderScaleoutDebugRedirectTableL3Oper#part_name}
  */
  readonly partName?: string;
  /**
  * device_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_redirect_table_l3_oper#device_list DataThunderScaleoutDebugRedirectTableL3Oper#device_list}
  */
  readonly deviceList?: DataThunderScaleoutDebugRedirectTableL3OperOperDeviceListStruct[] | cdktf.IResolvable;
}

export function dataThunderScaleoutDebugRedirectTableL3OperOperToTerraform(struct?: DataThunderScaleoutDebugRedirectTableL3OperOperOutputReference | DataThunderScaleoutDebugRedirectTableL3OperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    part_name: cdktf.stringToTerraform(struct!.partName),
    device_list: cdktf.listMapper(dataThunderScaleoutDebugRedirectTableL3OperOperDeviceListStructToTerraform, true)(struct!.deviceList),
  }
}


export function dataThunderScaleoutDebugRedirectTableL3OperOperToHclTerraform(struct?: DataThunderScaleoutDebugRedirectTableL3OperOperOutputReference | DataThunderScaleoutDebugRedirectTableL3OperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    part_name: {
      value: cdktf.stringToHclTerraform(struct!.partName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_list: {
      value: cdktf.listMapperHcl(dataThunderScaleoutDebugRedirectTableL3OperOperDeviceListStructToHclTerraform, true)(struct!.deviceList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderScaleoutDebugRedirectTableL3OperOperDeviceListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutDebugRedirectTableL3OperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderScaleoutDebugRedirectTableL3OperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._partName !== undefined) {
      hasAnyValues = true;
      internalValueResult.partName = this._partName;
    }
    if (this._deviceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceList = this._deviceList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutDebugRedirectTableL3OperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._partName = undefined;
      this._deviceList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._partName = value.partName;
      this._deviceList.internalValue = value.deviceList;
    }
  }

  // part_name - computed: false, optional: true, required: false
  private _partName?: string; 
  public get partName() {
    return this.getStringAttribute('part_name');
  }
  public set partName(value: string) {
    this._partName = value;
  }
  public resetPartName() {
    this._partName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partNameInput() {
    return this._partName;
  }

  // device_list - computed: false, optional: true, required: false
  private _deviceList = new DataThunderScaleoutDebugRedirectTableL3OperOperDeviceListStructList(this, "device_list", false);
  public get deviceList() {
    return this._deviceList;
  }
  public putDeviceList(value: DataThunderScaleoutDebugRedirectTableL3OperOperDeviceListStruct[] | cdktf.IResolvable) {
    this._deviceList.internalValue = value;
  }
  public resetDeviceList() {
    this._deviceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceListInput() {
    return this._deviceList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_redirect_table_l3_oper thunder_scaleout_debug_redirect_table_l3_oper}
*/
export class DataThunderScaleoutDebugRedirectTableL3Oper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_scaleout_debug_redirect_table_l3_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderScaleoutDebugRedirectTableL3Oper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderScaleoutDebugRedirectTableL3Oper to import
  * @param importFromId The id of the existing DataThunderScaleoutDebugRedirectTableL3Oper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_redirect_table_l3_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderScaleoutDebugRedirectTableL3Oper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_scaleout_debug_redirect_table_l3_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_redirect_table_l3_oper thunder_scaleout_debug_redirect_table_l3_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderScaleoutDebugRedirectTableL3OperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderScaleoutDebugRedirectTableL3OperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_scaleout_debug_redirect_table_l3_oper',
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
  private _oper = new DataThunderScaleoutDebugRedirectTableL3OperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderScaleoutDebugRedirectTableL3OperOper) {
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
      oper: dataThunderScaleoutDebugRedirectTableL3OperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderScaleoutDebugRedirectTableL3OperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderScaleoutDebugRedirectTableL3OperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
