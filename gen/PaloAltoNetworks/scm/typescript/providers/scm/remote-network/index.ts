// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/remote_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RemoteNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Ecmp load balancing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/remote_network#ecmp_load_balancing RemoteNetwork#ecmp_load_balancing}
  */
  readonly ecmpLoadBalancing?: string;
  /**
  * ecmp_tunnels is required when ecmp_load_balancing is enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/remote_network#ecmp_tunnels RemoteNetwork#ecmp_tunnels}
  */
  readonly ecmpTunnels?: RemoteNetworkEcmpTunnels[] | cdktf.IResolvable;
  /**
  * The folder that contains the remote network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/remote_network#folder RemoteNetwork#folder}
  */
  readonly folder: string;
  /**
  * ipsec_tunnel is required when ecmp_load_balancing is disable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/remote_network#ipsec_tunnel RemoteNetwork#ipsec_tunnel}
  */
  readonly ipsecTunnel?: string;
  /**
  * New customer will only be on aggregate bandwidth licensing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/remote_network#license_type RemoteNetwork#license_type}
  */
  readonly licenseType: string;
  /**
  * The name of the remote network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/remote_network#name RemoteNetwork#name}
  */
  readonly name: string;
  /**
  * setup the protocol when ecmp_load_balancing is disable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/remote_network#protocol RemoteNetwork#protocol}
  */
  readonly protocol?: RemoteNetworkProtocol;
  /**
  * Region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/remote_network#region RemoteNetwork#region}
  */
  readonly region: string;
  /**
  * specify secondary ipsec_tunnel if needed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/remote_network#secondary_ipsec_tunnel RemoteNetwork#secondary_ipsec_tunnel}
  */
  readonly secondaryIpsecTunnel?: string;
  /**
  * spn-name is needed when license_type is FWAAS-AGGREGATE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/remote_network#spn_name RemoteNetwork#spn_name}
  */
  readonly spnName?: string;
  /**
  * Subnets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/remote_network#subnets RemoteNetwork#subnets}
  */
  readonly subnets?: string[];
}
export interface RemoteNetworkEcmpTunnelsProtocolBgp {
  /**
  * Do not export routes?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/remote_network#do_not_export_routes RemoteNetwork#do_not_export_routes}
  */
  readonly doNotExportRoutes?: boolean | cdktf.IResolvable;
  /**
  * Enable BGP peering?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/remote_network#enable RemoteNetwork#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Local peer IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/remote_network#local_ip_address RemoteNetwork#local_ip_address}
  */
  readonly localIpAddress?: string;
  /**
  * Originate default route?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/remote_network#originate_default_route RemoteNetwork#originate_default_route}
  */
  readonly originateDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * BGP peer ASN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/remote_network#peer_as RemoteNetwork#peer_as}
  */
  readonly peerAs?: string;
  /**
  * Remote peer IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/remote_network#peer_ip_address RemoteNetwork#peer_ip_address}
  */
  readonly peerIpAddress?: string;
  /**
  * Route exchange types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/remote_network#peering_type RemoteNetwork#peering_type}
  */
  readonly peeringType?: string;
  /**
  * BGP peering secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/remote_network#secret RemoteNetwork#secret}
  */
  readonly secret?: string;
  /**
  * Summarize mobile user routes?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/remote_network#summarize_mobile_user_routes RemoteNetwork#summarize_mobile_user_routes}
  */
  readonly summarizeMobileUserRoutes?: boolean | cdktf.IResolvable;
}

export function remoteNetworkEcmpTunnelsProtocolBgpToTerraform(struct?: RemoteNetworkEcmpTunnelsProtocolBgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    do_not_export_routes: cdktf.booleanToTerraform(struct!.doNotExportRoutes),
    enable: cdktf.booleanToTerraform(struct!.enable),
    local_ip_address: cdktf.stringToTerraform(struct!.localIpAddress),
    originate_default_route: cdktf.booleanToTerraform(struct!.originateDefaultRoute),
    peer_as: cdktf.stringToTerraform(struct!.peerAs),
    peer_ip_address: cdktf.stringToTerraform(struct!.peerIpAddress),
    peering_type: cdktf.stringToTerraform(struct!.peeringType),
    secret: cdktf.stringToTerraform(struct!.secret),
    summarize_mobile_user_routes: cdktf.booleanToTerraform(struct!.summarizeMobileUserRoutes),
  }
}


export function remoteNetworkEcmpTunnelsProtocolBgpToHclTerraform(struct?: RemoteNetworkEcmpTunnelsProtocolBgp | cdktf.IResolvable): any {
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
    peering_type: {
      value: cdktf.stringToHclTerraform(struct!.peeringType),
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

export class RemoteNetworkEcmpTunnelsProtocolBgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RemoteNetworkEcmpTunnelsProtocolBgp | cdktf.IResolvable | undefined {
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
    if (this._peeringType !== undefined) {
      hasAnyValues = true;
      internalValueResult.peeringType = this._peeringType;
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

  public set internalValue(value: RemoteNetworkEcmpTunnelsProtocolBgp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._doNotExportRoutes = undefined;
      this._enable = undefined;
      this._localIpAddress = undefined;
      this._originateDefaultRoute = undefined;
      this._peerAs = undefined;
      this._peerIpAddress = undefined;
      this._peeringType = undefined;
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
      this._localIpAddress = value.localIpAddress;
      this._originateDefaultRoute = value.originateDefaultRoute;
      this._peerAs = value.peerAs;
      this._peerIpAddress = value.peerIpAddress;
      this._peeringType = value.peeringType;
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

  // peering_type - computed: false, optional: true, required: false
  private _peeringType?: string; 
  public get peeringType() {
    return this.getStringAttribute('peering_type');
  }
  public set peeringType(value: string) {
    this._peeringType = value;
  }
  public resetPeeringType() {
    this._peeringType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringTypeInput() {
    return this._peeringType;
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
export interface RemoteNetworkEcmpTunnelsProtocol {
  /**
  * Bgp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/remote_network#bgp RemoteNetwork#bgp}
  */
  readonly bgp?: RemoteNetworkEcmpTunnelsProtocolBgp;
}

export function remoteNetworkEcmpTunnelsProtocolToTerraform(struct?: RemoteNetworkEcmpTunnelsProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp: remoteNetworkEcmpTunnelsProtocolBgpToTerraform(struct!.bgp),
  }
}


export function remoteNetworkEcmpTunnelsProtocolToHclTerraform(struct?: RemoteNetworkEcmpTunnelsProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp: {
      value: remoteNetworkEcmpTunnelsProtocolBgpToHclTerraform(struct!.bgp),
      isBlock: true,
      type: "struct",
      storageClassType: "RemoteNetworkEcmpTunnelsProtocolBgp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RemoteNetworkEcmpTunnelsProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RemoteNetworkEcmpTunnelsProtocol | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RemoteNetworkEcmpTunnelsProtocol | cdktf.IResolvable | undefined) {
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
  private _bgp = new RemoteNetworkEcmpTunnelsProtocolBgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }
  public putBgp(value: RemoteNetworkEcmpTunnelsProtocolBgp) {
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
export interface RemoteNetworkEcmpTunnels {
  /**
  * Ipsec tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/remote_network#ipsec_tunnel RemoteNetwork#ipsec_tunnel}
  */
  readonly ipsecTunnel: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/remote_network#name RemoteNetwork#name}
  */
  readonly name: string;
  /**
  * Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/remote_network#protocol RemoteNetwork#protocol}
  */
  readonly protocol: RemoteNetworkEcmpTunnelsProtocol;
}

export function remoteNetworkEcmpTunnelsToTerraform(struct?: RemoteNetworkEcmpTunnels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipsec_tunnel: cdktf.stringToTerraform(struct!.ipsecTunnel),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: remoteNetworkEcmpTunnelsProtocolToTerraform(struct!.protocol),
  }
}


export function remoteNetworkEcmpTunnelsToHclTerraform(struct?: RemoteNetworkEcmpTunnels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipsec_tunnel: {
      value: cdktf.stringToHclTerraform(struct!.ipsecTunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: remoteNetworkEcmpTunnelsProtocolToHclTerraform(struct!.protocol),
      isBlock: true,
      type: "struct",
      storageClassType: "RemoteNetworkEcmpTunnelsProtocol",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RemoteNetworkEcmpTunnelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RemoteNetworkEcmpTunnels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipsecTunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecTunnel = this._ipsecTunnel;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocol?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RemoteNetworkEcmpTunnels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipsecTunnel = undefined;
      this._name = undefined;
      this._protocol.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipsecTunnel = value.ipsecTunnel;
      this._name = value.name;
      this._protocol.internalValue = value.protocol;
    }
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

  // protocol - computed: false, optional: false, required: true
  private _protocol = new RemoteNetworkEcmpTunnelsProtocolOutputReference(this, "protocol");
  public get protocol() {
    return this._protocol;
  }
  public putProtocol(value: RemoteNetworkEcmpTunnelsProtocol) {
    this._protocol.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol.internalValue;
  }
}

export class RemoteNetworkEcmpTunnelsList extends cdktf.ComplexList {
  public internalValue? : RemoteNetworkEcmpTunnels[] | cdktf.IResolvable

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
  public get(index: number): RemoteNetworkEcmpTunnelsOutputReference {
    return new RemoteNetworkEcmpTunnelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RemoteNetworkProtocolBgp {
  /**
  * Do not export routes?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/remote_network#do_not_export_routes RemoteNetwork#do_not_export_routes}
  */
  readonly doNotExportRoutes?: boolean | cdktf.IResolvable;
  /**
  * Enable BGP peering?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/remote_network#enable RemoteNetwork#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Local peer IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/remote_network#local_ip_address RemoteNetwork#local_ip_address}
  */
  readonly localIpAddress?: string;
  /**
  * Originate default route?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/remote_network#originate_default_route RemoteNetwork#originate_default_route}
  */
  readonly originateDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * BGP peer ASN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/remote_network#peer_as RemoteNetwork#peer_as}
  */
  readonly peerAs?: string;
  /**
  * Remote peer IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/remote_network#peer_ip_address RemoteNetwork#peer_ip_address}
  */
  readonly peerIpAddress?: string;
  /**
  * Route exchange types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/remote_network#peering_type RemoteNetwork#peering_type}
  */
  readonly peeringType?: string;
  /**
  * BGP peering secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/remote_network#secret RemoteNetwork#secret}
  */
  readonly secret?: string;
  /**
  * Summarize mobile user routes?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/remote_network#summarize_mobile_user_routes RemoteNetwork#summarize_mobile_user_routes}
  */
  readonly summarizeMobileUserRoutes?: boolean | cdktf.IResolvable;
}

export function remoteNetworkProtocolBgpToTerraform(struct?: RemoteNetworkProtocolBgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    do_not_export_routes: cdktf.booleanToTerraform(struct!.doNotExportRoutes),
    enable: cdktf.booleanToTerraform(struct!.enable),
    local_ip_address: cdktf.stringToTerraform(struct!.localIpAddress),
    originate_default_route: cdktf.booleanToTerraform(struct!.originateDefaultRoute),
    peer_as: cdktf.stringToTerraform(struct!.peerAs),
    peer_ip_address: cdktf.stringToTerraform(struct!.peerIpAddress),
    peering_type: cdktf.stringToTerraform(struct!.peeringType),
    secret: cdktf.stringToTerraform(struct!.secret),
    summarize_mobile_user_routes: cdktf.booleanToTerraform(struct!.summarizeMobileUserRoutes),
  }
}


export function remoteNetworkProtocolBgpToHclTerraform(struct?: RemoteNetworkProtocolBgp | cdktf.IResolvable): any {
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
    peering_type: {
      value: cdktf.stringToHclTerraform(struct!.peeringType),
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

export class RemoteNetworkProtocolBgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RemoteNetworkProtocolBgp | cdktf.IResolvable | undefined {
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
    if (this._peeringType !== undefined) {
      hasAnyValues = true;
      internalValueResult.peeringType = this._peeringType;
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

  public set internalValue(value: RemoteNetworkProtocolBgp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._doNotExportRoutes = undefined;
      this._enable = undefined;
      this._localIpAddress = undefined;
      this._originateDefaultRoute = undefined;
      this._peerAs = undefined;
      this._peerIpAddress = undefined;
      this._peeringType = undefined;
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
      this._localIpAddress = value.localIpAddress;
      this._originateDefaultRoute = value.originateDefaultRoute;
      this._peerAs = value.peerAs;
      this._peerIpAddress = value.peerIpAddress;
      this._peeringType = value.peeringType;
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

  // peering_type - computed: false, optional: true, required: false
  private _peeringType?: string; 
  public get peeringType() {
    return this.getStringAttribute('peering_type');
  }
  public set peeringType(value: string) {
    this._peeringType = value;
  }
  public resetPeeringType() {
    this._peeringType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringTypeInput() {
    return this._peeringType;
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
export interface RemoteNetworkProtocolBgpPeer {
  /**
  * Local peer IP address (secondary WAN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/remote_network#local_ip_address RemoteNetwork#local_ip_address}
  */
  readonly localIpAddress?: string;
  /**
  * Remote peer IP address (secondary WAN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/remote_network#peer_ip_address RemoteNetwork#peer_ip_address}
  */
  readonly peerIpAddress?: string;
  /**
  * BGP peering secret (secondary WAN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/remote_network#secret RemoteNetwork#secret}
  */
  readonly secret?: string;
}

export function remoteNetworkProtocolBgpPeerToTerraform(struct?: RemoteNetworkProtocolBgpPeer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_ip_address: cdktf.stringToTerraform(struct!.localIpAddress),
    peer_ip_address: cdktf.stringToTerraform(struct!.peerIpAddress),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function remoteNetworkProtocolBgpPeerToHclTerraform(struct?: RemoteNetworkProtocolBgpPeer | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RemoteNetworkProtocolBgpPeerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RemoteNetworkProtocolBgpPeer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.localIpAddress = this._localIpAddress;
    }
    if (this._peerIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerIpAddress = this._peerIpAddress;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RemoteNetworkProtocolBgpPeer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localIpAddress = undefined;
      this._peerIpAddress = undefined;
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
      this._peerIpAddress = value.peerIpAddress;
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
}
export interface RemoteNetworkProtocol {
  /**
  * Bgp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/remote_network#bgp RemoteNetwork#bgp}
  */
  readonly bgp?: RemoteNetworkProtocolBgp;
  /**
  * secondary bgp routing as bgp_peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/remote_network#bgp_peer RemoteNetwork#bgp_peer}
  */
  readonly bgpPeer?: RemoteNetworkProtocolBgpPeer;
}

export function remoteNetworkProtocolToTerraform(struct?: RemoteNetworkProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp: remoteNetworkProtocolBgpToTerraform(struct!.bgp),
    bgp_peer: remoteNetworkProtocolBgpPeerToTerraform(struct!.bgpPeer),
  }
}


export function remoteNetworkProtocolToHclTerraform(struct?: RemoteNetworkProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp: {
      value: remoteNetworkProtocolBgpToHclTerraform(struct!.bgp),
      isBlock: true,
      type: "struct",
      storageClassType: "RemoteNetworkProtocolBgp",
    },
    bgp_peer: {
      value: remoteNetworkProtocolBgpPeerToHclTerraform(struct!.bgpPeer),
      isBlock: true,
      type: "struct",
      storageClassType: "RemoteNetworkProtocolBgpPeer",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RemoteNetworkProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RemoteNetworkProtocol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgp = this._bgp?.internalValue;
    }
    if (this._bgpPeer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpPeer = this._bgpPeer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RemoteNetworkProtocol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bgp.internalValue = undefined;
      this._bgpPeer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bgp.internalValue = value.bgp;
      this._bgpPeer.internalValue = value.bgpPeer;
    }
  }

  // bgp - computed: false, optional: true, required: false
  private _bgp = new RemoteNetworkProtocolBgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }
  public putBgp(value: RemoteNetworkProtocolBgp) {
    this._bgp.internalValue = value;
  }
  public resetBgp() {
    this._bgp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInput() {
    return this._bgp.internalValue;
  }

  // bgp_peer - computed: false, optional: true, required: false
  private _bgpPeer = new RemoteNetworkProtocolBgpPeerOutputReference(this, "bgp_peer");
  public get bgpPeer() {
    return this._bgpPeer;
  }
  public putBgpPeer(value: RemoteNetworkProtocolBgpPeer) {
    this._bgpPeer.internalValue = value;
  }
  public resetBgpPeer() {
    this._bgpPeer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpPeerInput() {
    return this._bgpPeer.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/remote_network scm_remote_network}
*/
export class RemoteNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_remote_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RemoteNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RemoteNetwork to import
  * @param importFromId The id of the existing RemoteNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/remote_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RemoteNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_remote_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/remote_network scm_remote_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RemoteNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: RemoteNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_remote_network',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.4',
        providerVersionConstraint: '1.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ecmpLoadBalancing = config.ecmpLoadBalancing;
    this._ecmpTunnels.internalValue = config.ecmpTunnels;
    this._folder = config.folder;
    this._ipsecTunnel = config.ipsecTunnel;
    this._licenseType = config.licenseType;
    this._name = config.name;
    this._protocol.internalValue = config.protocol;
    this._region = config.region;
    this._secondaryIpsecTunnel = config.secondaryIpsecTunnel;
    this._spnName = config.spnName;
    this._subnets = config.subnets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ecmp_load_balancing - computed: true, optional: true, required: false
  private _ecmpLoadBalancing?: string; 
  public get ecmpLoadBalancing() {
    return this.getStringAttribute('ecmp_load_balancing');
  }
  public set ecmpLoadBalancing(value: string) {
    this._ecmpLoadBalancing = value;
  }
  public resetEcmpLoadBalancing() {
    this._ecmpLoadBalancing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecmpLoadBalancingInput() {
    return this._ecmpLoadBalancing;
  }

  // ecmp_tunnels - computed: false, optional: true, required: false
  private _ecmpTunnels = new RemoteNetworkEcmpTunnelsList(this, "ecmp_tunnels", false);
  public get ecmpTunnels() {
    return this._ecmpTunnels;
  }
  public putEcmpTunnels(value: RemoteNetworkEcmpTunnels[] | cdktf.IResolvable) {
    this._ecmpTunnels.internalValue = value;
  }
  public resetEcmpTunnels() {
    this._ecmpTunnels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecmpTunnelsInput() {
    return this._ecmpTunnels.internalValue;
  }

  // encrypted_values - computed: true, optional: false, required: false
  private _encryptedValues = new cdktf.StringMap(this, "encrypted_values");
  public get encryptedValues() {
    return this._encryptedValues;
  }

  // folder - computed: false, optional: false, required: true
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipsec_tunnel - computed: false, optional: true, required: false
  private _ipsecTunnel?: string; 
  public get ipsecTunnel() {
    return this.getStringAttribute('ipsec_tunnel');
  }
  public set ipsecTunnel(value: string) {
    this._ipsecTunnel = value;
  }
  public resetIpsecTunnel() {
    this._ipsecTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecTunnelInput() {
    return this._ipsecTunnel;
  }

  // license_type - computed: false, optional: false, required: true
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol = new RemoteNetworkProtocolOutputReference(this, "protocol");
  public get protocol() {
    return this._protocol;
  }
  public putProtocol(value: RemoteNetworkProtocol) {
    this._protocol.internalValue = value;
  }
  public resetProtocol() {
    this._protocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol.internalValue;
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

  // spn_name - computed: false, optional: true, required: false
  private _spnName?: string; 
  public get spnName() {
    return this.getStringAttribute('spn_name');
  }
  public set spnName(value: string) {
    this._spnName = value;
  }
  public resetSpnName() {
    this._spnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spnNameInput() {
    return this._spnName;
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
      ecmp_load_balancing: cdktf.stringToTerraform(this._ecmpLoadBalancing),
      ecmp_tunnels: cdktf.listMapper(remoteNetworkEcmpTunnelsToTerraform, false)(this._ecmpTunnels.internalValue),
      folder: cdktf.stringToTerraform(this._folder),
      ipsec_tunnel: cdktf.stringToTerraform(this._ipsecTunnel),
      license_type: cdktf.stringToTerraform(this._licenseType),
      name: cdktf.stringToTerraform(this._name),
      protocol: remoteNetworkProtocolToTerraform(this._protocol.internalValue),
      region: cdktf.stringToTerraform(this._region),
      secondary_ipsec_tunnel: cdktf.stringToTerraform(this._secondaryIpsecTunnel),
      spn_name: cdktf.stringToTerraform(this._spnName),
      subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnets),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ecmp_load_balancing: {
        value: cdktf.stringToHclTerraform(this._ecmpLoadBalancing),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ecmp_tunnels: {
        value: cdktf.listMapperHcl(remoteNetworkEcmpTunnelsToHclTerraform, false)(this._ecmpTunnels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RemoteNetworkEcmpTunnelsList",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_tunnel: {
        value: cdktf.stringToHclTerraform(this._ipsecTunnel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_type: {
        value: cdktf.stringToHclTerraform(this._licenseType),
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
      protocol: {
        value: remoteNetworkProtocolToHclTerraform(this._protocol.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RemoteNetworkProtocol",
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
      spn_name: {
        value: cdktf.stringToHclTerraform(this._spnName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
