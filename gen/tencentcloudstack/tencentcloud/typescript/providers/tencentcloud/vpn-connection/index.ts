// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the customer gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#customer_gateway_id VpnConnection#customer_gateway_id}
  */
  readonly customerGatewayId: string;
  /**
  * The action after DPD timeout. Valid values: clear (disconnect) and restart (try again). It is valid when DpdEnable is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#dpd_action VpnConnection#dpd_action}
  */
  readonly dpdAction?: string;
  /**
  * Specifies whether to enable DPD. Valid values: 0 (disable) and 1 (enable).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#dpd_enable VpnConnection#dpd_enable}
  */
  readonly dpdEnable?: number;
  /**
  * DPD timeout period.Valid value ranges: [30~60], Default: 30; unit: second. If the request is not responded within this period, the peer end is considered not exists. This parameter is valid when the value of DpdEnable is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#dpd_timeout VpnConnection#dpd_timeout}
  */
  readonly dpdTimeout?: number;
  /**
  * Whether intra-tunnel health checks are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#enable_health_check VpnConnection#enable_health_check}
  */
  readonly enableHealthCheck?: boolean | cdktf.IResolvable;
  /**
  * Health check the address of this terminal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#health_check_local_ip VpnConnection#health_check_local_ip}
  */
  readonly healthCheckLocalIp?: string;
  /**
  * Health check peer address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#health_check_remote_ip VpnConnection#health_check_remote_ip}
  */
  readonly healthCheckRemoteIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#id VpnConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * DH group name of the IKE operation specification. Valid values: `GROUP1`, `GROUP2`, `GROUP5`, `GROUP14`, `GROUP24`. Default value is `GROUP1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#ike_dh_group_name VpnConnection#ike_dh_group_name}
  */
  readonly ikeDhGroupName?: string;
  /**
  * Exchange mode of the IKE operation specification. Valid values: `AGGRESSIVE`, `MAIN`. Default value is `MAIN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#ike_exchange_mode VpnConnection#ike_exchange_mode}
  */
  readonly ikeExchangeMode?: string;
  /**
  * Local address of IKE operation specification, valid when ike_local_identity is `ADDRESS`, generally the value is `public_ip_address` of the related VPN gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#ike_local_address VpnConnection#ike_local_address}
  */
  readonly ikeLocalAddress?: string;
  /**
  * Local FQDN name of the IKE operation specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#ike_local_fqdn_name VpnConnection#ike_local_fqdn_name}
  */
  readonly ikeLocalFqdnName?: string;
  /**
  * Local identity way of IKE operation specification. Valid values: `ADDRESS`, `FQDN`. Default value is `ADDRESS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#ike_local_identity VpnConnection#ike_local_identity}
  */
  readonly ikeLocalIdentity?: string;
  /**
  * Proto authenticate algorithm of the IKE operation specification. Valid values: `MD5`, `SHA`, `SHA-256`. Default Value is `MD5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#ike_proto_authen_algorithm VpnConnection#ike_proto_authen_algorithm}
  */
  readonly ikeProtoAuthenAlgorithm?: string;
  /**
  * Proto encrypt algorithm of the IKE operation specification. Valid values: `3DES-CBC`, `AES-CBC-128`, `AES-CBC-192`, `AES-CBC-256`, `DES-CBC`, `SM4`, `AES128GCM128`, `AES192GCM128`, `AES256GCM128`,`AES128GCM128`, `AES192GCM128`, `AES256GCM128`. Default value is `3DES-CBC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#ike_proto_encry_algorithm VpnConnection#ike_proto_encry_algorithm}
  */
  readonly ikeProtoEncryAlgorithm?: string;
  /**
  * Remote address of IKE operation specification, valid when ike_remote_identity is `ADDRESS`, generally the value is `public_ip_address` of the related customer gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#ike_remote_address VpnConnection#ike_remote_address}
  */
  readonly ikeRemoteAddress?: string;
  /**
  * Remote FQDN name of the IKE operation specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#ike_remote_fqdn_name VpnConnection#ike_remote_fqdn_name}
  */
  readonly ikeRemoteFqdnName?: string;
  /**
  * Remote identity way of IKE operation specification. Valid values: `ADDRESS`, `FQDN`. Default value is `ADDRESS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#ike_remote_identity VpnConnection#ike_remote_identity}
  */
  readonly ikeRemoteIdentity?: string;
  /**
  * SA lifetime of the IKE operation specification, unit is `second`. The value ranges from 60 to 604800. Default value is 86400 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#ike_sa_lifetime_seconds VpnConnection#ike_sa_lifetime_seconds}
  */
  readonly ikeSaLifetimeSeconds?: number;
  /**
  * Version of the IKE operation specification, values: `IKEV1`, `IKEV2`. Default value is `IKEV1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#ike_version VpnConnection#ike_version}
  */
  readonly ikeVersion?: string;
  /**
  * Encrypt algorithm of the IPSEC operation specification. Valid values: `3DES-CBC`, `AES-CBC-128`, `AES-CBC-192`, `AES-CBC-256`, `DES-CBC`, `SM4`, `NULL`, `AES128GCM128`, `AES192GCM128`, `AES256GCM128`. Default value is `3DES-CBC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#ipsec_encrypt_algorithm VpnConnection#ipsec_encrypt_algorithm}
  */
  readonly ipsecEncryptAlgorithm?: string;
  /**
  * Integrity algorithm of the IPSEC operation specification. Valid values: `SHA1`, `MD5`, `SHA-256`. Default value is `MD5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#ipsec_integrity_algorithm VpnConnection#ipsec_integrity_algorithm}
  */
  readonly ipsecIntegrityAlgorithm?: string;
  /**
  * PFS DH group. Valid value: `DH-GROUP1`, `DH-GROUP2`, `DH-GROUP5`, `DH-GROUP14`, `DH-GROUP24`, `NULL`. Default value is `NULL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#ipsec_pfs_dh_group VpnConnection#ipsec_pfs_dh_group}
  */
  readonly ipsecPfsDhGroup?: string;
  /**
  * SA lifetime of the IPSEC operation specification, unit is second. Valid value ranges: [180~604800]. Default value is 3600 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#ipsec_sa_lifetime_seconds VpnConnection#ipsec_sa_lifetime_seconds}
  */
  readonly ipsecSaLifetimeSeconds?: number;
  /**
  * SA lifetime of the IPSEC operation specification, unit is KB. The value should not be less then 2560. Default value is 1843200.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#ipsec_sa_lifetime_traffic VpnConnection#ipsec_sa_lifetime_traffic}
  */
  readonly ipsecSaLifetimeTraffic?: number;
  /**
  * Name of the VPN connection. The length of character is limited to 1-60.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#name VpnConnection#name}
  */
  readonly name: string;
  /**
  * The default negotiation type is `active`. Optional values: `active` (active negotiation), `passive` (passive negotiation), `flowTrigger` (traffic negotiation).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#negotiation_type VpnConnection#negotiation_type}
  */
  readonly negotiationType?: string;
  /**
  * Pre-shared key of the VPN connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#pre_share_key VpnConnection#pre_share_key}
  */
  readonly preShareKey: string;
  /**
  * Route type of the VPN connection. Valid value: `STATIC`, `StaticRoute`, `Policy`, `Bgp`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#route_type VpnConnection#route_type}
  */
  readonly routeType?: string;
  /**
  * A list of tags used to associate different resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#tags VpnConnection#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * ID of the VPC. Required if vpn gateway is not in `CCN` type, and doesn't make sense for `CCN` vpn gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#vpc_id VpnConnection#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * ID of the VPN gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#vpn_gateway_id VpnConnection#vpn_gateway_id}
  */
  readonly vpnGatewayId: string;
  /**
  * bgp_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#bgp_config VpnConnection#bgp_config}
  */
  readonly bgpConfig?: VpnConnectionBgpConfig;
  /**
  * health_check_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#health_check_config VpnConnection#health_check_config}
  */
  readonly healthCheckConfig?: VpnConnectionHealthCheckConfig;
  /**
  * security_group_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#security_group_policy VpnConnection#security_group_policy}
  */
  readonly securityGroupPolicy?: VpnConnectionSecurityGroupPolicy[] | cdktf.IResolvable;
}
export interface VpnConnectionBgpConfig {
  /**
  * Cloud BGP address. It must be allocated from within the BGP tunnel network segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#local_bgp_ip VpnConnection#local_bgp_ip}
  */
  readonly localBgpIp: string;
  /**
  * User side BGP address. It must be allocated from within the BGP tunnel network segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#remote_bgp_ip VpnConnection#remote_bgp_ip}
  */
  readonly remoteBgpIp: string;
  /**
  * BGP tunnel segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#tunnel_cidr VpnConnection#tunnel_cidr}
  */
  readonly tunnelCidr: string;
}

export function vpnConnectionBgpConfigToTerraform(struct?: VpnConnectionBgpConfigOutputReference | VpnConnectionBgpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_bgp_ip: cdktf.stringToTerraform(struct!.localBgpIp),
    remote_bgp_ip: cdktf.stringToTerraform(struct!.remoteBgpIp),
    tunnel_cidr: cdktf.stringToTerraform(struct!.tunnelCidr),
  }
}


export function vpnConnectionBgpConfigToHclTerraform(struct?: VpnConnectionBgpConfigOutputReference | VpnConnectionBgpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_bgp_ip: {
      value: cdktf.stringToHclTerraform(struct!.localBgpIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_bgp_ip: {
      value: cdktf.stringToHclTerraform(struct!.remoteBgpIp),
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
    if (this._localBgpIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.localBgpIp = this._localBgpIp;
    }
    if (this._remoteBgpIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteBgpIp = this._remoteBgpIp;
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
      this._localBgpIp = undefined;
      this._remoteBgpIp = undefined;
      this._tunnelCidr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localBgpIp = value.localBgpIp;
      this._remoteBgpIp = value.remoteBgpIp;
      this._tunnelCidr = value.tunnelCidr;
    }
  }

  // local_bgp_ip - computed: false, optional: false, required: true
  private _localBgpIp?: string; 
  public get localBgpIp() {
    return this.getStringAttribute('local_bgp_ip');
  }
  public set localBgpIp(value: string) {
    this._localBgpIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localBgpIpInput() {
    return this._localBgpIp;
  }

  // remote_bgp_ip - computed: false, optional: false, required: true
  private _remoteBgpIp?: string; 
  public get remoteBgpIp() {
    return this.getStringAttribute('remote_bgp_ip');
  }
  public set remoteBgpIp(value: string) {
    this._remoteBgpIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteBgpIpInput() {
    return this._remoteBgpIp;
  }

  // tunnel_cidr - computed: false, optional: false, required: true
  private _tunnelCidr?: string; 
  public get tunnelCidr() {
    return this.getStringAttribute('tunnel_cidr');
  }
  public set tunnelCidr(value: string) {
    this._tunnelCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelCidrInput() {
    return this._tunnelCidr;
  }
}
export interface VpnConnectionHealthCheckConfig {
  /**
  * Detection interval, Tencent Cloud's interval between two health checks, range [1000-5000], Unit: ms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#probe_interval VpnConnection#probe_interval}
  */
  readonly probeInterval?: number;
  /**
  * Detection times, perform route switching after N consecutive health check failures, range [3-8], Unit: times.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#probe_threshold VpnConnection#probe_threshold}
  */
  readonly probeThreshold?: number;
  /**
  * Detection timeout, range [10-5000], Unit: ms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#probe_timeout VpnConnection#probe_timeout}
  */
  readonly probeTimeout?: number;
  /**
  * Detection mode, default is `NQA`, cannot be modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#probe_type VpnConnection#probe_type}
  */
  readonly probeType?: string;
}

export function vpnConnectionHealthCheckConfigToTerraform(struct?: VpnConnectionHealthCheckConfigOutputReference | VpnConnectionHealthCheckConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    probe_interval: cdktf.numberToTerraform(struct!.probeInterval),
    probe_threshold: cdktf.numberToTerraform(struct!.probeThreshold),
    probe_timeout: cdktf.numberToTerraform(struct!.probeTimeout),
    probe_type: cdktf.stringToTerraform(struct!.probeType),
  }
}


export function vpnConnectionHealthCheckConfigToHclTerraform(struct?: VpnConnectionHealthCheckConfigOutputReference | VpnConnectionHealthCheckConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    probe_interval: {
      value: cdktf.numberToHclTerraform(struct!.probeInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    probe_threshold: {
      value: cdktf.numberToHclTerraform(struct!.probeThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    probe_timeout: {
      value: cdktf.numberToHclTerraform(struct!.probeTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    probe_type: {
      value: cdktf.stringToHclTerraform(struct!.probeType),
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
    if (this._probeInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeInterval = this._probeInterval;
    }
    if (this._probeThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeThreshold = this._probeThreshold;
    }
    if (this._probeTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeTimeout = this._probeTimeout;
    }
    if (this._probeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeType = this._probeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnConnectionHealthCheckConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._probeInterval = undefined;
      this._probeThreshold = undefined;
      this._probeTimeout = undefined;
      this._probeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._probeInterval = value.probeInterval;
      this._probeThreshold = value.probeThreshold;
      this._probeTimeout = value.probeTimeout;
      this._probeType = value.probeType;
    }
  }

  // probe_interval - computed: false, optional: true, required: false
  private _probeInterval?: number; 
  public get probeInterval() {
    return this.getNumberAttribute('probe_interval');
  }
  public set probeInterval(value: number) {
    this._probeInterval = value;
  }
  public resetProbeInterval() {
    this._probeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeIntervalInput() {
    return this._probeInterval;
  }

  // probe_threshold - computed: false, optional: true, required: false
  private _probeThreshold?: number; 
  public get probeThreshold() {
    return this.getNumberAttribute('probe_threshold');
  }
  public set probeThreshold(value: number) {
    this._probeThreshold = value;
  }
  public resetProbeThreshold() {
    this._probeThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeThresholdInput() {
    return this._probeThreshold;
  }

  // probe_timeout - computed: false, optional: true, required: false
  private _probeTimeout?: number; 
  public get probeTimeout() {
    return this.getNumberAttribute('probe_timeout');
  }
  public set probeTimeout(value: number) {
    this._probeTimeout = value;
  }
  public resetProbeTimeout() {
    this._probeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeTimeoutInput() {
    return this._probeTimeout;
  }

  // probe_type - computed: false, optional: true, required: false
  private _probeType?: string; 
  public get probeType() {
    return this.getStringAttribute('probe_type');
  }
  public set probeType(value: string) {
    this._probeType = value;
  }
  public resetProbeType() {
    this._probeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeTypeInput() {
    return this._probeType;
  }
}
export interface VpnConnectionSecurityGroupPolicy {
  /**
  * Local cidr block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#local_cidr_block VpnConnection#local_cidr_block}
  */
  readonly localCidrBlock: string;
  /**
  * Remote cidr block list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#remote_cidr_block VpnConnection#remote_cidr_block}
  */
  readonly remoteCidrBlock: string[];
}

export function vpnConnectionSecurityGroupPolicyToTerraform(struct?: VpnConnectionSecurityGroupPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_cidr_block: cdktf.stringToTerraform(struct!.localCidrBlock),
    remote_cidr_block: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remoteCidrBlock),
  }
}


export function vpnConnectionSecurityGroupPolicyToHclTerraform(struct?: VpnConnectionSecurityGroupPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.localCidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_cidr_block: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remoteCidrBlock),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnConnectionSecurityGroupPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnConnectionSecurityGroupPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localCidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.localCidrBlock = this._localCidrBlock;
    }
    if (this._remoteCidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteCidrBlock = this._remoteCidrBlock;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnConnectionSecurityGroupPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localCidrBlock = undefined;
      this._remoteCidrBlock = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localCidrBlock = value.localCidrBlock;
      this._remoteCidrBlock = value.remoteCidrBlock;
    }
  }

  // local_cidr_block - computed: false, optional: false, required: true
  private _localCidrBlock?: string; 
  public get localCidrBlock() {
    return this.getStringAttribute('local_cidr_block');
  }
  public set localCidrBlock(value: string) {
    this._localCidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localCidrBlockInput() {
    return this._localCidrBlock;
  }

  // remote_cidr_block - computed: false, optional: false, required: true
  private _remoteCidrBlock?: string[]; 
  public get remoteCidrBlock() {
    return cdktf.Fn.tolist(this.getListAttribute('remote_cidr_block'));
  }
  public set remoteCidrBlock(value: string[]) {
    this._remoteCidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteCidrBlockInput() {
    return this._remoteCidrBlock;
  }
}

export class VpnConnectionSecurityGroupPolicyList extends cdktf.ComplexList {
  public internalValue? : VpnConnectionSecurityGroupPolicy[] | cdktf.IResolvable

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
  public get(index: number): VpnConnectionSecurityGroupPolicyOutputReference {
    return new VpnConnectionSecurityGroupPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection tencentcloud_vpn_connection}
*/
export class VpnConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vpn_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnConnection to import
  * @param importFromId The id of the existing VpnConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vpn_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_connection tencentcloud_vpn_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: VpnConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vpn_connection',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
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
    this._dpdAction = config.dpdAction;
    this._dpdEnable = config.dpdEnable;
    this._dpdTimeout = config.dpdTimeout;
    this._enableHealthCheck = config.enableHealthCheck;
    this._healthCheckLocalIp = config.healthCheckLocalIp;
    this._healthCheckRemoteIp = config.healthCheckRemoteIp;
    this._id = config.id;
    this._ikeDhGroupName = config.ikeDhGroupName;
    this._ikeExchangeMode = config.ikeExchangeMode;
    this._ikeLocalAddress = config.ikeLocalAddress;
    this._ikeLocalFqdnName = config.ikeLocalFqdnName;
    this._ikeLocalIdentity = config.ikeLocalIdentity;
    this._ikeProtoAuthenAlgorithm = config.ikeProtoAuthenAlgorithm;
    this._ikeProtoEncryAlgorithm = config.ikeProtoEncryAlgorithm;
    this._ikeRemoteAddress = config.ikeRemoteAddress;
    this._ikeRemoteFqdnName = config.ikeRemoteFqdnName;
    this._ikeRemoteIdentity = config.ikeRemoteIdentity;
    this._ikeSaLifetimeSeconds = config.ikeSaLifetimeSeconds;
    this._ikeVersion = config.ikeVersion;
    this._ipsecEncryptAlgorithm = config.ipsecEncryptAlgorithm;
    this._ipsecIntegrityAlgorithm = config.ipsecIntegrityAlgorithm;
    this._ipsecPfsDhGroup = config.ipsecPfsDhGroup;
    this._ipsecSaLifetimeSeconds = config.ipsecSaLifetimeSeconds;
    this._ipsecSaLifetimeTraffic = config.ipsecSaLifetimeTraffic;
    this._name = config.name;
    this._negotiationType = config.negotiationType;
    this._preShareKey = config.preShareKey;
    this._routeType = config.routeType;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._vpnGatewayId = config.vpnGatewayId;
    this._bgpConfig.internalValue = config.bgpConfig;
    this._healthCheckConfig.internalValue = config.healthCheckConfig;
    this._securityGroupPolicy.internalValue = config.securityGroupPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // dpd_action - computed: true, optional: true, required: false
  private _dpdAction?: string; 
  public get dpdAction() {
    return this.getStringAttribute('dpd_action');
  }
  public set dpdAction(value: string) {
    this._dpdAction = value;
  }
  public resetDpdAction() {
    this._dpdAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdActionInput() {
    return this._dpdAction;
  }

  // dpd_enable - computed: true, optional: true, required: false
  private _dpdEnable?: number; 
  public get dpdEnable() {
    return this.getNumberAttribute('dpd_enable');
  }
  public set dpdEnable(value: number) {
    this._dpdEnable = value;
  }
  public resetDpdEnable() {
    this._dpdEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdEnableInput() {
    return this._dpdEnable;
  }

  // dpd_timeout - computed: true, optional: true, required: false
  private _dpdTimeout?: number; 
  public get dpdTimeout() {
    return this.getNumberAttribute('dpd_timeout');
  }
  public set dpdTimeout(value: number) {
    this._dpdTimeout = value;
  }
  public resetDpdTimeout() {
    this._dpdTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdTimeoutInput() {
    return this._dpdTimeout;
  }

  // enable_health_check - computed: true, optional: true, required: false
  private _enableHealthCheck?: boolean | cdktf.IResolvable; 
  public get enableHealthCheck() {
    return this.getBooleanAttribute('enable_health_check');
  }
  public set enableHealthCheck(value: boolean | cdktf.IResolvable) {
    this._enableHealthCheck = value;
  }
  public resetEnableHealthCheck() {
    this._enableHealthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHealthCheckInput() {
    return this._enableHealthCheck;
  }

  // encrypt_proto - computed: true, optional: false, required: false
  public get encryptProto() {
    return this.getStringAttribute('encrypt_proto');
  }

  // health_check_local_ip - computed: true, optional: true, required: false
  private _healthCheckLocalIp?: string; 
  public get healthCheckLocalIp() {
    return this.getStringAttribute('health_check_local_ip');
  }
  public set healthCheckLocalIp(value: string) {
    this._healthCheckLocalIp = value;
  }
  public resetHealthCheckLocalIp() {
    this._healthCheckLocalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckLocalIpInput() {
    return this._healthCheckLocalIp;
  }

  // health_check_remote_ip - computed: true, optional: true, required: false
  private _healthCheckRemoteIp?: string; 
  public get healthCheckRemoteIp() {
    return this.getStringAttribute('health_check_remote_ip');
  }
  public set healthCheckRemoteIp(value: string) {
    this._healthCheckRemoteIp = value;
  }
  public resetHealthCheckRemoteIp() {
    this._healthCheckRemoteIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckRemoteIpInput() {
    return this._healthCheckRemoteIp;
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

  // ike_dh_group_name - computed: false, optional: true, required: false
  private _ikeDhGroupName?: string; 
  public get ikeDhGroupName() {
    return this.getStringAttribute('ike_dh_group_name');
  }
  public set ikeDhGroupName(value: string) {
    this._ikeDhGroupName = value;
  }
  public resetIkeDhGroupName() {
    this._ikeDhGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeDhGroupNameInput() {
    return this._ikeDhGroupName;
  }

  // ike_exchange_mode - computed: false, optional: true, required: false
  private _ikeExchangeMode?: string; 
  public get ikeExchangeMode() {
    return this.getStringAttribute('ike_exchange_mode');
  }
  public set ikeExchangeMode(value: string) {
    this._ikeExchangeMode = value;
  }
  public resetIkeExchangeMode() {
    this._ikeExchangeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeExchangeModeInput() {
    return this._ikeExchangeMode;
  }

  // ike_local_address - computed: false, optional: true, required: false
  private _ikeLocalAddress?: string; 
  public get ikeLocalAddress() {
    return this.getStringAttribute('ike_local_address');
  }
  public set ikeLocalAddress(value: string) {
    this._ikeLocalAddress = value;
  }
  public resetIkeLocalAddress() {
    this._ikeLocalAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeLocalAddressInput() {
    return this._ikeLocalAddress;
  }

  // ike_local_fqdn_name - computed: true, optional: true, required: false
  private _ikeLocalFqdnName?: string; 
  public get ikeLocalFqdnName() {
    return this.getStringAttribute('ike_local_fqdn_name');
  }
  public set ikeLocalFqdnName(value: string) {
    this._ikeLocalFqdnName = value;
  }
  public resetIkeLocalFqdnName() {
    this._ikeLocalFqdnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeLocalFqdnNameInput() {
    return this._ikeLocalFqdnName;
  }

  // ike_local_identity - computed: false, optional: true, required: false
  private _ikeLocalIdentity?: string; 
  public get ikeLocalIdentity() {
    return this.getStringAttribute('ike_local_identity');
  }
  public set ikeLocalIdentity(value: string) {
    this._ikeLocalIdentity = value;
  }
  public resetIkeLocalIdentity() {
    this._ikeLocalIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeLocalIdentityInput() {
    return this._ikeLocalIdentity;
  }

  // ike_proto_authen_algorithm - computed: false, optional: true, required: false
  private _ikeProtoAuthenAlgorithm?: string; 
  public get ikeProtoAuthenAlgorithm() {
    return this.getStringAttribute('ike_proto_authen_algorithm');
  }
  public set ikeProtoAuthenAlgorithm(value: string) {
    this._ikeProtoAuthenAlgorithm = value;
  }
  public resetIkeProtoAuthenAlgorithm() {
    this._ikeProtoAuthenAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeProtoAuthenAlgorithmInput() {
    return this._ikeProtoAuthenAlgorithm;
  }

  // ike_proto_encry_algorithm - computed: false, optional: true, required: false
  private _ikeProtoEncryAlgorithm?: string; 
  public get ikeProtoEncryAlgorithm() {
    return this.getStringAttribute('ike_proto_encry_algorithm');
  }
  public set ikeProtoEncryAlgorithm(value: string) {
    this._ikeProtoEncryAlgorithm = value;
  }
  public resetIkeProtoEncryAlgorithm() {
    this._ikeProtoEncryAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeProtoEncryAlgorithmInput() {
    return this._ikeProtoEncryAlgorithm;
  }

  // ike_remote_address - computed: false, optional: true, required: false
  private _ikeRemoteAddress?: string; 
  public get ikeRemoteAddress() {
    return this.getStringAttribute('ike_remote_address');
  }
  public set ikeRemoteAddress(value: string) {
    this._ikeRemoteAddress = value;
  }
  public resetIkeRemoteAddress() {
    this._ikeRemoteAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeRemoteAddressInput() {
    return this._ikeRemoteAddress;
  }

  // ike_remote_fqdn_name - computed: true, optional: true, required: false
  private _ikeRemoteFqdnName?: string; 
  public get ikeRemoteFqdnName() {
    return this.getStringAttribute('ike_remote_fqdn_name');
  }
  public set ikeRemoteFqdnName(value: string) {
    this._ikeRemoteFqdnName = value;
  }
  public resetIkeRemoteFqdnName() {
    this._ikeRemoteFqdnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeRemoteFqdnNameInput() {
    return this._ikeRemoteFqdnName;
  }

  // ike_remote_identity - computed: false, optional: true, required: false
  private _ikeRemoteIdentity?: string; 
  public get ikeRemoteIdentity() {
    return this.getStringAttribute('ike_remote_identity');
  }
  public set ikeRemoteIdentity(value: string) {
    this._ikeRemoteIdentity = value;
  }
  public resetIkeRemoteIdentity() {
    this._ikeRemoteIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeRemoteIdentityInput() {
    return this._ikeRemoteIdentity;
  }

  // ike_sa_lifetime_seconds - computed: false, optional: true, required: false
  private _ikeSaLifetimeSeconds?: number; 
  public get ikeSaLifetimeSeconds() {
    return this.getNumberAttribute('ike_sa_lifetime_seconds');
  }
  public set ikeSaLifetimeSeconds(value: number) {
    this._ikeSaLifetimeSeconds = value;
  }
  public resetIkeSaLifetimeSeconds() {
    this._ikeSaLifetimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSaLifetimeSecondsInput() {
    return this._ikeSaLifetimeSeconds;
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

  // ipsec_encrypt_algorithm - computed: false, optional: true, required: false
  private _ipsecEncryptAlgorithm?: string; 
  public get ipsecEncryptAlgorithm() {
    return this.getStringAttribute('ipsec_encrypt_algorithm');
  }
  public set ipsecEncryptAlgorithm(value: string) {
    this._ipsecEncryptAlgorithm = value;
  }
  public resetIpsecEncryptAlgorithm() {
    this._ipsecEncryptAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecEncryptAlgorithmInput() {
    return this._ipsecEncryptAlgorithm;
  }

  // ipsec_integrity_algorithm - computed: false, optional: true, required: false
  private _ipsecIntegrityAlgorithm?: string; 
  public get ipsecIntegrityAlgorithm() {
    return this.getStringAttribute('ipsec_integrity_algorithm');
  }
  public set ipsecIntegrityAlgorithm(value: string) {
    this._ipsecIntegrityAlgorithm = value;
  }
  public resetIpsecIntegrityAlgorithm() {
    this._ipsecIntegrityAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecIntegrityAlgorithmInput() {
    return this._ipsecIntegrityAlgorithm;
  }

  // ipsec_pfs_dh_group - computed: false, optional: true, required: false
  private _ipsecPfsDhGroup?: string; 
  public get ipsecPfsDhGroup() {
    return this.getStringAttribute('ipsec_pfs_dh_group');
  }
  public set ipsecPfsDhGroup(value: string) {
    this._ipsecPfsDhGroup = value;
  }
  public resetIpsecPfsDhGroup() {
    this._ipsecPfsDhGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPfsDhGroupInput() {
    return this._ipsecPfsDhGroup;
  }

  // ipsec_sa_lifetime_seconds - computed: false, optional: true, required: false
  private _ipsecSaLifetimeSeconds?: number; 
  public get ipsecSaLifetimeSeconds() {
    return this.getNumberAttribute('ipsec_sa_lifetime_seconds');
  }
  public set ipsecSaLifetimeSeconds(value: number) {
    this._ipsecSaLifetimeSeconds = value;
  }
  public resetIpsecSaLifetimeSeconds() {
    this._ipsecSaLifetimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecSaLifetimeSecondsInput() {
    return this._ipsecSaLifetimeSeconds;
  }

  // ipsec_sa_lifetime_traffic - computed: false, optional: true, required: false
  private _ipsecSaLifetimeTraffic?: number; 
  public get ipsecSaLifetimeTraffic() {
    return this.getNumberAttribute('ipsec_sa_lifetime_traffic');
  }
  public set ipsecSaLifetimeTraffic(value: number) {
    this._ipsecSaLifetimeTraffic = value;
  }
  public resetIpsecSaLifetimeTraffic() {
    this._ipsecSaLifetimeTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecSaLifetimeTrafficInput() {
    return this._ipsecSaLifetimeTraffic;
  }

  // is_ccn_type - computed: true, optional: false, required: false
  public get isCcnType() {
    return this.getBooleanAttribute('is_ccn_type');
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

  // negotiation_type - computed: true, optional: true, required: false
  private _negotiationType?: string; 
  public get negotiationType() {
    return this.getStringAttribute('negotiation_type');
  }
  public set negotiationType(value: string) {
    this._negotiationType = value;
  }
  public resetNegotiationType() {
    this._negotiationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negotiationTypeInput() {
    return this._negotiationType;
  }

  // net_status - computed: true, optional: false, required: false
  public get netStatus() {
    return this.getStringAttribute('net_status');
  }

  // pre_share_key - computed: false, optional: false, required: true
  private _preShareKey?: string; 
  public get preShareKey() {
    return this.getStringAttribute('pre_share_key');
  }
  public set preShareKey(value: string) {
    this._preShareKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preShareKeyInput() {
    return this._preShareKey;
  }

  // route_type - computed: true, optional: true, required: false
  private _routeType?: string; 
  public get routeType() {
    return this.getStringAttribute('route_type');
  }
  public set routeType(value: string) {
    this._routeType = value;
  }
  public resetRouteType() {
    this._routeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTypeInput() {
    return this._routeType;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
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

  // vpn_proto - computed: true, optional: false, required: false
  public get vpnProto() {
    return this.getStringAttribute('vpn_proto');
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

  // security_group_policy - computed: false, optional: true, required: false
  private _securityGroupPolicy = new VpnConnectionSecurityGroupPolicyList(this, "security_group_policy", true);
  public get securityGroupPolicy() {
    return this._securityGroupPolicy;
  }
  public putSecurityGroupPolicy(value: VpnConnectionSecurityGroupPolicy[] | cdktf.IResolvable) {
    this._securityGroupPolicy.internalValue = value;
  }
  public resetSecurityGroupPolicy() {
    this._securityGroupPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupPolicyInput() {
    return this._securityGroupPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      customer_gateway_id: cdktf.stringToTerraform(this._customerGatewayId),
      dpd_action: cdktf.stringToTerraform(this._dpdAction),
      dpd_enable: cdktf.numberToTerraform(this._dpdEnable),
      dpd_timeout: cdktf.numberToTerraform(this._dpdTimeout),
      enable_health_check: cdktf.booleanToTerraform(this._enableHealthCheck),
      health_check_local_ip: cdktf.stringToTerraform(this._healthCheckLocalIp),
      health_check_remote_ip: cdktf.stringToTerraform(this._healthCheckRemoteIp),
      id: cdktf.stringToTerraform(this._id),
      ike_dh_group_name: cdktf.stringToTerraform(this._ikeDhGroupName),
      ike_exchange_mode: cdktf.stringToTerraform(this._ikeExchangeMode),
      ike_local_address: cdktf.stringToTerraform(this._ikeLocalAddress),
      ike_local_fqdn_name: cdktf.stringToTerraform(this._ikeLocalFqdnName),
      ike_local_identity: cdktf.stringToTerraform(this._ikeLocalIdentity),
      ike_proto_authen_algorithm: cdktf.stringToTerraform(this._ikeProtoAuthenAlgorithm),
      ike_proto_encry_algorithm: cdktf.stringToTerraform(this._ikeProtoEncryAlgorithm),
      ike_remote_address: cdktf.stringToTerraform(this._ikeRemoteAddress),
      ike_remote_fqdn_name: cdktf.stringToTerraform(this._ikeRemoteFqdnName),
      ike_remote_identity: cdktf.stringToTerraform(this._ikeRemoteIdentity),
      ike_sa_lifetime_seconds: cdktf.numberToTerraform(this._ikeSaLifetimeSeconds),
      ike_version: cdktf.stringToTerraform(this._ikeVersion),
      ipsec_encrypt_algorithm: cdktf.stringToTerraform(this._ipsecEncryptAlgorithm),
      ipsec_integrity_algorithm: cdktf.stringToTerraform(this._ipsecIntegrityAlgorithm),
      ipsec_pfs_dh_group: cdktf.stringToTerraform(this._ipsecPfsDhGroup),
      ipsec_sa_lifetime_seconds: cdktf.numberToTerraform(this._ipsecSaLifetimeSeconds),
      ipsec_sa_lifetime_traffic: cdktf.numberToTerraform(this._ipsecSaLifetimeTraffic),
      name: cdktf.stringToTerraform(this._name),
      negotiation_type: cdktf.stringToTerraform(this._negotiationType),
      pre_share_key: cdktf.stringToTerraform(this._preShareKey),
      route_type: cdktf.stringToTerraform(this._routeType),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vpn_gateway_id: cdktf.stringToTerraform(this._vpnGatewayId),
      bgp_config: vpnConnectionBgpConfigToTerraform(this._bgpConfig.internalValue),
      health_check_config: vpnConnectionHealthCheckConfigToTerraform(this._healthCheckConfig.internalValue),
      security_group_policy: cdktf.listMapper(vpnConnectionSecurityGroupPolicyToTerraform, true)(this._securityGroupPolicy.internalValue),
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
      dpd_action: {
        value: cdktf.stringToHclTerraform(this._dpdAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dpd_enable: {
        value: cdktf.numberToHclTerraform(this._dpdEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dpd_timeout: {
        value: cdktf.numberToHclTerraform(this._dpdTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_health_check: {
        value: cdktf.booleanToHclTerraform(this._enableHealthCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      health_check_local_ip: {
        value: cdktf.stringToHclTerraform(this._healthCheckLocalIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_remote_ip: {
        value: cdktf.stringToHclTerraform(this._healthCheckRemoteIp),
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
      ike_dh_group_name: {
        value: cdktf.stringToHclTerraform(this._ikeDhGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_exchange_mode: {
        value: cdktf.stringToHclTerraform(this._ikeExchangeMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_local_address: {
        value: cdktf.stringToHclTerraform(this._ikeLocalAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_local_fqdn_name: {
        value: cdktf.stringToHclTerraform(this._ikeLocalFqdnName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_local_identity: {
        value: cdktf.stringToHclTerraform(this._ikeLocalIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_proto_authen_algorithm: {
        value: cdktf.stringToHclTerraform(this._ikeProtoAuthenAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_proto_encry_algorithm: {
        value: cdktf.stringToHclTerraform(this._ikeProtoEncryAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_remote_address: {
        value: cdktf.stringToHclTerraform(this._ikeRemoteAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_remote_fqdn_name: {
        value: cdktf.stringToHclTerraform(this._ikeRemoteFqdnName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_remote_identity: {
        value: cdktf.stringToHclTerraform(this._ikeRemoteIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_sa_lifetime_seconds: {
        value: cdktf.numberToHclTerraform(this._ikeSaLifetimeSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ike_version: {
        value: cdktf.stringToHclTerraform(this._ikeVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_encrypt_algorithm: {
        value: cdktf.stringToHclTerraform(this._ipsecEncryptAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_integrity_algorithm: {
        value: cdktf.stringToHclTerraform(this._ipsecIntegrityAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_pfs_dh_group: {
        value: cdktf.stringToHclTerraform(this._ipsecPfsDhGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_sa_lifetime_seconds: {
        value: cdktf.numberToHclTerraform(this._ipsecSaLifetimeSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipsec_sa_lifetime_traffic: {
        value: cdktf.numberToHclTerraform(this._ipsecSaLifetimeTraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      negotiation_type: {
        value: cdktf.stringToHclTerraform(this._negotiationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_share_key: {
        value: cdktf.stringToHclTerraform(this._preShareKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_type: {
        value: cdktf.stringToHclTerraform(this._routeType),
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
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
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
      security_group_policy: {
        value: cdktf.listMapperHcl(vpnConnectionSecurityGroupPolicyToHclTerraform, true)(this._securityGroupPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VpnConnectionSecurityGroupPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
