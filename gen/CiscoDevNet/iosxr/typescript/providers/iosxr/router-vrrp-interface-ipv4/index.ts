// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv4
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterVrrpInterfaceIpv4Config extends cdktf.TerraformMetaArguments {
  /**
  * Disable accept mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv4#accept_mode_disable RouterVrrpInterfaceIpv4#accept_mode_disable}
  */
  readonly acceptModeDisable?: boolean | cdktf.IResolvable;
  /**
  * Enable VRRP and specify IP address(es)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv4#address RouterVrrpInterfaceIpv4#address}
  */
  readonly address?: string;
  /**
  * BFD peer interface IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv4#bfd_fast_detect_peer_ipv4 RouterVrrpInterfaceIpv4#bfd_fast_detect_peer_ipv4}
  */
  readonly bfdFastDetectPeerIpv4?: string;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv4#delete_mode RouterVrrpInterfaceIpv4#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv4#device RouterVrrpInterfaceIpv4#device}
  */
  readonly device?: string;
  /**
  * VRRP interface configuration subcommands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv4#interface_name RouterVrrpInterfaceIpv4#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Configure VRRP Session name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv4#name RouterVrrpInterfaceIpv4#name}
  */
  readonly name?: string;
  /**
  * Wait before preempting
  *   - Range: `1`-`3600`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv4#preempt_delay RouterVrrpInterfaceIpv4#preempt_delay}
  */
  readonly preemptDelay?: number;
  /**
  * Disable preemption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv4#preempt_disable RouterVrrpInterfaceIpv4#preempt_disable}
  */
  readonly preemptDisable?: boolean | cdktf.IResolvable;
  /**
  * Set priority level
  *   - Range: `1`-`254`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv4#priority RouterVrrpInterfaceIpv4#priority}
  */
  readonly priority?: number;
  /**
  * VRRP IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv4#secondary_addresses RouterVrrpInterfaceIpv4#secondary_addresses}
  */
  readonly secondaryAddresses?: RouterVrrpInterfaceIpv4SecondaryAddresses[] | cdktf.IResolvable;
  /**
  * Set plain text authentication string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv4#text_authentication RouterVrrpInterfaceIpv4#text_authentication}
  */
  readonly textAuthentication?: string;
  /**
  * Configure in milliseconds
  *   - Range: `100`-`40950`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv4#timer_advertisement_milliseconds RouterVrrpInterfaceIpv4#timer_advertisement_milliseconds}
  */
  readonly timerAdvertisementMilliseconds?: number;
  /**
  * Advertisement time in seconds
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv4#timer_advertisement_seconds RouterVrrpInterfaceIpv4#timer_advertisement_seconds}
  */
  readonly timerAdvertisementSeconds?: number;
  /**
  * Force the configured values to be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv4#timer_force RouterVrrpInterfaceIpv4#timer_force}
  */
  readonly timerForce?: boolean | cdktf.IResolvable;
  /**
  * Track an interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv4#track_interfaces RouterVrrpInterfaceIpv4#track_interfaces}
  */
  readonly trackInterfaces?: RouterVrrpInterfaceIpv4TrackInterfaces[] | cdktf.IResolvable;
  /**
  * Object Tracking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv4#track_objects RouterVrrpInterfaceIpv4#track_objects}
  */
  readonly trackObjects?: RouterVrrpInterfaceIpv4TrackObjects[] | cdktf.IResolvable;
  /**
  * VRRP version
  *   - Range: `2`-`3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv4#version RouterVrrpInterfaceIpv4#version}
  */
  readonly version: number;
  /**
  * VRRP configuration
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv4#vrrp_id RouterVrrpInterfaceIpv4#vrrp_id}
  */
  readonly vrrpId: number;
}
export interface RouterVrrpInterfaceIpv4SecondaryAddresses {
  /**
  * VRRP IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv4#address RouterVrrpInterfaceIpv4#address}
  */
  readonly address: string;
}

export function routerVrrpInterfaceIpv4SecondaryAddressesToTerraform(struct?: RouterVrrpInterfaceIpv4SecondaryAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
  }
}


export function routerVrrpInterfaceIpv4SecondaryAddressesToHclTerraform(struct?: RouterVrrpInterfaceIpv4SecondaryAddresses | cdktf.IResolvable): any {
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

export class RouterVrrpInterfaceIpv4SecondaryAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterVrrpInterfaceIpv4SecondaryAddresses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterVrrpInterfaceIpv4SecondaryAddresses | cdktf.IResolvable | undefined) {
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

export class RouterVrrpInterfaceIpv4SecondaryAddressesList extends cdktf.ComplexList {
  public internalValue? : RouterVrrpInterfaceIpv4SecondaryAddresses[] | cdktf.IResolvable

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
  public get(index: number): RouterVrrpInterfaceIpv4SecondaryAddressesOutputReference {
    return new RouterVrrpInterfaceIpv4SecondaryAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterVrrpInterfaceIpv4TrackInterfaces {
  /**
  * Track an interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv4#interface_name RouterVrrpInterfaceIpv4#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Priority decrement
  *   - Range: `1`-`254`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv4#priority_decrement RouterVrrpInterfaceIpv4#priority_decrement}
  */
  readonly priorityDecrement?: number;
}

export function routerVrrpInterfaceIpv4TrackInterfacesToTerraform(struct?: RouterVrrpInterfaceIpv4TrackInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    priority_decrement: cdktf.numberToTerraform(struct!.priorityDecrement),
  }
}


export function routerVrrpInterfaceIpv4TrackInterfacesToHclTerraform(struct?: RouterVrrpInterfaceIpv4TrackInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
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

export class RouterVrrpInterfaceIpv4TrackInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterVrrpInterfaceIpv4TrackInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._priorityDecrement !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityDecrement = this._priorityDecrement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterVrrpInterfaceIpv4TrackInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceName = undefined;
      this._priorityDecrement = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaceName = value.interfaceName;
      this._priorityDecrement = value.priorityDecrement;
    }
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

  // priority_decrement - computed: false, optional: true, required: false
  private _priorityDecrement?: number; 
  public get priorityDecrement() {
    return this.getNumberAttribute('priority_decrement');
  }
  public set priorityDecrement(value: number) {
    this._priorityDecrement = value;
  }
  public resetPriorityDecrement() {
    this._priorityDecrement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityDecrementInput() {
    return this._priorityDecrement;
  }
}

export class RouterVrrpInterfaceIpv4TrackInterfacesList extends cdktf.ComplexList {
  public internalValue? : RouterVrrpInterfaceIpv4TrackInterfaces[] | cdktf.IResolvable

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
  public get(index: number): RouterVrrpInterfaceIpv4TrackInterfacesOutputReference {
    return new RouterVrrpInterfaceIpv4TrackInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterVrrpInterfaceIpv4TrackObjects {
  /**
  * Object to be tracked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv4#object_name RouterVrrpInterfaceIpv4#object_name}
  */
  readonly objectName: string;
  /**
  * Priority decrement
  *   - Range: `1`-`254`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv4#priority_decrement RouterVrrpInterfaceIpv4#priority_decrement}
  */
  readonly priorityDecrement: number;
}

export function routerVrrpInterfaceIpv4TrackObjectsToTerraform(struct?: RouterVrrpInterfaceIpv4TrackObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_name: cdktf.stringToTerraform(struct!.objectName),
    priority_decrement: cdktf.numberToTerraform(struct!.priorityDecrement),
  }
}


export function routerVrrpInterfaceIpv4TrackObjectsToHclTerraform(struct?: RouterVrrpInterfaceIpv4TrackObjects | cdktf.IResolvable): any {
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

export class RouterVrrpInterfaceIpv4TrackObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterVrrpInterfaceIpv4TrackObjects | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterVrrpInterfaceIpv4TrackObjects | cdktf.IResolvable | undefined) {
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

export class RouterVrrpInterfaceIpv4TrackObjectsList extends cdktf.ComplexList {
  public internalValue? : RouterVrrpInterfaceIpv4TrackObjects[] | cdktf.IResolvable

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
  public get(index: number): RouterVrrpInterfaceIpv4TrackObjectsOutputReference {
    return new RouterVrrpInterfaceIpv4TrackObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv4 iosxr_router_vrrp_interface_ipv4}
*/
export class RouterVrrpInterfaceIpv4 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_router_vrrp_interface_ipv4";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterVrrpInterfaceIpv4 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterVrrpInterfaceIpv4 to import
  * @param importFromId The id of the existing RouterVrrpInterfaceIpv4 that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv4#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterVrrpInterfaceIpv4 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_router_vrrp_interface_ipv4", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv4 iosxr_router_vrrp_interface_ipv4} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterVrrpInterfaceIpv4Config
  */
  public constructor(scope: Construct, id: string, config: RouterVrrpInterfaceIpv4Config) {
    super(scope, id, {
      terraformResourceType: 'iosxr_router_vrrp_interface_ipv4',
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
    this._acceptModeDisable = config.acceptModeDisable;
    this._address = config.address;
    this._bfdFastDetectPeerIpv4 = config.bfdFastDetectPeerIpv4;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._interfaceName = config.interfaceName;
    this._name = config.name;
    this._preemptDelay = config.preemptDelay;
    this._preemptDisable = config.preemptDisable;
    this._priority = config.priority;
    this._secondaryAddresses.internalValue = config.secondaryAddresses;
    this._textAuthentication = config.textAuthentication;
    this._timerAdvertisementMilliseconds = config.timerAdvertisementMilliseconds;
    this._timerAdvertisementSeconds = config.timerAdvertisementSeconds;
    this._timerForce = config.timerForce;
    this._trackInterfaces.internalValue = config.trackInterfaces;
    this._trackObjects.internalValue = config.trackObjects;
    this._version = config.version;
    this._vrrpId = config.vrrpId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_mode_disable - computed: false, optional: true, required: false
  private _acceptModeDisable?: boolean | cdktf.IResolvable; 
  public get acceptModeDisable() {
    return this.getBooleanAttribute('accept_mode_disable');
  }
  public set acceptModeDisable(value: boolean | cdktf.IResolvable) {
    this._acceptModeDisable = value;
  }
  public resetAcceptModeDisable() {
    this._acceptModeDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptModeDisableInput() {
    return this._acceptModeDisable;
  }

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

  // preempt_disable - computed: false, optional: true, required: false
  private _preemptDisable?: boolean | cdktf.IResolvable; 
  public get preemptDisable() {
    return this.getBooleanAttribute('preempt_disable');
  }
  public set preemptDisable(value: boolean | cdktf.IResolvable) {
    this._preemptDisable = value;
  }
  public resetPreemptDisable() {
    this._preemptDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptDisableInput() {
    return this._preemptDisable;
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

  // secondary_addresses - computed: false, optional: true, required: false
  private _secondaryAddresses = new RouterVrrpInterfaceIpv4SecondaryAddressesList(this, "secondary_addresses", false);
  public get secondaryAddresses() {
    return this._secondaryAddresses;
  }
  public putSecondaryAddresses(value: RouterVrrpInterfaceIpv4SecondaryAddresses[] | cdktf.IResolvable) {
    this._secondaryAddresses.internalValue = value;
  }
  public resetSecondaryAddresses() {
    this._secondaryAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryAddressesInput() {
    return this._secondaryAddresses.internalValue;
  }

  // text_authentication - computed: false, optional: true, required: false
  private _textAuthentication?: string; 
  public get textAuthentication() {
    return this.getStringAttribute('text_authentication');
  }
  public set textAuthentication(value: string) {
    this._textAuthentication = value;
  }
  public resetTextAuthentication() {
    this._textAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textAuthenticationInput() {
    return this._textAuthentication;
  }

  // timer_advertisement_milliseconds - computed: false, optional: true, required: false
  private _timerAdvertisementMilliseconds?: number; 
  public get timerAdvertisementMilliseconds() {
    return this.getNumberAttribute('timer_advertisement_milliseconds');
  }
  public set timerAdvertisementMilliseconds(value: number) {
    this._timerAdvertisementMilliseconds = value;
  }
  public resetTimerAdvertisementMilliseconds() {
    this._timerAdvertisementMilliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerAdvertisementMillisecondsInput() {
    return this._timerAdvertisementMilliseconds;
  }

  // timer_advertisement_seconds - computed: false, optional: true, required: false
  private _timerAdvertisementSeconds?: number; 
  public get timerAdvertisementSeconds() {
    return this.getNumberAttribute('timer_advertisement_seconds');
  }
  public set timerAdvertisementSeconds(value: number) {
    this._timerAdvertisementSeconds = value;
  }
  public resetTimerAdvertisementSeconds() {
    this._timerAdvertisementSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerAdvertisementSecondsInput() {
    return this._timerAdvertisementSeconds;
  }

  // timer_force - computed: false, optional: true, required: false
  private _timerForce?: boolean | cdktf.IResolvable; 
  public get timerForce() {
    return this.getBooleanAttribute('timer_force');
  }
  public set timerForce(value: boolean | cdktf.IResolvable) {
    this._timerForce = value;
  }
  public resetTimerForce() {
    this._timerForce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerForceInput() {
    return this._timerForce;
  }

  // track_interfaces - computed: false, optional: true, required: false
  private _trackInterfaces = new RouterVrrpInterfaceIpv4TrackInterfacesList(this, "track_interfaces", false);
  public get trackInterfaces() {
    return this._trackInterfaces;
  }
  public putTrackInterfaces(value: RouterVrrpInterfaceIpv4TrackInterfaces[] | cdktf.IResolvable) {
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
  private _trackObjects = new RouterVrrpInterfaceIpv4TrackObjectsList(this, "track_objects", false);
  public get trackObjects() {
    return this._trackObjects;
  }
  public putTrackObjects(value: RouterVrrpInterfaceIpv4TrackObjects[] | cdktf.IResolvable) {
    this._trackObjects.internalValue = value;
  }
  public resetTrackObjects() {
    this._trackObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackObjectsInput() {
    return this._trackObjects.internalValue;
  }

  // version - computed: false, optional: false, required: true
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // vrrp_id - computed: false, optional: false, required: true
  private _vrrpId?: number; 
  public get vrrpId() {
    return this.getNumberAttribute('vrrp_id');
  }
  public set vrrpId(value: number) {
    this._vrrpId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrrpIdInput() {
    return this._vrrpId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept_mode_disable: cdktf.booleanToTerraform(this._acceptModeDisable),
      address: cdktf.stringToTerraform(this._address),
      bfd_fast_detect_peer_ipv4: cdktf.stringToTerraform(this._bfdFastDetectPeerIpv4),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      interface_name: cdktf.stringToTerraform(this._interfaceName),
      name: cdktf.stringToTerraform(this._name),
      preempt_delay: cdktf.numberToTerraform(this._preemptDelay),
      preempt_disable: cdktf.booleanToTerraform(this._preemptDisable),
      priority: cdktf.numberToTerraform(this._priority),
      secondary_addresses: cdktf.listMapper(routerVrrpInterfaceIpv4SecondaryAddressesToTerraform, false)(this._secondaryAddresses.internalValue),
      text_authentication: cdktf.stringToTerraform(this._textAuthentication),
      timer_advertisement_milliseconds: cdktf.numberToTerraform(this._timerAdvertisementMilliseconds),
      timer_advertisement_seconds: cdktf.numberToTerraform(this._timerAdvertisementSeconds),
      timer_force: cdktf.booleanToTerraform(this._timerForce),
      track_interfaces: cdktf.listMapper(routerVrrpInterfaceIpv4TrackInterfacesToTerraform, false)(this._trackInterfaces.internalValue),
      track_objects: cdktf.listMapper(routerVrrpInterfaceIpv4TrackObjectsToTerraform, false)(this._trackObjects.internalValue),
      version: cdktf.numberToTerraform(this._version),
      vrrp_id: cdktf.numberToTerraform(this._vrrpId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accept_mode_disable: {
        value: cdktf.booleanToHclTerraform(this._acceptModeDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      address: {
        value: cdktf.stringToHclTerraform(this._address),
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
      interface_name: {
        value: cdktf.stringToHclTerraform(this._interfaceName),
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
      preempt_disable: {
        value: cdktf.booleanToHclTerraform(this._preemptDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secondary_addresses: {
        value: cdktf.listMapperHcl(routerVrrpInterfaceIpv4SecondaryAddressesToHclTerraform, false)(this._secondaryAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterVrrpInterfaceIpv4SecondaryAddressesList",
      },
      text_authentication: {
        value: cdktf.stringToHclTerraform(this._textAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timer_advertisement_milliseconds: {
        value: cdktf.numberToHclTerraform(this._timerAdvertisementMilliseconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timer_advertisement_seconds: {
        value: cdktf.numberToHclTerraform(this._timerAdvertisementSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timer_force: {
        value: cdktf.booleanToHclTerraform(this._timerForce),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      track_interfaces: {
        value: cdktf.listMapperHcl(routerVrrpInterfaceIpv4TrackInterfacesToHclTerraform, false)(this._trackInterfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterVrrpInterfaceIpv4TrackInterfacesList",
      },
      track_objects: {
        value: cdktf.listMapperHcl(routerVrrpInterfaceIpv4TrackObjectsToHclTerraform, false)(this._trackObjects.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterVrrpInterfaceIpv4TrackObjectsList",
      },
      version: {
        value: cdktf.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vrrp_id: {
        value: cdktf.numberToHclTerraform(this._vrrpId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
