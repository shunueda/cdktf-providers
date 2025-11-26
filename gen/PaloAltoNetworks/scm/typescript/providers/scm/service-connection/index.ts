// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/service_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Backup s c
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/service_connection#backup_sc ServiceConnection#backup_sc}
  */
  readonly backupSc?: string;
  /**
  * Bgp peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/service_connection#bgp_peer ServiceConnection#bgp_peer}
  */
  readonly bgpPeer?: ServiceConnectionBgpPeer;
  /**
  * Ipsec tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/service_connection#ipsec_tunnel ServiceConnection#ipsec_tunnel}
  */
  readonly ipsecTunnel: string;
  /**
  * The name of the service connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/service_connection#name ServiceConnection#name}
  */
  readonly name: string;
  /**
  * Nat pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/service_connection#nat_pool ServiceConnection#nat_pool}
  */
  readonly natPool?: string;
  /**
  * No export community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/service_connection#no_export_community ServiceConnection#no_export_community}
  */
  readonly noExportCommunity?: string;
  /**
  * Onboarding type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/service_connection#onboarding_type ServiceConnection#onboarding_type}
  */
  readonly onboardingType?: string;
  /**
  * Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/service_connection#protocol ServiceConnection#protocol}
  */
  readonly protocol?: ServiceConnectionProtocol;
  /**
  * Qos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/service_connection#qos ServiceConnection#qos}
  */
  readonly qos?: ServiceConnectionQos;
  /**
  * Region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/service_connection#region ServiceConnection#region}
  */
  readonly region: string;
  /**
  * Secondary ipsec tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/service_connection#secondary_ipsec_tunnel ServiceConnection#secondary_ipsec_tunnel}
  */
  readonly secondaryIpsecTunnel?: string;
  /**
  * Source nat
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/service_connection#source_nat ServiceConnection#source_nat}
  */
  readonly sourceNat?: boolean | cdktf.IResolvable;
  /**
  * Subnets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/service_connection#subnets ServiceConnection#subnets}
  */
  readonly subnets?: string[];
}
export interface ServiceConnectionBgpPeer {
  /**
  * Local ip address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/service_connection#local_ip_address ServiceConnection#local_ip_address}
  */
  readonly localIpAddress?: string;
  /**
  * Local ipv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/service_connection#local_ipv6_address ServiceConnection#local_ipv6_address}
  */
  readonly localIpv6Address?: string;
  /**
  * Peer ip address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/service_connection#peer_ip_address ServiceConnection#peer_ip_address}
  */
  readonly peerIpAddress?: string;
  /**
  * Peer ipv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/service_connection#peer_ipv6_address ServiceConnection#peer_ipv6_address}
  */
  readonly peerIpv6Address?: string;
  /**
  * Secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/service_connection#secret ServiceConnection#secret}
  */
  readonly secret?: string;
}

export function serviceConnectionBgpPeerToTerraform(struct?: ServiceConnectionBgpPeer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_ip_address: cdktf.stringToTerraform(struct!.localIpAddress),
    local_ipv6_address: cdktf.stringToTerraform(struct!.localIpv6Address),
    peer_ip_address: cdktf.stringToTerraform(struct!.peerIpAddress),
    peer_ipv6_address: cdktf.stringToTerraform(struct!.peerIpv6Address),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function serviceConnectionBgpPeerToHclTerraform(struct?: ServiceConnectionBgpPeer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.localIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.localIpv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.peerIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.peerIpv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceConnectionBgpPeerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceConnectionBgpPeer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.localIpAddress = this._localIpAddress;
    }
    if (this._localIpv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.localIpv6Address = this._localIpv6Address;
    }
    if (this._peerIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerIpAddress = this._peerIpAddress;
    }
    if (this._peerIpv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerIpv6Address = this._peerIpv6Address;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceConnectionBgpPeer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localIpAddress = undefined;
      this._localIpv6Address = undefined;
      this._peerIpAddress = undefined;
      this._peerIpv6Address = undefined;
      this._secret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localIpAddress = value.localIpAddress;
      this._localIpv6Address = value.localIpv6Address;
      this._peerIpAddress = value.peerIpAddress;
      this._peerIpv6Address = value.peerIpv6Address;
      this._secret = value.secret;
    }
  }

  // local_ip_address - computed: false, optional: true, required: false
  private _localIpAddress?: string; 
  public get localIpAddress() {
    return this.getStringAttribute('local_ip_address');
  }
  public set localIpAddress(value: string) {
    this._localIpAddress = value;
  }
  public resetLocalIpAddress() {
    this._localIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpAddressInput() {
    return this._localIpAddress;
  }

  // local_ipv6_address - computed: false, optional: true, required: false
  private _localIpv6Address?: string; 
  public get localIpv6Address() {
    return this.getStringAttribute('local_ipv6_address');
  }
  public set localIpv6Address(value: string) {
    this._localIpv6Address = value;
  }
  public resetLocalIpv6Address() {
    this._localIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpv6AddressInput() {
    return this._localIpv6Address;
  }

  // peer_ip_address - computed: false, optional: true, required: false
  private _peerIpAddress?: string; 
  public get peerIpAddress() {
    return this.getStringAttribute('peer_ip_address');
  }
  public set peerIpAddress(value: string) {
    this._peerIpAddress = value;
  }
  public resetPeerIpAddress() {
    this._peerIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIpAddressInput() {
    return this._peerIpAddress;
  }

  // peer_ipv6_address - computed: false, optional: true, required: false
  private _peerIpv6Address?: string; 
  public get peerIpv6Address() {
    return this.getStringAttribute('peer_ipv6_address');
  }
  public set peerIpv6Address(value: string) {
    this._peerIpv6Address = value;
  }
  public resetPeerIpv6Address() {
    this._peerIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIpv6AddressInput() {
    return this._peerIpv6Address;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}
export interface ServiceConnectionProtocolBgp {
  /**
  * Do not export routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/service_connection#do_not_export_routes ServiceConnection#do_not_export_routes}
  */
  readonly doNotExportRoutes?: boolean | cdktf.IResolvable;
  /**
  * Enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/service_connection#enable ServiceConnection#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Fast failover
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/service_connection#fast_failover ServiceConnection#fast_failover}
  */
  readonly fastFailover?: boolean | cdktf.IResolvable;
  /**
  * Local ip address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/service_connection#local_ip_address ServiceConnection#local_ip_address}
  */
  readonly localIpAddress?: string;
  /**
  * Originate default route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/service_connection#originate_default_route ServiceConnection#originate_default_route}
  */
  readonly originateDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * Peer as
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/service_connection#peer_as ServiceConnection#peer_as}
  */
  readonly peerAs?: string;
  /**
  * Peer ip address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/service_connection#peer_ip_address ServiceConnection#peer_ip_address}
  */
  readonly peerIpAddress?: string;
  /**
  * Secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/service_connection#secret ServiceConnection#secret}
  */
  readonly secret?: string;
  /**
  * Summarize mobile user routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/service_connection#summarize_mobile_user_routes ServiceConnection#summarize_mobile_user_routes}
  */
  readonly summarizeMobileUserRoutes?: boolean | cdktf.IResolvable;
}

export function serviceConnectionProtocolBgpToTerraform(struct?: ServiceConnectionProtocolBgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    do_not_export_routes: cdktf.booleanToTerraform(struct!.doNotExportRoutes),
    enable: cdktf.booleanToTerraform(struct!.enable),
    fast_failover: cdktf.booleanToTerraform(struct!.fastFailover),
    local_ip_address: cdktf.stringToTerraform(struct!.localIpAddress),
    originate_default_route: cdktf.booleanToTerraform(struct!.originateDefaultRoute),
    peer_as: cdktf.stringToTerraform(struct!.peerAs),
    peer_ip_address: cdktf.stringToTerraform(struct!.peerIpAddress),
    secret: cdktf.stringToTerraform(struct!.secret),
    summarize_mobile_user_routes: cdktf.booleanToTerraform(struct!.summarizeMobileUserRoutes),
  }
}


export function serviceConnectionProtocolBgpToHclTerraform(struct?: ServiceConnectionProtocolBgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    do_not_export_routes: {
      value: cdktf.booleanToHclTerraform(struct!.doNotExportRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fast_failover: {
      value: cdktf.booleanToHclTerraform(struct!.fastFailover),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.localIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    originate_default_route: {
      value: cdktf.booleanToHclTerraform(struct!.originateDefaultRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    peer_as: {
      value: cdktf.stringToHclTerraform(struct!.peerAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.peerIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summarize_mobile_user_routes: {
      value: cdktf.booleanToHclTerraform(struct!.summarizeMobileUserRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceConnectionProtocolBgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceConnectionProtocolBgp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._doNotExportRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.doNotExportRoutes = this._doNotExportRoutes;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._fastFailover !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastFailover = this._fastFailover;
    }
    if (this._localIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.localIpAddress = this._localIpAddress;
    }
    if (this._originateDefaultRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.originateDefaultRoute = this._originateDefaultRoute;
    }
    if (this._peerAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerAs = this._peerAs;
    }
    if (this._peerIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerIpAddress = this._peerIpAddress;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._summarizeMobileUserRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.summarizeMobileUserRoutes = this._summarizeMobileUserRoutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceConnectionProtocolBgp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._doNotExportRoutes = undefined;
      this._enable = undefined;
      this._fastFailover = undefined;
      this._localIpAddress = undefined;
      this._originateDefaultRoute = undefined;
      this._peerAs = undefined;
      this._peerIpAddress = undefined;
      this._secret = undefined;
      this._summarizeMobileUserRoutes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._doNotExportRoutes = value.doNotExportRoutes;
      this._enable = value.enable;
      this._fastFailover = value.fastFailover;
      this._localIpAddress = value.localIpAddress;
      this._originateDefaultRoute = value.originateDefaultRoute;
      this._peerAs = value.peerAs;
      this._peerIpAddress = value.peerIpAddress;
      this._secret = value.secret;
      this._summarizeMobileUserRoutes = value.summarizeMobileUserRoutes;
    }
  }

  // do_not_export_routes - computed: false, optional: true, required: false
  private _doNotExportRoutes?: boolean | cdktf.IResolvable; 
  public get doNotExportRoutes() {
    return this.getBooleanAttribute('do_not_export_routes');
  }
  public set doNotExportRoutes(value: boolean | cdktf.IResolvable) {
    this._doNotExportRoutes = value;
  }
  public resetDoNotExportRoutes() {
    this._doNotExportRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doNotExportRoutesInput() {
    return this._doNotExportRoutes;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // fast_failover - computed: false, optional: true, required: false
  private _fastFailover?: boolean | cdktf.IResolvable; 
  public get fastFailover() {
    return this.getBooleanAttribute('fast_failover');
  }
  public set fastFailover(value: boolean | cdktf.IResolvable) {
    this._fastFailover = value;
  }
  public resetFastFailover() {
    this._fastFailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastFailoverInput() {
    return this._fastFailover;
  }

  // local_ip_address - computed: false, optional: true, required: false
  private _localIpAddress?: string; 
  public get localIpAddress() {
    return this.getStringAttribute('local_ip_address');
  }
  public set localIpAddress(value: string) {
    this._localIpAddress = value;
  }
  public resetLocalIpAddress() {
    this._localIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpAddressInput() {
    return this._localIpAddress;
  }

  // originate_default_route - computed: false, optional: true, required: false
  private _originateDefaultRoute?: boolean | cdktf.IResolvable; 
  public get originateDefaultRoute() {
    return this.getBooleanAttribute('originate_default_route');
  }
  public set originateDefaultRoute(value: boolean | cdktf.IResolvable) {
    this._originateDefaultRoute = value;
  }
  public resetOriginateDefaultRoute() {
    this._originateDefaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originateDefaultRouteInput() {
    return this._originateDefaultRoute;
  }

  // peer_as - computed: false, optional: true, required: false
  private _peerAs?: string; 
  public get peerAs() {
    return this.getStringAttribute('peer_as');
  }
  public set peerAs(value: string) {
    this._peerAs = value;
  }
  public resetPeerAs() {
    this._peerAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAsInput() {
    return this._peerAs;
  }

  // peer_ip_address - computed: false, optional: true, required: false
  private _peerIpAddress?: string; 
  public get peerIpAddress() {
    return this.getStringAttribute('peer_ip_address');
  }
  public set peerIpAddress(value: string) {
    this._peerIpAddress = value;
  }
  public resetPeerIpAddress() {
    this._peerIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIpAddressInput() {
    return this._peerIpAddress;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // summarize_mobile_user_routes - computed: false, optional: true, required: false
  private _summarizeMobileUserRoutes?: boolean | cdktf.IResolvable; 
  public get summarizeMobileUserRoutes() {
    return this.getBooleanAttribute('summarize_mobile_user_routes');
  }
  public set summarizeMobileUserRoutes(value: boolean | cdktf.IResolvable) {
    this._summarizeMobileUserRoutes = value;
  }
  public resetSummarizeMobileUserRoutes() {
    this._summarizeMobileUserRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summarizeMobileUserRoutesInput() {
    return this._summarizeMobileUserRoutes;
  }
}
export interface ServiceConnectionProtocol {
  /**
  * Bgp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/service_connection#bgp ServiceConnection#bgp}
  */
  readonly bgp?: ServiceConnectionProtocolBgp;
}

export function serviceConnectionProtocolToTerraform(struct?: ServiceConnectionProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp: serviceConnectionProtocolBgpToTerraform(struct!.bgp),
  }
}


export function serviceConnectionProtocolToHclTerraform(struct?: ServiceConnectionProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp: {
      value: serviceConnectionProtocolBgpToHclTerraform(struct!.bgp),
      isBlock: true,
      type: "struct",
      storageClassType: "ServiceConnectionProtocolBgp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceConnectionProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceConnectionProtocol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgp = this._bgp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceConnectionProtocol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bgp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bgp.internalValue = value.bgp;
    }
  }

  // bgp - computed: false, optional: true, required: false
  private _bgp = new ServiceConnectionProtocolBgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }
  public putBgp(value: ServiceConnectionProtocolBgp) {
    this._bgp.internalValue = value;
  }
  public resetBgp() {
    this._bgp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInput() {
    return this._bgp.internalValue;
  }
}
export interface ServiceConnectionQos {
  /**
  * Enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/service_connection#enable ServiceConnection#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Qos profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/service_connection#qos_profile ServiceConnection#qos_profile}
  */
  readonly qosProfile?: string;
}

export function serviceConnectionQosToTerraform(struct?: ServiceConnectionQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    qos_profile: cdktf.stringToTerraform(struct!.qosProfile),
  }
}


export function serviceConnectionQosToHclTerraform(struct?: ServiceConnectionQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    qos_profile: {
      value: cdktf.stringToHclTerraform(struct!.qosProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceConnectionQosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceConnectionQos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._qosProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosProfile = this._qosProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceConnectionQos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._qosProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._qosProfile = value.qosProfile;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // qos_profile - computed: false, optional: true, required: false
  private _qosProfile?: string; 
  public get qosProfile() {
    return this.getStringAttribute('qos_profile');
  }
  public set qosProfile(value: string) {
    this._qosProfile = value;
  }
  public resetQosProfile() {
    this._qosProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosProfileInput() {
    return this._qosProfile;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/service_connection scm_service_connection}
*/
export class ServiceConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_service_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceConnection to import
  * @param importFromId The id of the existing ServiceConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/service_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_service_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/service_connection scm_service_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_service_connection',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.5',
        providerVersionConstraint: '1.0.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupSc = config.backupSc;
    this._bgpPeer.internalValue = config.bgpPeer;
    this._ipsecTunnel = config.ipsecTunnel;
    this._name = config.name;
    this._natPool = config.natPool;
    this._noExportCommunity = config.noExportCommunity;
    this._onboardingType = config.onboardingType;
    this._protocol.internalValue = config.protocol;
    this._qos.internalValue = config.qos;
    this._region = config.region;
    this._secondaryIpsecTunnel = config.secondaryIpsecTunnel;
    this._sourceNat = config.sourceNat;
    this._subnets = config.subnets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_sc - computed: false, optional: true, required: false
  private _backupSc?: string; 
  public get backupSc() {
    return this.getStringAttribute('backup_sc');
  }
  public set backupSc(value: string) {
    this._backupSc = value;
  }
  public resetBackupSc() {
    this._backupSc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupScInput() {
    return this._backupSc;
  }

  // bgp_peer - computed: false, optional: true, required: false
  private _bgpPeer = new ServiceConnectionBgpPeerOutputReference(this, "bgp_peer");
  public get bgpPeer() {
    return this._bgpPeer;
  }
  public putBgpPeer(value: ServiceConnectionBgpPeer) {
    this._bgpPeer.internalValue = value;
  }
  public resetBgpPeer() {
    this._bgpPeer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpPeerInput() {
    return this._bgpPeer.internalValue;
  }

  // encrypted_values - computed: true, optional: false, required: false
  private _encryptedValues = new cdktf.StringMap(this, "encrypted_values");
  public get encryptedValues() {
    return this._encryptedValues;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipsec_tunnel - computed: false, optional: false, required: true
  private _ipsecTunnel?: string; 
  public get ipsecTunnel() {
    return this.getStringAttribute('ipsec_tunnel');
  }
  public set ipsecTunnel(value: string) {
    this._ipsecTunnel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecTunnelInput() {
    return this._ipsecTunnel;
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

  // nat_pool - computed: false, optional: true, required: false
  private _natPool?: string; 
  public get natPool() {
    return this.getStringAttribute('nat_pool');
  }
  public set natPool(value: string) {
    this._natPool = value;
  }
  public resetNatPool() {
    this._natPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolInput() {
    return this._natPool;
  }

  // no_export_community - computed: false, optional: true, required: false
  private _noExportCommunity?: string; 
  public get noExportCommunity() {
    return this.getStringAttribute('no_export_community');
  }
  public set noExportCommunity(value: string) {
    this._noExportCommunity = value;
  }
  public resetNoExportCommunity() {
    this._noExportCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noExportCommunityInput() {
    return this._noExportCommunity;
  }

  // onboarding_type - computed: true, optional: true, required: false
  private _onboardingType?: string; 
  public get onboardingType() {
    return this.getStringAttribute('onboarding_type');
  }
  public set onboardingType(value: string) {
    this._onboardingType = value;
  }
  public resetOnboardingType() {
    this._onboardingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onboardingTypeInput() {
    return this._onboardingType;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol = new ServiceConnectionProtocolOutputReference(this, "protocol");
  public get protocol() {
    return this._protocol;
  }
  public putProtocol(value: ServiceConnectionProtocol) {
    this._protocol.internalValue = value;
  }
  public resetProtocol() {
    this._protocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol.internalValue;
  }

  // qos - computed: false, optional: true, required: false
  private _qos = new ServiceConnectionQosOutputReference(this, "qos");
  public get qos() {
    return this._qos;
  }
  public putQos(value: ServiceConnectionQos) {
    this._qos.internalValue = value;
  }
  public resetQos() {
    this._qos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosInput() {
    return this._qos.internalValue;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secondary_ipsec_tunnel - computed: false, optional: true, required: false
  private _secondaryIpsecTunnel?: string; 
  public get secondaryIpsecTunnel() {
    return this.getStringAttribute('secondary_ipsec_tunnel');
  }
  public set secondaryIpsecTunnel(value: string) {
    this._secondaryIpsecTunnel = value;
  }
  public resetSecondaryIpsecTunnel() {
    this._secondaryIpsecTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryIpsecTunnelInput() {
    return this._secondaryIpsecTunnel;
  }

  // source_nat - computed: false, optional: true, required: false
  private _sourceNat?: boolean | cdktf.IResolvable; 
  public get sourceNat() {
    return this.getBooleanAttribute('source_nat');
  }
  public set sourceNat(value: boolean | cdktf.IResolvable) {
    this._sourceNat = value;
  }
  public resetSourceNat() {
    this._sourceNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNatInput() {
    return this._sourceNat;
  }

  // subnets - computed: false, optional: true, required: false
  private _subnets?: string[]; 
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  public resetSubnets() {
    this._subnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_sc: cdktf.stringToTerraform(this._backupSc),
      bgp_peer: serviceConnectionBgpPeerToTerraform(this._bgpPeer.internalValue),
      ipsec_tunnel: cdktf.stringToTerraform(this._ipsecTunnel),
      name: cdktf.stringToTerraform(this._name),
      nat_pool: cdktf.stringToTerraform(this._natPool),
      no_export_community: cdktf.stringToTerraform(this._noExportCommunity),
      onboarding_type: cdktf.stringToTerraform(this._onboardingType),
      protocol: serviceConnectionProtocolToTerraform(this._protocol.internalValue),
      qos: serviceConnectionQosToTerraform(this._qos.internalValue),
      region: cdktf.stringToTerraform(this._region),
      secondary_ipsec_tunnel: cdktf.stringToTerraform(this._secondaryIpsecTunnel),
      source_nat: cdktf.booleanToTerraform(this._sourceNat),
      subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnets),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_sc: {
        value: cdktf.stringToHclTerraform(this._backupSc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_peer: {
        value: serviceConnectionBgpPeerToHclTerraform(this._bgpPeer.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServiceConnectionBgpPeer",
      },
      ipsec_tunnel: {
        value: cdktf.stringToHclTerraform(this._ipsecTunnel),
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
      nat_pool: {
        value: cdktf.stringToHclTerraform(this._natPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_export_community: {
        value: cdktf.stringToHclTerraform(this._noExportCommunity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      onboarding_type: {
        value: cdktf.stringToHclTerraform(this._onboardingType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: serviceConnectionProtocolToHclTerraform(this._protocol.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServiceConnectionProtocol",
      },
      qos: {
        value: serviceConnectionQosToHclTerraform(this._qos.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServiceConnectionQos",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_ipsec_tunnel: {
        value: cdktf.stringToHclTerraform(this._secondaryIpsecTunnel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_nat: {
        value: cdktf.booleanToHclTerraform(this._sourceNat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subnets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subnets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
