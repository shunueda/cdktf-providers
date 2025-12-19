// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_route_rib
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpRouteRibConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_route_rib#id IpRouteRib#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Destination prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_route_rib#ip_dest_addr IpRouteRib#ip_dest_addr}
  */
  readonly ipDestAddr: string;
  /**
  * Destination prefix mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_route_rib#ip_mask IpRouteRib#ip_mask}
  */
  readonly ipMask: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_route_rib#uuid IpRouteRib#uuid}
  */
  readonly uuid?: string;
  /**
  * ip_nexthop_ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_route_rib#ip_nexthop_ipv4 IpRouteRib#ip_nexthop_ipv4}
  */
  readonly ipNexthopIpv4?: IpRouteRibIpNexthopIpv4[] | cdktf.IResolvable;
  /**
  * ip_nexthop_lif block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_route_rib#ip_nexthop_lif IpRouteRib#ip_nexthop_lif}
  */
  readonly ipNexthopLif?: IpRouteRibIpNexthopLif[] | cdktf.IResolvable;
  /**
  * ip_nexthop_partition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_route_rib#ip_nexthop_partition IpRouteRib#ip_nexthop_partition}
  */
  readonly ipNexthopPartition?: IpRouteRibIpNexthopPartition[] | cdktf.IResolvable;
  /**
  * ip_nexthop_tunnel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_route_rib#ip_nexthop_tunnel IpRouteRib#ip_nexthop_tunnel}
  */
  readonly ipNexthopTunnel?: IpRouteRibIpNexthopTunnel[] | cdktf.IResolvable;
}
export interface IpRouteRibIpNexthopIpv4 {
  /**
  * Description for static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_route_rib#description_nexthop_ip IpRouteRib#description_nexthop_ip}
  */
  readonly descriptionNexthopIp?: string;
  /**
  * Distance value for this route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_route_rib#distance_nexthop_ip IpRouteRib#distance_nexthop_ip}
  */
  readonly distanceNexthopIp?: number;
  /**
  * Forwarding router's address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_route_rib#ip_next_hop IpRouteRib#ip_next_hop}
  */
  readonly ipNextHop?: string;
}

export function ipRouteRibIpNexthopIpv4ToTerraform(struct?: IpRouteRibIpNexthopIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description_nexthop_ip: cdktf.stringToTerraform(struct!.descriptionNexthopIp),
    distance_nexthop_ip: cdktf.numberToTerraform(struct!.distanceNexthopIp),
    ip_next_hop: cdktf.stringToTerraform(struct!.ipNextHop),
  }
}


export function ipRouteRibIpNexthopIpv4ToHclTerraform(struct?: IpRouteRibIpNexthopIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description_nexthop_ip: {
      value: cdktf.stringToHclTerraform(struct!.descriptionNexthopIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distance_nexthop_ip: {
      value: cdktf.numberToHclTerraform(struct!.distanceNexthopIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_next_hop: {
      value: cdktf.stringToHclTerraform(struct!.ipNextHop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpRouteRibIpNexthopIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpRouteRibIpNexthopIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._descriptionNexthopIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.descriptionNexthopIp = this._descriptionNexthopIp;
    }
    if (this._distanceNexthopIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.distanceNexthopIp = this._distanceNexthopIp;
    }
    if (this._ipNextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipNextHop = this._ipNextHop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpRouteRibIpNexthopIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._descriptionNexthopIp = undefined;
      this._distanceNexthopIp = undefined;
      this._ipNextHop = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._descriptionNexthopIp = value.descriptionNexthopIp;
      this._distanceNexthopIp = value.distanceNexthopIp;
      this._ipNextHop = value.ipNextHop;
    }
  }

  // description_nexthop_ip - computed: false, optional: true, required: false
  private _descriptionNexthopIp?: string; 
  public get descriptionNexthopIp() {
    return this.getStringAttribute('description_nexthop_ip');
  }
  public set descriptionNexthopIp(value: string) {
    this._descriptionNexthopIp = value;
  }
  public resetDescriptionNexthopIp() {
    this._descriptionNexthopIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionNexthopIpInput() {
    return this._descriptionNexthopIp;
  }

  // distance_nexthop_ip - computed: false, optional: true, required: false
  private _distanceNexthopIp?: number; 
  public get distanceNexthopIp() {
    return this.getNumberAttribute('distance_nexthop_ip');
  }
  public set distanceNexthopIp(value: number) {
    this._distanceNexthopIp = value;
  }
  public resetDistanceNexthopIp() {
    this._distanceNexthopIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceNexthopIpInput() {
    return this._distanceNexthopIp;
  }

  // ip_next_hop - computed: false, optional: true, required: false
  private _ipNextHop?: string; 
  public get ipNextHop() {
    return this.getStringAttribute('ip_next_hop');
  }
  public set ipNextHop(value: string) {
    this._ipNextHop = value;
  }
  public resetIpNextHop() {
    this._ipNextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNextHopInput() {
    return this._ipNextHop;
  }
}

export class IpRouteRibIpNexthopIpv4List extends cdktf.ComplexList {
  public internalValue? : IpRouteRibIpNexthopIpv4[] | cdktf.IResolvable

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
  public get(index: number): IpRouteRibIpNexthopIpv4OutputReference {
    return new IpRouteRibIpNexthopIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpRouteRibIpNexthopLif {
  /**
  * Description for static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_route_rib#description_nexthop_lif IpRouteRib#description_nexthop_lif}
  */
  readonly descriptionNexthopLif?: string;
  /**
  * LIF Interface (Logical interface name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_route_rib#lif IpRouteRib#lif}
  */
  readonly lif?: string;
}

export function ipRouteRibIpNexthopLifToTerraform(struct?: IpRouteRibIpNexthopLif | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description_nexthop_lif: cdktf.stringToTerraform(struct!.descriptionNexthopLif),
    lif: cdktf.stringToTerraform(struct!.lif),
  }
}


export function ipRouteRibIpNexthopLifToHclTerraform(struct?: IpRouteRibIpNexthopLif | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description_nexthop_lif: {
      value: cdktf.stringToHclTerraform(struct!.descriptionNexthopLif),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lif: {
      value: cdktf.stringToHclTerraform(struct!.lif),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpRouteRibIpNexthopLifOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpRouteRibIpNexthopLif | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._descriptionNexthopLif !== undefined) {
      hasAnyValues = true;
      internalValueResult.descriptionNexthopLif = this._descriptionNexthopLif;
    }
    if (this._lif !== undefined) {
      hasAnyValues = true;
      internalValueResult.lif = this._lif;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpRouteRibIpNexthopLif | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._descriptionNexthopLif = undefined;
      this._lif = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._descriptionNexthopLif = value.descriptionNexthopLif;
      this._lif = value.lif;
    }
  }

  // description_nexthop_lif - computed: false, optional: true, required: false
  private _descriptionNexthopLif?: string; 
  public get descriptionNexthopLif() {
    return this.getStringAttribute('description_nexthop_lif');
  }
  public set descriptionNexthopLif(value: string) {
    this._descriptionNexthopLif = value;
  }
  public resetDescriptionNexthopLif() {
    this._descriptionNexthopLif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionNexthopLifInput() {
    return this._descriptionNexthopLif;
  }

  // lif - computed: false, optional: true, required: false
  private _lif?: string; 
  public get lif() {
    return this.getStringAttribute('lif');
  }
  public set lif(value: string) {
    this._lif = value;
  }
  public resetLif() {
    this._lif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifInput() {
    return this._lif;
  }
}

export class IpRouteRibIpNexthopLifList extends cdktf.ComplexList {
  public internalValue? : IpRouteRibIpNexthopLif[] | cdktf.IResolvable

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
  public get(index: number): IpRouteRibIpNexthopLifOutputReference {
    return new IpRouteRibIpNexthopLifOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpRouteRibIpNexthopPartition {
  /**
  * Description for static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_route_rib#description_nexthop_partition IpRouteRib#description_nexthop_partition}
  */
  readonly descriptionNexthopPartition?: string;
  /**
  * Description for static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_route_rib#description_partition_vrid IpRouteRib#description_partition_vrid}
  */
  readonly descriptionPartitionVrid?: string;
  /**
  * Name of network partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_route_rib#partition_name IpRouteRib#partition_name}
  */
  readonly partitionName?: string;
  /**
  * Specify ha VRRP-A vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_route_rib#vrid_num_in_partition IpRouteRib#vrid_num_in_partition}
  */
  readonly vridNumInPartition?: number;
}

export function ipRouteRibIpNexthopPartitionToTerraform(struct?: IpRouteRibIpNexthopPartition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description_nexthop_partition: cdktf.stringToTerraform(struct!.descriptionNexthopPartition),
    description_partition_vrid: cdktf.stringToTerraform(struct!.descriptionPartitionVrid),
    partition_name: cdktf.stringToTerraform(struct!.partitionName),
    vrid_num_in_partition: cdktf.numberToTerraform(struct!.vridNumInPartition),
  }
}


export function ipRouteRibIpNexthopPartitionToHclTerraform(struct?: IpRouteRibIpNexthopPartition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description_nexthop_partition: {
      value: cdktf.stringToHclTerraform(struct!.descriptionNexthopPartition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description_partition_vrid: {
      value: cdktf.stringToHclTerraform(struct!.descriptionPartitionVrid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition_name: {
      value: cdktf.stringToHclTerraform(struct!.partitionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrid_num_in_partition: {
      value: cdktf.numberToHclTerraform(struct!.vridNumInPartition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpRouteRibIpNexthopPartitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpRouteRibIpNexthopPartition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._descriptionNexthopPartition !== undefined) {
      hasAnyValues = true;
      internalValueResult.descriptionNexthopPartition = this._descriptionNexthopPartition;
    }
    if (this._descriptionPartitionVrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.descriptionPartitionVrid = this._descriptionPartitionVrid;
    }
    if (this._partitionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionName = this._partitionName;
    }
    if (this._vridNumInPartition !== undefined) {
      hasAnyValues = true;
      internalValueResult.vridNumInPartition = this._vridNumInPartition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpRouteRibIpNexthopPartition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._descriptionNexthopPartition = undefined;
      this._descriptionPartitionVrid = undefined;
      this._partitionName = undefined;
      this._vridNumInPartition = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._descriptionNexthopPartition = value.descriptionNexthopPartition;
      this._descriptionPartitionVrid = value.descriptionPartitionVrid;
      this._partitionName = value.partitionName;
      this._vridNumInPartition = value.vridNumInPartition;
    }
  }

  // description_nexthop_partition - computed: false, optional: true, required: false
  private _descriptionNexthopPartition?: string; 
  public get descriptionNexthopPartition() {
    return this.getStringAttribute('description_nexthop_partition');
  }
  public set descriptionNexthopPartition(value: string) {
    this._descriptionNexthopPartition = value;
  }
  public resetDescriptionNexthopPartition() {
    this._descriptionNexthopPartition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionNexthopPartitionInput() {
    return this._descriptionNexthopPartition;
  }

  // description_partition_vrid - computed: false, optional: true, required: false
  private _descriptionPartitionVrid?: string; 
  public get descriptionPartitionVrid() {
    return this.getStringAttribute('description_partition_vrid');
  }
  public set descriptionPartitionVrid(value: string) {
    this._descriptionPartitionVrid = value;
  }
  public resetDescriptionPartitionVrid() {
    this._descriptionPartitionVrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionPartitionVridInput() {
    return this._descriptionPartitionVrid;
  }

  // partition_name - computed: false, optional: true, required: false
  private _partitionName?: string; 
  public get partitionName() {
    return this.getStringAttribute('partition_name');
  }
  public set partitionName(value: string) {
    this._partitionName = value;
  }
  public resetPartitionName() {
    this._partitionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionNameInput() {
    return this._partitionName;
  }

  // vrid_num_in_partition - computed: false, optional: true, required: false
  private _vridNumInPartition?: number; 
  public get vridNumInPartition() {
    return this.getNumberAttribute('vrid_num_in_partition');
  }
  public set vridNumInPartition(value: number) {
    this._vridNumInPartition = value;
  }
  public resetVridNumInPartition() {
    this._vridNumInPartition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridNumInPartitionInput() {
    return this._vridNumInPartition;
  }
}

export class IpRouteRibIpNexthopPartitionList extends cdktf.ComplexList {
  public internalValue? : IpRouteRibIpNexthopPartition[] | cdktf.IResolvable

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
  public get(index: number): IpRouteRibIpNexthopPartitionOutputReference {
    return new IpRouteRibIpNexthopPartitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpRouteRibIpNexthopTunnel {
  /**
  * Description for static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_route_rib#description_nexthop_tunnel IpRouteRib#description_nexthop_tunnel}
  */
  readonly descriptionNexthopTunnel?: string;
  /**
  * Distance value for this route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_route_rib#distance_nexthop_tunnel IpRouteRib#distance_nexthop_tunnel}
  */
  readonly distanceNexthopTunnel?: number;
  /**
  * Forwarding router's address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_route_rib#ip_next_hop_tunnel IpRouteRib#ip_next_hop_tunnel}
  */
  readonly ipNextHopTunnel?: string;
  /**
  * Tunnel interface (Tunnel interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_route_rib#tunnel IpRouteRib#tunnel}
  */
  readonly tunnel?: number;
}

export function ipRouteRibIpNexthopTunnelToTerraform(struct?: IpRouteRibIpNexthopTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description_nexthop_tunnel: cdktf.stringToTerraform(struct!.descriptionNexthopTunnel),
    distance_nexthop_tunnel: cdktf.numberToTerraform(struct!.distanceNexthopTunnel),
    ip_next_hop_tunnel: cdktf.stringToTerraform(struct!.ipNextHopTunnel),
    tunnel: cdktf.numberToTerraform(struct!.tunnel),
  }
}


export function ipRouteRibIpNexthopTunnelToHclTerraform(struct?: IpRouteRibIpNexthopTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description_nexthop_tunnel: {
      value: cdktf.stringToHclTerraform(struct!.descriptionNexthopTunnel),
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
    ip_next_hop_tunnel: {
      value: cdktf.stringToHclTerraform(struct!.ipNextHopTunnel),
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

export class IpRouteRibIpNexthopTunnelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpRouteRibIpNexthopTunnel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._descriptionNexthopTunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.descriptionNexthopTunnel = this._descriptionNexthopTunnel;
    }
    if (this._distanceNexthopTunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.distanceNexthopTunnel = this._distanceNexthopTunnel;
    }
    if (this._ipNextHopTunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipNextHopTunnel = this._ipNextHopTunnel;
    }
    if (this._tunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnel = this._tunnel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpRouteRibIpNexthopTunnel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._descriptionNexthopTunnel = undefined;
      this._distanceNexthopTunnel = undefined;
      this._ipNextHopTunnel = undefined;
      this._tunnel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._descriptionNexthopTunnel = value.descriptionNexthopTunnel;
      this._distanceNexthopTunnel = value.distanceNexthopTunnel;
      this._ipNextHopTunnel = value.ipNextHopTunnel;
      this._tunnel = value.tunnel;
    }
  }

  // description_nexthop_tunnel - computed: false, optional: true, required: false
  private _descriptionNexthopTunnel?: string; 
  public get descriptionNexthopTunnel() {
    return this.getStringAttribute('description_nexthop_tunnel');
  }
  public set descriptionNexthopTunnel(value: string) {
    this._descriptionNexthopTunnel = value;
  }
  public resetDescriptionNexthopTunnel() {
    this._descriptionNexthopTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionNexthopTunnelInput() {
    return this._descriptionNexthopTunnel;
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

  // ip_next_hop_tunnel - computed: false, optional: true, required: false
  private _ipNextHopTunnel?: string; 
  public get ipNextHopTunnel() {
    return this.getStringAttribute('ip_next_hop_tunnel');
  }
  public set ipNextHopTunnel(value: string) {
    this._ipNextHopTunnel = value;
  }
  public resetIpNextHopTunnel() {
    this._ipNextHopTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNextHopTunnelInput() {
    return this._ipNextHopTunnel;
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

export class IpRouteRibIpNexthopTunnelList extends cdktf.ComplexList {
  public internalValue? : IpRouteRibIpNexthopTunnel[] | cdktf.IResolvable

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
  public get(index: number): IpRouteRibIpNexthopTunnelOutputReference {
    return new IpRouteRibIpNexthopTunnelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_route_rib thunder_ip_route_rib}
*/
export class IpRouteRib extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ip_route_rib";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpRouteRib resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpRouteRib to import
  * @param importFromId The id of the existing IpRouteRib that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_route_rib#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpRouteRib to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ip_route_rib", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_route_rib thunder_ip_route_rib} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpRouteRibConfig
  */
  public constructor(scope: Construct, id: string, config: IpRouteRibConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ip_route_rib',
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
    this._ipDestAddr = config.ipDestAddr;
    this._ipMask = config.ipMask;
    this._uuid = config.uuid;
    this._ipNexthopIpv4.internalValue = config.ipNexthopIpv4;
    this._ipNexthopLif.internalValue = config.ipNexthopLif;
    this._ipNexthopPartition.internalValue = config.ipNexthopPartition;
    this._ipNexthopTunnel.internalValue = config.ipNexthopTunnel;
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

  // ip_dest_addr - computed: false, optional: false, required: true
  private _ipDestAddr?: string; 
  public get ipDestAddr() {
    return this.getStringAttribute('ip_dest_addr');
  }
  public set ipDestAddr(value: string) {
    this._ipDestAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDestAddrInput() {
    return this._ipDestAddr;
  }

  // ip_mask - computed: false, optional: false, required: true
  private _ipMask?: string; 
  public get ipMask() {
    return this.getStringAttribute('ip_mask');
  }
  public set ipMask(value: string) {
    this._ipMask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMaskInput() {
    return this._ipMask;
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

  // ip_nexthop_ipv4 - computed: false, optional: true, required: false
  private _ipNexthopIpv4 = new IpRouteRibIpNexthopIpv4List(this, "ip_nexthop_ipv4", false);
  public get ipNexthopIpv4() {
    return this._ipNexthopIpv4;
  }
  public putIpNexthopIpv4(value: IpRouteRibIpNexthopIpv4[] | cdktf.IResolvable) {
    this._ipNexthopIpv4.internalValue = value;
  }
  public resetIpNexthopIpv4() {
    this._ipNexthopIpv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNexthopIpv4Input() {
    return this._ipNexthopIpv4.internalValue;
  }

  // ip_nexthop_lif - computed: false, optional: true, required: false
  private _ipNexthopLif = new IpRouteRibIpNexthopLifList(this, "ip_nexthop_lif", false);
  public get ipNexthopLif() {
    return this._ipNexthopLif;
  }
  public putIpNexthopLif(value: IpRouteRibIpNexthopLif[] | cdktf.IResolvable) {
    this._ipNexthopLif.internalValue = value;
  }
  public resetIpNexthopLif() {
    this._ipNexthopLif.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNexthopLifInput() {
    return this._ipNexthopLif.internalValue;
  }

  // ip_nexthop_partition - computed: false, optional: true, required: false
  private _ipNexthopPartition = new IpRouteRibIpNexthopPartitionList(this, "ip_nexthop_partition", false);
  public get ipNexthopPartition() {
    return this._ipNexthopPartition;
  }
  public putIpNexthopPartition(value: IpRouteRibIpNexthopPartition[] | cdktf.IResolvable) {
    this._ipNexthopPartition.internalValue = value;
  }
  public resetIpNexthopPartition() {
    this._ipNexthopPartition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNexthopPartitionInput() {
    return this._ipNexthopPartition.internalValue;
  }

  // ip_nexthop_tunnel - computed: false, optional: true, required: false
  private _ipNexthopTunnel = new IpRouteRibIpNexthopTunnelList(this, "ip_nexthop_tunnel", false);
  public get ipNexthopTunnel() {
    return this._ipNexthopTunnel;
  }
  public putIpNexthopTunnel(value: IpRouteRibIpNexthopTunnel[] | cdktf.IResolvable) {
    this._ipNexthopTunnel.internalValue = value;
  }
  public resetIpNexthopTunnel() {
    this._ipNexthopTunnel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNexthopTunnelInput() {
    return this._ipNexthopTunnel.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ip_dest_addr: cdktf.stringToTerraform(this._ipDestAddr),
      ip_mask: cdktf.stringToTerraform(this._ipMask),
      uuid: cdktf.stringToTerraform(this._uuid),
      ip_nexthop_ipv4: cdktf.listMapper(ipRouteRibIpNexthopIpv4ToTerraform, true)(this._ipNexthopIpv4.internalValue),
      ip_nexthop_lif: cdktf.listMapper(ipRouteRibIpNexthopLifToTerraform, true)(this._ipNexthopLif.internalValue),
      ip_nexthop_partition: cdktf.listMapper(ipRouteRibIpNexthopPartitionToTerraform, true)(this._ipNexthopPartition.internalValue),
      ip_nexthop_tunnel: cdktf.listMapper(ipRouteRibIpNexthopTunnelToTerraform, true)(this._ipNexthopTunnel.internalValue),
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
      ip_dest_addr: {
        value: cdktf.stringToHclTerraform(this._ipDestAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_mask: {
        value: cdktf.stringToHclTerraform(this._ipMask),
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
      ip_nexthop_ipv4: {
        value: cdktf.listMapperHcl(ipRouteRibIpNexthopIpv4ToHclTerraform, true)(this._ipNexthopIpv4.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpRouteRibIpNexthopIpv4List",
      },
      ip_nexthop_lif: {
        value: cdktf.listMapperHcl(ipRouteRibIpNexthopLifToHclTerraform, true)(this._ipNexthopLif.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpRouteRibIpNexthopLifList",
      },
      ip_nexthop_partition: {
        value: cdktf.listMapperHcl(ipRouteRibIpNexthopPartitionToHclTerraform, true)(this._ipNexthopPartition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpRouteRibIpNexthopPartitionList",
      },
      ip_nexthop_tunnel: {
        value: cdktf.listMapperHcl(ipRouteRibIpNexthopTunnelToHclTerraform, true)(this._ipNexthopTunnel.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpRouteRibIpNexthopTunnelList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
