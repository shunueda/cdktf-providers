// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vpn_bgp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplianceVpnBgpConfig extends cdktf.TerraformMetaArguments {
  /**
  * An Autonomous System Number (ASN) is required if you are to run BGP and peer with another BGP Speaker outside of the Auto VPN domain. This ASN will be applied to the entire Auto VPN domain. The entire 4-byte ASN range is supported. So, the ASN must be an integer between 1 and 4294967295. When absent, this field is not updated. If no value exists then it defaults to 64512.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vpn_bgp#as_number ApplianceVpnBgp#as_number}
  */
  readonly asNumber?: number;
  /**
  * Boolean value to enable or disable the BGP configuration. When BGP is enabled, the asNumber (ASN) will be autopopulated with the preconfigured ASN at other Hubs or a default value if there is no ASN configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vpn_bgp#enabled ApplianceVpnBgp#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The iBGP holdtimer in seconds. The iBGP holdtimer must be an integer between 12 and 240. When absent, this field is not updated. If no value exists then it defaults to 240.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vpn_bgp#ibgp_hold_timer ApplianceVpnBgp#ibgp_hold_timer}
  */
  readonly ibgpHoldTimer?: number;
  /**
  * List of BGP neighbors. This list replaces the existing set of neighbors. When absent, this field is not updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vpn_bgp#neighbors ApplianceVpnBgp#neighbors}
  */
  readonly neighbors?: ApplianceVpnBgpNeighbors[] | cdktf.IResolvable;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vpn_bgp#network_id ApplianceVpnBgp#network_id}
  */
  readonly networkId: string;
}
export interface ApplianceVpnBgpNeighbors {
  /**
  * When this feature is on, the Meraki device will advertise routes learned from other Autonomous Systems, thereby allowing traffic between Autonomous Systems to transit this AS. When absent, it defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vpn_bgp#allow_transit ApplianceVpnBgp#allow_transit}
  */
  readonly allowTransit?: boolean | cdktf.IResolvable;
  /**
  * Password to configure MD5 authentication between BGP peers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vpn_bgp#authentication_password ApplianceVpnBgp#authentication_password}
  */
  readonly authenticationPassword?: string;
  /**
  * The eBGP hold timer in seconds for each neighbor. The eBGP hold timer must be an integer between 12 and 240.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vpn_bgp#ebgp_hold_timer ApplianceVpnBgp#ebgp_hold_timer}
  */
  readonly ebgpHoldTimer: number;
  /**
  * Configure this if the neighbor is not adjacent. The eBGP multi-hop must be an integer between 1 and 255.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vpn_bgp#ebgp_multihop ApplianceVpnBgp#ebgp_multihop}
  */
  readonly ebgpMultihop: number;
  /**
  * The IPv4 address of the neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vpn_bgp#ip ApplianceVpnBgp#ip}
  */
  readonly ip: string;
  /**
  * The IPv6 address of the neighbor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vpn_bgp#ipv6_address ApplianceVpnBgp#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Configures the local metric associated with routes received from the remote peer. Routes from peers with lower metrics are will be preferred. Must be an integer between 0 and 4294967295. MED is 6th in the decision tree when identical routes from multiple peers exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vpn_bgp#multi_exit_discriminator ApplianceVpnBgp#multi_exit_discriminator}
  */
  readonly multiExitDiscriminator?: number;
  /**
  * The IPv4 address of the remote BGP peer that will establish a TCP session with the local MX.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vpn_bgp#next_hop_ip ApplianceVpnBgp#next_hop_ip}
  */
  readonly nextHopIp?: string;
  /**
  * Prepends the AS_PATH BGP Attribute associated with routes received from the remote peer. Configurable value of ASNs to prepend. Length of the array may not exceed 10, and each ASN in the array must be an integer between 1 and 4294967295. AS_PATH is 4th in the decision tree when identical routes from multiple peers exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vpn_bgp#path_prepend ApplianceVpnBgp#path_prepend}
  */
  readonly pathPrepend?: number[];
  /**
  * The receive limit is the maximum number of routes that can be received from any BGP peer. The receive limit must be an integer between 0 and 2147483647. When absent, it defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vpn_bgp#receive_limit ApplianceVpnBgp#receive_limit}
  */
  readonly receiveLimit?: number;
  /**
  * Remote ASN of the neighbor. The remote ASN must be an integer between 1 and 4294967295.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vpn_bgp#remote_as_number ApplianceVpnBgp#remote_as_number}
  */
  readonly remoteAsNumber: number;
  /**
  * The output interface for peering with the remote BGP peer. Valid values are: `wan1`, `wan2` or `vlan{VLAN ID}`(e.g. `vlan123`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vpn_bgp#source_interface ApplianceVpnBgp#source_interface}
  */
  readonly sourceInterface?: string;
  /**
  * Boolean value to enable or disable BGP TTL security.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vpn_bgp#ttl_security_enabled ApplianceVpnBgp#ttl_security_enabled}
  */
  readonly ttlSecurityEnabled?: boolean | cdktf.IResolvable;
  /**
  * Sets the local weight for routes received from the remote peer. Routes from peers with higher weights will be preferred. Must be an integer between 0 and 49.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vpn_bgp#weight ApplianceVpnBgp#weight}
  */
  readonly weight?: number;
}

export function applianceVpnBgpNeighborsToTerraform(struct?: ApplianceVpnBgpNeighbors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_transit: cdktf.booleanToTerraform(struct!.allowTransit),
    authentication_password: cdktf.stringToTerraform(struct!.authenticationPassword),
    ebgp_hold_timer: cdktf.numberToTerraform(struct!.ebgpHoldTimer),
    ebgp_multihop: cdktf.numberToTerraform(struct!.ebgpMultihop),
    ip: cdktf.stringToTerraform(struct!.ip),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    multi_exit_discriminator: cdktf.numberToTerraform(struct!.multiExitDiscriminator),
    next_hop_ip: cdktf.stringToTerraform(struct!.nextHopIp),
    path_prepend: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.pathPrepend),
    receive_limit: cdktf.numberToTerraform(struct!.receiveLimit),
    remote_as_number: cdktf.numberToTerraform(struct!.remoteAsNumber),
    source_interface: cdktf.stringToTerraform(struct!.sourceInterface),
    ttl_security_enabled: cdktf.booleanToTerraform(struct!.ttlSecurityEnabled),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function applianceVpnBgpNeighborsToHclTerraform(struct?: ApplianceVpnBgpNeighbors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_transit: {
      value: cdktf.booleanToHclTerraform(struct!.allowTransit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    authentication_password: {
      value: cdktf.stringToHclTerraform(struct!.authenticationPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ebgp_hold_timer: {
      value: cdktf.numberToHclTerraform(struct!.ebgpHoldTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebgp_multihop: {
      value: cdktf.numberToHclTerraform(struct!.ebgpMultihop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_exit_discriminator: {
      value: cdktf.numberToHclTerraform(struct!.multiExitDiscriminator),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    next_hop_ip: {
      value: cdktf.stringToHclTerraform(struct!.nextHopIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_prepend: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.pathPrepend),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    receive_limit: {
      value: cdktf.numberToHclTerraform(struct!.receiveLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remote_as_number: {
      value: cdktf.numberToHclTerraform(struct!.remoteAsNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_interface: {
      value: cdktf.stringToHclTerraform(struct!.sourceInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl_security_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ttlSecurityEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class ApplianceVpnBgpNeighborsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplianceVpnBgpNeighbors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowTransit !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowTransit = this._allowTransit;
    }
    if (this._authenticationPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationPassword = this._authenticationPassword;
    }
    if (this._ebgpHoldTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebgpHoldTimer = this._ebgpHoldTimer;
    }
    if (this._ebgpMultihop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebgpMultihop = this._ebgpMultihop;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._multiExitDiscriminator !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiExitDiscriminator = this._multiExitDiscriminator;
    }
    if (this._nextHopIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopIp = this._nextHopIp;
    }
    if (this._pathPrepend !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPrepend = this._pathPrepend;
    }
    if (this._receiveLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiveLimit = this._receiveLimit;
    }
    if (this._remoteAsNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAsNumber = this._remoteAsNumber;
    }
    if (this._sourceInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterface = this._sourceInterface;
    }
    if (this._ttlSecurityEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttlSecurityEnabled = this._ttlSecurityEnabled;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplianceVpnBgpNeighbors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowTransit = undefined;
      this._authenticationPassword = undefined;
      this._ebgpHoldTimer = undefined;
      this._ebgpMultihop = undefined;
      this._ip = undefined;
      this._ipv6Address = undefined;
      this._multiExitDiscriminator = undefined;
      this._nextHopIp = undefined;
      this._pathPrepend = undefined;
      this._receiveLimit = undefined;
      this._remoteAsNumber = undefined;
      this._sourceInterface = undefined;
      this._ttlSecurityEnabled = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowTransit = value.allowTransit;
      this._authenticationPassword = value.authenticationPassword;
      this._ebgpHoldTimer = value.ebgpHoldTimer;
      this._ebgpMultihop = value.ebgpMultihop;
      this._ip = value.ip;
      this._ipv6Address = value.ipv6Address;
      this._multiExitDiscriminator = value.multiExitDiscriminator;
      this._nextHopIp = value.nextHopIp;
      this._pathPrepend = value.pathPrepend;
      this._receiveLimit = value.receiveLimit;
      this._remoteAsNumber = value.remoteAsNumber;
      this._sourceInterface = value.sourceInterface;
      this._ttlSecurityEnabled = value.ttlSecurityEnabled;
      this._weight = value.weight;
    }
  }

  // allow_transit - computed: false, optional: true, required: false
  private _allowTransit?: boolean | cdktf.IResolvable; 
  public get allowTransit() {
    return this.getBooleanAttribute('allow_transit');
  }
  public set allowTransit(value: boolean | cdktf.IResolvable) {
    this._allowTransit = value;
  }
  public resetAllowTransit() {
    this._allowTransit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowTransitInput() {
    return this._allowTransit;
  }

  // authentication_password - computed: false, optional: true, required: false
  private _authenticationPassword?: string; 
  public get authenticationPassword() {
    return this.getStringAttribute('authentication_password');
  }
  public set authenticationPassword(value: string) {
    this._authenticationPassword = value;
  }
  public resetAuthenticationPassword() {
    this._authenticationPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationPasswordInput() {
    return this._authenticationPassword;
  }

  // ebgp_hold_timer - computed: false, optional: false, required: true
  private _ebgpHoldTimer?: number; 
  public get ebgpHoldTimer() {
    return this.getNumberAttribute('ebgp_hold_timer');
  }
  public set ebgpHoldTimer(value: number) {
    this._ebgpHoldTimer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpHoldTimerInput() {
    return this._ebgpHoldTimer;
  }

  // ebgp_multihop - computed: false, optional: false, required: true
  private _ebgpMultihop?: number; 
  public get ebgpMultihop() {
    return this.getNumberAttribute('ebgp_multihop');
  }
  public set ebgpMultihop(value: number) {
    this._ebgpMultihop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpMultihopInput() {
    return this._ebgpMultihop;
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

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // multi_exit_discriminator - computed: false, optional: true, required: false
  private _multiExitDiscriminator?: number; 
  public get multiExitDiscriminator() {
    return this.getNumberAttribute('multi_exit_discriminator');
  }
  public set multiExitDiscriminator(value: number) {
    this._multiExitDiscriminator = value;
  }
  public resetMultiExitDiscriminator() {
    this._multiExitDiscriminator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiExitDiscriminatorInput() {
    return this._multiExitDiscriminator;
  }

  // next_hop_ip - computed: false, optional: true, required: false
  private _nextHopIp?: string; 
  public get nextHopIp() {
    return this.getStringAttribute('next_hop_ip');
  }
  public set nextHopIp(value: string) {
    this._nextHopIp = value;
  }
  public resetNextHopIp() {
    this._nextHopIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopIpInput() {
    return this._nextHopIp;
  }

  // path_prepend - computed: false, optional: true, required: false
  private _pathPrepend?: number[]; 
  public get pathPrepend() {
    return this.getNumberListAttribute('path_prepend');
  }
  public set pathPrepend(value: number[]) {
    this._pathPrepend = value;
  }
  public resetPathPrepend() {
    this._pathPrepend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrependInput() {
    return this._pathPrepend;
  }

  // receive_limit - computed: false, optional: true, required: false
  private _receiveLimit?: number; 
  public get receiveLimit() {
    return this.getNumberAttribute('receive_limit');
  }
  public set receiveLimit(value: number) {
    this._receiveLimit = value;
  }
  public resetReceiveLimit() {
    this._receiveLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveLimitInput() {
    return this._receiveLimit;
  }

  // remote_as_number - computed: false, optional: false, required: true
  private _remoteAsNumber?: number; 
  public get remoteAsNumber() {
    return this.getNumberAttribute('remote_as_number');
  }
  public set remoteAsNumber(value: number) {
    this._remoteAsNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAsNumberInput() {
    return this._remoteAsNumber;
  }

  // source_interface - computed: false, optional: true, required: false
  private _sourceInterface?: string; 
  public get sourceInterface() {
    return this.getStringAttribute('source_interface');
  }
  public set sourceInterface(value: string) {
    this._sourceInterface = value;
  }
  public resetSourceInterface() {
    this._sourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceInput() {
    return this._sourceInterface;
  }

  // ttl_security_enabled - computed: false, optional: true, required: false
  private _ttlSecurityEnabled?: boolean | cdktf.IResolvable; 
  public get ttlSecurityEnabled() {
    return this.getBooleanAttribute('ttl_security_enabled');
  }
  public set ttlSecurityEnabled(value: boolean | cdktf.IResolvable) {
    this._ttlSecurityEnabled = value;
  }
  public resetTtlSecurityEnabled() {
    this._ttlSecurityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlSecurityEnabledInput() {
    return this._ttlSecurityEnabled;
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

export class ApplianceVpnBgpNeighborsList extends cdktf.ComplexList {
  public internalValue? : ApplianceVpnBgpNeighbors[] | cdktf.IResolvable

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
  public get(index: number): ApplianceVpnBgpNeighborsOutputReference {
    return new ApplianceVpnBgpNeighborsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vpn_bgp meraki_appliance_vpn_bgp}
*/
export class ApplianceVpnBgp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_vpn_bgp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplianceVpnBgp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplianceVpnBgp to import
  * @param importFromId The id of the existing ApplianceVpnBgp that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vpn_bgp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplianceVpnBgp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_vpn_bgp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vpn_bgp meraki_appliance_vpn_bgp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplianceVpnBgpConfig
  */
  public constructor(scope: Construct, id: string, config: ApplianceVpnBgpConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_vpn_bgp',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1',
        providerVersionConstraint: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asNumber = config.asNumber;
    this._enabled = config.enabled;
    this._ibgpHoldTimer = config.ibgpHoldTimer;
    this._neighbors.internalValue = config.neighbors;
    this._networkId = config.networkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // as_number - computed: false, optional: true, required: false
  private _asNumber?: number; 
  public get asNumber() {
    return this.getNumberAttribute('as_number');
  }
  public set asNumber(value: number) {
    this._asNumber = value;
  }
  public resetAsNumber() {
    this._asNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumberInput() {
    return this._asNumber;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // ibgp_hold_timer - computed: false, optional: true, required: false
  private _ibgpHoldTimer?: number; 
  public get ibgpHoldTimer() {
    return this.getNumberAttribute('ibgp_hold_timer');
  }
  public set ibgpHoldTimer(value: number) {
    this._ibgpHoldTimer = value;
  }
  public resetIbgpHoldTimer() {
    this._ibgpHoldTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibgpHoldTimerInput() {
    return this._ibgpHoldTimer;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // neighbors - computed: false, optional: true, required: false
  private _neighbors = new ApplianceVpnBgpNeighborsList(this, "neighbors", false);
  public get neighbors() {
    return this._neighbors;
  }
  public putNeighbors(value: ApplianceVpnBgpNeighbors[] | cdktf.IResolvable) {
    this._neighbors.internalValue = value;
  }
  public resetNeighbors() {
    this._neighbors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborsInput() {
    return this._neighbors.internalValue;
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      as_number: cdktf.numberToTerraform(this._asNumber),
      enabled: cdktf.booleanToTerraform(this._enabled),
      ibgp_hold_timer: cdktf.numberToTerraform(this._ibgpHoldTimer),
      neighbors: cdktf.listMapper(applianceVpnBgpNeighborsToTerraform, false)(this._neighbors.internalValue),
      network_id: cdktf.stringToTerraform(this._networkId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      as_number: {
        value: cdktf.numberToHclTerraform(this._asNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ibgp_hold_timer: {
        value: cdktf.numberToHclTerraform(this._ibgpHoldTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      neighbors: {
        value: cdktf.listMapperHcl(applianceVpnBgpNeighborsToHclTerraform, false)(this._neighbors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplianceVpnBgpNeighborsList",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
