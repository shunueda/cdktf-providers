// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterBgpNeighborGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enter Address Family command mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group#address_families RouterBgpNeighborGroup#address_families}
  */
  readonly addressFamilies?: RouterBgpNeighborGroupAddressFamilies[] | cdktf.IResolvable;
  /**
  * time in milliseconds
  *   - Range: `0`-`999`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group#advertisement_interval_milliseconds RouterBgpNeighborGroup#advertisement_interval_milliseconds}
  */
  readonly advertisementIntervalMilliseconds?: number;
  /**
  * time in seconds
  *   - Range: `0`-`600`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group#advertisement_interval_seconds RouterBgpNeighborGroup#advertisement_interval_seconds}
  */
  readonly advertisementIntervalSeconds?: number;
  /**
  * Prevent keychain from being inherited from parent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group#ao_inheritance_disable RouterBgpNeighborGroup#ao_inheritance_disable}
  */
  readonly aoInheritanceDisable?: boolean | cdktf.IResolvable;
  /**
  * Accept new connection even if AO mismatched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group#ao_key_chain_accept_mismatch RouterBgpNeighborGroup#ao_key_chain_accept_mismatch}
  */
  readonly aoKeyChainAcceptMismatch?: boolean | cdktf.IResolvable;
  /**
  * Include/Exclude other TCP options in the header
  *   - Choices: `disable`, `enable`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group#ao_key_chain_include_tcp_options RouterBgpNeighborGroup#ao_key_chain_include_tcp_options}
  */
  readonly aoKeyChainIncludeTcpOptions?: string;
  /**
  * Name of the key chain - maximum 32 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group#ao_key_chain_name RouterBgpNeighborGroup#ao_key_chain_name}
  */
  readonly aoKeyChainName?: string;
  /**
  * bgp as-number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group#as_number RouterBgpNeighborGroup#as_number}
  */
  readonly asNumber: string;
  /**
  * Enable Fast detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group#bfd_fast_detect RouterBgpNeighborGroup#bfd_fast_detect}
  */
  readonly bfdFastDetect?: boolean | cdktf.IResolvable;
  /**
  * Prevent bfd settings from being inherited from the parent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group#bfd_fast_detect_disable RouterBgpNeighborGroup#bfd_fast_detect_disable}
  */
  readonly bfdFastDetectDisable?: boolean | cdktf.IResolvable;
  /**
  * (Deprecated) Hold down neighbor session until BFD is up (based on IOS-XR proprietary mechanism)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group#bfd_fast_detect_strict_mode RouterBgpNeighborGroup#bfd_fast_detect_strict_mode}
  */
  readonly bfdFastDetectStrictMode?: boolean | cdktf.IResolvable;
  /**
  * Hello interval
  *   - Range: `3`-`30000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group#bfd_minimum_interval RouterBgpNeighborGroup#bfd_minimum_interval}
  */
  readonly bfdMinimumInterval?: number;
  /**
  * Detect multiplier
  *   - Range: `2`-`16`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group#bfd_multiplier RouterBgpNeighborGroup#bfd_multiplier}
  */
  readonly bfdMultiplier?: number;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group#delete_mode RouterBgpNeighborGroup#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * Neighbor specific description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group#description RouterBgpNeighborGroup#description}
  */
  readonly description?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group#device RouterBgpNeighborGroup#device}
  */
  readonly device?: string;
  /**
  * AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group#local_as RouterBgpNeighborGroup#local_as}
  */
  readonly localAs?: string;
  /**
  * Dual-AS mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group#local_as_dual_as RouterBgpNeighborGroup#local_as_dual_as}
  */
  readonly localAsDualAs?: boolean | cdktf.IResolvable;
  /**
  * Prevent local AS from being inherited from parent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group#local_as_inheritance_disable RouterBgpNeighborGroup#local_as_inheritance_disable}
  */
  readonly localAsInheritanceDisable?: boolean | cdktf.IResolvable;
  /**
  * Do not prepend local AS to announcements from this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group#local_as_no_prepend RouterBgpNeighborGroup#local_as_no_prepend}
  */
  readonly localAsNoPrepend?: boolean | cdktf.IResolvable;
  /**
  * Prepend only local AS to announcements to this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group#local_as_replace_as RouterBgpNeighborGroup#local_as_replace_as}
  */
  readonly localAsReplaceAs?: boolean | cdktf.IResolvable;
  /**
  * Neighbor-group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group#name RouterBgpNeighborGroup#name}
  */
  readonly name: string;
  /**
  * Specifies an ENCRYPTED password will follow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group#password RouterBgpNeighborGroup#password}
  */
  readonly password?: string;
  /**
  * Prevent password from being inherited from parent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group#password_inheritance_disable RouterBgpNeighborGroup#password_inheritance_disable}
  */
  readonly passwordInheritanceDisable?: boolean | cdktf.IResolvable;
  /**
  * Set remote AS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group#remote_as RouterBgpNeighborGroup#remote_as}
  */
  readonly remoteAs?: string;
  /**
  * Holdtime
  *   - Range: `3`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group#timers_holdtime RouterBgpNeighborGroup#timers_holdtime}
  */
  readonly timersHoldtime?: number;
  /**
  * Minimum acceptable holdtime from neighbor
  *   - Range: `3`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group#timers_holdtime_minimum_acceptable_holdtime RouterBgpNeighborGroup#timers_holdtime_minimum_acceptable_holdtime}
  */
  readonly timersHoldtimeMinimumAcceptableHoldtime?: number;
  /**
  * Keepalive interval
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group#timers_keepalive_interval RouterBgpNeighborGroup#timers_keepalive_interval}
  */
  readonly timersKeepaliveInterval?: number;
  /**
  * Disable keepalives/hold time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group#timers_keepalive_zero RouterBgpNeighborGroup#timers_keepalive_zero}
  */
  readonly timersKeepaliveZero?: boolean | cdktf.IResolvable;
  /**
  * Disable keepalives/hold time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group#timers_keepalive_zero_holdtime_zero RouterBgpNeighborGroup#timers_keepalive_zero_holdtime_zero}
  */
  readonly timersKeepaliveZeroHoldtimeZero?: boolean | cdktf.IResolvable;
  /**
  * Minimum acceptable holdtime from neighbor
  *   - Range: `3`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group#timers_keepalive_zero_minimum_acceptable_holdtime RouterBgpNeighborGroup#timers_keepalive_zero_minimum_acceptable_holdtime}
  */
  readonly timersKeepaliveZeroMinimumAcceptableHoldtime?: number;
  /**
  * Source of routing updates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group#update_source RouterBgpNeighborGroup#update_source}
  */
  readonly updateSource?: string;
}
export interface RouterBgpNeighborGroupAddressFamilies {
  /**
  * Enter Address Family command mode
  *   - Choices: `all-address-family`, `ipv4-flowspec`, `ipv4-labeled-unicast`, `ipv4-mdt`, `ipv4-multicast`, `ipv4-mvpn`, `ipv4-rt-filter`, `ipv4-sr-policy`, `ipv4-tunnel`, `ipv4-unicast`, `ipv6-flowspec`, `ipv6-labeled-unicast`, `ipv6-multicast`, `ipv6-mvpn`, `ipv6-sr-policy`, `ipv6-unicast`, `l2vpn-evpn`, `l2vpn-mspw`, `l2vpn-vpls-vpws`, `link-state-link-state`, `vpnv4-flowspec`, `vpnv4-multicast`, `vpnv4-unicast`, `vpnv6-flowspec`, `vpnv6-multicast`, `vpnv6-unicast`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group#af_name RouterBgpNeighborGroup#af_name}
  */
  readonly afName: string;
  /**
  * Disable the next hop calculation for this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group#next_hop_self RouterBgpNeighborGroup#next_hop_self}
  */
  readonly nextHopSelf?: boolean | cdktf.IResolvable;
  /**
  * Prevent next-hop-self from being inherited from the parent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group#next_hop_self_inheritance_disable RouterBgpNeighborGroup#next_hop_self_inheritance_disable}
  */
  readonly nextHopSelfInheritanceDisable?: boolean | cdktf.IResolvable;
  /**
  * Apply route policy to inbound routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group#route_policy_in RouterBgpNeighborGroup#route_policy_in}
  */
  readonly routePolicyIn?: string;
  /**
  * Apply route policy to outbound routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group#route_policy_out RouterBgpNeighborGroup#route_policy_out}
  */
  readonly routePolicyOut?: string;
  /**
  * Configure a neighbor as Route Reflector client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group#route_reflector_client RouterBgpNeighborGroup#route_reflector_client}
  */
  readonly routeReflectorClient?: boolean | cdktf.IResolvable;
  /**
  * Prevent route-reflector-client from being inherited from the parent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group#route_reflector_client_inheritance_disable RouterBgpNeighborGroup#route_reflector_client_inheritance_disable}
  */
  readonly routeReflectorClientInheritanceDisable?: boolean | cdktf.IResolvable;
  /**
  * Always use soft reconfig, even if route refresh is supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group#soft_reconfiguration_inbound_always RouterBgpNeighborGroup#soft_reconfiguration_inbound_always}
  */
  readonly softReconfigurationInboundAlways?: boolean | cdktf.IResolvable;
  /**
  * Inherit configuration for this address-family from an af-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group#use_af_group RouterBgpNeighborGroup#use_af_group}
  */
  readonly useAfGroup?: string;
}

export function routerBgpNeighborGroupAddressFamiliesToTerraform(struct?: RouterBgpNeighborGroupAddressFamilies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    af_name: cdktf.stringToTerraform(struct!.afName),
    next_hop_self: cdktf.booleanToTerraform(struct!.nextHopSelf),
    next_hop_self_inheritance_disable: cdktf.booleanToTerraform(struct!.nextHopSelfInheritanceDisable),
    route_policy_in: cdktf.stringToTerraform(struct!.routePolicyIn),
    route_policy_out: cdktf.stringToTerraform(struct!.routePolicyOut),
    route_reflector_client: cdktf.booleanToTerraform(struct!.routeReflectorClient),
    route_reflector_client_inheritance_disable: cdktf.booleanToTerraform(struct!.routeReflectorClientInheritanceDisable),
    soft_reconfiguration_inbound_always: cdktf.booleanToTerraform(struct!.softReconfigurationInboundAlways),
    use_af_group: cdktf.stringToTerraform(struct!.useAfGroup),
  }
}


export function routerBgpNeighborGroupAddressFamiliesToHclTerraform(struct?: RouterBgpNeighborGroupAddressFamilies | cdktf.IResolvable): any {
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
    next_hop_self: {
      value: cdktf.booleanToHclTerraform(struct!.nextHopSelf),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    next_hop_self_inheritance_disable: {
      value: cdktf.booleanToHclTerraform(struct!.nextHopSelfInheritanceDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    route_policy_in: {
      value: cdktf.stringToHclTerraform(struct!.routePolicyIn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_policy_out: {
      value: cdktf.stringToHclTerraform(struct!.routePolicyOut),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_reflector_client: {
      value: cdktf.booleanToHclTerraform(struct!.routeReflectorClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    route_reflector_client_inheritance_disable: {
      value: cdktf.booleanToHclTerraform(struct!.routeReflectorClientInheritanceDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    soft_reconfiguration_inbound_always: {
      value: cdktf.booleanToHclTerraform(struct!.softReconfigurationInboundAlways),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_af_group: {
      value: cdktf.stringToHclTerraform(struct!.useAfGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpNeighborGroupAddressFamiliesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpNeighborGroupAddressFamilies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._afName !== undefined) {
      hasAnyValues = true;
      internalValueResult.afName = this._afName;
    }
    if (this._nextHopSelf !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopSelf = this._nextHopSelf;
    }
    if (this._nextHopSelfInheritanceDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopSelfInheritanceDisable = this._nextHopSelfInheritanceDisable;
    }
    if (this._routePolicyIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicyIn = this._routePolicyIn;
    }
    if (this._routePolicyOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicyOut = this._routePolicyOut;
    }
    if (this._routeReflectorClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeReflectorClient = this._routeReflectorClient;
    }
    if (this._routeReflectorClientInheritanceDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeReflectorClientInheritanceDisable = this._routeReflectorClientInheritanceDisable;
    }
    if (this._softReconfigurationInboundAlways !== undefined) {
      hasAnyValues = true;
      internalValueResult.softReconfigurationInboundAlways = this._softReconfigurationInboundAlways;
    }
    if (this._useAfGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAfGroup = this._useAfGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpNeighborGroupAddressFamilies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._afName = undefined;
      this._nextHopSelf = undefined;
      this._nextHopSelfInheritanceDisable = undefined;
      this._routePolicyIn = undefined;
      this._routePolicyOut = undefined;
      this._routeReflectorClient = undefined;
      this._routeReflectorClientInheritanceDisable = undefined;
      this._softReconfigurationInboundAlways = undefined;
      this._useAfGroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._afName = value.afName;
      this._nextHopSelf = value.nextHopSelf;
      this._nextHopSelfInheritanceDisable = value.nextHopSelfInheritanceDisable;
      this._routePolicyIn = value.routePolicyIn;
      this._routePolicyOut = value.routePolicyOut;
      this._routeReflectorClient = value.routeReflectorClient;
      this._routeReflectorClientInheritanceDisable = value.routeReflectorClientInheritanceDisable;
      this._softReconfigurationInboundAlways = value.softReconfigurationInboundAlways;
      this._useAfGroup = value.useAfGroup;
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

  // next_hop_self - computed: false, optional: true, required: false
  private _nextHopSelf?: boolean | cdktf.IResolvable; 
  public get nextHopSelf() {
    return this.getBooleanAttribute('next_hop_self');
  }
  public set nextHopSelf(value: boolean | cdktf.IResolvable) {
    this._nextHopSelf = value;
  }
  public resetNextHopSelf() {
    this._nextHopSelf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopSelfInput() {
    return this._nextHopSelf;
  }

  // next_hop_self_inheritance_disable - computed: false, optional: true, required: false
  private _nextHopSelfInheritanceDisable?: boolean | cdktf.IResolvable; 
  public get nextHopSelfInheritanceDisable() {
    return this.getBooleanAttribute('next_hop_self_inheritance_disable');
  }
  public set nextHopSelfInheritanceDisable(value: boolean | cdktf.IResolvable) {
    this._nextHopSelfInheritanceDisable = value;
  }
  public resetNextHopSelfInheritanceDisable() {
    this._nextHopSelfInheritanceDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopSelfInheritanceDisableInput() {
    return this._nextHopSelfInheritanceDisable;
  }

  // route_policy_in - computed: false, optional: true, required: false
  private _routePolicyIn?: string; 
  public get routePolicyIn() {
    return this.getStringAttribute('route_policy_in');
  }
  public set routePolicyIn(value: string) {
    this._routePolicyIn = value;
  }
  public resetRoutePolicyIn() {
    this._routePolicyIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyInInput() {
    return this._routePolicyIn;
  }

  // route_policy_out - computed: false, optional: true, required: false
  private _routePolicyOut?: string; 
  public get routePolicyOut() {
    return this.getStringAttribute('route_policy_out');
  }
  public set routePolicyOut(value: string) {
    this._routePolicyOut = value;
  }
  public resetRoutePolicyOut() {
    this._routePolicyOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyOutInput() {
    return this._routePolicyOut;
  }

  // route_reflector_client - computed: false, optional: true, required: false
  private _routeReflectorClient?: boolean | cdktf.IResolvable; 
  public get routeReflectorClient() {
    return this.getBooleanAttribute('route_reflector_client');
  }
  public set routeReflectorClient(value: boolean | cdktf.IResolvable) {
    this._routeReflectorClient = value;
  }
  public resetRouteReflectorClient() {
    this._routeReflectorClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeReflectorClientInput() {
    return this._routeReflectorClient;
  }

  // route_reflector_client_inheritance_disable - computed: false, optional: true, required: false
  private _routeReflectorClientInheritanceDisable?: boolean | cdktf.IResolvable; 
  public get routeReflectorClientInheritanceDisable() {
    return this.getBooleanAttribute('route_reflector_client_inheritance_disable');
  }
  public set routeReflectorClientInheritanceDisable(value: boolean | cdktf.IResolvable) {
    this._routeReflectorClientInheritanceDisable = value;
  }
  public resetRouteReflectorClientInheritanceDisable() {
    this._routeReflectorClientInheritanceDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeReflectorClientInheritanceDisableInput() {
    return this._routeReflectorClientInheritanceDisable;
  }

  // soft_reconfiguration_inbound_always - computed: false, optional: true, required: false
  private _softReconfigurationInboundAlways?: boolean | cdktf.IResolvable; 
  public get softReconfigurationInboundAlways() {
    return this.getBooleanAttribute('soft_reconfiguration_inbound_always');
  }
  public set softReconfigurationInboundAlways(value: boolean | cdktf.IResolvable) {
    this._softReconfigurationInboundAlways = value;
  }
  public resetSoftReconfigurationInboundAlways() {
    this._softReconfigurationInboundAlways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softReconfigurationInboundAlwaysInput() {
    return this._softReconfigurationInboundAlways;
  }

  // use_af_group - computed: false, optional: true, required: false
  private _useAfGroup?: string; 
  public get useAfGroup() {
    return this.getStringAttribute('use_af_group');
  }
  public set useAfGroup(value: string) {
    this._useAfGroup = value;
  }
  public resetUseAfGroup() {
    this._useAfGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAfGroupInput() {
    return this._useAfGroup;
  }
}

export class RouterBgpNeighborGroupAddressFamiliesList extends cdktf.ComplexList {
  public internalValue? : RouterBgpNeighborGroupAddressFamilies[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpNeighborGroupAddressFamiliesOutputReference {
    return new RouterBgpNeighborGroupAddressFamiliesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group iosxr_router_bgp_neighbor_group}
*/
export class RouterBgpNeighborGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_router_bgp_neighbor_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterBgpNeighborGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterBgpNeighborGroup to import
  * @param importFromId The id of the existing RouterBgpNeighborGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterBgpNeighborGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_router_bgp_neighbor_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_group iosxr_router_bgp_neighbor_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterBgpNeighborGroupConfig
  */
  public constructor(scope: Construct, id: string, config: RouterBgpNeighborGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_router_bgp_neighbor_group',
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
    this._addressFamilies.internalValue = config.addressFamilies;
    this._advertisementIntervalMilliseconds = config.advertisementIntervalMilliseconds;
    this._advertisementIntervalSeconds = config.advertisementIntervalSeconds;
    this._aoInheritanceDisable = config.aoInheritanceDisable;
    this._aoKeyChainAcceptMismatch = config.aoKeyChainAcceptMismatch;
    this._aoKeyChainIncludeTcpOptions = config.aoKeyChainIncludeTcpOptions;
    this._aoKeyChainName = config.aoKeyChainName;
    this._asNumber = config.asNumber;
    this._bfdFastDetect = config.bfdFastDetect;
    this._bfdFastDetectDisable = config.bfdFastDetectDisable;
    this._bfdFastDetectStrictMode = config.bfdFastDetectStrictMode;
    this._bfdMinimumInterval = config.bfdMinimumInterval;
    this._bfdMultiplier = config.bfdMultiplier;
    this._deleteMode = config.deleteMode;
    this._description = config.description;
    this._device = config.device;
    this._localAs = config.localAs;
    this._localAsDualAs = config.localAsDualAs;
    this._localAsInheritanceDisable = config.localAsInheritanceDisable;
    this._localAsNoPrepend = config.localAsNoPrepend;
    this._localAsReplaceAs = config.localAsReplaceAs;
    this._name = config.name;
    this._password = config.password;
    this._passwordInheritanceDisable = config.passwordInheritanceDisable;
    this._remoteAs = config.remoteAs;
    this._timersHoldtime = config.timersHoldtime;
    this._timersHoldtimeMinimumAcceptableHoldtime = config.timersHoldtimeMinimumAcceptableHoldtime;
    this._timersKeepaliveInterval = config.timersKeepaliveInterval;
    this._timersKeepaliveZero = config.timersKeepaliveZero;
    this._timersKeepaliveZeroHoldtimeZero = config.timersKeepaliveZeroHoldtimeZero;
    this._timersKeepaliveZeroMinimumAcceptableHoldtime = config.timersKeepaliveZeroMinimumAcceptableHoldtime;
    this._updateSource = config.updateSource;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_families - computed: false, optional: true, required: false
  private _addressFamilies = new RouterBgpNeighborGroupAddressFamiliesList(this, "address_families", false);
  public get addressFamilies() {
    return this._addressFamilies;
  }
  public putAddressFamilies(value: RouterBgpNeighborGroupAddressFamilies[] | cdktf.IResolvable) {
    this._addressFamilies.internalValue = value;
  }
  public resetAddressFamilies() {
    this._addressFamilies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamiliesInput() {
    return this._addressFamilies.internalValue;
  }

  // advertisement_interval_milliseconds - computed: false, optional: true, required: false
  private _advertisementIntervalMilliseconds?: number; 
  public get advertisementIntervalMilliseconds() {
    return this.getNumberAttribute('advertisement_interval_milliseconds');
  }
  public set advertisementIntervalMilliseconds(value: number) {
    this._advertisementIntervalMilliseconds = value;
  }
  public resetAdvertisementIntervalMilliseconds() {
    this._advertisementIntervalMilliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisementIntervalMillisecondsInput() {
    return this._advertisementIntervalMilliseconds;
  }

  // advertisement_interval_seconds - computed: false, optional: true, required: false
  private _advertisementIntervalSeconds?: number; 
  public get advertisementIntervalSeconds() {
    return this.getNumberAttribute('advertisement_interval_seconds');
  }
  public set advertisementIntervalSeconds(value: number) {
    this._advertisementIntervalSeconds = value;
  }
  public resetAdvertisementIntervalSeconds() {
    this._advertisementIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisementIntervalSecondsInput() {
    return this._advertisementIntervalSeconds;
  }

  // ao_inheritance_disable - computed: false, optional: true, required: false
  private _aoInheritanceDisable?: boolean | cdktf.IResolvable; 
  public get aoInheritanceDisable() {
    return this.getBooleanAttribute('ao_inheritance_disable');
  }
  public set aoInheritanceDisable(value: boolean | cdktf.IResolvable) {
    this._aoInheritanceDisable = value;
  }
  public resetAoInheritanceDisable() {
    this._aoInheritanceDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aoInheritanceDisableInput() {
    return this._aoInheritanceDisable;
  }

  // ao_key_chain_accept_mismatch - computed: false, optional: true, required: false
  private _aoKeyChainAcceptMismatch?: boolean | cdktf.IResolvable; 
  public get aoKeyChainAcceptMismatch() {
    return this.getBooleanAttribute('ao_key_chain_accept_mismatch');
  }
  public set aoKeyChainAcceptMismatch(value: boolean | cdktf.IResolvable) {
    this._aoKeyChainAcceptMismatch = value;
  }
  public resetAoKeyChainAcceptMismatch() {
    this._aoKeyChainAcceptMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aoKeyChainAcceptMismatchInput() {
    return this._aoKeyChainAcceptMismatch;
  }

  // ao_key_chain_include_tcp_options - computed: false, optional: true, required: false
  private _aoKeyChainIncludeTcpOptions?: string; 
  public get aoKeyChainIncludeTcpOptions() {
    return this.getStringAttribute('ao_key_chain_include_tcp_options');
  }
  public set aoKeyChainIncludeTcpOptions(value: string) {
    this._aoKeyChainIncludeTcpOptions = value;
  }
  public resetAoKeyChainIncludeTcpOptions() {
    this._aoKeyChainIncludeTcpOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aoKeyChainIncludeTcpOptionsInput() {
    return this._aoKeyChainIncludeTcpOptions;
  }

  // ao_key_chain_name - computed: false, optional: true, required: false
  private _aoKeyChainName?: string; 
  public get aoKeyChainName() {
    return this.getStringAttribute('ao_key_chain_name');
  }
  public set aoKeyChainName(value: string) {
    this._aoKeyChainName = value;
  }
  public resetAoKeyChainName() {
    this._aoKeyChainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aoKeyChainNameInput() {
    return this._aoKeyChainName;
  }

  // as_number - computed: false, optional: false, required: true
  private _asNumber?: string; 
  public get asNumber() {
    return this.getStringAttribute('as_number');
  }
  public set asNumber(value: string) {
    this._asNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumberInput() {
    return this._asNumber;
  }

  // bfd_fast_detect - computed: false, optional: true, required: false
  private _bfdFastDetect?: boolean | cdktf.IResolvable; 
  public get bfdFastDetect() {
    return this.getBooleanAttribute('bfd_fast_detect');
  }
  public set bfdFastDetect(value: boolean | cdktf.IResolvable) {
    this._bfdFastDetect = value;
  }
  public resetBfdFastDetect() {
    this._bfdFastDetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdFastDetectInput() {
    return this._bfdFastDetect;
  }

  // bfd_fast_detect_disable - computed: false, optional: true, required: false
  private _bfdFastDetectDisable?: boolean | cdktf.IResolvable; 
  public get bfdFastDetectDisable() {
    return this.getBooleanAttribute('bfd_fast_detect_disable');
  }
  public set bfdFastDetectDisable(value: boolean | cdktf.IResolvable) {
    this._bfdFastDetectDisable = value;
  }
  public resetBfdFastDetectDisable() {
    this._bfdFastDetectDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdFastDetectDisableInput() {
    return this._bfdFastDetectDisable;
  }

  // bfd_fast_detect_strict_mode - computed: false, optional: true, required: false
  private _bfdFastDetectStrictMode?: boolean | cdktf.IResolvable; 
  public get bfdFastDetectStrictMode() {
    return this.getBooleanAttribute('bfd_fast_detect_strict_mode');
  }
  public set bfdFastDetectStrictMode(value: boolean | cdktf.IResolvable) {
    this._bfdFastDetectStrictMode = value;
  }
  public resetBfdFastDetectStrictMode() {
    this._bfdFastDetectStrictMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdFastDetectStrictModeInput() {
    return this._bfdFastDetectStrictMode;
  }

  // bfd_minimum_interval - computed: false, optional: true, required: false
  private _bfdMinimumInterval?: number; 
  public get bfdMinimumInterval() {
    return this.getNumberAttribute('bfd_minimum_interval');
  }
  public set bfdMinimumInterval(value: number) {
    this._bfdMinimumInterval = value;
  }
  public resetBfdMinimumInterval() {
    this._bfdMinimumInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdMinimumIntervalInput() {
    return this._bfdMinimumInterval;
  }

  // bfd_multiplier - computed: false, optional: true, required: false
  private _bfdMultiplier?: number; 
  public get bfdMultiplier() {
    return this.getNumberAttribute('bfd_multiplier');
  }
  public set bfdMultiplier(value: number) {
    this._bfdMultiplier = value;
  }
  public resetBfdMultiplier() {
    this._bfdMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdMultiplierInput() {
    return this._bfdMultiplier;
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

  // local_as - computed: false, optional: true, required: false
  private _localAs?: string; 
  public get localAs() {
    return this.getStringAttribute('local_as');
  }
  public set localAs(value: string) {
    this._localAs = value;
  }
  public resetLocalAs() {
    this._localAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsInput() {
    return this._localAs;
  }

  // local_as_dual_as - computed: false, optional: true, required: false
  private _localAsDualAs?: boolean | cdktf.IResolvable; 
  public get localAsDualAs() {
    return this.getBooleanAttribute('local_as_dual_as');
  }
  public set localAsDualAs(value: boolean | cdktf.IResolvable) {
    this._localAsDualAs = value;
  }
  public resetLocalAsDualAs() {
    this._localAsDualAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsDualAsInput() {
    return this._localAsDualAs;
  }

  // local_as_inheritance_disable - computed: false, optional: true, required: false
  private _localAsInheritanceDisable?: boolean | cdktf.IResolvable; 
  public get localAsInheritanceDisable() {
    return this.getBooleanAttribute('local_as_inheritance_disable');
  }
  public set localAsInheritanceDisable(value: boolean | cdktf.IResolvable) {
    this._localAsInheritanceDisable = value;
  }
  public resetLocalAsInheritanceDisable() {
    this._localAsInheritanceDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsInheritanceDisableInput() {
    return this._localAsInheritanceDisable;
  }

  // local_as_no_prepend - computed: false, optional: true, required: false
  private _localAsNoPrepend?: boolean | cdktf.IResolvable; 
  public get localAsNoPrepend() {
    return this.getBooleanAttribute('local_as_no_prepend');
  }
  public set localAsNoPrepend(value: boolean | cdktf.IResolvable) {
    this._localAsNoPrepend = value;
  }
  public resetLocalAsNoPrepend() {
    this._localAsNoPrepend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsNoPrependInput() {
    return this._localAsNoPrepend;
  }

  // local_as_replace_as - computed: false, optional: true, required: false
  private _localAsReplaceAs?: boolean | cdktf.IResolvable; 
  public get localAsReplaceAs() {
    return this.getBooleanAttribute('local_as_replace_as');
  }
  public set localAsReplaceAs(value: boolean | cdktf.IResolvable) {
    this._localAsReplaceAs = value;
  }
  public resetLocalAsReplaceAs() {
    this._localAsReplaceAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsReplaceAsInput() {
    return this._localAsReplaceAs;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_inheritance_disable - computed: false, optional: true, required: false
  private _passwordInheritanceDisable?: boolean | cdktf.IResolvable; 
  public get passwordInheritanceDisable() {
    return this.getBooleanAttribute('password_inheritance_disable');
  }
  public set passwordInheritanceDisable(value: boolean | cdktf.IResolvable) {
    this._passwordInheritanceDisable = value;
  }
  public resetPasswordInheritanceDisable() {
    this._passwordInheritanceDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInheritanceDisableInput() {
    return this._passwordInheritanceDisable;
  }

  // remote_as - computed: false, optional: true, required: false
  private _remoteAs?: string; 
  public get remoteAs() {
    return this.getStringAttribute('remote_as');
  }
  public set remoteAs(value: string) {
    this._remoteAs = value;
  }
  public resetRemoteAs() {
    this._remoteAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAsInput() {
    return this._remoteAs;
  }

  // timers_holdtime - computed: false, optional: true, required: false
  private _timersHoldtime?: number; 
  public get timersHoldtime() {
    return this.getNumberAttribute('timers_holdtime');
  }
  public set timersHoldtime(value: number) {
    this._timersHoldtime = value;
  }
  public resetTimersHoldtime() {
    this._timersHoldtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersHoldtimeInput() {
    return this._timersHoldtime;
  }

  // timers_holdtime_minimum_acceptable_holdtime - computed: false, optional: true, required: false
  private _timersHoldtimeMinimumAcceptableHoldtime?: number; 
  public get timersHoldtimeMinimumAcceptableHoldtime() {
    return this.getNumberAttribute('timers_holdtime_minimum_acceptable_holdtime');
  }
  public set timersHoldtimeMinimumAcceptableHoldtime(value: number) {
    this._timersHoldtimeMinimumAcceptableHoldtime = value;
  }
  public resetTimersHoldtimeMinimumAcceptableHoldtime() {
    this._timersHoldtimeMinimumAcceptableHoldtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersHoldtimeMinimumAcceptableHoldtimeInput() {
    return this._timersHoldtimeMinimumAcceptableHoldtime;
  }

  // timers_keepalive_interval - computed: false, optional: true, required: false
  private _timersKeepaliveInterval?: number; 
  public get timersKeepaliveInterval() {
    return this.getNumberAttribute('timers_keepalive_interval');
  }
  public set timersKeepaliveInterval(value: number) {
    this._timersKeepaliveInterval = value;
  }
  public resetTimersKeepaliveInterval() {
    this._timersKeepaliveInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersKeepaliveIntervalInput() {
    return this._timersKeepaliveInterval;
  }

  // timers_keepalive_zero - computed: false, optional: true, required: false
  private _timersKeepaliveZero?: boolean | cdktf.IResolvable; 
  public get timersKeepaliveZero() {
    return this.getBooleanAttribute('timers_keepalive_zero');
  }
  public set timersKeepaliveZero(value: boolean | cdktf.IResolvable) {
    this._timersKeepaliveZero = value;
  }
  public resetTimersKeepaliveZero() {
    this._timersKeepaliveZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersKeepaliveZeroInput() {
    return this._timersKeepaliveZero;
  }

  // timers_keepalive_zero_holdtime_zero - computed: false, optional: true, required: false
  private _timersKeepaliveZeroHoldtimeZero?: boolean | cdktf.IResolvable; 
  public get timersKeepaliveZeroHoldtimeZero() {
    return this.getBooleanAttribute('timers_keepalive_zero_holdtime_zero');
  }
  public set timersKeepaliveZeroHoldtimeZero(value: boolean | cdktf.IResolvable) {
    this._timersKeepaliveZeroHoldtimeZero = value;
  }
  public resetTimersKeepaliveZeroHoldtimeZero() {
    this._timersKeepaliveZeroHoldtimeZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersKeepaliveZeroHoldtimeZeroInput() {
    return this._timersKeepaliveZeroHoldtimeZero;
  }

  // timers_keepalive_zero_minimum_acceptable_holdtime - computed: false, optional: true, required: false
  private _timersKeepaliveZeroMinimumAcceptableHoldtime?: number; 
  public get timersKeepaliveZeroMinimumAcceptableHoldtime() {
    return this.getNumberAttribute('timers_keepalive_zero_minimum_acceptable_holdtime');
  }
  public set timersKeepaliveZeroMinimumAcceptableHoldtime(value: number) {
    this._timersKeepaliveZeroMinimumAcceptableHoldtime = value;
  }
  public resetTimersKeepaliveZeroMinimumAcceptableHoldtime() {
    this._timersKeepaliveZeroMinimumAcceptableHoldtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersKeepaliveZeroMinimumAcceptableHoldtimeInput() {
    return this._timersKeepaliveZeroMinimumAcceptableHoldtime;
  }

  // update_source - computed: false, optional: true, required: false
  private _updateSource?: string; 
  public get updateSource() {
    return this.getStringAttribute('update_source');
  }
  public set updateSource(value: string) {
    this._updateSource = value;
  }
  public resetUpdateSource() {
    this._updateSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateSourceInput() {
    return this._updateSource;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_families: cdktf.listMapper(routerBgpNeighborGroupAddressFamiliesToTerraform, false)(this._addressFamilies.internalValue),
      advertisement_interval_milliseconds: cdktf.numberToTerraform(this._advertisementIntervalMilliseconds),
      advertisement_interval_seconds: cdktf.numberToTerraform(this._advertisementIntervalSeconds),
      ao_inheritance_disable: cdktf.booleanToTerraform(this._aoInheritanceDisable),
      ao_key_chain_accept_mismatch: cdktf.booleanToTerraform(this._aoKeyChainAcceptMismatch),
      ao_key_chain_include_tcp_options: cdktf.stringToTerraform(this._aoKeyChainIncludeTcpOptions),
      ao_key_chain_name: cdktf.stringToTerraform(this._aoKeyChainName),
      as_number: cdktf.stringToTerraform(this._asNumber),
      bfd_fast_detect: cdktf.booleanToTerraform(this._bfdFastDetect),
      bfd_fast_detect_disable: cdktf.booleanToTerraform(this._bfdFastDetectDisable),
      bfd_fast_detect_strict_mode: cdktf.booleanToTerraform(this._bfdFastDetectStrictMode),
      bfd_minimum_interval: cdktf.numberToTerraform(this._bfdMinimumInterval),
      bfd_multiplier: cdktf.numberToTerraform(this._bfdMultiplier),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      description: cdktf.stringToTerraform(this._description),
      device: cdktf.stringToTerraform(this._device),
      local_as: cdktf.stringToTerraform(this._localAs),
      local_as_dual_as: cdktf.booleanToTerraform(this._localAsDualAs),
      local_as_inheritance_disable: cdktf.booleanToTerraform(this._localAsInheritanceDisable),
      local_as_no_prepend: cdktf.booleanToTerraform(this._localAsNoPrepend),
      local_as_replace_as: cdktf.booleanToTerraform(this._localAsReplaceAs),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      password_inheritance_disable: cdktf.booleanToTerraform(this._passwordInheritanceDisable),
      remote_as: cdktf.stringToTerraform(this._remoteAs),
      timers_holdtime: cdktf.numberToTerraform(this._timersHoldtime),
      timers_holdtime_minimum_acceptable_holdtime: cdktf.numberToTerraform(this._timersHoldtimeMinimumAcceptableHoldtime),
      timers_keepalive_interval: cdktf.numberToTerraform(this._timersKeepaliveInterval),
      timers_keepalive_zero: cdktf.booleanToTerraform(this._timersKeepaliveZero),
      timers_keepalive_zero_holdtime_zero: cdktf.booleanToTerraform(this._timersKeepaliveZeroHoldtimeZero),
      timers_keepalive_zero_minimum_acceptable_holdtime: cdktf.numberToTerraform(this._timersKeepaliveZeroMinimumAcceptableHoldtime),
      update_source: cdktf.stringToTerraform(this._updateSource),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_families: {
        value: cdktf.listMapperHcl(routerBgpNeighborGroupAddressFamiliesToHclTerraform, false)(this._addressFamilies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpNeighborGroupAddressFamiliesList",
      },
      advertisement_interval_milliseconds: {
        value: cdktf.numberToHclTerraform(this._advertisementIntervalMilliseconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      advertisement_interval_seconds: {
        value: cdktf.numberToHclTerraform(this._advertisementIntervalSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ao_inheritance_disable: {
        value: cdktf.booleanToHclTerraform(this._aoInheritanceDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ao_key_chain_accept_mismatch: {
        value: cdktf.booleanToHclTerraform(this._aoKeyChainAcceptMismatch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ao_key_chain_include_tcp_options: {
        value: cdktf.stringToHclTerraform(this._aoKeyChainIncludeTcpOptions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ao_key_chain_name: {
        value: cdktf.stringToHclTerraform(this._aoKeyChainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      as_number: {
        value: cdktf.stringToHclTerraform(this._asNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bfd_fast_detect: {
        value: cdktf.booleanToHclTerraform(this._bfdFastDetect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bfd_fast_detect_disable: {
        value: cdktf.booleanToHclTerraform(this._bfdFastDetectDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bfd_fast_detect_strict_mode: {
        value: cdktf.booleanToHclTerraform(this._bfdFastDetectStrictMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bfd_minimum_interval: {
        value: cdktf.numberToHclTerraform(this._bfdMinimumInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfd_multiplier: {
        value: cdktf.numberToHclTerraform(this._bfdMultiplier),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      local_as: {
        value: cdktf.stringToHclTerraform(this._localAs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_as_dual_as: {
        value: cdktf.booleanToHclTerraform(this._localAsDualAs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      local_as_inheritance_disable: {
        value: cdktf.booleanToHclTerraform(this._localAsInheritanceDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      local_as_no_prepend: {
        value: cdktf.booleanToHclTerraform(this._localAsNoPrepend),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      local_as_replace_as: {
        value: cdktf.booleanToHclTerraform(this._localAsReplaceAs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_inheritance_disable: {
        value: cdktf.booleanToHclTerraform(this._passwordInheritanceDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remote_as: {
        value: cdktf.stringToHclTerraform(this._remoteAs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timers_holdtime: {
        value: cdktf.numberToHclTerraform(this._timersHoldtime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timers_holdtime_minimum_acceptable_holdtime: {
        value: cdktf.numberToHclTerraform(this._timersHoldtimeMinimumAcceptableHoldtime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timers_keepalive_interval: {
        value: cdktf.numberToHclTerraform(this._timersKeepaliveInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timers_keepalive_zero: {
        value: cdktf.booleanToHclTerraform(this._timersKeepaliveZero),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timers_keepalive_zero_holdtime_zero: {
        value: cdktf.booleanToHclTerraform(this._timersKeepaliveZeroHoldtimeZero),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timers_keepalive_zero_minimum_acceptable_holdtime: {
        value: cdktf.numberToHclTerraform(this._timersKeepaliveZeroMinimumAcceptableHoldtime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      update_source: {
        value: cdktf.stringToHclTerraform(this._updateSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
