// https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_bgp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProfileBgpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_bgp#description ProfileBgp#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_bgp#id ProfileBgp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_bgp#local_as ProfileBgp#local_as}
  */
  readonly localAs: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_bgp#name ProfileBgp#name}
  */
  readonly name: string;
  /**
  * neighbor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_bgp#neighbor ProfileBgp#neighbor}
  */
  readonly neighbor?: ProfileBgpNeighbor[] | cdktf.IResolvable;
}
export interface ProfileBgpNeighborRouteMapInCidr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_bgp#ip ProfileBgp#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_bgp#mask ProfileBgp#mask}
  */
  readonly mask: string;
}

export function profileBgpNeighborRouteMapInCidrToTerraform(struct?: ProfileBgpNeighborRouteMapInCidr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    mask: cdktf.stringToTerraform(struct!.mask),
  }
}


export function profileBgpNeighborRouteMapInCidrToHclTerraform(struct?: ProfileBgpNeighborRouteMapInCidr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
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

export class ProfileBgpNeighborRouteMapInCidrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProfileBgpNeighborRouteMapInCidr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProfileBgpNeighborRouteMapInCidr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._mask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._mask = value.mask;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }
}

export class ProfileBgpNeighborRouteMapInCidrList extends cdktf.ComplexList {
  public internalValue? : ProfileBgpNeighborRouteMapInCidr[] | cdktf.IResolvable

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
  public get(index: number): ProfileBgpNeighborRouteMapInCidrOutputReference {
    return new ProfileBgpNeighborRouteMapInCidrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProfileBgpNeighborRouteMapOutCidr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_bgp#ip ProfileBgp#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_bgp#mask ProfileBgp#mask}
  */
  readonly mask: string;
}

export function profileBgpNeighborRouteMapOutCidrToTerraform(struct?: ProfileBgpNeighborRouteMapOutCidr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    mask: cdktf.stringToTerraform(struct!.mask),
  }
}


export function profileBgpNeighborRouteMapOutCidrToHclTerraform(struct?: ProfileBgpNeighborRouteMapOutCidr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
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

export class ProfileBgpNeighborRouteMapOutCidrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProfileBgpNeighborRouteMapOutCidr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProfileBgpNeighborRouteMapOutCidr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._mask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._mask = value.mask;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }
}

export class ProfileBgpNeighborRouteMapOutCidrList extends cdktf.ComplexList {
  public internalValue? : ProfileBgpNeighborRouteMapOutCidr[] | cdktf.IResolvable

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
  public get(index: number): ProfileBgpNeighborRouteMapOutCidrOutputReference {
    return new ProfileBgpNeighborRouteMapOutCidrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProfileBgpNeighbor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_bgp#autonomous_system ProfileBgp#autonomous_system}
  */
  readonly autonomousSystem: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_bgp#ip_address ProfileBgp#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_bgp#route_map_in_as_path_prepend ProfileBgp#route_map_in_as_path_prepend}
  */
  readonly routeMapInAsPathPrepend?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_bgp#route_map_in_local_pref ProfileBgp#route_map_in_local_pref}
  */
  readonly routeMapInLocalPref?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_bgp#route_map_out_as_path_prepend ProfileBgp#route_map_out_as_path_prepend}
  */
  readonly routeMapOutAsPathPrepend?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_bgp#route_map_out_local_pref ProfileBgp#route_map_out_local_pref}
  */
  readonly routeMapOutLocalPref?: number;
  /**
  * route_map_in_cidr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_bgp#route_map_in_cidr ProfileBgp#route_map_in_cidr}
  */
  readonly routeMapInCidr?: ProfileBgpNeighborRouteMapInCidr[] | cdktf.IResolvable;
  /**
  * route_map_out_cidr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_bgp#route_map_out_cidr ProfileBgp#route_map_out_cidr}
  */
  readonly routeMapOutCidr?: ProfileBgpNeighborRouteMapOutCidr[] | cdktf.IResolvable;
}

export function profileBgpNeighborToTerraform(struct?: ProfileBgpNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autonomous_system: cdktf.numberToTerraform(struct!.autonomousSystem),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    route_map_in_as_path_prepend: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.routeMapInAsPathPrepend),
    route_map_in_local_pref: cdktf.numberToTerraform(struct!.routeMapInLocalPref),
    route_map_out_as_path_prepend: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.routeMapOutAsPathPrepend),
    route_map_out_local_pref: cdktf.numberToTerraform(struct!.routeMapOutLocalPref),
    route_map_in_cidr: cdktf.listMapper(profileBgpNeighborRouteMapInCidrToTerraform, true)(struct!.routeMapInCidr),
    route_map_out_cidr: cdktf.listMapper(profileBgpNeighborRouteMapOutCidrToTerraform, true)(struct!.routeMapOutCidr),
  }
}


export function profileBgpNeighborToHclTerraform(struct?: ProfileBgpNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autonomous_system: {
      value: cdktf.numberToHclTerraform(struct!.autonomousSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_map_in_as_path_prepend: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.routeMapInAsPathPrepend),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    route_map_in_local_pref: {
      value: cdktf.numberToHclTerraform(struct!.routeMapInLocalPref),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map_out_as_path_prepend: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.routeMapOutAsPathPrepend),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    route_map_out_local_pref: {
      value: cdktf.numberToHclTerraform(struct!.routeMapOutLocalPref),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map_in_cidr: {
      value: cdktf.listMapperHcl(profileBgpNeighborRouteMapInCidrToHclTerraform, true)(struct!.routeMapInCidr),
      isBlock: true,
      type: "list",
      storageClassType: "ProfileBgpNeighborRouteMapInCidrList",
    },
    route_map_out_cidr: {
      value: cdktf.listMapperHcl(profileBgpNeighborRouteMapOutCidrToHclTerraform, true)(struct!.routeMapOutCidr),
      isBlock: true,
      type: "list",
      storageClassType: "ProfileBgpNeighborRouteMapOutCidrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProfileBgpNeighborOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProfileBgpNeighbor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autonomousSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.autonomousSystem = this._autonomousSystem;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._routeMapInAsPathPrepend !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapInAsPathPrepend = this._routeMapInAsPathPrepend;
    }
    if (this._routeMapInLocalPref !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapInLocalPref = this._routeMapInLocalPref;
    }
    if (this._routeMapOutAsPathPrepend !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapOutAsPathPrepend = this._routeMapOutAsPathPrepend;
    }
    if (this._routeMapOutLocalPref !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapOutLocalPref = this._routeMapOutLocalPref;
    }
    if (this._routeMapInCidr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapInCidr = this._routeMapInCidr?.internalValue;
    }
    if (this._routeMapOutCidr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapOutCidr = this._routeMapOutCidr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProfileBgpNeighbor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autonomousSystem = undefined;
      this._ipAddress = undefined;
      this._routeMapInAsPathPrepend = undefined;
      this._routeMapInLocalPref = undefined;
      this._routeMapOutAsPathPrepend = undefined;
      this._routeMapOutLocalPref = undefined;
      this._routeMapInCidr.internalValue = undefined;
      this._routeMapOutCidr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autonomousSystem = value.autonomousSystem;
      this._ipAddress = value.ipAddress;
      this._routeMapInAsPathPrepend = value.routeMapInAsPathPrepend;
      this._routeMapInLocalPref = value.routeMapInLocalPref;
      this._routeMapOutAsPathPrepend = value.routeMapOutAsPathPrepend;
      this._routeMapOutLocalPref = value.routeMapOutLocalPref;
      this._routeMapInCidr.internalValue = value.routeMapInCidr;
      this._routeMapOutCidr.internalValue = value.routeMapOutCidr;
    }
  }

  // autonomous_system - computed: false, optional: false, required: true
  private _autonomousSystem?: number; 
  public get autonomousSystem() {
    return this.getNumberAttribute('autonomous_system');
  }
  public set autonomousSystem(value: number) {
    this._autonomousSystem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousSystemInput() {
    return this._autonomousSystem;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // route_map_in_as_path_prepend - computed: false, optional: true, required: false
  private _routeMapInAsPathPrepend?: number[]; 
  public get routeMapInAsPathPrepend() {
    return this.getNumberListAttribute('route_map_in_as_path_prepend');
  }
  public set routeMapInAsPathPrepend(value: number[]) {
    this._routeMapInAsPathPrepend = value;
  }
  public resetRouteMapInAsPathPrepend() {
    this._routeMapInAsPathPrepend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInAsPathPrependInput() {
    return this._routeMapInAsPathPrepend;
  }

  // route_map_in_local_pref - computed: false, optional: true, required: false
  private _routeMapInLocalPref?: number; 
  public get routeMapInLocalPref() {
    return this.getNumberAttribute('route_map_in_local_pref');
  }
  public set routeMapInLocalPref(value: number) {
    this._routeMapInLocalPref = value;
  }
  public resetRouteMapInLocalPref() {
    this._routeMapInLocalPref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInLocalPrefInput() {
    return this._routeMapInLocalPref;
  }

  // route_map_out_as_path_prepend - computed: false, optional: true, required: false
  private _routeMapOutAsPathPrepend?: number[]; 
  public get routeMapOutAsPathPrepend() {
    return this.getNumberListAttribute('route_map_out_as_path_prepend');
  }
  public set routeMapOutAsPathPrepend(value: number[]) {
    this._routeMapOutAsPathPrepend = value;
  }
  public resetRouteMapOutAsPathPrepend() {
    this._routeMapOutAsPathPrepend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapOutAsPathPrependInput() {
    return this._routeMapOutAsPathPrepend;
  }

  // route_map_out_local_pref - computed: false, optional: true, required: false
  private _routeMapOutLocalPref?: number; 
  public get routeMapOutLocalPref() {
    return this.getNumberAttribute('route_map_out_local_pref');
  }
  public set routeMapOutLocalPref(value: number) {
    this._routeMapOutLocalPref = value;
  }
  public resetRouteMapOutLocalPref() {
    this._routeMapOutLocalPref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapOutLocalPrefInput() {
    return this._routeMapOutLocalPref;
  }

  // route_map_in_cidr - computed: false, optional: true, required: false
  private _routeMapInCidr = new ProfileBgpNeighborRouteMapInCidrList(this, "route_map_in_cidr", false);
  public get routeMapInCidr() {
    return this._routeMapInCidr;
  }
  public putRouteMapInCidr(value: ProfileBgpNeighborRouteMapInCidr[] | cdktf.IResolvable) {
    this._routeMapInCidr.internalValue = value;
  }
  public resetRouteMapInCidr() {
    this._routeMapInCidr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInCidrInput() {
    return this._routeMapInCidr.internalValue;
  }

  // route_map_out_cidr - computed: false, optional: true, required: false
  private _routeMapOutCidr = new ProfileBgpNeighborRouteMapOutCidrList(this, "route_map_out_cidr", false);
  public get routeMapOutCidr() {
    return this._routeMapOutCidr;
  }
  public putRouteMapOutCidr(value: ProfileBgpNeighborRouteMapOutCidr[] | cdktf.IResolvable) {
    this._routeMapOutCidr.internalValue = value;
  }
  public resetRouteMapOutCidr() {
    this._routeMapOutCidr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapOutCidrInput() {
    return this._routeMapOutCidr.internalValue;
  }
}

export class ProfileBgpNeighborList extends cdktf.ComplexList {
  public internalValue? : ProfileBgpNeighbor[] | cdktf.IResolvable

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
  public get(index: number): ProfileBgpNeighborOutputReference {
    return new ProfileBgpNeighborOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_bgp ciscomcd_profile_bgp}
*/
export class ProfileBgp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciscomcd_profile_bgp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProfileBgp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProfileBgp to import
  * @param importFromId The id of the existing ProfileBgp that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_bgp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProfileBgp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciscomcd_profile_bgp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_bgp ciscomcd_profile_bgp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProfileBgpConfig
  */
  public constructor(scope: Construct, id: string, config: ProfileBgpConfig) {
    super(scope, id, {
      terraformResourceType: 'ciscomcd_profile_bgp',
      terraformGeneratorMetadata: {
        providerName: 'ciscomcd',
        providerVersion: '25.9.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._localAs = config.localAs;
    this._name = config.name;
    this._neighbor.internalValue = config.neighbor;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // local_as - computed: false, optional: false, required: true
  private _localAs?: number; 
  public get localAs() {
    return this.getNumberAttribute('local_as');
  }
  public set localAs(value: number) {
    this._localAs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsInput() {
    return this._localAs;
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

  // profile_id - computed: true, optional: false, required: false
  public get profileId() {
    return this.getNumberAttribute('profile_id');
  }

  // neighbor - computed: false, optional: true, required: false
  private _neighbor = new ProfileBgpNeighborList(this, "neighbor", false);
  public get neighbor() {
    return this._neighbor;
  }
  public putNeighbor(value: ProfileBgpNeighbor[] | cdktf.IResolvable) {
    this._neighbor.internalValue = value;
  }
  public resetNeighbor() {
    this._neighbor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborInput() {
    return this._neighbor.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      local_as: cdktf.numberToTerraform(this._localAs),
      name: cdktf.stringToTerraform(this._name),
      neighbor: cdktf.listMapper(profileBgpNeighborToTerraform, true)(this._neighbor.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_as: {
        value: cdktf.numberToHclTerraform(this._localAs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      neighbor: {
        value: cdktf.listMapperHcl(profileBgpNeighborToHclTerraform, true)(this._neighbor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProfileBgpNeighborList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
