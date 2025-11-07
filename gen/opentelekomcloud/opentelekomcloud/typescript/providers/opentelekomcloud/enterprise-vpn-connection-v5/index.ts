// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnterpriseVpnConnectionV5Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#customer_gateway_id EnterpriseVpnConnectionV5#customer_gateway_id}
  */
  readonly customerGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#enable_nqa EnterpriseVpnConnectionV5#enable_nqa}
  */
  readonly enableNqa?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#gateway_id EnterpriseVpnConnectionV5#gateway_id}
  */
  readonly gatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#gateway_ip EnterpriseVpnConnectionV5#gateway_ip}
  */
  readonly gatewayIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#ha_role EnterpriseVpnConnectionV5#ha_role}
  */
  readonly haRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#id EnterpriseVpnConnectionV5#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#name EnterpriseVpnConnectionV5#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#peer_subnets EnterpriseVpnConnectionV5#peer_subnets}
  */
  readonly peerSubnets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#psk EnterpriseVpnConnectionV5#psk}
  */
  readonly psk: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#tags EnterpriseVpnConnectionV5#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#tunnel_local_address EnterpriseVpnConnectionV5#tunnel_local_address}
  */
  readonly tunnelLocalAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#tunnel_peer_address EnterpriseVpnConnectionV5#tunnel_peer_address}
  */
  readonly tunnelPeerAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#vpn_type EnterpriseVpnConnectionV5#vpn_type}
  */
  readonly vpnType: string;
  /**
  * ikepolicy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#ikepolicy EnterpriseVpnConnectionV5#ikepolicy}
  */
  readonly ikepolicy?: EnterpriseVpnConnectionV5Ikepolicy;
  /**
  * ipsecpolicy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#ipsecpolicy EnterpriseVpnConnectionV5#ipsecpolicy}
  */
  readonly ipsecpolicy?: EnterpriseVpnConnectionV5Ipsecpolicy;
  /**
  * policy_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#policy_rules EnterpriseVpnConnectionV5#policy_rules}
  */
  readonly policyRules?: EnterpriseVpnConnectionV5PolicyRules[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#timeouts EnterpriseVpnConnectionV5#timeouts}
  */
  readonly timeouts?: EnterpriseVpnConnectionV5Timeouts;
}
export interface EnterpriseVpnConnectionV5IkepolicyDpd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#interval EnterpriseVpnConnectionV5#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#msg EnterpriseVpnConnectionV5#msg}
  */
  readonly msg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#timeout EnterpriseVpnConnectionV5#timeout}
  */
  readonly timeout?: number;
}

export function enterpriseVpnConnectionV5IkepolicyDpdToTerraform(struct?: EnterpriseVpnConnectionV5IkepolicyDpdOutputReference | EnterpriseVpnConnectionV5IkepolicyDpd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    msg: cdktf.stringToTerraform(struct!.msg),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function enterpriseVpnConnectionV5IkepolicyDpdToHclTerraform(struct?: EnterpriseVpnConnectionV5IkepolicyDpdOutputReference | EnterpriseVpnConnectionV5IkepolicyDpd): any {
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
    msg: {
      value: cdktf.stringToHclTerraform(struct!.msg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnterpriseVpnConnectionV5IkepolicyDpdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnterpriseVpnConnectionV5IkepolicyDpd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._msg !== undefined) {
      hasAnyValues = true;
      internalValueResult.msg = this._msg;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnterpriseVpnConnectionV5IkepolicyDpd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._msg = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._msg = value.msg;
      this._timeout = value.timeout;
    }
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

  // msg - computed: true, optional: true, required: false
  private _msg?: string; 
  public get msg() {
    return this.getStringAttribute('msg');
  }
  public set msg(value: string) {
    this._msg = value;
  }
  public resetMsg() {
    this._msg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgInput() {
    return this._msg;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface EnterpriseVpnConnectionV5Ikepolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#authentication_algorithm EnterpriseVpnConnectionV5#authentication_algorithm}
  */
  readonly authenticationAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#authentication_method EnterpriseVpnConnectionV5#authentication_method}
  */
  readonly authenticationMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#dh_group EnterpriseVpnConnectionV5#dh_group}
  */
  readonly dhGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#encryption_algorithm EnterpriseVpnConnectionV5#encryption_algorithm}
  */
  readonly encryptionAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#ike_version EnterpriseVpnConnectionV5#ike_version}
  */
  readonly ikeVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#lifetime_seconds EnterpriseVpnConnectionV5#lifetime_seconds}
  */
  readonly lifetimeSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#local_id EnterpriseVpnConnectionV5#local_id}
  */
  readonly localId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#local_id_type EnterpriseVpnConnectionV5#local_id_type}
  */
  readonly localIdType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#peer_id EnterpriseVpnConnectionV5#peer_id}
  */
  readonly peerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#peer_id_type EnterpriseVpnConnectionV5#peer_id_type}
  */
  readonly peerIdType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#phase_one_negotiation_mode EnterpriseVpnConnectionV5#phase_one_negotiation_mode}
  */
  readonly phaseOneNegotiationMode?: string;
  /**
  * dpd block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#dpd EnterpriseVpnConnectionV5#dpd}
  */
  readonly dpd?: EnterpriseVpnConnectionV5IkepolicyDpd;
}

export function enterpriseVpnConnectionV5IkepolicyToTerraform(struct?: EnterpriseVpnConnectionV5IkepolicyOutputReference | EnterpriseVpnConnectionV5Ikepolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_algorithm: cdktf.stringToTerraform(struct!.authenticationAlgorithm),
    authentication_method: cdktf.stringToTerraform(struct!.authenticationMethod),
    dh_group: cdktf.stringToTerraform(struct!.dhGroup),
    encryption_algorithm: cdktf.stringToTerraform(struct!.encryptionAlgorithm),
    ike_version: cdktf.stringToTerraform(struct!.ikeVersion),
    lifetime_seconds: cdktf.numberToTerraform(struct!.lifetimeSeconds),
    local_id: cdktf.stringToTerraform(struct!.localId),
    local_id_type: cdktf.stringToTerraform(struct!.localIdType),
    peer_id: cdktf.stringToTerraform(struct!.peerId),
    peer_id_type: cdktf.stringToTerraform(struct!.peerIdType),
    phase_one_negotiation_mode: cdktf.stringToTerraform(struct!.phaseOneNegotiationMode),
    dpd: enterpriseVpnConnectionV5IkepolicyDpdToTerraform(struct!.dpd),
  }
}


export function enterpriseVpnConnectionV5IkepolicyToHclTerraform(struct?: EnterpriseVpnConnectionV5IkepolicyOutputReference | EnterpriseVpnConnectionV5Ikepolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.authenticationAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_method: {
      value: cdktf.stringToHclTerraform(struct!.authenticationMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dh_group: {
      value: cdktf.stringToHclTerraform(struct!.dhGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.encryptionAlgorithm),
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
    lifetime_seconds: {
      value: cdktf.numberToHclTerraform(struct!.lifetimeSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_id: {
      value: cdktf.stringToHclTerraform(struct!.localId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_id_type: {
      value: cdktf.stringToHclTerraform(struct!.localIdType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_id: {
      value: cdktf.stringToHclTerraform(struct!.peerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_id_type: {
      value: cdktf.stringToHclTerraform(struct!.peerIdType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phase_one_negotiation_mode: {
      value: cdktf.stringToHclTerraform(struct!.phaseOneNegotiationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dpd: {
      value: enterpriseVpnConnectionV5IkepolicyDpdToHclTerraform(struct!.dpd),
      isBlock: true,
      type: "list",
      storageClassType: "EnterpriseVpnConnectionV5IkepolicyDpdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnterpriseVpnConnectionV5IkepolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnterpriseVpnConnectionV5Ikepolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationAlgorithm = this._authenticationAlgorithm;
    }
    if (this._authenticationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationMethod = this._authenticationMethod;
    }
    if (this._dhGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhGroup = this._dhGroup;
    }
    if (this._encryptionAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionAlgorithm = this._encryptionAlgorithm;
    }
    if (this._ikeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeVersion = this._ikeVersion;
    }
    if (this._lifetimeSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetimeSeconds = this._lifetimeSeconds;
    }
    if (this._localId !== undefined) {
      hasAnyValues = true;
      internalValueResult.localId = this._localId;
    }
    if (this._localIdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.localIdType = this._localIdType;
    }
    if (this._peerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerId = this._peerId;
    }
    if (this._peerIdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerIdType = this._peerIdType;
    }
    if (this._phaseOneNegotiationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.phaseOneNegotiationMode = this._phaseOneNegotiationMode;
    }
    if (this._dpd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpd = this._dpd?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnterpriseVpnConnectionV5Ikepolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationAlgorithm = undefined;
      this._authenticationMethod = undefined;
      this._dhGroup = undefined;
      this._encryptionAlgorithm = undefined;
      this._ikeVersion = undefined;
      this._lifetimeSeconds = undefined;
      this._localId = undefined;
      this._localIdType = undefined;
      this._peerId = undefined;
      this._peerIdType = undefined;
      this._phaseOneNegotiationMode = undefined;
      this._dpd.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationAlgorithm = value.authenticationAlgorithm;
      this._authenticationMethod = value.authenticationMethod;
      this._dhGroup = value.dhGroup;
      this._encryptionAlgorithm = value.encryptionAlgorithm;
      this._ikeVersion = value.ikeVersion;
      this._lifetimeSeconds = value.lifetimeSeconds;
      this._localId = value.localId;
      this._localIdType = value.localIdType;
      this._peerId = value.peerId;
      this._peerIdType = value.peerIdType;
      this._phaseOneNegotiationMode = value.phaseOneNegotiationMode;
      this._dpd.internalValue = value.dpd;
    }
  }

  // authentication_algorithm - computed: true, optional: true, required: false
  private _authenticationAlgorithm?: string; 
  public get authenticationAlgorithm() {
    return this.getStringAttribute('authentication_algorithm');
  }
  public set authenticationAlgorithm(value: string) {
    this._authenticationAlgorithm = value;
  }
  public resetAuthenticationAlgorithm() {
    this._authenticationAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationAlgorithmInput() {
    return this._authenticationAlgorithm;
  }

  // authentication_method - computed: true, optional: true, required: false
  private _authenticationMethod?: string; 
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }
  public set authenticationMethod(value: string) {
    this._authenticationMethod = value;
  }
  public resetAuthenticationMethod() {
    this._authenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMethodInput() {
    return this._authenticationMethod;
  }

  // dh_group - computed: true, optional: true, required: false
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

  // encryption_algorithm - computed: true, optional: true, required: false
  private _encryptionAlgorithm?: string; 
  public get encryptionAlgorithm() {
    return this.getStringAttribute('encryption_algorithm');
  }
  public set encryptionAlgorithm(value: string) {
    this._encryptionAlgorithm = value;
  }
  public resetEncryptionAlgorithm() {
    this._encryptionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAlgorithmInput() {
    return this._encryptionAlgorithm;
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

  // lifetime_seconds - computed: true, optional: true, required: false
  private _lifetimeSeconds?: number; 
  public get lifetimeSeconds() {
    return this.getNumberAttribute('lifetime_seconds');
  }
  public set lifetimeSeconds(value: number) {
    this._lifetimeSeconds = value;
  }
  public resetLifetimeSeconds() {
    this._lifetimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeSecondsInput() {
    return this._lifetimeSeconds;
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

  // local_id_type - computed: true, optional: true, required: false
  private _localIdType?: string; 
  public get localIdType() {
    return this.getStringAttribute('local_id_type');
  }
  public set localIdType(value: string) {
    this._localIdType = value;
  }
  public resetLocalIdType() {
    this._localIdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIdTypeInput() {
    return this._localIdType;
  }

  // peer_id - computed: true, optional: true, required: false
  private _peerId?: string; 
  public get peerId() {
    return this.getStringAttribute('peer_id');
  }
  public set peerId(value: string) {
    this._peerId = value;
  }
  public resetPeerId() {
    this._peerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIdInput() {
    return this._peerId;
  }

  // peer_id_type - computed: true, optional: true, required: false
  private _peerIdType?: string; 
  public get peerIdType() {
    return this.getStringAttribute('peer_id_type');
  }
  public set peerIdType(value: string) {
    this._peerIdType = value;
  }
  public resetPeerIdType() {
    this._peerIdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIdTypeInput() {
    return this._peerIdType;
  }

  // phase_one_negotiation_mode - computed: true, optional: true, required: false
  private _phaseOneNegotiationMode?: string; 
  public get phaseOneNegotiationMode() {
    return this.getStringAttribute('phase_one_negotiation_mode');
  }
  public set phaseOneNegotiationMode(value: string) {
    this._phaseOneNegotiationMode = value;
  }
  public resetPhaseOneNegotiationMode() {
    this._phaseOneNegotiationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phaseOneNegotiationModeInput() {
    return this._phaseOneNegotiationMode;
  }

  // dpd - computed: false, optional: true, required: false
  private _dpd = new EnterpriseVpnConnectionV5IkepolicyDpdOutputReference(this, "dpd");
  public get dpd() {
    return this._dpd;
  }
  public putDpd(value: EnterpriseVpnConnectionV5IkepolicyDpd) {
    this._dpd.internalValue = value;
  }
  public resetDpd() {
    this._dpd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdInput() {
    return this._dpd.internalValue;
  }
}
export interface EnterpriseVpnConnectionV5Ipsecpolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#authentication_algorithm EnterpriseVpnConnectionV5#authentication_algorithm}
  */
  readonly authenticationAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#encapsulation_mode EnterpriseVpnConnectionV5#encapsulation_mode}
  */
  readonly encapsulationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#encryption_algorithm EnterpriseVpnConnectionV5#encryption_algorithm}
  */
  readonly encryptionAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#lifetime_seconds EnterpriseVpnConnectionV5#lifetime_seconds}
  */
  readonly lifetimeSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#pfs EnterpriseVpnConnectionV5#pfs}
  */
  readonly pfs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#transform_protocol EnterpriseVpnConnectionV5#transform_protocol}
  */
  readonly transformProtocol?: string;
}

export function enterpriseVpnConnectionV5IpsecpolicyToTerraform(struct?: EnterpriseVpnConnectionV5IpsecpolicyOutputReference | EnterpriseVpnConnectionV5Ipsecpolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_algorithm: cdktf.stringToTerraform(struct!.authenticationAlgorithm),
    encapsulation_mode: cdktf.stringToTerraform(struct!.encapsulationMode),
    encryption_algorithm: cdktf.stringToTerraform(struct!.encryptionAlgorithm),
    lifetime_seconds: cdktf.numberToTerraform(struct!.lifetimeSeconds),
    pfs: cdktf.stringToTerraform(struct!.pfs),
    transform_protocol: cdktf.stringToTerraform(struct!.transformProtocol),
  }
}


export function enterpriseVpnConnectionV5IpsecpolicyToHclTerraform(struct?: EnterpriseVpnConnectionV5IpsecpolicyOutputReference | EnterpriseVpnConnectionV5Ipsecpolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.authenticationAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encapsulation_mode: {
      value: cdktf.stringToHclTerraform(struct!.encapsulationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.encryptionAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifetime_seconds: {
      value: cdktf.numberToHclTerraform(struct!.lifetimeSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pfs: {
      value: cdktf.stringToHclTerraform(struct!.pfs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transform_protocol: {
      value: cdktf.stringToHclTerraform(struct!.transformProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnterpriseVpnConnectionV5IpsecpolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnterpriseVpnConnectionV5Ipsecpolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationAlgorithm = this._authenticationAlgorithm;
    }
    if (this._encapsulationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.encapsulationMode = this._encapsulationMode;
    }
    if (this._encryptionAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionAlgorithm = this._encryptionAlgorithm;
    }
    if (this._lifetimeSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetimeSeconds = this._lifetimeSeconds;
    }
    if (this._pfs !== undefined) {
      hasAnyValues = true;
      internalValueResult.pfs = this._pfs;
    }
    if (this._transformProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformProtocol = this._transformProtocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnterpriseVpnConnectionV5Ipsecpolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationAlgorithm = undefined;
      this._encapsulationMode = undefined;
      this._encryptionAlgorithm = undefined;
      this._lifetimeSeconds = undefined;
      this._pfs = undefined;
      this._transformProtocol = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationAlgorithm = value.authenticationAlgorithm;
      this._encapsulationMode = value.encapsulationMode;
      this._encryptionAlgorithm = value.encryptionAlgorithm;
      this._lifetimeSeconds = value.lifetimeSeconds;
      this._pfs = value.pfs;
      this._transformProtocol = value.transformProtocol;
    }
  }

  // authentication_algorithm - computed: true, optional: true, required: false
  private _authenticationAlgorithm?: string; 
  public get authenticationAlgorithm() {
    return this.getStringAttribute('authentication_algorithm');
  }
  public set authenticationAlgorithm(value: string) {
    this._authenticationAlgorithm = value;
  }
  public resetAuthenticationAlgorithm() {
    this._authenticationAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationAlgorithmInput() {
    return this._authenticationAlgorithm;
  }

  // encapsulation_mode - computed: true, optional: true, required: false
  private _encapsulationMode?: string; 
  public get encapsulationMode() {
    return this.getStringAttribute('encapsulation_mode');
  }
  public set encapsulationMode(value: string) {
    this._encapsulationMode = value;
  }
  public resetEncapsulationMode() {
    this._encapsulationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationModeInput() {
    return this._encapsulationMode;
  }

  // encryption_algorithm - computed: true, optional: true, required: false
  private _encryptionAlgorithm?: string; 
  public get encryptionAlgorithm() {
    return this.getStringAttribute('encryption_algorithm');
  }
  public set encryptionAlgorithm(value: string) {
    this._encryptionAlgorithm = value;
  }
  public resetEncryptionAlgorithm() {
    this._encryptionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAlgorithmInput() {
    return this._encryptionAlgorithm;
  }

  // lifetime_seconds - computed: true, optional: true, required: false
  private _lifetimeSeconds?: number; 
  public get lifetimeSeconds() {
    return this.getNumberAttribute('lifetime_seconds');
  }
  public set lifetimeSeconds(value: number) {
    this._lifetimeSeconds = value;
  }
  public resetLifetimeSeconds() {
    this._lifetimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeSecondsInput() {
    return this._lifetimeSeconds;
  }

  // pfs - computed: true, optional: true, required: false
  private _pfs?: string; 
  public get pfs() {
    return this.getStringAttribute('pfs');
  }
  public set pfs(value: string) {
    this._pfs = value;
  }
  public resetPfs() {
    this._pfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pfsInput() {
    return this._pfs;
  }

  // transform_protocol - computed: true, optional: true, required: false
  private _transformProtocol?: string; 
  public get transformProtocol() {
    return this.getStringAttribute('transform_protocol');
  }
  public set transformProtocol(value: string) {
    this._transformProtocol = value;
  }
  public resetTransformProtocol() {
    this._transformProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformProtocolInput() {
    return this._transformProtocol;
  }
}
export interface EnterpriseVpnConnectionV5PolicyRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#destination EnterpriseVpnConnectionV5#destination}
  */
  readonly destination?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#source EnterpriseVpnConnectionV5#source}
  */
  readonly source?: string;
}

export function enterpriseVpnConnectionV5PolicyRulesToTerraform(struct?: EnterpriseVpnConnectionV5PolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destination),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function enterpriseVpnConnectionV5PolicyRulesToHclTerraform(struct?: EnterpriseVpnConnectionV5PolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destination),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnterpriseVpnConnectionV5PolicyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnterpriseVpnConnectionV5PolicyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnterpriseVpnConnectionV5PolicyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
      this._source = value.source;
    }
  }

  // destination - computed: true, optional: true, required: false
  private _destination?: string[]; 
  public get destination() {
    return this.getListAttribute('destination');
  }
  public set destination(value: string[]) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // source - computed: true, optional: true, required: false
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
}

export class EnterpriseVpnConnectionV5PolicyRulesList extends cdktf.ComplexList {
  public internalValue? : EnterpriseVpnConnectionV5PolicyRules[] | cdktf.IResolvable

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
  public get(index: number): EnterpriseVpnConnectionV5PolicyRulesOutputReference {
    return new EnterpriseVpnConnectionV5PolicyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnterpriseVpnConnectionV5Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#create EnterpriseVpnConnectionV5#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#delete EnterpriseVpnConnectionV5#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#update EnterpriseVpnConnectionV5#update}
  */
  readonly update?: string;
}

export function enterpriseVpnConnectionV5TimeoutsToTerraform(struct?: EnterpriseVpnConnectionV5Timeouts | cdktf.IResolvable): any {
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


export function enterpriseVpnConnectionV5TimeoutsToHclTerraform(struct?: EnterpriseVpnConnectionV5Timeouts | cdktf.IResolvable): any {
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

export class EnterpriseVpnConnectionV5TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EnterpriseVpnConnectionV5Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnterpriseVpnConnectionV5Timeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5 opentelekomcloud_enterprise_vpn_connection_v5}
*/
export class EnterpriseVpnConnectionV5 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_enterprise_vpn_connection_v5";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EnterpriseVpnConnectionV5 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnterpriseVpnConnectionV5 to import
  * @param importFromId The id of the existing EnterpriseVpnConnectionV5 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnterpriseVpnConnectionV5 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_enterprise_vpn_connection_v5", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/enterprise_vpn_connection_v5 opentelekomcloud_enterprise_vpn_connection_v5} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnterpriseVpnConnectionV5Config
  */
  public constructor(scope: Construct, id: string, config: EnterpriseVpnConnectionV5Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_enterprise_vpn_connection_v5',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.52'
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
    this._enableNqa = config.enableNqa;
    this._gatewayId = config.gatewayId;
    this._gatewayIp = config.gatewayIp;
    this._haRole = config.haRole;
    this._id = config.id;
    this._name = config.name;
    this._peerSubnets = config.peerSubnets;
    this._psk = config.psk;
    this._tags = config.tags;
    this._tunnelLocalAddress = config.tunnelLocalAddress;
    this._tunnelPeerAddress = config.tunnelPeerAddress;
    this._vpnType = config.vpnType;
    this._ikepolicy.internalValue = config.ikepolicy;
    this._ipsecpolicy.internalValue = config.ipsecpolicy;
    this._policyRules.internalValue = config.policyRules;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // enable_nqa - computed: true, optional: true, required: false
  private _enableNqa?: boolean | cdktf.IResolvable; 
  public get enableNqa() {
    return this.getBooleanAttribute('enable_nqa');
  }
  public set enableNqa(value: boolean | cdktf.IResolvable) {
    this._enableNqa = value;
  }
  public resetEnableNqa() {
    this._enableNqa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNqaInput() {
    return this._enableNqa;
  }

  // gateway_id - computed: false, optional: false, required: true
  private _gatewayId?: string; 
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string) {
    this._gatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdInput() {
    return this._gatewayId;
  }

  // gateway_ip - computed: false, optional: false, required: true
  private _gatewayIp?: string; 
  public get gatewayIp() {
    return this.getStringAttribute('gateway_ip');
  }
  public set gatewayIp(value: string) {
    this._gatewayIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIpInput() {
    return this._gatewayIp;
  }

  // ha_role - computed: true, optional: true, required: false
  private _haRole?: string; 
  public get haRole() {
    return this.getStringAttribute('ha_role');
  }
  public set haRole(value: string) {
    this._haRole = value;
  }
  public resetHaRole() {
    this._haRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haRoleInput() {
    return this._haRole;
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

  // peer_subnets - computed: true, optional: true, required: false
  private _peerSubnets?: string[]; 
  public get peerSubnets() {
    return this.getListAttribute('peer_subnets');
  }
  public set peerSubnets(value: string[]) {
    this._peerSubnets = value;
  }
  public resetPeerSubnets() {
    this._peerSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerSubnetsInput() {
    return this._peerSubnets;
  }

  // psk - computed: false, optional: false, required: true
  private _psk?: string; 
  public get psk() {
    return this.getStringAttribute('psk');
  }
  public set psk(value: string) {
    this._psk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pskInput() {
    return this._psk;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
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

  // tunnel_local_address - computed: true, optional: true, required: false
  private _tunnelLocalAddress?: string; 
  public get tunnelLocalAddress() {
    return this.getStringAttribute('tunnel_local_address');
  }
  public set tunnelLocalAddress(value: string) {
    this._tunnelLocalAddress = value;
  }
  public resetTunnelLocalAddress() {
    this._tunnelLocalAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelLocalAddressInput() {
    return this._tunnelLocalAddress;
  }

  // tunnel_peer_address - computed: true, optional: true, required: false
  private _tunnelPeerAddress?: string; 
  public get tunnelPeerAddress() {
    return this.getStringAttribute('tunnel_peer_address');
  }
  public set tunnelPeerAddress(value: string) {
    this._tunnelPeerAddress = value;
  }
  public resetTunnelPeerAddress() {
    this._tunnelPeerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelPeerAddressInput() {
    return this._tunnelPeerAddress;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // vpn_type - computed: false, optional: false, required: true
  private _vpnType?: string; 
  public get vpnType() {
    return this.getStringAttribute('vpn_type');
  }
  public set vpnType(value: string) {
    this._vpnType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnTypeInput() {
    return this._vpnType;
  }

  // ikepolicy - computed: false, optional: true, required: false
  private _ikepolicy = new EnterpriseVpnConnectionV5IkepolicyOutputReference(this, "ikepolicy");
  public get ikepolicy() {
    return this._ikepolicy;
  }
  public putIkepolicy(value: EnterpriseVpnConnectionV5Ikepolicy) {
    this._ikepolicy.internalValue = value;
  }
  public resetIkepolicy() {
    this._ikepolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikepolicyInput() {
    return this._ikepolicy.internalValue;
  }

  // ipsecpolicy - computed: false, optional: true, required: false
  private _ipsecpolicy = new EnterpriseVpnConnectionV5IpsecpolicyOutputReference(this, "ipsecpolicy");
  public get ipsecpolicy() {
    return this._ipsecpolicy;
  }
  public putIpsecpolicy(value: EnterpriseVpnConnectionV5Ipsecpolicy) {
    this._ipsecpolicy.internalValue = value;
  }
  public resetIpsecpolicy() {
    this._ipsecpolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecpolicyInput() {
    return this._ipsecpolicy.internalValue;
  }

  // policy_rules - computed: false, optional: true, required: false
  private _policyRules = new EnterpriseVpnConnectionV5PolicyRulesList(this, "policy_rules", false);
  public get policyRules() {
    return this._policyRules;
  }
  public putPolicyRules(value: EnterpriseVpnConnectionV5PolicyRules[] | cdktf.IResolvable) {
    this._policyRules.internalValue = value;
  }
  public resetPolicyRules() {
    this._policyRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyRulesInput() {
    return this._policyRules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EnterpriseVpnConnectionV5TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EnterpriseVpnConnectionV5Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      customer_gateway_id: cdktf.stringToTerraform(this._customerGatewayId),
      enable_nqa: cdktf.booleanToTerraform(this._enableNqa),
      gateway_id: cdktf.stringToTerraform(this._gatewayId),
      gateway_ip: cdktf.stringToTerraform(this._gatewayIp),
      ha_role: cdktf.stringToTerraform(this._haRole),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      peer_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._peerSubnets),
      psk: cdktf.stringToTerraform(this._psk),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tunnel_local_address: cdktf.stringToTerraform(this._tunnelLocalAddress),
      tunnel_peer_address: cdktf.stringToTerraform(this._tunnelPeerAddress),
      vpn_type: cdktf.stringToTerraform(this._vpnType),
      ikepolicy: enterpriseVpnConnectionV5IkepolicyToTerraform(this._ikepolicy.internalValue),
      ipsecpolicy: enterpriseVpnConnectionV5IpsecpolicyToTerraform(this._ipsecpolicy.internalValue),
      policy_rules: cdktf.listMapper(enterpriseVpnConnectionV5PolicyRulesToTerraform, true)(this._policyRules.internalValue),
      timeouts: enterpriseVpnConnectionV5TimeoutsToTerraform(this._timeouts.internalValue),
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
      enable_nqa: {
        value: cdktf.booleanToHclTerraform(this._enableNqa),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gateway_id: {
        value: cdktf.stringToHclTerraform(this._gatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_ip: {
        value: cdktf.stringToHclTerraform(this._gatewayIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_role: {
        value: cdktf.stringToHclTerraform(this._haRole),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_subnets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._peerSubnets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      psk: {
        value: cdktf.stringToHclTerraform(this._psk),
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
      tunnel_local_address: {
        value: cdktf.stringToHclTerraform(this._tunnelLocalAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_peer_address: {
        value: cdktf.stringToHclTerraform(this._tunnelPeerAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_type: {
        value: cdktf.stringToHclTerraform(this._vpnType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ikepolicy: {
        value: enterpriseVpnConnectionV5IkepolicyToHclTerraform(this._ikepolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnterpriseVpnConnectionV5IkepolicyList",
      },
      ipsecpolicy: {
        value: enterpriseVpnConnectionV5IpsecpolicyToHclTerraform(this._ipsecpolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnterpriseVpnConnectionV5IpsecpolicyList",
      },
      policy_rules: {
        value: cdktf.listMapperHcl(enterpriseVpnConnectionV5PolicyRulesToHclTerraform, true)(this._policyRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnterpriseVpnConnectionV5PolicyRulesList",
      },
      timeouts: {
        value: enterpriseVpnConnectionV5TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EnterpriseVpnConnectionV5Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
