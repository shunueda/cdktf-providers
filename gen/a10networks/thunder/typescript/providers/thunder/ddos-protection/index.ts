// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosProtectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable blacklist reason tracking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#blacklist_reason_tracking DdosProtection#blacklist_reason_tracking}
  */
  readonly blacklistReasonTracking?: number;
  /**
  * When closing unauthenticated sessions, don't send TCP RST for established TCP sessions. (Default disabled / sending TCP RST for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#close_sess_for_unauth_src_without_rst DdosProtection#close_sess_for_unauth_src_without_rst}
  */
  readonly closeSessForUnauthSrcWithoutRst?: number;
  /**
  * Disable advanced context info in coredump file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#disable_advanced_core_analysis DdosProtection#disable_advanced_core_analysis}
  */
  readonly disableAdvancedCoreAnalysis?: number;
  /**
  * Disable delay dynamic src entry learning
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#disable_delay_dynamic_src_learning DdosProtection#disable_delay_dynamic_src_learning}
  */
  readonly disableDelayDynamicSrcLearning?: number;
  /**
  * Disable DDoS protection upon reboot/reload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#disable_on_reboot DdosProtection#disable_on_reboot}
  */
  readonly disableOnReboot?: number;
  /**
  * Disallow RST-ACK passing syn-auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#disallow_rst_ack_in_syn_auth DdosProtection#disallow_rst_ack_in_syn_auth}
  */
  readonly disallowRstAckInSynAuth?: number;
  /**
  * Override disable-on-reboot to enable runtime DDOS protection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#enable_now DdosProtection#enable_now}
  */
  readonly enableNow?: number;
  /**
  * Disable fast path in SLB processing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#fast_path_disable DdosProtection#fast_path_disable}
  */
  readonly fastPathDisable?: number;
  /**
  * Force use of routing in transparent mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#force_routing_on_transp DdosProtection#force_routing_on_transp}
  */
  readonly forceRoutingOnTransp?: number;
  /**
  * Allow traffic to be distributed among blades on Chassis
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#force_traffic_to_same_blade_disable DdosProtection#force_traffic_to_same_blade_disable}
  */
  readonly forceTrafficToSameBladeDisable?: number;
  /**
  * Enable hardware blacklist blocking for src or dst default entries (default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#hw_blocking_enable DdosProtection#hw_blocking_enable}
  */
  readonly hwBlockingEnable?: number;
  /**
  * Threshold to initiate hardware blocking (default 10000)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#hw_blocking_threshold_limit DdosProtection#hw_blocking_threshold_limit}
  */
  readonly hwBlockingThresholdLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#id DdosProtection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable MPLS packet inspection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#mpls DdosProtection#mpls}
  */
  readonly mpls?: number;
  /**
  * Send syn-cookie with fix TCP window size if SYN packet has zero window size  (default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#non_zero_win_size_syncookie DdosProtection#non_zero_win_size_syncookie}
  */
  readonly nonZeroWinSizeSyncookie?: number;
  /**
  * 'enable': enable; 'disable': disable (Default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#pkt_rate_limit_on_reassemble DdosProtection#pkt_rate_limit_on_reassemble}
  */
  readonly pktRateLimitOnReassemble?: string;
  /**
  * 'enable': enable; 'disable': disable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#progression_tracking DdosProtection#progression_tracking}
  */
  readonly progressionTracking?: string;
  /**
  * '100ms': 100ms; '1sec': 1sec;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#rate_interval DdosProtection#rate_interval}
  */
  readonly rateInterval?: string;
  /**
  * Multi-PU rate limit syncing interval (default 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#rate_limit_sync_interval DdosProtection#rate_limit_sync_interval}
  */
  readonly rateLimitSyncInterval?: number;
  /**
  * Enable ddos per flow rexmit syn exceeded log
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#rexmit_syn_log DdosProtection#rexmit_syn_log}
  */
  readonly rexmitSynLog?: number;
  /**
  * '8M': 8 Million; '16M': 16 Million; 'unlimited': Unlimited; 'platform-default': Half of platform maximum;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#src_dst_entry_limit DdosProtection#src_dst_entry_limit}
  */
  readonly srcDstEntryLimit?: string;
  /**
  * 'v1': v1; 'v2': v2;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#src_hash_function DdosProtection#src_hash_function}
  */
  readonly srcHashFunction?: string;
  /**
  * Configure which bit hashed on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#src_ip_hash_bit DdosProtection#src_ip_hash_bit}
  */
  readonly srcIpHashBit?: number;
  /**
  * Configure which bit hashed on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#src_ipv6_hash_bit DdosProtection#src_ipv6_hash_bit}
  */
  readonly srcIpv6HashBit?: number;
  /**
  * '8M': 8 Million; '16M': 16 Million; 'unlimited': Unlimited; 'platform-default': Half of platform maximum;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#src_zone_port_entry_limit DdosProtection#src_zone_port_entry_limit}
  */
  readonly srcZonePortEntryLimit?: string;
  /**
  * Set threshold percentage of "max-src-dst-entry" for generating warning logs. Including start and end.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#szp_clist_warn_threshold DdosProtection#szp_clist_warn_threshold}
  */
  readonly szpClistWarnThreshold?: number;
  /**
  * Send logs if src-zone-port count exceeds "max-src-dst-entry"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#szp_warn_exceed_enable DdosProtection#szp_warn_exceed_enable}
  */
  readonly szpWarnExceedEnable?: number;
  /**
  * Set threshold percentage of "max-src-dst-entry" for generating warning logs. Including start and end.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#szp_warn_threshold DdosProtection#szp_warn_threshold}
  */
  readonly szpWarnThreshold?: number;
  /**
  * 'enable': enable; 'disable': disable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#toggle DdosProtection#toggle}
  */
  readonly toggle?: string;
  /**
  * Use route table, default use receive hop for device initiated traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#use_route DdosProtection#use_route}
  */
  readonly useRoute?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#uuid DdosProtection#uuid}
  */
  readonly uuid?: string;
  /**
  * 'enable': enable; 'disable': disable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#vxlan_outbound_check DdosProtection#vxlan_outbound_check}
  */
  readonly vxlanOutboundCheck?: string;
  /**
  * fast_aging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#fast_aging DdosProtection#fast_aging}
  */
  readonly fastAging?: DdosProtectionFastAging;
  /**
  * ipv6_src_hash_mask_bits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#ipv6_src_hash_mask_bits DdosProtection#ipv6_src_hash_mask_bits}
  */
  readonly ipv6SrcHashMaskBits?: DdosProtectionIpv6SrcHashMaskBits;
  /**
  * multi_pu_zone_distribution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#multi_pu_zone_distribution DdosProtection#multi_pu_zone_distribution}
  */
  readonly multiPuZoneDistribution?: DdosProtectionMultiPuZoneDistribution;
  /**
  * per_service_szp_entry_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#per_service_szp_entry_limit DdosProtection#per_service_szp_entry_limit}
  */
  readonly perServiceSzpEntryLimit?: DdosProtectionPerServiceSzpEntryLimit;
}
export interface DdosProtectionFastAging {
  /**
  * Minimum half-open session to total session ratio before session fast aging will take effect (default 25)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#half_open_conn_ratio DdosProtection#half_open_conn_ratio}
  */
  readonly halfOpenConnRatio?: number;
  /**
  * Minimum half-open session (percentage) before session fast aging will take effect (default 1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#half_open_conn_threshold DdosProtection#half_open_conn_threshold}
  */
  readonly halfOpenConnThreshold?: number;
}

export function ddosProtectionFastAgingToTerraform(struct?: DdosProtectionFastAgingOutputReference | DdosProtectionFastAging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    half_open_conn_ratio: cdktf.numberToTerraform(struct!.halfOpenConnRatio),
    half_open_conn_threshold: cdktf.numberToTerraform(struct!.halfOpenConnThreshold),
  }
}


export function ddosProtectionFastAgingToHclTerraform(struct?: DdosProtectionFastAgingOutputReference | DdosProtectionFastAging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    half_open_conn_ratio: {
      value: cdktf.numberToHclTerraform(struct!.halfOpenConnRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    half_open_conn_threshold: {
      value: cdktf.numberToHclTerraform(struct!.halfOpenConnThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosProtectionFastAgingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosProtectionFastAging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._halfOpenConnRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.halfOpenConnRatio = this._halfOpenConnRatio;
    }
    if (this._halfOpenConnThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.halfOpenConnThreshold = this._halfOpenConnThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosProtectionFastAging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._halfOpenConnRatio = undefined;
      this._halfOpenConnThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._halfOpenConnRatio = value.halfOpenConnRatio;
      this._halfOpenConnThreshold = value.halfOpenConnThreshold;
    }
  }

  // half_open_conn_ratio - computed: false, optional: true, required: false
  private _halfOpenConnRatio?: number; 
  public get halfOpenConnRatio() {
    return this.getNumberAttribute('half_open_conn_ratio');
  }
  public set halfOpenConnRatio(value: number) {
    this._halfOpenConnRatio = value;
  }
  public resetHalfOpenConnRatio() {
    this._halfOpenConnRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get halfOpenConnRatioInput() {
    return this._halfOpenConnRatio;
  }

  // half_open_conn_threshold - computed: false, optional: true, required: false
  private _halfOpenConnThreshold?: number; 
  public get halfOpenConnThreshold() {
    return this.getNumberAttribute('half_open_conn_threshold');
  }
  public set halfOpenConnThreshold(value: number) {
    this._halfOpenConnThreshold = value;
  }
  public resetHalfOpenConnThreshold() {
    this._halfOpenConnThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get halfOpenConnThresholdInput() {
    return this._halfOpenConnThreshold;
  }
}
export interface DdosProtectionIpv6SrcHashMaskBits {
  /**
  * Configure mask bits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#mask_bit_offset_1 DdosProtection#mask_bit_offset_1}
  */
  readonly maskBitOffset1?: number;
  /**
  * Configure mask bits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#mask_bit_offset_2 DdosProtection#mask_bit_offset_2}
  */
  readonly maskBitOffset2?: number;
  /**
  * Configure mask bits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#mask_bit_offset_3 DdosProtection#mask_bit_offset_3}
  */
  readonly maskBitOffset3?: number;
  /**
  * Configure mask bits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#mask_bit_offset_4 DdosProtection#mask_bit_offset_4}
  */
  readonly maskBitOffset4?: number;
  /**
  * Configure mask bits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#mask_bit_offset_5 DdosProtection#mask_bit_offset_5}
  */
  readonly maskBitOffset5?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#uuid DdosProtection#uuid}
  */
  readonly uuid?: string;
}

export function ddosProtectionIpv6SrcHashMaskBitsToTerraform(struct?: DdosProtectionIpv6SrcHashMaskBitsOutputReference | DdosProtectionIpv6SrcHashMaskBits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask_bit_offset_1: cdktf.numberToTerraform(struct!.maskBitOffset1),
    mask_bit_offset_2: cdktf.numberToTerraform(struct!.maskBitOffset2),
    mask_bit_offset_3: cdktf.numberToTerraform(struct!.maskBitOffset3),
    mask_bit_offset_4: cdktf.numberToTerraform(struct!.maskBitOffset4),
    mask_bit_offset_5: cdktf.numberToTerraform(struct!.maskBitOffset5),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosProtectionIpv6SrcHashMaskBitsToHclTerraform(struct?: DdosProtectionIpv6SrcHashMaskBitsOutputReference | DdosProtectionIpv6SrcHashMaskBits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask_bit_offset_1: {
      value: cdktf.numberToHclTerraform(struct!.maskBitOffset1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mask_bit_offset_2: {
      value: cdktf.numberToHclTerraform(struct!.maskBitOffset2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mask_bit_offset_3: {
      value: cdktf.numberToHclTerraform(struct!.maskBitOffset3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mask_bit_offset_4: {
      value: cdktf.numberToHclTerraform(struct!.maskBitOffset4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mask_bit_offset_5: {
      value: cdktf.numberToHclTerraform(struct!.maskBitOffset5),
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

export class DdosProtectionIpv6SrcHashMaskBitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosProtectionIpv6SrcHashMaskBits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maskBitOffset1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.maskBitOffset1 = this._maskBitOffset1;
    }
    if (this._maskBitOffset2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.maskBitOffset2 = this._maskBitOffset2;
    }
    if (this._maskBitOffset3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.maskBitOffset3 = this._maskBitOffset3;
    }
    if (this._maskBitOffset4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.maskBitOffset4 = this._maskBitOffset4;
    }
    if (this._maskBitOffset5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.maskBitOffset5 = this._maskBitOffset5;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosProtectionIpv6SrcHashMaskBits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maskBitOffset1 = undefined;
      this._maskBitOffset2 = undefined;
      this._maskBitOffset3 = undefined;
      this._maskBitOffset4 = undefined;
      this._maskBitOffset5 = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maskBitOffset1 = value.maskBitOffset1;
      this._maskBitOffset2 = value.maskBitOffset2;
      this._maskBitOffset3 = value.maskBitOffset3;
      this._maskBitOffset4 = value.maskBitOffset4;
      this._maskBitOffset5 = value.maskBitOffset5;
      this._uuid = value.uuid;
    }
  }

  // mask_bit_offset_1 - computed: false, optional: true, required: false
  private _maskBitOffset1?: number; 
  public get maskBitOffset1() {
    return this.getNumberAttribute('mask_bit_offset_1');
  }
  public set maskBitOffset1(value: number) {
    this._maskBitOffset1 = value;
  }
  public resetMaskBitOffset1() {
    this._maskBitOffset1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskBitOffset1Input() {
    return this._maskBitOffset1;
  }

  // mask_bit_offset_2 - computed: false, optional: true, required: false
  private _maskBitOffset2?: number; 
  public get maskBitOffset2() {
    return this.getNumberAttribute('mask_bit_offset_2');
  }
  public set maskBitOffset2(value: number) {
    this._maskBitOffset2 = value;
  }
  public resetMaskBitOffset2() {
    this._maskBitOffset2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskBitOffset2Input() {
    return this._maskBitOffset2;
  }

  // mask_bit_offset_3 - computed: false, optional: true, required: false
  private _maskBitOffset3?: number; 
  public get maskBitOffset3() {
    return this.getNumberAttribute('mask_bit_offset_3');
  }
  public set maskBitOffset3(value: number) {
    this._maskBitOffset3 = value;
  }
  public resetMaskBitOffset3() {
    this._maskBitOffset3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskBitOffset3Input() {
    return this._maskBitOffset3;
  }

  // mask_bit_offset_4 - computed: false, optional: true, required: false
  private _maskBitOffset4?: number; 
  public get maskBitOffset4() {
    return this.getNumberAttribute('mask_bit_offset_4');
  }
  public set maskBitOffset4(value: number) {
    this._maskBitOffset4 = value;
  }
  public resetMaskBitOffset4() {
    this._maskBitOffset4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskBitOffset4Input() {
    return this._maskBitOffset4;
  }

  // mask_bit_offset_5 - computed: false, optional: true, required: false
  private _maskBitOffset5?: number; 
  public get maskBitOffset5() {
    return this.getNumberAttribute('mask_bit_offset_5');
  }
  public set maskBitOffset5(value: number) {
    this._maskBitOffset5 = value;
  }
  public resetMaskBitOffset5() {
    this._maskBitOffset5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskBitOffset5Input() {
    return this._maskBitOffset5;
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
export interface DdosProtectionMultiPuZoneDistribution {
  /**
  * 'enable': enable; 'disable': disable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#regular_rebalance DdosProtection#regular_rebalance}
  */
  readonly regularRebalance?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#uuid DdosProtection#uuid}
  */
  readonly uuid?: string;
}

export function ddosProtectionMultiPuZoneDistributionToTerraform(struct?: DdosProtectionMultiPuZoneDistributionOutputReference | DdosProtectionMultiPuZoneDistribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    regular_rebalance: cdktf.stringToTerraform(struct!.regularRebalance),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosProtectionMultiPuZoneDistributionToHclTerraform(struct?: DdosProtectionMultiPuZoneDistributionOutputReference | DdosProtectionMultiPuZoneDistribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    regular_rebalance: {
      value: cdktf.stringToHclTerraform(struct!.regularRebalance),
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

export class DdosProtectionMultiPuZoneDistributionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosProtectionMultiPuZoneDistribution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regularRebalance !== undefined) {
      hasAnyValues = true;
      internalValueResult.regularRebalance = this._regularRebalance;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosProtectionMultiPuZoneDistribution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._regularRebalance = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._regularRebalance = value.regularRebalance;
      this._uuid = value.uuid;
    }
  }

  // regular_rebalance - computed: false, optional: true, required: false
  private _regularRebalance?: string; 
  public get regularRebalance() {
    return this.getStringAttribute('regular_rebalance');
  }
  public set regularRebalance(value: string) {
    this._regularRebalance = value;
  }
  public resetRegularRebalance() {
    this._regularRebalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regularRebalanceInput() {
    return this._regularRebalance;
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
export interface DdosProtectionPerServiceSzpEntryLimit {
  /**
  * Szp limit for port / port-range dns-tcp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#dns_tcp_limit DdosProtection#dns_tcp_limit}
  */
  readonly dnsTcpLimit?: number;
  /**
  * Szp limit for port / port-range dns-udp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#dns_udp_limit DdosProtection#dns_udp_limit}
  */
  readonly dnsUdpLimit?: number;
  /**
  * Szp limit for port / port-range http
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#http_limit DdosProtection#http_limit}
  */
  readonly httpLimit?: number;
  /**
  * Szp limit for custom ip-proto
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#ip_proto_custom_limit DdosProtection#ip_proto_custom_limit}
  */
  readonly ipProtoCustomLimit?: number;
  /**
  * Szp limit for ip-proto gre
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#ip_proto_gre_limit DdosProtection#ip_proto_gre_limit}
  */
  readonly ipProtoGreLimit?: number;
  /**
  * Szp limit for ip-proto icmp-v4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#ip_proto_icmp_v4_limit DdosProtection#ip_proto_icmp_v4_limit}
  */
  readonly ipProtoIcmpV4Limit?: number;
  /**
  * Szp limit for ip-proto icmp-v6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#ip_proto_icmp_v6_limit DdosProtection#ip_proto_icmp_v6_limit}
  */
  readonly ipProtoIcmpV6Limit?: number;
  /**
  * Szp limit for ip-proto ipv4-encap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#ip_proto_ipv4_encap_limit DdosProtection#ip_proto_ipv4_encap_limit}
  */
  readonly ipProtoIpv4EncapLimit?: number;
  /**
  * Szp limit for ip-proto ipv6-encap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#ip_proto_ipv6_encap_limit DdosProtection#ip_proto_ipv6_encap_limit}
  */
  readonly ipProtoIpv6EncapLimit?: number;
  /**
  * Szp limit for ip-proto other
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#ip_proto_other_limit DdosProtection#ip_proto_other_limit}
  */
  readonly ipProtoOtherLimit?: number;
  /**
  * Szp limit for port / port-range quic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#quic_limit DdosProtection#quic_limit}
  */
  readonly quicLimit?: number;
  /**
  * Szp limit for port / port-range sip-tcp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#sip_tcp_limit DdosProtection#sip_tcp_limit}
  */
  readonly sipTcpLimit?: number;
  /**
  * Szp limit for port / port-range sip-udp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#sip_udp_limit DdosProtection#sip_udp_limit}
  */
  readonly sipUdpLimit?: number;
  /**
  * Szp limit for port / port-range ssl-l4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#ssl_l4_limit DdosProtection#ssl_l4_limit}
  */
  readonly sslL4Limit?: number;
  /**
  * Szp limit for port / port-range tcp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#tcp_limit DdosProtection#tcp_limit}
  */
  readonly tcpLimit?: number;
  /**
  * Szp limit for port / port-range udp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#udp_limit DdosProtection#udp_limit}
  */
  readonly udpLimit?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#uuid DdosProtection#uuid}
  */
  readonly uuid?: string;
}

export function ddosProtectionPerServiceSzpEntryLimitToTerraform(struct?: DdosProtectionPerServiceSzpEntryLimitOutputReference | DdosProtectionPerServiceSzpEntryLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_tcp_limit: cdktf.numberToTerraform(struct!.dnsTcpLimit),
    dns_udp_limit: cdktf.numberToTerraform(struct!.dnsUdpLimit),
    http_limit: cdktf.numberToTerraform(struct!.httpLimit),
    ip_proto_custom_limit: cdktf.numberToTerraform(struct!.ipProtoCustomLimit),
    ip_proto_gre_limit: cdktf.numberToTerraform(struct!.ipProtoGreLimit),
    ip_proto_icmp_v4_limit: cdktf.numberToTerraform(struct!.ipProtoIcmpV4Limit),
    ip_proto_icmp_v6_limit: cdktf.numberToTerraform(struct!.ipProtoIcmpV6Limit),
    ip_proto_ipv4_encap_limit: cdktf.numberToTerraform(struct!.ipProtoIpv4EncapLimit),
    ip_proto_ipv6_encap_limit: cdktf.numberToTerraform(struct!.ipProtoIpv6EncapLimit),
    ip_proto_other_limit: cdktf.numberToTerraform(struct!.ipProtoOtherLimit),
    quic_limit: cdktf.numberToTerraform(struct!.quicLimit),
    sip_tcp_limit: cdktf.numberToTerraform(struct!.sipTcpLimit),
    sip_udp_limit: cdktf.numberToTerraform(struct!.sipUdpLimit),
    ssl_l4_limit: cdktf.numberToTerraform(struct!.sslL4Limit),
    tcp_limit: cdktf.numberToTerraform(struct!.tcpLimit),
    udp_limit: cdktf.numberToTerraform(struct!.udpLimit),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosProtectionPerServiceSzpEntryLimitToHclTerraform(struct?: DdosProtectionPerServiceSzpEntryLimitOutputReference | DdosProtectionPerServiceSzpEntryLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_tcp_limit: {
      value: cdktf.numberToHclTerraform(struct!.dnsTcpLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_udp_limit: {
      value: cdktf.numberToHclTerraform(struct!.dnsUdpLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_limit: {
      value: cdktf.numberToHclTerraform(struct!.httpLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_proto_custom_limit: {
      value: cdktf.numberToHclTerraform(struct!.ipProtoCustomLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_proto_gre_limit: {
      value: cdktf.numberToHclTerraform(struct!.ipProtoGreLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_proto_icmp_v4_limit: {
      value: cdktf.numberToHclTerraform(struct!.ipProtoIcmpV4Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_proto_icmp_v6_limit: {
      value: cdktf.numberToHclTerraform(struct!.ipProtoIcmpV6Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_proto_ipv4_encap_limit: {
      value: cdktf.numberToHclTerraform(struct!.ipProtoIpv4EncapLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_proto_ipv6_encap_limit: {
      value: cdktf.numberToHclTerraform(struct!.ipProtoIpv6EncapLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_proto_other_limit: {
      value: cdktf.numberToHclTerraform(struct!.ipProtoOtherLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quic_limit: {
      value: cdktf.numberToHclTerraform(struct!.quicLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sip_tcp_limit: {
      value: cdktf.numberToHclTerraform(struct!.sipTcpLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sip_udp_limit: {
      value: cdktf.numberToHclTerraform(struct!.sipUdpLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_l4_limit: {
      value: cdktf.numberToHclTerraform(struct!.sslL4Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_limit: {
      value: cdktf.numberToHclTerraform(struct!.tcpLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_limit: {
      value: cdktf.numberToHclTerraform(struct!.udpLimit),
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

export class DdosProtectionPerServiceSzpEntryLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosProtectionPerServiceSzpEntryLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsTcpLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsTcpLimit = this._dnsTcpLimit;
    }
    if (this._dnsUdpLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsUdpLimit = this._dnsUdpLimit;
    }
    if (this._httpLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpLimit = this._httpLimit;
    }
    if (this._ipProtoCustomLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProtoCustomLimit = this._ipProtoCustomLimit;
    }
    if (this._ipProtoGreLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProtoGreLimit = this._ipProtoGreLimit;
    }
    if (this._ipProtoIcmpV4Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProtoIcmpV4Limit = this._ipProtoIcmpV4Limit;
    }
    if (this._ipProtoIcmpV6Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProtoIcmpV6Limit = this._ipProtoIcmpV6Limit;
    }
    if (this._ipProtoIpv4EncapLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProtoIpv4EncapLimit = this._ipProtoIpv4EncapLimit;
    }
    if (this._ipProtoIpv6EncapLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProtoIpv6EncapLimit = this._ipProtoIpv6EncapLimit;
    }
    if (this._ipProtoOtherLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProtoOtherLimit = this._ipProtoOtherLimit;
    }
    if (this._quicLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicLimit = this._quicLimit;
    }
    if (this._sipTcpLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipTcpLimit = this._sipTcpLimit;
    }
    if (this._sipUdpLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipUdpLimit = this._sipUdpLimit;
    }
    if (this._sslL4Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4Limit = this._sslL4Limit;
    }
    if (this._tcpLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpLimit = this._tcpLimit;
    }
    if (this._udpLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpLimit = this._udpLimit;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosProtectionPerServiceSzpEntryLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsTcpLimit = undefined;
      this._dnsUdpLimit = undefined;
      this._httpLimit = undefined;
      this._ipProtoCustomLimit = undefined;
      this._ipProtoGreLimit = undefined;
      this._ipProtoIcmpV4Limit = undefined;
      this._ipProtoIcmpV6Limit = undefined;
      this._ipProtoIpv4EncapLimit = undefined;
      this._ipProtoIpv6EncapLimit = undefined;
      this._ipProtoOtherLimit = undefined;
      this._quicLimit = undefined;
      this._sipTcpLimit = undefined;
      this._sipUdpLimit = undefined;
      this._sslL4Limit = undefined;
      this._tcpLimit = undefined;
      this._udpLimit = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsTcpLimit = value.dnsTcpLimit;
      this._dnsUdpLimit = value.dnsUdpLimit;
      this._httpLimit = value.httpLimit;
      this._ipProtoCustomLimit = value.ipProtoCustomLimit;
      this._ipProtoGreLimit = value.ipProtoGreLimit;
      this._ipProtoIcmpV4Limit = value.ipProtoIcmpV4Limit;
      this._ipProtoIcmpV6Limit = value.ipProtoIcmpV6Limit;
      this._ipProtoIpv4EncapLimit = value.ipProtoIpv4EncapLimit;
      this._ipProtoIpv6EncapLimit = value.ipProtoIpv6EncapLimit;
      this._ipProtoOtherLimit = value.ipProtoOtherLimit;
      this._quicLimit = value.quicLimit;
      this._sipTcpLimit = value.sipTcpLimit;
      this._sipUdpLimit = value.sipUdpLimit;
      this._sslL4Limit = value.sslL4Limit;
      this._tcpLimit = value.tcpLimit;
      this._udpLimit = value.udpLimit;
      this._uuid = value.uuid;
    }
  }

  // dns_tcp_limit - computed: false, optional: true, required: false
  private _dnsTcpLimit?: number; 
  public get dnsTcpLimit() {
    return this.getNumberAttribute('dns_tcp_limit');
  }
  public set dnsTcpLimit(value: number) {
    this._dnsTcpLimit = value;
  }
  public resetDnsTcpLimit() {
    this._dnsTcpLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsTcpLimitInput() {
    return this._dnsTcpLimit;
  }

  // dns_udp_limit - computed: false, optional: true, required: false
  private _dnsUdpLimit?: number; 
  public get dnsUdpLimit() {
    return this.getNumberAttribute('dns_udp_limit');
  }
  public set dnsUdpLimit(value: number) {
    this._dnsUdpLimit = value;
  }
  public resetDnsUdpLimit() {
    this._dnsUdpLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsUdpLimitInput() {
    return this._dnsUdpLimit;
  }

  // http_limit - computed: false, optional: true, required: false
  private _httpLimit?: number; 
  public get httpLimit() {
    return this.getNumberAttribute('http_limit');
  }
  public set httpLimit(value: number) {
    this._httpLimit = value;
  }
  public resetHttpLimit() {
    this._httpLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpLimitInput() {
    return this._httpLimit;
  }

  // ip_proto_custom_limit - computed: false, optional: true, required: false
  private _ipProtoCustomLimit?: number; 
  public get ipProtoCustomLimit() {
    return this.getNumberAttribute('ip_proto_custom_limit');
  }
  public set ipProtoCustomLimit(value: number) {
    this._ipProtoCustomLimit = value;
  }
  public resetIpProtoCustomLimit() {
    this._ipProtoCustomLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtoCustomLimitInput() {
    return this._ipProtoCustomLimit;
  }

  // ip_proto_gre_limit - computed: false, optional: true, required: false
  private _ipProtoGreLimit?: number; 
  public get ipProtoGreLimit() {
    return this.getNumberAttribute('ip_proto_gre_limit');
  }
  public set ipProtoGreLimit(value: number) {
    this._ipProtoGreLimit = value;
  }
  public resetIpProtoGreLimit() {
    this._ipProtoGreLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtoGreLimitInput() {
    return this._ipProtoGreLimit;
  }

  // ip_proto_icmp_v4_limit - computed: false, optional: true, required: false
  private _ipProtoIcmpV4Limit?: number; 
  public get ipProtoIcmpV4Limit() {
    return this.getNumberAttribute('ip_proto_icmp_v4_limit');
  }
  public set ipProtoIcmpV4Limit(value: number) {
    this._ipProtoIcmpV4Limit = value;
  }
  public resetIpProtoIcmpV4Limit() {
    this._ipProtoIcmpV4Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtoIcmpV4LimitInput() {
    return this._ipProtoIcmpV4Limit;
  }

  // ip_proto_icmp_v6_limit - computed: false, optional: true, required: false
  private _ipProtoIcmpV6Limit?: number; 
  public get ipProtoIcmpV6Limit() {
    return this.getNumberAttribute('ip_proto_icmp_v6_limit');
  }
  public set ipProtoIcmpV6Limit(value: number) {
    this._ipProtoIcmpV6Limit = value;
  }
  public resetIpProtoIcmpV6Limit() {
    this._ipProtoIcmpV6Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtoIcmpV6LimitInput() {
    return this._ipProtoIcmpV6Limit;
  }

  // ip_proto_ipv4_encap_limit - computed: false, optional: true, required: false
  private _ipProtoIpv4EncapLimit?: number; 
  public get ipProtoIpv4EncapLimit() {
    return this.getNumberAttribute('ip_proto_ipv4_encap_limit');
  }
  public set ipProtoIpv4EncapLimit(value: number) {
    this._ipProtoIpv4EncapLimit = value;
  }
  public resetIpProtoIpv4EncapLimit() {
    this._ipProtoIpv4EncapLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtoIpv4EncapLimitInput() {
    return this._ipProtoIpv4EncapLimit;
  }

  // ip_proto_ipv6_encap_limit - computed: false, optional: true, required: false
  private _ipProtoIpv6EncapLimit?: number; 
  public get ipProtoIpv6EncapLimit() {
    return this.getNumberAttribute('ip_proto_ipv6_encap_limit');
  }
  public set ipProtoIpv6EncapLimit(value: number) {
    this._ipProtoIpv6EncapLimit = value;
  }
  public resetIpProtoIpv6EncapLimit() {
    this._ipProtoIpv6EncapLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtoIpv6EncapLimitInput() {
    return this._ipProtoIpv6EncapLimit;
  }

  // ip_proto_other_limit - computed: false, optional: true, required: false
  private _ipProtoOtherLimit?: number; 
  public get ipProtoOtherLimit() {
    return this.getNumberAttribute('ip_proto_other_limit');
  }
  public set ipProtoOtherLimit(value: number) {
    this._ipProtoOtherLimit = value;
  }
  public resetIpProtoOtherLimit() {
    this._ipProtoOtherLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtoOtherLimitInput() {
    return this._ipProtoOtherLimit;
  }

  // quic_limit - computed: false, optional: true, required: false
  private _quicLimit?: number; 
  public get quicLimit() {
    return this.getNumberAttribute('quic_limit');
  }
  public set quicLimit(value: number) {
    this._quicLimit = value;
  }
  public resetQuicLimit() {
    this._quicLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicLimitInput() {
    return this._quicLimit;
  }

  // sip_tcp_limit - computed: false, optional: true, required: false
  private _sipTcpLimit?: number; 
  public get sipTcpLimit() {
    return this.getNumberAttribute('sip_tcp_limit');
  }
  public set sipTcpLimit(value: number) {
    this._sipTcpLimit = value;
  }
  public resetSipTcpLimit() {
    this._sipTcpLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipTcpLimitInput() {
    return this._sipTcpLimit;
  }

  // sip_udp_limit - computed: false, optional: true, required: false
  private _sipUdpLimit?: number; 
  public get sipUdpLimit() {
    return this.getNumberAttribute('sip_udp_limit');
  }
  public set sipUdpLimit(value: number) {
    this._sipUdpLimit = value;
  }
  public resetSipUdpLimit() {
    this._sipUdpLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipUdpLimitInput() {
    return this._sipUdpLimit;
  }

  // ssl_l4_limit - computed: false, optional: true, required: false
  private _sslL4Limit?: number; 
  public get sslL4Limit() {
    return this.getNumberAttribute('ssl_l4_limit');
  }
  public set sslL4Limit(value: number) {
    this._sslL4Limit = value;
  }
  public resetSslL4Limit() {
    this._sslL4Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4LimitInput() {
    return this._sslL4Limit;
  }

  // tcp_limit - computed: false, optional: true, required: false
  private _tcpLimit?: number; 
  public get tcpLimit() {
    return this.getNumberAttribute('tcp_limit');
  }
  public set tcpLimit(value: number) {
    this._tcpLimit = value;
  }
  public resetTcpLimit() {
    this._tcpLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpLimitInput() {
    return this._tcpLimit;
  }

  // udp_limit - computed: false, optional: true, required: false
  private _udpLimit?: number; 
  public get udpLimit() {
    return this.getNumberAttribute('udp_limit');
  }
  public set udpLimit(value: number) {
    this._udpLimit = value;
  }
  public resetUdpLimit() {
    this._udpLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpLimitInput() {
    return this._udpLimit;
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection thunder_ddos_protection}
*/
export class DdosProtection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_protection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosProtection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosProtection to import
  * @param importFromId The id of the existing DdosProtection that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosProtection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_protection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection thunder_ddos_protection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosProtectionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DdosProtectionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_protection',
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
    this._blacklistReasonTracking = config.blacklistReasonTracking;
    this._closeSessForUnauthSrcWithoutRst = config.closeSessForUnauthSrcWithoutRst;
    this._disableAdvancedCoreAnalysis = config.disableAdvancedCoreAnalysis;
    this._disableDelayDynamicSrcLearning = config.disableDelayDynamicSrcLearning;
    this._disableOnReboot = config.disableOnReboot;
    this._disallowRstAckInSynAuth = config.disallowRstAckInSynAuth;
    this._enableNow = config.enableNow;
    this._fastPathDisable = config.fastPathDisable;
    this._forceRoutingOnTransp = config.forceRoutingOnTransp;
    this._forceTrafficToSameBladeDisable = config.forceTrafficToSameBladeDisable;
    this._hwBlockingEnable = config.hwBlockingEnable;
    this._hwBlockingThresholdLimit = config.hwBlockingThresholdLimit;
    this._id = config.id;
    this._mpls = config.mpls;
    this._nonZeroWinSizeSyncookie = config.nonZeroWinSizeSyncookie;
    this._pktRateLimitOnReassemble = config.pktRateLimitOnReassemble;
    this._progressionTracking = config.progressionTracking;
    this._rateInterval = config.rateInterval;
    this._rateLimitSyncInterval = config.rateLimitSyncInterval;
    this._rexmitSynLog = config.rexmitSynLog;
    this._srcDstEntryLimit = config.srcDstEntryLimit;
    this._srcHashFunction = config.srcHashFunction;
    this._srcIpHashBit = config.srcIpHashBit;
    this._srcIpv6HashBit = config.srcIpv6HashBit;
    this._srcZonePortEntryLimit = config.srcZonePortEntryLimit;
    this._szpClistWarnThreshold = config.szpClistWarnThreshold;
    this._szpWarnExceedEnable = config.szpWarnExceedEnable;
    this._szpWarnThreshold = config.szpWarnThreshold;
    this._toggle = config.toggle;
    this._useRoute = config.useRoute;
    this._uuid = config.uuid;
    this._vxlanOutboundCheck = config.vxlanOutboundCheck;
    this._fastAging.internalValue = config.fastAging;
    this._ipv6SrcHashMaskBits.internalValue = config.ipv6SrcHashMaskBits;
    this._multiPuZoneDistribution.internalValue = config.multiPuZoneDistribution;
    this._perServiceSzpEntryLimit.internalValue = config.perServiceSzpEntryLimit;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blacklist_reason_tracking - computed: false, optional: true, required: false
  private _blacklistReasonTracking?: number; 
  public get blacklistReasonTracking() {
    return this.getNumberAttribute('blacklist_reason_tracking');
  }
  public set blacklistReasonTracking(value: number) {
    this._blacklistReasonTracking = value;
  }
  public resetBlacklistReasonTracking() {
    this._blacklistReasonTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blacklistReasonTrackingInput() {
    return this._blacklistReasonTracking;
  }

  // close_sess_for_unauth_src_without_rst - computed: false, optional: true, required: false
  private _closeSessForUnauthSrcWithoutRst?: number; 
  public get closeSessForUnauthSrcWithoutRst() {
    return this.getNumberAttribute('close_sess_for_unauth_src_without_rst');
  }
  public set closeSessForUnauthSrcWithoutRst(value: number) {
    this._closeSessForUnauthSrcWithoutRst = value;
  }
  public resetCloseSessForUnauthSrcWithoutRst() {
    this._closeSessForUnauthSrcWithoutRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeSessForUnauthSrcWithoutRstInput() {
    return this._closeSessForUnauthSrcWithoutRst;
  }

  // disable_advanced_core_analysis - computed: false, optional: true, required: false
  private _disableAdvancedCoreAnalysis?: number; 
  public get disableAdvancedCoreAnalysis() {
    return this.getNumberAttribute('disable_advanced_core_analysis');
  }
  public set disableAdvancedCoreAnalysis(value: number) {
    this._disableAdvancedCoreAnalysis = value;
  }
  public resetDisableAdvancedCoreAnalysis() {
    this._disableAdvancedCoreAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAdvancedCoreAnalysisInput() {
    return this._disableAdvancedCoreAnalysis;
  }

  // disable_delay_dynamic_src_learning - computed: false, optional: true, required: false
  private _disableDelayDynamicSrcLearning?: number; 
  public get disableDelayDynamicSrcLearning() {
    return this.getNumberAttribute('disable_delay_dynamic_src_learning');
  }
  public set disableDelayDynamicSrcLearning(value: number) {
    this._disableDelayDynamicSrcLearning = value;
  }
  public resetDisableDelayDynamicSrcLearning() {
    this._disableDelayDynamicSrcLearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableDelayDynamicSrcLearningInput() {
    return this._disableDelayDynamicSrcLearning;
  }

  // disable_on_reboot - computed: false, optional: true, required: false
  private _disableOnReboot?: number; 
  public get disableOnReboot() {
    return this.getNumberAttribute('disable_on_reboot');
  }
  public set disableOnReboot(value: number) {
    this._disableOnReboot = value;
  }
  public resetDisableOnReboot() {
    this._disableOnReboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableOnRebootInput() {
    return this._disableOnReboot;
  }

  // disallow_rst_ack_in_syn_auth - computed: false, optional: true, required: false
  private _disallowRstAckInSynAuth?: number; 
  public get disallowRstAckInSynAuth() {
    return this.getNumberAttribute('disallow_rst_ack_in_syn_auth');
  }
  public set disallowRstAckInSynAuth(value: number) {
    this._disallowRstAckInSynAuth = value;
  }
  public resetDisallowRstAckInSynAuth() {
    this._disallowRstAckInSynAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowRstAckInSynAuthInput() {
    return this._disallowRstAckInSynAuth;
  }

  // enable_now - computed: false, optional: true, required: false
  private _enableNow?: number; 
  public get enableNow() {
    return this.getNumberAttribute('enable_now');
  }
  public set enableNow(value: number) {
    this._enableNow = value;
  }
  public resetEnableNow() {
    this._enableNow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNowInput() {
    return this._enableNow;
  }

  // fast_path_disable - computed: false, optional: true, required: false
  private _fastPathDisable?: number; 
  public get fastPathDisable() {
    return this.getNumberAttribute('fast_path_disable');
  }
  public set fastPathDisable(value: number) {
    this._fastPathDisable = value;
  }
  public resetFastPathDisable() {
    this._fastPathDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastPathDisableInput() {
    return this._fastPathDisable;
  }

  // force_routing_on_transp - computed: false, optional: true, required: false
  private _forceRoutingOnTransp?: number; 
  public get forceRoutingOnTransp() {
    return this.getNumberAttribute('force_routing_on_transp');
  }
  public set forceRoutingOnTransp(value: number) {
    this._forceRoutingOnTransp = value;
  }
  public resetForceRoutingOnTransp() {
    this._forceRoutingOnTransp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceRoutingOnTranspInput() {
    return this._forceRoutingOnTransp;
  }

  // force_traffic_to_same_blade_disable - computed: false, optional: true, required: false
  private _forceTrafficToSameBladeDisable?: number; 
  public get forceTrafficToSameBladeDisable() {
    return this.getNumberAttribute('force_traffic_to_same_blade_disable');
  }
  public set forceTrafficToSameBladeDisable(value: number) {
    this._forceTrafficToSameBladeDisable = value;
  }
  public resetForceTrafficToSameBladeDisable() {
    this._forceTrafficToSameBladeDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceTrafficToSameBladeDisableInput() {
    return this._forceTrafficToSameBladeDisable;
  }

  // hw_blocking_enable - computed: false, optional: true, required: false
  private _hwBlockingEnable?: number; 
  public get hwBlockingEnable() {
    return this.getNumberAttribute('hw_blocking_enable');
  }
  public set hwBlockingEnable(value: number) {
    this._hwBlockingEnable = value;
  }
  public resetHwBlockingEnable() {
    this._hwBlockingEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwBlockingEnableInput() {
    return this._hwBlockingEnable;
  }

  // hw_blocking_threshold_limit - computed: false, optional: true, required: false
  private _hwBlockingThresholdLimit?: number; 
  public get hwBlockingThresholdLimit() {
    return this.getNumberAttribute('hw_blocking_threshold_limit');
  }
  public set hwBlockingThresholdLimit(value: number) {
    this._hwBlockingThresholdLimit = value;
  }
  public resetHwBlockingThresholdLimit() {
    this._hwBlockingThresholdLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwBlockingThresholdLimitInput() {
    return this._hwBlockingThresholdLimit;
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

  // mpls - computed: false, optional: true, required: false
  private _mpls?: number; 
  public get mpls() {
    return this.getNumberAttribute('mpls');
  }
  public set mpls(value: number) {
    this._mpls = value;
  }
  public resetMpls() {
    this._mpls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mplsInput() {
    return this._mpls;
  }

  // non_zero_win_size_syncookie - computed: false, optional: true, required: false
  private _nonZeroWinSizeSyncookie?: number; 
  public get nonZeroWinSizeSyncookie() {
    return this.getNumberAttribute('non_zero_win_size_syncookie');
  }
  public set nonZeroWinSizeSyncookie(value: number) {
    this._nonZeroWinSizeSyncookie = value;
  }
  public resetNonZeroWinSizeSyncookie() {
    this._nonZeroWinSizeSyncookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonZeroWinSizeSyncookieInput() {
    return this._nonZeroWinSizeSyncookie;
  }

  // pkt_rate_limit_on_reassemble - computed: false, optional: true, required: false
  private _pktRateLimitOnReassemble?: string; 
  public get pktRateLimitOnReassemble() {
    return this.getStringAttribute('pkt_rate_limit_on_reassemble');
  }
  public set pktRateLimitOnReassemble(value: string) {
    this._pktRateLimitOnReassemble = value;
  }
  public resetPktRateLimitOnReassemble() {
    this._pktRateLimitOnReassemble = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktRateLimitOnReassembleInput() {
    return this._pktRateLimitOnReassemble;
  }

  // progression_tracking - computed: false, optional: true, required: false
  private _progressionTracking?: string; 
  public get progressionTracking() {
    return this.getStringAttribute('progression_tracking');
  }
  public set progressionTracking(value: string) {
    this._progressionTracking = value;
  }
  public resetProgressionTracking() {
    this._progressionTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingInput() {
    return this._progressionTracking;
  }

  // rate_interval - computed: false, optional: true, required: false
  private _rateInterval?: string; 
  public get rateInterval() {
    return this.getStringAttribute('rate_interval');
  }
  public set rateInterval(value: string) {
    this._rateInterval = value;
  }
  public resetRateInterval() {
    this._rateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateIntervalInput() {
    return this._rateInterval;
  }

  // rate_limit_sync_interval - computed: false, optional: true, required: false
  private _rateLimitSyncInterval?: number; 
  public get rateLimitSyncInterval() {
    return this.getNumberAttribute('rate_limit_sync_interval');
  }
  public set rateLimitSyncInterval(value: number) {
    this._rateLimitSyncInterval = value;
  }
  public resetRateLimitSyncInterval() {
    this._rateLimitSyncInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitSyncIntervalInput() {
    return this._rateLimitSyncInterval;
  }

  // rexmit_syn_log - computed: false, optional: true, required: false
  private _rexmitSynLog?: number; 
  public get rexmitSynLog() {
    return this.getNumberAttribute('rexmit_syn_log');
  }
  public set rexmitSynLog(value: number) {
    this._rexmitSynLog = value;
  }
  public resetRexmitSynLog() {
    this._rexmitSynLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rexmitSynLogInput() {
    return this._rexmitSynLog;
  }

  // src_dst_entry_limit - computed: false, optional: true, required: false
  private _srcDstEntryLimit?: string; 
  public get srcDstEntryLimit() {
    return this.getStringAttribute('src_dst_entry_limit');
  }
  public set srcDstEntryLimit(value: string) {
    this._srcDstEntryLimit = value;
  }
  public resetSrcDstEntryLimit() {
    this._srcDstEntryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstEntryLimitInput() {
    return this._srcDstEntryLimit;
  }

  // src_hash_function - computed: false, optional: true, required: false
  private _srcHashFunction?: string; 
  public get srcHashFunction() {
    return this.getStringAttribute('src_hash_function');
  }
  public set srcHashFunction(value: string) {
    this._srcHashFunction = value;
  }
  public resetSrcHashFunction() {
    this._srcHashFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHashFunctionInput() {
    return this._srcHashFunction;
  }

  // src_ip_hash_bit - computed: false, optional: true, required: false
  private _srcIpHashBit?: number; 
  public get srcIpHashBit() {
    return this.getNumberAttribute('src_ip_hash_bit');
  }
  public set srcIpHashBit(value: number) {
    this._srcIpHashBit = value;
  }
  public resetSrcIpHashBit() {
    this._srcIpHashBit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpHashBitInput() {
    return this._srcIpHashBit;
  }

  // src_ipv6_hash_bit - computed: false, optional: true, required: false
  private _srcIpv6HashBit?: number; 
  public get srcIpv6HashBit() {
    return this.getNumberAttribute('src_ipv6_hash_bit');
  }
  public set srcIpv6HashBit(value: number) {
    this._srcIpv6HashBit = value;
  }
  public resetSrcIpv6HashBit() {
    this._srcIpv6HashBit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpv6HashBitInput() {
    return this._srcIpv6HashBit;
  }

  // src_zone_port_entry_limit - computed: false, optional: true, required: false
  private _srcZonePortEntryLimit?: string; 
  public get srcZonePortEntryLimit() {
    return this.getStringAttribute('src_zone_port_entry_limit');
  }
  public set srcZonePortEntryLimit(value: string) {
    this._srcZonePortEntryLimit = value;
  }
  public resetSrcZonePortEntryLimit() {
    this._srcZonePortEntryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcZonePortEntryLimitInput() {
    return this._srcZonePortEntryLimit;
  }

  // szp_clist_warn_threshold - computed: false, optional: true, required: false
  private _szpClistWarnThreshold?: number; 
  public get szpClistWarnThreshold() {
    return this.getNumberAttribute('szp_clist_warn_threshold');
  }
  public set szpClistWarnThreshold(value: number) {
    this._szpClistWarnThreshold = value;
  }
  public resetSzpClistWarnThreshold() {
    this._szpClistWarnThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get szpClistWarnThresholdInput() {
    return this._szpClistWarnThreshold;
  }

  // szp_warn_exceed_enable - computed: false, optional: true, required: false
  private _szpWarnExceedEnable?: number; 
  public get szpWarnExceedEnable() {
    return this.getNumberAttribute('szp_warn_exceed_enable');
  }
  public set szpWarnExceedEnable(value: number) {
    this._szpWarnExceedEnable = value;
  }
  public resetSzpWarnExceedEnable() {
    this._szpWarnExceedEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get szpWarnExceedEnableInput() {
    return this._szpWarnExceedEnable;
  }

  // szp_warn_threshold - computed: false, optional: true, required: false
  private _szpWarnThreshold?: number; 
  public get szpWarnThreshold() {
    return this.getNumberAttribute('szp_warn_threshold');
  }
  public set szpWarnThreshold(value: number) {
    this._szpWarnThreshold = value;
  }
  public resetSzpWarnThreshold() {
    this._szpWarnThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get szpWarnThresholdInput() {
    return this._szpWarnThreshold;
  }

  // toggle - computed: false, optional: true, required: false
  private _toggle?: string; 
  public get toggle() {
    return this.getStringAttribute('toggle');
  }
  public set toggle(value: string) {
    this._toggle = value;
  }
  public resetToggle() {
    this._toggle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toggleInput() {
    return this._toggle;
  }

  // use_route - computed: false, optional: true, required: false
  private _useRoute?: number; 
  public get useRoute() {
    return this.getNumberAttribute('use_route');
  }
  public set useRoute(value: number) {
    this._useRoute = value;
  }
  public resetUseRoute() {
    this._useRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRouteInput() {
    return this._useRoute;
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

  // vxlan_outbound_check - computed: false, optional: true, required: false
  private _vxlanOutboundCheck?: string; 
  public get vxlanOutboundCheck() {
    return this.getStringAttribute('vxlan_outbound_check');
  }
  public set vxlanOutboundCheck(value: string) {
    this._vxlanOutboundCheck = value;
  }
  public resetVxlanOutboundCheck() {
    this._vxlanOutboundCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vxlanOutboundCheckInput() {
    return this._vxlanOutboundCheck;
  }

  // fast_aging - computed: false, optional: true, required: false
  private _fastAging = new DdosProtectionFastAgingOutputReference(this, "fast_aging");
  public get fastAging() {
    return this._fastAging;
  }
  public putFastAging(value: DdosProtectionFastAging) {
    this._fastAging.internalValue = value;
  }
  public resetFastAging() {
    this._fastAging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastAgingInput() {
    return this._fastAging.internalValue;
  }

  // ipv6_src_hash_mask_bits - computed: false, optional: true, required: false
  private _ipv6SrcHashMaskBits = new DdosProtectionIpv6SrcHashMaskBitsOutputReference(this, "ipv6_src_hash_mask_bits");
  public get ipv6SrcHashMaskBits() {
    return this._ipv6SrcHashMaskBits;
  }
  public putIpv6SrcHashMaskBits(value: DdosProtectionIpv6SrcHashMaskBits) {
    this._ipv6SrcHashMaskBits.internalValue = value;
  }
  public resetIpv6SrcHashMaskBits() {
    this._ipv6SrcHashMaskBits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SrcHashMaskBitsInput() {
    return this._ipv6SrcHashMaskBits.internalValue;
  }

  // multi_pu_zone_distribution - computed: false, optional: true, required: false
  private _multiPuZoneDistribution = new DdosProtectionMultiPuZoneDistributionOutputReference(this, "multi_pu_zone_distribution");
  public get multiPuZoneDistribution() {
    return this._multiPuZoneDistribution;
  }
  public putMultiPuZoneDistribution(value: DdosProtectionMultiPuZoneDistribution) {
    this._multiPuZoneDistribution.internalValue = value;
  }
  public resetMultiPuZoneDistribution() {
    this._multiPuZoneDistribution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiPuZoneDistributionInput() {
    return this._multiPuZoneDistribution.internalValue;
  }

  // per_service_szp_entry_limit - computed: false, optional: true, required: false
  private _perServiceSzpEntryLimit = new DdosProtectionPerServiceSzpEntryLimitOutputReference(this, "per_service_szp_entry_limit");
  public get perServiceSzpEntryLimit() {
    return this._perServiceSzpEntryLimit;
  }
  public putPerServiceSzpEntryLimit(value: DdosProtectionPerServiceSzpEntryLimit) {
    this._perServiceSzpEntryLimit.internalValue = value;
  }
  public resetPerServiceSzpEntryLimit() {
    this._perServiceSzpEntryLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perServiceSzpEntryLimitInput() {
    return this._perServiceSzpEntryLimit.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blacklist_reason_tracking: cdktf.numberToTerraform(this._blacklistReasonTracking),
      close_sess_for_unauth_src_without_rst: cdktf.numberToTerraform(this._closeSessForUnauthSrcWithoutRst),
      disable_advanced_core_analysis: cdktf.numberToTerraform(this._disableAdvancedCoreAnalysis),
      disable_delay_dynamic_src_learning: cdktf.numberToTerraform(this._disableDelayDynamicSrcLearning),
      disable_on_reboot: cdktf.numberToTerraform(this._disableOnReboot),
      disallow_rst_ack_in_syn_auth: cdktf.numberToTerraform(this._disallowRstAckInSynAuth),
      enable_now: cdktf.numberToTerraform(this._enableNow),
      fast_path_disable: cdktf.numberToTerraform(this._fastPathDisable),
      force_routing_on_transp: cdktf.numberToTerraform(this._forceRoutingOnTransp),
      force_traffic_to_same_blade_disable: cdktf.numberToTerraform(this._forceTrafficToSameBladeDisable),
      hw_blocking_enable: cdktf.numberToTerraform(this._hwBlockingEnable),
      hw_blocking_threshold_limit: cdktf.numberToTerraform(this._hwBlockingThresholdLimit),
      id: cdktf.stringToTerraform(this._id),
      mpls: cdktf.numberToTerraform(this._mpls),
      non_zero_win_size_syncookie: cdktf.numberToTerraform(this._nonZeroWinSizeSyncookie),
      pkt_rate_limit_on_reassemble: cdktf.stringToTerraform(this._pktRateLimitOnReassemble),
      progression_tracking: cdktf.stringToTerraform(this._progressionTracking),
      rate_interval: cdktf.stringToTerraform(this._rateInterval),
      rate_limit_sync_interval: cdktf.numberToTerraform(this._rateLimitSyncInterval),
      rexmit_syn_log: cdktf.numberToTerraform(this._rexmitSynLog),
      src_dst_entry_limit: cdktf.stringToTerraform(this._srcDstEntryLimit),
      src_hash_function: cdktf.stringToTerraform(this._srcHashFunction),
      src_ip_hash_bit: cdktf.numberToTerraform(this._srcIpHashBit),
      src_ipv6_hash_bit: cdktf.numberToTerraform(this._srcIpv6HashBit),
      src_zone_port_entry_limit: cdktf.stringToTerraform(this._srcZonePortEntryLimit),
      szp_clist_warn_threshold: cdktf.numberToTerraform(this._szpClistWarnThreshold),
      szp_warn_exceed_enable: cdktf.numberToTerraform(this._szpWarnExceedEnable),
      szp_warn_threshold: cdktf.numberToTerraform(this._szpWarnThreshold),
      toggle: cdktf.stringToTerraform(this._toggle),
      use_route: cdktf.numberToTerraform(this._useRoute),
      uuid: cdktf.stringToTerraform(this._uuid),
      vxlan_outbound_check: cdktf.stringToTerraform(this._vxlanOutboundCheck),
      fast_aging: ddosProtectionFastAgingToTerraform(this._fastAging.internalValue),
      ipv6_src_hash_mask_bits: ddosProtectionIpv6SrcHashMaskBitsToTerraform(this._ipv6SrcHashMaskBits.internalValue),
      multi_pu_zone_distribution: ddosProtectionMultiPuZoneDistributionToTerraform(this._multiPuZoneDistribution.internalValue),
      per_service_szp_entry_limit: ddosProtectionPerServiceSzpEntryLimitToTerraform(this._perServiceSzpEntryLimit.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blacklist_reason_tracking: {
        value: cdktf.numberToHclTerraform(this._blacklistReasonTracking),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      close_sess_for_unauth_src_without_rst: {
        value: cdktf.numberToHclTerraform(this._closeSessForUnauthSrcWithoutRst),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_advanced_core_analysis: {
        value: cdktf.numberToHclTerraform(this._disableAdvancedCoreAnalysis),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_delay_dynamic_src_learning: {
        value: cdktf.numberToHclTerraform(this._disableDelayDynamicSrcLearning),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_on_reboot: {
        value: cdktf.numberToHclTerraform(this._disableOnReboot),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disallow_rst_ack_in_syn_auth: {
        value: cdktf.numberToHclTerraform(this._disallowRstAckInSynAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_now: {
        value: cdktf.numberToHclTerraform(this._enableNow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fast_path_disable: {
        value: cdktf.numberToHclTerraform(this._fastPathDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      force_routing_on_transp: {
        value: cdktf.numberToHclTerraform(this._forceRoutingOnTransp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      force_traffic_to_same_blade_disable: {
        value: cdktf.numberToHclTerraform(this._forceTrafficToSameBladeDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hw_blocking_enable: {
        value: cdktf.numberToHclTerraform(this._hwBlockingEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hw_blocking_threshold_limit: {
        value: cdktf.numberToHclTerraform(this._hwBlockingThresholdLimit),
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
      mpls: {
        value: cdktf.numberToHclTerraform(this._mpls),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      non_zero_win_size_syncookie: {
        value: cdktf.numberToHclTerraform(this._nonZeroWinSizeSyncookie),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pkt_rate_limit_on_reassemble: {
        value: cdktf.stringToHclTerraform(this._pktRateLimitOnReassemble),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      progression_tracking: {
        value: cdktf.stringToHclTerraform(this._progressionTracking),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_interval: {
        value: cdktf.stringToHclTerraform(this._rateInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_limit_sync_interval: {
        value: cdktf.numberToHclTerraform(this._rateLimitSyncInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rexmit_syn_log: {
        value: cdktf.numberToHclTerraform(this._rexmitSynLog),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      src_dst_entry_limit: {
        value: cdktf.stringToHclTerraform(this._srcDstEntryLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_hash_function: {
        value: cdktf.stringToHclTerraform(this._srcHashFunction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_ip_hash_bit: {
        value: cdktf.numberToHclTerraform(this._srcIpHashBit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      src_ipv6_hash_bit: {
        value: cdktf.numberToHclTerraform(this._srcIpv6HashBit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      src_zone_port_entry_limit: {
        value: cdktf.stringToHclTerraform(this._srcZonePortEntryLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      szp_clist_warn_threshold: {
        value: cdktf.numberToHclTerraform(this._szpClistWarnThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      szp_warn_exceed_enable: {
        value: cdktf.numberToHclTerraform(this._szpWarnExceedEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      szp_warn_threshold: {
        value: cdktf.numberToHclTerraform(this._szpWarnThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      toggle: {
        value: cdktf.stringToHclTerraform(this._toggle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_route: {
        value: cdktf.numberToHclTerraform(this._useRoute),
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
      vxlan_outbound_check: {
        value: cdktf.stringToHclTerraform(this._vxlanOutboundCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fast_aging: {
        value: ddosProtectionFastAgingToHclTerraform(this._fastAging.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosProtectionFastAgingList",
      },
      ipv6_src_hash_mask_bits: {
        value: ddosProtectionIpv6SrcHashMaskBitsToHclTerraform(this._ipv6SrcHashMaskBits.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosProtectionIpv6SrcHashMaskBitsList",
      },
      multi_pu_zone_distribution: {
        value: ddosProtectionMultiPuZoneDistributionToHclTerraform(this._multiPuZoneDistribution.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosProtectionMultiPuZoneDistributionList",
      },
      per_service_szp_entry_limit: {
        value: ddosProtectionPerServiceSzpEntryLimitToHclTerraform(this._perServiceSzpEntryLimit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosProtectionPerServiceSzpEntryLimitList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
