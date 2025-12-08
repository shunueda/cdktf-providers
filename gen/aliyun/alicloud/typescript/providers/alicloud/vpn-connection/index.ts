// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#auto_config_route VpnConnection#auto_config_route}
  */
  readonly autoConfigRoute?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#customer_gateway_id VpnConnection#customer_gateway_id}
  */
  readonly customerGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#effect_immediately VpnConnection#effect_immediately}
  */
  readonly effectImmediately?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#enable_dpd VpnConnection#enable_dpd}
  */
  readonly enableDpd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#enable_nat_traversal VpnConnection#enable_nat_traversal}
  */
  readonly enableNatTraversal?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#enable_tunnels_bgp VpnConnection#enable_tunnels_bgp}
  */
  readonly enableTunnelsBgp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#id VpnConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#local_subnet VpnConnection#local_subnet}
  */
  readonly localSubnet: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#name VpnConnection#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#network_type VpnConnection#network_type}
  */
  readonly networkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#remote_subnet VpnConnection#remote_subnet}
  */
  readonly remoteSubnet: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#tags VpnConnection#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#vpn_connection_name VpnConnection#vpn_connection_name}
  */
  readonly vpnConnectionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#vpn_gateway_id VpnConnection#vpn_gateway_id}
  */
  readonly vpnGatewayId: string;
  /**
  * bgp_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#bgp_config VpnConnection#bgp_config}
  */
  readonly bgpConfig?: VpnConnectionBgpConfig;
  /**
  * health_check_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#health_check_config VpnConnection#health_check_config}
  */
  readonly healthCheckConfig?: VpnConnectionHealthCheckConfig;
  /**
  * ike_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#ike_config VpnConnection#ike_config}
  */
  readonly ikeConfig?: VpnConnectionIkeConfig;
  /**
  * ipsec_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#ipsec_config VpnConnection#ipsec_config}
  */
  readonly ipsecConfig?: VpnConnectionIpsecConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#timeouts VpnConnection#timeouts}
  */
  readonly timeouts?: VpnConnectionTimeouts;
  /**
  * tunnel_options_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#tunnel_options_specification VpnConnection#tunnel_options_specification}
  */
  readonly tunnelOptionsSpecification?: VpnConnectionTunnelOptionsSpecification[] | cdktf.IResolvable;
}
export interface VpnConnectionBgpConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#enable VpnConnection#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#local_asn VpnConnection#local_asn}
  */
  readonly localAsn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#local_bgp_ip VpnConnection#local_bgp_ip}
  */
  readonly localBgpIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#tunnel_cidr VpnConnection#tunnel_cidr}
  */
  readonly tunnelCidr?: string;
}

export function vpnConnectionBgpConfigToTerraform(struct?: VpnConnectionBgpConfigOutputReference | VpnConnectionBgpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    local_asn: cdktf.stringToTerraform(struct!.localAsn),
    local_bgp_ip: cdktf.stringToTerraform(struct!.localBgpIp),
    tunnel_cidr: cdktf.stringToTerraform(struct!.tunnelCidr),
  }
}


export function vpnConnectionBgpConfigToHclTerraform(struct?: VpnConnectionBgpConfigOutputReference | VpnConnectionBgpConfig): any {
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
    local_asn: {
      value: cdktf.stringToHclTerraform(struct!.localAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_bgp_ip: {
      value: cdktf.stringToHclTerraform(struct!.localBgpIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_cidr: {
      value: cdktf.stringToHclTerraform(struct!.tunnelCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnConnectionBgpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnConnectionBgpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._localAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAsn = this._localAsn;
    }
    if (this._localBgpIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.localBgpIp = this._localBgpIp;
    }
    if (this._tunnelCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelCidr = this._tunnelCidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnConnectionBgpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._localAsn = undefined;
      this._localBgpIp = undefined;
      this._tunnelCidr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._localAsn = value.localAsn;
      this._localBgpIp = value.localBgpIp;
      this._tunnelCidr = value.tunnelCidr;
    }
  }

  // enable - computed: true, optional: true, required: false
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

  // local_asn - computed: true, optional: true, required: false
  private _localAsn?: string; 
  public get localAsn() {
    return this.getStringAttribute('local_asn');
  }
  public set localAsn(value: string) {
    this._localAsn = value;
  }
  public resetLocalAsn() {
    this._localAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsnInput() {
    return this._localAsn;
  }

  // local_bgp_ip - computed: true, optional: true, required: false
  private _localBgpIp?: string; 
  public get localBgpIp() {
    return this.getStringAttribute('local_bgp_ip');
  }
  public set localBgpIp(value: string) {
    this._localBgpIp = value;
  }
  public resetLocalBgpIp() {
    this._localBgpIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localBgpIpInput() {
    return this._localBgpIp;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tunnel_cidr - computed: true, optional: true, required: false
  private _tunnelCidr?: string; 
  public get tunnelCidr() {
    return this.getStringAttribute('tunnel_cidr');
  }
  public set tunnelCidr(value: string) {
    this._tunnelCidr = value;
  }
  public resetTunnelCidr() {
    this._tunnelCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelCidrInput() {
    return this._tunnelCidr;
  }
}
export interface VpnConnectionHealthCheckConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#dip VpnConnection#dip}
  */
  readonly dip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#enable VpnConnection#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#interval VpnConnection#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#retry VpnConnection#retry}
  */
  readonly retry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#sip VpnConnection#sip}
  */
  readonly sip?: string;
}

export function vpnConnectionHealthCheckConfigToTerraform(struct?: VpnConnectionHealthCheckConfigOutputReference | VpnConnectionHealthCheckConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dip: cdktf.stringToTerraform(struct!.dip),
    enable: cdktf.booleanToTerraform(struct!.enable),
    interval: cdktf.numberToTerraform(struct!.interval),
    retry: cdktf.numberToTerraform(struct!.retry),
    sip: cdktf.stringToTerraform(struct!.sip),
  }
}


export function vpnConnectionHealthCheckConfigToHclTerraform(struct?: VpnConnectionHealthCheckConfigOutputReference | VpnConnectionHealthCheckConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dip: {
      value: cdktf.stringToHclTerraform(struct!.dip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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
    sip: {
      value: cdktf.stringToHclTerraform(struct!.sip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnConnectionHealthCheckConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnConnectionHealthCheckConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dip !== undefined) {
      hasAnyValues = true;
      internalValueResult.dip = this._dip;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._retry !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry;
    }
    if (this._sip !== undefined) {
      hasAnyValues = true;
      internalValueResult.sip = this._sip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnConnectionHealthCheckConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dip = undefined;
      this._enable = undefined;
      this._interval = undefined;
      this._retry = undefined;
      this._sip = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dip = value.dip;
      this._enable = value.enable;
      this._interval = value.interval;
      this._retry = value.retry;
      this._sip = value.sip;
    }
  }

  // dip - computed: true, optional: true, required: false
  private _dip?: string; 
  public get dip() {
    return this.getStringAttribute('dip');
  }
  public set dip(value: string) {
    this._dip = value;
  }
  public resetDip() {
    this._dip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dipInput() {
    return this._dip;
  }

  // enable - computed: true, optional: true, required: false
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

  // interval - computed: true, optional: true, required: false
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

  // retry - computed: true, optional: true, required: false
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

  // sip - computed: true, optional: true, required: false
  private _sip?: string; 
  public get sip() {
    return this.getStringAttribute('sip');
  }
  public set sip(value: string) {
    this._sip = value;
  }
  public resetSip() {
    this._sip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipInput() {
    return this._sip;
  }
}
export interface VpnConnectionIkeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#ike_auth_alg VpnConnection#ike_auth_alg}
  */
  readonly ikeAuthAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#ike_enc_alg VpnConnection#ike_enc_alg}
  */
  readonly ikeEncAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#ike_lifetime VpnConnection#ike_lifetime}
  */
  readonly ikeLifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#ike_local_id VpnConnection#ike_local_id}
  */
  readonly ikeLocalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#ike_mode VpnConnection#ike_mode}
  */
  readonly ikeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#ike_pfs VpnConnection#ike_pfs}
  */
  readonly ikePfs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#ike_remote_id VpnConnection#ike_remote_id}
  */
  readonly ikeRemoteId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#ike_version VpnConnection#ike_version}
  */
  readonly ikeVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#psk VpnConnection#psk}
  */
  readonly psk?: string;
}

export function vpnConnectionIkeConfigToTerraform(struct?: VpnConnectionIkeConfigOutputReference | VpnConnectionIkeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ike_auth_alg: cdktf.stringToTerraform(struct!.ikeAuthAlg),
    ike_enc_alg: cdktf.stringToTerraform(struct!.ikeEncAlg),
    ike_lifetime: cdktf.numberToTerraform(struct!.ikeLifetime),
    ike_local_id: cdktf.stringToTerraform(struct!.ikeLocalId),
    ike_mode: cdktf.stringToTerraform(struct!.ikeMode),
    ike_pfs: cdktf.stringToTerraform(struct!.ikePfs),
    ike_remote_id: cdktf.stringToTerraform(struct!.ikeRemoteId),
    ike_version: cdktf.stringToTerraform(struct!.ikeVersion),
    psk: cdktf.stringToTerraform(struct!.psk),
  }
}


export function vpnConnectionIkeConfigToHclTerraform(struct?: VpnConnectionIkeConfigOutputReference | VpnConnectionIkeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ike_auth_alg: {
      value: cdktf.stringToHclTerraform(struct!.ikeAuthAlg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_enc_alg: {
      value: cdktf.stringToHclTerraform(struct!.ikeEncAlg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.ikeLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ike_local_id: {
      value: cdktf.stringToHclTerraform(struct!.ikeLocalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_mode: {
      value: cdktf.stringToHclTerraform(struct!.ikeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_pfs: {
      value: cdktf.stringToHclTerraform(struct!.ikePfs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_remote_id: {
      value: cdktf.stringToHclTerraform(struct!.ikeRemoteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_version: {
      value: cdktf.stringToHclTerraform(struct!.ikeVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    psk: {
      value: cdktf.stringToHclTerraform(struct!.psk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnConnectionIkeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnConnectionIkeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ikeAuthAlg !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeAuthAlg = this._ikeAuthAlg;
    }
    if (this._ikeEncAlg !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeEncAlg = this._ikeEncAlg;
    }
    if (this._ikeLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeLifetime = this._ikeLifetime;
    }
    if (this._ikeLocalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeLocalId = this._ikeLocalId;
    }
    if (this._ikeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeMode = this._ikeMode;
    }
    if (this._ikePfs !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikePfs = this._ikePfs;
    }
    if (this._ikeRemoteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeRemoteId = this._ikeRemoteId;
    }
    if (this._ikeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeVersion = this._ikeVersion;
    }
    if (this._psk !== undefined) {
      hasAnyValues = true;
      internalValueResult.psk = this._psk;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnConnectionIkeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ikeAuthAlg = undefined;
      this._ikeEncAlg = undefined;
      this._ikeLifetime = undefined;
      this._ikeLocalId = undefined;
      this._ikeMode = undefined;
      this._ikePfs = undefined;
      this._ikeRemoteId = undefined;
      this._ikeVersion = undefined;
      this._psk = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ikeAuthAlg = value.ikeAuthAlg;
      this._ikeEncAlg = value.ikeEncAlg;
      this._ikeLifetime = value.ikeLifetime;
      this._ikeLocalId = value.ikeLocalId;
      this._ikeMode = value.ikeMode;
      this._ikePfs = value.ikePfs;
      this._ikeRemoteId = value.ikeRemoteId;
      this._ikeVersion = value.ikeVersion;
      this._psk = value.psk;
    }
  }

  // ike_auth_alg - computed: true, optional: true, required: false
  private _ikeAuthAlg?: string; 
  public get ikeAuthAlg() {
    return this.getStringAttribute('ike_auth_alg');
  }
  public set ikeAuthAlg(value: string) {
    this._ikeAuthAlg = value;
  }
  public resetIkeAuthAlg() {
    this._ikeAuthAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeAuthAlgInput() {
    return this._ikeAuthAlg;
  }

  // ike_enc_alg - computed: true, optional: true, required: false
  private _ikeEncAlg?: string; 
  public get ikeEncAlg() {
    return this.getStringAttribute('ike_enc_alg');
  }
  public set ikeEncAlg(value: string) {
    this._ikeEncAlg = value;
  }
  public resetIkeEncAlg() {
    this._ikeEncAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeEncAlgInput() {
    return this._ikeEncAlg;
  }

  // ike_lifetime - computed: true, optional: true, required: false
  private _ikeLifetime?: number; 
  public get ikeLifetime() {
    return this.getNumberAttribute('ike_lifetime');
  }
  public set ikeLifetime(value: number) {
    this._ikeLifetime = value;
  }
  public resetIkeLifetime() {
    this._ikeLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeLifetimeInput() {
    return this._ikeLifetime;
  }

  // ike_local_id - computed: true, optional: true, required: false
  private _ikeLocalId?: string; 
  public get ikeLocalId() {
    return this.getStringAttribute('ike_local_id');
  }
  public set ikeLocalId(value: string) {
    this._ikeLocalId = value;
  }
  public resetIkeLocalId() {
    this._ikeLocalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeLocalIdInput() {
    return this._ikeLocalId;
  }

  // ike_mode - computed: true, optional: true, required: false
  private _ikeMode?: string; 
  public get ikeMode() {
    return this.getStringAttribute('ike_mode');
  }
  public set ikeMode(value: string) {
    this._ikeMode = value;
  }
  public resetIkeMode() {
    this._ikeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeModeInput() {
    return this._ikeMode;
  }

  // ike_pfs - computed: true, optional: true, required: false
  private _ikePfs?: string; 
  public get ikePfs() {
    return this.getStringAttribute('ike_pfs');
  }
  public set ikePfs(value: string) {
    this._ikePfs = value;
  }
  public resetIkePfs() {
    this._ikePfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikePfsInput() {
    return this._ikePfs;
  }

  // ike_remote_id - computed: true, optional: true, required: false
  private _ikeRemoteId?: string; 
  public get ikeRemoteId() {
    return this.getStringAttribute('ike_remote_id');
  }
  public set ikeRemoteId(value: string) {
    this._ikeRemoteId = value;
  }
  public resetIkeRemoteId() {
    this._ikeRemoteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeRemoteIdInput() {
    return this._ikeRemoteId;
  }

  // ike_version - computed: true, optional: true, required: false
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

  // psk - computed: true, optional: true, required: false
  private _psk?: string; 
  public get psk() {
    return this.getStringAttribute('psk');
  }
  public set psk(value: string) {
    this._psk = value;
  }
  public resetPsk() {
    this._psk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pskInput() {
    return this._psk;
  }
}
export interface VpnConnectionIpsecConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#ipsec_auth_alg VpnConnection#ipsec_auth_alg}
  */
  readonly ipsecAuthAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#ipsec_enc_alg VpnConnection#ipsec_enc_alg}
  */
  readonly ipsecEncAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#ipsec_lifetime VpnConnection#ipsec_lifetime}
  */
  readonly ipsecLifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#ipsec_pfs VpnConnection#ipsec_pfs}
  */
  readonly ipsecPfs?: string;
}

export function vpnConnectionIpsecConfigToTerraform(struct?: VpnConnectionIpsecConfigOutputReference | VpnConnectionIpsecConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipsec_auth_alg: cdktf.stringToTerraform(struct!.ipsecAuthAlg),
    ipsec_enc_alg: cdktf.stringToTerraform(struct!.ipsecEncAlg),
    ipsec_lifetime: cdktf.numberToTerraform(struct!.ipsecLifetime),
    ipsec_pfs: cdktf.stringToTerraform(struct!.ipsecPfs),
  }
}


export function vpnConnectionIpsecConfigToHclTerraform(struct?: VpnConnectionIpsecConfigOutputReference | VpnConnectionIpsecConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipsec_auth_alg: {
      value: cdktf.stringToHclTerraform(struct!.ipsecAuthAlg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_enc_alg: {
      value: cdktf.stringToHclTerraform(struct!.ipsecEncAlg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.ipsecLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec_pfs: {
      value: cdktf.stringToHclTerraform(struct!.ipsecPfs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnConnectionIpsecConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnConnectionIpsecConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipsecAuthAlg !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecAuthAlg = this._ipsecAuthAlg;
    }
    if (this._ipsecEncAlg !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecEncAlg = this._ipsecEncAlg;
    }
    if (this._ipsecLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecLifetime = this._ipsecLifetime;
    }
    if (this._ipsecPfs !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecPfs = this._ipsecPfs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnConnectionIpsecConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipsecAuthAlg = undefined;
      this._ipsecEncAlg = undefined;
      this._ipsecLifetime = undefined;
      this._ipsecPfs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipsecAuthAlg = value.ipsecAuthAlg;
      this._ipsecEncAlg = value.ipsecEncAlg;
      this._ipsecLifetime = value.ipsecLifetime;
      this._ipsecPfs = value.ipsecPfs;
    }
  }

  // ipsec_auth_alg - computed: true, optional: true, required: false
  private _ipsecAuthAlg?: string; 
  public get ipsecAuthAlg() {
    return this.getStringAttribute('ipsec_auth_alg');
  }
  public set ipsecAuthAlg(value: string) {
    this._ipsecAuthAlg = value;
  }
  public resetIpsecAuthAlg() {
    this._ipsecAuthAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecAuthAlgInput() {
    return this._ipsecAuthAlg;
  }

  // ipsec_enc_alg - computed: true, optional: true, required: false
  private _ipsecEncAlg?: string; 
  public get ipsecEncAlg() {
    return this.getStringAttribute('ipsec_enc_alg');
  }
  public set ipsecEncAlg(value: string) {
    this._ipsecEncAlg = value;
  }
  public resetIpsecEncAlg() {
    this._ipsecEncAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecEncAlgInput() {
    return this._ipsecEncAlg;
  }

  // ipsec_lifetime - computed: true, optional: true, required: false
  private _ipsecLifetime?: number; 
  public get ipsecLifetime() {
    return this.getNumberAttribute('ipsec_lifetime');
  }
  public set ipsecLifetime(value: number) {
    this._ipsecLifetime = value;
  }
  public resetIpsecLifetime() {
    this._ipsecLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecLifetimeInput() {
    return this._ipsecLifetime;
  }

  // ipsec_pfs - computed: true, optional: true, required: false
  private _ipsecPfs?: string; 
  public get ipsecPfs() {
    return this.getStringAttribute('ipsec_pfs');
  }
  public set ipsecPfs(value: string) {
    this._ipsecPfs = value;
  }
  public resetIpsecPfs() {
    this._ipsecPfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPfsInput() {
    return this._ipsecPfs;
  }
}
export interface VpnConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#create VpnConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#delete VpnConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#update VpnConnection#update}
  */
  readonly update?: string;
}

export function vpnConnectionTimeoutsToTerraform(struct?: VpnConnectionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function vpnConnectionTimeoutsToHclTerraform(struct?: VpnConnectionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpnConnectionTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnConnectionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface VpnConnectionTunnelOptionsSpecificationTunnelBgpConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#local_asn VpnConnection#local_asn}
  */
  readonly localAsn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#local_bgp_ip VpnConnection#local_bgp_ip}
  */
  readonly localBgpIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#tunnel_cidr VpnConnection#tunnel_cidr}
  */
  readonly tunnelCidr?: string;
}

export function vpnConnectionTunnelOptionsSpecificationTunnelBgpConfigToTerraform(struct?: VpnConnectionTunnelOptionsSpecificationTunnelBgpConfigOutputReference | VpnConnectionTunnelOptionsSpecificationTunnelBgpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_asn: cdktf.stringToTerraform(struct!.localAsn),
    local_bgp_ip: cdktf.stringToTerraform(struct!.localBgpIp),
    tunnel_cidr: cdktf.stringToTerraform(struct!.tunnelCidr),
  }
}


export function vpnConnectionTunnelOptionsSpecificationTunnelBgpConfigToHclTerraform(struct?: VpnConnectionTunnelOptionsSpecificationTunnelBgpConfigOutputReference | VpnConnectionTunnelOptionsSpecificationTunnelBgpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_asn: {
      value: cdktf.stringToHclTerraform(struct!.localAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_bgp_ip: {
      value: cdktf.stringToHclTerraform(struct!.localBgpIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_cidr: {
      value: cdktf.stringToHclTerraform(struct!.tunnelCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnConnectionTunnelOptionsSpecificationTunnelBgpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnConnectionTunnelOptionsSpecificationTunnelBgpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAsn = this._localAsn;
    }
    if (this._localBgpIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.localBgpIp = this._localBgpIp;
    }
    if (this._tunnelCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelCidr = this._tunnelCidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnConnectionTunnelOptionsSpecificationTunnelBgpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localAsn = undefined;
      this._localBgpIp = undefined;
      this._tunnelCidr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localAsn = value.localAsn;
      this._localBgpIp = value.localBgpIp;
      this._tunnelCidr = value.tunnelCidr;
    }
  }

  // bgp_status - computed: true, optional: false, required: false
  public get bgpStatus() {
    return this.getStringAttribute('bgp_status');
  }

  // local_asn - computed: false, optional: true, required: false
  private _localAsn?: string; 
  public get localAsn() {
    return this.getStringAttribute('local_asn');
  }
  public set localAsn(value: string) {
    this._localAsn = value;
  }
  public resetLocalAsn() {
    this._localAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsnInput() {
    return this._localAsn;
  }

  // local_bgp_ip - computed: false, optional: true, required: false
  private _localBgpIp?: string; 
  public get localBgpIp() {
    return this.getStringAttribute('local_bgp_ip');
  }
  public set localBgpIp(value: string) {
    this._localBgpIp = value;
  }
  public resetLocalBgpIp() {
    this._localBgpIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localBgpIpInput() {
    return this._localBgpIp;
  }

  // peer_asn - computed: true, optional: false, required: false
  public get peerAsn() {
    return this.getStringAttribute('peer_asn');
  }

  // peer_bgp_ip - computed: true, optional: false, required: false
  public get peerBgpIp() {
    return this.getStringAttribute('peer_bgp_ip');
  }

  // tunnel_cidr - computed: false, optional: true, required: false
  private _tunnelCidr?: string; 
  public get tunnelCidr() {
    return this.getStringAttribute('tunnel_cidr');
  }
  public set tunnelCidr(value: string) {
    this._tunnelCidr = value;
  }
  public resetTunnelCidr() {
    this._tunnelCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelCidrInput() {
    return this._tunnelCidr;
  }
}
export interface VpnConnectionTunnelOptionsSpecificationTunnelIkeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#ike_auth_alg VpnConnection#ike_auth_alg}
  */
  readonly ikeAuthAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#ike_enc_alg VpnConnection#ike_enc_alg}
  */
  readonly ikeEncAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#ike_lifetime VpnConnection#ike_lifetime}
  */
  readonly ikeLifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#ike_mode VpnConnection#ike_mode}
  */
  readonly ikeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#ike_pfs VpnConnection#ike_pfs}
  */
  readonly ikePfs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#ike_version VpnConnection#ike_version}
  */
  readonly ikeVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#local_id VpnConnection#local_id}
  */
  readonly localId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#psk VpnConnection#psk}
  */
  readonly psk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#remote_id VpnConnection#remote_id}
  */
  readonly remoteId?: string;
}

export function vpnConnectionTunnelOptionsSpecificationTunnelIkeConfigToTerraform(struct?: VpnConnectionTunnelOptionsSpecificationTunnelIkeConfigOutputReference | VpnConnectionTunnelOptionsSpecificationTunnelIkeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ike_auth_alg: cdktf.stringToTerraform(struct!.ikeAuthAlg),
    ike_enc_alg: cdktf.stringToTerraform(struct!.ikeEncAlg),
    ike_lifetime: cdktf.numberToTerraform(struct!.ikeLifetime),
    ike_mode: cdktf.stringToTerraform(struct!.ikeMode),
    ike_pfs: cdktf.stringToTerraform(struct!.ikePfs),
    ike_version: cdktf.stringToTerraform(struct!.ikeVersion),
    local_id: cdktf.stringToTerraform(struct!.localId),
    psk: cdktf.stringToTerraform(struct!.psk),
    remote_id: cdktf.stringToTerraform(struct!.remoteId),
  }
}


export function vpnConnectionTunnelOptionsSpecificationTunnelIkeConfigToHclTerraform(struct?: VpnConnectionTunnelOptionsSpecificationTunnelIkeConfigOutputReference | VpnConnectionTunnelOptionsSpecificationTunnelIkeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ike_auth_alg: {
      value: cdktf.stringToHclTerraform(struct!.ikeAuthAlg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_enc_alg: {
      value: cdktf.stringToHclTerraform(struct!.ikeEncAlg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.ikeLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ike_mode: {
      value: cdktf.stringToHclTerraform(struct!.ikeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_pfs: {
      value: cdktf.stringToHclTerraform(struct!.ikePfs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_version: {
      value: cdktf.stringToHclTerraform(struct!.ikeVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_id: {
      value: cdktf.stringToHclTerraform(struct!.localId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    psk: {
      value: cdktf.stringToHclTerraform(struct!.psk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_id: {
      value: cdktf.stringToHclTerraform(struct!.remoteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnConnectionTunnelOptionsSpecificationTunnelIkeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnConnectionTunnelOptionsSpecificationTunnelIkeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ikeAuthAlg !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeAuthAlg = this._ikeAuthAlg;
    }
    if (this._ikeEncAlg !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeEncAlg = this._ikeEncAlg;
    }
    if (this._ikeLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeLifetime = this._ikeLifetime;
    }
    if (this._ikeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeMode = this._ikeMode;
    }
    if (this._ikePfs !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikePfs = this._ikePfs;
    }
    if (this._ikeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeVersion = this._ikeVersion;
    }
    if (this._localId !== undefined) {
      hasAnyValues = true;
      internalValueResult.localId = this._localId;
    }
    if (this._psk !== undefined) {
      hasAnyValues = true;
      internalValueResult.psk = this._psk;
    }
    if (this._remoteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteId = this._remoteId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnConnectionTunnelOptionsSpecificationTunnelIkeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ikeAuthAlg = undefined;
      this._ikeEncAlg = undefined;
      this._ikeLifetime = undefined;
      this._ikeMode = undefined;
      this._ikePfs = undefined;
      this._ikeVersion = undefined;
      this._localId = undefined;
      this._psk = undefined;
      this._remoteId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ikeAuthAlg = value.ikeAuthAlg;
      this._ikeEncAlg = value.ikeEncAlg;
      this._ikeLifetime = value.ikeLifetime;
      this._ikeMode = value.ikeMode;
      this._ikePfs = value.ikePfs;
      this._ikeVersion = value.ikeVersion;
      this._localId = value.localId;
      this._psk = value.psk;
      this._remoteId = value.remoteId;
    }
  }

  // ike_auth_alg - computed: false, optional: true, required: false
  private _ikeAuthAlg?: string; 
  public get ikeAuthAlg() {
    return this.getStringAttribute('ike_auth_alg');
  }
  public set ikeAuthAlg(value: string) {
    this._ikeAuthAlg = value;
  }
  public resetIkeAuthAlg() {
    this._ikeAuthAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeAuthAlgInput() {
    return this._ikeAuthAlg;
  }

  // ike_enc_alg - computed: false, optional: true, required: false
  private _ikeEncAlg?: string; 
  public get ikeEncAlg() {
    return this.getStringAttribute('ike_enc_alg');
  }
  public set ikeEncAlg(value: string) {
    this._ikeEncAlg = value;
  }
  public resetIkeEncAlg() {
    this._ikeEncAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeEncAlgInput() {
    return this._ikeEncAlg;
  }

  // ike_lifetime - computed: false, optional: true, required: false
  private _ikeLifetime?: number; 
  public get ikeLifetime() {
    return this.getNumberAttribute('ike_lifetime');
  }
  public set ikeLifetime(value: number) {
    this._ikeLifetime = value;
  }
  public resetIkeLifetime() {
    this._ikeLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeLifetimeInput() {
    return this._ikeLifetime;
  }

  // ike_mode - computed: false, optional: true, required: false
  private _ikeMode?: string; 
  public get ikeMode() {
    return this.getStringAttribute('ike_mode');
  }
  public set ikeMode(value: string) {
    this._ikeMode = value;
  }
  public resetIkeMode() {
    this._ikeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeModeInput() {
    return this._ikeMode;
  }

  // ike_pfs - computed: false, optional: true, required: false
  private _ikePfs?: string; 
  public get ikePfs() {
    return this.getStringAttribute('ike_pfs');
  }
  public set ikePfs(value: string) {
    this._ikePfs = value;
  }
  public resetIkePfs() {
    this._ikePfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikePfsInput() {
    return this._ikePfs;
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

  // local_id - computed: true, optional: true, required: false
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

  // psk - computed: false, optional: true, required: false
  private _psk?: string; 
  public get psk() {
    return this.getStringAttribute('psk');
  }
  public set psk(value: string) {
    this._psk = value;
  }
  public resetPsk() {
    this._psk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pskInput() {
    return this._psk;
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
}
export interface VpnConnectionTunnelOptionsSpecificationTunnelIpsecConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#ipsec_auth_alg VpnConnection#ipsec_auth_alg}
  */
  readonly ipsecAuthAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#ipsec_enc_alg VpnConnection#ipsec_enc_alg}
  */
  readonly ipsecEncAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#ipsec_lifetime VpnConnection#ipsec_lifetime}
  */
  readonly ipsecLifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#ipsec_pfs VpnConnection#ipsec_pfs}
  */
  readonly ipsecPfs?: string;
}

export function vpnConnectionTunnelOptionsSpecificationTunnelIpsecConfigToTerraform(struct?: VpnConnectionTunnelOptionsSpecificationTunnelIpsecConfigOutputReference | VpnConnectionTunnelOptionsSpecificationTunnelIpsecConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipsec_auth_alg: cdktf.stringToTerraform(struct!.ipsecAuthAlg),
    ipsec_enc_alg: cdktf.stringToTerraform(struct!.ipsecEncAlg),
    ipsec_lifetime: cdktf.numberToTerraform(struct!.ipsecLifetime),
    ipsec_pfs: cdktf.stringToTerraform(struct!.ipsecPfs),
  }
}


export function vpnConnectionTunnelOptionsSpecificationTunnelIpsecConfigToHclTerraform(struct?: VpnConnectionTunnelOptionsSpecificationTunnelIpsecConfigOutputReference | VpnConnectionTunnelOptionsSpecificationTunnelIpsecConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipsec_auth_alg: {
      value: cdktf.stringToHclTerraform(struct!.ipsecAuthAlg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_enc_alg: {
      value: cdktf.stringToHclTerraform(struct!.ipsecEncAlg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.ipsecLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec_pfs: {
      value: cdktf.stringToHclTerraform(struct!.ipsecPfs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnConnectionTunnelOptionsSpecificationTunnelIpsecConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnConnectionTunnelOptionsSpecificationTunnelIpsecConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipsecAuthAlg !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecAuthAlg = this._ipsecAuthAlg;
    }
    if (this._ipsecEncAlg !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecEncAlg = this._ipsecEncAlg;
    }
    if (this._ipsecLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecLifetime = this._ipsecLifetime;
    }
    if (this._ipsecPfs !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecPfs = this._ipsecPfs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnConnectionTunnelOptionsSpecificationTunnelIpsecConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipsecAuthAlg = undefined;
      this._ipsecEncAlg = undefined;
      this._ipsecLifetime = undefined;
      this._ipsecPfs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipsecAuthAlg = value.ipsecAuthAlg;
      this._ipsecEncAlg = value.ipsecEncAlg;
      this._ipsecLifetime = value.ipsecLifetime;
      this._ipsecPfs = value.ipsecPfs;
    }
  }

  // ipsec_auth_alg - computed: false, optional: true, required: false
  private _ipsecAuthAlg?: string; 
  public get ipsecAuthAlg() {
    return this.getStringAttribute('ipsec_auth_alg');
  }
  public set ipsecAuthAlg(value: string) {
    this._ipsecAuthAlg = value;
  }
  public resetIpsecAuthAlg() {
    this._ipsecAuthAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecAuthAlgInput() {
    return this._ipsecAuthAlg;
  }

  // ipsec_enc_alg - computed: false, optional: true, required: false
  private _ipsecEncAlg?: string; 
  public get ipsecEncAlg() {
    return this.getStringAttribute('ipsec_enc_alg');
  }
  public set ipsecEncAlg(value: string) {
    this._ipsecEncAlg = value;
  }
  public resetIpsecEncAlg() {
    this._ipsecEncAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecEncAlgInput() {
    return this._ipsecEncAlg;
  }

  // ipsec_lifetime - computed: false, optional: true, required: false
  private _ipsecLifetime?: number; 
  public get ipsecLifetime() {
    return this.getNumberAttribute('ipsec_lifetime');
  }
  public set ipsecLifetime(value: number) {
    this._ipsecLifetime = value;
  }
  public resetIpsecLifetime() {
    this._ipsecLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecLifetimeInput() {
    return this._ipsecLifetime;
  }

  // ipsec_pfs - computed: false, optional: true, required: false
  private _ipsecPfs?: string; 
  public get ipsecPfs() {
    return this.getStringAttribute('ipsec_pfs');
  }
  public set ipsecPfs(value: string) {
    this._ipsecPfs = value;
  }
  public resetIpsecPfs() {
    this._ipsecPfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPfsInput() {
    return this._ipsecPfs;
  }
}
export interface VpnConnectionTunnelOptionsSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#customer_gateway_id VpnConnection#customer_gateway_id}
  */
  readonly customerGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#enable_dpd VpnConnection#enable_dpd}
  */
  readonly enableDpd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#enable_nat_traversal VpnConnection#enable_nat_traversal}
  */
  readonly enableNatTraversal?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#role VpnConnection#role}
  */
  readonly role?: string;
  /**
  * tunnel_bgp_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#tunnel_bgp_config VpnConnection#tunnel_bgp_config}
  */
  readonly tunnelBgpConfig?: VpnConnectionTunnelOptionsSpecificationTunnelBgpConfig;
  /**
  * tunnel_ike_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#tunnel_ike_config VpnConnection#tunnel_ike_config}
  */
  readonly tunnelIkeConfig?: VpnConnectionTunnelOptionsSpecificationTunnelIkeConfig;
  /**
  * tunnel_ipsec_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#tunnel_ipsec_config VpnConnection#tunnel_ipsec_config}
  */
  readonly tunnelIpsecConfig?: VpnConnectionTunnelOptionsSpecificationTunnelIpsecConfig;
}

export function vpnConnectionTunnelOptionsSpecificationToTerraform(struct?: VpnConnectionTunnelOptionsSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customer_gateway_id: cdktf.stringToTerraform(struct!.customerGatewayId),
    enable_dpd: cdktf.booleanToTerraform(struct!.enableDpd),
    enable_nat_traversal: cdktf.booleanToTerraform(struct!.enableNatTraversal),
    role: cdktf.stringToTerraform(struct!.role),
    tunnel_bgp_config: vpnConnectionTunnelOptionsSpecificationTunnelBgpConfigToTerraform(struct!.tunnelBgpConfig),
    tunnel_ike_config: vpnConnectionTunnelOptionsSpecificationTunnelIkeConfigToTerraform(struct!.tunnelIkeConfig),
    tunnel_ipsec_config: vpnConnectionTunnelOptionsSpecificationTunnelIpsecConfigToTerraform(struct!.tunnelIpsecConfig),
  }
}


export function vpnConnectionTunnelOptionsSpecificationToHclTerraform(struct?: VpnConnectionTunnelOptionsSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    customer_gateway_id: {
      value: cdktf.stringToHclTerraform(struct!.customerGatewayId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_dpd: {
      value: cdktf.booleanToHclTerraform(struct!.enableDpd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_nat_traversal: {
      value: cdktf.booleanToHclTerraform(struct!.enableNatTraversal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_bgp_config: {
      value: vpnConnectionTunnelOptionsSpecificationTunnelBgpConfigToHclTerraform(struct!.tunnelBgpConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VpnConnectionTunnelOptionsSpecificationTunnelBgpConfigList",
    },
    tunnel_ike_config: {
      value: vpnConnectionTunnelOptionsSpecificationTunnelIkeConfigToHclTerraform(struct!.tunnelIkeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VpnConnectionTunnelOptionsSpecificationTunnelIkeConfigList",
    },
    tunnel_ipsec_config: {
      value: vpnConnectionTunnelOptionsSpecificationTunnelIpsecConfigToHclTerraform(struct!.tunnelIpsecConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VpnConnectionTunnelOptionsSpecificationTunnelIpsecConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnConnectionTunnelOptionsSpecificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnConnectionTunnelOptionsSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customerGatewayId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerGatewayId = this._customerGatewayId;
    }
    if (this._enableDpd !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDpd = this._enableDpd;
    }
    if (this._enableNatTraversal !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNatTraversal = this._enableNatTraversal;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._tunnelBgpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelBgpConfig = this._tunnelBgpConfig?.internalValue;
    }
    if (this._tunnelIkeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelIkeConfig = this._tunnelIkeConfig?.internalValue;
    }
    if (this._tunnelIpsecConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelIpsecConfig = this._tunnelIpsecConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnConnectionTunnelOptionsSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customerGatewayId = undefined;
      this._enableDpd = undefined;
      this._enableNatTraversal = undefined;
      this._role = undefined;
      this._tunnelBgpConfig.internalValue = undefined;
      this._tunnelIkeConfig.internalValue = undefined;
      this._tunnelIpsecConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customerGatewayId = value.customerGatewayId;
      this._enableDpd = value.enableDpd;
      this._enableNatTraversal = value.enableNatTraversal;
      this._role = value.role;
      this._tunnelBgpConfig.internalValue = value.tunnelBgpConfig;
      this._tunnelIkeConfig.internalValue = value.tunnelIkeConfig;
      this._tunnelIpsecConfig.internalValue = value.tunnelIpsecConfig;
    }
  }

  // customer_gateway_id - computed: false, optional: true, required: false
  private _customerGatewayId?: string; 
  public get customerGatewayId() {
    return this.getStringAttribute('customer_gateway_id');
  }
  public set customerGatewayId(value: string) {
    this._customerGatewayId = value;
  }
  public resetCustomerGatewayId() {
    this._customerGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerGatewayIdInput() {
    return this._customerGatewayId;
  }

  // enable_dpd - computed: false, optional: true, required: false
  private _enableDpd?: boolean | cdktf.IResolvable; 
  public get enableDpd() {
    return this.getBooleanAttribute('enable_dpd');
  }
  public set enableDpd(value: boolean | cdktf.IResolvable) {
    this._enableDpd = value;
  }
  public resetEnableDpd() {
    this._enableDpd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDpdInput() {
    return this._enableDpd;
  }

  // enable_nat_traversal - computed: false, optional: true, required: false
  private _enableNatTraversal?: boolean | cdktf.IResolvable; 
  public get enableNatTraversal() {
    return this.getBooleanAttribute('enable_nat_traversal');
  }
  public set enableNatTraversal(value: boolean | cdktf.IResolvable) {
    this._enableNatTraversal = value;
  }
  public resetEnableNatTraversal() {
    this._enableNatTraversal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNatTraversalInput() {
    return this._enableNatTraversal;
  }

  // internet_ip - computed: true, optional: false, required: false
  public get internetIp() {
    return this.getStringAttribute('internet_ip');
  }

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tunnel_id - computed: true, optional: false, required: false
  public get tunnelId() {
    return this.getStringAttribute('tunnel_id');
  }

  // zone_no - computed: true, optional: false, required: false
  public get zoneNo() {
    return this.getStringAttribute('zone_no');
  }

  // tunnel_bgp_config - computed: false, optional: true, required: false
  private _tunnelBgpConfig = new VpnConnectionTunnelOptionsSpecificationTunnelBgpConfigOutputReference(this, "tunnel_bgp_config");
  public get tunnelBgpConfig() {
    return this._tunnelBgpConfig;
  }
  public putTunnelBgpConfig(value: VpnConnectionTunnelOptionsSpecificationTunnelBgpConfig) {
    this._tunnelBgpConfig.internalValue = value;
  }
  public resetTunnelBgpConfig() {
    this._tunnelBgpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelBgpConfigInput() {
    return this._tunnelBgpConfig.internalValue;
  }

  // tunnel_ike_config - computed: false, optional: true, required: false
  private _tunnelIkeConfig = new VpnConnectionTunnelOptionsSpecificationTunnelIkeConfigOutputReference(this, "tunnel_ike_config");
  public get tunnelIkeConfig() {
    return this._tunnelIkeConfig;
  }
  public putTunnelIkeConfig(value: VpnConnectionTunnelOptionsSpecificationTunnelIkeConfig) {
    this._tunnelIkeConfig.internalValue = value;
  }
  public resetTunnelIkeConfig() {
    this._tunnelIkeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelIkeConfigInput() {
    return this._tunnelIkeConfig.internalValue;
  }

  // tunnel_ipsec_config - computed: false, optional: true, required: false
  private _tunnelIpsecConfig = new VpnConnectionTunnelOptionsSpecificationTunnelIpsecConfigOutputReference(this, "tunnel_ipsec_config");
  public get tunnelIpsecConfig() {
    return this._tunnelIpsecConfig;
  }
  public putTunnelIpsecConfig(value: VpnConnectionTunnelOptionsSpecificationTunnelIpsecConfig) {
    this._tunnelIpsecConfig.internalValue = value;
  }
  public resetTunnelIpsecConfig() {
    this._tunnelIpsecConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelIpsecConfigInput() {
    return this._tunnelIpsecConfig.internalValue;
  }
}

export class VpnConnectionTunnelOptionsSpecificationList extends cdktf.ComplexList {
  public internalValue? : VpnConnectionTunnelOptionsSpecification[] | cdktf.IResolvable

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
  public get(index: number): VpnConnectionTunnelOptionsSpecificationOutputReference {
    return new VpnConnectionTunnelOptionsSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection alicloud_vpn_connection}
*/
export class VpnConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_vpn_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnConnection to import
  * @param importFromId The id of the existing VpnConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_vpn_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpn_connection alicloud_vpn_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: VpnConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_vpn_connection',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoConfigRoute = config.autoConfigRoute;
    this._customerGatewayId = config.customerGatewayId;
    this._effectImmediately = config.effectImmediately;
    this._enableDpd = config.enableDpd;
    this._enableNatTraversal = config.enableNatTraversal;
    this._enableTunnelsBgp = config.enableTunnelsBgp;
    this._id = config.id;
    this._localSubnet = config.localSubnet;
    this._name = config.name;
    this._networkType = config.networkType;
    this._remoteSubnet = config.remoteSubnet;
    this._tags = config.tags;
    this._vpnConnectionName = config.vpnConnectionName;
    this._vpnGatewayId = config.vpnGatewayId;
    this._bgpConfig.internalValue = config.bgpConfig;
    this._healthCheckConfig.internalValue = config.healthCheckConfig;
    this._ikeConfig.internalValue = config.ikeConfig;
    this._ipsecConfig.internalValue = config.ipsecConfig;
    this._timeouts.internalValue = config.timeouts;
    this._tunnelOptionsSpecification.internalValue = config.tunnelOptionsSpecification;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_config_route - computed: false, optional: true, required: false
  private _autoConfigRoute?: boolean | cdktf.IResolvable; 
  public get autoConfigRoute() {
    return this.getBooleanAttribute('auto_config_route');
  }
  public set autoConfigRoute(value: boolean | cdktf.IResolvable) {
    this._autoConfigRoute = value;
  }
  public resetAutoConfigRoute() {
    this._autoConfigRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoConfigRouteInput() {
    return this._autoConfigRoute;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }

  // customer_gateway_id - computed: false, optional: true, required: false
  private _customerGatewayId?: string; 
  public get customerGatewayId() {
    return this.getStringAttribute('customer_gateway_id');
  }
  public set customerGatewayId(value: string) {
    this._customerGatewayId = value;
  }
  public resetCustomerGatewayId() {
    this._customerGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerGatewayIdInput() {
    return this._customerGatewayId;
  }

  // effect_immediately - computed: false, optional: true, required: false
  private _effectImmediately?: boolean | cdktf.IResolvable; 
  public get effectImmediately() {
    return this.getBooleanAttribute('effect_immediately');
  }
  public set effectImmediately(value: boolean | cdktf.IResolvable) {
    this._effectImmediately = value;
  }
  public resetEffectImmediately() {
    this._effectImmediately = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectImmediatelyInput() {
    return this._effectImmediately;
  }

  // enable_dpd - computed: true, optional: true, required: false
  private _enableDpd?: boolean | cdktf.IResolvable; 
  public get enableDpd() {
    return this.getBooleanAttribute('enable_dpd');
  }
  public set enableDpd(value: boolean | cdktf.IResolvable) {
    this._enableDpd = value;
  }
  public resetEnableDpd() {
    this._enableDpd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDpdInput() {
    return this._enableDpd;
  }

  // enable_nat_traversal - computed: true, optional: true, required: false
  private _enableNatTraversal?: boolean | cdktf.IResolvable; 
  public get enableNatTraversal() {
    return this.getBooleanAttribute('enable_nat_traversal');
  }
  public set enableNatTraversal(value: boolean | cdktf.IResolvable) {
    this._enableNatTraversal = value;
  }
  public resetEnableNatTraversal() {
    this._enableNatTraversal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNatTraversalInput() {
    return this._enableNatTraversal;
  }

  // enable_tunnels_bgp - computed: true, optional: true, required: false
  private _enableTunnelsBgp?: boolean | cdktf.IResolvable; 
  public get enableTunnelsBgp() {
    return this.getBooleanAttribute('enable_tunnels_bgp');
  }
  public set enableTunnelsBgp(value: boolean | cdktf.IResolvable) {
    this._enableTunnelsBgp = value;
  }
  public resetEnableTunnelsBgp() {
    this._enableTunnelsBgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTunnelsBgpInput() {
    return this._enableTunnelsBgp;
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

  // local_subnet - computed: false, optional: false, required: true
  private _localSubnet?: string[]; 
  public get localSubnet() {
    return cdktf.Fn.tolist(this.getListAttribute('local_subnet'));
  }
  public set localSubnet(value: string[]) {
    this._localSubnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localSubnetInput() {
    return this._localSubnet;
  }

  // name - computed: true, optional: true, required: false
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

  // network_type - computed: false, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // remote_subnet - computed: false, optional: false, required: true
  private _remoteSubnet?: string[]; 
  public get remoteSubnet() {
    return cdktf.Fn.tolist(this.getListAttribute('remote_subnet'));
  }
  public set remoteSubnet(value: string[]) {
    this._remoteSubnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteSubnetInput() {
    return this._remoteSubnet;
  }

  // resource_group_id - computed: true, optional: false, required: false
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vpn_connection_name - computed: true, optional: true, required: false
  private _vpnConnectionName?: string; 
  public get vpnConnectionName() {
    return this.getStringAttribute('vpn_connection_name');
  }
  public set vpnConnectionName(value: string) {
    this._vpnConnectionName = value;
  }
  public resetVpnConnectionName() {
    this._vpnConnectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnConnectionNameInput() {
    return this._vpnConnectionName;
  }

  // vpn_gateway_id - computed: false, optional: false, required: true
  private _vpnGatewayId?: string; 
  public get vpnGatewayId() {
    return this.getStringAttribute('vpn_gateway_id');
  }
  public set vpnGatewayId(value: string) {
    this._vpnGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnGatewayIdInput() {
    return this._vpnGatewayId;
  }

  // bgp_config - computed: false, optional: true, required: false
  private _bgpConfig = new VpnConnectionBgpConfigOutputReference(this, "bgp_config");
  public get bgpConfig() {
    return this._bgpConfig;
  }
  public putBgpConfig(value: VpnConnectionBgpConfig) {
    this._bgpConfig.internalValue = value;
  }
  public resetBgpConfig() {
    this._bgpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpConfigInput() {
    return this._bgpConfig.internalValue;
  }

  // health_check_config - computed: false, optional: true, required: false
  private _healthCheckConfig = new VpnConnectionHealthCheckConfigOutputReference(this, "health_check_config");
  public get healthCheckConfig() {
    return this._healthCheckConfig;
  }
  public putHealthCheckConfig(value: VpnConnectionHealthCheckConfig) {
    this._healthCheckConfig.internalValue = value;
  }
  public resetHealthCheckConfig() {
    this._healthCheckConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckConfigInput() {
    return this._healthCheckConfig.internalValue;
  }

  // ike_config - computed: false, optional: true, required: false
  private _ikeConfig = new VpnConnectionIkeConfigOutputReference(this, "ike_config");
  public get ikeConfig() {
    return this._ikeConfig;
  }
  public putIkeConfig(value: VpnConnectionIkeConfig) {
    this._ikeConfig.internalValue = value;
  }
  public resetIkeConfig() {
    this._ikeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeConfigInput() {
    return this._ikeConfig.internalValue;
  }

  // ipsec_config - computed: false, optional: true, required: false
  private _ipsecConfig = new VpnConnectionIpsecConfigOutputReference(this, "ipsec_config");
  public get ipsecConfig() {
    return this._ipsecConfig;
  }
  public putIpsecConfig(value: VpnConnectionIpsecConfig) {
    this._ipsecConfig.internalValue = value;
  }
  public resetIpsecConfig() {
    this._ipsecConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecConfigInput() {
    return this._ipsecConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpnConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpnConnectionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // tunnel_options_specification - computed: false, optional: true, required: false
  private _tunnelOptionsSpecification = new VpnConnectionTunnelOptionsSpecificationList(this, "tunnel_options_specification", false);
  public get tunnelOptionsSpecification() {
    return this._tunnelOptionsSpecification;
  }
  public putTunnelOptionsSpecification(value: VpnConnectionTunnelOptionsSpecification[] | cdktf.IResolvable) {
    this._tunnelOptionsSpecification.internalValue = value;
  }
  public resetTunnelOptionsSpecification() {
    this._tunnelOptionsSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelOptionsSpecificationInput() {
    return this._tunnelOptionsSpecification.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_config_route: cdktf.booleanToTerraform(this._autoConfigRoute),
      customer_gateway_id: cdktf.stringToTerraform(this._customerGatewayId),
      effect_immediately: cdktf.booleanToTerraform(this._effectImmediately),
      enable_dpd: cdktf.booleanToTerraform(this._enableDpd),
      enable_nat_traversal: cdktf.booleanToTerraform(this._enableNatTraversal),
      enable_tunnels_bgp: cdktf.booleanToTerraform(this._enableTunnelsBgp),
      id: cdktf.stringToTerraform(this._id),
      local_subnet: cdktf.listMapper(cdktf.stringToTerraform, false)(this._localSubnet),
      name: cdktf.stringToTerraform(this._name),
      network_type: cdktf.stringToTerraform(this._networkType),
      remote_subnet: cdktf.listMapper(cdktf.stringToTerraform, false)(this._remoteSubnet),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpn_connection_name: cdktf.stringToTerraform(this._vpnConnectionName),
      vpn_gateway_id: cdktf.stringToTerraform(this._vpnGatewayId),
      bgp_config: vpnConnectionBgpConfigToTerraform(this._bgpConfig.internalValue),
      health_check_config: vpnConnectionHealthCheckConfigToTerraform(this._healthCheckConfig.internalValue),
      ike_config: vpnConnectionIkeConfigToTerraform(this._ikeConfig.internalValue),
      ipsec_config: vpnConnectionIpsecConfigToTerraform(this._ipsecConfig.internalValue),
      timeouts: vpnConnectionTimeoutsToTerraform(this._timeouts.internalValue),
      tunnel_options_specification: cdktf.listMapper(vpnConnectionTunnelOptionsSpecificationToTerraform, true)(this._tunnelOptionsSpecification.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_config_route: {
        value: cdktf.booleanToHclTerraform(this._autoConfigRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      customer_gateway_id: {
        value: cdktf.stringToHclTerraform(this._customerGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      effect_immediately: {
        value: cdktf.booleanToHclTerraform(this._effectImmediately),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_dpd: {
        value: cdktf.booleanToHclTerraform(this._enableDpd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_nat_traversal: {
        value: cdktf.booleanToHclTerraform(this._enableNatTraversal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_tunnels_bgp: {
        value: cdktf.booleanToHclTerraform(this._enableTunnelsBgp),
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
      local_subnet: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._localSubnet),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_type: {
        value: cdktf.stringToHclTerraform(this._networkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_subnet: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._remoteSubnet),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vpn_connection_name: {
        value: cdktf.stringToHclTerraform(this._vpnConnectionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_gateway_id: {
        value: cdktf.stringToHclTerraform(this._vpnGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_config: {
        value: vpnConnectionBgpConfigToHclTerraform(this._bgpConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnConnectionBgpConfigList",
      },
      health_check_config: {
        value: vpnConnectionHealthCheckConfigToHclTerraform(this._healthCheckConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnConnectionHealthCheckConfigList",
      },
      ike_config: {
        value: vpnConnectionIkeConfigToHclTerraform(this._ikeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnConnectionIkeConfigList",
      },
      ipsec_config: {
        value: vpnConnectionIpsecConfigToHclTerraform(this._ipsecConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnConnectionIpsecConfigList",
      },
      timeouts: {
        value: vpnConnectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VpnConnectionTimeouts",
      },
      tunnel_options_specification: {
        value: cdktf.listMapperHcl(vpnConnectionTunnelOptionsSpecificationToHclTerraform, true)(this._tunnelOptionsSpecification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnConnectionTunnelOptionsSpecificationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
