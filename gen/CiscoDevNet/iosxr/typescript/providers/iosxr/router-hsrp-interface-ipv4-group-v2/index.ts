// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_hsrp_interface_ipv4_group_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterHsrpInterfaceIpv4GroupV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Hot standby IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_hsrp_interface_ipv4_group_v2#address RouterHsrpInterfaceIpv4GroupV2#address}
  */
  readonly address?: string;
  /**
  * Learn virtual IP address from peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_hsrp_interface_ipv4_group_v2#address_learn RouterHsrpInterfaceIpv4GroupV2#address_learn}
  */
  readonly addressLearn?: boolean | cdktf.IResolvable;
  /**
  * Select an interface over which to run BFD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_hsrp_interface_ipv4_group_v2#bfd_fast_detect_peer_interface RouterHsrpInterfaceIpv4GroupV2#bfd_fast_detect_peer_interface}
  */
  readonly bfdFastDetectPeerInterface?: string;
  /**
  * BFD peer interface IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_hsrp_interface_ipv4_group_v2#bfd_fast_detect_peer_ipv4 RouterHsrpInterfaceIpv4GroupV2#bfd_fast_detect_peer_ipv4}
  */
  readonly bfdFastDetectPeerIpv4?: string;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_hsrp_interface_ipv4_group_v2#delete_mode RouterHsrpInterfaceIpv4GroupV2#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_hsrp_interface_ipv4_group_v2#device RouterHsrpInterfaceIpv4GroupV2#device}
  */
  readonly device?: string;
  /**
  * group number version 2
  *   - Range: `0`-`4095`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_hsrp_interface_ipv4_group_v2#group_id RouterHsrpInterfaceIpv4GroupV2#group_id}
  */
  readonly groupId: number;
  /**
  * HSRP interface configuration subcommands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_hsrp_interface_ipv4_group_v2#interface_name RouterHsrpInterfaceIpv4GroupV2#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Use specified mac address for the virtual router
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_hsrp_interface_ipv4_group_v2#mac_address RouterHsrpInterfaceIpv4GroupV2#mac_address}
  */
  readonly macAddress?: string;
  /**
  * MGO session name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_hsrp_interface_ipv4_group_v2#name RouterHsrpInterfaceIpv4GroupV2#name}
  */
  readonly name?: string;
  /**
  * Wait before preempting
  *   - Range: `0`-`3600`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_hsrp_interface_ipv4_group_v2#preempt_delay RouterHsrpInterfaceIpv4GroupV2#preempt_delay}
  */
  readonly preemptDelay?: number;
  /**
  * Priority level
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_hsrp_interface_ipv4_group_v2#priority RouterHsrpInterfaceIpv4GroupV2#priority}
  */
  readonly priority?: number;
  /**
  * Set secondary hot standby IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_hsrp_interface_ipv4_group_v2#secondary_ipv4_addresses RouterHsrpInterfaceIpv4GroupV2#secondary_ipv4_addresses}
  */
  readonly secondaryIpv4Addresses?: RouterHsrpInterfaceIpv4GroupV2SecondaryIpv4Addresses[] | cdktf.IResolvable;
  /**
  * Specify hellotime in milliseconds
  *   - Range: `100`-`3000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_hsrp_interface_ipv4_group_v2#timers_msec RouterHsrpInterfaceIpv4GroupV2#timers_msec}
  */
  readonly timersMsec?: number;
  /**
  * Specify hold time in milliseconds
  *   - Range: `100`-`3000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_hsrp_interface_ipv4_group_v2#timers_msec_holdtime RouterHsrpInterfaceIpv4GroupV2#timers_msec_holdtime}
  */
  readonly timersMsecHoldtime?: number;
  /**
  * Hold time in seconds
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_hsrp_interface_ipv4_group_v2#timers_seconds RouterHsrpInterfaceIpv4GroupV2#timers_seconds}
  */
  readonly timersSeconds?: number;
  /**
  * Hold time in seconds
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_hsrp_interface_ipv4_group_v2#timers_seconds_holdtime RouterHsrpInterfaceIpv4GroupV2#timers_seconds_holdtime}
  */
  readonly timersSecondsHoldtime?: number;
  /**
  * Configure tracking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_hsrp_interface_ipv4_group_v2#track_interfaces RouterHsrpInterfaceIpv4GroupV2#track_interfaces}
  */
  readonly trackInterfaces?: RouterHsrpInterfaceIpv4GroupV2TrackInterfaces[] | cdktf.IResolvable;
  /**
  * Object tracking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_hsrp_interface_ipv4_group_v2#track_objects RouterHsrpInterfaceIpv4GroupV2#track_objects}
  */
  readonly trackObjects?: RouterHsrpInterfaceIpv4GroupV2TrackObjects[] | cdktf.IResolvable;
}
export interface RouterHsrpInterfaceIpv4GroupV2SecondaryIpv4Addresses {
  /**
  * Set secondary hot standby IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_hsrp_interface_ipv4_group_v2#address RouterHsrpInterfaceIpv4GroupV2#address}
  */
  readonly address: string;
}

export function routerHsrpInterfaceIpv4GroupV2SecondaryIpv4AddressesToTerraform(struct?: RouterHsrpInterfaceIpv4GroupV2SecondaryIpv4Addresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
  }
}


export function routerHsrpInterfaceIpv4GroupV2SecondaryIpv4AddressesToHclTerraform(struct?: RouterHsrpInterfaceIpv4GroupV2SecondaryIpv4Addresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterHsrpInterfaceIpv4GroupV2SecondaryIpv4AddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterHsrpInterfaceIpv4GroupV2SecondaryIpv4Addresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterHsrpInterfaceIpv4GroupV2SecondaryIpv4Addresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }
}

export class RouterHsrpInterfaceIpv4GroupV2SecondaryIpv4AddressesList extends cdktf.ComplexList {
  public internalValue? : RouterHsrpInterfaceIpv4GroupV2SecondaryIpv4Addresses[] | cdktf.IResolvable

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
  public get(index: number): RouterHsrpInterfaceIpv4GroupV2SecondaryIpv4AddressesOutputReference {
    return new RouterHsrpInterfaceIpv4GroupV2SecondaryIpv4AddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterHsrpInterfaceIpv4GroupV2TrackInterfaces {
  /**
  * Priority decrement
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_hsrp_interface_ipv4_group_v2#priority_decrement RouterHsrpInterfaceIpv4GroupV2#priority_decrement}
  */
  readonly priorityDecrement: number;
  /**
  * Configure tracking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_hsrp_interface_ipv4_group_v2#track_name RouterHsrpInterfaceIpv4GroupV2#track_name}
  */
  readonly trackName: string;
}

export function routerHsrpInterfaceIpv4GroupV2TrackInterfacesToTerraform(struct?: RouterHsrpInterfaceIpv4GroupV2TrackInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority_decrement: cdktf.numberToTerraform(struct!.priorityDecrement),
    track_name: cdktf.stringToTerraform(struct!.trackName),
  }
}


export function routerHsrpInterfaceIpv4GroupV2TrackInterfacesToHclTerraform(struct?: RouterHsrpInterfaceIpv4GroupV2TrackInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    priority_decrement: {
      value: cdktf.numberToHclTerraform(struct!.priorityDecrement),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    track_name: {
      value: cdktf.stringToHclTerraform(struct!.trackName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterHsrpInterfaceIpv4GroupV2TrackInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterHsrpInterfaceIpv4GroupV2TrackInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priorityDecrement !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityDecrement = this._priorityDecrement;
    }
    if (this._trackName !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackName = this._trackName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterHsrpInterfaceIpv4GroupV2TrackInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._priorityDecrement = undefined;
      this._trackName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._priorityDecrement = value.priorityDecrement;
      this._trackName = value.trackName;
    }
  }

  // priority_decrement - computed: false, optional: false, required: true
  private _priorityDecrement?: number; 
  public get priorityDecrement() {
    return this.getNumberAttribute('priority_decrement');
  }
  public set priorityDecrement(value: number) {
    this._priorityDecrement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityDecrementInput() {
    return this._priorityDecrement;
  }

  // track_name - computed: false, optional: false, required: true
  private _trackName?: string; 
  public get trackName() {
    return this.getStringAttribute('track_name');
  }
  public set trackName(value: string) {
    this._trackName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trackNameInput() {
    return this._trackName;
  }
}

export class RouterHsrpInterfaceIpv4GroupV2TrackInterfacesList extends cdktf.ComplexList {
  public internalValue? : RouterHsrpInterfaceIpv4GroupV2TrackInterfaces[] | cdktf.IResolvable

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
  public get(index: number): RouterHsrpInterfaceIpv4GroupV2TrackInterfacesOutputReference {
    return new RouterHsrpInterfaceIpv4GroupV2TrackInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterHsrpInterfaceIpv4GroupV2TrackObjects {
  /**
  * Object tracking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_hsrp_interface_ipv4_group_v2#object_name RouterHsrpInterfaceIpv4GroupV2#object_name}
  */
  readonly objectName: string;
  /**
  * Priority decrement
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_hsrp_interface_ipv4_group_v2#priority_decrement RouterHsrpInterfaceIpv4GroupV2#priority_decrement}
  */
  readonly priorityDecrement: number;
}

export function routerHsrpInterfaceIpv4GroupV2TrackObjectsToTerraform(struct?: RouterHsrpInterfaceIpv4GroupV2TrackObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_name: cdktf.stringToTerraform(struct!.objectName),
    priority_decrement: cdktf.numberToTerraform(struct!.priorityDecrement),
  }
}


export function routerHsrpInterfaceIpv4GroupV2TrackObjectsToHclTerraform(struct?: RouterHsrpInterfaceIpv4GroupV2TrackObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_name: {
      value: cdktf.stringToHclTerraform(struct!.objectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority_decrement: {
      value: cdktf.numberToHclTerraform(struct!.priorityDecrement),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterHsrpInterfaceIpv4GroupV2TrackObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterHsrpInterfaceIpv4GroupV2TrackObjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectName = this._objectName;
    }
    if (this._priorityDecrement !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityDecrement = this._priorityDecrement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterHsrpInterfaceIpv4GroupV2TrackObjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectName = undefined;
      this._priorityDecrement = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectName = value.objectName;
      this._priorityDecrement = value.priorityDecrement;
    }
  }

  // object_name - computed: false, optional: false, required: true
  private _objectName?: string; 
  public get objectName() {
    return this.getStringAttribute('object_name');
  }
  public set objectName(value: string) {
    this._objectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNameInput() {
    return this._objectName;
  }

  // priority_decrement - computed: false, optional: false, required: true
  private _priorityDecrement?: number; 
  public get priorityDecrement() {
    return this.getNumberAttribute('priority_decrement');
  }
  public set priorityDecrement(value: number) {
    this._priorityDecrement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityDecrementInput() {
    return this._priorityDecrement;
  }
}

export class RouterHsrpInterfaceIpv4GroupV2TrackObjectsList extends cdktf.ComplexList {
  public internalValue? : RouterHsrpInterfaceIpv4GroupV2TrackObjects[] | cdktf.IResolvable

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
  public get(index: number): RouterHsrpInterfaceIpv4GroupV2TrackObjectsOutputReference {
    return new RouterHsrpInterfaceIpv4GroupV2TrackObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_hsrp_interface_ipv4_group_v2 iosxr_router_hsrp_interface_ipv4_group_v2}
*/
export class RouterHsrpInterfaceIpv4GroupV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_router_hsrp_interface_ipv4_group_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterHsrpInterfaceIpv4GroupV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterHsrpInterfaceIpv4GroupV2 to import
  * @param importFromId The id of the existing RouterHsrpInterfaceIpv4GroupV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_hsrp_interface_ipv4_group_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterHsrpInterfaceIpv4GroupV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_router_hsrp_interface_ipv4_group_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_hsrp_interface_ipv4_group_v2 iosxr_router_hsrp_interface_ipv4_group_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterHsrpInterfaceIpv4GroupV2Config
  */
  public constructor(scope: Construct, id: string, config: RouterHsrpInterfaceIpv4GroupV2Config) {
    super(scope, id, {
      terraformResourceType: 'iosxr_router_hsrp_interface_ipv4_group_v2',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._addressLearn = config.addressLearn;
    this._bfdFastDetectPeerInterface = config.bfdFastDetectPeerInterface;
    this._bfdFastDetectPeerIpv4 = config.bfdFastDetectPeerIpv4;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._groupId = config.groupId;
    this._interfaceName = config.interfaceName;
    this._macAddress = config.macAddress;
    this._name = config.name;
    this._preemptDelay = config.preemptDelay;
    this._priority = config.priority;
    this._secondaryIpv4Addresses.internalValue = config.secondaryIpv4Addresses;
    this._timersMsec = config.timersMsec;
    this._timersMsecHoldtime = config.timersMsecHoldtime;
    this._timersSeconds = config.timersSeconds;
    this._timersSecondsHoldtime = config.timersSecondsHoldtime;
    this._trackInterfaces.internalValue = config.trackInterfaces;
    this._trackObjects.internalValue = config.trackObjects;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // address_learn - computed: false, optional: true, required: false
  private _addressLearn?: boolean | cdktf.IResolvable; 
  public get addressLearn() {
    return this.getBooleanAttribute('address_learn');
  }
  public set addressLearn(value: boolean | cdktf.IResolvable) {
    this._addressLearn = value;
  }
  public resetAddressLearn() {
    this._addressLearn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressLearnInput() {
    return this._addressLearn;
  }

  // bfd_fast_detect_peer_interface - computed: false, optional: true, required: false
  private _bfdFastDetectPeerInterface?: string; 
  public get bfdFastDetectPeerInterface() {
    return this.getStringAttribute('bfd_fast_detect_peer_interface');
  }
  public set bfdFastDetectPeerInterface(value: string) {
    this._bfdFastDetectPeerInterface = value;
  }
  public resetBfdFastDetectPeerInterface() {
    this._bfdFastDetectPeerInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdFastDetectPeerInterfaceInput() {
    return this._bfdFastDetectPeerInterface;
  }

  // bfd_fast_detect_peer_ipv4 - computed: false, optional: true, required: false
  private _bfdFastDetectPeerIpv4?: string; 
  public get bfdFastDetectPeerIpv4() {
    return this.getStringAttribute('bfd_fast_detect_peer_ipv4');
  }
  public set bfdFastDetectPeerIpv4(value: string) {
    this._bfdFastDetectPeerIpv4 = value;
  }
  public resetBfdFastDetectPeerIpv4() {
    this._bfdFastDetectPeerIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdFastDetectPeerIpv4Input() {
    return this._bfdFastDetectPeerIpv4;
  }

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
  }

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

  // group_id - computed: false, optional: false, required: true
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_name - computed: false, optional: false, required: true
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // mac_address - computed: false, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
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

  // preempt_delay - computed: false, optional: true, required: false
  private _preemptDelay?: number; 
  public get preemptDelay() {
    return this.getNumberAttribute('preempt_delay');
  }
  public set preemptDelay(value: number) {
    this._preemptDelay = value;
  }
  public resetPreemptDelay() {
    this._preemptDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptDelayInput() {
    return this._preemptDelay;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // secondary_ipv4_addresses - computed: false, optional: true, required: false
  private _secondaryIpv4Addresses = new RouterHsrpInterfaceIpv4GroupV2SecondaryIpv4AddressesList(this, "secondary_ipv4_addresses", false);
  public get secondaryIpv4Addresses() {
    return this._secondaryIpv4Addresses;
  }
  public putSecondaryIpv4Addresses(value: RouterHsrpInterfaceIpv4GroupV2SecondaryIpv4Addresses[] | cdktf.IResolvable) {
    this._secondaryIpv4Addresses.internalValue = value;
  }
  public resetSecondaryIpv4Addresses() {
    this._secondaryIpv4Addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryIpv4AddressesInput() {
    return this._secondaryIpv4Addresses.internalValue;
  }

  // timers_msec - computed: false, optional: true, required: false
  private _timersMsec?: number; 
  public get timersMsec() {
    return this.getNumberAttribute('timers_msec');
  }
  public set timersMsec(value: number) {
    this._timersMsec = value;
  }
  public resetTimersMsec() {
    this._timersMsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersMsecInput() {
    return this._timersMsec;
  }

  // timers_msec_holdtime - computed: false, optional: true, required: false
  private _timersMsecHoldtime?: number; 
  public get timersMsecHoldtime() {
    return this.getNumberAttribute('timers_msec_holdtime');
  }
  public set timersMsecHoldtime(value: number) {
    this._timersMsecHoldtime = value;
  }
  public resetTimersMsecHoldtime() {
    this._timersMsecHoldtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersMsecHoldtimeInput() {
    return this._timersMsecHoldtime;
  }

  // timers_seconds - computed: false, optional: true, required: false
  private _timersSeconds?: number; 
  public get timersSeconds() {
    return this.getNumberAttribute('timers_seconds');
  }
  public set timersSeconds(value: number) {
    this._timersSeconds = value;
  }
  public resetTimersSeconds() {
    this._timersSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersSecondsInput() {
    return this._timersSeconds;
  }

  // timers_seconds_holdtime - computed: false, optional: true, required: false
  private _timersSecondsHoldtime?: number; 
  public get timersSecondsHoldtime() {
    return this.getNumberAttribute('timers_seconds_holdtime');
  }
  public set timersSecondsHoldtime(value: number) {
    this._timersSecondsHoldtime = value;
  }
  public resetTimersSecondsHoldtime() {
    this._timersSecondsHoldtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersSecondsHoldtimeInput() {
    return this._timersSecondsHoldtime;
  }

  // track_interfaces - computed: false, optional: true, required: false
  private _trackInterfaces = new RouterHsrpInterfaceIpv4GroupV2TrackInterfacesList(this, "track_interfaces", false);
  public get trackInterfaces() {
    return this._trackInterfaces;
  }
  public putTrackInterfaces(value: RouterHsrpInterfaceIpv4GroupV2TrackInterfaces[] | cdktf.IResolvable) {
    this._trackInterfaces.internalValue = value;
  }
  public resetTrackInterfaces() {
    this._trackInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackInterfacesInput() {
    return this._trackInterfaces.internalValue;
  }

  // track_objects - computed: false, optional: true, required: false
  private _trackObjects = new RouterHsrpInterfaceIpv4GroupV2TrackObjectsList(this, "track_objects", false);
  public get trackObjects() {
    return this._trackObjects;
  }
  public putTrackObjects(value: RouterHsrpInterfaceIpv4GroupV2TrackObjects[] | cdktf.IResolvable) {
    this._trackObjects.internalValue = value;
  }
  public resetTrackObjects() {
    this._trackObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackObjectsInput() {
    return this._trackObjects.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      address_learn: cdktf.booleanToTerraform(this._addressLearn),
      bfd_fast_detect_peer_interface: cdktf.stringToTerraform(this._bfdFastDetectPeerInterface),
      bfd_fast_detect_peer_ipv4: cdktf.stringToTerraform(this._bfdFastDetectPeerIpv4),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      group_id: cdktf.numberToTerraform(this._groupId),
      interface_name: cdktf.stringToTerraform(this._interfaceName),
      mac_address: cdktf.stringToTerraform(this._macAddress),
      name: cdktf.stringToTerraform(this._name),
      preempt_delay: cdktf.numberToTerraform(this._preemptDelay),
      priority: cdktf.numberToTerraform(this._priority),
      secondary_ipv4_addresses: cdktf.listMapper(routerHsrpInterfaceIpv4GroupV2SecondaryIpv4AddressesToTerraform, false)(this._secondaryIpv4Addresses.internalValue),
      timers_msec: cdktf.numberToTerraform(this._timersMsec),
      timers_msec_holdtime: cdktf.numberToTerraform(this._timersMsecHoldtime),
      timers_seconds: cdktf.numberToTerraform(this._timersSeconds),
      timers_seconds_holdtime: cdktf.numberToTerraform(this._timersSecondsHoldtime),
      track_interfaces: cdktf.listMapper(routerHsrpInterfaceIpv4GroupV2TrackInterfacesToTerraform, false)(this._trackInterfaces.internalValue),
      track_objects: cdktf.listMapper(routerHsrpInterfaceIpv4GroupV2TrackObjectsToTerraform, false)(this._trackObjects.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address_learn: {
        value: cdktf.booleanToHclTerraform(this._addressLearn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bfd_fast_detect_peer_interface: {
        value: cdktf.stringToHclTerraform(this._bfdFastDetectPeerInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bfd_fast_detect_peer_ipv4: {
        value: cdktf.stringToHclTerraform(this._bfdFastDetectPeerIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.numberToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      interface_name: {
        value: cdktf.stringToHclTerraform(this._interfaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_address: {
        value: cdktf.stringToHclTerraform(this._macAddress),
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
      preempt_delay: {
        value: cdktf.numberToHclTerraform(this._preemptDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secondary_ipv4_addresses: {
        value: cdktf.listMapperHcl(routerHsrpInterfaceIpv4GroupV2SecondaryIpv4AddressesToHclTerraform, false)(this._secondaryIpv4Addresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterHsrpInterfaceIpv4GroupV2SecondaryIpv4AddressesList",
      },
      timers_msec: {
        value: cdktf.numberToHclTerraform(this._timersMsec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timers_msec_holdtime: {
        value: cdktf.numberToHclTerraform(this._timersMsecHoldtime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timers_seconds: {
        value: cdktf.numberToHclTerraform(this._timersSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timers_seconds_holdtime: {
        value: cdktf.numberToHclTerraform(this._timersSecondsHoldtime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      track_interfaces: {
        value: cdktf.listMapperHcl(routerHsrpInterfaceIpv4GroupV2TrackInterfacesToHclTerraform, false)(this._trackInterfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterHsrpInterfaceIpv4GroupV2TrackInterfacesList",
      },
      track_objects: {
        value: cdktf.listMapperHcl(routerHsrpInterfaceIpv4GroupV2TrackObjectsToHclTerraform, false)(this._trackObjects.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterHsrpInterfaceIpv4GroupV2TrackObjectsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
