// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_map_translation_domain_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6MapTranslationDomainStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_map_translation_domain_stats#id DataThunderCgnv6MapTranslationDomainStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * MAP-T domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_map_translation_domain_stats#name DataThunderCgnv6MapTranslationDomainStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_map_translation_domain_stats#stats DataThunderCgnv6MapTranslationDomainStats#stats}
  */
  readonly stats?: DataThunderCgnv6MapTranslationDomainStatsStats;
}
export interface DataThunderCgnv6MapTranslationDomainStatsStats {
  /**
  * BMR prefix rules configured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_map_translation_domain_stats#bmr_prefixrules_configured DataThunderCgnv6MapTranslationDomainStats#bmr_prefixrules_configured}
  */
  readonly bmrPrefixrulesConfigured?: number;
  /**
  * ICMP Packet Too Big Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_map_translation_domain_stats#frag_icmp_sent DataThunderCgnv6MapTranslationDomainStats#frag_icmp_sent}
  */
  readonly fragIcmpSent?: number;
  /**
  * Inbound IPv4 Destination Address Port Validation Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_map_translation_domain_stats#inbound_addr_port_validation_failed DataThunderCgnv6MapTranslationDomainStats#inbound_addr_port_validation_failed}
  */
  readonly inboundAddrPortValidationFailed?: number;
  /**
  * Inbound IPv6 Destination Address Unreachable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_map_translation_domain_stats#inbound_dest_unreachable DataThunderCgnv6MapTranslationDomainStats#inbound_dest_unreachable}
  */
  readonly inboundDestUnreachable?: number;
  /**
  * Inbound IPv4 Fragment Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_map_translation_domain_stats#inbound_frag_packet_received DataThunderCgnv6MapTranslationDomainStats#inbound_frag_packet_received}
  */
  readonly inboundFragPacketReceived?: number;
  /**
  * Inbound IPv4 Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_map_translation_domain_stats#inbound_packet_received DataThunderCgnv6MapTranslationDomainStats#inbound_packet_received}
  */
  readonly inboundPacketReceived?: number;
  /**
  * Inbound IPv4 Reverse Route Lookup Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_map_translation_domain_stats#inbound_rev_lookup_failed DataThunderCgnv6MapTranslationDomainStats#inbound_rev_lookup_failed}
  */
  readonly inboundRevLookupFailed?: number;
  /**
  * Interfaces not Configured Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_map_translation_domain_stats#interface_not_configured DataThunderCgnv6MapTranslationDomainStats#interface_not_configured}
  */
  readonly interfaceNotConfigured?: number;
  /**
  * Outbound IPv6 Source Address Validation Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_map_translation_domain_stats#outbound_addr_validation_failed DataThunderCgnv6MapTranslationDomainStats#outbound_addr_validation_failed}
  */
  readonly outboundAddrValidationFailed?: number;
  /**
  * Outbound IPv4 Destination Address Unreachable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_map_translation_domain_stats#outbound_dest_unreachable DataThunderCgnv6MapTranslationDomainStats#outbound_dest_unreachable}
  */
  readonly outboundDestUnreachable?: number;
  /**
  * Outbound IPv6 Fragment Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_map_translation_domain_stats#outbound_frag_packet_received DataThunderCgnv6MapTranslationDomainStats#outbound_frag_packet_received}
  */
  readonly outboundFragPacketReceived?: number;
  /**
  * Outbound IPv6 Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_map_translation_domain_stats#outbound_packet_received DataThunderCgnv6MapTranslationDomainStats#outbound_packet_received}
  */
  readonly outboundPacketReceived?: number;
  /**
  * Outbound IPv6 Reverse Route Lookup Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_map_translation_domain_stats#outbound_rev_lookup_failed DataThunderCgnv6MapTranslationDomainStats#outbound_rev_lookup_failed}
  */
  readonly outboundRevLookupFailed?: number;
  /**
  * Packet Exceeded MTU
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_map_translation_domain_stats#packet_mtu_exceeded DataThunderCgnv6MapTranslationDomainStats#packet_mtu_exceeded}
  */
  readonly packetMtuExceeded?: number;
}

export function dataThunderCgnv6MapTranslationDomainStatsStatsToTerraform(struct?: DataThunderCgnv6MapTranslationDomainStatsStatsOutputReference | DataThunderCgnv6MapTranslationDomainStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bmr_prefixrules_configured: cdktf.numberToTerraform(struct!.bmrPrefixrulesConfigured),
    frag_icmp_sent: cdktf.numberToTerraform(struct!.fragIcmpSent),
    inbound_addr_port_validation_failed: cdktf.numberToTerraform(struct!.inboundAddrPortValidationFailed),
    inbound_dest_unreachable: cdktf.numberToTerraform(struct!.inboundDestUnreachable),
    inbound_frag_packet_received: cdktf.numberToTerraform(struct!.inboundFragPacketReceived),
    inbound_packet_received: cdktf.numberToTerraform(struct!.inboundPacketReceived),
    inbound_rev_lookup_failed: cdktf.numberToTerraform(struct!.inboundRevLookupFailed),
    interface_not_configured: cdktf.numberToTerraform(struct!.interfaceNotConfigured),
    outbound_addr_validation_failed: cdktf.numberToTerraform(struct!.outboundAddrValidationFailed),
    outbound_dest_unreachable: cdktf.numberToTerraform(struct!.outboundDestUnreachable),
    outbound_frag_packet_received: cdktf.numberToTerraform(struct!.outboundFragPacketReceived),
    outbound_packet_received: cdktf.numberToTerraform(struct!.outboundPacketReceived),
    outbound_rev_lookup_failed: cdktf.numberToTerraform(struct!.outboundRevLookupFailed),
    packet_mtu_exceeded: cdktf.numberToTerraform(struct!.packetMtuExceeded),
  }
}


export function dataThunderCgnv6MapTranslationDomainStatsStatsToHclTerraform(struct?: DataThunderCgnv6MapTranslationDomainStatsStatsOutputReference | DataThunderCgnv6MapTranslationDomainStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bmr_prefixrules_configured: {
      value: cdktf.numberToHclTerraform(struct!.bmrPrefixrulesConfigured),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frag_icmp_sent: {
      value: cdktf.numberToHclTerraform(struct!.fragIcmpSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inbound_addr_port_validation_failed: {
      value: cdktf.numberToHclTerraform(struct!.inboundAddrPortValidationFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inbound_dest_unreachable: {
      value: cdktf.numberToHclTerraform(struct!.inboundDestUnreachable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inbound_frag_packet_received: {
      value: cdktf.numberToHclTerraform(struct!.inboundFragPacketReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inbound_packet_received: {
      value: cdktf.numberToHclTerraform(struct!.inboundPacketReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inbound_rev_lookup_failed: {
      value: cdktf.numberToHclTerraform(struct!.inboundRevLookupFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface_not_configured: {
      value: cdktf.numberToHclTerraform(struct!.interfaceNotConfigured),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_addr_validation_failed: {
      value: cdktf.numberToHclTerraform(struct!.outboundAddrValidationFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_dest_unreachable: {
      value: cdktf.numberToHclTerraform(struct!.outboundDestUnreachable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_frag_packet_received: {
      value: cdktf.numberToHclTerraform(struct!.outboundFragPacketReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_packet_received: {
      value: cdktf.numberToHclTerraform(struct!.outboundPacketReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_rev_lookup_failed: {
      value: cdktf.numberToHclTerraform(struct!.outboundRevLookupFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_mtu_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.packetMtuExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6MapTranslationDomainStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6MapTranslationDomainStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bmrPrefixrulesConfigured !== undefined) {
      hasAnyValues = true;
      internalValueResult.bmrPrefixrulesConfigured = this._bmrPrefixrulesConfigured;
    }
    if (this._fragIcmpSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragIcmpSent = this._fragIcmpSent;
    }
    if (this._inboundAddrPortValidationFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundAddrPortValidationFailed = this._inboundAddrPortValidationFailed;
    }
    if (this._inboundDestUnreachable !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundDestUnreachable = this._inboundDestUnreachable;
    }
    if (this._inboundFragPacketReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundFragPacketReceived = this._inboundFragPacketReceived;
    }
    if (this._inboundPacketReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundPacketReceived = this._inboundPacketReceived;
    }
    if (this._inboundRevLookupFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundRevLookupFailed = this._inboundRevLookupFailed;
    }
    if (this._interfaceNotConfigured !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceNotConfigured = this._interfaceNotConfigured;
    }
    if (this._outboundAddrValidationFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundAddrValidationFailed = this._outboundAddrValidationFailed;
    }
    if (this._outboundDestUnreachable !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundDestUnreachable = this._outboundDestUnreachable;
    }
    if (this._outboundFragPacketReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundFragPacketReceived = this._outboundFragPacketReceived;
    }
    if (this._outboundPacketReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundPacketReceived = this._outboundPacketReceived;
    }
    if (this._outboundRevLookupFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundRevLookupFailed = this._outboundRevLookupFailed;
    }
    if (this._packetMtuExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetMtuExceeded = this._packetMtuExceeded;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6MapTranslationDomainStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bmrPrefixrulesConfigured = undefined;
      this._fragIcmpSent = undefined;
      this._inboundAddrPortValidationFailed = undefined;
      this._inboundDestUnreachable = undefined;
      this._inboundFragPacketReceived = undefined;
      this._inboundPacketReceived = undefined;
      this._inboundRevLookupFailed = undefined;
      this._interfaceNotConfigured = undefined;
      this._outboundAddrValidationFailed = undefined;
      this._outboundDestUnreachable = undefined;
      this._outboundFragPacketReceived = undefined;
      this._outboundPacketReceived = undefined;
      this._outboundRevLookupFailed = undefined;
      this._packetMtuExceeded = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bmrPrefixrulesConfigured = value.bmrPrefixrulesConfigured;
      this._fragIcmpSent = value.fragIcmpSent;
      this._inboundAddrPortValidationFailed = value.inboundAddrPortValidationFailed;
      this._inboundDestUnreachable = value.inboundDestUnreachable;
      this._inboundFragPacketReceived = value.inboundFragPacketReceived;
      this._inboundPacketReceived = value.inboundPacketReceived;
      this._inboundRevLookupFailed = value.inboundRevLookupFailed;
      this._interfaceNotConfigured = value.interfaceNotConfigured;
      this._outboundAddrValidationFailed = value.outboundAddrValidationFailed;
      this._outboundDestUnreachable = value.outboundDestUnreachable;
      this._outboundFragPacketReceived = value.outboundFragPacketReceived;
      this._outboundPacketReceived = value.outboundPacketReceived;
      this._outboundRevLookupFailed = value.outboundRevLookupFailed;
      this._packetMtuExceeded = value.packetMtuExceeded;
    }
  }

  // bmr_prefixrules_configured - computed: false, optional: true, required: false
  private _bmrPrefixrulesConfigured?: number; 
  public get bmrPrefixrulesConfigured() {
    return this.getNumberAttribute('bmr_prefixrules_configured');
  }
  public set bmrPrefixrulesConfigured(value: number) {
    this._bmrPrefixrulesConfigured = value;
  }
  public resetBmrPrefixrulesConfigured() {
    this._bmrPrefixrulesConfigured = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bmrPrefixrulesConfiguredInput() {
    return this._bmrPrefixrulesConfigured;
  }

  // frag_icmp_sent - computed: false, optional: true, required: false
  private _fragIcmpSent?: number; 
  public get fragIcmpSent() {
    return this.getNumberAttribute('frag_icmp_sent');
  }
  public set fragIcmpSent(value: number) {
    this._fragIcmpSent = value;
  }
  public resetFragIcmpSent() {
    this._fragIcmpSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragIcmpSentInput() {
    return this._fragIcmpSent;
  }

  // inbound_addr_port_validation_failed - computed: false, optional: true, required: false
  private _inboundAddrPortValidationFailed?: number; 
  public get inboundAddrPortValidationFailed() {
    return this.getNumberAttribute('inbound_addr_port_validation_failed');
  }
  public set inboundAddrPortValidationFailed(value: number) {
    this._inboundAddrPortValidationFailed = value;
  }
  public resetInboundAddrPortValidationFailed() {
    this._inboundAddrPortValidationFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundAddrPortValidationFailedInput() {
    return this._inboundAddrPortValidationFailed;
  }

  // inbound_dest_unreachable - computed: false, optional: true, required: false
  private _inboundDestUnreachable?: number; 
  public get inboundDestUnreachable() {
    return this.getNumberAttribute('inbound_dest_unreachable');
  }
  public set inboundDestUnreachable(value: number) {
    this._inboundDestUnreachable = value;
  }
  public resetInboundDestUnreachable() {
    this._inboundDestUnreachable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundDestUnreachableInput() {
    return this._inboundDestUnreachable;
  }

  // inbound_frag_packet_received - computed: false, optional: true, required: false
  private _inboundFragPacketReceived?: number; 
  public get inboundFragPacketReceived() {
    return this.getNumberAttribute('inbound_frag_packet_received');
  }
  public set inboundFragPacketReceived(value: number) {
    this._inboundFragPacketReceived = value;
  }
  public resetInboundFragPacketReceived() {
    this._inboundFragPacketReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundFragPacketReceivedInput() {
    return this._inboundFragPacketReceived;
  }

  // inbound_packet_received - computed: false, optional: true, required: false
  private _inboundPacketReceived?: number; 
  public get inboundPacketReceived() {
    return this.getNumberAttribute('inbound_packet_received');
  }
  public set inboundPacketReceived(value: number) {
    this._inboundPacketReceived = value;
  }
  public resetInboundPacketReceived() {
    this._inboundPacketReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundPacketReceivedInput() {
    return this._inboundPacketReceived;
  }

  // inbound_rev_lookup_failed - computed: false, optional: true, required: false
  private _inboundRevLookupFailed?: number; 
  public get inboundRevLookupFailed() {
    return this.getNumberAttribute('inbound_rev_lookup_failed');
  }
  public set inboundRevLookupFailed(value: number) {
    this._inboundRevLookupFailed = value;
  }
  public resetInboundRevLookupFailed() {
    this._inboundRevLookupFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundRevLookupFailedInput() {
    return this._inboundRevLookupFailed;
  }

  // interface_not_configured - computed: false, optional: true, required: false
  private _interfaceNotConfigured?: number; 
  public get interfaceNotConfigured() {
    return this.getNumberAttribute('interface_not_configured');
  }
  public set interfaceNotConfigured(value: number) {
    this._interfaceNotConfigured = value;
  }
  public resetInterfaceNotConfigured() {
    this._interfaceNotConfigured = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNotConfiguredInput() {
    return this._interfaceNotConfigured;
  }

  // outbound_addr_validation_failed - computed: false, optional: true, required: false
  private _outboundAddrValidationFailed?: number; 
  public get outboundAddrValidationFailed() {
    return this.getNumberAttribute('outbound_addr_validation_failed');
  }
  public set outboundAddrValidationFailed(value: number) {
    this._outboundAddrValidationFailed = value;
  }
  public resetOutboundAddrValidationFailed() {
    this._outboundAddrValidationFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundAddrValidationFailedInput() {
    return this._outboundAddrValidationFailed;
  }

  // outbound_dest_unreachable - computed: false, optional: true, required: false
  private _outboundDestUnreachable?: number; 
  public get outboundDestUnreachable() {
    return this.getNumberAttribute('outbound_dest_unreachable');
  }
  public set outboundDestUnreachable(value: number) {
    this._outboundDestUnreachable = value;
  }
  public resetOutboundDestUnreachable() {
    this._outboundDestUnreachable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundDestUnreachableInput() {
    return this._outboundDestUnreachable;
  }

  // outbound_frag_packet_received - computed: false, optional: true, required: false
  private _outboundFragPacketReceived?: number; 
  public get outboundFragPacketReceived() {
    return this.getNumberAttribute('outbound_frag_packet_received');
  }
  public set outboundFragPacketReceived(value: number) {
    this._outboundFragPacketReceived = value;
  }
  public resetOutboundFragPacketReceived() {
    this._outboundFragPacketReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundFragPacketReceivedInput() {
    return this._outboundFragPacketReceived;
  }

  // outbound_packet_received - computed: false, optional: true, required: false
  private _outboundPacketReceived?: number; 
  public get outboundPacketReceived() {
    return this.getNumberAttribute('outbound_packet_received');
  }
  public set outboundPacketReceived(value: number) {
    this._outboundPacketReceived = value;
  }
  public resetOutboundPacketReceived() {
    this._outboundPacketReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundPacketReceivedInput() {
    return this._outboundPacketReceived;
  }

  // outbound_rev_lookup_failed - computed: false, optional: true, required: false
  private _outboundRevLookupFailed?: number; 
  public get outboundRevLookupFailed() {
    return this.getNumberAttribute('outbound_rev_lookup_failed');
  }
  public set outboundRevLookupFailed(value: number) {
    this._outboundRevLookupFailed = value;
  }
  public resetOutboundRevLookupFailed() {
    this._outboundRevLookupFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundRevLookupFailedInput() {
    return this._outboundRevLookupFailed;
  }

  // packet_mtu_exceeded - computed: false, optional: true, required: false
  private _packetMtuExceeded?: number; 
  public get packetMtuExceeded() {
    return this.getNumberAttribute('packet_mtu_exceeded');
  }
  public set packetMtuExceeded(value: number) {
    this._packetMtuExceeded = value;
  }
  public resetPacketMtuExceeded() {
    this._packetMtuExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetMtuExceededInput() {
    return this._packetMtuExceeded;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_map_translation_domain_stats thunder_cgnv6_map_translation_domain_stats}
*/
export class DataThunderCgnv6MapTranslationDomainStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_map_translation_domain_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6MapTranslationDomainStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6MapTranslationDomainStats to import
  * @param importFromId The id of the existing DataThunderCgnv6MapTranslationDomainStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_map_translation_domain_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6MapTranslationDomainStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_map_translation_domain_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_map_translation_domain_stats thunder_cgnv6_map_translation_domain_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6MapTranslationDomainStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6MapTranslationDomainStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_map_translation_domain_stats',
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
    this._id = config.id;
    this._name = config.name;
    this._stats.internalValue = config.stats;
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderCgnv6MapTranslationDomainStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderCgnv6MapTranslationDomainStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      stats: dataThunderCgnv6MapTranslationDomainStatsStatsToTerraform(this._stats.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: dataThunderCgnv6MapTranslationDomainStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6MapTranslationDomainStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
