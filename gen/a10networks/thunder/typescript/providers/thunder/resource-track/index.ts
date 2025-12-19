// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceTrackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#id ResourceTrack#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * resource track policy template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#name ResourceTrack#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#user_tag ResourceTrack#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#uuid ResourceTrack#uuid}
  */
  readonly uuid?: string;
  /**
  * bgp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#bgp ResourceTrack#bgp}
  */
  readonly bgp?: ResourceTrackBgp;
  /**
  * gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#gateway ResourceTrack#gateway}
  */
  readonly gateway?: ResourceTrackGateway;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#interface ResourceTrack#interface}
  */
  readonly interface?: ResourceTrackInterface[] | cdktf.IResolvable;
  /**
  * route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#route ResourceTrack#route}
  */
  readonly route?: ResourceTrackRoute;
  /**
  * scaleout_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#scaleout_cfg ResourceTrack#scaleout_cfg}
  */
  readonly scaleoutCfg?: ResourceTrackScaleoutCfg;
  /**
  * trunk_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#trunk_cfg ResourceTrack#trunk_cfg}
  */
  readonly trunkCfg?: ResourceTrackTrunkCfg[] | cdktf.IResolvable;
  /**
  * vlan_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#vlan_cfg ResourceTrack#vlan_cfg}
  */
  readonly vlanCfg?: ResourceTrackVlanCfg[] | cdktf.IResolvable;
}
export interface ResourceTrackBgpBgpIpv4AddressCfg {
  /**
  * bgp IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#bgp_ipv4_address ResourceTrack#bgp_ipv4_address}
  */
  readonly bgpIpv4Address?: string;
  /**
  * The failover event weight
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#weight ResourceTrack#weight}
  */
  readonly weight?: number;
}

export function resourceTrackBgpBgpIpv4AddressCfgToTerraform(struct?: ResourceTrackBgpBgpIpv4AddressCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp_ipv4_address: cdktf.stringToTerraform(struct!.bgpIpv4Address),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function resourceTrackBgpBgpIpv4AddressCfgToHclTerraform(struct?: ResourceTrackBgpBgpIpv4AddressCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp_ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.bgpIpv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTrackBgpBgpIpv4AddressCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTrackBgpBgpIpv4AddressCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgpIpv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpIpv4Address = this._bgpIpv4Address;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTrackBgpBgpIpv4AddressCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bgpIpv4Address = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bgpIpv4Address = value.bgpIpv4Address;
      this._weight = value.weight;
    }
  }

  // bgp_ipv4_address - computed: false, optional: true, required: false
  private _bgpIpv4Address?: string; 
  public get bgpIpv4Address() {
    return this.getStringAttribute('bgp_ipv4_address');
  }
  public set bgpIpv4Address(value: string) {
    this._bgpIpv4Address = value;
  }
  public resetBgpIpv4Address() {
    this._bgpIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpIpv4AddressInput() {
    return this._bgpIpv4Address;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class ResourceTrackBgpBgpIpv4AddressCfgList extends cdktf.ComplexList {
  public internalValue? : ResourceTrackBgpBgpIpv4AddressCfg[] | cdktf.IResolvable

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
  public get(index: number): ResourceTrackBgpBgpIpv4AddressCfgOutputReference {
    return new ResourceTrackBgpBgpIpv4AddressCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTrackBgpBgpIpv6AddressCfg {
  /**
  * IPV6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#bgp_ipv6_address ResourceTrack#bgp_ipv6_address}
  */
  readonly bgpIpv6Address?: string;
  /**
  * The failover event weight
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#weight ResourceTrack#weight}
  */
  readonly weight?: number;
}

export function resourceTrackBgpBgpIpv6AddressCfgToTerraform(struct?: ResourceTrackBgpBgpIpv6AddressCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp_ipv6_address: cdktf.stringToTerraform(struct!.bgpIpv6Address),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function resourceTrackBgpBgpIpv6AddressCfgToHclTerraform(struct?: ResourceTrackBgpBgpIpv6AddressCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp_ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.bgpIpv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTrackBgpBgpIpv6AddressCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTrackBgpBgpIpv6AddressCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgpIpv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpIpv6Address = this._bgpIpv6Address;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTrackBgpBgpIpv6AddressCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bgpIpv6Address = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bgpIpv6Address = value.bgpIpv6Address;
      this._weight = value.weight;
    }
  }

  // bgp_ipv6_address - computed: false, optional: true, required: false
  private _bgpIpv6Address?: string; 
  public get bgpIpv6Address() {
    return this.getStringAttribute('bgp_ipv6_address');
  }
  public set bgpIpv6Address(value: string) {
    this._bgpIpv6Address = value;
  }
  public resetBgpIpv6Address() {
    this._bgpIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpIpv6AddressInput() {
    return this._bgpIpv6Address;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class ResourceTrackBgpBgpIpv6AddressCfgList extends cdktf.ComplexList {
  public internalValue? : ResourceTrackBgpBgpIpv6AddressCfg[] | cdktf.IResolvable

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
  public get(index: number): ResourceTrackBgpBgpIpv6AddressCfgOutputReference {
    return new ResourceTrackBgpBgpIpv6AddressCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTrackBgp {
  /**
  * bgp_ipv4_address_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#bgp_ipv4_address_cfg ResourceTrack#bgp_ipv4_address_cfg}
  */
  readonly bgpIpv4AddressCfg?: ResourceTrackBgpBgpIpv4AddressCfg[] | cdktf.IResolvable;
  /**
  * bgp_ipv6_address_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#bgp_ipv6_address_cfg ResourceTrack#bgp_ipv6_address_cfg}
  */
  readonly bgpIpv6AddressCfg?: ResourceTrackBgpBgpIpv6AddressCfg[] | cdktf.IResolvable;
}

export function resourceTrackBgpToTerraform(struct?: ResourceTrackBgpOutputReference | ResourceTrackBgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp_ipv4_address_cfg: cdktf.listMapper(resourceTrackBgpBgpIpv4AddressCfgToTerraform, true)(struct!.bgpIpv4AddressCfg),
    bgp_ipv6_address_cfg: cdktf.listMapper(resourceTrackBgpBgpIpv6AddressCfgToTerraform, true)(struct!.bgpIpv6AddressCfg),
  }
}


export function resourceTrackBgpToHclTerraform(struct?: ResourceTrackBgpOutputReference | ResourceTrackBgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp_ipv4_address_cfg: {
      value: cdktf.listMapperHcl(resourceTrackBgpBgpIpv4AddressCfgToHclTerraform, true)(struct!.bgpIpv4AddressCfg),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTrackBgpBgpIpv4AddressCfgList",
    },
    bgp_ipv6_address_cfg: {
      value: cdktf.listMapperHcl(resourceTrackBgpBgpIpv6AddressCfgToHclTerraform, true)(struct!.bgpIpv6AddressCfg),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTrackBgpBgpIpv6AddressCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTrackBgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTrackBgp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgpIpv4AddressCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpIpv4AddressCfg = this._bgpIpv4AddressCfg?.internalValue;
    }
    if (this._bgpIpv6AddressCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpIpv6AddressCfg = this._bgpIpv6AddressCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTrackBgp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bgpIpv4AddressCfg.internalValue = undefined;
      this._bgpIpv6AddressCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bgpIpv4AddressCfg.internalValue = value.bgpIpv4AddressCfg;
      this._bgpIpv6AddressCfg.internalValue = value.bgpIpv6AddressCfg;
    }
  }

  // bgp_ipv4_address_cfg - computed: false, optional: true, required: false
  private _bgpIpv4AddressCfg = new ResourceTrackBgpBgpIpv4AddressCfgList(this, "bgp_ipv4_address_cfg", false);
  public get bgpIpv4AddressCfg() {
    return this._bgpIpv4AddressCfg;
  }
  public putBgpIpv4AddressCfg(value: ResourceTrackBgpBgpIpv4AddressCfg[] | cdktf.IResolvable) {
    this._bgpIpv4AddressCfg.internalValue = value;
  }
  public resetBgpIpv4AddressCfg() {
    this._bgpIpv4AddressCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpIpv4AddressCfgInput() {
    return this._bgpIpv4AddressCfg.internalValue;
  }

  // bgp_ipv6_address_cfg - computed: false, optional: true, required: false
  private _bgpIpv6AddressCfg = new ResourceTrackBgpBgpIpv6AddressCfgList(this, "bgp_ipv6_address_cfg", false);
  public get bgpIpv6AddressCfg() {
    return this._bgpIpv6AddressCfg;
  }
  public putBgpIpv6AddressCfg(value: ResourceTrackBgpBgpIpv6AddressCfg[] | cdktf.IResolvable) {
    this._bgpIpv6AddressCfg.internalValue = value;
  }
  public resetBgpIpv6AddressCfg() {
    this._bgpIpv6AddressCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpIpv6AddressCfgInput() {
    return this._bgpIpv6AddressCfg.internalValue;
  }
}
export interface ResourceTrackGatewayGwIpv4AddressCfg {
  /**
  * IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#gw_ipv4_address ResourceTrack#gw_ipv4_address}
  */
  readonly gwIpv4Address?: string;
  /**
  * The failover event weight
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#weight ResourceTrack#weight}
  */
  readonly weight?: number;
}

export function resourceTrackGatewayGwIpv4AddressCfgToTerraform(struct?: ResourceTrackGatewayGwIpv4AddressCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gw_ipv4_address: cdktf.stringToTerraform(struct!.gwIpv4Address),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function resourceTrackGatewayGwIpv4AddressCfgToHclTerraform(struct?: ResourceTrackGatewayGwIpv4AddressCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gw_ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.gwIpv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTrackGatewayGwIpv4AddressCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTrackGatewayGwIpv4AddressCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gwIpv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.gwIpv4Address = this._gwIpv4Address;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTrackGatewayGwIpv4AddressCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gwIpv4Address = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gwIpv4Address = value.gwIpv4Address;
      this._weight = value.weight;
    }
  }

  // gw_ipv4_address - computed: false, optional: true, required: false
  private _gwIpv4Address?: string; 
  public get gwIpv4Address() {
    return this.getStringAttribute('gw_ipv4_address');
  }
  public set gwIpv4Address(value: string) {
    this._gwIpv4Address = value;
  }
  public resetGwIpv4Address() {
    this._gwIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gwIpv4AddressInput() {
    return this._gwIpv4Address;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class ResourceTrackGatewayGwIpv4AddressCfgList extends cdktf.ComplexList {
  public internalValue? : ResourceTrackGatewayGwIpv4AddressCfg[] | cdktf.IResolvable

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
  public get(index: number): ResourceTrackGatewayGwIpv4AddressCfgOutputReference {
    return new ResourceTrackGatewayGwIpv4AddressCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTrackGatewayGwIpv6AddressCfg {
  /**
  * IPV6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#gw_ipv6_address ResourceTrack#gw_ipv6_address}
  */
  readonly gwIpv6Address?: string;
  /**
  * The failover event weight
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#weight ResourceTrack#weight}
  */
  readonly weight?: number;
}

export function resourceTrackGatewayGwIpv6AddressCfgToTerraform(struct?: ResourceTrackGatewayGwIpv6AddressCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gw_ipv6_address: cdktf.stringToTerraform(struct!.gwIpv6Address),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function resourceTrackGatewayGwIpv6AddressCfgToHclTerraform(struct?: ResourceTrackGatewayGwIpv6AddressCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gw_ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.gwIpv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTrackGatewayGwIpv6AddressCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTrackGatewayGwIpv6AddressCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gwIpv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.gwIpv6Address = this._gwIpv6Address;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTrackGatewayGwIpv6AddressCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gwIpv6Address = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gwIpv6Address = value.gwIpv6Address;
      this._weight = value.weight;
    }
  }

  // gw_ipv6_address - computed: false, optional: true, required: false
  private _gwIpv6Address?: string; 
  public get gwIpv6Address() {
    return this.getStringAttribute('gw_ipv6_address');
  }
  public set gwIpv6Address(value: string) {
    this._gwIpv6Address = value;
  }
  public resetGwIpv6Address() {
    this._gwIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gwIpv6AddressInput() {
    return this._gwIpv6Address;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class ResourceTrackGatewayGwIpv6AddressCfgList extends cdktf.ComplexList {
  public internalValue? : ResourceTrackGatewayGwIpv6AddressCfg[] | cdktf.IResolvable

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
  public get(index: number): ResourceTrackGatewayGwIpv6AddressCfgOutputReference {
    return new ResourceTrackGatewayGwIpv6AddressCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTrackGateway {
  /**
  * gw_ipv4_address_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#gw_ipv4_address_cfg ResourceTrack#gw_ipv4_address_cfg}
  */
  readonly gwIpv4AddressCfg?: ResourceTrackGatewayGwIpv4AddressCfg[] | cdktf.IResolvable;
  /**
  * gw_ipv6_address_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#gw_ipv6_address_cfg ResourceTrack#gw_ipv6_address_cfg}
  */
  readonly gwIpv6AddressCfg?: ResourceTrackGatewayGwIpv6AddressCfg[] | cdktf.IResolvable;
}

export function resourceTrackGatewayToTerraform(struct?: ResourceTrackGatewayOutputReference | ResourceTrackGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gw_ipv4_address_cfg: cdktf.listMapper(resourceTrackGatewayGwIpv4AddressCfgToTerraform, true)(struct!.gwIpv4AddressCfg),
    gw_ipv6_address_cfg: cdktf.listMapper(resourceTrackGatewayGwIpv6AddressCfgToTerraform, true)(struct!.gwIpv6AddressCfg),
  }
}


export function resourceTrackGatewayToHclTerraform(struct?: ResourceTrackGatewayOutputReference | ResourceTrackGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gw_ipv4_address_cfg: {
      value: cdktf.listMapperHcl(resourceTrackGatewayGwIpv4AddressCfgToHclTerraform, true)(struct!.gwIpv4AddressCfg),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTrackGatewayGwIpv4AddressCfgList",
    },
    gw_ipv6_address_cfg: {
      value: cdktf.listMapperHcl(resourceTrackGatewayGwIpv6AddressCfgToHclTerraform, true)(struct!.gwIpv6AddressCfg),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTrackGatewayGwIpv6AddressCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTrackGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTrackGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gwIpv4AddressCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gwIpv4AddressCfg = this._gwIpv4AddressCfg?.internalValue;
    }
    if (this._gwIpv6AddressCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gwIpv6AddressCfg = this._gwIpv6AddressCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTrackGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gwIpv4AddressCfg.internalValue = undefined;
      this._gwIpv6AddressCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gwIpv4AddressCfg.internalValue = value.gwIpv4AddressCfg;
      this._gwIpv6AddressCfg.internalValue = value.gwIpv6AddressCfg;
    }
  }

  // gw_ipv4_address_cfg - computed: false, optional: true, required: false
  private _gwIpv4AddressCfg = new ResourceTrackGatewayGwIpv4AddressCfgList(this, "gw_ipv4_address_cfg", false);
  public get gwIpv4AddressCfg() {
    return this._gwIpv4AddressCfg;
  }
  public putGwIpv4AddressCfg(value: ResourceTrackGatewayGwIpv4AddressCfg[] | cdktf.IResolvable) {
    this._gwIpv4AddressCfg.internalValue = value;
  }
  public resetGwIpv4AddressCfg() {
    this._gwIpv4AddressCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gwIpv4AddressCfgInput() {
    return this._gwIpv4AddressCfg.internalValue;
  }

  // gw_ipv6_address_cfg - computed: false, optional: true, required: false
  private _gwIpv6AddressCfg = new ResourceTrackGatewayGwIpv6AddressCfgList(this, "gw_ipv6_address_cfg", false);
  public get gwIpv6AddressCfg() {
    return this._gwIpv6AddressCfg;
  }
  public putGwIpv6AddressCfg(value: ResourceTrackGatewayGwIpv6AddressCfg[] | cdktf.IResolvable) {
    this._gwIpv6AddressCfg.internalValue = value;
  }
  public resetGwIpv6AddressCfg() {
    this._gwIpv6AddressCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gwIpv6AddressCfgInput() {
    return this._gwIpv6AddressCfg.internalValue;
  }
}
export interface ResourceTrackInterface {
  /**
  * Ethernet Interface (Ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#ethernet ResourceTrack#ethernet}
  */
  readonly ethernet?: number;
  /**
  * The failover event weight
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#weight ResourceTrack#weight}
  */
  readonly weight?: number;
}

export function resourceTrackInterfaceToTerraform(struct?: ResourceTrackInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet: cdktf.numberToTerraform(struct!.ethernet),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function resourceTrackInterfaceToHclTerraform(struct?: ResourceTrackInterface | cdktf.IResolvable): any {
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
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTrackInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTrackInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernet = this._ethernet;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTrackInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ethernet = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ethernet = value.ethernet;
      this._weight = value.weight;
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

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class ResourceTrackInterfaceList extends cdktf.ComplexList {
  public internalValue? : ResourceTrackInterface[] | cdktf.IResolvable

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
  public get(index: number): ResourceTrackInterfaceOutputReference {
    return new ResourceTrackInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTrackRouteIpDestinationCfg {
  /**
  * Route's administrative distance(default: match any)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#distance ResourceTrack#distance}
  */
  readonly distance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#gateway ResourceTrack#gateway}
  */
  readonly gateway?: string;
  /**
  * Destination prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#ip_destination ResourceTrack#ip_destination}
  */
  readonly ipDestination?: string;
  /**
  * Destination prefix mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#mask ResourceTrack#mask}
  */
  readonly mask?: string;
  /**
  * 'any': Match any routing protocol (default); 'static': Match only static routes (added by user); 'dynamic': Match routes added by dynamic routing protocols (e.g. OSPF);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#protocol ResourceTrack#protocol}
  */
  readonly protocol?: string;
  /**
  * The amount the priority will decrease if the route is missing (The amount the priority will decrease if the route is not present)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#weight ResourceTrack#weight}
  */
  readonly weight?: number;
}

export function resourceTrackRouteIpDestinationCfgToTerraform(struct?: ResourceTrackRouteIpDestinationCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distance: cdktf.numberToTerraform(struct!.distance),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    ip_destination: cdktf.stringToTerraform(struct!.ipDestination),
    mask: cdktf.stringToTerraform(struct!.mask),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function resourceTrackRouteIpDestinationCfgToHclTerraform(struct?: ResourceTrackRouteIpDestinationCfg | cdktf.IResolvable): any {
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
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_destination: {
      value: cdktf.stringToHclTerraform(struct!.ipDestination),
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
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTrackRouteIpDestinationCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTrackRouteIpDestinationCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distance !== undefined) {
      hasAnyValues = true;
      internalValueResult.distance = this._distance;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._ipDestination !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipDestination = this._ipDestination;
    }
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTrackRouteIpDestinationCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distance = undefined;
      this._gateway = undefined;
      this._ipDestination = undefined;
      this._mask = undefined;
      this._protocol = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distance = value.distance;
      this._gateway = value.gateway;
      this._ipDestination = value.ipDestination;
      this._mask = value.mask;
      this._protocol = value.protocol;
      this._weight = value.weight;
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

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // ip_destination - computed: false, optional: true, required: false
  private _ipDestination?: string; 
  public get ipDestination() {
    return this.getStringAttribute('ip_destination');
  }
  public set ipDestination(value: string) {
    this._ipDestination = value;
  }
  public resetIpDestination() {
    this._ipDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDestinationInput() {
    return this._ipDestination;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class ResourceTrackRouteIpDestinationCfgList extends cdktf.ComplexList {
  public internalValue? : ResourceTrackRouteIpDestinationCfg[] | cdktf.IResolvable

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
  public get(index: number): ResourceTrackRouteIpDestinationCfgOutputReference {
    return new ResourceTrackRouteIpDestinationCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTrackRouteIpv6DestinationCfg {
  /**
  * Route's administrative distance (default: match any)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#distance ResourceTrack#distance}
  */
  readonly distance?: number;
  /**
  * Match the route's gateway (next-hop) (default: match any)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#gatewayv6 ResourceTrack#gatewayv6}
  */
  readonly gatewayv6?: string;
  /**
  * IPv6 Destination Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#ipv6_destination ResourceTrack#ipv6_destination}
  */
  readonly ipv6Destination?: string;
  /**
  * 'any': Match any routing protocol (default); 'static': Match only static routes (added by user); 'dynamic': Match routes added by dynamic routing protocols (e.g. OSPF);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#protocol ResourceTrack#protocol}
  */
  readonly protocol?: string;
  /**
  * The amount the priority will decrease if the route is missing (The amount the priority will decrease if the route is not present)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#weight ResourceTrack#weight}
  */
  readonly weight?: number;
}

export function resourceTrackRouteIpv6DestinationCfgToTerraform(struct?: ResourceTrackRouteIpv6DestinationCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distance: cdktf.numberToTerraform(struct!.distance),
    gatewayv6: cdktf.stringToTerraform(struct!.gatewayv6),
    ipv6_destination: cdktf.stringToTerraform(struct!.ipv6Destination),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function resourceTrackRouteIpv6DestinationCfgToHclTerraform(struct?: ResourceTrackRouteIpv6DestinationCfg | cdktf.IResolvable): any {
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
    gatewayv6: {
      value: cdktf.stringToHclTerraform(struct!.gatewayv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_destination: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTrackRouteIpv6DestinationCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTrackRouteIpv6DestinationCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distance !== undefined) {
      hasAnyValues = true;
      internalValueResult.distance = this._distance;
    }
    if (this._gatewayv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayv6 = this._gatewayv6;
    }
    if (this._ipv6Destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Destination = this._ipv6Destination;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTrackRouteIpv6DestinationCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distance = undefined;
      this._gatewayv6 = undefined;
      this._ipv6Destination = undefined;
      this._protocol = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distance = value.distance;
      this._gatewayv6 = value.gatewayv6;
      this._ipv6Destination = value.ipv6Destination;
      this._protocol = value.protocol;
      this._weight = value.weight;
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

  // gatewayv6 - computed: false, optional: true, required: false
  private _gatewayv6?: string; 
  public get gatewayv6() {
    return this.getStringAttribute('gatewayv6');
  }
  public set gatewayv6(value: string) {
    this._gatewayv6 = value;
  }
  public resetGatewayv6() {
    this._gatewayv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayv6Input() {
    return this._gatewayv6;
  }

  // ipv6_destination - computed: false, optional: true, required: false
  private _ipv6Destination?: string; 
  public get ipv6Destination() {
    return this.getStringAttribute('ipv6_destination');
  }
  public set ipv6Destination(value: string) {
    this._ipv6Destination = value;
  }
  public resetIpv6Destination() {
    this._ipv6Destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DestinationInput() {
    return this._ipv6Destination;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class ResourceTrackRouteIpv6DestinationCfgList extends cdktf.ComplexList {
  public internalValue? : ResourceTrackRouteIpv6DestinationCfg[] | cdktf.IResolvable

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
  public get(index: number): ResourceTrackRouteIpv6DestinationCfgOutputReference {
    return new ResourceTrackRouteIpv6DestinationCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTrackRoute {
  /**
  * ip_destination_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#ip_destination_cfg ResourceTrack#ip_destination_cfg}
  */
  readonly ipDestinationCfg?: ResourceTrackRouteIpDestinationCfg[] | cdktf.IResolvable;
  /**
  * ipv6_destination_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#ipv6_destination_cfg ResourceTrack#ipv6_destination_cfg}
  */
  readonly ipv6DestinationCfg?: ResourceTrackRouteIpv6DestinationCfg[] | cdktf.IResolvable;
}

export function resourceTrackRouteToTerraform(struct?: ResourceTrackRouteOutputReference | ResourceTrackRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_destination_cfg: cdktf.listMapper(resourceTrackRouteIpDestinationCfgToTerraform, true)(struct!.ipDestinationCfg),
    ipv6_destination_cfg: cdktf.listMapper(resourceTrackRouteIpv6DestinationCfgToTerraform, true)(struct!.ipv6DestinationCfg),
  }
}


export function resourceTrackRouteToHclTerraform(struct?: ResourceTrackRouteOutputReference | ResourceTrackRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_destination_cfg: {
      value: cdktf.listMapperHcl(resourceTrackRouteIpDestinationCfgToHclTerraform, true)(struct!.ipDestinationCfg),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTrackRouteIpDestinationCfgList",
    },
    ipv6_destination_cfg: {
      value: cdktf.listMapperHcl(resourceTrackRouteIpv6DestinationCfgToHclTerraform, true)(struct!.ipv6DestinationCfg),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTrackRouteIpv6DestinationCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTrackRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTrackRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipDestinationCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipDestinationCfg = this._ipDestinationCfg?.internalValue;
    }
    if (this._ipv6DestinationCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6DestinationCfg = this._ipv6DestinationCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTrackRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipDestinationCfg.internalValue = undefined;
      this._ipv6DestinationCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipDestinationCfg.internalValue = value.ipDestinationCfg;
      this._ipv6DestinationCfg.internalValue = value.ipv6DestinationCfg;
    }
  }

  // ip_destination_cfg - computed: false, optional: true, required: false
  private _ipDestinationCfg = new ResourceTrackRouteIpDestinationCfgList(this, "ip_destination_cfg", false);
  public get ipDestinationCfg() {
    return this._ipDestinationCfg;
  }
  public putIpDestinationCfg(value: ResourceTrackRouteIpDestinationCfg[] | cdktf.IResolvable) {
    this._ipDestinationCfg.internalValue = value;
  }
  public resetIpDestinationCfg() {
    this._ipDestinationCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDestinationCfgInput() {
    return this._ipDestinationCfg.internalValue;
  }

  // ipv6_destination_cfg - computed: false, optional: true, required: false
  private _ipv6DestinationCfg = new ResourceTrackRouteIpv6DestinationCfgList(this, "ipv6_destination_cfg", false);
  public get ipv6DestinationCfg() {
    return this._ipv6DestinationCfg;
  }
  public putIpv6DestinationCfg(value: ResourceTrackRouteIpv6DestinationCfg[] | cdktf.IResolvable) {
    this._ipv6DestinationCfg.internalValue = value;
  }
  public resetIpv6DestinationCfg() {
    this._ipv6DestinationCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DestinationCfgInput() {
    return this._ipv6DestinationCfg.internalValue;
  }
}
export interface ResourceTrackScaleoutCfg {
  /**
  * scaleout tracking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#scaleout ResourceTrack#scaleout}
  */
  readonly scaleout?: number;
  /**
  * The failover event weight
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#weight ResourceTrack#weight}
  */
  readonly weight?: number;
}

export function resourceTrackScaleoutCfgToTerraform(struct?: ResourceTrackScaleoutCfgOutputReference | ResourceTrackScaleoutCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scaleout: cdktf.numberToTerraform(struct!.scaleout),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function resourceTrackScaleoutCfgToHclTerraform(struct?: ResourceTrackScaleoutCfgOutputReference | ResourceTrackScaleoutCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scaleout: {
      value: cdktf.numberToHclTerraform(struct!.scaleout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTrackScaleoutCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTrackScaleoutCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scaleout !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleout = this._scaleout;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTrackScaleoutCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scaleout = undefined;
      this._weight = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scaleout = value.scaleout;
      this._weight = value.weight;
    }
  }

  // scaleout - computed: false, optional: true, required: false
  private _scaleout?: number; 
  public get scaleout() {
    return this.getNumberAttribute('scaleout');
  }
  public set scaleout(value: number) {
    this._scaleout = value;
  }
  public resetScaleout() {
    this._scaleout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleoutInput() {
    return this._scaleout;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}
export interface ResourceTrackTrunkCfg {
  /**
  * Per port failover weight
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#per_port_weight ResourceTrack#per_port_weight}
  */
  readonly perPortWeight?: number;
  /**
  * trunk tracking (trunk id)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#trunk ResourceTrack#trunk}
  */
  readonly trunk?: number;
  /**
  * failover event weight
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#weight ResourceTrack#weight}
  */
  readonly weight?: number;
}

export function resourceTrackTrunkCfgToTerraform(struct?: ResourceTrackTrunkCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    per_port_weight: cdktf.numberToTerraform(struct!.perPortWeight),
    trunk: cdktf.numberToTerraform(struct!.trunk),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function resourceTrackTrunkCfgToHclTerraform(struct?: ResourceTrackTrunkCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    per_port_weight: {
      value: cdktf.numberToHclTerraform(struct!.perPortWeight),
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
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTrackTrunkCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTrackTrunkCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._perPortWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.perPortWeight = this._perPortWeight;
    }
    if (this._trunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunk = this._trunk;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTrackTrunkCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._perPortWeight = undefined;
      this._trunk = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._perPortWeight = value.perPortWeight;
      this._trunk = value.trunk;
      this._weight = value.weight;
    }
  }

  // per_port_weight - computed: false, optional: true, required: false
  private _perPortWeight?: number; 
  public get perPortWeight() {
    return this.getNumberAttribute('per_port_weight');
  }
  public set perPortWeight(value: number) {
    this._perPortWeight = value;
  }
  public resetPerPortWeight() {
    this._perPortWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perPortWeightInput() {
    return this._perPortWeight;
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

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class ResourceTrackTrunkCfgList extends cdktf.ComplexList {
  public internalValue? : ResourceTrackTrunkCfg[] | cdktf.IResolvable

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
  public get(index: number): ResourceTrackTrunkCfgOutputReference {
    return new ResourceTrackTrunkCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTrackVlanCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#timeout ResourceTrack#timeout}
  */
  readonly timeout?: number;
  /**
  * VLAN tracking (VLAN id)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#vlan ResourceTrack#vlan}
  */
  readonly vlan?: number;
  /**
  * The failover event weight
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#weight ResourceTrack#weight}
  */
  readonly weight?: number;
}

export function resourceTrackVlanCfgToTerraform(struct?: ResourceTrackVlanCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeout: cdktf.numberToTerraform(struct!.timeout),
    vlan: cdktf.numberToTerraform(struct!.vlan),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function resourceTrackVlanCfgToHclTerraform(struct?: ResourceTrackVlanCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan: {
      value: cdktf.numberToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTrackVlanCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTrackVlanCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTrackVlanCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeout = undefined;
      this._vlan = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeout = value.timeout;
      this._vlan = value.vlan;
      this._weight = value.weight;
    }
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class ResourceTrackVlanCfgList extends cdktf.ComplexList {
  public internalValue? : ResourceTrackVlanCfg[] | cdktf.IResolvable

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
  public get(index: number): ResourceTrackVlanCfgOutputReference {
    return new ResourceTrackVlanCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track thunder_resource_track}
*/
export class ResourceTrack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_resource_track";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResourceTrack resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourceTrack to import
  * @param importFromId The id of the existing ResourceTrack that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourceTrack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_resource_track", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/resource_track thunder_resource_track} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceTrackConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceTrackConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_resource_track',
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
    this._name = config.name;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._bgp.internalValue = config.bgp;
    this._gateway.internalValue = config.gateway;
    this._interface.internalValue = config.interface;
    this._route.internalValue = config.route;
    this._scaleoutCfg.internalValue = config.scaleoutCfg;
    this._trunkCfg.internalValue = config.trunkCfg;
    this._vlanCfg.internalValue = config.vlanCfg;
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

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // bgp - computed: false, optional: true, required: false
  private _bgp = new ResourceTrackBgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }
  public putBgp(value: ResourceTrackBgp) {
    this._bgp.internalValue = value;
  }
  public resetBgp() {
    this._bgp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInput() {
    return this._bgp.internalValue;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway = new ResourceTrackGatewayOutputReference(this, "gateway");
  public get gateway() {
    return this._gateway;
  }
  public putGateway(value: ResourceTrackGateway) {
    this._gateway.internalValue = value;
  }
  public resetGateway() {
    this._gateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway.internalValue;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new ResourceTrackInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: ResourceTrackInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // route - computed: false, optional: true, required: false
  private _route = new ResourceTrackRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: ResourceTrackRoute) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }

  // scaleout_cfg - computed: false, optional: true, required: false
  private _scaleoutCfg = new ResourceTrackScaleoutCfgOutputReference(this, "scaleout_cfg");
  public get scaleoutCfg() {
    return this._scaleoutCfg;
  }
  public putScaleoutCfg(value: ResourceTrackScaleoutCfg) {
    this._scaleoutCfg.internalValue = value;
  }
  public resetScaleoutCfg() {
    this._scaleoutCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleoutCfgInput() {
    return this._scaleoutCfg.internalValue;
  }

  // trunk_cfg - computed: false, optional: true, required: false
  private _trunkCfg = new ResourceTrackTrunkCfgList(this, "trunk_cfg", false);
  public get trunkCfg() {
    return this._trunkCfg;
  }
  public putTrunkCfg(value: ResourceTrackTrunkCfg[] | cdktf.IResolvable) {
    this._trunkCfg.internalValue = value;
  }
  public resetTrunkCfg() {
    this._trunkCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkCfgInput() {
    return this._trunkCfg.internalValue;
  }

  // vlan_cfg - computed: false, optional: true, required: false
  private _vlanCfg = new ResourceTrackVlanCfgList(this, "vlan_cfg", false);
  public get vlanCfg() {
    return this._vlanCfg;
  }
  public putVlanCfg(value: ResourceTrackVlanCfg[] | cdktf.IResolvable) {
    this._vlanCfg.internalValue = value;
  }
  public resetVlanCfg() {
    this._vlanCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanCfgInput() {
    return this._vlanCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      bgp: resourceTrackBgpToTerraform(this._bgp.internalValue),
      gateway: resourceTrackGatewayToTerraform(this._gateway.internalValue),
      interface: cdktf.listMapper(resourceTrackInterfaceToTerraform, true)(this._interface.internalValue),
      route: resourceTrackRouteToTerraform(this._route.internalValue),
      scaleout_cfg: resourceTrackScaleoutCfgToTerraform(this._scaleoutCfg.internalValue),
      trunk_cfg: cdktf.listMapper(resourceTrackTrunkCfgToTerraform, true)(this._trunkCfg.internalValue),
      vlan_cfg: cdktf.listMapper(resourceTrackVlanCfgToTerraform, true)(this._vlanCfg.internalValue),
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
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
      bgp: {
        value: resourceTrackBgpToHclTerraform(this._bgp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourceTrackBgpList",
      },
      gateway: {
        value: resourceTrackGatewayToHclTerraform(this._gateway.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourceTrackGatewayList",
      },
      interface: {
        value: cdktf.listMapperHcl(resourceTrackInterfaceToHclTerraform, true)(this._interface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourceTrackInterfaceList",
      },
      route: {
        value: resourceTrackRouteToHclTerraform(this._route.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourceTrackRouteList",
      },
      scaleout_cfg: {
        value: resourceTrackScaleoutCfgToHclTerraform(this._scaleoutCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourceTrackScaleoutCfgList",
      },
      trunk_cfg: {
        value: cdktf.listMapperHcl(resourceTrackTrunkCfgToHclTerraform, true)(this._trunkCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourceTrackTrunkCfgList",
      },
      vlan_cfg: {
        value: cdktf.listMapperHcl(resourceTrackVlanCfgToHclTerraform, true)(this._vlanCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourceTrackVlanCfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
