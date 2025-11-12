// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiswitchSystemInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_interface#id DataFortiswitchSystemInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_interface#name DataFortiswitchSystemInterface#name}
  */
  readonly name: string;
}
export interface DataFortiswitchSystemInterfaceIpv6Ip6ExtraAddr {
}

export function dataFortiswitchSystemInterfaceIpv6Ip6ExtraAddrToTerraform(struct?: DataFortiswitchSystemInterfaceIpv6Ip6ExtraAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiswitchSystemInterfaceIpv6Ip6ExtraAddrToHclTerraform(struct?: DataFortiswitchSystemInterfaceIpv6Ip6ExtraAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiswitchSystemInterfaceIpv6Ip6ExtraAddrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiswitchSystemInterfaceIpv6Ip6ExtraAddr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiswitchSystemInterfaceIpv6Ip6ExtraAddr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}

export class DataFortiswitchSystemInterfaceIpv6Ip6ExtraAddrList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiswitchSystemInterfaceIpv6Ip6ExtraAddrOutputReference {
    return new DataFortiswitchSystemInterfaceIpv6Ip6ExtraAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiswitchSystemInterfaceIpv6Ip6PrefixListStruct {
}

export function dataFortiswitchSystemInterfaceIpv6Ip6PrefixListStructToTerraform(struct?: DataFortiswitchSystemInterfaceIpv6Ip6PrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiswitchSystemInterfaceIpv6Ip6PrefixListStructToHclTerraform(struct?: DataFortiswitchSystemInterfaceIpv6Ip6PrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiswitchSystemInterfaceIpv6Ip6PrefixListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiswitchSystemInterfaceIpv6Ip6PrefixListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiswitchSystemInterfaceIpv6Ip6PrefixListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autonomous_flag - computed: true, optional: false, required: false
  public get autonomousFlag() {
    return this.getStringAttribute('autonomous_flag');
  }

  // onlink_flag - computed: true, optional: false, required: false
  public get onlinkFlag() {
    return this.getStringAttribute('onlink_flag');
  }

  // preferred_life_time - computed: true, optional: false, required: false
  public get preferredLifeTime() {
    return this.getNumberAttribute('preferred_life_time');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // valid_life_time - computed: true, optional: false, required: false
  public get validLifeTime() {
    return this.getNumberAttribute('valid_life_time');
  }
}

export class DataFortiswitchSystemInterfaceIpv6Ip6PrefixListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiswitchSystemInterfaceIpv6Ip6PrefixListStructOutputReference {
    return new DataFortiswitchSystemInterfaceIpv6Ip6PrefixListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiswitchSystemInterfaceIpv6Vrrp6 {
}

export function dataFortiswitchSystemInterfaceIpv6Vrrp6ToTerraform(struct?: DataFortiswitchSystemInterfaceIpv6Vrrp6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiswitchSystemInterfaceIpv6Vrrp6ToHclTerraform(struct?: DataFortiswitchSystemInterfaceIpv6Vrrp6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiswitchSystemInterfaceIpv6Vrrp6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiswitchSystemInterfaceIpv6Vrrp6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiswitchSystemInterfaceIpv6Vrrp6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accept_mode - computed: true, optional: false, required: false
  public get acceptMode() {
    return this.getStringAttribute('accept_mode');
  }

  // adv_interval - computed: true, optional: false, required: false
  public get advInterval() {
    return this.getNumberAttribute('adv_interval');
  }

  // preempt - computed: true, optional: false, required: false
  public get preempt() {
    return this.getStringAttribute('preempt');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vrdst6 - computed: true, optional: false, required: false
  public get vrdst6() {
    return this.getStringAttribute('vrdst6');
  }

  // vrgrp - computed: true, optional: false, required: false
  public get vrgrp() {
    return this.getNumberAttribute('vrgrp');
  }

  // vrid - computed: true, optional: false, required: false
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }

  // vrip6 - computed: true, optional: false, required: false
  public get vrip6() {
    return this.getStringAttribute('vrip6');
  }
}

export class DataFortiswitchSystemInterfaceIpv6Vrrp6List extends cdktf.ComplexList {

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
  public get(index: number): DataFortiswitchSystemInterfaceIpv6Vrrp6OutputReference {
    return new DataFortiswitchSystemInterfaceIpv6Vrrp6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiswitchSystemInterfaceIpv6 {
}

export function dataFortiswitchSystemInterfaceIpv6ToTerraform(struct?: DataFortiswitchSystemInterfaceIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiswitchSystemInterfaceIpv6ToHclTerraform(struct?: DataFortiswitchSystemInterfaceIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiswitchSystemInterfaceIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiswitchSystemInterfaceIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiswitchSystemInterfaceIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autoconf - computed: true, optional: false, required: false
  public get autoconf() {
    return this.getStringAttribute('autoconf');
  }

  // dhcp6_information_request - computed: true, optional: false, required: false
  public get dhcp6InformationRequest() {
    return this.getStringAttribute('dhcp6_information_request');
  }

  // ip6_address - computed: true, optional: false, required: false
  public get ip6Address() {
    return this.getStringAttribute('ip6_address');
  }

  // ip6_allowaccess - computed: true, optional: false, required: false
  public get ip6Allowaccess() {
    return this.getStringAttribute('ip6_allowaccess');
  }

  // ip6_default_life - computed: true, optional: false, required: false
  public get ip6DefaultLife() {
    return this.getNumberAttribute('ip6_default_life');
  }

  // ip6_dns_server_override - computed: true, optional: false, required: false
  public get ip6DnsServerOverride() {
    return this.getStringAttribute('ip6_dns_server_override');
  }

  // ip6_extra_addr - computed: true, optional: false, required: false
  private _ip6ExtraAddr = new DataFortiswitchSystemInterfaceIpv6Ip6ExtraAddrList(this, "ip6_extra_addr", false);
  public get ip6ExtraAddr() {
    return this._ip6ExtraAddr;
  }

  // ip6_hop_limit - computed: true, optional: false, required: false
  public get ip6HopLimit() {
    return this.getNumberAttribute('ip6_hop_limit');
  }

  // ip6_link_mtu - computed: true, optional: false, required: false
  public get ip6LinkMtu() {
    return this.getNumberAttribute('ip6_link_mtu');
  }

  // ip6_manage_flag - computed: true, optional: false, required: false
  public get ip6ManageFlag() {
    return this.getStringAttribute('ip6_manage_flag');
  }

  // ip6_max_interval - computed: true, optional: false, required: false
  public get ip6MaxInterval() {
    return this.getNumberAttribute('ip6_max_interval');
  }

  // ip6_min_interval - computed: true, optional: false, required: false
  public get ip6MinInterval() {
    return this.getNumberAttribute('ip6_min_interval');
  }

  // ip6_mode - computed: true, optional: false, required: false
  public get ip6Mode() {
    return this.getStringAttribute('ip6_mode');
  }

  // ip6_other_flag - computed: true, optional: false, required: false
  public get ip6OtherFlag() {
    return this.getStringAttribute('ip6_other_flag');
  }

  // ip6_prefix_list - computed: true, optional: false, required: false
  private _ip6PrefixList = new DataFortiswitchSystemInterfaceIpv6Ip6PrefixListStructList(this, "ip6_prefix_list", false);
  public get ip6PrefixList() {
    return this._ip6PrefixList;
  }

  // ip6_reachable_time - computed: true, optional: false, required: false
  public get ip6ReachableTime() {
    return this.getNumberAttribute('ip6_reachable_time');
  }

  // ip6_retrans_time - computed: true, optional: false, required: false
  public get ip6RetransTime() {
    return this.getNumberAttribute('ip6_retrans_time');
  }

  // ip6_send_adv - computed: true, optional: false, required: false
  public get ip6SendAdv() {
    return this.getStringAttribute('ip6_send_adv');
  }

  // ip6_unknown_mcast_to_cpu - computed: true, optional: false, required: false
  public get ip6UnknownMcastToCpu() {
    return this.getStringAttribute('ip6_unknown_mcast_to_cpu');
  }

  // vrip6_link_local - computed: true, optional: false, required: false
  public get vrip6LinkLocal() {
    return this.getStringAttribute('vrip6_link_local');
  }

  // vrrp6 - computed: true, optional: false, required: false
  private _vrrp6 = new DataFortiswitchSystemInterfaceIpv6Vrrp6List(this, "vrrp6", false);
  public get vrrp6() {
    return this._vrrp6;
  }

  // vrrp_virtual_mac6 - computed: true, optional: false, required: false
  public get vrrpVirtualMac6() {
    return this.getStringAttribute('vrrp_virtual_mac6');
  }
}

export class DataFortiswitchSystemInterfaceIpv6List extends cdktf.ComplexList {

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
  public get(index: number): DataFortiswitchSystemInterfaceIpv6OutputReference {
    return new DataFortiswitchSystemInterfaceIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiswitchSystemInterfaceSecondaryip {
}

export function dataFortiswitchSystemInterfaceSecondaryipToTerraform(struct?: DataFortiswitchSystemInterfaceSecondaryip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiswitchSystemInterfaceSecondaryipToHclTerraform(struct?: DataFortiswitchSystemInterfaceSecondaryip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiswitchSystemInterfaceSecondaryipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiswitchSystemInterfaceSecondaryip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiswitchSystemInterfaceSecondaryip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowaccess - computed: true, optional: false, required: false
  public get allowaccess() {
    return this.getStringAttribute('allowaccess');
  }

  // detectprotocol - computed: true, optional: false, required: false
  public get detectprotocol() {
    return this.getStringAttribute('detectprotocol');
  }

  // detectserver - computed: true, optional: false, required: false
  public get detectserver() {
    return this.getStringAttribute('detectserver');
  }

  // gwdetect - computed: true, optional: false, required: false
  public get gwdetect() {
    return this.getStringAttribute('gwdetect');
  }

  // ha_priority - computed: true, optional: false, required: false
  public get haPriority() {
    return this.getNumberAttribute('ha_priority');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // ping_serv_status - computed: true, optional: false, required: false
  public get pingServStatus() {
    return this.getNumberAttribute('ping_serv_status');
  }
}

export class DataFortiswitchSystemInterfaceSecondaryipList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiswitchSystemInterfaceSecondaryipOutputReference {
    return new DataFortiswitchSystemInterfaceSecondaryipOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiswitchSystemInterfaceSwitchMembers {
}

export function dataFortiswitchSystemInterfaceSwitchMembersToTerraform(struct?: DataFortiswitchSystemInterfaceSwitchMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiswitchSystemInterfaceSwitchMembersToHclTerraform(struct?: DataFortiswitchSystemInterfaceSwitchMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiswitchSystemInterfaceSwitchMembersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiswitchSystemInterfaceSwitchMembers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiswitchSystemInterfaceSwitchMembers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // member_name - computed: true, optional: false, required: false
  public get memberName() {
    return this.getStringAttribute('member_name');
  }
}

export class DataFortiswitchSystemInterfaceSwitchMembersList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiswitchSystemInterfaceSwitchMembersOutputReference {
    return new DataFortiswitchSystemInterfaceSwitchMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiswitchSystemInterfaceVrrp {
}

export function dataFortiswitchSystemInterfaceVrrpToTerraform(struct?: DataFortiswitchSystemInterfaceVrrp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiswitchSystemInterfaceVrrpToHclTerraform(struct?: DataFortiswitchSystemInterfaceVrrp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiswitchSystemInterfaceVrrpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiswitchSystemInterfaceVrrp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiswitchSystemInterfaceVrrp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // adv_interval - computed: true, optional: false, required: false
  public get advInterval() {
    return this.getNumberAttribute('adv_interval');
  }

  // backup_vmac_fwd - computed: true, optional: false, required: false
  public get backupVmacFwd() {
    return this.getStringAttribute('backup_vmac_fwd');
  }

  // netmask - computed: true, optional: false, required: false
  public get netmask() {
    return this.getStringAttribute('netmask');
  }

  // preempt - computed: true, optional: false, required: false
  public get preempt() {
    return this.getStringAttribute('preempt');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // vrdst - computed: true, optional: false, required: false
  public get vrdst() {
    return this.getStringAttribute('vrdst');
  }

  // vrgrp - computed: true, optional: false, required: false
  public get vrgrp() {
    return this.getNumberAttribute('vrgrp');
  }

  // vrid - computed: true, optional: false, required: false
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }

  // vrip - computed: true, optional: false, required: false
  public get vrip() {
    return this.getStringAttribute('vrip');
  }
}

export class DataFortiswitchSystemInterfaceVrrpList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiswitchSystemInterfaceVrrpOutputReference {
    return new DataFortiswitchSystemInterfaceVrrpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_interface fortiswitch_system_interface}
*/
export class DataFortiswitchSystemInterface extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_system_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiswitchSystemInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiswitchSystemInterface to import
  * @param importFromId The id of the existing DataFortiswitchSystemInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiswitchSystemInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_system_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_interface fortiswitch_system_interface} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiswitchSystemInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortiswitchSystemInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_system_interface',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6',
        providerVersionConstraint: '1.1.6'
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // allowaccess - computed: true, optional: false, required: false
  public get allowaccess() {
    return this.getStringAttribute('allowaccess');
  }

  // auth_type - computed: true, optional: false, required: false
  public get authType() {
    return this.getStringAttribute('auth_type');
  }

  // bfd - computed: true, optional: false, required: false
  public get bfd() {
    return this.getStringAttribute('bfd');
  }

  // bfd_desired_min_tx - computed: true, optional: false, required: false
  public get bfdDesiredMinTx() {
    return this.getNumberAttribute('bfd_desired_min_tx');
  }

  // bfd_detect_mult - computed: true, optional: false, required: false
  public get bfdDetectMult() {
    return this.getNumberAttribute('bfd_detect_mult');
  }

  // bfd_required_min_rx - computed: true, optional: false, required: false
  public get bfdRequiredMinRx() {
    return this.getNumberAttribute('bfd_required_min_rx');
  }

  // cli_conn_status - computed: true, optional: false, required: false
  public get cliConnStatus() {
    return this.getStringAttribute('cli_conn_status');
  }

  // defaultgw - computed: true, optional: false, required: false
  public get defaultgw() {
    return this.getStringAttribute('defaultgw');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // detectprotocol - computed: true, optional: false, required: false
  public get detectprotocol() {
    return this.getStringAttribute('detectprotocol');
  }

  // detectserver - computed: true, optional: false, required: false
  public get detectserver() {
    return this.getStringAttribute('detectserver');
  }

  // dhcp_client_identifier - computed: true, optional: false, required: false
  public get dhcpClientIdentifier() {
    return this.getStringAttribute('dhcp_client_identifier');
  }

  // dhcp_client_status - computed: true, optional: false, required: false
  public get dhcpClientStatus() {
    return this.getStringAttribute('dhcp_client_status');
  }

  // dhcp_expire - computed: true, optional: false, required: false
  public get dhcpExpire() {
    return this.getNumberAttribute('dhcp_expire');
  }

  // dhcp_relay_ip - computed: true, optional: false, required: false
  public get dhcpRelayIp() {
    return this.getStringAttribute('dhcp_relay_ip');
  }

  // dhcp_relay_option82 - computed: true, optional: false, required: false
  public get dhcpRelayOption82() {
    return this.getStringAttribute('dhcp_relay_option82');
  }

  // dhcp_relay_service - computed: true, optional: false, required: false
  public get dhcpRelayService() {
    return this.getStringAttribute('dhcp_relay_service');
  }

  // dhcp_vendor_specific_option - computed: true, optional: false, required: false
  public get dhcpVendorSpecificOption() {
    return this.getStringAttribute('dhcp_vendor_specific_option');
  }

  // distance - computed: true, optional: false, required: false
  public get distance() {
    return this.getNumberAttribute('distance');
  }

  // dns_server_override - computed: true, optional: false, required: false
  public get dnsServerOverride() {
    return this.getStringAttribute('dns_server_override');
  }

  // dynamic_dns1 - computed: true, optional: false, required: false
  public get dynamicDns1() {
    return this.getStringAttribute('dynamic_dns1');
  }

  // dynamic_dns2 - computed: true, optional: false, required: false
  public get dynamicDns2() {
    return this.getStringAttribute('dynamic_dns2');
  }

  // dynamicgw - computed: true, optional: false, required: false
  public get dynamicgw() {
    return this.getStringAttribute('dynamicgw');
  }

  // forward_domain - computed: true, optional: false, required: false
  public get forwardDomain() {
    return this.getNumberAttribute('forward_domain');
  }

  // gwdetect - computed: true, optional: false, required: false
  public get gwdetect() {
    return this.getStringAttribute('gwdetect');
  }

  // ha_priority - computed: true, optional: false, required: false
  public get haPriority() {
    return this.getNumberAttribute('ha_priority');
  }

  // icmp_redirect - computed: true, optional: false, required: false
  public get icmpRedirect() {
    return this.getStringAttribute('icmp_redirect');
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

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataFortiswitchSystemInterfaceIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }

  // l2_interface - computed: true, optional: false, required: false
  public get l2Interface() {
    return this.getStringAttribute('l2_interface');
  }

  // macaddr - computed: true, optional: false, required: false
  public get macaddr() {
    return this.getStringAttribute('macaddr');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // mtu_override - computed: true, optional: false, required: false
  public get mtuOverride() {
    return this.getStringAttribute('mtu_override');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // ping_serv_status - computed: true, optional: false, required: false
  public get pingServStatus() {
    return this.getNumberAttribute('ping_serv_status');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // remote_ip - computed: true, optional: false, required: false
  public get remoteIp() {
    return this.getStringAttribute('remote_ip');
  }

  // secondary_ip - computed: true, optional: false, required: false
  public get secondaryIp() {
    return this.getStringAttribute('secondary_ip');
  }

  // secondaryip - computed: true, optional: false, required: false
  private _secondaryip = new DataFortiswitchSystemInterfaceSecondaryipList(this, "secondaryip", false);
  public get secondaryip() {
    return this._secondaryip;
  }

  // snmp_index - computed: true, optional: false, required: false
  public get snmpIndex() {
    return this.getNumberAttribute('snmp_index');
  }

  // speed - computed: true, optional: false, required: false
  public get speed() {
    return this.getStringAttribute('speed');
  }

  // src_check - computed: true, optional: false, required: false
  public get srcCheck() {
    return this.getStringAttribute('src_check');
  }

  // src_check_allow_default - computed: true, optional: false, required: false
  public get srcCheckAllowDefault() {
    return this.getStringAttribute('src_check_allow_default');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // switch - computed: true, optional: false, required: false
  public get switch() {
    return this.getStringAttribute('switch');
  }

  // switch_members - computed: true, optional: false, required: false
  private _switchMembers = new DataFortiswitchSystemInterfaceSwitchMembersList(this, "switch_members", false);
  public get switchMembers() {
    return this._switchMembers;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vdom - computed: true, optional: false, required: false
  public get vdom() {
    return this.getStringAttribute('vdom');
  }

  // vlanforward - computed: true, optional: false, required: false
  public get vlanforward() {
    return this.getStringAttribute('vlanforward');
  }

  // vlanid - computed: true, optional: false, required: false
  public get vlanid() {
    return this.getNumberAttribute('vlanid');
  }

  // vrf - computed: true, optional: false, required: false
  public get vrf() {
    return this.getStringAttribute('vrf');
  }

  // vrrp - computed: true, optional: false, required: false
  private _vrrp = new DataFortiswitchSystemInterfaceVrrpList(this, "vrrp", false);
  public get vrrp() {
    return this._vrrp;
  }

  // vrrp_virtual_mac - computed: true, optional: false, required: false
  public get vrrpVirtualMac() {
    return this.getStringAttribute('vrrp_virtual_mac');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
