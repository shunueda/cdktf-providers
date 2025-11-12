// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_ldp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MplsLdpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure Address Family and its parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_ldp#address_families MplsLdp#address_families}
  */
  readonly addressFamilies?: MplsLdpAddressFamilies[] | cdktf.IResolvable;
  /**
  * State Advertisement Control
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_ldp#capabilities_sac MplsLdp#capabilities_sac}
  */
  readonly capabilitiesSac?: boolean | cdktf.IResolvable;
  /**
  * Disable exchanging PW FEC128 label bindings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_ldp#capabilities_sac_fec128_disable MplsLdp#capabilities_sac_fec128_disable}
  */
  readonly capabilitiesSacFec128Disable?: boolean | cdktf.IResolvable;
  /**
  * Disable exchanging PW FEC129 label bindings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_ldp#capabilities_sac_fec129_disable MplsLdp#capabilities_sac_fec129_disable}
  */
  readonly capabilitiesSacFec129Disable?: boolean | cdktf.IResolvable;
  /**
  * Disable exchanging IPv4 prefix label bindings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_ldp#capabilities_sac_ipv4_disable MplsLdp#capabilities_sac_ipv4_disable}
  */
  readonly capabilitiesSacIpv4Disable?: boolean | cdktf.IResolvable;
  /**
  * Disable exchanging IPv6 prefix label bindings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_ldp#capabilities_sac_ipv6_disable MplsLdp#capabilities_sac_ipv6_disable}
  */
  readonly capabilitiesSacIpv6Disable?: boolean | cdktf.IResolvable;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_ldp#delete_mode MplsLdp#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_ldp#device MplsLdp#device}
  */
  readonly device?: string;
  /**
  * Global sync up delay to be used after process restart
  *   - Range: `60`-`600`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_ldp#igp_sync_delay_on_proc_restart MplsLdp#igp_sync_delay_on_proc_restart}
  */
  readonly igpSyncDelayOnProcRestart?: number;
  /**
  * Interface sync-up delay after session up
  *   - Range: `5`-`300`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_ldp#igp_sync_delay_on_session_up MplsLdp#igp_sync_delay_on_session_up}
  */
  readonly igpSyncDelayOnSessionUp?: number;
  /**
  * Enable LDP on an interface and enter interface submode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_ldp#interfaces MplsLdp#interfaces}
  */
  readonly interfaces?: MplsLdpInterfaces[] | cdktf.IResolvable;
  /**
  * Configure mLDP parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_ldp#mldp MplsLdp#mldp}
  */
  readonly mldp?: boolean | cdktf.IResolvable;
  /**
  * Configure Address Family and its parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_ldp#mldp_address_families MplsLdp#mldp_address_families}
  */
  readonly mldpAddressFamilies?: MplsLdpMldpAddressFamilies[] | cdktf.IResolvable;
  /**
  * MLDP logging notifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_ldp#mldp_logging_notifications MplsLdp#mldp_logging_notifications}
  */
  readonly mldpLoggingNotifications?: boolean | cdktf.IResolvable;
  /**
  * Configure router Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_ldp#router_id MplsLdp#router_id}
  */
  readonly routerId?: string;
  /**
  * Configure session protection parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_ldp#session_protection MplsLdp#session_protection}
  */
  readonly sessionProtection?: boolean | cdktf.IResolvable;
}
export interface MplsLdpAddressFamilies {
  /**
  * Configure Address Family and its parameters
  *   - Choices: `ipv4`, `ipv6`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_ldp#af_name MplsLdp#af_name}
  */
  readonly afName: string;
  /**
  * IP access-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_ldp#label_local_allocate_for_access_list MplsLdp#label_local_allocate_for_access_list}
  */
  readonly labelLocalAllocateForAccessList?: string;
  /**
  * Allocate label for host routes only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_ldp#label_local_allocate_for_host_routes MplsLdp#label_local_allocate_for_host_routes}
  */
  readonly labelLocalAllocateForHostRoutes?: boolean | cdktf.IResolvable;
}

export function mplsLdpAddressFamiliesToTerraform(struct?: MplsLdpAddressFamilies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    af_name: cdktf.stringToTerraform(struct!.afName),
    label_local_allocate_for_access_list: cdktf.stringToTerraform(struct!.labelLocalAllocateForAccessList),
    label_local_allocate_for_host_routes: cdktf.booleanToTerraform(struct!.labelLocalAllocateForHostRoutes),
  }
}


export function mplsLdpAddressFamiliesToHclTerraform(struct?: MplsLdpAddressFamilies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    af_name: {
      value: cdktf.stringToHclTerraform(struct!.afName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_local_allocate_for_access_list: {
      value: cdktf.stringToHclTerraform(struct!.labelLocalAllocateForAccessList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_local_allocate_for_host_routes: {
      value: cdktf.booleanToHclTerraform(struct!.labelLocalAllocateForHostRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MplsLdpAddressFamiliesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MplsLdpAddressFamilies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._afName !== undefined) {
      hasAnyValues = true;
      internalValueResult.afName = this._afName;
    }
    if (this._labelLocalAllocateForAccessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelLocalAllocateForAccessList = this._labelLocalAllocateForAccessList;
    }
    if (this._labelLocalAllocateForHostRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelLocalAllocateForHostRoutes = this._labelLocalAllocateForHostRoutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MplsLdpAddressFamilies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._afName = undefined;
      this._labelLocalAllocateForAccessList = undefined;
      this._labelLocalAllocateForHostRoutes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._afName = value.afName;
      this._labelLocalAllocateForAccessList = value.labelLocalAllocateForAccessList;
      this._labelLocalAllocateForHostRoutes = value.labelLocalAllocateForHostRoutes;
    }
  }

  // af_name - computed: false, optional: false, required: true
  private _afName?: string; 
  public get afName() {
    return this.getStringAttribute('af_name');
  }
  public set afName(value: string) {
    this._afName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get afNameInput() {
    return this._afName;
  }

  // label_local_allocate_for_access_list - computed: false, optional: true, required: false
  private _labelLocalAllocateForAccessList?: string; 
  public get labelLocalAllocateForAccessList() {
    return this.getStringAttribute('label_local_allocate_for_access_list');
  }
  public set labelLocalAllocateForAccessList(value: string) {
    this._labelLocalAllocateForAccessList = value;
  }
  public resetLabelLocalAllocateForAccessList() {
    this._labelLocalAllocateForAccessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelLocalAllocateForAccessListInput() {
    return this._labelLocalAllocateForAccessList;
  }

  // label_local_allocate_for_host_routes - computed: false, optional: true, required: false
  private _labelLocalAllocateForHostRoutes?: boolean | cdktf.IResolvable; 
  public get labelLocalAllocateForHostRoutes() {
    return this.getBooleanAttribute('label_local_allocate_for_host_routes');
  }
  public set labelLocalAllocateForHostRoutes(value: boolean | cdktf.IResolvable) {
    this._labelLocalAllocateForHostRoutes = value;
  }
  public resetLabelLocalAllocateForHostRoutes() {
    this._labelLocalAllocateForHostRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelLocalAllocateForHostRoutesInput() {
    return this._labelLocalAllocateForHostRoutes;
  }
}

export class MplsLdpAddressFamiliesList extends cdktf.ComplexList {
  public internalValue? : MplsLdpAddressFamilies[] | cdktf.IResolvable

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
  public get(index: number): MplsLdpAddressFamiliesOutputReference {
    return new MplsLdpAddressFamiliesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MplsLdpInterfaces {
  /**
  * Enable LDP on an interface and enter interface submode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_ldp#interface_name MplsLdp#interface_name}
  */
  readonly interfaceName: string;
}

export function mplsLdpInterfacesToTerraform(struct?: MplsLdpInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
  }
}


export function mplsLdpInterfacesToHclTerraform(struct?: MplsLdpInterfaces | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MplsLdpInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MplsLdpInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MplsLdpInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaceName = value.interfaceName;
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
}

export class MplsLdpInterfacesList extends cdktf.ComplexList {
  public internalValue? : MplsLdpInterfaces[] | cdktf.IResolvable

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
  public get(index: number): MplsLdpInterfacesOutputReference {
    return new MplsLdpInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MplsLdpMldpAddressFamilies {
  /**
  * Enable recursive forwarding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_ldp#forwarding_recursive MplsLdp#forwarding_recursive}
  */
  readonly forwardingRecursive?: boolean | cdktf.IResolvable;
  /**
  * Route policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_ldp#forwarding_recursive_route_policy MplsLdp#forwarding_recursive_route_policy}
  */
  readonly forwardingRecursiveRoutePolicy?: string;
  /**
  * MBB delay
  *   - Range: `0`-`600`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_ldp#make_before_break_delay MplsLdp#make_before_break_delay}
  */
  readonly makeBeforeBreakDelay?: number;
  /**
  * Configure Address Family and its parameters
  *   - Choices: `ipv4`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_ldp#name MplsLdp#name}
  */
  readonly name: string;
  /**
  * MLDP Recursive FEC enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_ldp#recursive_fec MplsLdp#recursive_fec}
  */
  readonly recursiveFec?: boolean | cdktf.IResolvable;
}

export function mplsLdpMldpAddressFamiliesToTerraform(struct?: MplsLdpMldpAddressFamilies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forwarding_recursive: cdktf.booleanToTerraform(struct!.forwardingRecursive),
    forwarding_recursive_route_policy: cdktf.stringToTerraform(struct!.forwardingRecursiveRoutePolicy),
    make_before_break_delay: cdktf.numberToTerraform(struct!.makeBeforeBreakDelay),
    name: cdktf.stringToTerraform(struct!.name),
    recursive_fec: cdktf.booleanToTerraform(struct!.recursiveFec),
  }
}


export function mplsLdpMldpAddressFamiliesToHclTerraform(struct?: MplsLdpMldpAddressFamilies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forwarding_recursive: {
      value: cdktf.booleanToHclTerraform(struct!.forwardingRecursive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forwarding_recursive_route_policy: {
      value: cdktf.stringToHclTerraform(struct!.forwardingRecursiveRoutePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    make_before_break_delay: {
      value: cdktf.numberToHclTerraform(struct!.makeBeforeBreakDelay),
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
    recursive_fec: {
      value: cdktf.booleanToHclTerraform(struct!.recursiveFec),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MplsLdpMldpAddressFamiliesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MplsLdpMldpAddressFamilies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardingRecursive !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardingRecursive = this._forwardingRecursive;
    }
    if (this._forwardingRecursiveRoutePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardingRecursiveRoutePolicy = this._forwardingRecursiveRoutePolicy;
    }
    if (this._makeBeforeBreakDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.makeBeforeBreakDelay = this._makeBeforeBreakDelay;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._recursiveFec !== undefined) {
      hasAnyValues = true;
      internalValueResult.recursiveFec = this._recursiveFec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MplsLdpMldpAddressFamilies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forwardingRecursive = undefined;
      this._forwardingRecursiveRoutePolicy = undefined;
      this._makeBeforeBreakDelay = undefined;
      this._name = undefined;
      this._recursiveFec = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forwardingRecursive = value.forwardingRecursive;
      this._forwardingRecursiveRoutePolicy = value.forwardingRecursiveRoutePolicy;
      this._makeBeforeBreakDelay = value.makeBeforeBreakDelay;
      this._name = value.name;
      this._recursiveFec = value.recursiveFec;
    }
  }

  // forwarding_recursive - computed: false, optional: true, required: false
  private _forwardingRecursive?: boolean | cdktf.IResolvable; 
  public get forwardingRecursive() {
    return this.getBooleanAttribute('forwarding_recursive');
  }
  public set forwardingRecursive(value: boolean | cdktf.IResolvable) {
    this._forwardingRecursive = value;
  }
  public resetForwardingRecursive() {
    this._forwardingRecursive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingRecursiveInput() {
    return this._forwardingRecursive;
  }

  // forwarding_recursive_route_policy - computed: false, optional: true, required: false
  private _forwardingRecursiveRoutePolicy?: string; 
  public get forwardingRecursiveRoutePolicy() {
    return this.getStringAttribute('forwarding_recursive_route_policy');
  }
  public set forwardingRecursiveRoutePolicy(value: string) {
    this._forwardingRecursiveRoutePolicy = value;
  }
  public resetForwardingRecursiveRoutePolicy() {
    this._forwardingRecursiveRoutePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingRecursiveRoutePolicyInput() {
    return this._forwardingRecursiveRoutePolicy;
  }

  // make_before_break_delay - computed: false, optional: true, required: false
  private _makeBeforeBreakDelay?: number; 
  public get makeBeforeBreakDelay() {
    return this.getNumberAttribute('make_before_break_delay');
  }
  public set makeBeforeBreakDelay(value: number) {
    this._makeBeforeBreakDelay = value;
  }
  public resetMakeBeforeBreakDelay() {
    this._makeBeforeBreakDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get makeBeforeBreakDelayInput() {
    return this._makeBeforeBreakDelay;
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

  // recursive_fec - computed: false, optional: true, required: false
  private _recursiveFec?: boolean | cdktf.IResolvable; 
  public get recursiveFec() {
    return this.getBooleanAttribute('recursive_fec');
  }
  public set recursiveFec(value: boolean | cdktf.IResolvable) {
    this._recursiveFec = value;
  }
  public resetRecursiveFec() {
    this._recursiveFec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveFecInput() {
    return this._recursiveFec;
  }
}

export class MplsLdpMldpAddressFamiliesList extends cdktf.ComplexList {
  public internalValue? : MplsLdpMldpAddressFamilies[] | cdktf.IResolvable

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
  public get(index: number): MplsLdpMldpAddressFamiliesOutputReference {
    return new MplsLdpMldpAddressFamiliesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_ldp iosxr_mpls_ldp}
*/
export class MplsLdp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_mpls_ldp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MplsLdp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MplsLdp to import
  * @param importFromId The id of the existing MplsLdp that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_ldp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MplsLdp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_mpls_ldp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/mpls_ldp iosxr_mpls_ldp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MplsLdpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MplsLdpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxr_mpls_ldp',
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
    this._addressFamilies.internalValue = config.addressFamilies;
    this._capabilitiesSac = config.capabilitiesSac;
    this._capabilitiesSacFec128Disable = config.capabilitiesSacFec128Disable;
    this._capabilitiesSacFec129Disable = config.capabilitiesSacFec129Disable;
    this._capabilitiesSacIpv4Disable = config.capabilitiesSacIpv4Disable;
    this._capabilitiesSacIpv6Disable = config.capabilitiesSacIpv6Disable;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._igpSyncDelayOnProcRestart = config.igpSyncDelayOnProcRestart;
    this._igpSyncDelayOnSessionUp = config.igpSyncDelayOnSessionUp;
    this._interfaces.internalValue = config.interfaces;
    this._mldp = config.mldp;
    this._mldpAddressFamilies.internalValue = config.mldpAddressFamilies;
    this._mldpLoggingNotifications = config.mldpLoggingNotifications;
    this._routerId = config.routerId;
    this._sessionProtection = config.sessionProtection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_families - computed: false, optional: true, required: false
  private _addressFamilies = new MplsLdpAddressFamiliesList(this, "address_families", false);
  public get addressFamilies() {
    return this._addressFamilies;
  }
  public putAddressFamilies(value: MplsLdpAddressFamilies[] | cdktf.IResolvable) {
    this._addressFamilies.internalValue = value;
  }
  public resetAddressFamilies() {
    this._addressFamilies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamiliesInput() {
    return this._addressFamilies.internalValue;
  }

  // capabilities_sac - computed: false, optional: true, required: false
  private _capabilitiesSac?: boolean | cdktf.IResolvable; 
  public get capabilitiesSac() {
    return this.getBooleanAttribute('capabilities_sac');
  }
  public set capabilitiesSac(value: boolean | cdktf.IResolvable) {
    this._capabilitiesSac = value;
  }
  public resetCapabilitiesSac() {
    this._capabilitiesSac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesSacInput() {
    return this._capabilitiesSac;
  }

  // capabilities_sac_fec128_disable - computed: false, optional: true, required: false
  private _capabilitiesSacFec128Disable?: boolean | cdktf.IResolvable; 
  public get capabilitiesSacFec128Disable() {
    return this.getBooleanAttribute('capabilities_sac_fec128_disable');
  }
  public set capabilitiesSacFec128Disable(value: boolean | cdktf.IResolvable) {
    this._capabilitiesSacFec128Disable = value;
  }
  public resetCapabilitiesSacFec128Disable() {
    this._capabilitiesSacFec128Disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesSacFec128DisableInput() {
    return this._capabilitiesSacFec128Disable;
  }

  // capabilities_sac_fec129_disable - computed: false, optional: true, required: false
  private _capabilitiesSacFec129Disable?: boolean | cdktf.IResolvable; 
  public get capabilitiesSacFec129Disable() {
    return this.getBooleanAttribute('capabilities_sac_fec129_disable');
  }
  public set capabilitiesSacFec129Disable(value: boolean | cdktf.IResolvable) {
    this._capabilitiesSacFec129Disable = value;
  }
  public resetCapabilitiesSacFec129Disable() {
    this._capabilitiesSacFec129Disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesSacFec129DisableInput() {
    return this._capabilitiesSacFec129Disable;
  }

  // capabilities_sac_ipv4_disable - computed: false, optional: true, required: false
  private _capabilitiesSacIpv4Disable?: boolean | cdktf.IResolvable; 
  public get capabilitiesSacIpv4Disable() {
    return this.getBooleanAttribute('capabilities_sac_ipv4_disable');
  }
  public set capabilitiesSacIpv4Disable(value: boolean | cdktf.IResolvable) {
    this._capabilitiesSacIpv4Disable = value;
  }
  public resetCapabilitiesSacIpv4Disable() {
    this._capabilitiesSacIpv4Disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesSacIpv4DisableInput() {
    return this._capabilitiesSacIpv4Disable;
  }

  // capabilities_sac_ipv6_disable - computed: false, optional: true, required: false
  private _capabilitiesSacIpv6Disable?: boolean | cdktf.IResolvable; 
  public get capabilitiesSacIpv6Disable() {
    return this.getBooleanAttribute('capabilities_sac_ipv6_disable');
  }
  public set capabilitiesSacIpv6Disable(value: boolean | cdktf.IResolvable) {
    this._capabilitiesSacIpv6Disable = value;
  }
  public resetCapabilitiesSacIpv6Disable() {
    this._capabilitiesSacIpv6Disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesSacIpv6DisableInput() {
    return this._capabilitiesSacIpv6Disable;
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

  // igp_sync_delay_on_proc_restart - computed: false, optional: true, required: false
  private _igpSyncDelayOnProcRestart?: number; 
  public get igpSyncDelayOnProcRestart() {
    return this.getNumberAttribute('igp_sync_delay_on_proc_restart');
  }
  public set igpSyncDelayOnProcRestart(value: number) {
    this._igpSyncDelayOnProcRestart = value;
  }
  public resetIgpSyncDelayOnProcRestart() {
    this._igpSyncDelayOnProcRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igpSyncDelayOnProcRestartInput() {
    return this._igpSyncDelayOnProcRestart;
  }

  // igp_sync_delay_on_session_up - computed: false, optional: true, required: false
  private _igpSyncDelayOnSessionUp?: number; 
  public get igpSyncDelayOnSessionUp() {
    return this.getNumberAttribute('igp_sync_delay_on_session_up');
  }
  public set igpSyncDelayOnSessionUp(value: number) {
    this._igpSyncDelayOnSessionUp = value;
  }
  public resetIgpSyncDelayOnSessionUp() {
    this._igpSyncDelayOnSessionUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igpSyncDelayOnSessionUpInput() {
    return this._igpSyncDelayOnSessionUp;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new MplsLdpInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: MplsLdpInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // mldp - computed: false, optional: true, required: false
  private _mldp?: boolean | cdktf.IResolvable; 
  public get mldp() {
    return this.getBooleanAttribute('mldp');
  }
  public set mldp(value: boolean | cdktf.IResolvable) {
    this._mldp = value;
  }
  public resetMldp() {
    this._mldp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mldpInput() {
    return this._mldp;
  }

  // mldp_address_families - computed: false, optional: true, required: false
  private _mldpAddressFamilies = new MplsLdpMldpAddressFamiliesList(this, "mldp_address_families", false);
  public get mldpAddressFamilies() {
    return this._mldpAddressFamilies;
  }
  public putMldpAddressFamilies(value: MplsLdpMldpAddressFamilies[] | cdktf.IResolvable) {
    this._mldpAddressFamilies.internalValue = value;
  }
  public resetMldpAddressFamilies() {
    this._mldpAddressFamilies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mldpAddressFamiliesInput() {
    return this._mldpAddressFamilies.internalValue;
  }

  // mldp_logging_notifications - computed: false, optional: true, required: false
  private _mldpLoggingNotifications?: boolean | cdktf.IResolvable; 
  public get mldpLoggingNotifications() {
    return this.getBooleanAttribute('mldp_logging_notifications');
  }
  public set mldpLoggingNotifications(value: boolean | cdktf.IResolvable) {
    this._mldpLoggingNotifications = value;
  }
  public resetMldpLoggingNotifications() {
    this._mldpLoggingNotifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mldpLoggingNotificationsInput() {
    return this._mldpLoggingNotifications;
  }

  // router_id - computed: false, optional: true, required: false
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  public resetRouterId() {
    this._routerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }

  // session_protection - computed: false, optional: true, required: false
  private _sessionProtection?: boolean | cdktf.IResolvable; 
  public get sessionProtection() {
    return this.getBooleanAttribute('session_protection');
  }
  public set sessionProtection(value: boolean | cdktf.IResolvable) {
    this._sessionProtection = value;
  }
  public resetSessionProtection() {
    this._sessionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionProtectionInput() {
    return this._sessionProtection;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_families: cdktf.listMapper(mplsLdpAddressFamiliesToTerraform, false)(this._addressFamilies.internalValue),
      capabilities_sac: cdktf.booleanToTerraform(this._capabilitiesSac),
      capabilities_sac_fec128_disable: cdktf.booleanToTerraform(this._capabilitiesSacFec128Disable),
      capabilities_sac_fec129_disable: cdktf.booleanToTerraform(this._capabilitiesSacFec129Disable),
      capabilities_sac_ipv4_disable: cdktf.booleanToTerraform(this._capabilitiesSacIpv4Disable),
      capabilities_sac_ipv6_disable: cdktf.booleanToTerraform(this._capabilitiesSacIpv6Disable),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      igp_sync_delay_on_proc_restart: cdktf.numberToTerraform(this._igpSyncDelayOnProcRestart),
      igp_sync_delay_on_session_up: cdktf.numberToTerraform(this._igpSyncDelayOnSessionUp),
      interfaces: cdktf.listMapper(mplsLdpInterfacesToTerraform, false)(this._interfaces.internalValue),
      mldp: cdktf.booleanToTerraform(this._mldp),
      mldp_address_families: cdktf.listMapper(mplsLdpMldpAddressFamiliesToTerraform, false)(this._mldpAddressFamilies.internalValue),
      mldp_logging_notifications: cdktf.booleanToTerraform(this._mldpLoggingNotifications),
      router_id: cdktf.stringToTerraform(this._routerId),
      session_protection: cdktf.booleanToTerraform(this._sessionProtection),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_families: {
        value: cdktf.listMapperHcl(mplsLdpAddressFamiliesToHclTerraform, false)(this._addressFamilies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MplsLdpAddressFamiliesList",
      },
      capabilities_sac: {
        value: cdktf.booleanToHclTerraform(this._capabilitiesSac),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      capabilities_sac_fec128_disable: {
        value: cdktf.booleanToHclTerraform(this._capabilitiesSacFec128Disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      capabilities_sac_fec129_disable: {
        value: cdktf.booleanToHclTerraform(this._capabilitiesSacFec129Disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      capabilities_sac_ipv4_disable: {
        value: cdktf.booleanToHclTerraform(this._capabilitiesSacIpv4Disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      capabilities_sac_ipv6_disable: {
        value: cdktf.booleanToHclTerraform(this._capabilitiesSacIpv6Disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      igp_sync_delay_on_proc_restart: {
        value: cdktf.numberToHclTerraform(this._igpSyncDelayOnProcRestart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      igp_sync_delay_on_session_up: {
        value: cdktf.numberToHclTerraform(this._igpSyncDelayOnSessionUp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      interfaces: {
        value: cdktf.listMapperHcl(mplsLdpInterfacesToHclTerraform, false)(this._interfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MplsLdpInterfacesList",
      },
      mldp: {
        value: cdktf.booleanToHclTerraform(this._mldp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mldp_address_families: {
        value: cdktf.listMapperHcl(mplsLdpMldpAddressFamiliesToHclTerraform, false)(this._mldpAddressFamilies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MplsLdpMldpAddressFamiliesList",
      },
      mldp_logging_notifications: {
        value: cdktf.booleanToHclTerraform(this._mldpLoggingNotifications),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      router_id: {
        value: cdktf.stringToHclTerraform(this._routerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_protection: {
        value: cdktf.booleanToHclTerraform(this._sessionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
