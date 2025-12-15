// https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceLogicalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#description InterfaceLogical#description}
  */
  readonly description?: string;
  /**
  * Disable this logical interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#disable InterfaceLogical#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Logical link-layer encapsulation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#encapsulation InterfaceLogical#encapsulation}
  */
  readonly encapsulation?: string;
  /**
  * Name of logical interface (with dot).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#name InterfaceLogical#name}
  */
  readonly name: string;
  /**
  * Add this interface in routing_instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#routing_instance InterfaceLogical#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * The inbound protocols allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#security_inbound_protocols InterfaceLogical#security_inbound_protocols}
  */
  readonly securityInboundProtocols?: string[];
  /**
  * The inbound services allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#security_inbound_services InterfaceLogical#security_inbound_services}
  */
  readonly securityInboundServices?: string[];
  /**
  * Add this interface in a security zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#security_zone InterfaceLogical#security_zone}
  */
  readonly securityZone?: string;
  /**
  * When destroy this resource, if the name has prefix `st0.`, delete all configurations (not keep empty st0 interface).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#st0_also_on_destroy InterfaceLogical#st0_also_on_destroy}
  */
  readonly st0AlsoOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Accept packets destined for virtual gateway address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#virtual_gateway_accept_data InterfaceLogical#virtual_gateway_accept_data}
  */
  readonly virtualGatewayAcceptData?: boolean | cdktf.IResolvable;
  /**
  * Virtual gateway IPV4 virtual MAC address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#virtual_gateway_v4_mac InterfaceLogical#virtual_gateway_v4_mac}
  */
  readonly virtualGatewayV4Mac?: string;
  /**
  * Virtual gateway IPV6 virtual MAC address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#virtual_gateway_v6_mac InterfaceLogical#virtual_gateway_v6_mac}
  */
  readonly virtualGatewayV6Mac?: string;
  /**
  * Virtual LAN identifier value for 802.1q VLAN tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#vlan_id InterfaceLogical#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * Disable the automatic compute of the `vlan_id` argument when not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#vlan_no_compute InterfaceLogical#vlan_no_compute}
  */
  readonly vlanNoCompute?: boolean | cdktf.IResolvable;
  /**
  * family_inet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#family_inet InterfaceLogical#family_inet}
  */
  readonly familyInet?: InterfaceLogicalFamilyInet;
  /**
  * family_inet6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#family_inet6 InterfaceLogical#family_inet6}
  */
  readonly familyInet6?: InterfaceLogicalFamilyInet6;
  /**
  * tunnel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#tunnel InterfaceLogical#tunnel}
  */
  readonly tunnel?: InterfaceLogicalTunnel;
}
export interface InterfaceLogicalFamilyInetAddressVrrpGroupTrackInterface {
  /**
  * Name of interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#interface InterfaceLogical#interface}
  */
  readonly interface: string;
  /**
  * Value to subtract from priority when interface is down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#priority_cost InterfaceLogical#priority_cost}
  */
  readonly priorityCost: number;
}

export function interfaceLogicalFamilyInetAddressVrrpGroupTrackInterfaceToTerraform(struct?: InterfaceLogicalFamilyInetAddressVrrpGroupTrackInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.stringToTerraform(struct!.interface),
    priority_cost: cdktf.numberToTerraform(struct!.priorityCost),
  }
}


export function interfaceLogicalFamilyInetAddressVrrpGroupTrackInterfaceToHclTerraform(struct?: InterfaceLogicalFamilyInetAddressVrrpGroupTrackInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority_cost: {
      value: cdktf.numberToHclTerraform(struct!.priorityCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceLogicalFamilyInetAddressVrrpGroupTrackInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceLogicalFamilyInetAddressVrrpGroupTrackInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._priorityCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityCost = this._priorityCost;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceLogicalFamilyInetAddressVrrpGroupTrackInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interface = undefined;
      this._priorityCost = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interface = value.interface;
      this._priorityCost = value.priorityCost;
    }
  }

  // interface - computed: false, optional: false, required: true
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // priority_cost - computed: false, optional: false, required: true
  private _priorityCost?: number; 
  public get priorityCost() {
    return this.getNumberAttribute('priority_cost');
  }
  public set priorityCost(value: number) {
    this._priorityCost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityCostInput() {
    return this._priorityCost;
  }
}

export class InterfaceLogicalFamilyInetAddressVrrpGroupTrackInterfaceList extends cdktf.ComplexList {
  public internalValue? : InterfaceLogicalFamilyInetAddressVrrpGroupTrackInterface[] | cdktf.IResolvable

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
  public get(index: number): InterfaceLogicalFamilyInetAddressVrrpGroupTrackInterfaceOutputReference {
    return new InterfaceLogicalFamilyInetAddressVrrpGroupTrackInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceLogicalFamilyInetAddressVrrpGroupTrackRoute {
  /**
  * Value to subtract from priority when route is down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#priority_cost InterfaceLogical#priority_cost}
  */
  readonly priorityCost: number;
  /**
  * Route address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#route InterfaceLogical#route}
  */
  readonly route: string;
  /**
  * Routing instance to which route belongs, or `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#routing_instance InterfaceLogical#routing_instance}
  */
  readonly routingInstance: string;
}

export function interfaceLogicalFamilyInetAddressVrrpGroupTrackRouteToTerraform(struct?: InterfaceLogicalFamilyInetAddressVrrpGroupTrackRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority_cost: cdktf.numberToTerraform(struct!.priorityCost),
    route: cdktf.stringToTerraform(struct!.route),
    routing_instance: cdktf.stringToTerraform(struct!.routingInstance),
  }
}


export function interfaceLogicalFamilyInetAddressVrrpGroupTrackRouteToHclTerraform(struct?: InterfaceLogicalFamilyInetAddressVrrpGroupTrackRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    priority_cost: {
      value: cdktf.numberToHclTerraform(struct!.priorityCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route: {
      value: cdktf.stringToHclTerraform(struct!.route),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_instance: {
      value: cdktf.stringToHclTerraform(struct!.routingInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceLogicalFamilyInetAddressVrrpGroupTrackRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceLogicalFamilyInetAddressVrrpGroupTrackRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priorityCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityCost = this._priorityCost;
    }
    if (this._route !== undefined) {
      hasAnyValues = true;
      internalValueResult.route = this._route;
    }
    if (this._routingInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingInstance = this._routingInstance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceLogicalFamilyInetAddressVrrpGroupTrackRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._priorityCost = undefined;
      this._route = undefined;
      this._routingInstance = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._priorityCost = value.priorityCost;
      this._route = value.route;
      this._routingInstance = value.routingInstance;
    }
  }

  // priority_cost - computed: false, optional: false, required: true
  private _priorityCost?: number; 
  public get priorityCost() {
    return this.getNumberAttribute('priority_cost');
  }
  public set priorityCost(value: number) {
    this._priorityCost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityCostInput() {
    return this._priorityCost;
  }

  // route - computed: false, optional: false, required: true
  private _route?: string; 
  public get route() {
    return this.getStringAttribute('route');
  }
  public set route(value: string) {
    this._route = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route;
  }

  // routing_instance - computed: false, optional: false, required: true
  private _routingInstance?: string; 
  public get routingInstance() {
    return this.getStringAttribute('routing_instance');
  }
  public set routingInstance(value: string) {
    this._routingInstance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceInput() {
    return this._routingInstance;
  }
}

export class InterfaceLogicalFamilyInetAddressVrrpGroupTrackRouteList extends cdktf.ComplexList {
  public internalValue? : InterfaceLogicalFamilyInetAddressVrrpGroupTrackRoute[] | cdktf.IResolvable

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
  public get(index: number): InterfaceLogicalFamilyInetAddressVrrpGroupTrackRouteOutputReference {
    return new InterfaceLogicalFamilyInetAddressVrrpGroupTrackRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceLogicalFamilyInetAddressVrrpGroup {
  /**
  * Accept packets destined for virtual IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#accept_data InterfaceLogical#accept_data}
  */
  readonly acceptData?: boolean | cdktf.IResolvable;
  /**
  * Advertisement interval (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#advertise_interval InterfaceLogical#advertise_interval}
  */
  readonly advertiseInterval?: number;
  /**
  * Number of vrrp advertisements missed before declaring master down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#advertisements_threshold InterfaceLogical#advertisements_threshold}
  */
  readonly advertisementsThreshold?: number;
  /**
  * Authentication key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#authentication_key InterfaceLogical#authentication_key}
  */
  readonly authenticationKey?: string;
  /**
  * Authentication type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#authentication_type InterfaceLogical#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * ID for vrrp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#identifier InterfaceLogical#identifier}
  */
  readonly identifier: number;
  /**
  * Don't accept packets destined for virtual IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#no_accept_data InterfaceLogical#no_accept_data}
  */
  readonly noAcceptData?: boolean | cdktf.IResolvable;
  /**
  * Don't allow preemption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#no_preempt InterfaceLogical#no_preempt}
  */
  readonly noPreempt?: boolean | cdktf.IResolvable;
  /**
  * Allow preemption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#preempt InterfaceLogical#preempt}
  */
  readonly preempt?: boolean | cdktf.IResolvable;
  /**
  * Virtual router election priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#priority InterfaceLogical#priority}
  */
  readonly priority?: number;
  /**
  * Virtual IPv4 addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#virtual_address InterfaceLogical#virtual_address}
  */
  readonly virtualAddress: string[];
  /**
  * track_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#track_interface InterfaceLogical#track_interface}
  */
  readonly trackInterface?: InterfaceLogicalFamilyInetAddressVrrpGroupTrackInterface[] | cdktf.IResolvable;
  /**
  * track_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#track_route InterfaceLogical#track_route}
  */
  readonly trackRoute?: InterfaceLogicalFamilyInetAddressVrrpGroupTrackRoute[] | cdktf.IResolvable;
}

export function interfaceLogicalFamilyInetAddressVrrpGroupToTerraform(struct?: InterfaceLogicalFamilyInetAddressVrrpGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_data: cdktf.booleanToTerraform(struct!.acceptData),
    advertise_interval: cdktf.numberToTerraform(struct!.advertiseInterval),
    advertisements_threshold: cdktf.numberToTerraform(struct!.advertisementsThreshold),
    authentication_key: cdktf.stringToTerraform(struct!.authenticationKey),
    authentication_type: cdktf.stringToTerraform(struct!.authenticationType),
    identifier: cdktf.numberToTerraform(struct!.identifier),
    no_accept_data: cdktf.booleanToTerraform(struct!.noAcceptData),
    no_preempt: cdktf.booleanToTerraform(struct!.noPreempt),
    preempt: cdktf.booleanToTerraform(struct!.preempt),
    priority: cdktf.numberToTerraform(struct!.priority),
    virtual_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.virtualAddress),
    track_interface: cdktf.listMapper(interfaceLogicalFamilyInetAddressVrrpGroupTrackInterfaceToTerraform, true)(struct!.trackInterface),
    track_route: cdktf.listMapper(interfaceLogicalFamilyInetAddressVrrpGroupTrackRouteToTerraform, true)(struct!.trackRoute),
  }
}


export function interfaceLogicalFamilyInetAddressVrrpGroupToHclTerraform(struct?: InterfaceLogicalFamilyInetAddressVrrpGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_data: {
      value: cdktf.booleanToHclTerraform(struct!.acceptData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    advertise_interval: {
      value: cdktf.numberToHclTerraform(struct!.advertiseInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    advertisements_threshold: {
      value: cdktf.numberToHclTerraform(struct!.advertisementsThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authentication_key: {
      value: cdktf.stringToHclTerraform(struct!.authenticationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_type: {
      value: cdktf.stringToHclTerraform(struct!.authenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identifier: {
      value: cdktf.numberToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_accept_data: {
      value: cdktf.booleanToHclTerraform(struct!.noAcceptData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_preempt: {
      value: cdktf.booleanToHclTerraform(struct!.noPreempt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preempt: {
      value: cdktf.booleanToHclTerraform(struct!.preempt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.virtualAddress),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    track_interface: {
      value: cdktf.listMapperHcl(interfaceLogicalFamilyInetAddressVrrpGroupTrackInterfaceToHclTerraform, true)(struct!.trackInterface),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceLogicalFamilyInetAddressVrrpGroupTrackInterfaceList",
    },
    track_route: {
      value: cdktf.listMapperHcl(interfaceLogicalFamilyInetAddressVrrpGroupTrackRouteToHclTerraform, true)(struct!.trackRoute),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceLogicalFamilyInetAddressVrrpGroupTrackRouteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceLogicalFamilyInetAddressVrrpGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceLogicalFamilyInetAddressVrrpGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptData !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptData = this._acceptData;
    }
    if (this._advertiseInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseInterval = this._advertiseInterval;
    }
    if (this._advertisementsThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertisementsThreshold = this._advertisementsThreshold;
    }
    if (this._authenticationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKey = this._authenticationKey;
    }
    if (this._authenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType;
    }
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    if (this._noAcceptData !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAcceptData = this._noAcceptData;
    }
    if (this._noPreempt !== undefined) {
      hasAnyValues = true;
      internalValueResult.noPreempt = this._noPreempt;
    }
    if (this._preempt !== undefined) {
      hasAnyValues = true;
      internalValueResult.preempt = this._preempt;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._virtualAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualAddress = this._virtualAddress;
    }
    if (this._trackInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackInterface = this._trackInterface?.internalValue;
    }
    if (this._trackRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackRoute = this._trackRoute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceLogicalFamilyInetAddressVrrpGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptData = undefined;
      this._advertiseInterval = undefined;
      this._advertisementsThreshold = undefined;
      this._authenticationKey = undefined;
      this._authenticationType = undefined;
      this._identifier = undefined;
      this._noAcceptData = undefined;
      this._noPreempt = undefined;
      this._preempt = undefined;
      this._priority = undefined;
      this._virtualAddress = undefined;
      this._trackInterface.internalValue = undefined;
      this._trackRoute.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptData = value.acceptData;
      this._advertiseInterval = value.advertiseInterval;
      this._advertisementsThreshold = value.advertisementsThreshold;
      this._authenticationKey = value.authenticationKey;
      this._authenticationType = value.authenticationType;
      this._identifier = value.identifier;
      this._noAcceptData = value.noAcceptData;
      this._noPreempt = value.noPreempt;
      this._preempt = value.preempt;
      this._priority = value.priority;
      this._virtualAddress = value.virtualAddress;
      this._trackInterface.internalValue = value.trackInterface;
      this._trackRoute.internalValue = value.trackRoute;
    }
  }

  // accept_data - computed: false, optional: true, required: false
  private _acceptData?: boolean | cdktf.IResolvable; 
  public get acceptData() {
    return this.getBooleanAttribute('accept_data');
  }
  public set acceptData(value: boolean | cdktf.IResolvable) {
    this._acceptData = value;
  }
  public resetAcceptData() {
    this._acceptData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptDataInput() {
    return this._acceptData;
  }

  // advertise_interval - computed: false, optional: true, required: false
  private _advertiseInterval?: number; 
  public get advertiseInterval() {
    return this.getNumberAttribute('advertise_interval');
  }
  public set advertiseInterval(value: number) {
    this._advertiseInterval = value;
  }
  public resetAdvertiseInterval() {
    this._advertiseInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseIntervalInput() {
    return this._advertiseInterval;
  }

  // advertisements_threshold - computed: false, optional: true, required: false
  private _advertisementsThreshold?: number; 
  public get advertisementsThreshold() {
    return this.getNumberAttribute('advertisements_threshold');
  }
  public set advertisementsThreshold(value: number) {
    this._advertisementsThreshold = value;
  }
  public resetAdvertisementsThreshold() {
    this._advertisementsThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisementsThresholdInput() {
    return this._advertisementsThreshold;
  }

  // authentication_key - computed: false, optional: true, required: false
  private _authenticationKey?: string; 
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }
  public set authenticationKey(value: string) {
    this._authenticationKey = value;
  }
  public resetAuthenticationKey() {
    this._authenticationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyInput() {
    return this._authenticationKey;
  }

  // authentication_type - computed: false, optional: true, required: false
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  public resetAuthenticationType() {
    this._authenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: number; 
  public get identifier() {
    return this.getNumberAttribute('identifier');
  }
  public set identifier(value: number) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // no_accept_data - computed: false, optional: true, required: false
  private _noAcceptData?: boolean | cdktf.IResolvable; 
  public get noAcceptData() {
    return this.getBooleanAttribute('no_accept_data');
  }
  public set noAcceptData(value: boolean | cdktf.IResolvable) {
    this._noAcceptData = value;
  }
  public resetNoAcceptData() {
    this._noAcceptData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAcceptDataInput() {
    return this._noAcceptData;
  }

  // no_preempt - computed: false, optional: true, required: false
  private _noPreempt?: boolean | cdktf.IResolvable; 
  public get noPreempt() {
    return this.getBooleanAttribute('no_preempt');
  }
  public set noPreempt(value: boolean | cdktf.IResolvable) {
    this._noPreempt = value;
  }
  public resetNoPreempt() {
    this._noPreempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPreemptInput() {
    return this._noPreempt;
  }

  // preempt - computed: false, optional: true, required: false
  private _preempt?: boolean | cdktf.IResolvable; 
  public get preempt() {
    return this.getBooleanAttribute('preempt');
  }
  public set preempt(value: boolean | cdktf.IResolvable) {
    this._preempt = value;
  }
  public resetPreempt() {
    this._preempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptInput() {
    return this._preempt;
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

  // virtual_address - computed: false, optional: false, required: true
  private _virtualAddress?: string[]; 
  public get virtualAddress() {
    return this.getListAttribute('virtual_address');
  }
  public set virtualAddress(value: string[]) {
    this._virtualAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualAddressInput() {
    return this._virtualAddress;
  }

  // track_interface - computed: false, optional: true, required: false
  private _trackInterface = new InterfaceLogicalFamilyInetAddressVrrpGroupTrackInterfaceList(this, "track_interface", false);
  public get trackInterface() {
    return this._trackInterface;
  }
  public putTrackInterface(value: InterfaceLogicalFamilyInetAddressVrrpGroupTrackInterface[] | cdktf.IResolvable) {
    this._trackInterface.internalValue = value;
  }
  public resetTrackInterface() {
    this._trackInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackInterfaceInput() {
    return this._trackInterface.internalValue;
  }

  // track_route - computed: false, optional: true, required: false
  private _trackRoute = new InterfaceLogicalFamilyInetAddressVrrpGroupTrackRouteList(this, "track_route", false);
  public get trackRoute() {
    return this._trackRoute;
  }
  public putTrackRoute(value: InterfaceLogicalFamilyInetAddressVrrpGroupTrackRoute[] | cdktf.IResolvable) {
    this._trackRoute.internalValue = value;
  }
  public resetTrackRoute() {
    this._trackRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackRouteInput() {
    return this._trackRoute.internalValue;
  }
}

export class InterfaceLogicalFamilyInetAddressVrrpGroupList extends cdktf.ComplexList {
  public internalValue? : InterfaceLogicalFamilyInetAddressVrrpGroup[] | cdktf.IResolvable

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
  public get(index: number): InterfaceLogicalFamilyInetAddressVrrpGroupOutputReference {
    return new InterfaceLogicalFamilyInetAddressVrrpGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceLogicalFamilyInetAddress {
  /**
  * IPv4 address in CIDR format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#cidr_ip InterfaceLogical#cidr_ip}
  */
  readonly cidrIp: string;
  /**
  * Preferred address on interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#preferred InterfaceLogical#preferred}
  */
  readonly preferred?: boolean | cdktf.IResolvable;
  /**
  * Candidate for primary address in system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#primary InterfaceLogical#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * Virtual gateway IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#virtual_gateway_address InterfaceLogical#virtual_gateway_address}
  */
  readonly virtualGatewayAddress?: string;
  /**
  * vrrp_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#vrrp_group InterfaceLogical#vrrp_group}
  */
  readonly vrrpGroup?: InterfaceLogicalFamilyInetAddressVrrpGroup[] | cdktf.IResolvable;
}

export function interfaceLogicalFamilyInetAddressToTerraform(struct?: InterfaceLogicalFamilyInetAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_ip: cdktf.stringToTerraform(struct!.cidrIp),
    preferred: cdktf.booleanToTerraform(struct!.preferred),
    primary: cdktf.booleanToTerraform(struct!.primary),
    virtual_gateway_address: cdktf.stringToTerraform(struct!.virtualGatewayAddress),
    vrrp_group: cdktf.listMapper(interfaceLogicalFamilyInetAddressVrrpGroupToTerraform, true)(struct!.vrrpGroup),
  }
}


export function interfaceLogicalFamilyInetAddressToHclTerraform(struct?: InterfaceLogicalFamilyInetAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_ip: {
      value: cdktf.stringToHclTerraform(struct!.cidrIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferred: {
      value: cdktf.booleanToHclTerraform(struct!.preferred),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    primary: {
      value: cdktf.booleanToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    virtual_gateway_address: {
      value: cdktf.stringToHclTerraform(struct!.virtualGatewayAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrrp_group: {
      value: cdktf.listMapperHcl(interfaceLogicalFamilyInetAddressVrrpGroupToHclTerraform, true)(struct!.vrrpGroup),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceLogicalFamilyInetAddressVrrpGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceLogicalFamilyInetAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceLogicalFamilyInetAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrIp = this._cidrIp;
    }
    if (this._preferred !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferred = this._preferred;
    }
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._virtualGatewayAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualGatewayAddress = this._virtualGatewayAddress;
    }
    if (this._vrrpGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrrpGroup = this._vrrpGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceLogicalFamilyInetAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrIp = undefined;
      this._preferred = undefined;
      this._primary = undefined;
      this._virtualGatewayAddress = undefined;
      this._vrrpGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrIp = value.cidrIp;
      this._preferred = value.preferred;
      this._primary = value.primary;
      this._virtualGatewayAddress = value.virtualGatewayAddress;
      this._vrrpGroup.internalValue = value.vrrpGroup;
    }
  }

  // cidr_ip - computed: false, optional: false, required: true
  private _cidrIp?: string; 
  public get cidrIp() {
    return this.getStringAttribute('cidr_ip');
  }
  public set cidrIp(value: string) {
    this._cidrIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrIpInput() {
    return this._cidrIp;
  }

  // preferred - computed: false, optional: true, required: false
  private _preferred?: boolean | cdktf.IResolvable; 
  public get preferred() {
    return this.getBooleanAttribute('preferred');
  }
  public set preferred(value: boolean | cdktf.IResolvable) {
    this._preferred = value;
  }
  public resetPreferred() {
    this._preferred = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredInput() {
    return this._preferred;
  }

  // primary - computed: false, optional: true, required: false
  private _primary?: boolean | cdktf.IResolvable; 
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktf.IResolvable) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // virtual_gateway_address - computed: false, optional: true, required: false
  private _virtualGatewayAddress?: string; 
  public get virtualGatewayAddress() {
    return this.getStringAttribute('virtual_gateway_address');
  }
  public set virtualGatewayAddress(value: string) {
    this._virtualGatewayAddress = value;
  }
  public resetVirtualGatewayAddress() {
    this._virtualGatewayAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualGatewayAddressInput() {
    return this._virtualGatewayAddress;
  }

  // vrrp_group - computed: false, optional: true, required: false
  private _vrrpGroup = new InterfaceLogicalFamilyInetAddressVrrpGroupList(this, "vrrp_group", false);
  public get vrrpGroup() {
    return this._vrrpGroup;
  }
  public putVrrpGroup(value: InterfaceLogicalFamilyInetAddressVrrpGroup[] | cdktf.IResolvable) {
    this._vrrpGroup.internalValue = value;
  }
  public resetVrrpGroup() {
    this._vrrpGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrrpGroupInput() {
    return this._vrrpGroup.internalValue;
  }
}

export class InterfaceLogicalFamilyInetAddressList extends cdktf.ComplexList {
  public internalValue? : InterfaceLogicalFamilyInetAddress[] | cdktf.IResolvable

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
  public get(index: number): InterfaceLogicalFamilyInetAddressOutputReference {
    return new InterfaceLogicalFamilyInetAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceLogicalFamilyInetDhcp {
  /**
  * Client identifier as an ASCII string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#client_identifier_ascii InterfaceLogical#client_identifier_ascii}
  */
  readonly clientIdentifierAscii?: string;
  /**
  * Client identifier as a hexadecimal string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#client_identifier_hexadecimal InterfaceLogical#client_identifier_hexadecimal}
  */
  readonly clientIdentifierHexadecimal?: string;
  /**
  * Add prefix router host name to client-id option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#client_identifier_prefix_hostname InterfaceLogical#client_identifier_prefix_hostname}
  */
  readonly clientIdentifierPrefixHostname?: boolean | cdktf.IResolvable;
  /**
  * Add prefix routing instance name to client-id option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#client_identifier_prefix_routing_instance_name InterfaceLogical#client_identifier_prefix_routing_instance_name}
  */
  readonly clientIdentifierPrefixRoutingInstanceName?: boolean | cdktf.IResolvable;
  /**
  * Use the interface description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#client_identifier_use_interface_description InterfaceLogical#client_identifier_use_interface_description}
  */
  readonly clientIdentifierUseInterfaceDescription?: string;
  /**
  * Add user id as an ASCII string to client-id option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#client_identifier_userid_ascii InterfaceLogical#client_identifier_userid_ascii}
  */
  readonly clientIdentifierUseridAscii?: string;
  /**
  * Add user id as a hexadecimal string to client-id option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#client_identifier_userid_hexadecimal InterfaceLogical#client_identifier_userid_hexadecimal}
  */
  readonly clientIdentifierUseridHexadecimal?: string;
  /**
  * Send DHCPDISCOVER after DHCPREQUEST retransmission failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#force_discover InterfaceLogical#force_discover}
  */
  readonly forceDiscover?: boolean | cdktf.IResolvable;
  /**
  * Lease time in seconds requested in DHCP client protocol packet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#lease_time InterfaceLogical#lease_time}
  */
  readonly leaseTime?: number;
  /**
  * Lease never expires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#lease_time_infinite InterfaceLogical#lease_time_infinite}
  */
  readonly leaseTimeInfinite?: boolean | cdktf.IResolvable;
  /**
  * Client initiated default-route metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#metric InterfaceLogical#metric}
  */
  readonly metric?: number;
  /**
  * Do not install DNS information learned from DHCP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#no_dns_install InterfaceLogical#no_dns_install}
  */
  readonly noDnsInstall?: boolean | cdktf.IResolvable;
  /**
  * Do not carry hostname (RFC option code is 12) in packet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#options_no_hostname InterfaceLogical#options_no_hostname}
  */
  readonly optionsNoHostname?: boolean | cdktf.IResolvable;
  /**
  * Number of attempts to retransmit the DHCP client protocol packet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#retransmission_attempt InterfaceLogical#retransmission_attempt}
  */
  readonly retransmissionAttempt?: number;
  /**
  * Number of seconds between successive retransmission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#retransmission_interval InterfaceLogical#retransmission_interval}
  */
  readonly retransmissionInterval?: number;
  /**
  * DHCP Server-address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#server_address InterfaceLogical#server_address}
  */
  readonly serverAddress?: string;
  /**
  * For configuration, use the old option name `dhcp-client` instead of `dhcp`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#srx_old_option_name InterfaceLogical#srx_old_option_name}
  */
  readonly srxOldOptionName?: boolean | cdktf.IResolvable;
  /**
  * Propagate TCP/IP settings to DHCP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#update_server InterfaceLogical#update_server}
  */
  readonly updateServer?: boolean | cdktf.IResolvable;
  /**
  * Vendor class id for the DHCP Client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#vendor_id InterfaceLogical#vendor_id}
  */
  readonly vendorId?: string;
}

export function interfaceLogicalFamilyInetDhcpToTerraform(struct?: InterfaceLogicalFamilyInetDhcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_identifier_ascii: cdktf.stringToTerraform(struct!.clientIdentifierAscii),
    client_identifier_hexadecimal: cdktf.stringToTerraform(struct!.clientIdentifierHexadecimal),
    client_identifier_prefix_hostname: cdktf.booleanToTerraform(struct!.clientIdentifierPrefixHostname),
    client_identifier_prefix_routing_instance_name: cdktf.booleanToTerraform(struct!.clientIdentifierPrefixRoutingInstanceName),
    client_identifier_use_interface_description: cdktf.stringToTerraform(struct!.clientIdentifierUseInterfaceDescription),
    client_identifier_userid_ascii: cdktf.stringToTerraform(struct!.clientIdentifierUseridAscii),
    client_identifier_userid_hexadecimal: cdktf.stringToTerraform(struct!.clientIdentifierUseridHexadecimal),
    force_discover: cdktf.booleanToTerraform(struct!.forceDiscover),
    lease_time: cdktf.numberToTerraform(struct!.leaseTime),
    lease_time_infinite: cdktf.booleanToTerraform(struct!.leaseTimeInfinite),
    metric: cdktf.numberToTerraform(struct!.metric),
    no_dns_install: cdktf.booleanToTerraform(struct!.noDnsInstall),
    options_no_hostname: cdktf.booleanToTerraform(struct!.optionsNoHostname),
    retransmission_attempt: cdktf.numberToTerraform(struct!.retransmissionAttempt),
    retransmission_interval: cdktf.numberToTerraform(struct!.retransmissionInterval),
    server_address: cdktf.stringToTerraform(struct!.serverAddress),
    srx_old_option_name: cdktf.booleanToTerraform(struct!.srxOldOptionName),
    update_server: cdktf.booleanToTerraform(struct!.updateServer),
    vendor_id: cdktf.stringToTerraform(struct!.vendorId),
  }
}


export function interfaceLogicalFamilyInetDhcpToHclTerraform(struct?: InterfaceLogicalFamilyInetDhcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_identifier_ascii: {
      value: cdktf.stringToHclTerraform(struct!.clientIdentifierAscii),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_identifier_hexadecimal: {
      value: cdktf.stringToHclTerraform(struct!.clientIdentifierHexadecimal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_identifier_prefix_hostname: {
      value: cdktf.booleanToHclTerraform(struct!.clientIdentifierPrefixHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_identifier_prefix_routing_instance_name: {
      value: cdktf.booleanToHclTerraform(struct!.clientIdentifierPrefixRoutingInstanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_identifier_use_interface_description: {
      value: cdktf.stringToHclTerraform(struct!.clientIdentifierUseInterfaceDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_identifier_userid_ascii: {
      value: cdktf.stringToHclTerraform(struct!.clientIdentifierUseridAscii),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_identifier_userid_hexadecimal: {
      value: cdktf.stringToHclTerraform(struct!.clientIdentifierUseridHexadecimal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    force_discover: {
      value: cdktf.booleanToHclTerraform(struct!.forceDiscover),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lease_time: {
      value: cdktf.numberToHclTerraform(struct!.leaseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lease_time_infinite: {
      value: cdktf.booleanToHclTerraform(struct!.leaseTimeInfinite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_dns_install: {
      value: cdktf.booleanToHclTerraform(struct!.noDnsInstall),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    options_no_hostname: {
      value: cdktf.booleanToHclTerraform(struct!.optionsNoHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retransmission_attempt: {
      value: cdktf.numberToHclTerraform(struct!.retransmissionAttempt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retransmission_interval: {
      value: cdktf.numberToHclTerraform(struct!.retransmissionInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_address: {
      value: cdktf.stringToHclTerraform(struct!.serverAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srx_old_option_name: {
      value: cdktf.booleanToHclTerraform(struct!.srxOldOptionName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    update_server: {
      value: cdktf.booleanToHclTerraform(struct!.updateServer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vendor_id: {
      value: cdktf.stringToHclTerraform(struct!.vendorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceLogicalFamilyInetDhcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InterfaceLogicalFamilyInetDhcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIdentifierAscii !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIdentifierAscii = this._clientIdentifierAscii;
    }
    if (this._clientIdentifierHexadecimal !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIdentifierHexadecimal = this._clientIdentifierHexadecimal;
    }
    if (this._clientIdentifierPrefixHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIdentifierPrefixHostname = this._clientIdentifierPrefixHostname;
    }
    if (this._clientIdentifierPrefixRoutingInstanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIdentifierPrefixRoutingInstanceName = this._clientIdentifierPrefixRoutingInstanceName;
    }
    if (this._clientIdentifierUseInterfaceDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIdentifierUseInterfaceDescription = this._clientIdentifierUseInterfaceDescription;
    }
    if (this._clientIdentifierUseridAscii !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIdentifierUseridAscii = this._clientIdentifierUseridAscii;
    }
    if (this._clientIdentifierUseridHexadecimal !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIdentifierUseridHexadecimal = this._clientIdentifierUseridHexadecimal;
    }
    if (this._forceDiscover !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceDiscover = this._forceDiscover;
    }
    if (this._leaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseTime = this._leaseTime;
    }
    if (this._leaseTimeInfinite !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseTimeInfinite = this._leaseTimeInfinite;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._noDnsInstall !== undefined) {
      hasAnyValues = true;
      internalValueResult.noDnsInstall = this._noDnsInstall;
    }
    if (this._optionsNoHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionsNoHostname = this._optionsNoHostname;
    }
    if (this._retransmissionAttempt !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmissionAttempt = this._retransmissionAttempt;
    }
    if (this._retransmissionInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmissionInterval = this._retransmissionInterval;
    }
    if (this._serverAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAddress = this._serverAddress;
    }
    if (this._srxOldOptionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.srxOldOptionName = this._srxOldOptionName;
    }
    if (this._updateServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateServer = this._updateServer;
    }
    if (this._vendorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendorId = this._vendorId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceLogicalFamilyInetDhcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientIdentifierAscii = undefined;
      this._clientIdentifierHexadecimal = undefined;
      this._clientIdentifierPrefixHostname = undefined;
      this._clientIdentifierPrefixRoutingInstanceName = undefined;
      this._clientIdentifierUseInterfaceDescription = undefined;
      this._clientIdentifierUseridAscii = undefined;
      this._clientIdentifierUseridHexadecimal = undefined;
      this._forceDiscover = undefined;
      this._leaseTime = undefined;
      this._leaseTimeInfinite = undefined;
      this._metric = undefined;
      this._noDnsInstall = undefined;
      this._optionsNoHostname = undefined;
      this._retransmissionAttempt = undefined;
      this._retransmissionInterval = undefined;
      this._serverAddress = undefined;
      this._srxOldOptionName = undefined;
      this._updateServer = undefined;
      this._vendorId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientIdentifierAscii = value.clientIdentifierAscii;
      this._clientIdentifierHexadecimal = value.clientIdentifierHexadecimal;
      this._clientIdentifierPrefixHostname = value.clientIdentifierPrefixHostname;
      this._clientIdentifierPrefixRoutingInstanceName = value.clientIdentifierPrefixRoutingInstanceName;
      this._clientIdentifierUseInterfaceDescription = value.clientIdentifierUseInterfaceDescription;
      this._clientIdentifierUseridAscii = value.clientIdentifierUseridAscii;
      this._clientIdentifierUseridHexadecimal = value.clientIdentifierUseridHexadecimal;
      this._forceDiscover = value.forceDiscover;
      this._leaseTime = value.leaseTime;
      this._leaseTimeInfinite = value.leaseTimeInfinite;
      this._metric = value.metric;
      this._noDnsInstall = value.noDnsInstall;
      this._optionsNoHostname = value.optionsNoHostname;
      this._retransmissionAttempt = value.retransmissionAttempt;
      this._retransmissionInterval = value.retransmissionInterval;
      this._serverAddress = value.serverAddress;
      this._srxOldOptionName = value.srxOldOptionName;
      this._updateServer = value.updateServer;
      this._vendorId = value.vendorId;
    }
  }

  // client_identifier_ascii - computed: false, optional: true, required: false
  private _clientIdentifierAscii?: string; 
  public get clientIdentifierAscii() {
    return this.getStringAttribute('client_identifier_ascii');
  }
  public set clientIdentifierAscii(value: string) {
    this._clientIdentifierAscii = value;
  }
  public resetClientIdentifierAscii() {
    this._clientIdentifierAscii = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdentifierAsciiInput() {
    return this._clientIdentifierAscii;
  }

  // client_identifier_hexadecimal - computed: false, optional: true, required: false
  private _clientIdentifierHexadecimal?: string; 
  public get clientIdentifierHexadecimal() {
    return this.getStringAttribute('client_identifier_hexadecimal');
  }
  public set clientIdentifierHexadecimal(value: string) {
    this._clientIdentifierHexadecimal = value;
  }
  public resetClientIdentifierHexadecimal() {
    this._clientIdentifierHexadecimal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdentifierHexadecimalInput() {
    return this._clientIdentifierHexadecimal;
  }

  // client_identifier_prefix_hostname - computed: false, optional: true, required: false
  private _clientIdentifierPrefixHostname?: boolean | cdktf.IResolvable; 
  public get clientIdentifierPrefixHostname() {
    return this.getBooleanAttribute('client_identifier_prefix_hostname');
  }
  public set clientIdentifierPrefixHostname(value: boolean | cdktf.IResolvable) {
    this._clientIdentifierPrefixHostname = value;
  }
  public resetClientIdentifierPrefixHostname() {
    this._clientIdentifierPrefixHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdentifierPrefixHostnameInput() {
    return this._clientIdentifierPrefixHostname;
  }

  // client_identifier_prefix_routing_instance_name - computed: false, optional: true, required: false
  private _clientIdentifierPrefixRoutingInstanceName?: boolean | cdktf.IResolvable; 
  public get clientIdentifierPrefixRoutingInstanceName() {
    return this.getBooleanAttribute('client_identifier_prefix_routing_instance_name');
  }
  public set clientIdentifierPrefixRoutingInstanceName(value: boolean | cdktf.IResolvable) {
    this._clientIdentifierPrefixRoutingInstanceName = value;
  }
  public resetClientIdentifierPrefixRoutingInstanceName() {
    this._clientIdentifierPrefixRoutingInstanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdentifierPrefixRoutingInstanceNameInput() {
    return this._clientIdentifierPrefixRoutingInstanceName;
  }

  // client_identifier_use_interface_description - computed: false, optional: true, required: false
  private _clientIdentifierUseInterfaceDescription?: string; 
  public get clientIdentifierUseInterfaceDescription() {
    return this.getStringAttribute('client_identifier_use_interface_description');
  }
  public set clientIdentifierUseInterfaceDescription(value: string) {
    this._clientIdentifierUseInterfaceDescription = value;
  }
  public resetClientIdentifierUseInterfaceDescription() {
    this._clientIdentifierUseInterfaceDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdentifierUseInterfaceDescriptionInput() {
    return this._clientIdentifierUseInterfaceDescription;
  }

  // client_identifier_userid_ascii - computed: false, optional: true, required: false
  private _clientIdentifierUseridAscii?: string; 
  public get clientIdentifierUseridAscii() {
    return this.getStringAttribute('client_identifier_userid_ascii');
  }
  public set clientIdentifierUseridAscii(value: string) {
    this._clientIdentifierUseridAscii = value;
  }
  public resetClientIdentifierUseridAscii() {
    this._clientIdentifierUseridAscii = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdentifierUseridAsciiInput() {
    return this._clientIdentifierUseridAscii;
  }

  // client_identifier_userid_hexadecimal - computed: false, optional: true, required: false
  private _clientIdentifierUseridHexadecimal?: string; 
  public get clientIdentifierUseridHexadecimal() {
    return this.getStringAttribute('client_identifier_userid_hexadecimal');
  }
  public set clientIdentifierUseridHexadecimal(value: string) {
    this._clientIdentifierUseridHexadecimal = value;
  }
  public resetClientIdentifierUseridHexadecimal() {
    this._clientIdentifierUseridHexadecimal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdentifierUseridHexadecimalInput() {
    return this._clientIdentifierUseridHexadecimal;
  }

  // force_discover - computed: false, optional: true, required: false
  private _forceDiscover?: boolean | cdktf.IResolvable; 
  public get forceDiscover() {
    return this.getBooleanAttribute('force_discover');
  }
  public set forceDiscover(value: boolean | cdktf.IResolvable) {
    this._forceDiscover = value;
  }
  public resetForceDiscover() {
    this._forceDiscover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDiscoverInput() {
    return this._forceDiscover;
  }

  // lease_time - computed: false, optional: true, required: false
  private _leaseTime?: number; 
  public get leaseTime() {
    return this.getNumberAttribute('lease_time');
  }
  public set leaseTime(value: number) {
    this._leaseTime = value;
  }
  public resetLeaseTime() {
    this._leaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeInput() {
    return this._leaseTime;
  }

  // lease_time_infinite - computed: false, optional: true, required: false
  private _leaseTimeInfinite?: boolean | cdktf.IResolvable; 
  public get leaseTimeInfinite() {
    return this.getBooleanAttribute('lease_time_infinite');
  }
  public set leaseTimeInfinite(value: boolean | cdktf.IResolvable) {
    this._leaseTimeInfinite = value;
  }
  public resetLeaseTimeInfinite() {
    this._leaseTimeInfinite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeInfiniteInput() {
    return this._leaseTimeInfinite;
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

  // no_dns_install - computed: false, optional: true, required: false
  private _noDnsInstall?: boolean | cdktf.IResolvable; 
  public get noDnsInstall() {
    return this.getBooleanAttribute('no_dns_install');
  }
  public set noDnsInstall(value: boolean | cdktf.IResolvable) {
    this._noDnsInstall = value;
  }
  public resetNoDnsInstall() {
    this._noDnsInstall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDnsInstallInput() {
    return this._noDnsInstall;
  }

  // options_no_hostname - computed: false, optional: true, required: false
  private _optionsNoHostname?: boolean | cdktf.IResolvable; 
  public get optionsNoHostname() {
    return this.getBooleanAttribute('options_no_hostname');
  }
  public set optionsNoHostname(value: boolean | cdktf.IResolvable) {
    this._optionsNoHostname = value;
  }
  public resetOptionsNoHostname() {
    this._optionsNoHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsNoHostnameInput() {
    return this._optionsNoHostname;
  }

  // retransmission_attempt - computed: false, optional: true, required: false
  private _retransmissionAttempt?: number; 
  public get retransmissionAttempt() {
    return this.getNumberAttribute('retransmission_attempt');
  }
  public set retransmissionAttempt(value: number) {
    this._retransmissionAttempt = value;
  }
  public resetRetransmissionAttempt() {
    this._retransmissionAttempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmissionAttemptInput() {
    return this._retransmissionAttempt;
  }

  // retransmission_interval - computed: false, optional: true, required: false
  private _retransmissionInterval?: number; 
  public get retransmissionInterval() {
    return this.getNumberAttribute('retransmission_interval');
  }
  public set retransmissionInterval(value: number) {
    this._retransmissionInterval = value;
  }
  public resetRetransmissionInterval() {
    this._retransmissionInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmissionIntervalInput() {
    return this._retransmissionInterval;
  }

  // server_address - computed: false, optional: true, required: false
  private _serverAddress?: string; 
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }
  public set serverAddress(value: string) {
    this._serverAddress = value;
  }
  public resetServerAddress() {
    this._serverAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddressInput() {
    return this._serverAddress;
  }

  // srx_old_option_name - computed: false, optional: true, required: false
  private _srxOldOptionName?: boolean | cdktf.IResolvable; 
  public get srxOldOptionName() {
    return this.getBooleanAttribute('srx_old_option_name');
  }
  public set srxOldOptionName(value: boolean | cdktf.IResolvable) {
    this._srxOldOptionName = value;
  }
  public resetSrxOldOptionName() {
    this._srxOldOptionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srxOldOptionNameInput() {
    return this._srxOldOptionName;
  }

  // update_server - computed: false, optional: true, required: false
  private _updateServer?: boolean | cdktf.IResolvable; 
  public get updateServer() {
    return this.getBooleanAttribute('update_server');
  }
  public set updateServer(value: boolean | cdktf.IResolvable) {
    this._updateServer = value;
  }
  public resetUpdateServer() {
    this._updateServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateServerInput() {
    return this._updateServer;
  }

  // vendor_id - computed: false, optional: true, required: false
  private _vendorId?: string; 
  public get vendorId() {
    return this.getStringAttribute('vendor_id');
  }
  public set vendorId(value: string) {
    this._vendorId = value;
  }
  public resetVendorId() {
    this._vendorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorIdInput() {
    return this._vendorId;
  }
}
export interface InterfaceLogicalFamilyInetRpfCheck {
  /**
  * Name of filter applied to packets failing RPF check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#fail_filter InterfaceLogical#fail_filter}
  */
  readonly failFilter?: string;
  /**
  * Use reverse-path-forwarding loose mode instead the strict mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#mode_loose InterfaceLogical#mode_loose}
  */
  readonly modeLoose?: boolean | cdktf.IResolvable;
}

export function interfaceLogicalFamilyInetRpfCheckToTerraform(struct?: InterfaceLogicalFamilyInetRpfCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fail_filter: cdktf.stringToTerraform(struct!.failFilter),
    mode_loose: cdktf.booleanToTerraform(struct!.modeLoose),
  }
}


export function interfaceLogicalFamilyInetRpfCheckToHclTerraform(struct?: InterfaceLogicalFamilyInetRpfCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fail_filter: {
      value: cdktf.stringToHclTerraform(struct!.failFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode_loose: {
      value: cdktf.booleanToHclTerraform(struct!.modeLoose),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceLogicalFamilyInetRpfCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InterfaceLogicalFamilyInetRpfCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.failFilter = this._failFilter;
    }
    if (this._modeLoose !== undefined) {
      hasAnyValues = true;
      internalValueResult.modeLoose = this._modeLoose;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceLogicalFamilyInetRpfCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failFilter = undefined;
      this._modeLoose = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failFilter = value.failFilter;
      this._modeLoose = value.modeLoose;
    }
  }

  // fail_filter - computed: false, optional: true, required: false
  private _failFilter?: string; 
  public get failFilter() {
    return this.getStringAttribute('fail_filter');
  }
  public set failFilter(value: string) {
    this._failFilter = value;
  }
  public resetFailFilter() {
    this._failFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failFilterInput() {
    return this._failFilter;
  }

  // mode_loose - computed: false, optional: true, required: false
  private _modeLoose?: boolean | cdktf.IResolvable; 
  public get modeLoose() {
    return this.getBooleanAttribute('mode_loose');
  }
  public set modeLoose(value: boolean | cdktf.IResolvable) {
    this._modeLoose = value;
  }
  public resetModeLoose() {
    this._modeLoose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeLooseInput() {
    return this._modeLoose;
  }
}
export interface InterfaceLogicalFamilyInet {
  /**
  * Filter to be applied to received packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#filter_input InterfaceLogical#filter_input}
  */
  readonly filterInput?: string;
  /**
  * Filter to be applied to transmitted packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#filter_output InterfaceLogical#filter_output}
  */
  readonly filterOutput?: string;
  /**
  * Maximum transmission unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#mtu InterfaceLogical#mtu}
  */
  readonly mtu?: number;
  /**
  * Sample all packets input on this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#sampling_input InterfaceLogical#sampling_input}
  */
  readonly samplingInput?: boolean | cdktf.IResolvable;
  /**
  * Sample all packets output on this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#sampling_output InterfaceLogical#sampling_output}
  */
  readonly samplingOutput?: boolean | cdktf.IResolvable;
  /**
  * address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#address InterfaceLogical#address}
  */
  readonly address?: InterfaceLogicalFamilyInetAddress[] | cdktf.IResolvable;
  /**
  * dhcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#dhcp InterfaceLogical#dhcp}
  */
  readonly dhcp?: InterfaceLogicalFamilyInetDhcp;
  /**
  * rpf_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#rpf_check InterfaceLogical#rpf_check}
  */
  readonly rpfCheck?: InterfaceLogicalFamilyInetRpfCheck;
}

export function interfaceLogicalFamilyInetToTerraform(struct?: InterfaceLogicalFamilyInet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_input: cdktf.stringToTerraform(struct!.filterInput),
    filter_output: cdktf.stringToTerraform(struct!.filterOutput),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    sampling_input: cdktf.booleanToTerraform(struct!.samplingInput),
    sampling_output: cdktf.booleanToTerraform(struct!.samplingOutput),
    address: cdktf.listMapper(interfaceLogicalFamilyInetAddressToTerraform, true)(struct!.address),
    dhcp: interfaceLogicalFamilyInetDhcpToTerraform(struct!.dhcp),
    rpf_check: interfaceLogicalFamilyInetRpfCheckToTerraform(struct!.rpfCheck),
  }
}


export function interfaceLogicalFamilyInetToHclTerraform(struct?: InterfaceLogicalFamilyInet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_input: {
      value: cdktf.stringToHclTerraform(struct!.filterInput),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_output: {
      value: cdktf.stringToHclTerraform(struct!.filterOutput),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sampling_input: {
      value: cdktf.booleanToHclTerraform(struct!.samplingInput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sampling_output: {
      value: cdktf.booleanToHclTerraform(struct!.samplingOutput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    address: {
      value: cdktf.listMapperHcl(interfaceLogicalFamilyInetAddressToHclTerraform, true)(struct!.address),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceLogicalFamilyInetAddressList",
    },
    dhcp: {
      value: interfaceLogicalFamilyInetDhcpToHclTerraform(struct!.dhcp),
      isBlock: true,
      type: "struct",
      storageClassType: "InterfaceLogicalFamilyInetDhcp",
    },
    rpf_check: {
      value: interfaceLogicalFamilyInetRpfCheckToHclTerraform(struct!.rpfCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "InterfaceLogicalFamilyInetRpfCheck",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceLogicalFamilyInetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InterfaceLogicalFamilyInet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterInput = this._filterInput;
    }
    if (this._filterOutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterOutput = this._filterOutput;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._samplingInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingInput = this._samplingInput;
    }
    if (this._samplingOutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingOutput = this._samplingOutput;
    }
    if (this._address?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address?.internalValue;
    }
    if (this._dhcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp = this._dhcp?.internalValue;
    }
    if (this._rpfCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpfCheck = this._rpfCheck?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceLogicalFamilyInet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterInput = undefined;
      this._filterOutput = undefined;
      this._mtu = undefined;
      this._samplingInput = undefined;
      this._samplingOutput = undefined;
      this._address.internalValue = undefined;
      this._dhcp.internalValue = undefined;
      this._rpfCheck.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterInput = value.filterInput;
      this._filterOutput = value.filterOutput;
      this._mtu = value.mtu;
      this._samplingInput = value.samplingInput;
      this._samplingOutput = value.samplingOutput;
      this._address.internalValue = value.address;
      this._dhcp.internalValue = value.dhcp;
      this._rpfCheck.internalValue = value.rpfCheck;
    }
  }

  // filter_input - computed: false, optional: true, required: false
  private _filterInput?: string; 
  public get filterInput() {
    return this.getStringAttribute('filter_input');
  }
  public set filterInput(value: string) {
    this._filterInput = value;
  }
  public resetFilterInput() {
    this._filterInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInputInput() {
    return this._filterInput;
  }

  // filter_output - computed: false, optional: true, required: false
  private _filterOutput?: string; 
  public get filterOutput() {
    return this.getStringAttribute('filter_output');
  }
  public set filterOutput(value: string) {
    this._filterOutput = value;
  }
  public resetFilterOutput() {
    this._filterOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterOutputInput() {
    return this._filterOutput;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // sampling_input - computed: false, optional: true, required: false
  private _samplingInput?: boolean | cdktf.IResolvable; 
  public get samplingInput() {
    return this.getBooleanAttribute('sampling_input');
  }
  public set samplingInput(value: boolean | cdktf.IResolvable) {
    this._samplingInput = value;
  }
  public resetSamplingInput() {
    this._samplingInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingInputInput() {
    return this._samplingInput;
  }

  // sampling_output - computed: false, optional: true, required: false
  private _samplingOutput?: boolean | cdktf.IResolvable; 
  public get samplingOutput() {
    return this.getBooleanAttribute('sampling_output');
  }
  public set samplingOutput(value: boolean | cdktf.IResolvable) {
    this._samplingOutput = value;
  }
  public resetSamplingOutput() {
    this._samplingOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingOutputInput() {
    return this._samplingOutput;
  }

  // address - computed: false, optional: true, required: false
  private _address = new InterfaceLogicalFamilyInetAddressList(this, "address", false);
  public get address() {
    return this._address;
  }
  public putAddress(value: InterfaceLogicalFamilyInetAddress[] | cdktf.IResolvable) {
    this._address.internalValue = value;
  }
  public resetAddress() {
    this._address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address.internalValue;
  }

  // dhcp - computed: false, optional: true, required: false
  private _dhcp = new InterfaceLogicalFamilyInetDhcpOutputReference(this, "dhcp");
  public get dhcp() {
    return this._dhcp;
  }
  public putDhcp(value: InterfaceLogicalFamilyInetDhcp) {
    this._dhcp.internalValue = value;
  }
  public resetDhcp() {
    this._dhcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp.internalValue;
  }

  // rpf_check - computed: false, optional: true, required: false
  private _rpfCheck = new InterfaceLogicalFamilyInetRpfCheckOutputReference(this, "rpf_check");
  public get rpfCheck() {
    return this._rpfCheck;
  }
  public putRpfCheck(value: InterfaceLogicalFamilyInetRpfCheck) {
    this._rpfCheck.internalValue = value;
  }
  public resetRpfCheck() {
    this._rpfCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpfCheckInput() {
    return this._rpfCheck.internalValue;
  }
}
export interface InterfaceLogicalFamilyInet6AddressVrrpGroupTrackInterface {
  /**
  * Name of interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#interface InterfaceLogical#interface}
  */
  readonly interface: string;
  /**
  * Value to subtract from priority when interface is down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#priority_cost InterfaceLogical#priority_cost}
  */
  readonly priorityCost: number;
}

export function interfaceLogicalFamilyInet6AddressVrrpGroupTrackInterfaceToTerraform(struct?: InterfaceLogicalFamilyInet6AddressVrrpGroupTrackInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.stringToTerraform(struct!.interface),
    priority_cost: cdktf.numberToTerraform(struct!.priorityCost),
  }
}


export function interfaceLogicalFamilyInet6AddressVrrpGroupTrackInterfaceToHclTerraform(struct?: InterfaceLogicalFamilyInet6AddressVrrpGroupTrackInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority_cost: {
      value: cdktf.numberToHclTerraform(struct!.priorityCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceLogicalFamilyInet6AddressVrrpGroupTrackInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceLogicalFamilyInet6AddressVrrpGroupTrackInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._priorityCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityCost = this._priorityCost;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceLogicalFamilyInet6AddressVrrpGroupTrackInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interface = undefined;
      this._priorityCost = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interface = value.interface;
      this._priorityCost = value.priorityCost;
    }
  }

  // interface - computed: false, optional: false, required: true
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // priority_cost - computed: false, optional: false, required: true
  private _priorityCost?: number; 
  public get priorityCost() {
    return this.getNumberAttribute('priority_cost');
  }
  public set priorityCost(value: number) {
    this._priorityCost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityCostInput() {
    return this._priorityCost;
  }
}

export class InterfaceLogicalFamilyInet6AddressVrrpGroupTrackInterfaceList extends cdktf.ComplexList {
  public internalValue? : InterfaceLogicalFamilyInet6AddressVrrpGroupTrackInterface[] | cdktf.IResolvable

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
  public get(index: number): InterfaceLogicalFamilyInet6AddressVrrpGroupTrackInterfaceOutputReference {
    return new InterfaceLogicalFamilyInet6AddressVrrpGroupTrackInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceLogicalFamilyInet6AddressVrrpGroupTrackRoute {
  /**
  * Value to subtract from priority when route is down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#priority_cost InterfaceLogical#priority_cost}
  */
  readonly priorityCost: number;
  /**
  * Route address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#route InterfaceLogical#route}
  */
  readonly route: string;
  /**
  * Routing instance to which route belongs, or `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#routing_instance InterfaceLogical#routing_instance}
  */
  readonly routingInstance: string;
}

export function interfaceLogicalFamilyInet6AddressVrrpGroupTrackRouteToTerraform(struct?: InterfaceLogicalFamilyInet6AddressVrrpGroupTrackRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority_cost: cdktf.numberToTerraform(struct!.priorityCost),
    route: cdktf.stringToTerraform(struct!.route),
    routing_instance: cdktf.stringToTerraform(struct!.routingInstance),
  }
}


export function interfaceLogicalFamilyInet6AddressVrrpGroupTrackRouteToHclTerraform(struct?: InterfaceLogicalFamilyInet6AddressVrrpGroupTrackRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    priority_cost: {
      value: cdktf.numberToHclTerraform(struct!.priorityCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route: {
      value: cdktf.stringToHclTerraform(struct!.route),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_instance: {
      value: cdktf.stringToHclTerraform(struct!.routingInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceLogicalFamilyInet6AddressVrrpGroupTrackRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceLogicalFamilyInet6AddressVrrpGroupTrackRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priorityCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityCost = this._priorityCost;
    }
    if (this._route !== undefined) {
      hasAnyValues = true;
      internalValueResult.route = this._route;
    }
    if (this._routingInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingInstance = this._routingInstance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceLogicalFamilyInet6AddressVrrpGroupTrackRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._priorityCost = undefined;
      this._route = undefined;
      this._routingInstance = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._priorityCost = value.priorityCost;
      this._route = value.route;
      this._routingInstance = value.routingInstance;
    }
  }

  // priority_cost - computed: false, optional: false, required: true
  private _priorityCost?: number; 
  public get priorityCost() {
    return this.getNumberAttribute('priority_cost');
  }
  public set priorityCost(value: number) {
    this._priorityCost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityCostInput() {
    return this._priorityCost;
  }

  // route - computed: false, optional: false, required: true
  private _route?: string; 
  public get route() {
    return this.getStringAttribute('route');
  }
  public set route(value: string) {
    this._route = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route;
  }

  // routing_instance - computed: false, optional: false, required: true
  private _routingInstance?: string; 
  public get routingInstance() {
    return this.getStringAttribute('routing_instance');
  }
  public set routingInstance(value: string) {
    this._routingInstance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceInput() {
    return this._routingInstance;
  }
}

export class InterfaceLogicalFamilyInet6AddressVrrpGroupTrackRouteList extends cdktf.ComplexList {
  public internalValue? : InterfaceLogicalFamilyInet6AddressVrrpGroupTrackRoute[] | cdktf.IResolvable

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
  public get(index: number): InterfaceLogicalFamilyInet6AddressVrrpGroupTrackRouteOutputReference {
    return new InterfaceLogicalFamilyInet6AddressVrrpGroupTrackRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceLogicalFamilyInet6AddressVrrpGroup {
  /**
  * Accept packets destined for virtual IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#accept_data InterfaceLogical#accept_data}
  */
  readonly acceptData?: boolean | cdktf.IResolvable;
  /**
  * Advertisement interval (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#advertise_interval InterfaceLogical#advertise_interval}
  */
  readonly advertiseInterval?: number;
  /**
  * Number of vrrp advertisements missed before declaring master down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#advertisements_threshold InterfaceLogical#advertisements_threshold}
  */
  readonly advertisementsThreshold?: number;
  /**
  * ID for vrrp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#identifier InterfaceLogical#identifier}
  */
  readonly identifier: number;
  /**
  * Don't accept packets destined for virtual IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#no_accept_data InterfaceLogical#no_accept_data}
  */
  readonly noAcceptData?: boolean | cdktf.IResolvable;
  /**
  * Don't allow preemption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#no_preempt InterfaceLogical#no_preempt}
  */
  readonly noPreempt?: boolean | cdktf.IResolvable;
  /**
  * Allow preemption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#preempt InterfaceLogical#preempt}
  */
  readonly preempt?: boolean | cdktf.IResolvable;
  /**
  * Virtual router election priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#priority InterfaceLogical#priority}
  */
  readonly priority?: number;
  /**
  * Virtual IPv6 addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#virtual_address InterfaceLogical#virtual_address}
  */
  readonly virtualAddress: string[];
  /**
  * Address IPv6 for Virtual link-local addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#virtual_link_local_address InterfaceLogical#virtual_link_local_address}
  */
  readonly virtualLinkLocalAddress: string;
  /**
  * track_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#track_interface InterfaceLogical#track_interface}
  */
  readonly trackInterface?: InterfaceLogicalFamilyInet6AddressVrrpGroupTrackInterface[] | cdktf.IResolvable;
  /**
  * track_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#track_route InterfaceLogical#track_route}
  */
  readonly trackRoute?: InterfaceLogicalFamilyInet6AddressVrrpGroupTrackRoute[] | cdktf.IResolvable;
}

export function interfaceLogicalFamilyInet6AddressVrrpGroupToTerraform(struct?: InterfaceLogicalFamilyInet6AddressVrrpGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_data: cdktf.booleanToTerraform(struct!.acceptData),
    advertise_interval: cdktf.numberToTerraform(struct!.advertiseInterval),
    advertisements_threshold: cdktf.numberToTerraform(struct!.advertisementsThreshold),
    identifier: cdktf.numberToTerraform(struct!.identifier),
    no_accept_data: cdktf.booleanToTerraform(struct!.noAcceptData),
    no_preempt: cdktf.booleanToTerraform(struct!.noPreempt),
    preempt: cdktf.booleanToTerraform(struct!.preempt),
    priority: cdktf.numberToTerraform(struct!.priority),
    virtual_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.virtualAddress),
    virtual_link_local_address: cdktf.stringToTerraform(struct!.virtualLinkLocalAddress),
    track_interface: cdktf.listMapper(interfaceLogicalFamilyInet6AddressVrrpGroupTrackInterfaceToTerraform, true)(struct!.trackInterface),
    track_route: cdktf.listMapper(interfaceLogicalFamilyInet6AddressVrrpGroupTrackRouteToTerraform, true)(struct!.trackRoute),
  }
}


export function interfaceLogicalFamilyInet6AddressVrrpGroupToHclTerraform(struct?: InterfaceLogicalFamilyInet6AddressVrrpGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_data: {
      value: cdktf.booleanToHclTerraform(struct!.acceptData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    advertise_interval: {
      value: cdktf.numberToHclTerraform(struct!.advertiseInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    advertisements_threshold: {
      value: cdktf.numberToHclTerraform(struct!.advertisementsThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    identifier: {
      value: cdktf.numberToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_accept_data: {
      value: cdktf.booleanToHclTerraform(struct!.noAcceptData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_preempt: {
      value: cdktf.booleanToHclTerraform(struct!.noPreempt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preempt: {
      value: cdktf.booleanToHclTerraform(struct!.preempt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.virtualAddress),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    virtual_link_local_address: {
      value: cdktf.stringToHclTerraform(struct!.virtualLinkLocalAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    track_interface: {
      value: cdktf.listMapperHcl(interfaceLogicalFamilyInet6AddressVrrpGroupTrackInterfaceToHclTerraform, true)(struct!.trackInterface),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceLogicalFamilyInet6AddressVrrpGroupTrackInterfaceList",
    },
    track_route: {
      value: cdktf.listMapperHcl(interfaceLogicalFamilyInet6AddressVrrpGroupTrackRouteToHclTerraform, true)(struct!.trackRoute),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceLogicalFamilyInet6AddressVrrpGroupTrackRouteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceLogicalFamilyInet6AddressVrrpGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceLogicalFamilyInet6AddressVrrpGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptData !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptData = this._acceptData;
    }
    if (this._advertiseInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseInterval = this._advertiseInterval;
    }
    if (this._advertisementsThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertisementsThreshold = this._advertisementsThreshold;
    }
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    if (this._noAcceptData !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAcceptData = this._noAcceptData;
    }
    if (this._noPreempt !== undefined) {
      hasAnyValues = true;
      internalValueResult.noPreempt = this._noPreempt;
    }
    if (this._preempt !== undefined) {
      hasAnyValues = true;
      internalValueResult.preempt = this._preempt;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._virtualAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualAddress = this._virtualAddress;
    }
    if (this._virtualLinkLocalAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualLinkLocalAddress = this._virtualLinkLocalAddress;
    }
    if (this._trackInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackInterface = this._trackInterface?.internalValue;
    }
    if (this._trackRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackRoute = this._trackRoute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceLogicalFamilyInet6AddressVrrpGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptData = undefined;
      this._advertiseInterval = undefined;
      this._advertisementsThreshold = undefined;
      this._identifier = undefined;
      this._noAcceptData = undefined;
      this._noPreempt = undefined;
      this._preempt = undefined;
      this._priority = undefined;
      this._virtualAddress = undefined;
      this._virtualLinkLocalAddress = undefined;
      this._trackInterface.internalValue = undefined;
      this._trackRoute.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptData = value.acceptData;
      this._advertiseInterval = value.advertiseInterval;
      this._advertisementsThreshold = value.advertisementsThreshold;
      this._identifier = value.identifier;
      this._noAcceptData = value.noAcceptData;
      this._noPreempt = value.noPreempt;
      this._preempt = value.preempt;
      this._priority = value.priority;
      this._virtualAddress = value.virtualAddress;
      this._virtualLinkLocalAddress = value.virtualLinkLocalAddress;
      this._trackInterface.internalValue = value.trackInterface;
      this._trackRoute.internalValue = value.trackRoute;
    }
  }

  // accept_data - computed: false, optional: true, required: false
  private _acceptData?: boolean | cdktf.IResolvable; 
  public get acceptData() {
    return this.getBooleanAttribute('accept_data');
  }
  public set acceptData(value: boolean | cdktf.IResolvable) {
    this._acceptData = value;
  }
  public resetAcceptData() {
    this._acceptData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptDataInput() {
    return this._acceptData;
  }

  // advertise_interval - computed: false, optional: true, required: false
  private _advertiseInterval?: number; 
  public get advertiseInterval() {
    return this.getNumberAttribute('advertise_interval');
  }
  public set advertiseInterval(value: number) {
    this._advertiseInterval = value;
  }
  public resetAdvertiseInterval() {
    this._advertiseInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseIntervalInput() {
    return this._advertiseInterval;
  }

  // advertisements_threshold - computed: false, optional: true, required: false
  private _advertisementsThreshold?: number; 
  public get advertisementsThreshold() {
    return this.getNumberAttribute('advertisements_threshold');
  }
  public set advertisementsThreshold(value: number) {
    this._advertisementsThreshold = value;
  }
  public resetAdvertisementsThreshold() {
    this._advertisementsThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisementsThresholdInput() {
    return this._advertisementsThreshold;
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: number; 
  public get identifier() {
    return this.getNumberAttribute('identifier');
  }
  public set identifier(value: number) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // no_accept_data - computed: false, optional: true, required: false
  private _noAcceptData?: boolean | cdktf.IResolvable; 
  public get noAcceptData() {
    return this.getBooleanAttribute('no_accept_data');
  }
  public set noAcceptData(value: boolean | cdktf.IResolvable) {
    this._noAcceptData = value;
  }
  public resetNoAcceptData() {
    this._noAcceptData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAcceptDataInput() {
    return this._noAcceptData;
  }

  // no_preempt - computed: false, optional: true, required: false
  private _noPreempt?: boolean | cdktf.IResolvable; 
  public get noPreempt() {
    return this.getBooleanAttribute('no_preempt');
  }
  public set noPreempt(value: boolean | cdktf.IResolvable) {
    this._noPreempt = value;
  }
  public resetNoPreempt() {
    this._noPreempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPreemptInput() {
    return this._noPreempt;
  }

  // preempt - computed: false, optional: true, required: false
  private _preempt?: boolean | cdktf.IResolvable; 
  public get preempt() {
    return this.getBooleanAttribute('preempt');
  }
  public set preempt(value: boolean | cdktf.IResolvable) {
    this._preempt = value;
  }
  public resetPreempt() {
    this._preempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptInput() {
    return this._preempt;
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

  // virtual_address - computed: false, optional: false, required: true
  private _virtualAddress?: string[]; 
  public get virtualAddress() {
    return this.getListAttribute('virtual_address');
  }
  public set virtualAddress(value: string[]) {
    this._virtualAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualAddressInput() {
    return this._virtualAddress;
  }

  // virtual_link_local_address - computed: false, optional: false, required: true
  private _virtualLinkLocalAddress?: string; 
  public get virtualLinkLocalAddress() {
    return this.getStringAttribute('virtual_link_local_address');
  }
  public set virtualLinkLocalAddress(value: string) {
    this._virtualLinkLocalAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualLinkLocalAddressInput() {
    return this._virtualLinkLocalAddress;
  }

  // track_interface - computed: false, optional: true, required: false
  private _trackInterface = new InterfaceLogicalFamilyInet6AddressVrrpGroupTrackInterfaceList(this, "track_interface", false);
  public get trackInterface() {
    return this._trackInterface;
  }
  public putTrackInterface(value: InterfaceLogicalFamilyInet6AddressVrrpGroupTrackInterface[] | cdktf.IResolvable) {
    this._trackInterface.internalValue = value;
  }
  public resetTrackInterface() {
    this._trackInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackInterfaceInput() {
    return this._trackInterface.internalValue;
  }

  // track_route - computed: false, optional: true, required: false
  private _trackRoute = new InterfaceLogicalFamilyInet6AddressVrrpGroupTrackRouteList(this, "track_route", false);
  public get trackRoute() {
    return this._trackRoute;
  }
  public putTrackRoute(value: InterfaceLogicalFamilyInet6AddressVrrpGroupTrackRoute[] | cdktf.IResolvable) {
    this._trackRoute.internalValue = value;
  }
  public resetTrackRoute() {
    this._trackRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackRouteInput() {
    return this._trackRoute.internalValue;
  }
}

export class InterfaceLogicalFamilyInet6AddressVrrpGroupList extends cdktf.ComplexList {
  public internalValue? : InterfaceLogicalFamilyInet6AddressVrrpGroup[] | cdktf.IResolvable

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
  public get(index: number): InterfaceLogicalFamilyInet6AddressVrrpGroupOutputReference {
    return new InterfaceLogicalFamilyInet6AddressVrrpGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceLogicalFamilyInet6Address {
  /**
  * IPv6 address in CIDR format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#cidr_ip InterfaceLogical#cidr_ip}
  */
  readonly cidrIp: string;
  /**
  * Preferred address on interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#preferred InterfaceLogical#preferred}
  */
  readonly preferred?: boolean | cdktf.IResolvable;
  /**
  * Candidate for primary address in system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#primary InterfaceLogical#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * Virtual gateway IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#virtual_gateway_address InterfaceLogical#virtual_gateway_address}
  */
  readonly virtualGatewayAddress?: string;
  /**
  * vrrp_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#vrrp_group InterfaceLogical#vrrp_group}
  */
  readonly vrrpGroup?: InterfaceLogicalFamilyInet6AddressVrrpGroup[] | cdktf.IResolvable;
}

export function interfaceLogicalFamilyInet6AddressToTerraform(struct?: InterfaceLogicalFamilyInet6Address | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_ip: cdktf.stringToTerraform(struct!.cidrIp),
    preferred: cdktf.booleanToTerraform(struct!.preferred),
    primary: cdktf.booleanToTerraform(struct!.primary),
    virtual_gateway_address: cdktf.stringToTerraform(struct!.virtualGatewayAddress),
    vrrp_group: cdktf.listMapper(interfaceLogicalFamilyInet6AddressVrrpGroupToTerraform, true)(struct!.vrrpGroup),
  }
}


export function interfaceLogicalFamilyInet6AddressToHclTerraform(struct?: InterfaceLogicalFamilyInet6Address | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_ip: {
      value: cdktf.stringToHclTerraform(struct!.cidrIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferred: {
      value: cdktf.booleanToHclTerraform(struct!.preferred),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    primary: {
      value: cdktf.booleanToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    virtual_gateway_address: {
      value: cdktf.stringToHclTerraform(struct!.virtualGatewayAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrrp_group: {
      value: cdktf.listMapperHcl(interfaceLogicalFamilyInet6AddressVrrpGroupToHclTerraform, true)(struct!.vrrpGroup),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceLogicalFamilyInet6AddressVrrpGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceLogicalFamilyInet6AddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceLogicalFamilyInet6Address | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrIp = this._cidrIp;
    }
    if (this._preferred !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferred = this._preferred;
    }
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._virtualGatewayAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualGatewayAddress = this._virtualGatewayAddress;
    }
    if (this._vrrpGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrrpGroup = this._vrrpGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceLogicalFamilyInet6Address | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrIp = undefined;
      this._preferred = undefined;
      this._primary = undefined;
      this._virtualGatewayAddress = undefined;
      this._vrrpGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrIp = value.cidrIp;
      this._preferred = value.preferred;
      this._primary = value.primary;
      this._virtualGatewayAddress = value.virtualGatewayAddress;
      this._vrrpGroup.internalValue = value.vrrpGroup;
    }
  }

  // cidr_ip - computed: false, optional: false, required: true
  private _cidrIp?: string; 
  public get cidrIp() {
    return this.getStringAttribute('cidr_ip');
  }
  public set cidrIp(value: string) {
    this._cidrIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrIpInput() {
    return this._cidrIp;
  }

  // preferred - computed: false, optional: true, required: false
  private _preferred?: boolean | cdktf.IResolvable; 
  public get preferred() {
    return this.getBooleanAttribute('preferred');
  }
  public set preferred(value: boolean | cdktf.IResolvable) {
    this._preferred = value;
  }
  public resetPreferred() {
    this._preferred = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredInput() {
    return this._preferred;
  }

  // primary - computed: false, optional: true, required: false
  private _primary?: boolean | cdktf.IResolvable; 
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktf.IResolvable) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // virtual_gateway_address - computed: false, optional: true, required: false
  private _virtualGatewayAddress?: string; 
  public get virtualGatewayAddress() {
    return this.getStringAttribute('virtual_gateway_address');
  }
  public set virtualGatewayAddress(value: string) {
    this._virtualGatewayAddress = value;
  }
  public resetVirtualGatewayAddress() {
    this._virtualGatewayAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualGatewayAddressInput() {
    return this._virtualGatewayAddress;
  }

  // vrrp_group - computed: false, optional: true, required: false
  private _vrrpGroup = new InterfaceLogicalFamilyInet6AddressVrrpGroupList(this, "vrrp_group", false);
  public get vrrpGroup() {
    return this._vrrpGroup;
  }
  public putVrrpGroup(value: InterfaceLogicalFamilyInet6AddressVrrpGroup[] | cdktf.IResolvable) {
    this._vrrpGroup.internalValue = value;
  }
  public resetVrrpGroup() {
    this._vrrpGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrrpGroupInput() {
    return this._vrrpGroup.internalValue;
  }
}

export class InterfaceLogicalFamilyInet6AddressList extends cdktf.ComplexList {
  public internalValue? : InterfaceLogicalFamilyInet6Address[] | cdktf.IResolvable

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
  public get(index: number): InterfaceLogicalFamilyInet6AddressOutputReference {
    return new InterfaceLogicalFamilyInet6AddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceLogicalFamilyInet6Dhcpv6Client {
  /**
  * DHCPv6 client identity association type Non-temporary Address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#client_ia_type_na InterfaceLogical#client_ia_type_na}
  */
  readonly clientIaTypeNa?: boolean | cdktf.IResolvable;
  /**
  * DHCPv6 client identity association type Prefix Address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#client_ia_type_pd InterfaceLogical#client_ia_type_pd}
  */
  readonly clientIaTypePd?: boolean | cdktf.IResolvable;
  /**
  * DUID identifying a client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#client_identifier_duid_type InterfaceLogical#client_identifier_duid_type}
  */
  readonly clientIdentifierDuidType?: string;
  /**
  * DHCPv6 client type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#client_type InterfaceLogical#client_type}
  */
  readonly clientType?: string;
  /**
  * Do not install DNS information learned from DHCP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#no_dns_install InterfaceLogical#no_dns_install}
  */
  readonly noDnsInstall?: boolean | cdktf.IResolvable;
  /**
  * Client preferred prefix length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#prefix_delegating_preferred_prefix_length InterfaceLogical#prefix_delegating_preferred_prefix_length}
  */
  readonly prefixDelegatingPreferredPrefixLength?: number;
  /**
  * The sub prefix length for LAN interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#prefix_delegating_sub_prefix_length InterfaceLogical#prefix_delegating_sub_prefix_length}
  */
  readonly prefixDelegatingSubPrefixLength?: number;
  /**
  * Option is used to signal the use of the two message exchange for address assignment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#rapid_commit InterfaceLogical#rapid_commit}
  */
  readonly rapidCommit?: boolean | cdktf.IResolvable;
  /**
  * DHCPV6 client requested option configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#req_option InterfaceLogical#req_option}
  */
  readonly reqOption?: string[];
  /**
  * Number of attempts to retransmit the DHCPV6 client protocol packet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#retransmission_attempt InterfaceLogical#retransmission_attempt}
  */
  readonly retransmissionAttempt?: number;
  /**
  * Interfaces on which to delegate prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#update_router_advertisement_interface InterfaceLogical#update_router_advertisement_interface}
  */
  readonly updateRouterAdvertisementInterface?: string[];
  /**
  * Propagate TCP/IP settings to DHCP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#update_server InterfaceLogical#update_server}
  */
  readonly updateServer?: boolean | cdktf.IResolvable;
}

export function interfaceLogicalFamilyInet6Dhcpv6ClientToTerraform(struct?: InterfaceLogicalFamilyInet6Dhcpv6Client | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_ia_type_na: cdktf.booleanToTerraform(struct!.clientIaTypeNa),
    client_ia_type_pd: cdktf.booleanToTerraform(struct!.clientIaTypePd),
    client_identifier_duid_type: cdktf.stringToTerraform(struct!.clientIdentifierDuidType),
    client_type: cdktf.stringToTerraform(struct!.clientType),
    no_dns_install: cdktf.booleanToTerraform(struct!.noDnsInstall),
    prefix_delegating_preferred_prefix_length: cdktf.numberToTerraform(struct!.prefixDelegatingPreferredPrefixLength),
    prefix_delegating_sub_prefix_length: cdktf.numberToTerraform(struct!.prefixDelegatingSubPrefixLength),
    rapid_commit: cdktf.booleanToTerraform(struct!.rapidCommit),
    req_option: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reqOption),
    retransmission_attempt: cdktf.numberToTerraform(struct!.retransmissionAttempt),
    update_router_advertisement_interface: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.updateRouterAdvertisementInterface),
    update_server: cdktf.booleanToTerraform(struct!.updateServer),
  }
}


export function interfaceLogicalFamilyInet6Dhcpv6ClientToHclTerraform(struct?: InterfaceLogicalFamilyInet6Dhcpv6Client | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_ia_type_na: {
      value: cdktf.booleanToHclTerraform(struct!.clientIaTypeNa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_ia_type_pd: {
      value: cdktf.booleanToHclTerraform(struct!.clientIaTypePd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_identifier_duid_type: {
      value: cdktf.stringToHclTerraform(struct!.clientIdentifierDuidType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_type: {
      value: cdktf.stringToHclTerraform(struct!.clientType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_dns_install: {
      value: cdktf.booleanToHclTerraform(struct!.noDnsInstall),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_delegating_preferred_prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixDelegatingPreferredPrefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix_delegating_sub_prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixDelegatingSubPrefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rapid_commit: {
      value: cdktf.booleanToHclTerraform(struct!.rapidCommit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    req_option: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reqOption),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    retransmission_attempt: {
      value: cdktf.numberToHclTerraform(struct!.retransmissionAttempt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    update_router_advertisement_interface: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.updateRouterAdvertisementInterface),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    update_server: {
      value: cdktf.booleanToHclTerraform(struct!.updateServer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceLogicalFamilyInet6Dhcpv6ClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InterfaceLogicalFamilyInet6Dhcpv6Client | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIaTypeNa !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIaTypeNa = this._clientIaTypeNa;
    }
    if (this._clientIaTypePd !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIaTypePd = this._clientIaTypePd;
    }
    if (this._clientIdentifierDuidType !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIdentifierDuidType = this._clientIdentifierDuidType;
    }
    if (this._clientType !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientType = this._clientType;
    }
    if (this._noDnsInstall !== undefined) {
      hasAnyValues = true;
      internalValueResult.noDnsInstall = this._noDnsInstall;
    }
    if (this._prefixDelegatingPreferredPrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixDelegatingPreferredPrefixLength = this._prefixDelegatingPreferredPrefixLength;
    }
    if (this._prefixDelegatingSubPrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixDelegatingSubPrefixLength = this._prefixDelegatingSubPrefixLength;
    }
    if (this._rapidCommit !== undefined) {
      hasAnyValues = true;
      internalValueResult.rapidCommit = this._rapidCommit;
    }
    if (this._reqOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqOption = this._reqOption;
    }
    if (this._retransmissionAttempt !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmissionAttempt = this._retransmissionAttempt;
    }
    if (this._updateRouterAdvertisementInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateRouterAdvertisementInterface = this._updateRouterAdvertisementInterface;
    }
    if (this._updateServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateServer = this._updateServer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceLogicalFamilyInet6Dhcpv6Client | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientIaTypeNa = undefined;
      this._clientIaTypePd = undefined;
      this._clientIdentifierDuidType = undefined;
      this._clientType = undefined;
      this._noDnsInstall = undefined;
      this._prefixDelegatingPreferredPrefixLength = undefined;
      this._prefixDelegatingSubPrefixLength = undefined;
      this._rapidCommit = undefined;
      this._reqOption = undefined;
      this._retransmissionAttempt = undefined;
      this._updateRouterAdvertisementInterface = undefined;
      this._updateServer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientIaTypeNa = value.clientIaTypeNa;
      this._clientIaTypePd = value.clientIaTypePd;
      this._clientIdentifierDuidType = value.clientIdentifierDuidType;
      this._clientType = value.clientType;
      this._noDnsInstall = value.noDnsInstall;
      this._prefixDelegatingPreferredPrefixLength = value.prefixDelegatingPreferredPrefixLength;
      this._prefixDelegatingSubPrefixLength = value.prefixDelegatingSubPrefixLength;
      this._rapidCommit = value.rapidCommit;
      this._reqOption = value.reqOption;
      this._retransmissionAttempt = value.retransmissionAttempt;
      this._updateRouterAdvertisementInterface = value.updateRouterAdvertisementInterface;
      this._updateServer = value.updateServer;
    }
  }

  // client_ia_type_na - computed: false, optional: true, required: false
  private _clientIaTypeNa?: boolean | cdktf.IResolvable; 
  public get clientIaTypeNa() {
    return this.getBooleanAttribute('client_ia_type_na');
  }
  public set clientIaTypeNa(value: boolean | cdktf.IResolvable) {
    this._clientIaTypeNa = value;
  }
  public resetClientIaTypeNa() {
    this._clientIaTypeNa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIaTypeNaInput() {
    return this._clientIaTypeNa;
  }

  // client_ia_type_pd - computed: false, optional: true, required: false
  private _clientIaTypePd?: boolean | cdktf.IResolvable; 
  public get clientIaTypePd() {
    return this.getBooleanAttribute('client_ia_type_pd');
  }
  public set clientIaTypePd(value: boolean | cdktf.IResolvable) {
    this._clientIaTypePd = value;
  }
  public resetClientIaTypePd() {
    this._clientIaTypePd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIaTypePdInput() {
    return this._clientIaTypePd;
  }

  // client_identifier_duid_type - computed: false, optional: true, required: false
  private _clientIdentifierDuidType?: string; 
  public get clientIdentifierDuidType() {
    return this.getStringAttribute('client_identifier_duid_type');
  }
  public set clientIdentifierDuidType(value: string) {
    this._clientIdentifierDuidType = value;
  }
  public resetClientIdentifierDuidType() {
    this._clientIdentifierDuidType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdentifierDuidTypeInput() {
    return this._clientIdentifierDuidType;
  }

  // client_type - computed: false, optional: true, required: false
  private _clientType?: string; 
  public get clientType() {
    return this.getStringAttribute('client_type');
  }
  public set clientType(value: string) {
    this._clientType = value;
  }
  public resetClientType() {
    this._clientType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTypeInput() {
    return this._clientType;
  }

  // no_dns_install - computed: false, optional: true, required: false
  private _noDnsInstall?: boolean | cdktf.IResolvable; 
  public get noDnsInstall() {
    return this.getBooleanAttribute('no_dns_install');
  }
  public set noDnsInstall(value: boolean | cdktf.IResolvable) {
    this._noDnsInstall = value;
  }
  public resetNoDnsInstall() {
    this._noDnsInstall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDnsInstallInput() {
    return this._noDnsInstall;
  }

  // prefix_delegating_preferred_prefix_length - computed: false, optional: true, required: false
  private _prefixDelegatingPreferredPrefixLength?: number; 
  public get prefixDelegatingPreferredPrefixLength() {
    return this.getNumberAttribute('prefix_delegating_preferred_prefix_length');
  }
  public set prefixDelegatingPreferredPrefixLength(value: number) {
    this._prefixDelegatingPreferredPrefixLength = value;
  }
  public resetPrefixDelegatingPreferredPrefixLength() {
    this._prefixDelegatingPreferredPrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixDelegatingPreferredPrefixLengthInput() {
    return this._prefixDelegatingPreferredPrefixLength;
  }

  // prefix_delegating_sub_prefix_length - computed: false, optional: true, required: false
  private _prefixDelegatingSubPrefixLength?: number; 
  public get prefixDelegatingSubPrefixLength() {
    return this.getNumberAttribute('prefix_delegating_sub_prefix_length');
  }
  public set prefixDelegatingSubPrefixLength(value: number) {
    this._prefixDelegatingSubPrefixLength = value;
  }
  public resetPrefixDelegatingSubPrefixLength() {
    this._prefixDelegatingSubPrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixDelegatingSubPrefixLengthInput() {
    return this._prefixDelegatingSubPrefixLength;
  }

  // rapid_commit - computed: false, optional: true, required: false
  private _rapidCommit?: boolean | cdktf.IResolvable; 
  public get rapidCommit() {
    return this.getBooleanAttribute('rapid_commit');
  }
  public set rapidCommit(value: boolean | cdktf.IResolvable) {
    this._rapidCommit = value;
  }
  public resetRapidCommit() {
    this._rapidCommit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rapidCommitInput() {
    return this._rapidCommit;
  }

  // req_option - computed: false, optional: true, required: false
  private _reqOption?: string[]; 
  public get reqOption() {
    return cdktf.Fn.tolist(this.getListAttribute('req_option'));
  }
  public set reqOption(value: string[]) {
    this._reqOption = value;
  }
  public resetReqOption() {
    this._reqOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqOptionInput() {
    return this._reqOption;
  }

  // retransmission_attempt - computed: false, optional: true, required: false
  private _retransmissionAttempt?: number; 
  public get retransmissionAttempt() {
    return this.getNumberAttribute('retransmission_attempt');
  }
  public set retransmissionAttempt(value: number) {
    this._retransmissionAttempt = value;
  }
  public resetRetransmissionAttempt() {
    this._retransmissionAttempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmissionAttemptInput() {
    return this._retransmissionAttempt;
  }

  // update_router_advertisement_interface - computed: false, optional: true, required: false
  private _updateRouterAdvertisementInterface?: string[]; 
  public get updateRouterAdvertisementInterface() {
    return cdktf.Fn.tolist(this.getListAttribute('update_router_advertisement_interface'));
  }
  public set updateRouterAdvertisementInterface(value: string[]) {
    this._updateRouterAdvertisementInterface = value;
  }
  public resetUpdateRouterAdvertisementInterface() {
    this._updateRouterAdvertisementInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateRouterAdvertisementInterfaceInput() {
    return this._updateRouterAdvertisementInterface;
  }

  // update_server - computed: false, optional: true, required: false
  private _updateServer?: boolean | cdktf.IResolvable; 
  public get updateServer() {
    return this.getBooleanAttribute('update_server');
  }
  public set updateServer(value: boolean | cdktf.IResolvable) {
    this._updateServer = value;
  }
  public resetUpdateServer() {
    this._updateServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateServerInput() {
    return this._updateServer;
  }
}
export interface InterfaceLogicalFamilyInet6RpfCheck {
  /**
  * Name of filter applied to packets failing RPF check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#fail_filter InterfaceLogical#fail_filter}
  */
  readonly failFilter?: string;
  /**
  * Use reverse-path-forwarding loose mode instead the strict mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#mode_loose InterfaceLogical#mode_loose}
  */
  readonly modeLoose?: boolean | cdktf.IResolvable;
}

export function interfaceLogicalFamilyInet6RpfCheckToTerraform(struct?: InterfaceLogicalFamilyInet6RpfCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fail_filter: cdktf.stringToTerraform(struct!.failFilter),
    mode_loose: cdktf.booleanToTerraform(struct!.modeLoose),
  }
}


export function interfaceLogicalFamilyInet6RpfCheckToHclTerraform(struct?: InterfaceLogicalFamilyInet6RpfCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fail_filter: {
      value: cdktf.stringToHclTerraform(struct!.failFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode_loose: {
      value: cdktf.booleanToHclTerraform(struct!.modeLoose),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceLogicalFamilyInet6RpfCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InterfaceLogicalFamilyInet6RpfCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.failFilter = this._failFilter;
    }
    if (this._modeLoose !== undefined) {
      hasAnyValues = true;
      internalValueResult.modeLoose = this._modeLoose;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceLogicalFamilyInet6RpfCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failFilter = undefined;
      this._modeLoose = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failFilter = value.failFilter;
      this._modeLoose = value.modeLoose;
    }
  }

  // fail_filter - computed: false, optional: true, required: false
  private _failFilter?: string; 
  public get failFilter() {
    return this.getStringAttribute('fail_filter');
  }
  public set failFilter(value: string) {
    this._failFilter = value;
  }
  public resetFailFilter() {
    this._failFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failFilterInput() {
    return this._failFilter;
  }

  // mode_loose - computed: false, optional: true, required: false
  private _modeLoose?: boolean | cdktf.IResolvable; 
  public get modeLoose() {
    return this.getBooleanAttribute('mode_loose');
  }
  public set modeLoose(value: boolean | cdktf.IResolvable) {
    this._modeLoose = value;
  }
  public resetModeLoose() {
    this._modeLoose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeLooseInput() {
    return this._modeLoose;
  }
}
export interface InterfaceLogicalFamilyInet6 {
  /**
  * Disable duplicate-address-detection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#dad_disable InterfaceLogical#dad_disable}
  */
  readonly dadDisable?: boolean | cdktf.IResolvable;
  /**
  * Filter to be applied to received packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#filter_input InterfaceLogical#filter_input}
  */
  readonly filterInput?: string;
  /**
  * Filter to be applied to transmitted packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#filter_output InterfaceLogical#filter_output}
  */
  readonly filterOutput?: string;
  /**
  * Maximum transmission unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#mtu InterfaceLogical#mtu}
  */
  readonly mtu?: number;
  /**
  * Sample all packets input on this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#sampling_input InterfaceLogical#sampling_input}
  */
  readonly samplingInput?: boolean | cdktf.IResolvable;
  /**
  * Sample all packets output on this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#sampling_output InterfaceLogical#sampling_output}
  */
  readonly samplingOutput?: boolean | cdktf.IResolvable;
  /**
  * address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#address InterfaceLogical#address}
  */
  readonly address?: InterfaceLogicalFamilyInet6Address[] | cdktf.IResolvable;
  /**
  * dhcpv6_client block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#dhcpv6_client InterfaceLogical#dhcpv6_client}
  */
  readonly dhcpv6Client?: InterfaceLogicalFamilyInet6Dhcpv6Client;
  /**
  * rpf_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#rpf_check InterfaceLogical#rpf_check}
  */
  readonly rpfCheck?: InterfaceLogicalFamilyInet6RpfCheck;
}

export function interfaceLogicalFamilyInet6ToTerraform(struct?: InterfaceLogicalFamilyInet6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dad_disable: cdktf.booleanToTerraform(struct!.dadDisable),
    filter_input: cdktf.stringToTerraform(struct!.filterInput),
    filter_output: cdktf.stringToTerraform(struct!.filterOutput),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    sampling_input: cdktf.booleanToTerraform(struct!.samplingInput),
    sampling_output: cdktf.booleanToTerraform(struct!.samplingOutput),
    address: cdktf.listMapper(interfaceLogicalFamilyInet6AddressToTerraform, true)(struct!.address),
    dhcpv6_client: interfaceLogicalFamilyInet6Dhcpv6ClientToTerraform(struct!.dhcpv6Client),
    rpf_check: interfaceLogicalFamilyInet6RpfCheckToTerraform(struct!.rpfCheck),
  }
}


export function interfaceLogicalFamilyInet6ToHclTerraform(struct?: InterfaceLogicalFamilyInet6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dad_disable: {
      value: cdktf.booleanToHclTerraform(struct!.dadDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filter_input: {
      value: cdktf.stringToHclTerraform(struct!.filterInput),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_output: {
      value: cdktf.stringToHclTerraform(struct!.filterOutput),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sampling_input: {
      value: cdktf.booleanToHclTerraform(struct!.samplingInput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sampling_output: {
      value: cdktf.booleanToHclTerraform(struct!.samplingOutput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    address: {
      value: cdktf.listMapperHcl(interfaceLogicalFamilyInet6AddressToHclTerraform, true)(struct!.address),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceLogicalFamilyInet6AddressList",
    },
    dhcpv6_client: {
      value: interfaceLogicalFamilyInet6Dhcpv6ClientToHclTerraform(struct!.dhcpv6Client),
      isBlock: true,
      type: "struct",
      storageClassType: "InterfaceLogicalFamilyInet6Dhcpv6Client",
    },
    rpf_check: {
      value: interfaceLogicalFamilyInet6RpfCheckToHclTerraform(struct!.rpfCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "InterfaceLogicalFamilyInet6RpfCheck",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceLogicalFamilyInet6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InterfaceLogicalFamilyInet6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dadDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.dadDisable = this._dadDisable;
    }
    if (this._filterInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterInput = this._filterInput;
    }
    if (this._filterOutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterOutput = this._filterOutput;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._samplingInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingInput = this._samplingInput;
    }
    if (this._samplingOutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingOutput = this._samplingOutput;
    }
    if (this._address?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address?.internalValue;
    }
    if (this._dhcpv6Client?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpv6Client = this._dhcpv6Client?.internalValue;
    }
    if (this._rpfCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpfCheck = this._rpfCheck?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceLogicalFamilyInet6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dadDisable = undefined;
      this._filterInput = undefined;
      this._filterOutput = undefined;
      this._mtu = undefined;
      this._samplingInput = undefined;
      this._samplingOutput = undefined;
      this._address.internalValue = undefined;
      this._dhcpv6Client.internalValue = undefined;
      this._rpfCheck.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dadDisable = value.dadDisable;
      this._filterInput = value.filterInput;
      this._filterOutput = value.filterOutput;
      this._mtu = value.mtu;
      this._samplingInput = value.samplingInput;
      this._samplingOutput = value.samplingOutput;
      this._address.internalValue = value.address;
      this._dhcpv6Client.internalValue = value.dhcpv6Client;
      this._rpfCheck.internalValue = value.rpfCheck;
    }
  }

  // dad_disable - computed: false, optional: true, required: false
  private _dadDisable?: boolean | cdktf.IResolvable; 
  public get dadDisable() {
    return this.getBooleanAttribute('dad_disable');
  }
  public set dadDisable(value: boolean | cdktf.IResolvable) {
    this._dadDisable = value;
  }
  public resetDadDisable() {
    this._dadDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dadDisableInput() {
    return this._dadDisable;
  }

  // filter_input - computed: false, optional: true, required: false
  private _filterInput?: string; 
  public get filterInput() {
    return this.getStringAttribute('filter_input');
  }
  public set filterInput(value: string) {
    this._filterInput = value;
  }
  public resetFilterInput() {
    this._filterInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInputInput() {
    return this._filterInput;
  }

  // filter_output - computed: false, optional: true, required: false
  private _filterOutput?: string; 
  public get filterOutput() {
    return this.getStringAttribute('filter_output');
  }
  public set filterOutput(value: string) {
    this._filterOutput = value;
  }
  public resetFilterOutput() {
    this._filterOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterOutputInput() {
    return this._filterOutput;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // sampling_input - computed: false, optional: true, required: false
  private _samplingInput?: boolean | cdktf.IResolvable; 
  public get samplingInput() {
    return this.getBooleanAttribute('sampling_input');
  }
  public set samplingInput(value: boolean | cdktf.IResolvable) {
    this._samplingInput = value;
  }
  public resetSamplingInput() {
    this._samplingInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingInputInput() {
    return this._samplingInput;
  }

  // sampling_output - computed: false, optional: true, required: false
  private _samplingOutput?: boolean | cdktf.IResolvable; 
  public get samplingOutput() {
    return this.getBooleanAttribute('sampling_output');
  }
  public set samplingOutput(value: boolean | cdktf.IResolvable) {
    this._samplingOutput = value;
  }
  public resetSamplingOutput() {
    this._samplingOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingOutputInput() {
    return this._samplingOutput;
  }

  // address - computed: false, optional: true, required: false
  private _address = new InterfaceLogicalFamilyInet6AddressList(this, "address", false);
  public get address() {
    return this._address;
  }
  public putAddress(value: InterfaceLogicalFamilyInet6Address[] | cdktf.IResolvable) {
    this._address.internalValue = value;
  }
  public resetAddress() {
    this._address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address.internalValue;
  }

  // dhcpv6_client - computed: false, optional: true, required: false
  private _dhcpv6Client = new InterfaceLogicalFamilyInet6Dhcpv6ClientOutputReference(this, "dhcpv6_client");
  public get dhcpv6Client() {
    return this._dhcpv6Client;
  }
  public putDhcpv6Client(value: InterfaceLogicalFamilyInet6Dhcpv6Client) {
    this._dhcpv6Client.internalValue = value;
  }
  public resetDhcpv6Client() {
    this._dhcpv6Client.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpv6ClientInput() {
    return this._dhcpv6Client.internalValue;
  }

  // rpf_check - computed: false, optional: true, required: false
  private _rpfCheck = new InterfaceLogicalFamilyInet6RpfCheckOutputReference(this, "rpf_check");
  public get rpfCheck() {
    return this._rpfCheck;
  }
  public putRpfCheck(value: InterfaceLogicalFamilyInet6RpfCheck) {
    this._rpfCheck.internalValue = value;
  }
  public resetRpfCheck() {
    this._rpfCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpfCheckInput() {
    return this._rpfCheck.internalValue;
  }
}
export interface InterfaceLogicalTunnel {
  /**
  * Do not set DF bit on packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#allow_fragmentation InterfaceLogical#allow_fragmentation}
  */
  readonly allowFragmentation?: boolean | cdktf.IResolvable;
  /**
  * Tunnel destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#destination InterfaceLogical#destination}
  */
  readonly destination?: string;
  /**
  * Set DF bit on packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#do_not_fragment InterfaceLogical#do_not_fragment}
  */
  readonly doNotFragment?: boolean | cdktf.IResolvable;
  /**
  * Flow label field of IP6-header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#flow_label InterfaceLogical#flow_label}
  */
  readonly flowLabel?: number;
  /**
  * Don't enable path MTU discovery for tunnels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#no_path_mtu_discovery InterfaceLogical#no_path_mtu_discovery}
  */
  readonly noPathMtuDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Enable path MTU discovery for tunnels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#path_mtu_discovery InterfaceLogical#path_mtu_discovery}
  */
  readonly pathMtuDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Routing instance to which tunnel ends belong.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#routing_instance_destination InterfaceLogical#routing_instance_destination}
  */
  readonly routingInstanceDestination?: string;
  /**
  * Tunnel source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#source InterfaceLogical#source}
  */
  readonly source?: string;
  /**
  * TOS/Traffic class field of IP-header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#traffic_class InterfaceLogical#traffic_class}
  */
  readonly trafficClass?: number;
  /**
  * Time to live
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#ttl InterfaceLogical#ttl}
  */
  readonly ttl?: number;
}

export function interfaceLogicalTunnelToTerraform(struct?: InterfaceLogicalTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_fragmentation: cdktf.booleanToTerraform(struct!.allowFragmentation),
    destination: cdktf.stringToTerraform(struct!.destination),
    do_not_fragment: cdktf.booleanToTerraform(struct!.doNotFragment),
    flow_label: cdktf.numberToTerraform(struct!.flowLabel),
    no_path_mtu_discovery: cdktf.booleanToTerraform(struct!.noPathMtuDiscovery),
    path_mtu_discovery: cdktf.booleanToTerraform(struct!.pathMtuDiscovery),
    routing_instance_destination: cdktf.stringToTerraform(struct!.routingInstanceDestination),
    source: cdktf.stringToTerraform(struct!.source),
    traffic_class: cdktf.numberToTerraform(struct!.trafficClass),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function interfaceLogicalTunnelToHclTerraform(struct?: InterfaceLogicalTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_fragmentation: {
      value: cdktf.booleanToHclTerraform(struct!.allowFragmentation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    do_not_fragment: {
      value: cdktf.booleanToHclTerraform(struct!.doNotFragment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    flow_label: {
      value: cdktf.numberToHclTerraform(struct!.flowLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_path_mtu_discovery: {
      value: cdktf.booleanToHclTerraform(struct!.noPathMtuDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path_mtu_discovery: {
      value: cdktf.booleanToHclTerraform(struct!.pathMtuDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    routing_instance_destination: {
      value: cdktf.stringToHclTerraform(struct!.routingInstanceDestination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_class: {
      value: cdktf.numberToHclTerraform(struct!.trafficClass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceLogicalTunnelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InterfaceLogicalTunnel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowFragmentation !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowFragmentation = this._allowFragmentation;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._doNotFragment !== undefined) {
      hasAnyValues = true;
      internalValueResult.doNotFragment = this._doNotFragment;
    }
    if (this._flowLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowLabel = this._flowLabel;
    }
    if (this._noPathMtuDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.noPathMtuDiscovery = this._noPathMtuDiscovery;
    }
    if (this._pathMtuDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathMtuDiscovery = this._pathMtuDiscovery;
    }
    if (this._routingInstanceDestination !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingInstanceDestination = this._routingInstanceDestination;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._trafficClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficClass = this._trafficClass;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceLogicalTunnel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowFragmentation = undefined;
      this._destination = undefined;
      this._doNotFragment = undefined;
      this._flowLabel = undefined;
      this._noPathMtuDiscovery = undefined;
      this._pathMtuDiscovery = undefined;
      this._routingInstanceDestination = undefined;
      this._source = undefined;
      this._trafficClass = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowFragmentation = value.allowFragmentation;
      this._destination = value.destination;
      this._doNotFragment = value.doNotFragment;
      this._flowLabel = value.flowLabel;
      this._noPathMtuDiscovery = value.noPathMtuDiscovery;
      this._pathMtuDiscovery = value.pathMtuDiscovery;
      this._routingInstanceDestination = value.routingInstanceDestination;
      this._source = value.source;
      this._trafficClass = value.trafficClass;
      this._ttl = value.ttl;
    }
  }

  // allow_fragmentation - computed: false, optional: true, required: false
  private _allowFragmentation?: boolean | cdktf.IResolvable; 
  public get allowFragmentation() {
    return this.getBooleanAttribute('allow_fragmentation');
  }
  public set allowFragmentation(value: boolean | cdktf.IResolvable) {
    this._allowFragmentation = value;
  }
  public resetAllowFragmentation() {
    this._allowFragmentation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowFragmentationInput() {
    return this._allowFragmentation;
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // do_not_fragment - computed: false, optional: true, required: false
  private _doNotFragment?: boolean | cdktf.IResolvable; 
  public get doNotFragment() {
    return this.getBooleanAttribute('do_not_fragment');
  }
  public set doNotFragment(value: boolean | cdktf.IResolvable) {
    this._doNotFragment = value;
  }
  public resetDoNotFragment() {
    this._doNotFragment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doNotFragmentInput() {
    return this._doNotFragment;
  }

  // flow_label - computed: false, optional: true, required: false
  private _flowLabel?: number; 
  public get flowLabel() {
    return this.getNumberAttribute('flow_label');
  }
  public set flowLabel(value: number) {
    this._flowLabel = value;
  }
  public resetFlowLabel() {
    this._flowLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowLabelInput() {
    return this._flowLabel;
  }

  // no_path_mtu_discovery - computed: false, optional: true, required: false
  private _noPathMtuDiscovery?: boolean | cdktf.IResolvable; 
  public get noPathMtuDiscovery() {
    return this.getBooleanAttribute('no_path_mtu_discovery');
  }
  public set noPathMtuDiscovery(value: boolean | cdktf.IResolvable) {
    this._noPathMtuDiscovery = value;
  }
  public resetNoPathMtuDiscovery() {
    this._noPathMtuDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPathMtuDiscoveryInput() {
    return this._noPathMtuDiscovery;
  }

  // path_mtu_discovery - computed: false, optional: true, required: false
  private _pathMtuDiscovery?: boolean | cdktf.IResolvable; 
  public get pathMtuDiscovery() {
    return this.getBooleanAttribute('path_mtu_discovery');
  }
  public set pathMtuDiscovery(value: boolean | cdktf.IResolvable) {
    this._pathMtuDiscovery = value;
  }
  public resetPathMtuDiscovery() {
    this._pathMtuDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathMtuDiscoveryInput() {
    return this._pathMtuDiscovery;
  }

  // routing_instance_destination - computed: false, optional: true, required: false
  private _routingInstanceDestination?: string; 
  public get routingInstanceDestination() {
    return this.getStringAttribute('routing_instance_destination');
  }
  public set routingInstanceDestination(value: string) {
    this._routingInstanceDestination = value;
  }
  public resetRoutingInstanceDestination() {
    this._routingInstanceDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceDestinationInput() {
    return this._routingInstanceDestination;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // traffic_class - computed: false, optional: true, required: false
  private _trafficClass?: number; 
  public get trafficClass() {
    return this.getNumberAttribute('traffic_class');
  }
  public set trafficClass(value: number) {
    this._trafficClass = value;
  }
  public resetTrafficClass() {
    this._trafficClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficClassInput() {
    return this._trafficClass;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical junos_interface_logical}
*/
export class InterfaceLogical extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_interface_logical";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceLogical resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceLogical to import
  * @param importFromId The id of the existing InterfaceLogical that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceLogical to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_interface_logical", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/interface_logical junos_interface_logical} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceLogicalConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceLogicalConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_interface_logical',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.16.0',
        providerVersionConstraint: '2.16.0'
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
    this._disable = config.disable;
    this._encapsulation = config.encapsulation;
    this._name = config.name;
    this._routingInstance = config.routingInstance;
    this._securityInboundProtocols = config.securityInboundProtocols;
    this._securityInboundServices = config.securityInboundServices;
    this._securityZone = config.securityZone;
    this._st0AlsoOnDestroy = config.st0AlsoOnDestroy;
    this._virtualGatewayAcceptData = config.virtualGatewayAcceptData;
    this._virtualGatewayV4Mac = config.virtualGatewayV4Mac;
    this._virtualGatewayV6Mac = config.virtualGatewayV6Mac;
    this._vlanId = config.vlanId;
    this._vlanNoCompute = config.vlanNoCompute;
    this._familyInet.internalValue = config.familyInet;
    this._familyInet6.internalValue = config.familyInet6;
    this._tunnel.internalValue = config.tunnel;
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // encapsulation - computed: false, optional: true, required: false
  private _encapsulation?: string; 
  public get encapsulation() {
    return this.getStringAttribute('encapsulation');
  }
  public set encapsulation(value: string) {
    this._encapsulation = value;
  }
  public resetEncapsulation() {
    this._encapsulation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationInput() {
    return this._encapsulation;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // routing_instance - computed: false, optional: true, required: false
  private _routingInstance?: string; 
  public get routingInstance() {
    return this.getStringAttribute('routing_instance');
  }
  public set routingInstance(value: string) {
    this._routingInstance = value;
  }
  public resetRoutingInstance() {
    this._routingInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceInput() {
    return this._routingInstance;
  }

  // security_inbound_protocols - computed: false, optional: true, required: false
  private _securityInboundProtocols?: string[]; 
  public get securityInboundProtocols() {
    return cdktf.Fn.tolist(this.getListAttribute('security_inbound_protocols'));
  }
  public set securityInboundProtocols(value: string[]) {
    this._securityInboundProtocols = value;
  }
  public resetSecurityInboundProtocols() {
    this._securityInboundProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInboundProtocolsInput() {
    return this._securityInboundProtocols;
  }

  // security_inbound_services - computed: false, optional: true, required: false
  private _securityInboundServices?: string[]; 
  public get securityInboundServices() {
    return cdktf.Fn.tolist(this.getListAttribute('security_inbound_services'));
  }
  public set securityInboundServices(value: string[]) {
    this._securityInboundServices = value;
  }
  public resetSecurityInboundServices() {
    this._securityInboundServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInboundServicesInput() {
    return this._securityInboundServices;
  }

  // security_zone - computed: false, optional: true, required: false
  private _securityZone?: string; 
  public get securityZone() {
    return this.getStringAttribute('security_zone');
  }
  public set securityZone(value: string) {
    this._securityZone = value;
  }
  public resetSecurityZone() {
    this._securityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityZoneInput() {
    return this._securityZone;
  }

  // st0_also_on_destroy - computed: false, optional: true, required: false
  private _st0AlsoOnDestroy?: boolean | cdktf.IResolvable; 
  public get st0AlsoOnDestroy() {
    return this.getBooleanAttribute('st0_also_on_destroy');
  }
  public set st0AlsoOnDestroy(value: boolean | cdktf.IResolvable) {
    this._st0AlsoOnDestroy = value;
  }
  public resetSt0AlsoOnDestroy() {
    this._st0AlsoOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get st0AlsoOnDestroyInput() {
    return this._st0AlsoOnDestroy;
  }

  // virtual_gateway_accept_data - computed: false, optional: true, required: false
  private _virtualGatewayAcceptData?: boolean | cdktf.IResolvable; 
  public get virtualGatewayAcceptData() {
    return this.getBooleanAttribute('virtual_gateway_accept_data');
  }
  public set virtualGatewayAcceptData(value: boolean | cdktf.IResolvable) {
    this._virtualGatewayAcceptData = value;
  }
  public resetVirtualGatewayAcceptData() {
    this._virtualGatewayAcceptData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualGatewayAcceptDataInput() {
    return this._virtualGatewayAcceptData;
  }

  // virtual_gateway_v4_mac - computed: false, optional: true, required: false
  private _virtualGatewayV4Mac?: string; 
  public get virtualGatewayV4Mac() {
    return this.getStringAttribute('virtual_gateway_v4_mac');
  }
  public set virtualGatewayV4Mac(value: string) {
    this._virtualGatewayV4Mac = value;
  }
  public resetVirtualGatewayV4Mac() {
    this._virtualGatewayV4Mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualGatewayV4MacInput() {
    return this._virtualGatewayV4Mac;
  }

  // virtual_gateway_v6_mac - computed: false, optional: true, required: false
  private _virtualGatewayV6Mac?: string; 
  public get virtualGatewayV6Mac() {
    return this.getStringAttribute('virtual_gateway_v6_mac');
  }
  public set virtualGatewayV6Mac(value: string) {
    this._virtualGatewayV6Mac = value;
  }
  public resetVirtualGatewayV6Mac() {
    this._virtualGatewayV6Mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualGatewayV6MacInput() {
    return this._virtualGatewayV6Mac;
  }

  // vlan_id - computed: true, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vlan_no_compute - computed: false, optional: true, required: false
  private _vlanNoCompute?: boolean | cdktf.IResolvable; 
  public get vlanNoCompute() {
    return this.getBooleanAttribute('vlan_no_compute');
  }
  public set vlanNoCompute(value: boolean | cdktf.IResolvable) {
    this._vlanNoCompute = value;
  }
  public resetVlanNoCompute() {
    this._vlanNoCompute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanNoComputeInput() {
    return this._vlanNoCompute;
  }

  // family_inet - computed: false, optional: true, required: false
  private _familyInet = new InterfaceLogicalFamilyInetOutputReference(this, "family_inet");
  public get familyInet() {
    return this._familyInet;
  }
  public putFamilyInet(value: InterfaceLogicalFamilyInet) {
    this._familyInet.internalValue = value;
  }
  public resetFamilyInet() {
    this._familyInet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInetInput() {
    return this._familyInet.internalValue;
  }

  // family_inet6 - computed: false, optional: true, required: false
  private _familyInet6 = new InterfaceLogicalFamilyInet6OutputReference(this, "family_inet6");
  public get familyInet6() {
    return this._familyInet6;
  }
  public putFamilyInet6(value: InterfaceLogicalFamilyInet6) {
    this._familyInet6.internalValue = value;
  }
  public resetFamilyInet6() {
    this._familyInet6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInet6Input() {
    return this._familyInet6.internalValue;
  }

  // tunnel - computed: false, optional: true, required: false
  private _tunnel = new InterfaceLogicalTunnelOutputReference(this, "tunnel");
  public get tunnel() {
    return this._tunnel;
  }
  public putTunnel(value: InterfaceLogicalTunnel) {
    this._tunnel.internalValue = value;
  }
  public resetTunnel() {
    this._tunnel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInput() {
    return this._tunnel.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      encapsulation: cdktf.stringToTerraform(this._encapsulation),
      name: cdktf.stringToTerraform(this._name),
      routing_instance: cdktf.stringToTerraform(this._routingInstance),
      security_inbound_protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityInboundProtocols),
      security_inbound_services: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityInboundServices),
      security_zone: cdktf.stringToTerraform(this._securityZone),
      st0_also_on_destroy: cdktf.booleanToTerraform(this._st0AlsoOnDestroy),
      virtual_gateway_accept_data: cdktf.booleanToTerraform(this._virtualGatewayAcceptData),
      virtual_gateway_v4_mac: cdktf.stringToTerraform(this._virtualGatewayV4Mac),
      virtual_gateway_v6_mac: cdktf.stringToTerraform(this._virtualGatewayV6Mac),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
      vlan_no_compute: cdktf.booleanToTerraform(this._vlanNoCompute),
      family_inet: interfaceLogicalFamilyInetToTerraform(this._familyInet.internalValue),
      family_inet6: interfaceLogicalFamilyInet6ToTerraform(this._familyInet6.internalValue),
      tunnel: interfaceLogicalTunnelToTerraform(this._tunnel.internalValue),
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
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encapsulation: {
        value: cdktf.stringToHclTerraform(this._encapsulation),
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
      routing_instance: {
        value: cdktf.stringToHclTerraform(this._routingInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_inbound_protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityInboundProtocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      security_inbound_services: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityInboundServices),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      security_zone: {
        value: cdktf.stringToHclTerraform(this._securityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      st0_also_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._st0AlsoOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      virtual_gateway_accept_data: {
        value: cdktf.booleanToHclTerraform(this._virtualGatewayAcceptData),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      virtual_gateway_v4_mac: {
        value: cdktf.stringToHclTerraform(this._virtualGatewayV4Mac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_gateway_v6_mac: {
        value: cdktf.stringToHclTerraform(this._virtualGatewayV6Mac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_id: {
        value: cdktf.numberToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan_no_compute: {
        value: cdktf.booleanToHclTerraform(this._vlanNoCompute),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      family_inet: {
        value: interfaceLogicalFamilyInetToHclTerraform(this._familyInet.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "InterfaceLogicalFamilyInet",
      },
      family_inet6: {
        value: interfaceLogicalFamilyInet6ToHclTerraform(this._familyInet6.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "InterfaceLogicalFamilyInet6",
      },
      tunnel: {
        value: interfaceLogicalTunnelToHclTerraform(this._tunnel.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "InterfaceLogicalTunnel",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
