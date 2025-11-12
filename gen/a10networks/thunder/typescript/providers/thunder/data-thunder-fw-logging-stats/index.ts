// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderFwLoggingStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#id DataThunderFwLoggingStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * gtp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#gtp DataThunderFwLoggingStats#gtp}
  */
  readonly gtp?: DataThunderFwLoggingStatsGtp;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#stats DataThunderFwLoggingStats#stats}
  */
  readonly stats?: DataThunderFwLoggingStatsStats;
}
export interface DataThunderFwLoggingStatsGtpStats {
  /**
  * Log Event Type GTP Reserved IE Present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#log_gtp_type_reserved_ie_present DataThunderFwLoggingStats#log_gtp_type_reserved_ie_present}
  */
  readonly logGtpTypeReservedIePresent?: number;
  /**
  * Log Event GTP Country Code Mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#log_type_country_code_mismatch DataThunderFwLoggingStats#log_type_country_code_mismatch}
  */
  readonly logTypeCountryCodeMismatch?: number;
  /**
  * Log Event GTP Crosslayer Correlation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#log_type_crosslayer_correlation DataThunderFwLoggingStats#log_type_crosslayer_correlation}
  */
  readonly logTypeCrosslayerCorrelation?: number;
  /**
  * Log Event Type GTP Enduser IP Spoofed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#log_type_enduser_ip_spoofed DataThunderFwLoggingStats#log_type_enduser_ip_spoofed}
  */
  readonly logTypeEnduserIpSpoofed?: number;
  /**
  * Log Event Type GTP Apn Filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#log_type_gtp_apn_filtering DataThunderFwLoggingStats#log_type_gtp_apn_filtering}
  */
  readonly logTypeGtpApnFiltering?: number;
  /**
  * Log Event GTP invalid piggyback flag in header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#log_type_gtp_hdr_invalid_piggy_flag DataThunderFwLoggingStats#log_type_gtp_hdr_invalid_piggy_flag}
  */
  readonly logTypeGtpHdrInvalidPiggyFlag?: number;
  /**
  * Log Event GTP Protocol flag in header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#log_type_gtp_hdr_invalid_protocol_flag DataThunderFwLoggingStats#log_type_gtp_hdr_invalid_protocol_flag}
  */
  readonly logTypeGtpHdrInvalidProtocolFlag?: number;
  /**
  * Log Event GTP invalid spare bits in header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#log_type_gtp_hdr_invalid_spare_bits DataThunderFwLoggingStats#log_type_gtp_hdr_invalid_spare_bits}
  */
  readonly logTypeGtpHdrInvalidSpareBits?: number;
  /**
  * Log Event GTP in GTP Filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#log_type_gtp_in_gtp_filtering DataThunderFwLoggingStats#log_type_gtp_in_gtp_filtering}
  */
  readonly logTypeGtpInGtpFiltering?: number;
  /**
  * Log Event GTP Invalid message length across layers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#log_type_gtp_invalid_message_length DataThunderFwLoggingStats#log_type_gtp_invalid_message_length}
  */
  readonly logTypeGtpInvalidMessageLength?: number;
  /**
  * Log Event mismatch of GTP message and ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#log_type_gtp_invalid_ports DataThunderFwLoggingStats#log_type_gtp_invalid_ports}
  */
  readonly logTypeGtpInvalidPorts?: number;
  /**
  * Log Event Type GTP Invalid TEID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#log_type_gtp_invalid_teid DataThunderFwLoggingStats#log_type_gtp_invalid_teid}
  */
  readonly logTypeGtpInvalidTeid?: number;
  /**
  * Log Event invalid GTP version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#log_type_gtp_invalid_version DataThunderFwLoggingStats#log_type_gtp_invalid_version}
  */
  readonly logTypeGtpInvalidVersion?: number;
  /**
  * Log Event Type GTP Mandatory IE Missing Inside Grouped IE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#log_type_gtp_mandatory_ie_inside_grouped_ie_missing DataThunderFwLoggingStats#log_type_gtp_mandatory_ie_inside_grouped_ie_missing}
  */
  readonly logTypeGtpMandatoryIeInsideGroupedIeMissing?: number;
  /**
  * Log Event Type GTP Mandatory IE Missing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#log_type_gtp_mandatory_ie_missing DataThunderFwLoggingStats#log_type_gtp_mandatory_ie_missing}
  */
  readonly logTypeGtpMandatoryIeMissing?: number;
  /**
  * Log Event Type GTP Message Filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#log_type_gtp_message_filtering DataThunderFwLoggingStats#log_type_gtp_message_filtering}
  */
  readonly logTypeGtpMessageFiltering?: number;
  /**
  * Log Event Type GTP MSISDN Filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#log_type_gtp_msisdn_filtering DataThunderFwLoggingStats#log_type_gtp_msisdn_filtering}
  */
  readonly logTypeGtpMsisdnFiltering?: number;
  /**
  * Log Event GTP SGW/PGW restarted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#log_type_gtp_node_restart DataThunderFwLoggingStats#log_type_gtp_node_restart}
  */
  readonly logTypeGtpNodeRestart?: number;
  /**
  * Log Event Type GTP Out of Order IE V1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#log_type_gtp_out_of_order_ie DataThunderFwLoggingStats#log_type_gtp_out_of_order_ie}
  */
  readonly logTypeGtpOutOfOrderIe?: number;
  /**
  * Log Event Type GTP Out of State IE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#log_type_gtp_out_of_state_ie DataThunderFwLoggingStats#log_type_gtp_out_of_state_ie}
  */
  readonly logTypeGtpOutOfStateIe?: number;
  /**
  * Log Event GTP RAT Type Filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#log_type_gtp_rat_type_filtering DataThunderFwLoggingStats#log_type_gtp_rat_type_filtering}
  */
  readonly logTypeGtpRatTypeFiltering?: number;
  /**
  * Log Event GTP Rate Limit Periodic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#log_type_gtp_rate_limit_periodic DataThunderFwLoggingStats#log_type_gtp_rate_limit_periodic}
  */
  readonly logTypeGtpRateLimitPeriodic?: number;
  /**
  * Log Event GTP Response Sequence number Mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#log_type_gtp_seq_num_mismatch DataThunderFwLoggingStats#log_type_gtp_seq_num_mismatch}
  */
  readonly logTypeGtpSeqNumMismatch?: number;
  /**
  * Log Event GTP Message Length Exceeded Max
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#log_type_max_msg_length DataThunderFwLoggingStats#log_type_max_msg_length}
  */
  readonly logTypeMaxMsgLength?: number;
  /**
  * Log Event GTP Reserved Message Found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#log_type_message_not_supported DataThunderFwLoggingStats#log_type_message_not_supported}
  */
  readonly logTypeMessageNotSupported?: number;
  /**
  * Log Event GTP Out of State Message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#log_type_out_of_state DataThunderFwLoggingStats#log_type_out_of_state}
  */
  readonly logTypeOutOfState?: number;
}

export function dataThunderFwLoggingStatsGtpStatsToTerraform(struct?: DataThunderFwLoggingStatsGtpStatsOutputReference | DataThunderFwLoggingStatsGtpStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_gtp_type_reserved_ie_present: cdktf.numberToTerraform(struct!.logGtpTypeReservedIePresent),
    log_type_country_code_mismatch: cdktf.numberToTerraform(struct!.logTypeCountryCodeMismatch),
    log_type_crosslayer_correlation: cdktf.numberToTerraform(struct!.logTypeCrosslayerCorrelation),
    log_type_enduser_ip_spoofed: cdktf.numberToTerraform(struct!.logTypeEnduserIpSpoofed),
    log_type_gtp_apn_filtering: cdktf.numberToTerraform(struct!.logTypeGtpApnFiltering),
    log_type_gtp_hdr_invalid_piggy_flag: cdktf.numberToTerraform(struct!.logTypeGtpHdrInvalidPiggyFlag),
    log_type_gtp_hdr_invalid_protocol_flag: cdktf.numberToTerraform(struct!.logTypeGtpHdrInvalidProtocolFlag),
    log_type_gtp_hdr_invalid_spare_bits: cdktf.numberToTerraform(struct!.logTypeGtpHdrInvalidSpareBits),
    log_type_gtp_in_gtp_filtering: cdktf.numberToTerraform(struct!.logTypeGtpInGtpFiltering),
    log_type_gtp_invalid_message_length: cdktf.numberToTerraform(struct!.logTypeGtpInvalidMessageLength),
    log_type_gtp_invalid_ports: cdktf.numberToTerraform(struct!.logTypeGtpInvalidPorts),
    log_type_gtp_invalid_teid: cdktf.numberToTerraform(struct!.logTypeGtpInvalidTeid),
    log_type_gtp_invalid_version: cdktf.numberToTerraform(struct!.logTypeGtpInvalidVersion),
    log_type_gtp_mandatory_ie_inside_grouped_ie_missing: cdktf.numberToTerraform(struct!.logTypeGtpMandatoryIeInsideGroupedIeMissing),
    log_type_gtp_mandatory_ie_missing: cdktf.numberToTerraform(struct!.logTypeGtpMandatoryIeMissing),
    log_type_gtp_message_filtering: cdktf.numberToTerraform(struct!.logTypeGtpMessageFiltering),
    log_type_gtp_msisdn_filtering: cdktf.numberToTerraform(struct!.logTypeGtpMsisdnFiltering),
    log_type_gtp_node_restart: cdktf.numberToTerraform(struct!.logTypeGtpNodeRestart),
    log_type_gtp_out_of_order_ie: cdktf.numberToTerraform(struct!.logTypeGtpOutOfOrderIe),
    log_type_gtp_out_of_state_ie: cdktf.numberToTerraform(struct!.logTypeGtpOutOfStateIe),
    log_type_gtp_rat_type_filtering: cdktf.numberToTerraform(struct!.logTypeGtpRatTypeFiltering),
    log_type_gtp_rate_limit_periodic: cdktf.numberToTerraform(struct!.logTypeGtpRateLimitPeriodic),
    log_type_gtp_seq_num_mismatch: cdktf.numberToTerraform(struct!.logTypeGtpSeqNumMismatch),
    log_type_max_msg_length: cdktf.numberToTerraform(struct!.logTypeMaxMsgLength),
    log_type_message_not_supported: cdktf.numberToTerraform(struct!.logTypeMessageNotSupported),
    log_type_out_of_state: cdktf.numberToTerraform(struct!.logTypeOutOfState),
  }
}


export function dataThunderFwLoggingStatsGtpStatsToHclTerraform(struct?: DataThunderFwLoggingStatsGtpStatsOutputReference | DataThunderFwLoggingStatsGtpStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_gtp_type_reserved_ie_present: {
      value: cdktf.numberToHclTerraform(struct!.logGtpTypeReservedIePresent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_type_country_code_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.logTypeCountryCodeMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_type_crosslayer_correlation: {
      value: cdktf.numberToHclTerraform(struct!.logTypeCrosslayerCorrelation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_type_enduser_ip_spoofed: {
      value: cdktf.numberToHclTerraform(struct!.logTypeEnduserIpSpoofed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_type_gtp_apn_filtering: {
      value: cdktf.numberToHclTerraform(struct!.logTypeGtpApnFiltering),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_type_gtp_hdr_invalid_piggy_flag: {
      value: cdktf.numberToHclTerraform(struct!.logTypeGtpHdrInvalidPiggyFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_type_gtp_hdr_invalid_protocol_flag: {
      value: cdktf.numberToHclTerraform(struct!.logTypeGtpHdrInvalidProtocolFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_type_gtp_hdr_invalid_spare_bits: {
      value: cdktf.numberToHclTerraform(struct!.logTypeGtpHdrInvalidSpareBits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_type_gtp_in_gtp_filtering: {
      value: cdktf.numberToHclTerraform(struct!.logTypeGtpInGtpFiltering),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_type_gtp_invalid_message_length: {
      value: cdktf.numberToHclTerraform(struct!.logTypeGtpInvalidMessageLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_type_gtp_invalid_ports: {
      value: cdktf.numberToHclTerraform(struct!.logTypeGtpInvalidPorts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_type_gtp_invalid_teid: {
      value: cdktf.numberToHclTerraform(struct!.logTypeGtpInvalidTeid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_type_gtp_invalid_version: {
      value: cdktf.numberToHclTerraform(struct!.logTypeGtpInvalidVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_type_gtp_mandatory_ie_inside_grouped_ie_missing: {
      value: cdktf.numberToHclTerraform(struct!.logTypeGtpMandatoryIeInsideGroupedIeMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_type_gtp_mandatory_ie_missing: {
      value: cdktf.numberToHclTerraform(struct!.logTypeGtpMandatoryIeMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_type_gtp_message_filtering: {
      value: cdktf.numberToHclTerraform(struct!.logTypeGtpMessageFiltering),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_type_gtp_msisdn_filtering: {
      value: cdktf.numberToHclTerraform(struct!.logTypeGtpMsisdnFiltering),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_type_gtp_node_restart: {
      value: cdktf.numberToHclTerraform(struct!.logTypeGtpNodeRestart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_type_gtp_out_of_order_ie: {
      value: cdktf.numberToHclTerraform(struct!.logTypeGtpOutOfOrderIe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_type_gtp_out_of_state_ie: {
      value: cdktf.numberToHclTerraform(struct!.logTypeGtpOutOfStateIe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_type_gtp_rat_type_filtering: {
      value: cdktf.numberToHclTerraform(struct!.logTypeGtpRatTypeFiltering),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_type_gtp_rate_limit_periodic: {
      value: cdktf.numberToHclTerraform(struct!.logTypeGtpRateLimitPeriodic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_type_gtp_seq_num_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.logTypeGtpSeqNumMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_type_max_msg_length: {
      value: cdktf.numberToHclTerraform(struct!.logTypeMaxMsgLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_type_message_not_supported: {
      value: cdktf.numberToHclTerraform(struct!.logTypeMessageNotSupported),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_type_out_of_state: {
      value: cdktf.numberToHclTerraform(struct!.logTypeOutOfState),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFwLoggingStatsGtpStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderFwLoggingStatsGtpStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logGtpTypeReservedIePresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGtpTypeReservedIePresent = this._logGtpTypeReservedIePresent;
    }
    if (this._logTypeCountryCodeMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypeCountryCodeMismatch = this._logTypeCountryCodeMismatch;
    }
    if (this._logTypeCrosslayerCorrelation !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypeCrosslayerCorrelation = this._logTypeCrosslayerCorrelation;
    }
    if (this._logTypeEnduserIpSpoofed !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypeEnduserIpSpoofed = this._logTypeEnduserIpSpoofed;
    }
    if (this._logTypeGtpApnFiltering !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypeGtpApnFiltering = this._logTypeGtpApnFiltering;
    }
    if (this._logTypeGtpHdrInvalidPiggyFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypeGtpHdrInvalidPiggyFlag = this._logTypeGtpHdrInvalidPiggyFlag;
    }
    if (this._logTypeGtpHdrInvalidProtocolFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypeGtpHdrInvalidProtocolFlag = this._logTypeGtpHdrInvalidProtocolFlag;
    }
    if (this._logTypeGtpHdrInvalidSpareBits !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypeGtpHdrInvalidSpareBits = this._logTypeGtpHdrInvalidSpareBits;
    }
    if (this._logTypeGtpInGtpFiltering !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypeGtpInGtpFiltering = this._logTypeGtpInGtpFiltering;
    }
    if (this._logTypeGtpInvalidMessageLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypeGtpInvalidMessageLength = this._logTypeGtpInvalidMessageLength;
    }
    if (this._logTypeGtpInvalidPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypeGtpInvalidPorts = this._logTypeGtpInvalidPorts;
    }
    if (this._logTypeGtpInvalidTeid !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypeGtpInvalidTeid = this._logTypeGtpInvalidTeid;
    }
    if (this._logTypeGtpInvalidVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypeGtpInvalidVersion = this._logTypeGtpInvalidVersion;
    }
    if (this._logTypeGtpMandatoryIeInsideGroupedIeMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypeGtpMandatoryIeInsideGroupedIeMissing = this._logTypeGtpMandatoryIeInsideGroupedIeMissing;
    }
    if (this._logTypeGtpMandatoryIeMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypeGtpMandatoryIeMissing = this._logTypeGtpMandatoryIeMissing;
    }
    if (this._logTypeGtpMessageFiltering !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypeGtpMessageFiltering = this._logTypeGtpMessageFiltering;
    }
    if (this._logTypeGtpMsisdnFiltering !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypeGtpMsisdnFiltering = this._logTypeGtpMsisdnFiltering;
    }
    if (this._logTypeGtpNodeRestart !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypeGtpNodeRestart = this._logTypeGtpNodeRestart;
    }
    if (this._logTypeGtpOutOfOrderIe !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypeGtpOutOfOrderIe = this._logTypeGtpOutOfOrderIe;
    }
    if (this._logTypeGtpOutOfStateIe !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypeGtpOutOfStateIe = this._logTypeGtpOutOfStateIe;
    }
    if (this._logTypeGtpRatTypeFiltering !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypeGtpRatTypeFiltering = this._logTypeGtpRatTypeFiltering;
    }
    if (this._logTypeGtpRateLimitPeriodic !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypeGtpRateLimitPeriodic = this._logTypeGtpRateLimitPeriodic;
    }
    if (this._logTypeGtpSeqNumMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypeGtpSeqNumMismatch = this._logTypeGtpSeqNumMismatch;
    }
    if (this._logTypeMaxMsgLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypeMaxMsgLength = this._logTypeMaxMsgLength;
    }
    if (this._logTypeMessageNotSupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypeMessageNotSupported = this._logTypeMessageNotSupported;
    }
    if (this._logTypeOutOfState !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypeOutOfState = this._logTypeOutOfState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFwLoggingStatsGtpStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logGtpTypeReservedIePresent = undefined;
      this._logTypeCountryCodeMismatch = undefined;
      this._logTypeCrosslayerCorrelation = undefined;
      this._logTypeEnduserIpSpoofed = undefined;
      this._logTypeGtpApnFiltering = undefined;
      this._logTypeGtpHdrInvalidPiggyFlag = undefined;
      this._logTypeGtpHdrInvalidProtocolFlag = undefined;
      this._logTypeGtpHdrInvalidSpareBits = undefined;
      this._logTypeGtpInGtpFiltering = undefined;
      this._logTypeGtpInvalidMessageLength = undefined;
      this._logTypeGtpInvalidPorts = undefined;
      this._logTypeGtpInvalidTeid = undefined;
      this._logTypeGtpInvalidVersion = undefined;
      this._logTypeGtpMandatoryIeInsideGroupedIeMissing = undefined;
      this._logTypeGtpMandatoryIeMissing = undefined;
      this._logTypeGtpMessageFiltering = undefined;
      this._logTypeGtpMsisdnFiltering = undefined;
      this._logTypeGtpNodeRestart = undefined;
      this._logTypeGtpOutOfOrderIe = undefined;
      this._logTypeGtpOutOfStateIe = undefined;
      this._logTypeGtpRatTypeFiltering = undefined;
      this._logTypeGtpRateLimitPeriodic = undefined;
      this._logTypeGtpSeqNumMismatch = undefined;
      this._logTypeMaxMsgLength = undefined;
      this._logTypeMessageNotSupported = undefined;
      this._logTypeOutOfState = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logGtpTypeReservedIePresent = value.logGtpTypeReservedIePresent;
      this._logTypeCountryCodeMismatch = value.logTypeCountryCodeMismatch;
      this._logTypeCrosslayerCorrelation = value.logTypeCrosslayerCorrelation;
      this._logTypeEnduserIpSpoofed = value.logTypeEnduserIpSpoofed;
      this._logTypeGtpApnFiltering = value.logTypeGtpApnFiltering;
      this._logTypeGtpHdrInvalidPiggyFlag = value.logTypeGtpHdrInvalidPiggyFlag;
      this._logTypeGtpHdrInvalidProtocolFlag = value.logTypeGtpHdrInvalidProtocolFlag;
      this._logTypeGtpHdrInvalidSpareBits = value.logTypeGtpHdrInvalidSpareBits;
      this._logTypeGtpInGtpFiltering = value.logTypeGtpInGtpFiltering;
      this._logTypeGtpInvalidMessageLength = value.logTypeGtpInvalidMessageLength;
      this._logTypeGtpInvalidPorts = value.logTypeGtpInvalidPorts;
      this._logTypeGtpInvalidTeid = value.logTypeGtpInvalidTeid;
      this._logTypeGtpInvalidVersion = value.logTypeGtpInvalidVersion;
      this._logTypeGtpMandatoryIeInsideGroupedIeMissing = value.logTypeGtpMandatoryIeInsideGroupedIeMissing;
      this._logTypeGtpMandatoryIeMissing = value.logTypeGtpMandatoryIeMissing;
      this._logTypeGtpMessageFiltering = value.logTypeGtpMessageFiltering;
      this._logTypeGtpMsisdnFiltering = value.logTypeGtpMsisdnFiltering;
      this._logTypeGtpNodeRestart = value.logTypeGtpNodeRestart;
      this._logTypeGtpOutOfOrderIe = value.logTypeGtpOutOfOrderIe;
      this._logTypeGtpOutOfStateIe = value.logTypeGtpOutOfStateIe;
      this._logTypeGtpRatTypeFiltering = value.logTypeGtpRatTypeFiltering;
      this._logTypeGtpRateLimitPeriodic = value.logTypeGtpRateLimitPeriodic;
      this._logTypeGtpSeqNumMismatch = value.logTypeGtpSeqNumMismatch;
      this._logTypeMaxMsgLength = value.logTypeMaxMsgLength;
      this._logTypeMessageNotSupported = value.logTypeMessageNotSupported;
      this._logTypeOutOfState = value.logTypeOutOfState;
    }
  }

  // log_gtp_type_reserved_ie_present - computed: false, optional: true, required: false
  private _logGtpTypeReservedIePresent?: number; 
  public get logGtpTypeReservedIePresent() {
    return this.getNumberAttribute('log_gtp_type_reserved_ie_present');
  }
  public set logGtpTypeReservedIePresent(value: number) {
    this._logGtpTypeReservedIePresent = value;
  }
  public resetLogGtpTypeReservedIePresent() {
    this._logGtpTypeReservedIePresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGtpTypeReservedIePresentInput() {
    return this._logGtpTypeReservedIePresent;
  }

  // log_type_country_code_mismatch - computed: false, optional: true, required: false
  private _logTypeCountryCodeMismatch?: number; 
  public get logTypeCountryCodeMismatch() {
    return this.getNumberAttribute('log_type_country_code_mismatch');
  }
  public set logTypeCountryCodeMismatch(value: number) {
    this._logTypeCountryCodeMismatch = value;
  }
  public resetLogTypeCountryCodeMismatch() {
    this._logTypeCountryCodeMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeCountryCodeMismatchInput() {
    return this._logTypeCountryCodeMismatch;
  }

  // log_type_crosslayer_correlation - computed: false, optional: true, required: false
  private _logTypeCrosslayerCorrelation?: number; 
  public get logTypeCrosslayerCorrelation() {
    return this.getNumberAttribute('log_type_crosslayer_correlation');
  }
  public set logTypeCrosslayerCorrelation(value: number) {
    this._logTypeCrosslayerCorrelation = value;
  }
  public resetLogTypeCrosslayerCorrelation() {
    this._logTypeCrosslayerCorrelation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeCrosslayerCorrelationInput() {
    return this._logTypeCrosslayerCorrelation;
  }

  // log_type_enduser_ip_spoofed - computed: false, optional: true, required: false
  private _logTypeEnduserIpSpoofed?: number; 
  public get logTypeEnduserIpSpoofed() {
    return this.getNumberAttribute('log_type_enduser_ip_spoofed');
  }
  public set logTypeEnduserIpSpoofed(value: number) {
    this._logTypeEnduserIpSpoofed = value;
  }
  public resetLogTypeEnduserIpSpoofed() {
    this._logTypeEnduserIpSpoofed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeEnduserIpSpoofedInput() {
    return this._logTypeEnduserIpSpoofed;
  }

  // log_type_gtp_apn_filtering - computed: false, optional: true, required: false
  private _logTypeGtpApnFiltering?: number; 
  public get logTypeGtpApnFiltering() {
    return this.getNumberAttribute('log_type_gtp_apn_filtering');
  }
  public set logTypeGtpApnFiltering(value: number) {
    this._logTypeGtpApnFiltering = value;
  }
  public resetLogTypeGtpApnFiltering() {
    this._logTypeGtpApnFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeGtpApnFilteringInput() {
    return this._logTypeGtpApnFiltering;
  }

  // log_type_gtp_hdr_invalid_piggy_flag - computed: false, optional: true, required: false
  private _logTypeGtpHdrInvalidPiggyFlag?: number; 
  public get logTypeGtpHdrInvalidPiggyFlag() {
    return this.getNumberAttribute('log_type_gtp_hdr_invalid_piggy_flag');
  }
  public set logTypeGtpHdrInvalidPiggyFlag(value: number) {
    this._logTypeGtpHdrInvalidPiggyFlag = value;
  }
  public resetLogTypeGtpHdrInvalidPiggyFlag() {
    this._logTypeGtpHdrInvalidPiggyFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeGtpHdrInvalidPiggyFlagInput() {
    return this._logTypeGtpHdrInvalidPiggyFlag;
  }

  // log_type_gtp_hdr_invalid_protocol_flag - computed: false, optional: true, required: false
  private _logTypeGtpHdrInvalidProtocolFlag?: number; 
  public get logTypeGtpHdrInvalidProtocolFlag() {
    return this.getNumberAttribute('log_type_gtp_hdr_invalid_protocol_flag');
  }
  public set logTypeGtpHdrInvalidProtocolFlag(value: number) {
    this._logTypeGtpHdrInvalidProtocolFlag = value;
  }
  public resetLogTypeGtpHdrInvalidProtocolFlag() {
    this._logTypeGtpHdrInvalidProtocolFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeGtpHdrInvalidProtocolFlagInput() {
    return this._logTypeGtpHdrInvalidProtocolFlag;
  }

  // log_type_gtp_hdr_invalid_spare_bits - computed: false, optional: true, required: false
  private _logTypeGtpHdrInvalidSpareBits?: number; 
  public get logTypeGtpHdrInvalidSpareBits() {
    return this.getNumberAttribute('log_type_gtp_hdr_invalid_spare_bits');
  }
  public set logTypeGtpHdrInvalidSpareBits(value: number) {
    this._logTypeGtpHdrInvalidSpareBits = value;
  }
  public resetLogTypeGtpHdrInvalidSpareBits() {
    this._logTypeGtpHdrInvalidSpareBits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeGtpHdrInvalidSpareBitsInput() {
    return this._logTypeGtpHdrInvalidSpareBits;
  }

  // log_type_gtp_in_gtp_filtering - computed: false, optional: true, required: false
  private _logTypeGtpInGtpFiltering?: number; 
  public get logTypeGtpInGtpFiltering() {
    return this.getNumberAttribute('log_type_gtp_in_gtp_filtering');
  }
  public set logTypeGtpInGtpFiltering(value: number) {
    this._logTypeGtpInGtpFiltering = value;
  }
  public resetLogTypeGtpInGtpFiltering() {
    this._logTypeGtpInGtpFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeGtpInGtpFilteringInput() {
    return this._logTypeGtpInGtpFiltering;
  }

  // log_type_gtp_invalid_message_length - computed: false, optional: true, required: false
  private _logTypeGtpInvalidMessageLength?: number; 
  public get logTypeGtpInvalidMessageLength() {
    return this.getNumberAttribute('log_type_gtp_invalid_message_length');
  }
  public set logTypeGtpInvalidMessageLength(value: number) {
    this._logTypeGtpInvalidMessageLength = value;
  }
  public resetLogTypeGtpInvalidMessageLength() {
    this._logTypeGtpInvalidMessageLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeGtpInvalidMessageLengthInput() {
    return this._logTypeGtpInvalidMessageLength;
  }

  // log_type_gtp_invalid_ports - computed: false, optional: true, required: false
  private _logTypeGtpInvalidPorts?: number; 
  public get logTypeGtpInvalidPorts() {
    return this.getNumberAttribute('log_type_gtp_invalid_ports');
  }
  public set logTypeGtpInvalidPorts(value: number) {
    this._logTypeGtpInvalidPorts = value;
  }
  public resetLogTypeGtpInvalidPorts() {
    this._logTypeGtpInvalidPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeGtpInvalidPortsInput() {
    return this._logTypeGtpInvalidPorts;
  }

  // log_type_gtp_invalid_teid - computed: false, optional: true, required: false
  private _logTypeGtpInvalidTeid?: number; 
  public get logTypeGtpInvalidTeid() {
    return this.getNumberAttribute('log_type_gtp_invalid_teid');
  }
  public set logTypeGtpInvalidTeid(value: number) {
    this._logTypeGtpInvalidTeid = value;
  }
  public resetLogTypeGtpInvalidTeid() {
    this._logTypeGtpInvalidTeid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeGtpInvalidTeidInput() {
    return this._logTypeGtpInvalidTeid;
  }

  // log_type_gtp_invalid_version - computed: false, optional: true, required: false
  private _logTypeGtpInvalidVersion?: number; 
  public get logTypeGtpInvalidVersion() {
    return this.getNumberAttribute('log_type_gtp_invalid_version');
  }
  public set logTypeGtpInvalidVersion(value: number) {
    this._logTypeGtpInvalidVersion = value;
  }
  public resetLogTypeGtpInvalidVersion() {
    this._logTypeGtpInvalidVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeGtpInvalidVersionInput() {
    return this._logTypeGtpInvalidVersion;
  }

  // log_type_gtp_mandatory_ie_inside_grouped_ie_missing - computed: false, optional: true, required: false
  private _logTypeGtpMandatoryIeInsideGroupedIeMissing?: number; 
  public get logTypeGtpMandatoryIeInsideGroupedIeMissing() {
    return this.getNumberAttribute('log_type_gtp_mandatory_ie_inside_grouped_ie_missing');
  }
  public set logTypeGtpMandatoryIeInsideGroupedIeMissing(value: number) {
    this._logTypeGtpMandatoryIeInsideGroupedIeMissing = value;
  }
  public resetLogTypeGtpMandatoryIeInsideGroupedIeMissing() {
    this._logTypeGtpMandatoryIeInsideGroupedIeMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeGtpMandatoryIeInsideGroupedIeMissingInput() {
    return this._logTypeGtpMandatoryIeInsideGroupedIeMissing;
  }

  // log_type_gtp_mandatory_ie_missing - computed: false, optional: true, required: false
  private _logTypeGtpMandatoryIeMissing?: number; 
  public get logTypeGtpMandatoryIeMissing() {
    return this.getNumberAttribute('log_type_gtp_mandatory_ie_missing');
  }
  public set logTypeGtpMandatoryIeMissing(value: number) {
    this._logTypeGtpMandatoryIeMissing = value;
  }
  public resetLogTypeGtpMandatoryIeMissing() {
    this._logTypeGtpMandatoryIeMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeGtpMandatoryIeMissingInput() {
    return this._logTypeGtpMandatoryIeMissing;
  }

  // log_type_gtp_message_filtering - computed: false, optional: true, required: false
  private _logTypeGtpMessageFiltering?: number; 
  public get logTypeGtpMessageFiltering() {
    return this.getNumberAttribute('log_type_gtp_message_filtering');
  }
  public set logTypeGtpMessageFiltering(value: number) {
    this._logTypeGtpMessageFiltering = value;
  }
  public resetLogTypeGtpMessageFiltering() {
    this._logTypeGtpMessageFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeGtpMessageFilteringInput() {
    return this._logTypeGtpMessageFiltering;
  }

  // log_type_gtp_msisdn_filtering - computed: false, optional: true, required: false
  private _logTypeGtpMsisdnFiltering?: number; 
  public get logTypeGtpMsisdnFiltering() {
    return this.getNumberAttribute('log_type_gtp_msisdn_filtering');
  }
  public set logTypeGtpMsisdnFiltering(value: number) {
    this._logTypeGtpMsisdnFiltering = value;
  }
  public resetLogTypeGtpMsisdnFiltering() {
    this._logTypeGtpMsisdnFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeGtpMsisdnFilteringInput() {
    return this._logTypeGtpMsisdnFiltering;
  }

  // log_type_gtp_node_restart - computed: false, optional: true, required: false
  private _logTypeGtpNodeRestart?: number; 
  public get logTypeGtpNodeRestart() {
    return this.getNumberAttribute('log_type_gtp_node_restart');
  }
  public set logTypeGtpNodeRestart(value: number) {
    this._logTypeGtpNodeRestart = value;
  }
  public resetLogTypeGtpNodeRestart() {
    this._logTypeGtpNodeRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeGtpNodeRestartInput() {
    return this._logTypeGtpNodeRestart;
  }

  // log_type_gtp_out_of_order_ie - computed: false, optional: true, required: false
  private _logTypeGtpOutOfOrderIe?: number; 
  public get logTypeGtpOutOfOrderIe() {
    return this.getNumberAttribute('log_type_gtp_out_of_order_ie');
  }
  public set logTypeGtpOutOfOrderIe(value: number) {
    this._logTypeGtpOutOfOrderIe = value;
  }
  public resetLogTypeGtpOutOfOrderIe() {
    this._logTypeGtpOutOfOrderIe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeGtpOutOfOrderIeInput() {
    return this._logTypeGtpOutOfOrderIe;
  }

  // log_type_gtp_out_of_state_ie - computed: false, optional: true, required: false
  private _logTypeGtpOutOfStateIe?: number; 
  public get logTypeGtpOutOfStateIe() {
    return this.getNumberAttribute('log_type_gtp_out_of_state_ie');
  }
  public set logTypeGtpOutOfStateIe(value: number) {
    this._logTypeGtpOutOfStateIe = value;
  }
  public resetLogTypeGtpOutOfStateIe() {
    this._logTypeGtpOutOfStateIe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeGtpOutOfStateIeInput() {
    return this._logTypeGtpOutOfStateIe;
  }

  // log_type_gtp_rat_type_filtering - computed: false, optional: true, required: false
  private _logTypeGtpRatTypeFiltering?: number; 
  public get logTypeGtpRatTypeFiltering() {
    return this.getNumberAttribute('log_type_gtp_rat_type_filtering');
  }
  public set logTypeGtpRatTypeFiltering(value: number) {
    this._logTypeGtpRatTypeFiltering = value;
  }
  public resetLogTypeGtpRatTypeFiltering() {
    this._logTypeGtpRatTypeFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeGtpRatTypeFilteringInput() {
    return this._logTypeGtpRatTypeFiltering;
  }

  // log_type_gtp_rate_limit_periodic - computed: false, optional: true, required: false
  private _logTypeGtpRateLimitPeriodic?: number; 
  public get logTypeGtpRateLimitPeriodic() {
    return this.getNumberAttribute('log_type_gtp_rate_limit_periodic');
  }
  public set logTypeGtpRateLimitPeriodic(value: number) {
    this._logTypeGtpRateLimitPeriodic = value;
  }
  public resetLogTypeGtpRateLimitPeriodic() {
    this._logTypeGtpRateLimitPeriodic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeGtpRateLimitPeriodicInput() {
    return this._logTypeGtpRateLimitPeriodic;
  }

  // log_type_gtp_seq_num_mismatch - computed: false, optional: true, required: false
  private _logTypeGtpSeqNumMismatch?: number; 
  public get logTypeGtpSeqNumMismatch() {
    return this.getNumberAttribute('log_type_gtp_seq_num_mismatch');
  }
  public set logTypeGtpSeqNumMismatch(value: number) {
    this._logTypeGtpSeqNumMismatch = value;
  }
  public resetLogTypeGtpSeqNumMismatch() {
    this._logTypeGtpSeqNumMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeGtpSeqNumMismatchInput() {
    return this._logTypeGtpSeqNumMismatch;
  }

  // log_type_max_msg_length - computed: false, optional: true, required: false
  private _logTypeMaxMsgLength?: number; 
  public get logTypeMaxMsgLength() {
    return this.getNumberAttribute('log_type_max_msg_length');
  }
  public set logTypeMaxMsgLength(value: number) {
    this._logTypeMaxMsgLength = value;
  }
  public resetLogTypeMaxMsgLength() {
    this._logTypeMaxMsgLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeMaxMsgLengthInput() {
    return this._logTypeMaxMsgLength;
  }

  // log_type_message_not_supported - computed: false, optional: true, required: false
  private _logTypeMessageNotSupported?: number; 
  public get logTypeMessageNotSupported() {
    return this.getNumberAttribute('log_type_message_not_supported');
  }
  public set logTypeMessageNotSupported(value: number) {
    this._logTypeMessageNotSupported = value;
  }
  public resetLogTypeMessageNotSupported() {
    this._logTypeMessageNotSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeMessageNotSupportedInput() {
    return this._logTypeMessageNotSupported;
  }

  // log_type_out_of_state - computed: false, optional: true, required: false
  private _logTypeOutOfState?: number; 
  public get logTypeOutOfState() {
    return this.getNumberAttribute('log_type_out_of_state');
  }
  public set logTypeOutOfState(value: number) {
    this._logTypeOutOfState = value;
  }
  public resetLogTypeOutOfState() {
    this._logTypeOutOfState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeOutOfStateInput() {
    return this._logTypeOutOfState;
  }
}
export interface DataThunderFwLoggingStatsGtp {
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#stats DataThunderFwLoggingStats#stats}
  */
  readonly stats?: DataThunderFwLoggingStatsGtpStats;
}

export function dataThunderFwLoggingStatsGtpToTerraform(struct?: DataThunderFwLoggingStatsGtpOutputReference | DataThunderFwLoggingStatsGtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stats: dataThunderFwLoggingStatsGtpStatsToTerraform(struct!.stats),
  }
}


export function dataThunderFwLoggingStatsGtpToHclTerraform(struct?: DataThunderFwLoggingStatsGtpOutputReference | DataThunderFwLoggingStatsGtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stats: {
      value: dataThunderFwLoggingStatsGtpStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderFwLoggingStatsGtpStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFwLoggingStatsGtpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderFwLoggingStatsGtp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFwLoggingStatsGtp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stats.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stats.internalValue = value.stats;
    }
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderFwLoggingStatsGtpStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderFwLoggingStatsGtpStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }
}
export interface DataThunderFwLoggingStatsStats {
  /**
  * HTTP Logging Invalid Format Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#http_logging_invalid_format DataThunderFwLoggingStats#http_logging_invalid_format}
  */
  readonly httpLoggingInvalidFormat?: number;
  /**
  * HTTP Request Logged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#http_request_logged DataThunderFwLoggingStats#http_request_logged}
  */
  readonly httpRequestLogged?: number;
  /**
  * ICMP Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#icmp_session_created DataThunderFwLoggingStats#icmp_session_created}
  */
  readonly icmpSessionCreated?: number;
  /**
  * ICMP Session Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#icmp_session_deleted DataThunderFwLoggingStats#icmp_session_deleted}
  */
  readonly icmpSessionDeleted?: number;
  /**
  * ICMPV6 Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#icmpv6_session_created DataThunderFwLoggingStats#icmpv6_session_created}
  */
  readonly icmpv6SessionCreated?: number;
  /**
  * ICMPV6 Session Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#icmpv6_session_deleted DataThunderFwLoggingStats#icmpv6_session_deleted}
  */
  readonly icmpv6SessionDeleted?: number;
  /**
  * iDDoS IP Entry Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#iddos_blackhole_entry_create DataThunderFwLoggingStats#iddos_blackhole_entry_create}
  */
  readonly iddosBlackholeEntryCreate?: number;
  /**
  * iDDoS IP Entry Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#iddos_blackhole_entry_delete DataThunderFwLoggingStats#iddos_blackhole_entry_delete}
  */
  readonly iddosBlackholeEntryDelete?: number;
  /**
  * Log Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#log_dropped DataThunderFwLoggingStats#log_dropped}
  */
  readonly logDropped?: number;
  /**
  * Log Packet Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#log_message_sent DataThunderFwLoggingStats#log_message_sent}
  */
  readonly logMessageSent?: number;
  /**
  * Log Event Type Deny
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#log_type_deny DataThunderFwLoggingStats#log_type_deny}
  */
  readonly logTypeDeny?: number;
  /**
  * Log Event Type Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#log_type_reset DataThunderFwLoggingStats#log_type_reset}
  */
  readonly logTypeReset?: number;
  /**
  * Log Event Type SCTP Inner Proto Filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#log_type_sctp_inner_proto_filter DataThunderFwLoggingStats#log_type_sctp_inner_proto_filter}
  */
  readonly logTypeSctpInnerProtoFilter?: number;
  /**
  * Log Event Type Session Close
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#log_type_session_closed DataThunderFwLoggingStats#log_type_session_closed}
  */
  readonly logTypeSessionClosed?: number;
  /**
  * Log Event Type Session Open
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#log_type_session_opened DataThunderFwLoggingStats#log_type_session_opened}
  */
  readonly logTypeSessionOpened?: number;
  /**
  * Other Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#other_session_created DataThunderFwLoggingStats#other_session_created}
  */
  readonly otherSessionCreated?: number;
  /**
  * Other Session Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#other_session_deleted DataThunderFwLoggingStats#other_session_deleted}
  */
  readonly otherSessionDeleted?: number;
  /**
  * Firewall Rule Not Logged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#rule_not_logged DataThunderFwLoggingStats#rule_not_logged}
  */
  readonly ruleNotLogged?: number;
  /**
  * SCTP Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#sctp_session_created DataThunderFwLoggingStats#sctp_session_created}
  */
  readonly sctpSessionCreated?: number;
  /**
  * SCTP Session Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#sctp_session_deleted DataThunderFwLoggingStats#sctp_session_deleted}
  */
  readonly sctpSessionDeleted?: number;
  /**
  * Session Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#session_limit_exceeded DataThunderFwLoggingStats#session_limit_exceeded}
  */
  readonly sessionLimitExceeded?: number;
  /**
  * TCP Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#tcp_session_created DataThunderFwLoggingStats#tcp_session_created}
  */
  readonly tcpSessionCreated?: number;
  /**
  * TCP Session Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#tcp_session_deleted DataThunderFwLoggingStats#tcp_session_deleted}
  */
  readonly tcpSessionDeleted?: number;
  /**
  * UDP Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#udp_session_created DataThunderFwLoggingStats#udp_session_created}
  */
  readonly udpSessionCreated?: number;
  /**
  * UDP Session Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#udp_session_deleted DataThunderFwLoggingStats#udp_session_deleted}
  */
  readonly udpSessionDeleted?: number;
}

export function dataThunderFwLoggingStatsStatsToTerraform(struct?: DataThunderFwLoggingStatsStatsOutputReference | DataThunderFwLoggingStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_logging_invalid_format: cdktf.numberToTerraform(struct!.httpLoggingInvalidFormat),
    http_request_logged: cdktf.numberToTerraform(struct!.httpRequestLogged),
    icmp_session_created: cdktf.numberToTerraform(struct!.icmpSessionCreated),
    icmp_session_deleted: cdktf.numberToTerraform(struct!.icmpSessionDeleted),
    icmpv6_session_created: cdktf.numberToTerraform(struct!.icmpv6SessionCreated),
    icmpv6_session_deleted: cdktf.numberToTerraform(struct!.icmpv6SessionDeleted),
    iddos_blackhole_entry_create: cdktf.numberToTerraform(struct!.iddosBlackholeEntryCreate),
    iddos_blackhole_entry_delete: cdktf.numberToTerraform(struct!.iddosBlackholeEntryDelete),
    log_dropped: cdktf.numberToTerraform(struct!.logDropped),
    log_message_sent: cdktf.numberToTerraform(struct!.logMessageSent),
    log_type_deny: cdktf.numberToTerraform(struct!.logTypeDeny),
    log_type_reset: cdktf.numberToTerraform(struct!.logTypeReset),
    log_type_sctp_inner_proto_filter: cdktf.numberToTerraform(struct!.logTypeSctpInnerProtoFilter),
    log_type_session_closed: cdktf.numberToTerraform(struct!.logTypeSessionClosed),
    log_type_session_opened: cdktf.numberToTerraform(struct!.logTypeSessionOpened),
    other_session_created: cdktf.numberToTerraform(struct!.otherSessionCreated),
    other_session_deleted: cdktf.numberToTerraform(struct!.otherSessionDeleted),
    rule_not_logged: cdktf.numberToTerraform(struct!.ruleNotLogged),
    sctp_session_created: cdktf.numberToTerraform(struct!.sctpSessionCreated),
    sctp_session_deleted: cdktf.numberToTerraform(struct!.sctpSessionDeleted),
    session_limit_exceeded: cdktf.numberToTerraform(struct!.sessionLimitExceeded),
    tcp_session_created: cdktf.numberToTerraform(struct!.tcpSessionCreated),
    tcp_session_deleted: cdktf.numberToTerraform(struct!.tcpSessionDeleted),
    udp_session_created: cdktf.numberToTerraform(struct!.udpSessionCreated),
    udp_session_deleted: cdktf.numberToTerraform(struct!.udpSessionDeleted),
  }
}


export function dataThunderFwLoggingStatsStatsToHclTerraform(struct?: DataThunderFwLoggingStatsStatsOutputReference | DataThunderFwLoggingStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_logging_invalid_format: {
      value: cdktf.numberToHclTerraform(struct!.httpLoggingInvalidFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_request_logged: {
      value: cdktf.numberToHclTerraform(struct!.httpRequestLogged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_session_created: {
      value: cdktf.numberToHclTerraform(struct!.icmpSessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_session_deleted: {
      value: cdktf.numberToHclTerraform(struct!.icmpSessionDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmpv6_session_created: {
      value: cdktf.numberToHclTerraform(struct!.icmpv6SessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmpv6_session_deleted: {
      value: cdktf.numberToHclTerraform(struct!.icmpv6SessionDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    iddos_blackhole_entry_create: {
      value: cdktf.numberToHclTerraform(struct!.iddosBlackholeEntryCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    iddos_blackhole_entry_delete: {
      value: cdktf.numberToHclTerraform(struct!.iddosBlackholeEntryDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_dropped: {
      value: cdktf.numberToHclTerraform(struct!.logDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_message_sent: {
      value: cdktf.numberToHclTerraform(struct!.logMessageSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_type_deny: {
      value: cdktf.numberToHclTerraform(struct!.logTypeDeny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_type_reset: {
      value: cdktf.numberToHclTerraform(struct!.logTypeReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_type_sctp_inner_proto_filter: {
      value: cdktf.numberToHclTerraform(struct!.logTypeSctpInnerProtoFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_type_session_closed: {
      value: cdktf.numberToHclTerraform(struct!.logTypeSessionClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_type_session_opened: {
      value: cdktf.numberToHclTerraform(struct!.logTypeSessionOpened),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_session_created: {
      value: cdktf.numberToHclTerraform(struct!.otherSessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_session_deleted: {
      value: cdktf.numberToHclTerraform(struct!.otherSessionDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_not_logged: {
      value: cdktf.numberToHclTerraform(struct!.ruleNotLogged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_session_created: {
      value: cdktf.numberToHclTerraform(struct!.sctpSessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_session_deleted: {
      value: cdktf.numberToHclTerraform(struct!.sctpSessionDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_limit_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.sessionLimitExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_session_created: {
      value: cdktf.numberToHclTerraform(struct!.tcpSessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_session_deleted: {
      value: cdktf.numberToHclTerraform(struct!.tcpSessionDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_session_created: {
      value: cdktf.numberToHclTerraform(struct!.udpSessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_session_deleted: {
      value: cdktf.numberToHclTerraform(struct!.udpSessionDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFwLoggingStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderFwLoggingStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpLoggingInvalidFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpLoggingInvalidFormat = this._httpLoggingInvalidFormat;
    }
    if (this._httpRequestLogged !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRequestLogged = this._httpRequestLogged;
    }
    if (this._icmpSessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpSessionCreated = this._icmpSessionCreated;
    }
    if (this._icmpSessionDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpSessionDeleted = this._icmpSessionDeleted;
    }
    if (this._icmpv6SessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6SessionCreated = this._icmpv6SessionCreated;
    }
    if (this._icmpv6SessionDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6SessionDeleted = this._icmpv6SessionDeleted;
    }
    if (this._iddosBlackholeEntryCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.iddosBlackholeEntryCreate = this._iddosBlackholeEntryCreate;
    }
    if (this._iddosBlackholeEntryDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.iddosBlackholeEntryDelete = this._iddosBlackholeEntryDelete;
    }
    if (this._logDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.logDropped = this._logDropped;
    }
    if (this._logMessageSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.logMessageSent = this._logMessageSent;
    }
    if (this._logTypeDeny !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypeDeny = this._logTypeDeny;
    }
    if (this._logTypeReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypeReset = this._logTypeReset;
    }
    if (this._logTypeSctpInnerProtoFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypeSctpInnerProtoFilter = this._logTypeSctpInnerProtoFilter;
    }
    if (this._logTypeSessionClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypeSessionClosed = this._logTypeSessionClosed;
    }
    if (this._logTypeSessionOpened !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypeSessionOpened = this._logTypeSessionOpened;
    }
    if (this._otherSessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherSessionCreated = this._otherSessionCreated;
    }
    if (this._otherSessionDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherSessionDeleted = this._otherSessionDeleted;
    }
    if (this._ruleNotLogged !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleNotLogged = this._ruleNotLogged;
    }
    if (this._sctpSessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpSessionCreated = this._sctpSessionCreated;
    }
    if (this._sctpSessionDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpSessionDeleted = this._sctpSessionDeleted;
    }
    if (this._sessionLimitExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionLimitExceeded = this._sessionLimitExceeded;
    }
    if (this._tcpSessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSessionCreated = this._tcpSessionCreated;
    }
    if (this._tcpSessionDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSessionDeleted = this._tcpSessionDeleted;
    }
    if (this._udpSessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpSessionCreated = this._udpSessionCreated;
    }
    if (this._udpSessionDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpSessionDeleted = this._udpSessionDeleted;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFwLoggingStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpLoggingInvalidFormat = undefined;
      this._httpRequestLogged = undefined;
      this._icmpSessionCreated = undefined;
      this._icmpSessionDeleted = undefined;
      this._icmpv6SessionCreated = undefined;
      this._icmpv6SessionDeleted = undefined;
      this._iddosBlackholeEntryCreate = undefined;
      this._iddosBlackholeEntryDelete = undefined;
      this._logDropped = undefined;
      this._logMessageSent = undefined;
      this._logTypeDeny = undefined;
      this._logTypeReset = undefined;
      this._logTypeSctpInnerProtoFilter = undefined;
      this._logTypeSessionClosed = undefined;
      this._logTypeSessionOpened = undefined;
      this._otherSessionCreated = undefined;
      this._otherSessionDeleted = undefined;
      this._ruleNotLogged = undefined;
      this._sctpSessionCreated = undefined;
      this._sctpSessionDeleted = undefined;
      this._sessionLimitExceeded = undefined;
      this._tcpSessionCreated = undefined;
      this._tcpSessionDeleted = undefined;
      this._udpSessionCreated = undefined;
      this._udpSessionDeleted = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpLoggingInvalidFormat = value.httpLoggingInvalidFormat;
      this._httpRequestLogged = value.httpRequestLogged;
      this._icmpSessionCreated = value.icmpSessionCreated;
      this._icmpSessionDeleted = value.icmpSessionDeleted;
      this._icmpv6SessionCreated = value.icmpv6SessionCreated;
      this._icmpv6SessionDeleted = value.icmpv6SessionDeleted;
      this._iddosBlackholeEntryCreate = value.iddosBlackholeEntryCreate;
      this._iddosBlackholeEntryDelete = value.iddosBlackholeEntryDelete;
      this._logDropped = value.logDropped;
      this._logMessageSent = value.logMessageSent;
      this._logTypeDeny = value.logTypeDeny;
      this._logTypeReset = value.logTypeReset;
      this._logTypeSctpInnerProtoFilter = value.logTypeSctpInnerProtoFilter;
      this._logTypeSessionClosed = value.logTypeSessionClosed;
      this._logTypeSessionOpened = value.logTypeSessionOpened;
      this._otherSessionCreated = value.otherSessionCreated;
      this._otherSessionDeleted = value.otherSessionDeleted;
      this._ruleNotLogged = value.ruleNotLogged;
      this._sctpSessionCreated = value.sctpSessionCreated;
      this._sctpSessionDeleted = value.sctpSessionDeleted;
      this._sessionLimitExceeded = value.sessionLimitExceeded;
      this._tcpSessionCreated = value.tcpSessionCreated;
      this._tcpSessionDeleted = value.tcpSessionDeleted;
      this._udpSessionCreated = value.udpSessionCreated;
      this._udpSessionDeleted = value.udpSessionDeleted;
    }
  }

  // http_logging_invalid_format - computed: false, optional: true, required: false
  private _httpLoggingInvalidFormat?: number; 
  public get httpLoggingInvalidFormat() {
    return this.getNumberAttribute('http_logging_invalid_format');
  }
  public set httpLoggingInvalidFormat(value: number) {
    this._httpLoggingInvalidFormat = value;
  }
  public resetHttpLoggingInvalidFormat() {
    this._httpLoggingInvalidFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpLoggingInvalidFormatInput() {
    return this._httpLoggingInvalidFormat;
  }

  // http_request_logged - computed: false, optional: true, required: false
  private _httpRequestLogged?: number; 
  public get httpRequestLogged() {
    return this.getNumberAttribute('http_request_logged');
  }
  public set httpRequestLogged(value: number) {
    this._httpRequestLogged = value;
  }
  public resetHttpRequestLogged() {
    this._httpRequestLogged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestLoggedInput() {
    return this._httpRequestLogged;
  }

  // icmp_session_created - computed: false, optional: true, required: false
  private _icmpSessionCreated?: number; 
  public get icmpSessionCreated() {
    return this.getNumberAttribute('icmp_session_created');
  }
  public set icmpSessionCreated(value: number) {
    this._icmpSessionCreated = value;
  }
  public resetIcmpSessionCreated() {
    this._icmpSessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpSessionCreatedInput() {
    return this._icmpSessionCreated;
  }

  // icmp_session_deleted - computed: false, optional: true, required: false
  private _icmpSessionDeleted?: number; 
  public get icmpSessionDeleted() {
    return this.getNumberAttribute('icmp_session_deleted');
  }
  public set icmpSessionDeleted(value: number) {
    this._icmpSessionDeleted = value;
  }
  public resetIcmpSessionDeleted() {
    this._icmpSessionDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpSessionDeletedInput() {
    return this._icmpSessionDeleted;
  }

  // icmpv6_session_created - computed: false, optional: true, required: false
  private _icmpv6SessionCreated?: number; 
  public get icmpv6SessionCreated() {
    return this.getNumberAttribute('icmpv6_session_created');
  }
  public set icmpv6SessionCreated(value: number) {
    this._icmpv6SessionCreated = value;
  }
  public resetIcmpv6SessionCreated() {
    this._icmpv6SessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6SessionCreatedInput() {
    return this._icmpv6SessionCreated;
  }

  // icmpv6_session_deleted - computed: false, optional: true, required: false
  private _icmpv6SessionDeleted?: number; 
  public get icmpv6SessionDeleted() {
    return this.getNumberAttribute('icmpv6_session_deleted');
  }
  public set icmpv6SessionDeleted(value: number) {
    this._icmpv6SessionDeleted = value;
  }
  public resetIcmpv6SessionDeleted() {
    this._icmpv6SessionDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6SessionDeletedInput() {
    return this._icmpv6SessionDeleted;
  }

  // iddos_blackhole_entry_create - computed: false, optional: true, required: false
  private _iddosBlackholeEntryCreate?: number; 
  public get iddosBlackholeEntryCreate() {
    return this.getNumberAttribute('iddos_blackhole_entry_create');
  }
  public set iddosBlackholeEntryCreate(value: number) {
    this._iddosBlackholeEntryCreate = value;
  }
  public resetIddosBlackholeEntryCreate() {
    this._iddosBlackholeEntryCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iddosBlackholeEntryCreateInput() {
    return this._iddosBlackholeEntryCreate;
  }

  // iddos_blackhole_entry_delete - computed: false, optional: true, required: false
  private _iddosBlackholeEntryDelete?: number; 
  public get iddosBlackholeEntryDelete() {
    return this.getNumberAttribute('iddos_blackhole_entry_delete');
  }
  public set iddosBlackholeEntryDelete(value: number) {
    this._iddosBlackholeEntryDelete = value;
  }
  public resetIddosBlackholeEntryDelete() {
    this._iddosBlackholeEntryDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iddosBlackholeEntryDeleteInput() {
    return this._iddosBlackholeEntryDelete;
  }

  // log_dropped - computed: false, optional: true, required: false
  private _logDropped?: number; 
  public get logDropped() {
    return this.getNumberAttribute('log_dropped');
  }
  public set logDropped(value: number) {
    this._logDropped = value;
  }
  public resetLogDropped() {
    this._logDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDroppedInput() {
    return this._logDropped;
  }

  // log_message_sent - computed: false, optional: true, required: false
  private _logMessageSent?: number; 
  public get logMessageSent() {
    return this.getNumberAttribute('log_message_sent');
  }
  public set logMessageSent(value: number) {
    this._logMessageSent = value;
  }
  public resetLogMessageSent() {
    this._logMessageSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logMessageSentInput() {
    return this._logMessageSent;
  }

  // log_type_deny - computed: false, optional: true, required: false
  private _logTypeDeny?: number; 
  public get logTypeDeny() {
    return this.getNumberAttribute('log_type_deny');
  }
  public set logTypeDeny(value: number) {
    this._logTypeDeny = value;
  }
  public resetLogTypeDeny() {
    this._logTypeDeny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeDenyInput() {
    return this._logTypeDeny;
  }

  // log_type_reset - computed: false, optional: true, required: false
  private _logTypeReset?: number; 
  public get logTypeReset() {
    return this.getNumberAttribute('log_type_reset');
  }
  public set logTypeReset(value: number) {
    this._logTypeReset = value;
  }
  public resetLogTypeReset() {
    this._logTypeReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeResetInput() {
    return this._logTypeReset;
  }

  // log_type_sctp_inner_proto_filter - computed: false, optional: true, required: false
  private _logTypeSctpInnerProtoFilter?: number; 
  public get logTypeSctpInnerProtoFilter() {
    return this.getNumberAttribute('log_type_sctp_inner_proto_filter');
  }
  public set logTypeSctpInnerProtoFilter(value: number) {
    this._logTypeSctpInnerProtoFilter = value;
  }
  public resetLogTypeSctpInnerProtoFilter() {
    this._logTypeSctpInnerProtoFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeSctpInnerProtoFilterInput() {
    return this._logTypeSctpInnerProtoFilter;
  }

  // log_type_session_closed - computed: false, optional: true, required: false
  private _logTypeSessionClosed?: number; 
  public get logTypeSessionClosed() {
    return this.getNumberAttribute('log_type_session_closed');
  }
  public set logTypeSessionClosed(value: number) {
    this._logTypeSessionClosed = value;
  }
  public resetLogTypeSessionClosed() {
    this._logTypeSessionClosed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeSessionClosedInput() {
    return this._logTypeSessionClosed;
  }

  // log_type_session_opened - computed: false, optional: true, required: false
  private _logTypeSessionOpened?: number; 
  public get logTypeSessionOpened() {
    return this.getNumberAttribute('log_type_session_opened');
  }
  public set logTypeSessionOpened(value: number) {
    this._logTypeSessionOpened = value;
  }
  public resetLogTypeSessionOpened() {
    this._logTypeSessionOpened = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeSessionOpenedInput() {
    return this._logTypeSessionOpened;
  }

  // other_session_created - computed: false, optional: true, required: false
  private _otherSessionCreated?: number; 
  public get otherSessionCreated() {
    return this.getNumberAttribute('other_session_created');
  }
  public set otherSessionCreated(value: number) {
    this._otherSessionCreated = value;
  }
  public resetOtherSessionCreated() {
    this._otherSessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherSessionCreatedInput() {
    return this._otherSessionCreated;
  }

  // other_session_deleted - computed: false, optional: true, required: false
  private _otherSessionDeleted?: number; 
  public get otherSessionDeleted() {
    return this.getNumberAttribute('other_session_deleted');
  }
  public set otherSessionDeleted(value: number) {
    this._otherSessionDeleted = value;
  }
  public resetOtherSessionDeleted() {
    this._otherSessionDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherSessionDeletedInput() {
    return this._otherSessionDeleted;
  }

  // rule_not_logged - computed: false, optional: true, required: false
  private _ruleNotLogged?: number; 
  public get ruleNotLogged() {
    return this.getNumberAttribute('rule_not_logged');
  }
  public set ruleNotLogged(value: number) {
    this._ruleNotLogged = value;
  }
  public resetRuleNotLogged() {
    this._ruleNotLogged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNotLoggedInput() {
    return this._ruleNotLogged;
  }

  // sctp_session_created - computed: false, optional: true, required: false
  private _sctpSessionCreated?: number; 
  public get sctpSessionCreated() {
    return this.getNumberAttribute('sctp_session_created');
  }
  public set sctpSessionCreated(value: number) {
    this._sctpSessionCreated = value;
  }
  public resetSctpSessionCreated() {
    this._sctpSessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpSessionCreatedInput() {
    return this._sctpSessionCreated;
  }

  // sctp_session_deleted - computed: false, optional: true, required: false
  private _sctpSessionDeleted?: number; 
  public get sctpSessionDeleted() {
    return this.getNumberAttribute('sctp_session_deleted');
  }
  public set sctpSessionDeleted(value: number) {
    this._sctpSessionDeleted = value;
  }
  public resetSctpSessionDeleted() {
    this._sctpSessionDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpSessionDeletedInput() {
    return this._sctpSessionDeleted;
  }

  // session_limit_exceeded - computed: false, optional: true, required: false
  private _sessionLimitExceeded?: number; 
  public get sessionLimitExceeded() {
    return this.getNumberAttribute('session_limit_exceeded');
  }
  public set sessionLimitExceeded(value: number) {
    this._sessionLimitExceeded = value;
  }
  public resetSessionLimitExceeded() {
    this._sessionLimitExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionLimitExceededInput() {
    return this._sessionLimitExceeded;
  }

  // tcp_session_created - computed: false, optional: true, required: false
  private _tcpSessionCreated?: number; 
  public get tcpSessionCreated() {
    return this.getNumberAttribute('tcp_session_created');
  }
  public set tcpSessionCreated(value: number) {
    this._tcpSessionCreated = value;
  }
  public resetTcpSessionCreated() {
    this._tcpSessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSessionCreatedInput() {
    return this._tcpSessionCreated;
  }

  // tcp_session_deleted - computed: false, optional: true, required: false
  private _tcpSessionDeleted?: number; 
  public get tcpSessionDeleted() {
    return this.getNumberAttribute('tcp_session_deleted');
  }
  public set tcpSessionDeleted(value: number) {
    this._tcpSessionDeleted = value;
  }
  public resetTcpSessionDeleted() {
    this._tcpSessionDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSessionDeletedInput() {
    return this._tcpSessionDeleted;
  }

  // udp_session_created - computed: false, optional: true, required: false
  private _udpSessionCreated?: number; 
  public get udpSessionCreated() {
    return this.getNumberAttribute('udp_session_created');
  }
  public set udpSessionCreated(value: number) {
    this._udpSessionCreated = value;
  }
  public resetUdpSessionCreated() {
    this._udpSessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpSessionCreatedInput() {
    return this._udpSessionCreated;
  }

  // udp_session_deleted - computed: false, optional: true, required: false
  private _udpSessionDeleted?: number; 
  public get udpSessionDeleted() {
    return this.getNumberAttribute('udp_session_deleted');
  }
  public set udpSessionDeleted(value: number) {
    this._udpSessionDeleted = value;
  }
  public resetUdpSessionDeleted() {
    this._udpSessionDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpSessionDeletedInput() {
    return this._udpSessionDeleted;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats thunder_fw_logging_stats}
*/
export class DataThunderFwLoggingStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_logging_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderFwLoggingStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderFwLoggingStats to import
  * @param importFromId The id of the existing DataThunderFwLoggingStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderFwLoggingStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_logging_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_stats thunder_fw_logging_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderFwLoggingStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderFwLoggingStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_logging_stats',
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
    this._gtp.internalValue = config.gtp;
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

  // gtp - computed: false, optional: true, required: false
  private _gtp = new DataThunderFwLoggingStatsGtpOutputReference(this, "gtp");
  public get gtp() {
    return this._gtp;
  }
  public putGtp(value: DataThunderFwLoggingStatsGtp) {
    this._gtp.internalValue = value;
  }
  public resetGtp() {
    this._gtp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpInput() {
    return this._gtp.internalValue;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderFwLoggingStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderFwLoggingStatsStats) {
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
      gtp: dataThunderFwLoggingStatsGtpToTerraform(this._gtp.internalValue),
      stats: dataThunderFwLoggingStatsStatsToTerraform(this._stats.internalValue),
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
      gtp: {
        value: dataThunderFwLoggingStatsGtpToHclTerraform(this._gtp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderFwLoggingStatsGtpList",
      },
      stats: {
        value: dataThunderFwLoggingStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderFwLoggingStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
