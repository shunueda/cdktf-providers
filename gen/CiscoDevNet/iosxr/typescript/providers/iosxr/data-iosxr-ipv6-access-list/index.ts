// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/ipv6_access_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrIpv6AccessListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access list name - maximum 128 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/ipv6_access_list#access_list_name DataIosxrIpv6AccessList#access_list_name}
  */
  readonly accessListName: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/ipv6_access_list#device DataIosxrIpv6AccessList#device}
  */
  readonly device?: string;
}
export interface DataIosxrIpv6AccessListSequences {
}

export function dataIosxrIpv6AccessListSequencesToTerraform(struct?: DataIosxrIpv6AccessListSequences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrIpv6AccessListSequencesToHclTerraform(struct?: DataIosxrIpv6AccessListSequences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrIpv6AccessListSequencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIosxrIpv6AccessListSequences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrIpv6AccessListSequences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deny_capture - computed: true, optional: false, required: false
  public get denyCapture() {
    return this.getBooleanAttribute('deny_capture');
  }

  // deny_counter - computed: true, optional: false, required: false
  public get denyCounter() {
    return this.getStringAttribute('deny_counter');
  }

  // deny_destination_address - computed: true, optional: false, required: false
  public get denyDestinationAddress() {
    return this.getStringAttribute('deny_destination_address');
  }

  // deny_destination_any - computed: true, optional: false, required: false
  public get denyDestinationAny() {
    return this.getBooleanAttribute('deny_destination_any');
  }

  // deny_destination_host - computed: true, optional: false, required: false
  public get denyDestinationHost() {
    return this.getStringAttribute('deny_destination_host');
  }

  // deny_destination_net_group - computed: true, optional: false, required: false
  public get denyDestinationNetGroup() {
    return this.getStringAttribute('deny_destination_net_group');
  }

  // deny_destination_port_eq - computed: true, optional: false, required: false
  public get denyDestinationPortEq() {
    return this.getStringAttribute('deny_destination_port_eq');
  }

  // deny_destination_port_group - computed: true, optional: false, required: false
  public get denyDestinationPortGroup() {
    return this.getStringAttribute('deny_destination_port_group');
  }

  // deny_destination_port_gt - computed: true, optional: false, required: false
  public get denyDestinationPortGt() {
    return this.getStringAttribute('deny_destination_port_gt');
  }

  // deny_destination_port_lt - computed: true, optional: false, required: false
  public get denyDestinationPortLt() {
    return this.getStringAttribute('deny_destination_port_lt');
  }

  // deny_destination_port_neq - computed: true, optional: false, required: false
  public get denyDestinationPortNeq() {
    return this.getStringAttribute('deny_destination_port_neq');
  }

  // deny_destination_port_range_end - computed: true, optional: false, required: false
  public get denyDestinationPortRangeEnd() {
    return this.getStringAttribute('deny_destination_port_range_end');
  }

  // deny_destination_port_range_start - computed: true, optional: false, required: false
  public get denyDestinationPortRangeStart() {
    return this.getStringAttribute('deny_destination_port_range_start');
  }

  // deny_destination_prefix_length - computed: true, optional: false, required: false
  public get denyDestinationPrefixLength() {
    return this.getNumberAttribute('deny_destination_prefix_length');
  }

  // deny_destination_wildcard_mask - computed: true, optional: false, required: false
  public get denyDestinationWildcardMask() {
    return this.getStringAttribute('deny_destination_wildcard_mask');
  }

  // deny_dscp - computed: true, optional: false, required: false
  public get denyDscp() {
    return this.getStringAttribute('deny_dscp');
  }

  // deny_dscp_eq - computed: true, optional: false, required: false
  public get denyDscpEq() {
    return this.getStringAttribute('deny_dscp_eq');
  }

  // deny_dscp_gt - computed: true, optional: false, required: false
  public get denyDscpGt() {
    return this.getStringAttribute('deny_dscp_gt');
  }

  // deny_dscp_lt - computed: true, optional: false, required: false
  public get denyDscpLt() {
    return this.getStringAttribute('deny_dscp_lt');
  }

  // deny_dscp_neq - computed: true, optional: false, required: false
  public get denyDscpNeq() {
    return this.getStringAttribute('deny_dscp_neq');
  }

  // deny_dscp_range_end - computed: true, optional: false, required: false
  public get denyDscpRangeEnd() {
    return this.getStringAttribute('deny_dscp_range_end');
  }

  // deny_dscp_range_start - computed: true, optional: false, required: false
  public get denyDscpRangeStart() {
    return this.getStringAttribute('deny_dscp_range_start');
  }

  // deny_eq - computed: true, optional: false, required: false
  public get denyEq() {
    return this.getStringAttribute('deny_eq');
  }

  // deny_fragment_type - computed: true, optional: false, required: false
  public get denyFragmentType() {
    return this.getStringAttribute('deny_fragment_type');
  }

  // deny_icmp_message_code - computed: true, optional: false, required: false
  public get denyIcmpMessageCode() {
    return this.getNumberAttribute('deny_icmp_message_code');
  }

  // deny_icmp_message_type - computed: true, optional: false, required: false
  public get denyIcmpMessageType() {
    return this.getNumberAttribute('deny_icmp_message_type');
  }

  // deny_icmp_message_type_name - computed: true, optional: false, required: false
  public get denyIcmpMessageTypeName() {
    return this.getStringAttribute('deny_icmp_message_type_name');
  }

  // deny_icmp_off - computed: true, optional: false, required: false
  public get denyIcmpOff() {
    return this.getBooleanAttribute('deny_icmp_off');
  }

  // deny_icmp_on - computed: true, optional: false, required: false
  public get denyIcmpOn() {
    return this.getBooleanAttribute('deny_icmp_on');
  }

  // deny_log - computed: true, optional: false, required: false
  public get denyLog() {
    return this.getBooleanAttribute('deny_log');
  }

  // deny_log_input - computed: true, optional: false, required: false
  public get denyLogInput() {
    return this.getBooleanAttribute('deny_log_input');
  }

  // deny_packet_length_eq - computed: true, optional: false, required: false
  public get denyPacketLengthEq() {
    return this.getNumberAttribute('deny_packet_length_eq');
  }

  // deny_packet_length_gt - computed: true, optional: false, required: false
  public get denyPacketLengthGt() {
    return this.getNumberAttribute('deny_packet_length_gt');
  }

  // deny_packet_length_lt - computed: true, optional: false, required: false
  public get denyPacketLengthLt() {
    return this.getNumberAttribute('deny_packet_length_lt');
  }

  // deny_packet_length_neq - computed: true, optional: false, required: false
  public get denyPacketLengthNeq() {
    return this.getNumberAttribute('deny_packet_length_neq');
  }

  // deny_packet_length_range_end - computed: true, optional: false, required: false
  public get denyPacketLengthRangeEnd() {
    return this.getNumberAttribute('deny_packet_length_range_end');
  }

  // deny_packet_length_range_start - computed: true, optional: false, required: false
  public get denyPacketLengthRangeStart() {
    return this.getNumberAttribute('deny_packet_length_range_start');
  }

  // deny_police_peak_rate - computed: true, optional: false, required: false
  public get denyPolicePeakRate() {
    return this.getNumberAttribute('deny_police_peak_rate');
  }

  // deny_police_peak_unit - computed: true, optional: false, required: false
  public get denyPolicePeakUnit() {
    return this.getStringAttribute('deny_police_peak_unit');
  }

  // deny_police_priority - computed: true, optional: false, required: false
  public get denyPolicePriority() {
    return this.getStringAttribute('deny_police_priority');
  }

  // deny_police_unit - computed: true, optional: false, required: false
  public get denyPoliceUnit() {
    return this.getStringAttribute('deny_police_unit');
  }

  // deny_police_value - computed: true, optional: false, required: false
  public get denyPoliceValue() {
    return this.getNumberAttribute('deny_police_value');
  }

  // deny_precedence - computed: true, optional: false, required: false
  public get denyPrecedence() {
    return this.getStringAttribute('deny_precedence');
  }

  // deny_protocol - computed: true, optional: false, required: false
  public get denyProtocol() {
    return this.getStringAttribute('deny_protocol');
  }

  // deny_range_end_protocol - computed: true, optional: false, required: false
  public get denyRangeEndProtocol() {
    return this.getStringAttribute('deny_range_end_protocol');
  }

  // deny_range_start_protocol - computed: true, optional: false, required: false
  public get denyRangeStartProtocol() {
    return this.getStringAttribute('deny_range_start_protocol');
  }

  // deny_set_qos_group - computed: true, optional: false, required: false
  public get denySetQosGroup() {
    return this.getNumberAttribute('deny_set_qos_group');
  }

  // deny_set_ttl - computed: true, optional: false, required: false
  public get denySetTtl() {
    return this.getNumberAttribute('deny_set_ttl');
  }

  // deny_source_address - computed: true, optional: false, required: false
  public get denySourceAddress() {
    return this.getStringAttribute('deny_source_address');
  }

  // deny_source_any - computed: true, optional: false, required: false
  public get denySourceAny() {
    return this.getBooleanAttribute('deny_source_any');
  }

  // deny_source_host - computed: true, optional: false, required: false
  public get denySourceHost() {
    return this.getStringAttribute('deny_source_host');
  }

  // deny_source_net_group - computed: true, optional: false, required: false
  public get denySourceNetGroup() {
    return this.getStringAttribute('deny_source_net_group');
  }

  // deny_source_port_eq - computed: true, optional: false, required: false
  public get denySourcePortEq() {
    return this.getStringAttribute('deny_source_port_eq');
  }

  // deny_source_port_group - computed: true, optional: false, required: false
  public get denySourcePortGroup() {
    return this.getStringAttribute('deny_source_port_group');
  }

  // deny_source_port_gt - computed: true, optional: false, required: false
  public get denySourcePortGt() {
    return this.getStringAttribute('deny_source_port_gt');
  }

  // deny_source_port_lt - computed: true, optional: false, required: false
  public get denySourcePortLt() {
    return this.getStringAttribute('deny_source_port_lt');
  }

  // deny_source_port_neq - computed: true, optional: false, required: false
  public get denySourcePortNeq() {
    return this.getStringAttribute('deny_source_port_neq');
  }

  // deny_source_port_range_end - computed: true, optional: false, required: false
  public get denySourcePortRangeEnd() {
    return this.getStringAttribute('deny_source_port_range_end');
  }

  // deny_source_port_range_start - computed: true, optional: false, required: false
  public get denySourcePortRangeStart() {
    return this.getStringAttribute('deny_source_port_range_start');
  }

  // deny_source_prefix_length - computed: true, optional: false, required: false
  public get denySourcePrefixLength() {
    return this.getNumberAttribute('deny_source_prefix_length');
  }

  // deny_source_wildcard_mask - computed: true, optional: false, required: false
  public get denySourceWildcardMask() {
    return this.getStringAttribute('deny_source_wildcard_mask');
  }

  // deny_ttl_eq - computed: true, optional: false, required: false
  public get denyTtlEq() {
    return this.getNumberAttribute('deny_ttl_eq');
  }

  // deny_ttl_gt - computed: true, optional: false, required: false
  public get denyTtlGt() {
    return this.getNumberAttribute('deny_ttl_gt');
  }

  // deny_ttl_lt - computed: true, optional: false, required: false
  public get denyTtlLt() {
    return this.getNumberAttribute('deny_ttl_lt');
  }

  // deny_ttl_neq - computed: true, optional: false, required: false
  public get denyTtlNeq() {
    return this.getNumberAttribute('deny_ttl_neq');
  }

  // deny_ttl_range_end - computed: true, optional: false, required: false
  public get denyTtlRangeEnd() {
    return this.getNumberAttribute('deny_ttl_range_end');
  }

  // deny_ttl_range_start - computed: true, optional: false, required: false
  public get denyTtlRangeStart() {
    return this.getNumberAttribute('deny_ttl_range_start');
  }

  // permit_capture - computed: true, optional: false, required: false
  public get permitCapture() {
    return this.getBooleanAttribute('permit_capture');
  }

  // permit_counter - computed: true, optional: false, required: false
  public get permitCounter() {
    return this.getStringAttribute('permit_counter');
  }

  // permit_destination_address - computed: true, optional: false, required: false
  public get permitDestinationAddress() {
    return this.getStringAttribute('permit_destination_address');
  }

  // permit_destination_any - computed: true, optional: false, required: false
  public get permitDestinationAny() {
    return this.getBooleanAttribute('permit_destination_any');
  }

  // permit_destination_host - computed: true, optional: false, required: false
  public get permitDestinationHost() {
    return this.getStringAttribute('permit_destination_host');
  }

  // permit_destination_net_group - computed: true, optional: false, required: false
  public get permitDestinationNetGroup() {
    return this.getStringAttribute('permit_destination_net_group');
  }

  // permit_destination_port_eq - computed: true, optional: false, required: false
  public get permitDestinationPortEq() {
    return this.getStringAttribute('permit_destination_port_eq');
  }

  // permit_destination_port_group - computed: true, optional: false, required: false
  public get permitDestinationPortGroup() {
    return this.getStringAttribute('permit_destination_port_group');
  }

  // permit_destination_port_gt - computed: true, optional: false, required: false
  public get permitDestinationPortGt() {
    return this.getStringAttribute('permit_destination_port_gt');
  }

  // permit_destination_port_lt - computed: true, optional: false, required: false
  public get permitDestinationPortLt() {
    return this.getStringAttribute('permit_destination_port_lt');
  }

  // permit_destination_port_neq - computed: true, optional: false, required: false
  public get permitDestinationPortNeq() {
    return this.getStringAttribute('permit_destination_port_neq');
  }

  // permit_destination_port_range_end - computed: true, optional: false, required: false
  public get permitDestinationPortRangeEnd() {
    return this.getStringAttribute('permit_destination_port_range_end');
  }

  // permit_destination_port_range_start - computed: true, optional: false, required: false
  public get permitDestinationPortRangeStart() {
    return this.getStringAttribute('permit_destination_port_range_start');
  }

  // permit_destination_prefix_length - computed: true, optional: false, required: false
  public get permitDestinationPrefixLength() {
    return this.getNumberAttribute('permit_destination_prefix_length');
  }

  // permit_destination_wildcard_mask - computed: true, optional: false, required: false
  public get permitDestinationWildcardMask() {
    return this.getStringAttribute('permit_destination_wildcard_mask');
  }

  // permit_dscp - computed: true, optional: false, required: false
  public get permitDscp() {
    return this.getStringAttribute('permit_dscp');
  }

  // permit_dscp_eq - computed: true, optional: false, required: false
  public get permitDscpEq() {
    return this.getStringAttribute('permit_dscp_eq');
  }

  // permit_dscp_gt - computed: true, optional: false, required: false
  public get permitDscpGt() {
    return this.getStringAttribute('permit_dscp_gt');
  }

  // permit_dscp_lt - computed: true, optional: false, required: false
  public get permitDscpLt() {
    return this.getStringAttribute('permit_dscp_lt');
  }

  // permit_dscp_neq - computed: true, optional: false, required: false
  public get permitDscpNeq() {
    return this.getStringAttribute('permit_dscp_neq');
  }

  // permit_dscp_range_end - computed: true, optional: false, required: false
  public get permitDscpRangeEnd() {
    return this.getStringAttribute('permit_dscp_range_end');
  }

  // permit_dscp_range_start - computed: true, optional: false, required: false
  public get permitDscpRangeStart() {
    return this.getStringAttribute('permit_dscp_range_start');
  }

  // permit_eq - computed: true, optional: false, required: false
  public get permitEq() {
    return this.getStringAttribute('permit_eq');
  }

  // permit_fragment_type - computed: true, optional: false, required: false
  public get permitFragmentType() {
    return this.getStringAttribute('permit_fragment_type');
  }

  // permit_icmp_message_code - computed: true, optional: false, required: false
  public get permitIcmpMessageCode() {
    return this.getNumberAttribute('permit_icmp_message_code');
  }

  // permit_icmp_message_type - computed: true, optional: false, required: false
  public get permitIcmpMessageType() {
    return this.getNumberAttribute('permit_icmp_message_type');
  }

  // permit_icmp_message_type_name - computed: true, optional: false, required: false
  public get permitIcmpMessageTypeName() {
    return this.getStringAttribute('permit_icmp_message_type_name');
  }

  // permit_log - computed: true, optional: false, required: false
  public get permitLog() {
    return this.getBooleanAttribute('permit_log');
  }

  // permit_log_input - computed: true, optional: false, required: false
  public get permitLogInput() {
    return this.getBooleanAttribute('permit_log_input');
  }

  // permit_nexthop1_ipv6 - computed: true, optional: false, required: false
  public get permitNexthop1Ipv6() {
    return this.getStringAttribute('permit_nexthop1_ipv6');
  }

  // permit_nexthop1_track - computed: true, optional: false, required: false
  public get permitNexthop1Track() {
    return this.getStringAttribute('permit_nexthop1_track');
  }

  // permit_nexthop1_vrf - computed: true, optional: false, required: false
  public get permitNexthop1Vrf() {
    return this.getStringAttribute('permit_nexthop1_vrf');
  }

  // permit_nexthop2_ipv6 - computed: true, optional: false, required: false
  public get permitNexthop2Ipv6() {
    return this.getStringAttribute('permit_nexthop2_ipv6');
  }

  // permit_nexthop2_track - computed: true, optional: false, required: false
  public get permitNexthop2Track() {
    return this.getStringAttribute('permit_nexthop2_track');
  }

  // permit_nexthop2_vrf - computed: true, optional: false, required: false
  public get permitNexthop2Vrf() {
    return this.getStringAttribute('permit_nexthop2_vrf');
  }

  // permit_nexthop3_ipv6 - computed: true, optional: false, required: false
  public get permitNexthop3Ipv6() {
    return this.getStringAttribute('permit_nexthop3_ipv6');
  }

  // permit_nexthop3_track - computed: true, optional: false, required: false
  public get permitNexthop3Track() {
    return this.getStringAttribute('permit_nexthop3_track');
  }

  // permit_nexthop3_vrf - computed: true, optional: false, required: false
  public get permitNexthop3Vrf() {
    return this.getStringAttribute('permit_nexthop3_vrf');
  }

  // permit_packet_length_eq - computed: true, optional: false, required: false
  public get permitPacketLengthEq() {
    return this.getNumberAttribute('permit_packet_length_eq');
  }

  // permit_packet_length_gt - computed: true, optional: false, required: false
  public get permitPacketLengthGt() {
    return this.getNumberAttribute('permit_packet_length_gt');
  }

  // permit_packet_length_lt - computed: true, optional: false, required: false
  public get permitPacketLengthLt() {
    return this.getNumberAttribute('permit_packet_length_lt');
  }

  // permit_packet_length_neq - computed: true, optional: false, required: false
  public get permitPacketLengthNeq() {
    return this.getNumberAttribute('permit_packet_length_neq');
  }

  // permit_packet_length_range_end - computed: true, optional: false, required: false
  public get permitPacketLengthRangeEnd() {
    return this.getNumberAttribute('permit_packet_length_range_end');
  }

  // permit_packet_length_range_start - computed: true, optional: false, required: false
  public get permitPacketLengthRangeStart() {
    return this.getNumberAttribute('permit_packet_length_range_start');
  }

  // permit_police_peak_rate - computed: true, optional: false, required: false
  public get permitPolicePeakRate() {
    return this.getNumberAttribute('permit_police_peak_rate');
  }

  // permit_police_peak_unit - computed: true, optional: false, required: false
  public get permitPolicePeakUnit() {
    return this.getStringAttribute('permit_police_peak_unit');
  }

  // permit_police_priority - computed: true, optional: false, required: false
  public get permitPolicePriority() {
    return this.getStringAttribute('permit_police_priority');
  }

  // permit_police_unit - computed: true, optional: false, required: false
  public get permitPoliceUnit() {
    return this.getStringAttribute('permit_police_unit');
  }

  // permit_police_value - computed: true, optional: false, required: false
  public get permitPoliceValue() {
    return this.getNumberAttribute('permit_police_value');
  }

  // permit_precedence - computed: true, optional: false, required: false
  public get permitPrecedence() {
    return this.getStringAttribute('permit_precedence');
  }

  // permit_protocol - computed: true, optional: false, required: false
  public get permitProtocol() {
    return this.getStringAttribute('permit_protocol');
  }

  // permit_range_end_protocol - computed: true, optional: false, required: false
  public get permitRangeEndProtocol() {
    return this.getStringAttribute('permit_range_end_protocol');
  }

  // permit_range_start_protocol - computed: true, optional: false, required: false
  public get permitRangeStartProtocol() {
    return this.getStringAttribute('permit_range_start_protocol');
  }

  // permit_set_qos_group - computed: true, optional: false, required: false
  public get permitSetQosGroup() {
    return this.getNumberAttribute('permit_set_qos_group');
  }

  // permit_set_ttl - computed: true, optional: false, required: false
  public get permitSetTtl() {
    return this.getNumberAttribute('permit_set_ttl');
  }

  // permit_source_address - computed: true, optional: false, required: false
  public get permitSourceAddress() {
    return this.getStringAttribute('permit_source_address');
  }

  // permit_source_any - computed: true, optional: false, required: false
  public get permitSourceAny() {
    return this.getBooleanAttribute('permit_source_any');
  }

  // permit_source_host - computed: true, optional: false, required: false
  public get permitSourceHost() {
    return this.getStringAttribute('permit_source_host');
  }

  // permit_source_net_group - computed: true, optional: false, required: false
  public get permitSourceNetGroup() {
    return this.getStringAttribute('permit_source_net_group');
  }

  // permit_source_port_eq - computed: true, optional: false, required: false
  public get permitSourcePortEq() {
    return this.getStringAttribute('permit_source_port_eq');
  }

  // permit_source_port_group - computed: true, optional: false, required: false
  public get permitSourcePortGroup() {
    return this.getStringAttribute('permit_source_port_group');
  }

  // permit_source_port_gt - computed: true, optional: false, required: false
  public get permitSourcePortGt() {
    return this.getStringAttribute('permit_source_port_gt');
  }

  // permit_source_port_lt - computed: true, optional: false, required: false
  public get permitSourcePortLt() {
    return this.getStringAttribute('permit_source_port_lt');
  }

  // permit_source_port_neq - computed: true, optional: false, required: false
  public get permitSourcePortNeq() {
    return this.getStringAttribute('permit_source_port_neq');
  }

  // permit_source_port_range_end - computed: true, optional: false, required: false
  public get permitSourcePortRangeEnd() {
    return this.getStringAttribute('permit_source_port_range_end');
  }

  // permit_source_port_range_start - computed: true, optional: false, required: false
  public get permitSourcePortRangeStart() {
    return this.getStringAttribute('permit_source_port_range_start');
  }

  // permit_source_prefix_length - computed: true, optional: false, required: false
  public get permitSourcePrefixLength() {
    return this.getNumberAttribute('permit_source_prefix_length');
  }

  // permit_source_wildcard_mask - computed: true, optional: false, required: false
  public get permitSourceWildcardMask() {
    return this.getStringAttribute('permit_source_wildcard_mask');
  }

  // permit_ttl_eq - computed: true, optional: false, required: false
  public get permitTtlEq() {
    return this.getNumberAttribute('permit_ttl_eq');
  }

  // permit_ttl_gt - computed: true, optional: false, required: false
  public get permitTtlGt() {
    return this.getNumberAttribute('permit_ttl_gt');
  }

  // permit_ttl_lt - computed: true, optional: false, required: false
  public get permitTtlLt() {
    return this.getNumberAttribute('permit_ttl_lt');
  }

  // permit_ttl_neq - computed: true, optional: false, required: false
  public get permitTtlNeq() {
    return this.getNumberAttribute('permit_ttl_neq');
  }

  // permit_ttl_range_end - computed: true, optional: false, required: false
  public get permitTtlRangeEnd() {
    return this.getNumberAttribute('permit_ttl_range_end');
  }

  // permit_ttl_range_start - computed: true, optional: false, required: false
  public get permitTtlRangeStart() {
    return this.getNumberAttribute('permit_ttl_range_start');
  }

  // remark - computed: true, optional: false, required: false
  public get remark() {
    return this.getStringAttribute('remark');
  }

  // sequence_number - computed: true, optional: false, required: false
  public get sequenceNumber() {
    return this.getNumberAttribute('sequence_number');
  }
}

export class DataIosxrIpv6AccessListSequencesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrIpv6AccessListSequencesOutputReference {
    return new DataIosxrIpv6AccessListSequencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/ipv6_access_list iosxr_ipv6_access_list}
*/
export class DataIosxrIpv6AccessList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_ipv6_access_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrIpv6AccessList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrIpv6AccessList to import
  * @param importFromId The id of the existing DataIosxrIpv6AccessList that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/ipv6_access_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrIpv6AccessList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_ipv6_access_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/ipv6_access_list iosxr_ipv6_access_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrIpv6AccessListConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxrIpv6AccessListConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_ipv6_access_list',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessListName = config.accessListName;
    this._device = config.device;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_list_name - computed: false, optional: false, required: true
  private _accessListName?: string; 
  public get accessListName() {
    return this.getStringAttribute('access_list_name');
  }
  public set accessListName(value: string) {
    this._accessListName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListNameInput() {
    return this._accessListName;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // sequences - computed: true, optional: false, required: false
  private _sequences = new DataIosxrIpv6AccessListSequencesList(this, "sequences", false);
  public get sequences() {
    return this._sequences;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_list_name: cdktf.stringToTerraform(this._accessListName),
      device: cdktf.stringToTerraform(this._device),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_list_name: {
        value: cdktf.stringToHclTerraform(this._accessListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
