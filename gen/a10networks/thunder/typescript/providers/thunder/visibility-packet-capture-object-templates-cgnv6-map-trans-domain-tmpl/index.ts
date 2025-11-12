// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify name of the capture-config to use with this template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl#capture_config VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmpl#capture_config}
  */
  readonly captureConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl#id VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmpl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Packet Capture Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl#name VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmpl#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl#user_tag VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmpl#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl#uuid VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmpl#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl#trigger_stats_inc VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmpl#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsInc;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl#trigger_stats_rate VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmpl#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsRate;
  /**
  * trigger_stats_severity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl#trigger_stats_severity VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmpl#trigger_stats_severity}
  */
  readonly triggerStatsSeverity?: VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsSeverity;
}
export interface VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsInc {
  /**
  * Enable automatic packet-capture for Inbound IPv4 Destination Address Port Validation Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl#inbound_addr_port_validation_failed VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmpl#inbound_addr_port_validation_failed}
  */
  readonly inboundAddrPortValidationFailed?: number;
  /**
  * Enable automatic packet-capture for Inbound IPv6 Destination Address Unreachable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl#inbound_dest_unreachable VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmpl#inbound_dest_unreachable}
  */
  readonly inboundDestUnreachable?: number;
  /**
  * Enable automatic packet-capture for Inbound IPv4 Reverse Route Lookup Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl#inbound_rev_lookup_failed VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmpl#inbound_rev_lookup_failed}
  */
  readonly inboundRevLookupFailed?: number;
  /**
  * Enable automatic packet-capture for Interfaces not Configured Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl#interface_not_configured VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmpl#interface_not_configured}
  */
  readonly interfaceNotConfigured?: number;
  /**
  * Enable automatic packet-capture for Outbound IPv6 Source Address Validation Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl#outbound_addr_validation_failed VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmpl#outbound_addr_validation_failed}
  */
  readonly outboundAddrValidationFailed?: number;
  /**
  * Enable automatic packet-capture for Outbound IPv4 Destination Address Unreachable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl#outbound_dest_unreachable VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmpl#outbound_dest_unreachable}
  */
  readonly outboundDestUnreachable?: number;
  /**
  * Enable automatic packet-capture for Outbound IPv6 Reverse Route Lookup Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl#outbound_rev_lookup_failed VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmpl#outbound_rev_lookup_failed}
  */
  readonly outboundRevLookupFailed?: number;
  /**
  * Enable automatic packet-capture for Packet Exceeded MTU
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl#packet_mtu_exceeded VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmpl#packet_mtu_exceeded}
  */
  readonly packetMtuExceeded?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl#uuid VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmpl#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsIncToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsIncOutputReference | VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsInc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inbound_addr_port_validation_failed: cdktf.numberToTerraform(struct!.inboundAddrPortValidationFailed),
    inbound_dest_unreachable: cdktf.numberToTerraform(struct!.inboundDestUnreachable),
    inbound_rev_lookup_failed: cdktf.numberToTerraform(struct!.inboundRevLookupFailed),
    interface_not_configured: cdktf.numberToTerraform(struct!.interfaceNotConfigured),
    outbound_addr_validation_failed: cdktf.numberToTerraform(struct!.outboundAddrValidationFailed),
    outbound_dest_unreachable: cdktf.numberToTerraform(struct!.outboundDestUnreachable),
    outbound_rev_lookup_failed: cdktf.numberToTerraform(struct!.outboundRevLookupFailed),
    packet_mtu_exceeded: cdktf.numberToTerraform(struct!.packetMtuExceeded),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsIncToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsIncOutputReference | VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsInc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsIncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsInc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inboundAddrPortValidationFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundAddrPortValidationFailed = this._inboundAddrPortValidationFailed;
    }
    if (this._inboundDestUnreachable !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundDestUnreachable = this._inboundDestUnreachable;
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
    if (this._outboundRevLookupFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundRevLookupFailed = this._outboundRevLookupFailed;
    }
    if (this._packetMtuExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetMtuExceeded = this._packetMtuExceeded;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsInc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inboundAddrPortValidationFailed = undefined;
      this._inboundDestUnreachable = undefined;
      this._inboundRevLookupFailed = undefined;
      this._interfaceNotConfigured = undefined;
      this._outboundAddrValidationFailed = undefined;
      this._outboundDestUnreachable = undefined;
      this._outboundRevLookupFailed = undefined;
      this._packetMtuExceeded = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inboundAddrPortValidationFailed = value.inboundAddrPortValidationFailed;
      this._inboundDestUnreachable = value.inboundDestUnreachable;
      this._inboundRevLookupFailed = value.inboundRevLookupFailed;
      this._interfaceNotConfigured = value.interfaceNotConfigured;
      this._outboundAddrValidationFailed = value.outboundAddrValidationFailed;
      this._outboundDestUnreachable = value.outboundDestUnreachable;
      this._outboundRevLookupFailed = value.outboundRevLookupFailed;
      this._packetMtuExceeded = value.packetMtuExceeded;
      this._uuid = value.uuid;
    }
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
export interface VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsRate {
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl#duration VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmpl#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Inbound IPv4 Destination Address Port Validation Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl#inbound_addr_port_validation_failed VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmpl#inbound_addr_port_validation_failed}
  */
  readonly inboundAddrPortValidationFailed?: number;
  /**
  * Enable automatic packet-capture for Inbound IPv6 Destination Address Unreachable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl#inbound_dest_unreachable VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmpl#inbound_dest_unreachable}
  */
  readonly inboundDestUnreachable?: number;
  /**
  * Enable automatic packet-capture for Inbound IPv4 Reverse Route Lookup Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl#inbound_rev_lookup_failed VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmpl#inbound_rev_lookup_failed}
  */
  readonly inboundRevLookupFailed?: number;
  /**
  * Enable automatic packet-capture for Interfaces not Configured Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl#interface_not_configured VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmpl#interface_not_configured}
  */
  readonly interfaceNotConfigured?: number;
  /**
  * Enable automatic packet-capture for Outbound IPv6 Source Address Validation Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl#outbound_addr_validation_failed VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmpl#outbound_addr_validation_failed}
  */
  readonly outboundAddrValidationFailed?: number;
  /**
  * Enable automatic packet-capture for Outbound IPv4 Destination Address Unreachable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl#outbound_dest_unreachable VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmpl#outbound_dest_unreachable}
  */
  readonly outboundDestUnreachable?: number;
  /**
  * Enable automatic packet-capture for Outbound IPv6 Reverse Route Lookup Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl#outbound_rev_lookup_failed VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmpl#outbound_rev_lookup_failed}
  */
  readonly outboundRevLookupFailed?: number;
  /**
  * Enable automatic packet-capture for Packet Exceeded MTU
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl#packet_mtu_exceeded VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmpl#packet_mtu_exceeded}
  */
  readonly packetMtuExceeded?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl#threshold_exceeded_by VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmpl#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl#uuid VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmpl#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsRateToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsRateOutputReference | VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    inbound_addr_port_validation_failed: cdktf.numberToTerraform(struct!.inboundAddrPortValidationFailed),
    inbound_dest_unreachable: cdktf.numberToTerraform(struct!.inboundDestUnreachable),
    inbound_rev_lookup_failed: cdktf.numberToTerraform(struct!.inboundRevLookupFailed),
    interface_not_configured: cdktf.numberToTerraform(struct!.interfaceNotConfigured),
    outbound_addr_validation_failed: cdktf.numberToTerraform(struct!.outboundAddrValidationFailed),
    outbound_dest_unreachable: cdktf.numberToTerraform(struct!.outboundDestUnreachable),
    outbound_rev_lookup_failed: cdktf.numberToTerraform(struct!.outboundRevLookupFailed),
    packet_mtu_exceeded: cdktf.numberToTerraform(struct!.packetMtuExceeded),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsRateToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsRateOutputReference | VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
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
    threshold_exceeded_by: {
      value: cdktf.numberToHclTerraform(struct!.thresholdExceededBy),
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

export class VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsRate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._inboundAddrPortValidationFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundAddrPortValidationFailed = this._inboundAddrPortValidationFailed;
    }
    if (this._inboundDestUnreachable !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundDestUnreachable = this._inboundDestUnreachable;
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
    if (this._outboundRevLookupFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundRevLookupFailed = this._outboundRevLookupFailed;
    }
    if (this._packetMtuExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetMtuExceeded = this._packetMtuExceeded;
    }
    if (this._thresholdExceededBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdExceededBy = this._thresholdExceededBy;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsRate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._inboundAddrPortValidationFailed = undefined;
      this._inboundDestUnreachable = undefined;
      this._inboundRevLookupFailed = undefined;
      this._interfaceNotConfigured = undefined;
      this._outboundAddrValidationFailed = undefined;
      this._outboundDestUnreachable = undefined;
      this._outboundRevLookupFailed = undefined;
      this._packetMtuExceeded = undefined;
      this._thresholdExceededBy = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._inboundAddrPortValidationFailed = value.inboundAddrPortValidationFailed;
      this._inboundDestUnreachable = value.inboundDestUnreachable;
      this._inboundRevLookupFailed = value.inboundRevLookupFailed;
      this._interfaceNotConfigured = value.interfaceNotConfigured;
      this._outboundAddrValidationFailed = value.outboundAddrValidationFailed;
      this._outboundDestUnreachable = value.outboundDestUnreachable;
      this._outboundRevLookupFailed = value.outboundRevLookupFailed;
      this._packetMtuExceeded = value.packetMtuExceeded;
      this._thresholdExceededBy = value.thresholdExceededBy;
      this._uuid = value.uuid;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
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

  // threshold_exceeded_by - computed: false, optional: true, required: false
  private _thresholdExceededBy?: number; 
  public get thresholdExceededBy() {
    return this.getNumberAttribute('threshold_exceeded_by');
  }
  public set thresholdExceededBy(value: number) {
    this._thresholdExceededBy = value;
  }
  public resetThresholdExceededBy() {
    this._thresholdExceededBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdExceededByInput() {
    return this._thresholdExceededBy;
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
export interface VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsSeverity {
  /**
  * Enable packet capture on all drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl#drop VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmpl#drop}
  */
  readonly drop?: number;
  /**
  * Enable packet capture on all alert drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl#drop_alert VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmpl#drop_alert}
  */
  readonly dropAlert?: number;
  /**
  * Enable packet capture on all critical drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl#drop_critical VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmpl#drop_critical}
  */
  readonly dropCritical?: number;
  /**
  * Enable packet capture on all warning drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl#drop_warning VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmpl#drop_warning}
  */
  readonly dropWarning?: number;
  /**
  * Enable packet capture on all error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl#error VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmpl#error}
  */
  readonly error?: number;
  /**
  * Enable packet capture on all alert error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl#error_alert VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmpl#error_alert}
  */
  readonly errorAlert?: number;
  /**
  * Enable packet capture on all critical error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl#error_critical VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmpl#error_critical}
  */
  readonly errorCritical?: number;
  /**
  * Enable packet capture on all warning error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl#error_warning VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmpl#error_warning}
  */
  readonly errorWarning?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl#uuid VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmpl#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsSeverityToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsSeverityOutputReference | VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsSeverity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop: cdktf.numberToTerraform(struct!.drop),
    drop_alert: cdktf.numberToTerraform(struct!.dropAlert),
    drop_critical: cdktf.numberToTerraform(struct!.dropCritical),
    drop_warning: cdktf.numberToTerraform(struct!.dropWarning),
    error: cdktf.numberToTerraform(struct!.error),
    error_alert: cdktf.numberToTerraform(struct!.errorAlert),
    error_critical: cdktf.numberToTerraform(struct!.errorCritical),
    error_warning: cdktf.numberToTerraform(struct!.errorWarning),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsSeverityToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsSeverityOutputReference | VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsSeverity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drop: {
      value: cdktf.numberToHclTerraform(struct!.drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_alert: {
      value: cdktf.numberToHclTerraform(struct!.dropAlert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_critical: {
      value: cdktf.numberToHclTerraform(struct!.dropCritical),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_warning: {
      value: cdktf.numberToHclTerraform(struct!.dropWarning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error: {
      value: cdktf.numberToHclTerraform(struct!.error),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_alert: {
      value: cdktf.numberToHclTerraform(struct!.errorAlert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_critical: {
      value: cdktf.numberToHclTerraform(struct!.errorCritical),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_warning: {
      value: cdktf.numberToHclTerraform(struct!.errorWarning),
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

export class VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsSeverityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsSeverity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    if (this._dropAlert !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropAlert = this._dropAlert;
    }
    if (this._dropCritical !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropCritical = this._dropCritical;
    }
    if (this._dropWarning !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropWarning = this._dropWarning;
    }
    if (this._error !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error;
    }
    if (this._errorAlert !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorAlert = this._errorAlert;
    }
    if (this._errorCritical !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorCritical = this._errorCritical;
    }
    if (this._errorWarning !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorWarning = this._errorWarning;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsSeverity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._drop = undefined;
      this._dropAlert = undefined;
      this._dropCritical = undefined;
      this._dropWarning = undefined;
      this._error = undefined;
      this._errorAlert = undefined;
      this._errorCritical = undefined;
      this._errorWarning = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._drop = value.drop;
      this._dropAlert = value.dropAlert;
      this._dropCritical = value.dropCritical;
      this._dropWarning = value.dropWarning;
      this._error = value.error;
      this._errorAlert = value.errorAlert;
      this._errorCritical = value.errorCritical;
      this._errorWarning = value.errorWarning;
      this._uuid = value.uuid;
    }
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: number; 
  public get drop() {
    return this.getNumberAttribute('drop');
  }
  public set drop(value: number) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }

  // drop_alert - computed: false, optional: true, required: false
  private _dropAlert?: number; 
  public get dropAlert() {
    return this.getNumberAttribute('drop_alert');
  }
  public set dropAlert(value: number) {
    this._dropAlert = value;
  }
  public resetDropAlert() {
    this._dropAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropAlertInput() {
    return this._dropAlert;
  }

  // drop_critical - computed: false, optional: true, required: false
  private _dropCritical?: number; 
  public get dropCritical() {
    return this.getNumberAttribute('drop_critical');
  }
  public set dropCritical(value: number) {
    this._dropCritical = value;
  }
  public resetDropCritical() {
    this._dropCritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropCriticalInput() {
    return this._dropCritical;
  }

  // drop_warning - computed: false, optional: true, required: false
  private _dropWarning?: number; 
  public get dropWarning() {
    return this.getNumberAttribute('drop_warning');
  }
  public set dropWarning(value: number) {
    this._dropWarning = value;
  }
  public resetDropWarning() {
    this._dropWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropWarningInput() {
    return this._dropWarning;
  }

  // error - computed: false, optional: true, required: false
  private _error?: number; 
  public get error() {
    return this.getNumberAttribute('error');
  }
  public set error(value: number) {
    this._error = value;
  }
  public resetError() {
    this._error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error;
  }

  // error_alert - computed: false, optional: true, required: false
  private _errorAlert?: number; 
  public get errorAlert() {
    return this.getNumberAttribute('error_alert');
  }
  public set errorAlert(value: number) {
    this._errorAlert = value;
  }
  public resetErrorAlert() {
    this._errorAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorAlertInput() {
    return this._errorAlert;
  }

  // error_critical - computed: false, optional: true, required: false
  private _errorCritical?: number; 
  public get errorCritical() {
    return this.getNumberAttribute('error_critical');
  }
  public set errorCritical(value: number) {
    this._errorCritical = value;
  }
  public resetErrorCritical() {
    this._errorCritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorCriticalInput() {
    return this._errorCritical;
  }

  // error_warning - computed: false, optional: true, required: false
  private _errorWarning?: number; 
  public get errorWarning() {
    return this.getNumberAttribute('error_warning');
  }
  public set errorWarning(value: number) {
    this._errorWarning = value;
  }
  public resetErrorWarning() {
    this._errorWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorWarningInput() {
    return this._errorWarning;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl thunder_visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl}
*/
export class VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmpl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmpl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmpl to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmpl that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmpl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl thunder_visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_cgnv6_map_trans_domain_tmpl',
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
    this._captureConfig = config.captureConfig;
    this._id = config.id;
    this._name = config.name;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._triggerStatsInc.internalValue = config.triggerStatsInc;
    this._triggerStatsRate.internalValue = config.triggerStatsRate;
    this._triggerStatsSeverity.internalValue = config.triggerStatsSeverity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capture_config - computed: false, optional: true, required: false
  private _captureConfig?: string; 
  public get captureConfig() {
    return this.getStringAttribute('capture_config');
  }
  public set captureConfig(value: string) {
    this._captureConfig = value;
  }
  public resetCaptureConfig() {
    this._captureConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureConfigInput() {
    return this._captureConfig;
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

  // trigger_stats_inc - computed: false, optional: true, required: false
  private _triggerStatsInc = new VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsIncOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsInc) {
    this._triggerStatsInc.internalValue = value;
  }
  public resetTriggerStatsInc() {
    this._triggerStatsInc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerStatsIncInput() {
    return this._triggerStatsInc.internalValue;
  }

  // trigger_stats_rate - computed: false, optional: true, required: false
  private _triggerStatsRate = new VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsRateOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsRate) {
    this._triggerStatsRate.internalValue = value;
  }
  public resetTriggerStatsRate() {
    this._triggerStatsRate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerStatsRateInput() {
    return this._triggerStatsRate.internalValue;
  }

  // trigger_stats_severity - computed: false, optional: true, required: false
  private _triggerStatsSeverity = new VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsSeverityOutputReference(this, "trigger_stats_severity");
  public get triggerStatsSeverity() {
    return this._triggerStatsSeverity;
  }
  public putTriggerStatsSeverity(value: VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsSeverity) {
    this._triggerStatsSeverity.internalValue = value;
  }
  public resetTriggerStatsSeverity() {
    this._triggerStatsSeverity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerStatsSeverityInput() {
    return this._triggerStatsSeverity.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capture_config: cdktf.stringToTerraform(this._captureConfig),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      trigger_stats_inc: visibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsIncToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsRateToTerraform(this._triggerStatsRate.internalValue),
      trigger_stats_severity: visibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsSeverityToTerraform(this._triggerStatsSeverity.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capture_config: {
        value: cdktf.stringToHclTerraform(this._captureConfig),
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
      trigger_stats_inc: {
        value: visibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsIncToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsIncList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsRateToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsRateList",
      },
      trigger_stats_severity: {
        value: visibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsSeverityToHclTerraform(this._triggerStatsSeverity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureObjectTemplatesCgnv6MapTransDomainTmplTriggerStatsSeverityList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
