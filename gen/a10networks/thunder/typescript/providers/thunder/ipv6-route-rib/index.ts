// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_route_rib
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ipv6RouteRibConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_route_rib#id Ipv6RouteRib#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IPV6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_route_rib#ipv6_address Ipv6RouteRib#ipv6_address}
  */
  readonly ipv6Address: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_route_rib#uuid Ipv6RouteRib#uuid}
  */
  readonly uuid?: string;
  /**
  * ipv6_nexthop_ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_route_rib#ipv6_nexthop_ipv6 Ipv6RouteRib#ipv6_nexthop_ipv6}
  */
  readonly ipv6NexthopIpv6?: Ipv6RouteRibIpv6NexthopIpv6[] | cdktf.IResolvable;
  /**
  * ipv6_nexthop_tunnel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_route_rib#ipv6_nexthop_tunnel Ipv6RouteRib#ipv6_nexthop_tunnel}
  */
  readonly ipv6NexthopTunnel?: Ipv6RouteRibIpv6NexthopTunnel[] | cdktf.IResolvable;
}
export interface Ipv6RouteRibIpv6NexthopIpv6 {
  /**
  * Description for static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_route_rib#description Ipv6RouteRib#description}
  */
  readonly description?: string;
  /**
  * Distance value for this route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_route_rib#distance Ipv6RouteRib#distance}
  */
  readonly distance?: number;
  /**
  * Ethernet interface (Ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_route_rib#ethernet Ipv6RouteRib#ethernet}
  */
  readonly ethernet?: number;
  /**
  * Forwarding router's address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_route_rib#ipv6_nexthop Ipv6RouteRib#ipv6_nexthop}
  */
  readonly ipv6Nexthop?: string;
  /**
  * Trunk interface (Trunk interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_route_rib#trunk Ipv6RouteRib#trunk}
  */
  readonly trunk?: number;
  /**
  * Virtual Ethernet interface (Virtual Ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_route_rib#ve Ipv6RouteRib#ve}
  */
  readonly ve?: number;
}

export function ipv6RouteRibIpv6NexthopIpv6ToTerraform(struct?: Ipv6RouteRibIpv6NexthopIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    distance: cdktf.numberToTerraform(struct!.distance),
    ethernet: cdktf.numberToTerraform(struct!.ethernet),
    ipv6_nexthop: cdktf.stringToTerraform(struct!.ipv6Nexthop),
    trunk: cdktf.numberToTerraform(struct!.trunk),
    ve: cdktf.numberToTerraform(struct!.ve),
  }
}


export function ipv6RouteRibIpv6NexthopIpv6ToHclTerraform(struct?: Ipv6RouteRibIpv6NexthopIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distance: {
      value: cdktf.numberToHclTerraform(struct!.distance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ethernet: {
      value: cdktf.numberToHclTerraform(struct!.ethernet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_nexthop: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Nexthop),
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

export class Ipv6RouteRibIpv6NexthopIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Ipv6RouteRibIpv6NexthopIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._distance !== undefined) {
      hasAnyValues = true;
      internalValueResult.distance = this._distance;
    }
    if (this._ethernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernet = this._ethernet;
    }
    if (this._ipv6Nexthop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Nexthop = this._ipv6Nexthop;
    }
    if (this._trunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunk = this._trunk;
    }
    if (this._ve !== undefined) {
      hasAnyValues = true;
      internalValueResult.ve = this._ve;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ipv6RouteRibIpv6NexthopIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._distance = undefined;
      this._ethernet = undefined;
      this._ipv6Nexthop = undefined;
      this._trunk = undefined;
      this._ve = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._distance = value.distance;
      this._ethernet = value.ethernet;
      this._ipv6Nexthop = value.ipv6Nexthop;
      this._trunk = value.trunk;
      this._ve = value.ve;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // ipv6_nexthop - computed: false, optional: true, required: false
  private _ipv6Nexthop?: string; 
  public get ipv6Nexthop() {
    return this.getStringAttribute('ipv6_nexthop');
  }
  public set ipv6Nexthop(value: string) {
    this._ipv6Nexthop = value;
  }
  public resetIpv6Nexthop() {
    this._ipv6Nexthop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NexthopInput() {
    return this._ipv6Nexthop;
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

export class Ipv6RouteRibIpv6NexthopIpv6List extends cdktf.ComplexList {
  public internalValue? : Ipv6RouteRibIpv6NexthopIpv6[] | cdktf.IResolvable

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
  public get(index: number): Ipv6RouteRibIpv6NexthopIpv6OutputReference {
    return new Ipv6RouteRibIpv6NexthopIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ipv6RouteRibIpv6NexthopTunnel {
  /**
  * Description for static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_route_rib#description Ipv6RouteRib#description}
  */
  readonly description?: string;
  /**
  * Distance value for this route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_route_rib#distance_nexthop_tunnel Ipv6RouteRib#distance_nexthop_tunnel}
  */
  readonly distanceNexthopTunnel?: number;
  /**
  * Forwarding router's address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_route_rib#ipv6_nexthop_tunnel_addr Ipv6RouteRib#ipv6_nexthop_tunnel_addr}
  */
  readonly ipv6NexthopTunnelAddr?: string;
  /**
  * Tunnel interface (Tunnel interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_route_rib#tunnel Ipv6RouteRib#tunnel}
  */
  readonly tunnel?: number;
}

export function ipv6RouteRibIpv6NexthopTunnelToTerraform(struct?: Ipv6RouteRibIpv6NexthopTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    distance_nexthop_tunnel: cdktf.numberToTerraform(struct!.distanceNexthopTunnel),
    ipv6_nexthop_tunnel_addr: cdktf.stringToTerraform(struct!.ipv6NexthopTunnelAddr),
    tunnel: cdktf.numberToTerraform(struct!.tunnel),
  }
}


export function ipv6RouteRibIpv6NexthopTunnelToHclTerraform(struct?: Ipv6RouteRibIpv6NexthopTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distance_nexthop_tunnel: {
      value: cdktf.numberToHclTerraform(struct!.distanceNexthopTunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_nexthop_tunnel_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6NexthopTunnelAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel: {
      value: cdktf.numberToHclTerraform(struct!.tunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ipv6RouteRibIpv6NexthopTunnelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Ipv6RouteRibIpv6NexthopTunnel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._distanceNexthopTunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.distanceNexthopTunnel = this._distanceNexthopTunnel;
    }
    if (this._ipv6NexthopTunnelAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6NexthopTunnelAddr = this._ipv6NexthopTunnelAddr;
    }
    if (this._tunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnel = this._tunnel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ipv6RouteRibIpv6NexthopTunnel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._distanceNexthopTunnel = undefined;
      this._ipv6NexthopTunnelAddr = undefined;
      this._tunnel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._distanceNexthopTunnel = value.distanceNexthopTunnel;
      this._ipv6NexthopTunnelAddr = value.ipv6NexthopTunnelAddr;
      this._tunnel = value.tunnel;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // distance_nexthop_tunnel - computed: false, optional: true, required: false
  private _distanceNexthopTunnel?: number; 
  public get distanceNexthopTunnel() {
    return this.getNumberAttribute('distance_nexthop_tunnel');
  }
  public set distanceNexthopTunnel(value: number) {
    this._distanceNexthopTunnel = value;
  }
  public resetDistanceNexthopTunnel() {
    this._distanceNexthopTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceNexthopTunnelInput() {
    return this._distanceNexthopTunnel;
  }

  // ipv6_nexthop_tunnel_addr - computed: false, optional: true, required: false
  private _ipv6NexthopTunnelAddr?: string; 
  public get ipv6NexthopTunnelAddr() {
    return this.getStringAttribute('ipv6_nexthop_tunnel_addr');
  }
  public set ipv6NexthopTunnelAddr(value: string) {
    this._ipv6NexthopTunnelAddr = value;
  }
  public resetIpv6NexthopTunnelAddr() {
    this._ipv6NexthopTunnelAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NexthopTunnelAddrInput() {
    return this._ipv6NexthopTunnelAddr;
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
}

export class Ipv6RouteRibIpv6NexthopTunnelList extends cdktf.ComplexList {
  public internalValue? : Ipv6RouteRibIpv6NexthopTunnel[] | cdktf.IResolvable

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
  public get(index: number): Ipv6RouteRibIpv6NexthopTunnelOutputReference {
    return new Ipv6RouteRibIpv6NexthopTunnelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_route_rib thunder_ipv6_route_rib}
*/
export class Ipv6RouteRib extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ipv6_route_rib";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipv6RouteRib resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipv6RouteRib to import
  * @param importFromId The id of the existing Ipv6RouteRib that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_route_rib#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipv6RouteRib to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ipv6_route_rib", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_route_rib thunder_ipv6_route_rib} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ipv6RouteRibConfig
  */
  public constructor(scope: Construct, id: string, config: Ipv6RouteRibConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ipv6_route_rib',
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
    this._ipv6Address = config.ipv6Address;
    this._uuid = config.uuid;
    this._ipv6NexthopIpv6.internalValue = config.ipv6NexthopIpv6;
    this._ipv6NexthopTunnel.internalValue = config.ipv6NexthopTunnel;
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

  // ipv6_address - computed: false, optional: false, required: true
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
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

  // ipv6_nexthop_ipv6 - computed: false, optional: true, required: false
  private _ipv6NexthopIpv6 = new Ipv6RouteRibIpv6NexthopIpv6List(this, "ipv6_nexthop_ipv6", false);
  public get ipv6NexthopIpv6() {
    return this._ipv6NexthopIpv6;
  }
  public putIpv6NexthopIpv6(value: Ipv6RouteRibIpv6NexthopIpv6[] | cdktf.IResolvable) {
    this._ipv6NexthopIpv6.internalValue = value;
  }
  public resetIpv6NexthopIpv6() {
    this._ipv6NexthopIpv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NexthopIpv6Input() {
    return this._ipv6NexthopIpv6.internalValue;
  }

  // ipv6_nexthop_tunnel - computed: false, optional: true, required: false
  private _ipv6NexthopTunnel = new Ipv6RouteRibIpv6NexthopTunnelList(this, "ipv6_nexthop_tunnel", false);
  public get ipv6NexthopTunnel() {
    return this._ipv6NexthopTunnel;
  }
  public putIpv6NexthopTunnel(value: Ipv6RouteRibIpv6NexthopTunnel[] | cdktf.IResolvable) {
    this._ipv6NexthopTunnel.internalValue = value;
  }
  public resetIpv6NexthopTunnel() {
    this._ipv6NexthopTunnel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NexthopTunnelInput() {
    return this._ipv6NexthopTunnel.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ipv6_address: cdktf.stringToTerraform(this._ipv6Address),
      uuid: cdktf.stringToTerraform(this._uuid),
      ipv6_nexthop_ipv6: cdktf.listMapper(ipv6RouteRibIpv6NexthopIpv6ToTerraform, true)(this._ipv6NexthopIpv6.internalValue),
      ipv6_nexthop_tunnel: cdktf.listMapper(ipv6RouteRibIpv6NexthopTunnelToTerraform, true)(this._ipv6NexthopTunnel.internalValue),
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
      ipv6_address: {
        value: cdktf.stringToHclTerraform(this._ipv6Address),
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
      ipv6_nexthop_ipv6: {
        value: cdktf.listMapperHcl(ipv6RouteRibIpv6NexthopIpv6ToHclTerraform, true)(this._ipv6NexthopIpv6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ipv6RouteRibIpv6NexthopIpv6List",
      },
      ipv6_nexthop_tunnel: {
        value: cdktf.listMapperHcl(ipv6RouteRibIpv6NexthopTunnelToHclTerraform, true)(this._ipv6NexthopTunnel.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ipv6RouteRibIpv6NexthopTunnelList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
