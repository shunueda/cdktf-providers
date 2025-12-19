// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterIpv6RipConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'enable': Enables updating metric consistent with Cisco; 'disable': Disables updating metric consistent with Cisco;  (Enable/Disable updating metric consistent with Cisco)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#cisco_metric_behavior RouterIpv6Rip#cisco_metric_behavior}
  */
  readonly ciscoMetricBehavior?: string;
  /**
  * 'originate': originate;  (Distribute default route)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#default_information RouterIpv6Rip#default_information}
  */
  readonly defaultInformation?: string;
  /**
  * Set a metric of redistribute routes (Default metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#default_metric RouterIpv6Rip#default_metric}
  */
  readonly defaultMetric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#id RouterIpv6Rip#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set the RIPNG UDP receive buffer size (the RIPNG UDP receive buffer size value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#recv_buffer_size RouterIpv6Rip#recv_buffer_size}
  */
  readonly recvBufferSize?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#uuid RouterIpv6Rip#uuid}
  */
  readonly uuid?: string;
  /**
  * aggregate_address_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#aggregate_address_cfg RouterIpv6Rip#aggregate_address_cfg}
  */
  readonly aggregateAddressCfg?: RouterIpv6RipAggregateAddressCfg[] | cdktf.IResolvable;
  /**
  * distribute_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#distribute_list RouterIpv6Rip#distribute_list}
  */
  readonly distributeList?: RouterIpv6RipDistributeListStruct;
  /**
  * offset_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#offset_list RouterIpv6Rip#offset_list}
  */
  readonly offsetList?: RouterIpv6RipOffsetListStruct;
  /**
  * passive_interface_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#passive_interface_list RouterIpv6Rip#passive_interface_list}
  */
  readonly passiveInterfaceList?: RouterIpv6RipPassiveInterfaceListStruct[] | cdktf.IResolvable;
  /**
  * redistribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#redistribute RouterIpv6Rip#redistribute}
  */
  readonly redistribute?: RouterIpv6RipRedistribute;
  /**
  * ripng_neighbor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#ripng_neighbor RouterIpv6Rip#ripng_neighbor}
  */
  readonly ripngNeighbor?: RouterIpv6RipRipngNeighbor;
  /**
  * route_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#route_cfg RouterIpv6Rip#route_cfg}
  */
  readonly routeCfg?: RouterIpv6RipRouteCfg[] | cdktf.IResolvable;
  /**
  * route_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#route_map RouterIpv6Rip#route_map}
  */
  readonly routeMap?: RouterIpv6RipRouteMap;
  /**
  * timers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#timers RouterIpv6Rip#timers}
  */
  readonly timers?: RouterIpv6RipTimers;
}
export interface RouterIpv6RipAggregateAddressCfg {
  /**
  * Set aggregate RIP route announcement (Aggregate network)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#aggregate_address RouterIpv6Rip#aggregate_address}
  */
  readonly aggregateAddress?: string;
}

export function routerIpv6RipAggregateAddressCfgToTerraform(struct?: RouterIpv6RipAggregateAddressCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregate_address: cdktf.stringToTerraform(struct!.aggregateAddress),
  }
}


export function routerIpv6RipAggregateAddressCfgToHclTerraform(struct?: RouterIpv6RipAggregateAddressCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregate_address: {
      value: cdktf.stringToHclTerraform(struct!.aggregateAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIpv6RipAggregateAddressCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIpv6RipAggregateAddressCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregateAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregateAddress = this._aggregateAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIpv6RipAggregateAddressCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregateAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregateAddress = value.aggregateAddress;
    }
  }

  // aggregate_address - computed: false, optional: true, required: false
  private _aggregateAddress?: string; 
  public get aggregateAddress() {
    return this.getStringAttribute('aggregate_address');
  }
  public set aggregateAddress(value: string) {
    this._aggregateAddress = value;
  }
  public resetAggregateAddress() {
    this._aggregateAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateAddressInput() {
    return this._aggregateAddress;
  }
}

export class RouterIpv6RipAggregateAddressCfgList extends cdktf.ComplexList {
  public internalValue? : RouterIpv6RipAggregateAddressCfg[] | cdktf.IResolvable

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
  public get(index: number): RouterIpv6RipAggregateAddressCfgOutputReference {
    return new RouterIpv6RipAggregateAddressCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIpv6RipDistributeListAclCfg {
  /**
  * Access-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#acl RouterIpv6Rip#acl}
  */
  readonly acl?: string;
  /**
  * 'in': Filter incoming routing updates; 'out': Filter outgoing routing updates;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#acl_direction RouterIpv6Rip#acl_direction}
  */
  readonly aclDirection?: string;
  /**
  * Ethernet interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#ethernet RouterIpv6Rip#ethernet}
  */
  readonly ethernet?: number;
  /**
  * Loopback interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#loopback RouterIpv6Rip#loopback}
  */
  readonly loopback?: number;
  /**
  * Trunk interface (Trunk interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#trunk RouterIpv6Rip#trunk}
  */
  readonly trunk?: number;
  /**
  * Tunnel interface (Tunnel interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#tunnel RouterIpv6Rip#tunnel}
  */
  readonly tunnel?: number;
  /**
  * Virtual ethernet interface (Virtual ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#ve RouterIpv6Rip#ve}
  */
  readonly ve?: number;
}

export function routerIpv6RipDistributeListAclCfgToTerraform(struct?: RouterIpv6RipDistributeListAclCfg | cdktf.IResolvable): any {
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


export function routerIpv6RipDistributeListAclCfgToHclTerraform(struct?: RouterIpv6RipDistributeListAclCfg | cdktf.IResolvable): any {
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

export class RouterIpv6RipDistributeListAclCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIpv6RipDistributeListAclCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterIpv6RipDistributeListAclCfg | cdktf.IResolvable | undefined) {
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

export class RouterIpv6RipDistributeListAclCfgList extends cdktf.ComplexList {
  public internalValue? : RouterIpv6RipDistributeListAclCfg[] | cdktf.IResolvable

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
  public get(index: number): RouterIpv6RipDistributeListAclCfgOutputReference {
    return new RouterIpv6RipDistributeListAclCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIpv6RipDistributeListPrefixPrefixCfg {
  /**
  * Ethernet interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#ethernet RouterIpv6Rip#ethernet}
  */
  readonly ethernet?: number;
  /**
  * Loopback interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#loopback RouterIpv6Rip#loopback}
  */
  readonly loopback?: number;
  /**
  * Filter prefixes in routing updates (Name of a prefix list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#prefix_list RouterIpv6Rip#prefix_list}
  */
  readonly prefixList?: string;
  /**
  * 'in': Filter incoming routing updates; 'out': Filter outgoing routing updates;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#prefix_list_direction RouterIpv6Rip#prefix_list_direction}
  */
  readonly prefixListDirection?: string;
  /**
  * Trunk interface (Trunk interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#trunk RouterIpv6Rip#trunk}
  */
  readonly trunk?: number;
  /**
  * Tunnel interface (Tunnel interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#tunnel RouterIpv6Rip#tunnel}
  */
  readonly tunnel?: number;
  /**
  * Virtual ethernet interface (Virtual ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#ve RouterIpv6Rip#ve}
  */
  readonly ve?: number;
}

export function routerIpv6RipDistributeListPrefixPrefixCfgToTerraform(struct?: RouterIpv6RipDistributeListPrefixPrefixCfg | cdktf.IResolvable): any {
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


export function routerIpv6RipDistributeListPrefixPrefixCfgToHclTerraform(struct?: RouterIpv6RipDistributeListPrefixPrefixCfg | cdktf.IResolvable): any {
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

export class RouterIpv6RipDistributeListPrefixPrefixCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIpv6RipDistributeListPrefixPrefixCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterIpv6RipDistributeListPrefixPrefixCfg | cdktf.IResolvable | undefined) {
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

export class RouterIpv6RipDistributeListPrefixPrefixCfgList extends cdktf.ComplexList {
  public internalValue? : RouterIpv6RipDistributeListPrefixPrefixCfg[] | cdktf.IResolvable

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
  public get(index: number): RouterIpv6RipDistributeListPrefixPrefixCfgOutputReference {
    return new RouterIpv6RipDistributeListPrefixPrefixCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIpv6RipDistributeListPrefix {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#uuid RouterIpv6Rip#uuid}
  */
  readonly uuid?: string;
  /**
  * prefix_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#prefix_cfg RouterIpv6Rip#prefix_cfg}
  */
  readonly prefixCfg?: RouterIpv6RipDistributeListPrefixPrefixCfg[] | cdktf.IResolvable;
}

export function routerIpv6RipDistributeListPrefixToTerraform(struct?: RouterIpv6RipDistributeListPrefixOutputReference | RouterIpv6RipDistributeListPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    prefix_cfg: cdktf.listMapper(routerIpv6RipDistributeListPrefixPrefixCfgToTerraform, true)(struct!.prefixCfg),
  }
}


export function routerIpv6RipDistributeListPrefixToHclTerraform(struct?: RouterIpv6RipDistributeListPrefixOutputReference | RouterIpv6RipDistributeListPrefix): any {
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
      value: cdktf.listMapperHcl(routerIpv6RipDistributeListPrefixPrefixCfgToHclTerraform, true)(struct!.prefixCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIpv6RipDistributeListPrefixPrefixCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIpv6RipDistributeListPrefixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIpv6RipDistributeListPrefix | undefined {
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

  public set internalValue(value: RouterIpv6RipDistributeListPrefix | undefined) {
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
  private _prefixCfg = new RouterIpv6RipDistributeListPrefixPrefixCfgList(this, "prefix_cfg", false);
  public get prefixCfg() {
    return this._prefixCfg;
  }
  public putPrefixCfg(value: RouterIpv6RipDistributeListPrefixPrefixCfg[] | cdktf.IResolvable) {
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
export interface RouterIpv6RipDistributeListStruct {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#uuid RouterIpv6Rip#uuid}
  */
  readonly uuid?: string;
  /**
  * acl_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#acl_cfg RouterIpv6Rip#acl_cfg}
  */
  readonly aclCfg?: RouterIpv6RipDistributeListAclCfg[] | cdktf.IResolvable;
  /**
  * prefix block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#prefix RouterIpv6Rip#prefix}
  */
  readonly prefix?: RouterIpv6RipDistributeListPrefix;
}

export function routerIpv6RipDistributeListStructToTerraform(struct?: RouterIpv6RipDistributeListStructOutputReference | RouterIpv6RipDistributeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    acl_cfg: cdktf.listMapper(routerIpv6RipDistributeListAclCfgToTerraform, true)(struct!.aclCfg),
    prefix: routerIpv6RipDistributeListPrefixToTerraform(struct!.prefix),
  }
}


export function routerIpv6RipDistributeListStructToHclTerraform(struct?: RouterIpv6RipDistributeListStructOutputReference | RouterIpv6RipDistributeListStruct): any {
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
    acl_cfg: {
      value: cdktf.listMapperHcl(routerIpv6RipDistributeListAclCfgToHclTerraform, true)(struct!.aclCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIpv6RipDistributeListAclCfgList",
    },
    prefix: {
      value: routerIpv6RipDistributeListPrefixToHclTerraform(struct!.prefix),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIpv6RipDistributeListPrefixList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIpv6RipDistributeListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIpv6RipDistributeListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._aclCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclCfg = this._aclCfg?.internalValue;
    }
    if (this._prefix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIpv6RipDistributeListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._aclCfg.internalValue = undefined;
      this._prefix.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._aclCfg.internalValue = value.aclCfg;
      this._prefix.internalValue = value.prefix;
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

  // acl_cfg - computed: false, optional: true, required: false
  private _aclCfg = new RouterIpv6RipDistributeListAclCfgList(this, "acl_cfg", false);
  public get aclCfg() {
    return this._aclCfg;
  }
  public putAclCfg(value: RouterIpv6RipDistributeListAclCfg[] | cdktf.IResolvable) {
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
  private _prefix = new RouterIpv6RipDistributeListPrefixOutputReference(this, "prefix");
  public get prefix() {
    return this._prefix;
  }
  public putPrefix(value: RouterIpv6RipDistributeListPrefix) {
    this._prefix.internalValue = value;
  }
  public resetPrefix() {
    this._prefix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix.internalValue;
  }
}
export interface RouterIpv6RipOffsetListAclCfg {
  /**
  * Access-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#acl RouterIpv6Rip#acl}
  */
  readonly acl?: string;
  /**
  * Ethernet interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#ethernet RouterIpv6Rip#ethernet}
  */
  readonly ethernet?: number;
  /**
  * Loopback interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#loopback RouterIpv6Rip#loopback}
  */
  readonly loopback?: number;
  /**
  * Metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#metric RouterIpv6Rip#metric}
  */
  readonly metric?: number;
  /**
  * 'in': Filter incoming updates; 'out': Filter outgoing updates;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#offset_list_direction RouterIpv6Rip#offset_list_direction}
  */
  readonly offsetListDirection?: string;
  /**
  * Trunk interface (Trunk interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#trunk RouterIpv6Rip#trunk}
  */
  readonly trunk?: number;
  /**
  * Tunnel interface (Tunnel interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#tunnel RouterIpv6Rip#tunnel}
  */
  readonly tunnel?: number;
  /**
  * Virtual ethernet interface (Virtual ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#ve RouterIpv6Rip#ve}
  */
  readonly ve?: number;
}

export function routerIpv6RipOffsetListAclCfgToTerraform(struct?: RouterIpv6RipOffsetListAclCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl: cdktf.stringToTerraform(struct!.acl),
    ethernet: cdktf.numberToTerraform(struct!.ethernet),
    loopback: cdktf.numberToTerraform(struct!.loopback),
    metric: cdktf.numberToTerraform(struct!.metric),
    offset_list_direction: cdktf.stringToTerraform(struct!.offsetListDirection),
    trunk: cdktf.numberToTerraform(struct!.trunk),
    tunnel: cdktf.numberToTerraform(struct!.tunnel),
    ve: cdktf.numberToTerraform(struct!.ve),
  }
}


export function routerIpv6RipOffsetListAclCfgToHclTerraform(struct?: RouterIpv6RipOffsetListAclCfg | cdktf.IResolvable): any {
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
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    offset_list_direction: {
      value: cdktf.stringToHclTerraform(struct!.offsetListDirection),
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

export class RouterIpv6RipOffsetListAclCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIpv6RipOffsetListAclCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl = this._acl;
    }
    if (this._ethernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernet = this._ethernet;
    }
    if (this._loopback !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopback = this._loopback;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._offsetListDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.offsetListDirection = this._offsetListDirection;
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

  public set internalValue(value: RouterIpv6RipOffsetListAclCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acl = undefined;
      this._ethernet = undefined;
      this._loopback = undefined;
      this._metric = undefined;
      this._offsetListDirection = undefined;
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
      this._ethernet = value.ethernet;
      this._loopback = value.loopback;
      this._metric = value.metric;
      this._offsetListDirection = value.offsetListDirection;
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

  // offset_list_direction - computed: false, optional: true, required: false
  private _offsetListDirection?: string; 
  public get offsetListDirection() {
    return this.getStringAttribute('offset_list_direction');
  }
  public set offsetListDirection(value: string) {
    this._offsetListDirection = value;
  }
  public resetOffsetListDirection() {
    this._offsetListDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetListDirectionInput() {
    return this._offsetListDirection;
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

export class RouterIpv6RipOffsetListAclCfgList extends cdktf.ComplexList {
  public internalValue? : RouterIpv6RipOffsetListAclCfg[] | cdktf.IResolvable

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
  public get(index: number): RouterIpv6RipOffsetListAclCfgOutputReference {
    return new RouterIpv6RipOffsetListAclCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIpv6RipOffsetListStruct {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#uuid RouterIpv6Rip#uuid}
  */
  readonly uuid?: string;
  /**
  * acl_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#acl_cfg RouterIpv6Rip#acl_cfg}
  */
  readonly aclCfg?: RouterIpv6RipOffsetListAclCfg[] | cdktf.IResolvable;
}

export function routerIpv6RipOffsetListStructToTerraform(struct?: RouterIpv6RipOffsetListStructOutputReference | RouterIpv6RipOffsetListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    acl_cfg: cdktf.listMapper(routerIpv6RipOffsetListAclCfgToTerraform, true)(struct!.aclCfg),
  }
}


export function routerIpv6RipOffsetListStructToHclTerraform(struct?: RouterIpv6RipOffsetListStructOutputReference | RouterIpv6RipOffsetListStruct): any {
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
    acl_cfg: {
      value: cdktf.listMapperHcl(routerIpv6RipOffsetListAclCfgToHclTerraform, true)(struct!.aclCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIpv6RipOffsetListAclCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIpv6RipOffsetListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIpv6RipOffsetListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._aclCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclCfg = this._aclCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIpv6RipOffsetListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._aclCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._aclCfg.internalValue = value.aclCfg;
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

  // acl_cfg - computed: false, optional: true, required: false
  private _aclCfg = new RouterIpv6RipOffsetListAclCfgList(this, "acl_cfg", false);
  public get aclCfg() {
    return this._aclCfg;
  }
  public putAclCfg(value: RouterIpv6RipOffsetListAclCfg[] | cdktf.IResolvable) {
    this._aclCfg.internalValue = value;
  }
  public resetAclCfg() {
    this._aclCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclCfgInput() {
    return this._aclCfg.internalValue;
  }
}
export interface RouterIpv6RipPassiveInterfaceListStruct {
  /**
  * Ethernet interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#ethernet RouterIpv6Rip#ethernet}
  */
  readonly ethernet?: number;
  /**
  * Loopback interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#loopback RouterIpv6Rip#loopback}
  */
  readonly loopback?: number;
  /**
  * Trunk interface (Trunk interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#trunk RouterIpv6Rip#trunk}
  */
  readonly trunk?: number;
  /**
  * Tunnel interface (Tunnel interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#tunnel RouterIpv6Rip#tunnel}
  */
  readonly tunnel?: number;
  /**
  * Virtual ethernet interface (Virtual ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#ve RouterIpv6Rip#ve}
  */
  readonly ve?: number;
}

export function routerIpv6RipPassiveInterfaceListStructToTerraform(struct?: RouterIpv6RipPassiveInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet: cdktf.numberToTerraform(struct!.ethernet),
    loopback: cdktf.numberToTerraform(struct!.loopback),
    trunk: cdktf.numberToTerraform(struct!.trunk),
    tunnel: cdktf.numberToTerraform(struct!.tunnel),
    ve: cdktf.numberToTerraform(struct!.ve),
  }
}


export function routerIpv6RipPassiveInterfaceListStructToHclTerraform(struct?: RouterIpv6RipPassiveInterfaceListStruct | cdktf.IResolvable): any {
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

export class RouterIpv6RipPassiveInterfaceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIpv6RipPassiveInterfaceListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterIpv6RipPassiveInterfaceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._ethernet = value.ethernet;
      this._loopback = value.loopback;
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

export class RouterIpv6RipPassiveInterfaceListStructList extends cdktf.ComplexList {
  public internalValue? : RouterIpv6RipPassiveInterfaceListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterIpv6RipPassiveInterfaceListStructOutputReference {
    return new RouterIpv6RipPassiveInterfaceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIpv6RipRedistributeRedistListStruct {
  /**
  * Metric for redistributed routes (metric value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#metric RouterIpv6Rip#metric}
  */
  readonly metric?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#route_map RouterIpv6Rip#route_map}
  */
  readonly routeMap?: string;
  /**
  * 'bgp': Border Gateway Protocol (BGP); 'connected': Connected; 'floating-ip': Floating IP; 'ip-nat-list': IP NAT list; 'ip-nat': IP NAT; 'isis': ISO IS-IS; 'lw4o6': LW4O6 Prefix; 'nat-map': NAT MAP Prefix; 'nat64': NAT64 Prefix; 'static-nat': Static NAT; 'public-ip': Public IPv6 Prefixes; 'ospf': Open Shortest Path First (OSPF); 'static': Static routes;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#type RouterIpv6Rip#type}
  */
  readonly type?: string;
}

export function routerIpv6RipRedistributeRedistListStructToTerraform(struct?: RouterIpv6RipRedistributeRedistListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.numberToTerraform(struct!.metric),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function routerIpv6RipRedistributeRedistListStructToHclTerraform(struct?: RouterIpv6RipRedistributeRedistListStruct | cdktf.IResolvable): any {
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
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIpv6RipRedistributeRedistListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIpv6RipRedistributeRedistListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIpv6RipRedistributeRedistListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric = undefined;
      this._routeMap = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric = value.metric;
      this._routeMap = value.routeMap;
      this._type = value.type;
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

  // route_map - computed: false, optional: true, required: false
  private _routeMap?: string; 
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
  public set routeMap(value: string) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class RouterIpv6RipRedistributeRedistListStructList extends cdktf.ComplexList {
  public internalValue? : RouterIpv6RipRedistributeRedistListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterIpv6RipRedistributeRedistListStructOutputReference {
    return new RouterIpv6RipRedistributeRedistListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIpv6RipRedistributeVipListStruct {
  /**
  * Metric for redistributed routes (metric value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#vip_metric RouterIpv6Rip#vip_metric}
  */
  readonly vipMetric?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#vip_route_map RouterIpv6Rip#vip_route_map}
  */
  readonly vipRouteMap?: string;
  /**
  * 'only-flagged': Selected Virtual IP (VIP); 'only-not-flagged': Only not flagged;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#vip_type RouterIpv6Rip#vip_type}
  */
  readonly vipType?: string;
}

export function routerIpv6RipRedistributeVipListStructToTerraform(struct?: RouterIpv6RipRedistributeVipListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vip_metric: cdktf.numberToTerraform(struct!.vipMetric),
    vip_route_map: cdktf.stringToTerraform(struct!.vipRouteMap),
    vip_type: cdktf.stringToTerraform(struct!.vipType),
  }
}


export function routerIpv6RipRedistributeVipListStructToHclTerraform(struct?: RouterIpv6RipRedistributeVipListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vip_metric: {
      value: cdktf.numberToHclTerraform(struct!.vipMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vip_route_map: {
      value: cdktf.stringToHclTerraform(struct!.vipRouteMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vip_type: {
      value: cdktf.stringToHclTerraform(struct!.vipType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIpv6RipRedistributeVipListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIpv6RipRedistributeVipListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vipMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipMetric = this._vipMetric;
    }
    if (this._vipRouteMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipRouteMap = this._vipRouteMap;
    }
    if (this._vipType !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipType = this._vipType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIpv6RipRedistributeVipListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vipMetric = undefined;
      this._vipRouteMap = undefined;
      this._vipType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vipMetric = value.vipMetric;
      this._vipRouteMap = value.vipRouteMap;
      this._vipType = value.vipType;
    }
  }

  // vip_metric - computed: false, optional: true, required: false
  private _vipMetric?: number; 
  public get vipMetric() {
    return this.getNumberAttribute('vip_metric');
  }
  public set vipMetric(value: number) {
    this._vipMetric = value;
  }
  public resetVipMetric() {
    this._vipMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipMetricInput() {
    return this._vipMetric;
  }

  // vip_route_map - computed: false, optional: true, required: false
  private _vipRouteMap?: string; 
  public get vipRouteMap() {
    return this.getStringAttribute('vip_route_map');
  }
  public set vipRouteMap(value: string) {
    this._vipRouteMap = value;
  }
  public resetVipRouteMap() {
    this._vipRouteMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipRouteMapInput() {
    return this._vipRouteMap;
  }

  // vip_type - computed: false, optional: true, required: false
  private _vipType?: string; 
  public get vipType() {
    return this.getStringAttribute('vip_type');
  }
  public set vipType(value: string) {
    this._vipType = value;
  }
  public resetVipType() {
    this._vipType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipTypeInput() {
    return this._vipType;
  }
}

export class RouterIpv6RipRedistributeVipListStructList extends cdktf.ComplexList {
  public internalValue? : RouterIpv6RipRedistributeVipListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterIpv6RipRedistributeVipListStructOutputReference {
    return new RouterIpv6RipRedistributeVipListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIpv6RipRedistribute {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#uuid RouterIpv6Rip#uuid}
  */
  readonly uuid?: string;
  /**
  * redist_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#redist_list RouterIpv6Rip#redist_list}
  */
  readonly redistList?: RouterIpv6RipRedistributeRedistListStruct[] | cdktf.IResolvable;
  /**
  * vip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#vip_list RouterIpv6Rip#vip_list}
  */
  readonly vipList?: RouterIpv6RipRedistributeVipListStruct[] | cdktf.IResolvable;
}

export function routerIpv6RipRedistributeToTerraform(struct?: RouterIpv6RipRedistributeOutputReference | RouterIpv6RipRedistribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    redist_list: cdktf.listMapper(routerIpv6RipRedistributeRedistListStructToTerraform, true)(struct!.redistList),
    vip_list: cdktf.listMapper(routerIpv6RipRedistributeVipListStructToTerraform, true)(struct!.vipList),
  }
}


export function routerIpv6RipRedistributeToHclTerraform(struct?: RouterIpv6RipRedistributeOutputReference | RouterIpv6RipRedistribute): any {
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
    redist_list: {
      value: cdktf.listMapperHcl(routerIpv6RipRedistributeRedistListStructToHclTerraform, true)(struct!.redistList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIpv6RipRedistributeRedistListStructList",
    },
    vip_list: {
      value: cdktf.listMapperHcl(routerIpv6RipRedistributeVipListStructToHclTerraform, true)(struct!.vipList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIpv6RipRedistributeVipListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIpv6RipRedistributeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIpv6RipRedistribute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._redistList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redistList = this._redistList?.internalValue;
    }
    if (this._vipList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipList = this._vipList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIpv6RipRedistribute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._redistList.internalValue = undefined;
      this._vipList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._redistList.internalValue = value.redistList;
      this._vipList.internalValue = value.vipList;
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

  // redist_list - computed: false, optional: true, required: false
  private _redistList = new RouterIpv6RipRedistributeRedistListStructList(this, "redist_list", false);
  public get redistList() {
    return this._redistList;
  }
  public putRedistList(value: RouterIpv6RipRedistributeRedistListStruct[] | cdktf.IResolvable) {
    this._redistList.internalValue = value;
  }
  public resetRedistList() {
    this._redistList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistListInput() {
    return this._redistList.internalValue;
  }

  // vip_list - computed: false, optional: true, required: false
  private _vipList = new RouterIpv6RipRedistributeVipListStructList(this, "vip_list", false);
  public get vipList() {
    return this._vipList;
  }
  public putVipList(value: RouterIpv6RipRedistributeVipListStruct[] | cdktf.IResolvable) {
    this._vipList.internalValue = value;
  }
  public resetVipList() {
    this._vipList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipListInput() {
    return this._vipList.internalValue;
  }
}
export interface RouterIpv6RipRipngNeighborRipngNeighborCfg {
  /**
  * Ethernet interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#ethernet RouterIpv6Rip#ethernet}
  */
  readonly ethernet?: number;
  /**
  * Loopback interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#loopback RouterIpv6Rip#loopback}
  */
  readonly loopback?: number;
  /**
  * IPv6 link-local address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#neighbor_link_local_addr RouterIpv6Rip#neighbor_link_local_addr}
  */
  readonly neighborLinkLocalAddr?: string;
  /**
  * Trunk interface (Trunk interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#trunk RouterIpv6Rip#trunk}
  */
  readonly trunk?: number;
  /**
  * Tunnel interface (Tunnel interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#tunnel RouterIpv6Rip#tunnel}
  */
  readonly tunnel?: number;
  /**
  * Virtual ethernet interface (Virtual ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#ve RouterIpv6Rip#ve}
  */
  readonly ve?: number;
}

export function routerIpv6RipRipngNeighborRipngNeighborCfgToTerraform(struct?: RouterIpv6RipRipngNeighborRipngNeighborCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet: cdktf.numberToTerraform(struct!.ethernet),
    loopback: cdktf.numberToTerraform(struct!.loopback),
    neighbor_link_local_addr: cdktf.stringToTerraform(struct!.neighborLinkLocalAddr),
    trunk: cdktf.numberToTerraform(struct!.trunk),
    tunnel: cdktf.numberToTerraform(struct!.tunnel),
    ve: cdktf.numberToTerraform(struct!.ve),
  }
}


export function routerIpv6RipRipngNeighborRipngNeighborCfgToHclTerraform(struct?: RouterIpv6RipRipngNeighborRipngNeighborCfg | cdktf.IResolvable): any {
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
    neighbor_link_local_addr: {
      value: cdktf.stringToHclTerraform(struct!.neighborLinkLocalAddr),
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

export class RouterIpv6RipRipngNeighborRipngNeighborCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIpv6RipRipngNeighborRipngNeighborCfg | cdktf.IResolvable | undefined {
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
    if (this._neighborLinkLocalAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborLinkLocalAddr = this._neighborLinkLocalAddr;
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

  public set internalValue(value: RouterIpv6RipRipngNeighborRipngNeighborCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ethernet = undefined;
      this._loopback = undefined;
      this._neighborLinkLocalAddr = undefined;
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
      this._neighborLinkLocalAddr = value.neighborLinkLocalAddr;
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

  // neighbor_link_local_addr - computed: false, optional: true, required: false
  private _neighborLinkLocalAddr?: string; 
  public get neighborLinkLocalAddr() {
    return this.getStringAttribute('neighbor_link_local_addr');
  }
  public set neighborLinkLocalAddr(value: string) {
    this._neighborLinkLocalAddr = value;
  }
  public resetNeighborLinkLocalAddr() {
    this._neighborLinkLocalAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborLinkLocalAddrInput() {
    return this._neighborLinkLocalAddr;
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

export class RouterIpv6RipRipngNeighborRipngNeighborCfgList extends cdktf.ComplexList {
  public internalValue? : RouterIpv6RipRipngNeighborRipngNeighborCfg[] | cdktf.IResolvable

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
  public get(index: number): RouterIpv6RipRipngNeighborRipngNeighborCfgOutputReference {
    return new RouterIpv6RipRipngNeighborRipngNeighborCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIpv6RipRipngNeighbor {
  /**
  * ripng_neighbor_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#ripng_neighbor_cfg RouterIpv6Rip#ripng_neighbor_cfg}
  */
  readonly ripngNeighborCfg?: RouterIpv6RipRipngNeighborRipngNeighborCfg[] | cdktf.IResolvable;
}

export function routerIpv6RipRipngNeighborToTerraform(struct?: RouterIpv6RipRipngNeighborOutputReference | RouterIpv6RipRipngNeighbor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ripng_neighbor_cfg: cdktf.listMapper(routerIpv6RipRipngNeighborRipngNeighborCfgToTerraform, true)(struct!.ripngNeighborCfg),
  }
}


export function routerIpv6RipRipngNeighborToHclTerraform(struct?: RouterIpv6RipRipngNeighborOutputReference | RouterIpv6RipRipngNeighbor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ripng_neighbor_cfg: {
      value: cdktf.listMapperHcl(routerIpv6RipRipngNeighborRipngNeighborCfgToHclTerraform, true)(struct!.ripngNeighborCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIpv6RipRipngNeighborRipngNeighborCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIpv6RipRipngNeighborOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIpv6RipRipngNeighbor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ripngNeighborCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ripngNeighborCfg = this._ripngNeighborCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIpv6RipRipngNeighbor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ripngNeighborCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ripngNeighborCfg.internalValue = value.ripngNeighborCfg;
    }
  }

  // ripng_neighbor_cfg - computed: false, optional: true, required: false
  private _ripngNeighborCfg = new RouterIpv6RipRipngNeighborRipngNeighborCfgList(this, "ripng_neighbor_cfg", false);
  public get ripngNeighborCfg() {
    return this._ripngNeighborCfg;
  }
  public putRipngNeighborCfg(value: RouterIpv6RipRipngNeighborRipngNeighborCfg[] | cdktf.IResolvable) {
    this._ripngNeighborCfg.internalValue = value;
  }
  public resetRipngNeighborCfg() {
    this._ripngNeighborCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripngNeighborCfgInput() {
    return this._ripngNeighborCfg.internalValue;
  }
}
export interface RouterIpv6RipRouteCfg {
  /**
  * Static route advertisement (debugging purpose) (IP prefix)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#route RouterIpv6Rip#route}
  */
  readonly route?: string;
}

export function routerIpv6RipRouteCfgToTerraform(struct?: RouterIpv6RipRouteCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route: cdktf.stringToTerraform(struct!.route),
  }
}


export function routerIpv6RipRouteCfgToHclTerraform(struct?: RouterIpv6RipRouteCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    route: {
      value: cdktf.stringToHclTerraform(struct!.route),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIpv6RipRouteCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIpv6RipRouteCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._route !== undefined) {
      hasAnyValues = true;
      internalValueResult.route = this._route;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIpv6RipRouteCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._route = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._route = value.route;
    }
  }

  // route - computed: false, optional: true, required: false
  private _route?: string; 
  public get route() {
    return this.getStringAttribute('route');
  }
  public set route(value: string) {
    this._route = value;
  }
  public resetRoute() {
    this._route = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route;
  }
}

export class RouterIpv6RipRouteCfgList extends cdktf.ComplexList {
  public internalValue? : RouterIpv6RipRouteCfg[] | cdktf.IResolvable

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
  public get(index: number): RouterIpv6RipRouteCfgOutputReference {
    return new RouterIpv6RipRouteCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIpv6RipRouteMapMapCfg {
  /**
  * Ethernet interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#ethernet RouterIpv6Rip#ethernet}
  */
  readonly ethernet?: number;
  /**
  * Loopback interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#loopback RouterIpv6Rip#loopback}
  */
  readonly loopback?: number;
  /**
  * Route map name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#map RouterIpv6Rip#map}
  */
  readonly map?: string;
  /**
  * 'in': Route map set for input filtering; 'out': Route map set for output filtering;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#route_map_direction RouterIpv6Rip#route_map_direction}
  */
  readonly routeMapDirection?: string;
  /**
  * Trunk interface (Trunk interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#trunk RouterIpv6Rip#trunk}
  */
  readonly trunk?: number;
  /**
  * Tunnel interface (Tunnel interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#tunnel RouterIpv6Rip#tunnel}
  */
  readonly tunnel?: number;
  /**
  * Virtual ethernet interface (Virtual ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#ve RouterIpv6Rip#ve}
  */
  readonly ve?: number;
}

export function routerIpv6RipRouteMapMapCfgToTerraform(struct?: RouterIpv6RipRouteMapMapCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet: cdktf.numberToTerraform(struct!.ethernet),
    loopback: cdktf.numberToTerraform(struct!.loopback),
    map: cdktf.stringToTerraform(struct!.map),
    route_map_direction: cdktf.stringToTerraform(struct!.routeMapDirection),
    trunk: cdktf.numberToTerraform(struct!.trunk),
    tunnel: cdktf.numberToTerraform(struct!.tunnel),
    ve: cdktf.numberToTerraform(struct!.ve),
  }
}


export function routerIpv6RipRouteMapMapCfgToHclTerraform(struct?: RouterIpv6RipRouteMapMapCfg | cdktf.IResolvable): any {
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
    map: {
      value: cdktf.stringToHclTerraform(struct!.map),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_map_direction: {
      value: cdktf.stringToHclTerraform(struct!.routeMapDirection),
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

export class RouterIpv6RipRouteMapMapCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIpv6RipRouteMapMapCfg | cdktf.IResolvable | undefined {
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
    if (this._map !== undefined) {
      hasAnyValues = true;
      internalValueResult.map = this._map;
    }
    if (this._routeMapDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapDirection = this._routeMapDirection;
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

  public set internalValue(value: RouterIpv6RipRouteMapMapCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ethernet = undefined;
      this._loopback = undefined;
      this._map = undefined;
      this._routeMapDirection = undefined;
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
      this._map = value.map;
      this._routeMapDirection = value.routeMapDirection;
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

  // map - computed: false, optional: true, required: false
  private _map?: string; 
  public get map() {
    return this.getStringAttribute('map');
  }
  public set map(value: string) {
    this._map = value;
  }
  public resetMap() {
    this._map = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapInput() {
    return this._map;
  }

  // route_map_direction - computed: false, optional: true, required: false
  private _routeMapDirection?: string; 
  public get routeMapDirection() {
    return this.getStringAttribute('route_map_direction');
  }
  public set routeMapDirection(value: string) {
    this._routeMapDirection = value;
  }
  public resetRouteMapDirection() {
    this._routeMapDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapDirectionInput() {
    return this._routeMapDirection;
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

export class RouterIpv6RipRouteMapMapCfgList extends cdktf.ComplexList {
  public internalValue? : RouterIpv6RipRouteMapMapCfg[] | cdktf.IResolvable

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
  public get(index: number): RouterIpv6RipRouteMapMapCfgOutputReference {
    return new RouterIpv6RipRouteMapMapCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIpv6RipRouteMap {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#uuid RouterIpv6Rip#uuid}
  */
  readonly uuid?: string;
  /**
  * map_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#map_cfg RouterIpv6Rip#map_cfg}
  */
  readonly mapCfg?: RouterIpv6RipRouteMapMapCfg[] | cdktf.IResolvable;
}

export function routerIpv6RipRouteMapToTerraform(struct?: RouterIpv6RipRouteMapOutputReference | RouterIpv6RipRouteMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    map_cfg: cdktf.listMapper(routerIpv6RipRouteMapMapCfgToTerraform, true)(struct!.mapCfg),
  }
}


export function routerIpv6RipRouteMapToHclTerraform(struct?: RouterIpv6RipRouteMapOutputReference | RouterIpv6RipRouteMap): any {
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
    map_cfg: {
      value: cdktf.listMapperHcl(routerIpv6RipRouteMapMapCfgToHclTerraform, true)(struct!.mapCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIpv6RipRouteMapMapCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIpv6RipRouteMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIpv6RipRouteMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._mapCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapCfg = this._mapCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIpv6RipRouteMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._mapCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._mapCfg.internalValue = value.mapCfg;
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

  // map_cfg - computed: false, optional: true, required: false
  private _mapCfg = new RouterIpv6RipRouteMapMapCfgList(this, "map_cfg", false);
  public get mapCfg() {
    return this._mapCfg;
  }
  public putMapCfg(value: RouterIpv6RipRouteMapMapCfg[] | cdktf.IResolvable) {
    this._mapCfg.internalValue = value;
  }
  public resetMapCfg() {
    this._mapCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapCfgInput() {
    return this._mapCfg.internalValue;
  }
}
export interface RouterIpv6RipTimersTimersCfg {
  /**
  * Basic routing protocol update timers (Routing table update timer value in second. Default is 30)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#basic RouterIpv6Rip#basic}
  */
  readonly basic?: number;
  /**
  * Routing information timeout timer. Default is 180
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#val_2 RouterIpv6Rip#val_2}
  */
  readonly val2?: number;
  /**
  * Garbage collection timer. Default is 120
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#val_3 RouterIpv6Rip#val_3}
  */
  readonly val3?: number;
}

export function routerIpv6RipTimersTimersCfgToTerraform(struct?: RouterIpv6RipTimersTimersCfgOutputReference | RouterIpv6RipTimersTimersCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic: cdktf.numberToTerraform(struct!.basic),
    val_2: cdktf.numberToTerraform(struct!.val2),
    val_3: cdktf.numberToTerraform(struct!.val3),
  }
}


export function routerIpv6RipTimersTimersCfgToHclTerraform(struct?: RouterIpv6RipTimersTimersCfgOutputReference | RouterIpv6RipTimersTimersCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic: {
      value: cdktf.numberToHclTerraform(struct!.basic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    val_2: {
      value: cdktf.numberToHclTerraform(struct!.val2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    val_3: {
      value: cdktf.numberToHclTerraform(struct!.val3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIpv6RipTimersTimersCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIpv6RipTimersTimersCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basic !== undefined) {
      hasAnyValues = true;
      internalValueResult.basic = this._basic;
    }
    if (this._val2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.val2 = this._val2;
    }
    if (this._val3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.val3 = this._val3;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIpv6RipTimersTimersCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._basic = undefined;
      this._val2 = undefined;
      this._val3 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._basic = value.basic;
      this._val2 = value.val2;
      this._val3 = value.val3;
    }
  }

  // basic - computed: false, optional: true, required: false
  private _basic?: number; 
  public get basic() {
    return this.getNumberAttribute('basic');
  }
  public set basic(value: number) {
    this._basic = value;
  }
  public resetBasic() {
    this._basic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicInput() {
    return this._basic;
  }

  // val_2 - computed: false, optional: true, required: false
  private _val2?: number; 
  public get val2() {
    return this.getNumberAttribute('val_2');
  }
  public set val2(value: number) {
    this._val2 = value;
  }
  public resetVal2() {
    this._val2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get val2Input() {
    return this._val2;
  }

  // val_3 - computed: false, optional: true, required: false
  private _val3?: number; 
  public get val3() {
    return this.getNumberAttribute('val_3');
  }
  public set val3(value: number) {
    this._val3 = value;
  }
  public resetVal3() {
    this._val3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get val3Input() {
    return this._val3;
  }
}
export interface RouterIpv6RipTimers {
  /**
  * timers_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#timers_cfg RouterIpv6Rip#timers_cfg}
  */
  readonly timersCfg?: RouterIpv6RipTimersTimersCfg;
}

export function routerIpv6RipTimersToTerraform(struct?: RouterIpv6RipTimersOutputReference | RouterIpv6RipTimers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timers_cfg: routerIpv6RipTimersTimersCfgToTerraform(struct!.timersCfg),
  }
}


export function routerIpv6RipTimersToHclTerraform(struct?: RouterIpv6RipTimersOutputReference | RouterIpv6RipTimers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timers_cfg: {
      value: routerIpv6RipTimersTimersCfgToHclTerraform(struct!.timersCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIpv6RipTimersTimersCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIpv6RipTimersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterIpv6RipTimers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timersCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timersCfg = this._timersCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIpv6RipTimers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timersCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timersCfg.internalValue = value.timersCfg;
    }
  }

  // timers_cfg - computed: false, optional: true, required: false
  private _timersCfg = new RouterIpv6RipTimersTimersCfgOutputReference(this, "timers_cfg");
  public get timersCfg() {
    return this._timersCfg;
  }
  public putTimersCfg(value: RouterIpv6RipTimersTimersCfg) {
    this._timersCfg.internalValue = value;
  }
  public resetTimersCfg() {
    this._timersCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersCfgInput() {
    return this._timersCfg.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip thunder_router_ipv6_rip}
*/
export class RouterIpv6Rip extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_router_ipv6_rip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterIpv6Rip resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterIpv6Rip to import
  * @param importFromId The id of the existing RouterIpv6Rip that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterIpv6Rip to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_router_ipv6_rip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip thunder_router_ipv6_rip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterIpv6RipConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RouterIpv6RipConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_router_ipv6_rip',
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
    this._ciscoMetricBehavior = config.ciscoMetricBehavior;
    this._defaultInformation = config.defaultInformation;
    this._defaultMetric = config.defaultMetric;
    this._id = config.id;
    this._recvBufferSize = config.recvBufferSize;
    this._uuid = config.uuid;
    this._aggregateAddressCfg.internalValue = config.aggregateAddressCfg;
    this._distributeList.internalValue = config.distributeList;
    this._offsetList.internalValue = config.offsetList;
    this._passiveInterfaceList.internalValue = config.passiveInterfaceList;
    this._redistribute.internalValue = config.redistribute;
    this._ripngNeighbor.internalValue = config.ripngNeighbor;
    this._routeCfg.internalValue = config.routeCfg;
    this._routeMap.internalValue = config.routeMap;
    this._timers.internalValue = config.timers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cisco_metric_behavior - computed: false, optional: true, required: false
  private _ciscoMetricBehavior?: string; 
  public get ciscoMetricBehavior() {
    return this.getStringAttribute('cisco_metric_behavior');
  }
  public set ciscoMetricBehavior(value: string) {
    this._ciscoMetricBehavior = value;
  }
  public resetCiscoMetricBehavior() {
    this._ciscoMetricBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciscoMetricBehaviorInput() {
    return this._ciscoMetricBehavior;
  }

  // default_information - computed: false, optional: true, required: false
  private _defaultInformation?: string; 
  public get defaultInformation() {
    return this.getStringAttribute('default_information');
  }
  public set defaultInformation(value: string) {
    this._defaultInformation = value;
  }
  public resetDefaultInformation() {
    this._defaultInformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationInput() {
    return this._defaultInformation;
  }

  // default_metric - computed: false, optional: true, required: false
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

  // aggregate_address_cfg - computed: false, optional: true, required: false
  private _aggregateAddressCfg = new RouterIpv6RipAggregateAddressCfgList(this, "aggregate_address_cfg", false);
  public get aggregateAddressCfg() {
    return this._aggregateAddressCfg;
  }
  public putAggregateAddressCfg(value: RouterIpv6RipAggregateAddressCfg[] | cdktf.IResolvable) {
    this._aggregateAddressCfg.internalValue = value;
  }
  public resetAggregateAddressCfg() {
    this._aggregateAddressCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateAddressCfgInput() {
    return this._aggregateAddressCfg.internalValue;
  }

  // distribute_list - computed: false, optional: true, required: false
  private _distributeList = new RouterIpv6RipDistributeListStructOutputReference(this, "distribute_list");
  public get distributeList() {
    return this._distributeList;
  }
  public putDistributeList(value: RouterIpv6RipDistributeListStruct) {
    this._distributeList.internalValue = value;
  }
  public resetDistributeList() {
    this._distributeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListInput() {
    return this._distributeList.internalValue;
  }

  // offset_list - computed: false, optional: true, required: false
  private _offsetList = new RouterIpv6RipOffsetListStructOutputReference(this, "offset_list");
  public get offsetList() {
    return this._offsetList;
  }
  public putOffsetList(value: RouterIpv6RipOffsetListStruct) {
    this._offsetList.internalValue = value;
  }
  public resetOffsetList() {
    this._offsetList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetListInput() {
    return this._offsetList.internalValue;
  }

  // passive_interface_list - computed: false, optional: true, required: false
  private _passiveInterfaceList = new RouterIpv6RipPassiveInterfaceListStructList(this, "passive_interface_list", false);
  public get passiveInterfaceList() {
    return this._passiveInterfaceList;
  }
  public putPassiveInterfaceList(value: RouterIpv6RipPassiveInterfaceListStruct[] | cdktf.IResolvable) {
    this._passiveInterfaceList.internalValue = value;
  }
  public resetPassiveInterfaceList() {
    this._passiveInterfaceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInterfaceListInput() {
    return this._passiveInterfaceList.internalValue;
  }

  // redistribute - computed: false, optional: true, required: false
  private _redistribute = new RouterIpv6RipRedistributeOutputReference(this, "redistribute");
  public get redistribute() {
    return this._redistribute;
  }
  public putRedistribute(value: RouterIpv6RipRedistribute) {
    this._redistribute.internalValue = value;
  }
  public resetRedistribute() {
    this._redistribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeInput() {
    return this._redistribute.internalValue;
  }

  // ripng_neighbor - computed: false, optional: true, required: false
  private _ripngNeighbor = new RouterIpv6RipRipngNeighborOutputReference(this, "ripng_neighbor");
  public get ripngNeighbor() {
    return this._ripngNeighbor;
  }
  public putRipngNeighbor(value: RouterIpv6RipRipngNeighbor) {
    this._ripngNeighbor.internalValue = value;
  }
  public resetRipngNeighbor() {
    this._ripngNeighbor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripngNeighborInput() {
    return this._ripngNeighbor.internalValue;
  }

  // route_cfg - computed: false, optional: true, required: false
  private _routeCfg = new RouterIpv6RipRouteCfgList(this, "route_cfg", false);
  public get routeCfg() {
    return this._routeCfg;
  }
  public putRouteCfg(value: RouterIpv6RipRouteCfg[] | cdktf.IResolvable) {
    this._routeCfg.internalValue = value;
  }
  public resetRouteCfg() {
    this._routeCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeCfgInput() {
    return this._routeCfg.internalValue;
  }

  // route_map - computed: false, optional: true, required: false
  private _routeMap = new RouterIpv6RipRouteMapOutputReference(this, "route_map");
  public get routeMap() {
    return this._routeMap;
  }
  public putRouteMap(value: RouterIpv6RipRouteMap) {
    this._routeMap.internalValue = value;
  }
  public resetRouteMap() {
    this._routeMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap.internalValue;
  }

  // timers - computed: false, optional: true, required: false
  private _timers = new RouterIpv6RipTimersOutputReference(this, "timers");
  public get timers() {
    return this._timers;
  }
  public putTimers(value: RouterIpv6RipTimers) {
    this._timers.internalValue = value;
  }
  public resetTimers() {
    this._timers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersInput() {
    return this._timers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cisco_metric_behavior: cdktf.stringToTerraform(this._ciscoMetricBehavior),
      default_information: cdktf.stringToTerraform(this._defaultInformation),
      default_metric: cdktf.numberToTerraform(this._defaultMetric),
      id: cdktf.stringToTerraform(this._id),
      recv_buffer_size: cdktf.numberToTerraform(this._recvBufferSize),
      uuid: cdktf.stringToTerraform(this._uuid),
      aggregate_address_cfg: cdktf.listMapper(routerIpv6RipAggregateAddressCfgToTerraform, true)(this._aggregateAddressCfg.internalValue),
      distribute_list: routerIpv6RipDistributeListStructToTerraform(this._distributeList.internalValue),
      offset_list: routerIpv6RipOffsetListStructToTerraform(this._offsetList.internalValue),
      passive_interface_list: cdktf.listMapper(routerIpv6RipPassiveInterfaceListStructToTerraform, true)(this._passiveInterfaceList.internalValue),
      redistribute: routerIpv6RipRedistributeToTerraform(this._redistribute.internalValue),
      ripng_neighbor: routerIpv6RipRipngNeighborToTerraform(this._ripngNeighbor.internalValue),
      route_cfg: cdktf.listMapper(routerIpv6RipRouteCfgToTerraform, true)(this._routeCfg.internalValue),
      route_map: routerIpv6RipRouteMapToTerraform(this._routeMap.internalValue),
      timers: routerIpv6RipTimersToTerraform(this._timers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cisco_metric_behavior: {
        value: cdktf.stringToHclTerraform(this._ciscoMetricBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_information: {
        value: cdktf.stringToHclTerraform(this._defaultInformation),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recv_buffer_size: {
        value: cdktf.numberToHclTerraform(this._recvBufferSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aggregate_address_cfg: {
        value: cdktf.listMapperHcl(routerIpv6RipAggregateAddressCfgToHclTerraform, true)(this._aggregateAddressCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIpv6RipAggregateAddressCfgList",
      },
      distribute_list: {
        value: routerIpv6RipDistributeListStructToHclTerraform(this._distributeList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIpv6RipDistributeListStructList",
      },
      offset_list: {
        value: routerIpv6RipOffsetListStructToHclTerraform(this._offsetList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIpv6RipOffsetListStructList",
      },
      passive_interface_list: {
        value: cdktf.listMapperHcl(routerIpv6RipPassiveInterfaceListStructToHclTerraform, true)(this._passiveInterfaceList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIpv6RipPassiveInterfaceListStructList",
      },
      redistribute: {
        value: routerIpv6RipRedistributeToHclTerraform(this._redistribute.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIpv6RipRedistributeList",
      },
      ripng_neighbor: {
        value: routerIpv6RipRipngNeighborToHclTerraform(this._ripngNeighbor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIpv6RipRipngNeighborList",
      },
      route_cfg: {
        value: cdktf.listMapperHcl(routerIpv6RipRouteCfgToHclTerraform, true)(this._routeCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIpv6RipRouteCfgList",
      },
      route_map: {
        value: routerIpv6RipRouteMapToHclTerraform(this._routeMap.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIpv6RipRouteMapList",
      },
      timers: {
        value: routerIpv6RipTimersToHclTerraform(this._timers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIpv6RipTimersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
