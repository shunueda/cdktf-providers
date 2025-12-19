// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_cluster_status_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderScaleoutDebugClusterStatusOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_cluster_status_oper#id DataThunderScaleoutDebugClusterStatusOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_cluster_status_oper#oper DataThunderScaleoutDebugClusterStatusOper#oper}
  */
  readonly oper?: DataThunderScaleoutDebugClusterStatusOperOper;
}
export interface DataThunderScaleoutDebugClusterStatusOperOperActiveDeviceCountListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_cluster_status_oper#device_id DataThunderScaleoutDebugClusterStatusOper#device_id}
  */
  readonly deviceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_cluster_status_oper#state DataThunderScaleoutDebugClusterStatusOper#state}
  */
  readonly state?: number;
}

export function dataThunderScaleoutDebugClusterStatusOperOperActiveDeviceCountListStructToTerraform(struct?: DataThunderScaleoutDebugClusterStatusOperOperActiveDeviceCountListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_id: cdktf.numberToTerraform(struct!.deviceId),
    state: cdktf.numberToTerraform(struct!.state),
  }
}


export function dataThunderScaleoutDebugClusterStatusOperOperActiveDeviceCountListStructToHclTerraform(struct?: DataThunderScaleoutDebugClusterStatusOperOperActiveDeviceCountListStruct | cdktf.IResolvable): any {
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
    state: {
      value: cdktf.numberToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutDebugClusterStatusOperOperActiveDeviceCountListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderScaleoutDebugClusterStatusOperOperActiveDeviceCountListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceId = this._deviceId;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutDebugClusterStatusOperOperActiveDeviceCountListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceId = undefined;
      this._state = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceId = value.deviceId;
      this._state = value.state;
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

  // state - computed: false, optional: true, required: false
  private _state?: number; 
  public get state() {
    return this.getNumberAttribute('state');
  }
  public set state(value: number) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

export class DataThunderScaleoutDebugClusterStatusOperOperActiveDeviceCountListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderScaleoutDebugClusterStatusOperOperActiveDeviceCountListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderScaleoutDebugClusterStatusOperOperActiveDeviceCountListStructOutputReference {
    return new DataThunderScaleoutDebugClusterStatusOperOperActiveDeviceCountListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderScaleoutDebugClusterStatusOperOperScaleoutDeviceGroupListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_cluster_status_oper#index DataThunderScaleoutDebugClusterStatusOper#index}
  */
  readonly index?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_cluster_status_oper#members DataThunderScaleoutDebugClusterStatusOper#members}
  */
  readonly members?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_cluster_status_oper#members_low64 DataThunderScaleoutDebugClusterStatusOper#members_low64}
  */
  readonly membersLow64?: number;
}

export function dataThunderScaleoutDebugClusterStatusOperOperScaleoutDeviceGroupListStructToTerraform(struct?: DataThunderScaleoutDebugClusterStatusOperOperScaleoutDeviceGroupListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.numberToTerraform(struct!.index),
    members: cdktf.numberToTerraform(struct!.members),
    members_low64: cdktf.numberToTerraform(struct!.membersLow64),
  }
}


export function dataThunderScaleoutDebugClusterStatusOperOperScaleoutDeviceGroupListStructToHclTerraform(struct?: DataThunderScaleoutDebugClusterStatusOperOperScaleoutDeviceGroupListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    members: {
      value: cdktf.numberToHclTerraform(struct!.members),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    members_low64: {
      value: cdktf.numberToHclTerraform(struct!.membersLow64),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutDebugClusterStatusOperOperScaleoutDeviceGroupListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderScaleoutDebugClusterStatusOperOperScaleoutDeviceGroupListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._members !== undefined) {
      hasAnyValues = true;
      internalValueResult.members = this._members;
    }
    if (this._membersLow64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.membersLow64 = this._membersLow64;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutDebugClusterStatusOperOperScaleoutDeviceGroupListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._index = undefined;
      this._members = undefined;
      this._membersLow64 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._index = value.index;
      this._members = value.members;
      this._membersLow64 = value.membersLow64;
    }
  }

  // index - computed: false, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // members - computed: false, optional: true, required: false
  private _members?: number; 
  public get members() {
    return this.getNumberAttribute('members');
  }
  public set members(value: number) {
    this._members = value;
  }
  public resetMembers() {
    this._members = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members;
  }

  // members_low64 - computed: false, optional: true, required: false
  private _membersLow64?: number; 
  public get membersLow64() {
    return this.getNumberAttribute('members_low64');
  }
  public set membersLow64(value: number) {
    this._membersLow64 = value;
  }
  public resetMembersLow64() {
    this._membersLow64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersLow64Input() {
    return this._membersLow64;
  }
}

export class DataThunderScaleoutDebugClusterStatusOperOperScaleoutDeviceGroupListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderScaleoutDebugClusterStatusOperOperScaleoutDeviceGroupListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderScaleoutDebugClusterStatusOperOperScaleoutDeviceGroupListStructOutputReference {
    return new DataThunderScaleoutDebugClusterStatusOperOperScaleoutDeviceGroupListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderScaleoutDebugClusterStatusOperOperScaleoutDeviceListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_cluster_status_oper#device_id DataThunderScaleoutDebugClusterStatusOper#device_id}
  */
  readonly deviceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_cluster_status_oper#state DataThunderScaleoutDebugClusterStatusOper#state}
  */
  readonly state?: number;
}

export function dataThunderScaleoutDebugClusterStatusOperOperScaleoutDeviceListStructToTerraform(struct?: DataThunderScaleoutDebugClusterStatusOperOperScaleoutDeviceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_id: cdktf.numberToTerraform(struct!.deviceId),
    state: cdktf.numberToTerraform(struct!.state),
  }
}


export function dataThunderScaleoutDebugClusterStatusOperOperScaleoutDeviceListStructToHclTerraform(struct?: DataThunderScaleoutDebugClusterStatusOperOperScaleoutDeviceListStruct | cdktf.IResolvable): any {
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
    state: {
      value: cdktf.numberToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutDebugClusterStatusOperOperScaleoutDeviceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderScaleoutDebugClusterStatusOperOperScaleoutDeviceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceId = this._deviceId;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutDebugClusterStatusOperOperScaleoutDeviceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceId = undefined;
      this._state = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceId = value.deviceId;
      this._state = value.state;
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

  // state - computed: false, optional: true, required: false
  private _state?: number; 
  public get state() {
    return this.getNumberAttribute('state');
  }
  public set state(value: number) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

export class DataThunderScaleoutDebugClusterStatusOperOperScaleoutDeviceListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderScaleoutDebugClusterStatusOperOperScaleoutDeviceListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderScaleoutDebugClusterStatusOperOperScaleoutDeviceListStructOutputReference {
    return new DataThunderScaleoutDebugClusterStatusOperOperScaleoutDeviceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderScaleoutDebugClusterStatusOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_cluster_status_oper#active_device_count DataThunderScaleoutDebugClusterStatusOper#active_device_count}
  */
  readonly activeDeviceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_cluster_status_oper#cluster_disc_timer_running DataThunderScaleoutDebugClusterStatusOper#cluster_disc_timer_running}
  */
  readonly clusterDiscTimerRunning?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_cluster_status_oper#device_id DataThunderScaleoutDebugClusterStatusOper#device_id}
  */
  readonly deviceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_cluster_status_oper#explicitly_stop_service DataThunderScaleoutDebugClusterStatusOper#explicitly_stop_service}
  */
  readonly explicitlyStopService?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_cluster_status_oper#follow_vcs DataThunderScaleoutDebugClusterStatusOper#follow_vcs}
  */
  readonly followVcs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_cluster_status_oper#g_scaleout DataThunderScaleoutDebugClusterStatusOper#g_scaleout}
  */
  readonly gScaleout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_cluster_status_oper#maintain_mode_configured DataThunderScaleoutDebugClusterStatusOper#maintain_mode_configured}
  */
  readonly maintainModeConfigured?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_cluster_status_oper#min_node_num DataThunderScaleoutDebugClusterStatusOper#min_node_num}
  */
  readonly minNodeNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_cluster_status_oper#priority DataThunderScaleoutDebugClusterStatusOper#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_cluster_status_oper#scaleout_current_role DataThunderScaleoutDebugClusterStatusOper#scaleout_current_role}
  */
  readonly scaleoutCurrentRole?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_cluster_status_oper#scaleout_device_id DataThunderScaleoutDebugClusterStatusOper#scaleout_device_id}
  */
  readonly scaleoutDeviceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_cluster_status_oper#scaleout_enabled DataThunderScaleoutDebugClusterStatusOper#scaleout_enabled}
  */
  readonly scaleoutEnabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_cluster_status_oper#scaleout_priority DataThunderScaleoutDebugClusterStatusOper#scaleout_priority}
  */
  readonly scaleoutPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_cluster_status_oper#vcs_device_id DataThunderScaleoutDebugClusterStatusOper#vcs_device_id}
  */
  readonly vcsDeviceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_cluster_status_oper#vcs_priority DataThunderScaleoutDebugClusterStatusOper#vcs_priority}
  */
  readonly vcsPriority?: number;
  /**
  * active_device_count_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_cluster_status_oper#active_device_count_list DataThunderScaleoutDebugClusterStatusOper#active_device_count_list}
  */
  readonly activeDeviceCountList?: DataThunderScaleoutDebugClusterStatusOperOperActiveDeviceCountListStruct[] | cdktf.IResolvable;
  /**
  * scaleout_device_group_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_cluster_status_oper#scaleout_device_group_list DataThunderScaleoutDebugClusterStatusOper#scaleout_device_group_list}
  */
  readonly scaleoutDeviceGroupList?: DataThunderScaleoutDebugClusterStatusOperOperScaleoutDeviceGroupListStruct[] | cdktf.IResolvable;
  /**
  * scaleout_device_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_cluster_status_oper#scaleout_device_list DataThunderScaleoutDebugClusterStatusOper#scaleout_device_list}
  */
  readonly scaleoutDeviceList?: DataThunderScaleoutDebugClusterStatusOperOperScaleoutDeviceListStruct[] | cdktf.IResolvable;
}

export function dataThunderScaleoutDebugClusterStatusOperOperToTerraform(struct?: DataThunderScaleoutDebugClusterStatusOperOperOutputReference | DataThunderScaleoutDebugClusterStatusOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_device_count: cdktf.numberToTerraform(struct!.activeDeviceCount),
    cluster_disc_timer_running: cdktf.numberToTerraform(struct!.clusterDiscTimerRunning),
    device_id: cdktf.numberToTerraform(struct!.deviceId),
    explicitly_stop_service: cdktf.numberToTerraform(struct!.explicitlyStopService),
    follow_vcs: cdktf.numberToTerraform(struct!.followVcs),
    g_scaleout: cdktf.numberToTerraform(struct!.gScaleout),
    maintain_mode_configured: cdktf.numberToTerraform(struct!.maintainModeConfigured),
    min_node_num: cdktf.numberToTerraform(struct!.minNodeNum),
    priority: cdktf.numberToTerraform(struct!.priority),
    scaleout_current_role: cdktf.numberToTerraform(struct!.scaleoutCurrentRole),
    scaleout_device_id: cdktf.numberToTerraform(struct!.scaleoutDeviceId),
    scaleout_enabled: cdktf.numberToTerraform(struct!.scaleoutEnabled),
    scaleout_priority: cdktf.numberToTerraform(struct!.scaleoutPriority),
    vcs_device_id: cdktf.numberToTerraform(struct!.vcsDeviceId),
    vcs_priority: cdktf.numberToTerraform(struct!.vcsPriority),
    active_device_count_list: cdktf.listMapper(dataThunderScaleoutDebugClusterStatusOperOperActiveDeviceCountListStructToTerraform, true)(struct!.activeDeviceCountList),
    scaleout_device_group_list: cdktf.listMapper(dataThunderScaleoutDebugClusterStatusOperOperScaleoutDeviceGroupListStructToTerraform, true)(struct!.scaleoutDeviceGroupList),
    scaleout_device_list: cdktf.listMapper(dataThunderScaleoutDebugClusterStatusOperOperScaleoutDeviceListStructToTerraform, true)(struct!.scaleoutDeviceList),
  }
}


export function dataThunderScaleoutDebugClusterStatusOperOperToHclTerraform(struct?: DataThunderScaleoutDebugClusterStatusOperOperOutputReference | DataThunderScaleoutDebugClusterStatusOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_device_count: {
      value: cdktf.numberToHclTerraform(struct!.activeDeviceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cluster_disc_timer_running: {
      value: cdktf.numberToHclTerraform(struct!.clusterDiscTimerRunning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    device_id: {
      value: cdktf.numberToHclTerraform(struct!.deviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    explicitly_stop_service: {
      value: cdktf.numberToHclTerraform(struct!.explicitlyStopService),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    follow_vcs: {
      value: cdktf.numberToHclTerraform(struct!.followVcs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    g_scaleout: {
      value: cdktf.numberToHclTerraform(struct!.gScaleout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maintain_mode_configured: {
      value: cdktf.numberToHclTerraform(struct!.maintainModeConfigured),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_node_num: {
      value: cdktf.numberToHclTerraform(struct!.minNodeNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scaleout_current_role: {
      value: cdktf.numberToHclTerraform(struct!.scaleoutCurrentRole),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scaleout_device_id: {
      value: cdktf.numberToHclTerraform(struct!.scaleoutDeviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scaleout_enabled: {
      value: cdktf.numberToHclTerraform(struct!.scaleoutEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scaleout_priority: {
      value: cdktf.numberToHclTerraform(struct!.scaleoutPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vcs_device_id: {
      value: cdktf.numberToHclTerraform(struct!.vcsDeviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vcs_priority: {
      value: cdktf.numberToHclTerraform(struct!.vcsPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    active_device_count_list: {
      value: cdktf.listMapperHcl(dataThunderScaleoutDebugClusterStatusOperOperActiveDeviceCountListStructToHclTerraform, true)(struct!.activeDeviceCountList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderScaleoutDebugClusterStatusOperOperActiveDeviceCountListStructList",
    },
    scaleout_device_group_list: {
      value: cdktf.listMapperHcl(dataThunderScaleoutDebugClusterStatusOperOperScaleoutDeviceGroupListStructToHclTerraform, true)(struct!.scaleoutDeviceGroupList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderScaleoutDebugClusterStatusOperOperScaleoutDeviceGroupListStructList",
    },
    scaleout_device_list: {
      value: cdktf.listMapperHcl(dataThunderScaleoutDebugClusterStatusOperOperScaleoutDeviceListStructToHclTerraform, true)(struct!.scaleoutDeviceList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderScaleoutDebugClusterStatusOperOperScaleoutDeviceListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutDebugClusterStatusOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderScaleoutDebugClusterStatusOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeDeviceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeDeviceCount = this._activeDeviceCount;
    }
    if (this._clusterDiscTimerRunning !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDiscTimerRunning = this._clusterDiscTimerRunning;
    }
    if (this._deviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceId = this._deviceId;
    }
    if (this._explicitlyStopService !== undefined) {
      hasAnyValues = true;
      internalValueResult.explicitlyStopService = this._explicitlyStopService;
    }
    if (this._followVcs !== undefined) {
      hasAnyValues = true;
      internalValueResult.followVcs = this._followVcs;
    }
    if (this._gScaleout !== undefined) {
      hasAnyValues = true;
      internalValueResult.gScaleout = this._gScaleout;
    }
    if (this._maintainModeConfigured !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintainModeConfigured = this._maintainModeConfigured;
    }
    if (this._minNodeNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNodeNum = this._minNodeNum;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._scaleoutCurrentRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleoutCurrentRole = this._scaleoutCurrentRole;
    }
    if (this._scaleoutDeviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleoutDeviceId = this._scaleoutDeviceId;
    }
    if (this._scaleoutEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleoutEnabled = this._scaleoutEnabled;
    }
    if (this._scaleoutPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleoutPriority = this._scaleoutPriority;
    }
    if (this._vcsDeviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcsDeviceId = this._vcsDeviceId;
    }
    if (this._vcsPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcsPriority = this._vcsPriority;
    }
    if (this._activeDeviceCountList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeDeviceCountList = this._activeDeviceCountList?.internalValue;
    }
    if (this._scaleoutDeviceGroupList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleoutDeviceGroupList = this._scaleoutDeviceGroupList?.internalValue;
    }
    if (this._scaleoutDeviceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleoutDeviceList = this._scaleoutDeviceList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutDebugClusterStatusOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeDeviceCount = undefined;
      this._clusterDiscTimerRunning = undefined;
      this._deviceId = undefined;
      this._explicitlyStopService = undefined;
      this._followVcs = undefined;
      this._gScaleout = undefined;
      this._maintainModeConfigured = undefined;
      this._minNodeNum = undefined;
      this._priority = undefined;
      this._scaleoutCurrentRole = undefined;
      this._scaleoutDeviceId = undefined;
      this._scaleoutEnabled = undefined;
      this._scaleoutPriority = undefined;
      this._vcsDeviceId = undefined;
      this._vcsPriority = undefined;
      this._activeDeviceCountList.internalValue = undefined;
      this._scaleoutDeviceGroupList.internalValue = undefined;
      this._scaleoutDeviceList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeDeviceCount = value.activeDeviceCount;
      this._clusterDiscTimerRunning = value.clusterDiscTimerRunning;
      this._deviceId = value.deviceId;
      this._explicitlyStopService = value.explicitlyStopService;
      this._followVcs = value.followVcs;
      this._gScaleout = value.gScaleout;
      this._maintainModeConfigured = value.maintainModeConfigured;
      this._minNodeNum = value.minNodeNum;
      this._priority = value.priority;
      this._scaleoutCurrentRole = value.scaleoutCurrentRole;
      this._scaleoutDeviceId = value.scaleoutDeviceId;
      this._scaleoutEnabled = value.scaleoutEnabled;
      this._scaleoutPriority = value.scaleoutPriority;
      this._vcsDeviceId = value.vcsDeviceId;
      this._vcsPriority = value.vcsPriority;
      this._activeDeviceCountList.internalValue = value.activeDeviceCountList;
      this._scaleoutDeviceGroupList.internalValue = value.scaleoutDeviceGroupList;
      this._scaleoutDeviceList.internalValue = value.scaleoutDeviceList;
    }
  }

  // active_device_count - computed: false, optional: true, required: false
  private _activeDeviceCount?: number; 
  public get activeDeviceCount() {
    return this.getNumberAttribute('active_device_count');
  }
  public set activeDeviceCount(value: number) {
    this._activeDeviceCount = value;
  }
  public resetActiveDeviceCount() {
    this._activeDeviceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDeviceCountInput() {
    return this._activeDeviceCount;
  }

  // cluster_disc_timer_running - computed: false, optional: true, required: false
  private _clusterDiscTimerRunning?: number; 
  public get clusterDiscTimerRunning() {
    return this.getNumberAttribute('cluster_disc_timer_running');
  }
  public set clusterDiscTimerRunning(value: number) {
    this._clusterDiscTimerRunning = value;
  }
  public resetClusterDiscTimerRunning() {
    this._clusterDiscTimerRunning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDiscTimerRunningInput() {
    return this._clusterDiscTimerRunning;
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

  // explicitly_stop_service - computed: false, optional: true, required: false
  private _explicitlyStopService?: number; 
  public get explicitlyStopService() {
    return this.getNumberAttribute('explicitly_stop_service');
  }
  public set explicitlyStopService(value: number) {
    this._explicitlyStopService = value;
  }
  public resetExplicitlyStopService() {
    this._explicitlyStopService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitlyStopServiceInput() {
    return this._explicitlyStopService;
  }

  // follow_vcs - computed: false, optional: true, required: false
  private _followVcs?: number; 
  public get followVcs() {
    return this.getNumberAttribute('follow_vcs');
  }
  public set followVcs(value: number) {
    this._followVcs = value;
  }
  public resetFollowVcs() {
    this._followVcs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followVcsInput() {
    return this._followVcs;
  }

  // g_scaleout - computed: false, optional: true, required: false
  private _gScaleout?: number; 
  public get gScaleout() {
    return this.getNumberAttribute('g_scaleout');
  }
  public set gScaleout(value: number) {
    this._gScaleout = value;
  }
  public resetGScaleout() {
    this._gScaleout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gScaleoutInput() {
    return this._gScaleout;
  }

  // maintain_mode_configured - computed: false, optional: true, required: false
  private _maintainModeConfigured?: number; 
  public get maintainModeConfigured() {
    return this.getNumberAttribute('maintain_mode_configured');
  }
  public set maintainModeConfigured(value: number) {
    this._maintainModeConfigured = value;
  }
  public resetMaintainModeConfigured() {
    this._maintainModeConfigured = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainModeConfiguredInput() {
    return this._maintainModeConfigured;
  }

  // min_node_num - computed: false, optional: true, required: false
  private _minNodeNum?: number; 
  public get minNodeNum() {
    return this.getNumberAttribute('min_node_num');
  }
  public set minNodeNum(value: number) {
    this._minNodeNum = value;
  }
  public resetMinNodeNum() {
    this._minNodeNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodeNumInput() {
    return this._minNodeNum;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // scaleout_current_role - computed: false, optional: true, required: false
  private _scaleoutCurrentRole?: number; 
  public get scaleoutCurrentRole() {
    return this.getNumberAttribute('scaleout_current_role');
  }
  public set scaleoutCurrentRole(value: number) {
    this._scaleoutCurrentRole = value;
  }
  public resetScaleoutCurrentRole() {
    this._scaleoutCurrentRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleoutCurrentRoleInput() {
    return this._scaleoutCurrentRole;
  }

  // scaleout_device_id - computed: false, optional: true, required: false
  private _scaleoutDeviceId?: number; 
  public get scaleoutDeviceId() {
    return this.getNumberAttribute('scaleout_device_id');
  }
  public set scaleoutDeviceId(value: number) {
    this._scaleoutDeviceId = value;
  }
  public resetScaleoutDeviceId() {
    this._scaleoutDeviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleoutDeviceIdInput() {
    return this._scaleoutDeviceId;
  }

  // scaleout_enabled - computed: false, optional: true, required: false
  private _scaleoutEnabled?: number; 
  public get scaleoutEnabled() {
    return this.getNumberAttribute('scaleout_enabled');
  }
  public set scaleoutEnabled(value: number) {
    this._scaleoutEnabled = value;
  }
  public resetScaleoutEnabled() {
    this._scaleoutEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleoutEnabledInput() {
    return this._scaleoutEnabled;
  }

  // scaleout_priority - computed: false, optional: true, required: false
  private _scaleoutPriority?: number; 
  public get scaleoutPriority() {
    return this.getNumberAttribute('scaleout_priority');
  }
  public set scaleoutPriority(value: number) {
    this._scaleoutPriority = value;
  }
  public resetScaleoutPriority() {
    this._scaleoutPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleoutPriorityInput() {
    return this._scaleoutPriority;
  }

  // vcs_device_id - computed: false, optional: true, required: false
  private _vcsDeviceId?: number; 
  public get vcsDeviceId() {
    return this.getNumberAttribute('vcs_device_id');
  }
  public set vcsDeviceId(value: number) {
    this._vcsDeviceId = value;
  }
  public resetVcsDeviceId() {
    this._vcsDeviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcsDeviceIdInput() {
    return this._vcsDeviceId;
  }

  // vcs_priority - computed: false, optional: true, required: false
  private _vcsPriority?: number; 
  public get vcsPriority() {
    return this.getNumberAttribute('vcs_priority');
  }
  public set vcsPriority(value: number) {
    this._vcsPriority = value;
  }
  public resetVcsPriority() {
    this._vcsPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcsPriorityInput() {
    return this._vcsPriority;
  }

  // active_device_count_list - computed: false, optional: true, required: false
  private _activeDeviceCountList = new DataThunderScaleoutDebugClusterStatusOperOperActiveDeviceCountListStructList(this, "active_device_count_list", false);
  public get activeDeviceCountList() {
    return this._activeDeviceCountList;
  }
  public putActiveDeviceCountList(value: DataThunderScaleoutDebugClusterStatusOperOperActiveDeviceCountListStruct[] | cdktf.IResolvable) {
    this._activeDeviceCountList.internalValue = value;
  }
  public resetActiveDeviceCountList() {
    this._activeDeviceCountList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDeviceCountListInput() {
    return this._activeDeviceCountList.internalValue;
  }

  // scaleout_device_group_list - computed: false, optional: true, required: false
  private _scaleoutDeviceGroupList = new DataThunderScaleoutDebugClusterStatusOperOperScaleoutDeviceGroupListStructList(this, "scaleout_device_group_list", false);
  public get scaleoutDeviceGroupList() {
    return this._scaleoutDeviceGroupList;
  }
  public putScaleoutDeviceGroupList(value: DataThunderScaleoutDebugClusterStatusOperOperScaleoutDeviceGroupListStruct[] | cdktf.IResolvable) {
    this._scaleoutDeviceGroupList.internalValue = value;
  }
  public resetScaleoutDeviceGroupList() {
    this._scaleoutDeviceGroupList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleoutDeviceGroupListInput() {
    return this._scaleoutDeviceGroupList.internalValue;
  }

  // scaleout_device_list - computed: false, optional: true, required: false
  private _scaleoutDeviceList = new DataThunderScaleoutDebugClusterStatusOperOperScaleoutDeviceListStructList(this, "scaleout_device_list", false);
  public get scaleoutDeviceList() {
    return this._scaleoutDeviceList;
  }
  public putScaleoutDeviceList(value: DataThunderScaleoutDebugClusterStatusOperOperScaleoutDeviceListStruct[] | cdktf.IResolvable) {
    this._scaleoutDeviceList.internalValue = value;
  }
  public resetScaleoutDeviceList() {
    this._scaleoutDeviceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleoutDeviceListInput() {
    return this._scaleoutDeviceList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_cluster_status_oper thunder_scaleout_debug_cluster_status_oper}
*/
export class DataThunderScaleoutDebugClusterStatusOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_scaleout_debug_cluster_status_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderScaleoutDebugClusterStatusOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderScaleoutDebugClusterStatusOper to import
  * @param importFromId The id of the existing DataThunderScaleoutDebugClusterStatusOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_cluster_status_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderScaleoutDebugClusterStatusOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_scaleout_debug_cluster_status_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_cluster_status_oper thunder_scaleout_debug_cluster_status_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderScaleoutDebugClusterStatusOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderScaleoutDebugClusterStatusOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_scaleout_debug_cluster_status_oper',
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
  private _oper = new DataThunderScaleoutDebugClusterStatusOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderScaleoutDebugClusterStatusOperOper) {
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
      oper: dataThunderScaleoutDebugClusterStatusOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderScaleoutDebugClusterStatusOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderScaleoutDebugClusterStatusOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
