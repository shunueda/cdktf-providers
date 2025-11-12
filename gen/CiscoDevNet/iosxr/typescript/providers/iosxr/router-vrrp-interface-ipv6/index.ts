// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterVrrpInterfaceIpv6Config extends cdktf.TerraformMetaArguments {
  /**
  * Disable accept mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv6#accept_mode_disable RouterVrrpInterfaceIpv6#accept_mode_disable}
  */
  readonly acceptModeDisable?: boolean | cdktf.IResolvable;
  /**
  * VRRP IPv6 linklocal address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv6#address_linklocal RouterVrrpInterfaceIpv6#address_linklocal}
  */
  readonly addressLinklocal?: string;
  /**
  * Autoconfigure the VRRP IPv6 linklocal address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv6#address_linklocal_autoconfig RouterVrrpInterfaceIpv6#address_linklocal_autoconfig}
  */
  readonly addressLinklocalAutoconfig?: boolean | cdktf.IResolvable;
  /**
  * VRRP BFD remote interface IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv6#bfd_fast_detect_peer_ipv6 RouterVrrpInterfaceIpv6#bfd_fast_detect_peer_ipv6}
  */
  readonly bfdFastDetectPeerIpv6?: string;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv6#delete_mode RouterVrrpInterfaceIpv6#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv6#device RouterVrrpInterfaceIpv6#device}
  */
  readonly device?: string;
  /**
  * Global VRRP IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv6#global_addresses RouterVrrpInterfaceIpv6#global_addresses}
  */
  readonly globalAddresses?: RouterVrrpInterfaceIpv6GlobalAddresses[] | cdktf.IResolvable;
  /**
  * VRRP interface configuration subcommands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv6#interface_name RouterVrrpInterfaceIpv6#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Configure VRRP Session name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv6#name RouterVrrpInterfaceIpv6#name}
  */
  readonly name?: string;
  /**
  * Wait before preempting
  *   - Range: `1`-`3600`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv6#preempt_delay RouterVrrpInterfaceIpv6#preempt_delay}
  */
  readonly preemptDelay?: number;
  /**
  * Disable preemption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv6#preempt_disable RouterVrrpInterfaceIpv6#preempt_disable}
  */
  readonly preemptDisable?: boolean | cdktf.IResolvable;
  /**
  * Set priority level
  *   - Range: `1`-`254`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv6#priority RouterVrrpInterfaceIpv6#priority}
  */
  readonly priority?: number;
  /**
  * Configure in milliseconds
  *   - Range: `100`-`40950`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv6#timer_advertisement_milliseconds RouterVrrpInterfaceIpv6#timer_advertisement_milliseconds}
  */
  readonly timerAdvertisementMilliseconds?: number;
  /**
  * Advertisement time in seconds
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv6#timer_advertisement_seconds RouterVrrpInterfaceIpv6#timer_advertisement_seconds}
  */
  readonly timerAdvertisementSeconds?: number;
  /**
  * Force the configured values to be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv6#timer_force RouterVrrpInterfaceIpv6#timer_force}
  */
  readonly timerForce?: boolean | cdktf.IResolvable;
  /**
  * Track an interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv6#track_interfaces RouterVrrpInterfaceIpv6#track_interfaces}
  */
  readonly trackInterfaces?: RouterVrrpInterfaceIpv6TrackInterfaces[] | cdktf.IResolvable;
  /**
  * Object Tracking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv6#track_objects RouterVrrpInterfaceIpv6#track_objects}
  */
  readonly trackObjects?: RouterVrrpInterfaceIpv6TrackObjects[] | cdktf.IResolvable;
  /**
  * VRRP configuration
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv6#vrrp_id RouterVrrpInterfaceIpv6#vrrp_id}
  */
  readonly vrrpId: number;
}
export interface RouterVrrpInterfaceIpv6GlobalAddresses {
  /**
  * Set Global VRRP IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv6#address RouterVrrpInterfaceIpv6#address}
  */
  readonly address: string;
}

export function routerVrrpInterfaceIpv6GlobalAddressesToTerraform(struct?: RouterVrrpInterfaceIpv6GlobalAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
  }
}


export function routerVrrpInterfaceIpv6GlobalAddressesToHclTerraform(struct?: RouterVrrpInterfaceIpv6GlobalAddresses | cdktf.IResolvable): any {
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

export class RouterVrrpInterfaceIpv6GlobalAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterVrrpInterfaceIpv6GlobalAddresses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterVrrpInterfaceIpv6GlobalAddresses | cdktf.IResolvable | undefined) {
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

export class RouterVrrpInterfaceIpv6GlobalAddressesList extends cdktf.ComplexList {
  public internalValue? : RouterVrrpInterfaceIpv6GlobalAddresses[] | cdktf.IResolvable

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
  public get(index: number): RouterVrrpInterfaceIpv6GlobalAddressesOutputReference {
    return new RouterVrrpInterfaceIpv6GlobalAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterVrrpInterfaceIpv6TrackInterfaces {
  /**
  * Track an interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv6#interface_name RouterVrrpInterfaceIpv6#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Priority decrement
  *   - Range: `1`-`254`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv6#priority_decrement RouterVrrpInterfaceIpv6#priority_decrement}
  */
  readonly priorityDecrement?: number;
}

export function routerVrrpInterfaceIpv6TrackInterfacesToTerraform(struct?: RouterVrrpInterfaceIpv6TrackInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    priority_decrement: cdktf.numberToTerraform(struct!.priorityDecrement),
  }
}


export function routerVrrpInterfaceIpv6TrackInterfacesToHclTerraform(struct?: RouterVrrpInterfaceIpv6TrackInterfaces | cdktf.IResolvable): any {
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

export class RouterVrrpInterfaceIpv6TrackInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterVrrpInterfaceIpv6TrackInterfaces | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterVrrpInterfaceIpv6TrackInterfaces | cdktf.IResolvable | undefined) {
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

export class RouterVrrpInterfaceIpv6TrackInterfacesList extends cdktf.ComplexList {
  public internalValue? : RouterVrrpInterfaceIpv6TrackInterfaces[] | cdktf.IResolvable

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
  public get(index: number): RouterVrrpInterfaceIpv6TrackInterfacesOutputReference {
    return new RouterVrrpInterfaceIpv6TrackInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterVrrpInterfaceIpv6TrackObjects {
  /**
  * Object to be tracked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv6#object_name RouterVrrpInterfaceIpv6#object_name}
  */
  readonly objectName: string;
  /**
  * Priority decrement
  *   - Range: `1`-`254`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv6#priority_decrement RouterVrrpInterfaceIpv6#priority_decrement}
  */
  readonly priorityDecrement: number;
}

export function routerVrrpInterfaceIpv6TrackObjectsToTerraform(struct?: RouterVrrpInterfaceIpv6TrackObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_name: cdktf.stringToTerraform(struct!.objectName),
    priority_decrement: cdktf.numberToTerraform(struct!.priorityDecrement),
  }
}


export function routerVrrpInterfaceIpv6TrackObjectsToHclTerraform(struct?: RouterVrrpInterfaceIpv6TrackObjects | cdktf.IResolvable): any {
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

export class RouterVrrpInterfaceIpv6TrackObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterVrrpInterfaceIpv6TrackObjects | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterVrrpInterfaceIpv6TrackObjects | cdktf.IResolvable | undefined) {
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

export class RouterVrrpInterfaceIpv6TrackObjectsList extends cdktf.ComplexList {
  public internalValue? : RouterVrrpInterfaceIpv6TrackObjects[] | cdktf.IResolvable

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
  public get(index: number): RouterVrrpInterfaceIpv6TrackObjectsOutputReference {
    return new RouterVrrpInterfaceIpv6TrackObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv6 iosxr_router_vrrp_interface_ipv6}
*/
export class RouterVrrpInterfaceIpv6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_router_vrrp_interface_ipv6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterVrrpInterfaceIpv6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterVrrpInterfaceIpv6 to import
  * @param importFromId The id of the existing RouterVrrpInterfaceIpv6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterVrrpInterfaceIpv6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_router_vrrp_interface_ipv6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_vrrp_interface_ipv6 iosxr_router_vrrp_interface_ipv6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterVrrpInterfaceIpv6Config
  */
  public constructor(scope: Construct, id: string, config: RouterVrrpInterfaceIpv6Config) {
    super(scope, id, {
      terraformResourceType: 'iosxr_router_vrrp_interface_ipv6',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0',
        providerVersionConstraint: '0.6.0'
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
    this._addressLinklocal = config.addressLinklocal;
    this._addressLinklocalAutoconfig = config.addressLinklocalAutoconfig;
    this._bfdFastDetectPeerIpv6 = config.bfdFastDetectPeerIpv6;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._globalAddresses.internalValue = config.globalAddresses;
    this._interfaceName = config.interfaceName;
    this._name = config.name;
    this._preemptDelay = config.preemptDelay;
    this._preemptDisable = config.preemptDisable;
    this._priority = config.priority;
    this._timerAdvertisementMilliseconds = config.timerAdvertisementMilliseconds;
    this._timerAdvertisementSeconds = config.timerAdvertisementSeconds;
    this._timerForce = config.timerForce;
    this._trackInterfaces.internalValue = config.trackInterfaces;
    this._trackObjects.internalValue = config.trackObjects;
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

  // address_linklocal - computed: false, optional: true, required: false
  private _addressLinklocal?: string; 
  public get addressLinklocal() {
    return this.getStringAttribute('address_linklocal');
  }
  public set addressLinklocal(value: string) {
    this._addressLinklocal = value;
  }
  public resetAddressLinklocal() {
    this._addressLinklocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressLinklocalInput() {
    return this._addressLinklocal;
  }

  // address_linklocal_autoconfig - computed: false, optional: true, required: false
  private _addressLinklocalAutoconfig?: boolean | cdktf.IResolvable; 
  public get addressLinklocalAutoconfig() {
    return this.getBooleanAttribute('address_linklocal_autoconfig');
  }
  public set addressLinklocalAutoconfig(value: boolean | cdktf.IResolvable) {
    this._addressLinklocalAutoconfig = value;
  }
  public resetAddressLinklocalAutoconfig() {
    this._addressLinklocalAutoconfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressLinklocalAutoconfigInput() {
    return this._addressLinklocalAutoconfig;
  }

  // bfd_fast_detect_peer_ipv6 - computed: false, optional: true, required: false
  private _bfdFastDetectPeerIpv6?: string; 
  public get bfdFastDetectPeerIpv6() {
    return this.getStringAttribute('bfd_fast_detect_peer_ipv6');
  }
  public set bfdFastDetectPeerIpv6(value: string) {
    this._bfdFastDetectPeerIpv6 = value;
  }
  public resetBfdFastDetectPeerIpv6() {
    this._bfdFastDetectPeerIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdFastDetectPeerIpv6Input() {
    return this._bfdFastDetectPeerIpv6;
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

  // global_addresses - computed: false, optional: true, required: false
  private _globalAddresses = new RouterVrrpInterfaceIpv6GlobalAddressesList(this, "global_addresses", false);
  public get globalAddresses() {
    return this._globalAddresses;
  }
  public putGlobalAddresses(value: RouterVrrpInterfaceIpv6GlobalAddresses[] | cdktf.IResolvable) {
    this._globalAddresses.internalValue = value;
  }
  public resetGlobalAddresses() {
    this._globalAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalAddressesInput() {
    return this._globalAddresses.internalValue;
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
  private _trackInterfaces = new RouterVrrpInterfaceIpv6TrackInterfacesList(this, "track_interfaces", false);
  public get trackInterfaces() {
    return this._trackInterfaces;
  }
  public putTrackInterfaces(value: RouterVrrpInterfaceIpv6TrackInterfaces[] | cdktf.IResolvable) {
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
  private _trackObjects = new RouterVrrpInterfaceIpv6TrackObjectsList(this, "track_objects", false);
  public get trackObjects() {
    return this._trackObjects;
  }
  public putTrackObjects(value: RouterVrrpInterfaceIpv6TrackObjects[] | cdktf.IResolvable) {
    this._trackObjects.internalValue = value;
  }
  public resetTrackObjects() {
    this._trackObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackObjectsInput() {
    return this._trackObjects.internalValue;
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
      address_linklocal: cdktf.stringToTerraform(this._addressLinklocal),
      address_linklocal_autoconfig: cdktf.booleanToTerraform(this._addressLinklocalAutoconfig),
      bfd_fast_detect_peer_ipv6: cdktf.stringToTerraform(this._bfdFastDetectPeerIpv6),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      global_addresses: cdktf.listMapper(routerVrrpInterfaceIpv6GlobalAddressesToTerraform, false)(this._globalAddresses.internalValue),
      interface_name: cdktf.stringToTerraform(this._interfaceName),
      name: cdktf.stringToTerraform(this._name),
      preempt_delay: cdktf.numberToTerraform(this._preemptDelay),
      preempt_disable: cdktf.booleanToTerraform(this._preemptDisable),
      priority: cdktf.numberToTerraform(this._priority),
      timer_advertisement_milliseconds: cdktf.numberToTerraform(this._timerAdvertisementMilliseconds),
      timer_advertisement_seconds: cdktf.numberToTerraform(this._timerAdvertisementSeconds),
      timer_force: cdktf.booleanToTerraform(this._timerForce),
      track_interfaces: cdktf.listMapper(routerVrrpInterfaceIpv6TrackInterfacesToTerraform, false)(this._trackInterfaces.internalValue),
      track_objects: cdktf.listMapper(routerVrrpInterfaceIpv6TrackObjectsToTerraform, false)(this._trackObjects.internalValue),
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
      address_linklocal: {
        value: cdktf.stringToHclTerraform(this._addressLinklocal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address_linklocal_autoconfig: {
        value: cdktf.booleanToHclTerraform(this._addressLinklocalAutoconfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bfd_fast_detect_peer_ipv6: {
        value: cdktf.stringToHclTerraform(this._bfdFastDetectPeerIpv6),
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
      global_addresses: {
        value: cdktf.listMapperHcl(routerVrrpInterfaceIpv6GlobalAddressesToHclTerraform, false)(this._globalAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterVrrpInterfaceIpv6GlobalAddressesList",
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
        value: cdktf.listMapperHcl(routerVrrpInterfaceIpv6TrackInterfacesToHclTerraform, false)(this._trackInterfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterVrrpInterfaceIpv6TrackInterfacesList",
      },
      track_objects: {
        value: cdktf.listMapperHcl(routerVrrpInterfaceIpv6TrackObjectsToHclTerraform, false)(this._trackObjects.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterVrrpInterfaceIpv6TrackObjectsList",
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
