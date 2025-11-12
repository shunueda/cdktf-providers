// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_global
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6Nat64GlobalConfig extends cdktf.TerraformMetaArguments {
  /**
  * All packet sizes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_global#all Cgnv6Nat64Global#all}
  */
  readonly all?: number;
  /**
  * Enable non-zero ID field in IPv4 header if no IPv6 fragment & IPv4 pkt size is more than 88 & less than or equal to 1280 bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_global#force_non_zero_ipv4_id Cgnv6Nat64Global#force_non_zero_ipv4_id}
  */
  readonly forceNonZeroIpv4Id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_global#id Cgnv6Nat64Global#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User Quota Prefix Length (Default: 128)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_global#user_quota_prefix_length Cgnv6Nat64Global#user_quota_prefix_length}
  */
  readonly userQuotaPrefixLength?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_global#uuid Cgnv6Nat64Global#uuid}
  */
  readonly uuid?: string;
  /**
  * icmp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_global#icmp Cgnv6Nat64Global#icmp}
  */
  readonly icmp?: Cgnv6Nat64GlobalIcmp;
  /**
  * inside block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_global#inside Cgnv6Nat64Global#inside}
  */
  readonly inside?: Cgnv6Nat64GlobalInside;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_global#sampling_enable Cgnv6Nat64Global#sampling_enable}
  */
  readonly samplingEnable?: Cgnv6Nat64GlobalSamplingEnable[] | cdktf.IResolvable;
  /**
  * tcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_global#tcp Cgnv6Nat64Global#tcp}
  */
  readonly tcp?: Cgnv6Nat64GlobalTcp;
}
export interface Cgnv6Nat64GlobalIcmp {
  /**
  * 'host-unreachable': Send ICMP destination host unreachable; 'admin-filtered': Send ICMP admin filtered; 'disable': Disable ICMP port unavailable message (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_global#send_on_port_unavailable Cgnv6Nat64Global#send_on_port_unavailable}
  */
  readonly sendOnPortUnavailable?: string;
  /**
  * 'host-unreachable': Send ICMP destination host unreachable; 'admin-filtered': Send ICMP admin filtered (default); 'disable': Disable ICMP quota exceeded message;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_global#send_on_user_quota_exceeded Cgnv6Nat64Global#send_on_user_quota_exceeded}
  */
  readonly sendOnUserQuotaExceeded?: string;
}

export function cgnv6Nat64GlobalIcmpToTerraform(struct?: Cgnv6Nat64GlobalIcmpOutputReference | Cgnv6Nat64GlobalIcmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    send_on_port_unavailable: cdktf.stringToTerraform(struct!.sendOnPortUnavailable),
    send_on_user_quota_exceeded: cdktf.stringToTerraform(struct!.sendOnUserQuotaExceeded),
  }
}


export function cgnv6Nat64GlobalIcmpToHclTerraform(struct?: Cgnv6Nat64GlobalIcmpOutputReference | Cgnv6Nat64GlobalIcmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    send_on_port_unavailable: {
      value: cdktf.stringToHclTerraform(struct!.sendOnPortUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_on_user_quota_exceeded: {
      value: cdktf.stringToHclTerraform(struct!.sendOnUserQuotaExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6Nat64GlobalIcmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6Nat64GlobalIcmp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sendOnPortUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendOnPortUnavailable = this._sendOnPortUnavailable;
    }
    if (this._sendOnUserQuotaExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendOnUserQuotaExceeded = this._sendOnUserQuotaExceeded;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6Nat64GlobalIcmp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sendOnPortUnavailable = undefined;
      this._sendOnUserQuotaExceeded = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sendOnPortUnavailable = value.sendOnPortUnavailable;
      this._sendOnUserQuotaExceeded = value.sendOnUserQuotaExceeded;
    }
  }

  // send_on_port_unavailable - computed: false, optional: true, required: false
  private _sendOnPortUnavailable?: string; 
  public get sendOnPortUnavailable() {
    return this.getStringAttribute('send_on_port_unavailable');
  }
  public set sendOnPortUnavailable(value: string) {
    this._sendOnPortUnavailable = value;
  }
  public resetSendOnPortUnavailable() {
    this._sendOnPortUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendOnPortUnavailableInput() {
    return this._sendOnPortUnavailable;
  }

  // send_on_user_quota_exceeded - computed: false, optional: true, required: false
  private _sendOnUserQuotaExceeded?: string; 
  public get sendOnUserQuotaExceeded() {
    return this.getStringAttribute('send_on_user_quota_exceeded');
  }
  public set sendOnUserQuotaExceeded(value: string) {
    this._sendOnUserQuotaExceeded = value;
  }
  public resetSendOnUserQuotaExceeded() {
    this._sendOnUserQuotaExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendOnUserQuotaExceededInput() {
    return this._sendOnUserQuotaExceeded;
  }
}
export interface Cgnv6Nat64GlobalInsideSource {
  /**
  * Class-list to match for NAT64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_global#class_list Cgnv6Nat64Global#class_list}
  */
  readonly classList?: string;
}

export function cgnv6Nat64GlobalInsideSourceToTerraform(struct?: Cgnv6Nat64GlobalInsideSourceOutputReference | Cgnv6Nat64GlobalInsideSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_list: cdktf.stringToTerraform(struct!.classList),
  }
}


export function cgnv6Nat64GlobalInsideSourceToHclTerraform(struct?: Cgnv6Nat64GlobalInsideSourceOutputReference | Cgnv6Nat64GlobalInsideSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_list: {
      value: cdktf.stringToHclTerraform(struct!.classList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6Nat64GlobalInsideSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6Nat64GlobalInsideSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classList !== undefined) {
      hasAnyValues = true;
      internalValueResult.classList = this._classList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6Nat64GlobalInsideSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._classList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._classList = value.classList;
    }
  }

  // class_list - computed: false, optional: true, required: false
  private _classList?: string; 
  public get classList() {
    return this.getStringAttribute('class_list');
  }
  public set classList(value: string) {
    this._classList = value;
  }
  public resetClassList() {
    this._classList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListInput() {
    return this._classList;
  }
}
export interface Cgnv6Nat64GlobalInside {
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_global#source Cgnv6Nat64Global#source}
  */
  readonly source?: Cgnv6Nat64GlobalInsideSource;
}

export function cgnv6Nat64GlobalInsideToTerraform(struct?: Cgnv6Nat64GlobalInsideOutputReference | Cgnv6Nat64GlobalInside): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: cgnv6Nat64GlobalInsideSourceToTerraform(struct!.source),
  }
}


export function cgnv6Nat64GlobalInsideToHclTerraform(struct?: Cgnv6Nat64GlobalInsideOutputReference | Cgnv6Nat64GlobalInside): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: cgnv6Nat64GlobalInsideSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6Nat64GlobalInsideSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6Nat64GlobalInsideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6Nat64GlobalInside | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6Nat64GlobalInside | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._source.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._source.internalValue = value.source;
    }
  }

  // source - computed: false, optional: true, required: false
  private _source = new Cgnv6Nat64GlobalInsideSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: Cgnv6Nat64GlobalInsideSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}
export interface Cgnv6Nat64GlobalSamplingEnable {
  /**
  * 'all': all; 'total_tcp_allocated': Total TCP Ports Allocated; 'total_tcp_freed': Total TCP Ports Freed; 'total_udp_allocated': Total UDP Ports Allocated; 'total_udp_freed': Total UDP Ports Freed; 'total_icmp_allocated': Total ICMP Ports Allocated; 'total_icmp_freed': Total ICMP Ports Freed; 'data_session_created': Data Session Created; 'data_session_freed': Data Session Freed; 'user_quota_created': User-Quota Created; 'user_quota_put_in_del_q': User-Quota Freed; 'user_quota_failure': User-Quota Creation Failed; 'nat_port_unavailable_tcp': TCP NAT Port Unavailable; 'nat_port_unavailable_udp': UDP NAT Port Unavailable; 'nat_port_unavailable_icmp': ICMP NAT Port Unavailable; 'new_user_resource_unavailable': New User NAT Resource Unavailable; 'tcp_user_quota_exceeded': TCP User-Quota Exceeded; 'udp_user_quota_exceeded': UDP User-Quota Exceeded; 'icmp_user_quota_exceeded': ICMP User-Quota Exceeded; 'extended_quota_matched': Extended User-Quota Matched; 'extended_quota_exceeded': Extended User-Quota Exceeded; 'data_sesn_user_quota_exceeded': Data Session User-Quota Exceeded; 'data_sesn_rate_user_quota_exceeded': Conn Rate User-Quota Exceeded; 'tcp_fullcone_created': TCP Full-cone Session Created; 'tcp_fullcone_freed': TCP Full-cone Session Freed; 'udp_fullcone_created': UDP Full-cone Session Created; 'udp_fullcone_freed': UDP Full-cone Session Freed; 'fullcone_failure': Full-cone Session Creation Failed; 'hairpin': Hairpin Session Created; 'fullcone_self_hairpinning_drop': Self-Hairpinning Drop; 'endpoint_indep_map_match': Endpoint-Independent Mapping Matched; 'endpoint_indep_filter_match': Endpoint-Independent Filtering Matched; 'inbound_filtered': Endpoint-Dependent Filtering Drop; 'eif_limit_exceeded': Endpoint-Independent Filtering Inbound Limit Exceeded; 'total_tcp_overloaded': TCP Port Overloaded; 'total_udp_overloaded': UDP Port Overloaded; 'port_overloading_smp_inserted_tcp': TCP Port Overloading Session Created; 'port_overloading_smp_inserted_udp': UDP Port Overloading Session Created; 'port_overloading_smp_free_tcp': TCP Port Overloading Session Freed; 'port_overloading_smp_free_udp': UDP Port Overloading Session Freed; 'nat_pool_unusable': NAT Pool Unusable; 'ha_nat_pool_unusable': HA NAT Pool Unusable; 'ha_nat_pool_batch_type_mismatch': HA NAT Pool Batch Type Mismatch; 'no_radius_profile_match': No RADIUS Profile Match; 'l3': Layer 3 Forwarded Packets; 'source_matches_prefix': Source Address Prefix Match Drop; 'lid_drop': LSN LID Drop; 'lid_pass_through': LSN LID Pass-through; 'no_class_list_match': No Class-List Match; 'user_quota_mem_allocated': User-Quota Memory Allocated; 'user_quota_mem_freed': User-Quota Memory Freed; 'user_quota_created_shadow': Total User-Quota Created; 'quota_marked_deleted': User-Quota Marked Deleted; 'quota_delete_not_in_bucket': User-Quota Delete Not In Bucket; 'user_quota_put_in_del_q_shadow': Total User-Quota Put In Del Q; 'prefix_quota_created': Total Prefix Quota Created; 'prefix_quota_put_in_del_q': Total Prefix Quota Freed; 'prefix_quota_failure': Total Prefix Quota Failure; 'total_user_quota_created': Total Quota Structure Created; 'total_user_quota_put_in_del_q': Total Quota Structure Freed; 'total_user_quota_failure': Total Quota Structure Failure; 'tcp_out_of_state_rst_sent': Total Out of State TCP RST sent; 'tcp_out_of_state_rst_dropped': Total Out of State TCP RST dropped; 'icmp_out_of_state_uqe_admin_filtered_sent': Total User Quota Exceeded ICMP admin filtered sent; 'icmp_out_of_state_uqe_host_unreachable_sent': Total User Quota Exceeded ICMP host unreachable sent; 'icmp_out_of_state_uqe_dropped': Total User Queue Exceeded ICMP notification dropped; 'user_quota_not_found': User-Quota Not Found; 'tcp_fullcone_created_shadow': Total TCP Full-cone sessions created; 'tcp_fullcone_freed_shadow': Total TCP Full-cone sessions freed; 'udp_fullcone_created_shadow': Total UDP Full-cone sessions created; 'udp_fullcone_freed_shadow': Total UDP Full-cone sessions freed; 'udp_alg_fullcone_created': Total UDP ALG Full-cone sessions created; 'udp_alg_fullcone_freed': Total UDP ALG Full-cone sessions freed; 'fullcone_created': Total Full-cone sessions created; 'fullcone_freed': Total Full-cone sessions freed; 'data_session_created_shadow': Total Data Sessions Created; 'data_session_freed_shadow': Total Data Sessions Freed; 'data_session_user_quota_mismatch': Data Session Counter Per User Mismatch; 'extended_quota_mismatched': Extended User-Quota Mismatched; 'nat_port_unavailable_other': Other NAT Port Unavailable; 'nat_port_unavailable': Total NAT Port Unavailable; 'new_user_resource_unavailable_tcp': TCP New User NAT Resource Unavailable; 'new_user_resource_unavailable_udp': UDP New User NAT Resource Unavailable; 'new_user_resource_unavailable_icmp': ICMP New User NAT Resource Unavailable; 'new_user_resource_unavailable_other': Other New User NAT Resource Unavailable; 'total_tcp_allocated_shadow': Total TCP Ports Allocated; 'total_tcp_freed_shadow': Total TCP Ports Freed; 'total_udp_allocated_shadow': Total UDP Ports Allocated; 'total_udp_freed_shadow': Total UDP Ports Freed; 'total_icmp_allocated_shadow': Total ICMP Ports Allocated; 'total_icmp_freed_shadow': Total ICMP Ports Freed; 'udp_alg_no_quota': UDP ALG User-Quota Not Found; 'udp_alg_eim_mismatch': UDP ALG Endpoint-Independent Mapping Mismatch; 'udp_alg_no_nat_ip': UDP ALG User-Quota Unknown NAT IP; 'udp_alg_alloc_failure': UDP ALG Port Allocation Failure; 'sip_alg_no_quota': SIP ALG User-Quota Not Found; 'sip_alg_quota_inc_failure': SIP ALG User-Quota Exceeded; 'sip_alg_no_nat_ip': SIP ALG Unknown NAT IP; 'sip_alg_reuse_contact_fullcone': SIP ALG Reuse Contact Full-cone Session; 'sip_alg_contact_fullcone_mismatch': SIP ALG Contact Full-cone Session Mismatch; 'sip_alg_alloc_contact_port_failure': SIP ALG Alloc Contact NAT Port Failure; 'sip_alg_create_contact_fullcone_failure': SIP ALG Create Contact Full-cone Session Failure; 'sip_alg_release_contact_port_failure': SIP ALG Release Contact NAT Port Failure; 'sip_alg_single_rtp_fullcone': SIP ALG Single RTP Full-cone Found; 'sip_alg_single_rtcp_fullcone': SIP ALG Single RTCP Full-cone Found; 'sip_alg_rtcp_fullcone_mismatch': SIP ALG RTCP Full-cone NAT Port Mismatch; 'sip_alg_reuse_rtp_rtcp_fullcone': SIP ALG Reuse RTP/RTCP Full-cone Session; 'sip_alg_alloc_rtp_rtcp_port_failure': SIP ALG Alloc RTP/RTCP NAT Ports Failure; 'sip_alg_alloc_single_port_failure': SIP ALG Alloc Single RTP or RTCP NAT Port Failure; 'sip_alg_create_single_fullcone_failure': SIP ALG Create Single RTP or RTCP Full-cone Session Failure; 'sip_alg_create_rtp_fullcone_failure': SIP ALG Create RTP Full-cone Session Failure; 'sip_alg_create_rtcp_fullcone_failure': SIP ALG Create RTCP Full-cone Session Failure; 'sip_alg_port_pair_alloc_from_consecutive': SIP ALG Port Pair Allocated From Consecutive; 'sip_alg_port_pair_alloc_from_partition': SIP ALG Port Pair Allocated From Partition; 'sip_alg_port_pair_alloc_from_pool_port_batch': SIP ALG Port Pair Allocated From Pool Port Batch; 'sip_alg_port_pair_alloc_from_quota_consecutive': SIP ALG Port Pair Allocated From Quota Consecutive; 'sip_alg_port_pair_alloc_from_quota_partition': SIP ALG Port Pair Allocated From Quota Partition; 'sip_alg_port_pair_alloc_from_quota_partition_error': SIP ALG Port Pair Allocated From Quota Partition Error; 'sip_alg_port_pair_alloc_from_quota_pool_port_batch': SIP ALG Port Pair Allocated From Quota Pool Port Batch; 'sip_alg_port_pair_alloc_from_quota_pool_port_batch_with_frag': SIP ALG Port Pair Allocated From Quota Port Batch Version 2 with Frag Free Ports;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_global#counters1 Cgnv6Nat64Global#counters1}
  */
  readonly counters1?: string;
  /**
  * 'h323_alg_no_quota': H323 ALG User-Quota Not Found; 'h323_alg_quota_inc_failure': H323 ALG User-Quota Exceeded; 'h323_alg_no_nat_ip': H323 ALG Unknown NAT IP; 'h323_alg_reuse_fullcone': H323 ALG Reuse Full-cone Session; 'h323_alg_fullcone_mismatch': H323 ALG Full-cone Session Mismatch; 'h323_alg_alloc_port_failure': H323 ALG Alloc NAT Port Failure; 'h323_alg_create_fullcone_failure': H323 ALG Create Full-cone Session Failure; 'h323_alg_release_port_failure': H323 ALG Release NAT Port Failure; 'h323_alg_single_rtp_fullcone': H323 ALG Single RTP Full-cone Found; 'h323_alg_single_rtcp_fullcone': H323 ALG Single RTCP Full-cone Found; 'h323_alg_rtcp_fullcone_mismatch': H323 ALG RTCP Full-cone NAT Port Mismatch; 'h323_alg_reuse_rtp_rtcp_fullcone': H323 ALG Reuse RTP/RTCP Full-cone Session; 'h323_alg_alloc_rtp_rtcp_port_failure': H323 ALG Alloc RTP/RTCP NAT Ports Failure; 'h323_alg_alloc_single_port_failure': H323 ALG Alloc Single RTP or RTCP NAT Port Failure; 'h323_alg_create_single_fullcone_failure': H323 ALG Create Single RTP or RTCP Full-cone Session Failure; 'h323_alg_create_rtp_fullcone_failure': H323 ALG Create RTP Full-cone Session Failure; 'h323_alg_create_rtcp_fullcone_failure': H323 ALG Create RTCP Full-cone Session Failure; 'h323_alg_port_pair_alloc_from_consecutive': H323 ALG Port Pair Allocated From Consecutive; 'h323_alg_port_pair_alloc_from_partition': H323 ALG Port Pair Allocated From Partition; 'h323_alg_port_pair_alloc_from_pool_port_batch': H323 ALG Port Pair Allocated From Pool Port Batch; 'h323_alg_port_pair_alloc_from_quota_consecutive': H323 ALG Port Pair Allocated From Quota Consecutive; 'h323_alg_port_pair_alloc_from_quota_partition': H323 ALG Port Pair Allocated From Quota Partition; 'h323_alg_port_pair_alloc_from_quota_partition_error': H323 ALG Port Pair Allocated From Quota Partition Error; 'h323_alg_port_pair_alloc_from_quota_pool_port_batch': H323 ALG Port Pair Allocated From Quota Pool Port Batch; 'port_batch_quota_extension_alloc_failure': Port Batch Extension Alloc Failure (No memory); 'port_batch_free_quota_not_found': Port Batch Quota Not Found on Free; 'port_batch_free_port_not_found': Port Batch Port Not Found on Free; 'port_batch_free_wrong_partition': Port Batch Free Wrong Partition; 'radius_query_quota_ext_alloc_failure': RADIUS Query Container Alloc (No Memoty); 'radius_query_quota_ext_alloc_race_free': RADIUS Query Container Alloc Race Free; 'quota_extension_added': Quota Extension Added to Quota; 'quota_extension_removed': Quota Extension Removed from Quota; 'quota_extension_remove_not_found': Quota Extension Not Found on Remove; 'ha_sync_port_batch_sent': HA Port Batch Extension Sync Sent; 'ha_sync_port_batch_rcv': HA Port Batch Extension Sync Received; 'ha_send_port_batch_not_found': HA Port Batch Not Found on Sync Send; 'ha_rcv_port_not_in_port_batch': HA Port Not in Port Batch on Sync Rcv; 'bad_port_to_free': Freeing Bad Port; 'consecutive_port_free': Port Freed from Consecutive Pool; 'partition_port_free': Port Freed from Partition; 'pool_port_batch_port_free': Port Freed from Pool Port Batch; 'port_allocated_from_quota_consecutive': Port Allocated from Quota Consecutive; 'port_allocated_from_quota_partition': Port Allocated from Quota Partition; 'port_allocated_from_quota_pool_port_batch': Port Allocated from Quota Pool Port Batch; 'port_freed_from_quota_consecutive': Port Freed from Quota Consecutive; 'port_freed_from_quota_partition': Port Freed from Quota Partition; 'port_freed_from_quota_pool_port_batch': Port Freed from Quota Pool Port Batch; 'port_batch_allocated_to_quota': Port Batch Allocated to Quota; 'port_batch_freed_from_quota': Port Batch Freed From Quota; 'specific_port_allocated_from_quota_consecutive': Specific Port Allocated from Quota Consecutive; 'specific_port_allocated_from_quota_partition': Specific Port Allocated from Quota Partition; 'specific_port_allocated_from_quota_pool_port_batch': Specific Port Allocated from Quota Pool Port Batch; 'port_batch_container_alloc_failure': Port Batch Container Alloc Out of Memory; 'port_batch_container_alloc_race_free': Port Batch Container Race Free; 'port_overloading_destination_conflict': Port Overloading Destination Conflict; 'port_overloading_out_of_memory': Port Overloading Out of Memory; 'port_overloading_assign_user': Port Overloading Port Assign User; 'port_overloading_assign_user_port_batch': Port Overloading Port Assign User Port Batch; 'port_overloading_inc': Port Overloading Port Increment; 'port_overloading_dec_on_conflict': Port Overloading Port Decrement on Conflict; 'port_overloading_dec_on_free': Port Overloading Port Decrement on Free; 'port_overloading_free_port_on_conflict': Port Overloading Free Port on Conflict; 'port_overloading_free_port_batch_on_conflict': Port Overloading Free Port Batch on Conflict; 'port_overloading_inc_overflow': Port Overloading Inc Overflow; 'port_overloading_attempt_consecutive_ports': Port Overloading on Consecutive Ports; 'port_overloading_attempt_same_partition': Port Overloading on Same Partition; 'port_overloading_attempt_diff_partition': Port Overloading on Different Partition; 'port_overloading_attempt_failed': Port Overloading Attempt Failed; 'port_overloading_conn_free_retry_lookup': Port Overloading Conn Free Retry Lookup; 'port_overloading_conn_free_not_found': Port Overloading Conn Free Not Found; 'port_overloading_smp_mem_allocated': Port Overloading SMP Session Allocated; 'port_overloading_smp_mem_freed': Port Overloading SMP Session Freed; 'port_overloading_smp_inserted': Port Overloading SMP Inserted; 'port_overloading_smp_inserted_tcp_shadow': Total Port Overloading SMP TCP Inserted; 'port_overloading_smp_inserted_udp_shadow': Total Port Overloading SMP UDP Inserted; 'port_overloading_smp_free_tcp_shadow': Total Port Overloading SMP TCP Freed; 'port_overloading_smp_free_udp_shadow': Total Port Overloading SMP UDP Freed; 'port_overloading_smp_put_in_del_q_from_conn': Port Overloading SMP Free From Conn; 'port_overloading_smp_free_dec_failure': Port Overloading SMP Free Dec Failure; 'port_overloading_smp_free_no_quota': Port Overloading SMP Free No Quota; 'port_overloading_smp_free_port': Port Overloading SMP Free Port; 'port_overloading_smp_free_port_from_quota': Port Overloading SMP Free Port From Quota; 'port_overloading_for_no_ports': Port Overloading for No Ports; 'port_overloading_for_no_ports_success': Port Overloading for No Ports Success; 'port_overloading_for_quota_exceeded': Port Overloading for Quota Exceeded; 'port_overloading_for_quota_exceeded_success': Port Overloading for Quota Exceeded Success; 'port_overloading_for_quota_exceeded_race': Port Overloading for Quota Exceeded Race; 'port_overloading_for_quota_exceeded_race_success': Port Overloading for Quota Exceeded Race Success; 'port_overloading_for_new_user': Port Overloading for New User; 'port_overloading_for_new_user_success': Port Overloading for New User Success; 'ha_port_overloading_attempt_failed': HA Port Overloading Attempt Failed; 'ha_port_overloading_for_no_ports': HA Port Overloading for No Ports; 'ha_port_overloading_for_no_ports_success': HA Port Overloading for No Ports Success; 'ha_port_overloading_for_quota_exceeded': HA Port Overloading for Quota Exceeded; 'ha_port_overloading_for_quota_exceeded_success': HA Port Overloading for Quota Exceeded Success; 'ha_port_overloading_for_quota_exceeded_race': HA Port Overloading for Quota Exceeded Race; 'ha_port_overloading_for_quota_exceeded_race_success': HA Port Overloading for Quota Exceeded Race Success; 'ha_port_overloading_for_new_user': HA Port Overloading for New User; 'ha_port_overloading_for_new_user_success': HA Port Overloading for New User Success;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_global#counters2 Cgnv6Nat64Global#counters2}
  */
  readonly counters2?: string;
  /**
  * 'nat_pool_force_delete': NAT Pool Force Delete; 'quota_ext_too_many': Quota Ext Too Many; 'nat_pool_not_found_on_free': NAT Pool Not Found on Free; 'standby_class_list_drop': Standby Class-List Drop; 'dst_prefix_mismatch': Destination Prefix Mismatch Drop; 'fullcone_inbound_nat_pool_mismatch': Full-cone Session NAT Pool Mismatch; '6rd_no_match_domain_drop': Sixrd Packets Domain Not Found; 'ha_prefix_not_found': HA No Matching Prefix Found; 'nat_pool_attempt_adding_multiple_free_batches': Attempt Adding Multiple Free Batches to Quota; 'nat_pool_add_free_batch_failed': Add Batch to Quota Failed; 'mgcp_alg_no_quota': MGCP ALG User-Quota Not Found; 'mgcp_alg_quota_inc_failure': MGCP ALG User-Quota Exceeded; 'mgcp_alg_no_nat_ip': MGCP ALG Unknown NAT IP; 'mgcp_alg_reuse_fullcone': MGCP ALG Reuse Full-cone Session; 'mgcp_alg_fullcone_mismatch': MGCP ALG Full-cone Session Mismatch; 'mgcp_alg_alloc_port_failure': MGCP ALG Alloc NAT Port Failure; 'mgcp_alg_create_fullcone_failure': MGCP ALG Create Full-cone Session Failure; 'mgcp_alg_release_port_failure': MGCP ALG Release NAT Port Failure; 'mgcp_alg_single_rtp_fullcone': MGCP ALG Single RTP Full-cone Found; 'mgcp_alg_single_rtcp_fullcone': MGCP ALG Single RTCP Full-cone Found; 'mgcp_alg_rtcp_fullcone_mismatch': MGCP ALG RTCP Full-cone NAT Port Mismatch; 'mgcp_alg_reuse_rtp_rtcp_fullcone': MGCP ALG Reuse RTP/RTCP Full-cone Session; 'mgcp_alg_alloc_rtp_rtcp_port_failure': MGCP ALG Alloc RTP/RTCP NAT Ports Failure; 'mgcp_alg_alloc_single_port_failure': MGCP ALG Alloc Single RTP or RTCP NAT Port Failure; 'mgcp_alg_create_single_fullcone_failure': MGCP ALG Create Single RTP or RTCP Full-cone Session Failure; 'mgcp_alg_create_rtp_fullcone_failure': MGCP ALG Create RTP Full-cone Session Failure; 'mgcp_alg_create_rtcp_fullcone_failure': MGCP ALG Create RTCP Full-cone Session Failure; 'mgcp_alg_port_pair_alloc_from_consecutive': MGCP ALG Port Pair Allocated From Consecutive; 'mgcp_alg_port_pair_alloc_from_partition': MGCP ALG Port Pair Allocated From Partition; 'mgcp_alg_port_pair_alloc_from_pool_port_batch': MGCP ALG Port Pair Allocated From Pool Port Batch; 'mgcp_alg_port_pair_alloc_from_quota_consecutive': MGCP ALG Port Pair Allocated From Quota Consecutive; 'mgcp_alg_port_pair_alloc_from_quota_partition': MGCP ALG Port Pair Allocated From Quota Partition; 'mgcp_alg_port_pair_alloc_from_quota_partition_error': MGCP ALG Port Pair Allocated From Quota Partition Error; 'mgcp_alg_port_pair_alloc_from_quota_pool_port_batch': MGCP ALG Port Pair Allocated From Quota Pool Port Batch; 'user_quota_unusable_drop': User-Quota Unusable Drop; 'user_quota_unusable': User-Quota Marked Unusable; 'nat_pool_same_port_batch_udp_failed': Simultaneous Batch Allocation UDP Port Allocation Failed; 'adc_port_allocation_failed': ADC Port Allocation Failed; 'adc_port_allocation_ineligible': ADC Port Allocation Not Allowed; 'fwd_ingress_packets_tcp': Forward Ingress Packets TCP; 'fwd_egress_packets_tcp': Forward Egress Packets TCP; 'rev_ingress_packets_tcp': Reverse Ingress Packets TCP; 'rev_egress_packets_tcp': Reverse Egress Packets TCP; 'fwd_ingress_bytes_tcp': Forward Ingress Bytes TCP; 'fwd_egress_bytes_tcp': Forward Egress Bytes TCP; 'rev_ingress_bytes_tcp': Reverse Ingress Bytes TCP; 'rev_egress_bytes_tcp': Reverse Egress Bytes TCP; 'fwd_ingress_packets_udp': Forward Ingress Packets UDP; 'fwd_egress_packets_udp': Forward Egress Packets UDP; 'rev_ingress_packets_udp': Reverse Ingress Packets UDP; 'rev_egress_packets_udp': Reverse Egress Packets UDP; 'fwd_ingress_bytes_udp': Forward Ingress Bytes UDP; 'fwd_egress_bytes_udp': Forward Egress Bytes UDP; 'rev_ingress_bytes_udp': Reverse Ingress Bytes UDP; 'rev_egress_bytes_udp': Reverse Egress Bytes UDP; 'fwd_ingress_packets_icmp': Forward Ingress Packets ICMP; 'fwd_egress_packets_icmp': Forward Egress Packets ICMP; 'rev_ingress_packets_icmp': Reverse Ingress Packets ICMP; 'rev_egress_packets_icmp': Reverse Egress Packets ICMP; 'fwd_ingress_bytes_icmp': Forward Ingress Bytes ICMP; 'fwd_egress_bytes_icmp': Forward Egress Bytes ICMP; 'rev_ingress_bytes_icmp': Reverse Ingress Bytes ICMP; 'rev_egress_bytes_icmp': Reverse Egress Bytes ICMP; 'fwd_ingress_packets_others': Forward Ingress Packets OTHERS; 'fwd_egress_packets_others': Forward Egress Packets OTHERS; 'rev_ingress_packets_others': Reverse Ingress Packets OTHERS; 'rev_egress_packets_others': Reverse Egress Packets OTHERS; 'fwd_ingress_bytes_others': Forward Ingress Bytes OTHERS; 'fwd_egress_bytes_others': Forward Egress Bytes OTHERS; 'rev_ingress_bytes_others': Reverse Ingress Bytes OTHERS; 'rev_egress_bytes_others': Reverse Egress Bytes OTHERS; 'fwd_ingress_pkt_size_range1': Forward Ingress Packet size between 0 and 200; 'fwd_ingress_pkt_size_range2': Forward Ingress Packet size between 201 and 800; 'fwd_ingress_pkt_size_range3': Forward Ingress Packet size between 801 and 1550; 'fwd_ingress_pkt_size_range4': Forward Ingress Packet size between 1551 and 9000; 'fwd_egress_pkt_size_range1': Forward Egress Packet size between 0 and 200; 'fwd_egress_pkt_size_range2': Forward Egress Packet size between 201 and 800; 'fwd_egress_pkt_size_range3': Forward Egress Packet size between 801 and 1550; 'fwd_egress_pkt_size_range4': Forward Egress Packet size between 1551 and 9000; 'rev_ingress_pkt_size_range1': Reverse Ingress Packet size between 0 and 200; 'rev_ingress_pkt_size_range2': Reverse Ingress Packet size between 201 and 800; 'rev_ingress_pkt_size_range3': Reverse Ingress Packet size between 801 and 1550; 'rev_ingress_pkt_size_range4': Reverse Ingress Packet size between 1551 and 9000; 'rev_egress_pkt_size_range1': Reverse Egress Packet size between 0 and 200; 'rev_egress_pkt_size_range2': Reverse Egress Packet size between 201 and 800; 'rev_egress_pkt_size_range3': Reverse Egress Packet size between 801 and 1550; 'rev_egress_pkt_size_range4': Reverse Egress Packet size between 1551 and 9000; 'prefix_quota_mismatch': Prefix Quota NAT IP Mismatch; 'port_overloading_port_tcp_inserted': Port Overloading NAT Port TCP Inserted; 'port_overloading_port_udp_inserted': Port Overloading NAT Port UDP Inserted; 'port_overloading_port_free_tcp': TCP Port Overloading NAT Port Freed; 'port_overloading_port_free_udp': UDP Port Overloading NAT Port Freed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_global#counters3 Cgnv6Nat64Global#counters3}
  */
  readonly counters3?: string;
}

export function cgnv6Nat64GlobalSamplingEnableToTerraform(struct?: Cgnv6Nat64GlobalSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
    counters2: cdktf.stringToTerraform(struct!.counters2),
    counters3: cdktf.stringToTerraform(struct!.counters3),
  }
}


export function cgnv6Nat64GlobalSamplingEnableToHclTerraform(struct?: Cgnv6Nat64GlobalSamplingEnable | cdktf.IResolvable): any {
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
    counters2: {
      value: cdktf.stringToHclTerraform(struct!.counters2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    counters3: {
      value: cdktf.stringToHclTerraform(struct!.counters3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6Nat64GlobalSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6Nat64GlobalSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    if (this._counters2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters2 = this._counters2;
    }
    if (this._counters3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters3 = this._counters3;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6Nat64GlobalSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
      this._counters2 = undefined;
      this._counters3 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
      this._counters2 = value.counters2;
      this._counters3 = value.counters3;
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

  // counters2 - computed: false, optional: true, required: false
  private _counters2?: string; 
  public get counters2() {
    return this.getStringAttribute('counters2');
  }
  public set counters2(value: string) {
    this._counters2 = value;
  }
  public resetCounters2() {
    this._counters2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters2Input() {
    return this._counters2;
  }

  // counters3 - computed: false, optional: true, required: false
  private _counters3?: string; 
  public get counters3() {
    return this.getStringAttribute('counters3');
  }
  public set counters3(value: string) {
    this._counters3 = value;
  }
  public resetCounters3() {
    this._counters3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters3Input() {
    return this._counters3;
  }
}

export class Cgnv6Nat64GlobalSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : Cgnv6Nat64GlobalSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6Nat64GlobalSamplingEnableOutputReference {
    return new Cgnv6Nat64GlobalSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6Nat64GlobalTcpMssClamp {
  /**
  * Specify the min value allowed for the TCP MSS (Specify the min value allowed for the TCP MSS (default: 476))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_global#min Cgnv6Nat64Global#min}
  */
  readonly min?: number;
  /**
  * 'fixed': Specify a fixed max value for the TCP MSS; 'none': No TCP MSS clamping; 'subtract': Specify the value to subtract from the TCP MSS (default: 20);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_global#mss_clamp_type Cgnv6Nat64Global#mss_clamp_type}
  */
  readonly mssClampType?: string;
  /**
  * Specify the value to subtract from the TCP MSS (default: 20)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_global#mss_subtract Cgnv6Nat64Global#mss_subtract}
  */
  readonly mssSubtract?: number;
  /**
  * The max value allowed for the TCP MSS (default: not configured)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_global#mss_value Cgnv6Nat64Global#mss_value}
  */
  readonly mssValue?: number;
}

export function cgnv6Nat64GlobalTcpMssClampToTerraform(struct?: Cgnv6Nat64GlobalTcpMssClampOutputReference | Cgnv6Nat64GlobalTcpMssClamp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min: cdktf.numberToTerraform(struct!.min),
    mss_clamp_type: cdktf.stringToTerraform(struct!.mssClampType),
    mss_subtract: cdktf.numberToTerraform(struct!.mssSubtract),
    mss_value: cdktf.numberToTerraform(struct!.mssValue),
  }
}


export function cgnv6Nat64GlobalTcpMssClampToHclTerraform(struct?: Cgnv6Nat64GlobalTcpMssClampOutputReference | Cgnv6Nat64GlobalTcpMssClamp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mss_clamp_type: {
      value: cdktf.stringToHclTerraform(struct!.mssClampType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mss_subtract: {
      value: cdktf.numberToHclTerraform(struct!.mssSubtract),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mss_value: {
      value: cdktf.numberToHclTerraform(struct!.mssValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6Nat64GlobalTcpMssClampOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6Nat64GlobalTcpMssClamp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._mssClampType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mssClampType = this._mssClampType;
    }
    if (this._mssSubtract !== undefined) {
      hasAnyValues = true;
      internalValueResult.mssSubtract = this._mssSubtract;
    }
    if (this._mssValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mssValue = this._mssValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6Nat64GlobalTcpMssClamp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._min = undefined;
      this._mssClampType = undefined;
      this._mssSubtract = undefined;
      this._mssValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._min = value.min;
      this._mssClampType = value.mssClampType;
      this._mssSubtract = value.mssSubtract;
      this._mssValue = value.mssValue;
    }
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }

  // mss_clamp_type - computed: false, optional: true, required: false
  private _mssClampType?: string; 
  public get mssClampType() {
    return this.getStringAttribute('mss_clamp_type');
  }
  public set mssClampType(value: string) {
    this._mssClampType = value;
  }
  public resetMssClampType() {
    this._mssClampType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssClampTypeInput() {
    return this._mssClampType;
  }

  // mss_subtract - computed: false, optional: true, required: false
  private _mssSubtract?: number; 
  public get mssSubtract() {
    return this.getNumberAttribute('mss_subtract');
  }
  public set mssSubtract(value: number) {
    this._mssSubtract = value;
  }
  public resetMssSubtract() {
    this._mssSubtract = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssSubtractInput() {
    return this._mssSubtract;
  }

  // mss_value - computed: false, optional: true, required: false
  private _mssValue?: number; 
  public get mssValue() {
    return this.getNumberAttribute('mss_value');
  }
  public set mssValue(value: number) {
    this._mssValue = value;
  }
  public resetMssValue() {
    this._mssValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssValueInput() {
    return this._mssValue;
  }
}
export interface Cgnv6Nat64GlobalTcpResetOnError {
  /**
  * 'disable': Disable send TCP reset on error;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_global#outbound Cgnv6Nat64Global#outbound}
  */
  readonly outbound?: string;
}

export function cgnv6Nat64GlobalTcpResetOnErrorToTerraform(struct?: Cgnv6Nat64GlobalTcpResetOnErrorOutputReference | Cgnv6Nat64GlobalTcpResetOnError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    outbound: cdktf.stringToTerraform(struct!.outbound),
  }
}


export function cgnv6Nat64GlobalTcpResetOnErrorToHclTerraform(struct?: Cgnv6Nat64GlobalTcpResetOnErrorOutputReference | Cgnv6Nat64GlobalTcpResetOnError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    outbound: {
      value: cdktf.stringToHclTerraform(struct!.outbound),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6Nat64GlobalTcpResetOnErrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6Nat64GlobalTcpResetOnError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.outbound = this._outbound;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6Nat64GlobalTcpResetOnError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._outbound = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._outbound = value.outbound;
    }
  }

  // outbound - computed: false, optional: true, required: false
  private _outbound?: string; 
  public get outbound() {
    return this.getStringAttribute('outbound');
  }
  public set outbound(value: string) {
    this._outbound = value;
  }
  public resetOutbound() {
    this._outbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundInput() {
    return this._outbound;
  }
}
export interface Cgnv6Nat64GlobalTcp {
  /**
  * mss_clamp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_global#mss_clamp Cgnv6Nat64Global#mss_clamp}
  */
  readonly mssClamp?: Cgnv6Nat64GlobalTcpMssClamp;
  /**
  * reset_on_error block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_global#reset_on_error Cgnv6Nat64Global#reset_on_error}
  */
  readonly resetOnError?: Cgnv6Nat64GlobalTcpResetOnError;
}

export function cgnv6Nat64GlobalTcpToTerraform(struct?: Cgnv6Nat64GlobalTcpOutputReference | Cgnv6Nat64GlobalTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mss_clamp: cgnv6Nat64GlobalTcpMssClampToTerraform(struct!.mssClamp),
    reset_on_error: cgnv6Nat64GlobalTcpResetOnErrorToTerraform(struct!.resetOnError),
  }
}


export function cgnv6Nat64GlobalTcpToHclTerraform(struct?: Cgnv6Nat64GlobalTcpOutputReference | Cgnv6Nat64GlobalTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mss_clamp: {
      value: cgnv6Nat64GlobalTcpMssClampToHclTerraform(struct!.mssClamp),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6Nat64GlobalTcpMssClampList",
    },
    reset_on_error: {
      value: cgnv6Nat64GlobalTcpResetOnErrorToHclTerraform(struct!.resetOnError),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6Nat64GlobalTcpResetOnErrorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6Nat64GlobalTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6Nat64GlobalTcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mssClamp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mssClamp = this._mssClamp?.internalValue;
    }
    if (this._resetOnError?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetOnError = this._resetOnError?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6Nat64GlobalTcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mssClamp.internalValue = undefined;
      this._resetOnError.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mssClamp.internalValue = value.mssClamp;
      this._resetOnError.internalValue = value.resetOnError;
    }
  }

  // mss_clamp - computed: false, optional: true, required: false
  private _mssClamp = new Cgnv6Nat64GlobalTcpMssClampOutputReference(this, "mss_clamp");
  public get mssClamp() {
    return this._mssClamp;
  }
  public putMssClamp(value: Cgnv6Nat64GlobalTcpMssClamp) {
    this._mssClamp.internalValue = value;
  }
  public resetMssClamp() {
    this._mssClamp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssClampInput() {
    return this._mssClamp.internalValue;
  }

  // reset_on_error - computed: false, optional: true, required: false
  private _resetOnError = new Cgnv6Nat64GlobalTcpResetOnErrorOutputReference(this, "reset_on_error");
  public get resetOnError() {
    return this._resetOnError;
  }
  public putResetOnError(value: Cgnv6Nat64GlobalTcpResetOnError) {
    this._resetOnError.internalValue = value;
  }
  public resetResetOnError() {
    this._resetOnError.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetOnErrorInput() {
    return this._resetOnError.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_global thunder_cgnv6_nat64_global}
*/
export class Cgnv6Nat64Global extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_nat64_global";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6Nat64Global resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6Nat64Global to import
  * @param importFromId The id of the existing Cgnv6Nat64Global that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_global#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6Nat64Global to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_nat64_global", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_global thunder_cgnv6_nat64_global} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6Nat64GlobalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Cgnv6Nat64GlobalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_nat64_global',
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
    this._all = config.all;
    this._forceNonZeroIpv4Id = config.forceNonZeroIpv4Id;
    this._id = config.id;
    this._userQuotaPrefixLength = config.userQuotaPrefixLength;
    this._uuid = config.uuid;
    this._icmp.internalValue = config.icmp;
    this._inside.internalValue = config.inside;
    this._samplingEnable.internalValue = config.samplingEnable;
    this._tcp.internalValue = config.tcp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all - computed: false, optional: true, required: false
  private _all?: number; 
  public get all() {
    return this.getNumberAttribute('all');
  }
  public set all(value: number) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // force_non_zero_ipv4_id - computed: false, optional: true, required: false
  private _forceNonZeroIpv4Id?: number; 
  public get forceNonZeroIpv4Id() {
    return this.getNumberAttribute('force_non_zero_ipv4_id');
  }
  public set forceNonZeroIpv4Id(value: number) {
    this._forceNonZeroIpv4Id = value;
  }
  public resetForceNonZeroIpv4Id() {
    this._forceNonZeroIpv4Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceNonZeroIpv4IdInput() {
    return this._forceNonZeroIpv4Id;
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

  // icmp - computed: false, optional: true, required: false
  private _icmp = new Cgnv6Nat64GlobalIcmpOutputReference(this, "icmp");
  public get icmp() {
    return this._icmp;
  }
  public putIcmp(value: Cgnv6Nat64GlobalIcmp) {
    this._icmp.internalValue = value;
  }
  public resetIcmp() {
    this._icmp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpInput() {
    return this._icmp.internalValue;
  }

  // inside - computed: false, optional: true, required: false
  private _inside = new Cgnv6Nat64GlobalInsideOutputReference(this, "inside");
  public get inside() {
    return this._inside;
  }
  public putInside(value: Cgnv6Nat64GlobalInside) {
    this._inside.internalValue = value;
  }
  public resetInside() {
    this._inside.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideInput() {
    return this._inside.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new Cgnv6Nat64GlobalSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: Cgnv6Nat64GlobalSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp = new Cgnv6Nat64GlobalTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: Cgnv6Nat64GlobalTcp) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all: cdktf.numberToTerraform(this._all),
      force_non_zero_ipv4_id: cdktf.numberToTerraform(this._forceNonZeroIpv4Id),
      id: cdktf.stringToTerraform(this._id),
      user_quota_prefix_length: cdktf.numberToTerraform(this._userQuotaPrefixLength),
      uuid: cdktf.stringToTerraform(this._uuid),
      icmp: cgnv6Nat64GlobalIcmpToTerraform(this._icmp.internalValue),
      inside: cgnv6Nat64GlobalInsideToTerraform(this._inside.internalValue),
      sampling_enable: cdktf.listMapper(cgnv6Nat64GlobalSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
      tcp: cgnv6Nat64GlobalTcpToTerraform(this._tcp.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all: {
        value: cdktf.numberToHclTerraform(this._all),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      force_non_zero_ipv4_id: {
        value: cdktf.numberToHclTerraform(this._forceNonZeroIpv4Id),
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
      user_quota_prefix_length: {
        value: cdktf.numberToHclTerraform(this._userQuotaPrefixLength),
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
      icmp: {
        value: cgnv6Nat64GlobalIcmpToHclTerraform(this._icmp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6Nat64GlobalIcmpList",
      },
      inside: {
        value: cgnv6Nat64GlobalInsideToHclTerraform(this._inside.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6Nat64GlobalInsideList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(cgnv6Nat64GlobalSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6Nat64GlobalSamplingEnableList",
      },
      tcp: {
        value: cgnv6Nat64GlobalTcpToHclTerraform(this._tcp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6Nat64GlobalTcpList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
