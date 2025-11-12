// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelesscontrollerSnmpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp#contact_info WirelesscontrollerSnmp#contact_info}
  */
  readonly contactInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp#device_name WirelesscontrollerSnmp#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp#device_vdom WirelesscontrollerSnmp#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp#dynamic_sort_subtable WirelesscontrollerSnmp#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp#engine_id WirelesscontrollerSnmp#engine_id}
  */
  readonly engineId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp#id WirelesscontrollerSnmp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp#trap_high_cpu_threshold WirelesscontrollerSnmp#trap_high_cpu_threshold}
  */
  readonly trapHighCpuThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp#trap_high_mem_threshold WirelesscontrollerSnmp#trap_high_mem_threshold}
  */
  readonly trapHighMemThreshold?: number;
  /**
  * community block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp#community WirelesscontrollerSnmp#community}
  */
  readonly community?: WirelesscontrollerSnmpCommunity[] | cdktf.IResolvable;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp#user WirelesscontrollerSnmp#user}
  */
  readonly user?: WirelesscontrollerSnmpUser[] | cdktf.IResolvable;
}
export interface WirelesscontrollerSnmpCommunityHosts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp#id WirelesscontrollerSnmp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp#ip WirelesscontrollerSnmp#ip}
  */
  readonly ip?: string;
}

export function wirelesscontrollerSnmpCommunityHostsToTerraform(struct?: WirelesscontrollerSnmpCommunityHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function wirelesscontrollerSnmpCommunityHostsToHclTerraform(struct?: WirelesscontrollerSnmpCommunityHosts | cdktf.IResolvable): any {
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

export class WirelesscontrollerSnmpCommunityHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelesscontrollerSnmpCommunityHosts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WirelesscontrollerSnmpCommunityHosts | cdktf.IResolvable | undefined) {
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

export class WirelesscontrollerSnmpCommunityHostsList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerSnmpCommunityHosts[] | cdktf.IResolvable

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
  public get(index: number): WirelesscontrollerSnmpCommunityHostsOutputReference {
    return new WirelesscontrollerSnmpCommunityHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelesscontrollerSnmpCommunity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp#id WirelesscontrollerSnmp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp#name WirelesscontrollerSnmp#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp#query_v1_status WirelesscontrollerSnmp#query_v1_status}
  */
  readonly queryV1Status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp#query_v2c_status WirelesscontrollerSnmp#query_v2c_status}
  */
  readonly queryV2CStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp#status WirelesscontrollerSnmp#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp#trap_v1_status WirelesscontrollerSnmp#trap_v1_status}
  */
  readonly trapV1Status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp#trap_v2c_status WirelesscontrollerSnmp#trap_v2c_status}
  */
  readonly trapV2CStatus?: string;
  /**
  * hosts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp#hosts WirelesscontrollerSnmp#hosts}
  */
  readonly hosts?: WirelesscontrollerSnmpCommunityHosts[] | cdktf.IResolvable;
}

export function wirelesscontrollerSnmpCommunityToTerraform(struct?: WirelesscontrollerSnmpCommunity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    query_v1_status: cdktf.stringToTerraform(struct!.queryV1Status),
    query_v2c_status: cdktf.stringToTerraform(struct!.queryV2CStatus),
    status: cdktf.stringToTerraform(struct!.status),
    trap_v1_status: cdktf.stringToTerraform(struct!.trapV1Status),
    trap_v2c_status: cdktf.stringToTerraform(struct!.trapV2CStatus),
    hosts: cdktf.listMapper(wirelesscontrollerSnmpCommunityHostsToTerraform, true)(struct!.hosts),
  }
}


export function wirelesscontrollerSnmpCommunityToHclTerraform(struct?: WirelesscontrollerSnmpCommunity | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_v1_status: {
      value: cdktf.stringToHclTerraform(struct!.queryV1Status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_v2c_status: {
      value: cdktf.stringToHclTerraform(struct!.queryV2CStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trap_v1_status: {
      value: cdktf.stringToHclTerraform(struct!.trapV1Status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trap_v2c_status: {
      value: cdktf.stringToHclTerraform(struct!.trapV2CStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hosts: {
      value: cdktf.listMapperHcl(wirelesscontrollerSnmpCommunityHostsToHclTerraform, true)(struct!.hosts),
      isBlock: true,
      type: "list",
      storageClassType: "WirelesscontrollerSnmpCommunityHostsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerSnmpCommunityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelesscontrollerSnmpCommunity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._queryV1Status !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryV1Status = this._queryV1Status;
    }
    if (this._queryV2CStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryV2CStatus = this._queryV2CStatus;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._trapV1Status !== undefined) {
      hasAnyValues = true;
      internalValueResult.trapV1Status = this._trapV1Status;
    }
    if (this._trapV2CStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.trapV2CStatus = this._trapV2CStatus;
    }
    if (this._hosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerSnmpCommunity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._queryV1Status = undefined;
      this._queryV2CStatus = undefined;
      this._status = undefined;
      this._trapV1Status = undefined;
      this._trapV2CStatus = undefined;
      this._hosts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._queryV1Status = value.queryV1Status;
      this._queryV2CStatus = value.queryV2CStatus;
      this._status = value.status;
      this._trapV1Status = value.trapV1Status;
      this._trapV2CStatus = value.trapV2CStatus;
      this._hosts.internalValue = value.hosts;
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

  // query_v1_status - computed: true, optional: true, required: false
  private _queryV1Status?: string; 
  public get queryV1Status() {
    return this.getStringAttribute('query_v1_status');
  }
  public set queryV1Status(value: string) {
    this._queryV1Status = value;
  }
  public resetQueryV1Status() {
    this._queryV1Status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryV1StatusInput() {
    return this._queryV1Status;
  }

  // query_v2c_status - computed: true, optional: true, required: false
  private _queryV2CStatus?: string; 
  public get queryV2CStatus() {
    return this.getStringAttribute('query_v2c_status');
  }
  public set queryV2CStatus(value: string) {
    this._queryV2CStatus = value;
  }
  public resetQueryV2CStatus() {
    this._queryV2CStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryV2CStatusInput() {
    return this._queryV2CStatus;
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

  // trap_v1_status - computed: true, optional: true, required: false
  private _trapV1Status?: string; 
  public get trapV1Status() {
    return this.getStringAttribute('trap_v1_status');
  }
  public set trapV1Status(value: string) {
    this._trapV1Status = value;
  }
  public resetTrapV1Status() {
    this._trapV1Status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapV1StatusInput() {
    return this._trapV1Status;
  }

  // trap_v2c_status - computed: true, optional: true, required: false
  private _trapV2CStatus?: string; 
  public get trapV2CStatus() {
    return this.getStringAttribute('trap_v2c_status');
  }
  public set trapV2CStatus(value: string) {
    this._trapV2CStatus = value;
  }
  public resetTrapV2CStatus() {
    this._trapV2CStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapV2CStatusInput() {
    return this._trapV2CStatus;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts = new WirelesscontrollerSnmpCommunityHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: WirelesscontrollerSnmpCommunityHosts[] | cdktf.IResolvable) {
    this._hosts.internalValue = value;
  }
  public resetHosts() {
    this._hosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts.internalValue;
  }
}

export class WirelesscontrollerSnmpCommunityList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerSnmpCommunity[] | cdktf.IResolvable

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
  public get(index: number): WirelesscontrollerSnmpCommunityOutputReference {
    return new WirelesscontrollerSnmpCommunityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelesscontrollerSnmpUser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp#auth_proto WirelesscontrollerSnmp#auth_proto}
  */
  readonly authProto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp#auth_pwd WirelesscontrollerSnmp#auth_pwd}
  */
  readonly authPwd?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp#name WirelesscontrollerSnmp#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp#notify_hosts WirelesscontrollerSnmp#notify_hosts}
  */
  readonly notifyHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp#priv_proto WirelesscontrollerSnmp#priv_proto}
  */
  readonly privProto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp#priv_pwd WirelesscontrollerSnmp#priv_pwd}
  */
  readonly privPwd?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp#queries WirelesscontrollerSnmp#queries}
  */
  readonly queries?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp#security_level WirelesscontrollerSnmp#security_level}
  */
  readonly securityLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp#status WirelesscontrollerSnmp#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp#trap_status WirelesscontrollerSnmp#trap_status}
  */
  readonly trapStatus?: string;
}

export function wirelesscontrollerSnmpUserToTerraform(struct?: WirelesscontrollerSnmpUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_proto: cdktf.stringToTerraform(struct!.authProto),
    auth_pwd: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authPwd),
    name: cdktf.stringToTerraform(struct!.name),
    notify_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notifyHosts),
    priv_proto: cdktf.stringToTerraform(struct!.privProto),
    priv_pwd: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.privPwd),
    queries: cdktf.stringToTerraform(struct!.queries),
    security_level: cdktf.stringToTerraform(struct!.securityLevel),
    status: cdktf.stringToTerraform(struct!.status),
    trap_status: cdktf.stringToTerraform(struct!.trapStatus),
  }
}


export function wirelesscontrollerSnmpUserToHclTerraform(struct?: WirelesscontrollerSnmpUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_proto: {
      value: cdktf.stringToHclTerraform(struct!.authProto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_pwd: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authPwd),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notifyHosts),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    priv_proto: {
      value: cdktf.stringToHclTerraform(struct!.privProto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priv_pwd: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.privPwd),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    queries: {
      value: cdktf.stringToHclTerraform(struct!.queries),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_level: {
      value: cdktf.stringToHclTerraform(struct!.securityLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trap_status: {
      value: cdktf.stringToHclTerraform(struct!.trapStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerSnmpUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelesscontrollerSnmpUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authProto !== undefined) {
      hasAnyValues = true;
      internalValueResult.authProto = this._authProto;
    }
    if (this._authPwd !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPwd = this._authPwd;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notifyHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyHosts = this._notifyHosts;
    }
    if (this._privProto !== undefined) {
      hasAnyValues = true;
      internalValueResult.privProto = this._privProto;
    }
    if (this._privPwd !== undefined) {
      hasAnyValues = true;
      internalValueResult.privPwd = this._privPwd;
    }
    if (this._queries !== undefined) {
      hasAnyValues = true;
      internalValueResult.queries = this._queries;
    }
    if (this._securityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityLevel = this._securityLevel;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._trapStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.trapStatus = this._trapStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerSnmpUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authProto = undefined;
      this._authPwd = undefined;
      this._name = undefined;
      this._notifyHosts = undefined;
      this._privProto = undefined;
      this._privPwd = undefined;
      this._queries = undefined;
      this._securityLevel = undefined;
      this._status = undefined;
      this._trapStatus = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authProto = value.authProto;
      this._authPwd = value.authPwd;
      this._name = value.name;
      this._notifyHosts = value.notifyHosts;
      this._privProto = value.privProto;
      this._privPwd = value.privPwd;
      this._queries = value.queries;
      this._securityLevel = value.securityLevel;
      this._status = value.status;
      this._trapStatus = value.trapStatus;
    }
  }

  // auth_proto - computed: true, optional: true, required: false
  private _authProto?: string; 
  public get authProto() {
    return this.getStringAttribute('auth_proto');
  }
  public set authProto(value: string) {
    this._authProto = value;
  }
  public resetAuthProto() {
    this._authProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authProtoInput() {
    return this._authProto;
  }

  // auth_pwd - computed: true, optional: true, required: false
  private _authPwd?: string[]; 
  public get authPwd() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_pwd'));
  }
  public set authPwd(value: string[]) {
    this._authPwd = value;
  }
  public resetAuthPwd() {
    this._authPwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPwdInput() {
    return this._authPwd;
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

  // notify_hosts - computed: true, optional: true, required: false
  private _notifyHosts?: string[]; 
  public get notifyHosts() {
    return cdktf.Fn.tolist(this.getListAttribute('notify_hosts'));
  }
  public set notifyHosts(value: string[]) {
    this._notifyHosts = value;
  }
  public resetNotifyHosts() {
    this._notifyHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyHostsInput() {
    return this._notifyHosts;
  }

  // priv_proto - computed: true, optional: true, required: false
  private _privProto?: string; 
  public get privProto() {
    return this.getStringAttribute('priv_proto');
  }
  public set privProto(value: string) {
    this._privProto = value;
  }
  public resetPrivProto() {
    this._privProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privProtoInput() {
    return this._privProto;
  }

  // priv_pwd - computed: true, optional: true, required: false
  private _privPwd?: string[]; 
  public get privPwd() {
    return cdktf.Fn.tolist(this.getListAttribute('priv_pwd'));
  }
  public set privPwd(value: string[]) {
    this._privPwd = value;
  }
  public resetPrivPwd() {
    this._privPwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privPwdInput() {
    return this._privPwd;
  }

  // queries - computed: true, optional: true, required: false
  private _queries?: string; 
  public get queries() {
    return this.getStringAttribute('queries');
  }
  public set queries(value: string) {
    this._queries = value;
  }
  public resetQueries() {
    this._queries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queriesInput() {
    return this._queries;
  }

  // security_level - computed: true, optional: true, required: false
  private _securityLevel?: string; 
  public get securityLevel() {
    return this.getStringAttribute('security_level');
  }
  public set securityLevel(value: string) {
    this._securityLevel = value;
  }
  public resetSecurityLevel() {
    this._securityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityLevelInput() {
    return this._securityLevel;
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

  // trap_status - computed: true, optional: true, required: false
  private _trapStatus?: string; 
  public get trapStatus() {
    return this.getStringAttribute('trap_status');
  }
  public set trapStatus(value: string) {
    this._trapStatus = value;
  }
  public resetTrapStatus() {
    this._trapStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapStatusInput() {
    return this._trapStatus;
  }
}

export class WirelesscontrollerSnmpUserList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerSnmpUser[] | cdktf.IResolvable

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
  public get(index: number): WirelesscontrollerSnmpUserOutputReference {
    return new WirelesscontrollerSnmpUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp fmgdevice_wirelesscontroller_snmp}
*/
export class WirelesscontrollerSnmp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_wirelesscontroller_snmp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelesscontrollerSnmp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelesscontrollerSnmp to import
  * @param importFromId The id of the existing WirelesscontrollerSnmp that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelesscontrollerSnmp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_wirelesscontroller_snmp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp fmgdevice_wirelesscontroller_snmp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelesscontrollerSnmpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WirelesscontrollerSnmpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_wirelesscontroller_snmp',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contactInfo = config.contactInfo;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._engineId = config.engineId;
    this._id = config.id;
    this._trapHighCpuThreshold = config.trapHighCpuThreshold;
    this._trapHighMemThreshold = config.trapHighMemThreshold;
    this._community.internalValue = config.community;
    this._user.internalValue = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contact_info - computed: false, optional: true, required: false
  private _contactInfo?: string; 
  public get contactInfo() {
    return this.getStringAttribute('contact_info');
  }
  public set contactInfo(value: string) {
    this._contactInfo = value;
  }
  public resetContactInfo() {
    this._contactInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactInfoInput() {
    return this._contactInfo;
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

  // engine_id - computed: false, optional: true, required: false
  private _engineId?: string; 
  public get engineId() {
    return this.getStringAttribute('engine_id');
  }
  public set engineId(value: string) {
    this._engineId = value;
  }
  public resetEngineId() {
    this._engineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineIdInput() {
    return this._engineId;
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

  // trap_high_cpu_threshold - computed: true, optional: true, required: false
  private _trapHighCpuThreshold?: number; 
  public get trapHighCpuThreshold() {
    return this.getNumberAttribute('trap_high_cpu_threshold');
  }
  public set trapHighCpuThreshold(value: number) {
    this._trapHighCpuThreshold = value;
  }
  public resetTrapHighCpuThreshold() {
    this._trapHighCpuThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapHighCpuThresholdInput() {
    return this._trapHighCpuThreshold;
  }

  // trap_high_mem_threshold - computed: true, optional: true, required: false
  private _trapHighMemThreshold?: number; 
  public get trapHighMemThreshold() {
    return this.getNumberAttribute('trap_high_mem_threshold');
  }
  public set trapHighMemThreshold(value: number) {
    this._trapHighMemThreshold = value;
  }
  public resetTrapHighMemThreshold() {
    this._trapHighMemThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapHighMemThresholdInput() {
    return this._trapHighMemThreshold;
  }

  // community - computed: false, optional: true, required: false
  private _community = new WirelesscontrollerSnmpCommunityList(this, "community", false);
  public get community() {
    return this._community;
  }
  public putCommunity(value: WirelesscontrollerSnmpCommunity[] | cdktf.IResolvable) {
    this._community.internalValue = value;
  }
  public resetCommunity() {
    this._community.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityInput() {
    return this._community.internalValue;
  }

  // user - computed: false, optional: true, required: false
  private _user = new WirelesscontrollerSnmpUserList(this, "user", false);
  public get user() {
    return this._user;
  }
  public putUser(value: WirelesscontrollerSnmpUser[] | cdktf.IResolvable) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contact_info: cdktf.stringToTerraform(this._contactInfo),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      engine_id: cdktf.stringToTerraform(this._engineId),
      id: cdktf.stringToTerraform(this._id),
      trap_high_cpu_threshold: cdktf.numberToTerraform(this._trapHighCpuThreshold),
      trap_high_mem_threshold: cdktf.numberToTerraform(this._trapHighMemThreshold),
      community: cdktf.listMapper(wirelesscontrollerSnmpCommunityToTerraform, true)(this._community.internalValue),
      user: cdktf.listMapper(wirelesscontrollerSnmpUserToTerraform, true)(this._user.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contact_info: {
        value: cdktf.stringToHclTerraform(this._contactInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      engine_id: {
        value: cdktf.stringToHclTerraform(this._engineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trap_high_cpu_threshold: {
        value: cdktf.numberToHclTerraform(this._trapHighCpuThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trap_high_mem_threshold: {
        value: cdktf.numberToHclTerraform(this._trapHighMemThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      community: {
        value: cdktf.listMapperHcl(wirelesscontrollerSnmpCommunityToHclTerraform, true)(this._community.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelesscontrollerSnmpCommunityList",
      },
      user: {
        value: cdktf.listMapperHcl(wirelesscontrollerSnmpUserToHclTerraform, true)(this._user.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelesscontrollerSnmpUserList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
