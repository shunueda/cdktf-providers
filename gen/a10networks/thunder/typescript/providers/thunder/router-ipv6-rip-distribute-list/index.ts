// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip_distribute_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterIpv6RipDistributeListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip_distribute_list#id RouterIpv6RipDistributeList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip_distribute_list#uuid RouterIpv6RipDistributeList#uuid}
  */
  readonly uuid?: string;
  /**
  * acl_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip_distribute_list#acl_cfg RouterIpv6RipDistributeList#acl_cfg}
  */
  readonly aclCfg?: RouterIpv6RipDistributeListAclCfgA[] | cdktf.IResolvable;
  /**
  * prefix block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip_distribute_list#prefix RouterIpv6RipDistributeList#prefix}
  */
  readonly prefix?: RouterIpv6RipDistributeListPrefixA;
}
export interface RouterIpv6RipDistributeListAclCfgA {
  /**
  * Access-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip_distribute_list#acl RouterIpv6RipDistributeList#acl}
  */
  readonly acl?: string;
  /**
  * 'in': Filter incoming routing updates; 'out': Filter outgoing routing updates;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip_distribute_list#acl_direction RouterIpv6RipDistributeList#acl_direction}
  */
  readonly aclDirection?: string;
  /**
  * Ethernet interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip_distribute_list#ethernet RouterIpv6RipDistributeList#ethernet}
  */
  readonly ethernet?: number;
  /**
  * Loopback interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip_distribute_list#loopback RouterIpv6RipDistributeList#loopback}
  */
  readonly loopback?: number;
  /**
  * Trunk interface (Trunk interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip_distribute_list#trunk RouterIpv6RipDistributeList#trunk}
  */
  readonly trunk?: number;
  /**
  * Tunnel interface (Tunnel interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip_distribute_list#tunnel RouterIpv6RipDistributeList#tunnel}
  */
  readonly tunnel?: number;
  /**
  * Virtual ethernet interface (Virtual ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip_distribute_list#ve RouterIpv6RipDistributeList#ve}
  */
  readonly ve?: number;
}

export function routerIpv6RipDistributeListAclCfgAToTerraform(struct?: RouterIpv6RipDistributeListAclCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl: cdktf.stringToTerraform(struct!.acl),
    acl_direction: cdktf.stringToTerraform(struct!.aclDirection),
    ethernet: cdktf.numberToTerraform(struct!.ethernet),
    loopback: cdktf.numberToTerraform(struct!.loopback),
    trunk: cdktf.numberToTerraform(struct!.trunk),
    tunnel: cdktf.numberToTerraform(struct!.tunnel),
    ve: cdktf.numberToTerraform(struct!.ve),
  }
}


export function routerIpv6RipDistributeListAclCfgAToHclTerraform(struct?: RouterIpv6RipDistributeListAclCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl: {
      value: cdktf.stringToHclTerraform(struct!.acl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acl_direction: {
      value: cdktf.stringToHclTerraform(struct!.aclDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ethernet: {
      value: cdktf.numberToHclTerraform(struct!.ethernet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    loopback: {
      value: cdktf.numberToHclTerraform(struct!.loopback),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trunk: {
      value: cdktf.numberToHclTerraform(struct!.trunk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tunnel: {
      value: cdktf.numberToHclTerraform(struct!.tunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ve: {
      value: cdktf.numberToHclTerraform(struct!.ve),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIpv6RipDistributeListAclCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIpv6RipDistributeListAclCfgA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl = this._acl;
    }
    if (this._aclDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclDirection = this._aclDirection;
    }
    if (this._ethernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernet = this._ethernet;
    }
    if (this._loopback !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopback = this._loopback;
    }
    if (this._trunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunk = this._trunk;
    }
    if (this._tunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnel = this._tunnel;
    }
    if (this._ve !== undefined) {
      hasAnyValues = true;
      internalValueResult.ve = this._ve;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIpv6RipDistributeListAclCfgA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acl = undefined;
      this._aclDirection = undefined;
      this._ethernet = undefined;
      this._loopback = undefined;
      this._trunk = undefined;
      this._tunnel = undefined;
      this._ve = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acl = value.acl;
      this._aclDirection = value.aclDirection;
      this._ethernet = value.ethernet;
      this._loopback = value.loopback;
      this._trunk = value.trunk;
      this._tunnel = value.tunnel;
      this._ve = value.ve;
    }
  }

  // acl - computed: false, optional: true, required: false
  private _acl?: string; 
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
  }

  // acl_direction - computed: false, optional: true, required: false
  private _aclDirection?: string; 
  public get aclDirection() {
    return this.getStringAttribute('acl_direction');
  }
  public set aclDirection(value: string) {
    this._aclDirection = value;
  }
  public resetAclDirection() {
    this._aclDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclDirectionInput() {
    return this._aclDirection;
  }

  // ethernet - computed: false, optional: true, required: false
  private _ethernet?: number; 
  public get ethernet() {
    return this.getNumberAttribute('ethernet');
  }
  public set ethernet(value: number) {
    this._ethernet = value;
  }
  public resetEthernet() {
    this._ethernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInput() {
    return this._ethernet;
  }

  // loopback - computed: false, optional: true, required: false
  private _loopback?: number; 
  public get loopback() {
    return this.getNumberAttribute('loopback');
  }
  public set loopback(value: number) {
    this._loopback = value;
  }
  public resetLoopback() {
    this._loopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackInput() {
    return this._loopback;
  }

  // trunk - computed: false, optional: true, required: false
  private _trunk?: number; 
  public get trunk() {
    return this.getNumberAttribute('trunk');
  }
  public set trunk(value: number) {
    this._trunk = value;
  }
  public resetTrunk() {
    this._trunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkInput() {
    return this._trunk;
  }

  // tunnel - computed: false, optional: true, required: false
  private _tunnel?: number; 
  public get tunnel() {
    return this.getNumberAttribute('tunnel');
  }
  public set tunnel(value: number) {
    this._tunnel = value;
  }
  public resetTunnel() {
    this._tunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInput() {
    return this._tunnel;
  }

  // ve - computed: false, optional: true, required: false
  private _ve?: number; 
  public get ve() {
    return this.getNumberAttribute('ve');
  }
  public set ve(value: number) {
    this._ve = value;
  }
  public resetVe() {
    this._ve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veInput() {
    return this._ve;
  }
}

export class RouterIpv6RipDistributeListAclCfgAList extends cdktf.ComplexList {
  public internalValue? : RouterIpv6RipDistributeListAclCfgA[] | cdktf.IResolvable

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
  public get(index: number): RouterIpv6RipDistributeListAclCfgAOutputReference {
    return new RouterIpv6RipDistributeListAclCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIpv6RipDistributeListPrefixPrefixCfgA {
  /**
  * Ethernet interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip_distribute_list#ethernet RouterIpv6RipDistributeList#ethernet}
  */
  readonly ethernet?: number;
  /**
  * Loopback interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip_distribute_list#loopback RouterIpv6RipDistributeList#loopback}
  */
  readonly loopback?: number;
  /**
  * Filter prefixes in routing updates (Name of a prefix list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip_distribute_list#prefix_list RouterIpv6RipDistributeList#prefix_list}
  */
  readonly prefixList?: string;
  /**
  * 'in': Filter incoming routing updates; 'out': Filter outgoing routing updates;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip_distribute_list#prefix_list_direction RouterIpv6RipDistributeList#prefix_list_direction}
  */
  readonly prefixListDirection?: string;
  /**
  * Trunk interface (Trunk interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip_distribute_list#trunk RouterIpv6RipDistributeList#trunk}
  */
  readonly trunk?: number;
  /**
  * Tunnel interface (Tunnel interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip_distribute_list#tunnel RouterIpv6RipDistributeList#tunnel}
  */
  readonly tunnel?: number;
  /**
  * Virtual ethernet interface (Virtual ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip_distribute_list#ve RouterIpv6RipDistributeList#ve}
  */
  readonly ve?: number;
}

export function routerIpv6RipDistributeListPrefixPrefixCfgAToTerraform(struct?: RouterIpv6RipDistributeListPrefixPrefixCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet: cdktf.numberToTerraform(struct!.ethernet),
    loopback: cdktf.numberToTerraform(struct!.loopback),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
    prefix_list_direction: cdktf.stringToTerraform(struct!.prefixListDirection),
    trunk: cdktf.numberToTerraform(struct!.trunk),
    tunnel: cdktf.numberToTerraform(struct!.tunnel),
    ve: cdktf.numberToTerraform(struct!.ve),
  }
}


export function routerIpv6RipDistributeListPrefixPrefixCfgAToHclTerraform(struct?: RouterIpv6RipDistributeListPrefixPrefixCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ethernet: {
      value: cdktf.numberToHclTerraform(struct!.ethernet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    loopback: {
      value: cdktf.numberToHclTerraform(struct!.loopback),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix_list: {
      value: cdktf.stringToHclTerraform(struct!.prefixList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list_direction: {
      value: cdktf.stringToHclTerraform(struct!.prefixListDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trunk: {
      value: cdktf.numberToHclTerraform(struct!.trunk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tunnel: {
      value: cdktf.numberToHclTerraform(struct!.tunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ve: {
      value: cdktf.numberToHclTerraform(struct!.ve),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIpv6RipDistributeListPrefixPrefixCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIpv6RipDistributeListPrefixPrefixCfgA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernet = this._ethernet;
    }
    if (this._loopback !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopback = this._loopback;
    }
    if (this._prefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList;
    }
    if (this._prefixListDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListDirection = this._prefixListDirection;
    }
    if (this._trunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunk = this._trunk;
    }
    if (this._tunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnel = this._tunnel;
    }
    if (this._ve !== undefined) {
      hasAnyValues = true;
      internalValueResult.ve = this._ve;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIpv6RipDistributeListPrefixPrefixCfgA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ethernet = undefined;
      this._loopback = undefined;
      this._prefixList = undefined;
      this._prefixListDirection = undefined;
      this._trunk = undefined;
      this._tunnel = undefined;
      this._ve = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ethernet = value.ethernet;
      this._loopback = value.loopback;
      this._prefixList = value.prefixList;
      this._prefixListDirection = value.prefixListDirection;
      this._trunk = value.trunk;
      this._tunnel = value.tunnel;
      this._ve = value.ve;
    }
  }

  // ethernet - computed: false, optional: true, required: false
  private _ethernet?: number; 
  public get ethernet() {
    return this.getNumberAttribute('ethernet');
  }
  public set ethernet(value: number) {
    this._ethernet = value;
  }
  public resetEthernet() {
    this._ethernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInput() {
    return this._ethernet;
  }

  // loopback - computed: false, optional: true, required: false
  private _loopback?: number; 
  public get loopback() {
    return this.getNumberAttribute('loopback');
  }
  public set loopback(value: number) {
    this._loopback = value;
  }
  public resetLoopback() {
    this._loopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackInput() {
    return this._loopback;
  }

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList?: string; 
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
  public set prefixList(value: string) {
    this._prefixList = value;
  }
  public resetPrefixList() {
    this._prefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList;
  }

  // prefix_list_direction - computed: false, optional: true, required: false
  private _prefixListDirection?: string; 
  public get prefixListDirection() {
    return this.getStringAttribute('prefix_list_direction');
  }
  public set prefixListDirection(value: string) {
    this._prefixListDirection = value;
  }
  public resetPrefixListDirection() {
    this._prefixListDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListDirectionInput() {
    return this._prefixListDirection;
  }

  // trunk - computed: false, optional: true, required: false
  private _trunk?: number; 
  public get trunk() {
    return this.getNumberAttribute('trunk');
  }
  public set trunk(value: number) {
    this._trunk = value;
  }
  public resetTrunk() {
    this._trunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkInput() {
    return this._trunk;
  }

  // tunnel - computed: false, optional: true, required: false
  private _tunnel?: number; 
  public get tunnel() {
    return this.getNumberAttribute('tunnel');
  }
  public set tunnel(value: number) {
    this._tunnel = value;
  }
  public resetTunnel() {
    this._tunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInput() {
    return this._tunnel;
  }

  // ve - computed: false, optional: true, required: false
  private _ve?: number; 
  public get ve() {
    return this.getNumberAttribute('ve');
  }
  public set ve(value: number) {
    this._ve = value;
  }
  public resetVe() {
    this._ve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veInput() {
    return this._ve;
  }
}

export class RouterIpv6RipDistributeListPrefixPrefixCfgAList extends cdktf.ComplexList {
  public internalValue? : RouterIpv6RipDistributeListPrefixPrefixCfgA[] | cdktf.IResolvable

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
  public get(index: number): RouterIpv6RipDistributeListPrefixPrefixCfgAOutputReference {
    return new RouterIpv6RipDistributeListPrefixPrefixCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIpv6RipDistributeListPrefixA {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip_distribute_list#uuid RouterIpv6RipDistributeList#uuid}
  */
  readonly uuid?: string;
  /**
  * prefix_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip_distribute_list#prefix_cfg RouterIpv6RipDistributeList#prefix_cfg}
  */
  readonly prefixCfg?: RouterIpv6RipDistributeListPrefixPrefixCfgA[] | cdktf.IResolvable;
}

export function routerIpv6RipDistributeListPrefixAToTerraform(struct?: RouterIpv6RipDistributeListPrefixAOutputReference | RouterIpv6RipDistributeListPrefixA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    prefix_cfg: cdktf.listMapper(routerIpv6RipDistributeListPrefixPrefixCfgAToTerraform, true)(struct!.prefixCfg),
  }
}


export function routerIpv6RipDistributeListPrefixAToHclTerraform(struct?: RouterIpv6RipDistributeListPrefixAOutputReference | RouterIpv6RipDistributeListPrefixA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_cfg: {
      value: cdktf.listMapperHcl(routerIpv6RipDistributeListPrefixPrefixCfgAToHclTerraform, true)(struct!.prefixCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIpv6RipDistributeListPrefixPrefixCfgAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIpv6RipDistributeListPrefixAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIpv6RipDistributeListPrefixA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._prefixCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixCfg = this._prefixCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIpv6RipDistributeListPrefixA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._prefixCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._prefixCfg.internalValue = value.prefixCfg;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // prefix_cfg - computed: false, optional: true, required: false
  private _prefixCfg = new RouterIpv6RipDistributeListPrefixPrefixCfgAList(this, "prefix_cfg", false);
  public get prefixCfg() {
    return this._prefixCfg;
  }
  public putPrefixCfg(value: RouterIpv6RipDistributeListPrefixPrefixCfgA[] | cdktf.IResolvable) {
    this._prefixCfg.internalValue = value;
  }
  public resetPrefixCfg() {
    this._prefixCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixCfgInput() {
    return this._prefixCfg.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip_distribute_list thunder_router_ipv6_rip_distribute_list}
*/
export class RouterIpv6RipDistributeList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_router_ipv6_rip_distribute_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterIpv6RipDistributeList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterIpv6RipDistributeList to import
  * @param importFromId The id of the existing RouterIpv6RipDistributeList that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip_distribute_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterIpv6RipDistributeList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_router_ipv6_rip_distribute_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip_distribute_list thunder_router_ipv6_rip_distribute_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterIpv6RipDistributeListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RouterIpv6RipDistributeListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_router_ipv6_rip_distribute_list',
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
    this._uuid = config.uuid;
    this._aclCfg.internalValue = config.aclCfg;
    this._prefix.internalValue = config.prefix;
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // acl_cfg - computed: false, optional: true, required: false
  private _aclCfg = new RouterIpv6RipDistributeListAclCfgAList(this, "acl_cfg", false);
  public get aclCfg() {
    return this._aclCfg;
  }
  public putAclCfg(value: RouterIpv6RipDistributeListAclCfgA[] | cdktf.IResolvable) {
    this._aclCfg.internalValue = value;
  }
  public resetAclCfg() {
    this._aclCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclCfgInput() {
    return this._aclCfg.internalValue;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix = new RouterIpv6RipDistributeListPrefixAOutputReference(this, "prefix");
  public get prefix() {
    return this._prefix;
  }
  public putPrefix(value: RouterIpv6RipDistributeListPrefixA) {
    this._prefix.internalValue = value;
  }
  public resetPrefix() {
    this._prefix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      acl_cfg: cdktf.listMapper(routerIpv6RipDistributeListAclCfgAToTerraform, true)(this._aclCfg.internalValue),
      prefix: routerIpv6RipDistributeListPrefixAToTerraform(this._prefix.internalValue),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acl_cfg: {
        value: cdktf.listMapperHcl(routerIpv6RipDistributeListAclCfgAToHclTerraform, true)(this._aclCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIpv6RipDistributeListAclCfgAList",
      },
      prefix: {
        value: routerIpv6RipDistributeListPrefixAToHclTerraform(this._prefix.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIpv6RipDistributeListPrefixAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
