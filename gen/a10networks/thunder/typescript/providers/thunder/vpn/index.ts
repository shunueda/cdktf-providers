// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnConfig extends cdktf.TerraformMetaArguments {
  /**
  * Support asymmetric flows pass through IPsec tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#asymmetric_flow_support Vpn#asymmetric_flow_support}
  */
  readonly asymmetricFlowSupport?: number;
  /**
  * Enable exporting vpn statstics to Harmony
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#enable_vpn_metrics Vpn#enable_vpn_metrics}
  */
  readonly enableVpnMetrics?: number;
  /**
  * Enable session extended matching for packet comes from IPsec tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#extended_matching Vpn#extended_matching}
  */
  readonly extendedMatching?: number;
  /**
  * Fragment after adding IPsec headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#fragment_after_encap Vpn#fragment_after_encap}
  */
  readonly fragmentAfterEncap?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#id Vpn#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable IKE Acceleration by Cavium Nitrox card
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#ike_acc_enable Vpn#ike_acc_enable}
  */
  readonly ikeAccEnable?: number;
  /**
  * Enable IKE negotiation logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#ike_logging_enable Vpn#ike_logging_enable}
  */
  readonly ikeLoggingEnable?: number;
  /**
  * Timeout IKE-SA in connecting state in seconds (default 600s)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#ike_sa_timeout Vpn#ike_sa_timeout}
  */
  readonly ikeSaTimeout?: number;
  /**
  * Enable cipher check, IPsec SA cipher must weaker than IKE gateway cipher, and DES/3DES/MD5/null will not work.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#ipsec_cipher_check Vpn#ipsec_cipher_check}
  */
  readonly ipsecCipherCheck?: number;
  /**
  * Support record the error ipsec cavium information in dump file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#ipsec_error_dump Vpn#ipsec_error_dump}
  */
  readonly ipsecErrorDump?: number;
  /**
  * Drop MGMT traffic that is not match ipsec tunnel, share partition only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#ipsec_mgmt_default_policy_drop Vpn#ipsec_mgmt_default_policy_drop}
  */
  readonly ipsecMgmtDefaultPolicyDrop?: number;
  /**
  * Support IKE jumbo fragment packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#jumbo_fragment Vpn#jumbo_fragment}
  */
  readonly jumboFragment?: number;
  /**
  * Choose IPsec UDP source port based on port of inner flow (only for A10 to A10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#nat_traversal_flow_affinity Vpn#nat_traversal_flow_affinity}
  */
  readonly natTraversalFlowAffinity?: number;
  /**
  * Enable use of different hash algorithms for signature authentication in IKEv2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#signature_authentication Vpn#signature_authentication}
  */
  readonly signatureAuthentication?: number;
  /**
  * VPN module will work in stateful mode and create sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#stateful_mode Vpn#stateful_mode}
  */
  readonly statefulMode?: number;
  /**
  * Disable TCP MSS adjustment in SYN packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#tcp_mss_adjust_disable Vpn#tcp_mss_adjust_disable}
  */
  readonly tcpMssAdjustDisable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#uuid Vpn#uuid}
  */
  readonly uuid?: string;
  /**
  * crl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#crl Vpn#crl}
  */
  readonly crl?: VpnCrl;
  /**
  * default block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#default Vpn#default}
  */
  readonly default?: VpnDefault;
  /**
  * error block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#error Vpn#error}
  */
  readonly error?: VpnError;
  /**
  * errordump block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#errordump Vpn#errordump}
  */
  readonly errordump?: VpnErrordump;
  /**
  * group_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#group_list Vpn#group_list}
  */
  readonly groupList?: VpnGroupListStruct;
  /**
  * ike_gateway_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#ike_gateway_list Vpn#ike_gateway_list}
  */
  readonly ikeGatewayList?: VpnIkeGatewayListStruct[] | cdktf.IResolvable;
  /**
  * ike_sa block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#ike_sa Vpn#ike_sa}
  */
  readonly ikeSa?: VpnIkeSa;
  /**
  * ike_sa_brief block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#ike_sa_brief Vpn#ike_sa_brief}
  */
  readonly ikeSaBrief?: VpnIkeSaBrief;
  /**
  * ike_sa_clients block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#ike_sa_clients Vpn#ike_sa_clients}
  */
  readonly ikeSaClients?: VpnIkeSaClients;
  /**
  * ike_stats_by_gw block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#ike_stats_by_gw Vpn#ike_stats_by_gw}
  */
  readonly ikeStatsByGw?: VpnIkeStatsByGw;
  /**
  * ike_stats_global block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#ike_stats_global Vpn#ike_stats_global}
  */
  readonly ikeStatsGlobal?: VpnIkeStatsGlobal;
  /**
  * ipsec_group_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#ipsec_group_list Vpn#ipsec_group_list}
  */
  readonly ipsecGroupList?: VpnIpsecGroupListStruct[] | cdktf.IResolvable;
  /**
  * ipsec_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#ipsec_list Vpn#ipsec_list}
  */
  readonly ipsecList?: VpnIpsecListStruct[] | cdktf.IResolvable;
  /**
  * ipsec_sa block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#ipsec_sa Vpn#ipsec_sa}
  */
  readonly ipsecSa?: VpnIpsecSa;
  /**
  * ipsec_sa_by_gw block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#ipsec_sa_by_gw Vpn#ipsec_sa_by_gw}
  */
  readonly ipsecSaByGw?: VpnIpsecSaByGw;
  /**
  * ipsec_sa_clients block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#ipsec_sa_clients Vpn#ipsec_sa_clients}
  */
  readonly ipsecSaClients?: VpnIpsecSaClients;
  /**
  * ipsec_sa_stats_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#ipsec_sa_stats_list Vpn#ipsec_sa_stats_list}
  */
  readonly ipsecSaStatsList?: VpnIpsecSaStatsListStruct[] | cdktf.IResolvable;
  /**
  * log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#log Vpn#log}
  */
  readonly log?: VpnLog;
  /**
  * ocsp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#ocsp Vpn#ocsp}
  */
  readonly ocsp?: VpnOcsp;
  /**
  * revocation_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#revocation_list Vpn#revocation_list}
  */
  readonly revocationList?: VpnRevocationListStruct[] | cdktf.IResolvable;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#sampling_enable Vpn#sampling_enable}
  */
  readonly samplingEnable?: VpnSamplingEnable[] | cdktf.IResolvable;
}
export interface VpnCrl {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#uuid Vpn#uuid}
  */
  readonly uuid?: string;
}

export function vpnCrlToTerraform(struct?: VpnCrlOutputReference | VpnCrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function vpnCrlToHclTerraform(struct?: VpnCrlOutputReference | VpnCrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnCrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnCrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnCrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
}
export interface VpnDefault {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#uuid Vpn#uuid}
  */
  readonly uuid?: string;
}

export function vpnDefaultToTerraform(struct?: VpnDefaultOutputReference | VpnDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function vpnDefaultToHclTerraform(struct?: VpnDefaultOutputReference | VpnDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnDefault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
}
export interface VpnError {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#uuid Vpn#uuid}
  */
  readonly uuid?: string;
}

export function vpnErrorToTerraform(struct?: VpnErrorOutputReference | VpnError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function vpnErrorToHclTerraform(struct?: VpnErrorOutputReference | VpnError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnErrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
}
export interface VpnErrordump {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#uuid Vpn#uuid}
  */
  readonly uuid?: string;
}

export function vpnErrordumpToTerraform(struct?: VpnErrordumpOutputReference | VpnErrordump): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function vpnErrordumpToHclTerraform(struct?: VpnErrordumpOutputReference | VpnErrordump): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnErrordumpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnErrordump | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnErrordump | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
}
export interface VpnGroupListStruct {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#uuid Vpn#uuid}
  */
  readonly uuid?: string;
}

export function vpnGroupListStructToTerraform(struct?: VpnGroupListStructOutputReference | VpnGroupListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function vpnGroupListStructToHclTerraform(struct?: VpnGroupListStructOutputReference | VpnGroupListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnGroupListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnGroupListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnGroupListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
}
export interface VpnIkeGatewayListDhcpServerPri {
  /**
  * Primary DHCP Server IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#dhcp_pri_ipv4 Vpn#dhcp_pri_ipv4}
  */
  readonly dhcpPriIpv4?: string;
}

export function vpnIkeGatewayListDhcpServerPriToTerraform(struct?: VpnIkeGatewayListDhcpServerPriOutputReference | VpnIkeGatewayListDhcpServerPri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp_pri_ipv4: cdktf.stringToTerraform(struct!.dhcpPriIpv4),
  }
}


export function vpnIkeGatewayListDhcpServerPriToHclTerraform(struct?: VpnIkeGatewayListDhcpServerPriOutputReference | VpnIkeGatewayListDhcpServerPri): any {
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

export class VpnIkeGatewayListDhcpServerPriOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnIkeGatewayListDhcpServerPri | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcpPriIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpPriIpv4 = this._dhcpPriIpv4;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIkeGatewayListDhcpServerPri | undefined) {
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
export interface VpnIkeGatewayListDhcpServerSec {
  /**
  * Secondary DHCP Server IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#dhcp_sec_ipv4 Vpn#dhcp_sec_ipv4}
  */
  readonly dhcpSecIpv4?: string;
}

export function vpnIkeGatewayListDhcpServerSecToTerraform(struct?: VpnIkeGatewayListDhcpServerSecOutputReference | VpnIkeGatewayListDhcpServerSec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp_sec_ipv4: cdktf.stringToTerraform(struct!.dhcpSecIpv4),
  }
}


export function vpnIkeGatewayListDhcpServerSecToHclTerraform(struct?: VpnIkeGatewayListDhcpServerSecOutputReference | VpnIkeGatewayListDhcpServerSec): any {
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

export class VpnIkeGatewayListDhcpServerSecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnIkeGatewayListDhcpServerSec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcpSecIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpSecIpv4 = this._dhcpSecIpv4;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIkeGatewayListDhcpServerSec | undefined) {
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
export interface VpnIkeGatewayListDhcpServer {
  /**
  * pri block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#pri Vpn#pri}
  */
  readonly pri?: VpnIkeGatewayListDhcpServerPri;
  /**
  * sec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#sec Vpn#sec}
  */
  readonly sec?: VpnIkeGatewayListDhcpServerSec;
}

export function vpnIkeGatewayListDhcpServerToTerraform(struct?: VpnIkeGatewayListDhcpServerOutputReference | VpnIkeGatewayListDhcpServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pri: vpnIkeGatewayListDhcpServerPriToTerraform(struct!.pri),
    sec: vpnIkeGatewayListDhcpServerSecToTerraform(struct!.sec),
  }
}


export function vpnIkeGatewayListDhcpServerToHclTerraform(struct?: VpnIkeGatewayListDhcpServerOutputReference | VpnIkeGatewayListDhcpServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pri: {
      value: vpnIkeGatewayListDhcpServerPriToHclTerraform(struct!.pri),
      isBlock: true,
      type: "list",
      storageClassType: "VpnIkeGatewayListDhcpServerPriList",
    },
    sec: {
      value: vpnIkeGatewayListDhcpServerSecToHclTerraform(struct!.sec),
      isBlock: true,
      type: "list",
      storageClassType: "VpnIkeGatewayListDhcpServerSecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIkeGatewayListDhcpServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnIkeGatewayListDhcpServer | undefined {
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

  public set internalValue(value: VpnIkeGatewayListDhcpServer | undefined) {
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
  private _pri = new VpnIkeGatewayListDhcpServerPriOutputReference(this, "pri");
  public get pri() {
    return this._pri;
  }
  public putPri(value: VpnIkeGatewayListDhcpServerPri) {
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
  private _sec = new VpnIkeGatewayListDhcpServerSecOutputReference(this, "sec");
  public get sec() {
    return this._sec;
  }
  public putSec(value: VpnIkeGatewayListDhcpServerSec) {
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
export interface VpnIkeGatewayListDpd {
  /**
  * Interval time in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#interval Vpn#interval}
  */
  readonly interval?: number;
  /**
  * Retry times
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#retry Vpn#retry}
  */
  readonly retry?: number;
}

export function vpnIkeGatewayListDpdToTerraform(struct?: VpnIkeGatewayListDpdOutputReference | VpnIkeGatewayListDpd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    retry: cdktf.numberToTerraform(struct!.retry),
  }
}


export function vpnIkeGatewayListDpdToHclTerraform(struct?: VpnIkeGatewayListDpdOutputReference | VpnIkeGatewayListDpd): any {
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

export class VpnIkeGatewayListDpdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnIkeGatewayListDpd | undefined {
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

  public set internalValue(value: VpnIkeGatewayListDpd | undefined) {
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
export interface VpnIkeGatewayListEncCfg {
  /**
  * 'des': Data Encryption Standard algorithm; '3des': Triple Data Encryption Standard algorithm; 'aes-128': Advanced Encryption Standard algorithm CBC Mode(key size: 128 bits); 'aes-192': Advanced Encryption Standard algorithm CBC Mode(key size: 192 bits); 'aes-256': Advanced Encryption Standard algorithm CBC Mode(key size: 256 bits); 'aes-gcm-128': Advanced Encryption Standard algorithm Galois/Counter Mode(key size: 128 bits, ICV size: 16 bytes), only for IKEv2; 'aes-gcm-192': Advanced Encryption Standard algorithm Galois/Counter Mode(key size: 192 bits, ICV size: 16 bytes), only for IKEv2; 'aes-gcm-256': Advanced Encryption Standard algorithm Galois/Counter Mode(key size: 256 bits, ICV size: 16 bytes), only for IKEv2; 'null': No encryption algorithm, only for IKEv2;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#encryption Vpn#encryption}
  */
  readonly encryption?: string;
  /**
  * Prioritizes (1-10) security protocol, least value has highest priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#gcm_priority Vpn#gcm_priority}
  */
  readonly gcmPriority?: number;
  /**
  * 'md5': MD5 Dessage-Digest Algorithm; 'sha1': Secure Hash Algorithm 1; 'sha256': Secure Hash Algorithm 256; 'sha384': Secure Hash Algorithm 384; 'sha512': Secure Hash Algorithm 512;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#hash Vpn#hash}
  */
  readonly hash?: string;
  /**
  * 'md5': MD5 Dessage-Digest Algorithm; 'sha1': Secure Hash Algorithm 1; 'sha256': Secure Hash Algorithm 256; 'sha384': Secure Hash Algorithm 384; 'sha512': Secure Hash Algorithm 512;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#prf Vpn#prf}
  */
  readonly prf?: string;
  /**
  * Prioritizes (1-10) security protocol, least value has highest priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#priority Vpn#priority}
  */
  readonly priority?: number;
}

export function vpnIkeGatewayListEncCfgToTerraform(struct?: VpnIkeGatewayListEncCfg | cdktf.IResolvable): any {
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


export function vpnIkeGatewayListEncCfgToHclTerraform(struct?: VpnIkeGatewayListEncCfg | cdktf.IResolvable): any {
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

export class VpnIkeGatewayListEncCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnIkeGatewayListEncCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpnIkeGatewayListEncCfg | cdktf.IResolvable | undefined) {
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

export class VpnIkeGatewayListEncCfgList extends cdktf.ComplexList {
  public internalValue? : VpnIkeGatewayListEncCfg[] | cdktf.IResolvable

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
  public get(index: number): VpnIkeGatewayListEncCfgOutputReference {
    return new VpnIkeGatewayListEncCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnIkeGatewayListLocalAddress {
  /**
  * Ipv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#local_ip Vpn#local_ip}
  */
  readonly localIp?: string;
  /**
  * Ipv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#local_ipv6 Vpn#local_ipv6}
  */
  readonly localIpv6?: string;
}

export function vpnIkeGatewayListLocalAddressToTerraform(struct?: VpnIkeGatewayListLocalAddressOutputReference | VpnIkeGatewayListLocalAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_ip: cdktf.stringToTerraform(struct!.localIp),
    local_ipv6: cdktf.stringToTerraform(struct!.localIpv6),
  }
}


export function vpnIkeGatewayListLocalAddressToHclTerraform(struct?: VpnIkeGatewayListLocalAddressOutputReference | VpnIkeGatewayListLocalAddress): any {
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

export class VpnIkeGatewayListLocalAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnIkeGatewayListLocalAddress | undefined {
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

  public set internalValue(value: VpnIkeGatewayListLocalAddress | undefined) {
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
export interface VpnIkeGatewayListLocalCert {
  /**
  * Certificate File Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#local_cert_name Vpn#local_cert_name}
  */
  readonly localCertName?: string;
}

export function vpnIkeGatewayListLocalCertToTerraform(struct?: VpnIkeGatewayListLocalCertOutputReference | VpnIkeGatewayListLocalCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_cert_name: cdktf.stringToTerraform(struct!.localCertName),
  }
}


export function vpnIkeGatewayListLocalCertToHclTerraform(struct?: VpnIkeGatewayListLocalCertOutputReference | VpnIkeGatewayListLocalCert): any {
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

export class VpnIkeGatewayListLocalCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnIkeGatewayListLocalCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localCertName !== undefined) {
      hasAnyValues = true;
      internalValueResult.localCertName = this._localCertName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIkeGatewayListLocalCert | undefined) {
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
export interface VpnIkeGatewayListRadiusServer {
  /**
  * Primary RADIUS Authentication Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#radius_pri Vpn#radius_pri}
  */
  readonly radiusPri?: string;
  /**
  * Secondary RADIUS Authentication Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#radius_sec Vpn#radius_sec}
  */
  readonly radiusSec?: string;
}

export function vpnIkeGatewayListRadiusServerToTerraform(struct?: VpnIkeGatewayListRadiusServerOutputReference | VpnIkeGatewayListRadiusServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    radius_pri: cdktf.stringToTerraform(struct!.radiusPri),
    radius_sec: cdktf.stringToTerraform(struct!.radiusSec),
  }
}


export function vpnIkeGatewayListRadiusServerToHclTerraform(struct?: VpnIkeGatewayListRadiusServerOutputReference | VpnIkeGatewayListRadiusServer): any {
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

export class VpnIkeGatewayListRadiusServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnIkeGatewayListRadiusServer | undefined {
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

  public set internalValue(value: VpnIkeGatewayListRadiusServer | undefined) {
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
export interface VpnIkeGatewayListRemoteAddress {
  /**
  * Remote IP based on Domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#dns Vpn#dns}
  */
  readonly dns?: string;
  /**
  * Ipv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#remote_ip Vpn#remote_ip}
  */
  readonly remoteIp?: string;
  /**
  * Ipv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#remote_ipv6 Vpn#remote_ipv6}
  */
  readonly remoteIpv6?: string;
}

export function vpnIkeGatewayListRemoteAddressToTerraform(struct?: VpnIkeGatewayListRemoteAddressOutputReference | VpnIkeGatewayListRemoteAddress): any {
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


export function vpnIkeGatewayListRemoteAddressToHclTerraform(struct?: VpnIkeGatewayListRemoteAddressOutputReference | VpnIkeGatewayListRemoteAddress): any {
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

export class VpnIkeGatewayListRemoteAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnIkeGatewayListRemoteAddress | undefined {
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

  public set internalValue(value: VpnIkeGatewayListRemoteAddress | undefined) {
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
export interface VpnIkeGatewayListRemoteCaCert {
  /**
  * Remote CA certificate DN (C=, ST=, L=, O=, CN=) without emailAddress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#remote_cert_name Vpn#remote_cert_name}
  */
  readonly remoteCertName?: string;
}

export function vpnIkeGatewayListRemoteCaCertToTerraform(struct?: VpnIkeGatewayListRemoteCaCertOutputReference | VpnIkeGatewayListRemoteCaCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    remote_cert_name: cdktf.stringToTerraform(struct!.remoteCertName),
  }
}


export function vpnIkeGatewayListRemoteCaCertToHclTerraform(struct?: VpnIkeGatewayListRemoteCaCertOutputReference | VpnIkeGatewayListRemoteCaCert): any {
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

export class VpnIkeGatewayListRemoteCaCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnIkeGatewayListRemoteCaCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._remoteCertName !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteCertName = this._remoteCertName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIkeGatewayListRemoteCaCert | undefined) {
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
export interface VpnIkeGatewayListSamplingEnable {
  /**
  * 'all': all; 'v2-init-rekey': Initiate Rekey; 'v2-rsp-rekey': Respond Rekey; 'v2-child-sa-rekey': Child SA Rekey; 'v2-in-invalid': Incoming Invalid; 'v2-in-invalid-spi': Incoming Invalid SPI; 'v2-in-init-req': Incoming Init Request; 'v2-in-init-rsp': Incoming Init Response; 'v2-out-init-req': Outgoing Init Request; 'v2-out-init-rsp': Outgoing Init Response; 'v2-in-auth-req': Incoming Auth Request; 'v2-in-auth-rsp': Incoming Auth Response; 'v2-out-auth-req': Outgoing Auth Request; 'v2-out-auth-rsp': Outgoing Auth Response; 'v2-in-create-child-req': Incoming Create Child Request; 'v2-in-create-child-rsp': Incoming Create Child Response; 'v2-out-create-child-req': Outgoing Create Child Request; 'v2-out-create-child-rsp': Outgoing Create Child Response; 'v2-in-info-req': Incoming Info Request; 'v2-in-info-rsp': Incoming Info Response; 'v2-out-info-req': Outgoing Info Request; 'v2-out-info-rsp': Outgoing Info Response; 'v1-in-id-prot-req': Incoming ID Protection Request; 'v1-in-id-prot-rsp': Incoming ID Protection Response; 'v1-out-id-prot-req': Outgoing ID Protection Request; 'v1-out-id-prot-rsp': Outgoing ID Protection Response; 'v1-in-auth-only-req': Incoming Auth Only Request; 'v1-in-auth-only-rsp': Incoming Auth Only Response; 'v1-out-auth-only-req': Outgoing Auth Only Request; 'v1-out-auth-only-rsp': Outgoing Auth Only Response; 'v1-in-aggressive-req': Incoming Aggressive Request; 'v1-in-aggressive-rsp': Incoming Aggressive Response; 'v1-out-aggressive-req': Outgoing Aggressive Request; 'v1-out-aggressive-rsp': Outgoing Aggressive Response; 'v1-in-info-v1-req': Incoming Info Request; 'v1-in-info-v1-rsp': Incoming Info Response; 'v1-out-info-v1-req': Outgoing Info Request; 'v1-out-info-v1-rsp': Outgoing Info Response; 'v1-in-transaction-req': Incoming Transaction Request; 'v1-in-transaction-rsp': Incoming Transaction Response; 'v1-out-transaction-req': Outgoing Transaction Request; 'v1-out-transaction-rsp': Outgoing Transaction Response; 'v1-in-quick-mode-req': Incoming Quick Mode Request; 'v1-in-quick-mode-rsp': Incoming Quick Mode Response; 'v1-out-quick-mode-req': Outgoing Quick Mode Request; 'v1-out-quick-mode-rsp': Outgoing Quick Mode Response; 'v1-in-new-group-mode-req': Incoming New Group Mode Request; 'v1-in-new-group-mode-rsp': Incoming New Group Mode Response; 'v1-out-new-group-mode-req': Outgoing New Group Mode Request; 'v1-out-new-group-mode-rsp': Outgoing New Group Mode Response; 'v1-child-sa-invalid-spi': Invalid SPI for Child SAs; 'v2-child-sa-invalid-spi': Invalid SPI for Child SAs; 'ike-current-version': IKE version;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#counters1 Vpn#counters1}
  */
  readonly counters1?: string;
}

export function vpnIkeGatewayListSamplingEnableToTerraform(struct?: VpnIkeGatewayListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function vpnIkeGatewayListSamplingEnableToHclTerraform(struct?: VpnIkeGatewayListSamplingEnable | cdktf.IResolvable): any {
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

export class VpnIkeGatewayListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnIkeGatewayListSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpnIkeGatewayListSamplingEnable | cdktf.IResolvable | undefined) {
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

export class VpnIkeGatewayListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : VpnIkeGatewayListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): VpnIkeGatewayListSamplingEnableOutputReference {
    return new VpnIkeGatewayListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnIkeGatewayListVrid {
  /**
  * Default VRRP-A vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#default Vpn#default}
  */
  readonly default?: number;
  /**
  * Specify ha VRRP-A vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#vrid_num Vpn#vrid_num}
  */
  readonly vridNum?: number;
}

export function vpnIkeGatewayListVridToTerraform(struct?: VpnIkeGatewayListVridOutputReference | VpnIkeGatewayListVrid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.numberToTerraform(struct!.default),
    vrid_num: cdktf.numberToTerraform(struct!.vridNum),
  }
}


export function vpnIkeGatewayListVridToHclTerraform(struct?: VpnIkeGatewayListVridOutputReference | VpnIkeGatewayListVrid): any {
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

export class VpnIkeGatewayListVridOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnIkeGatewayListVrid | undefined {
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

  public set internalValue(value: VpnIkeGatewayListVrid | undefined) {
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
export interface VpnIkeGatewayListStruct {
  /**
  * 'preshare-key': Authenticate the remote gateway using a pre-shared key (Default); 'rsa-signature': Authenticate the remote gateway using an RSA certificate; 'ecdsa-signature': Authenticate the remote gateway using an ECDSA certificate; 'eap-radius': Authenticate the remote gateway using an EAP Radius server; 'eap-tls': Authenticate the remote gateway using EAP TLS;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#auth_method Vpn#auth_method}
  */
  readonly authMethod?: string;
  /**
  * 'dhcp': Enable DHCP configuration-payload; 'radius': Enable RADIUS configuration-payload;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#configuration_payload Vpn#configuration_payload}
  */
  readonly configurationPayload?: string;
  /**
  * '1': Diffie-Hellman group 1 - 768-bit(Default); '2': Diffie-Hellman group 2 - 1024-bit; '5': Diffie-Hellman group 5 - 1536-bit; '14': Diffie-Hellman group 14 - 2048-bit; '15': Diffie-Hellman group 15 - 3072-bit; '16': Diffie-Hellman group 16 - 4096-bit; '18': Diffie-Hellman group 18 - 8192-bit; '19': Diffie-Hellman group 19 - 256-bit Elliptic Curve; '20': Diffie-Hellman group 20 - 384-bit Elliptic Curve;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#dh_group Vpn#dh_group}
  */
  readonly dhGroup?: string;
  /**
  * Disable initiating rekey
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#disable_rekey Vpn#disable_rekey}
  */
  readonly disableRekey?: number;
  /**
  * Enable IKE message fragment and set fragment size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#fragment_size Vpn#fragment_size}
  */
  readonly fragmentSize?: number;
  /**
  * 'sha256': Secure Hash Algorithm 256; 'sha384': Secure Hash Algorithm 384; 'sha512': Secure Hash Algorithm 512;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#hash Vpn#hash}
  */
  readonly hash?: string;
  /**
  * 'v1': IKEv1 key exchange; 'v2': IKEv2 key exchange;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#ike_version Vpn#ike_version}
  */
  readonly ikeVersion?: string;
  /**
  * only handle traffic on management interface, share partition only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#interface_management Vpn#interface_management}
  */
  readonly interfaceManagement?: number;
  /**
  * Private Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#key Vpn#key}
  */
  readonly key?: string;
  /**
  * Private Key Pass Phrase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#key_passphrase Vpn#key_passphrase}
  */
  readonly keyPassphrase?: string;
  /**
  * IKE SA age in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#lifetime Vpn#lifetime}
  */
  readonly lifetime?: number;
  /**
  * Local Gateway Identity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#local_id Vpn#local_id}
  */
  readonly localId?: string;
  /**
  * 'main': Negotiate Main mode (Default); 'aggressive': Negotiate Aggressive mode;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#mode Vpn#mode}
  */
  readonly mode?: string;
  /**
  * IKE-gateway name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#name Vpn#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#nat_traversal Vpn#nat_traversal}
  */
  readonly natTraversal?: number;
  /**
  * pre-shared key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#preshare_key_value Vpn#preshare_key_value}
  */
  readonly preshareKeyValue?: string;
  /**
  * Remote Gateway Identity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#remote_id Vpn#remote_id}
  */
  readonly remoteId?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#user_tag Vpn#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#uuid Vpn#uuid}
  */
  readonly uuid?: string;
  /**
  * dhcp_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#dhcp_server Vpn#dhcp_server}
  */
  readonly dhcpServer?: VpnIkeGatewayListDhcpServer;
  /**
  * dpd block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#dpd Vpn#dpd}
  */
  readonly dpd?: VpnIkeGatewayListDpd;
  /**
  * enc_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#enc_cfg Vpn#enc_cfg}
  */
  readonly encCfg?: VpnIkeGatewayListEncCfg[] | cdktf.IResolvable;
  /**
  * local_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#local_address Vpn#local_address}
  */
  readonly localAddress?: VpnIkeGatewayListLocalAddress;
  /**
  * local_cert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#local_cert Vpn#local_cert}
  */
  readonly localCert?: VpnIkeGatewayListLocalCert;
  /**
  * radius_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#radius_server Vpn#radius_server}
  */
  readonly radiusServer?: VpnIkeGatewayListRadiusServer;
  /**
  * remote_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#remote_address Vpn#remote_address}
  */
  readonly remoteAddress?: VpnIkeGatewayListRemoteAddress;
  /**
  * remote_ca_cert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#remote_ca_cert Vpn#remote_ca_cert}
  */
  readonly remoteCaCert?: VpnIkeGatewayListRemoteCaCert;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#sampling_enable Vpn#sampling_enable}
  */
  readonly samplingEnable?: VpnIkeGatewayListSamplingEnable[] | cdktf.IResolvable;
  /**
  * vrid block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#vrid Vpn#vrid}
  */
  readonly vrid?: VpnIkeGatewayListVrid;
}

export function vpnIkeGatewayListStructToTerraform(struct?: VpnIkeGatewayListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_method: cdktf.stringToTerraform(struct!.authMethod),
    configuration_payload: cdktf.stringToTerraform(struct!.configurationPayload),
    dh_group: cdktf.stringToTerraform(struct!.dhGroup),
    disable_rekey: cdktf.numberToTerraform(struct!.disableRekey),
    fragment_size: cdktf.numberToTerraform(struct!.fragmentSize),
    hash: cdktf.stringToTerraform(struct!.hash),
    ike_version: cdktf.stringToTerraform(struct!.ikeVersion),
    interface_management: cdktf.numberToTerraform(struct!.interfaceManagement),
    key: cdktf.stringToTerraform(struct!.key),
    key_passphrase: cdktf.stringToTerraform(struct!.keyPassphrase),
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    local_id: cdktf.stringToTerraform(struct!.localId),
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
    nat_traversal: cdktf.numberToTerraform(struct!.natTraversal),
    preshare_key_value: cdktf.stringToTerraform(struct!.preshareKeyValue),
    remote_id: cdktf.stringToTerraform(struct!.remoteId),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    dhcp_server: vpnIkeGatewayListDhcpServerToTerraform(struct!.dhcpServer),
    dpd: vpnIkeGatewayListDpdToTerraform(struct!.dpd),
    enc_cfg: cdktf.listMapper(vpnIkeGatewayListEncCfgToTerraform, true)(struct!.encCfg),
    local_address: vpnIkeGatewayListLocalAddressToTerraform(struct!.localAddress),
    local_cert: vpnIkeGatewayListLocalCertToTerraform(struct!.localCert),
    radius_server: vpnIkeGatewayListRadiusServerToTerraform(struct!.radiusServer),
    remote_address: vpnIkeGatewayListRemoteAddressToTerraform(struct!.remoteAddress),
    remote_ca_cert: vpnIkeGatewayListRemoteCaCertToTerraform(struct!.remoteCaCert),
    sampling_enable: cdktf.listMapper(vpnIkeGatewayListSamplingEnableToTerraform, true)(struct!.samplingEnable),
    vrid: vpnIkeGatewayListVridToTerraform(struct!.vrid),
  }
}


export function vpnIkeGatewayListStructToHclTerraform(struct?: VpnIkeGatewayListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_method: {
      value: cdktf.stringToHclTerraform(struct!.authMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configuration_payload: {
      value: cdktf.stringToHclTerraform(struct!.configurationPayload),
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
    disable_rekey: {
      value: cdktf.numberToHclTerraform(struct!.disableRekey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fragment_size: {
      value: cdktf.numberToHclTerraform(struct!.fragmentSize),
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
    ike_version: {
      value: cdktf.stringToHclTerraform(struct!.ikeVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_management: {
      value: cdktf.numberToHclTerraform(struct!.interfaceManagement),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_passphrase: {
      value: cdktf.stringToHclTerraform(struct!.keyPassphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifetime: {
      value: cdktf.numberToHclTerraform(struct!.lifetime),
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
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
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
    nat_traversal: {
      value: cdktf.numberToHclTerraform(struct!.natTraversal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preshare_key_value: {
      value: cdktf.stringToHclTerraform(struct!.preshareKeyValue),
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
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_server: {
      value: vpnIkeGatewayListDhcpServerToHclTerraform(struct!.dhcpServer),
      isBlock: true,
      type: "list",
      storageClassType: "VpnIkeGatewayListDhcpServerList",
    },
    dpd: {
      value: vpnIkeGatewayListDpdToHclTerraform(struct!.dpd),
      isBlock: true,
      type: "list",
      storageClassType: "VpnIkeGatewayListDpdList",
    },
    enc_cfg: {
      value: cdktf.listMapperHcl(vpnIkeGatewayListEncCfgToHclTerraform, true)(struct!.encCfg),
      isBlock: true,
      type: "list",
      storageClassType: "VpnIkeGatewayListEncCfgList",
    },
    local_address: {
      value: vpnIkeGatewayListLocalAddressToHclTerraform(struct!.localAddress),
      isBlock: true,
      type: "list",
      storageClassType: "VpnIkeGatewayListLocalAddressList",
    },
    local_cert: {
      value: vpnIkeGatewayListLocalCertToHclTerraform(struct!.localCert),
      isBlock: true,
      type: "list",
      storageClassType: "VpnIkeGatewayListLocalCertList",
    },
    radius_server: {
      value: vpnIkeGatewayListRadiusServerToHclTerraform(struct!.radiusServer),
      isBlock: true,
      type: "list",
      storageClassType: "VpnIkeGatewayListRadiusServerList",
    },
    remote_address: {
      value: vpnIkeGatewayListRemoteAddressToHclTerraform(struct!.remoteAddress),
      isBlock: true,
      type: "list",
      storageClassType: "VpnIkeGatewayListRemoteAddressList",
    },
    remote_ca_cert: {
      value: vpnIkeGatewayListRemoteCaCertToHclTerraform(struct!.remoteCaCert),
      isBlock: true,
      type: "list",
      storageClassType: "VpnIkeGatewayListRemoteCaCertList",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(vpnIkeGatewayListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "VpnIkeGatewayListSamplingEnableList",
    },
    vrid: {
      value: vpnIkeGatewayListVridToHclTerraform(struct!.vrid),
      isBlock: true,
      type: "list",
      storageClassType: "VpnIkeGatewayListVridList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIkeGatewayListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnIkeGatewayListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMethod = this._authMethod;
    }
    if (this._configurationPayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationPayload = this._configurationPayload;
    }
    if (this._dhGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhGroup = this._dhGroup;
    }
    if (this._disableRekey !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableRekey = this._disableRekey;
    }
    if (this._fragmentSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragmentSize = this._fragmentSize;
    }
    if (this._hash !== undefined) {
      hasAnyValues = true;
      internalValueResult.hash = this._hash;
    }
    if (this._ikeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeVersion = this._ikeVersion;
    }
    if (this._interfaceManagement !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceManagement = this._interfaceManagement;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._keyPassphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPassphrase = this._keyPassphrase;
    }
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    if (this._localId !== undefined) {
      hasAnyValues = true;
      internalValueResult.localId = this._localId;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._natTraversal !== undefined) {
      hasAnyValues = true;
      internalValueResult.natTraversal = this._natTraversal;
    }
    if (this._preshareKeyValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preshareKeyValue = this._preshareKeyValue;
    }
    if (this._remoteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteId = this._remoteId;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._dhcpServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpServer = this._dhcpServer?.internalValue;
    }
    if (this._dpd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpd = this._dpd?.internalValue;
    }
    if (this._encCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encCfg = this._encCfg?.internalValue;
    }
    if (this._localAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAddress = this._localAddress?.internalValue;
    }
    if (this._localCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localCert = this._localCert?.internalValue;
    }
    if (this._radiusServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusServer = this._radiusServer?.internalValue;
    }
    if (this._remoteAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAddress = this._remoteAddress?.internalValue;
    }
    if (this._remoteCaCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteCaCert = this._remoteCaCert?.internalValue;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    if (this._vrid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIkeGatewayListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authMethod = undefined;
      this._configurationPayload = undefined;
      this._dhGroup = undefined;
      this._disableRekey = undefined;
      this._fragmentSize = undefined;
      this._hash = undefined;
      this._ikeVersion = undefined;
      this._interfaceManagement = undefined;
      this._key = undefined;
      this._keyPassphrase = undefined;
      this._lifetime = undefined;
      this._localId = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._natTraversal = undefined;
      this._preshareKeyValue = undefined;
      this._remoteId = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._dhcpServer.internalValue = undefined;
      this._dpd.internalValue = undefined;
      this._encCfg.internalValue = undefined;
      this._localAddress.internalValue = undefined;
      this._localCert.internalValue = undefined;
      this._radiusServer.internalValue = undefined;
      this._remoteAddress.internalValue = undefined;
      this._remoteCaCert.internalValue = undefined;
      this._samplingEnable.internalValue = undefined;
      this._vrid.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authMethod = value.authMethod;
      this._configurationPayload = value.configurationPayload;
      this._dhGroup = value.dhGroup;
      this._disableRekey = value.disableRekey;
      this._fragmentSize = value.fragmentSize;
      this._hash = value.hash;
      this._ikeVersion = value.ikeVersion;
      this._interfaceManagement = value.interfaceManagement;
      this._key = value.key;
      this._keyPassphrase = value.keyPassphrase;
      this._lifetime = value.lifetime;
      this._localId = value.localId;
      this._mode = value.mode;
      this._name = value.name;
      this._natTraversal = value.natTraversal;
      this._preshareKeyValue = value.preshareKeyValue;
      this._remoteId = value.remoteId;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._dhcpServer.internalValue = value.dhcpServer;
      this._dpd.internalValue = value.dpd;
      this._encCfg.internalValue = value.encCfg;
      this._localAddress.internalValue = value.localAddress;
      this._localCert.internalValue = value.localCert;
      this._radiusServer.internalValue = value.radiusServer;
      this._remoteAddress.internalValue = value.remoteAddress;
      this._remoteCaCert.internalValue = value.remoteCaCert;
      this._samplingEnable.internalValue = value.samplingEnable;
      this._vrid.internalValue = value.vrid;
    }
  }

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
  private _dhcpServer = new VpnIkeGatewayListDhcpServerOutputReference(this, "dhcp_server");
  public get dhcpServer() {
    return this._dhcpServer;
  }
  public putDhcpServer(value: VpnIkeGatewayListDhcpServer) {
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
  private _dpd = new VpnIkeGatewayListDpdOutputReference(this, "dpd");
  public get dpd() {
    return this._dpd;
  }
  public putDpd(value: VpnIkeGatewayListDpd) {
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
  private _encCfg = new VpnIkeGatewayListEncCfgList(this, "enc_cfg", false);
  public get encCfg() {
    return this._encCfg;
  }
  public putEncCfg(value: VpnIkeGatewayListEncCfg[] | cdktf.IResolvable) {
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
  private _localAddress = new VpnIkeGatewayListLocalAddressOutputReference(this, "local_address");
  public get localAddress() {
    return this._localAddress;
  }
  public putLocalAddress(value: VpnIkeGatewayListLocalAddress) {
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
  private _localCert = new VpnIkeGatewayListLocalCertOutputReference(this, "local_cert");
  public get localCert() {
    return this._localCert;
  }
  public putLocalCert(value: VpnIkeGatewayListLocalCert) {
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
  private _radiusServer = new VpnIkeGatewayListRadiusServerOutputReference(this, "radius_server");
  public get radiusServer() {
    return this._radiusServer;
  }
  public putRadiusServer(value: VpnIkeGatewayListRadiusServer) {
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
  private _remoteAddress = new VpnIkeGatewayListRemoteAddressOutputReference(this, "remote_address");
  public get remoteAddress() {
    return this._remoteAddress;
  }
  public putRemoteAddress(value: VpnIkeGatewayListRemoteAddress) {
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
  private _remoteCaCert = new VpnIkeGatewayListRemoteCaCertOutputReference(this, "remote_ca_cert");
  public get remoteCaCert() {
    return this._remoteCaCert;
  }
  public putRemoteCaCert(value: VpnIkeGatewayListRemoteCaCert) {
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
  private _samplingEnable = new VpnIkeGatewayListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: VpnIkeGatewayListSamplingEnable[] | cdktf.IResolvable) {
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
  private _vrid = new VpnIkeGatewayListVridOutputReference(this, "vrid");
  public get vrid() {
    return this._vrid;
  }
  public putVrid(value: VpnIkeGatewayListVrid) {
    this._vrid.internalValue = value;
  }
  public resetVrid() {
    this._vrid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid.internalValue;
  }
}

export class VpnIkeGatewayListStructList extends cdktf.ComplexList {
  public internalValue? : VpnIkeGatewayListStruct[] | cdktf.IResolvable

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
  public get(index: number): VpnIkeGatewayListStructOutputReference {
    return new VpnIkeGatewayListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnIkeSa {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#uuid Vpn#uuid}
  */
  readonly uuid?: string;
}

export function vpnIkeSaToTerraform(struct?: VpnIkeSaOutputReference | VpnIkeSa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function vpnIkeSaToHclTerraform(struct?: VpnIkeSaOutputReference | VpnIkeSa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIkeSaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnIkeSa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIkeSa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
}
export interface VpnIkeSaBrief {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#uuid Vpn#uuid}
  */
  readonly uuid?: string;
}

export function vpnIkeSaBriefToTerraform(struct?: VpnIkeSaBriefOutputReference | VpnIkeSaBrief): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function vpnIkeSaBriefToHclTerraform(struct?: VpnIkeSaBriefOutputReference | VpnIkeSaBrief): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIkeSaBriefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnIkeSaBrief | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIkeSaBrief | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
}
export interface VpnIkeSaClients {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#uuid Vpn#uuid}
  */
  readonly uuid?: string;
}

export function vpnIkeSaClientsToTerraform(struct?: VpnIkeSaClientsOutputReference | VpnIkeSaClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function vpnIkeSaClientsToHclTerraform(struct?: VpnIkeSaClientsOutputReference | VpnIkeSaClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIkeSaClientsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnIkeSaClients | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIkeSaClients | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
}
export interface VpnIkeStatsByGw {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#uuid Vpn#uuid}
  */
  readonly uuid?: string;
}

export function vpnIkeStatsByGwToTerraform(struct?: VpnIkeStatsByGwOutputReference | VpnIkeStatsByGw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function vpnIkeStatsByGwToHclTerraform(struct?: VpnIkeStatsByGwOutputReference | VpnIkeStatsByGw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIkeStatsByGwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnIkeStatsByGw | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIkeStatsByGw | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
}
export interface VpnIkeStatsGlobalSamplingEnable {
  /**
  * 'all': all; 'v2-init-rekey': Initiate Rekey; 'v2-rsp-rekey': Respond Rekey; 'v2-child-sa-rekey': Child SA Rekey; 'v2-in-invalid': Incoming Invalid; 'v2-in-invalid-spi': Incoming Invalid SPI; 'v2-in-init-req': Incoming Init Request; 'v2-in-init-rsp': Incoming Init Response; 'v2-out-init-req': Outgoing Init Request; 'v2-out-init-rsp': Outgoing Init Response; 'v2-in-auth-req': Incoming Auth Request; 'v2-in-auth-rsp': Incoming Auth Response; 'v2-out-auth-req': Outgoing Auth Request; 'v2-out-auth-rsp': Outgoing Auth Response; 'v2-in-create-child-req': Incoming Create Child Request; 'v2-in-create-child-rsp': Incoming Create Child Response; 'v2-out-create-child-req': Outgoing Create Child Request; 'v2-out-create-child-rsp': Outgoing Create Child Response; 'v2-in-info-req': Incoming Info Request; 'v2-in-info-rsp': Incoming Info Response; 'v2-out-info-req': Outgoing Info Request; 'v2-out-info-rsp': Outgoing Info Response; 'v1-in-id-prot-req': Incoming ID Protection Request; 'v1-in-id-prot-rsp': Incoming ID Protection Response; 'v1-out-id-prot-req': Outgoing ID Protection Request; 'v1-out-id-prot-rsp': Outgoing ID Protection Response; 'v1-in-auth-only-req': Incoming Auth Only Request; 'v1-in-auth-only-rsp': Incoming Auth Only Response; 'v1-out-auth-only-req': Outgoing Auth Only Request; 'v1-out-auth-only-rsp': Outgoing Auth Only Response; 'v1-in-aggressive-req': Incoming Aggressive Request; 'v1-in-aggressive-rsp': Incoming Aggressive Response; 'v1-out-aggressive-req': Outgoing Aggressive Request; 'v1-out-aggressive-rsp': Outgoing Aggressive Response; 'v1-in-info-v1-req': Incoming Info Request; 'v1-in-info-v1-rsp': Incoming Info Response; 'v1-out-info-v1-req': Outgoing Info Request; 'v1-out-info-v1-rsp': Outgoing Info Response; 'v1-in-transaction-req': Incoming Transaction Request; 'v1-in-transaction-rsp': Incoming Transaction Response; 'v1-out-transaction-req': Outgoing Transaction Request; 'v1-out-transaction-rsp': Outgoing Transaction Response; 'v1-in-quick-mode-req': Incoming Quick Mode Request; 'v1-in-quick-mode-rsp': Incoming Quick Mode Response; 'v1-out-quick-mode-req': Outgoing Quick Mode Request; 'v1-out-quick-mode-rsp': Outgoing Quick Mode Response; 'v1-in-new-group-mode-req': Incoming New Group Mode Request; 'v1-in-new-group-mode-rsp': Incoming New Group Mode Response; 'v1-out-new-group-mode-req': Outgoing New Group Mode Request; 'v1-out-new-group-mode-rsp': Outgoing New Group Mode Response;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#counters1 Vpn#counters1}
  */
  readonly counters1?: string;
}

export function vpnIkeStatsGlobalSamplingEnableToTerraform(struct?: VpnIkeStatsGlobalSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function vpnIkeStatsGlobalSamplingEnableToHclTerraform(struct?: VpnIkeStatsGlobalSamplingEnable | cdktf.IResolvable): any {
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

export class VpnIkeStatsGlobalSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnIkeStatsGlobalSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpnIkeStatsGlobalSamplingEnable | cdktf.IResolvable | undefined) {
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

export class VpnIkeStatsGlobalSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : VpnIkeStatsGlobalSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): VpnIkeStatsGlobalSamplingEnableOutputReference {
    return new VpnIkeStatsGlobalSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnIkeStatsGlobal {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#uuid Vpn#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#sampling_enable Vpn#sampling_enable}
  */
  readonly samplingEnable?: VpnIkeStatsGlobalSamplingEnable[] | cdktf.IResolvable;
}

export function vpnIkeStatsGlobalToTerraform(struct?: VpnIkeStatsGlobalOutputReference | VpnIkeStatsGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(vpnIkeStatsGlobalSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function vpnIkeStatsGlobalToHclTerraform(struct?: VpnIkeStatsGlobalOutputReference | VpnIkeStatsGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(vpnIkeStatsGlobalSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "VpnIkeStatsGlobalSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIkeStatsGlobalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnIkeStatsGlobal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIkeStatsGlobal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new VpnIkeStatsGlobalSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: VpnIkeStatsGlobalSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface VpnIpsecGroupListIpsecgroupCfg {
  /**
  * specify a name to group active/backup tunnels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#ipsec Vpn#ipsec}
  */
  readonly ipsec?: string;
  /**
  * Highest priority value is the active tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#priority Vpn#priority}
  */
  readonly priority?: number;
}

export function vpnIpsecGroupListIpsecgroupCfgToTerraform(struct?: VpnIpsecGroupListIpsecgroupCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipsec: cdktf.stringToTerraform(struct!.ipsec),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function vpnIpsecGroupListIpsecgroupCfgToHclTerraform(struct?: VpnIpsecGroupListIpsecgroupCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipsec: {
      value: cdktf.stringToHclTerraform(struct!.ipsec),
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

export class VpnIpsecGroupListIpsecgroupCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnIpsecGroupListIpsecgroupCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipsec !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsec = this._ipsec;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIpsecGroupListIpsecgroupCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipsec = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipsec = value.ipsec;
      this._priority = value.priority;
    }
  }

  // ipsec - computed: false, optional: true, required: false
  private _ipsec?: string; 
  public get ipsec() {
    return this.getStringAttribute('ipsec');
  }
  public set ipsec(value: string) {
    this._ipsec = value;
  }
  public resetIpsec() {
    this._ipsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecInput() {
    return this._ipsec;
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

export class VpnIpsecGroupListIpsecgroupCfgList extends cdktf.ComplexList {
  public internalValue? : VpnIpsecGroupListIpsecgroupCfg[] | cdktf.IResolvable

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
  public get(index: number): VpnIpsecGroupListIpsecgroupCfgOutputReference {
    return new VpnIpsecGroupListIpsecgroupCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnIpsecGroupListStruct {
  /**
  * Group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#name Vpn#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#user_tag Vpn#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#uuid Vpn#uuid}
  */
  readonly uuid?: string;
  /**
  * ipsecgroup_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#ipsecgroup_cfg Vpn#ipsecgroup_cfg}
  */
  readonly ipsecgroupCfg?: VpnIpsecGroupListIpsecgroupCfg[] | cdktf.IResolvable;
}

export function vpnIpsecGroupListStructToTerraform(struct?: VpnIpsecGroupListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    ipsecgroup_cfg: cdktf.listMapper(vpnIpsecGroupListIpsecgroupCfgToTerraform, true)(struct!.ipsecgroupCfg),
  }
}


export function vpnIpsecGroupListStructToHclTerraform(struct?: VpnIpsecGroupListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsecgroup_cfg: {
      value: cdktf.listMapperHcl(vpnIpsecGroupListIpsecgroupCfgToHclTerraform, true)(struct!.ipsecgroupCfg),
      isBlock: true,
      type: "list",
      storageClassType: "VpnIpsecGroupListIpsecgroupCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIpsecGroupListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnIpsecGroupListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._ipsecgroupCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecgroupCfg = this._ipsecgroupCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIpsecGroupListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._ipsecgroupCfg.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._ipsecgroupCfg.internalValue = value.ipsecgroupCfg;
    }
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

  // ipsecgroup_cfg - computed: false, optional: true, required: false
  private _ipsecgroupCfg = new VpnIpsecGroupListIpsecgroupCfgList(this, "ipsecgroup_cfg", false);
  public get ipsecgroupCfg() {
    return this._ipsecgroupCfg;
  }
  public putIpsecgroupCfg(value: VpnIpsecGroupListIpsecgroupCfg[] | cdktf.IResolvable) {
    this._ipsecgroupCfg.internalValue = value;
  }
  public resetIpsecgroupCfg() {
    this._ipsecgroupCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecgroupCfgInput() {
    return this._ipsecgroupCfg.internalValue;
  }
}

export class VpnIpsecGroupListStructList extends cdktf.ComplexList {
  public internalValue? : VpnIpsecGroupListStruct[] | cdktf.IResolvable

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
  public get(index: number): VpnIpsecGroupListStructOutputReference {
    return new VpnIpsecGroupListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnIpsecListBindTunnel {
  /**
  * IPsec Next Hop IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#next_hop Vpn#next_hop}
  */
  readonly nextHop?: string;
  /**
  * IPsec Next Hop IPv6 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#next_hop_v6 Vpn#next_hop_v6}
  */
  readonly nextHopV6?: string;
  /**
  * Tunnel interface index
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#tunnel Vpn#tunnel}
  */
  readonly tunnel?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#uuid Vpn#uuid}
  */
  readonly uuid?: string;
}

export function vpnIpsecListBindTunnelToTerraform(struct?: VpnIpsecListBindTunnelOutputReference | VpnIpsecListBindTunnel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    next_hop: cdktf.stringToTerraform(struct!.nextHop),
    next_hop_v6: cdktf.stringToTerraform(struct!.nextHopV6),
    tunnel: cdktf.numberToTerraform(struct!.tunnel),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function vpnIpsecListBindTunnelToHclTerraform(struct?: VpnIpsecListBindTunnelOutputReference | VpnIpsecListBindTunnel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    next_hop: {
      value: cdktf.stringToHclTerraform(struct!.nextHop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop_v6: {
      value: cdktf.stringToHclTerraform(struct!.nextHopV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel: {
      value: cdktf.numberToHclTerraform(struct!.tunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIpsecListBindTunnelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnIpsecListBindTunnel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop;
    }
    if (this._nextHopV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopV6 = this._nextHopV6;
    }
    if (this._tunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnel = this._tunnel;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIpsecListBindTunnel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nextHop = undefined;
      this._nextHopV6 = undefined;
      this._tunnel = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nextHop = value.nextHop;
      this._nextHopV6 = value.nextHopV6;
      this._tunnel = value.tunnel;
      this._uuid = value.uuid;
    }
  }

  // next_hop - computed: false, optional: true, required: false
  private _nextHop?: string; 
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }
  public set nextHop(value: string) {
    this._nextHop = value;
  }
  public resetNextHop() {
    this._nextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop;
  }

  // next_hop_v6 - computed: false, optional: true, required: false
  private _nextHopV6?: string; 
  public get nextHopV6() {
    return this.getStringAttribute('next_hop_v6');
  }
  public set nextHopV6(value: string) {
    this._nextHopV6 = value;
  }
  public resetNextHopV6() {
    this._nextHopV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopV6Input() {
    return this._nextHopV6;
  }

  // tunnel - computed: false, optional: true, required: false
  private _tunnel?: number; 
  public get tunnel() {
    return this.getNumberAttribute('tunnel');
  }
  public set tunnel(value: number) {
    this._tunnel = value;
  }
  public resetTunnel() {
    this._tunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInput() {
    return this._tunnel;
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
}
export interface VpnIpsecListEncCfg {
  /**
  * 'des': Data Encryption Standard algorithm; '3des': Triple Data Encryption Standard algorithm; 'aes-128': Advanced Encryption Standard algorithm CBC Mode(key size: 128 bits); 'aes-192': Advanced Encryption Standard algorithm CBC Mode(key size: 192 bits); 'aes-256': Advanced Encryption Standard algorithm CBC Mode(key size: 256 bits); 'aes-gcm-128': Advanced Encryption Standard algorithm Galois/Counter Mode(key size: 128 bits, ICV size: 16 bytes); 'aes-gcm-192': Advanced Encryption Standard algorithm Galois/Counter Mode(key size: 192 bits, ICV size: 16 bytes); 'aes-gcm-256': Advanced Encryption Standard algorithm Galois/Counter Mode(key size: 256 bits, ICV size: 16 bytes); 'null': No encryption algorithm;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#encryption Vpn#encryption}
  */
  readonly encryption?: string;
  /**
  * Prioritizes (1-10) security protocol, least value has highest priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#gcm_priority Vpn#gcm_priority}
  */
  readonly gcmPriority?: number;
  /**
  * 'md5': MD5 Dessage-Digest Algorithm; 'sha1': Secure Hash Algorithm 1; 'sha256': Secure Hash Algorithm 256; 'sha384': Secure Hash Algorithm 384; 'sha512': Secure Hash Algorithm 512; 'null': No hash algorithm;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#hash Vpn#hash}
  */
  readonly hash?: string;
  /**
  * Prioritizes (1-10) security protocol, least value has highest priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#priority Vpn#priority}
  */
  readonly priority?: number;
}

export function vpnIpsecListEncCfgToTerraform(struct?: VpnIpsecListEncCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption: cdktf.stringToTerraform(struct!.encryption),
    gcm_priority: cdktf.numberToTerraform(struct!.gcmPriority),
    hash: cdktf.stringToTerraform(struct!.hash),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function vpnIpsecListEncCfgToHclTerraform(struct?: VpnIpsecListEncCfg | cdktf.IResolvable): any {
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

export class VpnIpsecListEncCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnIpsecListEncCfg | cdktf.IResolvable | undefined {
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
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIpsecListEncCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryption = undefined;
      this._gcmPriority = undefined;
      this._hash = undefined;
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

export class VpnIpsecListEncCfgList extends cdktf.ComplexList {
  public internalValue? : VpnIpsecListEncCfg[] | cdktf.IResolvable

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
  public get(index: number): VpnIpsecListEncCfgOutputReference {
    return new VpnIpsecListEncCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnIpsecListIpsecGateway {
  /**
  * Gateway to use for IPsec SA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#ike_gateway Vpn#ike_gateway}
  */
  readonly ikeGateway?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#uuid Vpn#uuid}
  */
  readonly uuid?: string;
}

export function vpnIpsecListIpsecGatewayToTerraform(struct?: VpnIpsecListIpsecGatewayOutputReference | VpnIpsecListIpsecGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ike_gateway: cdktf.stringToTerraform(struct!.ikeGateway),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function vpnIpsecListIpsecGatewayToHclTerraform(struct?: VpnIpsecListIpsecGatewayOutputReference | VpnIpsecListIpsecGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ike_gateway: {
      value: cdktf.stringToHclTerraform(struct!.ikeGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIpsecListIpsecGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnIpsecListIpsecGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ikeGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeGateway = this._ikeGateway;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIpsecListIpsecGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ikeGateway = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ikeGateway = value.ikeGateway;
      this._uuid = value.uuid;
    }
  }

  // ike_gateway - computed: false, optional: true, required: false
  private _ikeGateway?: string; 
  public get ikeGateway() {
    return this.getStringAttribute('ike_gateway');
  }
  public set ikeGateway(value: string) {
    this._ikeGateway = value;
  }
  public resetIkeGateway() {
    this._ikeGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeGatewayInput() {
    return this._ikeGateway;
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
}
export interface VpnIpsecListSamplingEnable {
  /**
  * 'all': all; 'packets-encrypted': Encrypted Packets; 'packets-decrypted': Decrypted Packets; 'anti-replay-num': Anti-Replay Failure; 'rekey-num': Rekey Times; 'packets-err-inactive': Inactive Error; 'packets-err-encryption': Encryption Error; 'packets-err-pad-check': Pad Check Error; 'packets-err-pkt-sanity': Packets Sanity Error; 'packets-err-icv-check': ICV Check Error; 'packets-err-lifetime-lifebytes': Lifetime Lifebytes Error; 'bytes-encrypted': Encrypted Bytes; 'bytes-decrypted': Decrypted Bytes; 'prefrag-success': Pre-frag Success; 'prefrag-error': Pre-frag Error; 'cavium-bytes-encrypted': CAVIUM Encrypted Bytes; 'cavium-bytes-decrypted': CAVIUM Decrypted Bytes; 'cavium-packets-encrypted': CAVIUM Encrypted Packets; 'cavium-packets-decrypted': CAVIUM Decrypted Packets; 'qat-bytes-encrypted': QAT Encrypted Bytes; 'qat-bytes-decrypted': QAT Decrypted Bytes; 'qat-packets-encrypted': QAT Encrypted Packets; 'qat-packets-decrypted': QAT Decrypted Packets; 'tunnel-intf-down': Packet dropped: Tunnel Interface Down; 'pkt-fail-prep-to-send': Packet dropped: Failed in prepare to send; 'no-next-hop': Packet dropped: No next hop; 'invalid-tunnel-id': Packet dropped: Invalid tunnel ID; 'no-tunnel-found': Packet dropped: No tunnel found; 'pkt-fail-to-send': Packet dropped: Failed to send; 'frag-after-encap-frag-packets': Frag-after-encap Fragment Generated; 'frag-received': Fragment Received; 'sequence-num': Sequence Number; 'sequence-num-rollover': Sequence Number Rollover; 'packets-err-nh-check': Next Header Check Error;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#counters1 Vpn#counters1}
  */
  readonly counters1?: string;
}

export function vpnIpsecListSamplingEnableToTerraform(struct?: VpnIpsecListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function vpnIpsecListSamplingEnableToHclTerraform(struct?: VpnIpsecListSamplingEnable | cdktf.IResolvable): any {
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

export class VpnIpsecListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnIpsecListSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpnIpsecListSamplingEnable | cdktf.IResolvable | undefined) {
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

export class VpnIpsecListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : VpnIpsecListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): VpnIpsecListSamplingEnableOutputReference {
    return new VpnIpsecListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnIpsecListTrafficSelectorIpv4 {
  /**
  * Local Traffic Selector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#local Vpn#local}
  */
  readonly local?: string;
  /**
  * IPv4 Address Network Mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#local_netmask Vpn#local_netmask}
  */
  readonly localNetmask?: string;
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#local_port Vpn#local_port}
  */
  readonly localPort?: number;
  /**
  * IP Protocol Number (0-255)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#protocol Vpn#protocol}
  */
  readonly protocol?: number;
  /**
  * IPv4 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#remote_ip Vpn#remote_ip}
  */
  readonly remoteIp?: string;
  /**
  * Remote IP address assigned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#remote_ipv4_assigned Vpn#remote_ipv4_assigned}
  */
  readonly remoteIpv4Assigned?: number;
  /**
  * IPv4 Address Network Mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#remote_netmask Vpn#remote_netmask}
  */
  readonly remoteNetmask?: string;
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#remote_port Vpn#remote_port}
  */
  readonly remotePort?: number;
}

export function vpnIpsecListTrafficSelectorIpv4ToTerraform(struct?: VpnIpsecListTrafficSelectorIpv4OutputReference | VpnIpsecListTrafficSelectorIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local: cdktf.stringToTerraform(struct!.local),
    local_netmask: cdktf.stringToTerraform(struct!.localNetmask),
    local_port: cdktf.numberToTerraform(struct!.localPort),
    protocol: cdktf.numberToTerraform(struct!.protocol),
    remote_ip: cdktf.stringToTerraform(struct!.remoteIp),
    remote_ipv4_assigned: cdktf.numberToTerraform(struct!.remoteIpv4Assigned),
    remote_netmask: cdktf.stringToTerraform(struct!.remoteNetmask),
    remote_port: cdktf.numberToTerraform(struct!.remotePort),
  }
}


export function vpnIpsecListTrafficSelectorIpv4ToHclTerraform(struct?: VpnIpsecListTrafficSelectorIpv4OutputReference | VpnIpsecListTrafficSelectorIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local: {
      value: cdktf.stringToHclTerraform(struct!.local),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_netmask: {
      value: cdktf.stringToHclTerraform(struct!.localNetmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_port: {
      value: cdktf.numberToHclTerraform(struct!.localPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.numberToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remote_ip: {
      value: cdktf.stringToHclTerraform(struct!.remoteIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_ipv4_assigned: {
      value: cdktf.numberToHclTerraform(struct!.remoteIpv4Assigned),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remote_netmask: {
      value: cdktf.stringToHclTerraform(struct!.remoteNetmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_port: {
      value: cdktf.numberToHclTerraform(struct!.remotePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIpsecListTrafficSelectorIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnIpsecListTrafficSelectorIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._local !== undefined) {
      hasAnyValues = true;
      internalValueResult.local = this._local;
    }
    if (this._localNetmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.localNetmask = this._localNetmask;
    }
    if (this._localPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPort = this._localPort;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._remoteIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIp = this._remoteIp;
    }
    if (this._remoteIpv4Assigned !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIpv4Assigned = this._remoteIpv4Assigned;
    }
    if (this._remoteNetmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteNetmask = this._remoteNetmask;
    }
    if (this._remotePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.remotePort = this._remotePort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIpsecListTrafficSelectorIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._local = undefined;
      this._localNetmask = undefined;
      this._localPort = undefined;
      this._protocol = undefined;
      this._remoteIp = undefined;
      this._remoteIpv4Assigned = undefined;
      this._remoteNetmask = undefined;
      this._remotePort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._local = value.local;
      this._localNetmask = value.localNetmask;
      this._localPort = value.localPort;
      this._protocol = value.protocol;
      this._remoteIp = value.remoteIp;
      this._remoteIpv4Assigned = value.remoteIpv4Assigned;
      this._remoteNetmask = value.remoteNetmask;
      this._remotePort = value.remotePort;
    }
  }

  // local - computed: false, optional: true, required: false
  private _local?: string; 
  public get local() {
    return this.getStringAttribute('local');
  }
  public set local(value: string) {
    this._local = value;
  }
  public resetLocal() {
    this._local = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local;
  }

  // local_netmask - computed: false, optional: true, required: false
  private _localNetmask?: string; 
  public get localNetmask() {
    return this.getStringAttribute('local_netmask');
  }
  public set localNetmask(value: string) {
    this._localNetmask = value;
  }
  public resetLocalNetmask() {
    this._localNetmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localNetmaskInput() {
    return this._localNetmask;
  }

  // local_port - computed: false, optional: true, required: false
  private _localPort?: number; 
  public get localPort() {
    return this.getNumberAttribute('local_port');
  }
  public set localPort(value: number) {
    this._localPort = value;
  }
  public resetLocalPort() {
    this._localPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPortInput() {
    return this._localPort;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: number; 
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }
  public set protocol(value: number) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
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

  // remote_ipv4_assigned - computed: false, optional: true, required: false
  private _remoteIpv4Assigned?: number; 
  public get remoteIpv4Assigned() {
    return this.getNumberAttribute('remote_ipv4_assigned');
  }
  public set remoteIpv4Assigned(value: number) {
    this._remoteIpv4Assigned = value;
  }
  public resetRemoteIpv4Assigned() {
    this._remoteIpv4Assigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpv4AssignedInput() {
    return this._remoteIpv4Assigned;
  }

  // remote_netmask - computed: false, optional: true, required: false
  private _remoteNetmask?: string; 
  public get remoteNetmask() {
    return this.getStringAttribute('remote_netmask');
  }
  public set remoteNetmask(value: string) {
    this._remoteNetmask = value;
  }
  public resetRemoteNetmask() {
    this._remoteNetmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteNetmaskInput() {
    return this._remoteNetmask;
  }

  // remote_port - computed: false, optional: true, required: false
  private _remotePort?: number; 
  public get remotePort() {
    return this.getNumberAttribute('remote_port');
  }
  public set remotePort(value: number) {
    this._remotePort = value;
  }
  public resetRemotePort() {
    this._remotePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remotePortInput() {
    return this._remotePort;
  }
}
export interface VpnIpsecListTrafficSelectorIpv6 {
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#local_portv6 Vpn#local_portv6}
  */
  readonly localPortv6?: number;
  /**
  * Local Traffic Selector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#localv6 Vpn#localv6}
  */
  readonly localv6?: string;
  /**
  * IP Protocol Number (0-255)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#protocolv6 Vpn#protocolv6}
  */
  readonly protocolv6?: number;
  /**
  * IPv6 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#remote_ipv6 Vpn#remote_ipv6}
  */
  readonly remoteIpv6?: string;
  /**
  * Remote IPv6 address assigned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#remote_ipv6_assigned Vpn#remote_ipv6_assigned}
  */
  readonly remoteIpv6Assigned?: number;
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#remote_portv6 Vpn#remote_portv6}
  */
  readonly remotePortv6?: number;
}

export function vpnIpsecListTrafficSelectorIpv6ToTerraform(struct?: VpnIpsecListTrafficSelectorIpv6OutputReference | VpnIpsecListTrafficSelectorIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_portv6: cdktf.numberToTerraform(struct!.localPortv6),
    localv6: cdktf.stringToTerraform(struct!.localv6),
    protocolv6: cdktf.numberToTerraform(struct!.protocolv6),
    remote_ipv6: cdktf.stringToTerraform(struct!.remoteIpv6),
    remote_ipv6_assigned: cdktf.numberToTerraform(struct!.remoteIpv6Assigned),
    remote_portv6: cdktf.numberToTerraform(struct!.remotePortv6),
  }
}


export function vpnIpsecListTrafficSelectorIpv6ToHclTerraform(struct?: VpnIpsecListTrafficSelectorIpv6OutputReference | VpnIpsecListTrafficSelectorIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_portv6: {
      value: cdktf.numberToHclTerraform(struct!.localPortv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    localv6: {
      value: cdktf.stringToHclTerraform(struct!.localv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocolv6: {
      value: cdktf.numberToHclTerraform(struct!.protocolv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remote_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.remoteIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_ipv6_assigned: {
      value: cdktf.numberToHclTerraform(struct!.remoteIpv6Assigned),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remote_portv6: {
      value: cdktf.numberToHclTerraform(struct!.remotePortv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIpsecListTrafficSelectorIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnIpsecListTrafficSelectorIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localPortv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPortv6 = this._localPortv6;
    }
    if (this._localv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.localv6 = this._localv6;
    }
    if (this._protocolv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolv6 = this._protocolv6;
    }
    if (this._remoteIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIpv6 = this._remoteIpv6;
    }
    if (this._remoteIpv6Assigned !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIpv6Assigned = this._remoteIpv6Assigned;
    }
    if (this._remotePortv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.remotePortv6 = this._remotePortv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIpsecListTrafficSelectorIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localPortv6 = undefined;
      this._localv6 = undefined;
      this._protocolv6 = undefined;
      this._remoteIpv6 = undefined;
      this._remoteIpv6Assigned = undefined;
      this._remotePortv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localPortv6 = value.localPortv6;
      this._localv6 = value.localv6;
      this._protocolv6 = value.protocolv6;
      this._remoteIpv6 = value.remoteIpv6;
      this._remoteIpv6Assigned = value.remoteIpv6Assigned;
      this._remotePortv6 = value.remotePortv6;
    }
  }

  // local_portv6 - computed: false, optional: true, required: false
  private _localPortv6?: number; 
  public get localPortv6() {
    return this.getNumberAttribute('local_portv6');
  }
  public set localPortv6(value: number) {
    this._localPortv6 = value;
  }
  public resetLocalPortv6() {
    this._localPortv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPortv6Input() {
    return this._localPortv6;
  }

  // localv6 - computed: false, optional: true, required: false
  private _localv6?: string; 
  public get localv6() {
    return this.getStringAttribute('localv6');
  }
  public set localv6(value: string) {
    this._localv6 = value;
  }
  public resetLocalv6() {
    this._localv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localv6Input() {
    return this._localv6;
  }

  // protocolv6 - computed: false, optional: true, required: false
  private _protocolv6?: number; 
  public get protocolv6() {
    return this.getNumberAttribute('protocolv6');
  }
  public set protocolv6(value: number) {
    this._protocolv6 = value;
  }
  public resetProtocolv6() {
    this._protocolv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolv6Input() {
    return this._protocolv6;
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

  // remote_ipv6_assigned - computed: false, optional: true, required: false
  private _remoteIpv6Assigned?: number; 
  public get remoteIpv6Assigned() {
    return this.getNumberAttribute('remote_ipv6_assigned');
  }
  public set remoteIpv6Assigned(value: number) {
    this._remoteIpv6Assigned = value;
  }
  public resetRemoteIpv6Assigned() {
    this._remoteIpv6Assigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpv6AssignedInput() {
    return this._remoteIpv6Assigned;
  }

  // remote_portv6 - computed: false, optional: true, required: false
  private _remotePortv6?: number; 
  public get remotePortv6() {
    return this.getNumberAttribute('remote_portv6');
  }
  public set remotePortv6(value: number) {
    this._remotePortv6 = value;
  }
  public resetRemotePortv6() {
    this._remotePortv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remotePortv6Input() {
    return this._remotePortv6;
  }
}
export interface VpnIpsecListTrafficSelector {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#ipv4 Vpn#ipv4}
  */
  readonly ipv4?: VpnIpsecListTrafficSelectorIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#ipv6 Vpn#ipv6}
  */
  readonly ipv6?: VpnIpsecListTrafficSelectorIpv6;
}

export function vpnIpsecListTrafficSelectorToTerraform(struct?: VpnIpsecListTrafficSelectorOutputReference | VpnIpsecListTrafficSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: vpnIpsecListTrafficSelectorIpv4ToTerraform(struct!.ipv4),
    ipv6: vpnIpsecListTrafficSelectorIpv6ToTerraform(struct!.ipv6),
  }
}


export function vpnIpsecListTrafficSelectorToHclTerraform(struct?: VpnIpsecListTrafficSelectorOutputReference | VpnIpsecListTrafficSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: vpnIpsecListTrafficSelectorIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "VpnIpsecListTrafficSelectorIpv4List",
    },
    ipv6: {
      value: vpnIpsecListTrafficSelectorIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "VpnIpsecListTrafficSelectorIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIpsecListTrafficSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnIpsecListTrafficSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIpsecListTrafficSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new VpnIpsecListTrafficSelectorIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: VpnIpsecListTrafficSelectorIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new VpnIpsecListTrafficSelectorIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: VpnIpsecListTrafficSelectorIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}
export interface VpnIpsecListStruct {
  /**
  * '0': Disable Anti-Replay Window Check; '32': Window size of 32; '64': Window size of 64; '128': Window size of 128; '256': Window size of 256; '512': Window size of 512; '1024': Window size of 1024; '2048': Window size of 2048; '3072': Window size of 3072; '4096': Window size of 4096; '8192': Window size of 8192;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#anti_replay_window Vpn#anti_replay_window}
  */
  readonly antiReplayWindow?: string;
  /**
  * '0': Diffie-Hellman group 0 (Default); '1': Diffie-Hellman group 1 - 768-bits; '2': Diffie-Hellman group 2 - 1024-bits; '5': Diffie-Hellman group 5 - 1536-bits; '14': Diffie-Hellman group 14 - 2048-bits; '15': Diffie-Hellman group 15 - 3072-bits; '16': Diffie-Hellman group 16 - 4096-bits; '18': Diffie-Hellman group 18 - 8192-bits; '19': Diffie-Hellman group 19 - 256-bit Elliptic Curve; '20': Diffie-Hellman group 20 - 384-bit Elliptic Curve;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#dh_group Vpn#dh_group}
  */
  readonly dhGroup?: string;
  /**
  * 'default': Default dscp (000000); 'af11': AF11 (001010); 'af12': AF12 (001100); 'af13': AF13 (001110); 'af21': AF21 (010010); 'af22': AF22 (010100); 'af23': AF23 (010110); 'af31': AF31 (011010); 'af32': AF32 (011100); 'af33': AF33 (011110); 'af41': AF41 (100010); 'af42': AF42 (100100); 'af43': AF43 (100110); 'cs1': CS1 (001000); 'cs2': CS2 (010000); 'cs3': CS3 (011000); 'cs4': CS4 (100000); 'cs5': CS5 (101000); 'cs6': CS6 (110000); 'cs7': CS7 (111000); 'ef': EF (101110); '0': 000000; '1': 000001; '2': 000010; '3': 000011; '4': 000100; '5': 000101; '6': 000110; '7': 000111; '8': 001000; '9': 001001; '10': 001010; '11': 001011; '12': 001100; '13': 001101; '14': 001110; '15': 001111; '16': 010000; '17': 010001; '18': 010010; '19': 010011; '20': 010100; '21': 010101; '22': 010110; '23': 010111; '24': 011000; '25': 011001; '26': 011010; '27': 011011; '28': 011100; '29': 011101; '30': 011110; '31': 011111; '32': 100000; '33': 100001; '34': 100010; '35': 100011; '36': 100100; '37': 100101; '38': 100110; '39': 100111; '40': 101000; '41': 101001; '42': 101010; '43': 101011; '44': 101100; '45': 101101; '46': 101110; '47': 101111; '48': 110000; '49': 110001; '50': 110010; '51': 110011; '52': 110100; '53': 110101; '54': 110110; '55': 110111; '56': 111000; '57': 111001; '58': 111010; '59': 111011; '60': 111100; '61': 111101; '62': 111110; '63': 111111;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#dscp Vpn#dscp}
  */
  readonly dscp?: string;
  /**
  * Enforce Traffic Selector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#enforce_traffic_selector Vpn#enforce_traffic_selector}
  */
  readonly enforceTrafficSelector?: number;
  /**
  * IPsec SA age in megabytes (0 indicates unlimited bytes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#lifebytes Vpn#lifebytes}
  */
  readonly lifebytes?: number;
  /**
  * IPsec SA age in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#lifetime Vpn#lifetime}
  */
  readonly lifetime?: number;
  /**
  * 'tunnel': Encapsulating the packet in IPsec tunnel mode (Default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#mode Vpn#mode}
  */
  readonly mode?: string;
  /**
  * IPsec name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#name Vpn#name}
  */
  readonly name: string;
  /**
  * 'esp': Encapsulating security protocol (Default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#proto Vpn#proto}
  */
  readonly proto?: string;
  /**
  * Do not use incremental sequence number in the ESP header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#sequence_number_disable Vpn#sequence_number_disable}
  */
  readonly sequenceNumberDisable?: number;
  /**
  * Initiates SA negotiation to bring the IPsec connection up
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#up Vpn#up}
  */
  readonly up?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#user_tag Vpn#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#uuid Vpn#uuid}
  */
  readonly uuid?: string;
  /**
  * bind_tunnel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#bind_tunnel Vpn#bind_tunnel}
  */
  readonly bindTunnel?: VpnIpsecListBindTunnel;
  /**
  * enc_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#enc_cfg Vpn#enc_cfg}
  */
  readonly encCfg?: VpnIpsecListEncCfg[] | cdktf.IResolvable;
  /**
  * ipsec_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#ipsec_gateway Vpn#ipsec_gateway}
  */
  readonly ipsecGateway?: VpnIpsecListIpsecGateway;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#sampling_enable Vpn#sampling_enable}
  */
  readonly samplingEnable?: VpnIpsecListSamplingEnable[] | cdktf.IResolvable;
  /**
  * traffic_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#traffic_selector Vpn#traffic_selector}
  */
  readonly trafficSelector?: VpnIpsecListTrafficSelector;
}

export function vpnIpsecListStructToTerraform(struct?: VpnIpsecListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anti_replay_window: cdktf.stringToTerraform(struct!.antiReplayWindow),
    dh_group: cdktf.stringToTerraform(struct!.dhGroup),
    dscp: cdktf.stringToTerraform(struct!.dscp),
    enforce_traffic_selector: cdktf.numberToTerraform(struct!.enforceTrafficSelector),
    lifebytes: cdktf.numberToTerraform(struct!.lifebytes),
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
    proto: cdktf.stringToTerraform(struct!.proto),
    sequence_number_disable: cdktf.numberToTerraform(struct!.sequenceNumberDisable),
    up: cdktf.numberToTerraform(struct!.up),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    bind_tunnel: vpnIpsecListBindTunnelToTerraform(struct!.bindTunnel),
    enc_cfg: cdktf.listMapper(vpnIpsecListEncCfgToTerraform, true)(struct!.encCfg),
    ipsec_gateway: vpnIpsecListIpsecGatewayToTerraform(struct!.ipsecGateway),
    sampling_enable: cdktf.listMapper(vpnIpsecListSamplingEnableToTerraform, true)(struct!.samplingEnable),
    traffic_selector: vpnIpsecListTrafficSelectorToTerraform(struct!.trafficSelector),
  }
}


export function vpnIpsecListStructToHclTerraform(struct?: VpnIpsecListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anti_replay_window: {
      value: cdktf.stringToHclTerraform(struct!.antiReplayWindow),
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
    dscp: {
      value: cdktf.stringToHclTerraform(struct!.dscp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enforce_traffic_selector: {
      value: cdktf.numberToHclTerraform(struct!.enforceTrafficSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lifebytes: {
      value: cdktf.numberToHclTerraform(struct!.lifebytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lifetime: {
      value: cdktf.numberToHclTerraform(struct!.lifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
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
    proto: {
      value: cdktf.stringToHclTerraform(struct!.proto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sequence_number_disable: {
      value: cdktf.numberToHclTerraform(struct!.sequenceNumberDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    up: {
      value: cdktf.numberToHclTerraform(struct!.up),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bind_tunnel: {
      value: vpnIpsecListBindTunnelToHclTerraform(struct!.bindTunnel),
      isBlock: true,
      type: "list",
      storageClassType: "VpnIpsecListBindTunnelList",
    },
    enc_cfg: {
      value: cdktf.listMapperHcl(vpnIpsecListEncCfgToHclTerraform, true)(struct!.encCfg),
      isBlock: true,
      type: "list",
      storageClassType: "VpnIpsecListEncCfgList",
    },
    ipsec_gateway: {
      value: vpnIpsecListIpsecGatewayToHclTerraform(struct!.ipsecGateway),
      isBlock: true,
      type: "list",
      storageClassType: "VpnIpsecListIpsecGatewayList",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(vpnIpsecListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "VpnIpsecListSamplingEnableList",
    },
    traffic_selector: {
      value: vpnIpsecListTrafficSelectorToHclTerraform(struct!.trafficSelector),
      isBlock: true,
      type: "list",
      storageClassType: "VpnIpsecListTrafficSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIpsecListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnIpsecListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._antiReplayWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.antiReplayWindow = this._antiReplayWindow;
    }
    if (this._dhGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhGroup = this._dhGroup;
    }
    if (this._dscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp = this._dscp;
    }
    if (this._enforceTrafficSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceTrafficSelector = this._enforceTrafficSelector;
    }
    if (this._lifebytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifebytes = this._lifebytes;
    }
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.proto = this._proto;
    }
    if (this._sequenceNumberDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceNumberDisable = this._sequenceNumberDisable;
    }
    if (this._up !== undefined) {
      hasAnyValues = true;
      internalValueResult.up = this._up;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._bindTunnel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindTunnel = this._bindTunnel?.internalValue;
    }
    if (this._encCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encCfg = this._encCfg?.internalValue;
    }
    if (this._ipsecGateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecGateway = this._ipsecGateway?.internalValue;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    if (this._trafficSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficSelector = this._trafficSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIpsecListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._antiReplayWindow = undefined;
      this._dhGroup = undefined;
      this._dscp = undefined;
      this._enforceTrafficSelector = undefined;
      this._lifebytes = undefined;
      this._lifetime = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._proto = undefined;
      this._sequenceNumberDisable = undefined;
      this._up = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._bindTunnel.internalValue = undefined;
      this._encCfg.internalValue = undefined;
      this._ipsecGateway.internalValue = undefined;
      this._samplingEnable.internalValue = undefined;
      this._trafficSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._antiReplayWindow = value.antiReplayWindow;
      this._dhGroup = value.dhGroup;
      this._dscp = value.dscp;
      this._enforceTrafficSelector = value.enforceTrafficSelector;
      this._lifebytes = value.lifebytes;
      this._lifetime = value.lifetime;
      this._mode = value.mode;
      this._name = value.name;
      this._proto = value.proto;
      this._sequenceNumberDisable = value.sequenceNumberDisable;
      this._up = value.up;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._bindTunnel.internalValue = value.bindTunnel;
      this._encCfg.internalValue = value.encCfg;
      this._ipsecGateway.internalValue = value.ipsecGateway;
      this._samplingEnable.internalValue = value.samplingEnable;
      this._trafficSelector.internalValue = value.trafficSelector;
    }
  }

  // anti_replay_window - computed: false, optional: true, required: false
  private _antiReplayWindow?: string; 
  public get antiReplayWindow() {
    return this.getStringAttribute('anti_replay_window');
  }
  public set antiReplayWindow(value: string) {
    this._antiReplayWindow = value;
  }
  public resetAntiReplayWindow() {
    this._antiReplayWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiReplayWindowInput() {
    return this._antiReplayWindow;
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

  // dscp - computed: false, optional: true, required: false
  private _dscp?: string; 
  public get dscp() {
    return this.getStringAttribute('dscp');
  }
  public set dscp(value: string) {
    this._dscp = value;
  }
  public resetDscp() {
    this._dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
  }

  // enforce_traffic_selector - computed: false, optional: true, required: false
  private _enforceTrafficSelector?: number; 
  public get enforceTrafficSelector() {
    return this.getNumberAttribute('enforce_traffic_selector');
  }
  public set enforceTrafficSelector(value: number) {
    this._enforceTrafficSelector = value;
  }
  public resetEnforceTrafficSelector() {
    this._enforceTrafficSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceTrafficSelectorInput() {
    return this._enforceTrafficSelector;
  }

  // lifebytes - computed: false, optional: true, required: false
  private _lifebytes?: number; 
  public get lifebytes() {
    return this.getNumberAttribute('lifebytes');
  }
  public set lifebytes(value: number) {
    this._lifebytes = value;
  }
  public resetLifebytes() {
    this._lifebytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifebytesInput() {
    return this._lifebytes;
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

  // proto - computed: false, optional: true, required: false
  private _proto?: string; 
  public get proto() {
    return this.getStringAttribute('proto');
  }
  public set proto(value: string) {
    this._proto = value;
  }
  public resetProto() {
    this._proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
  }

  // sequence_number_disable - computed: false, optional: true, required: false
  private _sequenceNumberDisable?: number; 
  public get sequenceNumberDisable() {
    return this.getNumberAttribute('sequence_number_disable');
  }
  public set sequenceNumberDisable(value: number) {
    this._sequenceNumberDisable = value;
  }
  public resetSequenceNumberDisable() {
    this._sequenceNumberDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumberDisableInput() {
    return this._sequenceNumberDisable;
  }

  // up - computed: false, optional: true, required: false
  private _up?: number; 
  public get up() {
    return this.getNumberAttribute('up');
  }
  public set up(value: number) {
    this._up = value;
  }
  public resetUp() {
    this._up = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upInput() {
    return this._up;
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

  // bind_tunnel - computed: false, optional: true, required: false
  private _bindTunnel = new VpnIpsecListBindTunnelOutputReference(this, "bind_tunnel");
  public get bindTunnel() {
    return this._bindTunnel;
  }
  public putBindTunnel(value: VpnIpsecListBindTunnel) {
    this._bindTunnel.internalValue = value;
  }
  public resetBindTunnel() {
    this._bindTunnel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindTunnelInput() {
    return this._bindTunnel.internalValue;
  }

  // enc_cfg - computed: false, optional: true, required: false
  private _encCfg = new VpnIpsecListEncCfgList(this, "enc_cfg", false);
  public get encCfg() {
    return this._encCfg;
  }
  public putEncCfg(value: VpnIpsecListEncCfg[] | cdktf.IResolvable) {
    this._encCfg.internalValue = value;
  }
  public resetEncCfg() {
    this._encCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encCfgInput() {
    return this._encCfg.internalValue;
  }

  // ipsec_gateway - computed: false, optional: true, required: false
  private _ipsecGateway = new VpnIpsecListIpsecGatewayOutputReference(this, "ipsec_gateway");
  public get ipsecGateway() {
    return this._ipsecGateway;
  }
  public putIpsecGateway(value: VpnIpsecListIpsecGateway) {
    this._ipsecGateway.internalValue = value;
  }
  public resetIpsecGateway() {
    this._ipsecGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecGatewayInput() {
    return this._ipsecGateway.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new VpnIpsecListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: VpnIpsecListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // traffic_selector - computed: false, optional: true, required: false
  private _trafficSelector = new VpnIpsecListTrafficSelectorOutputReference(this, "traffic_selector");
  public get trafficSelector() {
    return this._trafficSelector;
  }
  public putTrafficSelector(value: VpnIpsecListTrafficSelector) {
    this._trafficSelector.internalValue = value;
  }
  public resetTrafficSelector() {
    this._trafficSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficSelectorInput() {
    return this._trafficSelector.internalValue;
  }
}

export class VpnIpsecListStructList extends cdktf.ComplexList {
  public internalValue? : VpnIpsecListStruct[] | cdktf.IResolvable

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
  public get(index: number): VpnIpsecListStructOutputReference {
    return new VpnIpsecListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnIpsecSa {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#uuid Vpn#uuid}
  */
  readonly uuid?: string;
}

export function vpnIpsecSaToTerraform(struct?: VpnIpsecSaOutputReference | VpnIpsecSa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function vpnIpsecSaToHclTerraform(struct?: VpnIpsecSaOutputReference | VpnIpsecSa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIpsecSaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnIpsecSa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIpsecSa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
}
export interface VpnIpsecSaByGw {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#uuid Vpn#uuid}
  */
  readonly uuid?: string;
}

export function vpnIpsecSaByGwToTerraform(struct?: VpnIpsecSaByGwOutputReference | VpnIpsecSaByGw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function vpnIpsecSaByGwToHclTerraform(struct?: VpnIpsecSaByGwOutputReference | VpnIpsecSaByGw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIpsecSaByGwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnIpsecSaByGw | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIpsecSaByGw | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
}
export interface VpnIpsecSaClients {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#uuid Vpn#uuid}
  */
  readonly uuid?: string;
}

export function vpnIpsecSaClientsToTerraform(struct?: VpnIpsecSaClientsOutputReference | VpnIpsecSaClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function vpnIpsecSaClientsToHclTerraform(struct?: VpnIpsecSaClientsOutputReference | VpnIpsecSaClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIpsecSaClientsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnIpsecSaClients | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIpsecSaClients | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
}
export interface VpnIpsecSaStatsListSamplingEnable {
  /**
  * 'all': all; 'packets-encrypted': Encrypted Packets; 'packets-decrypted': Decrypted Packets; 'anti-replay-num': Anti-Replay Failure; 'rekey-num': Rekey Times; 'packets-err-inactive': Inactive Error; 'packets-err-encryption': Encryption Error; 'packets-err-pad-check': Pad Check Error; 'packets-err-pkt-sanity': Packets Sanity Error; 'packets-err-icv-check': ICV Check Error; 'packets-err-lifetime-lifebytes': Lifetime Lifebytes Error; 'bytes-encrypted': Encrypted Bytes; 'bytes-decrypted': Decrypted Bytes; 'prefrag-success': Pre-frag Success; 'prefrag-error': Pre-frag Error; 'cavium-bytes-encrypted': CAVIUM Encrypted Bytes; 'cavium-bytes-decrypted': CAVIUM Decrypted Bytes; 'cavium-packets-encrypted': CAVIUM Encrypted Packets; 'cavium-packets-decrypted': CAVIUM Decrypted Packets; 'qat-bytes-encrypted': QAT Encrypted Bytes; 'qat-bytes-decrypted': QAT Decrypted Bytes; 'qat-packets-encrypted': QAT Encrypted Packets; 'qat-packets-decrypted': QAT Decrypted Packets; 'tunnel-intf-down': Packet dropped: Tunnel Interface Down; 'pkt-fail-prep-to-send': Packet dropped: Failed in prepare to send; 'no-next-hop': Packet dropped: No next hop; 'invalid-tunnel-id': Packet dropped: Invalid tunnel ID; 'no-tunnel-found': Packet dropped: No tunnel found; 'pkt-fail-to-send': Packet dropped: Failed to send; 'frag-after-encap-frag-packets': Frag-after-encap Fragment Generated; 'frag-received': Fragment Received; 'sequence-num': Sequence Number; 'sequence-num-rollover': Sequence Number Rollover; 'packets-err-nh-check': Next Header Check Error;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#counters1 Vpn#counters1}
  */
  readonly counters1?: string;
}

export function vpnIpsecSaStatsListSamplingEnableToTerraform(struct?: VpnIpsecSaStatsListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function vpnIpsecSaStatsListSamplingEnableToHclTerraform(struct?: VpnIpsecSaStatsListSamplingEnable | cdktf.IResolvable): any {
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

export class VpnIpsecSaStatsListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnIpsecSaStatsListSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpnIpsecSaStatsListSamplingEnable | cdktf.IResolvable | undefined) {
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

export class VpnIpsecSaStatsListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : VpnIpsecSaStatsListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): VpnIpsecSaStatsListSamplingEnableOutputReference {
    return new VpnIpsecSaStatsListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnIpsecSaStatsListStruct {
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#sampling_enable Vpn#sampling_enable}
  */
  readonly samplingEnable?: VpnIpsecSaStatsListSamplingEnable[] | cdktf.IResolvable;
}

export function vpnIpsecSaStatsListStructToTerraform(struct?: VpnIpsecSaStatsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sampling_enable: cdktf.listMapper(vpnIpsecSaStatsListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function vpnIpsecSaStatsListStructToHclTerraform(struct?: VpnIpsecSaStatsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sampling_enable: {
      value: cdktf.listMapperHcl(vpnIpsecSaStatsListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "VpnIpsecSaStatsListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIpsecSaStatsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnIpsecSaStatsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIpsecSaStatsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new VpnIpsecSaStatsListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: VpnIpsecSaStatsListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class VpnIpsecSaStatsListStructList extends cdktf.ComplexList {
  public internalValue? : VpnIpsecSaStatsListStruct[] | cdktf.IResolvable

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
  public get(index: number): VpnIpsecSaStatsListStructOutputReference {
    return new VpnIpsecSaStatsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnLog {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#uuid Vpn#uuid}
  */
  readonly uuid?: string;
}

export function vpnLogToTerraform(struct?: VpnLogOutputReference | VpnLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function vpnLogToHclTerraform(struct?: VpnLogOutputReference | VpnLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
}
export interface VpnOcsp {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#uuid Vpn#uuid}
  */
  readonly uuid?: string;
}

export function vpnOcspToTerraform(struct?: VpnOcspOutputReference | VpnOcsp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function vpnOcspToHclTerraform(struct?: VpnOcspOutputReference | VpnOcsp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnOcspOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnOcsp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnOcsp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
}
export interface VpnRevocationListCrl {
  /**
  * Primary CRL URL (http://www.example.com/ocsp) (only .der filetypes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#crl_pri Vpn#crl_pri}
  */
  readonly crlPri?: string;
  /**
  * Secondary CRL URL (http://www.example.com/ocsp) (only .der filetypes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#crl_sec Vpn#crl_sec}
  */
  readonly crlSec?: string;
}

export function vpnRevocationListCrlToTerraform(struct?: VpnRevocationListCrlOutputReference | VpnRevocationListCrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crl_pri: cdktf.stringToTerraform(struct!.crlPri),
    crl_sec: cdktf.stringToTerraform(struct!.crlSec),
  }
}


export function vpnRevocationListCrlToHclTerraform(struct?: VpnRevocationListCrlOutputReference | VpnRevocationListCrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crl_pri: {
      value: cdktf.stringToHclTerraform(struct!.crlPri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crl_sec: {
      value: cdktf.stringToHclTerraform(struct!.crlSec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnRevocationListCrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnRevocationListCrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crlPri !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlPri = this._crlPri;
    }
    if (this._crlSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlSec = this._crlSec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnRevocationListCrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._crlPri = undefined;
      this._crlSec = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._crlPri = value.crlPri;
      this._crlSec = value.crlSec;
    }
  }

  // crl_pri - computed: false, optional: true, required: false
  private _crlPri?: string; 
  public get crlPri() {
    return this.getStringAttribute('crl_pri');
  }
  public set crlPri(value: string) {
    this._crlPri = value;
  }
  public resetCrlPri() {
    this._crlPri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlPriInput() {
    return this._crlPri;
  }

  // crl_sec - computed: false, optional: true, required: false
  private _crlSec?: string; 
  public get crlSec() {
    return this.getStringAttribute('crl_sec');
  }
  public set crlSec(value: string) {
    this._crlSec = value;
  }
  public resetCrlSec() {
    this._crlSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlSecInput() {
    return this._crlSec;
  }
}
export interface VpnRevocationListOcsp {
  /**
  * Primary OCSP Authentication Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#ocsp_pri Vpn#ocsp_pri}
  */
  readonly ocspPri?: string;
  /**
  * Secondary OCSP Authentication Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#ocsp_sec Vpn#ocsp_sec}
  */
  readonly ocspSec?: string;
}

export function vpnRevocationListOcspToTerraform(struct?: VpnRevocationListOcspOutputReference | VpnRevocationListOcsp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ocsp_pri: cdktf.stringToTerraform(struct!.ocspPri),
    ocsp_sec: cdktf.stringToTerraform(struct!.ocspSec),
  }
}


export function vpnRevocationListOcspToHclTerraform(struct?: VpnRevocationListOcspOutputReference | VpnRevocationListOcsp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ocsp_pri: {
      value: cdktf.stringToHclTerraform(struct!.ocspPri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ocsp_sec: {
      value: cdktf.stringToHclTerraform(struct!.ocspSec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnRevocationListOcspOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnRevocationListOcsp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ocspPri !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspPri = this._ocspPri;
    }
    if (this._ocspSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspSec = this._ocspSec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnRevocationListOcsp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ocspPri = undefined;
      this._ocspSec = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ocspPri = value.ocspPri;
      this._ocspSec = value.ocspSec;
    }
  }

  // ocsp_pri - computed: false, optional: true, required: false
  private _ocspPri?: string; 
  public get ocspPri() {
    return this.getStringAttribute('ocsp_pri');
  }
  public set ocspPri(value: string) {
    this._ocspPri = value;
  }
  public resetOcspPri() {
    this._ocspPri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspPriInput() {
    return this._ocspPri;
  }

  // ocsp_sec - computed: false, optional: true, required: false
  private _ocspSec?: string; 
  public get ocspSec() {
    return this.getStringAttribute('ocsp_sec');
  }
  public set ocspSec(value: string) {
    this._ocspSec = value;
  }
  public resetOcspSec() {
    this._ocspSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspSecInput() {
    return this._ocspSec;
  }
}
export interface VpnRevocationListStruct {
  /**
  * Certificate Authority file name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#ca Vpn#ca}
  */
  readonly ca?: string;
  /**
  * Revocation name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#name Vpn#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#user_tag Vpn#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#uuid Vpn#uuid}
  */
  readonly uuid?: string;
  /**
  * crl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#crl Vpn#crl}
  */
  readonly crl?: VpnRevocationListCrl;
  /**
  * ocsp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#ocsp Vpn#ocsp}
  */
  readonly ocsp?: VpnRevocationListOcsp;
}

export function vpnRevocationListStructToTerraform(struct?: VpnRevocationListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca: cdktf.stringToTerraform(struct!.ca),
    name: cdktf.stringToTerraform(struct!.name),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    crl: vpnRevocationListCrlToTerraform(struct!.crl),
    ocsp: vpnRevocationListOcspToTerraform(struct!.ocsp),
  }
}


export function vpnRevocationListStructToHclTerraform(struct?: VpnRevocationListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca: {
      value: cdktf.stringToHclTerraform(struct!.ca),
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
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crl: {
      value: vpnRevocationListCrlToHclTerraform(struct!.crl),
      isBlock: true,
      type: "list",
      storageClassType: "VpnRevocationListCrlList",
    },
    ocsp: {
      value: vpnRevocationListOcspToHclTerraform(struct!.ocsp),
      isBlock: true,
      type: "list",
      storageClassType: "VpnRevocationListOcspList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnRevocationListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnRevocationListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ca !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._crl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crl = this._crl?.internalValue;
    }
    if (this._ocsp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocsp = this._ocsp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnRevocationListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ca = undefined;
      this._name = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._crl.internalValue = undefined;
      this._ocsp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ca = value.ca;
      this._name = value.name;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._crl.internalValue = value.crl;
      this._ocsp.internalValue = value.ocsp;
    }
  }

  // ca - computed: false, optional: true, required: false
  private _ca?: string; 
  public get ca() {
    return this.getStringAttribute('ca');
  }
  public set ca(value: string) {
    this._ca = value;
  }
  public resetCa() {
    this._ca = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca;
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

  // crl - computed: false, optional: true, required: false
  private _crl = new VpnRevocationListCrlOutputReference(this, "crl");
  public get crl() {
    return this._crl;
  }
  public putCrl(value: VpnRevocationListCrl) {
    this._crl.internalValue = value;
  }
  public resetCrl() {
    this._crl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlInput() {
    return this._crl.internalValue;
  }

  // ocsp - computed: false, optional: true, required: false
  private _ocsp = new VpnRevocationListOcspOutputReference(this, "ocsp");
  public get ocsp() {
    return this._ocsp;
  }
  public putOcsp(value: VpnRevocationListOcsp) {
    this._ocsp.internalValue = value;
  }
  public resetOcsp() {
    this._ocsp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspInput() {
    return this._ocsp.internalValue;
  }
}

export class VpnRevocationListStructList extends cdktf.ComplexList {
  public internalValue? : VpnRevocationListStruct[] | cdktf.IResolvable

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
  public get(index: number): VpnRevocationListStructOutputReference {
    return new VpnRevocationListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnSamplingEnable {
  /**
  * 'all': all; 'passthrough': passthrough; 'ha-standby-drop': ha-standby-drop;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#counters1 Vpn#counters1}
  */
  readonly counters1?: string;
}

export function vpnSamplingEnableToTerraform(struct?: VpnSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function vpnSamplingEnableToHclTerraform(struct?: VpnSamplingEnable | cdktf.IResolvable): any {
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

export class VpnSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpnSamplingEnable | cdktf.IResolvable | undefined) {
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

export class VpnSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : VpnSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): VpnSamplingEnableOutputReference {
    return new VpnSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn thunder_vpn}
*/
export class Vpn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vpn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vpn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vpn to import
  * @param importFromId The id of the existing Vpn that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vpn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vpn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn thunder_vpn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VpnConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_vpn',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asymmetricFlowSupport = config.asymmetricFlowSupport;
    this._enableVpnMetrics = config.enableVpnMetrics;
    this._extendedMatching = config.extendedMatching;
    this._fragmentAfterEncap = config.fragmentAfterEncap;
    this._id = config.id;
    this._ikeAccEnable = config.ikeAccEnable;
    this._ikeLoggingEnable = config.ikeLoggingEnable;
    this._ikeSaTimeout = config.ikeSaTimeout;
    this._ipsecCipherCheck = config.ipsecCipherCheck;
    this._ipsecErrorDump = config.ipsecErrorDump;
    this._ipsecMgmtDefaultPolicyDrop = config.ipsecMgmtDefaultPolicyDrop;
    this._jumboFragment = config.jumboFragment;
    this._natTraversalFlowAffinity = config.natTraversalFlowAffinity;
    this._signatureAuthentication = config.signatureAuthentication;
    this._statefulMode = config.statefulMode;
    this._tcpMssAdjustDisable = config.tcpMssAdjustDisable;
    this._uuid = config.uuid;
    this._crl.internalValue = config.crl;
    this._default.internalValue = config.default;
    this._error.internalValue = config.error;
    this._errordump.internalValue = config.errordump;
    this._groupList.internalValue = config.groupList;
    this._ikeGatewayList.internalValue = config.ikeGatewayList;
    this._ikeSa.internalValue = config.ikeSa;
    this._ikeSaBrief.internalValue = config.ikeSaBrief;
    this._ikeSaClients.internalValue = config.ikeSaClients;
    this._ikeStatsByGw.internalValue = config.ikeStatsByGw;
    this._ikeStatsGlobal.internalValue = config.ikeStatsGlobal;
    this._ipsecGroupList.internalValue = config.ipsecGroupList;
    this._ipsecList.internalValue = config.ipsecList;
    this._ipsecSa.internalValue = config.ipsecSa;
    this._ipsecSaByGw.internalValue = config.ipsecSaByGw;
    this._ipsecSaClients.internalValue = config.ipsecSaClients;
    this._ipsecSaStatsList.internalValue = config.ipsecSaStatsList;
    this._log.internalValue = config.log;
    this._ocsp.internalValue = config.ocsp;
    this._revocationList.internalValue = config.revocationList;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asymmetric_flow_support - computed: false, optional: true, required: false
  private _asymmetricFlowSupport?: number; 
  public get asymmetricFlowSupport() {
    return this.getNumberAttribute('asymmetric_flow_support');
  }
  public set asymmetricFlowSupport(value: number) {
    this._asymmetricFlowSupport = value;
  }
  public resetAsymmetricFlowSupport() {
    this._asymmetricFlowSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asymmetricFlowSupportInput() {
    return this._asymmetricFlowSupport;
  }

  // enable_vpn_metrics - computed: false, optional: true, required: false
  private _enableVpnMetrics?: number; 
  public get enableVpnMetrics() {
    return this.getNumberAttribute('enable_vpn_metrics');
  }
  public set enableVpnMetrics(value: number) {
    this._enableVpnMetrics = value;
  }
  public resetEnableVpnMetrics() {
    this._enableVpnMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVpnMetricsInput() {
    return this._enableVpnMetrics;
  }

  // extended_matching - computed: false, optional: true, required: false
  private _extendedMatching?: number; 
  public get extendedMatching() {
    return this.getNumberAttribute('extended_matching');
  }
  public set extendedMatching(value: number) {
    this._extendedMatching = value;
  }
  public resetExtendedMatching() {
    this._extendedMatching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedMatchingInput() {
    return this._extendedMatching;
  }

  // fragment_after_encap - computed: false, optional: true, required: false
  private _fragmentAfterEncap?: number; 
  public get fragmentAfterEncap() {
    return this.getNumberAttribute('fragment_after_encap');
  }
  public set fragmentAfterEncap(value: number) {
    this._fragmentAfterEncap = value;
  }
  public resetFragmentAfterEncap() {
    this._fragmentAfterEncap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentAfterEncapInput() {
    return this._fragmentAfterEncap;
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

  // ike_acc_enable - computed: false, optional: true, required: false
  private _ikeAccEnable?: number; 
  public get ikeAccEnable() {
    return this.getNumberAttribute('ike_acc_enable');
  }
  public set ikeAccEnable(value: number) {
    this._ikeAccEnable = value;
  }
  public resetIkeAccEnable() {
    this._ikeAccEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeAccEnableInput() {
    return this._ikeAccEnable;
  }

  // ike_logging_enable - computed: false, optional: true, required: false
  private _ikeLoggingEnable?: number; 
  public get ikeLoggingEnable() {
    return this.getNumberAttribute('ike_logging_enable');
  }
  public set ikeLoggingEnable(value: number) {
    this._ikeLoggingEnable = value;
  }
  public resetIkeLoggingEnable() {
    this._ikeLoggingEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeLoggingEnableInput() {
    return this._ikeLoggingEnable;
  }

  // ike_sa_timeout - computed: false, optional: true, required: false
  private _ikeSaTimeout?: number; 
  public get ikeSaTimeout() {
    return this.getNumberAttribute('ike_sa_timeout');
  }
  public set ikeSaTimeout(value: number) {
    this._ikeSaTimeout = value;
  }
  public resetIkeSaTimeout() {
    this._ikeSaTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSaTimeoutInput() {
    return this._ikeSaTimeout;
  }

  // ipsec_cipher_check - computed: false, optional: true, required: false
  private _ipsecCipherCheck?: number; 
  public get ipsecCipherCheck() {
    return this.getNumberAttribute('ipsec_cipher_check');
  }
  public set ipsecCipherCheck(value: number) {
    this._ipsecCipherCheck = value;
  }
  public resetIpsecCipherCheck() {
    this._ipsecCipherCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecCipherCheckInput() {
    return this._ipsecCipherCheck;
  }

  // ipsec_error_dump - computed: false, optional: true, required: false
  private _ipsecErrorDump?: number; 
  public get ipsecErrorDump() {
    return this.getNumberAttribute('ipsec_error_dump');
  }
  public set ipsecErrorDump(value: number) {
    this._ipsecErrorDump = value;
  }
  public resetIpsecErrorDump() {
    this._ipsecErrorDump = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecErrorDumpInput() {
    return this._ipsecErrorDump;
  }

  // ipsec_mgmt_default_policy_drop - computed: false, optional: true, required: false
  private _ipsecMgmtDefaultPolicyDrop?: number; 
  public get ipsecMgmtDefaultPolicyDrop() {
    return this.getNumberAttribute('ipsec_mgmt_default_policy_drop');
  }
  public set ipsecMgmtDefaultPolicyDrop(value: number) {
    this._ipsecMgmtDefaultPolicyDrop = value;
  }
  public resetIpsecMgmtDefaultPolicyDrop() {
    this._ipsecMgmtDefaultPolicyDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecMgmtDefaultPolicyDropInput() {
    return this._ipsecMgmtDefaultPolicyDrop;
  }

  // jumbo_fragment - computed: false, optional: true, required: false
  private _jumboFragment?: number; 
  public get jumboFragment() {
    return this.getNumberAttribute('jumbo_fragment');
  }
  public set jumboFragment(value: number) {
    this._jumboFragment = value;
  }
  public resetJumboFragment() {
    this._jumboFragment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jumboFragmentInput() {
    return this._jumboFragment;
  }

  // nat_traversal_flow_affinity - computed: false, optional: true, required: false
  private _natTraversalFlowAffinity?: number; 
  public get natTraversalFlowAffinity() {
    return this.getNumberAttribute('nat_traversal_flow_affinity');
  }
  public set natTraversalFlowAffinity(value: number) {
    this._natTraversalFlowAffinity = value;
  }
  public resetNatTraversalFlowAffinity() {
    this._natTraversalFlowAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natTraversalFlowAffinityInput() {
    return this._natTraversalFlowAffinity;
  }

  // signature_authentication - computed: false, optional: true, required: false
  private _signatureAuthentication?: number; 
  public get signatureAuthentication() {
    return this.getNumberAttribute('signature_authentication');
  }
  public set signatureAuthentication(value: number) {
    this._signatureAuthentication = value;
  }
  public resetSignatureAuthentication() {
    this._signatureAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureAuthenticationInput() {
    return this._signatureAuthentication;
  }

  // stateful_mode - computed: false, optional: true, required: false
  private _statefulMode?: number; 
  public get statefulMode() {
    return this.getNumberAttribute('stateful_mode');
  }
  public set statefulMode(value: number) {
    this._statefulMode = value;
  }
  public resetStatefulMode() {
    this._statefulMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulModeInput() {
    return this._statefulMode;
  }

  // tcp_mss_adjust_disable - computed: false, optional: true, required: false
  private _tcpMssAdjustDisable?: number; 
  public get tcpMssAdjustDisable() {
    return this.getNumberAttribute('tcp_mss_adjust_disable');
  }
  public set tcpMssAdjustDisable(value: number) {
    this._tcpMssAdjustDisable = value;
  }
  public resetTcpMssAdjustDisable() {
    this._tcpMssAdjustDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMssAdjustDisableInput() {
    return this._tcpMssAdjustDisable;
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

  // crl - computed: false, optional: true, required: false
  private _crl = new VpnCrlOutputReference(this, "crl");
  public get crl() {
    return this._crl;
  }
  public putCrl(value: VpnCrl) {
    this._crl.internalValue = value;
  }
  public resetCrl() {
    this._crl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlInput() {
    return this._crl.internalValue;
  }

  // default - computed: false, optional: true, required: false
  private _default = new VpnDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }
  public putDefault(value: VpnDefault) {
    this._default.internalValue = value;
  }
  public resetDefault() {
    this._default.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default.internalValue;
  }

  // error - computed: false, optional: true, required: false
  private _error = new VpnErrorOutputReference(this, "error");
  public get error() {
    return this._error;
  }
  public putError(value: VpnError) {
    this._error.internalValue = value;
  }
  public resetError() {
    this._error.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error.internalValue;
  }

  // errordump - computed: false, optional: true, required: false
  private _errordump = new VpnErrordumpOutputReference(this, "errordump");
  public get errordump() {
    return this._errordump;
  }
  public putErrordump(value: VpnErrordump) {
    this._errordump.internalValue = value;
  }
  public resetErrordump() {
    this._errordump.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errordumpInput() {
    return this._errordump.internalValue;
  }

  // group_list - computed: false, optional: true, required: false
  private _groupList = new VpnGroupListStructOutputReference(this, "group_list");
  public get groupList() {
    return this._groupList;
  }
  public putGroupList(value: VpnGroupListStruct) {
    this._groupList.internalValue = value;
  }
  public resetGroupList() {
    this._groupList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupListInput() {
    return this._groupList.internalValue;
  }

  // ike_gateway_list - computed: false, optional: true, required: false
  private _ikeGatewayList = new VpnIkeGatewayListStructList(this, "ike_gateway_list", false);
  public get ikeGatewayList() {
    return this._ikeGatewayList;
  }
  public putIkeGatewayList(value: VpnIkeGatewayListStruct[] | cdktf.IResolvable) {
    this._ikeGatewayList.internalValue = value;
  }
  public resetIkeGatewayList() {
    this._ikeGatewayList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeGatewayListInput() {
    return this._ikeGatewayList.internalValue;
  }

  // ike_sa - computed: false, optional: true, required: false
  private _ikeSa = new VpnIkeSaOutputReference(this, "ike_sa");
  public get ikeSa() {
    return this._ikeSa;
  }
  public putIkeSa(value: VpnIkeSa) {
    this._ikeSa.internalValue = value;
  }
  public resetIkeSa() {
    this._ikeSa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSaInput() {
    return this._ikeSa.internalValue;
  }

  // ike_sa_brief - computed: false, optional: true, required: false
  private _ikeSaBrief = new VpnIkeSaBriefOutputReference(this, "ike_sa_brief");
  public get ikeSaBrief() {
    return this._ikeSaBrief;
  }
  public putIkeSaBrief(value: VpnIkeSaBrief) {
    this._ikeSaBrief.internalValue = value;
  }
  public resetIkeSaBrief() {
    this._ikeSaBrief.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSaBriefInput() {
    return this._ikeSaBrief.internalValue;
  }

  // ike_sa_clients - computed: false, optional: true, required: false
  private _ikeSaClients = new VpnIkeSaClientsOutputReference(this, "ike_sa_clients");
  public get ikeSaClients() {
    return this._ikeSaClients;
  }
  public putIkeSaClients(value: VpnIkeSaClients) {
    this._ikeSaClients.internalValue = value;
  }
  public resetIkeSaClients() {
    this._ikeSaClients.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSaClientsInput() {
    return this._ikeSaClients.internalValue;
  }

  // ike_stats_by_gw - computed: false, optional: true, required: false
  private _ikeStatsByGw = new VpnIkeStatsByGwOutputReference(this, "ike_stats_by_gw");
  public get ikeStatsByGw() {
    return this._ikeStatsByGw;
  }
  public putIkeStatsByGw(value: VpnIkeStatsByGw) {
    this._ikeStatsByGw.internalValue = value;
  }
  public resetIkeStatsByGw() {
    this._ikeStatsByGw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeStatsByGwInput() {
    return this._ikeStatsByGw.internalValue;
  }

  // ike_stats_global - computed: false, optional: true, required: false
  private _ikeStatsGlobal = new VpnIkeStatsGlobalOutputReference(this, "ike_stats_global");
  public get ikeStatsGlobal() {
    return this._ikeStatsGlobal;
  }
  public putIkeStatsGlobal(value: VpnIkeStatsGlobal) {
    this._ikeStatsGlobal.internalValue = value;
  }
  public resetIkeStatsGlobal() {
    this._ikeStatsGlobal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeStatsGlobalInput() {
    return this._ikeStatsGlobal.internalValue;
  }

  // ipsec_group_list - computed: false, optional: true, required: false
  private _ipsecGroupList = new VpnIpsecGroupListStructList(this, "ipsec_group_list", false);
  public get ipsecGroupList() {
    return this._ipsecGroupList;
  }
  public putIpsecGroupList(value: VpnIpsecGroupListStruct[] | cdktf.IResolvable) {
    this._ipsecGroupList.internalValue = value;
  }
  public resetIpsecGroupList() {
    this._ipsecGroupList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecGroupListInput() {
    return this._ipsecGroupList.internalValue;
  }

  // ipsec_list - computed: false, optional: true, required: false
  private _ipsecList = new VpnIpsecListStructList(this, "ipsec_list", false);
  public get ipsecList() {
    return this._ipsecList;
  }
  public putIpsecList(value: VpnIpsecListStruct[] | cdktf.IResolvable) {
    this._ipsecList.internalValue = value;
  }
  public resetIpsecList() {
    this._ipsecList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecListInput() {
    return this._ipsecList.internalValue;
  }

  // ipsec_sa - computed: false, optional: true, required: false
  private _ipsecSa = new VpnIpsecSaOutputReference(this, "ipsec_sa");
  public get ipsecSa() {
    return this._ipsecSa;
  }
  public putIpsecSa(value: VpnIpsecSa) {
    this._ipsecSa.internalValue = value;
  }
  public resetIpsecSa() {
    this._ipsecSa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecSaInput() {
    return this._ipsecSa.internalValue;
  }

  // ipsec_sa_by_gw - computed: false, optional: true, required: false
  private _ipsecSaByGw = new VpnIpsecSaByGwOutputReference(this, "ipsec_sa_by_gw");
  public get ipsecSaByGw() {
    return this._ipsecSaByGw;
  }
  public putIpsecSaByGw(value: VpnIpsecSaByGw) {
    this._ipsecSaByGw.internalValue = value;
  }
  public resetIpsecSaByGw() {
    this._ipsecSaByGw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecSaByGwInput() {
    return this._ipsecSaByGw.internalValue;
  }

  // ipsec_sa_clients - computed: false, optional: true, required: false
  private _ipsecSaClients = new VpnIpsecSaClientsOutputReference(this, "ipsec_sa_clients");
  public get ipsecSaClients() {
    return this._ipsecSaClients;
  }
  public putIpsecSaClients(value: VpnIpsecSaClients) {
    this._ipsecSaClients.internalValue = value;
  }
  public resetIpsecSaClients() {
    this._ipsecSaClients.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecSaClientsInput() {
    return this._ipsecSaClients.internalValue;
  }

  // ipsec_sa_stats_list - computed: false, optional: true, required: false
  private _ipsecSaStatsList = new VpnIpsecSaStatsListStructList(this, "ipsec_sa_stats_list", false);
  public get ipsecSaStatsList() {
    return this._ipsecSaStatsList;
  }
  public putIpsecSaStatsList(value: VpnIpsecSaStatsListStruct[] | cdktf.IResolvable) {
    this._ipsecSaStatsList.internalValue = value;
  }
  public resetIpsecSaStatsList() {
    this._ipsecSaStatsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecSaStatsListInput() {
    return this._ipsecSaStatsList.internalValue;
  }

  // log - computed: false, optional: true, required: false
  private _log = new VpnLogOutputReference(this, "log");
  public get log() {
    return this._log;
  }
  public putLog(value: VpnLog) {
    this._log.internalValue = value;
  }
  public resetLog() {
    this._log.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log.internalValue;
  }

  // ocsp - computed: false, optional: true, required: false
  private _ocsp = new VpnOcspOutputReference(this, "ocsp");
  public get ocsp() {
    return this._ocsp;
  }
  public putOcsp(value: VpnOcsp) {
    this._ocsp.internalValue = value;
  }
  public resetOcsp() {
    this._ocsp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspInput() {
    return this._ocsp.internalValue;
  }

  // revocation_list - computed: false, optional: true, required: false
  private _revocationList = new VpnRevocationListStructList(this, "revocation_list", false);
  public get revocationList() {
    return this._revocationList;
  }
  public putRevocationList(value: VpnRevocationListStruct[] | cdktf.IResolvable) {
    this._revocationList.internalValue = value;
  }
  public resetRevocationList() {
    this._revocationList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revocationListInput() {
    return this._revocationList.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new VpnSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: VpnSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asymmetric_flow_support: cdktf.numberToTerraform(this._asymmetricFlowSupport),
      enable_vpn_metrics: cdktf.numberToTerraform(this._enableVpnMetrics),
      extended_matching: cdktf.numberToTerraform(this._extendedMatching),
      fragment_after_encap: cdktf.numberToTerraform(this._fragmentAfterEncap),
      id: cdktf.stringToTerraform(this._id),
      ike_acc_enable: cdktf.numberToTerraform(this._ikeAccEnable),
      ike_logging_enable: cdktf.numberToTerraform(this._ikeLoggingEnable),
      ike_sa_timeout: cdktf.numberToTerraform(this._ikeSaTimeout),
      ipsec_cipher_check: cdktf.numberToTerraform(this._ipsecCipherCheck),
      ipsec_error_dump: cdktf.numberToTerraform(this._ipsecErrorDump),
      ipsec_mgmt_default_policy_drop: cdktf.numberToTerraform(this._ipsecMgmtDefaultPolicyDrop),
      jumbo_fragment: cdktf.numberToTerraform(this._jumboFragment),
      nat_traversal_flow_affinity: cdktf.numberToTerraform(this._natTraversalFlowAffinity),
      signature_authentication: cdktf.numberToTerraform(this._signatureAuthentication),
      stateful_mode: cdktf.numberToTerraform(this._statefulMode),
      tcp_mss_adjust_disable: cdktf.numberToTerraform(this._tcpMssAdjustDisable),
      uuid: cdktf.stringToTerraform(this._uuid),
      crl: vpnCrlToTerraform(this._crl.internalValue),
      default: vpnDefaultToTerraform(this._default.internalValue),
      error: vpnErrorToTerraform(this._error.internalValue),
      errordump: vpnErrordumpToTerraform(this._errordump.internalValue),
      group_list: vpnGroupListStructToTerraform(this._groupList.internalValue),
      ike_gateway_list: cdktf.listMapper(vpnIkeGatewayListStructToTerraform, true)(this._ikeGatewayList.internalValue),
      ike_sa: vpnIkeSaToTerraform(this._ikeSa.internalValue),
      ike_sa_brief: vpnIkeSaBriefToTerraform(this._ikeSaBrief.internalValue),
      ike_sa_clients: vpnIkeSaClientsToTerraform(this._ikeSaClients.internalValue),
      ike_stats_by_gw: vpnIkeStatsByGwToTerraform(this._ikeStatsByGw.internalValue),
      ike_stats_global: vpnIkeStatsGlobalToTerraform(this._ikeStatsGlobal.internalValue),
      ipsec_group_list: cdktf.listMapper(vpnIpsecGroupListStructToTerraform, true)(this._ipsecGroupList.internalValue),
      ipsec_list: cdktf.listMapper(vpnIpsecListStructToTerraform, true)(this._ipsecList.internalValue),
      ipsec_sa: vpnIpsecSaToTerraform(this._ipsecSa.internalValue),
      ipsec_sa_by_gw: vpnIpsecSaByGwToTerraform(this._ipsecSaByGw.internalValue),
      ipsec_sa_clients: vpnIpsecSaClientsToTerraform(this._ipsecSaClients.internalValue),
      ipsec_sa_stats_list: cdktf.listMapper(vpnIpsecSaStatsListStructToTerraform, true)(this._ipsecSaStatsList.internalValue),
      log: vpnLogToTerraform(this._log.internalValue),
      ocsp: vpnOcspToTerraform(this._ocsp.internalValue),
      revocation_list: cdktf.listMapper(vpnRevocationListStructToTerraform, true)(this._revocationList.internalValue),
      sampling_enable: cdktf.listMapper(vpnSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asymmetric_flow_support: {
        value: cdktf.numberToHclTerraform(this._asymmetricFlowSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_vpn_metrics: {
        value: cdktf.numberToHclTerraform(this._enableVpnMetrics),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      extended_matching: {
        value: cdktf.numberToHclTerraform(this._extendedMatching),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fragment_after_encap: {
        value: cdktf.numberToHclTerraform(this._fragmentAfterEncap),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_acc_enable: {
        value: cdktf.numberToHclTerraform(this._ikeAccEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ike_logging_enable: {
        value: cdktf.numberToHclTerraform(this._ikeLoggingEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ike_sa_timeout: {
        value: cdktf.numberToHclTerraform(this._ikeSaTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipsec_cipher_check: {
        value: cdktf.numberToHclTerraform(this._ipsecCipherCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipsec_error_dump: {
        value: cdktf.numberToHclTerraform(this._ipsecErrorDump),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipsec_mgmt_default_policy_drop: {
        value: cdktf.numberToHclTerraform(this._ipsecMgmtDefaultPolicyDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      jumbo_fragment: {
        value: cdktf.numberToHclTerraform(this._jumboFragment),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nat_traversal_flow_affinity: {
        value: cdktf.numberToHclTerraform(this._natTraversalFlowAffinity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      signature_authentication: {
        value: cdktf.numberToHclTerraform(this._signatureAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stateful_mode: {
        value: cdktf.numberToHclTerraform(this._statefulMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_mss_adjust_disable: {
        value: cdktf.numberToHclTerraform(this._tcpMssAdjustDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crl: {
        value: vpnCrlToHclTerraform(this._crl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnCrlList",
      },
      default: {
        value: vpnDefaultToHclTerraform(this._default.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnDefaultList",
      },
      error: {
        value: vpnErrorToHclTerraform(this._error.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnErrorList",
      },
      errordump: {
        value: vpnErrordumpToHclTerraform(this._errordump.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnErrordumpList",
      },
      group_list: {
        value: vpnGroupListStructToHclTerraform(this._groupList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnGroupListStructList",
      },
      ike_gateway_list: {
        value: cdktf.listMapperHcl(vpnIkeGatewayListStructToHclTerraform, true)(this._ikeGatewayList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnIkeGatewayListStructList",
      },
      ike_sa: {
        value: vpnIkeSaToHclTerraform(this._ikeSa.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnIkeSaList",
      },
      ike_sa_brief: {
        value: vpnIkeSaBriefToHclTerraform(this._ikeSaBrief.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnIkeSaBriefList",
      },
      ike_sa_clients: {
        value: vpnIkeSaClientsToHclTerraform(this._ikeSaClients.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnIkeSaClientsList",
      },
      ike_stats_by_gw: {
        value: vpnIkeStatsByGwToHclTerraform(this._ikeStatsByGw.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnIkeStatsByGwList",
      },
      ike_stats_global: {
        value: vpnIkeStatsGlobalToHclTerraform(this._ikeStatsGlobal.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnIkeStatsGlobalList",
      },
      ipsec_group_list: {
        value: cdktf.listMapperHcl(vpnIpsecGroupListStructToHclTerraform, true)(this._ipsecGroupList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnIpsecGroupListStructList",
      },
      ipsec_list: {
        value: cdktf.listMapperHcl(vpnIpsecListStructToHclTerraform, true)(this._ipsecList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnIpsecListStructList",
      },
      ipsec_sa: {
        value: vpnIpsecSaToHclTerraform(this._ipsecSa.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnIpsecSaList",
      },
      ipsec_sa_by_gw: {
        value: vpnIpsecSaByGwToHclTerraform(this._ipsecSaByGw.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnIpsecSaByGwList",
      },
      ipsec_sa_clients: {
        value: vpnIpsecSaClientsToHclTerraform(this._ipsecSaClients.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnIpsecSaClientsList",
      },
      ipsec_sa_stats_list: {
        value: cdktf.listMapperHcl(vpnIpsecSaStatsListStructToHclTerraform, true)(this._ipsecSaStatsList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnIpsecSaStatsListStructList",
      },
      log: {
        value: vpnLogToHclTerraform(this._log.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnLogList",
      },
      ocsp: {
        value: vpnOcspToHclTerraform(this._ocsp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnOcspList",
      },
      revocation_list: {
        value: cdktf.listMapperHcl(vpnRevocationListStructToHclTerraform, true)(this._revocationList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnRevocationListStructList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(vpnSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
