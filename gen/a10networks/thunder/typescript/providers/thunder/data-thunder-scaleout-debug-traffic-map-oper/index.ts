// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_traffic_map_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderScaleoutDebugTrafficMapOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_traffic_map_oper#id DataThunderScaleoutDebugTrafficMapOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_traffic_map_oper#oper DataThunderScaleoutDebugTrafficMapOper#oper}
  */
  readonly oper?: DataThunderScaleoutDebugTrafficMapOperOper;
}
export interface DataThunderScaleoutDebugTrafficMapOperOperDeviceGroupListBucketsListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_traffic_map_oper#active_device DataThunderScaleoutDebugTrafficMapOper#active_device}
  */
  readonly activeDevice?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_traffic_map_oper#standby_device DataThunderScaleoutDebugTrafficMapOper#standby_device}
  */
  readonly standbyDevice?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_traffic_map_oper#user_group DataThunderScaleoutDebugTrafficMapOper#user_group}
  */
  readonly userGroup?: number;
}

export function dataThunderScaleoutDebugTrafficMapOperOperDeviceGroupListBucketsListStructToTerraform(struct?: DataThunderScaleoutDebugTrafficMapOperOperDeviceGroupListBucketsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_device: cdktf.numberToTerraform(struct!.activeDevice),
    standby_device: cdktf.numberToTerraform(struct!.standbyDevice),
    user_group: cdktf.numberToTerraform(struct!.userGroup),
  }
}


export function dataThunderScaleoutDebugTrafficMapOperOperDeviceGroupListBucketsListStructToHclTerraform(struct?: DataThunderScaleoutDebugTrafficMapOperOperDeviceGroupListBucketsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_device: {
      value: cdktf.numberToHclTerraform(struct!.activeDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    standby_device: {
      value: cdktf.numberToHclTerraform(struct!.standbyDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_group: {
      value: cdktf.numberToHclTerraform(struct!.userGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutDebugTrafficMapOperOperDeviceGroupListBucketsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderScaleoutDebugTrafficMapOperOperDeviceGroupListBucketsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeDevice = this._activeDevice;
    }
    if (this._standbyDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.standbyDevice = this._standbyDevice;
    }
    if (this._userGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroup = this._userGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutDebugTrafficMapOperOperDeviceGroupListBucketsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeDevice = undefined;
      this._standbyDevice = undefined;
      this._userGroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeDevice = value.activeDevice;
      this._standbyDevice = value.standbyDevice;
      this._userGroup = value.userGroup;
    }
  }

  // active_device - computed: false, optional: true, required: false
  private _activeDevice?: number; 
  public get activeDevice() {
    return this.getNumberAttribute('active_device');
  }
  public set activeDevice(value: number) {
    this._activeDevice = value;
  }
  public resetActiveDevice() {
    this._activeDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDeviceInput() {
    return this._activeDevice;
  }

  // standby_device - computed: false, optional: true, required: false
  private _standbyDevice?: number; 
  public get standbyDevice() {
    return this.getNumberAttribute('standby_device');
  }
  public set standbyDevice(value: number) {
    this._standbyDevice = value;
  }
  public resetStandbyDevice() {
    this._standbyDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyDeviceInput() {
    return this._standbyDevice;
  }

  // user_group - computed: false, optional: true, required: false
  private _userGroup?: number; 
  public get userGroup() {
    return this.getNumberAttribute('user_group');
  }
  public set userGroup(value: number) {
    this._userGroup = value;
  }
  public resetUserGroup() {
    this._userGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupInput() {
    return this._userGroup;
  }
}

export class DataThunderScaleoutDebugTrafficMapOperOperDeviceGroupListBucketsListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderScaleoutDebugTrafficMapOperOperDeviceGroupListBucketsListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderScaleoutDebugTrafficMapOperOperDeviceGroupListBucketsListStructOutputReference {
    return new DataThunderScaleoutDebugTrafficMapOperOperDeviceGroupListBucketsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderScaleoutDebugTrafficMapOperOperDeviceGroupListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_traffic_map_oper#buffer_len DataThunderScaleoutDebugTrafficMapOper#buffer_len}
  */
  readonly bufferLen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_traffic_map_oper#cmd DataThunderScaleoutDebugTrafficMapOper#cmd}
  */
  readonly cmd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_traffic_map_oper#rc DataThunderScaleoutDebugTrafficMapOper#rc}
  */
  readonly rc?: number;
  /**
  * buckets_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_traffic_map_oper#buckets_list DataThunderScaleoutDebugTrafficMapOper#buckets_list}
  */
  readonly bucketsList?: DataThunderScaleoutDebugTrafficMapOperOperDeviceGroupListBucketsListStruct[] | cdktf.IResolvable;
}

export function dataThunderScaleoutDebugTrafficMapOperOperDeviceGroupListStructToTerraform(struct?: DataThunderScaleoutDebugTrafficMapOperOperDeviceGroupListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer_len: cdktf.numberToTerraform(struct!.bufferLen),
    cmd: cdktf.stringToTerraform(struct!.cmd),
    rc: cdktf.numberToTerraform(struct!.rc),
    buckets_list: cdktf.listMapper(dataThunderScaleoutDebugTrafficMapOperOperDeviceGroupListBucketsListStructToTerraform, true)(struct!.bucketsList),
  }
}


export function dataThunderScaleoutDebugTrafficMapOperOperDeviceGroupListStructToHclTerraform(struct?: DataThunderScaleoutDebugTrafficMapOperOperDeviceGroupListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer_len: {
      value: cdktf.numberToHclTerraform(struct!.bufferLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cmd: {
      value: cdktf.stringToHclTerraform(struct!.cmd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rc: {
      value: cdktf.numberToHclTerraform(struct!.rc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buckets_list: {
      value: cdktf.listMapperHcl(dataThunderScaleoutDebugTrafficMapOperOperDeviceGroupListBucketsListStructToHclTerraform, true)(struct!.bucketsList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderScaleoutDebugTrafficMapOperOperDeviceGroupListBucketsListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutDebugTrafficMapOperOperDeviceGroupListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderScaleoutDebugTrafficMapOperOperDeviceGroupListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bufferLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferLen = this._bufferLen;
    }
    if (this._cmd !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmd = this._cmd;
    }
    if (this._rc !== undefined) {
      hasAnyValues = true;
      internalValueResult.rc = this._rc;
    }
    if (this._bucketsList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketsList = this._bucketsList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutDebugTrafficMapOperOperDeviceGroupListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bufferLen = undefined;
      this._cmd = undefined;
      this._rc = undefined;
      this._bucketsList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bufferLen = value.bufferLen;
      this._cmd = value.cmd;
      this._rc = value.rc;
      this._bucketsList.internalValue = value.bucketsList;
    }
  }

  // buffer_len - computed: false, optional: true, required: false
  private _bufferLen?: number; 
  public get bufferLen() {
    return this.getNumberAttribute('buffer_len');
  }
  public set bufferLen(value: number) {
    this._bufferLen = value;
  }
  public resetBufferLen() {
    this._bufferLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferLenInput() {
    return this._bufferLen;
  }

  // cmd - computed: false, optional: true, required: false
  private _cmd?: string; 
  public get cmd() {
    return this.getStringAttribute('cmd');
  }
  public set cmd(value: string) {
    this._cmd = value;
  }
  public resetCmd() {
    this._cmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdInput() {
    return this._cmd;
  }

  // rc - computed: false, optional: true, required: false
  private _rc?: number; 
  public get rc() {
    return this.getNumberAttribute('rc');
  }
  public set rc(value: number) {
    this._rc = value;
  }
  public resetRc() {
    this._rc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcInput() {
    return this._rc;
  }

  // buckets_list - computed: false, optional: true, required: false
  private _bucketsList = new DataThunderScaleoutDebugTrafficMapOperOperDeviceGroupListBucketsListStructList(this, "buckets_list", false);
  public get bucketsList() {
    return this._bucketsList;
  }
  public putBucketsList(value: DataThunderScaleoutDebugTrafficMapOperOperDeviceGroupListBucketsListStruct[] | cdktf.IResolvable) {
    this._bucketsList.internalValue = value;
  }
  public resetBucketsList() {
    this._bucketsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketsListInput() {
    return this._bucketsList.internalValue;
  }
}

export class DataThunderScaleoutDebugTrafficMapOperOperDeviceGroupListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderScaleoutDebugTrafficMapOperOperDeviceGroupListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderScaleoutDebugTrafficMapOperOperDeviceGroupListStructOutputReference {
    return new DataThunderScaleoutDebugTrafficMapOperOperDeviceGroupListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderScaleoutDebugTrafficMapOperOper {
  /**
  * device_group_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_traffic_map_oper#device_group_list DataThunderScaleoutDebugTrafficMapOper#device_group_list}
  */
  readonly deviceGroupList?: DataThunderScaleoutDebugTrafficMapOperOperDeviceGroupListStruct[] | cdktf.IResolvable;
}

export function dataThunderScaleoutDebugTrafficMapOperOperToTerraform(struct?: DataThunderScaleoutDebugTrafficMapOperOperOutputReference | DataThunderScaleoutDebugTrafficMapOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_group_list: cdktf.listMapper(dataThunderScaleoutDebugTrafficMapOperOperDeviceGroupListStructToTerraform, true)(struct!.deviceGroupList),
  }
}


export function dataThunderScaleoutDebugTrafficMapOperOperToHclTerraform(struct?: DataThunderScaleoutDebugTrafficMapOperOperOutputReference | DataThunderScaleoutDebugTrafficMapOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_group_list: {
      value: cdktf.listMapperHcl(dataThunderScaleoutDebugTrafficMapOperOperDeviceGroupListStructToHclTerraform, true)(struct!.deviceGroupList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderScaleoutDebugTrafficMapOperOperDeviceGroupListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutDebugTrafficMapOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderScaleoutDebugTrafficMapOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceGroupList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceGroupList = this._deviceGroupList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutDebugTrafficMapOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deviceGroupList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deviceGroupList.internalValue = value.deviceGroupList;
    }
  }

  // device_group_list - computed: false, optional: true, required: false
  private _deviceGroupList = new DataThunderScaleoutDebugTrafficMapOperOperDeviceGroupListStructList(this, "device_group_list", false);
  public get deviceGroupList() {
    return this._deviceGroupList;
  }
  public putDeviceGroupList(value: DataThunderScaleoutDebugTrafficMapOperOperDeviceGroupListStruct[] | cdktf.IResolvable) {
    this._deviceGroupList.internalValue = value;
  }
  public resetDeviceGroupList() {
    this._deviceGroupList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceGroupListInput() {
    return this._deviceGroupList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_traffic_map_oper thunder_scaleout_debug_traffic_map_oper}
*/
export class DataThunderScaleoutDebugTrafficMapOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_scaleout_debug_traffic_map_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderScaleoutDebugTrafficMapOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderScaleoutDebugTrafficMapOper to import
  * @param importFromId The id of the existing DataThunderScaleoutDebugTrafficMapOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_traffic_map_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderScaleoutDebugTrafficMapOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_scaleout_debug_traffic_map_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_traffic_map_oper thunder_scaleout_debug_traffic_map_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderScaleoutDebugTrafficMapOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderScaleoutDebugTrafficMapOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_scaleout_debug_traffic_map_oper',
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
  private _oper = new DataThunderScaleoutDebugTrafficMapOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderScaleoutDebugTrafficMapOperOper) {
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
      oper: dataThunderScaleoutDebugTrafficMapOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderScaleoutDebugTrafficMapOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderScaleoutDebugTrafficMapOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
