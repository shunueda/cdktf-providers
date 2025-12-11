// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/static_routes_vrf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StaticRoutesVrfConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/static_routes_vrf#device StaticRoutesVrf#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/static_routes_vrf#routes StaticRoutesVrf#routes}
  */
  readonly routes?: StaticRoutesVrfRoutes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/static_routes_vrf#vrf StaticRoutesVrf#vrf}
  */
  readonly vrf: string;
}
export interface StaticRoutesVrfRoutesNextHops {
  /**
  * 
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/static_routes_vrf#distance StaticRoutesVrf#distance}
  */
  readonly distance?: number;
  /**
  * Next hop address is global
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/static_routes_vrf#global StaticRoutesVrf#global}
  */
  readonly global?: boolean | cdktf.IResolvable;
  /**
  * Specify name of the next hop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/static_routes_vrf#name StaticRoutesVrf#name}
  */
  readonly name?: string;
  /**
  * Specify the next hop as an ip-address or interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/static_routes_vrf#next_hop StaticRoutesVrf#next_hop}
  */
  readonly nextHop: string;
  /**
  * permanent route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/static_routes_vrf#permanent StaticRoutesVrf#permanent}
  */
  readonly permanent?: boolean | cdktf.IResolvable;
  /**
  * Set tag for this route
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/static_routes_vrf#tag StaticRoutesVrf#tag}
  */
  readonly tag?: number;
}

export function staticRoutesVrfRoutesNextHopsToTerraform(struct?: StaticRoutesVrfRoutesNextHops | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distance: cdktf.numberToTerraform(struct!.distance),
    global: cdktf.booleanToTerraform(struct!.global),
    name: cdktf.stringToTerraform(struct!.name),
    next_hop: cdktf.stringToTerraform(struct!.nextHop),
    permanent: cdktf.booleanToTerraform(struct!.permanent),
    tag: cdktf.numberToTerraform(struct!.tag),
  }
}


export function staticRoutesVrfRoutesNextHopsToHclTerraform(struct?: StaticRoutesVrfRoutesNextHops | cdktf.IResolvable): any {
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
    global: {
      value: cdktf.booleanToHclTerraform(struct!.global),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop: {
      value: cdktf.stringToHclTerraform(struct!.nextHop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permanent: {
      value: cdktf.booleanToHclTerraform(struct!.permanent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tag: {
      value: cdktf.numberToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StaticRoutesVrfRoutesNextHopsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StaticRoutesVrfRoutesNextHops | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distance !== undefined) {
      hasAnyValues = true;
      internalValueResult.distance = this._distance;
    }
    if (this._global !== undefined) {
      hasAnyValues = true;
      internalValueResult.global = this._global;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop;
    }
    if (this._permanent !== undefined) {
      hasAnyValues = true;
      internalValueResult.permanent = this._permanent;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StaticRoutesVrfRoutesNextHops | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distance = undefined;
      this._global = undefined;
      this._name = undefined;
      this._nextHop = undefined;
      this._permanent = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distance = value.distance;
      this._global = value.global;
      this._name = value.name;
      this._nextHop = value.nextHop;
      this._permanent = value.permanent;
      this._tag = value.tag;
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

  // global - computed: false, optional: true, required: false
  private _global?: boolean | cdktf.IResolvable; 
  public get global() {
    return this.getBooleanAttribute('global');
  }
  public set global(value: boolean | cdktf.IResolvable) {
    this._global = value;
  }
  public resetGlobal() {
    this._global = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInput() {
    return this._global;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // next_hop - computed: false, optional: false, required: true
  private _nextHop?: string; 
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }
  public set nextHop(value: string) {
    this._nextHop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop;
  }

  // permanent - computed: false, optional: true, required: false
  private _permanent?: boolean | cdktf.IResolvable; 
  public get permanent() {
    return this.getBooleanAttribute('permanent');
  }
  public set permanent(value: boolean | cdktf.IResolvable) {
    this._permanent = value;
  }
  public resetPermanent() {
    this._permanent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permanentInput() {
    return this._permanent;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: number; 
  public get tag() {
    return this.getNumberAttribute('tag');
  }
  public set tag(value: number) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class StaticRoutesVrfRoutesNextHopsList extends cdktf.ComplexList {
  public internalValue? : StaticRoutesVrfRoutesNextHops[] | cdktf.IResolvable

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
  public get(index: number): StaticRoutesVrfRoutesNextHopsOutputReference {
    return new StaticRoutesVrfRoutesNextHopsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StaticRoutesVrfRoutesNextHopsWithTrack {
  /**
  * 
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/static_routes_vrf#distance StaticRoutesVrf#distance}
  */
  readonly distance?: number;
  /**
  * Specify name of the next hop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/static_routes_vrf#name StaticRoutesVrf#name}
  */
  readonly name?: string;
  /**
  * Specify the next hop as an ip-address or interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/static_routes_vrf#next_hop StaticRoutesVrf#next_hop}
  */
  readonly nextHop: string;
  /**
  * permanent route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/static_routes_vrf#permanent StaticRoutesVrf#permanent}
  */
  readonly permanent?: boolean | cdktf.IResolvable;
  /**
  * Set tag for this route
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/static_routes_vrf#tag StaticRoutesVrf#tag}
  */
  readonly tag?: number;
  /**
  * Track number
  *   - Range: `1`-`1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/static_routes_vrf#track_id_name StaticRoutesVrf#track_id_name}
  */
  readonly trackIdName?: number;
}

export function staticRoutesVrfRoutesNextHopsWithTrackToTerraform(struct?: StaticRoutesVrfRoutesNextHopsWithTrack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distance: cdktf.numberToTerraform(struct!.distance),
    name: cdktf.stringToTerraform(struct!.name),
    next_hop: cdktf.stringToTerraform(struct!.nextHop),
    permanent: cdktf.booleanToTerraform(struct!.permanent),
    tag: cdktf.numberToTerraform(struct!.tag),
    track_id_name: cdktf.numberToTerraform(struct!.trackIdName),
  }
}


export function staticRoutesVrfRoutesNextHopsWithTrackToHclTerraform(struct?: StaticRoutesVrfRoutesNextHopsWithTrack | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop: {
      value: cdktf.stringToHclTerraform(struct!.nextHop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permanent: {
      value: cdktf.booleanToHclTerraform(struct!.permanent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tag: {
      value: cdktf.numberToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    track_id_name: {
      value: cdktf.numberToHclTerraform(struct!.trackIdName),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StaticRoutesVrfRoutesNextHopsWithTrackOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StaticRoutesVrfRoutesNextHopsWithTrack | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distance !== undefined) {
      hasAnyValues = true;
      internalValueResult.distance = this._distance;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop;
    }
    if (this._permanent !== undefined) {
      hasAnyValues = true;
      internalValueResult.permanent = this._permanent;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._trackIdName !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackIdName = this._trackIdName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StaticRoutesVrfRoutesNextHopsWithTrack | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distance = undefined;
      this._name = undefined;
      this._nextHop = undefined;
      this._permanent = undefined;
      this._tag = undefined;
      this._trackIdName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distance = value.distance;
      this._name = value.name;
      this._nextHop = value.nextHop;
      this._permanent = value.permanent;
      this._tag = value.tag;
      this._trackIdName = value.trackIdName;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // next_hop - computed: false, optional: false, required: true
  private _nextHop?: string; 
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }
  public set nextHop(value: string) {
    this._nextHop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop;
  }

  // permanent - computed: false, optional: true, required: false
  private _permanent?: boolean | cdktf.IResolvable; 
  public get permanent() {
    return this.getBooleanAttribute('permanent');
  }
  public set permanent(value: boolean | cdktf.IResolvable) {
    this._permanent = value;
  }
  public resetPermanent() {
    this._permanent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permanentInput() {
    return this._permanent;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: number; 
  public get tag() {
    return this.getNumberAttribute('tag');
  }
  public set tag(value: number) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // track_id_name - computed: false, optional: true, required: false
  private _trackIdName?: number; 
  public get trackIdName() {
    return this.getNumberAttribute('track_id_name');
  }
  public set trackIdName(value: number) {
    this._trackIdName = value;
  }
  public resetTrackIdName() {
    this._trackIdName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackIdNameInput() {
    return this._trackIdName;
  }
}

export class StaticRoutesVrfRoutesNextHopsWithTrackList extends cdktf.ComplexList {
  public internalValue? : StaticRoutesVrfRoutesNextHopsWithTrack[] | cdktf.IResolvable

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
  public get(index: number): StaticRoutesVrfRoutesNextHopsWithTrackOutputReference {
    return new StaticRoutesVrfRoutesNextHopsWithTrackOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StaticRoutesVrfRoutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/static_routes_vrf#mask StaticRoutesVrf#mask}
  */
  readonly mask: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/static_routes_vrf#next_hops StaticRoutesVrf#next_hops}
  */
  readonly nextHops?: StaticRoutesVrfRoutesNextHops[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/static_routes_vrf#next_hops_with_track StaticRoutesVrf#next_hops_with_track}
  */
  readonly nextHopsWithTrack?: StaticRoutesVrfRoutesNextHopsWithTrack[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/static_routes_vrf#prefix StaticRoutesVrf#prefix}
  */
  readonly prefix: string;
}

export function staticRoutesVrfRoutesToTerraform(struct?: StaticRoutesVrfRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    next_hops: cdktf.listMapper(staticRoutesVrfRoutesNextHopsToTerraform, false)(struct!.nextHops),
    next_hops_with_track: cdktf.listMapper(staticRoutesVrfRoutesNextHopsWithTrackToTerraform, false)(struct!.nextHopsWithTrack),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function staticRoutesVrfRoutesToHclTerraform(struct?: StaticRoutesVrfRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hops: {
      value: cdktf.listMapperHcl(staticRoutesVrfRoutesNextHopsToHclTerraform, false)(struct!.nextHops),
      isBlock: true,
      type: "list",
      storageClassType: "StaticRoutesVrfRoutesNextHopsList",
    },
    next_hops_with_track: {
      value: cdktf.listMapperHcl(staticRoutesVrfRoutesNextHopsWithTrackToHclTerraform, false)(struct!.nextHopsWithTrack),
      isBlock: true,
      type: "list",
      storageClassType: "StaticRoutesVrfRoutesNextHopsWithTrackList",
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

export class StaticRoutesVrfRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StaticRoutesVrfRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._nextHops?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHops = this._nextHops?.internalValue;
    }
    if (this._nextHopsWithTrack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopsWithTrack = this._nextHopsWithTrack?.internalValue;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StaticRoutesVrfRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._nextHops.internalValue = undefined;
      this._nextHopsWithTrack.internalValue = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._nextHops.internalValue = value.nextHops;
      this._nextHopsWithTrack.internalValue = value.nextHopsWithTrack;
      this._prefix = value.prefix;
    }
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

  // next_hops - computed: false, optional: true, required: false
  private _nextHops = new StaticRoutesVrfRoutesNextHopsList(this, "next_hops", false);
  public get nextHops() {
    return this._nextHops;
  }
  public putNextHops(value: StaticRoutesVrfRoutesNextHops[] | cdktf.IResolvable) {
    this._nextHops.internalValue = value;
  }
  public resetNextHops() {
    this._nextHops.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopsInput() {
    return this._nextHops.internalValue;
  }

  // next_hops_with_track - computed: false, optional: true, required: false
  private _nextHopsWithTrack = new StaticRoutesVrfRoutesNextHopsWithTrackList(this, "next_hops_with_track", false);
  public get nextHopsWithTrack() {
    return this._nextHopsWithTrack;
  }
  public putNextHopsWithTrack(value: StaticRoutesVrfRoutesNextHopsWithTrack[] | cdktf.IResolvable) {
    this._nextHopsWithTrack.internalValue = value;
  }
  public resetNextHopsWithTrack() {
    this._nextHopsWithTrack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopsWithTrackInput() {
    return this._nextHopsWithTrack.internalValue;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class StaticRoutesVrfRoutesList extends cdktf.ComplexList {
  public internalValue? : StaticRoutesVrfRoutes[] | cdktf.IResolvable

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
  public get(index: number): StaticRoutesVrfRoutesOutputReference {
    return new StaticRoutesVrfRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/static_routes_vrf iosxe_static_routes_vrf}
*/
export class StaticRoutesVrf extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_static_routes_vrf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StaticRoutesVrf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StaticRoutesVrf to import
  * @param importFromId The id of the existing StaticRoutesVrf that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/static_routes_vrf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StaticRoutesVrf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_static_routes_vrf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/static_routes_vrf iosxe_static_routes_vrf} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StaticRoutesVrfConfig
  */
  public constructor(scope: Construct, id: string, config: StaticRoutesVrfConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_static_routes_vrf',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._routes.internalValue = config.routes;
    this._vrf = config.vrf;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // routes - computed: false, optional: true, required: false
  private _routes = new StaticRoutesVrfRoutesList(this, "routes", false);
  public get routes() {
    return this._routes;
  }
  public putRoutes(value: StaticRoutesVrfRoutes[] | cdktf.IResolvable) {
    this._routes.internalValue = value;
  }
  public resetRoutes() {
    this._routes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes.internalValue;
  }

  // vrf - computed: false, optional: false, required: true
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      routes: cdktf.listMapper(staticRoutesVrfRoutesToTerraform, false)(this._routes.internalValue),
      vrf: cdktf.stringToTerraform(this._vrf),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routes: {
        value: cdktf.listMapperHcl(staticRoutesVrfRoutesToHclTerraform, false)(this._routes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StaticRoutesVrfRoutesList",
      },
      vrf: {
        value: cdktf.stringToHclTerraform(this._vrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
