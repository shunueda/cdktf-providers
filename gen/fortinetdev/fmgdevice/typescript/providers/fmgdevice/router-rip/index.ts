// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterRipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#default_information_originate RouterRip#default_information_originate}
  */
  readonly defaultInformationOriginate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#default_metric RouterRip#default_metric}
  */
  readonly defaultMetric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#device_name RouterRip#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#device_vdom RouterRip#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#dynamic_sort_subtable RouterRip#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#garbage_timer RouterRip#garbage_timer}
  */
  readonly garbageTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#id RouterRip#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#max_out_metric RouterRip#max_out_metric}
  */
  readonly maxOutMetric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#passive_interface RouterRip#passive_interface}
  */
  readonly passiveInterface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#recv_buffer_size RouterRip#recv_buffer_size}
  */
  readonly recvBufferSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#timeout_timer RouterRip#timeout_timer}
  */
  readonly timeoutTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#update_timer RouterRip#update_timer}
  */
  readonly updateTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#version RouterRip#version}
  */
  readonly version?: string;
  /**
  * distance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#distance RouterRip#distance}
  */
  readonly distance?: RouterRipDistance[] | cdktf.IResolvable;
  /**
  * distribute_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#distribute_list RouterRip#distribute_list}
  */
  readonly distributeList?: RouterRipDistributeListStruct[] | cdktf.IResolvable;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#interface RouterRip#interface}
  */
  readonly interface?: RouterRipInterface[] | cdktf.IResolvable;
  /**
  * neighbor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#neighbor RouterRip#neighbor}
  */
  readonly neighbor?: RouterRipNeighbor[] | cdktf.IResolvable;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#network RouterRip#network}
  */
  readonly network?: RouterRipNetwork[] | cdktf.IResolvable;
  /**
  * offset_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#offset_list RouterRip#offset_list}
  */
  readonly offsetList?: RouterRipOffsetListStruct[] | cdktf.IResolvable;
  /**
  * redistribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#redistribute RouterRip#redistribute}
  */
  readonly redistribute?: RouterRipRedistribute;
}
export interface RouterRipDistance {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#access_list RouterRip#access_list}
  */
  readonly accessList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#distance RouterRip#distance}
  */
  readonly distance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#id RouterRip#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#prefix RouterRip#prefix}
  */
  readonly prefix?: string[];
}

export function routerRipDistanceToTerraform(struct?: RouterRipDistance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessList),
    distance: cdktf.numberToTerraform(struct!.distance),
    id: cdktf.numberToTerraform(struct!.id),
    prefix: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefix),
  }
}


export function routerRipDistanceToHclTerraform(struct?: RouterRipDistance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    distance: {
      value: cdktf.numberToHclTerraform(struct!.distance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefix),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterRipDistanceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterRipDistance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    if (this._distance !== undefined) {
      hasAnyValues = true;
      internalValueResult.distance = this._distance;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterRipDistance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessList = undefined;
      this._distance = undefined;
      this._id = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessList = value.accessList;
      this._distance = value.distance;
      this._id = value.id;
      this._prefix = value.prefix;
    }
  }

  // access_list - computed: true, optional: true, required: false
  private _accessList?: string[]; 
  public get accessList() {
    return cdktf.Fn.tolist(this.getListAttribute('access_list'));
  }
  public set accessList(value: string[]) {
    this._accessList = value;
  }
  public resetAccessList() {
    this._accessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList;
  }

  // distance - computed: false, optional: true, required: false
  private _distance?: number; 
  public get distance() {
    return this.getNumberAttribute('distance');
  }
  public set distance(value: number) {
    this._distance = value;
  }
  public resetDistance() {
    this._distance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceInput() {
    return this._distance;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string[]; 
  public get prefix() {
    return this.getListAttribute('prefix');
  }
  public set prefix(value: string[]) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class RouterRipDistanceList extends cdktf.ComplexList {
  public internalValue? : RouterRipDistance[] | cdktf.IResolvable

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
  public get(index: number): RouterRipDistanceOutputReference {
    return new RouterRipDistanceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterRipDistributeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#direction RouterRip#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#id RouterRip#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#interface RouterRip#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#listname RouterRip#listname}
  */
  readonly listname?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#status RouterRip#status}
  */
  readonly status?: string;
}

export function routerRipDistributeListStructToTerraform(struct?: RouterRipDistributeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    id: cdktf.numberToTerraform(struct!.id),
    interface: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interface),
    listname: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.listname),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function routerRipDistributeListStructToHclTerraform(struct?: RouterRipDistributeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interface),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    listname: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.listname),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterRipDistributeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterRipDistributeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._listname !== undefined) {
      hasAnyValues = true;
      internalValueResult.listname = this._listname;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterRipDistributeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._id = undefined;
      this._interface = undefined;
      this._listname = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._id = value.id;
      this._interface = value.interface;
      this._listname = value.listname;
      this._status = value.status;
    }
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // interface - computed: true, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // listname - computed: true, optional: true, required: false
  private _listname?: string[]; 
  public get listname() {
    return cdktf.Fn.tolist(this.getListAttribute('listname'));
  }
  public set listname(value: string[]) {
    this._listname = value;
  }
  public resetListname() {
    this._listname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listnameInput() {
    return this._listname;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class RouterRipDistributeListStructList extends cdktf.ComplexList {
  public internalValue? : RouterRipDistributeListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterRipDistributeListStructOutputReference {
    return new RouterRipDistributeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterRipInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#auth_keychain RouterRip#auth_keychain}
  */
  readonly authKeychain?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#auth_mode RouterRip#auth_mode}
  */
  readonly authMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#auth_string RouterRip#auth_string}
  */
  readonly authString?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#flags RouterRip#flags}
  */
  readonly flags?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#name RouterRip#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#receive_version RouterRip#receive_version}
  */
  readonly receiveVersion?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#send_version RouterRip#send_version}
  */
  readonly sendVersion?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#send_version2_broadcast RouterRip#send_version2_broadcast}
  */
  readonly sendVersion2Broadcast?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#split_horizon RouterRip#split_horizon}
  */
  readonly splitHorizon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#split_horizon_status RouterRip#split_horizon_status}
  */
  readonly splitHorizonStatus?: string;
}

export function routerRipInterfaceToTerraform(struct?: RouterRipInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_keychain: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authKeychain),
    auth_mode: cdktf.stringToTerraform(struct!.authMode),
    auth_string: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authString),
    flags: cdktf.numberToTerraform(struct!.flags),
    name: cdktf.stringToTerraform(struct!.name),
    receive_version: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.receiveVersion),
    send_version: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sendVersion),
    send_version2_broadcast: cdktf.stringToTerraform(struct!.sendVersion2Broadcast),
    split_horizon: cdktf.stringToTerraform(struct!.splitHorizon),
    split_horizon_status: cdktf.stringToTerraform(struct!.splitHorizonStatus),
  }
}


export function routerRipInterfaceToHclTerraform(struct?: RouterRipInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_keychain: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authKeychain),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    auth_mode: {
      value: cdktf.stringToHclTerraform(struct!.authMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_string: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authString),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    flags: {
      value: cdktf.numberToHclTerraform(struct!.flags),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    receive_version: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.receiveVersion),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    send_version: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sendVersion),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    send_version2_broadcast: {
      value: cdktf.stringToHclTerraform(struct!.sendVersion2Broadcast),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    split_horizon: {
      value: cdktf.stringToHclTerraform(struct!.splitHorizon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    split_horizon_status: {
      value: cdktf.stringToHclTerraform(struct!.splitHorizonStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterRipInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterRipInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authKeychain !== undefined) {
      hasAnyValues = true;
      internalValueResult.authKeychain = this._authKeychain;
    }
    if (this._authMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMode = this._authMode;
    }
    if (this._authString !== undefined) {
      hasAnyValues = true;
      internalValueResult.authString = this._authString;
    }
    if (this._flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._receiveVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiveVersion = this._receiveVersion;
    }
    if (this._sendVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendVersion = this._sendVersion;
    }
    if (this._sendVersion2Broadcast !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendVersion2Broadcast = this._sendVersion2Broadcast;
    }
    if (this._splitHorizon !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitHorizon = this._splitHorizon;
    }
    if (this._splitHorizonStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitHorizonStatus = this._splitHorizonStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterRipInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authKeychain = undefined;
      this._authMode = undefined;
      this._authString = undefined;
      this._flags = undefined;
      this._name = undefined;
      this._receiveVersion = undefined;
      this._sendVersion = undefined;
      this._sendVersion2Broadcast = undefined;
      this._splitHorizon = undefined;
      this._splitHorizonStatus = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authKeychain = value.authKeychain;
      this._authMode = value.authMode;
      this._authString = value.authString;
      this._flags = value.flags;
      this._name = value.name;
      this._receiveVersion = value.receiveVersion;
      this._sendVersion = value.sendVersion;
      this._sendVersion2Broadcast = value.sendVersion2Broadcast;
      this._splitHorizon = value.splitHorizon;
      this._splitHorizonStatus = value.splitHorizonStatus;
    }
  }

  // auth_keychain - computed: true, optional: true, required: false
  private _authKeychain?: string[]; 
  public get authKeychain() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_keychain'));
  }
  public set authKeychain(value: string[]) {
    this._authKeychain = value;
  }
  public resetAuthKeychain() {
    this._authKeychain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeychainInput() {
    return this._authKeychain;
  }

  // auth_mode - computed: true, optional: true, required: false
  private _authMode?: string; 
  public get authMode() {
    return this.getStringAttribute('auth_mode');
  }
  public set authMode(value: string) {
    this._authMode = value;
  }
  public resetAuthMode() {
    this._authMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authModeInput() {
    return this._authMode;
  }

  // auth_string - computed: true, optional: true, required: false
  private _authString?: string[]; 
  public get authString() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_string'));
  }
  public set authString(value: string[]) {
    this._authString = value;
  }
  public resetAuthString() {
    this._authString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authStringInput() {
    return this._authString;
  }

  // flags - computed: true, optional: true, required: false
  private _flags?: number; 
  public get flags() {
    return this.getNumberAttribute('flags');
  }
  public set flags(value: number) {
    this._flags = value;
  }
  public resetFlags() {
    this._flags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // receive_version - computed: true, optional: true, required: false
  private _receiveVersion?: string[]; 
  public get receiveVersion() {
    return cdktf.Fn.tolist(this.getListAttribute('receive_version'));
  }
  public set receiveVersion(value: string[]) {
    this._receiveVersion = value;
  }
  public resetReceiveVersion() {
    this._receiveVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveVersionInput() {
    return this._receiveVersion;
  }

  // send_version - computed: true, optional: true, required: false
  private _sendVersion?: string[]; 
  public get sendVersion() {
    return cdktf.Fn.tolist(this.getListAttribute('send_version'));
  }
  public set sendVersion(value: string[]) {
    this._sendVersion = value;
  }
  public resetSendVersion() {
    this._sendVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendVersionInput() {
    return this._sendVersion;
  }

  // send_version2_broadcast - computed: false, optional: true, required: false
  private _sendVersion2Broadcast?: string; 
  public get sendVersion2Broadcast() {
    return this.getStringAttribute('send_version2_broadcast');
  }
  public set sendVersion2Broadcast(value: string) {
    this._sendVersion2Broadcast = value;
  }
  public resetSendVersion2Broadcast() {
    this._sendVersion2Broadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendVersion2BroadcastInput() {
    return this._sendVersion2Broadcast;
  }

  // split_horizon - computed: true, optional: true, required: false
  private _splitHorizon?: string; 
  public get splitHorizon() {
    return this.getStringAttribute('split_horizon');
  }
  public set splitHorizon(value: string) {
    this._splitHorizon = value;
  }
  public resetSplitHorizon() {
    this._splitHorizon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitHorizonInput() {
    return this._splitHorizon;
  }

  // split_horizon_status - computed: true, optional: true, required: false
  private _splitHorizonStatus?: string; 
  public get splitHorizonStatus() {
    return this.getStringAttribute('split_horizon_status');
  }
  public set splitHorizonStatus(value: string) {
    this._splitHorizonStatus = value;
  }
  public resetSplitHorizonStatus() {
    this._splitHorizonStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitHorizonStatusInput() {
    return this._splitHorizonStatus;
  }
}

export class RouterRipInterfaceList extends cdktf.ComplexList {
  public internalValue? : RouterRipInterface[] | cdktf.IResolvable

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
  public get(index: number): RouterRipInterfaceOutputReference {
    return new RouterRipInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterRipNeighbor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#id RouterRip#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#ip RouterRip#ip}
  */
  readonly ip?: string;
}

export function routerRipNeighborToTerraform(struct?: RouterRipNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function routerRipNeighborToHclTerraform(struct?: RouterRipNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
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

export class RouterRipNeighborOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterRipNeighbor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterRipNeighbor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._ip = value.ip;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip - computed: true, optional: true, required: false
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

export class RouterRipNeighborList extends cdktf.ComplexList {
  public internalValue? : RouterRipNeighbor[] | cdktf.IResolvable

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
  public get(index: number): RouterRipNeighborOutputReference {
    return new RouterRipNeighborOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterRipNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#id RouterRip#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#prefix RouterRip#prefix}
  */
  readonly prefix?: string[];
}

export function routerRipNetworkToTerraform(struct?: RouterRipNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    prefix: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefix),
  }
}


export function routerRipNetworkToHclTerraform(struct?: RouterRipNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefix),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterRipNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterRipNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterRipNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._prefix = value.prefix;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string[]; 
  public get prefix() {
    return this.getListAttribute('prefix');
  }
  public set prefix(value: string[]) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class RouterRipNetworkList extends cdktf.ComplexList {
  public internalValue? : RouterRipNetwork[] | cdktf.IResolvable

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
  public get(index: number): RouterRipNetworkOutputReference {
    return new RouterRipNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterRipOffsetListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#access_list RouterRip#access_list}
  */
  readonly accessList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#direction RouterRip#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#id RouterRip#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#interface RouterRip#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#offset RouterRip#offset}
  */
  readonly offset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#status RouterRip#status}
  */
  readonly status?: string;
}

export function routerRipOffsetListStructToTerraform(struct?: RouterRipOffsetListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessList),
    direction: cdktf.stringToTerraform(struct!.direction),
    id: cdktf.numberToTerraform(struct!.id),
    interface: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interface),
    offset: cdktf.numberToTerraform(struct!.offset),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function routerRipOffsetListStructToHclTerraform(struct?: RouterRipOffsetListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interface),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    offset: {
      value: cdktf.numberToHclTerraform(struct!.offset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterRipOffsetListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterRipOffsetListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._offset !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset = this._offset;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterRipOffsetListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessList = undefined;
      this._direction = undefined;
      this._id = undefined;
      this._interface = undefined;
      this._offset = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessList = value.accessList;
      this._direction = value.direction;
      this._id = value.id;
      this._interface = value.interface;
      this._offset = value.offset;
      this._status = value.status;
    }
  }

  // access_list - computed: true, optional: true, required: false
  private _accessList?: string[]; 
  public get accessList() {
    return cdktf.Fn.tolist(this.getListAttribute('access_list'));
  }
  public set accessList(value: string[]) {
    this._accessList = value;
  }
  public resetAccessList() {
    this._accessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList;
  }

  // direction - computed: true, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // interface - computed: true, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class RouterRipOffsetListStructList extends cdktf.ComplexList {
  public internalValue? : RouterRipOffsetListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterRipOffsetListStructOutputReference {
    return new RouterRipOffsetListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterRipRedistribute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#metric RouterRip#metric}
  */
  readonly metric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#name RouterRip#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#routemap RouterRip#routemap}
  */
  readonly routemap?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#status RouterRip#status}
  */
  readonly status?: string;
}

export function routerRipRedistributeToTerraform(struct?: RouterRipRedistributeOutputReference | RouterRipRedistribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.numberToTerraform(struct!.metric),
    name: cdktf.stringToTerraform(struct!.name),
    routemap: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routemap),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function routerRipRedistributeToHclTerraform(struct?: RouterRipRedistributeOutputReference | RouterRipRedistribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routemap: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routemap),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterRipRedistributeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterRipRedistribute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._routemap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routemap = this._routemap;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterRipRedistribute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metric = undefined;
      this._name = undefined;
      this._routemap = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metric = value.metric;
      this._name = value.name;
      this._routemap = value.routemap;
      this._status = value.status;
    }
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // routemap - computed: true, optional: true, required: false
  private _routemap?: string[]; 
  public get routemap() {
    return cdktf.Fn.tolist(this.getListAttribute('routemap'));
  }
  public set routemap(value: string[]) {
    this._routemap = value;
  }
  public resetRoutemap() {
    this._routemap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routemapInput() {
    return this._routemap;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip fmgdevice_router_rip}
*/
export class RouterRip extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_router_rip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterRip resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterRip to import
  * @param importFromId The id of the existing RouterRip that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterRip to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_router_rip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_rip fmgdevice_router_rip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterRipConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RouterRipConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_router_rip',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultInformationOriginate = config.defaultInformationOriginate;
    this._defaultMetric = config.defaultMetric;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._garbageTimer = config.garbageTimer;
    this._id = config.id;
    this._maxOutMetric = config.maxOutMetric;
    this._passiveInterface = config.passiveInterface;
    this._recvBufferSize = config.recvBufferSize;
    this._timeoutTimer = config.timeoutTimer;
    this._updateTimer = config.updateTimer;
    this._version = config.version;
    this._distance.internalValue = config.distance;
    this._distributeList.internalValue = config.distributeList;
    this._interface.internalValue = config.interface;
    this._neighbor.internalValue = config.neighbor;
    this._network.internalValue = config.network;
    this._offsetList.internalValue = config.offsetList;
    this._redistribute.internalValue = config.redistribute;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_information_originate - computed: true, optional: true, required: false
  private _defaultInformationOriginate?: string; 
  public get defaultInformationOriginate() {
    return this.getStringAttribute('default_information_originate');
  }
  public set defaultInformationOriginate(value: string) {
    this._defaultInformationOriginate = value;
  }
  public resetDefaultInformationOriginate() {
    this._defaultInformationOriginate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationOriginateInput() {
    return this._defaultInformationOriginate;
  }

  // default_metric - computed: true, optional: true, required: false
  private _defaultMetric?: number; 
  public get defaultMetric() {
    return this.getNumberAttribute('default_metric');
  }
  public set defaultMetric(value: number) {
    this._defaultMetric = value;
  }
  public resetDefaultMetric() {
    this._defaultMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMetricInput() {
    return this._defaultMetric;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // garbage_timer - computed: true, optional: true, required: false
  private _garbageTimer?: number; 
  public get garbageTimer() {
    return this.getNumberAttribute('garbage_timer');
  }
  public set garbageTimer(value: number) {
    this._garbageTimer = value;
  }
  public resetGarbageTimer() {
    this._garbageTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get garbageTimerInput() {
    return this._garbageTimer;
  }

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

  // max_out_metric - computed: false, optional: true, required: false
  private _maxOutMetric?: number; 
  public get maxOutMetric() {
    return this.getNumberAttribute('max_out_metric');
  }
  public set maxOutMetric(value: number) {
    this._maxOutMetric = value;
  }
  public resetMaxOutMetric() {
    this._maxOutMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOutMetricInput() {
    return this._maxOutMetric;
  }

  // passive_interface - computed: true, optional: true, required: false
  private _passiveInterface?: string[]; 
  public get passiveInterface() {
    return cdktf.Fn.tolist(this.getListAttribute('passive_interface'));
  }
  public set passiveInterface(value: string[]) {
    this._passiveInterface = value;
  }
  public resetPassiveInterface() {
    this._passiveInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInterfaceInput() {
    return this._passiveInterface;
  }

  // recv_buffer_size - computed: false, optional: true, required: false
  private _recvBufferSize?: number; 
  public get recvBufferSize() {
    return this.getNumberAttribute('recv_buffer_size');
  }
  public set recvBufferSize(value: number) {
    this._recvBufferSize = value;
  }
  public resetRecvBufferSize() {
    this._recvBufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvBufferSizeInput() {
    return this._recvBufferSize;
  }

  // timeout_timer - computed: true, optional: true, required: false
  private _timeoutTimer?: number; 
  public get timeoutTimer() {
    return this.getNumberAttribute('timeout_timer');
  }
  public set timeoutTimer(value: number) {
    this._timeoutTimer = value;
  }
  public resetTimeoutTimer() {
    this._timeoutTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutTimerInput() {
    return this._timeoutTimer;
  }

  // update_timer - computed: true, optional: true, required: false
  private _updateTimer?: number; 
  public get updateTimer() {
    return this.getNumberAttribute('update_timer');
  }
  public set updateTimer(value: number) {
    this._updateTimer = value;
  }
  public resetUpdateTimer() {
    this._updateTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateTimerInput() {
    return this._updateTimer;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // distance - computed: false, optional: true, required: false
  private _distance = new RouterRipDistanceList(this, "distance", false);
  public get distance() {
    return this._distance;
  }
  public putDistance(value: RouterRipDistance[] | cdktf.IResolvable) {
    this._distance.internalValue = value;
  }
  public resetDistance() {
    this._distance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceInput() {
    return this._distance.internalValue;
  }

  // distribute_list - computed: false, optional: true, required: false
  private _distributeList = new RouterRipDistributeListStructList(this, "distribute_list", false);
  public get distributeList() {
    return this._distributeList;
  }
  public putDistributeList(value: RouterRipDistributeListStruct[] | cdktf.IResolvable) {
    this._distributeList.internalValue = value;
  }
  public resetDistributeList() {
    this._distributeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListInput() {
    return this._distributeList.internalValue;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new RouterRipInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: RouterRipInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // neighbor - computed: false, optional: true, required: false
  private _neighbor = new RouterRipNeighborList(this, "neighbor", false);
  public get neighbor() {
    return this._neighbor;
  }
  public putNeighbor(value: RouterRipNeighbor[] | cdktf.IResolvable) {
    this._neighbor.internalValue = value;
  }
  public resetNeighbor() {
    this._neighbor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborInput() {
    return this._neighbor.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new RouterRipNetworkList(this, "network", false);
  public get network() {
    return this._network;
  }
  public putNetwork(value: RouterRipNetwork[] | cdktf.IResolvable) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // offset_list - computed: false, optional: true, required: false
  private _offsetList = new RouterRipOffsetListStructList(this, "offset_list", false);
  public get offsetList() {
    return this._offsetList;
  }
  public putOffsetList(value: RouterRipOffsetListStruct[] | cdktf.IResolvable) {
    this._offsetList.internalValue = value;
  }
  public resetOffsetList() {
    this._offsetList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetListInput() {
    return this._offsetList.internalValue;
  }

  // redistribute - computed: false, optional: true, required: false
  private _redistribute = new RouterRipRedistributeOutputReference(this, "redistribute");
  public get redistribute() {
    return this._redistribute;
  }
  public putRedistribute(value: RouterRipRedistribute) {
    this._redistribute.internalValue = value;
  }
  public resetRedistribute() {
    this._redistribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeInput() {
    return this._redistribute.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_information_originate: cdktf.stringToTerraform(this._defaultInformationOriginate),
      default_metric: cdktf.numberToTerraform(this._defaultMetric),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      garbage_timer: cdktf.numberToTerraform(this._garbageTimer),
      id: cdktf.stringToTerraform(this._id),
      max_out_metric: cdktf.numberToTerraform(this._maxOutMetric),
      passive_interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._passiveInterface),
      recv_buffer_size: cdktf.numberToTerraform(this._recvBufferSize),
      timeout_timer: cdktf.numberToTerraform(this._timeoutTimer),
      update_timer: cdktf.numberToTerraform(this._updateTimer),
      version: cdktf.stringToTerraform(this._version),
      distance: cdktf.listMapper(routerRipDistanceToTerraform, true)(this._distance.internalValue),
      distribute_list: cdktf.listMapper(routerRipDistributeListStructToTerraform, true)(this._distributeList.internalValue),
      interface: cdktf.listMapper(routerRipInterfaceToTerraform, true)(this._interface.internalValue),
      neighbor: cdktf.listMapper(routerRipNeighborToTerraform, true)(this._neighbor.internalValue),
      network: cdktf.listMapper(routerRipNetworkToTerraform, true)(this._network.internalValue),
      offset_list: cdktf.listMapper(routerRipOffsetListStructToTerraform, true)(this._offsetList.internalValue),
      redistribute: routerRipRedistributeToTerraform(this._redistribute.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_information_originate: {
        value: cdktf.stringToHclTerraform(this._defaultInformationOriginate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_metric: {
        value: cdktf.numberToHclTerraform(this._defaultMetric),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      garbage_timer: {
        value: cdktf.numberToHclTerraform(this._garbageTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_out_metric: {
        value: cdktf.numberToHclTerraform(this._maxOutMetric),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      passive_interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._passiveInterface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      recv_buffer_size: {
        value: cdktf.numberToHclTerraform(this._recvBufferSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout_timer: {
        value: cdktf.numberToHclTerraform(this._timeoutTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      update_timer: {
        value: cdktf.numberToHclTerraform(this._updateTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distance: {
        value: cdktf.listMapperHcl(routerRipDistanceToHclTerraform, true)(this._distance.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterRipDistanceList",
      },
      distribute_list: {
        value: cdktf.listMapperHcl(routerRipDistributeListStructToHclTerraform, true)(this._distributeList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterRipDistributeListStructList",
      },
      interface: {
        value: cdktf.listMapperHcl(routerRipInterfaceToHclTerraform, true)(this._interface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterRipInterfaceList",
      },
      neighbor: {
        value: cdktf.listMapperHcl(routerRipNeighborToHclTerraform, true)(this._neighbor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterRipNeighborList",
      },
      network: {
        value: cdktf.listMapperHcl(routerRipNetworkToHclTerraform, true)(this._network.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterRipNetworkList",
      },
      offset_list: {
        value: cdktf.listMapperHcl(routerRipOffsetListStructToHclTerraform, true)(this._offsetList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterRipOffsetListStructList",
      },
      redistribute: {
        value: routerRipRedistributeToHclTerraform(this._redistribute.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterRipRedistributeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
