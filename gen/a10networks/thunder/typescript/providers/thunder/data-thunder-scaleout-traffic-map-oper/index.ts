// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_traffic_map_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderScaleoutTrafficMapOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_traffic_map_oper#id DataThunderScaleoutTrafficMapOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_traffic_map_oper#oper DataThunderScaleoutTrafficMapOper#oper}
  */
  readonly oper?: DataThunderScaleoutTrafficMapOperOper;
}
export interface DataThunderScaleoutTrafficMapOperOperMapEntriesListHeadMapEntriesListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_traffic_map_oper#cur_active DataThunderScaleoutTrafficMapOper#cur_active}
  */
  readonly curActive?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_traffic_map_oper#cur_standby DataThunderScaleoutTrafficMapOper#cur_standby}
  */
  readonly curStandby?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_traffic_map_oper#new_active DataThunderScaleoutTrafficMapOper#new_active}
  */
  readonly newActive?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_traffic_map_oper#new_standby DataThunderScaleoutTrafficMapOper#new_standby}
  */
  readonly newStandby?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_traffic_map_oper#user_group DataThunderScaleoutTrafficMapOper#user_group}
  */
  readonly userGroup?: number;
}

export function dataThunderScaleoutTrafficMapOperOperMapEntriesListHeadMapEntriesListStructToTerraform(struct?: DataThunderScaleoutTrafficMapOperOperMapEntriesListHeadMapEntriesListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cur_active: cdktf.numberToTerraform(struct!.curActive),
    cur_standby: cdktf.numberToTerraform(struct!.curStandby),
    new_active: cdktf.numberToTerraform(struct!.newActive),
    new_standby: cdktf.numberToTerraform(struct!.newStandby),
    user_group: cdktf.numberToTerraform(struct!.userGroup),
  }
}


export function dataThunderScaleoutTrafficMapOperOperMapEntriesListHeadMapEntriesListStructToHclTerraform(struct?: DataThunderScaleoutTrafficMapOperOperMapEntriesListHeadMapEntriesListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cur_active: {
      value: cdktf.numberToHclTerraform(struct!.curActive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cur_standby: {
      value: cdktf.numberToHclTerraform(struct!.curStandby),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_active: {
      value: cdktf.numberToHclTerraform(struct!.newActive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_standby: {
      value: cdktf.numberToHclTerraform(struct!.newStandby),
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

export class DataThunderScaleoutTrafficMapOperOperMapEntriesListHeadMapEntriesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderScaleoutTrafficMapOperOperMapEntriesListHeadMapEntriesListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._curActive !== undefined) {
      hasAnyValues = true;
      internalValueResult.curActive = this._curActive;
    }
    if (this._curStandby !== undefined) {
      hasAnyValues = true;
      internalValueResult.curStandby = this._curStandby;
    }
    if (this._newActive !== undefined) {
      hasAnyValues = true;
      internalValueResult.newActive = this._newActive;
    }
    if (this._newStandby !== undefined) {
      hasAnyValues = true;
      internalValueResult.newStandby = this._newStandby;
    }
    if (this._userGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroup = this._userGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutTrafficMapOperOperMapEntriesListHeadMapEntriesListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._curActive = undefined;
      this._curStandby = undefined;
      this._newActive = undefined;
      this._newStandby = undefined;
      this._userGroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._curActive = value.curActive;
      this._curStandby = value.curStandby;
      this._newActive = value.newActive;
      this._newStandby = value.newStandby;
      this._userGroup = value.userGroup;
    }
  }

  // cur_active - computed: false, optional: true, required: false
  private _curActive?: number; 
  public get curActive() {
    return this.getNumberAttribute('cur_active');
  }
  public set curActive(value: number) {
    this._curActive = value;
  }
  public resetCurActive() {
    this._curActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get curActiveInput() {
    return this._curActive;
  }

  // cur_standby - computed: false, optional: true, required: false
  private _curStandby?: number; 
  public get curStandby() {
    return this.getNumberAttribute('cur_standby');
  }
  public set curStandby(value: number) {
    this._curStandby = value;
  }
  public resetCurStandby() {
    this._curStandby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get curStandbyInput() {
    return this._curStandby;
  }

  // new_active - computed: false, optional: true, required: false
  private _newActive?: number; 
  public get newActive() {
    return this.getNumberAttribute('new_active');
  }
  public set newActive(value: number) {
    this._newActive = value;
  }
  public resetNewActive() {
    this._newActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newActiveInput() {
    return this._newActive;
  }

  // new_standby - computed: false, optional: true, required: false
  private _newStandby?: number; 
  public get newStandby() {
    return this.getNumberAttribute('new_standby');
  }
  public set newStandby(value: number) {
    this._newStandby = value;
  }
  public resetNewStandby() {
    this._newStandby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newStandbyInput() {
    return this._newStandby;
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

export class DataThunderScaleoutTrafficMapOperOperMapEntriesListHeadMapEntriesListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderScaleoutTrafficMapOperOperMapEntriesListHeadMapEntriesListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderScaleoutTrafficMapOperOperMapEntriesListHeadMapEntriesListStructOutputReference {
    return new DataThunderScaleoutTrafficMapOperOperMapEntriesListHeadMapEntriesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderScaleoutTrafficMapOperOperMapEntriesListHead {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_traffic_map_oper#running_device_num DataThunderScaleoutTrafficMapOper#running_device_num}
  */
  readonly runningDeviceNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_traffic_map_oper#service_name DataThunderScaleoutTrafficMapOper#service_name}
  */
  readonly serviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_traffic_map_oper#service_type DataThunderScaleoutTrafficMapOper#service_type}
  */
  readonly serviceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_traffic_map_oper#user_grp_num DataThunderScaleoutTrafficMapOper#user_grp_num}
  */
  readonly userGrpNum?: number;
  /**
  * map_entries_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_traffic_map_oper#map_entries_list DataThunderScaleoutTrafficMapOper#map_entries_list}
  */
  readonly mapEntriesList?: DataThunderScaleoutTrafficMapOperOperMapEntriesListHeadMapEntriesListStruct[] | cdktf.IResolvable;
}

export function dataThunderScaleoutTrafficMapOperOperMapEntriesListHeadToTerraform(struct?: DataThunderScaleoutTrafficMapOperOperMapEntriesListHead | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    running_device_num: cdktf.numberToTerraform(struct!.runningDeviceNum),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    service_type: cdktf.stringToTerraform(struct!.serviceType),
    user_grp_num: cdktf.numberToTerraform(struct!.userGrpNum),
    map_entries_list: cdktf.listMapper(dataThunderScaleoutTrafficMapOperOperMapEntriesListHeadMapEntriesListStructToTerraform, true)(struct!.mapEntriesList),
  }
}


export function dataThunderScaleoutTrafficMapOperOperMapEntriesListHeadToHclTerraform(struct?: DataThunderScaleoutTrafficMapOperOperMapEntriesListHead | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    running_device_num: {
      value: cdktf.numberToHclTerraform(struct!.runningDeviceNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_type: {
      value: cdktf.stringToHclTerraform(struct!.serviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_grp_num: {
      value: cdktf.numberToHclTerraform(struct!.userGrpNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    map_entries_list: {
      value: cdktf.listMapperHcl(dataThunderScaleoutTrafficMapOperOperMapEntriesListHeadMapEntriesListStructToHclTerraform, true)(struct!.mapEntriesList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderScaleoutTrafficMapOperOperMapEntriesListHeadMapEntriesListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutTrafficMapOperOperMapEntriesListHeadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderScaleoutTrafficMapOperOperMapEntriesListHead | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._runningDeviceNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.runningDeviceNum = this._runningDeviceNum;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._serviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceType = this._serviceType;
    }
    if (this._userGrpNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGrpNum = this._userGrpNum;
    }
    if (this._mapEntriesList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapEntriesList = this._mapEntriesList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutTrafficMapOperOperMapEntriesListHead | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._runningDeviceNum = undefined;
      this._serviceName = undefined;
      this._serviceType = undefined;
      this._userGrpNum = undefined;
      this._mapEntriesList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._runningDeviceNum = value.runningDeviceNum;
      this._serviceName = value.serviceName;
      this._serviceType = value.serviceType;
      this._userGrpNum = value.userGrpNum;
      this._mapEntriesList.internalValue = value.mapEntriesList;
    }
  }

  // running_device_num - computed: false, optional: true, required: false
  private _runningDeviceNum?: number; 
  public get runningDeviceNum() {
    return this.getNumberAttribute('running_device_num');
  }
  public set runningDeviceNum(value: number) {
    this._runningDeviceNum = value;
  }
  public resetRunningDeviceNum() {
    this._runningDeviceNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningDeviceNumInput() {
    return this._runningDeviceNum;
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

  // service_type - computed: false, optional: true, required: false
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  public resetServiceType() {
    this._serviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // user_grp_num - computed: false, optional: true, required: false
  private _userGrpNum?: number; 
  public get userGrpNum() {
    return this.getNumberAttribute('user_grp_num');
  }
  public set userGrpNum(value: number) {
    this._userGrpNum = value;
  }
  public resetUserGrpNum() {
    this._userGrpNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGrpNumInput() {
    return this._userGrpNum;
  }

  // map_entries_list - computed: false, optional: true, required: false
  private _mapEntriesList = new DataThunderScaleoutTrafficMapOperOperMapEntriesListHeadMapEntriesListStructList(this, "map_entries_list", false);
  public get mapEntriesList() {
    return this._mapEntriesList;
  }
  public putMapEntriesList(value: DataThunderScaleoutTrafficMapOperOperMapEntriesListHeadMapEntriesListStruct[] | cdktf.IResolvable) {
    this._mapEntriesList.internalValue = value;
  }
  public resetMapEntriesList() {
    this._mapEntriesList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapEntriesListInput() {
    return this._mapEntriesList.internalValue;
  }
}

export class DataThunderScaleoutTrafficMapOperOperMapEntriesListHeadList extends cdktf.ComplexList {
  public internalValue? : DataThunderScaleoutTrafficMapOperOperMapEntriesListHead[] | cdktf.IResolvable

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
  public get(index: number): DataThunderScaleoutTrafficMapOperOperMapEntriesListHeadOutputReference {
    return new DataThunderScaleoutTrafficMapOperOperMapEntriesListHeadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderScaleoutTrafficMapOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_traffic_map_oper#ipv4 DataThunderScaleoutTrafficMapOper#ipv4}
  */
  readonly ipv4?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_traffic_map_oper#ipv6 DataThunderScaleoutTrafficMapOper#ipv6}
  */
  readonly ipv6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_traffic_map_oper#service_config_template DataThunderScaleoutTrafficMapOper#service_config_template}
  */
  readonly serviceConfigTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_traffic_map_oper#src_ip DataThunderScaleoutTrafficMapOper#src_ip}
  */
  readonly srcIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_traffic_map_oper#src_ipv6 DataThunderScaleoutTrafficMapOper#src_ipv6}
  */
  readonly srcIpv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_traffic_map_oper#tbl_num DataThunderScaleoutTrafficMapOper#tbl_num}
  */
  readonly tblNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_traffic_map_oper#virtual_port DataThunderScaleoutTrafficMapOper#virtual_port}
  */
  readonly virtualPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_traffic_map_oper#virtual_server DataThunderScaleoutTrafficMapOper#virtual_server}
  */
  readonly virtualServer?: string;
  /**
  * map_entries_list_head block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_traffic_map_oper#map_entries_list_head DataThunderScaleoutTrafficMapOper#map_entries_list_head}
  */
  readonly mapEntriesListHead?: DataThunderScaleoutTrafficMapOperOperMapEntriesListHead[] | cdktf.IResolvable;
}

export function dataThunderScaleoutTrafficMapOperOperToTerraform(struct?: DataThunderScaleoutTrafficMapOperOperOutputReference | DataThunderScaleoutTrafficMapOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.numberToTerraform(struct!.ipv4),
    ipv6: cdktf.numberToTerraform(struct!.ipv6),
    service_config_template: cdktf.stringToTerraform(struct!.serviceConfigTemplate),
    src_ip: cdktf.stringToTerraform(struct!.srcIp),
    src_ipv6: cdktf.stringToTerraform(struct!.srcIpv6),
    tbl_num: cdktf.numberToTerraform(struct!.tblNum),
    virtual_port: cdktf.numberToTerraform(struct!.virtualPort),
    virtual_server: cdktf.stringToTerraform(struct!.virtualServer),
    map_entries_list_head: cdktf.listMapper(dataThunderScaleoutTrafficMapOperOperMapEntriesListHeadToTerraform, true)(struct!.mapEntriesListHead),
  }
}


export function dataThunderScaleoutTrafficMapOperOperToHclTerraform(struct?: DataThunderScaleoutTrafficMapOperOperOutputReference | DataThunderScaleoutTrafficMapOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.numberToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6: {
      value: cdktf.numberToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_config_template: {
      value: cdktf.stringToHclTerraform(struct!.serviceConfigTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_ip: {
      value: cdktf.stringToHclTerraform(struct!.srcIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.srcIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tbl_num: {
      value: cdktf.numberToHclTerraform(struct!.tblNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_port: {
      value: cdktf.numberToHclTerraform(struct!.virtualPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_server: {
      value: cdktf.stringToHclTerraform(struct!.virtualServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    map_entries_list_head: {
      value: cdktf.listMapperHcl(dataThunderScaleoutTrafficMapOperOperMapEntriesListHeadToHclTerraform, true)(struct!.mapEntriesListHead),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderScaleoutTrafficMapOperOperMapEntriesListHeadList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutTrafficMapOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderScaleoutTrafficMapOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._serviceConfigTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceConfigTemplate = this._serviceConfigTemplate;
    }
    if (this._srcIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIp = this._srcIp;
    }
    if (this._srcIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpv6 = this._srcIpv6;
    }
    if (this._tblNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.tblNum = this._tblNum;
    }
    if (this._virtualPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualPort = this._virtualPort;
    }
    if (this._virtualServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServer = this._virtualServer;
    }
    if (this._mapEntriesListHead?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapEntriesListHead = this._mapEntriesListHead?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutTrafficMapOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
      this._serviceConfigTemplate = undefined;
      this._srcIp = undefined;
      this._srcIpv6 = undefined;
      this._tblNum = undefined;
      this._virtualPort = undefined;
      this._virtualServer = undefined;
      this._mapEntriesListHead.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
      this._serviceConfigTemplate = value.serviceConfigTemplate;
      this._srcIp = value.srcIp;
      this._srcIpv6 = value.srcIpv6;
      this._tblNum = value.tblNum;
      this._virtualPort = value.virtualPort;
      this._virtualServer = value.virtualServer;
      this._mapEntriesListHead.internalValue = value.mapEntriesListHead;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4?: number; 
  public get ipv4() {
    return this.getNumberAttribute('ipv4');
  }
  public set ipv4(value: number) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: number; 
  public get ipv6() {
    return this.getNumberAttribute('ipv6');
  }
  public set ipv6(value: number) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // service_config_template - computed: false, optional: true, required: false
  private _serviceConfigTemplate?: string; 
  public get serviceConfigTemplate() {
    return this.getStringAttribute('service_config_template');
  }
  public set serviceConfigTemplate(value: string) {
    this._serviceConfigTemplate = value;
  }
  public resetServiceConfigTemplate() {
    this._serviceConfigTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigTemplateInput() {
    return this._serviceConfigTemplate;
  }

  // src_ip - computed: false, optional: true, required: false
  private _srcIp?: string; 
  public get srcIp() {
    return this.getStringAttribute('src_ip');
  }
  public set srcIp(value: string) {
    this._srcIp = value;
  }
  public resetSrcIp() {
    this._srcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpInput() {
    return this._srcIp;
  }

  // src_ipv6 - computed: false, optional: true, required: false
  private _srcIpv6?: string; 
  public get srcIpv6() {
    return this.getStringAttribute('src_ipv6');
  }
  public set srcIpv6(value: string) {
    this._srcIpv6 = value;
  }
  public resetSrcIpv6() {
    this._srcIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpv6Input() {
    return this._srcIpv6;
  }

  // tbl_num - computed: false, optional: true, required: false
  private _tblNum?: number; 
  public get tblNum() {
    return this.getNumberAttribute('tbl_num');
  }
  public set tblNum(value: number) {
    this._tblNum = value;
  }
  public resetTblNum() {
    this._tblNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tblNumInput() {
    return this._tblNum;
  }

  // virtual_port - computed: false, optional: true, required: false
  private _virtualPort?: number; 
  public get virtualPort() {
    return this.getNumberAttribute('virtual_port');
  }
  public set virtualPort(value: number) {
    this._virtualPort = value;
  }
  public resetVirtualPort() {
    this._virtualPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualPortInput() {
    return this._virtualPort;
  }

  // virtual_server - computed: false, optional: true, required: false
  private _virtualServer?: string; 
  public get virtualServer() {
    return this.getStringAttribute('virtual_server');
  }
  public set virtualServer(value: string) {
    this._virtualServer = value;
  }
  public resetVirtualServer() {
    this._virtualServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerInput() {
    return this._virtualServer;
  }

  // map_entries_list_head - computed: false, optional: true, required: false
  private _mapEntriesListHead = new DataThunderScaleoutTrafficMapOperOperMapEntriesListHeadList(this, "map_entries_list_head", false);
  public get mapEntriesListHead() {
    return this._mapEntriesListHead;
  }
  public putMapEntriesListHead(value: DataThunderScaleoutTrafficMapOperOperMapEntriesListHead[] | cdktf.IResolvable) {
    this._mapEntriesListHead.internalValue = value;
  }
  public resetMapEntriesListHead() {
    this._mapEntriesListHead.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapEntriesListHeadInput() {
    return this._mapEntriesListHead.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_traffic_map_oper thunder_scaleout_traffic_map_oper}
*/
export class DataThunderScaleoutTrafficMapOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_scaleout_traffic_map_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderScaleoutTrafficMapOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderScaleoutTrafficMapOper to import
  * @param importFromId The id of the existing DataThunderScaleoutTrafficMapOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_traffic_map_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderScaleoutTrafficMapOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_scaleout_traffic_map_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_traffic_map_oper thunder_scaleout_traffic_map_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderScaleoutTrafficMapOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderScaleoutTrafficMapOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_scaleout_traffic_map_oper',
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
  private _oper = new DataThunderScaleoutTrafficMapOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderScaleoutTrafficMapOperOper) {
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
      oper: dataThunderScaleoutTrafficMapOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderScaleoutTrafficMapOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderScaleoutTrafficMapOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
