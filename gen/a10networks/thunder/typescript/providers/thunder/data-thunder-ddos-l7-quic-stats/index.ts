// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l7_quic_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosL7QuicStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l7_quic_stats#id DataThunderDdosL7QuicStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l7_quic_stats#stats DataThunderDdosL7QuicStats#stats}
  */
  readonly stats?: DataThunderDdosL7QuicStatsStats;
}
export interface DataThunderDdosL7QuicStatsStats {
  /**
  * QUIC 0RTT Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l7_quic_stats#quic_0rtt_drop DataThunderDdosL7QuicStats#quic_0rtt_drop}
  */
  readonly quic0RttDrop?: number;
  /**
  * QUIC 0RTT Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l7_quic_stats#quic_0rtt_recevied DataThunderDdosL7QuicStats#quic_0rtt_recevied}
  */
  readonly quic0RttRecevied?: number;
  /**
  * QUIC AEAD Packet Rate Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l7_quic_stats#quic_aead_pkt_rate_exceed DataThunderDdosL7QuicStats#quic_aead_pkt_rate_exceed}
  */
  readonly quicAeadPktRateExceed?: number;
  /**
  * QUIC Connection Close Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l7_quic_stats#quic_connection_close_sent DataThunderDdosL7QuicStats#quic_connection_close_sent}
  */
  readonly quicConnectionCloseSent?: number;
  /**
  * QUIC Create Connection on Initial Only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l7_quic_stats#quic_create_conn_init_only DataThunderDdosL7QuicStats#quic_create_conn_init_only}
  */
  readonly quicCreateConnInitOnly?: number;
  /**
  * QUIC DCID Packet Rate Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l7_quic_stats#quic_dcid_pkt_rate_exceed DataThunderDdosL7QuicStats#quic_dcid_pkt_rate_exceed}
  */
  readonly quicDcidPktRateExceed?: number;
  /**
  * QUIC Decrypt Fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l7_quic_stats#quic_decrypt_fail DataThunderDdosL7QuicStats#quic_decrypt_fail}
  */
  readonly quicDecryptFail?: number;
  /**
  * QUIC Decrypt Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l7_quic_stats#quic_decrypt_success DataThunderDdosL7QuicStats#quic_decrypt_success}
  */
  readonly quicDecryptSuccess?: number;
  /**
  * QUIC Encrypt Fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l7_quic_stats#quic_encrypt_fail DataThunderDdosL7QuicStats#quic_encrypt_fail}
  */
  readonly quicEncryptFail?: number;
  /**
  * QUIC Encrypt Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l7_quic_stats#quic_encrypt_success DataThunderDdosL7QuicStats#quic_encrypt_success}
  */
  readonly quicEncryptSuccess?: number;
  /**
  * QUIC Fixed Bit Not Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l7_quic_stats#quic_fixed_bit_not_set DataThunderDdosL7QuicStats#quic_fixed_bit_not_set}
  */
  readonly quicFixedBitNotSet?: number;
  /**
  * QUIC Handshake Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l7_quic_stats#quic_handshake_received DataThunderDdosL7QuicStats#quic_handshake_received}
  */
  readonly quicHandshakeReceived?: number;
  /**
  * QUIC Initial Packet Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l7_quic_stats#quic_initial_received DataThunderDdosL7QuicStats#quic_initial_received}
  */
  readonly quicInitialReceived?: number;
  /**
  * QUIC Invalid Retry Token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l7_quic_stats#quic_invalid_retry_token DataThunderDdosL7QuicStats#quic_invalid_retry_token}
  */
  readonly quicInvalidRetryToken?: number;
  /**
  * QUIC Malformed Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l7_quic_stats#quic_malformed_action_blacklist DataThunderDdosL7QuicStats#quic_malformed_action_blacklist}
  */
  readonly quicMalformedActionBlacklist?: number;
  /**
  * QUIC Malformed Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l7_quic_stats#quic_malformed_action_drop DataThunderDdosL7QuicStats#quic_malformed_action_drop}
  */
  readonly quicMalformedActionDrop?: number;
  /**
  * QUIC Malformed Action Taken
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l7_quic_stats#quic_malformed_action_taken DataThunderDdosL7QuicStats#quic_malformed_action_taken}
  */
  readonly quicMalformedActionTaken?: number;
  /**
  * QUIC Malformed DCID Len Max Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l7_quic_stats#quic_malformed_dcid_len_max_exceed DataThunderDdosL7QuicStats#quic_malformed_dcid_len_max_exceed}
  */
  readonly quicMalformedDcidLenMaxExceed?: number;
  /**
  * QUIC Malformed SCID Len Max Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l7_quic_stats#quic_malformed_scid_len_max_exceed DataThunderDdosL7QuicStats#quic_malformed_scid_len_max_exceed}
  */
  readonly quicMalformedScidLenMaxExceed?: number;
  /**
  * QUIC Packet Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l7_quic_stats#quic_packet_received DataThunderDdosL7QuicStats#quic_packet_received}
  */
  readonly quicPacketReceived?: number;
  /**
  * QUIC Retry Auth Fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l7_quic_stats#quic_retry_auth_fail DataThunderDdosL7QuicStats#quic_retry_auth_fail}
  */
  readonly quicRetryAuthFail?: number;
  /**
  * QUIC Retry Auth Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l7_quic_stats#quic_retry_auth_pass DataThunderDdosL7QuicStats#quic_retry_auth_pass}
  */
  readonly quicRetryAuthPass?: number;
  /**
  * QUIC Retry Auth Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l7_quic_stats#quic_retry_auth_sent DataThunderDdosL7QuicStats#quic_retry_auth_sent}
  */
  readonly quicRetryAuthSent?: number;
  /**
  * QUIC Retry Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l7_quic_stats#quic_retry_received DataThunderDdosL7QuicStats#quic_retry_received}
  */
  readonly quicRetryReceived?: number;
  /**
  * QUIC Short Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l7_quic_stats#quic_short_header_action_drop DataThunderDdosL7QuicStats#quic_short_header_action_drop}
  */
  readonly quicShortHeaderActionDrop?: number;
  /**
  * QUIC Short Header Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l7_quic_stats#quic_short_header_received DataThunderDdosL7QuicStats#quic_short_header_received}
  */
  readonly quicShortHeaderReceived?: number;
  /**
  * QUIC Version Match Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l7_quic_stats#quic_version_match_action_blacklist DataThunderDdosL7QuicStats#quic_version_match_action_blacklist}
  */
  readonly quicVersionMatchActionBlacklist?: number;
  /**
  * QUIC Version Match Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l7_quic_stats#quic_version_match_action_drop DataThunderDdosL7QuicStats#quic_version_match_action_drop}
  */
  readonly quicVersionMatchActionDrop?: number;
  /**
  * QUIC Version Match Action Taken
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l7_quic_stats#quic_version_match_action_taken DataThunderDdosL7QuicStats#quic_version_match_action_taken}
  */
  readonly quicVersionMatchActionTaken?: number;
  /**
  * QUIC Version Negotiation Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l7_quic_stats#quic_version_negotiation_received DataThunderDdosL7QuicStats#quic_version_negotiation_received}
  */
  readonly quicVersionNegotiationReceived?: number;
  /**
  * QUIC Version No Match Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l7_quic_stats#quic_version_no_match_drop DataThunderDdosL7QuicStats#quic_version_no_match_drop}
  */
  readonly quicVersionNoMatchDrop?: number;
}

export function dataThunderDdosL7QuicStatsStatsToTerraform(struct?: DataThunderDdosL7QuicStatsStatsOutputReference | DataThunderDdosL7QuicStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    quic_0rtt_drop: cdktf.numberToTerraform(struct!.quic0RttDrop),
    quic_0rtt_recevied: cdktf.numberToTerraform(struct!.quic0RttRecevied),
    quic_aead_pkt_rate_exceed: cdktf.numberToTerraform(struct!.quicAeadPktRateExceed),
    quic_connection_close_sent: cdktf.numberToTerraform(struct!.quicConnectionCloseSent),
    quic_create_conn_init_only: cdktf.numberToTerraform(struct!.quicCreateConnInitOnly),
    quic_dcid_pkt_rate_exceed: cdktf.numberToTerraform(struct!.quicDcidPktRateExceed),
    quic_decrypt_fail: cdktf.numberToTerraform(struct!.quicDecryptFail),
    quic_decrypt_success: cdktf.numberToTerraform(struct!.quicDecryptSuccess),
    quic_encrypt_fail: cdktf.numberToTerraform(struct!.quicEncryptFail),
    quic_encrypt_success: cdktf.numberToTerraform(struct!.quicEncryptSuccess),
    quic_fixed_bit_not_set: cdktf.numberToTerraform(struct!.quicFixedBitNotSet),
    quic_handshake_received: cdktf.numberToTerraform(struct!.quicHandshakeReceived),
    quic_initial_received: cdktf.numberToTerraform(struct!.quicInitialReceived),
    quic_invalid_retry_token: cdktf.numberToTerraform(struct!.quicInvalidRetryToken),
    quic_malformed_action_blacklist: cdktf.numberToTerraform(struct!.quicMalformedActionBlacklist),
    quic_malformed_action_drop: cdktf.numberToTerraform(struct!.quicMalformedActionDrop),
    quic_malformed_action_taken: cdktf.numberToTerraform(struct!.quicMalformedActionTaken),
    quic_malformed_dcid_len_max_exceed: cdktf.numberToTerraform(struct!.quicMalformedDcidLenMaxExceed),
    quic_malformed_scid_len_max_exceed: cdktf.numberToTerraform(struct!.quicMalformedScidLenMaxExceed),
    quic_packet_received: cdktf.numberToTerraform(struct!.quicPacketReceived),
    quic_retry_auth_fail: cdktf.numberToTerraform(struct!.quicRetryAuthFail),
    quic_retry_auth_pass: cdktf.numberToTerraform(struct!.quicRetryAuthPass),
    quic_retry_auth_sent: cdktf.numberToTerraform(struct!.quicRetryAuthSent),
    quic_retry_received: cdktf.numberToTerraform(struct!.quicRetryReceived),
    quic_short_header_action_drop: cdktf.numberToTerraform(struct!.quicShortHeaderActionDrop),
    quic_short_header_received: cdktf.numberToTerraform(struct!.quicShortHeaderReceived),
    quic_version_match_action_blacklist: cdktf.numberToTerraform(struct!.quicVersionMatchActionBlacklist),
    quic_version_match_action_drop: cdktf.numberToTerraform(struct!.quicVersionMatchActionDrop),
    quic_version_match_action_taken: cdktf.numberToTerraform(struct!.quicVersionMatchActionTaken),
    quic_version_negotiation_received: cdktf.numberToTerraform(struct!.quicVersionNegotiationReceived),
    quic_version_no_match_drop: cdktf.numberToTerraform(struct!.quicVersionNoMatchDrop),
  }
}


export function dataThunderDdosL7QuicStatsStatsToHclTerraform(struct?: DataThunderDdosL7QuicStatsStatsOutputReference | DataThunderDdosL7QuicStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    quic_0rtt_drop: {
      value: cdktf.numberToHclTerraform(struct!.quic0RttDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quic_0rtt_recevied: {
      value: cdktf.numberToHclTerraform(struct!.quic0RttRecevied),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quic_aead_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.quicAeadPktRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quic_connection_close_sent: {
      value: cdktf.numberToHclTerraform(struct!.quicConnectionCloseSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quic_create_conn_init_only: {
      value: cdktf.numberToHclTerraform(struct!.quicCreateConnInitOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quic_dcid_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.quicDcidPktRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quic_decrypt_fail: {
      value: cdktf.numberToHclTerraform(struct!.quicDecryptFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quic_decrypt_success: {
      value: cdktf.numberToHclTerraform(struct!.quicDecryptSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quic_encrypt_fail: {
      value: cdktf.numberToHclTerraform(struct!.quicEncryptFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quic_encrypt_success: {
      value: cdktf.numberToHclTerraform(struct!.quicEncryptSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quic_fixed_bit_not_set: {
      value: cdktf.numberToHclTerraform(struct!.quicFixedBitNotSet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quic_handshake_received: {
      value: cdktf.numberToHclTerraform(struct!.quicHandshakeReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quic_initial_received: {
      value: cdktf.numberToHclTerraform(struct!.quicInitialReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quic_invalid_retry_token: {
      value: cdktf.numberToHclTerraform(struct!.quicInvalidRetryToken),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quic_malformed_action_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.quicMalformedActionBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quic_malformed_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.quicMalformedActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quic_malformed_action_taken: {
      value: cdktf.numberToHclTerraform(struct!.quicMalformedActionTaken),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quic_malformed_dcid_len_max_exceed: {
      value: cdktf.numberToHclTerraform(struct!.quicMalformedDcidLenMaxExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quic_malformed_scid_len_max_exceed: {
      value: cdktf.numberToHclTerraform(struct!.quicMalformedScidLenMaxExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quic_packet_received: {
      value: cdktf.numberToHclTerraform(struct!.quicPacketReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quic_retry_auth_fail: {
      value: cdktf.numberToHclTerraform(struct!.quicRetryAuthFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quic_retry_auth_pass: {
      value: cdktf.numberToHclTerraform(struct!.quicRetryAuthPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quic_retry_auth_sent: {
      value: cdktf.numberToHclTerraform(struct!.quicRetryAuthSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quic_retry_received: {
      value: cdktf.numberToHclTerraform(struct!.quicRetryReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quic_short_header_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.quicShortHeaderActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quic_short_header_received: {
      value: cdktf.numberToHclTerraform(struct!.quicShortHeaderReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quic_version_match_action_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.quicVersionMatchActionBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quic_version_match_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.quicVersionMatchActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quic_version_match_action_taken: {
      value: cdktf.numberToHclTerraform(struct!.quicVersionMatchActionTaken),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quic_version_negotiation_received: {
      value: cdktf.numberToHclTerraform(struct!.quicVersionNegotiationReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quic_version_no_match_drop: {
      value: cdktf.numberToHclTerraform(struct!.quicVersionNoMatchDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosL7QuicStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosL7QuicStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._quic0RttDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.quic0RttDrop = this._quic0RttDrop;
    }
    if (this._quic0RttRecevied !== undefined) {
      hasAnyValues = true;
      internalValueResult.quic0RttRecevied = this._quic0RttRecevied;
    }
    if (this._quicAeadPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicAeadPktRateExceed = this._quicAeadPktRateExceed;
    }
    if (this._quicConnectionCloseSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicConnectionCloseSent = this._quicConnectionCloseSent;
    }
    if (this._quicCreateConnInitOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicCreateConnInitOnly = this._quicCreateConnInitOnly;
    }
    if (this._quicDcidPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicDcidPktRateExceed = this._quicDcidPktRateExceed;
    }
    if (this._quicDecryptFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicDecryptFail = this._quicDecryptFail;
    }
    if (this._quicDecryptSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicDecryptSuccess = this._quicDecryptSuccess;
    }
    if (this._quicEncryptFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicEncryptFail = this._quicEncryptFail;
    }
    if (this._quicEncryptSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicEncryptSuccess = this._quicEncryptSuccess;
    }
    if (this._quicFixedBitNotSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicFixedBitNotSet = this._quicFixedBitNotSet;
    }
    if (this._quicHandshakeReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicHandshakeReceived = this._quicHandshakeReceived;
    }
    if (this._quicInitialReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicInitialReceived = this._quicInitialReceived;
    }
    if (this._quicInvalidRetryToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicInvalidRetryToken = this._quicInvalidRetryToken;
    }
    if (this._quicMalformedActionBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicMalformedActionBlacklist = this._quicMalformedActionBlacklist;
    }
    if (this._quicMalformedActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicMalformedActionDrop = this._quicMalformedActionDrop;
    }
    if (this._quicMalformedActionTaken !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicMalformedActionTaken = this._quicMalformedActionTaken;
    }
    if (this._quicMalformedDcidLenMaxExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicMalformedDcidLenMaxExceed = this._quicMalformedDcidLenMaxExceed;
    }
    if (this._quicMalformedScidLenMaxExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicMalformedScidLenMaxExceed = this._quicMalformedScidLenMaxExceed;
    }
    if (this._quicPacketReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicPacketReceived = this._quicPacketReceived;
    }
    if (this._quicRetryAuthFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicRetryAuthFail = this._quicRetryAuthFail;
    }
    if (this._quicRetryAuthPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicRetryAuthPass = this._quicRetryAuthPass;
    }
    if (this._quicRetryAuthSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicRetryAuthSent = this._quicRetryAuthSent;
    }
    if (this._quicRetryReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicRetryReceived = this._quicRetryReceived;
    }
    if (this._quicShortHeaderActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicShortHeaderActionDrop = this._quicShortHeaderActionDrop;
    }
    if (this._quicShortHeaderReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicShortHeaderReceived = this._quicShortHeaderReceived;
    }
    if (this._quicVersionMatchActionBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicVersionMatchActionBlacklist = this._quicVersionMatchActionBlacklist;
    }
    if (this._quicVersionMatchActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicVersionMatchActionDrop = this._quicVersionMatchActionDrop;
    }
    if (this._quicVersionMatchActionTaken !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicVersionMatchActionTaken = this._quicVersionMatchActionTaken;
    }
    if (this._quicVersionNegotiationReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicVersionNegotiationReceived = this._quicVersionNegotiationReceived;
    }
    if (this._quicVersionNoMatchDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicVersionNoMatchDrop = this._quicVersionNoMatchDrop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosL7QuicStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._quic0RttDrop = undefined;
      this._quic0RttRecevied = undefined;
      this._quicAeadPktRateExceed = undefined;
      this._quicConnectionCloseSent = undefined;
      this._quicCreateConnInitOnly = undefined;
      this._quicDcidPktRateExceed = undefined;
      this._quicDecryptFail = undefined;
      this._quicDecryptSuccess = undefined;
      this._quicEncryptFail = undefined;
      this._quicEncryptSuccess = undefined;
      this._quicFixedBitNotSet = undefined;
      this._quicHandshakeReceived = undefined;
      this._quicInitialReceived = undefined;
      this._quicInvalidRetryToken = undefined;
      this._quicMalformedActionBlacklist = undefined;
      this._quicMalformedActionDrop = undefined;
      this._quicMalformedActionTaken = undefined;
      this._quicMalformedDcidLenMaxExceed = undefined;
      this._quicMalformedScidLenMaxExceed = undefined;
      this._quicPacketReceived = undefined;
      this._quicRetryAuthFail = undefined;
      this._quicRetryAuthPass = undefined;
      this._quicRetryAuthSent = undefined;
      this._quicRetryReceived = undefined;
      this._quicShortHeaderActionDrop = undefined;
      this._quicShortHeaderReceived = undefined;
      this._quicVersionMatchActionBlacklist = undefined;
      this._quicVersionMatchActionDrop = undefined;
      this._quicVersionMatchActionTaken = undefined;
      this._quicVersionNegotiationReceived = undefined;
      this._quicVersionNoMatchDrop = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._quic0RttDrop = value.quic0RttDrop;
      this._quic0RttRecevied = value.quic0RttRecevied;
      this._quicAeadPktRateExceed = value.quicAeadPktRateExceed;
      this._quicConnectionCloseSent = value.quicConnectionCloseSent;
      this._quicCreateConnInitOnly = value.quicCreateConnInitOnly;
      this._quicDcidPktRateExceed = value.quicDcidPktRateExceed;
      this._quicDecryptFail = value.quicDecryptFail;
      this._quicDecryptSuccess = value.quicDecryptSuccess;
      this._quicEncryptFail = value.quicEncryptFail;
      this._quicEncryptSuccess = value.quicEncryptSuccess;
      this._quicFixedBitNotSet = value.quicFixedBitNotSet;
      this._quicHandshakeReceived = value.quicHandshakeReceived;
      this._quicInitialReceived = value.quicInitialReceived;
      this._quicInvalidRetryToken = value.quicInvalidRetryToken;
      this._quicMalformedActionBlacklist = value.quicMalformedActionBlacklist;
      this._quicMalformedActionDrop = value.quicMalformedActionDrop;
      this._quicMalformedActionTaken = value.quicMalformedActionTaken;
      this._quicMalformedDcidLenMaxExceed = value.quicMalformedDcidLenMaxExceed;
      this._quicMalformedScidLenMaxExceed = value.quicMalformedScidLenMaxExceed;
      this._quicPacketReceived = value.quicPacketReceived;
      this._quicRetryAuthFail = value.quicRetryAuthFail;
      this._quicRetryAuthPass = value.quicRetryAuthPass;
      this._quicRetryAuthSent = value.quicRetryAuthSent;
      this._quicRetryReceived = value.quicRetryReceived;
      this._quicShortHeaderActionDrop = value.quicShortHeaderActionDrop;
      this._quicShortHeaderReceived = value.quicShortHeaderReceived;
      this._quicVersionMatchActionBlacklist = value.quicVersionMatchActionBlacklist;
      this._quicVersionMatchActionDrop = value.quicVersionMatchActionDrop;
      this._quicVersionMatchActionTaken = value.quicVersionMatchActionTaken;
      this._quicVersionNegotiationReceived = value.quicVersionNegotiationReceived;
      this._quicVersionNoMatchDrop = value.quicVersionNoMatchDrop;
    }
  }

  // quic_0rtt_drop - computed: false, optional: true, required: false
  private _quic0RttDrop?: number; 
  public get quic0RttDrop() {
    return this.getNumberAttribute('quic_0rtt_drop');
  }
  public set quic0RttDrop(value: number) {
    this._quic0RttDrop = value;
  }
  public resetQuic0RttDrop() {
    this._quic0RttDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quic0RttDropInput() {
    return this._quic0RttDrop;
  }

  // quic_0rtt_recevied - computed: false, optional: true, required: false
  private _quic0RttRecevied?: number; 
  public get quic0RttRecevied() {
    return this.getNumberAttribute('quic_0rtt_recevied');
  }
  public set quic0RttRecevied(value: number) {
    this._quic0RttRecevied = value;
  }
  public resetQuic0RttRecevied() {
    this._quic0RttRecevied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quic0RttReceviedInput() {
    return this._quic0RttRecevied;
  }

  // quic_aead_pkt_rate_exceed - computed: false, optional: true, required: false
  private _quicAeadPktRateExceed?: number; 
  public get quicAeadPktRateExceed() {
    return this.getNumberAttribute('quic_aead_pkt_rate_exceed');
  }
  public set quicAeadPktRateExceed(value: number) {
    this._quicAeadPktRateExceed = value;
  }
  public resetQuicAeadPktRateExceed() {
    this._quicAeadPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicAeadPktRateExceedInput() {
    return this._quicAeadPktRateExceed;
  }

  // quic_connection_close_sent - computed: false, optional: true, required: false
  private _quicConnectionCloseSent?: number; 
  public get quicConnectionCloseSent() {
    return this.getNumberAttribute('quic_connection_close_sent');
  }
  public set quicConnectionCloseSent(value: number) {
    this._quicConnectionCloseSent = value;
  }
  public resetQuicConnectionCloseSent() {
    this._quicConnectionCloseSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicConnectionCloseSentInput() {
    return this._quicConnectionCloseSent;
  }

  // quic_create_conn_init_only - computed: false, optional: true, required: false
  private _quicCreateConnInitOnly?: number; 
  public get quicCreateConnInitOnly() {
    return this.getNumberAttribute('quic_create_conn_init_only');
  }
  public set quicCreateConnInitOnly(value: number) {
    this._quicCreateConnInitOnly = value;
  }
  public resetQuicCreateConnInitOnly() {
    this._quicCreateConnInitOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicCreateConnInitOnlyInput() {
    return this._quicCreateConnInitOnly;
  }

  // quic_dcid_pkt_rate_exceed - computed: false, optional: true, required: false
  private _quicDcidPktRateExceed?: number; 
  public get quicDcidPktRateExceed() {
    return this.getNumberAttribute('quic_dcid_pkt_rate_exceed');
  }
  public set quicDcidPktRateExceed(value: number) {
    this._quicDcidPktRateExceed = value;
  }
  public resetQuicDcidPktRateExceed() {
    this._quicDcidPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicDcidPktRateExceedInput() {
    return this._quicDcidPktRateExceed;
  }

  // quic_decrypt_fail - computed: false, optional: true, required: false
  private _quicDecryptFail?: number; 
  public get quicDecryptFail() {
    return this.getNumberAttribute('quic_decrypt_fail');
  }
  public set quicDecryptFail(value: number) {
    this._quicDecryptFail = value;
  }
  public resetQuicDecryptFail() {
    this._quicDecryptFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicDecryptFailInput() {
    return this._quicDecryptFail;
  }

  // quic_decrypt_success - computed: false, optional: true, required: false
  private _quicDecryptSuccess?: number; 
  public get quicDecryptSuccess() {
    return this.getNumberAttribute('quic_decrypt_success');
  }
  public set quicDecryptSuccess(value: number) {
    this._quicDecryptSuccess = value;
  }
  public resetQuicDecryptSuccess() {
    this._quicDecryptSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicDecryptSuccessInput() {
    return this._quicDecryptSuccess;
  }

  // quic_encrypt_fail - computed: false, optional: true, required: false
  private _quicEncryptFail?: number; 
  public get quicEncryptFail() {
    return this.getNumberAttribute('quic_encrypt_fail');
  }
  public set quicEncryptFail(value: number) {
    this._quicEncryptFail = value;
  }
  public resetQuicEncryptFail() {
    this._quicEncryptFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicEncryptFailInput() {
    return this._quicEncryptFail;
  }

  // quic_encrypt_success - computed: false, optional: true, required: false
  private _quicEncryptSuccess?: number; 
  public get quicEncryptSuccess() {
    return this.getNumberAttribute('quic_encrypt_success');
  }
  public set quicEncryptSuccess(value: number) {
    this._quicEncryptSuccess = value;
  }
  public resetQuicEncryptSuccess() {
    this._quicEncryptSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicEncryptSuccessInput() {
    return this._quicEncryptSuccess;
  }

  // quic_fixed_bit_not_set - computed: false, optional: true, required: false
  private _quicFixedBitNotSet?: number; 
  public get quicFixedBitNotSet() {
    return this.getNumberAttribute('quic_fixed_bit_not_set');
  }
  public set quicFixedBitNotSet(value: number) {
    this._quicFixedBitNotSet = value;
  }
  public resetQuicFixedBitNotSet() {
    this._quicFixedBitNotSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicFixedBitNotSetInput() {
    return this._quicFixedBitNotSet;
  }

  // quic_handshake_received - computed: false, optional: true, required: false
  private _quicHandshakeReceived?: number; 
  public get quicHandshakeReceived() {
    return this.getNumberAttribute('quic_handshake_received');
  }
  public set quicHandshakeReceived(value: number) {
    this._quicHandshakeReceived = value;
  }
  public resetQuicHandshakeReceived() {
    this._quicHandshakeReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicHandshakeReceivedInput() {
    return this._quicHandshakeReceived;
  }

  // quic_initial_received - computed: false, optional: true, required: false
  private _quicInitialReceived?: number; 
  public get quicInitialReceived() {
    return this.getNumberAttribute('quic_initial_received');
  }
  public set quicInitialReceived(value: number) {
    this._quicInitialReceived = value;
  }
  public resetQuicInitialReceived() {
    this._quicInitialReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicInitialReceivedInput() {
    return this._quicInitialReceived;
  }

  // quic_invalid_retry_token - computed: false, optional: true, required: false
  private _quicInvalidRetryToken?: number; 
  public get quicInvalidRetryToken() {
    return this.getNumberAttribute('quic_invalid_retry_token');
  }
  public set quicInvalidRetryToken(value: number) {
    this._quicInvalidRetryToken = value;
  }
  public resetQuicInvalidRetryToken() {
    this._quicInvalidRetryToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicInvalidRetryTokenInput() {
    return this._quicInvalidRetryToken;
  }

  // quic_malformed_action_blacklist - computed: false, optional: true, required: false
  private _quicMalformedActionBlacklist?: number; 
  public get quicMalformedActionBlacklist() {
    return this.getNumberAttribute('quic_malformed_action_blacklist');
  }
  public set quicMalformedActionBlacklist(value: number) {
    this._quicMalformedActionBlacklist = value;
  }
  public resetQuicMalformedActionBlacklist() {
    this._quicMalformedActionBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicMalformedActionBlacklistInput() {
    return this._quicMalformedActionBlacklist;
  }

  // quic_malformed_action_drop - computed: false, optional: true, required: false
  private _quicMalformedActionDrop?: number; 
  public get quicMalformedActionDrop() {
    return this.getNumberAttribute('quic_malformed_action_drop');
  }
  public set quicMalformedActionDrop(value: number) {
    this._quicMalformedActionDrop = value;
  }
  public resetQuicMalformedActionDrop() {
    this._quicMalformedActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicMalformedActionDropInput() {
    return this._quicMalformedActionDrop;
  }

  // quic_malformed_action_taken - computed: false, optional: true, required: false
  private _quicMalformedActionTaken?: number; 
  public get quicMalformedActionTaken() {
    return this.getNumberAttribute('quic_malformed_action_taken');
  }
  public set quicMalformedActionTaken(value: number) {
    this._quicMalformedActionTaken = value;
  }
  public resetQuicMalformedActionTaken() {
    this._quicMalformedActionTaken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicMalformedActionTakenInput() {
    return this._quicMalformedActionTaken;
  }

  // quic_malformed_dcid_len_max_exceed - computed: false, optional: true, required: false
  private _quicMalformedDcidLenMaxExceed?: number; 
  public get quicMalformedDcidLenMaxExceed() {
    return this.getNumberAttribute('quic_malformed_dcid_len_max_exceed');
  }
  public set quicMalformedDcidLenMaxExceed(value: number) {
    this._quicMalformedDcidLenMaxExceed = value;
  }
  public resetQuicMalformedDcidLenMaxExceed() {
    this._quicMalformedDcidLenMaxExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicMalformedDcidLenMaxExceedInput() {
    return this._quicMalformedDcidLenMaxExceed;
  }

  // quic_malformed_scid_len_max_exceed - computed: false, optional: true, required: false
  private _quicMalformedScidLenMaxExceed?: number; 
  public get quicMalformedScidLenMaxExceed() {
    return this.getNumberAttribute('quic_malformed_scid_len_max_exceed');
  }
  public set quicMalformedScidLenMaxExceed(value: number) {
    this._quicMalformedScidLenMaxExceed = value;
  }
  public resetQuicMalformedScidLenMaxExceed() {
    this._quicMalformedScidLenMaxExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicMalformedScidLenMaxExceedInput() {
    return this._quicMalformedScidLenMaxExceed;
  }

  // quic_packet_received - computed: false, optional: true, required: false
  private _quicPacketReceived?: number; 
  public get quicPacketReceived() {
    return this.getNumberAttribute('quic_packet_received');
  }
  public set quicPacketReceived(value: number) {
    this._quicPacketReceived = value;
  }
  public resetQuicPacketReceived() {
    this._quicPacketReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicPacketReceivedInput() {
    return this._quicPacketReceived;
  }

  // quic_retry_auth_fail - computed: false, optional: true, required: false
  private _quicRetryAuthFail?: number; 
  public get quicRetryAuthFail() {
    return this.getNumberAttribute('quic_retry_auth_fail');
  }
  public set quicRetryAuthFail(value: number) {
    this._quicRetryAuthFail = value;
  }
  public resetQuicRetryAuthFail() {
    this._quicRetryAuthFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicRetryAuthFailInput() {
    return this._quicRetryAuthFail;
  }

  // quic_retry_auth_pass - computed: false, optional: true, required: false
  private _quicRetryAuthPass?: number; 
  public get quicRetryAuthPass() {
    return this.getNumberAttribute('quic_retry_auth_pass');
  }
  public set quicRetryAuthPass(value: number) {
    this._quicRetryAuthPass = value;
  }
  public resetQuicRetryAuthPass() {
    this._quicRetryAuthPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicRetryAuthPassInput() {
    return this._quicRetryAuthPass;
  }

  // quic_retry_auth_sent - computed: false, optional: true, required: false
  private _quicRetryAuthSent?: number; 
  public get quicRetryAuthSent() {
    return this.getNumberAttribute('quic_retry_auth_sent');
  }
  public set quicRetryAuthSent(value: number) {
    this._quicRetryAuthSent = value;
  }
  public resetQuicRetryAuthSent() {
    this._quicRetryAuthSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicRetryAuthSentInput() {
    return this._quicRetryAuthSent;
  }

  // quic_retry_received - computed: false, optional: true, required: false
  private _quicRetryReceived?: number; 
  public get quicRetryReceived() {
    return this.getNumberAttribute('quic_retry_received');
  }
  public set quicRetryReceived(value: number) {
    this._quicRetryReceived = value;
  }
  public resetQuicRetryReceived() {
    this._quicRetryReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicRetryReceivedInput() {
    return this._quicRetryReceived;
  }

  // quic_short_header_action_drop - computed: false, optional: true, required: false
  private _quicShortHeaderActionDrop?: number; 
  public get quicShortHeaderActionDrop() {
    return this.getNumberAttribute('quic_short_header_action_drop');
  }
  public set quicShortHeaderActionDrop(value: number) {
    this._quicShortHeaderActionDrop = value;
  }
  public resetQuicShortHeaderActionDrop() {
    this._quicShortHeaderActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicShortHeaderActionDropInput() {
    return this._quicShortHeaderActionDrop;
  }

  // quic_short_header_received - computed: false, optional: true, required: false
  private _quicShortHeaderReceived?: number; 
  public get quicShortHeaderReceived() {
    return this.getNumberAttribute('quic_short_header_received');
  }
  public set quicShortHeaderReceived(value: number) {
    this._quicShortHeaderReceived = value;
  }
  public resetQuicShortHeaderReceived() {
    this._quicShortHeaderReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicShortHeaderReceivedInput() {
    return this._quicShortHeaderReceived;
  }

  // quic_version_match_action_blacklist - computed: false, optional: true, required: false
  private _quicVersionMatchActionBlacklist?: number; 
  public get quicVersionMatchActionBlacklist() {
    return this.getNumberAttribute('quic_version_match_action_blacklist');
  }
  public set quicVersionMatchActionBlacklist(value: number) {
    this._quicVersionMatchActionBlacklist = value;
  }
  public resetQuicVersionMatchActionBlacklist() {
    this._quicVersionMatchActionBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicVersionMatchActionBlacklistInput() {
    return this._quicVersionMatchActionBlacklist;
  }

  // quic_version_match_action_drop - computed: false, optional: true, required: false
  private _quicVersionMatchActionDrop?: number; 
  public get quicVersionMatchActionDrop() {
    return this.getNumberAttribute('quic_version_match_action_drop');
  }
  public set quicVersionMatchActionDrop(value: number) {
    this._quicVersionMatchActionDrop = value;
  }
  public resetQuicVersionMatchActionDrop() {
    this._quicVersionMatchActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicVersionMatchActionDropInput() {
    return this._quicVersionMatchActionDrop;
  }

  // quic_version_match_action_taken - computed: false, optional: true, required: false
  private _quicVersionMatchActionTaken?: number; 
  public get quicVersionMatchActionTaken() {
    return this.getNumberAttribute('quic_version_match_action_taken');
  }
  public set quicVersionMatchActionTaken(value: number) {
    this._quicVersionMatchActionTaken = value;
  }
  public resetQuicVersionMatchActionTaken() {
    this._quicVersionMatchActionTaken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicVersionMatchActionTakenInput() {
    return this._quicVersionMatchActionTaken;
  }

  // quic_version_negotiation_received - computed: false, optional: true, required: false
  private _quicVersionNegotiationReceived?: number; 
  public get quicVersionNegotiationReceived() {
    return this.getNumberAttribute('quic_version_negotiation_received');
  }
  public set quicVersionNegotiationReceived(value: number) {
    this._quicVersionNegotiationReceived = value;
  }
  public resetQuicVersionNegotiationReceived() {
    this._quicVersionNegotiationReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicVersionNegotiationReceivedInput() {
    return this._quicVersionNegotiationReceived;
  }

  // quic_version_no_match_drop - computed: false, optional: true, required: false
  private _quicVersionNoMatchDrop?: number; 
  public get quicVersionNoMatchDrop() {
    return this.getNumberAttribute('quic_version_no_match_drop');
  }
  public set quicVersionNoMatchDrop(value: number) {
    this._quicVersionNoMatchDrop = value;
  }
  public resetQuicVersionNoMatchDrop() {
    this._quicVersionNoMatchDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicVersionNoMatchDropInput() {
    return this._quicVersionNoMatchDrop;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l7_quic_stats thunder_ddos_l7_quic_stats}
*/
export class DataThunderDdosL7QuicStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_l7_quic_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosL7QuicStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosL7QuicStats to import
  * @param importFromId The id of the existing DataThunderDdosL7QuicStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l7_quic_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosL7QuicStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_l7_quic_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l7_quic_stats thunder_ddos_l7_quic_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosL7QuicStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosL7QuicStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_l7_quic_stats',
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
  private _stats = new DataThunderDdosL7QuicStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderDdosL7QuicStatsStats) {
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
      stats: dataThunderDdosL7QuicStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderDdosL7QuicStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosL7QuicStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
