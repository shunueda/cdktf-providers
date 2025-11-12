// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NtpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Provide full access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#access_group_ipv4_peer Ntp#access_group_ipv4_peer}
  */
  readonly accessGroupIpv4Peer?: string;
  /**
  * Allow only control queries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#access_group_ipv4_query_only Ntp#access_group_ipv4_query_only}
  */
  readonly accessGroupIpv4QueryOnly?: string;
  /**
  * Provide server and query access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#access_group_ipv4_serve Ntp#access_group_ipv4_serve}
  */
  readonly accessGroupIpv4Serve?: string;
  /**
  * Provide only server access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#access_group_ipv4_serve_only Ntp#access_group_ipv4_serve_only}
  */
  readonly accessGroupIpv4ServeOnly?: string;
  /**
  * Provide full access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#access_group_ipv6_peer Ntp#access_group_ipv6_peer}
  */
  readonly accessGroupIpv6Peer?: string;
  /**
  * Allow only control queries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#access_group_ipv6_query_only Ntp#access_group_ipv6_query_only}
  */
  readonly accessGroupIpv6QueryOnly?: string;
  /**
  * Provide server and query access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#access_group_ipv6_serve Ntp#access_group_ipv6_serve}
  */
  readonly accessGroupIpv6Serve?: string;
  /**
  * Provide only server access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#access_group_ipv6_serve_only Ntp#access_group_ipv6_serve_only}
  */
  readonly accessGroupIpv6ServeOnly?: string;
  /**
  * Specify non-default VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#access_group_vrfs Ntp#access_group_vrfs}
  */
  readonly accessGroupVrfs?: NtpAccessGroupVrfs[] | cdktf.IResolvable;
  /**
  * Use burst mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#admin_plane_burst Ntp#admin_plane_burst}
  */
  readonly adminPlaneBurst?: boolean | cdktf.IResolvable;
  /**
  * Use initial burst mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#admin_plane_iburst Ntp#admin_plane_iburst}
  */
  readonly adminPlaneIburst?: boolean | cdktf.IResolvable;
  /**
  * Configure peer authentication key
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#admin_plane_key Ntp#admin_plane_key}
  */
  readonly adminPlaneKey?: number;
  /**
  * Configure maximum polling rate
  *   - Range: `4`-`17`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#admin_plane_maxpoll Ntp#admin_plane_maxpoll}
  */
  readonly adminPlaneMaxpoll?: number;
  /**
  * Configure minimum polling rate
  *   - Range: `4`-`17`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#admin_plane_minpoll Ntp#admin_plane_minpoll}
  */
  readonly adminPlaneMinpoll?: number;
  /**
  * Prefer this peer when possible
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#admin_plane_prefer Ntp#admin_plane_prefer}
  */
  readonly adminPlanePrefer?: boolean | cdktf.IResolvable;
  /**
  * Configure NTP version
  *   - Range: `1`-`4`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#admin_plane_version Ntp#admin_plane_version}
  */
  readonly adminPlaneVersion?: number;
  /**
  * Authenticate time sources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#authenticate Ntp#authenticate}
  */
  readonly authenticate?: boolean | cdktf.IResolvable;
  /**
  * Authentication key for trusted time sources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#authentication_keys Ntp#authentication_keys}
  */
  readonly authenticationKeys?: NtpAuthenticationKeys[] | cdktf.IResolvable;
  /**
  * Estimated round-trip delay
  *   - Range: `1`-`999999`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#broadcastdelay Ntp#broadcastdelay}
  */
  readonly broadcastdelay?: number;
  /**
  * CMAC Authentication key for trusted time sources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#cmac_authentication_keys Ntp#cmac_authentication_keys}
  */
  readonly cmacAuthenticationKeys?: NtpCmacAuthenticationKeys[] | cdktf.IResolvable;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#delete_mode Ntp#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#device Ntp#device}
  */
  readonly device?: string;
  /**
  * HMA-SHA1 Authentication key for trusted time sources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#hmac_sha1_authentication_keys Ntp#hmac_sha1_authentication_keys}
  */
  readonly hmacSha1AuthenticationKeys?: NtpHmacSha1AuthenticationKeys[] | cdktf.IResolvable;
  /**
  * HMA-SHA2 Authentication key for trusted time sources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#hmac_sha2_authentication_keys Ntp#hmac_sha2_authentication_keys}
  */
  readonly hmacSha2AuthenticationKeys?: NtpHmacSha2AuthenticationKeys[] | cdktf.IResolvable;
  /**
  * Specify non-default VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#interface_vrfs Ntp#interface_vrfs}
  */
  readonly interfaceVrfs?: NtpInterfaceVrfs[] | cdktf.IResolvable;
  /**
  * Configure NTP on an interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#interfaces Ntp#interfaces}
  */
  readonly interfaces?: NtpInterfaces[] | cdktf.IResolvable;
  /**
  * Set IP DSCP (DiffServ CodePoint)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#ipv4_dscp Ntp#ipv4_dscp}
  */
  readonly ipv4Dscp?: string;
  /**
  * Specify IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#ipv4_peers_servers Ntp#ipv4_peers_servers}
  */
  readonly ipv4PeersServers?: NtpIpv4PeersServers[] | cdktf.IResolvable;
  /**
  * Set precedence
  *   - Choices: `critical`, `flash`, `flash-override`, `immediate`, `internet`, `network`, `priority`, `routine`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#ipv4_precedence Ntp#ipv4_precedence}
  */
  readonly ipv4Precedence?: string;
  /**
  * Set IP DSCP (DiffServ CodePoint)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#ipv6_dscp Ntp#ipv6_dscp}
  */
  readonly ipv6Dscp?: string;
  /**
  * Specify IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#ipv6_peers_servers Ntp#ipv6_peers_servers}
  */
  readonly ipv6PeersServers?: NtpIpv6PeersServers[] | cdktf.IResolvable;
  /**
  * Set precedence
  *   - Choices: `critical`, `flash`, `flash-override`, `immediate`, `internet`, `network`, `priority`, `routine`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#ipv6_precedence Ntp#ipv6_precedence}
  */
  readonly ipv6Precedence?: string;
  /**
  * Logs internal synchronization changes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#log_internal_sync Ntp#log_internal_sync}
  */
  readonly logInternalSync?: boolean | cdktf.IResolvable;
  /**
  * Set maximum number of associations
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#max_associations Ntp#max_associations}
  */
  readonly maxAssociations?: number;
  /**
  * Enable the passive associations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#passive Ntp#passive}
  */
  readonly passive?: boolean | cdktf.IResolvable;
  /**
  * Specify non-default VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#peers_servers_vrfs Ntp#peers_servers_vrfs}
  */
  readonly peersServersVrfs?: NtpPeersServersVrfs[] | cdktf.IResolvable;
  /**
  * Use a primary reference clock as clock source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#primary_reference_clock Ntp#primary_reference_clock}
  */
  readonly primaryReferenceClock?: boolean | cdktf.IResolvable;
  /**
  * Use NTP as clock source with stratum number <n>
  *   - Range: `1`-`15`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#primary_stratum_number Ntp#primary_stratum_number}
  */
  readonly primaryStratumNumber?: number;
  /**
  * default interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#source_interface_name Ntp#source_interface_name}
  */
  readonly sourceInterfaceName?: string;
  /**
  * Specify non-default VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#source_vrfs Ntp#source_vrfs}
  */
  readonly sourceVrfs?: NtpSourceVrfs[] | cdktf.IResolvable;
  /**
  * Key numbers for trusted time sources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#trusted_keys Ntp#trusted_keys}
  */
  readonly trustedKeys?: NtpTrustedKeys[] | cdktf.IResolvable;
  /**
  * Periodically update calendar with NTP time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#update_calendar Ntp#update_calendar}
  */
  readonly updateCalendar?: boolean | cdktf.IResolvable;
}
export interface NtpAccessGroupVrfs {
  /**
  * Provide full access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#ipv4_peer Ntp#ipv4_peer}
  */
  readonly ipv4Peer?: string;
  /**
  * Allow only control queries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#ipv4_query_only Ntp#ipv4_query_only}
  */
  readonly ipv4QueryOnly?: string;
  /**
  * Provide server and query access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#ipv4_serve Ntp#ipv4_serve}
  */
  readonly ipv4Serve?: string;
  /**
  * Provide only server access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#ipv4_serve_only Ntp#ipv4_serve_only}
  */
  readonly ipv4ServeOnly?: string;
  /**
  * Provide full access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#ipv6_peer Ntp#ipv6_peer}
  */
  readonly ipv6Peer?: string;
  /**
  * Allow only control queries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#ipv6_query_only Ntp#ipv6_query_only}
  */
  readonly ipv6QueryOnly?: string;
  /**
  * Provide server and query access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#ipv6_serve Ntp#ipv6_serve}
  */
  readonly ipv6Serve?: string;
  /**
  * Provide only server access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#ipv6_serve_only Ntp#ipv6_serve_only}
  */
  readonly ipv6ServeOnly?: string;
  /**
  * Specify non-default VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#vrf_name Ntp#vrf_name}
  */
  readonly vrfName: string;
}

export function ntpAccessGroupVrfsToTerraform(struct?: NtpAccessGroupVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_peer: cdktf.stringToTerraform(struct!.ipv4Peer),
    ipv4_query_only: cdktf.stringToTerraform(struct!.ipv4QueryOnly),
    ipv4_serve: cdktf.stringToTerraform(struct!.ipv4Serve),
    ipv4_serve_only: cdktf.stringToTerraform(struct!.ipv4ServeOnly),
    ipv6_peer: cdktf.stringToTerraform(struct!.ipv6Peer),
    ipv6_query_only: cdktf.stringToTerraform(struct!.ipv6QueryOnly),
    ipv6_serve: cdktf.stringToTerraform(struct!.ipv6Serve),
    ipv6_serve_only: cdktf.stringToTerraform(struct!.ipv6ServeOnly),
    vrf_name: cdktf.stringToTerraform(struct!.vrfName),
  }
}


export function ntpAccessGroupVrfsToHclTerraform(struct?: NtpAccessGroupVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_peer: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Peer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_query_only: {
      value: cdktf.stringToHclTerraform(struct!.ipv4QueryOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_serve: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Serve),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_serve_only: {
      value: cdktf.stringToHclTerraform(struct!.ipv4ServeOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_peer: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Peer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_query_only: {
      value: cdktf.stringToHclTerraform(struct!.ipv6QueryOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_serve: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Serve),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_serve_only: {
      value: cdktf.stringToHclTerraform(struct!.ipv6ServeOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf_name: {
      value: cdktf.stringToHclTerraform(struct!.vrfName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NtpAccessGroupVrfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NtpAccessGroupVrfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Peer !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Peer = this._ipv4Peer;
    }
    if (this._ipv4QueryOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4QueryOnly = this._ipv4QueryOnly;
    }
    if (this._ipv4Serve !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Serve = this._ipv4Serve;
    }
    if (this._ipv4ServeOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4ServeOnly = this._ipv4ServeOnly;
    }
    if (this._ipv6Peer !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Peer = this._ipv6Peer;
    }
    if (this._ipv6QueryOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6QueryOnly = this._ipv6QueryOnly;
    }
    if (this._ipv6Serve !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Serve = this._ipv6Serve;
    }
    if (this._ipv6ServeOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6ServeOnly = this._ipv6ServeOnly;
    }
    if (this._vrfName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfName = this._vrfName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NtpAccessGroupVrfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Peer = undefined;
      this._ipv4QueryOnly = undefined;
      this._ipv4Serve = undefined;
      this._ipv4ServeOnly = undefined;
      this._ipv6Peer = undefined;
      this._ipv6QueryOnly = undefined;
      this._ipv6Serve = undefined;
      this._ipv6ServeOnly = undefined;
      this._vrfName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Peer = value.ipv4Peer;
      this._ipv4QueryOnly = value.ipv4QueryOnly;
      this._ipv4Serve = value.ipv4Serve;
      this._ipv4ServeOnly = value.ipv4ServeOnly;
      this._ipv6Peer = value.ipv6Peer;
      this._ipv6QueryOnly = value.ipv6QueryOnly;
      this._ipv6Serve = value.ipv6Serve;
      this._ipv6ServeOnly = value.ipv6ServeOnly;
      this._vrfName = value.vrfName;
    }
  }

  // ipv4_peer - computed: false, optional: true, required: false
  private _ipv4Peer?: string; 
  public get ipv4Peer() {
    return this.getStringAttribute('ipv4_peer');
  }
  public set ipv4Peer(value: string) {
    this._ipv4Peer = value;
  }
  public resetIpv4Peer() {
    this._ipv4Peer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PeerInput() {
    return this._ipv4Peer;
  }

  // ipv4_query_only - computed: false, optional: true, required: false
  private _ipv4QueryOnly?: string; 
  public get ipv4QueryOnly() {
    return this.getStringAttribute('ipv4_query_only');
  }
  public set ipv4QueryOnly(value: string) {
    this._ipv4QueryOnly = value;
  }
  public resetIpv4QueryOnly() {
    this._ipv4QueryOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4QueryOnlyInput() {
    return this._ipv4QueryOnly;
  }

  // ipv4_serve - computed: false, optional: true, required: false
  private _ipv4Serve?: string; 
  public get ipv4Serve() {
    return this.getStringAttribute('ipv4_serve');
  }
  public set ipv4Serve(value: string) {
    this._ipv4Serve = value;
  }
  public resetIpv4Serve() {
    this._ipv4Serve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ServeInput() {
    return this._ipv4Serve;
  }

  // ipv4_serve_only - computed: false, optional: true, required: false
  private _ipv4ServeOnly?: string; 
  public get ipv4ServeOnly() {
    return this.getStringAttribute('ipv4_serve_only');
  }
  public set ipv4ServeOnly(value: string) {
    this._ipv4ServeOnly = value;
  }
  public resetIpv4ServeOnly() {
    this._ipv4ServeOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ServeOnlyInput() {
    return this._ipv4ServeOnly;
  }

  // ipv6_peer - computed: false, optional: true, required: false
  private _ipv6Peer?: string; 
  public get ipv6Peer() {
    return this.getStringAttribute('ipv6_peer');
  }
  public set ipv6Peer(value: string) {
    this._ipv6Peer = value;
  }
  public resetIpv6Peer() {
    this._ipv6Peer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PeerInput() {
    return this._ipv6Peer;
  }

  // ipv6_query_only - computed: false, optional: true, required: false
  private _ipv6QueryOnly?: string; 
  public get ipv6QueryOnly() {
    return this.getStringAttribute('ipv6_query_only');
  }
  public set ipv6QueryOnly(value: string) {
    this._ipv6QueryOnly = value;
  }
  public resetIpv6QueryOnly() {
    this._ipv6QueryOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6QueryOnlyInput() {
    return this._ipv6QueryOnly;
  }

  // ipv6_serve - computed: false, optional: true, required: false
  private _ipv6Serve?: string; 
  public get ipv6Serve() {
    return this.getStringAttribute('ipv6_serve');
  }
  public set ipv6Serve(value: string) {
    this._ipv6Serve = value;
  }
  public resetIpv6Serve() {
    this._ipv6Serve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ServeInput() {
    return this._ipv6Serve;
  }

  // ipv6_serve_only - computed: false, optional: true, required: false
  private _ipv6ServeOnly?: string; 
  public get ipv6ServeOnly() {
    return this.getStringAttribute('ipv6_serve_only');
  }
  public set ipv6ServeOnly(value: string) {
    this._ipv6ServeOnly = value;
  }
  public resetIpv6ServeOnly() {
    this._ipv6ServeOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ServeOnlyInput() {
    return this._ipv6ServeOnly;
  }

  // vrf_name - computed: false, optional: false, required: true
  private _vrfName?: string; 
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
  public set vrfName(value: string) {
    this._vrfName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfNameInput() {
    return this._vrfName;
  }
}

export class NtpAccessGroupVrfsList extends cdktf.ComplexList {
  public internalValue? : NtpAccessGroupVrfs[] | cdktf.IResolvable

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
  public get(index: number): NtpAccessGroupVrfsOutputReference {
    return new NtpAccessGroupVrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NtpAuthenticationKeys {
  /**
  * Authentication key for trusted time sources
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#key_number Ntp#key_number}
  */
  readonly keyNumber: number;
  /**
  * Specify an encrypted key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#md5_encrypted Ntp#md5_encrypted}
  */
  readonly md5Encrypted: string;
}

export function ntpAuthenticationKeysToTerraform(struct?: NtpAuthenticationKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_number: cdktf.numberToTerraform(struct!.keyNumber),
    md5_encrypted: cdktf.stringToTerraform(struct!.md5Encrypted),
  }
}


export function ntpAuthenticationKeysToHclTerraform(struct?: NtpAuthenticationKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_number: {
      value: cdktf.numberToHclTerraform(struct!.keyNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    md5_encrypted: {
      value: cdktf.stringToHclTerraform(struct!.md5Encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NtpAuthenticationKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NtpAuthenticationKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyNumber = this._keyNumber;
    }
    if (this._md5Encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5Encrypted = this._md5Encrypted;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NtpAuthenticationKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyNumber = undefined;
      this._md5Encrypted = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyNumber = value.keyNumber;
      this._md5Encrypted = value.md5Encrypted;
    }
  }

  // key_number - computed: false, optional: false, required: true
  private _keyNumber?: number; 
  public get keyNumber() {
    return this.getNumberAttribute('key_number');
  }
  public set keyNumber(value: number) {
    this._keyNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNumberInput() {
    return this._keyNumber;
  }

  // md5_encrypted - computed: false, optional: false, required: true
  private _md5Encrypted?: string; 
  public get md5Encrypted() {
    return this.getStringAttribute('md5_encrypted');
  }
  public set md5Encrypted(value: string) {
    this._md5Encrypted = value;
  }
  // Temporarily expose input value. Use with caution.
  public get md5EncryptedInput() {
    return this._md5Encrypted;
  }
}

export class NtpAuthenticationKeysList extends cdktf.ComplexList {
  public internalValue? : NtpAuthenticationKeys[] | cdktf.IResolvable

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
  public get(index: number): NtpAuthenticationKeysOutputReference {
    return new NtpAuthenticationKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NtpCmacAuthenticationKeys {
  /**
  * Specify an encrypted key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#cmac_encrypted Ntp#cmac_encrypted}
  */
  readonly cmacEncrypted: string;
  /**
  * Authentication key for trusted time sources
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#key_number Ntp#key_number}
  */
  readonly keyNumber: number;
}

export function ntpCmacAuthenticationKeysToTerraform(struct?: NtpCmacAuthenticationKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cmac_encrypted: cdktf.stringToTerraform(struct!.cmacEncrypted),
    key_number: cdktf.numberToTerraform(struct!.keyNumber),
  }
}


export function ntpCmacAuthenticationKeysToHclTerraform(struct?: NtpCmacAuthenticationKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cmac_encrypted: {
      value: cdktf.stringToHclTerraform(struct!.cmacEncrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_number: {
      value: cdktf.numberToHclTerraform(struct!.keyNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NtpCmacAuthenticationKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NtpCmacAuthenticationKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cmacEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmacEncrypted = this._cmacEncrypted;
    }
    if (this._keyNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyNumber = this._keyNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NtpCmacAuthenticationKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cmacEncrypted = undefined;
      this._keyNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cmacEncrypted = value.cmacEncrypted;
      this._keyNumber = value.keyNumber;
    }
  }

  // cmac_encrypted - computed: false, optional: false, required: true
  private _cmacEncrypted?: string; 
  public get cmacEncrypted() {
    return this.getStringAttribute('cmac_encrypted');
  }
  public set cmacEncrypted(value: string) {
    this._cmacEncrypted = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cmacEncryptedInput() {
    return this._cmacEncrypted;
  }

  // key_number - computed: false, optional: false, required: true
  private _keyNumber?: number; 
  public get keyNumber() {
    return this.getNumberAttribute('key_number');
  }
  public set keyNumber(value: number) {
    this._keyNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNumberInput() {
    return this._keyNumber;
  }
}

export class NtpCmacAuthenticationKeysList extends cdktf.ComplexList {
  public internalValue? : NtpCmacAuthenticationKeys[] | cdktf.IResolvable

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
  public get(index: number): NtpCmacAuthenticationKeysOutputReference {
    return new NtpCmacAuthenticationKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NtpHmacSha1AuthenticationKeys {
  /**
  * Specify an encrypted key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#hmac_sha1_encrypted Ntp#hmac_sha1_encrypted}
  */
  readonly hmacSha1Encrypted: string;
  /**
  * Authentication key for trusted time sources
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#key_number Ntp#key_number}
  */
  readonly keyNumber: number;
}

export function ntpHmacSha1AuthenticationKeysToTerraform(struct?: NtpHmacSha1AuthenticationKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hmac_sha1_encrypted: cdktf.stringToTerraform(struct!.hmacSha1Encrypted),
    key_number: cdktf.numberToTerraform(struct!.keyNumber),
  }
}


export function ntpHmacSha1AuthenticationKeysToHclTerraform(struct?: NtpHmacSha1AuthenticationKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hmac_sha1_encrypted: {
      value: cdktf.stringToHclTerraform(struct!.hmacSha1Encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_number: {
      value: cdktf.numberToHclTerraform(struct!.keyNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NtpHmacSha1AuthenticationKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NtpHmacSha1AuthenticationKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hmacSha1Encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.hmacSha1Encrypted = this._hmacSha1Encrypted;
    }
    if (this._keyNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyNumber = this._keyNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NtpHmacSha1AuthenticationKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hmacSha1Encrypted = undefined;
      this._keyNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hmacSha1Encrypted = value.hmacSha1Encrypted;
      this._keyNumber = value.keyNumber;
    }
  }

  // hmac_sha1_encrypted - computed: false, optional: false, required: true
  private _hmacSha1Encrypted?: string; 
  public get hmacSha1Encrypted() {
    return this.getStringAttribute('hmac_sha1_encrypted');
  }
  public set hmacSha1Encrypted(value: string) {
    this._hmacSha1Encrypted = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hmacSha1EncryptedInput() {
    return this._hmacSha1Encrypted;
  }

  // key_number - computed: false, optional: false, required: true
  private _keyNumber?: number; 
  public get keyNumber() {
    return this.getNumberAttribute('key_number');
  }
  public set keyNumber(value: number) {
    this._keyNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNumberInput() {
    return this._keyNumber;
  }
}

export class NtpHmacSha1AuthenticationKeysList extends cdktf.ComplexList {
  public internalValue? : NtpHmacSha1AuthenticationKeys[] | cdktf.IResolvable

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
  public get(index: number): NtpHmacSha1AuthenticationKeysOutputReference {
    return new NtpHmacSha1AuthenticationKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NtpHmacSha2AuthenticationKeys {
  /**
  * Specify an encrypted key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#hmac_sha2_encrypted Ntp#hmac_sha2_encrypted}
  */
  readonly hmacSha2Encrypted: string;
  /**
  * Authentication key for trusted time sources
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#key_number Ntp#key_number}
  */
  readonly keyNumber: number;
}

export function ntpHmacSha2AuthenticationKeysToTerraform(struct?: NtpHmacSha2AuthenticationKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hmac_sha2_encrypted: cdktf.stringToTerraform(struct!.hmacSha2Encrypted),
    key_number: cdktf.numberToTerraform(struct!.keyNumber),
  }
}


export function ntpHmacSha2AuthenticationKeysToHclTerraform(struct?: NtpHmacSha2AuthenticationKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hmac_sha2_encrypted: {
      value: cdktf.stringToHclTerraform(struct!.hmacSha2Encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_number: {
      value: cdktf.numberToHclTerraform(struct!.keyNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NtpHmacSha2AuthenticationKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NtpHmacSha2AuthenticationKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hmacSha2Encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.hmacSha2Encrypted = this._hmacSha2Encrypted;
    }
    if (this._keyNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyNumber = this._keyNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NtpHmacSha2AuthenticationKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hmacSha2Encrypted = undefined;
      this._keyNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hmacSha2Encrypted = value.hmacSha2Encrypted;
      this._keyNumber = value.keyNumber;
    }
  }

  // hmac_sha2_encrypted - computed: false, optional: false, required: true
  private _hmacSha2Encrypted?: string; 
  public get hmacSha2Encrypted() {
    return this.getStringAttribute('hmac_sha2_encrypted');
  }
  public set hmacSha2Encrypted(value: string) {
    this._hmacSha2Encrypted = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hmacSha2EncryptedInput() {
    return this._hmacSha2Encrypted;
  }

  // key_number - computed: false, optional: false, required: true
  private _keyNumber?: number; 
  public get keyNumber() {
    return this.getNumberAttribute('key_number');
  }
  public set keyNumber(value: number) {
    this._keyNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNumberInput() {
    return this._keyNumber;
  }
}

export class NtpHmacSha2AuthenticationKeysList extends cdktf.ComplexList {
  public internalValue? : NtpHmacSha2AuthenticationKeys[] | cdktf.IResolvable

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
  public get(index: number): NtpHmacSha2AuthenticationKeysOutputReference {
    return new NtpHmacSha2AuthenticationKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NtpInterfaceVrfsInterfaces {
  /**
  * Listen to NTP broadcasts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#broadcast_client Ntp#broadcast_client}
  */
  readonly broadcastClient?: boolean | cdktf.IResolvable;
  /**
  * Configure broadcast destination address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#broadcast_destination Ntp#broadcast_destination}
  */
  readonly broadcastDestination?: string;
  /**
  * Configure broadcast authentication key
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#broadcast_key Ntp#broadcast_key}
  */
  readonly broadcastKey?: number;
  /**
  * Configure NTP version
  *   - Range: `2`-`4`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#broadcast_version Ntp#broadcast_version}
  */
  readonly broadcastVersion?: number;
  /**
  * Disable NTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#disable Ntp#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Configure NTP on an interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#interface_name Ntp#interface_name}
  */
  readonly interfaceName: string;
}

export function ntpInterfaceVrfsInterfacesToTerraform(struct?: NtpInterfaceVrfsInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    broadcast_client: cdktf.booleanToTerraform(struct!.broadcastClient),
    broadcast_destination: cdktf.stringToTerraform(struct!.broadcastDestination),
    broadcast_key: cdktf.numberToTerraform(struct!.broadcastKey),
    broadcast_version: cdktf.numberToTerraform(struct!.broadcastVersion),
    disable: cdktf.booleanToTerraform(struct!.disable),
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
  }
}


export function ntpInterfaceVrfsInterfacesToHclTerraform(struct?: NtpInterfaceVrfsInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    broadcast_client: {
      value: cdktf.booleanToHclTerraform(struct!.broadcastClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    broadcast_destination: {
      value: cdktf.stringToHclTerraform(struct!.broadcastDestination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    broadcast_key: {
      value: cdktf.numberToHclTerraform(struct!.broadcastKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    broadcast_version: {
      value: cdktf.numberToHclTerraform(struct!.broadcastVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class NtpInterfaceVrfsInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NtpInterfaceVrfsInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._broadcastClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.broadcastClient = this._broadcastClient;
    }
    if (this._broadcastDestination !== undefined) {
      hasAnyValues = true;
      internalValueResult.broadcastDestination = this._broadcastDestination;
    }
    if (this._broadcastKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.broadcastKey = this._broadcastKey;
    }
    if (this._broadcastVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.broadcastVersion = this._broadcastVersion;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NtpInterfaceVrfsInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._broadcastClient = undefined;
      this._broadcastDestination = undefined;
      this._broadcastKey = undefined;
      this._broadcastVersion = undefined;
      this._disable = undefined;
      this._interfaceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._broadcastClient = value.broadcastClient;
      this._broadcastDestination = value.broadcastDestination;
      this._broadcastKey = value.broadcastKey;
      this._broadcastVersion = value.broadcastVersion;
      this._disable = value.disable;
      this._interfaceName = value.interfaceName;
    }
  }

  // broadcast_client - computed: false, optional: true, required: false
  private _broadcastClient?: boolean | cdktf.IResolvable; 
  public get broadcastClient() {
    return this.getBooleanAttribute('broadcast_client');
  }
  public set broadcastClient(value: boolean | cdktf.IResolvable) {
    this._broadcastClient = value;
  }
  public resetBroadcastClient() {
    this._broadcastClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastClientInput() {
    return this._broadcastClient;
  }

  // broadcast_destination - computed: false, optional: true, required: false
  private _broadcastDestination?: string; 
  public get broadcastDestination() {
    return this.getStringAttribute('broadcast_destination');
  }
  public set broadcastDestination(value: string) {
    this._broadcastDestination = value;
  }
  public resetBroadcastDestination() {
    this._broadcastDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastDestinationInput() {
    return this._broadcastDestination;
  }

  // broadcast_key - computed: false, optional: true, required: false
  private _broadcastKey?: number; 
  public get broadcastKey() {
    return this.getNumberAttribute('broadcast_key');
  }
  public set broadcastKey(value: number) {
    this._broadcastKey = value;
  }
  public resetBroadcastKey() {
    this._broadcastKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastKeyInput() {
    return this._broadcastKey;
  }

  // broadcast_version - computed: false, optional: true, required: false
  private _broadcastVersion?: number; 
  public get broadcastVersion() {
    return this.getNumberAttribute('broadcast_version');
  }
  public set broadcastVersion(value: number) {
    this._broadcastVersion = value;
  }
  public resetBroadcastVersion() {
    this._broadcastVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastVersionInput() {
    return this._broadcastVersion;
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

export class NtpInterfaceVrfsInterfacesList extends cdktf.ComplexList {
  public internalValue? : NtpInterfaceVrfsInterfaces[] | cdktf.IResolvable

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
  public get(index: number): NtpInterfaceVrfsInterfacesOutputReference {
    return new NtpInterfaceVrfsInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NtpInterfaceVrfs {
  /**
  * Configure NTP on an interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#interfaces Ntp#interfaces}
  */
  readonly interfaces?: NtpInterfaceVrfsInterfaces[] | cdktf.IResolvable;
  /**
  * Specify non-default VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#vrf_name Ntp#vrf_name}
  */
  readonly vrfName: string;
}

export function ntpInterfaceVrfsToTerraform(struct?: NtpInterfaceVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interfaces: cdktf.listMapper(ntpInterfaceVrfsInterfacesToTerraform, false)(struct!.interfaces),
    vrf_name: cdktf.stringToTerraform(struct!.vrfName),
  }
}


export function ntpInterfaceVrfsToHclTerraform(struct?: NtpInterfaceVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interfaces: {
      value: cdktf.listMapperHcl(ntpInterfaceVrfsInterfacesToHclTerraform, false)(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "NtpInterfaceVrfsInterfacesList",
    },
    vrf_name: {
      value: cdktf.stringToHclTerraform(struct!.vrfName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NtpInterfaceVrfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NtpInterfaceVrfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces?.internalValue;
    }
    if (this._vrfName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfName = this._vrfName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NtpInterfaceVrfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaces.internalValue = undefined;
      this._vrfName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaces.internalValue = value.interfaces;
      this._vrfName = value.vrfName;
    }
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new NtpInterfaceVrfsInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: NtpInterfaceVrfsInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // vrf_name - computed: false, optional: false, required: true
  private _vrfName?: string; 
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
  public set vrfName(value: string) {
    this._vrfName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfNameInput() {
    return this._vrfName;
  }
}

export class NtpInterfaceVrfsList extends cdktf.ComplexList {
  public internalValue? : NtpInterfaceVrfs[] | cdktf.IResolvable

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
  public get(index: number): NtpInterfaceVrfsOutputReference {
    return new NtpInterfaceVrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NtpInterfaces {
  /**
  * Configure broadcast destination address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#broadcast_destination Ntp#broadcast_destination}
  */
  readonly broadcastDestination?: string;
  /**
  * Configure broadcast authentication key
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#broadcast_key Ntp#broadcast_key}
  */
  readonly broadcastKey?: number;
  /**
  * Configure NTP version
  *   - Range: `2`-`4`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#broadcast_version Ntp#broadcast_version}
  */
  readonly broadcastVersion?: number;
  /**
  * Disable NTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#disable Ntp#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Configure NTP on an interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#interface_name Ntp#interface_name}
  */
  readonly interfaceName: string;
}

export function ntpInterfacesToTerraform(struct?: NtpInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    broadcast_destination: cdktf.stringToTerraform(struct!.broadcastDestination),
    broadcast_key: cdktf.numberToTerraform(struct!.broadcastKey),
    broadcast_version: cdktf.numberToTerraform(struct!.broadcastVersion),
    disable: cdktf.booleanToTerraform(struct!.disable),
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
  }
}


export function ntpInterfacesToHclTerraform(struct?: NtpInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    broadcast_destination: {
      value: cdktf.stringToHclTerraform(struct!.broadcastDestination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    broadcast_key: {
      value: cdktf.numberToHclTerraform(struct!.broadcastKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    broadcast_version: {
      value: cdktf.numberToHclTerraform(struct!.broadcastVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class NtpInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NtpInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._broadcastDestination !== undefined) {
      hasAnyValues = true;
      internalValueResult.broadcastDestination = this._broadcastDestination;
    }
    if (this._broadcastKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.broadcastKey = this._broadcastKey;
    }
    if (this._broadcastVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.broadcastVersion = this._broadcastVersion;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NtpInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._broadcastDestination = undefined;
      this._broadcastKey = undefined;
      this._broadcastVersion = undefined;
      this._disable = undefined;
      this._interfaceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._broadcastDestination = value.broadcastDestination;
      this._broadcastKey = value.broadcastKey;
      this._broadcastVersion = value.broadcastVersion;
      this._disable = value.disable;
      this._interfaceName = value.interfaceName;
    }
  }

  // broadcast_destination - computed: false, optional: true, required: false
  private _broadcastDestination?: string; 
  public get broadcastDestination() {
    return this.getStringAttribute('broadcast_destination');
  }
  public set broadcastDestination(value: string) {
    this._broadcastDestination = value;
  }
  public resetBroadcastDestination() {
    this._broadcastDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastDestinationInput() {
    return this._broadcastDestination;
  }

  // broadcast_key - computed: false, optional: true, required: false
  private _broadcastKey?: number; 
  public get broadcastKey() {
    return this.getNumberAttribute('broadcast_key');
  }
  public set broadcastKey(value: number) {
    this._broadcastKey = value;
  }
  public resetBroadcastKey() {
    this._broadcastKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastKeyInput() {
    return this._broadcastKey;
  }

  // broadcast_version - computed: false, optional: true, required: false
  private _broadcastVersion?: number; 
  public get broadcastVersion() {
    return this.getNumberAttribute('broadcast_version');
  }
  public set broadcastVersion(value: number) {
    this._broadcastVersion = value;
  }
  public resetBroadcastVersion() {
    this._broadcastVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastVersionInput() {
    return this._broadcastVersion;
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

export class NtpInterfacesList extends cdktf.ComplexList {
  public internalValue? : NtpInterfaces[] | cdktf.IResolvable

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
  public get(index: number): NtpInterfacesOutputReference {
    return new NtpInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NtpIpv4PeersServers {
  /**
  * Peer/server address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#address Ntp#address}
  */
  readonly address: string;
  /**
  * Use burst mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#burst Ntp#burst}
  */
  readonly burst?: boolean | cdktf.IResolvable;
  /**
  * Use initial burst mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#iburst Ntp#iburst}
  */
  readonly iburst?: boolean | cdktf.IResolvable;
  /**
  * Configure peer authentication key
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#key Ntp#key}
  */
  readonly key?: number;
  /**
  * Configure maximum polling rate
  *   - Range: `4`-`9`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#maxpoll Ntp#maxpoll}
  */
  readonly maxpoll?: number;
  /**
  * Configure minimum polling rate
  *   - Range: `4`-`5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#minpoll Ntp#minpoll}
  */
  readonly minpoll?: number;
  /**
  * Prefer this peer when possible
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#prefer Ntp#prefer}
  */
  readonly prefer?: boolean | cdktf.IResolvable;
  /**
  * Interface for source address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#source Ntp#source}
  */
  readonly source?: string;
  /**
  * Specify peer/server
  *   - Choices: `peer`, `server`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#type Ntp#type}
  */
  readonly type: string;
  /**
  * Configure NTP version
  *   - Range: `2`-`4`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#version Ntp#version}
  */
  readonly version?: number;
}

export function ntpIpv4PeersServersToTerraform(struct?: NtpIpv4PeersServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    burst: cdktf.booleanToTerraform(struct!.burst),
    iburst: cdktf.booleanToTerraform(struct!.iburst),
    key: cdktf.numberToTerraform(struct!.key),
    maxpoll: cdktf.numberToTerraform(struct!.maxpoll),
    minpoll: cdktf.numberToTerraform(struct!.minpoll),
    prefer: cdktf.booleanToTerraform(struct!.prefer),
    source: cdktf.stringToTerraform(struct!.source),
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function ntpIpv4PeersServersToHclTerraform(struct?: NtpIpv4PeersServers | cdktf.IResolvable): any {
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
    burst: {
      value: cdktf.booleanToHclTerraform(struct!.burst),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    iburst: {
      value: cdktf.booleanToHclTerraform(struct!.iburst),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.numberToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maxpoll: {
      value: cdktf.numberToHclTerraform(struct!.maxpoll),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minpoll: {
      value: cdktf.numberToHclTerraform(struct!.minpoll),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefer: {
      value: cdktf.booleanToHclTerraform(struct!.prefer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NtpIpv4PeersServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NtpIpv4PeersServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._burst !== undefined) {
      hasAnyValues = true;
      internalValueResult.burst = this._burst;
    }
    if (this._iburst !== undefined) {
      hasAnyValues = true;
      internalValueResult.iburst = this._iburst;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._maxpoll !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxpoll = this._maxpoll;
    }
    if (this._minpoll !== undefined) {
      hasAnyValues = true;
      internalValueResult.minpoll = this._minpoll;
    }
    if (this._prefer !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefer = this._prefer;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NtpIpv4PeersServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._burst = undefined;
      this._iburst = undefined;
      this._key = undefined;
      this._maxpoll = undefined;
      this._minpoll = undefined;
      this._prefer = undefined;
      this._source = undefined;
      this._type = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._burst = value.burst;
      this._iburst = value.iburst;
      this._key = value.key;
      this._maxpoll = value.maxpoll;
      this._minpoll = value.minpoll;
      this._prefer = value.prefer;
      this._source = value.source;
      this._type = value.type;
      this._version = value.version;
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

  // burst - computed: false, optional: true, required: false
  private _burst?: boolean | cdktf.IResolvable; 
  public get burst() {
    return this.getBooleanAttribute('burst');
  }
  public set burst(value: boolean | cdktf.IResolvable) {
    this._burst = value;
  }
  public resetBurst() {
    this._burst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstInput() {
    return this._burst;
  }

  // iburst - computed: false, optional: true, required: false
  private _iburst?: boolean | cdktf.IResolvable; 
  public get iburst() {
    return this.getBooleanAttribute('iburst');
  }
  public set iburst(value: boolean | cdktf.IResolvable) {
    this._iburst = value;
  }
  public resetIburst() {
    this._iburst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iburstInput() {
    return this._iburst;
  }

  // key - computed: false, optional: true, required: false
  private _key?: number; 
  public get key() {
    return this.getNumberAttribute('key');
  }
  public set key(value: number) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // maxpoll - computed: false, optional: true, required: false
  private _maxpoll?: number; 
  public get maxpoll() {
    return this.getNumberAttribute('maxpoll');
  }
  public set maxpoll(value: number) {
    this._maxpoll = value;
  }
  public resetMaxpoll() {
    this._maxpoll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxpollInput() {
    return this._maxpoll;
  }

  // minpoll - computed: false, optional: true, required: false
  private _minpoll?: number; 
  public get minpoll() {
    return this.getNumberAttribute('minpoll');
  }
  public set minpoll(value: number) {
    this._minpoll = value;
  }
  public resetMinpoll() {
    this._minpoll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minpollInput() {
    return this._minpoll;
  }

  // prefer - computed: false, optional: true, required: false
  private _prefer?: boolean | cdktf.IResolvable; 
  public get prefer() {
    return this.getBooleanAttribute('prefer');
  }
  public set prefer(value: boolean | cdktf.IResolvable) {
    this._prefer = value;
  }
  public resetPrefer() {
    this._prefer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferInput() {
    return this._prefer;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class NtpIpv4PeersServersList extends cdktf.ComplexList {
  public internalValue? : NtpIpv4PeersServers[] | cdktf.IResolvable

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
  public get(index: number): NtpIpv4PeersServersOutputReference {
    return new NtpIpv4PeersServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NtpIpv6PeersServers {
  /**
  * Peer/server address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#address Ntp#address}
  */
  readonly address: string;
  /**
  * Use burst mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#burst Ntp#burst}
  */
  readonly burst?: boolean | cdktf.IResolvable;
  /**
  * Use initial burst mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#iburst Ntp#iburst}
  */
  readonly iburst?: boolean | cdktf.IResolvable;
  /**
  * IPv6 address (must be same as key node 'address')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#ipv6_address Ntp#ipv6_address}
  */
  readonly ipv6Address: string;
  /**
  * Configure peer authentication key
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#key Ntp#key}
  */
  readonly key?: number;
  /**
  * Configure maximum polling rate
  *   - Range: `4`-`9`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#maxpoll Ntp#maxpoll}
  */
  readonly maxpoll?: number;
  /**
  * Configure minimum polling rate
  *   - Range: `4`-`5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#minpoll Ntp#minpoll}
  */
  readonly minpoll?: number;
  /**
  * Prefer this peer when possible
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#prefer Ntp#prefer}
  */
  readonly prefer?: boolean | cdktf.IResolvable;
  /**
  * Interface for source address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#source Ntp#source}
  */
  readonly source?: string;
  /**
  * Specify peer/server
  *   - Choices: `peer`, `server`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#type Ntp#type}
  */
  readonly type: string;
  /**
  * Configure NTP version
  *   - Range: `2`-`4`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#version Ntp#version}
  */
  readonly version?: number;
}

export function ntpIpv6PeersServersToTerraform(struct?: NtpIpv6PeersServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    burst: cdktf.booleanToTerraform(struct!.burst),
    iburst: cdktf.booleanToTerraform(struct!.iburst),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    key: cdktf.numberToTerraform(struct!.key),
    maxpoll: cdktf.numberToTerraform(struct!.maxpoll),
    minpoll: cdktf.numberToTerraform(struct!.minpoll),
    prefer: cdktf.booleanToTerraform(struct!.prefer),
    source: cdktf.stringToTerraform(struct!.source),
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function ntpIpv6PeersServersToHclTerraform(struct?: NtpIpv6PeersServers | cdktf.IResolvable): any {
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
    burst: {
      value: cdktf.booleanToHclTerraform(struct!.burst),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    iburst: {
      value: cdktf.booleanToHclTerraform(struct!.iburst),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.numberToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maxpoll: {
      value: cdktf.numberToHclTerraform(struct!.maxpoll),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minpoll: {
      value: cdktf.numberToHclTerraform(struct!.minpoll),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefer: {
      value: cdktf.booleanToHclTerraform(struct!.prefer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NtpIpv6PeersServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NtpIpv6PeersServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._burst !== undefined) {
      hasAnyValues = true;
      internalValueResult.burst = this._burst;
    }
    if (this._iburst !== undefined) {
      hasAnyValues = true;
      internalValueResult.iburst = this._iburst;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._maxpoll !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxpoll = this._maxpoll;
    }
    if (this._minpoll !== undefined) {
      hasAnyValues = true;
      internalValueResult.minpoll = this._minpoll;
    }
    if (this._prefer !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefer = this._prefer;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NtpIpv6PeersServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._burst = undefined;
      this._iburst = undefined;
      this._ipv6Address = undefined;
      this._key = undefined;
      this._maxpoll = undefined;
      this._minpoll = undefined;
      this._prefer = undefined;
      this._source = undefined;
      this._type = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._burst = value.burst;
      this._iburst = value.iburst;
      this._ipv6Address = value.ipv6Address;
      this._key = value.key;
      this._maxpoll = value.maxpoll;
      this._minpoll = value.minpoll;
      this._prefer = value.prefer;
      this._source = value.source;
      this._type = value.type;
      this._version = value.version;
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

  // burst - computed: false, optional: true, required: false
  private _burst?: boolean | cdktf.IResolvable; 
  public get burst() {
    return this.getBooleanAttribute('burst');
  }
  public set burst(value: boolean | cdktf.IResolvable) {
    this._burst = value;
  }
  public resetBurst() {
    this._burst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstInput() {
    return this._burst;
  }

  // iburst - computed: false, optional: true, required: false
  private _iburst?: boolean | cdktf.IResolvable; 
  public get iburst() {
    return this.getBooleanAttribute('iburst');
  }
  public set iburst(value: boolean | cdktf.IResolvable) {
    this._iburst = value;
  }
  public resetIburst() {
    this._iburst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iburstInput() {
    return this._iburst;
  }

  // ipv6_address - computed: false, optional: false, required: true
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // key - computed: false, optional: true, required: false
  private _key?: number; 
  public get key() {
    return this.getNumberAttribute('key');
  }
  public set key(value: number) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // maxpoll - computed: false, optional: true, required: false
  private _maxpoll?: number; 
  public get maxpoll() {
    return this.getNumberAttribute('maxpoll');
  }
  public set maxpoll(value: number) {
    this._maxpoll = value;
  }
  public resetMaxpoll() {
    this._maxpoll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxpollInput() {
    return this._maxpoll;
  }

  // minpoll - computed: false, optional: true, required: false
  private _minpoll?: number; 
  public get minpoll() {
    return this.getNumberAttribute('minpoll');
  }
  public set minpoll(value: number) {
    this._minpoll = value;
  }
  public resetMinpoll() {
    this._minpoll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minpollInput() {
    return this._minpoll;
  }

  // prefer - computed: false, optional: true, required: false
  private _prefer?: boolean | cdktf.IResolvable; 
  public get prefer() {
    return this.getBooleanAttribute('prefer');
  }
  public set prefer(value: boolean | cdktf.IResolvable) {
    this._prefer = value;
  }
  public resetPrefer() {
    this._prefer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferInput() {
    return this._prefer;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class NtpIpv6PeersServersList extends cdktf.ComplexList {
  public internalValue? : NtpIpv6PeersServers[] | cdktf.IResolvable

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
  public get(index: number): NtpIpv6PeersServersOutputReference {
    return new NtpIpv6PeersServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NtpPeersServersVrfsIpv4PeersServers {
  /**
  * Peer/server address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#address Ntp#address}
  */
  readonly address: string;
  /**
  * Use burst mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#burst Ntp#burst}
  */
  readonly burst?: boolean | cdktf.IResolvable;
  /**
  * Use initial burst mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#iburst Ntp#iburst}
  */
  readonly iburst?: boolean | cdktf.IResolvable;
  /**
  * Configure peer authentication key
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#key Ntp#key}
  */
  readonly key?: number;
  /**
  * Configure maximum polling rate
  *   - Range: `4`-`9`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#maxpoll Ntp#maxpoll}
  */
  readonly maxpoll?: number;
  /**
  * Configure minimum polling rate
  *   - Range: `4`-`5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#minpoll Ntp#minpoll}
  */
  readonly minpoll?: number;
  /**
  * Prefer this peer when possible
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#prefer Ntp#prefer}
  */
  readonly prefer?: boolean | cdktf.IResolvable;
  /**
  * Interface for source address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#source Ntp#source}
  */
  readonly source?: string;
  /**
  * Specify peer/server
  *   - Choices: `peer`, `server`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#type Ntp#type}
  */
  readonly type: string;
  /**
  * Configure NTP version
  *   - Range: `2`-`4`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#version Ntp#version}
  */
  readonly version?: number;
}

export function ntpPeersServersVrfsIpv4PeersServersToTerraform(struct?: NtpPeersServersVrfsIpv4PeersServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    burst: cdktf.booleanToTerraform(struct!.burst),
    iburst: cdktf.booleanToTerraform(struct!.iburst),
    key: cdktf.numberToTerraform(struct!.key),
    maxpoll: cdktf.numberToTerraform(struct!.maxpoll),
    minpoll: cdktf.numberToTerraform(struct!.minpoll),
    prefer: cdktf.booleanToTerraform(struct!.prefer),
    source: cdktf.stringToTerraform(struct!.source),
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function ntpPeersServersVrfsIpv4PeersServersToHclTerraform(struct?: NtpPeersServersVrfsIpv4PeersServers | cdktf.IResolvable): any {
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
    burst: {
      value: cdktf.booleanToHclTerraform(struct!.burst),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    iburst: {
      value: cdktf.booleanToHclTerraform(struct!.iburst),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.numberToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maxpoll: {
      value: cdktf.numberToHclTerraform(struct!.maxpoll),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minpoll: {
      value: cdktf.numberToHclTerraform(struct!.minpoll),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefer: {
      value: cdktf.booleanToHclTerraform(struct!.prefer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NtpPeersServersVrfsIpv4PeersServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NtpPeersServersVrfsIpv4PeersServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._burst !== undefined) {
      hasAnyValues = true;
      internalValueResult.burst = this._burst;
    }
    if (this._iburst !== undefined) {
      hasAnyValues = true;
      internalValueResult.iburst = this._iburst;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._maxpoll !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxpoll = this._maxpoll;
    }
    if (this._minpoll !== undefined) {
      hasAnyValues = true;
      internalValueResult.minpoll = this._minpoll;
    }
    if (this._prefer !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefer = this._prefer;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NtpPeersServersVrfsIpv4PeersServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._burst = undefined;
      this._iburst = undefined;
      this._key = undefined;
      this._maxpoll = undefined;
      this._minpoll = undefined;
      this._prefer = undefined;
      this._source = undefined;
      this._type = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._burst = value.burst;
      this._iburst = value.iburst;
      this._key = value.key;
      this._maxpoll = value.maxpoll;
      this._minpoll = value.minpoll;
      this._prefer = value.prefer;
      this._source = value.source;
      this._type = value.type;
      this._version = value.version;
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

  // burst - computed: false, optional: true, required: false
  private _burst?: boolean | cdktf.IResolvable; 
  public get burst() {
    return this.getBooleanAttribute('burst');
  }
  public set burst(value: boolean | cdktf.IResolvable) {
    this._burst = value;
  }
  public resetBurst() {
    this._burst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstInput() {
    return this._burst;
  }

  // iburst - computed: false, optional: true, required: false
  private _iburst?: boolean | cdktf.IResolvable; 
  public get iburst() {
    return this.getBooleanAttribute('iburst');
  }
  public set iburst(value: boolean | cdktf.IResolvable) {
    this._iburst = value;
  }
  public resetIburst() {
    this._iburst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iburstInput() {
    return this._iburst;
  }

  // key - computed: false, optional: true, required: false
  private _key?: number; 
  public get key() {
    return this.getNumberAttribute('key');
  }
  public set key(value: number) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // maxpoll - computed: false, optional: true, required: false
  private _maxpoll?: number; 
  public get maxpoll() {
    return this.getNumberAttribute('maxpoll');
  }
  public set maxpoll(value: number) {
    this._maxpoll = value;
  }
  public resetMaxpoll() {
    this._maxpoll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxpollInput() {
    return this._maxpoll;
  }

  // minpoll - computed: false, optional: true, required: false
  private _minpoll?: number; 
  public get minpoll() {
    return this.getNumberAttribute('minpoll');
  }
  public set minpoll(value: number) {
    this._minpoll = value;
  }
  public resetMinpoll() {
    this._minpoll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minpollInput() {
    return this._minpoll;
  }

  // prefer - computed: false, optional: true, required: false
  private _prefer?: boolean | cdktf.IResolvable; 
  public get prefer() {
    return this.getBooleanAttribute('prefer');
  }
  public set prefer(value: boolean | cdktf.IResolvable) {
    this._prefer = value;
  }
  public resetPrefer() {
    this._prefer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferInput() {
    return this._prefer;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class NtpPeersServersVrfsIpv4PeersServersList extends cdktf.ComplexList {
  public internalValue? : NtpPeersServersVrfsIpv4PeersServers[] | cdktf.IResolvable

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
  public get(index: number): NtpPeersServersVrfsIpv4PeersServersOutputReference {
    return new NtpPeersServersVrfsIpv4PeersServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NtpPeersServersVrfsIpv6PeersServers {
  /**
  * Peer/server address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#address Ntp#address}
  */
  readonly address: string;
  /**
  * Use burst mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#burst Ntp#burst}
  */
  readonly burst?: boolean | cdktf.IResolvable;
  /**
  * Use initial burst mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#iburst Ntp#iburst}
  */
  readonly iburst?: boolean | cdktf.IResolvable;
  /**
  * IPv6 address (must be same as key node 'address')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#ipv6_address Ntp#ipv6_address}
  */
  readonly ipv6Address: string;
  /**
  * Configure peer authentication key
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#key Ntp#key}
  */
  readonly key?: number;
  /**
  * Configure maximum polling rate
  *   - Range: `4`-`9`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#maxpoll Ntp#maxpoll}
  */
  readonly maxpoll?: number;
  /**
  * Configure minimum polling rate
  *   - Range: `4`-`5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#minpoll Ntp#minpoll}
  */
  readonly minpoll?: number;
  /**
  * Prefer this peer when possible
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#prefer Ntp#prefer}
  */
  readonly prefer?: boolean | cdktf.IResolvable;
  /**
  * Interface for source address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#source Ntp#source}
  */
  readonly source?: string;
  /**
  * Specify peer/server
  *   - Choices: `peer`, `server`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#type Ntp#type}
  */
  readonly type: string;
  /**
  * Configure NTP version
  *   - Range: `2`-`4`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#version Ntp#version}
  */
  readonly version?: number;
}

export function ntpPeersServersVrfsIpv6PeersServersToTerraform(struct?: NtpPeersServersVrfsIpv6PeersServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    burst: cdktf.booleanToTerraform(struct!.burst),
    iburst: cdktf.booleanToTerraform(struct!.iburst),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    key: cdktf.numberToTerraform(struct!.key),
    maxpoll: cdktf.numberToTerraform(struct!.maxpoll),
    minpoll: cdktf.numberToTerraform(struct!.minpoll),
    prefer: cdktf.booleanToTerraform(struct!.prefer),
    source: cdktf.stringToTerraform(struct!.source),
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function ntpPeersServersVrfsIpv6PeersServersToHclTerraform(struct?: NtpPeersServersVrfsIpv6PeersServers | cdktf.IResolvable): any {
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
    burst: {
      value: cdktf.booleanToHclTerraform(struct!.burst),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    iburst: {
      value: cdktf.booleanToHclTerraform(struct!.iburst),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.numberToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maxpoll: {
      value: cdktf.numberToHclTerraform(struct!.maxpoll),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minpoll: {
      value: cdktf.numberToHclTerraform(struct!.minpoll),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefer: {
      value: cdktf.booleanToHclTerraform(struct!.prefer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NtpPeersServersVrfsIpv6PeersServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NtpPeersServersVrfsIpv6PeersServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._burst !== undefined) {
      hasAnyValues = true;
      internalValueResult.burst = this._burst;
    }
    if (this._iburst !== undefined) {
      hasAnyValues = true;
      internalValueResult.iburst = this._iburst;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._maxpoll !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxpoll = this._maxpoll;
    }
    if (this._minpoll !== undefined) {
      hasAnyValues = true;
      internalValueResult.minpoll = this._minpoll;
    }
    if (this._prefer !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefer = this._prefer;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NtpPeersServersVrfsIpv6PeersServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._burst = undefined;
      this._iburst = undefined;
      this._ipv6Address = undefined;
      this._key = undefined;
      this._maxpoll = undefined;
      this._minpoll = undefined;
      this._prefer = undefined;
      this._source = undefined;
      this._type = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._burst = value.burst;
      this._iburst = value.iburst;
      this._ipv6Address = value.ipv6Address;
      this._key = value.key;
      this._maxpoll = value.maxpoll;
      this._minpoll = value.minpoll;
      this._prefer = value.prefer;
      this._source = value.source;
      this._type = value.type;
      this._version = value.version;
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

  // burst - computed: false, optional: true, required: false
  private _burst?: boolean | cdktf.IResolvable; 
  public get burst() {
    return this.getBooleanAttribute('burst');
  }
  public set burst(value: boolean | cdktf.IResolvable) {
    this._burst = value;
  }
  public resetBurst() {
    this._burst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstInput() {
    return this._burst;
  }

  // iburst - computed: false, optional: true, required: false
  private _iburst?: boolean | cdktf.IResolvable; 
  public get iburst() {
    return this.getBooleanAttribute('iburst');
  }
  public set iburst(value: boolean | cdktf.IResolvable) {
    this._iburst = value;
  }
  public resetIburst() {
    this._iburst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iburstInput() {
    return this._iburst;
  }

  // ipv6_address - computed: false, optional: false, required: true
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // key - computed: false, optional: true, required: false
  private _key?: number; 
  public get key() {
    return this.getNumberAttribute('key');
  }
  public set key(value: number) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // maxpoll - computed: false, optional: true, required: false
  private _maxpoll?: number; 
  public get maxpoll() {
    return this.getNumberAttribute('maxpoll');
  }
  public set maxpoll(value: number) {
    this._maxpoll = value;
  }
  public resetMaxpoll() {
    this._maxpoll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxpollInput() {
    return this._maxpoll;
  }

  // minpoll - computed: false, optional: true, required: false
  private _minpoll?: number; 
  public get minpoll() {
    return this.getNumberAttribute('minpoll');
  }
  public set minpoll(value: number) {
    this._minpoll = value;
  }
  public resetMinpoll() {
    this._minpoll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minpollInput() {
    return this._minpoll;
  }

  // prefer - computed: false, optional: true, required: false
  private _prefer?: boolean | cdktf.IResolvable; 
  public get prefer() {
    return this.getBooleanAttribute('prefer');
  }
  public set prefer(value: boolean | cdktf.IResolvable) {
    this._prefer = value;
  }
  public resetPrefer() {
    this._prefer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferInput() {
    return this._prefer;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class NtpPeersServersVrfsIpv6PeersServersList extends cdktf.ComplexList {
  public internalValue? : NtpPeersServersVrfsIpv6PeersServers[] | cdktf.IResolvable

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
  public get(index: number): NtpPeersServersVrfsIpv6PeersServersOutputReference {
    return new NtpPeersServersVrfsIpv6PeersServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NtpPeersServersVrfs {
  /**
  * Specify IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#ipv4_peers_servers Ntp#ipv4_peers_servers}
  */
  readonly ipv4PeersServers?: NtpPeersServersVrfsIpv4PeersServers[] | cdktf.IResolvable;
  /**
  * Specify IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#ipv6_peers_servers Ntp#ipv6_peers_servers}
  */
  readonly ipv6PeersServers?: NtpPeersServersVrfsIpv6PeersServers[] | cdktf.IResolvable;
  /**
  * Specify non-default VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#vrf_name Ntp#vrf_name}
  */
  readonly vrfName: string;
}

export function ntpPeersServersVrfsToTerraform(struct?: NtpPeersServersVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_peers_servers: cdktf.listMapper(ntpPeersServersVrfsIpv4PeersServersToTerraform, false)(struct!.ipv4PeersServers),
    ipv6_peers_servers: cdktf.listMapper(ntpPeersServersVrfsIpv6PeersServersToTerraform, false)(struct!.ipv6PeersServers),
    vrf_name: cdktf.stringToTerraform(struct!.vrfName),
  }
}


export function ntpPeersServersVrfsToHclTerraform(struct?: NtpPeersServersVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_peers_servers: {
      value: cdktf.listMapperHcl(ntpPeersServersVrfsIpv4PeersServersToHclTerraform, false)(struct!.ipv4PeersServers),
      isBlock: true,
      type: "list",
      storageClassType: "NtpPeersServersVrfsIpv4PeersServersList",
    },
    ipv6_peers_servers: {
      value: cdktf.listMapperHcl(ntpPeersServersVrfsIpv6PeersServersToHclTerraform, false)(struct!.ipv6PeersServers),
      isBlock: true,
      type: "list",
      storageClassType: "NtpPeersServersVrfsIpv6PeersServersList",
    },
    vrf_name: {
      value: cdktf.stringToHclTerraform(struct!.vrfName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NtpPeersServersVrfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NtpPeersServersVrfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4PeersServers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4PeersServers = this._ipv4PeersServers?.internalValue;
    }
    if (this._ipv6PeersServers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6PeersServers = this._ipv6PeersServers?.internalValue;
    }
    if (this._vrfName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfName = this._vrfName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NtpPeersServersVrfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4PeersServers.internalValue = undefined;
      this._ipv6PeersServers.internalValue = undefined;
      this._vrfName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4PeersServers.internalValue = value.ipv4PeersServers;
      this._ipv6PeersServers.internalValue = value.ipv6PeersServers;
      this._vrfName = value.vrfName;
    }
  }

  // ipv4_peers_servers - computed: false, optional: true, required: false
  private _ipv4PeersServers = new NtpPeersServersVrfsIpv4PeersServersList(this, "ipv4_peers_servers", false);
  public get ipv4PeersServers() {
    return this._ipv4PeersServers;
  }
  public putIpv4PeersServers(value: NtpPeersServersVrfsIpv4PeersServers[] | cdktf.IResolvable) {
    this._ipv4PeersServers.internalValue = value;
  }
  public resetIpv4PeersServers() {
    this._ipv4PeersServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PeersServersInput() {
    return this._ipv4PeersServers.internalValue;
  }

  // ipv6_peers_servers - computed: false, optional: true, required: false
  private _ipv6PeersServers = new NtpPeersServersVrfsIpv6PeersServersList(this, "ipv6_peers_servers", false);
  public get ipv6PeersServers() {
    return this._ipv6PeersServers;
  }
  public putIpv6PeersServers(value: NtpPeersServersVrfsIpv6PeersServers[] | cdktf.IResolvable) {
    this._ipv6PeersServers.internalValue = value;
  }
  public resetIpv6PeersServers() {
    this._ipv6PeersServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PeersServersInput() {
    return this._ipv6PeersServers.internalValue;
  }

  // vrf_name - computed: false, optional: false, required: true
  private _vrfName?: string; 
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
  public set vrfName(value: string) {
    this._vrfName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfNameInput() {
    return this._vrfName;
  }
}

export class NtpPeersServersVrfsList extends cdktf.ComplexList {
  public internalValue? : NtpPeersServersVrfs[] | cdktf.IResolvable

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
  public get(index: number): NtpPeersServersVrfsOutputReference {
    return new NtpPeersServersVrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NtpSourceVrfs {
  /**
  * default interface for the VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#interface_name Ntp#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Specify non-default VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#vrf_name Ntp#vrf_name}
  */
  readonly vrfName: string;
}

export function ntpSourceVrfsToTerraform(struct?: NtpSourceVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    vrf_name: cdktf.stringToTerraform(struct!.vrfName),
  }
}


export function ntpSourceVrfsToHclTerraform(struct?: NtpSourceVrfs | cdktf.IResolvable): any {
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
    vrf_name: {
      value: cdktf.stringToHclTerraform(struct!.vrfName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NtpSourceVrfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NtpSourceVrfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._vrfName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfName = this._vrfName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NtpSourceVrfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceName = undefined;
      this._vrfName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaceName = value.interfaceName;
      this._vrfName = value.vrfName;
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

  // vrf_name - computed: false, optional: false, required: true
  private _vrfName?: string; 
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
  public set vrfName(value: string) {
    this._vrfName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfNameInput() {
    return this._vrfName;
  }
}

export class NtpSourceVrfsList extends cdktf.ComplexList {
  public internalValue? : NtpSourceVrfs[] | cdktf.IResolvable

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
  public get(index: number): NtpSourceVrfsOutputReference {
    return new NtpSourceVrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NtpTrustedKeys {
  /**
  * Key numbers for trusted time sources
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#key_number Ntp#key_number}
  */
  readonly keyNumber: number;
}

export function ntpTrustedKeysToTerraform(struct?: NtpTrustedKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_number: cdktf.numberToTerraform(struct!.keyNumber),
  }
}


export function ntpTrustedKeysToHclTerraform(struct?: NtpTrustedKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_number: {
      value: cdktf.numberToHclTerraform(struct!.keyNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NtpTrustedKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NtpTrustedKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyNumber = this._keyNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NtpTrustedKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyNumber = value.keyNumber;
    }
  }

  // key_number - computed: false, optional: false, required: true
  private _keyNumber?: number; 
  public get keyNumber() {
    return this.getNumberAttribute('key_number');
  }
  public set keyNumber(value: number) {
    this._keyNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNumberInput() {
    return this._keyNumber;
  }
}

export class NtpTrustedKeysList extends cdktf.ComplexList {
  public internalValue? : NtpTrustedKeys[] | cdktf.IResolvable

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
  public get(index: number): NtpTrustedKeysOutputReference {
    return new NtpTrustedKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp iosxr_ntp}
*/
export class Ntp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_ntp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ntp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ntp to import
  * @param importFromId The id of the existing Ntp that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ntp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_ntp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ntp iosxr_ntp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NtpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NtpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxr_ntp',
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
    this._accessGroupIpv4Peer = config.accessGroupIpv4Peer;
    this._accessGroupIpv4QueryOnly = config.accessGroupIpv4QueryOnly;
    this._accessGroupIpv4Serve = config.accessGroupIpv4Serve;
    this._accessGroupIpv4ServeOnly = config.accessGroupIpv4ServeOnly;
    this._accessGroupIpv6Peer = config.accessGroupIpv6Peer;
    this._accessGroupIpv6QueryOnly = config.accessGroupIpv6QueryOnly;
    this._accessGroupIpv6Serve = config.accessGroupIpv6Serve;
    this._accessGroupIpv6ServeOnly = config.accessGroupIpv6ServeOnly;
    this._accessGroupVrfs.internalValue = config.accessGroupVrfs;
    this._adminPlaneBurst = config.adminPlaneBurst;
    this._adminPlaneIburst = config.adminPlaneIburst;
    this._adminPlaneKey = config.adminPlaneKey;
    this._adminPlaneMaxpoll = config.adminPlaneMaxpoll;
    this._adminPlaneMinpoll = config.adminPlaneMinpoll;
    this._adminPlanePrefer = config.adminPlanePrefer;
    this._adminPlaneVersion = config.adminPlaneVersion;
    this._authenticate = config.authenticate;
    this._authenticationKeys.internalValue = config.authenticationKeys;
    this._broadcastdelay = config.broadcastdelay;
    this._cmacAuthenticationKeys.internalValue = config.cmacAuthenticationKeys;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._hmacSha1AuthenticationKeys.internalValue = config.hmacSha1AuthenticationKeys;
    this._hmacSha2AuthenticationKeys.internalValue = config.hmacSha2AuthenticationKeys;
    this._interfaceVrfs.internalValue = config.interfaceVrfs;
    this._interfaces.internalValue = config.interfaces;
    this._ipv4Dscp = config.ipv4Dscp;
    this._ipv4PeersServers.internalValue = config.ipv4PeersServers;
    this._ipv4Precedence = config.ipv4Precedence;
    this._ipv6Dscp = config.ipv6Dscp;
    this._ipv6PeersServers.internalValue = config.ipv6PeersServers;
    this._ipv6Precedence = config.ipv6Precedence;
    this._logInternalSync = config.logInternalSync;
    this._maxAssociations = config.maxAssociations;
    this._passive = config.passive;
    this._peersServersVrfs.internalValue = config.peersServersVrfs;
    this._primaryReferenceClock = config.primaryReferenceClock;
    this._primaryStratumNumber = config.primaryStratumNumber;
    this._sourceInterfaceName = config.sourceInterfaceName;
    this._sourceVrfs.internalValue = config.sourceVrfs;
    this._trustedKeys.internalValue = config.trustedKeys;
    this._updateCalendar = config.updateCalendar;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_group_ipv4_peer - computed: false, optional: true, required: false
  private _accessGroupIpv4Peer?: string; 
  public get accessGroupIpv4Peer() {
    return this.getStringAttribute('access_group_ipv4_peer');
  }
  public set accessGroupIpv4Peer(value: string) {
    this._accessGroupIpv4Peer = value;
  }
  public resetAccessGroupIpv4Peer() {
    this._accessGroupIpv4Peer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGroupIpv4PeerInput() {
    return this._accessGroupIpv4Peer;
  }

  // access_group_ipv4_query_only - computed: false, optional: true, required: false
  private _accessGroupIpv4QueryOnly?: string; 
  public get accessGroupIpv4QueryOnly() {
    return this.getStringAttribute('access_group_ipv4_query_only');
  }
  public set accessGroupIpv4QueryOnly(value: string) {
    this._accessGroupIpv4QueryOnly = value;
  }
  public resetAccessGroupIpv4QueryOnly() {
    this._accessGroupIpv4QueryOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGroupIpv4QueryOnlyInput() {
    return this._accessGroupIpv4QueryOnly;
  }

  // access_group_ipv4_serve - computed: false, optional: true, required: false
  private _accessGroupIpv4Serve?: string; 
  public get accessGroupIpv4Serve() {
    return this.getStringAttribute('access_group_ipv4_serve');
  }
  public set accessGroupIpv4Serve(value: string) {
    this._accessGroupIpv4Serve = value;
  }
  public resetAccessGroupIpv4Serve() {
    this._accessGroupIpv4Serve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGroupIpv4ServeInput() {
    return this._accessGroupIpv4Serve;
  }

  // access_group_ipv4_serve_only - computed: false, optional: true, required: false
  private _accessGroupIpv4ServeOnly?: string; 
  public get accessGroupIpv4ServeOnly() {
    return this.getStringAttribute('access_group_ipv4_serve_only');
  }
  public set accessGroupIpv4ServeOnly(value: string) {
    this._accessGroupIpv4ServeOnly = value;
  }
  public resetAccessGroupIpv4ServeOnly() {
    this._accessGroupIpv4ServeOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGroupIpv4ServeOnlyInput() {
    return this._accessGroupIpv4ServeOnly;
  }

  // access_group_ipv6_peer - computed: false, optional: true, required: false
  private _accessGroupIpv6Peer?: string; 
  public get accessGroupIpv6Peer() {
    return this.getStringAttribute('access_group_ipv6_peer');
  }
  public set accessGroupIpv6Peer(value: string) {
    this._accessGroupIpv6Peer = value;
  }
  public resetAccessGroupIpv6Peer() {
    this._accessGroupIpv6Peer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGroupIpv6PeerInput() {
    return this._accessGroupIpv6Peer;
  }

  // access_group_ipv6_query_only - computed: false, optional: true, required: false
  private _accessGroupIpv6QueryOnly?: string; 
  public get accessGroupIpv6QueryOnly() {
    return this.getStringAttribute('access_group_ipv6_query_only');
  }
  public set accessGroupIpv6QueryOnly(value: string) {
    this._accessGroupIpv6QueryOnly = value;
  }
  public resetAccessGroupIpv6QueryOnly() {
    this._accessGroupIpv6QueryOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGroupIpv6QueryOnlyInput() {
    return this._accessGroupIpv6QueryOnly;
  }

  // access_group_ipv6_serve - computed: false, optional: true, required: false
  private _accessGroupIpv6Serve?: string; 
  public get accessGroupIpv6Serve() {
    return this.getStringAttribute('access_group_ipv6_serve');
  }
  public set accessGroupIpv6Serve(value: string) {
    this._accessGroupIpv6Serve = value;
  }
  public resetAccessGroupIpv6Serve() {
    this._accessGroupIpv6Serve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGroupIpv6ServeInput() {
    return this._accessGroupIpv6Serve;
  }

  // access_group_ipv6_serve_only - computed: false, optional: true, required: false
  private _accessGroupIpv6ServeOnly?: string; 
  public get accessGroupIpv6ServeOnly() {
    return this.getStringAttribute('access_group_ipv6_serve_only');
  }
  public set accessGroupIpv6ServeOnly(value: string) {
    this._accessGroupIpv6ServeOnly = value;
  }
  public resetAccessGroupIpv6ServeOnly() {
    this._accessGroupIpv6ServeOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGroupIpv6ServeOnlyInput() {
    return this._accessGroupIpv6ServeOnly;
  }

  // access_group_vrfs - computed: false, optional: true, required: false
  private _accessGroupVrfs = new NtpAccessGroupVrfsList(this, "access_group_vrfs", false);
  public get accessGroupVrfs() {
    return this._accessGroupVrfs;
  }
  public putAccessGroupVrfs(value: NtpAccessGroupVrfs[] | cdktf.IResolvable) {
    this._accessGroupVrfs.internalValue = value;
  }
  public resetAccessGroupVrfs() {
    this._accessGroupVrfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGroupVrfsInput() {
    return this._accessGroupVrfs.internalValue;
  }

  // admin_plane_burst - computed: false, optional: true, required: false
  private _adminPlaneBurst?: boolean | cdktf.IResolvable; 
  public get adminPlaneBurst() {
    return this.getBooleanAttribute('admin_plane_burst');
  }
  public set adminPlaneBurst(value: boolean | cdktf.IResolvable) {
    this._adminPlaneBurst = value;
  }
  public resetAdminPlaneBurst() {
    this._adminPlaneBurst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPlaneBurstInput() {
    return this._adminPlaneBurst;
  }

  // admin_plane_iburst - computed: false, optional: true, required: false
  private _adminPlaneIburst?: boolean | cdktf.IResolvable; 
  public get adminPlaneIburst() {
    return this.getBooleanAttribute('admin_plane_iburst');
  }
  public set adminPlaneIburst(value: boolean | cdktf.IResolvable) {
    this._adminPlaneIburst = value;
  }
  public resetAdminPlaneIburst() {
    this._adminPlaneIburst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPlaneIburstInput() {
    return this._adminPlaneIburst;
  }

  // admin_plane_key - computed: false, optional: true, required: false
  private _adminPlaneKey?: number; 
  public get adminPlaneKey() {
    return this.getNumberAttribute('admin_plane_key');
  }
  public set adminPlaneKey(value: number) {
    this._adminPlaneKey = value;
  }
  public resetAdminPlaneKey() {
    this._adminPlaneKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPlaneKeyInput() {
    return this._adminPlaneKey;
  }

  // admin_plane_maxpoll - computed: false, optional: true, required: false
  private _adminPlaneMaxpoll?: number; 
  public get adminPlaneMaxpoll() {
    return this.getNumberAttribute('admin_plane_maxpoll');
  }
  public set adminPlaneMaxpoll(value: number) {
    this._adminPlaneMaxpoll = value;
  }
  public resetAdminPlaneMaxpoll() {
    this._adminPlaneMaxpoll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPlaneMaxpollInput() {
    return this._adminPlaneMaxpoll;
  }

  // admin_plane_minpoll - computed: false, optional: true, required: false
  private _adminPlaneMinpoll?: number; 
  public get adminPlaneMinpoll() {
    return this.getNumberAttribute('admin_plane_minpoll');
  }
  public set adminPlaneMinpoll(value: number) {
    this._adminPlaneMinpoll = value;
  }
  public resetAdminPlaneMinpoll() {
    this._adminPlaneMinpoll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPlaneMinpollInput() {
    return this._adminPlaneMinpoll;
  }

  // admin_plane_prefer - computed: false, optional: true, required: false
  private _adminPlanePrefer?: boolean | cdktf.IResolvable; 
  public get adminPlanePrefer() {
    return this.getBooleanAttribute('admin_plane_prefer');
  }
  public set adminPlanePrefer(value: boolean | cdktf.IResolvable) {
    this._adminPlanePrefer = value;
  }
  public resetAdminPlanePrefer() {
    this._adminPlanePrefer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPlanePreferInput() {
    return this._adminPlanePrefer;
  }

  // admin_plane_version - computed: false, optional: true, required: false
  private _adminPlaneVersion?: number; 
  public get adminPlaneVersion() {
    return this.getNumberAttribute('admin_plane_version');
  }
  public set adminPlaneVersion(value: number) {
    this._adminPlaneVersion = value;
  }
  public resetAdminPlaneVersion() {
    this._adminPlaneVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPlaneVersionInput() {
    return this._adminPlaneVersion;
  }

  // authenticate - computed: false, optional: true, required: false
  private _authenticate?: boolean | cdktf.IResolvable; 
  public get authenticate() {
    return this.getBooleanAttribute('authenticate');
  }
  public set authenticate(value: boolean | cdktf.IResolvable) {
    this._authenticate = value;
  }
  public resetAuthenticate() {
    this._authenticate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateInput() {
    return this._authenticate;
  }

  // authentication_keys - computed: false, optional: true, required: false
  private _authenticationKeys = new NtpAuthenticationKeysList(this, "authentication_keys", false);
  public get authenticationKeys() {
    return this._authenticationKeys;
  }
  public putAuthenticationKeys(value: NtpAuthenticationKeys[] | cdktf.IResolvable) {
    this._authenticationKeys.internalValue = value;
  }
  public resetAuthenticationKeys() {
    this._authenticationKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeysInput() {
    return this._authenticationKeys.internalValue;
  }

  // broadcastdelay - computed: false, optional: true, required: false
  private _broadcastdelay?: number; 
  public get broadcastdelay() {
    return this.getNumberAttribute('broadcastdelay');
  }
  public set broadcastdelay(value: number) {
    this._broadcastdelay = value;
  }
  public resetBroadcastdelay() {
    this._broadcastdelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastdelayInput() {
    return this._broadcastdelay;
  }

  // cmac_authentication_keys - computed: false, optional: true, required: false
  private _cmacAuthenticationKeys = new NtpCmacAuthenticationKeysList(this, "cmac_authentication_keys", false);
  public get cmacAuthenticationKeys() {
    return this._cmacAuthenticationKeys;
  }
  public putCmacAuthenticationKeys(value: NtpCmacAuthenticationKeys[] | cdktf.IResolvable) {
    this._cmacAuthenticationKeys.internalValue = value;
  }
  public resetCmacAuthenticationKeys() {
    this._cmacAuthenticationKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmacAuthenticationKeysInput() {
    return this._cmacAuthenticationKeys.internalValue;
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

  // hmac_sha1_authentication_keys - computed: false, optional: true, required: false
  private _hmacSha1AuthenticationKeys = new NtpHmacSha1AuthenticationKeysList(this, "hmac_sha1_authentication_keys", false);
  public get hmacSha1AuthenticationKeys() {
    return this._hmacSha1AuthenticationKeys;
  }
  public putHmacSha1AuthenticationKeys(value: NtpHmacSha1AuthenticationKeys[] | cdktf.IResolvable) {
    this._hmacSha1AuthenticationKeys.internalValue = value;
  }
  public resetHmacSha1AuthenticationKeys() {
    this._hmacSha1AuthenticationKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hmacSha1AuthenticationKeysInput() {
    return this._hmacSha1AuthenticationKeys.internalValue;
  }

  // hmac_sha2_authentication_keys - computed: false, optional: true, required: false
  private _hmacSha2AuthenticationKeys = new NtpHmacSha2AuthenticationKeysList(this, "hmac_sha2_authentication_keys", false);
  public get hmacSha2AuthenticationKeys() {
    return this._hmacSha2AuthenticationKeys;
  }
  public putHmacSha2AuthenticationKeys(value: NtpHmacSha2AuthenticationKeys[] | cdktf.IResolvable) {
    this._hmacSha2AuthenticationKeys.internalValue = value;
  }
  public resetHmacSha2AuthenticationKeys() {
    this._hmacSha2AuthenticationKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hmacSha2AuthenticationKeysInput() {
    return this._hmacSha2AuthenticationKeys.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_vrfs - computed: false, optional: true, required: false
  private _interfaceVrfs = new NtpInterfaceVrfsList(this, "interface_vrfs", false);
  public get interfaceVrfs() {
    return this._interfaceVrfs;
  }
  public putInterfaceVrfs(value: NtpInterfaceVrfs[] | cdktf.IResolvable) {
    this._interfaceVrfs.internalValue = value;
  }
  public resetInterfaceVrfs() {
    this._interfaceVrfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceVrfsInput() {
    return this._interfaceVrfs.internalValue;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new NtpInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: NtpInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // ipv4_dscp - computed: false, optional: true, required: false
  private _ipv4Dscp?: string; 
  public get ipv4Dscp() {
    return this.getStringAttribute('ipv4_dscp');
  }
  public set ipv4Dscp(value: string) {
    this._ipv4Dscp = value;
  }
  public resetIpv4Dscp() {
    this._ipv4Dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DscpInput() {
    return this._ipv4Dscp;
  }

  // ipv4_peers_servers - computed: false, optional: true, required: false
  private _ipv4PeersServers = new NtpIpv4PeersServersList(this, "ipv4_peers_servers", false);
  public get ipv4PeersServers() {
    return this._ipv4PeersServers;
  }
  public putIpv4PeersServers(value: NtpIpv4PeersServers[] | cdktf.IResolvable) {
    this._ipv4PeersServers.internalValue = value;
  }
  public resetIpv4PeersServers() {
    this._ipv4PeersServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PeersServersInput() {
    return this._ipv4PeersServers.internalValue;
  }

  // ipv4_precedence - computed: false, optional: true, required: false
  private _ipv4Precedence?: string; 
  public get ipv4Precedence() {
    return this.getStringAttribute('ipv4_precedence');
  }
  public set ipv4Precedence(value: string) {
    this._ipv4Precedence = value;
  }
  public resetIpv4Precedence() {
    this._ipv4Precedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PrecedenceInput() {
    return this._ipv4Precedence;
  }

  // ipv6_dscp - computed: false, optional: true, required: false
  private _ipv6Dscp?: string; 
  public get ipv6Dscp() {
    return this.getStringAttribute('ipv6_dscp');
  }
  public set ipv6Dscp(value: string) {
    this._ipv6Dscp = value;
  }
  public resetIpv6Dscp() {
    this._ipv6Dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DscpInput() {
    return this._ipv6Dscp;
  }

  // ipv6_peers_servers - computed: false, optional: true, required: false
  private _ipv6PeersServers = new NtpIpv6PeersServersList(this, "ipv6_peers_servers", false);
  public get ipv6PeersServers() {
    return this._ipv6PeersServers;
  }
  public putIpv6PeersServers(value: NtpIpv6PeersServers[] | cdktf.IResolvable) {
    this._ipv6PeersServers.internalValue = value;
  }
  public resetIpv6PeersServers() {
    this._ipv6PeersServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PeersServersInput() {
    return this._ipv6PeersServers.internalValue;
  }

  // ipv6_precedence - computed: false, optional: true, required: false
  private _ipv6Precedence?: string; 
  public get ipv6Precedence() {
    return this.getStringAttribute('ipv6_precedence');
  }
  public set ipv6Precedence(value: string) {
    this._ipv6Precedence = value;
  }
  public resetIpv6Precedence() {
    this._ipv6Precedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrecedenceInput() {
    return this._ipv6Precedence;
  }

  // log_internal_sync - computed: false, optional: true, required: false
  private _logInternalSync?: boolean | cdktf.IResolvable; 
  public get logInternalSync() {
    return this.getBooleanAttribute('log_internal_sync');
  }
  public set logInternalSync(value: boolean | cdktf.IResolvable) {
    this._logInternalSync = value;
  }
  public resetLogInternalSync() {
    this._logInternalSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInternalSyncInput() {
    return this._logInternalSync;
  }

  // max_associations - computed: false, optional: true, required: false
  private _maxAssociations?: number; 
  public get maxAssociations() {
    return this.getNumberAttribute('max_associations');
  }
  public set maxAssociations(value: number) {
    this._maxAssociations = value;
  }
  public resetMaxAssociations() {
    this._maxAssociations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAssociationsInput() {
    return this._maxAssociations;
  }

  // passive - computed: false, optional: true, required: false
  private _passive?: boolean | cdktf.IResolvable; 
  public get passive() {
    return this.getBooleanAttribute('passive');
  }
  public set passive(value: boolean | cdktf.IResolvable) {
    this._passive = value;
  }
  public resetPassive() {
    this._passive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInput() {
    return this._passive;
  }

  // peers_servers_vrfs - computed: false, optional: true, required: false
  private _peersServersVrfs = new NtpPeersServersVrfsList(this, "peers_servers_vrfs", false);
  public get peersServersVrfs() {
    return this._peersServersVrfs;
  }
  public putPeersServersVrfs(value: NtpPeersServersVrfs[] | cdktf.IResolvable) {
    this._peersServersVrfs.internalValue = value;
  }
  public resetPeersServersVrfs() {
    this._peersServersVrfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peersServersVrfsInput() {
    return this._peersServersVrfs.internalValue;
  }

  // primary_reference_clock - computed: false, optional: true, required: false
  private _primaryReferenceClock?: boolean | cdktf.IResolvable; 
  public get primaryReferenceClock() {
    return this.getBooleanAttribute('primary_reference_clock');
  }
  public set primaryReferenceClock(value: boolean | cdktf.IResolvable) {
    this._primaryReferenceClock = value;
  }
  public resetPrimaryReferenceClock() {
    this._primaryReferenceClock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryReferenceClockInput() {
    return this._primaryReferenceClock;
  }

  // primary_stratum_number - computed: false, optional: true, required: false
  private _primaryStratumNumber?: number; 
  public get primaryStratumNumber() {
    return this.getNumberAttribute('primary_stratum_number');
  }
  public set primaryStratumNumber(value: number) {
    this._primaryStratumNumber = value;
  }
  public resetPrimaryStratumNumber() {
    this._primaryStratumNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryStratumNumberInput() {
    return this._primaryStratumNumber;
  }

  // source_interface_name - computed: false, optional: true, required: false
  private _sourceInterfaceName?: string; 
  public get sourceInterfaceName() {
    return this.getStringAttribute('source_interface_name');
  }
  public set sourceInterfaceName(value: string) {
    this._sourceInterfaceName = value;
  }
  public resetSourceInterfaceName() {
    this._sourceInterfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceNameInput() {
    return this._sourceInterfaceName;
  }

  // source_vrfs - computed: false, optional: true, required: false
  private _sourceVrfs = new NtpSourceVrfsList(this, "source_vrfs", false);
  public get sourceVrfs() {
    return this._sourceVrfs;
  }
  public putSourceVrfs(value: NtpSourceVrfs[] | cdktf.IResolvable) {
    this._sourceVrfs.internalValue = value;
  }
  public resetSourceVrfs() {
    this._sourceVrfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVrfsInput() {
    return this._sourceVrfs.internalValue;
  }

  // trusted_keys - computed: false, optional: true, required: false
  private _trustedKeys = new NtpTrustedKeysList(this, "trusted_keys", false);
  public get trustedKeys() {
    return this._trustedKeys;
  }
  public putTrustedKeys(value: NtpTrustedKeys[] | cdktf.IResolvable) {
    this._trustedKeys.internalValue = value;
  }
  public resetTrustedKeys() {
    this._trustedKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedKeysInput() {
    return this._trustedKeys.internalValue;
  }

  // update_calendar - computed: false, optional: true, required: false
  private _updateCalendar?: boolean | cdktf.IResolvable; 
  public get updateCalendar() {
    return this.getBooleanAttribute('update_calendar');
  }
  public set updateCalendar(value: boolean | cdktf.IResolvable) {
    this._updateCalendar = value;
  }
  public resetUpdateCalendar() {
    this._updateCalendar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateCalendarInput() {
    return this._updateCalendar;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_group_ipv4_peer: cdktf.stringToTerraform(this._accessGroupIpv4Peer),
      access_group_ipv4_query_only: cdktf.stringToTerraform(this._accessGroupIpv4QueryOnly),
      access_group_ipv4_serve: cdktf.stringToTerraform(this._accessGroupIpv4Serve),
      access_group_ipv4_serve_only: cdktf.stringToTerraform(this._accessGroupIpv4ServeOnly),
      access_group_ipv6_peer: cdktf.stringToTerraform(this._accessGroupIpv6Peer),
      access_group_ipv6_query_only: cdktf.stringToTerraform(this._accessGroupIpv6QueryOnly),
      access_group_ipv6_serve: cdktf.stringToTerraform(this._accessGroupIpv6Serve),
      access_group_ipv6_serve_only: cdktf.stringToTerraform(this._accessGroupIpv6ServeOnly),
      access_group_vrfs: cdktf.listMapper(ntpAccessGroupVrfsToTerraform, false)(this._accessGroupVrfs.internalValue),
      admin_plane_burst: cdktf.booleanToTerraform(this._adminPlaneBurst),
      admin_plane_iburst: cdktf.booleanToTerraform(this._adminPlaneIburst),
      admin_plane_key: cdktf.numberToTerraform(this._adminPlaneKey),
      admin_plane_maxpoll: cdktf.numberToTerraform(this._adminPlaneMaxpoll),
      admin_plane_minpoll: cdktf.numberToTerraform(this._adminPlaneMinpoll),
      admin_plane_prefer: cdktf.booleanToTerraform(this._adminPlanePrefer),
      admin_plane_version: cdktf.numberToTerraform(this._adminPlaneVersion),
      authenticate: cdktf.booleanToTerraform(this._authenticate),
      authentication_keys: cdktf.listMapper(ntpAuthenticationKeysToTerraform, false)(this._authenticationKeys.internalValue),
      broadcastdelay: cdktf.numberToTerraform(this._broadcastdelay),
      cmac_authentication_keys: cdktf.listMapper(ntpCmacAuthenticationKeysToTerraform, false)(this._cmacAuthenticationKeys.internalValue),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      hmac_sha1_authentication_keys: cdktf.listMapper(ntpHmacSha1AuthenticationKeysToTerraform, false)(this._hmacSha1AuthenticationKeys.internalValue),
      hmac_sha2_authentication_keys: cdktf.listMapper(ntpHmacSha2AuthenticationKeysToTerraform, false)(this._hmacSha2AuthenticationKeys.internalValue),
      interface_vrfs: cdktf.listMapper(ntpInterfaceVrfsToTerraform, false)(this._interfaceVrfs.internalValue),
      interfaces: cdktf.listMapper(ntpInterfacesToTerraform, false)(this._interfaces.internalValue),
      ipv4_dscp: cdktf.stringToTerraform(this._ipv4Dscp),
      ipv4_peers_servers: cdktf.listMapper(ntpIpv4PeersServersToTerraform, false)(this._ipv4PeersServers.internalValue),
      ipv4_precedence: cdktf.stringToTerraform(this._ipv4Precedence),
      ipv6_dscp: cdktf.stringToTerraform(this._ipv6Dscp),
      ipv6_peers_servers: cdktf.listMapper(ntpIpv6PeersServersToTerraform, false)(this._ipv6PeersServers.internalValue),
      ipv6_precedence: cdktf.stringToTerraform(this._ipv6Precedence),
      log_internal_sync: cdktf.booleanToTerraform(this._logInternalSync),
      max_associations: cdktf.numberToTerraform(this._maxAssociations),
      passive: cdktf.booleanToTerraform(this._passive),
      peers_servers_vrfs: cdktf.listMapper(ntpPeersServersVrfsToTerraform, false)(this._peersServersVrfs.internalValue),
      primary_reference_clock: cdktf.booleanToTerraform(this._primaryReferenceClock),
      primary_stratum_number: cdktf.numberToTerraform(this._primaryStratumNumber),
      source_interface_name: cdktf.stringToTerraform(this._sourceInterfaceName),
      source_vrfs: cdktf.listMapper(ntpSourceVrfsToTerraform, false)(this._sourceVrfs.internalValue),
      trusted_keys: cdktf.listMapper(ntpTrustedKeysToTerraform, false)(this._trustedKeys.internalValue),
      update_calendar: cdktf.booleanToTerraform(this._updateCalendar),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_group_ipv4_peer: {
        value: cdktf.stringToHclTerraform(this._accessGroupIpv4Peer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_group_ipv4_query_only: {
        value: cdktf.stringToHclTerraform(this._accessGroupIpv4QueryOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_group_ipv4_serve: {
        value: cdktf.stringToHclTerraform(this._accessGroupIpv4Serve),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_group_ipv4_serve_only: {
        value: cdktf.stringToHclTerraform(this._accessGroupIpv4ServeOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_group_ipv6_peer: {
        value: cdktf.stringToHclTerraform(this._accessGroupIpv6Peer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_group_ipv6_query_only: {
        value: cdktf.stringToHclTerraform(this._accessGroupIpv6QueryOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_group_ipv6_serve: {
        value: cdktf.stringToHclTerraform(this._accessGroupIpv6Serve),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_group_ipv6_serve_only: {
        value: cdktf.stringToHclTerraform(this._accessGroupIpv6ServeOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_group_vrfs: {
        value: cdktf.listMapperHcl(ntpAccessGroupVrfsToHclTerraform, false)(this._accessGroupVrfs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NtpAccessGroupVrfsList",
      },
      admin_plane_burst: {
        value: cdktf.booleanToHclTerraform(this._adminPlaneBurst),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      admin_plane_iburst: {
        value: cdktf.booleanToHclTerraform(this._adminPlaneIburst),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      admin_plane_key: {
        value: cdktf.numberToHclTerraform(this._adminPlaneKey),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      admin_plane_maxpoll: {
        value: cdktf.numberToHclTerraform(this._adminPlaneMaxpoll),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      admin_plane_minpoll: {
        value: cdktf.numberToHclTerraform(this._adminPlaneMinpoll),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      admin_plane_prefer: {
        value: cdktf.booleanToHclTerraform(this._adminPlanePrefer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      admin_plane_version: {
        value: cdktf.numberToHclTerraform(this._adminPlaneVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      authenticate: {
        value: cdktf.booleanToHclTerraform(this._authenticate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_keys: {
        value: cdktf.listMapperHcl(ntpAuthenticationKeysToHclTerraform, false)(this._authenticationKeys.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NtpAuthenticationKeysList",
      },
      broadcastdelay: {
        value: cdktf.numberToHclTerraform(this._broadcastdelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cmac_authentication_keys: {
        value: cdktf.listMapperHcl(ntpCmacAuthenticationKeysToHclTerraform, false)(this._cmacAuthenticationKeys.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NtpCmacAuthenticationKeysList",
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
      hmac_sha1_authentication_keys: {
        value: cdktf.listMapperHcl(ntpHmacSha1AuthenticationKeysToHclTerraform, false)(this._hmacSha1AuthenticationKeys.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NtpHmacSha1AuthenticationKeysList",
      },
      hmac_sha2_authentication_keys: {
        value: cdktf.listMapperHcl(ntpHmacSha2AuthenticationKeysToHclTerraform, false)(this._hmacSha2AuthenticationKeys.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NtpHmacSha2AuthenticationKeysList",
      },
      interface_vrfs: {
        value: cdktf.listMapperHcl(ntpInterfaceVrfsToHclTerraform, false)(this._interfaceVrfs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NtpInterfaceVrfsList",
      },
      interfaces: {
        value: cdktf.listMapperHcl(ntpInterfacesToHclTerraform, false)(this._interfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NtpInterfacesList",
      },
      ipv4_dscp: {
        value: cdktf.stringToHclTerraform(this._ipv4Dscp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_peers_servers: {
        value: cdktf.listMapperHcl(ntpIpv4PeersServersToHclTerraform, false)(this._ipv4PeersServers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NtpIpv4PeersServersList",
      },
      ipv4_precedence: {
        value: cdktf.stringToHclTerraform(this._ipv4Precedence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_dscp: {
        value: cdktf.stringToHclTerraform(this._ipv6Dscp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_peers_servers: {
        value: cdktf.listMapperHcl(ntpIpv6PeersServersToHclTerraform, false)(this._ipv6PeersServers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NtpIpv6PeersServersList",
      },
      ipv6_precedence: {
        value: cdktf.stringToHclTerraform(this._ipv6Precedence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_internal_sync: {
        value: cdktf.booleanToHclTerraform(this._logInternalSync),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_associations: {
        value: cdktf.numberToHclTerraform(this._maxAssociations),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      passive: {
        value: cdktf.booleanToHclTerraform(this._passive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      peers_servers_vrfs: {
        value: cdktf.listMapperHcl(ntpPeersServersVrfsToHclTerraform, false)(this._peersServersVrfs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NtpPeersServersVrfsList",
      },
      primary_reference_clock: {
        value: cdktf.booleanToHclTerraform(this._primaryReferenceClock),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      primary_stratum_number: {
        value: cdktf.numberToHclTerraform(this._primaryStratumNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_interface_name: {
        value: cdktf.stringToHclTerraform(this._sourceInterfaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_vrfs: {
        value: cdktf.listMapperHcl(ntpSourceVrfsToHclTerraform, false)(this._sourceVrfs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NtpSourceVrfsList",
      },
      trusted_keys: {
        value: cdktf.listMapperHcl(ntpTrustedKeysToHclTerraform, false)(this._trustedKeys.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NtpTrustedKeysList",
      },
      update_calendar: {
        value: cdktf.booleanToHclTerraform(this._updateCalendar),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
