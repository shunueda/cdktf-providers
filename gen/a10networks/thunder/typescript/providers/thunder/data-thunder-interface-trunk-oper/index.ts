// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderInterfaceTrunkOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_oper#id DataThunderInterfaceTrunkOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Trunk interface number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_oper#ifnum DataThunderInterfaceTrunkOper#ifnum}
  */
  readonly ifnum: number;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_oper#oper DataThunderInterfaceTrunkOper#oper}
  */
  readonly oper?: DataThunderInterfaceTrunkOperOper;
}
export interface DataThunderInterfaceTrunkOperOperIpv4ListStruct {
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_oper#addr DataThunderInterfaceTrunkOper#addr}
  */
  readonly addr?: string;
  /**
  * IP subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_oper#mask DataThunderInterfaceTrunkOper#mask}
  */
  readonly mask?: string;
}

export function dataThunderInterfaceTrunkOperOperIpv4ListStructToTerraform(struct?: DataThunderInterfaceTrunkOperOperIpv4ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    mask: cdktf.stringToTerraform(struct!.mask),
  }
}


export function dataThunderInterfaceTrunkOperOperIpv4ListStructToHclTerraform(struct?: DataThunderInterfaceTrunkOperOperIpv4ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderInterfaceTrunkOperOperIpv4ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderInterfaceTrunkOperOperIpv4ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderInterfaceTrunkOperOperIpv4ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._mask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._mask = value.mask;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // mask - computed: false, optional: true, required: false
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  public resetMask() {
    this._mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }
}

export class DataThunderInterfaceTrunkOperOperIpv4ListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderInterfaceTrunkOperOperIpv4ListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderInterfaceTrunkOperOperIpv4ListStructOutputReference {
    return new DataThunderInterfaceTrunkOperOperIpv4ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderInterfaceTrunkOperOperIpv6ListStruct {
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_oper#addr DataThunderInterfaceTrunkOper#addr}
  */
  readonly addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_oper#is_anycast DataThunderInterfaceTrunkOper#is_anycast}
  */
  readonly isAnycast?: number;
  /**
  * IP subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_oper#prefix DataThunderInterfaceTrunkOper#prefix}
  */
  readonly prefix?: string;
}

export function dataThunderInterfaceTrunkOperOperIpv6ListStructToTerraform(struct?: DataThunderInterfaceTrunkOperOperIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    is_anycast: cdktf.numberToTerraform(struct!.isAnycast),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function dataThunderInterfaceTrunkOperOperIpv6ListStructToHclTerraform(struct?: DataThunderInterfaceTrunkOperOperIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_anycast: {
      value: cdktf.numberToHclTerraform(struct!.isAnycast),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderInterfaceTrunkOperOperIpv6ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderInterfaceTrunkOperOperIpv6ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._isAnycast !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAnycast = this._isAnycast;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderInterfaceTrunkOperOperIpv6ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._isAnycast = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._isAnycast = value.isAnycast;
      this._prefix = value.prefix;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // is_anycast - computed: false, optional: true, required: false
  private _isAnycast?: number; 
  public get isAnycast() {
    return this.getNumberAttribute('is_anycast');
  }
  public set isAnycast(value: number) {
    this._isAnycast = value;
  }
  public resetIsAnycast() {
    this._isAnycast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAnycastInput() {
    return this._isAnycast;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
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

export class DataThunderInterfaceTrunkOperOperIpv6ListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderInterfaceTrunkOperOperIpv6ListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderInterfaceTrunkOperOperIpv6ListStructOutputReference {
    return new DataThunderInterfaceTrunkOperOperIpv6ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderInterfaceTrunkOperOperTrunkMember {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_oper#members DataThunderInterfaceTrunkOper#members}
  */
  readonly members?: number;
}

export function dataThunderInterfaceTrunkOperOperTrunkMemberToTerraform(struct?: DataThunderInterfaceTrunkOperOperTrunkMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    members: cdktf.numberToTerraform(struct!.members),
  }
}


export function dataThunderInterfaceTrunkOperOperTrunkMemberToHclTerraform(struct?: DataThunderInterfaceTrunkOperOperTrunkMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    members: {
      value: cdktf.numberToHclTerraform(struct!.members),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderInterfaceTrunkOperOperTrunkMemberOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderInterfaceTrunkOperOperTrunkMember | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._members !== undefined) {
      hasAnyValues = true;
      internalValueResult.members = this._members;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderInterfaceTrunkOperOperTrunkMember | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._members = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._members = value.members;
    }
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
}

export class DataThunderInterfaceTrunkOperOperTrunkMemberList extends cdktf.ComplexList {
  public internalValue? : DataThunderInterfaceTrunkOperOperTrunkMember[] | cdktf.IResolvable

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
  public get(index: number): DataThunderInterfaceTrunkOperOperTrunkMemberOutputReference {
    return new DataThunderInterfaceTrunkOperOperTrunkMemberOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderInterfaceTrunkOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_oper#address DataThunderInterfaceTrunkOper#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_oper#hardware DataThunderInterfaceTrunkOper#hardware}
  */
  readonly hardware?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_oper#icmp6_rate_limit_current DataThunderInterfaceTrunkOper#icmp6_rate_limit_current}
  */
  readonly icmp6RateLimitCurrent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_oper#icmp6_rate_over_limit_drop DataThunderInterfaceTrunkOper#icmp6_rate_over_limit_drop}
  */
  readonly icmp6RateOverLimitDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_oper#icmp_rate_limit_current DataThunderInterfaceTrunkOper#icmp_rate_limit_current}
  */
  readonly icmpRateLimitCurrent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_oper#icmp_rate_over_limit_drop DataThunderInterfaceTrunkOper#icmp_rate_over_limit_drop}
  */
  readonly icmpRateOverLimitDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_oper#igmp_query_sent DataThunderInterfaceTrunkOper#igmp_query_sent}
  */
  readonly igmpQuerySent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_oper#ip_unnumbered_enabled DataThunderInterfaceTrunkOper#ip_unnumbered_enabled}
  */
  readonly ipUnnumberedEnabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_oper#ip_unnumbered_mac_learned DataThunderInterfaceTrunkOper#ip_unnumbered_mac_learned}
  */
  readonly ipUnnumberedMacLearned?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_oper#ip_unnumbered_oper DataThunderInterfaceTrunkOper#ip_unnumbered_oper}
  */
  readonly ipUnnumberedOper?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_oper#ip_unnumbered_peer_lla DataThunderInterfaceTrunkOper#ip_unnumbered_peer_lla}
  */
  readonly ipUnnumberedPeerLla?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_oper#ipv4_addr_count DataThunderInterfaceTrunkOper#ipv4_addr_count}
  */
  readonly ipv4AddrCount?: number;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_oper#ipv4_address DataThunderInterfaceTrunkOper#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * IP subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_oper#ipv4_netmask DataThunderInterfaceTrunkOper#ipv4_netmask}
  */
  readonly ipv4Netmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_oper#ipv6_addr_count DataThunderInterfaceTrunkOper#ipv6_addr_count}
  */
  readonly ipv6AddrCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_oper#ipv6_link_local DataThunderInterfaceTrunkOper#ipv6_link_local}
  */
  readonly ipv6LinkLocal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_oper#ipv6_link_local_prefix DataThunderInterfaceTrunkOper#ipv6_link_local_prefix}
  */
  readonly ipv6LinkLocalPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_oper#ipv6_link_local_scope DataThunderInterfaceTrunkOper#ipv6_link_local_scope}
  */
  readonly ipv6LinkLocalScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_oper#ipv6_link_local_type DataThunderInterfaceTrunkOper#ipv6_link_local_type}
  */
  readonly ipv6LinkLocalType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_oper#line_protocol DataThunderInterfaceTrunkOper#line_protocol}
  */
  readonly lineProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_oper#mtu DataThunderInterfaceTrunkOper#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_oper#state DataThunderInterfaceTrunkOper#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_oper#vlan_id DataThunderInterfaceTrunkOper#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * ipv4_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_oper#ipv4_list DataThunderInterfaceTrunkOper#ipv4_list}
  */
  readonly ipv4List?: DataThunderInterfaceTrunkOperOperIpv4ListStruct[] | cdktf.IResolvable;
  /**
  * ipv6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_oper#ipv6_list DataThunderInterfaceTrunkOper#ipv6_list}
  */
  readonly ipv6List?: DataThunderInterfaceTrunkOperOperIpv6ListStruct[] | cdktf.IResolvable;
  /**
  * trunk_member block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_oper#trunk_member DataThunderInterfaceTrunkOper#trunk_member}
  */
  readonly trunkMember?: DataThunderInterfaceTrunkOperOperTrunkMember[] | cdktf.IResolvable;
}

export function dataThunderInterfaceTrunkOperOperToTerraform(struct?: DataThunderInterfaceTrunkOperOperOutputReference | DataThunderInterfaceTrunkOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    hardware: cdktf.stringToTerraform(struct!.hardware),
    icmp6_rate_limit_current: cdktf.numberToTerraform(struct!.icmp6RateLimitCurrent),
    icmp6_rate_over_limit_drop: cdktf.numberToTerraform(struct!.icmp6RateOverLimitDrop),
    icmp_rate_limit_current: cdktf.numberToTerraform(struct!.icmpRateLimitCurrent),
    icmp_rate_over_limit_drop: cdktf.numberToTerraform(struct!.icmpRateOverLimitDrop),
    igmp_query_sent: cdktf.numberToTerraform(struct!.igmpQuerySent),
    ip_unnumbered_enabled: cdktf.numberToTerraform(struct!.ipUnnumberedEnabled),
    ip_unnumbered_mac_learned: cdktf.numberToTerraform(struct!.ipUnnumberedMacLearned),
    ip_unnumbered_oper: cdktf.numberToTerraform(struct!.ipUnnumberedOper),
    ip_unnumbered_peer_lla: cdktf.stringToTerraform(struct!.ipUnnumberedPeerLla),
    ipv4_addr_count: cdktf.numberToTerraform(struct!.ipv4AddrCount),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_netmask: cdktf.stringToTerraform(struct!.ipv4Netmask),
    ipv6_addr_count: cdktf.numberToTerraform(struct!.ipv6AddrCount),
    ipv6_link_local: cdktf.stringToTerraform(struct!.ipv6LinkLocal),
    ipv6_link_local_prefix: cdktf.stringToTerraform(struct!.ipv6LinkLocalPrefix),
    ipv6_link_local_scope: cdktf.stringToTerraform(struct!.ipv6LinkLocalScope),
    ipv6_link_local_type: cdktf.stringToTerraform(struct!.ipv6LinkLocalType),
    line_protocol: cdktf.stringToTerraform(struct!.lineProtocol),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    state: cdktf.stringToTerraform(struct!.state),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
    ipv4_list: cdktf.listMapper(dataThunderInterfaceTrunkOperOperIpv4ListStructToTerraform, true)(struct!.ipv4List),
    ipv6_list: cdktf.listMapper(dataThunderInterfaceTrunkOperOperIpv6ListStructToTerraform, true)(struct!.ipv6List),
    trunk_member: cdktf.listMapper(dataThunderInterfaceTrunkOperOperTrunkMemberToTerraform, true)(struct!.trunkMember),
  }
}


export function dataThunderInterfaceTrunkOperOperToHclTerraform(struct?: DataThunderInterfaceTrunkOperOperOutputReference | DataThunderInterfaceTrunkOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hardware: {
      value: cdktf.stringToHclTerraform(struct!.hardware),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp6_rate_limit_current: {
      value: cdktf.numberToHclTerraform(struct!.icmp6RateLimitCurrent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp6_rate_over_limit_drop: {
      value: cdktf.numberToHclTerraform(struct!.icmp6RateOverLimitDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_rate_limit_current: {
      value: cdktf.numberToHclTerraform(struct!.icmpRateLimitCurrent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_rate_over_limit_drop: {
      value: cdktf.numberToHclTerraform(struct!.icmpRateOverLimitDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    igmp_query_sent: {
      value: cdktf.numberToHclTerraform(struct!.igmpQuerySent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_unnumbered_enabled: {
      value: cdktf.numberToHclTerraform(struct!.ipUnnumberedEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_unnumbered_mac_learned: {
      value: cdktf.numberToHclTerraform(struct!.ipUnnumberedMacLearned),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_unnumbered_oper: {
      value: cdktf.numberToHclTerraform(struct!.ipUnnumberedOper),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_unnumbered_peer_lla: {
      value: cdktf.stringToHclTerraform(struct!.ipUnnumberedPeerLla),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_addr_count: {
      value: cdktf.numberToHclTerraform(struct!.ipv4AddrCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_netmask: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_addr_count: {
      value: cdktf.numberToHclTerraform(struct!.ipv6AddrCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_link_local: {
      value: cdktf.stringToHclTerraform(struct!.ipv6LinkLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_link_local_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ipv6LinkLocalPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_link_local_scope: {
      value: cdktf.stringToHclTerraform(struct!.ipv6LinkLocalScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_link_local_type: {
      value: cdktf.stringToHclTerraform(struct!.ipv6LinkLocalType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    line_protocol: {
      value: cdktf.stringToHclTerraform(struct!.lineProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_list: {
      value: cdktf.listMapperHcl(dataThunderInterfaceTrunkOperOperIpv4ListStructToHclTerraform, true)(struct!.ipv4List),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderInterfaceTrunkOperOperIpv4ListStructList",
    },
    ipv6_list: {
      value: cdktf.listMapperHcl(dataThunderInterfaceTrunkOperOperIpv6ListStructToHclTerraform, true)(struct!.ipv6List),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderInterfaceTrunkOperOperIpv6ListStructList",
    },
    trunk_member: {
      value: cdktf.listMapperHcl(dataThunderInterfaceTrunkOperOperTrunkMemberToHclTerraform, true)(struct!.trunkMember),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderInterfaceTrunkOperOperTrunkMemberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderInterfaceTrunkOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderInterfaceTrunkOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._hardware !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardware = this._hardware;
    }
    if (this._icmp6RateLimitCurrent !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmp6RateLimitCurrent = this._icmp6RateLimitCurrent;
    }
    if (this._icmp6RateOverLimitDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmp6RateOverLimitDrop = this._icmp6RateOverLimitDrop;
    }
    if (this._icmpRateLimitCurrent !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpRateLimitCurrent = this._icmpRateLimitCurrent;
    }
    if (this._icmpRateOverLimitDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpRateOverLimitDrop = this._icmpRateOverLimitDrop;
    }
    if (this._igmpQuerySent !== undefined) {
      hasAnyValues = true;
      internalValueResult.igmpQuerySent = this._igmpQuerySent;
    }
    if (this._ipUnnumberedEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipUnnumberedEnabled = this._ipUnnumberedEnabled;
    }
    if (this._ipUnnumberedMacLearned !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipUnnumberedMacLearned = this._ipUnnumberedMacLearned;
    }
    if (this._ipUnnumberedOper !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipUnnumberedOper = this._ipUnnumberedOper;
    }
    if (this._ipUnnumberedPeerLla !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipUnnumberedPeerLla = this._ipUnnumberedPeerLla;
    }
    if (this._ipv4AddrCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AddrCount = this._ipv4AddrCount;
    }
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4Netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Netmask = this._ipv4Netmask;
    }
    if (this._ipv6AddrCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AddrCount = this._ipv6AddrCount;
    }
    if (this._ipv6LinkLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6LinkLocal = this._ipv6LinkLocal;
    }
    if (this._ipv6LinkLocalPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6LinkLocalPrefix = this._ipv6LinkLocalPrefix;
    }
    if (this._ipv6LinkLocalScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6LinkLocalScope = this._ipv6LinkLocalScope;
    }
    if (this._ipv6LinkLocalType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6LinkLocalType = this._ipv6LinkLocalType;
    }
    if (this._lineProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineProtocol = this._lineProtocol;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    if (this._ipv4List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4List = this._ipv4List?.internalValue;
    }
    if (this._ipv6List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6List = this._ipv6List?.internalValue;
    }
    if (this._trunkMember?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunkMember = this._trunkMember?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderInterfaceTrunkOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._hardware = undefined;
      this._icmp6RateLimitCurrent = undefined;
      this._icmp6RateOverLimitDrop = undefined;
      this._icmpRateLimitCurrent = undefined;
      this._icmpRateOverLimitDrop = undefined;
      this._igmpQuerySent = undefined;
      this._ipUnnumberedEnabled = undefined;
      this._ipUnnumberedMacLearned = undefined;
      this._ipUnnumberedOper = undefined;
      this._ipUnnumberedPeerLla = undefined;
      this._ipv4AddrCount = undefined;
      this._ipv4Address = undefined;
      this._ipv4Netmask = undefined;
      this._ipv6AddrCount = undefined;
      this._ipv6LinkLocal = undefined;
      this._ipv6LinkLocalPrefix = undefined;
      this._ipv6LinkLocalScope = undefined;
      this._ipv6LinkLocalType = undefined;
      this._lineProtocol = undefined;
      this._mtu = undefined;
      this._state = undefined;
      this._vlanId = undefined;
      this._ipv4List.internalValue = undefined;
      this._ipv6List.internalValue = undefined;
      this._trunkMember.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._hardware = value.hardware;
      this._icmp6RateLimitCurrent = value.icmp6RateLimitCurrent;
      this._icmp6RateOverLimitDrop = value.icmp6RateOverLimitDrop;
      this._icmpRateLimitCurrent = value.icmpRateLimitCurrent;
      this._icmpRateOverLimitDrop = value.icmpRateOverLimitDrop;
      this._igmpQuerySent = value.igmpQuerySent;
      this._ipUnnumberedEnabled = value.ipUnnumberedEnabled;
      this._ipUnnumberedMacLearned = value.ipUnnumberedMacLearned;
      this._ipUnnumberedOper = value.ipUnnumberedOper;
      this._ipUnnumberedPeerLla = value.ipUnnumberedPeerLla;
      this._ipv4AddrCount = value.ipv4AddrCount;
      this._ipv4Address = value.ipv4Address;
      this._ipv4Netmask = value.ipv4Netmask;
      this._ipv6AddrCount = value.ipv6AddrCount;
      this._ipv6LinkLocal = value.ipv6LinkLocal;
      this._ipv6LinkLocalPrefix = value.ipv6LinkLocalPrefix;
      this._ipv6LinkLocalScope = value.ipv6LinkLocalScope;
      this._ipv6LinkLocalType = value.ipv6LinkLocalType;
      this._lineProtocol = value.lineProtocol;
      this._mtu = value.mtu;
      this._state = value.state;
      this._vlanId = value.vlanId;
      this._ipv4List.internalValue = value.ipv4List;
      this._ipv6List.internalValue = value.ipv6List;
      this._trunkMember.internalValue = value.trunkMember;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // hardware - computed: false, optional: true, required: false
  private _hardware?: string; 
  public get hardware() {
    return this.getStringAttribute('hardware');
  }
  public set hardware(value: string) {
    this._hardware = value;
  }
  public resetHardware() {
    this._hardware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareInput() {
    return this._hardware;
  }

  // icmp6_rate_limit_current - computed: false, optional: true, required: false
  private _icmp6RateLimitCurrent?: number; 
  public get icmp6RateLimitCurrent() {
    return this.getNumberAttribute('icmp6_rate_limit_current');
  }
  public set icmp6RateLimitCurrent(value: number) {
    this._icmp6RateLimitCurrent = value;
  }
  public resetIcmp6RateLimitCurrent() {
    this._icmp6RateLimitCurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmp6RateLimitCurrentInput() {
    return this._icmp6RateLimitCurrent;
  }

  // icmp6_rate_over_limit_drop - computed: false, optional: true, required: false
  private _icmp6RateOverLimitDrop?: number; 
  public get icmp6RateOverLimitDrop() {
    return this.getNumberAttribute('icmp6_rate_over_limit_drop');
  }
  public set icmp6RateOverLimitDrop(value: number) {
    this._icmp6RateOverLimitDrop = value;
  }
  public resetIcmp6RateOverLimitDrop() {
    this._icmp6RateOverLimitDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmp6RateOverLimitDropInput() {
    return this._icmp6RateOverLimitDrop;
  }

  // icmp_rate_limit_current - computed: false, optional: true, required: false
  private _icmpRateLimitCurrent?: number; 
  public get icmpRateLimitCurrent() {
    return this.getNumberAttribute('icmp_rate_limit_current');
  }
  public set icmpRateLimitCurrent(value: number) {
    this._icmpRateLimitCurrent = value;
  }
  public resetIcmpRateLimitCurrent() {
    this._icmpRateLimitCurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpRateLimitCurrentInput() {
    return this._icmpRateLimitCurrent;
  }

  // icmp_rate_over_limit_drop - computed: false, optional: true, required: false
  private _icmpRateOverLimitDrop?: number; 
  public get icmpRateOverLimitDrop() {
    return this.getNumberAttribute('icmp_rate_over_limit_drop');
  }
  public set icmpRateOverLimitDrop(value: number) {
    this._icmpRateOverLimitDrop = value;
  }
  public resetIcmpRateOverLimitDrop() {
    this._icmpRateOverLimitDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpRateOverLimitDropInput() {
    return this._icmpRateOverLimitDrop;
  }

  // igmp_query_sent - computed: false, optional: true, required: false
  private _igmpQuerySent?: number; 
  public get igmpQuerySent() {
    return this.getNumberAttribute('igmp_query_sent');
  }
  public set igmpQuerySent(value: number) {
    this._igmpQuerySent = value;
  }
  public resetIgmpQuerySent() {
    this._igmpQuerySent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpQuerySentInput() {
    return this._igmpQuerySent;
  }

  // ip_unnumbered_enabled - computed: false, optional: true, required: false
  private _ipUnnumberedEnabled?: number; 
  public get ipUnnumberedEnabled() {
    return this.getNumberAttribute('ip_unnumbered_enabled');
  }
  public set ipUnnumberedEnabled(value: number) {
    this._ipUnnumberedEnabled = value;
  }
  public resetIpUnnumberedEnabled() {
    this._ipUnnumberedEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipUnnumberedEnabledInput() {
    return this._ipUnnumberedEnabled;
  }

  // ip_unnumbered_mac_learned - computed: false, optional: true, required: false
  private _ipUnnumberedMacLearned?: number; 
  public get ipUnnumberedMacLearned() {
    return this.getNumberAttribute('ip_unnumbered_mac_learned');
  }
  public set ipUnnumberedMacLearned(value: number) {
    this._ipUnnumberedMacLearned = value;
  }
  public resetIpUnnumberedMacLearned() {
    this._ipUnnumberedMacLearned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipUnnumberedMacLearnedInput() {
    return this._ipUnnumberedMacLearned;
  }

  // ip_unnumbered_oper - computed: false, optional: true, required: false
  private _ipUnnumberedOper?: number; 
  public get ipUnnumberedOper() {
    return this.getNumberAttribute('ip_unnumbered_oper');
  }
  public set ipUnnumberedOper(value: number) {
    this._ipUnnumberedOper = value;
  }
  public resetIpUnnumberedOper() {
    this._ipUnnumberedOper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipUnnumberedOperInput() {
    return this._ipUnnumberedOper;
  }

  // ip_unnumbered_peer_lla - computed: false, optional: true, required: false
  private _ipUnnumberedPeerLla?: string; 
  public get ipUnnumberedPeerLla() {
    return this.getStringAttribute('ip_unnumbered_peer_lla');
  }
  public set ipUnnumberedPeerLla(value: string) {
    this._ipUnnumberedPeerLla = value;
  }
  public resetIpUnnumberedPeerLla() {
    this._ipUnnumberedPeerLla = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipUnnumberedPeerLlaInput() {
    return this._ipUnnumberedPeerLla;
  }

  // ipv4_addr_count - computed: false, optional: true, required: false
  private _ipv4AddrCount?: number; 
  public get ipv4AddrCount() {
    return this.getNumberAttribute('ipv4_addr_count');
  }
  public set ipv4AddrCount(value: number) {
    this._ipv4AddrCount = value;
  }
  public resetIpv4AddrCount() {
    this._ipv4AddrCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrCountInput() {
    return this._ipv4AddrCount;
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv4_netmask - computed: false, optional: true, required: false
  private _ipv4Netmask?: string; 
  public get ipv4Netmask() {
    return this.getStringAttribute('ipv4_netmask');
  }
  public set ipv4Netmask(value: string) {
    this._ipv4Netmask = value;
  }
  public resetIpv4Netmask() {
    this._ipv4Netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NetmaskInput() {
    return this._ipv4Netmask;
  }

  // ipv6_addr_count - computed: false, optional: true, required: false
  private _ipv6AddrCount?: number; 
  public get ipv6AddrCount() {
    return this.getNumberAttribute('ipv6_addr_count');
  }
  public set ipv6AddrCount(value: number) {
    this._ipv6AddrCount = value;
  }
  public resetIpv6AddrCount() {
    this._ipv6AddrCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrCountInput() {
    return this._ipv6AddrCount;
  }

  // ipv6_link_local - computed: false, optional: true, required: false
  private _ipv6LinkLocal?: string; 
  public get ipv6LinkLocal() {
    return this.getStringAttribute('ipv6_link_local');
  }
  public set ipv6LinkLocal(value: string) {
    this._ipv6LinkLocal = value;
  }
  public resetIpv6LinkLocal() {
    this._ipv6LinkLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6LinkLocalInput() {
    return this._ipv6LinkLocal;
  }

  // ipv6_link_local_prefix - computed: false, optional: true, required: false
  private _ipv6LinkLocalPrefix?: string; 
  public get ipv6LinkLocalPrefix() {
    return this.getStringAttribute('ipv6_link_local_prefix');
  }
  public set ipv6LinkLocalPrefix(value: string) {
    this._ipv6LinkLocalPrefix = value;
  }
  public resetIpv6LinkLocalPrefix() {
    this._ipv6LinkLocalPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6LinkLocalPrefixInput() {
    return this._ipv6LinkLocalPrefix;
  }

  // ipv6_link_local_scope - computed: false, optional: true, required: false
  private _ipv6LinkLocalScope?: string; 
  public get ipv6LinkLocalScope() {
    return this.getStringAttribute('ipv6_link_local_scope');
  }
  public set ipv6LinkLocalScope(value: string) {
    this._ipv6LinkLocalScope = value;
  }
  public resetIpv6LinkLocalScope() {
    this._ipv6LinkLocalScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6LinkLocalScopeInput() {
    return this._ipv6LinkLocalScope;
  }

  // ipv6_link_local_type - computed: false, optional: true, required: false
  private _ipv6LinkLocalType?: string; 
  public get ipv6LinkLocalType() {
    return this.getStringAttribute('ipv6_link_local_type');
  }
  public set ipv6LinkLocalType(value: string) {
    this._ipv6LinkLocalType = value;
  }
  public resetIpv6LinkLocalType() {
    this._ipv6LinkLocalType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6LinkLocalTypeInput() {
    return this._ipv6LinkLocalType;
  }

  // line_protocol - computed: false, optional: true, required: false
  private _lineProtocol?: string; 
  public get lineProtocol() {
    return this.getStringAttribute('line_protocol');
  }
  public set lineProtocol(value: string) {
    this._lineProtocol = value;
  }
  public resetLineProtocol() {
    this._lineProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineProtocolInput() {
    return this._lineProtocol;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // ipv4_list - computed: false, optional: true, required: false
  private _ipv4List = new DataThunderInterfaceTrunkOperOperIpv4ListStructList(this, "ipv4_list", false);
  public get ipv4List() {
    return this._ipv4List;
  }
  public putIpv4List(value: DataThunderInterfaceTrunkOperOperIpv4ListStruct[] | cdktf.IResolvable) {
    this._ipv4List.internalValue = value;
  }
  public resetIpv4List() {
    this._ipv4List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ListInput() {
    return this._ipv4List.internalValue;
  }

  // ipv6_list - computed: false, optional: true, required: false
  private _ipv6List = new DataThunderInterfaceTrunkOperOperIpv6ListStructList(this, "ipv6_list", false);
  public get ipv6List() {
    return this._ipv6List;
  }
  public putIpv6List(value: DataThunderInterfaceTrunkOperOperIpv6ListStruct[] | cdktf.IResolvable) {
    this._ipv6List.internalValue = value;
  }
  public resetIpv6List() {
    this._ipv6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ListInput() {
    return this._ipv6List.internalValue;
  }

  // trunk_member - computed: false, optional: true, required: false
  private _trunkMember = new DataThunderInterfaceTrunkOperOperTrunkMemberList(this, "trunk_member", false);
  public get trunkMember() {
    return this._trunkMember;
  }
  public putTrunkMember(value: DataThunderInterfaceTrunkOperOperTrunkMember[] | cdktf.IResolvable) {
    this._trunkMember.internalValue = value;
  }
  public resetTrunkMember() {
    this._trunkMember.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkMemberInput() {
    return this._trunkMember.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_oper thunder_interface_trunk_oper}
*/
export class DataThunderInterfaceTrunkOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_interface_trunk_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderInterfaceTrunkOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderInterfaceTrunkOper to import
  * @param importFromId The id of the existing DataThunderInterfaceTrunkOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderInterfaceTrunkOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_interface_trunk_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_trunk_oper thunder_interface_trunk_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderInterfaceTrunkOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderInterfaceTrunkOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_interface_trunk_oper',
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
    this._ifnum = config.ifnum;
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

  // ifnum - computed: false, optional: false, required: true
  private _ifnum?: number; 
  public get ifnum() {
    return this.getNumberAttribute('ifnum');
  }
  public set ifnum(value: number) {
    this._ifnum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ifnumInput() {
    return this._ifnum;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderInterfaceTrunkOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderInterfaceTrunkOperOper) {
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
      ifnum: cdktf.numberToTerraform(this._ifnum),
      oper: dataThunderInterfaceTrunkOperOperToTerraform(this._oper.internalValue),
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
      ifnum: {
        value: cdktf.numberToHclTerraform(this._ifnum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      oper: {
        value: dataThunderInterfaceTrunkOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderInterfaceTrunkOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
