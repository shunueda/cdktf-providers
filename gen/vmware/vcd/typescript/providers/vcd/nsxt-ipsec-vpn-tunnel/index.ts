// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_ipsec_vpn_tunnel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsxtIpsecVpnTunnelConfig extends cdktf.TerraformMetaArguments {
  /**
  * One of 'PSK' (default), 'CERTIFICATE'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_ipsec_vpn_tunnel#authentication_mode NsxtIpsecVpnTunnel#authentication_mode}
  */
  readonly authenticationMode?: string;
  /**
  * Optional CA certificate ID to use for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_ipsec_vpn_tunnel#ca_certificate_id NsxtIpsecVpnTunnel#ca_certificate_id}
  */
  readonly caCertificateId?: string;
  /**
  * Optional certificate ID to use for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_ipsec_vpn_tunnel#certificate_id NsxtIpsecVpnTunnel#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * Description IP Sec VPN Tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_ipsec_vpn_tunnel#description NsxtIpsecVpnTunnel#description}
  */
  readonly description?: string;
  /**
  * Edge gateway name in which IP Sec VPN configuration is located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_ipsec_vpn_tunnel#edge_gateway_id NsxtIpsecVpnTunnel#edge_gateway_id}
  */
  readonly edgeGatewayId: string;
  /**
  * Enables or disables this configuration (default true)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_ipsec_vpn_tunnel#enabled NsxtIpsecVpnTunnel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_ipsec_vpn_tunnel#id NsxtIpsecVpnTunnel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IPv4 Address for the endpoint. This has to be a sub-allocated IP on the Edge Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_ipsec_vpn_tunnel#local_ip_address NsxtIpsecVpnTunnel#local_ip_address}
  */
  readonly localIpAddress: string;
  /**
  * Set of local networks in CIDR format. At least one value is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_ipsec_vpn_tunnel#local_networks NsxtIpsecVpnTunnel#local_networks}
  */
  readonly localNetworks: string[];
  /**
  * Sets whether logging for the tunnel is enabled or not. (default - false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_ipsec_vpn_tunnel#logging NsxtIpsecVpnTunnel#logging}
  */
  readonly logging?: boolean | cdktf.IResolvable;
  /**
  * Name of IP Sec VPN Tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_ipsec_vpn_tunnel#name NsxtIpsecVpnTunnel#name}
  */
  readonly name: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_ipsec_vpn_tunnel#org NsxtIpsecVpnTunnel#org}
  */
  readonly org?: string;
  /**
  * Pre-Shared Key (PSK)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_ipsec_vpn_tunnel#pre_shared_key NsxtIpsecVpnTunnel#pre_shared_key}
  */
  readonly preSharedKey: string;
  /**
  * Custom remote ID of the peer site. 'remote_ip_address' is used by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_ipsec_vpn_tunnel#remote_id NsxtIpsecVpnTunnel#remote_id}
  */
  readonly remoteId?: string;
  /**
  * Public IPv4 Address of the remote device terminating the VPN connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_ipsec_vpn_tunnel#remote_ip_address NsxtIpsecVpnTunnel#remote_ip_address}
  */
  readonly remoteIpAddress: string;
  /**
  * Set of remote networks in CIDR format. Leaving it empty is interpreted as 0.0.0.0/0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_ipsec_vpn_tunnel#remote_networks NsxtIpsecVpnTunnel#remote_networks}
  */
  readonly remoteNetworks?: string[];
  /**
  * The name of VDC to use, optional if defined at provider level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_ipsec_vpn_tunnel#vdc NsxtIpsecVpnTunnel#vdc}
  */
  readonly vdc?: string;
  /**
  * security_profile_customization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_ipsec_vpn_tunnel#security_profile_customization NsxtIpsecVpnTunnel#security_profile_customization}
  */
  readonly securityProfileCustomization?: NsxtIpsecVpnTunnelSecurityProfileCustomization;
}
export interface NsxtIpsecVpnTunnelSecurityProfileCustomization {
  /**
  * Value in seconds of dead probe detection interval. Minimum is 3 seconds and the maximum is 60 seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_ipsec_vpn_tunnel#dpd_probe_internal NsxtIpsecVpnTunnel#dpd_probe_internal}
  */
  readonly dpdProbeInternal?: number;
  /**
  * Diffie-Hellman groups to be used if Perfect Forward Secrecy is enabled. One of GROUP2, GROUP5, GROUP14, GROUP15, GROUP16, GROUP19, GROUP20, GROUP21
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_ipsec_vpn_tunnel#ike_dh_groups NsxtIpsecVpnTunnel#ike_dh_groups}
  */
  readonly ikeDhGroups: string[];
  /**
  * Secure hashing algorithms to use during the IKE negotiation. One of SHA1, SHA2_256, SHA2_384, SHA2_512
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_ipsec_vpn_tunnel#ike_digest_algorithms NsxtIpsecVpnTunnel#ike_digest_algorithms}
  */
  readonly ikeDigestAlgorithms?: string[];
  /**
  * Encryption algorithms. One of SHA1, SHA2_256, SHA2_384, SHA2_512
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_ipsec_vpn_tunnel#ike_encryption_algorithms NsxtIpsecVpnTunnel#ike_encryption_algorithms}
  */
  readonly ikeEncryptionAlgorithms: string[];
  /**
  * Security Association life time (in seconds). It is number of seconds before the IPsec tunnel needs to reestablish
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_ipsec_vpn_tunnel#ike_sa_lifetime NsxtIpsecVpnTunnel#ike_sa_lifetime}
  */
  readonly ikeSaLifetime?: number;
  /**
  * IKE version one of IKE_V1, IKE_V2, IKE_FLEX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_ipsec_vpn_tunnel#ike_version NsxtIpsecVpnTunnel#ike_version}
  */
  readonly ikeVersion: string;
  /**
  * Policy for handling defragmentation bit. One of COPY, CLEAR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_ipsec_vpn_tunnel#tunnel_df_policy NsxtIpsecVpnTunnel#tunnel_df_policy}
  */
  readonly tunnelDfPolicy?: string;
  /**
  * Diffie-Hellman groups to be used is PFS is enabled. One of GROUP2, GROUP5, GROUP14, GROUP15, GROUP16, GROUP19, GROUP20, GROUP21
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_ipsec_vpn_tunnel#tunnel_dh_groups NsxtIpsecVpnTunnel#tunnel_dh_groups}
  */
  readonly tunnelDhGroups: string[];
  /**
  * Digest algorithms to be used for message digest. One of SHA1, SHA2_256, SHA2_384, SHA2_512
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_ipsec_vpn_tunnel#tunnel_digest_algorithms NsxtIpsecVpnTunnel#tunnel_digest_algorithms}
  */
  readonly tunnelDigestAlgorithms?: string[];
  /**
  * Encryption algorithms to use in IPSec tunnel establishment. One of AES_128, AES_256, AES_GCM_128, AES_GCM_192, AES_GCM_256, NO_ENCRYPTION_AUTH_AES_GMAC_128, NO_ENCRYPTION_AUTH_AES_GMAC_192, NO_ENCRYPTION_AUTH_AES_GMAC_256, NO_ENCRYPTION
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_ipsec_vpn_tunnel#tunnel_encryption_algorithms NsxtIpsecVpnTunnel#tunnel_encryption_algorithms}
  */
  readonly tunnelEncryptionAlgorithms: string[];
  /**
  * Perfect Forward Secrecy Enabled or Disabled. Default (enabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_ipsec_vpn_tunnel#tunnel_pfs_enabled NsxtIpsecVpnTunnel#tunnel_pfs_enabled}
  */
  readonly tunnelPfsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Security Association life time (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_ipsec_vpn_tunnel#tunnel_sa_lifetime NsxtIpsecVpnTunnel#tunnel_sa_lifetime}
  */
  readonly tunnelSaLifetime?: number;
}

export function nsxtIpsecVpnTunnelSecurityProfileCustomizationToTerraform(struct?: NsxtIpsecVpnTunnelSecurityProfileCustomizationOutputReference | NsxtIpsecVpnTunnelSecurityProfileCustomization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dpd_probe_internal: cdktf.numberToTerraform(struct!.dpdProbeInternal),
    ike_dh_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ikeDhGroups),
    ike_digest_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ikeDigestAlgorithms),
    ike_encryption_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ikeEncryptionAlgorithms),
    ike_sa_lifetime: cdktf.numberToTerraform(struct!.ikeSaLifetime),
    ike_version: cdktf.stringToTerraform(struct!.ikeVersion),
    tunnel_df_policy: cdktf.stringToTerraform(struct!.tunnelDfPolicy),
    tunnel_dh_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tunnelDhGroups),
    tunnel_digest_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tunnelDigestAlgorithms),
    tunnel_encryption_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tunnelEncryptionAlgorithms),
    tunnel_pfs_enabled: cdktf.booleanToTerraform(struct!.tunnelPfsEnabled),
    tunnel_sa_lifetime: cdktf.numberToTerraform(struct!.tunnelSaLifetime),
  }
}


export function nsxtIpsecVpnTunnelSecurityProfileCustomizationToHclTerraform(struct?: NsxtIpsecVpnTunnelSecurityProfileCustomizationOutputReference | NsxtIpsecVpnTunnelSecurityProfileCustomization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dpd_probe_internal: {
      value: cdktf.numberToHclTerraform(struct!.dpdProbeInternal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ike_dh_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ikeDhGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ike_digest_algorithms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ikeDigestAlgorithms),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ike_encryption_algorithms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ikeEncryptionAlgorithms),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ike_sa_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.ikeSaLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ike_version: {
      value: cdktf.stringToHclTerraform(struct!.ikeVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_df_policy: {
      value: cdktf.stringToHclTerraform(struct!.tunnelDfPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_dh_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tunnelDhGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tunnel_digest_algorithms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tunnelDigestAlgorithms),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tunnel_encryption_algorithms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tunnelEncryptionAlgorithms),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tunnel_pfs_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.tunnelPfsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tunnel_sa_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.tunnelSaLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtIpsecVpnTunnelSecurityProfileCustomizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxtIpsecVpnTunnelSecurityProfileCustomization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dpdProbeInternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpdProbeInternal = this._dpdProbeInternal;
    }
    if (this._ikeDhGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeDhGroups = this._ikeDhGroups;
    }
    if (this._ikeDigestAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeDigestAlgorithms = this._ikeDigestAlgorithms;
    }
    if (this._ikeEncryptionAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeEncryptionAlgorithms = this._ikeEncryptionAlgorithms;
    }
    if (this._ikeSaLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeSaLifetime = this._ikeSaLifetime;
    }
    if (this._ikeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeVersion = this._ikeVersion;
    }
    if (this._tunnelDfPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelDfPolicy = this._tunnelDfPolicy;
    }
    if (this._tunnelDhGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelDhGroups = this._tunnelDhGroups;
    }
    if (this._tunnelDigestAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelDigestAlgorithms = this._tunnelDigestAlgorithms;
    }
    if (this._tunnelEncryptionAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelEncryptionAlgorithms = this._tunnelEncryptionAlgorithms;
    }
    if (this._tunnelPfsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelPfsEnabled = this._tunnelPfsEnabled;
    }
    if (this._tunnelSaLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelSaLifetime = this._tunnelSaLifetime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtIpsecVpnTunnelSecurityProfileCustomization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dpdProbeInternal = undefined;
      this._ikeDhGroups = undefined;
      this._ikeDigestAlgorithms = undefined;
      this._ikeEncryptionAlgorithms = undefined;
      this._ikeSaLifetime = undefined;
      this._ikeVersion = undefined;
      this._tunnelDfPolicy = undefined;
      this._tunnelDhGroups = undefined;
      this._tunnelDigestAlgorithms = undefined;
      this._tunnelEncryptionAlgorithms = undefined;
      this._tunnelPfsEnabled = undefined;
      this._tunnelSaLifetime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dpdProbeInternal = value.dpdProbeInternal;
      this._ikeDhGroups = value.ikeDhGroups;
      this._ikeDigestAlgorithms = value.ikeDigestAlgorithms;
      this._ikeEncryptionAlgorithms = value.ikeEncryptionAlgorithms;
      this._ikeSaLifetime = value.ikeSaLifetime;
      this._ikeVersion = value.ikeVersion;
      this._tunnelDfPolicy = value.tunnelDfPolicy;
      this._tunnelDhGroups = value.tunnelDhGroups;
      this._tunnelDigestAlgorithms = value.tunnelDigestAlgorithms;
      this._tunnelEncryptionAlgorithms = value.tunnelEncryptionAlgorithms;
      this._tunnelPfsEnabled = value.tunnelPfsEnabled;
      this._tunnelSaLifetime = value.tunnelSaLifetime;
    }
  }

  // dpd_probe_internal - computed: false, optional: true, required: false
  private _dpdProbeInternal?: number; 
  public get dpdProbeInternal() {
    return this.getNumberAttribute('dpd_probe_internal');
  }
  public set dpdProbeInternal(value: number) {
    this._dpdProbeInternal = value;
  }
  public resetDpdProbeInternal() {
    this._dpdProbeInternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdProbeInternalInput() {
    return this._dpdProbeInternal;
  }

  // ike_dh_groups - computed: false, optional: false, required: true
  private _ikeDhGroups?: string[]; 
  public get ikeDhGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('ike_dh_groups'));
  }
  public set ikeDhGroups(value: string[]) {
    this._ikeDhGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeDhGroupsInput() {
    return this._ikeDhGroups;
  }

  // ike_digest_algorithms - computed: false, optional: true, required: false
  private _ikeDigestAlgorithms?: string[]; 
  public get ikeDigestAlgorithms() {
    return cdktf.Fn.tolist(this.getListAttribute('ike_digest_algorithms'));
  }
  public set ikeDigestAlgorithms(value: string[]) {
    this._ikeDigestAlgorithms = value;
  }
  public resetIkeDigestAlgorithms() {
    this._ikeDigestAlgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeDigestAlgorithmsInput() {
    return this._ikeDigestAlgorithms;
  }

  // ike_encryption_algorithms - computed: false, optional: false, required: true
  private _ikeEncryptionAlgorithms?: string[]; 
  public get ikeEncryptionAlgorithms() {
    return cdktf.Fn.tolist(this.getListAttribute('ike_encryption_algorithms'));
  }
  public set ikeEncryptionAlgorithms(value: string[]) {
    this._ikeEncryptionAlgorithms = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeEncryptionAlgorithmsInput() {
    return this._ikeEncryptionAlgorithms;
  }

  // ike_sa_lifetime - computed: false, optional: true, required: false
  private _ikeSaLifetime?: number; 
  public get ikeSaLifetime() {
    return this.getNumberAttribute('ike_sa_lifetime');
  }
  public set ikeSaLifetime(value: number) {
    this._ikeSaLifetime = value;
  }
  public resetIkeSaLifetime() {
    this._ikeSaLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSaLifetimeInput() {
    return this._ikeSaLifetime;
  }

  // ike_version - computed: false, optional: false, required: true
  private _ikeVersion?: string; 
  public get ikeVersion() {
    return this.getStringAttribute('ike_version');
  }
  public set ikeVersion(value: string) {
    this._ikeVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeVersionInput() {
    return this._ikeVersion;
  }

  // tunnel_df_policy - computed: false, optional: true, required: false
  private _tunnelDfPolicy?: string; 
  public get tunnelDfPolicy() {
    return this.getStringAttribute('tunnel_df_policy');
  }
  public set tunnelDfPolicy(value: string) {
    this._tunnelDfPolicy = value;
  }
  public resetTunnelDfPolicy() {
    this._tunnelDfPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelDfPolicyInput() {
    return this._tunnelDfPolicy;
  }

  // tunnel_dh_groups - computed: false, optional: false, required: true
  private _tunnelDhGroups?: string[]; 
  public get tunnelDhGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('tunnel_dh_groups'));
  }
  public set tunnelDhGroups(value: string[]) {
    this._tunnelDhGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelDhGroupsInput() {
    return this._tunnelDhGroups;
  }

  // tunnel_digest_algorithms - computed: false, optional: true, required: false
  private _tunnelDigestAlgorithms?: string[]; 
  public get tunnelDigestAlgorithms() {
    return cdktf.Fn.tolist(this.getListAttribute('tunnel_digest_algorithms'));
  }
  public set tunnelDigestAlgorithms(value: string[]) {
    this._tunnelDigestAlgorithms = value;
  }
  public resetTunnelDigestAlgorithms() {
    this._tunnelDigestAlgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelDigestAlgorithmsInput() {
    return this._tunnelDigestAlgorithms;
  }

  // tunnel_encryption_algorithms - computed: false, optional: false, required: true
  private _tunnelEncryptionAlgorithms?: string[]; 
  public get tunnelEncryptionAlgorithms() {
    return cdktf.Fn.tolist(this.getListAttribute('tunnel_encryption_algorithms'));
  }
  public set tunnelEncryptionAlgorithms(value: string[]) {
    this._tunnelEncryptionAlgorithms = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelEncryptionAlgorithmsInput() {
    return this._tunnelEncryptionAlgorithms;
  }

  // tunnel_pfs_enabled - computed: false, optional: true, required: false
  private _tunnelPfsEnabled?: boolean | cdktf.IResolvable; 
  public get tunnelPfsEnabled() {
    return this.getBooleanAttribute('tunnel_pfs_enabled');
  }
  public set tunnelPfsEnabled(value: boolean | cdktf.IResolvable) {
    this._tunnelPfsEnabled = value;
  }
  public resetTunnelPfsEnabled() {
    this._tunnelPfsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelPfsEnabledInput() {
    return this._tunnelPfsEnabled;
  }

  // tunnel_sa_lifetime - computed: false, optional: true, required: false
  private _tunnelSaLifetime?: number; 
  public get tunnelSaLifetime() {
    return this.getNumberAttribute('tunnel_sa_lifetime');
  }
  public set tunnelSaLifetime(value: number) {
    this._tunnelSaLifetime = value;
  }
  public resetTunnelSaLifetime() {
    this._tunnelSaLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelSaLifetimeInput() {
    return this._tunnelSaLifetime;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_ipsec_vpn_tunnel vcd_nsxt_ipsec_vpn_tunnel}
*/
export class NsxtIpsecVpnTunnel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxt_ipsec_vpn_tunnel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsxtIpsecVpnTunnel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsxtIpsecVpnTunnel to import
  * @param importFromId The id of the existing NsxtIpsecVpnTunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_ipsec_vpn_tunnel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsxtIpsecVpnTunnel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxt_ipsec_vpn_tunnel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_ipsec_vpn_tunnel vcd_nsxt_ipsec_vpn_tunnel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsxtIpsecVpnTunnelConfig
  */
  public constructor(scope: Construct, id: string, config: NsxtIpsecVpnTunnelConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxt_ipsec_vpn_tunnel',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationMode = config.authenticationMode;
    this._caCertificateId = config.caCertificateId;
    this._certificateId = config.certificateId;
    this._description = config.description;
    this._edgeGatewayId = config.edgeGatewayId;
    this._enabled = config.enabled;
    this._id = config.id;
    this._localIpAddress = config.localIpAddress;
    this._localNetworks = config.localNetworks;
    this._logging = config.logging;
    this._name = config.name;
    this._org = config.org;
    this._preSharedKey = config.preSharedKey;
    this._remoteId = config.remoteId;
    this._remoteIpAddress = config.remoteIpAddress;
    this._remoteNetworks = config.remoteNetworks;
    this._vdc = config.vdc;
    this._securityProfileCustomization.internalValue = config.securityProfileCustomization;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_mode - computed: false, optional: true, required: false
  private _authenticationMode?: string; 
  public get authenticationMode() {
    return this.getStringAttribute('authentication_mode');
  }
  public set authenticationMode(value: string) {
    this._authenticationMode = value;
  }
  public resetAuthenticationMode() {
    this._authenticationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationModeInput() {
    return this._authenticationMode;
  }

  // ca_certificate_id - computed: false, optional: true, required: false
  private _caCertificateId?: string; 
  public get caCertificateId() {
    return this.getStringAttribute('ca_certificate_id');
  }
  public set caCertificateId(value: string) {
    this._caCertificateId = value;
  }
  public resetCaCertificateId() {
    this._caCertificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateIdInput() {
    return this._caCertificateId;
  }

  // certificate_id - computed: false, optional: true, required: false
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
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

  // edge_gateway_id - computed: false, optional: false, required: true
  private _edgeGatewayId?: string; 
  public get edgeGatewayId() {
    return this.getStringAttribute('edge_gateway_id');
  }
  public set edgeGatewayId(value: string) {
    this._edgeGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeGatewayIdInput() {
    return this._edgeGatewayId;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ike_fail_reason - computed: true, optional: false, required: false
  public get ikeFailReason() {
    return this.getStringAttribute('ike_fail_reason');
  }

  // ike_service_status - computed: true, optional: false, required: false
  public get ikeServiceStatus() {
    return this.getStringAttribute('ike_service_status');
  }

  // local_ip_address - computed: false, optional: false, required: true
  private _localIpAddress?: string; 
  public get localIpAddress() {
    return this.getStringAttribute('local_ip_address');
  }
  public set localIpAddress(value: string) {
    this._localIpAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpAddressInput() {
    return this._localIpAddress;
  }

  // local_networks - computed: false, optional: false, required: true
  private _localNetworks?: string[]; 
  public get localNetworks() {
    return cdktf.Fn.tolist(this.getListAttribute('local_networks'));
  }
  public set localNetworks(value: string[]) {
    this._localNetworks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localNetworksInput() {
    return this._localNetworks;
  }

  // logging - computed: false, optional: true, required: false
  private _logging?: boolean | cdktf.IResolvable; 
  public get logging() {
    return this.getBooleanAttribute('logging');
  }
  public set logging(value: boolean | cdktf.IResolvable) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
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

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // pre_shared_key - computed: false, optional: false, required: true
  private _preSharedKey?: string; 
  public get preSharedKey() {
    return this.getStringAttribute('pre_shared_key');
  }
  public set preSharedKey(value: string) {
    this._preSharedKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preSharedKeyInput() {
    return this._preSharedKey;
  }

  // remote_id - computed: true, optional: true, required: false
  private _remoteId?: string; 
  public get remoteId() {
    return this.getStringAttribute('remote_id');
  }
  public set remoteId(value: string) {
    this._remoteId = value;
  }
  public resetRemoteId() {
    this._remoteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIdInput() {
    return this._remoteId;
  }

  // remote_ip_address - computed: false, optional: false, required: true
  private _remoteIpAddress?: string; 
  public get remoteIpAddress() {
    return this.getStringAttribute('remote_ip_address');
  }
  public set remoteIpAddress(value: string) {
    this._remoteIpAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpAddressInput() {
    return this._remoteIpAddress;
  }

  // remote_networks - computed: false, optional: true, required: false
  private _remoteNetworks?: string[]; 
  public get remoteNetworks() {
    return cdktf.Fn.tolist(this.getListAttribute('remote_networks'));
  }
  public set remoteNetworks(value: string[]) {
    this._remoteNetworks = value;
  }
  public resetRemoteNetworks() {
    this._remoteNetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteNetworksInput() {
    return this._remoteNetworks;
  }

  // security_profile - computed: true, optional: false, required: false
  public get securityProfile() {
    return this.getStringAttribute('security_profile');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vdc - computed: true, optional: true, required: false
  private _vdc?: string; 
  public get vdc() {
    return this.getStringAttribute('vdc');
  }
  public set vdc(value: string) {
    this._vdc = value;
  }
  public resetVdc() {
    this._vdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcInput() {
    return this._vdc;
  }

  // security_profile_customization - computed: false, optional: true, required: false
  private _securityProfileCustomization = new NsxtIpsecVpnTunnelSecurityProfileCustomizationOutputReference(this, "security_profile_customization");
  public get securityProfileCustomization() {
    return this._securityProfileCustomization;
  }
  public putSecurityProfileCustomization(value: NsxtIpsecVpnTunnelSecurityProfileCustomization) {
    this._securityProfileCustomization.internalValue = value;
  }
  public resetSecurityProfileCustomization() {
    this._securityProfileCustomization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProfileCustomizationInput() {
    return this._securityProfileCustomization.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_mode: cdktf.stringToTerraform(this._authenticationMode),
      ca_certificate_id: cdktf.stringToTerraform(this._caCertificateId),
      certificate_id: cdktf.stringToTerraform(this._certificateId),
      description: cdktf.stringToTerraform(this._description),
      edge_gateway_id: cdktf.stringToTerraform(this._edgeGatewayId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      local_ip_address: cdktf.stringToTerraform(this._localIpAddress),
      local_networks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._localNetworks),
      logging: cdktf.booleanToTerraform(this._logging),
      name: cdktf.stringToTerraform(this._name),
      org: cdktf.stringToTerraform(this._org),
      pre_shared_key: cdktf.stringToTerraform(this._preSharedKey),
      remote_id: cdktf.stringToTerraform(this._remoteId),
      remote_ip_address: cdktf.stringToTerraform(this._remoteIpAddress),
      remote_networks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._remoteNetworks),
      vdc: cdktf.stringToTerraform(this._vdc),
      security_profile_customization: nsxtIpsecVpnTunnelSecurityProfileCustomizationToTerraform(this._securityProfileCustomization.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_mode: {
        value: cdktf.stringToHclTerraform(this._authenticationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_certificate_id: {
        value: cdktf.stringToHclTerraform(this._caCertificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_id: {
        value: cdktf.stringToHclTerraform(this._certificateId),
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
      edge_gateway_id: {
        value: cdktf.stringToHclTerraform(this._edgeGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_ip_address: {
        value: cdktf.stringToHclTerraform(this._localIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_networks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._localNetworks),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      logging: {
        value: cdktf.booleanToHclTerraform(this._logging),
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
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_shared_key: {
        value: cdktf.stringToHclTerraform(this._preSharedKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_id: {
        value: cdktf.stringToHclTerraform(this._remoteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_ip_address: {
        value: cdktf.stringToHclTerraform(this._remoteIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_networks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._remoteNetworks),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vdc: {
        value: cdktf.stringToHclTerraform(this._vdc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_profile_customization: {
        value: nsxtIpsecVpnTunnelSecurityProfileCustomizationToHclTerraform(this._securityProfileCustomization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NsxtIpsecVpnTunnelSecurityProfileCustomizationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
