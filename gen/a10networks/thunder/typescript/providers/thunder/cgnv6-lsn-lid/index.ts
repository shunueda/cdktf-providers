// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_lid
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6LsnLidConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_lid#id Cgnv6LsnLid#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * LSN Lid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_lid#lid_number Cgnv6LsnLid#lid_number}
  */
  readonly lidNumber: number;
  /**
  * LSN Lid Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_lid#name Cgnv6LsnLid#name}
  */
  readonly name?: string;
  /**
  * 'none': Apply source NAT if configured (default); 'drop': Drop packets that match this LSN lid; 'pass-through': Layer-3 route packets that match this LSN lid and do not apply source NAT;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_lid#override Cgnv6LsnLid#override}
  */
  readonly override?: string;
  /**
  * Use the user's source MAC for the next hop rather than the routing table (default: off)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_lid#respond_to_user_mac Cgnv6LsnLid#respond_to_user_mac}
  */
  readonly respondToUserMac?: number;
  /**
  * NAT64/DS-Lite user quota prefix length (Prefix Length (Default: Uses the global NAT64/DS-Lite configured value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_lid#user_quota_prefix_length Cgnv6LsnLid#user_quota_prefix_length}
  */
  readonly userQuotaPrefixLength?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_lid#user_tag Cgnv6LsnLid#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_lid#uuid Cgnv6LsnLid#uuid}
  */
  readonly uuid?: string;
  /**
  * conn_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_lid#conn_rate_limit Cgnv6LsnLid#conn_rate_limit}
  */
  readonly connRateLimit?: Cgnv6LsnLidConnRateLimit;
  /**
  * ds_lite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_lid#ds_lite Cgnv6LsnLid#ds_lite}
  */
  readonly dsLite?: Cgnv6LsnLidDsLite;
  /**
  * extended_user_quota block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_lid#extended_user_quota Cgnv6LsnLid#extended_user_quota}
  */
  readonly extendedUserQuota?: Cgnv6LsnLidExtendedUserQuota;
  /**
  * lsn_rule_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_lid#lsn_rule_list Cgnv6LsnLid#lsn_rule_list}
  */
  readonly lsnRuleList?: Cgnv6LsnLidLsnRuleListStruct;
  /**
  * source_nat_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_lid#source_nat_pool Cgnv6LsnLid#source_nat_pool}
  */
  readonly sourceNatPool?: Cgnv6LsnLidSourceNatPool;
  /**
  * user_quota block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_lid#user_quota Cgnv6LsnLid#user_quota}
  */
  readonly userQuota?: Cgnv6LsnLidUserQuota;
}
export interface Cgnv6LsnLidConnRateLimit {
  /**
  * Maximum connections per second (Default: No limit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_lid#conn_rate_limit_val Cgnv6LsnLid#conn_rate_limit_val}
  */
  readonly connRateLimitVal?: number;
}

export function cgnv6LsnLidConnRateLimitToTerraform(struct?: Cgnv6LsnLidConnRateLimitOutputReference | Cgnv6LsnLidConnRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conn_rate_limit_val: cdktf.numberToTerraform(struct!.connRateLimitVal),
  }
}


export function cgnv6LsnLidConnRateLimitToHclTerraform(struct?: Cgnv6LsnLidConnRateLimitOutputReference | Cgnv6LsnLidConnRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conn_rate_limit_val: {
      value: cdktf.numberToHclTerraform(struct!.connRateLimitVal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnLidConnRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6LsnLidConnRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connRateLimitVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.connRateLimitVal = this._connRateLimitVal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnLidConnRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connRateLimitVal = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connRateLimitVal = value.connRateLimitVal;
    }
  }

  // conn_rate_limit_val - computed: false, optional: true, required: false
  private _connRateLimitVal?: number; 
  public get connRateLimitVal() {
    return this.getNumberAttribute('conn_rate_limit_val');
  }
  public set connRateLimitVal(value: number) {
    this._connRateLimitVal = value;
  }
  public resetConnRateLimitVal() {
    this._connRateLimitVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRateLimitValInput() {
    return this._connRateLimitVal;
  }
}
export interface Cgnv6LsnLidDsLite {
  /**
  * Class-List of IPv4 addresses permitted (Class-list to match for DS-Lite)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_lid#inside_src_permit_list Cgnv6LsnLid#inside_src_permit_list}
  */
  readonly insideSrcPermitList?: string;
}

export function cgnv6LsnLidDsLiteToTerraform(struct?: Cgnv6LsnLidDsLiteOutputReference | Cgnv6LsnLidDsLite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inside_src_permit_list: cdktf.stringToTerraform(struct!.insideSrcPermitList),
  }
}


export function cgnv6LsnLidDsLiteToHclTerraform(struct?: Cgnv6LsnLidDsLiteOutputReference | Cgnv6LsnLidDsLite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inside_src_permit_list: {
      value: cdktf.stringToHclTerraform(struct!.insideSrcPermitList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnLidDsLiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6LsnLidDsLite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insideSrcPermitList !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideSrcPermitList = this._insideSrcPermitList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnLidDsLite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insideSrcPermitList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insideSrcPermitList = value.insideSrcPermitList;
    }
  }

  // inside_src_permit_list - computed: false, optional: true, required: false
  private _insideSrcPermitList?: string; 
  public get insideSrcPermitList() {
    return this.getStringAttribute('inside_src_permit_list');
  }
  public set insideSrcPermitList(value: string) {
    this._insideSrcPermitList = value;
  }
  public resetInsideSrcPermitList() {
    this._insideSrcPermitList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideSrcPermitListInput() {
    return this._insideSrcPermitList;
  }
}
export interface Cgnv6LsnLidExtendedUserQuotaTcp {
  /**
  * Port (Port Value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_lid#tcp_service_port Cgnv6LsnLid#tcp_service_port}
  */
  readonly tcpServicePort?: number;
  /**
  * Number of Extended Quota sessions allowed for this service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_lid#tcp_sessions Cgnv6LsnLid#tcp_sessions}
  */
  readonly tcpSessions?: number;
}

export function cgnv6LsnLidExtendedUserQuotaTcpToTerraform(struct?: Cgnv6LsnLidExtendedUserQuotaTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tcp_service_port: cdktf.numberToTerraform(struct!.tcpServicePort),
    tcp_sessions: cdktf.numberToTerraform(struct!.tcpSessions),
  }
}


export function cgnv6LsnLidExtendedUserQuotaTcpToHclTerraform(struct?: Cgnv6LsnLidExtendedUserQuotaTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tcp_service_port: {
      value: cdktf.numberToHclTerraform(struct!.tcpServicePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_sessions: {
      value: cdktf.numberToHclTerraform(struct!.tcpSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnLidExtendedUserQuotaTcpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6LsnLidExtendedUserQuotaTcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tcpServicePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpServicePort = this._tcpServicePort;
    }
    if (this._tcpSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSessions = this._tcpSessions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnLidExtendedUserQuotaTcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tcpServicePort = undefined;
      this._tcpSessions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tcpServicePort = value.tcpServicePort;
      this._tcpSessions = value.tcpSessions;
    }
  }

  // tcp_service_port - computed: false, optional: true, required: false
  private _tcpServicePort?: number; 
  public get tcpServicePort() {
    return this.getNumberAttribute('tcp_service_port');
  }
  public set tcpServicePort(value: number) {
    this._tcpServicePort = value;
  }
  public resetTcpServicePort() {
    this._tcpServicePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpServicePortInput() {
    return this._tcpServicePort;
  }

  // tcp_sessions - computed: false, optional: true, required: false
  private _tcpSessions?: number; 
  public get tcpSessions() {
    return this.getNumberAttribute('tcp_sessions');
  }
  public set tcpSessions(value: number) {
    this._tcpSessions = value;
  }
  public resetTcpSessions() {
    this._tcpSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSessionsInput() {
    return this._tcpSessions;
  }
}

export class Cgnv6LsnLidExtendedUserQuotaTcpList extends cdktf.ComplexList {
  public internalValue? : Cgnv6LsnLidExtendedUserQuotaTcp[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6LsnLidExtendedUserQuotaTcpOutputReference {
    return new Cgnv6LsnLidExtendedUserQuotaTcpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6LsnLidExtendedUserQuotaUdp {
  /**
  * Port (Port Value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_lid#udp_service_port Cgnv6LsnLid#udp_service_port}
  */
  readonly udpServicePort?: number;
  /**
  * Number of Extended Quota sessions allowed for this service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_lid#udp_sessions Cgnv6LsnLid#udp_sessions}
  */
  readonly udpSessions?: number;
}

export function cgnv6LsnLidExtendedUserQuotaUdpToTerraform(struct?: Cgnv6LsnLidExtendedUserQuotaUdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    udp_service_port: cdktf.numberToTerraform(struct!.udpServicePort),
    udp_sessions: cdktf.numberToTerraform(struct!.udpSessions),
  }
}


export function cgnv6LsnLidExtendedUserQuotaUdpToHclTerraform(struct?: Cgnv6LsnLidExtendedUserQuotaUdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    udp_service_port: {
      value: cdktf.numberToHclTerraform(struct!.udpServicePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_sessions: {
      value: cdktf.numberToHclTerraform(struct!.udpSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnLidExtendedUserQuotaUdpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6LsnLidExtendedUserQuotaUdp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._udpServicePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpServicePort = this._udpServicePort;
    }
    if (this._udpSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpSessions = this._udpSessions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnLidExtendedUserQuotaUdp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._udpServicePort = undefined;
      this._udpSessions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._udpServicePort = value.udpServicePort;
      this._udpSessions = value.udpSessions;
    }
  }

  // udp_service_port - computed: false, optional: true, required: false
  private _udpServicePort?: number; 
  public get udpServicePort() {
    return this.getNumberAttribute('udp_service_port');
  }
  public set udpServicePort(value: number) {
    this._udpServicePort = value;
  }
  public resetUdpServicePort() {
    this._udpServicePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpServicePortInput() {
    return this._udpServicePort;
  }

  // udp_sessions - computed: false, optional: true, required: false
  private _udpSessions?: number; 
  public get udpSessions() {
    return this.getNumberAttribute('udp_sessions');
  }
  public set udpSessions(value: number) {
    this._udpSessions = value;
  }
  public resetUdpSessions() {
    this._udpSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpSessionsInput() {
    return this._udpSessions;
  }
}

export class Cgnv6LsnLidExtendedUserQuotaUdpList extends cdktf.ComplexList {
  public internalValue? : Cgnv6LsnLidExtendedUserQuotaUdp[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6LsnLidExtendedUserQuotaUdpOutputReference {
    return new Cgnv6LsnLidExtendedUserQuotaUdpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6LsnLidExtendedUserQuota {
  /**
  * tcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_lid#tcp Cgnv6LsnLid#tcp}
  */
  readonly tcp?: Cgnv6LsnLidExtendedUserQuotaTcp[] | cdktf.IResolvable;
  /**
  * udp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_lid#udp Cgnv6LsnLid#udp}
  */
  readonly udp?: Cgnv6LsnLidExtendedUserQuotaUdp[] | cdktf.IResolvable;
}

export function cgnv6LsnLidExtendedUserQuotaToTerraform(struct?: Cgnv6LsnLidExtendedUserQuotaOutputReference | Cgnv6LsnLidExtendedUserQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tcp: cdktf.listMapper(cgnv6LsnLidExtendedUserQuotaTcpToTerraform, true)(struct!.tcp),
    udp: cdktf.listMapper(cgnv6LsnLidExtendedUserQuotaUdpToTerraform, true)(struct!.udp),
  }
}


export function cgnv6LsnLidExtendedUserQuotaToHclTerraform(struct?: Cgnv6LsnLidExtendedUserQuotaOutputReference | Cgnv6LsnLidExtendedUserQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tcp: {
      value: cdktf.listMapperHcl(cgnv6LsnLidExtendedUserQuotaTcpToHclTerraform, true)(struct!.tcp),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6LsnLidExtendedUserQuotaTcpList",
    },
    udp: {
      value: cdktf.listMapperHcl(cgnv6LsnLidExtendedUserQuotaUdpToHclTerraform, true)(struct!.udp),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6LsnLidExtendedUserQuotaUdpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnLidExtendedUserQuotaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6LsnLidExtendedUserQuota | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp?.internalValue;
    }
    if (this._udp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnLidExtendedUserQuota | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tcp.internalValue = undefined;
      this._udp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tcp.internalValue = value.tcp;
      this._udp.internalValue = value.udp;
    }
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp = new Cgnv6LsnLidExtendedUserQuotaTcpList(this, "tcp", false);
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: Cgnv6LsnLidExtendedUserQuotaTcp[] | cdktf.IResolvable) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
  }

  // udp - computed: false, optional: true, required: false
  private _udp = new Cgnv6LsnLidExtendedUserQuotaUdpList(this, "udp", false);
  public get udp() {
    return this._udp;
  }
  public putUdp(value: Cgnv6LsnLidExtendedUserQuotaUdp[] | cdktf.IResolvable) {
    this._udp.internalValue = value;
  }
  public resetUdp() {
    this._udp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp.internalValue;
  }
}
export interface Cgnv6LsnLidLsnRuleListStruct {
  /**
  * Apply LSN Rule-List on Destination (LSN Rule-List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_lid#destination Cgnv6LsnLid#destination}
  */
  readonly destination?: string;
}

export function cgnv6LsnLidLsnRuleListStructToTerraform(struct?: Cgnv6LsnLidLsnRuleListStructOutputReference | Cgnv6LsnLidLsnRuleListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function cgnv6LsnLidLsnRuleListStructToHclTerraform(struct?: Cgnv6LsnLidLsnRuleListStructOutputReference | Cgnv6LsnLidLsnRuleListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnLidLsnRuleListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6LsnLidLsnRuleListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnLidLsnRuleListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface Cgnv6LsnLidSourceNatPool {
  /**
  * Source NAT Pool or Pool-Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_lid#pool_name Cgnv6LsnLid#pool_name}
  */
  readonly poolName?: string;
  /**
  * Use a shared source NAT pool or pool-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_lid#shared Cgnv6LsnLid#shared}
  */
  readonly shared?: number;
}

export function cgnv6LsnLidSourceNatPoolToTerraform(struct?: Cgnv6LsnLidSourceNatPoolOutputReference | Cgnv6LsnLidSourceNatPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pool_name: cdktf.stringToTerraform(struct!.poolName),
    shared: cdktf.numberToTerraform(struct!.shared),
  }
}


export function cgnv6LsnLidSourceNatPoolToHclTerraform(struct?: Cgnv6LsnLidSourceNatPoolOutputReference | Cgnv6LsnLidSourceNatPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pool_name: {
      value: cdktf.stringToHclTerraform(struct!.poolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared: {
      value: cdktf.numberToHclTerraform(struct!.shared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnLidSourceNatPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6LsnLidSourceNatPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._poolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolName = this._poolName;
    }
    if (this._shared !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnLidSourceNatPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._poolName = undefined;
      this._shared = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._poolName = value.poolName;
      this._shared = value.shared;
    }
  }

  // pool_name - computed: false, optional: true, required: false
  private _poolName?: string; 
  public get poolName() {
    return this.getStringAttribute('pool_name');
  }
  public set poolName(value: string) {
    this._poolName = value;
  }
  public resetPoolName() {
    this._poolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolNameInput() {
    return this._poolName;
  }

  // shared - computed: false, optional: true, required: false
  private _shared?: number; 
  public get shared() {
    return this.getNumberAttribute('shared');
  }
  public set shared(value: number) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }
}
export interface Cgnv6LsnLidUserQuotaQuotaTcp {
  /**
  * NAT port quota per user (default: not configured)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_lid#tcp_quota Cgnv6LsnLid#tcp_quota}
  */
  readonly tcpQuota?: number;
  /**
  * Number of ports to reserve per user (default: same as user-quota value) (Reserved quota per user (default: same as user-quota value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_lid#tcp_reserve Cgnv6LsnLid#tcp_reserve}
  */
  readonly tcpReserve?: number;
}

export function cgnv6LsnLidUserQuotaQuotaTcpToTerraform(struct?: Cgnv6LsnLidUserQuotaQuotaTcpOutputReference | Cgnv6LsnLidUserQuotaQuotaTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tcp_quota: cdktf.numberToTerraform(struct!.tcpQuota),
    tcp_reserve: cdktf.numberToTerraform(struct!.tcpReserve),
  }
}


export function cgnv6LsnLidUserQuotaQuotaTcpToHclTerraform(struct?: Cgnv6LsnLidUserQuotaQuotaTcpOutputReference | Cgnv6LsnLidUserQuotaQuotaTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tcp_quota: {
      value: cdktf.numberToHclTerraform(struct!.tcpQuota),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_reserve: {
      value: cdktf.numberToHclTerraform(struct!.tcpReserve),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnLidUserQuotaQuotaTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6LsnLidUserQuotaQuotaTcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tcpQuota !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpQuota = this._tcpQuota;
    }
    if (this._tcpReserve !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpReserve = this._tcpReserve;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnLidUserQuotaQuotaTcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tcpQuota = undefined;
      this._tcpReserve = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tcpQuota = value.tcpQuota;
      this._tcpReserve = value.tcpReserve;
    }
  }

  // tcp_quota - computed: false, optional: true, required: false
  private _tcpQuota?: number; 
  public get tcpQuota() {
    return this.getNumberAttribute('tcp_quota');
  }
  public set tcpQuota(value: number) {
    this._tcpQuota = value;
  }
  public resetTcpQuota() {
    this._tcpQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpQuotaInput() {
    return this._tcpQuota;
  }

  // tcp_reserve - computed: false, optional: true, required: false
  private _tcpReserve?: number; 
  public get tcpReserve() {
    return this.getNumberAttribute('tcp_reserve');
  }
  public set tcpReserve(value: number) {
    this._tcpReserve = value;
  }
  public resetTcpReserve() {
    this._tcpReserve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpReserveInput() {
    return this._tcpReserve;
  }
}
export interface Cgnv6LsnLidUserQuotaQuotaUdp {
  /**
  * NAT port quota per user (default: not configured)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_lid#udp_quota Cgnv6LsnLid#udp_quota}
  */
  readonly udpQuota?: number;
  /**
  * Number of ports to reserve per user (default: same as user-quota value) (Reserved quota per user (default: same as user-quota value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_lid#udp_reserve Cgnv6LsnLid#udp_reserve}
  */
  readonly udpReserve?: number;
}

export function cgnv6LsnLidUserQuotaQuotaUdpToTerraform(struct?: Cgnv6LsnLidUserQuotaQuotaUdpOutputReference | Cgnv6LsnLidUserQuotaQuotaUdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    udp_quota: cdktf.numberToTerraform(struct!.udpQuota),
    udp_reserve: cdktf.numberToTerraform(struct!.udpReserve),
  }
}


export function cgnv6LsnLidUserQuotaQuotaUdpToHclTerraform(struct?: Cgnv6LsnLidUserQuotaQuotaUdpOutputReference | Cgnv6LsnLidUserQuotaQuotaUdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    udp_quota: {
      value: cdktf.numberToHclTerraform(struct!.udpQuota),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_reserve: {
      value: cdktf.numberToHclTerraform(struct!.udpReserve),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnLidUserQuotaQuotaUdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6LsnLidUserQuotaQuotaUdp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._udpQuota !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpQuota = this._udpQuota;
    }
    if (this._udpReserve !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpReserve = this._udpReserve;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnLidUserQuotaQuotaUdp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._udpQuota = undefined;
      this._udpReserve = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._udpQuota = value.udpQuota;
      this._udpReserve = value.udpReserve;
    }
  }

  // udp_quota - computed: false, optional: true, required: false
  private _udpQuota?: number; 
  public get udpQuota() {
    return this.getNumberAttribute('udp_quota');
  }
  public set udpQuota(value: number) {
    this._udpQuota = value;
  }
  public resetUdpQuota() {
    this._udpQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpQuotaInput() {
    return this._udpQuota;
  }

  // udp_reserve - computed: false, optional: true, required: false
  private _udpReserve?: number; 
  public get udpReserve() {
    return this.getNumberAttribute('udp_reserve');
  }
  public set udpReserve(value: number) {
    this._udpReserve = value;
  }
  public resetUdpReserve() {
    this._udpReserve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpReserveInput() {
    return this._udpReserve;
  }
}
export interface Cgnv6LsnLidUserQuota {
  /**
  * User Quota for ICMP identifiers (NAT port quota per user (default: not configured))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_lid#icmp Cgnv6LsnLid#icmp}
  */
  readonly icmp?: number;
  /**
  * User Quota for number of data sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_lid#session Cgnv6LsnLid#session}
  */
  readonly session?: number;
  /**
  * User Quota for number of TCP sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_lid#session_tcp Cgnv6LsnLid#session_tcp}
  */
  readonly sessionTcp?: number;
  /**
  * User Quota for number of UDP sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_lid#session_udp Cgnv6LsnLid#session_udp}
  */
  readonly sessionUdp?: number;
  /**
  * quota_tcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_lid#quota_tcp Cgnv6LsnLid#quota_tcp}
  */
  readonly quotaTcp?: Cgnv6LsnLidUserQuotaQuotaTcp;
  /**
  * quota_udp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_lid#quota_udp Cgnv6LsnLid#quota_udp}
  */
  readonly quotaUdp?: Cgnv6LsnLidUserQuotaQuotaUdp;
}

export function cgnv6LsnLidUserQuotaToTerraform(struct?: Cgnv6LsnLidUserQuotaOutputReference | Cgnv6LsnLidUserQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp: cdktf.numberToTerraform(struct!.icmp),
    session: cdktf.numberToTerraform(struct!.session),
    session_tcp: cdktf.numberToTerraform(struct!.sessionTcp),
    session_udp: cdktf.numberToTerraform(struct!.sessionUdp),
    quota_tcp: cgnv6LsnLidUserQuotaQuotaTcpToTerraform(struct!.quotaTcp),
    quota_udp: cgnv6LsnLidUserQuotaQuotaUdpToTerraform(struct!.quotaUdp),
  }
}


export function cgnv6LsnLidUserQuotaToHclTerraform(struct?: Cgnv6LsnLidUserQuotaOutputReference | Cgnv6LsnLidUserQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp: {
      value: cdktf.numberToHclTerraform(struct!.icmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session: {
      value: cdktf.numberToHclTerraform(struct!.session),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_tcp: {
      value: cdktf.numberToHclTerraform(struct!.sessionTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_udp: {
      value: cdktf.numberToHclTerraform(struct!.sessionUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quota_tcp: {
      value: cgnv6LsnLidUserQuotaQuotaTcpToHclTerraform(struct!.quotaTcp),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6LsnLidUserQuotaQuotaTcpList",
    },
    quota_udp: {
      value: cgnv6LsnLidUserQuotaQuotaUdpToHclTerraform(struct!.quotaUdp),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6LsnLidUserQuotaQuotaUdpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnLidUserQuotaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6LsnLidUserQuota | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmp = this._icmp;
    }
    if (this._session !== undefined) {
      hasAnyValues = true;
      internalValueResult.session = this._session;
    }
    if (this._sessionTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionTcp = this._sessionTcp;
    }
    if (this._sessionUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionUdp = this._sessionUdp;
    }
    if (this._quotaTcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.quotaTcp = this._quotaTcp?.internalValue;
    }
    if (this._quotaUdp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.quotaUdp = this._quotaUdp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnLidUserQuota | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._icmp = undefined;
      this._session = undefined;
      this._sessionTcp = undefined;
      this._sessionUdp = undefined;
      this._quotaTcp.internalValue = undefined;
      this._quotaUdp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._icmp = value.icmp;
      this._session = value.session;
      this._sessionTcp = value.sessionTcp;
      this._sessionUdp = value.sessionUdp;
      this._quotaTcp.internalValue = value.quotaTcp;
      this._quotaUdp.internalValue = value.quotaUdp;
    }
  }

  // icmp - computed: false, optional: true, required: false
  private _icmp?: number; 
  public get icmp() {
    return this.getNumberAttribute('icmp');
  }
  public set icmp(value: number) {
    this._icmp = value;
  }
  public resetIcmp() {
    this._icmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpInput() {
    return this._icmp;
  }

  // session - computed: false, optional: true, required: false
  private _session?: number; 
  public get session() {
    return this.getNumberAttribute('session');
  }
  public set session(value: number) {
    this._session = value;
  }
  public resetSession() {
    this._session = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionInput() {
    return this._session;
  }

  // session_tcp - computed: false, optional: true, required: false
  private _sessionTcp?: number; 
  public get sessionTcp() {
    return this.getNumberAttribute('session_tcp');
  }
  public set sessionTcp(value: number) {
    this._sessionTcp = value;
  }
  public resetSessionTcp() {
    this._sessionTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTcpInput() {
    return this._sessionTcp;
  }

  // session_udp - computed: false, optional: true, required: false
  private _sessionUdp?: number; 
  public get sessionUdp() {
    return this.getNumberAttribute('session_udp');
  }
  public set sessionUdp(value: number) {
    this._sessionUdp = value;
  }
  public resetSessionUdp() {
    this._sessionUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionUdpInput() {
    return this._sessionUdp;
  }

  // quota_tcp - computed: false, optional: true, required: false
  private _quotaTcp = new Cgnv6LsnLidUserQuotaQuotaTcpOutputReference(this, "quota_tcp");
  public get quotaTcp() {
    return this._quotaTcp;
  }
  public putQuotaTcp(value: Cgnv6LsnLidUserQuotaQuotaTcp) {
    this._quotaTcp.internalValue = value;
  }
  public resetQuotaTcp() {
    this._quotaTcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaTcpInput() {
    return this._quotaTcp.internalValue;
  }

  // quota_udp - computed: false, optional: true, required: false
  private _quotaUdp = new Cgnv6LsnLidUserQuotaQuotaUdpOutputReference(this, "quota_udp");
  public get quotaUdp() {
    return this._quotaUdp;
  }
  public putQuotaUdp(value: Cgnv6LsnLidUserQuotaQuotaUdp) {
    this._quotaUdp.internalValue = value;
  }
  public resetQuotaUdp() {
    this._quotaUdp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaUdpInput() {
    return this._quotaUdp.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_lid thunder_cgnv6_lsn_lid}
*/
export class Cgnv6LsnLid extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_lsn_lid";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6LsnLid resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6LsnLid to import
  * @param importFromId The id of the existing Cgnv6LsnLid that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_lid#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6LsnLid to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_lsn_lid", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_lid thunder_cgnv6_lsn_lid} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6LsnLidConfig
  */
  public constructor(scope: Construct, id: string, config: Cgnv6LsnLidConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_lsn_lid',
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
    this._id = config.id;
    this._lidNumber = config.lidNumber;
    this._name = config.name;
    this._override = config.override;
    this._respondToUserMac = config.respondToUserMac;
    this._userQuotaPrefixLength = config.userQuotaPrefixLength;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._connRateLimit.internalValue = config.connRateLimit;
    this._dsLite.internalValue = config.dsLite;
    this._extendedUserQuota.internalValue = config.extendedUserQuota;
    this._lsnRuleList.internalValue = config.lsnRuleList;
    this._sourceNatPool.internalValue = config.sourceNatPool;
    this._userQuota.internalValue = config.userQuota;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // lid_number - computed: false, optional: false, required: true
  private _lidNumber?: number; 
  public get lidNumber() {
    return this.getNumberAttribute('lid_number');
  }
  public set lidNumber(value: number) {
    this._lidNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lidNumberInput() {
    return this._lidNumber;
  }

  // name - computed: false, optional: true, required: false
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

  // override - computed: false, optional: true, required: false
  private _override?: string; 
  public get override() {
    return this.getStringAttribute('override');
  }
  public set override(value: string) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }

  // respond_to_user_mac - computed: false, optional: true, required: false
  private _respondToUserMac?: number; 
  public get respondToUserMac() {
    return this.getNumberAttribute('respond_to_user_mac');
  }
  public set respondToUserMac(value: number) {
    this._respondToUserMac = value;
  }
  public resetRespondToUserMac() {
    this._respondToUserMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respondToUserMacInput() {
    return this._respondToUserMac;
  }

  // user_quota_prefix_length - computed: false, optional: true, required: false
  private _userQuotaPrefixLength?: number; 
  public get userQuotaPrefixLength() {
    return this.getNumberAttribute('user_quota_prefix_length');
  }
  public set userQuotaPrefixLength(value: number) {
    this._userQuotaPrefixLength = value;
  }
  public resetUserQuotaPrefixLength() {
    this._userQuotaPrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userQuotaPrefixLengthInput() {
    return this._userQuotaPrefixLength;
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

  // conn_rate_limit - computed: false, optional: true, required: false
  private _connRateLimit = new Cgnv6LsnLidConnRateLimitOutputReference(this, "conn_rate_limit");
  public get connRateLimit() {
    return this._connRateLimit;
  }
  public putConnRateLimit(value: Cgnv6LsnLidConnRateLimit) {
    this._connRateLimit.internalValue = value;
  }
  public resetConnRateLimit() {
    this._connRateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRateLimitInput() {
    return this._connRateLimit.internalValue;
  }

  // ds_lite - computed: false, optional: true, required: false
  private _dsLite = new Cgnv6LsnLidDsLiteOutputReference(this, "ds_lite");
  public get dsLite() {
    return this._dsLite;
  }
  public putDsLite(value: Cgnv6LsnLidDsLite) {
    this._dsLite.internalValue = value;
  }
  public resetDsLite() {
    this._dsLite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsLiteInput() {
    return this._dsLite.internalValue;
  }

  // extended_user_quota - computed: false, optional: true, required: false
  private _extendedUserQuota = new Cgnv6LsnLidExtendedUserQuotaOutputReference(this, "extended_user_quota");
  public get extendedUserQuota() {
    return this._extendedUserQuota;
  }
  public putExtendedUserQuota(value: Cgnv6LsnLidExtendedUserQuota) {
    this._extendedUserQuota.internalValue = value;
  }
  public resetExtendedUserQuota() {
    this._extendedUserQuota.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedUserQuotaInput() {
    return this._extendedUserQuota.internalValue;
  }

  // lsn_rule_list - computed: false, optional: true, required: false
  private _lsnRuleList = new Cgnv6LsnLidLsnRuleListStructOutputReference(this, "lsn_rule_list");
  public get lsnRuleList() {
    return this._lsnRuleList;
  }
  public putLsnRuleList(value: Cgnv6LsnLidLsnRuleListStruct) {
    this._lsnRuleList.internalValue = value;
  }
  public resetLsnRuleList() {
    this._lsnRuleList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsnRuleListInput() {
    return this._lsnRuleList.internalValue;
  }

  // source_nat_pool - computed: false, optional: true, required: false
  private _sourceNatPool = new Cgnv6LsnLidSourceNatPoolOutputReference(this, "source_nat_pool");
  public get sourceNatPool() {
    return this._sourceNatPool;
  }
  public putSourceNatPool(value: Cgnv6LsnLidSourceNatPool) {
    this._sourceNatPool.internalValue = value;
  }
  public resetSourceNatPool() {
    this._sourceNatPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNatPoolInput() {
    return this._sourceNatPool.internalValue;
  }

  // user_quota - computed: false, optional: true, required: false
  private _userQuota = new Cgnv6LsnLidUserQuotaOutputReference(this, "user_quota");
  public get userQuota() {
    return this._userQuota;
  }
  public putUserQuota(value: Cgnv6LsnLidUserQuota) {
    this._userQuota.internalValue = value;
  }
  public resetUserQuota() {
    this._userQuota.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userQuotaInput() {
    return this._userQuota.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      lid_number: cdktf.numberToTerraform(this._lidNumber),
      name: cdktf.stringToTerraform(this._name),
      override: cdktf.stringToTerraform(this._override),
      respond_to_user_mac: cdktf.numberToTerraform(this._respondToUserMac),
      user_quota_prefix_length: cdktf.numberToTerraform(this._userQuotaPrefixLength),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      conn_rate_limit: cgnv6LsnLidConnRateLimitToTerraform(this._connRateLimit.internalValue),
      ds_lite: cgnv6LsnLidDsLiteToTerraform(this._dsLite.internalValue),
      extended_user_quota: cgnv6LsnLidExtendedUserQuotaToTerraform(this._extendedUserQuota.internalValue),
      lsn_rule_list: cgnv6LsnLidLsnRuleListStructToTerraform(this._lsnRuleList.internalValue),
      source_nat_pool: cgnv6LsnLidSourceNatPoolToTerraform(this._sourceNatPool.internalValue),
      user_quota: cgnv6LsnLidUserQuotaToTerraform(this._userQuota.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lid_number: {
        value: cdktf.numberToHclTerraform(this._lidNumber),
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
      override: {
        value: cdktf.stringToHclTerraform(this._override),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      respond_to_user_mac: {
        value: cdktf.numberToHclTerraform(this._respondToUserMac),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_quota_prefix_length: {
        value: cdktf.numberToHclTerraform(this._userQuotaPrefixLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      conn_rate_limit: {
        value: cgnv6LsnLidConnRateLimitToHclTerraform(this._connRateLimit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6LsnLidConnRateLimitList",
      },
      ds_lite: {
        value: cgnv6LsnLidDsLiteToHclTerraform(this._dsLite.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6LsnLidDsLiteList",
      },
      extended_user_quota: {
        value: cgnv6LsnLidExtendedUserQuotaToHclTerraform(this._extendedUserQuota.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6LsnLidExtendedUserQuotaList",
      },
      lsn_rule_list: {
        value: cgnv6LsnLidLsnRuleListStructToHclTerraform(this._lsnRuleList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6LsnLidLsnRuleListStructList",
      },
      source_nat_pool: {
        value: cgnv6LsnLidSourceNatPoolToHclTerraform(this._sourceNatPool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6LsnLidSourceNatPoolList",
      },
      user_quota: {
        value: cgnv6LsnLidUserQuotaToHclTerraform(this._userQuota.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6LsnLidUserQuotaList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
