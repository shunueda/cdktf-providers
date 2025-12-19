// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnGatewayVpnAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#customer_gateway_id VpnGatewayVpnAttachment#customer_gateway_id}
  */
  readonly customerGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#effect_immediately VpnGatewayVpnAttachment#effect_immediately}
  */
  readonly effectImmediately?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#enable_dpd VpnGatewayVpnAttachment#enable_dpd}
  */
  readonly enableDpd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#enable_nat_traversal VpnGatewayVpnAttachment#enable_nat_traversal}
  */
  readonly enableNatTraversal?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#enable_tunnels_bgp VpnGatewayVpnAttachment#enable_tunnels_bgp}
  */
  readonly enableTunnelsBgp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#id VpnGatewayVpnAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#local_subnet VpnGatewayVpnAttachment#local_subnet}
  */
  readonly localSubnet: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#network_type VpnGatewayVpnAttachment#network_type}
  */
  readonly networkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#remote_subnet VpnGatewayVpnAttachment#remote_subnet}
  */
  readonly remoteSubnet: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#resource_group_id VpnGatewayVpnAttachment#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#tags VpnGatewayVpnAttachment#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#vpn_attachment_name VpnGatewayVpnAttachment#vpn_attachment_name}
  */
  readonly vpnAttachmentName?: string;
  /**
  * bgp_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#bgp_config VpnGatewayVpnAttachment#bgp_config}
  */
  readonly bgpConfig?: VpnGatewayVpnAttachmentBgpConfig;
  /**
  * health_check_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#health_check_config VpnGatewayVpnAttachment#health_check_config}
  */
  readonly healthCheckConfig?: VpnGatewayVpnAttachmentHealthCheckConfig;
  /**
  * ike_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#ike_config VpnGatewayVpnAttachment#ike_config}
  */
  readonly ikeConfig?: VpnGatewayVpnAttachmentIkeConfig;
  /**
  * ipsec_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#ipsec_config VpnGatewayVpnAttachment#ipsec_config}
  */
  readonly ipsecConfig?: VpnGatewayVpnAttachmentIpsecConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#timeouts VpnGatewayVpnAttachment#timeouts}
  */
  readonly timeouts?: VpnGatewayVpnAttachmentTimeouts;
  /**
  * tunnel_options_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#tunnel_options_specification VpnGatewayVpnAttachment#tunnel_options_specification}
  */
  readonly tunnelOptionsSpecification?: VpnGatewayVpnAttachmentTunnelOptionsSpecification[] | cdktf.IResolvable;
}
export interface VpnGatewayVpnAttachmentBgpConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#enable VpnGatewayVpnAttachment#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#local_asn VpnGatewayVpnAttachment#local_asn}
  */
  readonly localAsn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#local_bgp_ip VpnGatewayVpnAttachment#local_bgp_ip}
  */
  readonly localBgpIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#tunnel_cidr VpnGatewayVpnAttachment#tunnel_cidr}
  */
  readonly tunnelCidr?: string;
}

export function vpnGatewayVpnAttachmentBgpConfigToTerraform(struct?: VpnGatewayVpnAttachmentBgpConfigOutputReference | VpnGatewayVpnAttachmentBgpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    local_asn: cdktf.numberToTerraform(struct!.localAsn),
    local_bgp_ip: cdktf.stringToTerraform(struct!.localBgpIp),
    tunnel_cidr: cdktf.stringToTerraform(struct!.tunnelCidr),
  }
}


export function vpnGatewayVpnAttachmentBgpConfigToHclTerraform(struct?: VpnGatewayVpnAttachmentBgpConfigOutputReference | VpnGatewayVpnAttachmentBgpConfig): any {
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
      value: cdktf.numberToHclTerraform(struct!.localAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class VpnGatewayVpnAttachmentBgpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnGatewayVpnAttachmentBgpConfig | undefined {
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

  public set internalValue(value: VpnGatewayVpnAttachmentBgpConfig | undefined) {
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
  private _localAsn?: number; 
  public get localAsn() {
    return this.getNumberAttribute('local_asn');
  }
  public set localAsn(value: number) {
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
export interface VpnGatewayVpnAttachmentHealthCheckConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#dip VpnGatewayVpnAttachment#dip}
  */
  readonly dip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#enable VpnGatewayVpnAttachment#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#interval VpnGatewayVpnAttachment#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#policy VpnGatewayVpnAttachment#policy}
  */
  readonly policy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#retry VpnGatewayVpnAttachment#retry}
  */
  readonly retry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#sip VpnGatewayVpnAttachment#sip}
  */
  readonly sip?: string;
}

export function vpnGatewayVpnAttachmentHealthCheckConfigToTerraform(struct?: VpnGatewayVpnAttachmentHealthCheckConfigOutputReference | VpnGatewayVpnAttachmentHealthCheckConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dip: cdktf.stringToTerraform(struct!.dip),
    enable: cdktf.booleanToTerraform(struct!.enable),
    interval: cdktf.numberToTerraform(struct!.interval),
    policy: cdktf.stringToTerraform(struct!.policy),
    retry: cdktf.numberToTerraform(struct!.retry),
    sip: cdktf.stringToTerraform(struct!.sip),
  }
}


export function vpnGatewayVpnAttachmentHealthCheckConfigToHclTerraform(struct?: VpnGatewayVpnAttachmentHealthCheckConfigOutputReference | VpnGatewayVpnAttachmentHealthCheckConfig): any {
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
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class VpnGatewayVpnAttachmentHealthCheckConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnGatewayVpnAttachmentHealthCheckConfig | undefined {
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
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
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

  public set internalValue(value: VpnGatewayVpnAttachmentHealthCheckConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dip = undefined;
      this._enable = undefined;
      this._interval = undefined;
      this._policy = undefined;
      this._retry = undefined;
      this._sip = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dip = value.dip;
      this._enable = value.enable;
      this._interval = value.interval;
      this._policy = value.policy;
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

  // policy - computed: true, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface VpnGatewayVpnAttachmentIkeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#ike_auth_alg VpnGatewayVpnAttachment#ike_auth_alg}
  */
  readonly ikeAuthAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#ike_enc_alg VpnGatewayVpnAttachment#ike_enc_alg}
  */
  readonly ikeEncAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#ike_lifetime VpnGatewayVpnAttachment#ike_lifetime}
  */
  readonly ikeLifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#ike_mode VpnGatewayVpnAttachment#ike_mode}
  */
  readonly ikeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#ike_pfs VpnGatewayVpnAttachment#ike_pfs}
  */
  readonly ikePfs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#ike_version VpnGatewayVpnAttachment#ike_version}
  */
  readonly ikeVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#local_id VpnGatewayVpnAttachment#local_id}
  */
  readonly localId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#psk VpnGatewayVpnAttachment#psk}
  */
  readonly psk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#remote_id VpnGatewayVpnAttachment#remote_id}
  */
  readonly remoteId?: string;
}

export function vpnGatewayVpnAttachmentIkeConfigToTerraform(struct?: VpnGatewayVpnAttachmentIkeConfigOutputReference | VpnGatewayVpnAttachmentIkeConfig): any {
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


export function vpnGatewayVpnAttachmentIkeConfigToHclTerraform(struct?: VpnGatewayVpnAttachmentIkeConfigOutputReference | VpnGatewayVpnAttachmentIkeConfig): any {
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

export class VpnGatewayVpnAttachmentIkeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnGatewayVpnAttachmentIkeConfig | undefined {
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

  public set internalValue(value: VpnGatewayVpnAttachmentIkeConfig | undefined) {
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
export interface VpnGatewayVpnAttachmentIpsecConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#ipsec_auth_alg VpnGatewayVpnAttachment#ipsec_auth_alg}
  */
  readonly ipsecAuthAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#ipsec_enc_alg VpnGatewayVpnAttachment#ipsec_enc_alg}
  */
  readonly ipsecEncAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#ipsec_lifetime VpnGatewayVpnAttachment#ipsec_lifetime}
  */
  readonly ipsecLifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#ipsec_pfs VpnGatewayVpnAttachment#ipsec_pfs}
  */
  readonly ipsecPfs?: string;
}

export function vpnGatewayVpnAttachmentIpsecConfigToTerraform(struct?: VpnGatewayVpnAttachmentIpsecConfigOutputReference | VpnGatewayVpnAttachmentIpsecConfig): any {
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


export function vpnGatewayVpnAttachmentIpsecConfigToHclTerraform(struct?: VpnGatewayVpnAttachmentIpsecConfigOutputReference | VpnGatewayVpnAttachmentIpsecConfig): any {
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

export class VpnGatewayVpnAttachmentIpsecConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnGatewayVpnAttachmentIpsecConfig | undefined {
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

  public set internalValue(value: VpnGatewayVpnAttachmentIpsecConfig | undefined) {
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
export interface VpnGatewayVpnAttachmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#create VpnGatewayVpnAttachment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#delete VpnGatewayVpnAttachment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#update VpnGatewayVpnAttachment#update}
  */
  readonly update?: string;
}

export function vpnGatewayVpnAttachmentTimeoutsToTerraform(struct?: VpnGatewayVpnAttachmentTimeouts | cdktf.IResolvable): any {
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


export function vpnGatewayVpnAttachmentTimeoutsToHclTerraform(struct?: VpnGatewayVpnAttachmentTimeouts | cdktf.IResolvable): any {
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

export class VpnGatewayVpnAttachmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpnGatewayVpnAttachmentTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpnGatewayVpnAttachmentTimeouts | cdktf.IResolvable | undefined) {
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
export interface VpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelBgpConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#local_asn VpnGatewayVpnAttachment#local_asn}
  */
  readonly localAsn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#local_bgp_ip VpnGatewayVpnAttachment#local_bgp_ip}
  */
  readonly localBgpIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#tunnel_cidr VpnGatewayVpnAttachment#tunnel_cidr}
  */
  readonly tunnelCidr?: string;
}

export function vpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelBgpConfigToTerraform(struct?: VpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelBgpConfigOutputReference | VpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelBgpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_asn: cdktf.numberToTerraform(struct!.localAsn),
    local_bgp_ip: cdktf.stringToTerraform(struct!.localBgpIp),
    tunnel_cidr: cdktf.stringToTerraform(struct!.tunnelCidr),
  }
}


export function vpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelBgpConfigToHclTerraform(struct?: VpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelBgpConfigOutputReference | VpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelBgpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_asn: {
      value: cdktf.numberToHclTerraform(struct!.localAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class VpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelBgpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelBgpConfig | undefined {
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

  public set internalValue(value: VpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelBgpConfig | undefined) {
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

  // local_asn - computed: true, optional: true, required: false
  private _localAsn?: number; 
  public get localAsn() {
    return this.getNumberAttribute('local_asn');
  }
  public set localAsn(value: number) {
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

  // peer_asn - computed: true, optional: false, required: false
  public get peerAsn() {
    return this.getStringAttribute('peer_asn');
  }

  // peer_bgp_ip - computed: true, optional: false, required: false
  public get peerBgpIp() {
    return this.getStringAttribute('peer_bgp_ip');
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
export interface VpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelIkeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#ike_auth_alg VpnGatewayVpnAttachment#ike_auth_alg}
  */
  readonly ikeAuthAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#ike_enc_alg VpnGatewayVpnAttachment#ike_enc_alg}
  */
  readonly ikeEncAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#ike_lifetime VpnGatewayVpnAttachment#ike_lifetime}
  */
  readonly ikeLifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#ike_mode VpnGatewayVpnAttachment#ike_mode}
  */
  readonly ikeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#ike_pfs VpnGatewayVpnAttachment#ike_pfs}
  */
  readonly ikePfs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#ike_version VpnGatewayVpnAttachment#ike_version}
  */
  readonly ikeVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#local_id VpnGatewayVpnAttachment#local_id}
  */
  readonly localId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#psk VpnGatewayVpnAttachment#psk}
  */
  readonly psk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#remote_id VpnGatewayVpnAttachment#remote_id}
  */
  readonly remoteId?: string;
}

export function vpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelIkeConfigToTerraform(struct?: VpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelIkeConfigOutputReference | VpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelIkeConfig): any {
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


export function vpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelIkeConfigToHclTerraform(struct?: VpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelIkeConfigOutputReference | VpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelIkeConfig): any {
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

export class VpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelIkeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelIkeConfig | undefined {
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

  public set internalValue(value: VpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelIkeConfig | undefined) {
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
export interface VpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelIpsecConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#ipsec_auth_alg VpnGatewayVpnAttachment#ipsec_auth_alg}
  */
  readonly ipsecAuthAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#ipsec_enc_alg VpnGatewayVpnAttachment#ipsec_enc_alg}
  */
  readonly ipsecEncAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#ipsec_lifetime VpnGatewayVpnAttachment#ipsec_lifetime}
  */
  readonly ipsecLifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#ipsec_pfs VpnGatewayVpnAttachment#ipsec_pfs}
  */
  readonly ipsecPfs?: string;
}

export function vpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelIpsecConfigToTerraform(struct?: VpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelIpsecConfigOutputReference | VpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelIpsecConfig): any {
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


export function vpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelIpsecConfigToHclTerraform(struct?: VpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelIpsecConfigOutputReference | VpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelIpsecConfig): any {
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

export class VpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelIpsecConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelIpsecConfig | undefined {
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

  public set internalValue(value: VpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelIpsecConfig | undefined) {
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
export interface VpnGatewayVpnAttachmentTunnelOptionsSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#customer_gateway_id VpnGatewayVpnAttachment#customer_gateway_id}
  */
  readonly customerGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#enable_dpd VpnGatewayVpnAttachment#enable_dpd}
  */
  readonly enableDpd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#enable_nat_traversal VpnGatewayVpnAttachment#enable_nat_traversal}
  */
  readonly enableNatTraversal?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#tunnel_index VpnGatewayVpnAttachment#tunnel_index}
  */
  readonly tunnelIndex: number;
  /**
  * tunnel_bgp_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#tunnel_bgp_config VpnGatewayVpnAttachment#tunnel_bgp_config}
  */
  readonly tunnelBgpConfig?: VpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelBgpConfig;
  /**
  * tunnel_ike_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#tunnel_ike_config VpnGatewayVpnAttachment#tunnel_ike_config}
  */
  readonly tunnelIkeConfig?: VpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelIkeConfig;
  /**
  * tunnel_ipsec_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#tunnel_ipsec_config VpnGatewayVpnAttachment#tunnel_ipsec_config}
  */
  readonly tunnelIpsecConfig?: VpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelIpsecConfig;
}

export function vpnGatewayVpnAttachmentTunnelOptionsSpecificationToTerraform(struct?: VpnGatewayVpnAttachmentTunnelOptionsSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customer_gateway_id: cdktf.stringToTerraform(struct!.customerGatewayId),
    enable_dpd: cdktf.booleanToTerraform(struct!.enableDpd),
    enable_nat_traversal: cdktf.booleanToTerraform(struct!.enableNatTraversal),
    tunnel_index: cdktf.numberToTerraform(struct!.tunnelIndex),
    tunnel_bgp_config: vpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelBgpConfigToTerraform(struct!.tunnelBgpConfig),
    tunnel_ike_config: vpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelIkeConfigToTerraform(struct!.tunnelIkeConfig),
    tunnel_ipsec_config: vpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelIpsecConfigToTerraform(struct!.tunnelIpsecConfig),
  }
}


export function vpnGatewayVpnAttachmentTunnelOptionsSpecificationToHclTerraform(struct?: VpnGatewayVpnAttachmentTunnelOptionsSpecification | cdktf.IResolvable): any {
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
    tunnel_index: {
      value: cdktf.numberToHclTerraform(struct!.tunnelIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tunnel_bgp_config: {
      value: vpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelBgpConfigToHclTerraform(struct!.tunnelBgpConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelBgpConfigList",
    },
    tunnel_ike_config: {
      value: vpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelIkeConfigToHclTerraform(struct!.tunnelIkeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelIkeConfigList",
    },
    tunnel_ipsec_config: {
      value: vpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelIpsecConfigToHclTerraform(struct!.tunnelIpsecConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelIpsecConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnGatewayVpnAttachmentTunnelOptionsSpecificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnGatewayVpnAttachmentTunnelOptionsSpecification | cdktf.IResolvable | undefined {
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
    if (this._tunnelIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelIndex = this._tunnelIndex;
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

  public set internalValue(value: VpnGatewayVpnAttachmentTunnelOptionsSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customerGatewayId = undefined;
      this._enableDpd = undefined;
      this._enableNatTraversal = undefined;
      this._tunnelIndex = undefined;
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
      this._tunnelIndex = value.tunnelIndex;
      this._tunnelBgpConfig.internalValue = value.tunnelBgpConfig;
      this._tunnelIkeConfig.internalValue = value.tunnelIkeConfig;
      this._tunnelIpsecConfig.internalValue = value.tunnelIpsecConfig;
    }
  }

  // customer_gateway_id - computed: false, optional: false, required: true
  private _customerGatewayId?: string; 
  public get customerGatewayId() {
    return this.getStringAttribute('customer_gateway_id');
  }
  public set customerGatewayId(value: string) {
    this._customerGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerGatewayIdInput() {
    return this._customerGatewayId;
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

  // internet_ip - computed: true, optional: false, required: false
  public get internetIp() {
    return this.getStringAttribute('internet_ip');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
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

  // tunnel_index - computed: false, optional: false, required: true
  private _tunnelIndex?: number; 
  public get tunnelIndex() {
    return this.getNumberAttribute('tunnel_index');
  }
  public set tunnelIndex(value: number) {
    this._tunnelIndex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelIndexInput() {
    return this._tunnelIndex;
  }

  // zone_no - computed: true, optional: false, required: false
  public get zoneNo() {
    return this.getStringAttribute('zone_no');
  }

  // tunnel_bgp_config - computed: false, optional: true, required: false
  private _tunnelBgpConfig = new VpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelBgpConfigOutputReference(this, "tunnel_bgp_config");
  public get tunnelBgpConfig() {
    return this._tunnelBgpConfig;
  }
  public putTunnelBgpConfig(value: VpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelBgpConfig) {
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
  private _tunnelIkeConfig = new VpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelIkeConfigOutputReference(this, "tunnel_ike_config");
  public get tunnelIkeConfig() {
    return this._tunnelIkeConfig;
  }
  public putTunnelIkeConfig(value: VpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelIkeConfig) {
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
  private _tunnelIpsecConfig = new VpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelIpsecConfigOutputReference(this, "tunnel_ipsec_config");
  public get tunnelIpsecConfig() {
    return this._tunnelIpsecConfig;
  }
  public putTunnelIpsecConfig(value: VpnGatewayVpnAttachmentTunnelOptionsSpecificationTunnelIpsecConfig) {
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

export class VpnGatewayVpnAttachmentTunnelOptionsSpecificationList extends cdktf.ComplexList {
  public internalValue? : VpnGatewayVpnAttachmentTunnelOptionsSpecification[] | cdktf.IResolvable

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
  public get(index: number): VpnGatewayVpnAttachmentTunnelOptionsSpecificationOutputReference {
    return new VpnGatewayVpnAttachmentTunnelOptionsSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment alicloud_vpn_gateway_vpn_attachment}
*/
export class VpnGatewayVpnAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_vpn_gateway_vpn_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnGatewayVpnAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnGatewayVpnAttachment to import
  * @param importFromId The id of the existing VpnGatewayVpnAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnGatewayVpnAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_vpn_gateway_vpn_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpn_gateway_vpn_attachment alicloud_vpn_gateway_vpn_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnGatewayVpnAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: VpnGatewayVpnAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_vpn_gateway_vpn_attachment',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customerGatewayId = config.customerGatewayId;
    this._effectImmediately = config.effectImmediately;
    this._enableDpd = config.enableDpd;
    this._enableNatTraversal = config.enableNatTraversal;
    this._enableTunnelsBgp = config.enableTunnelsBgp;
    this._id = config.id;
    this._localSubnet = config.localSubnet;
    this._networkType = config.networkType;
    this._remoteSubnet = config.remoteSubnet;
    this._resourceGroupId = config.resourceGroupId;
    this._tags = config.tags;
    this._vpnAttachmentName = config.vpnAttachmentName;
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

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // effect_immediately - computed: true, optional: true, required: false
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
  private _localSubnet?: string; 
  public get localSubnet() {
    return this.getStringAttribute('local_subnet');
  }
  public set localSubnet(value: string) {
    this._localSubnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localSubnetInput() {
    return this._localSubnet;
  }

  // network_type - computed: true, optional: true, required: false
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
  private _remoteSubnet?: string; 
  public get remoteSubnet() {
    return this.getStringAttribute('remote_subnet');
  }
  public set remoteSubnet(value: string) {
    this._remoteSubnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteSubnetInput() {
    return this._remoteSubnet;
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
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

  // vpn_attachment_name - computed: false, optional: true, required: false
  private _vpnAttachmentName?: string; 
  public get vpnAttachmentName() {
    return this.getStringAttribute('vpn_attachment_name');
  }
  public set vpnAttachmentName(value: string) {
    this._vpnAttachmentName = value;
  }
  public resetVpnAttachmentName() {
    this._vpnAttachmentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnAttachmentNameInput() {
    return this._vpnAttachmentName;
  }

  // bgp_config - computed: false, optional: true, required: false
  private _bgpConfig = new VpnGatewayVpnAttachmentBgpConfigOutputReference(this, "bgp_config");
  public get bgpConfig() {
    return this._bgpConfig;
  }
  public putBgpConfig(value: VpnGatewayVpnAttachmentBgpConfig) {
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
  private _healthCheckConfig = new VpnGatewayVpnAttachmentHealthCheckConfigOutputReference(this, "health_check_config");
  public get healthCheckConfig() {
    return this._healthCheckConfig;
  }
  public putHealthCheckConfig(value: VpnGatewayVpnAttachmentHealthCheckConfig) {
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
  private _ikeConfig = new VpnGatewayVpnAttachmentIkeConfigOutputReference(this, "ike_config");
  public get ikeConfig() {
    return this._ikeConfig;
  }
  public putIkeConfig(value: VpnGatewayVpnAttachmentIkeConfig) {
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
  private _ipsecConfig = new VpnGatewayVpnAttachmentIpsecConfigOutputReference(this, "ipsec_config");
  public get ipsecConfig() {
    return this._ipsecConfig;
  }
  public putIpsecConfig(value: VpnGatewayVpnAttachmentIpsecConfig) {
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
  private _timeouts = new VpnGatewayVpnAttachmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpnGatewayVpnAttachmentTimeouts) {
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
  private _tunnelOptionsSpecification = new VpnGatewayVpnAttachmentTunnelOptionsSpecificationList(this, "tunnel_options_specification", true);
  public get tunnelOptionsSpecification() {
    return this._tunnelOptionsSpecification;
  }
  public putTunnelOptionsSpecification(value: VpnGatewayVpnAttachmentTunnelOptionsSpecification[] | cdktf.IResolvable) {
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
      customer_gateway_id: cdktf.stringToTerraform(this._customerGatewayId),
      effect_immediately: cdktf.booleanToTerraform(this._effectImmediately),
      enable_dpd: cdktf.booleanToTerraform(this._enableDpd),
      enable_nat_traversal: cdktf.booleanToTerraform(this._enableNatTraversal),
      enable_tunnels_bgp: cdktf.booleanToTerraform(this._enableTunnelsBgp),
      id: cdktf.stringToTerraform(this._id),
      local_subnet: cdktf.stringToTerraform(this._localSubnet),
      network_type: cdktf.stringToTerraform(this._networkType),
      remote_subnet: cdktf.stringToTerraform(this._remoteSubnet),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpn_attachment_name: cdktf.stringToTerraform(this._vpnAttachmentName),
      bgp_config: vpnGatewayVpnAttachmentBgpConfigToTerraform(this._bgpConfig.internalValue),
      health_check_config: vpnGatewayVpnAttachmentHealthCheckConfigToTerraform(this._healthCheckConfig.internalValue),
      ike_config: vpnGatewayVpnAttachmentIkeConfigToTerraform(this._ikeConfig.internalValue),
      ipsec_config: vpnGatewayVpnAttachmentIpsecConfigToTerraform(this._ipsecConfig.internalValue),
      timeouts: vpnGatewayVpnAttachmentTimeoutsToTerraform(this._timeouts.internalValue),
      tunnel_options_specification: cdktf.listMapper(vpnGatewayVpnAttachmentTunnelOptionsSpecificationToTerraform, true)(this._tunnelOptionsSpecification.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
        value: cdktf.stringToHclTerraform(this._localSubnet),
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
        value: cdktf.stringToHclTerraform(this._remoteSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vpn_attachment_name: {
        value: cdktf.stringToHclTerraform(this._vpnAttachmentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_config: {
        value: vpnGatewayVpnAttachmentBgpConfigToHclTerraform(this._bgpConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnGatewayVpnAttachmentBgpConfigList",
      },
      health_check_config: {
        value: vpnGatewayVpnAttachmentHealthCheckConfigToHclTerraform(this._healthCheckConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnGatewayVpnAttachmentHealthCheckConfigList",
      },
      ike_config: {
        value: vpnGatewayVpnAttachmentIkeConfigToHclTerraform(this._ikeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnGatewayVpnAttachmentIkeConfigList",
      },
      ipsec_config: {
        value: vpnGatewayVpnAttachmentIpsecConfigToHclTerraform(this._ipsecConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnGatewayVpnAttachmentIpsecConfigList",
      },
      timeouts: {
        value: vpnGatewayVpnAttachmentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VpnGatewayVpnAttachmentTimeouts",
      },
      tunnel_options_specification: {
        value: cdktf.listMapperHcl(vpnGatewayVpnAttachmentTunnelOptionsSpecificationToHclTerraform, true)(this._tunnelOptionsSpecification.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VpnGatewayVpnAttachmentTunnelOptionsSpecificationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
