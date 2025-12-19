// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_loopback_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderInterfaceLoopbackOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_loopback_oper#id DataThunderInterfaceLoopbackOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Loopback interface number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_loopback_oper#ifnum DataThunderInterfaceLoopbackOper#ifnum}
  */
  readonly ifnum: number;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_loopback_oper#oper DataThunderInterfaceLoopbackOper#oper}
  */
  readonly oper?: DataThunderInterfaceLoopbackOperOper;
}
export interface DataThunderInterfaceLoopbackOperOperIpv4ListStruct {
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_loopback_oper#addr DataThunderInterfaceLoopbackOper#addr}
  */
  readonly addr?: string;
  /**
  * IP subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_loopback_oper#mask DataThunderInterfaceLoopbackOper#mask}
  */
  readonly mask?: string;
}

export function dataThunderInterfaceLoopbackOperOperIpv4ListStructToTerraform(struct?: DataThunderInterfaceLoopbackOperOperIpv4ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    mask: cdktf.stringToTerraform(struct!.mask),
  }
}


export function dataThunderInterfaceLoopbackOperOperIpv4ListStructToHclTerraform(struct?: DataThunderInterfaceLoopbackOperOperIpv4ListStruct | cdktf.IResolvable): any {
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

export class DataThunderInterfaceLoopbackOperOperIpv4ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderInterfaceLoopbackOperOperIpv4ListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderInterfaceLoopbackOperOperIpv4ListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderInterfaceLoopbackOperOperIpv4ListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderInterfaceLoopbackOperOperIpv4ListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderInterfaceLoopbackOperOperIpv4ListStructOutputReference {
    return new DataThunderInterfaceLoopbackOperOperIpv4ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderInterfaceLoopbackOperOperIpv6ListStruct {
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_loopback_oper#addr DataThunderInterfaceLoopbackOper#addr}
  */
  readonly addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_loopback_oper#is_anycast DataThunderInterfaceLoopbackOper#is_anycast}
  */
  readonly isAnycast?: number;
  /**
  * IP subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_loopback_oper#prefix DataThunderInterfaceLoopbackOper#prefix}
  */
  readonly prefix?: string;
}

export function dataThunderInterfaceLoopbackOperOperIpv6ListStructToTerraform(struct?: DataThunderInterfaceLoopbackOperOperIpv6ListStruct | cdktf.IResolvable): any {
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


export function dataThunderInterfaceLoopbackOperOperIpv6ListStructToHclTerraform(struct?: DataThunderInterfaceLoopbackOperOperIpv6ListStruct | cdktf.IResolvable): any {
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

export class DataThunderInterfaceLoopbackOperOperIpv6ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderInterfaceLoopbackOperOperIpv6ListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderInterfaceLoopbackOperOperIpv6ListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderInterfaceLoopbackOperOperIpv6ListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderInterfaceLoopbackOperOperIpv6ListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderInterfaceLoopbackOperOperIpv6ListStructOutputReference {
    return new DataThunderInterfaceLoopbackOperOperIpv6ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderInterfaceLoopbackOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_loopback_oper#ipv4_addr_count DataThunderInterfaceLoopbackOper#ipv4_addr_count}
  */
  readonly ipv4AddrCount?: number;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_loopback_oper#ipv4_address DataThunderInterfaceLoopbackOper#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * IP subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_loopback_oper#ipv4_netmask DataThunderInterfaceLoopbackOper#ipv4_netmask}
  */
  readonly ipv4Netmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_loopback_oper#ipv6_addr_count DataThunderInterfaceLoopbackOper#ipv6_addr_count}
  */
  readonly ipv6AddrCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_loopback_oper#ipv6_link_local DataThunderInterfaceLoopbackOper#ipv6_link_local}
  */
  readonly ipv6LinkLocal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_loopback_oper#ipv6_link_local_prefix DataThunderInterfaceLoopbackOper#ipv6_link_local_prefix}
  */
  readonly ipv6LinkLocalPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_loopback_oper#ipv6_link_local_scope DataThunderInterfaceLoopbackOper#ipv6_link_local_scope}
  */
  readonly ipv6LinkLocalScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_loopback_oper#ipv6_link_local_type DataThunderInterfaceLoopbackOper#ipv6_link_local_type}
  */
  readonly ipv6LinkLocalType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_loopback_oper#line_protocol DataThunderInterfaceLoopbackOper#line_protocol}
  */
  readonly lineProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_loopback_oper#state DataThunderInterfaceLoopbackOper#state}
  */
  readonly state?: string;
  /**
  * ipv4_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_loopback_oper#ipv4_list DataThunderInterfaceLoopbackOper#ipv4_list}
  */
  readonly ipv4List?: DataThunderInterfaceLoopbackOperOperIpv4ListStruct[] | cdktf.IResolvable;
  /**
  * ipv6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_loopback_oper#ipv6_list DataThunderInterfaceLoopbackOper#ipv6_list}
  */
  readonly ipv6List?: DataThunderInterfaceLoopbackOperOperIpv6ListStruct[] | cdktf.IResolvable;
}

export function dataThunderInterfaceLoopbackOperOperToTerraform(struct?: DataThunderInterfaceLoopbackOperOperOutputReference | DataThunderInterfaceLoopbackOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_addr_count: cdktf.numberToTerraform(struct!.ipv4AddrCount),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_netmask: cdktf.stringToTerraform(struct!.ipv4Netmask),
    ipv6_addr_count: cdktf.numberToTerraform(struct!.ipv6AddrCount),
    ipv6_link_local: cdktf.stringToTerraform(struct!.ipv6LinkLocal),
    ipv6_link_local_prefix: cdktf.stringToTerraform(struct!.ipv6LinkLocalPrefix),
    ipv6_link_local_scope: cdktf.stringToTerraform(struct!.ipv6LinkLocalScope),
    ipv6_link_local_type: cdktf.stringToTerraform(struct!.ipv6LinkLocalType),
    line_protocol: cdktf.stringToTerraform(struct!.lineProtocol),
    state: cdktf.stringToTerraform(struct!.state),
    ipv4_list: cdktf.listMapper(dataThunderInterfaceLoopbackOperOperIpv4ListStructToTerraform, true)(struct!.ipv4List),
    ipv6_list: cdktf.listMapper(dataThunderInterfaceLoopbackOperOperIpv6ListStructToTerraform, true)(struct!.ipv6List),
  }
}


export function dataThunderInterfaceLoopbackOperOperToHclTerraform(struct?: DataThunderInterfaceLoopbackOperOperOutputReference | DataThunderInterfaceLoopbackOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_list: {
      value: cdktf.listMapperHcl(dataThunderInterfaceLoopbackOperOperIpv4ListStructToHclTerraform, true)(struct!.ipv4List),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderInterfaceLoopbackOperOperIpv4ListStructList",
    },
    ipv6_list: {
      value: cdktf.listMapperHcl(dataThunderInterfaceLoopbackOperOperIpv6ListStructToHclTerraform, true)(struct!.ipv6List),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderInterfaceLoopbackOperOperIpv6ListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderInterfaceLoopbackOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderInterfaceLoopbackOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataThunderInterfaceLoopbackOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4AddrCount = undefined;
      this._ipv4Address = undefined;
      this._ipv4Netmask = undefined;
      this._ipv6AddrCount = undefined;
      this._ipv6LinkLocal = undefined;
      this._ipv6LinkLocalPrefix = undefined;
      this._ipv6LinkLocalScope = undefined;
      this._ipv6LinkLocalType = undefined;
      this._lineProtocol = undefined;
      this._state = undefined;
      this._ipv4List.internalValue = undefined;
      this._ipv6List.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4AddrCount = value.ipv4AddrCount;
      this._ipv4Address = value.ipv4Address;
      this._ipv4Netmask = value.ipv4Netmask;
      this._ipv6AddrCount = value.ipv6AddrCount;
      this._ipv6LinkLocal = value.ipv6LinkLocal;
      this._ipv6LinkLocalPrefix = value.ipv6LinkLocalPrefix;
      this._ipv6LinkLocalScope = value.ipv6LinkLocalScope;
      this._ipv6LinkLocalType = value.ipv6LinkLocalType;
      this._lineProtocol = value.lineProtocol;
      this._state = value.state;
      this._ipv4List.internalValue = value.ipv4List;
      this._ipv6List.internalValue = value.ipv6List;
    }
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
  private _ipv4List = new DataThunderInterfaceLoopbackOperOperIpv4ListStructList(this, "ipv4_list", false);
  public get ipv4List() {
    return this._ipv4List;
  }
  public putIpv4List(value: DataThunderInterfaceLoopbackOperOperIpv4ListStruct[] | cdktf.IResolvable) {
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
  private _ipv6List = new DataThunderInterfaceLoopbackOperOperIpv6ListStructList(this, "ipv6_list", false);
  public get ipv6List() {
    return this._ipv6List;
  }
  public putIpv6List(value: DataThunderInterfaceLoopbackOperOperIpv6ListStruct[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_loopback_oper thunder_interface_loopback_oper}
*/
export class DataThunderInterfaceLoopbackOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_interface_loopback_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderInterfaceLoopbackOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderInterfaceLoopbackOper to import
  * @param importFromId The id of the existing DataThunderInterfaceLoopbackOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_loopback_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderInterfaceLoopbackOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_interface_loopback_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_loopback_oper thunder_interface_loopback_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderInterfaceLoopbackOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderInterfaceLoopbackOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_interface_loopback_oper',
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
  private _oper = new DataThunderInterfaceLoopbackOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderInterfaceLoopbackOperOper) {
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
      oper: dataThunderInterfaceLoopbackOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderInterfaceLoopbackOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderInterfaceLoopbackOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
