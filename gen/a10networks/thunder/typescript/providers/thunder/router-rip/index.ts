// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterRipConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'enable': Enables updating metric consistent with Cisco; 'disable': Disables updating metric consistent with Cisco;  (Enable/Disable updating metric consistent with Cisco)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#cisco_metric_behavior RouterRip#cisco_metric_behavior}
  */
  readonly ciscoMetricBehavior?: string;
  /**
  * 'originate': originate;  (Distribute default route)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#default_information RouterRip#default_information}
  */
  readonly defaultInformation?: string;
  /**
  * Set a metric of redistribute routes (Default metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#default_metric RouterRip#default_metric}
  */
  readonly defaultMetric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#id RouterRip#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set the RIP UDP receive buffer size (the RIP UDP receive buffer size value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#recv_buffer_size RouterRip#recv_buffer_size}
  */
  readonly recvBufferSize?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#uuid RouterRip#uuid}
  */
  readonly uuid?: string;
  /**
  * Set routing protocol version (RIP version)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#version RouterRip#version}
  */
  readonly version?: number;
  /**
  * distance_list_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#distance_list_cfg RouterRip#distance_list_cfg}
  */
  readonly distanceListCfg?: RouterRipDistanceListCfg[] | cdktf.IResolvable;
  /**
  * distribute_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#distribute_list RouterRip#distribute_list}
  */
  readonly distributeList?: RouterRipDistributeListStruct;
  /**
  * neighbor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#neighbor RouterRip#neighbor}
  */
  readonly neighbor?: RouterRipNeighbor[] | cdktf.IResolvable;
  /**
  * network_addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#network_addresses RouterRip#network_addresses}
  */
  readonly networkAddresses?: RouterRipNetworkAddresses[] | cdktf.IResolvable;
  /**
  * network_interface_list_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#network_interface_list_cfg RouterRip#network_interface_list_cfg}
  */
  readonly networkInterfaceListCfg?: RouterRipNetworkInterfaceListCfg[] | cdktf.IResolvable;
  /**
  * offset_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#offset_list RouterRip#offset_list}
  */
  readonly offsetList?: RouterRipOffsetListStruct;
  /**
  * passive_interface_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#passive_interface_list RouterRip#passive_interface_list}
  */
  readonly passiveInterfaceList?: RouterRipPassiveInterfaceListStruct[] | cdktf.IResolvable;
  /**
  * redistribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#redistribute RouterRip#redistribute}
  */
  readonly redistribute?: RouterRipRedistribute;
  /**
  * rip_maximum_prefix_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#rip_maximum_prefix_cfg RouterRip#rip_maximum_prefix_cfg}
  */
  readonly ripMaximumPrefixCfg?: RouterRipRipMaximumPrefixCfg;
  /**
  * route_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#route_cfg RouterRip#route_cfg}
  */
  readonly routeCfg?: RouterRipRouteCfg[] | cdktf.IResolvable;
  /**
  * timers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#timers RouterRip#timers}
  */
  readonly timers?: RouterRipTimers;
}
export interface RouterRipDistanceListCfg {
  /**
  * Administrative distance (Distance value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#distance RouterRip#distance}
  */
  readonly distance?: number;
  /**
  * Access list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#distance_acl RouterRip#distance_acl}
  */
  readonly distanceAcl?: string;
  /**
  * IP source prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#distance_ipv4_mask RouterRip#distance_ipv4_mask}
  */
  readonly distanceIpv4Mask?: string;
}

export function routerRipDistanceListCfgToTerraform(struct?: RouterRipDistanceListCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distance: cdktf.numberToTerraform(struct!.distance),
    distance_acl: cdktf.stringToTerraform(struct!.distanceAcl),
    distance_ipv4_mask: cdktf.stringToTerraform(struct!.distanceIpv4Mask),
  }
}


export function routerRipDistanceListCfgToHclTerraform(struct?: RouterRipDistanceListCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distance: {
      value: cdktf.numberToHclTerraform(struct!.distance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    distance_acl: {
      value: cdktf.stringToHclTerraform(struct!.distanceAcl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distance_ipv4_mask: {
      value: cdktf.stringToHclTerraform(struct!.distanceIpv4Mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterRipDistanceListCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterRipDistanceListCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distance !== undefined) {
      hasAnyValues = true;
      internalValueResult.distance = this._distance;
    }
    if (this._distanceAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.distanceAcl = this._distanceAcl;
    }
    if (this._distanceIpv4Mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.distanceIpv4Mask = this._distanceIpv4Mask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterRipDistanceListCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distance = undefined;
      this._distanceAcl = undefined;
      this._distanceIpv4Mask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distance = value.distance;
      this._distanceAcl = value.distanceAcl;
      this._distanceIpv4Mask = value.distanceIpv4Mask;
    }
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

  // distance_acl - computed: false, optional: true, required: false
  private _distanceAcl?: string; 
  public get distanceAcl() {
    return this.getStringAttribute('distance_acl');
  }
  public set distanceAcl(value: string) {
    this._distanceAcl = value;
  }
  public resetDistanceAcl() {
    this._distanceAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceAclInput() {
    return this._distanceAcl;
  }

  // distance_ipv4_mask - computed: false, optional: true, required: false
  private _distanceIpv4Mask?: string; 
  public get distanceIpv4Mask() {
    return this.getStringAttribute('distance_ipv4_mask');
  }
  public set distanceIpv4Mask(value: string) {
    this._distanceIpv4Mask = value;
  }
  public resetDistanceIpv4Mask() {
    this._distanceIpv4Mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceIpv4MaskInput() {
    return this._distanceIpv4Mask;
  }
}

export class RouterRipDistanceListCfgList extends cdktf.ComplexList {
  public internalValue? : RouterRipDistanceListCfg[] | cdktf.IResolvable

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
  public get(index: number): RouterRipDistanceListCfgOutputReference {
    return new RouterRipDistanceListCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterRipDistributeListAclCfg {
  /**
  * Access-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#acl RouterRip#acl}
  */
  readonly acl?: string;
  /**
  * 'in': Filter incoming routing updates; 'out': Filter outgoing routing updates;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#acl_direction RouterRip#acl_direction}
  */
  readonly aclDirection?: string;
  /**
  * Ethernet interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#ethernet RouterRip#ethernet}
  */
  readonly ethernet?: number;
  /**
  * Loopback interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#loopback RouterRip#loopback}
  */
  readonly loopback?: number;
  /**
  * Trunk interface (Trunk interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#trunk RouterRip#trunk}
  */
  readonly trunk?: number;
  /**
  * Tunnel interface (Tunnel interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#tunnel RouterRip#tunnel}
  */
  readonly tunnel?: number;
  /**
  * Virtual ethernet interface (Virtual ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#ve RouterRip#ve}
  */
  readonly ve?: number;
}

export function routerRipDistributeListAclCfgToTerraform(struct?: RouterRipDistributeListAclCfg | cdktf.IResolvable): any {
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


export function routerRipDistributeListAclCfgToHclTerraform(struct?: RouterRipDistributeListAclCfg | cdktf.IResolvable): any {
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

export class RouterRipDistributeListAclCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterRipDistributeListAclCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterRipDistributeListAclCfg | cdktf.IResolvable | undefined) {
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

export class RouterRipDistributeListAclCfgList extends cdktf.ComplexList {
  public internalValue? : RouterRipDistributeListAclCfg[] | cdktf.IResolvable

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
  public get(index: number): RouterRipDistributeListAclCfgOutputReference {
    return new RouterRipDistributeListAclCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterRipDistributeListPrefixPrefixCfg {
  /**
  * Ethernet interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#ethernet RouterRip#ethernet}
  */
  readonly ethernet?: number;
  /**
  * Loopback interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#loopback RouterRip#loopback}
  */
  readonly loopback?: number;
  /**
  * Filter prefixes in routing updates (Name of a prefix list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#prefix_list RouterRip#prefix_list}
  */
  readonly prefixList?: string;
  /**
  * 'in': Filter incoming routing updates; 'out': Filter outgoing routing updates;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#prefix_list_direction RouterRip#prefix_list_direction}
  */
  readonly prefixListDirection?: string;
  /**
  * Trunk interface (Trunk interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#trunk RouterRip#trunk}
  */
  readonly trunk?: number;
  /**
  * Tunnel interface (Tunnel interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#tunnel RouterRip#tunnel}
  */
  readonly tunnel?: number;
  /**
  * Virtual ethernet interface (Virtual ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#ve RouterRip#ve}
  */
  readonly ve?: number;
}

export function routerRipDistributeListPrefixPrefixCfgToTerraform(struct?: RouterRipDistributeListPrefixPrefixCfg | cdktf.IResolvable): any {
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


export function routerRipDistributeListPrefixPrefixCfgToHclTerraform(struct?: RouterRipDistributeListPrefixPrefixCfg | cdktf.IResolvable): any {
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

export class RouterRipDistributeListPrefixPrefixCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterRipDistributeListPrefixPrefixCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterRipDistributeListPrefixPrefixCfg | cdktf.IResolvable | undefined) {
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

export class RouterRipDistributeListPrefixPrefixCfgList extends cdktf.ComplexList {
  public internalValue? : RouterRipDistributeListPrefixPrefixCfg[] | cdktf.IResolvable

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
  public get(index: number): RouterRipDistributeListPrefixPrefixCfgOutputReference {
    return new RouterRipDistributeListPrefixPrefixCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterRipDistributeListPrefix {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#uuid RouterRip#uuid}
  */
  readonly uuid?: string;
  /**
  * prefix_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#prefix_cfg RouterRip#prefix_cfg}
  */
  readonly prefixCfg?: RouterRipDistributeListPrefixPrefixCfg[] | cdktf.IResolvable;
}

export function routerRipDistributeListPrefixToTerraform(struct?: RouterRipDistributeListPrefixOutputReference | RouterRipDistributeListPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    prefix_cfg: cdktf.listMapper(routerRipDistributeListPrefixPrefixCfgToTerraform, true)(struct!.prefixCfg),
  }
}


export function routerRipDistributeListPrefixToHclTerraform(struct?: RouterRipDistributeListPrefixOutputReference | RouterRipDistributeListPrefix): any {
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
      value: cdktf.listMapperHcl(routerRipDistributeListPrefixPrefixCfgToHclTerraform, true)(struct!.prefixCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterRipDistributeListPrefixPrefixCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterRipDistributeListPrefixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterRipDistributeListPrefix | undefined {
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

  public set internalValue(value: RouterRipDistributeListPrefix | undefined) {
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
  private _prefixCfg = new RouterRipDistributeListPrefixPrefixCfgList(this, "prefix_cfg", false);
  public get prefixCfg() {
    return this._prefixCfg;
  }
  public putPrefixCfg(value: RouterRipDistributeListPrefixPrefixCfg[] | cdktf.IResolvable) {
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
export interface RouterRipDistributeListStruct {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#uuid RouterRip#uuid}
  */
  readonly uuid?: string;
  /**
  * acl_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#acl_cfg RouterRip#acl_cfg}
  */
  readonly aclCfg?: RouterRipDistributeListAclCfg[] | cdktf.IResolvable;
  /**
  * prefix block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#prefix RouterRip#prefix}
  */
  readonly prefix?: RouterRipDistributeListPrefix;
}

export function routerRipDistributeListStructToTerraform(struct?: RouterRipDistributeListStructOutputReference | RouterRipDistributeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    acl_cfg: cdktf.listMapper(routerRipDistributeListAclCfgToTerraform, true)(struct!.aclCfg),
    prefix: routerRipDistributeListPrefixToTerraform(struct!.prefix),
  }
}


export function routerRipDistributeListStructToHclTerraform(struct?: RouterRipDistributeListStructOutputReference | RouterRipDistributeListStruct): any {
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
      value: cdktf.listMapperHcl(routerRipDistributeListAclCfgToHclTerraform, true)(struct!.aclCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterRipDistributeListAclCfgList",
    },
    prefix: {
      value: routerRipDistributeListPrefixToHclTerraform(struct!.prefix),
      isBlock: true,
      type: "list",
      storageClassType: "RouterRipDistributeListPrefixList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterRipDistributeListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterRipDistributeListStruct | undefined {
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

  public set internalValue(value: RouterRipDistributeListStruct | undefined) {
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
  private _aclCfg = new RouterRipDistributeListAclCfgList(this, "acl_cfg", false);
  public get aclCfg() {
    return this._aclCfg;
  }
  public putAclCfg(value: RouterRipDistributeListAclCfg[] | cdktf.IResolvable) {
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
  private _prefix = new RouterRipDistributeListPrefixOutputReference(this, "prefix");
  public get prefix() {
    return this._prefix;
  }
  public putPrefix(value: RouterRipDistributeListPrefix) {
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
export interface RouterRipNeighbor {
  /**
  * Neighbor address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#value RouterRip#value}
  */
  readonly value?: string;
}

export function routerRipNeighborToTerraform(struct?: RouterRipNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function routerRipNeighborToHclTerraform(struct?: RouterRipNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
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
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterRipNeighbor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
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
export interface RouterRipNetworkAddresses {
  /**
  * IP prefix network/length, e.g., 35.0.0.0/8
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#network_ipv4_mask RouterRip#network_ipv4_mask}
  */
  readonly networkIpv4Mask?: string;
}

export function routerRipNetworkAddressesToTerraform(struct?: RouterRipNetworkAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_ipv4_mask: cdktf.stringToTerraform(struct!.networkIpv4Mask),
  }
}


export function routerRipNetworkAddressesToHclTerraform(struct?: RouterRipNetworkAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_ipv4_mask: {
      value: cdktf.stringToHclTerraform(struct!.networkIpv4Mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterRipNetworkAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterRipNetworkAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkIpv4Mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkIpv4Mask = this._networkIpv4Mask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterRipNetworkAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkIpv4Mask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkIpv4Mask = value.networkIpv4Mask;
    }
  }

  // network_ipv4_mask - computed: false, optional: true, required: false
  private _networkIpv4Mask?: string; 
  public get networkIpv4Mask() {
    return this.getStringAttribute('network_ipv4_mask');
  }
  public set networkIpv4Mask(value: string) {
    this._networkIpv4Mask = value;
  }
  public resetNetworkIpv4Mask() {
    this._networkIpv4Mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIpv4MaskInput() {
    return this._networkIpv4Mask;
  }
}

export class RouterRipNetworkAddressesList extends cdktf.ComplexList {
  public internalValue? : RouterRipNetworkAddresses[] | cdktf.IResolvable

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
  public get(index: number): RouterRipNetworkAddressesOutputReference {
    return new RouterRipNetworkAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterRipNetworkInterfaceListCfg {
  /**
  * Ethernet interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#ethernet RouterRip#ethernet}
  */
  readonly ethernet?: number;
  /**
  * Loopback interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#loopback RouterRip#loopback}
  */
  readonly loopback?: number;
  /**
  * Trunk interface (Trunk interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#trunk RouterRip#trunk}
  */
  readonly trunk?: number;
  /**
  * Tunnel interface (Tunnel interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#tunnel RouterRip#tunnel}
  */
  readonly tunnel?: number;
  /**
  * Virtual ethernet interface (Virtual ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#ve RouterRip#ve}
  */
  readonly ve?: number;
}

export function routerRipNetworkInterfaceListCfgToTerraform(struct?: RouterRipNetworkInterfaceListCfg | cdktf.IResolvable): any {
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


export function routerRipNetworkInterfaceListCfgToHclTerraform(struct?: RouterRipNetworkInterfaceListCfg | cdktf.IResolvable): any {
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

export class RouterRipNetworkInterfaceListCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterRipNetworkInterfaceListCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterRipNetworkInterfaceListCfg | cdktf.IResolvable | undefined) {
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

export class RouterRipNetworkInterfaceListCfgList extends cdktf.ComplexList {
  public internalValue? : RouterRipNetworkInterfaceListCfg[] | cdktf.IResolvable

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
  public get(index: number): RouterRipNetworkInterfaceListCfgOutputReference {
    return new RouterRipNetworkInterfaceListCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterRipOffsetListAclCfg {
  /**
  * Access-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#acl RouterRip#acl}
  */
  readonly acl?: string;
  /**
  * Ethernet interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#ethernet RouterRip#ethernet}
  */
  readonly ethernet?: number;
  /**
  * Loopback interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#loopback RouterRip#loopback}
  */
  readonly loopback?: number;
  /**
  * Metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#metric RouterRip#metric}
  */
  readonly metric?: number;
  /**
  * 'in': Filter incoming updates; 'out': Filter outgoing updates;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#offset_list_direction RouterRip#offset_list_direction}
  */
  readonly offsetListDirection?: string;
  /**
  * Trunk interface (Trunk interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#trunk RouterRip#trunk}
  */
  readonly trunk?: number;
  /**
  * Tunnel interface (Tunnel interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#tunnel RouterRip#tunnel}
  */
  readonly tunnel?: number;
  /**
  * Virtual ethernet interface (Virtual ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#ve RouterRip#ve}
  */
  readonly ve?: number;
}

export function routerRipOffsetListAclCfgToTerraform(struct?: RouterRipOffsetListAclCfg | cdktf.IResolvable): any {
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


export function routerRipOffsetListAclCfgToHclTerraform(struct?: RouterRipOffsetListAclCfg | cdktf.IResolvable): any {
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

export class RouterRipOffsetListAclCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterRipOffsetListAclCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterRipOffsetListAclCfg | cdktf.IResolvable | undefined) {
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

export class RouterRipOffsetListAclCfgList extends cdktf.ComplexList {
  public internalValue? : RouterRipOffsetListAclCfg[] | cdktf.IResolvable

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
  public get(index: number): RouterRipOffsetListAclCfgOutputReference {
    return new RouterRipOffsetListAclCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterRipOffsetListStruct {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#uuid RouterRip#uuid}
  */
  readonly uuid?: string;
  /**
  * acl_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#acl_cfg RouterRip#acl_cfg}
  */
  readonly aclCfg?: RouterRipOffsetListAclCfg[] | cdktf.IResolvable;
}

export function routerRipOffsetListStructToTerraform(struct?: RouterRipOffsetListStructOutputReference | RouterRipOffsetListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    acl_cfg: cdktf.listMapper(routerRipOffsetListAclCfgToTerraform, true)(struct!.aclCfg),
  }
}


export function routerRipOffsetListStructToHclTerraform(struct?: RouterRipOffsetListStructOutputReference | RouterRipOffsetListStruct): any {
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
      value: cdktf.listMapperHcl(routerRipOffsetListAclCfgToHclTerraform, true)(struct!.aclCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterRipOffsetListAclCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterRipOffsetListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterRipOffsetListStruct | undefined {
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

  public set internalValue(value: RouterRipOffsetListStruct | undefined) {
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
  private _aclCfg = new RouterRipOffsetListAclCfgList(this, "acl_cfg", false);
  public get aclCfg() {
    return this._aclCfg;
  }
  public putAclCfg(value: RouterRipOffsetListAclCfg[] | cdktf.IResolvable) {
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
export interface RouterRipPassiveInterfaceListStruct {
  /**
  * Ethernet interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#ethernet RouterRip#ethernet}
  */
  readonly ethernet?: number;
  /**
  * Loopback interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#loopback RouterRip#loopback}
  */
  readonly loopback?: number;
  /**
  * Trunk interface (Trunk interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#trunk RouterRip#trunk}
  */
  readonly trunk?: number;
  /**
  * Tunnel interface (Tunnel interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#tunnel RouterRip#tunnel}
  */
  readonly tunnel?: number;
  /**
  * Virtual ethernet interface (Virtual ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#ve RouterRip#ve}
  */
  readonly ve?: number;
}

export function routerRipPassiveInterfaceListStructToTerraform(struct?: RouterRipPassiveInterfaceListStruct | cdktf.IResolvable): any {
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


export function routerRipPassiveInterfaceListStructToHclTerraform(struct?: RouterRipPassiveInterfaceListStruct | cdktf.IResolvable): any {
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

export class RouterRipPassiveInterfaceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterRipPassiveInterfaceListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterRipPassiveInterfaceListStruct | cdktf.IResolvable | undefined) {
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

export class RouterRipPassiveInterfaceListStructList extends cdktf.ComplexList {
  public internalValue? : RouterRipPassiveInterfaceListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterRipPassiveInterfaceListStructOutputReference {
    return new RouterRipPassiveInterfaceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterRipRedistributeRedistListStruct {
  /**
  * Metric for redistributed routes (metric value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#metric RouterRip#metric}
  */
  readonly metric?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#route_map RouterRip#route_map}
  */
  readonly routeMap?: string;
  /**
  * 'bgp': Border Gateway Protocol (BGP); 'connected': Connected; 'floating-ip': Floating IP; 'ip-nat-list': IP NAT list; 'ip-nat': IP NAT; 'isis': ISO IS-IS; 'lw4o6': LW4O6 Prefix; 'nat-map': NAT MAP Prefix; 'static-nat': Static NAT; 'public-ip': Public IPv4 Prefixes; 'ospf': Open Shortest Path First (OSPF); 'static': Static routes;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#type RouterRip#type}
  */
  readonly type?: string;
}

export function routerRipRedistributeRedistListStructToTerraform(struct?: RouterRipRedistributeRedistListStruct | cdktf.IResolvable): any {
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


export function routerRipRedistributeRedistListStructToHclTerraform(struct?: RouterRipRedistributeRedistListStruct | cdktf.IResolvable): any {
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

export class RouterRipRedistributeRedistListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterRipRedistributeRedistListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterRipRedistributeRedistListStruct | cdktf.IResolvable | undefined) {
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

export class RouterRipRedistributeRedistListStructList extends cdktf.ComplexList {
  public internalValue? : RouterRipRedistributeRedistListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterRipRedistributeRedistListStructOutputReference {
    return new RouterRipRedistributeRedistListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterRipRedistributeVipListStruct {
  /**
  * Metric for redistributed routes (metric value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#vip_metric RouterRip#vip_metric}
  */
  readonly vipMetric?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#vip_route_map RouterRip#vip_route_map}
  */
  readonly vipRouteMap?: string;
  /**
  * 'only-flagged': Selected Virtual IP (VIP); 'only-not-flagged': Only not flagged;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#vip_type RouterRip#vip_type}
  */
  readonly vipType?: string;
}

export function routerRipRedistributeVipListStructToTerraform(struct?: RouterRipRedistributeVipListStruct | cdktf.IResolvable): any {
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


export function routerRipRedistributeVipListStructToHclTerraform(struct?: RouterRipRedistributeVipListStruct | cdktf.IResolvable): any {
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

export class RouterRipRedistributeVipListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterRipRedistributeVipListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterRipRedistributeVipListStruct | cdktf.IResolvable | undefined) {
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

export class RouterRipRedistributeVipListStructList extends cdktf.ComplexList {
  public internalValue? : RouterRipRedistributeVipListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterRipRedistributeVipListStructOutputReference {
    return new RouterRipRedistributeVipListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterRipRedistribute {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#uuid RouterRip#uuid}
  */
  readonly uuid?: string;
  /**
  * redist_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#redist_list RouterRip#redist_list}
  */
  readonly redistList?: RouterRipRedistributeRedistListStruct[] | cdktf.IResolvable;
  /**
  * vip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#vip_list RouterRip#vip_list}
  */
  readonly vipList?: RouterRipRedistributeVipListStruct[] | cdktf.IResolvable;
}

export function routerRipRedistributeToTerraform(struct?: RouterRipRedistributeOutputReference | RouterRipRedistribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    redist_list: cdktf.listMapper(routerRipRedistributeRedistListStructToTerraform, true)(struct!.redistList),
    vip_list: cdktf.listMapper(routerRipRedistributeVipListStructToTerraform, true)(struct!.vipList),
  }
}


export function routerRipRedistributeToHclTerraform(struct?: RouterRipRedistributeOutputReference | RouterRipRedistribute): any {
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
      value: cdktf.listMapperHcl(routerRipRedistributeRedistListStructToHclTerraform, true)(struct!.redistList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterRipRedistributeRedistListStructList",
    },
    vip_list: {
      value: cdktf.listMapperHcl(routerRipRedistributeVipListStructToHclTerraform, true)(struct!.vipList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterRipRedistributeVipListStructList",
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

  public set internalValue(value: RouterRipRedistribute | undefined) {
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
  private _redistList = new RouterRipRedistributeRedistListStructList(this, "redist_list", false);
  public get redistList() {
    return this._redistList;
  }
  public putRedistList(value: RouterRipRedistributeRedistListStruct[] | cdktf.IResolvable) {
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
  private _vipList = new RouterRipRedistributeVipListStructList(this, "vip_list", false);
  public get vipList() {
    return this._vipList;
  }
  public putVipList(value: RouterRipRedistributeVipListStruct[] | cdktf.IResolvable) {
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
export interface RouterRipRipMaximumPrefixCfg {
  /**
  * Set the maximum number of RIP routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#maximum_prefix RouterRip#maximum_prefix}
  */
  readonly maximumPrefix?: number;
  /**
  * Percentage of maximum routes to generate a warning (Default 75%)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#maximum_prefix_thres RouterRip#maximum_prefix_thres}
  */
  readonly maximumPrefixThres?: number;
}

export function routerRipRipMaximumPrefixCfgToTerraform(struct?: RouterRipRipMaximumPrefixCfgOutputReference | RouterRipRipMaximumPrefixCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_prefix: cdktf.numberToTerraform(struct!.maximumPrefix),
    maximum_prefix_thres: cdktf.numberToTerraform(struct!.maximumPrefixThres),
  }
}


export function routerRipRipMaximumPrefixCfgToHclTerraform(struct?: RouterRipRipMaximumPrefixCfgOutputReference | RouterRipRipMaximumPrefixCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum_prefix: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_prefix_thres: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefixThres),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterRipRipMaximumPrefixCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterRipRipMaximumPrefixCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefix = this._maximumPrefix;
    }
    if (this._maximumPrefixThres !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixThres = this._maximumPrefixThres;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterRipRipMaximumPrefixCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maximumPrefix = undefined;
      this._maximumPrefixThres = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maximumPrefix = value.maximumPrefix;
      this._maximumPrefixThres = value.maximumPrefixThres;
    }
  }

  // maximum_prefix - computed: false, optional: true, required: false
  private _maximumPrefix?: number; 
  public get maximumPrefix() {
    return this.getNumberAttribute('maximum_prefix');
  }
  public set maximumPrefix(value: number) {
    this._maximumPrefix = value;
  }
  public resetMaximumPrefix() {
    this._maximumPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixInput() {
    return this._maximumPrefix;
  }

  // maximum_prefix_thres - computed: false, optional: true, required: false
  private _maximumPrefixThres?: number; 
  public get maximumPrefixThres() {
    return this.getNumberAttribute('maximum_prefix_thres');
  }
  public set maximumPrefixThres(value: number) {
    this._maximumPrefixThres = value;
  }
  public resetMaximumPrefixThres() {
    this._maximumPrefixThres = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixThresInput() {
    return this._maximumPrefixThres;
  }
}
export interface RouterRipRouteCfg {
  /**
  * Static route advertisement (debugging purpose) (IP prefix network/length)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#route RouterRip#route}
  */
  readonly route?: string;
}

export function routerRipRouteCfgToTerraform(struct?: RouterRipRouteCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route: cdktf.stringToTerraform(struct!.route),
  }
}


export function routerRipRouteCfgToHclTerraform(struct?: RouterRipRouteCfg | cdktf.IResolvable): any {
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

export class RouterRipRouteCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterRipRouteCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterRipRouteCfg | cdktf.IResolvable | undefined) {
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

export class RouterRipRouteCfgList extends cdktf.ComplexList {
  public internalValue? : RouterRipRouteCfg[] | cdktf.IResolvable

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
  public get(index: number): RouterRipRouteCfgOutputReference {
    return new RouterRipRouteCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterRipTimersTimersCfg {
  /**
  * Basic routing protocol update timers (Routing table update timer value in second. Default is 30)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#basic RouterRip#basic}
  */
  readonly basic?: number;
  /**
  * Routing information timeout timer. Default is 180
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#val_2 RouterRip#val_2}
  */
  readonly val2?: number;
  /**
  * Garbage collection timer. Default is 120
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#val_3 RouterRip#val_3}
  */
  readonly val3?: number;
}

export function routerRipTimersTimersCfgToTerraform(struct?: RouterRipTimersTimersCfgOutputReference | RouterRipTimersTimersCfg): any {
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


export function routerRipTimersTimersCfgToHclTerraform(struct?: RouterRipTimersTimersCfgOutputReference | RouterRipTimersTimersCfg): any {
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

export class RouterRipTimersTimersCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterRipTimersTimersCfg | undefined {
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

  public set internalValue(value: RouterRipTimersTimersCfg | undefined) {
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
export interface RouterRipTimers {
  /**
  * timers_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#timers_cfg RouterRip#timers_cfg}
  */
  readonly timersCfg?: RouterRipTimersTimersCfg;
}

export function routerRipTimersToTerraform(struct?: RouterRipTimersOutputReference | RouterRipTimers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timers_cfg: routerRipTimersTimersCfgToTerraform(struct!.timersCfg),
  }
}


export function routerRipTimersToHclTerraform(struct?: RouterRipTimersOutputReference | RouterRipTimers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timers_cfg: {
      value: routerRipTimersTimersCfgToHclTerraform(struct!.timersCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterRipTimersTimersCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterRipTimersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterRipTimers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timersCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timersCfg = this._timersCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterRipTimers | undefined) {
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
  private _timersCfg = new RouterRipTimersTimersCfgOutputReference(this, "timers_cfg");
  public get timersCfg() {
    return this._timersCfg;
  }
  public putTimersCfg(value: RouterRipTimersTimersCfg) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip thunder_router_rip}
*/
export class RouterRip extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_router_rip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterRip resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterRip to import
  * @param importFromId The id of the existing RouterRip that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterRip to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_router_rip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_rip thunder_router_rip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterRipConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RouterRipConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_router_rip',
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
    this._version = config.version;
    this._distanceListCfg.internalValue = config.distanceListCfg;
    this._distributeList.internalValue = config.distributeList;
    this._neighbor.internalValue = config.neighbor;
    this._networkAddresses.internalValue = config.networkAddresses;
    this._networkInterfaceListCfg.internalValue = config.networkInterfaceListCfg;
    this._offsetList.internalValue = config.offsetList;
    this._passiveInterfaceList.internalValue = config.passiveInterfaceList;
    this._redistribute.internalValue = config.redistribute;
    this._ripMaximumPrefixCfg.internalValue = config.ripMaximumPrefixCfg;
    this._routeCfg.internalValue = config.routeCfg;
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

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // distance_list_cfg - computed: false, optional: true, required: false
  private _distanceListCfg = new RouterRipDistanceListCfgList(this, "distance_list_cfg", false);
  public get distanceListCfg() {
    return this._distanceListCfg;
  }
  public putDistanceListCfg(value: RouterRipDistanceListCfg[] | cdktf.IResolvable) {
    this._distanceListCfg.internalValue = value;
  }
  public resetDistanceListCfg() {
    this._distanceListCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceListCfgInput() {
    return this._distanceListCfg.internalValue;
  }

  // distribute_list - computed: false, optional: true, required: false
  private _distributeList = new RouterRipDistributeListStructOutputReference(this, "distribute_list");
  public get distributeList() {
    return this._distributeList;
  }
  public putDistributeList(value: RouterRipDistributeListStruct) {
    this._distributeList.internalValue = value;
  }
  public resetDistributeList() {
    this._distributeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListInput() {
    return this._distributeList.internalValue;
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

  // network_addresses - computed: false, optional: true, required: false
  private _networkAddresses = new RouterRipNetworkAddressesList(this, "network_addresses", false);
  public get networkAddresses() {
    return this._networkAddresses;
  }
  public putNetworkAddresses(value: RouterRipNetworkAddresses[] | cdktf.IResolvable) {
    this._networkAddresses.internalValue = value;
  }
  public resetNetworkAddresses() {
    this._networkAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAddressesInput() {
    return this._networkAddresses.internalValue;
  }

  // network_interface_list_cfg - computed: false, optional: true, required: false
  private _networkInterfaceListCfg = new RouterRipNetworkInterfaceListCfgList(this, "network_interface_list_cfg", false);
  public get networkInterfaceListCfg() {
    return this._networkInterfaceListCfg;
  }
  public putNetworkInterfaceListCfg(value: RouterRipNetworkInterfaceListCfg[] | cdktf.IResolvable) {
    this._networkInterfaceListCfg.internalValue = value;
  }
  public resetNetworkInterfaceListCfg() {
    this._networkInterfaceListCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceListCfgInput() {
    return this._networkInterfaceListCfg.internalValue;
  }

  // offset_list - computed: false, optional: true, required: false
  private _offsetList = new RouterRipOffsetListStructOutputReference(this, "offset_list");
  public get offsetList() {
    return this._offsetList;
  }
  public putOffsetList(value: RouterRipOffsetListStruct) {
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
  private _passiveInterfaceList = new RouterRipPassiveInterfaceListStructList(this, "passive_interface_list", false);
  public get passiveInterfaceList() {
    return this._passiveInterfaceList;
  }
  public putPassiveInterfaceList(value: RouterRipPassiveInterfaceListStruct[] | cdktf.IResolvable) {
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

  // rip_maximum_prefix_cfg - computed: false, optional: true, required: false
  private _ripMaximumPrefixCfg = new RouterRipRipMaximumPrefixCfgOutputReference(this, "rip_maximum_prefix_cfg");
  public get ripMaximumPrefixCfg() {
    return this._ripMaximumPrefixCfg;
  }
  public putRipMaximumPrefixCfg(value: RouterRipRipMaximumPrefixCfg) {
    this._ripMaximumPrefixCfg.internalValue = value;
  }
  public resetRipMaximumPrefixCfg() {
    this._ripMaximumPrefixCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripMaximumPrefixCfgInput() {
    return this._ripMaximumPrefixCfg.internalValue;
  }

  // route_cfg - computed: false, optional: true, required: false
  private _routeCfg = new RouterRipRouteCfgList(this, "route_cfg", false);
  public get routeCfg() {
    return this._routeCfg;
  }
  public putRouteCfg(value: RouterRipRouteCfg[] | cdktf.IResolvable) {
    this._routeCfg.internalValue = value;
  }
  public resetRouteCfg() {
    this._routeCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeCfgInput() {
    return this._routeCfg.internalValue;
  }

  // timers - computed: false, optional: true, required: false
  private _timers = new RouterRipTimersOutputReference(this, "timers");
  public get timers() {
    return this._timers;
  }
  public putTimers(value: RouterRipTimers) {
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
      version: cdktf.numberToTerraform(this._version),
      distance_list_cfg: cdktf.listMapper(routerRipDistanceListCfgToTerraform, true)(this._distanceListCfg.internalValue),
      distribute_list: routerRipDistributeListStructToTerraform(this._distributeList.internalValue),
      neighbor: cdktf.listMapper(routerRipNeighborToTerraform, true)(this._neighbor.internalValue),
      network_addresses: cdktf.listMapper(routerRipNetworkAddressesToTerraform, true)(this._networkAddresses.internalValue),
      network_interface_list_cfg: cdktf.listMapper(routerRipNetworkInterfaceListCfgToTerraform, true)(this._networkInterfaceListCfg.internalValue),
      offset_list: routerRipOffsetListStructToTerraform(this._offsetList.internalValue),
      passive_interface_list: cdktf.listMapper(routerRipPassiveInterfaceListStructToTerraform, true)(this._passiveInterfaceList.internalValue),
      redistribute: routerRipRedistributeToTerraform(this._redistribute.internalValue),
      rip_maximum_prefix_cfg: routerRipRipMaximumPrefixCfgToTerraform(this._ripMaximumPrefixCfg.internalValue),
      route_cfg: cdktf.listMapper(routerRipRouteCfgToTerraform, true)(this._routeCfg.internalValue),
      timers: routerRipTimersToTerraform(this._timers.internalValue),
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
      version: {
        value: cdktf.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      distance_list_cfg: {
        value: cdktf.listMapperHcl(routerRipDistanceListCfgToHclTerraform, true)(this._distanceListCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterRipDistanceListCfgList",
      },
      distribute_list: {
        value: routerRipDistributeListStructToHclTerraform(this._distributeList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterRipDistributeListStructList",
      },
      neighbor: {
        value: cdktf.listMapperHcl(routerRipNeighborToHclTerraform, true)(this._neighbor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterRipNeighborList",
      },
      network_addresses: {
        value: cdktf.listMapperHcl(routerRipNetworkAddressesToHclTerraform, true)(this._networkAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterRipNetworkAddressesList",
      },
      network_interface_list_cfg: {
        value: cdktf.listMapperHcl(routerRipNetworkInterfaceListCfgToHclTerraform, true)(this._networkInterfaceListCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterRipNetworkInterfaceListCfgList",
      },
      offset_list: {
        value: routerRipOffsetListStructToHclTerraform(this._offsetList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterRipOffsetListStructList",
      },
      passive_interface_list: {
        value: cdktf.listMapperHcl(routerRipPassiveInterfaceListStructToHclTerraform, true)(this._passiveInterfaceList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterRipPassiveInterfaceListStructList",
      },
      redistribute: {
        value: routerRipRedistributeToHclTerraform(this._redistribute.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterRipRedistributeList",
      },
      rip_maximum_prefix_cfg: {
        value: routerRipRipMaximumPrefixCfgToHclTerraform(this._ripMaximumPrefixCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterRipRipMaximumPrefixCfgList",
      },
      route_cfg: {
        value: cdktf.listMapperHcl(routerRipRouteCfgToHclTerraform, true)(this._routeCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterRipRouteCfgList",
      },
      timers: {
        value: routerRipTimersToHclTerraform(this._timers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterRipTimersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
