// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_gtp_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderFwLoggingGtpStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_gtp_stats#id DataThunderFwLoggingGtpStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_gtp_stats#stats DataThunderFwLoggingGtpStats#stats}
  */
  readonly stats?: DataThunderFwLoggingGtpStatsStats;
}
export interface DataThunderFwLoggingGtpStatsStats {
  /**
  * Log Event Type GTP Reserved IE Present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_gtp_stats#log_gtp_type_reserved_ie_present DataThunderFwLoggingGtpStats#log_gtp_type_reserved_ie_present}
  */
  readonly logGtpTypeReservedIePresent?: number;
  /**
  * Log Event GTP Country Code Mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_gtp_stats#log_type_country_code_mismatch DataThunderFwLoggingGtpStats#log_type_country_code_mismatch}
  */
  readonly logTypeCountryCodeMismatch?: number;
  /**
  * Log Event GTP Crosslayer Correlation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_gtp_stats#log_type_crosslayer_correlation DataThunderFwLoggingGtpStats#log_type_crosslayer_correlation}
  */
  readonly logTypeCrosslayerCorrelation?: number;
  /**
  * Log Event Type GTP Enduser IP Spoofed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_gtp_stats#log_type_enduser_ip_spoofed DataThunderFwLoggingGtpStats#log_type_enduser_ip_spoofed}
  */
  readonly logTypeEnduserIpSpoofed?: number;
  /**
  * Log Event Type GTP Apn Filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_gtp_stats#log_type_gtp_apn_filtering DataThunderFwLoggingGtpStats#log_type_gtp_apn_filtering}
  */
  readonly logTypeGtpApnFiltering?: number;
  /**
  * Log Event GTP invalid piggyback flag in header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_gtp_stats#log_type_gtp_hdr_invalid_piggy_flag DataThunderFwLoggingGtpStats#log_type_gtp_hdr_invalid_piggy_flag}
  */
  readonly logTypeGtpHdrInvalidPiggyFlag?: number;
  /**
  * Log Event GTP Protocol flag in header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_gtp_stats#log_type_gtp_hdr_invalid_protocol_flag DataThunderFwLoggingGtpStats#log_type_gtp_hdr_invalid_protocol_flag}
  */
  readonly logTypeGtpHdrInvalidProtocolFlag?: number;
  /**
  * Log Event GTP invalid spare bits in header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_gtp_stats#log_type_gtp_hdr_invalid_spare_bits DataThunderFwLoggingGtpStats#log_type_gtp_hdr_invalid_spare_bits}
  */
  readonly logTypeGtpHdrInvalidSpareBits?: number;
  /**
  * Log Event GTP in GTP Filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_gtp_stats#log_type_gtp_in_gtp_filtering DataThunderFwLoggingGtpStats#log_type_gtp_in_gtp_filtering}
  */
  readonly logTypeGtpInGtpFiltering?: number;
  /**
  * Log Event GTP Invalid message length across layers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_gtp_stats#log_type_gtp_invalid_message_length DataThunderFwLoggingGtpStats#log_type_gtp_invalid_message_length}
  */
  readonly logTypeGtpInvalidMessageLength?: number;
  /**
  * Log Event mismatch of GTP message and ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_gtp_stats#log_type_gtp_invalid_ports DataThunderFwLoggingGtpStats#log_type_gtp_invalid_ports}
  */
  readonly logTypeGtpInvalidPorts?: number;
  /**
  * Log Event Type GTP Invalid TEID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_gtp_stats#log_type_gtp_invalid_teid DataThunderFwLoggingGtpStats#log_type_gtp_invalid_teid}
  */
  readonly logTypeGtpInvalidTeid?: number;
  /**
  * Log Event invalid GTP version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_gtp_stats#log_type_gtp_invalid_version DataThunderFwLoggingGtpStats#log_type_gtp_invalid_version}
  */
  readonly logTypeGtpInvalidVersion?: number;
  /**
  * Log Event Type GTP Mandatory IE Missing Inside Grouped IE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_gtp_stats#log_type_gtp_mandatory_ie_inside_grouped_ie_missing DataThunderFwLoggingGtpStats#log_type_gtp_mandatory_ie_inside_grouped_ie_missing}
  */
  readonly logTypeGtpMandatoryIeInsideGroupedIeMissing?: number;
  /**
  * Log Event Type GTP Mandatory IE Missing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_gtp_stats#log_type_gtp_mandatory_ie_missing DataThunderFwLoggingGtpStats#log_type_gtp_mandatory_ie_missing}
  */
  readonly logTypeGtpMandatoryIeMissing?: number;
  /**
  * Log Event Type GTP Message Filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_gtp_stats#log_type_gtp_message_filtering DataThunderFwLoggingGtpStats#log_type_gtp_message_filtering}
  */
  readonly logTypeGtpMessageFiltering?: number;
  /**
  * Log Event Type GTP MSISDN Filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_gtp_stats#log_type_gtp_msisdn_filtering DataThunderFwLoggingGtpStats#log_type_gtp_msisdn_filtering}
  */
  readonly logTypeGtpMsisdnFiltering?: number;
  /**
  * Log Event GTP SGW/PGW restarted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_gtp_stats#log_type_gtp_node_restart DataThunderFwLoggingGtpStats#log_type_gtp_node_restart}
  */
  readonly logTypeGtpNodeRestart?: number;
  /**
  * Log Event Type GTP Out of Order IE V1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_gtp_stats#log_type_gtp_out_of_order_ie DataThunderFwLoggingGtpStats#log_type_gtp_out_of_order_ie}
  */
  readonly logTypeGtpOutOfOrderIe?: number;
  /**
  * Log Event Type GTP Out of State IE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_gtp_stats#log_type_gtp_out_of_state_ie DataThunderFwLoggingGtpStats#log_type_gtp_out_of_state_ie}
  */
  readonly logTypeGtpOutOfStateIe?: number;
  /**
  * Log Event GTP RAT Type Filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_gtp_stats#log_type_gtp_rat_type_filtering DataThunderFwLoggingGtpStats#log_type_gtp_rat_type_filtering}
  */
  readonly logTypeGtpRatTypeFiltering?: number;
  /**
  * Log Event GTP Rate Limit Periodic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_gtp_stats#log_type_gtp_rate_limit_periodic DataThunderFwLoggingGtpStats#log_type_gtp_rate_limit_periodic}
  */
  readonly logTypeGtpRateLimitPeriodic?: number;
  /**
  * Log Event GTP Response Sequence number Mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_gtp_stats#log_type_gtp_seq_num_mismatch DataThunderFwLoggingGtpStats#log_type_gtp_seq_num_mismatch}
  */
  readonly logTypeGtpSeqNumMismatch?: number;
  /**
  * Log Event GTP Message Length Exceeded Max
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_gtp_stats#log_type_max_msg_length DataThunderFwLoggingGtpStats#log_type_max_msg_length}
  */
  readonly logTypeMaxMsgLength?: number;
  /**
  * Log Event GTP Reserved Message Found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_gtp_stats#log_type_message_not_supported DataThunderFwLoggingGtpStats#log_type_message_not_supported}
  */
  readonly logTypeMessageNotSupported?: number;
  /**
  * Log Event GTP Out of State Message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_gtp_stats#log_type_out_of_state DataThunderFwLoggingGtpStats#log_type_out_of_state}
  */
  readonly logTypeOutOfState?: number;
}

export function dataThunderFwLoggingGtpStatsStatsToTerraform(struct?: DataThunderFwLoggingGtpStatsStatsOutputReference | DataThunderFwLoggingGtpStatsStats): any {
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


export function dataThunderFwLoggingGtpStatsStatsToHclTerraform(struct?: DataThunderFwLoggingGtpStatsStatsOutputReference | DataThunderFwLoggingGtpStatsStats): any {
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

export class DataThunderFwLoggingGtpStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderFwLoggingGtpStatsStats | undefined {
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

  public set internalValue(value: DataThunderFwLoggingGtpStatsStats | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_gtp_stats thunder_fw_logging_gtp_stats}
*/
export class DataThunderFwLoggingGtpStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_logging_gtp_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderFwLoggingGtpStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderFwLoggingGtpStats to import
  * @param importFromId The id of the existing DataThunderFwLoggingGtpStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_gtp_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderFwLoggingGtpStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_logging_gtp_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_logging_gtp_stats thunder_fw_logging_gtp_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderFwLoggingGtpStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderFwLoggingGtpStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_logging_gtp_stats',
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderFwLoggingGtpStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderFwLoggingGtpStatsStats) {
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
      stats: dataThunderFwLoggingGtpStatsStatsToTerraform(this._stats.internalValue),
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
      stats: {
        value: dataThunderFwLoggingGtpStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderFwLoggingGtpStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
