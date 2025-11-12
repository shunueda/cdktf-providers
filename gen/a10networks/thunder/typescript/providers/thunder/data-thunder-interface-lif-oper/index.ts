// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_lif_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderInterfaceLifOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_lif_oper#id DataThunderInterfaceLifOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Lif interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_lif_oper#ifname DataThunderInterfaceLifOper#ifname}
  */
  readonly ifname: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_lif_oper#oper DataThunderInterfaceLifOper#oper}
  */
  readonly oper?: DataThunderInterfaceLifOperOper;
}
export interface DataThunderInterfaceLifOperOperIpv4ListStruct {
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_lif_oper#addr DataThunderInterfaceLifOper#addr}
  */
  readonly addr?: string;
  /**
  * IP subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_lif_oper#mask DataThunderInterfaceLifOper#mask}
  */
  readonly mask?: string;
}

export function dataThunderInterfaceLifOperOperIpv4ListStructToTerraform(struct?: DataThunderInterfaceLifOperOperIpv4ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    mask: cdktf.stringToTerraform(struct!.mask),
  }
}


export function dataThunderInterfaceLifOperOperIpv4ListStructToHclTerraform(struct?: DataThunderInterfaceLifOperOperIpv4ListStruct | cdktf.IResolvable): any {
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

export class DataThunderInterfaceLifOperOperIpv4ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderInterfaceLifOperOperIpv4ListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderInterfaceLifOperOperIpv4ListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderInterfaceLifOperOperIpv4ListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderInterfaceLifOperOperIpv4ListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderInterfaceLifOperOperIpv4ListStructOutputReference {
    return new DataThunderInterfaceLifOperOperIpv4ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderInterfaceLifOperOperIpv6ListStruct {
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_lif_oper#addr DataThunderInterfaceLifOper#addr}
  */
  readonly addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_lif_oper#is_anycast DataThunderInterfaceLifOper#is_anycast}
  */
  readonly isAnycast?: number;
  /**
  * IP subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_lif_oper#prefix DataThunderInterfaceLifOper#prefix}
  */
  readonly prefix?: string;
}

export function dataThunderInterfaceLifOperOperIpv6ListStructToTerraform(struct?: DataThunderInterfaceLifOperOperIpv6ListStruct | cdktf.IResolvable): any {
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


export function dataThunderInterfaceLifOperOperIpv6ListStructToHclTerraform(struct?: DataThunderInterfaceLifOperOperIpv6ListStruct | cdktf.IResolvable): any {
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

export class DataThunderInterfaceLifOperOperIpv6ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderInterfaceLifOperOperIpv6ListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderInterfaceLifOperOperIpv6ListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderInterfaceLifOperOperIpv6ListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderInterfaceLifOperOperIpv6ListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderInterfaceLifOperOperIpv6ListStructOutputReference {
    return new DataThunderInterfaceLifOperOperIpv6ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderInterfaceLifOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_lif_oper#encapsulation_type DataThunderInterfaceLifOper#encapsulation_type}
  */
  readonly encapsulationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_lif_oper#icmp6_rate_limit_current DataThunderInterfaceLifOper#icmp6_rate_limit_current}
  */
  readonly icmp6RateLimitCurrent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_lif_oper#icmp6_rate_over_limit_drop DataThunderInterfaceLifOper#icmp6_rate_over_limit_drop}
  */
  readonly icmp6RateOverLimitDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_lif_oper#icmp_rate_limit_current DataThunderInterfaceLifOper#icmp_rate_limit_current}
  */
  readonly icmpRateLimitCurrent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_lif_oper#icmp_rate_over_limit_drop DataThunderInterfaceLifOper#icmp_rate_over_limit_drop}
  */
  readonly icmpRateOverLimitDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_lif_oper#igmp_query_sent DataThunderInterfaceLifOper#igmp_query_sent}
  */
  readonly igmpQuerySent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_lif_oper#ip_unnumbered_enabled DataThunderInterfaceLifOper#ip_unnumbered_enabled}
  */
  readonly ipUnnumberedEnabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_lif_oper#ipv4_addr_count DataThunderInterfaceLifOper#ipv4_addr_count}
  */
  readonly ipv4AddrCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_lif_oper#ipv6_addr_count DataThunderInterfaceLifOper#ipv6_addr_count}
  */
  readonly ipv6AddrCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_lif_oper#ipv6_link_local DataThunderInterfaceLifOper#ipv6_link_local}
  */
  readonly ipv6LinkLocal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_lif_oper#ipv6_link_local_prefix DataThunderInterfaceLifOper#ipv6_link_local_prefix}
  */
  readonly ipv6LinkLocalPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_lif_oper#ipv6_link_local_scope DataThunderInterfaceLifOper#ipv6_link_local_scope}
  */
  readonly ipv6LinkLocalScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_lif_oper#ipv6_link_local_type DataThunderInterfaceLifOper#ipv6_link_local_type}
  */
  readonly ipv6LinkLocalType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_lif_oper#keep_alive DataThunderInterfaceLifOper#keep_alive}
  */
  readonly keepAlive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_lif_oper#line_protocol DataThunderInterfaceLifOper#line_protocol}
  */
  readonly lineProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_lif_oper#link_type DataThunderInterfaceLifOper#link_type}
  */
  readonly linkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_lif_oper#mac DataThunderInterfaceLifOper#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_lif_oper#member_id DataThunderInterfaceLifOper#member_id}
  */
  readonly memberId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_lif_oper#mtu DataThunderInterfaceLifOper#mtu}
  */
  readonly mtu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_lif_oper#state DataThunderInterfaceLifOper#state}
  */
  readonly state?: string;
  /**
  * ipv4_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_lif_oper#ipv4_list DataThunderInterfaceLifOper#ipv4_list}
  */
  readonly ipv4List?: DataThunderInterfaceLifOperOperIpv4ListStruct[] | cdktf.IResolvable;
  /**
  * ipv6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_lif_oper#ipv6_list DataThunderInterfaceLifOper#ipv6_list}
  */
  readonly ipv6List?: DataThunderInterfaceLifOperOperIpv6ListStruct[] | cdktf.IResolvable;
}

export function dataThunderInterfaceLifOperOperToTerraform(struct?: DataThunderInterfaceLifOperOperOutputReference | DataThunderInterfaceLifOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encapsulation_type: cdktf.stringToTerraform(struct!.encapsulationType),
    icmp6_rate_limit_current: cdktf.numberToTerraform(struct!.icmp6RateLimitCurrent),
    icmp6_rate_over_limit_drop: cdktf.numberToTerraform(struct!.icmp6RateOverLimitDrop),
    icmp_rate_limit_current: cdktf.numberToTerraform(struct!.icmpRateLimitCurrent),
    icmp_rate_over_limit_drop: cdktf.numberToTerraform(struct!.icmpRateOverLimitDrop),
    igmp_query_sent: cdktf.numberToTerraform(struct!.igmpQuerySent),
    ip_unnumbered_enabled: cdktf.numberToTerraform(struct!.ipUnnumberedEnabled),
    ipv4_addr_count: cdktf.numberToTerraform(struct!.ipv4AddrCount),
    ipv6_addr_count: cdktf.numberToTerraform(struct!.ipv6AddrCount),
    ipv6_link_local: cdktf.stringToTerraform(struct!.ipv6LinkLocal),
    ipv6_link_local_prefix: cdktf.stringToTerraform(struct!.ipv6LinkLocalPrefix),
    ipv6_link_local_scope: cdktf.stringToTerraform(struct!.ipv6LinkLocalScope),
    ipv6_link_local_type: cdktf.stringToTerraform(struct!.ipv6LinkLocalType),
    keep_alive: cdktf.stringToTerraform(struct!.keepAlive),
    line_protocol: cdktf.stringToTerraform(struct!.lineProtocol),
    link_type: cdktf.stringToTerraform(struct!.linkType),
    mac: cdktf.stringToTerraform(struct!.mac),
    member_id: cdktf.stringToTerraform(struct!.memberId),
    mtu: cdktf.stringToTerraform(struct!.mtu),
    state: cdktf.stringToTerraform(struct!.state),
    ipv4_list: cdktf.listMapper(dataThunderInterfaceLifOperOperIpv4ListStructToTerraform, true)(struct!.ipv4List),
    ipv6_list: cdktf.listMapper(dataThunderInterfaceLifOperOperIpv6ListStructToTerraform, true)(struct!.ipv6List),
  }
}


export function dataThunderInterfaceLifOperOperToHclTerraform(struct?: DataThunderInterfaceLifOperOperOutputReference | DataThunderInterfaceLifOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encapsulation_type: {
      value: cdktf.stringToHclTerraform(struct!.encapsulationType),
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
    ipv4_addr_count: {
      value: cdktf.numberToHclTerraform(struct!.ipv4AddrCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    keep_alive: {
      value: cdktf.stringToHclTerraform(struct!.keepAlive),
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
    link_type: {
      value: cdktf.stringToHclTerraform(struct!.linkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member_id: {
      value: cdktf.stringToHclTerraform(struct!.memberId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtu: {
      value: cdktf.stringToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_list: {
      value: cdktf.listMapperHcl(dataThunderInterfaceLifOperOperIpv4ListStructToHclTerraform, true)(struct!.ipv4List),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderInterfaceLifOperOperIpv4ListStructList",
    },
    ipv6_list: {
      value: cdktf.listMapperHcl(dataThunderInterfaceLifOperOperIpv6ListStructToHclTerraform, true)(struct!.ipv6List),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderInterfaceLifOperOperIpv6ListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderInterfaceLifOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderInterfaceLifOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encapsulationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encapsulationType = this._encapsulationType;
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
    if (this._ipv4AddrCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AddrCount = this._ipv4AddrCount;
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
    if (this._keepAlive !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepAlive = this._keepAlive;
    }
    if (this._lineProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineProtocol = this._lineProtocol;
    }
    if (this._linkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkType = this._linkType;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    if (this._memberId !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberId = this._memberId;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._ipv4List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4List = this._ipv4List?.internalValue;
    }
    if (this._ipv6List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6List = this._ipv6List?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderInterfaceLifOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encapsulationType = undefined;
      this._icmp6RateLimitCurrent = undefined;
      this._icmp6RateOverLimitDrop = undefined;
      this._icmpRateLimitCurrent = undefined;
      this._icmpRateOverLimitDrop = undefined;
      this._igmpQuerySent = undefined;
      this._ipUnnumberedEnabled = undefined;
      this._ipv4AddrCount = undefined;
      this._ipv6AddrCount = undefined;
      this._ipv6LinkLocal = undefined;
      this._ipv6LinkLocalPrefix = undefined;
      this._ipv6LinkLocalScope = undefined;
      this._ipv6LinkLocalType = undefined;
      this._keepAlive = undefined;
      this._lineProtocol = undefined;
      this._linkType = undefined;
      this._mac = undefined;
      this._memberId = undefined;
      this._mtu = undefined;
      this._state = undefined;
      this._ipv4List.internalValue = undefined;
      this._ipv6List.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encapsulationType = value.encapsulationType;
      this._icmp6RateLimitCurrent = value.icmp6RateLimitCurrent;
      this._icmp6RateOverLimitDrop = value.icmp6RateOverLimitDrop;
      this._icmpRateLimitCurrent = value.icmpRateLimitCurrent;
      this._icmpRateOverLimitDrop = value.icmpRateOverLimitDrop;
      this._igmpQuerySent = value.igmpQuerySent;
      this._ipUnnumberedEnabled = value.ipUnnumberedEnabled;
      this._ipv4AddrCount = value.ipv4AddrCount;
      this._ipv6AddrCount = value.ipv6AddrCount;
      this._ipv6LinkLocal = value.ipv6LinkLocal;
      this._ipv6LinkLocalPrefix = value.ipv6LinkLocalPrefix;
      this._ipv6LinkLocalScope = value.ipv6LinkLocalScope;
      this._ipv6LinkLocalType = value.ipv6LinkLocalType;
      this._keepAlive = value.keepAlive;
      this._lineProtocol = value.lineProtocol;
      this._linkType = value.linkType;
      this._mac = value.mac;
      this._memberId = value.memberId;
      this._mtu = value.mtu;
      this._state = value.state;
      this._ipv4List.internalValue = value.ipv4List;
      this._ipv6List.internalValue = value.ipv6List;
    }
  }

  // encapsulation_type - computed: false, optional: true, required: false
  private _encapsulationType?: string; 
  public get encapsulationType() {
    return this.getStringAttribute('encapsulation_type');
  }
  public set encapsulationType(value: string) {
    this._encapsulationType = value;
  }
  public resetEncapsulationType() {
    this._encapsulationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationTypeInput() {
    return this._encapsulationType;
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

  // keep_alive - computed: false, optional: true, required: false
  private _keepAlive?: string; 
  public get keepAlive() {
    return this.getStringAttribute('keep_alive');
  }
  public set keepAlive(value: string) {
    this._keepAlive = value;
  }
  public resetKeepAlive() {
    this._keepAlive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAliveInput() {
    return this._keepAlive;
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

  // link_type - computed: false, optional: true, required: false
  private _linkType?: string; 
  public get linkType() {
    return this.getStringAttribute('link_type');
  }
  public set linkType(value: string) {
    this._linkType = value;
  }
  public resetLinkType() {
    this._linkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkTypeInput() {
    return this._linkType;
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

  // member_id - computed: false, optional: true, required: false
  private _memberId?: string; 
  public get memberId() {
    return this.getStringAttribute('member_id');
  }
  public set memberId(value: string) {
    this._memberId = value;
  }
  public resetMemberId() {
    this._memberId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberIdInput() {
    return this._memberId;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: string; 
  public get mtu() {
    return this.getStringAttribute('mtu');
  }
  public set mtu(value: string) {
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

  // ipv4_list - computed: false, optional: true, required: false
  private _ipv4List = new DataThunderInterfaceLifOperOperIpv4ListStructList(this, "ipv4_list", false);
  public get ipv4List() {
    return this._ipv4List;
  }
  public putIpv4List(value: DataThunderInterfaceLifOperOperIpv4ListStruct[] | cdktf.IResolvable) {
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
  private _ipv6List = new DataThunderInterfaceLifOperOperIpv6ListStructList(this, "ipv6_list", false);
  public get ipv6List() {
    return this._ipv6List;
  }
  public putIpv6List(value: DataThunderInterfaceLifOperOperIpv6ListStruct[] | cdktf.IResolvable) {
    this._ipv6List.internalValue = value;
  }
  public resetIpv6List() {
    this._ipv6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ListInput() {
    return this._ipv6List.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_lif_oper thunder_interface_lif_oper}
*/
export class DataThunderInterfaceLifOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_interface_lif_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderInterfaceLifOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderInterfaceLifOper to import
  * @param importFromId The id of the existing DataThunderInterfaceLifOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_lif_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderInterfaceLifOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_interface_lif_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_lif_oper thunder_interface_lif_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderInterfaceLifOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderInterfaceLifOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_interface_lif_oper',
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
    this._ifname = config.ifname;
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

  // ifname - computed: false, optional: false, required: true
  private _ifname?: string; 
  public get ifname() {
    return this.getStringAttribute('ifname');
  }
  public set ifname(value: string) {
    this._ifname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ifnameInput() {
    return this._ifname;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderInterfaceLifOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderInterfaceLifOperOper) {
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
      ifname: cdktf.stringToTerraform(this._ifname),
      oper: dataThunderInterfaceLifOperOperToTerraform(this._oper.internalValue),
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
      ifname: {
        value: cdktf.stringToHclTerraform(this._ifname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderInterfaceLifOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderInterfaceLifOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
