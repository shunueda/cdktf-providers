// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6TemplateLoggingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disable multiple logs per packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#batched_logging_disable Cgnv6TemplateLogging#batched_logging_disable}
  */
  readonly batchedLoggingDisable?: number;
  /**
  * 'kernel': 0: Kernel; 'user': 1: User-level; 'mail': 2: Mail; 'daemon': 3: System daemons; 'security-authorization': 4: Security/authorization; 'syslog': 5: Syslog internal; 'line-printer': 6: Line printer; 'news': 7: Network news; 'uucp': 8: UUCP subsystem; 'cron': 9: Time-related; 'security-authorization-private': 10: Private security/authorization; 'ftp': 11: FTP; 'ntp': 12: NTP; 'audit': 13: Audit; 'alert': 14: Alert; 'clock': 15: Clock-related; 'local0': 16: Local use 0; 'local1': 17: Local use 1; 'local2': 18: Local use 2; 'local3': 19: Local use 3; 'local4': 20: Local use 4; 'local5': 21: Local use 5; 'local6': 22: Local use 6; 'local7': 23: Local use 7;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#facility Cgnv6TemplateLogging#facility}
  */
  readonly facility?: string;
  /**
  * 'binary': Binary logging format; 'compact': Compact ASCII logging format (Hex format with compact representation); 'custom': Arbitrary custom logging format; 'default': Default A10 logging format (ASCII); 'rfc5424': RFC5424 compliant logging format; 'cef': Common Event Format for logging;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#format Cgnv6TemplateLogging#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#id Cgnv6TemplateLogging#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Include the destination IP and port in logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#include_destination Cgnv6TemplateLogging#include_destination}
  */
  readonly includeDestination?: number;
  /**
  * Include the inside user MAC address in logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#include_inside_user_mac Cgnv6TemplateLogging#include_inside_user_mac}
  */
  readonly includeInsideUserMac?: number;
  /**
  * Include partition name in logging events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#include_partition_name Cgnv6TemplateLogging#include_partition_name}
  */
  readonly includePartitionName?: number;
  /**
  * include bytes accounting information in port-batch-v2 port-mapping and fixed-nat user-ports messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#include_port_block_account Cgnv6TemplateLogging#include_port_block_account}
  */
  readonly includePortBlockAccount?: number;
  /**
  * include byte count in session deletion logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#include_session_byte_count Cgnv6TemplateLogging#include_session_byte_count}
  */
  readonly includeSessionByteCount?: number;
  /**
  * Logging template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#name Cgnv6TemplateLogging#name}
  */
  readonly name: string;
  /**
  * 'seconds': Logging timestamp resolution in seconds (default); '10-milliseconds': Logging timestamp resolution in 10s of milli-seconds;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#resolution Cgnv6TemplateLogging#resolution}
  */
  readonly resolution?: string;
  /**
  * Set NAT logging service-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#service_group Cgnv6TemplateLogging#service_group}
  */
  readonly serviceGroup?: string;
  /**
  * Service group is in shared patition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#shared Cgnv6TemplateLogging#shared}
  */
  readonly shared?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#user_tag Cgnv6TemplateLogging#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#uuid Cgnv6TemplateLogging#uuid}
  */
  readonly uuid?: string;
  /**
  * custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#custom Cgnv6TemplateLogging#custom}
  */
  readonly custom?: Cgnv6TemplateLoggingCustom;
  /**
  * disable_log_by_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#disable_log_by_destination Cgnv6TemplateLogging#disable_log_by_destination}
  */
  readonly disableLogByDestination?: Cgnv6TemplateLoggingDisableLogByDestination;
  /**
  * include_http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#include_http Cgnv6TemplateLogging#include_http}
  */
  readonly includeHttp?: Cgnv6TemplateLoggingIncludeHttp;
  /**
  * include_radius_attribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#include_radius_attribute Cgnv6TemplateLogging#include_radius_attribute}
  */
  readonly includeRadiusAttribute?: Cgnv6TemplateLoggingIncludeRadiusAttribute;
  /**
  * log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#log Cgnv6TemplateLogging#log}
  */
  readonly log?: Cgnv6TemplateLoggingLog;
  /**
  * log_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#log_receiver Cgnv6TemplateLogging#log_receiver}
  */
  readonly logReceiver?: Cgnv6TemplateLoggingLogReceiver;
  /**
  * rfc_custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#rfc_custom Cgnv6TemplateLogging#rfc_custom}
  */
  readonly rfcCustom?: Cgnv6TemplateLoggingRfcCustom;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#rule Cgnv6TemplateLogging#rule}
  */
  readonly rule?: Cgnv6TemplateLoggingRule;
  /**
  * severity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#severity Cgnv6TemplateLogging#severity}
  */
  readonly severity?: Cgnv6TemplateLoggingSeverity;
  /**
  * source_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#source_address Cgnv6TemplateLogging#source_address}
  */
  readonly sourceAddress?: Cgnv6TemplateLoggingSourceAddress;
  /**
  * source_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#source_port Cgnv6TemplateLogging#source_port}
  */
  readonly sourcePort?: Cgnv6TemplateLoggingSourcePort;
}
export interface Cgnv6TemplateLoggingCustomCustomMessage {
  /**
  * MAP DHCPv6 prefix assigned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#custom_dhcpv6_map_prefix_assigned Cgnv6TemplateLogging#custom_dhcpv6_map_prefix_assigned}
  */
  readonly customDhcpv6MapPrefixAssigned?: string;
  /**
  * MAP DHCPv6 prefix released
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#custom_dhcpv6_map_prefix_released Cgnv6TemplateLogging#custom_dhcpv6_map_prefix_released}
  */
  readonly customDhcpv6MapPrefixReleased?: string;
  /**
  * MAP DHCPv6 prefix renewed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#custom_dhcpv6_map_prefix_renewed Cgnv6TemplateLogging#custom_dhcpv6_map_prefix_renewed}
  */
  readonly customDhcpv6MapPrefixRenewed?: string;
  /**
  * Fixed-NAT allocated (Custom message string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#custom_fixed_nat_allocated Cgnv6TemplateLogging#custom_fixed_nat_allocated}
  */
  readonly customFixedNatAllocated?: string;
  /**
  * Fixed-NAT freed (Custom message string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#custom_fixed_nat_freed Cgnv6TemplateLogging#custom_fixed_nat_freed}
  */
  readonly customFixedNatFreed?: string;
  /**
  * Fixed-NAT interim update (Custom message string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#custom_fixed_nat_interim_update Cgnv6TemplateLogging#custom_fixed_nat_interim_update}
  */
  readonly customFixedNatInterimUpdate?: string;
  /**
  * HTTP request got (Custom message string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#custom_http_request_got Cgnv6TemplateLogging#custom_http_request_got}
  */
  readonly customHttpRequestGot?: string;
  /**
  * Port allocated (Custom message string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#custom_port_allocated Cgnv6TemplateLogging#custom_port_allocated}
  */
  readonly customPortAllocated?: string;
  /**
  * Port Batch allocated (Custom message string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#custom_port_batch_allocated Cgnv6TemplateLogging#custom_port_batch_allocated}
  */
  readonly customPortBatchAllocated?: string;
  /**
  * Port Batch freed (Custom message string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#custom_port_batch_freed Cgnv6TemplateLogging#custom_port_batch_freed}
  */
  readonly customPortBatchFreed?: string;
  /**
  * Port Batch v2 allocated (Custom message string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#custom_port_batch_v2_allocated Cgnv6TemplateLogging#custom_port_batch_v2_allocated}
  */
  readonly customPortBatchV2Allocated?: string;
  /**
  * Port Batch v2 freed (Custom message string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#custom_port_batch_v2_freed Cgnv6TemplateLogging#custom_port_batch_v2_freed}
  */
  readonly customPortBatchV2Freed?: string;
  /**
  * Port Batch v2 interim update (Custom message string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#custom_port_batch_v2_interim_update Cgnv6TemplateLogging#custom_port_batch_v2_interim_update}
  */
  readonly customPortBatchV2InterimUpdate?: string;
  /**
  * Port freed (Custom message string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#custom_port_freed Cgnv6TemplateLogging#custom_port_freed}
  */
  readonly customPortFreed?: string;
  /**
  * Session created (Custom message string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#custom_session_created Cgnv6TemplateLogging#custom_session_created}
  */
  readonly customSessionCreated?: string;
  /**
  * Session deleted (Custom message string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#custom_session_deleted Cgnv6TemplateLogging#custom_session_deleted}
  */
  readonly customSessionDeleted?: string;
}

export function cgnv6TemplateLoggingCustomCustomMessageToTerraform(struct?: Cgnv6TemplateLoggingCustomCustomMessageOutputReference | Cgnv6TemplateLoggingCustomCustomMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_dhcpv6_map_prefix_assigned: cdktf.stringToTerraform(struct!.customDhcpv6MapPrefixAssigned),
    custom_dhcpv6_map_prefix_released: cdktf.stringToTerraform(struct!.customDhcpv6MapPrefixReleased),
    custom_dhcpv6_map_prefix_renewed: cdktf.stringToTerraform(struct!.customDhcpv6MapPrefixRenewed),
    custom_fixed_nat_allocated: cdktf.stringToTerraform(struct!.customFixedNatAllocated),
    custom_fixed_nat_freed: cdktf.stringToTerraform(struct!.customFixedNatFreed),
    custom_fixed_nat_interim_update: cdktf.stringToTerraform(struct!.customFixedNatInterimUpdate),
    custom_http_request_got: cdktf.stringToTerraform(struct!.customHttpRequestGot),
    custom_port_allocated: cdktf.stringToTerraform(struct!.customPortAllocated),
    custom_port_batch_allocated: cdktf.stringToTerraform(struct!.customPortBatchAllocated),
    custom_port_batch_freed: cdktf.stringToTerraform(struct!.customPortBatchFreed),
    custom_port_batch_v2_allocated: cdktf.stringToTerraform(struct!.customPortBatchV2Allocated),
    custom_port_batch_v2_freed: cdktf.stringToTerraform(struct!.customPortBatchV2Freed),
    custom_port_batch_v2_interim_update: cdktf.stringToTerraform(struct!.customPortBatchV2InterimUpdate),
    custom_port_freed: cdktf.stringToTerraform(struct!.customPortFreed),
    custom_session_created: cdktf.stringToTerraform(struct!.customSessionCreated),
    custom_session_deleted: cdktf.stringToTerraform(struct!.customSessionDeleted),
  }
}


export function cgnv6TemplateLoggingCustomCustomMessageToHclTerraform(struct?: Cgnv6TemplateLoggingCustomCustomMessageOutputReference | Cgnv6TemplateLoggingCustomCustomMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_dhcpv6_map_prefix_assigned: {
      value: cdktf.stringToHclTerraform(struct!.customDhcpv6MapPrefixAssigned),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_dhcpv6_map_prefix_released: {
      value: cdktf.stringToHclTerraform(struct!.customDhcpv6MapPrefixReleased),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_dhcpv6_map_prefix_renewed: {
      value: cdktf.stringToHclTerraform(struct!.customDhcpv6MapPrefixRenewed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_fixed_nat_allocated: {
      value: cdktf.stringToHclTerraform(struct!.customFixedNatAllocated),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_fixed_nat_freed: {
      value: cdktf.stringToHclTerraform(struct!.customFixedNatFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_fixed_nat_interim_update: {
      value: cdktf.stringToHclTerraform(struct!.customFixedNatInterimUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_http_request_got: {
      value: cdktf.stringToHclTerraform(struct!.customHttpRequestGot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_port_allocated: {
      value: cdktf.stringToHclTerraform(struct!.customPortAllocated),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_port_batch_allocated: {
      value: cdktf.stringToHclTerraform(struct!.customPortBatchAllocated),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_port_batch_freed: {
      value: cdktf.stringToHclTerraform(struct!.customPortBatchFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_port_batch_v2_allocated: {
      value: cdktf.stringToHclTerraform(struct!.customPortBatchV2Allocated),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_port_batch_v2_freed: {
      value: cdktf.stringToHclTerraform(struct!.customPortBatchV2Freed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_port_batch_v2_interim_update: {
      value: cdktf.stringToHclTerraform(struct!.customPortBatchV2InterimUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_port_freed: {
      value: cdktf.stringToHclTerraform(struct!.customPortFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_session_created: {
      value: cdktf.stringToHclTerraform(struct!.customSessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_session_deleted: {
      value: cdktf.stringToHclTerraform(struct!.customSessionDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplateLoggingCustomCustomMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6TemplateLoggingCustomCustomMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customDhcpv6MapPrefixAssigned !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDhcpv6MapPrefixAssigned = this._customDhcpv6MapPrefixAssigned;
    }
    if (this._customDhcpv6MapPrefixReleased !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDhcpv6MapPrefixReleased = this._customDhcpv6MapPrefixReleased;
    }
    if (this._customDhcpv6MapPrefixRenewed !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDhcpv6MapPrefixRenewed = this._customDhcpv6MapPrefixRenewed;
    }
    if (this._customFixedNatAllocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFixedNatAllocated = this._customFixedNatAllocated;
    }
    if (this._customFixedNatFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFixedNatFreed = this._customFixedNatFreed;
    }
    if (this._customFixedNatInterimUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFixedNatInterimUpdate = this._customFixedNatInterimUpdate;
    }
    if (this._customHttpRequestGot !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHttpRequestGot = this._customHttpRequestGot;
    }
    if (this._customPortAllocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortAllocated = this._customPortAllocated;
    }
    if (this._customPortBatchAllocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchAllocated = this._customPortBatchAllocated;
    }
    if (this._customPortBatchFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchFreed = this._customPortBatchFreed;
    }
    if (this._customPortBatchV2Allocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchV2Allocated = this._customPortBatchV2Allocated;
    }
    if (this._customPortBatchV2Freed !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchV2Freed = this._customPortBatchV2Freed;
    }
    if (this._customPortBatchV2InterimUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchV2InterimUpdate = this._customPortBatchV2InterimUpdate;
    }
    if (this._customPortFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortFreed = this._customPortFreed;
    }
    if (this._customSessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionCreated = this._customSessionCreated;
    }
    if (this._customSessionDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionDeleted = this._customSessionDeleted;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateLoggingCustomCustomMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customDhcpv6MapPrefixAssigned = undefined;
      this._customDhcpv6MapPrefixReleased = undefined;
      this._customDhcpv6MapPrefixRenewed = undefined;
      this._customFixedNatAllocated = undefined;
      this._customFixedNatFreed = undefined;
      this._customFixedNatInterimUpdate = undefined;
      this._customHttpRequestGot = undefined;
      this._customPortAllocated = undefined;
      this._customPortBatchAllocated = undefined;
      this._customPortBatchFreed = undefined;
      this._customPortBatchV2Allocated = undefined;
      this._customPortBatchV2Freed = undefined;
      this._customPortBatchV2InterimUpdate = undefined;
      this._customPortFreed = undefined;
      this._customSessionCreated = undefined;
      this._customSessionDeleted = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customDhcpv6MapPrefixAssigned = value.customDhcpv6MapPrefixAssigned;
      this._customDhcpv6MapPrefixReleased = value.customDhcpv6MapPrefixReleased;
      this._customDhcpv6MapPrefixRenewed = value.customDhcpv6MapPrefixRenewed;
      this._customFixedNatAllocated = value.customFixedNatAllocated;
      this._customFixedNatFreed = value.customFixedNatFreed;
      this._customFixedNatInterimUpdate = value.customFixedNatInterimUpdate;
      this._customHttpRequestGot = value.customHttpRequestGot;
      this._customPortAllocated = value.customPortAllocated;
      this._customPortBatchAllocated = value.customPortBatchAllocated;
      this._customPortBatchFreed = value.customPortBatchFreed;
      this._customPortBatchV2Allocated = value.customPortBatchV2Allocated;
      this._customPortBatchV2Freed = value.customPortBatchV2Freed;
      this._customPortBatchV2InterimUpdate = value.customPortBatchV2InterimUpdate;
      this._customPortFreed = value.customPortFreed;
      this._customSessionCreated = value.customSessionCreated;
      this._customSessionDeleted = value.customSessionDeleted;
    }
  }

  // custom_dhcpv6_map_prefix_assigned - computed: false, optional: true, required: false
  private _customDhcpv6MapPrefixAssigned?: string; 
  public get customDhcpv6MapPrefixAssigned() {
    return this.getStringAttribute('custom_dhcpv6_map_prefix_assigned');
  }
  public set customDhcpv6MapPrefixAssigned(value: string) {
    this._customDhcpv6MapPrefixAssigned = value;
  }
  public resetCustomDhcpv6MapPrefixAssigned() {
    this._customDhcpv6MapPrefixAssigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDhcpv6MapPrefixAssignedInput() {
    return this._customDhcpv6MapPrefixAssigned;
  }

  // custom_dhcpv6_map_prefix_released - computed: false, optional: true, required: false
  private _customDhcpv6MapPrefixReleased?: string; 
  public get customDhcpv6MapPrefixReleased() {
    return this.getStringAttribute('custom_dhcpv6_map_prefix_released');
  }
  public set customDhcpv6MapPrefixReleased(value: string) {
    this._customDhcpv6MapPrefixReleased = value;
  }
  public resetCustomDhcpv6MapPrefixReleased() {
    this._customDhcpv6MapPrefixReleased = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDhcpv6MapPrefixReleasedInput() {
    return this._customDhcpv6MapPrefixReleased;
  }

  // custom_dhcpv6_map_prefix_renewed - computed: false, optional: true, required: false
  private _customDhcpv6MapPrefixRenewed?: string; 
  public get customDhcpv6MapPrefixRenewed() {
    return this.getStringAttribute('custom_dhcpv6_map_prefix_renewed');
  }
  public set customDhcpv6MapPrefixRenewed(value: string) {
    this._customDhcpv6MapPrefixRenewed = value;
  }
  public resetCustomDhcpv6MapPrefixRenewed() {
    this._customDhcpv6MapPrefixRenewed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDhcpv6MapPrefixRenewedInput() {
    return this._customDhcpv6MapPrefixRenewed;
  }

  // custom_fixed_nat_allocated - computed: false, optional: true, required: false
  private _customFixedNatAllocated?: string; 
  public get customFixedNatAllocated() {
    return this.getStringAttribute('custom_fixed_nat_allocated');
  }
  public set customFixedNatAllocated(value: string) {
    this._customFixedNatAllocated = value;
  }
  public resetCustomFixedNatAllocated() {
    this._customFixedNatAllocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFixedNatAllocatedInput() {
    return this._customFixedNatAllocated;
  }

  // custom_fixed_nat_freed - computed: false, optional: true, required: false
  private _customFixedNatFreed?: string; 
  public get customFixedNatFreed() {
    return this.getStringAttribute('custom_fixed_nat_freed');
  }
  public set customFixedNatFreed(value: string) {
    this._customFixedNatFreed = value;
  }
  public resetCustomFixedNatFreed() {
    this._customFixedNatFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFixedNatFreedInput() {
    return this._customFixedNatFreed;
  }

  // custom_fixed_nat_interim_update - computed: false, optional: true, required: false
  private _customFixedNatInterimUpdate?: string; 
  public get customFixedNatInterimUpdate() {
    return this.getStringAttribute('custom_fixed_nat_interim_update');
  }
  public set customFixedNatInterimUpdate(value: string) {
    this._customFixedNatInterimUpdate = value;
  }
  public resetCustomFixedNatInterimUpdate() {
    this._customFixedNatInterimUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFixedNatInterimUpdateInput() {
    return this._customFixedNatInterimUpdate;
  }

  // custom_http_request_got - computed: false, optional: true, required: false
  private _customHttpRequestGot?: string; 
  public get customHttpRequestGot() {
    return this.getStringAttribute('custom_http_request_got');
  }
  public set customHttpRequestGot(value: string) {
    this._customHttpRequestGot = value;
  }
  public resetCustomHttpRequestGot() {
    this._customHttpRequestGot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHttpRequestGotInput() {
    return this._customHttpRequestGot;
  }

  // custom_port_allocated - computed: false, optional: true, required: false
  private _customPortAllocated?: string; 
  public get customPortAllocated() {
    return this.getStringAttribute('custom_port_allocated');
  }
  public set customPortAllocated(value: string) {
    this._customPortAllocated = value;
  }
  public resetCustomPortAllocated() {
    this._customPortAllocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortAllocatedInput() {
    return this._customPortAllocated;
  }

  // custom_port_batch_allocated - computed: false, optional: true, required: false
  private _customPortBatchAllocated?: string; 
  public get customPortBatchAllocated() {
    return this.getStringAttribute('custom_port_batch_allocated');
  }
  public set customPortBatchAllocated(value: string) {
    this._customPortBatchAllocated = value;
  }
  public resetCustomPortBatchAllocated() {
    this._customPortBatchAllocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortBatchAllocatedInput() {
    return this._customPortBatchAllocated;
  }

  // custom_port_batch_freed - computed: false, optional: true, required: false
  private _customPortBatchFreed?: string; 
  public get customPortBatchFreed() {
    return this.getStringAttribute('custom_port_batch_freed');
  }
  public set customPortBatchFreed(value: string) {
    this._customPortBatchFreed = value;
  }
  public resetCustomPortBatchFreed() {
    this._customPortBatchFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortBatchFreedInput() {
    return this._customPortBatchFreed;
  }

  // custom_port_batch_v2_allocated - computed: false, optional: true, required: false
  private _customPortBatchV2Allocated?: string; 
  public get customPortBatchV2Allocated() {
    return this.getStringAttribute('custom_port_batch_v2_allocated');
  }
  public set customPortBatchV2Allocated(value: string) {
    this._customPortBatchV2Allocated = value;
  }
  public resetCustomPortBatchV2Allocated() {
    this._customPortBatchV2Allocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortBatchV2AllocatedInput() {
    return this._customPortBatchV2Allocated;
  }

  // custom_port_batch_v2_freed - computed: false, optional: true, required: false
  private _customPortBatchV2Freed?: string; 
  public get customPortBatchV2Freed() {
    return this.getStringAttribute('custom_port_batch_v2_freed');
  }
  public set customPortBatchV2Freed(value: string) {
    this._customPortBatchV2Freed = value;
  }
  public resetCustomPortBatchV2Freed() {
    this._customPortBatchV2Freed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortBatchV2FreedInput() {
    return this._customPortBatchV2Freed;
  }

  // custom_port_batch_v2_interim_update - computed: false, optional: true, required: false
  private _customPortBatchV2InterimUpdate?: string; 
  public get customPortBatchV2InterimUpdate() {
    return this.getStringAttribute('custom_port_batch_v2_interim_update');
  }
  public set customPortBatchV2InterimUpdate(value: string) {
    this._customPortBatchV2InterimUpdate = value;
  }
  public resetCustomPortBatchV2InterimUpdate() {
    this._customPortBatchV2InterimUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortBatchV2InterimUpdateInput() {
    return this._customPortBatchV2InterimUpdate;
  }

  // custom_port_freed - computed: false, optional: true, required: false
  private _customPortFreed?: string; 
  public get customPortFreed() {
    return this.getStringAttribute('custom_port_freed');
  }
  public set customPortFreed(value: string) {
    this._customPortFreed = value;
  }
  public resetCustomPortFreed() {
    this._customPortFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortFreedInput() {
    return this._customPortFreed;
  }

  // custom_session_created - computed: false, optional: true, required: false
  private _customSessionCreated?: string; 
  public get customSessionCreated() {
    return this.getStringAttribute('custom_session_created');
  }
  public set customSessionCreated(value: string) {
    this._customSessionCreated = value;
  }
  public resetCustomSessionCreated() {
    this._customSessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSessionCreatedInput() {
    return this._customSessionCreated;
  }

  // custom_session_deleted - computed: false, optional: true, required: false
  private _customSessionDeleted?: string; 
  public get customSessionDeleted() {
    return this.getStringAttribute('custom_session_deleted');
  }
  public set customSessionDeleted(value: string) {
    this._customSessionDeleted = value;
  }
  public resetCustomSessionDeleted() {
    this._customSessionDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSessionDeletedInput() {
    return this._customSessionDeleted;
  }
}
export interface Cgnv6TemplateLoggingCustom {
  /**
  * 'use-syslog-header': Use syslog header as custom log header;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#custom_header Cgnv6TemplateLogging#custom_header}
  */
  readonly customHeader?: string;
  /**
  * Customize the time stamp format (Customize the time-stamp format. Default:%Y%m%d%H%M%S)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#custom_time_stamp_format Cgnv6TemplateLogging#custom_time_stamp_format}
  */
  readonly customTimeStampFormat?: string;
  /**
  * custom_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#custom_message Cgnv6TemplateLogging#custom_message}
  */
  readonly customMessage?: Cgnv6TemplateLoggingCustomCustomMessage;
}

export function cgnv6TemplateLoggingCustomToTerraform(struct?: Cgnv6TemplateLoggingCustomOutputReference | Cgnv6TemplateLoggingCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_header: cdktf.stringToTerraform(struct!.customHeader),
    custom_time_stamp_format: cdktf.stringToTerraform(struct!.customTimeStampFormat),
    custom_message: cgnv6TemplateLoggingCustomCustomMessageToTerraform(struct!.customMessage),
  }
}


export function cgnv6TemplateLoggingCustomToHclTerraform(struct?: Cgnv6TemplateLoggingCustomOutputReference | Cgnv6TemplateLoggingCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_header: {
      value: cdktf.stringToHclTerraform(struct!.customHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_time_stamp_format: {
      value: cdktf.stringToHclTerraform(struct!.customTimeStampFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_message: {
      value: cgnv6TemplateLoggingCustomCustomMessageToHclTerraform(struct!.customMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6TemplateLoggingCustomCustomMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplateLoggingCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6TemplateLoggingCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeader = this._customHeader;
    }
    if (this._customTimeStampFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTimeStampFormat = this._customTimeStampFormat;
    }
    if (this._customMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMessage = this._customMessage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateLoggingCustom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customHeader = undefined;
      this._customTimeStampFormat = undefined;
      this._customMessage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customHeader = value.customHeader;
      this._customTimeStampFormat = value.customTimeStampFormat;
      this._customMessage.internalValue = value.customMessage;
    }
  }

  // custom_header - computed: false, optional: true, required: false
  private _customHeader?: string; 
  public get customHeader() {
    return this.getStringAttribute('custom_header');
  }
  public set customHeader(value: string) {
    this._customHeader = value;
  }
  public resetCustomHeader() {
    this._customHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeaderInput() {
    return this._customHeader;
  }

  // custom_time_stamp_format - computed: false, optional: true, required: false
  private _customTimeStampFormat?: string; 
  public get customTimeStampFormat() {
    return this.getStringAttribute('custom_time_stamp_format');
  }
  public set customTimeStampFormat(value: string) {
    this._customTimeStampFormat = value;
  }
  public resetCustomTimeStampFormat() {
    this._customTimeStampFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTimeStampFormatInput() {
    return this._customTimeStampFormat;
  }

  // custom_message - computed: false, optional: true, required: false
  private _customMessage = new Cgnv6TemplateLoggingCustomCustomMessageOutputReference(this, "custom_message");
  public get customMessage() {
    return this._customMessage;
  }
  public putCustomMessage(value: Cgnv6TemplateLoggingCustomCustomMessage) {
    this._customMessage.internalValue = value;
  }
  public resetCustomMessage() {
    this._customMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMessageInput() {
    return this._customMessage.internalValue;
  }
}
export interface Cgnv6TemplateLoggingDisableLogByDestinationIp6ListTcpListStruct {
  /**
  * Port Range End
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#tcp_port_end Cgnv6TemplateLogging#tcp_port_end}
  */
  readonly tcpPortEnd?: number;
  /**
  * Destination Port (Single Destination Port or Port Range Start)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#tcp_port_start Cgnv6TemplateLogging#tcp_port_start}
  */
  readonly tcpPortStart?: number;
}

export function cgnv6TemplateLoggingDisableLogByDestinationIp6ListTcpListStructToTerraform(struct?: Cgnv6TemplateLoggingDisableLogByDestinationIp6ListTcpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tcp_port_end: cdktf.numberToTerraform(struct!.tcpPortEnd),
    tcp_port_start: cdktf.numberToTerraform(struct!.tcpPortStart),
  }
}


export function cgnv6TemplateLoggingDisableLogByDestinationIp6ListTcpListStructToHclTerraform(struct?: Cgnv6TemplateLoggingDisableLogByDestinationIp6ListTcpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tcp_port_end: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_port_start: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplateLoggingDisableLogByDestinationIp6ListTcpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6TemplateLoggingDisableLogByDestinationIp6ListTcpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tcpPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortEnd = this._tcpPortEnd;
    }
    if (this._tcpPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortStart = this._tcpPortStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateLoggingDisableLogByDestinationIp6ListTcpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tcpPortEnd = undefined;
      this._tcpPortStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tcpPortEnd = value.tcpPortEnd;
      this._tcpPortStart = value.tcpPortStart;
    }
  }

  // tcp_port_end - computed: false, optional: true, required: false
  private _tcpPortEnd?: number; 
  public get tcpPortEnd() {
    return this.getNumberAttribute('tcp_port_end');
  }
  public set tcpPortEnd(value: number) {
    this._tcpPortEnd = value;
  }
  public resetTcpPortEnd() {
    this._tcpPortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortEndInput() {
    return this._tcpPortEnd;
  }

  // tcp_port_start - computed: false, optional: true, required: false
  private _tcpPortStart?: number; 
  public get tcpPortStart() {
    return this.getNumberAttribute('tcp_port_start');
  }
  public set tcpPortStart(value: number) {
    this._tcpPortStart = value;
  }
  public resetTcpPortStart() {
    this._tcpPortStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortStartInput() {
    return this._tcpPortStart;
  }
}

export class Cgnv6TemplateLoggingDisableLogByDestinationIp6ListTcpListStructList extends cdktf.ComplexList {
  public internalValue? : Cgnv6TemplateLoggingDisableLogByDestinationIp6ListTcpListStruct[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6TemplateLoggingDisableLogByDestinationIp6ListTcpListStructOutputReference {
    return new Cgnv6TemplateLoggingDisableLogByDestinationIp6ListTcpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6TemplateLoggingDisableLogByDestinationIp6ListUdpListStruct {
  /**
  * Port Range End
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#udp_port_end Cgnv6TemplateLogging#udp_port_end}
  */
  readonly udpPortEnd?: number;
  /**
  * Destination Port (Single Destination Port or Port Range Start)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#udp_port_start Cgnv6TemplateLogging#udp_port_start}
  */
  readonly udpPortStart?: number;
}

export function cgnv6TemplateLoggingDisableLogByDestinationIp6ListUdpListStructToTerraform(struct?: Cgnv6TemplateLoggingDisableLogByDestinationIp6ListUdpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    udp_port_end: cdktf.numberToTerraform(struct!.udpPortEnd),
    udp_port_start: cdktf.numberToTerraform(struct!.udpPortStart),
  }
}


export function cgnv6TemplateLoggingDisableLogByDestinationIp6ListUdpListStructToHclTerraform(struct?: Cgnv6TemplateLoggingDisableLogByDestinationIp6ListUdpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    udp_port_end: {
      value: cdktf.numberToHclTerraform(struct!.udpPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_port_start: {
      value: cdktf.numberToHclTerraform(struct!.udpPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplateLoggingDisableLogByDestinationIp6ListUdpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6TemplateLoggingDisableLogByDestinationIp6ListUdpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._udpPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortEnd = this._udpPortEnd;
    }
    if (this._udpPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortStart = this._udpPortStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateLoggingDisableLogByDestinationIp6ListUdpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._udpPortEnd = undefined;
      this._udpPortStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._udpPortEnd = value.udpPortEnd;
      this._udpPortStart = value.udpPortStart;
    }
  }

  // udp_port_end - computed: false, optional: true, required: false
  private _udpPortEnd?: number; 
  public get udpPortEnd() {
    return this.getNumberAttribute('udp_port_end');
  }
  public set udpPortEnd(value: number) {
    this._udpPortEnd = value;
  }
  public resetUdpPortEnd() {
    this._udpPortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortEndInput() {
    return this._udpPortEnd;
  }

  // udp_port_start - computed: false, optional: true, required: false
  private _udpPortStart?: number; 
  public get udpPortStart() {
    return this.getNumberAttribute('udp_port_start');
  }
  public set udpPortStart(value: number) {
    this._udpPortStart = value;
  }
  public resetUdpPortStart() {
    this._udpPortStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortStartInput() {
    return this._udpPortStart;
  }
}

export class Cgnv6TemplateLoggingDisableLogByDestinationIp6ListUdpListStructList extends cdktf.ComplexList {
  public internalValue? : Cgnv6TemplateLoggingDisableLogByDestinationIp6ListUdpListStruct[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6TemplateLoggingDisableLogByDestinationIp6ListUdpListStructOutputReference {
    return new Cgnv6TemplateLoggingDisableLogByDestinationIp6ListUdpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6TemplateLoggingDisableLogByDestinationIp6ListStruct {
  /**
  * Disable logging for icmp traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#icmp Cgnv6TemplateLogging#icmp}
  */
  readonly icmp?: number;
  /**
  * Configure an IPv6 subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#ipv6_addr Cgnv6TemplateLogging#ipv6_addr}
  */
  readonly ipv6Addr: string;
  /**
  * Disable logging for other L4 protocols
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#others Cgnv6TemplateLogging#others}
  */
  readonly others?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#user_tag Cgnv6TemplateLogging#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#uuid Cgnv6TemplateLogging#uuid}
  */
  readonly uuid?: string;
  /**
  * tcp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#tcp_list Cgnv6TemplateLogging#tcp_list}
  */
  readonly tcpList?: Cgnv6TemplateLoggingDisableLogByDestinationIp6ListTcpListStruct[] | cdktf.IResolvable;
  /**
  * udp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#udp_list Cgnv6TemplateLogging#udp_list}
  */
  readonly udpList?: Cgnv6TemplateLoggingDisableLogByDestinationIp6ListUdpListStruct[] | cdktf.IResolvable;
}

export function cgnv6TemplateLoggingDisableLogByDestinationIp6ListStructToTerraform(struct?: Cgnv6TemplateLoggingDisableLogByDestinationIp6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp: cdktf.numberToTerraform(struct!.icmp),
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    others: cdktf.numberToTerraform(struct!.others),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    tcp_list: cdktf.listMapper(cgnv6TemplateLoggingDisableLogByDestinationIp6ListTcpListStructToTerraform, true)(struct!.tcpList),
    udp_list: cdktf.listMapper(cgnv6TemplateLoggingDisableLogByDestinationIp6ListUdpListStructToTerraform, true)(struct!.udpList),
  }
}


export function cgnv6TemplateLoggingDisableLogByDestinationIp6ListStructToHclTerraform(struct?: Cgnv6TemplateLoggingDisableLogByDestinationIp6ListStruct | cdktf.IResolvable): any {
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
    ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    others: {
      value: cdktf.numberToHclTerraform(struct!.others),
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
    tcp_list: {
      value: cdktf.listMapperHcl(cgnv6TemplateLoggingDisableLogByDestinationIp6ListTcpListStructToHclTerraform, true)(struct!.tcpList),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6TemplateLoggingDisableLogByDestinationIp6ListTcpListStructList",
    },
    udp_list: {
      value: cdktf.listMapperHcl(cgnv6TemplateLoggingDisableLogByDestinationIp6ListUdpListStructToHclTerraform, true)(struct!.udpList),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6TemplateLoggingDisableLogByDestinationIp6ListUdpListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplateLoggingDisableLogByDestinationIp6ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6TemplateLoggingDisableLogByDestinationIp6ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmp = this._icmp;
    }
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    if (this._others !== undefined) {
      hasAnyValues = true;
      internalValueResult.others = this._others;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._tcpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpList = this._tcpList?.internalValue;
    }
    if (this._udpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpList = this._udpList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateLoggingDisableLogByDestinationIp6ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icmp = undefined;
      this._ipv6Addr = undefined;
      this._others = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._tcpList.internalValue = undefined;
      this._udpList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icmp = value.icmp;
      this._ipv6Addr = value.ipv6Addr;
      this._others = value.others;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._tcpList.internalValue = value.tcpList;
      this._udpList.internalValue = value.udpList;
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

  // ipv6_addr - computed: false, optional: false, required: true
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6_addr');
  }
  public set ipv6Addr(value: string) {
    this._ipv6Addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrInput() {
    return this._ipv6Addr;
  }

  // others - computed: false, optional: true, required: false
  private _others?: number; 
  public get others() {
    return this.getNumberAttribute('others');
  }
  public set others(value: number) {
    this._others = value;
  }
  public resetOthers() {
    this._others = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get othersInput() {
    return this._others;
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

  // tcp_list - computed: false, optional: true, required: false
  private _tcpList = new Cgnv6TemplateLoggingDisableLogByDestinationIp6ListTcpListStructList(this, "tcp_list", false);
  public get tcpList() {
    return this._tcpList;
  }
  public putTcpList(value: Cgnv6TemplateLoggingDisableLogByDestinationIp6ListTcpListStruct[] | cdktf.IResolvable) {
    this._tcpList.internalValue = value;
  }
  public resetTcpList() {
    this._tcpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpListInput() {
    return this._tcpList.internalValue;
  }

  // udp_list - computed: false, optional: true, required: false
  private _udpList = new Cgnv6TemplateLoggingDisableLogByDestinationIp6ListUdpListStructList(this, "udp_list", false);
  public get udpList() {
    return this._udpList;
  }
  public putUdpList(value: Cgnv6TemplateLoggingDisableLogByDestinationIp6ListUdpListStruct[] | cdktf.IResolvable) {
    this._udpList.internalValue = value;
  }
  public resetUdpList() {
    this._udpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpListInput() {
    return this._udpList.internalValue;
  }
}

export class Cgnv6TemplateLoggingDisableLogByDestinationIp6ListStructList extends cdktf.ComplexList {
  public internalValue? : Cgnv6TemplateLoggingDisableLogByDestinationIp6ListStruct[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6TemplateLoggingDisableLogByDestinationIp6ListStructOutputReference {
    return new Cgnv6TemplateLoggingDisableLogByDestinationIp6ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6TemplateLoggingDisableLogByDestinationIpListTcpListStruct {
  /**
  * Port Range End
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#tcp_port_end Cgnv6TemplateLogging#tcp_port_end}
  */
  readonly tcpPortEnd?: number;
  /**
  * Destination Port (Single Destination Port or Port Range Start)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#tcp_port_start Cgnv6TemplateLogging#tcp_port_start}
  */
  readonly tcpPortStart?: number;
}

export function cgnv6TemplateLoggingDisableLogByDestinationIpListTcpListStructToTerraform(struct?: Cgnv6TemplateLoggingDisableLogByDestinationIpListTcpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tcp_port_end: cdktf.numberToTerraform(struct!.tcpPortEnd),
    tcp_port_start: cdktf.numberToTerraform(struct!.tcpPortStart),
  }
}


export function cgnv6TemplateLoggingDisableLogByDestinationIpListTcpListStructToHclTerraform(struct?: Cgnv6TemplateLoggingDisableLogByDestinationIpListTcpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tcp_port_end: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_port_start: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplateLoggingDisableLogByDestinationIpListTcpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6TemplateLoggingDisableLogByDestinationIpListTcpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tcpPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortEnd = this._tcpPortEnd;
    }
    if (this._tcpPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortStart = this._tcpPortStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateLoggingDisableLogByDestinationIpListTcpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tcpPortEnd = undefined;
      this._tcpPortStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tcpPortEnd = value.tcpPortEnd;
      this._tcpPortStart = value.tcpPortStart;
    }
  }

  // tcp_port_end - computed: false, optional: true, required: false
  private _tcpPortEnd?: number; 
  public get tcpPortEnd() {
    return this.getNumberAttribute('tcp_port_end');
  }
  public set tcpPortEnd(value: number) {
    this._tcpPortEnd = value;
  }
  public resetTcpPortEnd() {
    this._tcpPortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortEndInput() {
    return this._tcpPortEnd;
  }

  // tcp_port_start - computed: false, optional: true, required: false
  private _tcpPortStart?: number; 
  public get tcpPortStart() {
    return this.getNumberAttribute('tcp_port_start');
  }
  public set tcpPortStart(value: number) {
    this._tcpPortStart = value;
  }
  public resetTcpPortStart() {
    this._tcpPortStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortStartInput() {
    return this._tcpPortStart;
  }
}

export class Cgnv6TemplateLoggingDisableLogByDestinationIpListTcpListStructList extends cdktf.ComplexList {
  public internalValue? : Cgnv6TemplateLoggingDisableLogByDestinationIpListTcpListStruct[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6TemplateLoggingDisableLogByDestinationIpListTcpListStructOutputReference {
    return new Cgnv6TemplateLoggingDisableLogByDestinationIpListTcpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6TemplateLoggingDisableLogByDestinationIpListUdpListStruct {
  /**
  * Port Range End
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#udp_port_end Cgnv6TemplateLogging#udp_port_end}
  */
  readonly udpPortEnd?: number;
  /**
  * Destination Port (Single Destination Port or Port Range Start)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#udp_port_start Cgnv6TemplateLogging#udp_port_start}
  */
  readonly udpPortStart?: number;
}

export function cgnv6TemplateLoggingDisableLogByDestinationIpListUdpListStructToTerraform(struct?: Cgnv6TemplateLoggingDisableLogByDestinationIpListUdpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    udp_port_end: cdktf.numberToTerraform(struct!.udpPortEnd),
    udp_port_start: cdktf.numberToTerraform(struct!.udpPortStart),
  }
}


export function cgnv6TemplateLoggingDisableLogByDestinationIpListUdpListStructToHclTerraform(struct?: Cgnv6TemplateLoggingDisableLogByDestinationIpListUdpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    udp_port_end: {
      value: cdktf.numberToHclTerraform(struct!.udpPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_port_start: {
      value: cdktf.numberToHclTerraform(struct!.udpPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplateLoggingDisableLogByDestinationIpListUdpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6TemplateLoggingDisableLogByDestinationIpListUdpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._udpPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortEnd = this._udpPortEnd;
    }
    if (this._udpPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortStart = this._udpPortStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateLoggingDisableLogByDestinationIpListUdpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._udpPortEnd = undefined;
      this._udpPortStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._udpPortEnd = value.udpPortEnd;
      this._udpPortStart = value.udpPortStart;
    }
  }

  // udp_port_end - computed: false, optional: true, required: false
  private _udpPortEnd?: number; 
  public get udpPortEnd() {
    return this.getNumberAttribute('udp_port_end');
  }
  public set udpPortEnd(value: number) {
    this._udpPortEnd = value;
  }
  public resetUdpPortEnd() {
    this._udpPortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortEndInput() {
    return this._udpPortEnd;
  }

  // udp_port_start - computed: false, optional: true, required: false
  private _udpPortStart?: number; 
  public get udpPortStart() {
    return this.getNumberAttribute('udp_port_start');
  }
  public set udpPortStart(value: number) {
    this._udpPortStart = value;
  }
  public resetUdpPortStart() {
    this._udpPortStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortStartInput() {
    return this._udpPortStart;
  }
}

export class Cgnv6TemplateLoggingDisableLogByDestinationIpListUdpListStructList extends cdktf.ComplexList {
  public internalValue? : Cgnv6TemplateLoggingDisableLogByDestinationIpListUdpListStruct[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6TemplateLoggingDisableLogByDestinationIpListUdpListStructOutputReference {
    return new Cgnv6TemplateLoggingDisableLogByDestinationIpListUdpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6TemplateLoggingDisableLogByDestinationIpListStruct {
  /**
  * Disable logging for icmp traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#icmp Cgnv6TemplateLogging#icmp}
  */
  readonly icmp?: number;
  /**
  * Configure an IP subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#ipv4_addr Cgnv6TemplateLogging#ipv4_addr}
  */
  readonly ipv4Addr: string;
  /**
  * Disable logging for other L4 protocols
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#others Cgnv6TemplateLogging#others}
  */
  readonly others?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#user_tag Cgnv6TemplateLogging#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#uuid Cgnv6TemplateLogging#uuid}
  */
  readonly uuid?: string;
  /**
  * tcp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#tcp_list Cgnv6TemplateLogging#tcp_list}
  */
  readonly tcpList?: Cgnv6TemplateLoggingDisableLogByDestinationIpListTcpListStruct[] | cdktf.IResolvable;
  /**
  * udp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#udp_list Cgnv6TemplateLogging#udp_list}
  */
  readonly udpList?: Cgnv6TemplateLoggingDisableLogByDestinationIpListUdpListStruct[] | cdktf.IResolvable;
}

export function cgnv6TemplateLoggingDisableLogByDestinationIpListStructToTerraform(struct?: Cgnv6TemplateLoggingDisableLogByDestinationIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp: cdktf.numberToTerraform(struct!.icmp),
    ipv4_addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    others: cdktf.numberToTerraform(struct!.others),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    tcp_list: cdktf.listMapper(cgnv6TemplateLoggingDisableLogByDestinationIpListTcpListStructToTerraform, true)(struct!.tcpList),
    udp_list: cdktf.listMapper(cgnv6TemplateLoggingDisableLogByDestinationIpListUdpListStructToTerraform, true)(struct!.udpList),
  }
}


export function cgnv6TemplateLoggingDisableLogByDestinationIpListStructToHclTerraform(struct?: Cgnv6TemplateLoggingDisableLogByDestinationIpListStruct | cdktf.IResolvable): any {
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
    ipv4_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    others: {
      value: cdktf.numberToHclTerraform(struct!.others),
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
    tcp_list: {
      value: cdktf.listMapperHcl(cgnv6TemplateLoggingDisableLogByDestinationIpListTcpListStructToHclTerraform, true)(struct!.tcpList),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6TemplateLoggingDisableLogByDestinationIpListTcpListStructList",
    },
    udp_list: {
      value: cdktf.listMapperHcl(cgnv6TemplateLoggingDisableLogByDestinationIpListUdpListStructToHclTerraform, true)(struct!.udpList),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6TemplateLoggingDisableLogByDestinationIpListUdpListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplateLoggingDisableLogByDestinationIpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6TemplateLoggingDisableLogByDestinationIpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmp = this._icmp;
    }
    if (this._ipv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addr = this._ipv4Addr;
    }
    if (this._others !== undefined) {
      hasAnyValues = true;
      internalValueResult.others = this._others;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._tcpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpList = this._tcpList?.internalValue;
    }
    if (this._udpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpList = this._udpList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateLoggingDisableLogByDestinationIpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icmp = undefined;
      this._ipv4Addr = undefined;
      this._others = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._tcpList.internalValue = undefined;
      this._udpList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icmp = value.icmp;
      this._ipv4Addr = value.ipv4Addr;
      this._others = value.others;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._tcpList.internalValue = value.tcpList;
      this._udpList.internalValue = value.udpList;
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

  // ipv4_addr - computed: false, optional: false, required: true
  private _ipv4Addr?: string; 
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4_addr');
  }
  public set ipv4Addr(value: string) {
    this._ipv4Addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrInput() {
    return this._ipv4Addr;
  }

  // others - computed: false, optional: true, required: false
  private _others?: number; 
  public get others() {
    return this.getNumberAttribute('others');
  }
  public set others(value: number) {
    this._others = value;
  }
  public resetOthers() {
    this._others = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get othersInput() {
    return this._others;
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

  // tcp_list - computed: false, optional: true, required: false
  private _tcpList = new Cgnv6TemplateLoggingDisableLogByDestinationIpListTcpListStructList(this, "tcp_list", false);
  public get tcpList() {
    return this._tcpList;
  }
  public putTcpList(value: Cgnv6TemplateLoggingDisableLogByDestinationIpListTcpListStruct[] | cdktf.IResolvable) {
    this._tcpList.internalValue = value;
  }
  public resetTcpList() {
    this._tcpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpListInput() {
    return this._tcpList.internalValue;
  }

  // udp_list - computed: false, optional: true, required: false
  private _udpList = new Cgnv6TemplateLoggingDisableLogByDestinationIpListUdpListStructList(this, "udp_list", false);
  public get udpList() {
    return this._udpList;
  }
  public putUdpList(value: Cgnv6TemplateLoggingDisableLogByDestinationIpListUdpListStruct[] | cdktf.IResolvable) {
    this._udpList.internalValue = value;
  }
  public resetUdpList() {
    this._udpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpListInput() {
    return this._udpList.internalValue;
  }
}

export class Cgnv6TemplateLoggingDisableLogByDestinationIpListStructList extends cdktf.ComplexList {
  public internalValue? : Cgnv6TemplateLoggingDisableLogByDestinationIpListStruct[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6TemplateLoggingDisableLogByDestinationIpListStructOutputReference {
    return new Cgnv6TemplateLoggingDisableLogByDestinationIpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6TemplateLoggingDisableLogByDestinationTcpListStruct {
  /**
  * Port Range End
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#tcp_port_end Cgnv6TemplateLogging#tcp_port_end}
  */
  readonly tcpPortEnd?: number;
  /**
  * Destination Port (Single Destination Port or Port Range Start)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#tcp_port_start Cgnv6TemplateLogging#tcp_port_start}
  */
  readonly tcpPortStart?: number;
}

export function cgnv6TemplateLoggingDisableLogByDestinationTcpListStructToTerraform(struct?: Cgnv6TemplateLoggingDisableLogByDestinationTcpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tcp_port_end: cdktf.numberToTerraform(struct!.tcpPortEnd),
    tcp_port_start: cdktf.numberToTerraform(struct!.tcpPortStart),
  }
}


export function cgnv6TemplateLoggingDisableLogByDestinationTcpListStructToHclTerraform(struct?: Cgnv6TemplateLoggingDisableLogByDestinationTcpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tcp_port_end: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_port_start: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplateLoggingDisableLogByDestinationTcpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6TemplateLoggingDisableLogByDestinationTcpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tcpPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortEnd = this._tcpPortEnd;
    }
    if (this._tcpPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortStart = this._tcpPortStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateLoggingDisableLogByDestinationTcpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tcpPortEnd = undefined;
      this._tcpPortStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tcpPortEnd = value.tcpPortEnd;
      this._tcpPortStart = value.tcpPortStart;
    }
  }

  // tcp_port_end - computed: false, optional: true, required: false
  private _tcpPortEnd?: number; 
  public get tcpPortEnd() {
    return this.getNumberAttribute('tcp_port_end');
  }
  public set tcpPortEnd(value: number) {
    this._tcpPortEnd = value;
  }
  public resetTcpPortEnd() {
    this._tcpPortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortEndInput() {
    return this._tcpPortEnd;
  }

  // tcp_port_start - computed: false, optional: true, required: false
  private _tcpPortStart?: number; 
  public get tcpPortStart() {
    return this.getNumberAttribute('tcp_port_start');
  }
  public set tcpPortStart(value: number) {
    this._tcpPortStart = value;
  }
  public resetTcpPortStart() {
    this._tcpPortStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortStartInput() {
    return this._tcpPortStart;
  }
}

export class Cgnv6TemplateLoggingDisableLogByDestinationTcpListStructList extends cdktf.ComplexList {
  public internalValue? : Cgnv6TemplateLoggingDisableLogByDestinationTcpListStruct[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6TemplateLoggingDisableLogByDestinationTcpListStructOutputReference {
    return new Cgnv6TemplateLoggingDisableLogByDestinationTcpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6TemplateLoggingDisableLogByDestinationUdpListStruct {
  /**
  * Port Range End
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#udp_port_end Cgnv6TemplateLogging#udp_port_end}
  */
  readonly udpPortEnd?: number;
  /**
  * Destination Port (Single Destination Port or Port Range Start)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#udp_port_start Cgnv6TemplateLogging#udp_port_start}
  */
  readonly udpPortStart?: number;
}

export function cgnv6TemplateLoggingDisableLogByDestinationUdpListStructToTerraform(struct?: Cgnv6TemplateLoggingDisableLogByDestinationUdpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    udp_port_end: cdktf.numberToTerraform(struct!.udpPortEnd),
    udp_port_start: cdktf.numberToTerraform(struct!.udpPortStart),
  }
}


export function cgnv6TemplateLoggingDisableLogByDestinationUdpListStructToHclTerraform(struct?: Cgnv6TemplateLoggingDisableLogByDestinationUdpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    udp_port_end: {
      value: cdktf.numberToHclTerraform(struct!.udpPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_port_start: {
      value: cdktf.numberToHclTerraform(struct!.udpPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplateLoggingDisableLogByDestinationUdpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6TemplateLoggingDisableLogByDestinationUdpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._udpPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortEnd = this._udpPortEnd;
    }
    if (this._udpPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortStart = this._udpPortStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateLoggingDisableLogByDestinationUdpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._udpPortEnd = undefined;
      this._udpPortStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._udpPortEnd = value.udpPortEnd;
      this._udpPortStart = value.udpPortStart;
    }
  }

  // udp_port_end - computed: false, optional: true, required: false
  private _udpPortEnd?: number; 
  public get udpPortEnd() {
    return this.getNumberAttribute('udp_port_end');
  }
  public set udpPortEnd(value: number) {
    this._udpPortEnd = value;
  }
  public resetUdpPortEnd() {
    this._udpPortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortEndInput() {
    return this._udpPortEnd;
  }

  // udp_port_start - computed: false, optional: true, required: false
  private _udpPortStart?: number; 
  public get udpPortStart() {
    return this.getNumberAttribute('udp_port_start');
  }
  public set udpPortStart(value: number) {
    this._udpPortStart = value;
  }
  public resetUdpPortStart() {
    this._udpPortStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortStartInput() {
    return this._udpPortStart;
  }
}

export class Cgnv6TemplateLoggingDisableLogByDestinationUdpListStructList extends cdktf.ComplexList {
  public internalValue? : Cgnv6TemplateLoggingDisableLogByDestinationUdpListStruct[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6TemplateLoggingDisableLogByDestinationUdpListStructOutputReference {
    return new Cgnv6TemplateLoggingDisableLogByDestinationUdpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6TemplateLoggingDisableLogByDestination {
  /**
  * Disable logging for icmp traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#icmp Cgnv6TemplateLogging#icmp}
  */
  readonly icmp?: number;
  /**
  * Disable logging for other L4 protocols
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#others Cgnv6TemplateLogging#others}
  */
  readonly others?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#uuid Cgnv6TemplateLogging#uuid}
  */
  readonly uuid?: string;
  /**
  * ip6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#ip6_list Cgnv6TemplateLogging#ip6_list}
  */
  readonly ip6List?: Cgnv6TemplateLoggingDisableLogByDestinationIp6ListStruct[] | cdktf.IResolvable;
  /**
  * ip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#ip_list Cgnv6TemplateLogging#ip_list}
  */
  readonly ipList?: Cgnv6TemplateLoggingDisableLogByDestinationIpListStruct[] | cdktf.IResolvable;
  /**
  * tcp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#tcp_list Cgnv6TemplateLogging#tcp_list}
  */
  readonly tcpList?: Cgnv6TemplateLoggingDisableLogByDestinationTcpListStruct[] | cdktf.IResolvable;
  /**
  * udp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#udp_list Cgnv6TemplateLogging#udp_list}
  */
  readonly udpList?: Cgnv6TemplateLoggingDisableLogByDestinationUdpListStruct[] | cdktf.IResolvable;
}

export function cgnv6TemplateLoggingDisableLogByDestinationToTerraform(struct?: Cgnv6TemplateLoggingDisableLogByDestinationOutputReference | Cgnv6TemplateLoggingDisableLogByDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp: cdktf.numberToTerraform(struct!.icmp),
    others: cdktf.numberToTerraform(struct!.others),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    ip6_list: cdktf.listMapper(cgnv6TemplateLoggingDisableLogByDestinationIp6ListStructToTerraform, true)(struct!.ip6List),
    ip_list: cdktf.listMapper(cgnv6TemplateLoggingDisableLogByDestinationIpListStructToTerraform, true)(struct!.ipList),
    tcp_list: cdktf.listMapper(cgnv6TemplateLoggingDisableLogByDestinationTcpListStructToTerraform, true)(struct!.tcpList),
    udp_list: cdktf.listMapper(cgnv6TemplateLoggingDisableLogByDestinationUdpListStructToTerraform, true)(struct!.udpList),
  }
}


export function cgnv6TemplateLoggingDisableLogByDestinationToHclTerraform(struct?: Cgnv6TemplateLoggingDisableLogByDestinationOutputReference | Cgnv6TemplateLoggingDisableLogByDestination): any {
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
    others: {
      value: cdktf.numberToHclTerraform(struct!.others),
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
    ip6_list: {
      value: cdktf.listMapperHcl(cgnv6TemplateLoggingDisableLogByDestinationIp6ListStructToHclTerraform, true)(struct!.ip6List),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6TemplateLoggingDisableLogByDestinationIp6ListStructList",
    },
    ip_list: {
      value: cdktf.listMapperHcl(cgnv6TemplateLoggingDisableLogByDestinationIpListStructToHclTerraform, true)(struct!.ipList),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6TemplateLoggingDisableLogByDestinationIpListStructList",
    },
    tcp_list: {
      value: cdktf.listMapperHcl(cgnv6TemplateLoggingDisableLogByDestinationTcpListStructToHclTerraform, true)(struct!.tcpList),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6TemplateLoggingDisableLogByDestinationTcpListStructList",
    },
    udp_list: {
      value: cdktf.listMapperHcl(cgnv6TemplateLoggingDisableLogByDestinationUdpListStructToHclTerraform, true)(struct!.udpList),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6TemplateLoggingDisableLogByDestinationUdpListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplateLoggingDisableLogByDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6TemplateLoggingDisableLogByDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmp = this._icmp;
    }
    if (this._others !== undefined) {
      hasAnyValues = true;
      internalValueResult.others = this._others;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._ip6List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6List = this._ip6List?.internalValue;
    }
    if (this._ipList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipList = this._ipList?.internalValue;
    }
    if (this._tcpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpList = this._tcpList?.internalValue;
    }
    if (this._udpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpList = this._udpList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateLoggingDisableLogByDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._icmp = undefined;
      this._others = undefined;
      this._uuid = undefined;
      this._ip6List.internalValue = undefined;
      this._ipList.internalValue = undefined;
      this._tcpList.internalValue = undefined;
      this._udpList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._icmp = value.icmp;
      this._others = value.others;
      this._uuid = value.uuid;
      this._ip6List.internalValue = value.ip6List;
      this._ipList.internalValue = value.ipList;
      this._tcpList.internalValue = value.tcpList;
      this._udpList.internalValue = value.udpList;
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

  // others - computed: false, optional: true, required: false
  private _others?: number; 
  public get others() {
    return this.getNumberAttribute('others');
  }
  public set others(value: number) {
    this._others = value;
  }
  public resetOthers() {
    this._others = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get othersInput() {
    return this._others;
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

  // ip6_list - computed: false, optional: true, required: false
  private _ip6List = new Cgnv6TemplateLoggingDisableLogByDestinationIp6ListStructList(this, "ip6_list", false);
  public get ip6List() {
    return this._ip6List;
  }
  public putIp6List(value: Cgnv6TemplateLoggingDisableLogByDestinationIp6ListStruct[] | cdktf.IResolvable) {
    this._ip6List.internalValue = value;
  }
  public resetIp6List() {
    this._ip6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6ListInput() {
    return this._ip6List.internalValue;
  }

  // ip_list - computed: false, optional: true, required: false
  private _ipList = new Cgnv6TemplateLoggingDisableLogByDestinationIpListStructList(this, "ip_list", false);
  public get ipList() {
    return this._ipList;
  }
  public putIpList(value: Cgnv6TemplateLoggingDisableLogByDestinationIpListStruct[] | cdktf.IResolvable) {
    this._ipList.internalValue = value;
  }
  public resetIpList() {
    this._ipList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListInput() {
    return this._ipList.internalValue;
  }

  // tcp_list - computed: false, optional: true, required: false
  private _tcpList = new Cgnv6TemplateLoggingDisableLogByDestinationTcpListStructList(this, "tcp_list", false);
  public get tcpList() {
    return this._tcpList;
  }
  public putTcpList(value: Cgnv6TemplateLoggingDisableLogByDestinationTcpListStruct[] | cdktf.IResolvable) {
    this._tcpList.internalValue = value;
  }
  public resetTcpList() {
    this._tcpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpListInput() {
    return this._tcpList.internalValue;
  }

  // udp_list - computed: false, optional: true, required: false
  private _udpList = new Cgnv6TemplateLoggingDisableLogByDestinationUdpListStructList(this, "udp_list", false);
  public get udpList() {
    return this._udpList;
  }
  public putUdpList(value: Cgnv6TemplateLoggingDisableLogByDestinationUdpListStruct[] | cdktf.IResolvable) {
    this._udpList.internalValue = value;
  }
  public resetUdpList() {
    this._udpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpListInput() {
    return this._udpList.internalValue;
  }
}
export interface Cgnv6TemplateLoggingIncludeHttpHeaderCfg {
  /**
  * Header name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#custom_header_name Cgnv6TemplateLogging#custom_header_name}
  */
  readonly customHeaderName?: string;
  /**
  * Max length for a HTTP request log (Max header length (Default: 100 char))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#custom_max_length Cgnv6TemplateLogging#custom_max_length}
  */
  readonly customMaxLength?: number;
  /**
  * 'cookie': Log HTTP Cookie Header; 'referer': Log HTTP Referer Header; 'user-agent': Log HTTP User-Agent Header; 'header1': Log HTTP Header 1; 'header2': Log HTTP Header 2; 'header3': Log HTTP Header 3;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#http_header Cgnv6TemplateLogging#http_header}
  */
  readonly httpHeader?: string;
  /**
  * Max length for a HTTP request log (Max header length (Default: 100 char))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#max_length Cgnv6TemplateLogging#max_length}
  */
  readonly maxLength?: number;
}

export function cgnv6TemplateLoggingIncludeHttpHeaderCfgToTerraform(struct?: Cgnv6TemplateLoggingIncludeHttpHeaderCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_header_name: cdktf.stringToTerraform(struct!.customHeaderName),
    custom_max_length: cdktf.numberToTerraform(struct!.customMaxLength),
    http_header: cdktf.stringToTerraform(struct!.httpHeader),
    max_length: cdktf.numberToTerraform(struct!.maxLength),
  }
}


export function cgnv6TemplateLoggingIncludeHttpHeaderCfgToHclTerraform(struct?: Cgnv6TemplateLoggingIncludeHttpHeaderCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_header_name: {
      value: cdktf.stringToHclTerraform(struct!.customHeaderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_max_length: {
      value: cdktf.numberToHclTerraform(struct!.customMaxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_header: {
      value: cdktf.stringToHclTerraform(struct!.httpHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_length: {
      value: cdktf.numberToHclTerraform(struct!.maxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplateLoggingIncludeHttpHeaderCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6TemplateLoggingIncludeHttpHeaderCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeaderName = this._customHeaderName;
    }
    if (this._customMaxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMaxLength = this._customMaxLength;
    }
    if (this._httpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader;
    }
    if (this._maxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLength = this._maxLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateLoggingIncludeHttpHeaderCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customHeaderName = undefined;
      this._customMaxLength = undefined;
      this._httpHeader = undefined;
      this._maxLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customHeaderName = value.customHeaderName;
      this._customMaxLength = value.customMaxLength;
      this._httpHeader = value.httpHeader;
      this._maxLength = value.maxLength;
    }
  }

  // custom_header_name - computed: false, optional: true, required: false
  private _customHeaderName?: string; 
  public get customHeaderName() {
    return this.getStringAttribute('custom_header_name');
  }
  public set customHeaderName(value: string) {
    this._customHeaderName = value;
  }
  public resetCustomHeaderName() {
    this._customHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeaderNameInput() {
    return this._customHeaderName;
  }

  // custom_max_length - computed: false, optional: true, required: false
  private _customMaxLength?: number; 
  public get customMaxLength() {
    return this.getNumberAttribute('custom_max_length');
  }
  public set customMaxLength(value: number) {
    this._customMaxLength = value;
  }
  public resetCustomMaxLength() {
    this._customMaxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMaxLengthInput() {
    return this._customMaxLength;
  }

  // http_header - computed: false, optional: true, required: false
  private _httpHeader?: string; 
  public get httpHeader() {
    return this.getStringAttribute('http_header');
  }
  public set httpHeader(value: string) {
    this._httpHeader = value;
  }
  public resetHttpHeader() {
    this._httpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader;
  }

  // max_length - computed: false, optional: true, required: false
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }
}

export class Cgnv6TemplateLoggingIncludeHttpHeaderCfgList extends cdktf.ComplexList {
  public internalValue? : Cgnv6TemplateLoggingIncludeHttpHeaderCfg[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6TemplateLoggingIncludeHttpHeaderCfgOutputReference {
    return new Cgnv6TemplateLoggingIncludeHttpHeaderCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6TemplateLoggingIncludeHttp {
  /**
  * HTTP file extension
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#file_extension Cgnv6TemplateLogging#file_extension}
  */
  readonly fileExtension?: number;
  /**
  * Log the L4 session information of the HTTP request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#l4_session_info Cgnv6TemplateLogging#l4_session_info}
  */
  readonly l4SessionInfo?: number;
  /**
  * Log the HTTP Request Method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#method Cgnv6TemplateLogging#method}
  */
  readonly method?: number;
  /**
  * HTTP Request Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#request_number Cgnv6TemplateLogging#request_number}
  */
  readonly requestNumber?: number;
  /**
  * header_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#header_cfg Cgnv6TemplateLogging#header_cfg}
  */
  readonly headerCfg?: Cgnv6TemplateLoggingIncludeHttpHeaderCfg[] | cdktf.IResolvable;
}

export function cgnv6TemplateLoggingIncludeHttpToTerraform(struct?: Cgnv6TemplateLoggingIncludeHttpOutputReference | Cgnv6TemplateLoggingIncludeHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_extension: cdktf.numberToTerraform(struct!.fileExtension),
    l4_session_info: cdktf.numberToTerraform(struct!.l4SessionInfo),
    method: cdktf.numberToTerraform(struct!.method),
    request_number: cdktf.numberToTerraform(struct!.requestNumber),
    header_cfg: cdktf.listMapper(cgnv6TemplateLoggingIncludeHttpHeaderCfgToTerraform, true)(struct!.headerCfg),
  }
}


export function cgnv6TemplateLoggingIncludeHttpToHclTerraform(struct?: Cgnv6TemplateLoggingIncludeHttpOutputReference | Cgnv6TemplateLoggingIncludeHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_extension: {
      value: cdktf.numberToHclTerraform(struct!.fileExtension),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_session_info: {
      value: cdktf.numberToHclTerraform(struct!.l4SessionInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    method: {
      value: cdktf.numberToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_number: {
      value: cdktf.numberToHclTerraform(struct!.requestNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_cfg: {
      value: cdktf.listMapperHcl(cgnv6TemplateLoggingIncludeHttpHeaderCfgToHclTerraform, true)(struct!.headerCfg),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6TemplateLoggingIncludeHttpHeaderCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplateLoggingIncludeHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6TemplateLoggingIncludeHttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileExtension !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExtension = this._fileExtension;
    }
    if (this._l4SessionInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4SessionInfo = this._l4SessionInfo;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._requestNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestNumber = this._requestNumber;
    }
    if (this._headerCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerCfg = this._headerCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateLoggingIncludeHttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileExtension = undefined;
      this._l4SessionInfo = undefined;
      this._method = undefined;
      this._requestNumber = undefined;
      this._headerCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileExtension = value.fileExtension;
      this._l4SessionInfo = value.l4SessionInfo;
      this._method = value.method;
      this._requestNumber = value.requestNumber;
      this._headerCfg.internalValue = value.headerCfg;
    }
  }

  // file_extension - computed: false, optional: true, required: false
  private _fileExtension?: number; 
  public get fileExtension() {
    return this.getNumberAttribute('file_extension');
  }
  public set fileExtension(value: number) {
    this._fileExtension = value;
  }
  public resetFileExtension() {
    this._fileExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionInput() {
    return this._fileExtension;
  }

  // l4_session_info - computed: false, optional: true, required: false
  private _l4SessionInfo?: number; 
  public get l4SessionInfo() {
    return this.getNumberAttribute('l4_session_info');
  }
  public set l4SessionInfo(value: number) {
    this._l4SessionInfo = value;
  }
  public resetL4SessionInfo() {
    this._l4SessionInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4SessionInfoInput() {
    return this._l4SessionInfo;
  }

  // method - computed: false, optional: true, required: false
  private _method?: number; 
  public get method() {
    return this.getNumberAttribute('method');
  }
  public set method(value: number) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // request_number - computed: false, optional: true, required: false
  private _requestNumber?: number; 
  public get requestNumber() {
    return this.getNumberAttribute('request_number');
  }
  public set requestNumber(value: number) {
    this._requestNumber = value;
  }
  public resetRequestNumber() {
    this._requestNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestNumberInput() {
    return this._requestNumber;
  }

  // header_cfg - computed: false, optional: true, required: false
  private _headerCfg = new Cgnv6TemplateLoggingIncludeHttpHeaderCfgList(this, "header_cfg", false);
  public get headerCfg() {
    return this._headerCfg;
  }
  public putHeaderCfg(value: Cgnv6TemplateLoggingIncludeHttpHeaderCfg[] | cdktf.IResolvable) {
    this._headerCfg.internalValue = value;
  }
  public resetHeaderCfg() {
    this._headerCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerCfgInput() {
    return this._headerCfg.internalValue;
  }
}
export interface Cgnv6TemplateLoggingIncludeRadiusAttributeAttrCfg {
  /**
  * 'imei': Include IMEI; 'imsi': Include IMSI; 'msisdn': Include MSISDN; 'custom1': Customized attribute 1; 'custom2': Customized attribute 2; 'custom3': Customized attribute 3; 'custom4': Customized attribute 4; 'custom5': Customized attribute 5; 'custom6': Customized attribute 6;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#attr Cgnv6TemplateLogging#attr}
  */
  readonly attr?: string;
  /**
  * 'http-requests': Include in HTTP request logs; 'port-mappings': Include in port-mapping logs; 'sessions': Include in session logs; 'user-data': Include in user-data logs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#attr_event Cgnv6TemplateLogging#attr_event}
  */
  readonly attrEvent?: string;
}

export function cgnv6TemplateLoggingIncludeRadiusAttributeAttrCfgToTerraform(struct?: Cgnv6TemplateLoggingIncludeRadiusAttributeAttrCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attr: cdktf.stringToTerraform(struct!.attr),
    attr_event: cdktf.stringToTerraform(struct!.attrEvent),
  }
}


export function cgnv6TemplateLoggingIncludeRadiusAttributeAttrCfgToHclTerraform(struct?: Cgnv6TemplateLoggingIncludeRadiusAttributeAttrCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attr: {
      value: cdktf.stringToHclTerraform(struct!.attr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attr_event: {
      value: cdktf.stringToHclTerraform(struct!.attrEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplateLoggingIncludeRadiusAttributeAttrCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6TemplateLoggingIncludeRadiusAttributeAttrCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attr !== undefined) {
      hasAnyValues = true;
      internalValueResult.attr = this._attr;
    }
    if (this._attrEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrEvent = this._attrEvent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateLoggingIncludeRadiusAttributeAttrCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attr = undefined;
      this._attrEvent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attr = value.attr;
      this._attrEvent = value.attrEvent;
    }
  }

  // attr - computed: false, optional: true, required: false
  private _attr?: string; 
  public get attr() {
    return this.getStringAttribute('attr');
  }
  public set attr(value: string) {
    this._attr = value;
  }
  public resetAttr() {
    this._attr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrInput() {
    return this._attr;
  }

  // attr_event - computed: false, optional: true, required: false
  private _attrEvent?: string; 
  public get attrEvent() {
    return this.getStringAttribute('attr_event');
  }
  public set attrEvent(value: string) {
    this._attrEvent = value;
  }
  public resetAttrEvent() {
    this._attrEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrEventInput() {
    return this._attrEvent;
  }
}

export class Cgnv6TemplateLoggingIncludeRadiusAttributeAttrCfgList extends cdktf.ComplexList {
  public internalValue? : Cgnv6TemplateLoggingIncludeRadiusAttributeAttrCfg[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6TemplateLoggingIncludeRadiusAttributeAttrCfgOutputReference {
    return new Cgnv6TemplateLoggingIncludeRadiusAttributeAttrCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6TemplateLoggingIncludeRadiusAttribute {
  /**
  * Include radius attributes for the prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#framed_ipv6_prefix Cgnv6TemplateLogging#framed_ipv6_prefix}
  */
  readonly framedIpv6Prefix?: number;
  /**
  * Configure what string is to be inserted for custom RADIUS attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#insert_if_not_existing Cgnv6TemplateLogging#insert_if_not_existing}
  */
  readonly insertIfNotExisting?: number;
  /**
  * No quotation marks for RADIUS attributes in logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#no_quote Cgnv6TemplateLogging#no_quote}
  */
  readonly noQuote?: number;
  /**
  * '32': Prefix length 32; '48': Prefix length 48; '64': Prefix length 64; '80': Prefix length 80; '96': Prefix length 96; '112': Prefix length 112;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#prefix_length Cgnv6TemplateLogging#prefix_length}
  */
  readonly prefixLength?: string;
  /**
  * Insert 0000 for standard and custom attributes in log string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#zero_in_custom_attr Cgnv6TemplateLogging#zero_in_custom_attr}
  */
  readonly zeroInCustomAttr?: number;
  /**
  * attr_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#attr_cfg Cgnv6TemplateLogging#attr_cfg}
  */
  readonly attrCfg?: Cgnv6TemplateLoggingIncludeRadiusAttributeAttrCfg[] | cdktf.IResolvable;
}

export function cgnv6TemplateLoggingIncludeRadiusAttributeToTerraform(struct?: Cgnv6TemplateLoggingIncludeRadiusAttributeOutputReference | Cgnv6TemplateLoggingIncludeRadiusAttribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    framed_ipv6_prefix: cdktf.numberToTerraform(struct!.framedIpv6Prefix),
    insert_if_not_existing: cdktf.numberToTerraform(struct!.insertIfNotExisting),
    no_quote: cdktf.numberToTerraform(struct!.noQuote),
    prefix_length: cdktf.stringToTerraform(struct!.prefixLength),
    zero_in_custom_attr: cdktf.numberToTerraform(struct!.zeroInCustomAttr),
    attr_cfg: cdktf.listMapper(cgnv6TemplateLoggingIncludeRadiusAttributeAttrCfgToTerraform, true)(struct!.attrCfg),
  }
}


export function cgnv6TemplateLoggingIncludeRadiusAttributeToHclTerraform(struct?: Cgnv6TemplateLoggingIncludeRadiusAttributeOutputReference | Cgnv6TemplateLoggingIncludeRadiusAttribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    framed_ipv6_prefix: {
      value: cdktf.numberToHclTerraform(struct!.framedIpv6Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    insert_if_not_existing: {
      value: cdktf.numberToHclTerraform(struct!.insertIfNotExisting),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_quote: {
      value: cdktf.numberToHclTerraform(struct!.noQuote),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix_length: {
      value: cdktf.stringToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zero_in_custom_attr: {
      value: cdktf.numberToHclTerraform(struct!.zeroInCustomAttr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    attr_cfg: {
      value: cdktf.listMapperHcl(cgnv6TemplateLoggingIncludeRadiusAttributeAttrCfgToHclTerraform, true)(struct!.attrCfg),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6TemplateLoggingIncludeRadiusAttributeAttrCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplateLoggingIncludeRadiusAttributeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6TemplateLoggingIncludeRadiusAttribute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._framedIpv6Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.framedIpv6Prefix = this._framedIpv6Prefix;
    }
    if (this._insertIfNotExisting !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertIfNotExisting = this._insertIfNotExisting;
    }
    if (this._noQuote !== undefined) {
      hasAnyValues = true;
      internalValueResult.noQuote = this._noQuote;
    }
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._zeroInCustomAttr !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeroInCustomAttr = this._zeroInCustomAttr;
    }
    if (this._attrCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrCfg = this._attrCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateLoggingIncludeRadiusAttribute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._framedIpv6Prefix = undefined;
      this._insertIfNotExisting = undefined;
      this._noQuote = undefined;
      this._prefixLength = undefined;
      this._zeroInCustomAttr = undefined;
      this._attrCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._framedIpv6Prefix = value.framedIpv6Prefix;
      this._insertIfNotExisting = value.insertIfNotExisting;
      this._noQuote = value.noQuote;
      this._prefixLength = value.prefixLength;
      this._zeroInCustomAttr = value.zeroInCustomAttr;
      this._attrCfg.internalValue = value.attrCfg;
    }
  }

  // framed_ipv6_prefix - computed: false, optional: true, required: false
  private _framedIpv6Prefix?: number; 
  public get framedIpv6Prefix() {
    return this.getNumberAttribute('framed_ipv6_prefix');
  }
  public set framedIpv6Prefix(value: number) {
    this._framedIpv6Prefix = value;
  }
  public resetFramedIpv6Prefix() {
    this._framedIpv6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get framedIpv6PrefixInput() {
    return this._framedIpv6Prefix;
  }

  // insert_if_not_existing - computed: false, optional: true, required: false
  private _insertIfNotExisting?: number; 
  public get insertIfNotExisting() {
    return this.getNumberAttribute('insert_if_not_existing');
  }
  public set insertIfNotExisting(value: number) {
    this._insertIfNotExisting = value;
  }
  public resetInsertIfNotExisting() {
    this._insertIfNotExisting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertIfNotExistingInput() {
    return this._insertIfNotExisting;
  }

  // no_quote - computed: false, optional: true, required: false
  private _noQuote?: number; 
  public get noQuote() {
    return this.getNumberAttribute('no_quote');
  }
  public set noQuote(value: number) {
    this._noQuote = value;
  }
  public resetNoQuote() {
    this._noQuote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noQuoteInput() {
    return this._noQuote;
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: string; 
  public get prefixLength() {
    return this.getStringAttribute('prefix_length');
  }
  public set prefixLength(value: string) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // zero_in_custom_attr - computed: false, optional: true, required: false
  private _zeroInCustomAttr?: number; 
  public get zeroInCustomAttr() {
    return this.getNumberAttribute('zero_in_custom_attr');
  }
  public set zeroInCustomAttr(value: number) {
    this._zeroInCustomAttr = value;
  }
  public resetZeroInCustomAttr() {
    this._zeroInCustomAttr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroInCustomAttrInput() {
    return this._zeroInCustomAttr;
  }

  // attr_cfg - computed: false, optional: true, required: false
  private _attrCfg = new Cgnv6TemplateLoggingIncludeRadiusAttributeAttrCfgList(this, "attr_cfg", false);
  public get attrCfg() {
    return this._attrCfg;
  }
  public putAttrCfg(value: Cgnv6TemplateLoggingIncludeRadiusAttributeAttrCfg[] | cdktf.IResolvable) {
    this._attrCfg.internalValue = value;
  }
  public resetAttrCfg() {
    this._attrCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrCfgInput() {
    return this._attrCfg.internalValue;
  }
}
export interface Cgnv6TemplateLoggingLogFixedNatUserPorts {
  /**
  * Specify period in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#days Cgnv6TemplateLogging#days}
  */
  readonly days?: number;
  /**
  * Time when periodic logging starts (Specify start time(hh:mm))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#start_time Cgnv6TemplateLogging#start_time}
  */
  readonly startTime?: string;
  /**
  * Log Fixed NAT User Ports Configured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#user_ports Cgnv6TemplateLogging#user_ports}
  */
  readonly userPorts?: number;
}

export function cgnv6TemplateLoggingLogFixedNatUserPortsToTerraform(struct?: Cgnv6TemplateLoggingLogFixedNatUserPortsOutputReference | Cgnv6TemplateLoggingLogFixedNatUserPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    user_ports: cdktf.numberToTerraform(struct!.userPorts),
  }
}


export function cgnv6TemplateLoggingLogFixedNatUserPortsToHclTerraform(struct?: Cgnv6TemplateLoggingLogFixedNatUserPortsOutputReference | Cgnv6TemplateLoggingLogFixedNatUserPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_ports: {
      value: cdktf.numberToHclTerraform(struct!.userPorts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplateLoggingLogFixedNatUserPortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6TemplateLoggingLogFixedNatUserPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._userPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPorts = this._userPorts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateLoggingLogFixedNatUserPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._startTime = undefined;
      this._userPorts = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._startTime = value.startTime;
      this._userPorts = value.userPorts;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // user_ports - computed: false, optional: true, required: false
  private _userPorts?: number; 
  public get userPorts() {
    return this.getNumberAttribute('user_ports');
  }
  public set userPorts(value: number) {
    this._userPorts = value;
  }
  public resetUserPorts() {
    this._userPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPortsInput() {
    return this._userPorts;
  }
}
export interface Cgnv6TemplateLoggingLogFixedNat {
  /**
  * 'host': Log the HTTP Host Header; 'url': Log the HTTP Request URL;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#fixed_nat_http_requests Cgnv6TemplateLogging#fixed_nat_http_requests}
  */
  readonly fixedNatHttpRequests?: string;
  /**
  * Merge creation and deletion of session logs to one
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#fixed_nat_merged_style Cgnv6TemplateLogging#fixed_nat_merged_style}
  */
  readonly fixedNatMergedStyle?: number;
  /**
  * 'both': Log creation and deletion of NAT mappings; 'creation': Log creation of NAT mappings;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#fixed_nat_port_mappings Cgnv6TemplateLogging#fixed_nat_port_mappings}
  */
  readonly fixedNatPortMappings?: string;
  /**
  * Log all Fixed NAT sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#fixed_nat_sessions Cgnv6TemplateLogging#fixed_nat_sessions}
  */
  readonly fixedNatSessions?: number;
  /**
  * user_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#user_ports Cgnv6TemplateLogging#user_ports}
  */
  readonly userPorts?: Cgnv6TemplateLoggingLogFixedNatUserPorts;
}

export function cgnv6TemplateLoggingLogFixedNatToTerraform(struct?: Cgnv6TemplateLoggingLogFixedNatOutputReference | Cgnv6TemplateLoggingLogFixedNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_nat_http_requests: cdktf.stringToTerraform(struct!.fixedNatHttpRequests),
    fixed_nat_merged_style: cdktf.numberToTerraform(struct!.fixedNatMergedStyle),
    fixed_nat_port_mappings: cdktf.stringToTerraform(struct!.fixedNatPortMappings),
    fixed_nat_sessions: cdktf.numberToTerraform(struct!.fixedNatSessions),
    user_ports: cgnv6TemplateLoggingLogFixedNatUserPortsToTerraform(struct!.userPorts),
  }
}


export function cgnv6TemplateLoggingLogFixedNatToHclTerraform(struct?: Cgnv6TemplateLoggingLogFixedNatOutputReference | Cgnv6TemplateLoggingLogFixedNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fixed_nat_http_requests: {
      value: cdktf.stringToHclTerraform(struct!.fixedNatHttpRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fixed_nat_merged_style: {
      value: cdktf.numberToHclTerraform(struct!.fixedNatMergedStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fixed_nat_port_mappings: {
      value: cdktf.stringToHclTerraform(struct!.fixedNatPortMappings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fixed_nat_sessions: {
      value: cdktf.numberToHclTerraform(struct!.fixedNatSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_ports: {
      value: cgnv6TemplateLoggingLogFixedNatUserPortsToHclTerraform(struct!.userPorts),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6TemplateLoggingLogFixedNatUserPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplateLoggingLogFixedNatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6TemplateLoggingLogFixedNat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedNatHttpRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedNatHttpRequests = this._fixedNatHttpRequests;
    }
    if (this._fixedNatMergedStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedNatMergedStyle = this._fixedNatMergedStyle;
    }
    if (this._fixedNatPortMappings !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedNatPortMappings = this._fixedNatPortMappings;
    }
    if (this._fixedNatSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedNatSessions = this._fixedNatSessions;
    }
    if (this._userPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPorts = this._userPorts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateLoggingLogFixedNat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixedNatHttpRequests = undefined;
      this._fixedNatMergedStyle = undefined;
      this._fixedNatPortMappings = undefined;
      this._fixedNatSessions = undefined;
      this._userPorts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixedNatHttpRequests = value.fixedNatHttpRequests;
      this._fixedNatMergedStyle = value.fixedNatMergedStyle;
      this._fixedNatPortMappings = value.fixedNatPortMappings;
      this._fixedNatSessions = value.fixedNatSessions;
      this._userPorts.internalValue = value.userPorts;
    }
  }

  // fixed_nat_http_requests - computed: false, optional: true, required: false
  private _fixedNatHttpRequests?: string; 
  public get fixedNatHttpRequests() {
    return this.getStringAttribute('fixed_nat_http_requests');
  }
  public set fixedNatHttpRequests(value: string) {
    this._fixedNatHttpRequests = value;
  }
  public resetFixedNatHttpRequests() {
    this._fixedNatHttpRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedNatHttpRequestsInput() {
    return this._fixedNatHttpRequests;
  }

  // fixed_nat_merged_style - computed: false, optional: true, required: false
  private _fixedNatMergedStyle?: number; 
  public get fixedNatMergedStyle() {
    return this.getNumberAttribute('fixed_nat_merged_style');
  }
  public set fixedNatMergedStyle(value: number) {
    this._fixedNatMergedStyle = value;
  }
  public resetFixedNatMergedStyle() {
    this._fixedNatMergedStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedNatMergedStyleInput() {
    return this._fixedNatMergedStyle;
  }

  // fixed_nat_port_mappings - computed: false, optional: true, required: false
  private _fixedNatPortMappings?: string; 
  public get fixedNatPortMappings() {
    return this.getStringAttribute('fixed_nat_port_mappings');
  }
  public set fixedNatPortMappings(value: string) {
    this._fixedNatPortMappings = value;
  }
  public resetFixedNatPortMappings() {
    this._fixedNatPortMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedNatPortMappingsInput() {
    return this._fixedNatPortMappings;
  }

  // fixed_nat_sessions - computed: false, optional: true, required: false
  private _fixedNatSessions?: number; 
  public get fixedNatSessions() {
    return this.getNumberAttribute('fixed_nat_sessions');
  }
  public set fixedNatSessions(value: number) {
    this._fixedNatSessions = value;
  }
  public resetFixedNatSessions() {
    this._fixedNatSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedNatSessionsInput() {
    return this._fixedNatSessions;
  }

  // user_ports - computed: false, optional: true, required: false
  private _userPorts = new Cgnv6TemplateLoggingLogFixedNatUserPortsOutputReference(this, "user_ports");
  public get userPorts() {
    return this._userPorts;
  }
  public putUserPorts(value: Cgnv6TemplateLoggingLogFixedNatUserPorts) {
    this._userPorts.internalValue = value;
  }
  public resetUserPorts() {
    this._userPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPortsInput() {
    return this._userPorts.internalValue;
  }
}
export interface Cgnv6TemplateLoggingLogMapDhcpv6MapDhcpv6MsgType {
  /**
  * 'prefix-assignment': Log MAP DHCPv6 prefix assignment; 'prefix-renewal': Log MAP DHCPv6 prefix renewal; 'prefix-release': Log MAP DHCPv6 prefix release;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#map_dhcpv6_msg_type Cgnv6TemplateLogging#map_dhcpv6_msg_type}
  */
  readonly mapDhcpv6MsgType?: string;
}

export function cgnv6TemplateLoggingLogMapDhcpv6MapDhcpv6MsgTypeToTerraform(struct?: Cgnv6TemplateLoggingLogMapDhcpv6MapDhcpv6MsgType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    map_dhcpv6_msg_type: cdktf.stringToTerraform(struct!.mapDhcpv6MsgType),
  }
}


export function cgnv6TemplateLoggingLogMapDhcpv6MapDhcpv6MsgTypeToHclTerraform(struct?: Cgnv6TemplateLoggingLogMapDhcpv6MapDhcpv6MsgType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    map_dhcpv6_msg_type: {
      value: cdktf.stringToHclTerraform(struct!.mapDhcpv6MsgType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplateLoggingLogMapDhcpv6MapDhcpv6MsgTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6TemplateLoggingLogMapDhcpv6MapDhcpv6MsgType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mapDhcpv6MsgType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapDhcpv6MsgType = this._mapDhcpv6MsgType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateLoggingLogMapDhcpv6MapDhcpv6MsgType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mapDhcpv6MsgType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mapDhcpv6MsgType = value.mapDhcpv6MsgType;
    }
  }

  // map_dhcpv6_msg_type - computed: false, optional: true, required: false
  private _mapDhcpv6MsgType?: string; 
  public get mapDhcpv6MsgType() {
    return this.getStringAttribute('map_dhcpv6_msg_type');
  }
  public set mapDhcpv6MsgType(value: string) {
    this._mapDhcpv6MsgType = value;
  }
  public resetMapDhcpv6MsgType() {
    this._mapDhcpv6MsgType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapDhcpv6MsgTypeInput() {
    return this._mapDhcpv6MsgType;
  }
}

export class Cgnv6TemplateLoggingLogMapDhcpv6MapDhcpv6MsgTypeList extends cdktf.ComplexList {
  public internalValue? : Cgnv6TemplateLoggingLogMapDhcpv6MapDhcpv6MsgType[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6TemplateLoggingLogMapDhcpv6MapDhcpv6MsgTypeOutputReference {
    return new Cgnv6TemplateLoggingLogMapDhcpv6MapDhcpv6MsgTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6TemplateLoggingLogMapDhcpv6 {
  /**
  * Log MAP DHCPv6 prefix assignment/renewal/release
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#map_dhcpv6_prefix_all Cgnv6TemplateLogging#map_dhcpv6_prefix_all}
  */
  readonly mapDhcpv6PrefixAll?: number;
  /**
  * map_dhcpv6_msg_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#map_dhcpv6_msg_type Cgnv6TemplateLogging#map_dhcpv6_msg_type}
  */
  readonly mapDhcpv6MsgType?: Cgnv6TemplateLoggingLogMapDhcpv6MapDhcpv6MsgType[] | cdktf.IResolvable;
}

export function cgnv6TemplateLoggingLogMapDhcpv6ToTerraform(struct?: Cgnv6TemplateLoggingLogMapDhcpv6OutputReference | Cgnv6TemplateLoggingLogMapDhcpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    map_dhcpv6_prefix_all: cdktf.numberToTerraform(struct!.mapDhcpv6PrefixAll),
    map_dhcpv6_msg_type: cdktf.listMapper(cgnv6TemplateLoggingLogMapDhcpv6MapDhcpv6MsgTypeToTerraform, true)(struct!.mapDhcpv6MsgType),
  }
}


export function cgnv6TemplateLoggingLogMapDhcpv6ToHclTerraform(struct?: Cgnv6TemplateLoggingLogMapDhcpv6OutputReference | Cgnv6TemplateLoggingLogMapDhcpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    map_dhcpv6_prefix_all: {
      value: cdktf.numberToHclTerraform(struct!.mapDhcpv6PrefixAll),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    map_dhcpv6_msg_type: {
      value: cdktf.listMapperHcl(cgnv6TemplateLoggingLogMapDhcpv6MapDhcpv6MsgTypeToHclTerraform, true)(struct!.mapDhcpv6MsgType),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6TemplateLoggingLogMapDhcpv6MapDhcpv6MsgTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplateLoggingLogMapDhcpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6TemplateLoggingLogMapDhcpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mapDhcpv6PrefixAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapDhcpv6PrefixAll = this._mapDhcpv6PrefixAll;
    }
    if (this._mapDhcpv6MsgType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapDhcpv6MsgType = this._mapDhcpv6MsgType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateLoggingLogMapDhcpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mapDhcpv6PrefixAll = undefined;
      this._mapDhcpv6MsgType.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mapDhcpv6PrefixAll = value.mapDhcpv6PrefixAll;
      this._mapDhcpv6MsgType.internalValue = value.mapDhcpv6MsgType;
    }
  }

  // map_dhcpv6_prefix_all - computed: false, optional: true, required: false
  private _mapDhcpv6PrefixAll?: number; 
  public get mapDhcpv6PrefixAll() {
    return this.getNumberAttribute('map_dhcpv6_prefix_all');
  }
  public set mapDhcpv6PrefixAll(value: number) {
    this._mapDhcpv6PrefixAll = value;
  }
  public resetMapDhcpv6PrefixAll() {
    this._mapDhcpv6PrefixAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapDhcpv6PrefixAllInput() {
    return this._mapDhcpv6PrefixAll;
  }

  // map_dhcpv6_msg_type - computed: false, optional: true, required: false
  private _mapDhcpv6MsgType = new Cgnv6TemplateLoggingLogMapDhcpv6MapDhcpv6MsgTypeList(this, "map_dhcpv6_msg_type", false);
  public get mapDhcpv6MsgType() {
    return this._mapDhcpv6MsgType;
  }
  public putMapDhcpv6MsgType(value: Cgnv6TemplateLoggingLogMapDhcpv6MapDhcpv6MsgType[] | cdktf.IResolvable) {
    this._mapDhcpv6MsgType.internalValue = value;
  }
  public resetMapDhcpv6MsgType() {
    this._mapDhcpv6MsgType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapDhcpv6MsgTypeInput() {
    return this._mapDhcpv6MsgType.internalValue;
  }
}
export interface Cgnv6TemplateLoggingLogOneToOneNat {
  /**
  * Merge creation and deletion of session logs to one
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#one_to_one_merged_style Cgnv6TemplateLogging#one_to_one_merged_style}
  */
  readonly oneToOneMergedStyle?: number;
  /**
  * Log all One-to-One NAT sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#one_to_one_nat_sessions Cgnv6TemplateLogging#one_to_one_nat_sessions}
  */
  readonly oneToOneNatSessions?: number;
}

export function cgnv6TemplateLoggingLogOneToOneNatToTerraform(struct?: Cgnv6TemplateLoggingLogOneToOneNatOutputReference | Cgnv6TemplateLoggingLogOneToOneNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    one_to_one_merged_style: cdktf.numberToTerraform(struct!.oneToOneMergedStyle),
    one_to_one_nat_sessions: cdktf.numberToTerraform(struct!.oneToOneNatSessions),
  }
}


export function cgnv6TemplateLoggingLogOneToOneNatToHclTerraform(struct?: Cgnv6TemplateLoggingLogOneToOneNatOutputReference | Cgnv6TemplateLoggingLogOneToOneNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    one_to_one_merged_style: {
      value: cdktf.numberToHclTerraform(struct!.oneToOneMergedStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    one_to_one_nat_sessions: {
      value: cdktf.numberToHclTerraform(struct!.oneToOneNatSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplateLoggingLogOneToOneNatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6TemplateLoggingLogOneToOneNat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oneToOneMergedStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.oneToOneMergedStyle = this._oneToOneMergedStyle;
    }
    if (this._oneToOneNatSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.oneToOneNatSessions = this._oneToOneNatSessions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateLoggingLogOneToOneNat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oneToOneMergedStyle = undefined;
      this._oneToOneNatSessions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oneToOneMergedStyle = value.oneToOneMergedStyle;
      this._oneToOneNatSessions = value.oneToOneNatSessions;
    }
  }

  // one_to_one_merged_style - computed: false, optional: true, required: false
  private _oneToOneMergedStyle?: number; 
  public get oneToOneMergedStyle() {
    return this.getNumberAttribute('one_to_one_merged_style');
  }
  public set oneToOneMergedStyle(value: number) {
    this._oneToOneMergedStyle = value;
  }
  public resetOneToOneMergedStyle() {
    this._oneToOneMergedStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneToOneMergedStyleInput() {
    return this._oneToOneMergedStyle;
  }

  // one_to_one_nat_sessions - computed: false, optional: true, required: false
  private _oneToOneNatSessions?: number; 
  public get oneToOneNatSessions() {
    return this.getNumberAttribute('one_to_one_nat_sessions');
  }
  public set oneToOneNatSessions(value: number) {
    this._oneToOneNatSessions = value;
  }
  public resetOneToOneNatSessions() {
    this._oneToOneNatSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneToOneNatSessionsInput() {
    return this._oneToOneNatSessions;
  }
}
export interface Cgnv6TemplateLoggingLog {
  /**
  * 'host': Log the HTTP Host Header; 'url': Log the HTTP Request URL;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#http_requests Cgnv6TemplateLogging#http_requests}
  */
  readonly httpRequests?: string;
  /**
  * Merge creation and deletion of session logs to one
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#merged_style Cgnv6TemplateLogging#merged_style}
  */
  readonly mergedStyle?: number;
  /**
  * 'creation': Log only creation of NAT mappings; 'disable': Disable Log creation and deletion of NAT mappings; 'both': Log creation and deletion of NAT mappings;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#port_mappings Cgnv6TemplateLogging#port_mappings}
  */
  readonly portMappings?: string;
  /**
  * Force logging of all port-overloading sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#port_overloading Cgnv6TemplateLogging#port_overloading}
  */
  readonly portOverloading?: number;
  /**
  * Log all data sessions created using NAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#sessions Cgnv6TemplateLogging#sessions}
  */
  readonly sessions?: number;
  /**
  * Log LSN Subscriber Information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#user_data Cgnv6TemplateLogging#user_data}
  */
  readonly userData?: number;
  /**
  * fixed_nat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#fixed_nat Cgnv6TemplateLogging#fixed_nat}
  */
  readonly fixedNat?: Cgnv6TemplateLoggingLogFixedNat;
  /**
  * map_dhcpv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#map_dhcpv6 Cgnv6TemplateLogging#map_dhcpv6}
  */
  readonly mapDhcpv6?: Cgnv6TemplateLoggingLogMapDhcpv6;
  /**
  * one_to_one_nat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#one_to_one_nat Cgnv6TemplateLogging#one_to_one_nat}
  */
  readonly oneToOneNat?: Cgnv6TemplateLoggingLogOneToOneNat;
}

export function cgnv6TemplateLoggingLogToTerraform(struct?: Cgnv6TemplateLoggingLogOutputReference | Cgnv6TemplateLoggingLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_requests: cdktf.stringToTerraform(struct!.httpRequests),
    merged_style: cdktf.numberToTerraform(struct!.mergedStyle),
    port_mappings: cdktf.stringToTerraform(struct!.portMappings),
    port_overloading: cdktf.numberToTerraform(struct!.portOverloading),
    sessions: cdktf.numberToTerraform(struct!.sessions),
    user_data: cdktf.numberToTerraform(struct!.userData),
    fixed_nat: cgnv6TemplateLoggingLogFixedNatToTerraform(struct!.fixedNat),
    map_dhcpv6: cgnv6TemplateLoggingLogMapDhcpv6ToTerraform(struct!.mapDhcpv6),
    one_to_one_nat: cgnv6TemplateLoggingLogOneToOneNatToTerraform(struct!.oneToOneNat),
  }
}


export function cgnv6TemplateLoggingLogToHclTerraform(struct?: Cgnv6TemplateLoggingLogOutputReference | Cgnv6TemplateLoggingLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_requests: {
      value: cdktf.stringToHclTerraform(struct!.httpRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    merged_style: {
      value: cdktf.numberToHclTerraform(struct!.mergedStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_mappings: {
      value: cdktf.stringToHclTerraform(struct!.portMappings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_overloading: {
      value: cdktf.numberToHclTerraform(struct!.portOverloading),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sessions: {
      value: cdktf.numberToHclTerraform(struct!.sessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_data: {
      value: cdktf.numberToHclTerraform(struct!.userData),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fixed_nat: {
      value: cgnv6TemplateLoggingLogFixedNatToHclTerraform(struct!.fixedNat),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6TemplateLoggingLogFixedNatList",
    },
    map_dhcpv6: {
      value: cgnv6TemplateLoggingLogMapDhcpv6ToHclTerraform(struct!.mapDhcpv6),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6TemplateLoggingLogMapDhcpv6List",
    },
    one_to_one_nat: {
      value: cgnv6TemplateLoggingLogOneToOneNatToHclTerraform(struct!.oneToOneNat),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6TemplateLoggingLogOneToOneNatList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplateLoggingLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6TemplateLoggingLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRequests = this._httpRequests;
    }
    if (this._mergedStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergedStyle = this._mergedStyle;
    }
    if (this._portMappings !== undefined) {
      hasAnyValues = true;
      internalValueResult.portMappings = this._portMappings;
    }
    if (this._portOverloading !== undefined) {
      hasAnyValues = true;
      internalValueResult.portOverloading = this._portOverloading;
    }
    if (this._sessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessions = this._sessions;
    }
    if (this._userData !== undefined) {
      hasAnyValues = true;
      internalValueResult.userData = this._userData;
    }
    if (this._fixedNat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedNat = this._fixedNat?.internalValue;
    }
    if (this._mapDhcpv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapDhcpv6 = this._mapDhcpv6?.internalValue;
    }
    if (this._oneToOneNat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oneToOneNat = this._oneToOneNat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateLoggingLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpRequests = undefined;
      this._mergedStyle = undefined;
      this._portMappings = undefined;
      this._portOverloading = undefined;
      this._sessions = undefined;
      this._userData = undefined;
      this._fixedNat.internalValue = undefined;
      this._mapDhcpv6.internalValue = undefined;
      this._oneToOneNat.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpRequests = value.httpRequests;
      this._mergedStyle = value.mergedStyle;
      this._portMappings = value.portMappings;
      this._portOverloading = value.portOverloading;
      this._sessions = value.sessions;
      this._userData = value.userData;
      this._fixedNat.internalValue = value.fixedNat;
      this._mapDhcpv6.internalValue = value.mapDhcpv6;
      this._oneToOneNat.internalValue = value.oneToOneNat;
    }
  }

  // http_requests - computed: false, optional: true, required: false
  private _httpRequests?: string; 
  public get httpRequests() {
    return this.getStringAttribute('http_requests');
  }
  public set httpRequests(value: string) {
    this._httpRequests = value;
  }
  public resetHttpRequests() {
    this._httpRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestsInput() {
    return this._httpRequests;
  }

  // merged_style - computed: false, optional: true, required: false
  private _mergedStyle?: number; 
  public get mergedStyle() {
    return this.getNumberAttribute('merged_style');
  }
  public set mergedStyle(value: number) {
    this._mergedStyle = value;
  }
  public resetMergedStyle() {
    this._mergedStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergedStyleInput() {
    return this._mergedStyle;
  }

  // port_mappings - computed: false, optional: true, required: false
  private _portMappings?: string; 
  public get portMappings() {
    return this.getStringAttribute('port_mappings');
  }
  public set portMappings(value: string) {
    this._portMappings = value;
  }
  public resetPortMappings() {
    this._portMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portMappingsInput() {
    return this._portMappings;
  }

  // port_overloading - computed: false, optional: true, required: false
  private _portOverloading?: number; 
  public get portOverloading() {
    return this.getNumberAttribute('port_overloading');
  }
  public set portOverloading(value: number) {
    this._portOverloading = value;
  }
  public resetPortOverloading() {
    this._portOverloading = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portOverloadingInput() {
    return this._portOverloading;
  }

  // sessions - computed: false, optional: true, required: false
  private _sessions?: number; 
  public get sessions() {
    return this.getNumberAttribute('sessions');
  }
  public set sessions(value: number) {
    this._sessions = value;
  }
  public resetSessions() {
    this._sessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionsInput() {
    return this._sessions;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: number; 
  public get userData() {
    return this.getNumberAttribute('user_data');
  }
  public set userData(value: number) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // fixed_nat - computed: false, optional: true, required: false
  private _fixedNat = new Cgnv6TemplateLoggingLogFixedNatOutputReference(this, "fixed_nat");
  public get fixedNat() {
    return this._fixedNat;
  }
  public putFixedNat(value: Cgnv6TemplateLoggingLogFixedNat) {
    this._fixedNat.internalValue = value;
  }
  public resetFixedNat() {
    this._fixedNat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedNatInput() {
    return this._fixedNat.internalValue;
  }

  // map_dhcpv6 - computed: false, optional: true, required: false
  private _mapDhcpv6 = new Cgnv6TemplateLoggingLogMapDhcpv6OutputReference(this, "map_dhcpv6");
  public get mapDhcpv6() {
    return this._mapDhcpv6;
  }
  public putMapDhcpv6(value: Cgnv6TemplateLoggingLogMapDhcpv6) {
    this._mapDhcpv6.internalValue = value;
  }
  public resetMapDhcpv6() {
    this._mapDhcpv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapDhcpv6Input() {
    return this._mapDhcpv6.internalValue;
  }

  // one_to_one_nat - computed: false, optional: true, required: false
  private _oneToOneNat = new Cgnv6TemplateLoggingLogOneToOneNatOutputReference(this, "one_to_one_nat");
  public get oneToOneNat() {
    return this._oneToOneNat;
  }
  public putOneToOneNat(value: Cgnv6TemplateLoggingLogOneToOneNat) {
    this._oneToOneNat.internalValue = value;
  }
  public resetOneToOneNat() {
    this._oneToOneNat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneToOneNatInput() {
    return this._oneToOneNat.internalValue;
  }
}
export interface Cgnv6TemplateLoggingLogReceiver {
  /**
  * Use RADIUS server for NAT logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#radius Cgnv6TemplateLogging#radius}
  */
  readonly radius?: number;
  /**
  * The RADIUS server's secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#secret_string Cgnv6TemplateLogging#secret_string}
  */
  readonly secretString?: string;
}

export function cgnv6TemplateLoggingLogReceiverToTerraform(struct?: Cgnv6TemplateLoggingLogReceiverOutputReference | Cgnv6TemplateLoggingLogReceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    radius: cdktf.numberToTerraform(struct!.radius),
    secret_string: cdktf.stringToTerraform(struct!.secretString),
  }
}


export function cgnv6TemplateLoggingLogReceiverToHclTerraform(struct?: Cgnv6TemplateLoggingLogReceiverOutputReference | Cgnv6TemplateLoggingLogReceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    radius: {
      value: cdktf.numberToHclTerraform(struct!.radius),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret_string: {
      value: cdktf.stringToHclTerraform(struct!.secretString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplateLoggingLogReceiverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6TemplateLoggingLogReceiver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._radius !== undefined) {
      hasAnyValues = true;
      internalValueResult.radius = this._radius;
    }
    if (this._secretString !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretString = this._secretString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateLoggingLogReceiver | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._radius = undefined;
      this._secretString = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._radius = value.radius;
      this._secretString = value.secretString;
    }
  }

  // radius - computed: false, optional: true, required: false
  private _radius?: number; 
  public get radius() {
    return this.getNumberAttribute('radius');
  }
  public set radius(value: number) {
    this._radius = value;
  }
  public resetRadius() {
    this._radius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusInput() {
    return this._radius;
  }

  // secret_string - computed: false, optional: true, required: false
  private _secretString?: string; 
  public get secretString() {
    return this.getStringAttribute('secret_string');
  }
  public set secretString(value: string) {
    this._secretString = value;
  }
  public resetSecretString() {
    this._secretString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretStringInput() {
    return this._secretString;
  }
}
export interface Cgnv6TemplateLoggingRfcCustomHeader {
  /**
  * Use alternate non-RFC5424 compliant timestamp. Ex: 1990 Jan 15 12:30:30
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#use_alternate_timestamp Cgnv6TemplateLogging#use_alternate_timestamp}
  */
  readonly useAlternateTimestamp?: number;
}

export function cgnv6TemplateLoggingRfcCustomHeaderToTerraform(struct?: Cgnv6TemplateLoggingRfcCustomHeaderOutputReference | Cgnv6TemplateLoggingRfcCustomHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_alternate_timestamp: cdktf.numberToTerraform(struct!.useAlternateTimestamp),
  }
}


export function cgnv6TemplateLoggingRfcCustomHeaderToHclTerraform(struct?: Cgnv6TemplateLoggingRfcCustomHeaderOutputReference | Cgnv6TemplateLoggingRfcCustomHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    use_alternate_timestamp: {
      value: cdktf.numberToHclTerraform(struct!.useAlternateTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplateLoggingRfcCustomHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6TemplateLoggingRfcCustomHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._useAlternateTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAlternateTimestamp = this._useAlternateTimestamp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateLoggingRfcCustomHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._useAlternateTimestamp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._useAlternateTimestamp = value.useAlternateTimestamp;
    }
  }

  // use_alternate_timestamp - computed: false, optional: true, required: false
  private _useAlternateTimestamp?: number; 
  public get useAlternateTimestamp() {
    return this.getNumberAttribute('use_alternate_timestamp');
  }
  public set useAlternateTimestamp(value: number) {
    this._useAlternateTimestamp = value;
  }
  public resetUseAlternateTimestamp() {
    this._useAlternateTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAlternateTimestampInput() {
    return this._useAlternateTimestamp;
  }
}
export interface Cgnv6TemplateLoggingRfcCustomMessageIpv6Tech {
  /**
  * Fixed-NAT allocated (Custom message string. Should be in the format of "MSGID [STRUCTURED-DATA] MSG")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#fixed_nat_allocated Cgnv6TemplateLogging#fixed_nat_allocated}
  */
  readonly fixedNatAllocated?: string;
  /**
  * Fixed-NAT freed (Custom message string. Should be in the format of "MSGID [STRUCTURED-DATA] MSG")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#fixed_nat_freed Cgnv6TemplateLogging#fixed_nat_freed}
  */
  readonly fixedNatFreed?: string;
  /**
  * Port allocated (Custom message string. Should be in the format of "MSGID [STRUCTURED-DATA] MSG")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#port_allocated Cgnv6TemplateLogging#port_allocated}
  */
  readonly portAllocated?: string;
  /**
  * Port Batch allocated (Custom message string. Should be in the format of "MSGID [STRUCTURED-DATA] MSG")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#port_batch_allocated Cgnv6TemplateLogging#port_batch_allocated}
  */
  readonly portBatchAllocated?: string;
  /**
  * Port Batch freed (Custom message string. Should be in the format of "MSGID [STRUCTURED-DATA] MSG")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#port_batch_freed Cgnv6TemplateLogging#port_batch_freed}
  */
  readonly portBatchFreed?: string;
  /**
  * Port Batch v2 allocated (Custom message string. Should be in the format of "MSGID [STRUCTURED-DATA] MSG")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#port_batch_v2_allocated Cgnv6TemplateLogging#port_batch_v2_allocated}
  */
  readonly portBatchV2Allocated?: string;
  /**
  * Port Batch v2 freed (Custom message string. Should be in the format of "MSGID [STRUCTURED-DATA] MSG")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#port_batch_v2_freed Cgnv6TemplateLogging#port_batch_v2_freed}
  */
  readonly portBatchV2Freed?: string;
  /**
  * Port freed (Custom message string. Should be in the format of "MSGID [STRUCTURED-DATA] MSG")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#port_freed Cgnv6TemplateLogging#port_freed}
  */
  readonly portFreed?: string;
  /**
  * 'lsn': LSN; 'nat64': NAT64; 'ds-lite': DS-Lite; 'sixrd-nat64': 6rd-NAT64;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#tech_type Cgnv6TemplateLogging#tech_type}
  */
  readonly techType?: string;
}

export function cgnv6TemplateLoggingRfcCustomMessageIpv6TechToTerraform(struct?: Cgnv6TemplateLoggingRfcCustomMessageIpv6Tech | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_nat_allocated: cdktf.stringToTerraform(struct!.fixedNatAllocated),
    fixed_nat_freed: cdktf.stringToTerraform(struct!.fixedNatFreed),
    port_allocated: cdktf.stringToTerraform(struct!.portAllocated),
    port_batch_allocated: cdktf.stringToTerraform(struct!.portBatchAllocated),
    port_batch_freed: cdktf.stringToTerraform(struct!.portBatchFreed),
    port_batch_v2_allocated: cdktf.stringToTerraform(struct!.portBatchV2Allocated),
    port_batch_v2_freed: cdktf.stringToTerraform(struct!.portBatchV2Freed),
    port_freed: cdktf.stringToTerraform(struct!.portFreed),
    tech_type: cdktf.stringToTerraform(struct!.techType),
  }
}


export function cgnv6TemplateLoggingRfcCustomMessageIpv6TechToHclTerraform(struct?: Cgnv6TemplateLoggingRfcCustomMessageIpv6Tech | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fixed_nat_allocated: {
      value: cdktf.stringToHclTerraform(struct!.fixedNatAllocated),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fixed_nat_freed: {
      value: cdktf.stringToHclTerraform(struct!.fixedNatFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_allocated: {
      value: cdktf.stringToHclTerraform(struct!.portAllocated),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_batch_allocated: {
      value: cdktf.stringToHclTerraform(struct!.portBatchAllocated),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_batch_freed: {
      value: cdktf.stringToHclTerraform(struct!.portBatchFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_batch_v2_allocated: {
      value: cdktf.stringToHclTerraform(struct!.portBatchV2Allocated),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_batch_v2_freed: {
      value: cdktf.stringToHclTerraform(struct!.portBatchV2Freed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_freed: {
      value: cdktf.stringToHclTerraform(struct!.portFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tech_type: {
      value: cdktf.stringToHclTerraform(struct!.techType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplateLoggingRfcCustomMessageIpv6TechOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6TemplateLoggingRfcCustomMessageIpv6Tech | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedNatAllocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedNatAllocated = this._fixedNatAllocated;
    }
    if (this._fixedNatFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedNatFreed = this._fixedNatFreed;
    }
    if (this._portAllocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.portAllocated = this._portAllocated;
    }
    if (this._portBatchAllocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBatchAllocated = this._portBatchAllocated;
    }
    if (this._portBatchFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBatchFreed = this._portBatchFreed;
    }
    if (this._portBatchV2Allocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBatchV2Allocated = this._portBatchV2Allocated;
    }
    if (this._portBatchV2Freed !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBatchV2Freed = this._portBatchV2Freed;
    }
    if (this._portFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.portFreed = this._portFreed;
    }
    if (this._techType !== undefined) {
      hasAnyValues = true;
      internalValueResult.techType = this._techType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateLoggingRfcCustomMessageIpv6Tech | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fixedNatAllocated = undefined;
      this._fixedNatFreed = undefined;
      this._portAllocated = undefined;
      this._portBatchAllocated = undefined;
      this._portBatchFreed = undefined;
      this._portBatchV2Allocated = undefined;
      this._portBatchV2Freed = undefined;
      this._portFreed = undefined;
      this._techType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fixedNatAllocated = value.fixedNatAllocated;
      this._fixedNatFreed = value.fixedNatFreed;
      this._portAllocated = value.portAllocated;
      this._portBatchAllocated = value.portBatchAllocated;
      this._portBatchFreed = value.portBatchFreed;
      this._portBatchV2Allocated = value.portBatchV2Allocated;
      this._portBatchV2Freed = value.portBatchV2Freed;
      this._portFreed = value.portFreed;
      this._techType = value.techType;
    }
  }

  // fixed_nat_allocated - computed: false, optional: true, required: false
  private _fixedNatAllocated?: string; 
  public get fixedNatAllocated() {
    return this.getStringAttribute('fixed_nat_allocated');
  }
  public set fixedNatAllocated(value: string) {
    this._fixedNatAllocated = value;
  }
  public resetFixedNatAllocated() {
    this._fixedNatAllocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedNatAllocatedInput() {
    return this._fixedNatAllocated;
  }

  // fixed_nat_freed - computed: false, optional: true, required: false
  private _fixedNatFreed?: string; 
  public get fixedNatFreed() {
    return this.getStringAttribute('fixed_nat_freed');
  }
  public set fixedNatFreed(value: string) {
    this._fixedNatFreed = value;
  }
  public resetFixedNatFreed() {
    this._fixedNatFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedNatFreedInput() {
    return this._fixedNatFreed;
  }

  // port_allocated - computed: false, optional: true, required: false
  private _portAllocated?: string; 
  public get portAllocated() {
    return this.getStringAttribute('port_allocated');
  }
  public set portAllocated(value: string) {
    this._portAllocated = value;
  }
  public resetPortAllocated() {
    this._portAllocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portAllocatedInput() {
    return this._portAllocated;
  }

  // port_batch_allocated - computed: false, optional: true, required: false
  private _portBatchAllocated?: string; 
  public get portBatchAllocated() {
    return this.getStringAttribute('port_batch_allocated');
  }
  public set portBatchAllocated(value: string) {
    this._portBatchAllocated = value;
  }
  public resetPortBatchAllocated() {
    this._portBatchAllocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBatchAllocatedInput() {
    return this._portBatchAllocated;
  }

  // port_batch_freed - computed: false, optional: true, required: false
  private _portBatchFreed?: string; 
  public get portBatchFreed() {
    return this.getStringAttribute('port_batch_freed');
  }
  public set portBatchFreed(value: string) {
    this._portBatchFreed = value;
  }
  public resetPortBatchFreed() {
    this._portBatchFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBatchFreedInput() {
    return this._portBatchFreed;
  }

  // port_batch_v2_allocated - computed: false, optional: true, required: false
  private _portBatchV2Allocated?: string; 
  public get portBatchV2Allocated() {
    return this.getStringAttribute('port_batch_v2_allocated');
  }
  public set portBatchV2Allocated(value: string) {
    this._portBatchV2Allocated = value;
  }
  public resetPortBatchV2Allocated() {
    this._portBatchV2Allocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBatchV2AllocatedInput() {
    return this._portBatchV2Allocated;
  }

  // port_batch_v2_freed - computed: false, optional: true, required: false
  private _portBatchV2Freed?: string; 
  public get portBatchV2Freed() {
    return this.getStringAttribute('port_batch_v2_freed');
  }
  public set portBatchV2Freed(value: string) {
    this._portBatchV2Freed = value;
  }
  public resetPortBatchV2Freed() {
    this._portBatchV2Freed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBatchV2FreedInput() {
    return this._portBatchV2Freed;
  }

  // port_freed - computed: false, optional: true, required: false
  private _portFreed?: string; 
  public get portFreed() {
    return this.getStringAttribute('port_freed');
  }
  public set portFreed(value: string) {
    this._portFreed = value;
  }
  public resetPortFreed() {
    this._portFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portFreedInput() {
    return this._portFreed;
  }

  // tech_type - computed: false, optional: true, required: false
  private _techType?: string; 
  public get techType() {
    return this.getStringAttribute('tech_type');
  }
  public set techType(value: string) {
    this._techType = value;
  }
  public resetTechType() {
    this._techType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get techTypeInput() {
    return this._techType;
  }
}

export class Cgnv6TemplateLoggingRfcCustomMessageIpv6TechList extends cdktf.ComplexList {
  public internalValue? : Cgnv6TemplateLoggingRfcCustomMessageIpv6Tech[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6TemplateLoggingRfcCustomMessageIpv6TechOutputReference {
    return new Cgnv6TemplateLoggingRfcCustomMessageIpv6TechOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6TemplateLoggingRfcCustomMessage {
  /**
  * MAP DHCPv6 prefix assigned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#dhcpv6_map_prefix_assigned Cgnv6TemplateLogging#dhcpv6_map_prefix_assigned}
  */
  readonly dhcpv6MapPrefixAssigned?: string;
  /**
  * MAP DHCPv6 prefix released
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#dhcpv6_map_prefix_released Cgnv6TemplateLogging#dhcpv6_map_prefix_released}
  */
  readonly dhcpv6MapPrefixReleased?: string;
  /**
  * MAP DHCPv6 prefix renewed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#dhcpv6_map_prefix_renewed Cgnv6TemplateLogging#dhcpv6_map_prefix_renewed}
  */
  readonly dhcpv6MapPrefixRenewed?: string;
  /**
  * HTTP request got (Custom message string. Should be in the format of "MSGID [STRUCTURED-DATA] MSG")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#http_request_got Cgnv6TemplateLogging#http_request_got}
  */
  readonly httpRequestGot?: string;
  /**
  * Session created (Custom message string. Should be in the format of "MSGID [STRUCTURED-DATA] MSG")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#session_created Cgnv6TemplateLogging#session_created}
  */
  readonly sessionCreated?: string;
  /**
  * Session deleted (Custom message string. Should be in the format of "MSGID [STRUCTURED-DATA] MSG")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#session_deleted Cgnv6TemplateLogging#session_deleted}
  */
  readonly sessionDeleted?: string;
  /**
  * ipv6_tech block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#ipv6_tech Cgnv6TemplateLogging#ipv6_tech}
  */
  readonly ipv6Tech?: Cgnv6TemplateLoggingRfcCustomMessageIpv6Tech[] | cdktf.IResolvable;
}

export function cgnv6TemplateLoggingRfcCustomMessageToTerraform(struct?: Cgnv6TemplateLoggingRfcCustomMessageOutputReference | Cgnv6TemplateLoggingRfcCustomMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcpv6_map_prefix_assigned: cdktf.stringToTerraform(struct!.dhcpv6MapPrefixAssigned),
    dhcpv6_map_prefix_released: cdktf.stringToTerraform(struct!.dhcpv6MapPrefixReleased),
    dhcpv6_map_prefix_renewed: cdktf.stringToTerraform(struct!.dhcpv6MapPrefixRenewed),
    http_request_got: cdktf.stringToTerraform(struct!.httpRequestGot),
    session_created: cdktf.stringToTerraform(struct!.sessionCreated),
    session_deleted: cdktf.stringToTerraform(struct!.sessionDeleted),
    ipv6_tech: cdktf.listMapper(cgnv6TemplateLoggingRfcCustomMessageIpv6TechToTerraform, true)(struct!.ipv6Tech),
  }
}


export function cgnv6TemplateLoggingRfcCustomMessageToHclTerraform(struct?: Cgnv6TemplateLoggingRfcCustomMessageOutputReference | Cgnv6TemplateLoggingRfcCustomMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcpv6_map_prefix_assigned: {
      value: cdktf.stringToHclTerraform(struct!.dhcpv6MapPrefixAssigned),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcpv6_map_prefix_released: {
      value: cdktf.stringToHclTerraform(struct!.dhcpv6MapPrefixReleased),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcpv6_map_prefix_renewed: {
      value: cdktf.stringToHclTerraform(struct!.dhcpv6MapPrefixRenewed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_request_got: {
      value: cdktf.stringToHclTerraform(struct!.httpRequestGot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_created: {
      value: cdktf.stringToHclTerraform(struct!.sessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_deleted: {
      value: cdktf.stringToHclTerraform(struct!.sessionDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_tech: {
      value: cdktf.listMapperHcl(cgnv6TemplateLoggingRfcCustomMessageIpv6TechToHclTerraform, true)(struct!.ipv6Tech),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6TemplateLoggingRfcCustomMessageIpv6TechList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplateLoggingRfcCustomMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6TemplateLoggingRfcCustomMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcpv6MapPrefixAssigned !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpv6MapPrefixAssigned = this._dhcpv6MapPrefixAssigned;
    }
    if (this._dhcpv6MapPrefixReleased !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpv6MapPrefixReleased = this._dhcpv6MapPrefixReleased;
    }
    if (this._dhcpv6MapPrefixRenewed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpv6MapPrefixRenewed = this._dhcpv6MapPrefixRenewed;
    }
    if (this._httpRequestGot !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRequestGot = this._httpRequestGot;
    }
    if (this._sessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCreated = this._sessionCreated;
    }
    if (this._sessionDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionDeleted = this._sessionDeleted;
    }
    if (this._ipv6Tech?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Tech = this._ipv6Tech?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateLoggingRfcCustomMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dhcpv6MapPrefixAssigned = undefined;
      this._dhcpv6MapPrefixReleased = undefined;
      this._dhcpv6MapPrefixRenewed = undefined;
      this._httpRequestGot = undefined;
      this._sessionCreated = undefined;
      this._sessionDeleted = undefined;
      this._ipv6Tech.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dhcpv6MapPrefixAssigned = value.dhcpv6MapPrefixAssigned;
      this._dhcpv6MapPrefixReleased = value.dhcpv6MapPrefixReleased;
      this._dhcpv6MapPrefixRenewed = value.dhcpv6MapPrefixRenewed;
      this._httpRequestGot = value.httpRequestGot;
      this._sessionCreated = value.sessionCreated;
      this._sessionDeleted = value.sessionDeleted;
      this._ipv6Tech.internalValue = value.ipv6Tech;
    }
  }

  // dhcpv6_map_prefix_assigned - computed: false, optional: true, required: false
  private _dhcpv6MapPrefixAssigned?: string; 
  public get dhcpv6MapPrefixAssigned() {
    return this.getStringAttribute('dhcpv6_map_prefix_assigned');
  }
  public set dhcpv6MapPrefixAssigned(value: string) {
    this._dhcpv6MapPrefixAssigned = value;
  }
  public resetDhcpv6MapPrefixAssigned() {
    this._dhcpv6MapPrefixAssigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpv6MapPrefixAssignedInput() {
    return this._dhcpv6MapPrefixAssigned;
  }

  // dhcpv6_map_prefix_released - computed: false, optional: true, required: false
  private _dhcpv6MapPrefixReleased?: string; 
  public get dhcpv6MapPrefixReleased() {
    return this.getStringAttribute('dhcpv6_map_prefix_released');
  }
  public set dhcpv6MapPrefixReleased(value: string) {
    this._dhcpv6MapPrefixReleased = value;
  }
  public resetDhcpv6MapPrefixReleased() {
    this._dhcpv6MapPrefixReleased = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpv6MapPrefixReleasedInput() {
    return this._dhcpv6MapPrefixReleased;
  }

  // dhcpv6_map_prefix_renewed - computed: false, optional: true, required: false
  private _dhcpv6MapPrefixRenewed?: string; 
  public get dhcpv6MapPrefixRenewed() {
    return this.getStringAttribute('dhcpv6_map_prefix_renewed');
  }
  public set dhcpv6MapPrefixRenewed(value: string) {
    this._dhcpv6MapPrefixRenewed = value;
  }
  public resetDhcpv6MapPrefixRenewed() {
    this._dhcpv6MapPrefixRenewed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpv6MapPrefixRenewedInput() {
    return this._dhcpv6MapPrefixRenewed;
  }

  // http_request_got - computed: false, optional: true, required: false
  private _httpRequestGot?: string; 
  public get httpRequestGot() {
    return this.getStringAttribute('http_request_got');
  }
  public set httpRequestGot(value: string) {
    this._httpRequestGot = value;
  }
  public resetHttpRequestGot() {
    this._httpRequestGot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestGotInput() {
    return this._httpRequestGot;
  }

  // session_created - computed: false, optional: true, required: false
  private _sessionCreated?: string; 
  public get sessionCreated() {
    return this.getStringAttribute('session_created');
  }
  public set sessionCreated(value: string) {
    this._sessionCreated = value;
  }
  public resetSessionCreated() {
    this._sessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCreatedInput() {
    return this._sessionCreated;
  }

  // session_deleted - computed: false, optional: true, required: false
  private _sessionDeleted?: string; 
  public get sessionDeleted() {
    return this.getStringAttribute('session_deleted');
  }
  public set sessionDeleted(value: string) {
    this._sessionDeleted = value;
  }
  public resetSessionDeleted() {
    this._sessionDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionDeletedInput() {
    return this._sessionDeleted;
  }

  // ipv6_tech - computed: false, optional: true, required: false
  private _ipv6Tech = new Cgnv6TemplateLoggingRfcCustomMessageIpv6TechList(this, "ipv6_tech", false);
  public get ipv6Tech() {
    return this._ipv6Tech;
  }
  public putIpv6Tech(value: Cgnv6TemplateLoggingRfcCustomMessageIpv6Tech[] | cdktf.IResolvable) {
    this._ipv6Tech.internalValue = value;
  }
  public resetIpv6Tech() {
    this._ipv6Tech.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6TechInput() {
    return this._ipv6Tech.internalValue;
  }
}
export interface Cgnv6TemplateLoggingRfcCustom {
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#header Cgnv6TemplateLogging#header}
  */
  readonly header?: Cgnv6TemplateLoggingRfcCustomHeader;
  /**
  * message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#message Cgnv6TemplateLogging#message}
  */
  readonly message?: Cgnv6TemplateLoggingRfcCustomMessage;
}

export function cgnv6TemplateLoggingRfcCustomToTerraform(struct?: Cgnv6TemplateLoggingRfcCustomOutputReference | Cgnv6TemplateLoggingRfcCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header: cgnv6TemplateLoggingRfcCustomHeaderToTerraform(struct!.header),
    message: cgnv6TemplateLoggingRfcCustomMessageToTerraform(struct!.message),
  }
}


export function cgnv6TemplateLoggingRfcCustomToHclTerraform(struct?: Cgnv6TemplateLoggingRfcCustomOutputReference | Cgnv6TemplateLoggingRfcCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header: {
      value: cgnv6TemplateLoggingRfcCustomHeaderToHclTerraform(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6TemplateLoggingRfcCustomHeaderList",
    },
    message: {
      value: cgnv6TemplateLoggingRfcCustomMessageToHclTerraform(struct!.message),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6TemplateLoggingRfcCustomMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplateLoggingRfcCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6TemplateLoggingRfcCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    if (this._message?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateLoggingRfcCustom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._header.internalValue = undefined;
      this._message.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._header.internalValue = value.header;
      this._message.internalValue = value.message;
    }
  }

  // header - computed: false, optional: true, required: false
  private _header = new Cgnv6TemplateLoggingRfcCustomHeaderOutputReference(this, "header");
  public get header() {
    return this._header;
  }
  public putHeader(value: Cgnv6TemplateLoggingRfcCustomHeader) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // message - computed: false, optional: true, required: false
  private _message = new Cgnv6TemplateLoggingRfcCustomMessageOutputReference(this, "message");
  public get message() {
    return this._message;
  }
  public putMessage(value: Cgnv6TemplateLoggingRfcCustomMessage) {
    this._message.internalValue = value;
  }
  public resetMessage() {
    this._message.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message.internalValue;
  }
}
export interface Cgnv6TemplateLoggingRuleRuleHttpRequestsDestPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#dest_port_number Cgnv6TemplateLogging#dest_port_number}
  */
  readonly destPortNumber?: number;
  /**
  * Include the byte count of HTTP Request/Response in CGN session deletion logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#include_byte_count Cgnv6TemplateLogging#include_byte_count}
  */
  readonly includeByteCount?: number;
}

export function cgnv6TemplateLoggingRuleRuleHttpRequestsDestPortToTerraform(struct?: Cgnv6TemplateLoggingRuleRuleHttpRequestsDestPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dest_port_number: cdktf.numberToTerraform(struct!.destPortNumber),
    include_byte_count: cdktf.numberToTerraform(struct!.includeByteCount),
  }
}


export function cgnv6TemplateLoggingRuleRuleHttpRequestsDestPortToHclTerraform(struct?: Cgnv6TemplateLoggingRuleRuleHttpRequestsDestPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dest_port_number: {
      value: cdktf.numberToHclTerraform(struct!.destPortNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    include_byte_count: {
      value: cdktf.numberToHclTerraform(struct!.includeByteCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplateLoggingRuleRuleHttpRequestsDestPortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6TemplateLoggingRuleRuleHttpRequestsDestPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destPortNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.destPortNumber = this._destPortNumber;
    }
    if (this._includeByteCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeByteCount = this._includeByteCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateLoggingRuleRuleHttpRequestsDestPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destPortNumber = undefined;
      this._includeByteCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destPortNumber = value.destPortNumber;
      this._includeByteCount = value.includeByteCount;
    }
  }

  // dest_port_number - computed: false, optional: true, required: false
  private _destPortNumber?: number; 
  public get destPortNumber() {
    return this.getNumberAttribute('dest_port_number');
  }
  public set destPortNumber(value: number) {
    this._destPortNumber = value;
  }
  public resetDestPortNumber() {
    this._destPortNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destPortNumberInput() {
    return this._destPortNumber;
  }

  // include_byte_count - computed: false, optional: true, required: false
  private _includeByteCount?: number; 
  public get includeByteCount() {
    return this.getNumberAttribute('include_byte_count');
  }
  public set includeByteCount(value: number) {
    this._includeByteCount = value;
  }
  public resetIncludeByteCount() {
    this._includeByteCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeByteCountInput() {
    return this._includeByteCount;
  }
}

export class Cgnv6TemplateLoggingRuleRuleHttpRequestsDestPortList extends cdktf.ComplexList {
  public internalValue? : Cgnv6TemplateLoggingRuleRuleHttpRequestsDestPort[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6TemplateLoggingRuleRuleHttpRequestsDestPortOutputReference {
    return new Cgnv6TemplateLoggingRuleRuleHttpRequestsDestPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6TemplateLoggingRuleRuleHttpRequests {
  /**
  * Disable http packet sequence check and don't drop out of order packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#disable_sequence_check Cgnv6TemplateLogging#disable_sequence_check}
  */
  readonly disableSequenceCheck?: number;
  /**
  * Include all configured headers despite of absence in HTTP request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#include_all_headers Cgnv6TemplateLogging#include_all_headers}
  */
  readonly includeAllHeaders?: number;
  /**
  * Log every HTTP request in an HTTP 1.1 session (Default: Log the first HTTP request in a session)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#log_every_http_request Cgnv6TemplateLogging#log_every_http_request}
  */
  readonly logEveryHttpRequest?: number;
  /**
  * Max length of URL log (Max URL length (Default: 128 char))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#max_url_len Cgnv6TemplateLogging#max_url_len}
  */
  readonly maxUrlLen?: number;
  /**
  * dest_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#dest_port Cgnv6TemplateLogging#dest_port}
  */
  readonly destPort?: Cgnv6TemplateLoggingRuleRuleHttpRequestsDestPort[] | cdktf.IResolvable;
}

export function cgnv6TemplateLoggingRuleRuleHttpRequestsToTerraform(struct?: Cgnv6TemplateLoggingRuleRuleHttpRequestsOutputReference | Cgnv6TemplateLoggingRuleRuleHttpRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_sequence_check: cdktf.numberToTerraform(struct!.disableSequenceCheck),
    include_all_headers: cdktf.numberToTerraform(struct!.includeAllHeaders),
    log_every_http_request: cdktf.numberToTerraform(struct!.logEveryHttpRequest),
    max_url_len: cdktf.numberToTerraform(struct!.maxUrlLen),
    dest_port: cdktf.listMapper(cgnv6TemplateLoggingRuleRuleHttpRequestsDestPortToTerraform, true)(struct!.destPort),
  }
}


export function cgnv6TemplateLoggingRuleRuleHttpRequestsToHclTerraform(struct?: Cgnv6TemplateLoggingRuleRuleHttpRequestsOutputReference | Cgnv6TemplateLoggingRuleRuleHttpRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_sequence_check: {
      value: cdktf.numberToHclTerraform(struct!.disableSequenceCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    include_all_headers: {
      value: cdktf.numberToHclTerraform(struct!.includeAllHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_every_http_request: {
      value: cdktf.numberToHclTerraform(struct!.logEveryHttpRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_url_len: {
      value: cdktf.numberToHclTerraform(struct!.maxUrlLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dest_port: {
      value: cdktf.listMapperHcl(cgnv6TemplateLoggingRuleRuleHttpRequestsDestPortToHclTerraform, true)(struct!.destPort),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6TemplateLoggingRuleRuleHttpRequestsDestPortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplateLoggingRuleRuleHttpRequestsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6TemplateLoggingRuleRuleHttpRequests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableSequenceCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSequenceCheck = this._disableSequenceCheck;
    }
    if (this._includeAllHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeAllHeaders = this._includeAllHeaders;
    }
    if (this._logEveryHttpRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.logEveryHttpRequest = this._logEveryHttpRequest;
    }
    if (this._maxUrlLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUrlLen = this._maxUrlLen;
    }
    if (this._destPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destPort = this._destPort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateLoggingRuleRuleHttpRequests | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableSequenceCheck = undefined;
      this._includeAllHeaders = undefined;
      this._logEveryHttpRequest = undefined;
      this._maxUrlLen = undefined;
      this._destPort.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableSequenceCheck = value.disableSequenceCheck;
      this._includeAllHeaders = value.includeAllHeaders;
      this._logEveryHttpRequest = value.logEveryHttpRequest;
      this._maxUrlLen = value.maxUrlLen;
      this._destPort.internalValue = value.destPort;
    }
  }

  // disable_sequence_check - computed: false, optional: true, required: false
  private _disableSequenceCheck?: number; 
  public get disableSequenceCheck() {
    return this.getNumberAttribute('disable_sequence_check');
  }
  public set disableSequenceCheck(value: number) {
    this._disableSequenceCheck = value;
  }
  public resetDisableSequenceCheck() {
    this._disableSequenceCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSequenceCheckInput() {
    return this._disableSequenceCheck;
  }

  // include_all_headers - computed: false, optional: true, required: false
  private _includeAllHeaders?: number; 
  public get includeAllHeaders() {
    return this.getNumberAttribute('include_all_headers');
  }
  public set includeAllHeaders(value: number) {
    this._includeAllHeaders = value;
  }
  public resetIncludeAllHeaders() {
    this._includeAllHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAllHeadersInput() {
    return this._includeAllHeaders;
  }

  // log_every_http_request - computed: false, optional: true, required: false
  private _logEveryHttpRequest?: number; 
  public get logEveryHttpRequest() {
    return this.getNumberAttribute('log_every_http_request');
  }
  public set logEveryHttpRequest(value: number) {
    this._logEveryHttpRequest = value;
  }
  public resetLogEveryHttpRequest() {
    this._logEveryHttpRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logEveryHttpRequestInput() {
    return this._logEveryHttpRequest;
  }

  // max_url_len - computed: false, optional: true, required: false
  private _maxUrlLen?: number; 
  public get maxUrlLen() {
    return this.getNumberAttribute('max_url_len');
  }
  public set maxUrlLen(value: number) {
    this._maxUrlLen = value;
  }
  public resetMaxUrlLen() {
    this._maxUrlLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUrlLenInput() {
    return this._maxUrlLen;
  }

  // dest_port - computed: false, optional: true, required: false
  private _destPort = new Cgnv6TemplateLoggingRuleRuleHttpRequestsDestPortList(this, "dest_port", false);
  public get destPort() {
    return this._destPort;
  }
  public putDestPort(value: Cgnv6TemplateLoggingRuleRuleHttpRequestsDestPort[] | cdktf.IResolvable) {
    this._destPort.internalValue = value;
  }
  public resetDestPort() {
    this._destPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destPortInput() {
    return this._destPort.internalValue;
  }
}
export interface Cgnv6TemplateLoggingRule {
  /**
  * Log interim update of NAT mappings (Interim update interval in minutes(Interval is floored to a multiple of 5))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#interim_update_interval Cgnv6TemplateLogging#interim_update_interval}
  */
  readonly interimUpdateInterval?: number;
  /**
  * rule_http_requests block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#rule_http_requests Cgnv6TemplateLogging#rule_http_requests}
  */
  readonly ruleHttpRequests?: Cgnv6TemplateLoggingRuleRuleHttpRequests;
}

export function cgnv6TemplateLoggingRuleToTerraform(struct?: Cgnv6TemplateLoggingRuleOutputReference | Cgnv6TemplateLoggingRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interim_update_interval: cdktf.numberToTerraform(struct!.interimUpdateInterval),
    rule_http_requests: cgnv6TemplateLoggingRuleRuleHttpRequestsToTerraform(struct!.ruleHttpRequests),
  }
}


export function cgnv6TemplateLoggingRuleToHclTerraform(struct?: Cgnv6TemplateLoggingRuleOutputReference | Cgnv6TemplateLoggingRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interim_update_interval: {
      value: cdktf.numberToHclTerraform(struct!.interimUpdateInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_http_requests: {
      value: cgnv6TemplateLoggingRuleRuleHttpRequestsToHclTerraform(struct!.ruleHttpRequests),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6TemplateLoggingRuleRuleHttpRequestsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplateLoggingRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6TemplateLoggingRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interimUpdateInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interimUpdateInterval = this._interimUpdateInterval;
    }
    if (this._ruleHttpRequests?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleHttpRequests = this._ruleHttpRequests?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateLoggingRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interimUpdateInterval = undefined;
      this._ruleHttpRequests.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interimUpdateInterval = value.interimUpdateInterval;
      this._ruleHttpRequests.internalValue = value.ruleHttpRequests;
    }
  }

  // interim_update_interval - computed: false, optional: true, required: false
  private _interimUpdateInterval?: number; 
  public get interimUpdateInterval() {
    return this.getNumberAttribute('interim_update_interval');
  }
  public set interimUpdateInterval(value: number) {
    this._interimUpdateInterval = value;
  }
  public resetInterimUpdateInterval() {
    this._interimUpdateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interimUpdateIntervalInput() {
    return this._interimUpdateInterval;
  }

  // rule_http_requests - computed: false, optional: true, required: false
  private _ruleHttpRequests = new Cgnv6TemplateLoggingRuleRuleHttpRequestsOutputReference(this, "rule_http_requests");
  public get ruleHttpRequests() {
    return this._ruleHttpRequests;
  }
  public putRuleHttpRequests(value: Cgnv6TemplateLoggingRuleRuleHttpRequests) {
    this._ruleHttpRequests.internalValue = value;
  }
  public resetRuleHttpRequests() {
    this._ruleHttpRequests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleHttpRequestsInput() {
    return this._ruleHttpRequests.internalValue;
  }
}
export interface Cgnv6TemplateLoggingSeverity {
  /**
  * 'emergency': 0: Emergency; 'alert': 1: Alert; 'critical': 2: Critical; 'error': 3: Error; 'warning': 4: Warning; 'notice': 5: Notice; 'informational': 6: Informational; 'debug': 7: Debug;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#severity_string Cgnv6TemplateLogging#severity_string}
  */
  readonly severityString?: string;
  /**
  * Logging severity level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#severity_val Cgnv6TemplateLogging#severity_val}
  */
  readonly severityVal?: number;
}

export function cgnv6TemplateLoggingSeverityToTerraform(struct?: Cgnv6TemplateLoggingSeverityOutputReference | Cgnv6TemplateLoggingSeverity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    severity_string: cdktf.stringToTerraform(struct!.severityString),
    severity_val: cdktf.numberToTerraform(struct!.severityVal),
  }
}


export function cgnv6TemplateLoggingSeverityToHclTerraform(struct?: Cgnv6TemplateLoggingSeverityOutputReference | Cgnv6TemplateLoggingSeverity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    severity_string: {
      value: cdktf.stringToHclTerraform(struct!.severityString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity_val: {
      value: cdktf.numberToHclTerraform(struct!.severityVal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplateLoggingSeverityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6TemplateLoggingSeverity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._severityString !== undefined) {
      hasAnyValues = true;
      internalValueResult.severityString = this._severityString;
    }
    if (this._severityVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.severityVal = this._severityVal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateLoggingSeverity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._severityString = undefined;
      this._severityVal = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._severityString = value.severityString;
      this._severityVal = value.severityVal;
    }
  }

  // severity_string - computed: false, optional: true, required: false
  private _severityString?: string; 
  public get severityString() {
    return this.getStringAttribute('severity_string');
  }
  public set severityString(value: string) {
    this._severityString = value;
  }
  public resetSeverityString() {
    this._severityString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityStringInput() {
    return this._severityString;
  }

  // severity_val - computed: false, optional: true, required: false
  private _severityVal?: number; 
  public get severityVal() {
    return this.getNumberAttribute('severity_val');
  }
  public set severityVal(value: number) {
    this._severityVal = value;
  }
  public resetSeverityVal() {
    this._severityVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityValInput() {
    return this._severityVal;
  }
}
export interface Cgnv6TemplateLoggingSourceAddress {
  /**
  * Specify source IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#ip Cgnv6TemplateLogging#ip}
  */
  readonly ip?: string;
  /**
  * Specify source IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#ipv6 Cgnv6TemplateLogging#ipv6}
  */
  readonly ipv6?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#uuid Cgnv6TemplateLogging#uuid}
  */
  readonly uuid?: string;
}

export function cgnv6TemplateLoggingSourceAddressToTerraform(struct?: Cgnv6TemplateLoggingSourceAddressOutputReference | Cgnv6TemplateLoggingSourceAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function cgnv6TemplateLoggingSourceAddressToHclTerraform(struct?: Cgnv6TemplateLoggingSourceAddressOutputReference | Cgnv6TemplateLoggingSourceAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
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

export class Cgnv6TemplateLoggingSourceAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6TemplateLoggingSourceAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateLoggingSourceAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._ipv6 = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._ipv6 = value.ipv6;
      this._uuid = value.uuid;
    }
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
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
export interface Cgnv6TemplateLoggingSourcePort {
  /**
  * Use any source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#any Cgnv6TemplateLogging#any}
  */
  readonly any?: number;
  /**
  * Set source port for sending NAT syslogs (default: 514)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#source_port_num Cgnv6TemplateLogging#source_port_num}
  */
  readonly sourcePortNum?: number;
}

export function cgnv6TemplateLoggingSourcePortToTerraform(struct?: Cgnv6TemplateLoggingSourcePortOutputReference | Cgnv6TemplateLoggingSourcePort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any: cdktf.numberToTerraform(struct!.any),
    source_port_num: cdktf.numberToTerraform(struct!.sourcePortNum),
  }
}


export function cgnv6TemplateLoggingSourcePortToHclTerraform(struct?: Cgnv6TemplateLoggingSourcePortOutputReference | Cgnv6TemplateLoggingSourcePort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any: {
      value: cdktf.numberToHclTerraform(struct!.any),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_port_num: {
      value: cdktf.numberToHclTerraform(struct!.sourcePortNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplateLoggingSourcePortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6TemplateLoggingSourcePort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._any !== undefined) {
      hasAnyValues = true;
      internalValueResult.any = this._any;
    }
    if (this._sourcePortNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePortNum = this._sourcePortNum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateLoggingSourcePort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._any = undefined;
      this._sourcePortNum = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._any = value.any;
      this._sourcePortNum = value.sourcePortNum;
    }
  }

  // any - computed: false, optional: true, required: false
  private _any?: number; 
  public get any() {
    return this.getNumberAttribute('any');
  }
  public set any(value: number) {
    this._any = value;
  }
  public resetAny() {
    this._any = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyInput() {
    return this._any;
  }

  // source_port_num - computed: false, optional: true, required: false
  private _sourcePortNum?: number; 
  public get sourcePortNum() {
    return this.getNumberAttribute('source_port_num');
  }
  public set sourcePortNum(value: number) {
    this._sourcePortNum = value;
  }
  public resetSourcePortNum() {
    this._sourcePortNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortNumInput() {
    return this._sourcePortNum;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging thunder_cgnv6_template_logging}
*/
export class Cgnv6TemplateLogging extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_template_logging";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6TemplateLogging resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6TemplateLogging to import
  * @param importFromId The id of the existing Cgnv6TemplateLogging that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6TemplateLogging to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_template_logging", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_logging thunder_cgnv6_template_logging} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6TemplateLoggingConfig
  */
  public constructor(scope: Construct, id: string, config: Cgnv6TemplateLoggingConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_template_logging',
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
    this._batchedLoggingDisable = config.batchedLoggingDisable;
    this._facility = config.facility;
    this._format = config.format;
    this._id = config.id;
    this._includeDestination = config.includeDestination;
    this._includeInsideUserMac = config.includeInsideUserMac;
    this._includePartitionName = config.includePartitionName;
    this._includePortBlockAccount = config.includePortBlockAccount;
    this._includeSessionByteCount = config.includeSessionByteCount;
    this._name = config.name;
    this._resolution = config.resolution;
    this._serviceGroup = config.serviceGroup;
    this._shared = config.shared;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._custom.internalValue = config.custom;
    this._disableLogByDestination.internalValue = config.disableLogByDestination;
    this._includeHttp.internalValue = config.includeHttp;
    this._includeRadiusAttribute.internalValue = config.includeRadiusAttribute;
    this._log.internalValue = config.log;
    this._logReceiver.internalValue = config.logReceiver;
    this._rfcCustom.internalValue = config.rfcCustom;
    this._rule.internalValue = config.rule;
    this._severity.internalValue = config.severity;
    this._sourceAddress.internalValue = config.sourceAddress;
    this._sourcePort.internalValue = config.sourcePort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // batched_logging_disable - computed: false, optional: true, required: false
  private _batchedLoggingDisable?: number; 
  public get batchedLoggingDisable() {
    return this.getNumberAttribute('batched_logging_disable');
  }
  public set batchedLoggingDisable(value: number) {
    this._batchedLoggingDisable = value;
  }
  public resetBatchedLoggingDisable() {
    this._batchedLoggingDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchedLoggingDisableInput() {
    return this._batchedLoggingDisable;
  }

  // facility - computed: false, optional: true, required: false
  private _facility?: string; 
  public get facility() {
    return this.getStringAttribute('facility');
  }
  public set facility(value: string) {
    this._facility = value;
  }
  public resetFacility() {
    this._facility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facilityInput() {
    return this._facility;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // include_destination - computed: false, optional: true, required: false
  private _includeDestination?: number; 
  public get includeDestination() {
    return this.getNumberAttribute('include_destination');
  }
  public set includeDestination(value: number) {
    this._includeDestination = value;
  }
  public resetIncludeDestination() {
    this._includeDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDestinationInput() {
    return this._includeDestination;
  }

  // include_inside_user_mac - computed: false, optional: true, required: false
  private _includeInsideUserMac?: number; 
  public get includeInsideUserMac() {
    return this.getNumberAttribute('include_inside_user_mac');
  }
  public set includeInsideUserMac(value: number) {
    this._includeInsideUserMac = value;
  }
  public resetIncludeInsideUserMac() {
    this._includeInsideUserMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInsideUserMacInput() {
    return this._includeInsideUserMac;
  }

  // include_partition_name - computed: false, optional: true, required: false
  private _includePartitionName?: number; 
  public get includePartitionName() {
    return this.getNumberAttribute('include_partition_name');
  }
  public set includePartitionName(value: number) {
    this._includePartitionName = value;
  }
  public resetIncludePartitionName() {
    this._includePartitionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePartitionNameInput() {
    return this._includePartitionName;
  }

  // include_port_block_account - computed: false, optional: true, required: false
  private _includePortBlockAccount?: number; 
  public get includePortBlockAccount() {
    return this.getNumberAttribute('include_port_block_account');
  }
  public set includePortBlockAccount(value: number) {
    this._includePortBlockAccount = value;
  }
  public resetIncludePortBlockAccount() {
    this._includePortBlockAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePortBlockAccountInput() {
    return this._includePortBlockAccount;
  }

  // include_session_byte_count - computed: false, optional: true, required: false
  private _includeSessionByteCount?: number; 
  public get includeSessionByteCount() {
    return this.getNumberAttribute('include_session_byte_count');
  }
  public set includeSessionByteCount(value: number) {
    this._includeSessionByteCount = value;
  }
  public resetIncludeSessionByteCount() {
    this._includeSessionByteCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSessionByteCountInput() {
    return this._includeSessionByteCount;
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

  // resolution - computed: false, optional: true, required: false
  private _resolution?: string; 
  public get resolution() {
    return this.getStringAttribute('resolution');
  }
  public set resolution(value: string) {
    this._resolution = value;
  }
  public resetResolution() {
    this._resolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionInput() {
    return this._resolution;
  }

  // service_group - computed: false, optional: true, required: false
  private _serviceGroup?: string; 
  public get serviceGroup() {
    return this.getStringAttribute('service_group');
  }
  public set serviceGroup(value: string) {
    this._serviceGroup = value;
  }
  public resetServiceGroup() {
    this._serviceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupInput() {
    return this._serviceGroup;
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

  // custom - computed: false, optional: true, required: false
  private _custom = new Cgnv6TemplateLoggingCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: Cgnv6TemplateLoggingCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // disable_log_by_destination - computed: false, optional: true, required: false
  private _disableLogByDestination = new Cgnv6TemplateLoggingDisableLogByDestinationOutputReference(this, "disable_log_by_destination");
  public get disableLogByDestination() {
    return this._disableLogByDestination;
  }
  public putDisableLogByDestination(value: Cgnv6TemplateLoggingDisableLogByDestination) {
    this._disableLogByDestination.internalValue = value;
  }
  public resetDisableLogByDestination() {
    this._disableLogByDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableLogByDestinationInput() {
    return this._disableLogByDestination.internalValue;
  }

  // include_http - computed: false, optional: true, required: false
  private _includeHttp = new Cgnv6TemplateLoggingIncludeHttpOutputReference(this, "include_http");
  public get includeHttp() {
    return this._includeHttp;
  }
  public putIncludeHttp(value: Cgnv6TemplateLoggingIncludeHttp) {
    this._includeHttp.internalValue = value;
  }
  public resetIncludeHttp() {
    this._includeHttp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeHttpInput() {
    return this._includeHttp.internalValue;
  }

  // include_radius_attribute - computed: false, optional: true, required: false
  private _includeRadiusAttribute = new Cgnv6TemplateLoggingIncludeRadiusAttributeOutputReference(this, "include_radius_attribute");
  public get includeRadiusAttribute() {
    return this._includeRadiusAttribute;
  }
  public putIncludeRadiusAttribute(value: Cgnv6TemplateLoggingIncludeRadiusAttribute) {
    this._includeRadiusAttribute.internalValue = value;
  }
  public resetIncludeRadiusAttribute() {
    this._includeRadiusAttribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRadiusAttributeInput() {
    return this._includeRadiusAttribute.internalValue;
  }

  // log - computed: false, optional: true, required: false
  private _log = new Cgnv6TemplateLoggingLogOutputReference(this, "log");
  public get log() {
    return this._log;
  }
  public putLog(value: Cgnv6TemplateLoggingLog) {
    this._log.internalValue = value;
  }
  public resetLog() {
    this._log.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log.internalValue;
  }

  // log_receiver - computed: false, optional: true, required: false
  private _logReceiver = new Cgnv6TemplateLoggingLogReceiverOutputReference(this, "log_receiver");
  public get logReceiver() {
    return this._logReceiver;
  }
  public putLogReceiver(value: Cgnv6TemplateLoggingLogReceiver) {
    this._logReceiver.internalValue = value;
  }
  public resetLogReceiver() {
    this._logReceiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logReceiverInput() {
    return this._logReceiver.internalValue;
  }

  // rfc_custom - computed: false, optional: true, required: false
  private _rfcCustom = new Cgnv6TemplateLoggingRfcCustomOutputReference(this, "rfc_custom");
  public get rfcCustom() {
    return this._rfcCustom;
  }
  public putRfcCustom(value: Cgnv6TemplateLoggingRfcCustom) {
    this._rfcCustom.internalValue = value;
  }
  public resetRfcCustom() {
    this._rfcCustom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfcCustomInput() {
    return this._rfcCustom.internalValue;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new Cgnv6TemplateLoggingRuleOutputReference(this, "rule");
  public get rule() {
    return this._rule;
  }
  public putRule(value: Cgnv6TemplateLoggingRule) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // severity - computed: false, optional: true, required: false
  private _severity = new Cgnv6TemplateLoggingSeverityOutputReference(this, "severity");
  public get severity() {
    return this._severity;
  }
  public putSeverity(value: Cgnv6TemplateLoggingSeverity) {
    this._severity.internalValue = value;
  }
  public resetSeverity() {
    this._severity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity.internalValue;
  }

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress = new Cgnv6TemplateLoggingSourceAddressOutputReference(this, "source_address");
  public get sourceAddress() {
    return this._sourceAddress;
  }
  public putSourceAddress(value: Cgnv6TemplateLoggingSourceAddress) {
    this._sourceAddress.internalValue = value;
  }
  public resetSourceAddress() {
    this._sourceAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress.internalValue;
  }

  // source_port - computed: false, optional: true, required: false
  private _sourcePort = new Cgnv6TemplateLoggingSourcePortOutputReference(this, "source_port");
  public get sourcePort() {
    return this._sourcePort;
  }
  public putSourcePort(value: Cgnv6TemplateLoggingSourcePort) {
    this._sourcePort.internalValue = value;
  }
  public resetSourcePort() {
    this._sourcePort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      batched_logging_disable: cdktf.numberToTerraform(this._batchedLoggingDisable),
      facility: cdktf.stringToTerraform(this._facility),
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
      include_destination: cdktf.numberToTerraform(this._includeDestination),
      include_inside_user_mac: cdktf.numberToTerraform(this._includeInsideUserMac),
      include_partition_name: cdktf.numberToTerraform(this._includePartitionName),
      include_port_block_account: cdktf.numberToTerraform(this._includePortBlockAccount),
      include_session_byte_count: cdktf.numberToTerraform(this._includeSessionByteCount),
      name: cdktf.stringToTerraform(this._name),
      resolution: cdktf.stringToTerraform(this._resolution),
      service_group: cdktf.stringToTerraform(this._serviceGroup),
      shared: cdktf.numberToTerraform(this._shared),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      custom: cgnv6TemplateLoggingCustomToTerraform(this._custom.internalValue),
      disable_log_by_destination: cgnv6TemplateLoggingDisableLogByDestinationToTerraform(this._disableLogByDestination.internalValue),
      include_http: cgnv6TemplateLoggingIncludeHttpToTerraform(this._includeHttp.internalValue),
      include_radius_attribute: cgnv6TemplateLoggingIncludeRadiusAttributeToTerraform(this._includeRadiusAttribute.internalValue),
      log: cgnv6TemplateLoggingLogToTerraform(this._log.internalValue),
      log_receiver: cgnv6TemplateLoggingLogReceiverToTerraform(this._logReceiver.internalValue),
      rfc_custom: cgnv6TemplateLoggingRfcCustomToTerraform(this._rfcCustom.internalValue),
      rule: cgnv6TemplateLoggingRuleToTerraform(this._rule.internalValue),
      severity: cgnv6TemplateLoggingSeverityToTerraform(this._severity.internalValue),
      source_address: cgnv6TemplateLoggingSourceAddressToTerraform(this._sourceAddress.internalValue),
      source_port: cgnv6TemplateLoggingSourcePortToTerraform(this._sourcePort.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      batched_logging_disable: {
        value: cdktf.numberToHclTerraform(this._batchedLoggingDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      facility: {
        value: cdktf.stringToHclTerraform(this._facility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
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
      include_destination: {
        value: cdktf.numberToHclTerraform(this._includeDestination),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      include_inside_user_mac: {
        value: cdktf.numberToHclTerraform(this._includeInsideUserMac),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      include_partition_name: {
        value: cdktf.numberToHclTerraform(this._includePartitionName),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      include_port_block_account: {
        value: cdktf.numberToHclTerraform(this._includePortBlockAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      include_session_byte_count: {
        value: cdktf.numberToHclTerraform(this._includeSessionByteCount),
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
      resolution: {
        value: cdktf.stringToHclTerraform(this._resolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_group: {
        value: cdktf.stringToHclTerraform(this._serviceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared: {
        value: cdktf.numberToHclTerraform(this._shared),
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
      custom: {
        value: cgnv6TemplateLoggingCustomToHclTerraform(this._custom.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6TemplateLoggingCustomList",
      },
      disable_log_by_destination: {
        value: cgnv6TemplateLoggingDisableLogByDestinationToHclTerraform(this._disableLogByDestination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6TemplateLoggingDisableLogByDestinationList",
      },
      include_http: {
        value: cgnv6TemplateLoggingIncludeHttpToHclTerraform(this._includeHttp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6TemplateLoggingIncludeHttpList",
      },
      include_radius_attribute: {
        value: cgnv6TemplateLoggingIncludeRadiusAttributeToHclTerraform(this._includeRadiusAttribute.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6TemplateLoggingIncludeRadiusAttributeList",
      },
      log: {
        value: cgnv6TemplateLoggingLogToHclTerraform(this._log.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6TemplateLoggingLogList",
      },
      log_receiver: {
        value: cgnv6TemplateLoggingLogReceiverToHclTerraform(this._logReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6TemplateLoggingLogReceiverList",
      },
      rfc_custom: {
        value: cgnv6TemplateLoggingRfcCustomToHclTerraform(this._rfcCustom.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6TemplateLoggingRfcCustomList",
      },
      rule: {
        value: cgnv6TemplateLoggingRuleToHclTerraform(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6TemplateLoggingRuleList",
      },
      severity: {
        value: cgnv6TemplateLoggingSeverityToHclTerraform(this._severity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6TemplateLoggingSeverityList",
      },
      source_address: {
        value: cgnv6TemplateLoggingSourceAddressToHclTerraform(this._sourceAddress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6TemplateLoggingSourceAddressList",
      },
      source_port: {
        value: cgnv6TemplateLoggingSourcePortToHclTerraform(this._sourcePort.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6TemplateLoggingSourcePortList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
