// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnIkeGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'preshare-key': Authenticate the remote gateway using a pre-shared key (Default); 'rsa-signature': Authenticate the remote gateway using an RSA certificate; 'ecdsa-signature': Authenticate the remote gateway using an ECDSA certificate; 'eap-radius': Authenticate the remote gateway using an EAP Radius server; 'eap-tls': Authenticate the remote gateway using EAP TLS;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#auth_method VpnIkeGateway#auth_method}
  */
  readonly authMethod?: string;
  /**
  * 'dhcp': Enable DHCP configuration-payload; 'radius': Enable RADIUS configuration-payload;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#configuration_payload VpnIkeGateway#configuration_payload}
  */
  readonly configurationPayload?: string;
  /**
  * '1': Diffie-Hellman group 1 - 768-bit(Default); '2': Diffie-Hellman group 2 - 1024-bit; '5': Diffie-Hellman group 5 - 1536-bit; '14': Diffie-Hellman group 14 - 2048-bit; '15': Diffie-Hellman group 15 - 3072-bit; '16': Diffie-Hellman group 16 - 4096-bit; '18': Diffie-Hellman group 18 - 8192-bit; '19': Diffie-Hellman group 19 - 256-bit Elliptic Curve; '20': Diffie-Hellman group 20 - 384-bit Elliptic Curve;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#dh_group VpnIkeGateway#dh_group}
  */
  readonly dhGroup?: string;
  /**
  * Disable initiating rekey
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#disable_rekey VpnIkeGateway#disable_rekey}
  */
  readonly disableRekey?: number;
  /**
  * Enable IKE message fragment and set fragment size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#fragment_size VpnIkeGateway#fragment_size}
  */
  readonly fragmentSize?: number;
  /**
  * 'sha256': Secure Hash Algorithm 256; 'sha384': Secure Hash Algorithm 384; 'sha512': Secure Hash Algorithm 512;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#hash VpnIkeGateway#hash}
  */
  readonly hash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#id VpnIkeGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'v1': IKEv1 key exchange; 'v2': IKEv2 key exchange;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#ike_version VpnIkeGateway#ike_version}
  */
  readonly ikeVersion?: string;
  /**
  * only handle traffic on management interface, share partition only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#interface_management VpnIkeGateway#interface_management}
  */
  readonly interfaceManagement?: number;
  /**
  * Private Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#key VpnIkeGateway#key}
  */
  readonly key?: string;
  /**
  * Private Key Pass Phrase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#key_passphrase VpnIkeGateway#key_passphrase}
  */
  readonly keyPassphrase?: string;
  /**
  * IKE SA age in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#lifetime VpnIkeGateway#lifetime}
  */
  readonly lifetime?: number;
  /**
  * Local Gateway Identity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#local_id VpnIkeGateway#local_id}
  */
  readonly localId?: string;
  /**
  * 'main': Negotiate Main mode (Default); 'aggressive': Negotiate Aggressive mode;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#mode VpnIkeGateway#mode}
  */
  readonly mode?: string;
  /**
  * IKE-gateway name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#name VpnIkeGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#nat_traversal VpnIkeGateway#nat_traversal}
  */
  readonly natTraversal?: number;
  /**
  * pre-shared key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#preshare_key_value VpnIkeGateway#preshare_key_value}
  */
  readonly preshareKeyValue?: string;
  /**
  * Remote Gateway Identity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#remote_id VpnIkeGateway#remote_id}
  */
  readonly remoteId?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#user_tag VpnIkeGateway#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#uuid VpnIkeGateway#uuid}
  */
  readonly uuid?: string;
  /**
  * dhcp_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#dhcp_server VpnIkeGateway#dhcp_server}
  */
  readonly dhcpServer?: VpnIkeGatewayDhcpServer;
  /**
  * dpd block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#dpd VpnIkeGateway#dpd}
  */
  readonly dpd?: VpnIkeGatewayDpd;
  /**
  * enc_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#enc_cfg VpnIkeGateway#enc_cfg}
  */
  readonly encCfg?: VpnIkeGatewayEncCfg[] | cdktf.IResolvable;
  /**
  * local_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#local_address VpnIkeGateway#local_address}
  */
  readonly localAddress?: VpnIkeGatewayLocalAddress;
  /**
  * local_cert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#local_cert VpnIkeGateway#local_cert}
  */
  readonly localCert?: VpnIkeGatewayLocalCert;
  /**
  * radius_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#radius_server VpnIkeGateway#radius_server}
  */
  readonly radiusServer?: VpnIkeGatewayRadiusServer;
  /**
  * remote_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#remote_address VpnIkeGateway#remote_address}
  */
  readonly remoteAddress?: VpnIkeGatewayRemoteAddress;
  /**
  * remote_ca_cert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#remote_ca_cert VpnIkeGateway#remote_ca_cert}
  */
  readonly remoteCaCert?: VpnIkeGatewayRemoteCaCert;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#sampling_enable VpnIkeGateway#sampling_enable}
  */
  readonly samplingEnable?: VpnIkeGatewaySamplingEnable[] | cdktf.IResolvable;
  /**
  * vrid block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#vrid VpnIkeGateway#vrid}
  */
  readonly vrid?: VpnIkeGatewayVrid;
}
export interface VpnIkeGatewayDhcpServerPri {
  /**
  * Primary DHCP Server IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#dhcp_pri_ipv4 VpnIkeGateway#dhcp_pri_ipv4}
  */
  readonly dhcpPriIpv4?: string;
}

export function vpnIkeGatewayDhcpServerPriToTerraform(struct?: VpnIkeGatewayDhcpServerPriOutputReference | VpnIkeGatewayDhcpServerPri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp_pri_ipv4: cdktf.stringToTerraform(struct!.dhcpPriIpv4),
  }
}


export function vpnIkeGatewayDhcpServerPriToHclTerraform(struct?: VpnIkeGatewayDhcpServerPriOutputReference | VpnIkeGatewayDhcpServerPri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp_pri_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.dhcpPriIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIkeGatewayDhcpServerPriOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnIkeGatewayDhcpServerPri | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcpPriIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpPriIpv4 = this._dhcpPriIpv4;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIkeGatewayDhcpServerPri | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dhcpPriIpv4 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dhcpPriIpv4 = value.dhcpPriIpv4;
    }
  }

  // dhcp_pri_ipv4 - computed: false, optional: true, required: false
  private _dhcpPriIpv4?: string; 
  public get dhcpPriIpv4() {
    return this.getStringAttribute('dhcp_pri_ipv4');
  }
  public set dhcpPriIpv4(value: string) {
    this._dhcpPriIpv4 = value;
  }
  public resetDhcpPriIpv4() {
    this._dhcpPriIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpPriIpv4Input() {
    return this._dhcpPriIpv4;
  }
}
export interface VpnIkeGatewayDhcpServerSec {
  /**
  * Secondary DHCP Server IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#dhcp_sec_ipv4 VpnIkeGateway#dhcp_sec_ipv4}
  */
  readonly dhcpSecIpv4?: string;
}

export function vpnIkeGatewayDhcpServerSecToTerraform(struct?: VpnIkeGatewayDhcpServerSecOutputReference | VpnIkeGatewayDhcpServerSec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp_sec_ipv4: cdktf.stringToTerraform(struct!.dhcpSecIpv4),
  }
}


export function vpnIkeGatewayDhcpServerSecToHclTerraform(struct?: VpnIkeGatewayDhcpServerSecOutputReference | VpnIkeGatewayDhcpServerSec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp_sec_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.dhcpSecIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIkeGatewayDhcpServerSecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnIkeGatewayDhcpServerSec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcpSecIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpSecIpv4 = this._dhcpSecIpv4;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIkeGatewayDhcpServerSec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dhcpSecIpv4 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dhcpSecIpv4 = value.dhcpSecIpv4;
    }
  }

  // dhcp_sec_ipv4 - computed: false, optional: true, required: false
  private _dhcpSecIpv4?: string; 
  public get dhcpSecIpv4() {
    return this.getStringAttribute('dhcp_sec_ipv4');
  }
  public set dhcpSecIpv4(value: string) {
    this._dhcpSecIpv4 = value;
  }
  public resetDhcpSecIpv4() {
    this._dhcpSecIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpSecIpv4Input() {
    return this._dhcpSecIpv4;
  }
}
export interface VpnIkeGatewayDhcpServer {
  /**
  * pri block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#pri VpnIkeGateway#pri}
  */
  readonly pri?: VpnIkeGatewayDhcpServerPri;
  /**
  * sec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#sec VpnIkeGateway#sec}
  */
  readonly sec?: VpnIkeGatewayDhcpServerSec;
}

export function vpnIkeGatewayDhcpServerToTerraform(struct?: VpnIkeGatewayDhcpServerOutputReference | VpnIkeGatewayDhcpServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pri: vpnIkeGatewayDhcpServerPriToTerraform(struct!.pri),
    sec: vpnIkeGatewayDhcpServerSecToTerraform(struct!.sec),
  }
}


export function vpnIkeGatewayDhcpServerToHclTerraform(struct?: VpnIkeGatewayDhcpServerOutputReference | VpnIkeGatewayDhcpServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pri: {
      value: vpnIkeGatewayDhcpServerPriToHclTerraform(struct!.pri),
      isBlock: true,
      type: "list",
      storageClassType: "VpnIkeGatewayDhcpServerPriList",
    },
    sec: {
      value: vpnIkeGatewayDhcpServerSecToHclTerraform(struct!.sec),
      isBlock: true,
      type: "list",
      storageClassType: "VpnIkeGatewayDhcpServerSecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIkeGatewayDhcpServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnIkeGatewayDhcpServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pri?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pri = this._pri?.internalValue;
    }
    if (this._sec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sec = this._sec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIkeGatewayDhcpServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pri.internalValue = undefined;
      this._sec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pri.internalValue = value.pri;
      this._sec.internalValue = value.sec;
    }
  }

  // pri - computed: false, optional: true, required: false
  private _pri = new VpnIkeGatewayDhcpServerPriOutputReference(this, "pri");
  public get pri() {
    return this._pri;
  }
  public putPri(value: VpnIkeGatewayDhcpServerPri) {
    this._pri.internalValue = value;
  }
  public resetPri() {
    this._pri.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priInput() {
    return this._pri.internalValue;
  }

  // sec - computed: false, optional: true, required: false
  private _sec = new VpnIkeGatewayDhcpServerSecOutputReference(this, "sec");
  public get sec() {
    return this._sec;
  }
  public putSec(value: VpnIkeGatewayDhcpServerSec) {
    this._sec.internalValue = value;
  }
  public resetSec() {
    this._sec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secInput() {
    return this._sec.internalValue;
  }
}
export interface VpnIkeGatewayDpd {
  /**
  * Interval time in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#interval VpnIkeGateway#interval}
  */
  readonly interval?: number;
  /**
  * Retry times
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#retry VpnIkeGateway#retry}
  */
  readonly retry?: number;
}

export function vpnIkeGatewayDpdToTerraform(struct?: VpnIkeGatewayDpdOutputReference | VpnIkeGatewayDpd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    retry: cdktf.numberToTerraform(struct!.retry),
  }
}


export function vpnIkeGatewayDpdToHclTerraform(struct?: VpnIkeGatewayDpdOutputReference | VpnIkeGatewayDpd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry: {
      value: cdktf.numberToHclTerraform(struct!.retry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIkeGatewayDpdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnIkeGatewayDpd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._retry !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIkeGatewayDpd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._retry = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._retry = value.retry;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // retry - computed: false, optional: true, required: false
  private _retry?: number; 
  public get retry() {
    return this.getNumberAttribute('retry');
  }
  public set retry(value: number) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }
}
export interface VpnIkeGatewayEncCfg {
  /**
  * 'des': Data Encryption Standard algorithm; '3des': Triple Data Encryption Standard algorithm; 'aes-128': Advanced Encryption Standard algorithm CBC Mode(key size: 128 bits); 'aes-192': Advanced Encryption Standard algorithm CBC Mode(key size: 192 bits); 'aes-256': Advanced Encryption Standard algorithm CBC Mode(key size: 256 bits); 'aes-gcm-128': Advanced Encryption Standard algorithm Galois/Counter Mode(key size: 128 bits, ICV size: 16 bytes), only for IKEv2; 'aes-gcm-192': Advanced Encryption Standard algorithm Galois/Counter Mode(key size: 192 bits, ICV size: 16 bytes), only for IKEv2; 'aes-gcm-256': Advanced Encryption Standard algorithm Galois/Counter Mode(key size: 256 bits, ICV size: 16 bytes), only for IKEv2; 'null': No encryption algorithm, only for IKEv2;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#encryption VpnIkeGateway#encryption}
  */
  readonly encryption?: string;
  /**
  * Prioritizes (1-10) security protocol, least value has highest priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#gcm_priority VpnIkeGateway#gcm_priority}
  */
  readonly gcmPriority?: number;
  /**
  * 'md5': MD5 Dessage-Digest Algorithm; 'sha1': Secure Hash Algorithm 1; 'sha256': Secure Hash Algorithm 256; 'sha384': Secure Hash Algorithm 384; 'sha512': Secure Hash Algorithm 512;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#hash VpnIkeGateway#hash}
  */
  readonly hash?: string;
  /**
  * 'md5': MD5 Dessage-Digest Algorithm; 'sha1': Secure Hash Algorithm 1; 'sha256': Secure Hash Algorithm 256; 'sha384': Secure Hash Algorithm 384; 'sha512': Secure Hash Algorithm 512;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#prf VpnIkeGateway#prf}
  */
  readonly prf?: string;
  /**
  * Prioritizes (1-10) security protocol, least value has highest priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#priority VpnIkeGateway#priority}
  */
  readonly priority?: number;
}

export function vpnIkeGatewayEncCfgToTerraform(struct?: VpnIkeGatewayEncCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption: cdktf.stringToTerraform(struct!.encryption),
    gcm_priority: cdktf.numberToTerraform(struct!.gcmPriority),
    hash: cdktf.stringToTerraform(struct!.hash),
    prf: cdktf.stringToTerraform(struct!.prf),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function vpnIkeGatewayEncCfgToHclTerraform(struct?: VpnIkeGatewayEncCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encryption: {
      value: cdktf.stringToHclTerraform(struct!.encryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcm_priority: {
      value: cdktf.numberToHclTerraform(struct!.gcmPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hash: {
      value: cdktf.stringToHclTerraform(struct!.hash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prf: {
      value: cdktf.stringToHclTerraform(struct!.prf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIkeGatewayEncCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnIkeGatewayEncCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption;
    }
    if (this._gcmPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcmPriority = this._gcmPriority;
    }
    if (this._hash !== undefined) {
      hasAnyValues = true;
      internalValueResult.hash = this._hash;
    }
    if (this._prf !== undefined) {
      hasAnyValues = true;
      internalValueResult.prf = this._prf;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIkeGatewayEncCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryption = undefined;
      this._gcmPriority = undefined;
      this._hash = undefined;
      this._prf = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryption = value.encryption;
      this._gcmPriority = value.gcmPriority;
      this._hash = value.hash;
      this._prf = value.prf;
      this._priority = value.priority;
    }
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption?: string; 
  public get encryption() {
    return this.getStringAttribute('encryption');
  }
  public set encryption(value: string) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // gcm_priority - computed: false, optional: true, required: false
  private _gcmPriority?: number; 
  public get gcmPriority() {
    return this.getNumberAttribute('gcm_priority');
  }
  public set gcmPriority(value: number) {
    this._gcmPriority = value;
  }
  public resetGcmPriority() {
    this._gcmPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcmPriorityInput() {
    return this._gcmPriority;
  }

  // hash - computed: false, optional: true, required: false
  private _hash?: string; 
  public get hash() {
    return this.getStringAttribute('hash');
  }
  public set hash(value: string) {
    this._hash = value;
  }
  public resetHash() {
    this._hash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash;
  }

  // prf - computed: false, optional: true, required: false
  private _prf?: string; 
  public get prf() {
    return this.getStringAttribute('prf');
  }
  public set prf(value: string) {
    this._prf = value;
  }
  public resetPrf() {
    this._prf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prfInput() {
    return this._prf;
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
}

export class VpnIkeGatewayEncCfgList extends cdktf.ComplexList {
  public internalValue? : VpnIkeGatewayEncCfg[] | cdktf.IResolvable

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
  public get(index: number): VpnIkeGatewayEncCfgOutputReference {
    return new VpnIkeGatewayEncCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnIkeGatewayLocalAddress {
  /**
  * Ipv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#local_ip VpnIkeGateway#local_ip}
  */
  readonly localIp?: string;
  /**
  * Ipv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#local_ipv6 VpnIkeGateway#local_ipv6}
  */
  readonly localIpv6?: string;
}

export function vpnIkeGatewayLocalAddressToTerraform(struct?: VpnIkeGatewayLocalAddressOutputReference | VpnIkeGatewayLocalAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_ip: cdktf.stringToTerraform(struct!.localIp),
    local_ipv6: cdktf.stringToTerraform(struct!.localIpv6),
  }
}


export function vpnIkeGatewayLocalAddressToHclTerraform(struct?: VpnIkeGatewayLocalAddressOutputReference | VpnIkeGatewayLocalAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_ip: {
      value: cdktf.stringToHclTerraform(struct!.localIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.localIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIkeGatewayLocalAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnIkeGatewayLocalAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.localIp = this._localIp;
    }
    if (this._localIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.localIpv6 = this._localIpv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIkeGatewayLocalAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localIp = undefined;
      this._localIpv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localIp = value.localIp;
      this._localIpv6 = value.localIpv6;
    }
  }

  // local_ip - computed: false, optional: true, required: false
  private _localIp?: string; 
  public get localIp() {
    return this.getStringAttribute('local_ip');
  }
  public set localIp(value: string) {
    this._localIp = value;
  }
  public resetLocalIp() {
    this._localIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpInput() {
    return this._localIp;
  }

  // local_ipv6 - computed: false, optional: true, required: false
  private _localIpv6?: string; 
  public get localIpv6() {
    return this.getStringAttribute('local_ipv6');
  }
  public set localIpv6(value: string) {
    this._localIpv6 = value;
  }
  public resetLocalIpv6() {
    this._localIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpv6Input() {
    return this._localIpv6;
  }
}
export interface VpnIkeGatewayLocalCert {
  /**
  * Certificate File Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#local_cert_name VpnIkeGateway#local_cert_name}
  */
  readonly localCertName?: string;
}

export function vpnIkeGatewayLocalCertToTerraform(struct?: VpnIkeGatewayLocalCertOutputReference | VpnIkeGatewayLocalCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_cert_name: cdktf.stringToTerraform(struct!.localCertName),
  }
}


export function vpnIkeGatewayLocalCertToHclTerraform(struct?: VpnIkeGatewayLocalCertOutputReference | VpnIkeGatewayLocalCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_cert_name: {
      value: cdktf.stringToHclTerraform(struct!.localCertName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIkeGatewayLocalCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnIkeGatewayLocalCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localCertName !== undefined) {
      hasAnyValues = true;
      internalValueResult.localCertName = this._localCertName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIkeGatewayLocalCert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localCertName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localCertName = value.localCertName;
    }
  }

  // local_cert_name - computed: false, optional: true, required: false
  private _localCertName?: string; 
  public get localCertName() {
    return this.getStringAttribute('local_cert_name');
  }
  public set localCertName(value: string) {
    this._localCertName = value;
  }
  public resetLocalCertName() {
    this._localCertName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localCertNameInput() {
    return this._localCertName;
  }
}
export interface VpnIkeGatewayRadiusServer {
  /**
  * Primary RADIUS Authentication Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#radius_pri VpnIkeGateway#radius_pri}
  */
  readonly radiusPri?: string;
  /**
  * Secondary RADIUS Authentication Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#radius_sec VpnIkeGateway#radius_sec}
  */
  readonly radiusSec?: string;
}

export function vpnIkeGatewayRadiusServerToTerraform(struct?: VpnIkeGatewayRadiusServerOutputReference | VpnIkeGatewayRadiusServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    radius_pri: cdktf.stringToTerraform(struct!.radiusPri),
    radius_sec: cdktf.stringToTerraform(struct!.radiusSec),
  }
}


export function vpnIkeGatewayRadiusServerToHclTerraform(struct?: VpnIkeGatewayRadiusServerOutputReference | VpnIkeGatewayRadiusServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    radius_pri: {
      value: cdktf.stringToHclTerraform(struct!.radiusPri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    radius_sec: {
      value: cdktf.stringToHclTerraform(struct!.radiusSec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIkeGatewayRadiusServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnIkeGatewayRadiusServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._radiusPri !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusPri = this._radiusPri;
    }
    if (this._radiusSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusSec = this._radiusSec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIkeGatewayRadiusServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._radiusPri = undefined;
      this._radiusSec = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._radiusPri = value.radiusPri;
      this._radiusSec = value.radiusSec;
    }
  }

  // radius_pri - computed: false, optional: true, required: false
  private _radiusPri?: string; 
  public get radiusPri() {
    return this.getStringAttribute('radius_pri');
  }
  public set radiusPri(value: string) {
    this._radiusPri = value;
  }
  public resetRadiusPri() {
    this._radiusPri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusPriInput() {
    return this._radiusPri;
  }

  // radius_sec - computed: false, optional: true, required: false
  private _radiusSec?: string; 
  public get radiusSec() {
    return this.getStringAttribute('radius_sec');
  }
  public set radiusSec(value: string) {
    this._radiusSec = value;
  }
  public resetRadiusSec() {
    this._radiusSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusSecInput() {
    return this._radiusSec;
  }
}
export interface VpnIkeGatewayRemoteAddress {
  /**
  * Remote IP based on Domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#dns VpnIkeGateway#dns}
  */
  readonly dns?: string;
  /**
  * Ipv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#remote_ip VpnIkeGateway#remote_ip}
  */
  readonly remoteIp?: string;
  /**
  * Ipv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#remote_ipv6 VpnIkeGateway#remote_ipv6}
  */
  readonly remoteIpv6?: string;
}

export function vpnIkeGatewayRemoteAddressToTerraform(struct?: VpnIkeGatewayRemoteAddressOutputReference | VpnIkeGatewayRemoteAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.stringToTerraform(struct!.dns),
    remote_ip: cdktf.stringToTerraform(struct!.remoteIp),
    remote_ipv6: cdktf.stringToTerraform(struct!.remoteIpv6),
  }
}


export function vpnIkeGatewayRemoteAddressToHclTerraform(struct?: VpnIkeGatewayRemoteAddressOutputReference | VpnIkeGatewayRemoteAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.stringToHclTerraform(struct!.dns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_ip: {
      value: cdktf.stringToHclTerraform(struct!.remoteIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.remoteIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIkeGatewayRemoteAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnIkeGatewayRemoteAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._remoteIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIp = this._remoteIp;
    }
    if (this._remoteIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIpv6 = this._remoteIpv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIkeGatewayRemoteAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dns = undefined;
      this._remoteIp = undefined;
      this._remoteIpv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dns = value.dns;
      this._remoteIp = value.remoteIp;
      this._remoteIpv6 = value.remoteIpv6;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string; 
  public get dns() {
    return this.getStringAttribute('dns');
  }
  public set dns(value: string) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // remote_ip - computed: false, optional: true, required: false
  private _remoteIp?: string; 
  public get remoteIp() {
    return this.getStringAttribute('remote_ip');
  }
  public set remoteIp(value: string) {
    this._remoteIp = value;
  }
  public resetRemoteIp() {
    this._remoteIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpInput() {
    return this._remoteIp;
  }

  // remote_ipv6 - computed: false, optional: true, required: false
  private _remoteIpv6?: string; 
  public get remoteIpv6() {
    return this.getStringAttribute('remote_ipv6');
  }
  public set remoteIpv6(value: string) {
    this._remoteIpv6 = value;
  }
  public resetRemoteIpv6() {
    this._remoteIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpv6Input() {
    return this._remoteIpv6;
  }
}
export interface VpnIkeGatewayRemoteCaCert {
  /**
  * Remote CA certificate DN (C=, ST=, L=, O=, CN=) without emailAddress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#remote_cert_name VpnIkeGateway#remote_cert_name}
  */
  readonly remoteCertName?: string;
}

export function vpnIkeGatewayRemoteCaCertToTerraform(struct?: VpnIkeGatewayRemoteCaCertOutputReference | VpnIkeGatewayRemoteCaCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    remote_cert_name: cdktf.stringToTerraform(struct!.remoteCertName),
  }
}


export function vpnIkeGatewayRemoteCaCertToHclTerraform(struct?: VpnIkeGatewayRemoteCaCertOutputReference | VpnIkeGatewayRemoteCaCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    remote_cert_name: {
      value: cdktf.stringToHclTerraform(struct!.remoteCertName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIkeGatewayRemoteCaCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnIkeGatewayRemoteCaCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._remoteCertName !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteCertName = this._remoteCertName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIkeGatewayRemoteCaCert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._remoteCertName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._remoteCertName = value.remoteCertName;
    }
  }

  // remote_cert_name - computed: false, optional: true, required: false
  private _remoteCertName?: string; 
  public get remoteCertName() {
    return this.getStringAttribute('remote_cert_name');
  }
  public set remoteCertName(value: string) {
    this._remoteCertName = value;
  }
  public resetRemoteCertName() {
    this._remoteCertName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteCertNameInput() {
    return this._remoteCertName;
  }
}
export interface VpnIkeGatewaySamplingEnable {
  /**
  * 'all': all; 'v2-init-rekey': Initiate Rekey; 'v2-rsp-rekey': Respond Rekey; 'v2-child-sa-rekey': Child SA Rekey; 'v2-in-invalid': Incoming Invalid; 'v2-in-invalid-spi': Incoming Invalid SPI; 'v2-in-init-req': Incoming Init Request; 'v2-in-init-rsp': Incoming Init Response; 'v2-out-init-req': Outgoing Init Request; 'v2-out-init-rsp': Outgoing Init Response; 'v2-in-auth-req': Incoming Auth Request; 'v2-in-auth-rsp': Incoming Auth Response; 'v2-out-auth-req': Outgoing Auth Request; 'v2-out-auth-rsp': Outgoing Auth Response; 'v2-in-create-child-req': Incoming Create Child Request; 'v2-in-create-child-rsp': Incoming Create Child Response; 'v2-out-create-child-req': Outgoing Create Child Request; 'v2-out-create-child-rsp': Outgoing Create Child Response; 'v2-in-info-req': Incoming Info Request; 'v2-in-info-rsp': Incoming Info Response; 'v2-out-info-req': Outgoing Info Request; 'v2-out-info-rsp': Outgoing Info Response; 'v1-in-id-prot-req': Incoming ID Protection Request; 'v1-in-id-prot-rsp': Incoming ID Protection Response; 'v1-out-id-prot-req': Outgoing ID Protection Request; 'v1-out-id-prot-rsp': Outgoing ID Protection Response; 'v1-in-auth-only-req': Incoming Auth Only Request; 'v1-in-auth-only-rsp': Incoming Auth Only Response; 'v1-out-auth-only-req': Outgoing Auth Only Request; 'v1-out-auth-only-rsp': Outgoing Auth Only Response; 'v1-in-aggressive-req': Incoming Aggressive Request; 'v1-in-aggressive-rsp': Incoming Aggressive Response; 'v1-out-aggressive-req': Outgoing Aggressive Request; 'v1-out-aggressive-rsp': Outgoing Aggressive Response; 'v1-in-info-v1-req': Incoming Info Request; 'v1-in-info-v1-rsp': Incoming Info Response; 'v1-out-info-v1-req': Outgoing Info Request; 'v1-out-info-v1-rsp': Outgoing Info Response; 'v1-in-transaction-req': Incoming Transaction Request; 'v1-in-transaction-rsp': Incoming Transaction Response; 'v1-out-transaction-req': Outgoing Transaction Request; 'v1-out-transaction-rsp': Outgoing Transaction Response; 'v1-in-quick-mode-req': Incoming Quick Mode Request; 'v1-in-quick-mode-rsp': Incoming Quick Mode Response; 'v1-out-quick-mode-req': Outgoing Quick Mode Request; 'v1-out-quick-mode-rsp': Outgoing Quick Mode Response; 'v1-in-new-group-mode-req': Incoming New Group Mode Request; 'v1-in-new-group-mode-rsp': Incoming New Group Mode Response; 'v1-out-new-group-mode-req': Outgoing New Group Mode Request; 'v1-out-new-group-mode-rsp': Outgoing New Group Mode Response; 'v1-child-sa-invalid-spi': Invalid SPI for Child SAs; 'v2-child-sa-invalid-spi': Invalid SPI for Child SAs; 'ike-current-version': IKE version;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#counters1 VpnIkeGateway#counters1}
  */
  readonly counters1?: string;
}

export function vpnIkeGatewaySamplingEnableToTerraform(struct?: VpnIkeGatewaySamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function vpnIkeGatewaySamplingEnableToHclTerraform(struct?: VpnIkeGatewaySamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIkeGatewaySamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnIkeGatewaySamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIkeGatewaySamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class VpnIkeGatewaySamplingEnableList extends cdktf.ComplexList {
  public internalValue? : VpnIkeGatewaySamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): VpnIkeGatewaySamplingEnableOutputReference {
    return new VpnIkeGatewaySamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnIkeGatewayVrid {
  /**
  * Default VRRP-A vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#default VpnIkeGateway#default}
  */
  readonly default?: number;
  /**
  * Specify ha VRRP-A vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#vrid_num VpnIkeGateway#vrid_num}
  */
  readonly vridNum?: number;
}

export function vpnIkeGatewayVridToTerraform(struct?: VpnIkeGatewayVridOutputReference | VpnIkeGatewayVrid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.numberToTerraform(struct!.default),
    vrid_num: cdktf.numberToTerraform(struct!.vridNum),
  }
}


export function vpnIkeGatewayVridToHclTerraform(struct?: VpnIkeGatewayVridOutputReference | VpnIkeGatewayVrid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.numberToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrid_num: {
      value: cdktf.numberToHclTerraform(struct!.vridNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIkeGatewayVridOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnIkeGatewayVrid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._vridNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.vridNum = this._vridNum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIkeGatewayVrid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._default = undefined;
      this._vridNum = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._default = value.default;
      this._vridNum = value.vridNum;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: number; 
  public get default() {
    return this.getNumberAttribute('default');
  }
  public set default(value: number) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // vrid_num - computed: false, optional: true, required: false
  private _vridNum?: number; 
  public get vridNum() {
    return this.getNumberAttribute('vrid_num');
  }
  public set vridNum(value: number) {
    this._vridNum = value;
  }
  public resetVridNum() {
    this._vridNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridNumInput() {
    return this._vridNum;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway thunder_vpn_ike_gateway}
*/
export class VpnIkeGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vpn_ike_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnIkeGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnIkeGateway to import
  * @param importFromId The id of the existing VpnIkeGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnIkeGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vpn_ike_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ike_gateway thunder_vpn_ike_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnIkeGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: VpnIkeGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_vpn_ike_gateway',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authMethod = config.authMethod;
    this._configurationPayload = config.configurationPayload;
    this._dhGroup = config.dhGroup;
    this._disableRekey = config.disableRekey;
    this._fragmentSize = config.fragmentSize;
    this._hash = config.hash;
    this._id = config.id;
    this._ikeVersion = config.ikeVersion;
    this._interfaceManagement = config.interfaceManagement;
    this._key = config.key;
    this._keyPassphrase = config.keyPassphrase;
    this._lifetime = config.lifetime;
    this._localId = config.localId;
    this._mode = config.mode;
    this._name = config.name;
    this._natTraversal = config.natTraversal;
    this._preshareKeyValue = config.preshareKeyValue;
    this._remoteId = config.remoteId;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._dhcpServer.internalValue = config.dhcpServer;
    this._dpd.internalValue = config.dpd;
    this._encCfg.internalValue = config.encCfg;
    this._localAddress.internalValue = config.localAddress;
    this._localCert.internalValue = config.localCert;
    this._radiusServer.internalValue = config.radiusServer;
    this._remoteAddress.internalValue = config.remoteAddress;
    this._remoteCaCert.internalValue = config.remoteCaCert;
    this._samplingEnable.internalValue = config.samplingEnable;
    this._vrid.internalValue = config.vrid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_method - computed: false, optional: true, required: false
  private _authMethod?: string; 
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
  public set authMethod(value: string) {
    this._authMethod = value;
  }
  public resetAuthMethod() {
    this._authMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod;
  }

  // configuration_payload - computed: false, optional: true, required: false
  private _configurationPayload?: string; 
  public get configurationPayload() {
    return this.getStringAttribute('configuration_payload');
  }
  public set configurationPayload(value: string) {
    this._configurationPayload = value;
  }
  public resetConfigurationPayload() {
    this._configurationPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationPayloadInput() {
    return this._configurationPayload;
  }

  // dh_group - computed: false, optional: true, required: false
  private _dhGroup?: string; 
  public get dhGroup() {
    return this.getStringAttribute('dh_group');
  }
  public set dhGroup(value: string) {
    this._dhGroup = value;
  }
  public resetDhGroup() {
    this._dhGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhGroupInput() {
    return this._dhGroup;
  }

  // disable_rekey - computed: false, optional: true, required: false
  private _disableRekey?: number; 
  public get disableRekey() {
    return this.getNumberAttribute('disable_rekey');
  }
  public set disableRekey(value: number) {
    this._disableRekey = value;
  }
  public resetDisableRekey() {
    this._disableRekey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRekeyInput() {
    return this._disableRekey;
  }

  // fragment_size - computed: false, optional: true, required: false
  private _fragmentSize?: number; 
  public get fragmentSize() {
    return this.getNumberAttribute('fragment_size');
  }
  public set fragmentSize(value: number) {
    this._fragmentSize = value;
  }
  public resetFragmentSize() {
    this._fragmentSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentSizeInput() {
    return this._fragmentSize;
  }

  // hash - computed: false, optional: true, required: false
  private _hash?: string; 
  public get hash() {
    return this.getStringAttribute('hash');
  }
  public set hash(value: string) {
    this._hash = value;
  }
  public resetHash() {
    this._hash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash;
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

  // ike_version - computed: false, optional: true, required: false
  private _ikeVersion?: string; 
  public get ikeVersion() {
    return this.getStringAttribute('ike_version');
  }
  public set ikeVersion(value: string) {
    this._ikeVersion = value;
  }
  public resetIkeVersion() {
    this._ikeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeVersionInput() {
    return this._ikeVersion;
  }

  // interface_management - computed: false, optional: true, required: false
  private _interfaceManagement?: number; 
  public get interfaceManagement() {
    return this.getNumberAttribute('interface_management');
  }
  public set interfaceManagement(value: number) {
    this._interfaceManagement = value;
  }
  public resetInterfaceManagement() {
    this._interfaceManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceManagementInput() {
    return this._interfaceManagement;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // key_passphrase - computed: false, optional: true, required: false
  private _keyPassphrase?: string; 
  public get keyPassphrase() {
    return this.getStringAttribute('key_passphrase');
  }
  public set keyPassphrase(value: string) {
    this._keyPassphrase = value;
  }
  public resetKeyPassphrase() {
    this._keyPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPassphraseInput() {
    return this._keyPassphrase;
  }

  // lifetime - computed: false, optional: true, required: false
  private _lifetime?: number; 
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }
  public set lifetime(value: number) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
  }

  // local_id - computed: false, optional: true, required: false
  private _localId?: string; 
  public get localId() {
    return this.getStringAttribute('local_id');
  }
  public set localId(value: string) {
    this._localId = value;
  }
  public resetLocalId() {
    this._localId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIdInput() {
    return this._localId;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // nat_traversal - computed: false, optional: true, required: false
  private _natTraversal?: number; 
  public get natTraversal() {
    return this.getNumberAttribute('nat_traversal');
  }
  public set natTraversal(value: number) {
    this._natTraversal = value;
  }
  public resetNatTraversal() {
    this._natTraversal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natTraversalInput() {
    return this._natTraversal;
  }

  // preshare_key_value - computed: false, optional: true, required: false
  private _preshareKeyValue?: string; 
  public get preshareKeyValue() {
    return this.getStringAttribute('preshare_key_value');
  }
  public set preshareKeyValue(value: string) {
    this._preshareKeyValue = value;
  }
  public resetPreshareKeyValue() {
    this._preshareKeyValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preshareKeyValueInput() {
    return this._preshareKeyValue;
  }

  // remote_id - computed: false, optional: true, required: false
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

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // dhcp_server - computed: false, optional: true, required: false
  private _dhcpServer = new VpnIkeGatewayDhcpServerOutputReference(this, "dhcp_server");
  public get dhcpServer() {
    return this._dhcpServer;
  }
  public putDhcpServer(value: VpnIkeGatewayDhcpServer) {
    this._dhcpServer.internalValue = value;
  }
  public resetDhcpServer() {
    this._dhcpServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServerInput() {
    return this._dhcpServer.internalValue;
  }

  // dpd - computed: false, optional: true, required: false
  private _dpd = new VpnIkeGatewayDpdOutputReference(this, "dpd");
  public get dpd() {
    return this._dpd;
  }
  public putDpd(value: VpnIkeGatewayDpd) {
    this._dpd.internalValue = value;
  }
  public resetDpd() {
    this._dpd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdInput() {
    return this._dpd.internalValue;
  }

  // enc_cfg - computed: false, optional: true, required: false
  private _encCfg = new VpnIkeGatewayEncCfgList(this, "enc_cfg", false);
  public get encCfg() {
    return this._encCfg;
  }
  public putEncCfg(value: VpnIkeGatewayEncCfg[] | cdktf.IResolvable) {
    this._encCfg.internalValue = value;
  }
  public resetEncCfg() {
    this._encCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encCfgInput() {
    return this._encCfg.internalValue;
  }

  // local_address - computed: false, optional: true, required: false
  private _localAddress = new VpnIkeGatewayLocalAddressOutputReference(this, "local_address");
  public get localAddress() {
    return this._localAddress;
  }
  public putLocalAddress(value: VpnIkeGatewayLocalAddress) {
    this._localAddress.internalValue = value;
  }
  public resetLocalAddress() {
    this._localAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAddressInput() {
    return this._localAddress.internalValue;
  }

  // local_cert - computed: false, optional: true, required: false
  private _localCert = new VpnIkeGatewayLocalCertOutputReference(this, "local_cert");
  public get localCert() {
    return this._localCert;
  }
  public putLocalCert(value: VpnIkeGatewayLocalCert) {
    this._localCert.internalValue = value;
  }
  public resetLocalCert() {
    this._localCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localCertInput() {
    return this._localCert.internalValue;
  }

  // radius_server - computed: false, optional: true, required: false
  private _radiusServer = new VpnIkeGatewayRadiusServerOutputReference(this, "radius_server");
  public get radiusServer() {
    return this._radiusServer;
  }
  public putRadiusServer(value: VpnIkeGatewayRadiusServer) {
    this._radiusServer.internalValue = value;
  }
  public resetRadiusServer() {
    this._radiusServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusServerInput() {
    return this._radiusServer.internalValue;
  }

  // remote_address - computed: false, optional: true, required: false
  private _remoteAddress = new VpnIkeGatewayRemoteAddressOutputReference(this, "remote_address");
  public get remoteAddress() {
    return this._remoteAddress;
  }
  public putRemoteAddress(value: VpnIkeGatewayRemoteAddress) {
    this._remoteAddress.internalValue = value;
  }
  public resetRemoteAddress() {
    this._remoteAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAddressInput() {
    return this._remoteAddress.internalValue;
  }

  // remote_ca_cert - computed: false, optional: true, required: false
  private _remoteCaCert = new VpnIkeGatewayRemoteCaCertOutputReference(this, "remote_ca_cert");
  public get remoteCaCert() {
    return this._remoteCaCert;
  }
  public putRemoteCaCert(value: VpnIkeGatewayRemoteCaCert) {
    this._remoteCaCert.internalValue = value;
  }
  public resetRemoteCaCert() {
    this._remoteCaCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteCaCertInput() {
    return this._remoteCaCert.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new VpnIkeGatewaySamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: VpnIkeGatewaySamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // vrid - computed: false, optional: true, required: false
  private _vrid = new VpnIkeGatewayVridOutputReference(this, "vrid");
  public get vrid() {
    return this._vrid;
  }
  public putVrid(value: VpnIkeGatewayVrid) {
    this._vrid.internalValue = value;
  }
  public resetVrid() {
    this._vrid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_method: cdktf.stringToTerraform(this._authMethod),
      configuration_payload: cdktf.stringToTerraform(this._configurationPayload),
      dh_group: cdktf.stringToTerraform(this._dhGroup),
      disable_rekey: cdktf.numberToTerraform(this._disableRekey),
      fragment_size: cdktf.numberToTerraform(this._fragmentSize),
      hash: cdktf.stringToTerraform(this._hash),
      id: cdktf.stringToTerraform(this._id),
      ike_version: cdktf.stringToTerraform(this._ikeVersion),
      interface_management: cdktf.numberToTerraform(this._interfaceManagement),
      key: cdktf.stringToTerraform(this._key),
      key_passphrase: cdktf.stringToTerraform(this._keyPassphrase),
      lifetime: cdktf.numberToTerraform(this._lifetime),
      local_id: cdktf.stringToTerraform(this._localId),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      nat_traversal: cdktf.numberToTerraform(this._natTraversal),
      preshare_key_value: cdktf.stringToTerraform(this._preshareKeyValue),
      remote_id: cdktf.stringToTerraform(this._remoteId),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      dhcp_server: vpnIkeGatewayDhcpServerToTerraform(this._dhcpServer.internalValue),
      dpd: vpnIkeGatewayDpdToTerraform(this._dpd.internalValue),
      enc_cfg: cdktf.listMapper(vpnIkeGatewayEncCfgToTerraform, true)(this._encCfg.internalValue),
      local_address: vpnIkeGatewayLocalAddressToTerraform(this._localAddress.internalValue),
      local_cert: vpnIkeGatewayLocalCertToTerraform(this._localCert.internalValue),
      radius_server: vpnIkeGatewayRadiusServerToTerraform(this._radiusServer.internalValue),
      remote_address: vpnIkeGatewayRemoteAddressToTerraform(this._remoteAddress.internalValue),
      remote_ca_cert: vpnIkeGatewayRemoteCaCertToTerraform(this._remoteCaCert.internalValue),
      sampling_enable: cdktf.listMapper(vpnIkeGatewaySamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
      vrid: vpnIkeGatewayVridToTerraform(this._vrid.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_method: {
        value: cdktf.stringToHclTerraform(this._authMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration_payload: {
        value: cdktf.stringToHclTerraform(this._configurationPayload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dh_group: {
        value: cdktf.stringToHclTerraform(this._dhGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_rekey: {
        value: cdktf.numberToHclTerraform(this._disableRekey),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fragment_size: {
        value: cdktf.numberToHclTerraform(this._fragmentSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hash: {
        value: cdktf.stringToHclTerraform(this._hash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_version: {
        value: cdktf.stringToHclTerraform(this._ikeVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_management: {
        value: cdktf.numberToHclTerraform(this._interfaceManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_passphrase: {
        value: cdktf.stringToHclTerraform(this._keyPassphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lifetime: {
        value: cdktf.numberToHclTerraform(this._lifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      local_id: {
        value: cdktf.stringToHclTerraform(this._localId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      nat_traversal: {
        value: cdktf.numberToHclTerraform(this._natTraversal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      preshare_key_value: {
        value: cdktf.stringToHclTerraform(this._preshareKeyValue),
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
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_server: {
        value: vpnIkeGatewayDhcpServerToHclTerraform(this._dhcpServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnIkeGatewayDhcpServerList",
      },
      dpd: {
        value: vpnIkeGatewayDpdToHclTerraform(this._dpd.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnIkeGatewayDpdList",
      },
      enc_cfg: {
        value: cdktf.listMapperHcl(vpnIkeGatewayEncCfgToHclTerraform, true)(this._encCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnIkeGatewayEncCfgList",
      },
      local_address: {
        value: vpnIkeGatewayLocalAddressToHclTerraform(this._localAddress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnIkeGatewayLocalAddressList",
      },
      local_cert: {
        value: vpnIkeGatewayLocalCertToHclTerraform(this._localCert.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnIkeGatewayLocalCertList",
      },
      radius_server: {
        value: vpnIkeGatewayRadiusServerToHclTerraform(this._radiusServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnIkeGatewayRadiusServerList",
      },
      remote_address: {
        value: vpnIkeGatewayRemoteAddressToHclTerraform(this._remoteAddress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnIkeGatewayRemoteAddressList",
      },
      remote_ca_cert: {
        value: vpnIkeGatewayRemoteCaCertToHclTerraform(this._remoteCaCert.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnIkeGatewayRemoteCaCertList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(vpnIkeGatewaySamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnIkeGatewaySamplingEnableList",
      },
      vrid: {
        value: vpnIkeGatewayVridToHclTerraform(this._vrid.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnIkeGatewayVridList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
