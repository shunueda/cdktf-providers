// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVpnIpsecStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_stats#id DataThunderVpnIpsecStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IPsec name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_stats#name DataThunderVpnIpsecStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_stats#stats DataThunderVpnIpsecStats#stats}
  */
  readonly stats?: DataThunderVpnIpsecStatsStats;
}
export interface DataThunderVpnIpsecStatsStats {
  /**
  * Anti-Replay Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_stats#anti_replay_num DataThunderVpnIpsecStats#anti_replay_num}
  */
  readonly antiReplayNum?: number;
  /**
  * Decrypted Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_stats#bytes_decrypted DataThunderVpnIpsecStats#bytes_decrypted}
  */
  readonly bytesDecrypted?: number;
  /**
  * Encrypted Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_stats#bytes_encrypted DataThunderVpnIpsecStats#bytes_encrypted}
  */
  readonly bytesEncrypted?: number;
  /**
  * CAVIUM Decrypted Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_stats#cavium_bytes_decrypted DataThunderVpnIpsecStats#cavium_bytes_decrypted}
  */
  readonly caviumBytesDecrypted?: number;
  /**
  * CAVIUM Encrypted Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_stats#cavium_bytes_encrypted DataThunderVpnIpsecStats#cavium_bytes_encrypted}
  */
  readonly caviumBytesEncrypted?: number;
  /**
  * CAVIUM Decrypted Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_stats#cavium_packets_decrypted DataThunderVpnIpsecStats#cavium_packets_decrypted}
  */
  readonly caviumPacketsDecrypted?: number;
  /**
  * CAVIUM Encrypted Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_stats#cavium_packets_encrypted DataThunderVpnIpsecStats#cavium_packets_encrypted}
  */
  readonly caviumPacketsEncrypted?: number;
  /**
  * Frag-after-encap Fragment Generated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_stats#frag_after_encap_frag_packets DataThunderVpnIpsecStats#frag_after_encap_frag_packets}
  */
  readonly fragAfterEncapFragPackets?: number;
  /**
  * Fragment Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_stats#frag_received DataThunderVpnIpsecStats#frag_received}
  */
  readonly fragReceived?: number;
  /**
  * Packet dropped: Invalid tunnel ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_stats#invalid_tunnel_id DataThunderVpnIpsecStats#invalid_tunnel_id}
  */
  readonly invalidTunnelId?: number;
  /**
  * Packet dropped: No next hop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_stats#no_next_hop DataThunderVpnIpsecStats#no_next_hop}
  */
  readonly noNextHop?: number;
  /**
  * Packet dropped: No tunnel found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_stats#no_tunnel_found DataThunderVpnIpsecStats#no_tunnel_found}
  */
  readonly noTunnelFound?: number;
  /**
  * Decrypted Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_stats#packets_decrypted DataThunderVpnIpsecStats#packets_decrypted}
  */
  readonly packetsDecrypted?: number;
  /**
  * Encrypted Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_stats#packets_encrypted DataThunderVpnIpsecStats#packets_encrypted}
  */
  readonly packetsEncrypted?: number;
  /**
  * Encryption Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_stats#packets_err_encryption DataThunderVpnIpsecStats#packets_err_encryption}
  */
  readonly packetsErrEncryption?: number;
  /**
  * ICV Check Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_stats#packets_err_icv_check DataThunderVpnIpsecStats#packets_err_icv_check}
  */
  readonly packetsErrIcvCheck?: number;
  /**
  * Inactive Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_stats#packets_err_inactive DataThunderVpnIpsecStats#packets_err_inactive}
  */
  readonly packetsErrInactive?: number;
  /**
  * Lifetime Lifebytes Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_stats#packets_err_lifetime_lifebytes DataThunderVpnIpsecStats#packets_err_lifetime_lifebytes}
  */
  readonly packetsErrLifetimeLifebytes?: number;
  /**
  * Next Header Check Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_stats#packets_err_nh_check DataThunderVpnIpsecStats#packets_err_nh_check}
  */
  readonly packetsErrNhCheck?: number;
  /**
  * Pad Check Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_stats#packets_err_pad_check DataThunderVpnIpsecStats#packets_err_pad_check}
  */
  readonly packetsErrPadCheck?: number;
  /**
  * Packets Sanity Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_stats#packets_err_pkt_sanity DataThunderVpnIpsecStats#packets_err_pkt_sanity}
  */
  readonly packetsErrPktSanity?: number;
  /**
  * Packet dropped: Failed in prepare to send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_stats#pkt_fail_prep_to_send DataThunderVpnIpsecStats#pkt_fail_prep_to_send}
  */
  readonly pktFailPrepToSend?: number;
  /**
  * Packet dropped: Failed to send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_stats#pkt_fail_to_send DataThunderVpnIpsecStats#pkt_fail_to_send}
  */
  readonly pktFailToSend?: number;
  /**
  * Pre-frag Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_stats#prefrag_error DataThunderVpnIpsecStats#prefrag_error}
  */
  readonly prefragError?: number;
  /**
  * Pre-frag Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_stats#prefrag_success DataThunderVpnIpsecStats#prefrag_success}
  */
  readonly prefragSuccess?: number;
  /**
  * QAT Decrypted Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_stats#qat_bytes_decrypted DataThunderVpnIpsecStats#qat_bytes_decrypted}
  */
  readonly qatBytesDecrypted?: number;
  /**
  * QAT Encrypted Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_stats#qat_bytes_encrypted DataThunderVpnIpsecStats#qat_bytes_encrypted}
  */
  readonly qatBytesEncrypted?: number;
  /**
  * QAT Decrypted Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_stats#qat_packets_decrypted DataThunderVpnIpsecStats#qat_packets_decrypted}
  */
  readonly qatPacketsDecrypted?: number;
  /**
  * QAT Encrypted Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_stats#qat_packets_encrypted DataThunderVpnIpsecStats#qat_packets_encrypted}
  */
  readonly qatPacketsEncrypted?: number;
  /**
  * Rekey Times
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_stats#rekey_num DataThunderVpnIpsecStats#rekey_num}
  */
  readonly rekeyNum?: number;
  /**
  * Sequence Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_stats#sequence_num DataThunderVpnIpsecStats#sequence_num}
  */
  readonly sequenceNum?: number;
  /**
  * Sequence Number Rollover
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_stats#sequence_num_rollover DataThunderVpnIpsecStats#sequence_num_rollover}
  */
  readonly sequenceNumRollover?: number;
  /**
  * Packet dropped: Tunnel Interface Down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_stats#tunnel_intf_down DataThunderVpnIpsecStats#tunnel_intf_down}
  */
  readonly tunnelIntfDown?: number;
}

export function dataThunderVpnIpsecStatsStatsToTerraform(struct?: DataThunderVpnIpsecStatsStatsOutputReference | DataThunderVpnIpsecStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anti_replay_num: cdktf.numberToTerraform(struct!.antiReplayNum),
    bytes_decrypted: cdktf.numberToTerraform(struct!.bytesDecrypted),
    bytes_encrypted: cdktf.numberToTerraform(struct!.bytesEncrypted),
    cavium_bytes_decrypted: cdktf.numberToTerraform(struct!.caviumBytesDecrypted),
    cavium_bytes_encrypted: cdktf.numberToTerraform(struct!.caviumBytesEncrypted),
    cavium_packets_decrypted: cdktf.numberToTerraform(struct!.caviumPacketsDecrypted),
    cavium_packets_encrypted: cdktf.numberToTerraform(struct!.caviumPacketsEncrypted),
    frag_after_encap_frag_packets: cdktf.numberToTerraform(struct!.fragAfterEncapFragPackets),
    frag_received: cdktf.numberToTerraform(struct!.fragReceived),
    invalid_tunnel_id: cdktf.numberToTerraform(struct!.invalidTunnelId),
    no_next_hop: cdktf.numberToTerraform(struct!.noNextHop),
    no_tunnel_found: cdktf.numberToTerraform(struct!.noTunnelFound),
    packets_decrypted: cdktf.numberToTerraform(struct!.packetsDecrypted),
    packets_encrypted: cdktf.numberToTerraform(struct!.packetsEncrypted),
    packets_err_encryption: cdktf.numberToTerraform(struct!.packetsErrEncryption),
    packets_err_icv_check: cdktf.numberToTerraform(struct!.packetsErrIcvCheck),
    packets_err_inactive: cdktf.numberToTerraform(struct!.packetsErrInactive),
    packets_err_lifetime_lifebytes: cdktf.numberToTerraform(struct!.packetsErrLifetimeLifebytes),
    packets_err_nh_check: cdktf.numberToTerraform(struct!.packetsErrNhCheck),
    packets_err_pad_check: cdktf.numberToTerraform(struct!.packetsErrPadCheck),
    packets_err_pkt_sanity: cdktf.numberToTerraform(struct!.packetsErrPktSanity),
    pkt_fail_prep_to_send: cdktf.numberToTerraform(struct!.pktFailPrepToSend),
    pkt_fail_to_send: cdktf.numberToTerraform(struct!.pktFailToSend),
    prefrag_error: cdktf.numberToTerraform(struct!.prefragError),
    prefrag_success: cdktf.numberToTerraform(struct!.prefragSuccess),
    qat_bytes_decrypted: cdktf.numberToTerraform(struct!.qatBytesDecrypted),
    qat_bytes_encrypted: cdktf.numberToTerraform(struct!.qatBytesEncrypted),
    qat_packets_decrypted: cdktf.numberToTerraform(struct!.qatPacketsDecrypted),
    qat_packets_encrypted: cdktf.numberToTerraform(struct!.qatPacketsEncrypted),
    rekey_num: cdktf.numberToTerraform(struct!.rekeyNum),
    sequence_num: cdktf.numberToTerraform(struct!.sequenceNum),
    sequence_num_rollover: cdktf.numberToTerraform(struct!.sequenceNumRollover),
    tunnel_intf_down: cdktf.numberToTerraform(struct!.tunnelIntfDown),
  }
}


export function dataThunderVpnIpsecStatsStatsToHclTerraform(struct?: DataThunderVpnIpsecStatsStatsOutputReference | DataThunderVpnIpsecStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anti_replay_num: {
      value: cdktf.numberToHclTerraform(struct!.antiReplayNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bytes_decrypted: {
      value: cdktf.numberToHclTerraform(struct!.bytesDecrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bytes_encrypted: {
      value: cdktf.numberToHclTerraform(struct!.bytesEncrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cavium_bytes_decrypted: {
      value: cdktf.numberToHclTerraform(struct!.caviumBytesDecrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cavium_bytes_encrypted: {
      value: cdktf.numberToHclTerraform(struct!.caviumBytesEncrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cavium_packets_decrypted: {
      value: cdktf.numberToHclTerraform(struct!.caviumPacketsDecrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cavium_packets_encrypted: {
      value: cdktf.numberToHclTerraform(struct!.caviumPacketsEncrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frag_after_encap_frag_packets: {
      value: cdktf.numberToHclTerraform(struct!.fragAfterEncapFragPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frag_received: {
      value: cdktf.numberToHclTerraform(struct!.fragReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_tunnel_id: {
      value: cdktf.numberToHclTerraform(struct!.invalidTunnelId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_next_hop: {
      value: cdktf.numberToHclTerraform(struct!.noNextHop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_tunnel_found: {
      value: cdktf.numberToHclTerraform(struct!.noTunnelFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packets_decrypted: {
      value: cdktf.numberToHclTerraform(struct!.packetsDecrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packets_encrypted: {
      value: cdktf.numberToHclTerraform(struct!.packetsEncrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packets_err_encryption: {
      value: cdktf.numberToHclTerraform(struct!.packetsErrEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packets_err_icv_check: {
      value: cdktf.numberToHclTerraform(struct!.packetsErrIcvCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packets_err_inactive: {
      value: cdktf.numberToHclTerraform(struct!.packetsErrInactive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packets_err_lifetime_lifebytes: {
      value: cdktf.numberToHclTerraform(struct!.packetsErrLifetimeLifebytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packets_err_nh_check: {
      value: cdktf.numberToHclTerraform(struct!.packetsErrNhCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packets_err_pad_check: {
      value: cdktf.numberToHclTerraform(struct!.packetsErrPadCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packets_err_pkt_sanity: {
      value: cdktf.numberToHclTerraform(struct!.packetsErrPktSanity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkt_fail_prep_to_send: {
      value: cdktf.numberToHclTerraform(struct!.pktFailPrepToSend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkt_fail_to_send: {
      value: cdktf.numberToHclTerraform(struct!.pktFailToSend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefrag_error: {
      value: cdktf.numberToHclTerraform(struct!.prefragError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefrag_success: {
      value: cdktf.numberToHclTerraform(struct!.prefragSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    qat_bytes_decrypted: {
      value: cdktf.numberToHclTerraform(struct!.qatBytesDecrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    qat_bytes_encrypted: {
      value: cdktf.numberToHclTerraform(struct!.qatBytesEncrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    qat_packets_decrypted: {
      value: cdktf.numberToHclTerraform(struct!.qatPacketsDecrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    qat_packets_encrypted: {
      value: cdktf.numberToHclTerraform(struct!.qatPacketsEncrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rekey_num: {
      value: cdktf.numberToHclTerraform(struct!.rekeyNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sequence_num: {
      value: cdktf.numberToHclTerraform(struct!.sequenceNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sequence_num_rollover: {
      value: cdktf.numberToHclTerraform(struct!.sequenceNumRollover),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tunnel_intf_down: {
      value: cdktf.numberToHclTerraform(struct!.tunnelIntfDown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnIpsecStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnIpsecStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._antiReplayNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.antiReplayNum = this._antiReplayNum;
    }
    if (this._bytesDecrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytesDecrypted = this._bytesDecrypted;
    }
    if (this._bytesEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytesEncrypted = this._bytesEncrypted;
    }
    if (this._caviumBytesDecrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.caviumBytesDecrypted = this._caviumBytesDecrypted;
    }
    if (this._caviumBytesEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.caviumBytesEncrypted = this._caviumBytesEncrypted;
    }
    if (this._caviumPacketsDecrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.caviumPacketsDecrypted = this._caviumPacketsDecrypted;
    }
    if (this._caviumPacketsEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.caviumPacketsEncrypted = this._caviumPacketsEncrypted;
    }
    if (this._fragAfterEncapFragPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragAfterEncapFragPackets = this._fragAfterEncapFragPackets;
    }
    if (this._fragReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragReceived = this._fragReceived;
    }
    if (this._invalidTunnelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidTunnelId = this._invalidTunnelId;
    }
    if (this._noNextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.noNextHop = this._noNextHop;
    }
    if (this._noTunnelFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.noTunnelFound = this._noTunnelFound;
    }
    if (this._packetsDecrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsDecrypted = this._packetsDecrypted;
    }
    if (this._packetsEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsEncrypted = this._packetsEncrypted;
    }
    if (this._packetsErrEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsErrEncryption = this._packetsErrEncryption;
    }
    if (this._packetsErrIcvCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsErrIcvCheck = this._packetsErrIcvCheck;
    }
    if (this._packetsErrInactive !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsErrInactive = this._packetsErrInactive;
    }
    if (this._packetsErrLifetimeLifebytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsErrLifetimeLifebytes = this._packetsErrLifetimeLifebytes;
    }
    if (this._packetsErrNhCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsErrNhCheck = this._packetsErrNhCheck;
    }
    if (this._packetsErrPadCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsErrPadCheck = this._packetsErrPadCheck;
    }
    if (this._packetsErrPktSanity !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsErrPktSanity = this._packetsErrPktSanity;
    }
    if (this._pktFailPrepToSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktFailPrepToSend = this._pktFailPrepToSend;
    }
    if (this._pktFailToSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktFailToSend = this._pktFailToSend;
    }
    if (this._prefragError !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefragError = this._prefragError;
    }
    if (this._prefragSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefragSuccess = this._prefragSuccess;
    }
    if (this._qatBytesDecrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.qatBytesDecrypted = this._qatBytesDecrypted;
    }
    if (this._qatBytesEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.qatBytesEncrypted = this._qatBytesEncrypted;
    }
    if (this._qatPacketsDecrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.qatPacketsDecrypted = this._qatPacketsDecrypted;
    }
    if (this._qatPacketsEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.qatPacketsEncrypted = this._qatPacketsEncrypted;
    }
    if (this._rekeyNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.rekeyNum = this._rekeyNum;
    }
    if (this._sequenceNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceNum = this._sequenceNum;
    }
    if (this._sequenceNumRollover !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceNumRollover = this._sequenceNumRollover;
    }
    if (this._tunnelIntfDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelIntfDown = this._tunnelIntfDown;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnIpsecStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._antiReplayNum = undefined;
      this._bytesDecrypted = undefined;
      this._bytesEncrypted = undefined;
      this._caviumBytesDecrypted = undefined;
      this._caviumBytesEncrypted = undefined;
      this._caviumPacketsDecrypted = undefined;
      this._caviumPacketsEncrypted = undefined;
      this._fragAfterEncapFragPackets = undefined;
      this._fragReceived = undefined;
      this._invalidTunnelId = undefined;
      this._noNextHop = undefined;
      this._noTunnelFound = undefined;
      this._packetsDecrypted = undefined;
      this._packetsEncrypted = undefined;
      this._packetsErrEncryption = undefined;
      this._packetsErrIcvCheck = undefined;
      this._packetsErrInactive = undefined;
      this._packetsErrLifetimeLifebytes = undefined;
      this._packetsErrNhCheck = undefined;
      this._packetsErrPadCheck = undefined;
      this._packetsErrPktSanity = undefined;
      this._pktFailPrepToSend = undefined;
      this._pktFailToSend = undefined;
      this._prefragError = undefined;
      this._prefragSuccess = undefined;
      this._qatBytesDecrypted = undefined;
      this._qatBytesEncrypted = undefined;
      this._qatPacketsDecrypted = undefined;
      this._qatPacketsEncrypted = undefined;
      this._rekeyNum = undefined;
      this._sequenceNum = undefined;
      this._sequenceNumRollover = undefined;
      this._tunnelIntfDown = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._antiReplayNum = value.antiReplayNum;
      this._bytesDecrypted = value.bytesDecrypted;
      this._bytesEncrypted = value.bytesEncrypted;
      this._caviumBytesDecrypted = value.caviumBytesDecrypted;
      this._caviumBytesEncrypted = value.caviumBytesEncrypted;
      this._caviumPacketsDecrypted = value.caviumPacketsDecrypted;
      this._caviumPacketsEncrypted = value.caviumPacketsEncrypted;
      this._fragAfterEncapFragPackets = value.fragAfterEncapFragPackets;
      this._fragReceived = value.fragReceived;
      this._invalidTunnelId = value.invalidTunnelId;
      this._noNextHop = value.noNextHop;
      this._noTunnelFound = value.noTunnelFound;
      this._packetsDecrypted = value.packetsDecrypted;
      this._packetsEncrypted = value.packetsEncrypted;
      this._packetsErrEncryption = value.packetsErrEncryption;
      this._packetsErrIcvCheck = value.packetsErrIcvCheck;
      this._packetsErrInactive = value.packetsErrInactive;
      this._packetsErrLifetimeLifebytes = value.packetsErrLifetimeLifebytes;
      this._packetsErrNhCheck = value.packetsErrNhCheck;
      this._packetsErrPadCheck = value.packetsErrPadCheck;
      this._packetsErrPktSanity = value.packetsErrPktSanity;
      this._pktFailPrepToSend = value.pktFailPrepToSend;
      this._pktFailToSend = value.pktFailToSend;
      this._prefragError = value.prefragError;
      this._prefragSuccess = value.prefragSuccess;
      this._qatBytesDecrypted = value.qatBytesDecrypted;
      this._qatBytesEncrypted = value.qatBytesEncrypted;
      this._qatPacketsDecrypted = value.qatPacketsDecrypted;
      this._qatPacketsEncrypted = value.qatPacketsEncrypted;
      this._rekeyNum = value.rekeyNum;
      this._sequenceNum = value.sequenceNum;
      this._sequenceNumRollover = value.sequenceNumRollover;
      this._tunnelIntfDown = value.tunnelIntfDown;
    }
  }

  // anti_replay_num - computed: false, optional: true, required: false
  private _antiReplayNum?: number; 
  public get antiReplayNum() {
    return this.getNumberAttribute('anti_replay_num');
  }
  public set antiReplayNum(value: number) {
    this._antiReplayNum = value;
  }
  public resetAntiReplayNum() {
    this._antiReplayNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiReplayNumInput() {
    return this._antiReplayNum;
  }

  // bytes_decrypted - computed: false, optional: true, required: false
  private _bytesDecrypted?: number; 
  public get bytesDecrypted() {
    return this.getNumberAttribute('bytes_decrypted');
  }
  public set bytesDecrypted(value: number) {
    this._bytesDecrypted = value;
  }
  public resetBytesDecrypted() {
    this._bytesDecrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesDecryptedInput() {
    return this._bytesDecrypted;
  }

  // bytes_encrypted - computed: false, optional: true, required: false
  private _bytesEncrypted?: number; 
  public get bytesEncrypted() {
    return this.getNumberAttribute('bytes_encrypted');
  }
  public set bytesEncrypted(value: number) {
    this._bytesEncrypted = value;
  }
  public resetBytesEncrypted() {
    this._bytesEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesEncryptedInput() {
    return this._bytesEncrypted;
  }

  // cavium_bytes_decrypted - computed: false, optional: true, required: false
  private _caviumBytesDecrypted?: number; 
  public get caviumBytesDecrypted() {
    return this.getNumberAttribute('cavium_bytes_decrypted');
  }
  public set caviumBytesDecrypted(value: number) {
    this._caviumBytesDecrypted = value;
  }
  public resetCaviumBytesDecrypted() {
    this._caviumBytesDecrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caviumBytesDecryptedInput() {
    return this._caviumBytesDecrypted;
  }

  // cavium_bytes_encrypted - computed: false, optional: true, required: false
  private _caviumBytesEncrypted?: number; 
  public get caviumBytesEncrypted() {
    return this.getNumberAttribute('cavium_bytes_encrypted');
  }
  public set caviumBytesEncrypted(value: number) {
    this._caviumBytesEncrypted = value;
  }
  public resetCaviumBytesEncrypted() {
    this._caviumBytesEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caviumBytesEncryptedInput() {
    return this._caviumBytesEncrypted;
  }

  // cavium_packets_decrypted - computed: false, optional: true, required: false
  private _caviumPacketsDecrypted?: number; 
  public get caviumPacketsDecrypted() {
    return this.getNumberAttribute('cavium_packets_decrypted');
  }
  public set caviumPacketsDecrypted(value: number) {
    this._caviumPacketsDecrypted = value;
  }
  public resetCaviumPacketsDecrypted() {
    this._caviumPacketsDecrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caviumPacketsDecryptedInput() {
    return this._caviumPacketsDecrypted;
  }

  // cavium_packets_encrypted - computed: false, optional: true, required: false
  private _caviumPacketsEncrypted?: number; 
  public get caviumPacketsEncrypted() {
    return this.getNumberAttribute('cavium_packets_encrypted');
  }
  public set caviumPacketsEncrypted(value: number) {
    this._caviumPacketsEncrypted = value;
  }
  public resetCaviumPacketsEncrypted() {
    this._caviumPacketsEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caviumPacketsEncryptedInput() {
    return this._caviumPacketsEncrypted;
  }

  // frag_after_encap_frag_packets - computed: false, optional: true, required: false
  private _fragAfterEncapFragPackets?: number; 
  public get fragAfterEncapFragPackets() {
    return this.getNumberAttribute('frag_after_encap_frag_packets');
  }
  public set fragAfterEncapFragPackets(value: number) {
    this._fragAfterEncapFragPackets = value;
  }
  public resetFragAfterEncapFragPackets() {
    this._fragAfterEncapFragPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragAfterEncapFragPacketsInput() {
    return this._fragAfterEncapFragPackets;
  }

  // frag_received - computed: false, optional: true, required: false
  private _fragReceived?: number; 
  public get fragReceived() {
    return this.getNumberAttribute('frag_received');
  }
  public set fragReceived(value: number) {
    this._fragReceived = value;
  }
  public resetFragReceived() {
    this._fragReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragReceivedInput() {
    return this._fragReceived;
  }

  // invalid_tunnel_id - computed: false, optional: true, required: false
  private _invalidTunnelId?: number; 
  public get invalidTunnelId() {
    return this.getNumberAttribute('invalid_tunnel_id');
  }
  public set invalidTunnelId(value: number) {
    this._invalidTunnelId = value;
  }
  public resetInvalidTunnelId() {
    this._invalidTunnelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidTunnelIdInput() {
    return this._invalidTunnelId;
  }

  // no_next_hop - computed: false, optional: true, required: false
  private _noNextHop?: number; 
  public get noNextHop() {
    return this.getNumberAttribute('no_next_hop');
  }
  public set noNextHop(value: number) {
    this._noNextHop = value;
  }
  public resetNoNextHop() {
    this._noNextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noNextHopInput() {
    return this._noNextHop;
  }

  // no_tunnel_found - computed: false, optional: true, required: false
  private _noTunnelFound?: number; 
  public get noTunnelFound() {
    return this.getNumberAttribute('no_tunnel_found');
  }
  public set noTunnelFound(value: number) {
    this._noTunnelFound = value;
  }
  public resetNoTunnelFound() {
    this._noTunnelFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noTunnelFoundInput() {
    return this._noTunnelFound;
  }

  // packets_decrypted - computed: false, optional: true, required: false
  private _packetsDecrypted?: number; 
  public get packetsDecrypted() {
    return this.getNumberAttribute('packets_decrypted');
  }
  public set packetsDecrypted(value: number) {
    this._packetsDecrypted = value;
  }
  public resetPacketsDecrypted() {
    this._packetsDecrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsDecryptedInput() {
    return this._packetsDecrypted;
  }

  // packets_encrypted - computed: false, optional: true, required: false
  private _packetsEncrypted?: number; 
  public get packetsEncrypted() {
    return this.getNumberAttribute('packets_encrypted');
  }
  public set packetsEncrypted(value: number) {
    this._packetsEncrypted = value;
  }
  public resetPacketsEncrypted() {
    this._packetsEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsEncryptedInput() {
    return this._packetsEncrypted;
  }

  // packets_err_encryption - computed: false, optional: true, required: false
  private _packetsErrEncryption?: number; 
  public get packetsErrEncryption() {
    return this.getNumberAttribute('packets_err_encryption');
  }
  public set packetsErrEncryption(value: number) {
    this._packetsErrEncryption = value;
  }
  public resetPacketsErrEncryption() {
    this._packetsErrEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsErrEncryptionInput() {
    return this._packetsErrEncryption;
  }

  // packets_err_icv_check - computed: false, optional: true, required: false
  private _packetsErrIcvCheck?: number; 
  public get packetsErrIcvCheck() {
    return this.getNumberAttribute('packets_err_icv_check');
  }
  public set packetsErrIcvCheck(value: number) {
    this._packetsErrIcvCheck = value;
  }
  public resetPacketsErrIcvCheck() {
    this._packetsErrIcvCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsErrIcvCheckInput() {
    return this._packetsErrIcvCheck;
  }

  // packets_err_inactive - computed: false, optional: true, required: false
  private _packetsErrInactive?: number; 
  public get packetsErrInactive() {
    return this.getNumberAttribute('packets_err_inactive');
  }
  public set packetsErrInactive(value: number) {
    this._packetsErrInactive = value;
  }
  public resetPacketsErrInactive() {
    this._packetsErrInactive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsErrInactiveInput() {
    return this._packetsErrInactive;
  }

  // packets_err_lifetime_lifebytes - computed: false, optional: true, required: false
  private _packetsErrLifetimeLifebytes?: number; 
  public get packetsErrLifetimeLifebytes() {
    return this.getNumberAttribute('packets_err_lifetime_lifebytes');
  }
  public set packetsErrLifetimeLifebytes(value: number) {
    this._packetsErrLifetimeLifebytes = value;
  }
  public resetPacketsErrLifetimeLifebytes() {
    this._packetsErrLifetimeLifebytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsErrLifetimeLifebytesInput() {
    return this._packetsErrLifetimeLifebytes;
  }

  // packets_err_nh_check - computed: false, optional: true, required: false
  private _packetsErrNhCheck?: number; 
  public get packetsErrNhCheck() {
    return this.getNumberAttribute('packets_err_nh_check');
  }
  public set packetsErrNhCheck(value: number) {
    this._packetsErrNhCheck = value;
  }
  public resetPacketsErrNhCheck() {
    this._packetsErrNhCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsErrNhCheckInput() {
    return this._packetsErrNhCheck;
  }

  // packets_err_pad_check - computed: false, optional: true, required: false
  private _packetsErrPadCheck?: number; 
  public get packetsErrPadCheck() {
    return this.getNumberAttribute('packets_err_pad_check');
  }
  public set packetsErrPadCheck(value: number) {
    this._packetsErrPadCheck = value;
  }
  public resetPacketsErrPadCheck() {
    this._packetsErrPadCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsErrPadCheckInput() {
    return this._packetsErrPadCheck;
  }

  // packets_err_pkt_sanity - computed: false, optional: true, required: false
  private _packetsErrPktSanity?: number; 
  public get packetsErrPktSanity() {
    return this.getNumberAttribute('packets_err_pkt_sanity');
  }
  public set packetsErrPktSanity(value: number) {
    this._packetsErrPktSanity = value;
  }
  public resetPacketsErrPktSanity() {
    this._packetsErrPktSanity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsErrPktSanityInput() {
    return this._packetsErrPktSanity;
  }

  // pkt_fail_prep_to_send - computed: false, optional: true, required: false
  private _pktFailPrepToSend?: number; 
  public get pktFailPrepToSend() {
    return this.getNumberAttribute('pkt_fail_prep_to_send');
  }
  public set pktFailPrepToSend(value: number) {
    this._pktFailPrepToSend = value;
  }
  public resetPktFailPrepToSend() {
    this._pktFailPrepToSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktFailPrepToSendInput() {
    return this._pktFailPrepToSend;
  }

  // pkt_fail_to_send - computed: false, optional: true, required: false
  private _pktFailToSend?: number; 
  public get pktFailToSend() {
    return this.getNumberAttribute('pkt_fail_to_send');
  }
  public set pktFailToSend(value: number) {
    this._pktFailToSend = value;
  }
  public resetPktFailToSend() {
    this._pktFailToSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktFailToSendInput() {
    return this._pktFailToSend;
  }

  // prefrag_error - computed: false, optional: true, required: false
  private _prefragError?: number; 
  public get prefragError() {
    return this.getNumberAttribute('prefrag_error');
  }
  public set prefragError(value: number) {
    this._prefragError = value;
  }
  public resetPrefragError() {
    this._prefragError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefragErrorInput() {
    return this._prefragError;
  }

  // prefrag_success - computed: false, optional: true, required: false
  private _prefragSuccess?: number; 
  public get prefragSuccess() {
    return this.getNumberAttribute('prefrag_success');
  }
  public set prefragSuccess(value: number) {
    this._prefragSuccess = value;
  }
  public resetPrefragSuccess() {
    this._prefragSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefragSuccessInput() {
    return this._prefragSuccess;
  }

  // qat_bytes_decrypted - computed: false, optional: true, required: false
  private _qatBytesDecrypted?: number; 
  public get qatBytesDecrypted() {
    return this.getNumberAttribute('qat_bytes_decrypted');
  }
  public set qatBytesDecrypted(value: number) {
    this._qatBytesDecrypted = value;
  }
  public resetQatBytesDecrypted() {
    this._qatBytesDecrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qatBytesDecryptedInput() {
    return this._qatBytesDecrypted;
  }

  // qat_bytes_encrypted - computed: false, optional: true, required: false
  private _qatBytesEncrypted?: number; 
  public get qatBytesEncrypted() {
    return this.getNumberAttribute('qat_bytes_encrypted');
  }
  public set qatBytesEncrypted(value: number) {
    this._qatBytesEncrypted = value;
  }
  public resetQatBytesEncrypted() {
    this._qatBytesEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qatBytesEncryptedInput() {
    return this._qatBytesEncrypted;
  }

  // qat_packets_decrypted - computed: false, optional: true, required: false
  private _qatPacketsDecrypted?: number; 
  public get qatPacketsDecrypted() {
    return this.getNumberAttribute('qat_packets_decrypted');
  }
  public set qatPacketsDecrypted(value: number) {
    this._qatPacketsDecrypted = value;
  }
  public resetQatPacketsDecrypted() {
    this._qatPacketsDecrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qatPacketsDecryptedInput() {
    return this._qatPacketsDecrypted;
  }

  // qat_packets_encrypted - computed: false, optional: true, required: false
  private _qatPacketsEncrypted?: number; 
  public get qatPacketsEncrypted() {
    return this.getNumberAttribute('qat_packets_encrypted');
  }
  public set qatPacketsEncrypted(value: number) {
    this._qatPacketsEncrypted = value;
  }
  public resetQatPacketsEncrypted() {
    this._qatPacketsEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qatPacketsEncryptedInput() {
    return this._qatPacketsEncrypted;
  }

  // rekey_num - computed: false, optional: true, required: false
  private _rekeyNum?: number; 
  public get rekeyNum() {
    return this.getNumberAttribute('rekey_num');
  }
  public set rekeyNum(value: number) {
    this._rekeyNum = value;
  }
  public resetRekeyNum() {
    this._rekeyNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rekeyNumInput() {
    return this._rekeyNum;
  }

  // sequence_num - computed: false, optional: true, required: false
  private _sequenceNum?: number; 
  public get sequenceNum() {
    return this.getNumberAttribute('sequence_num');
  }
  public set sequenceNum(value: number) {
    this._sequenceNum = value;
  }
  public resetSequenceNum() {
    this._sequenceNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumInput() {
    return this._sequenceNum;
  }

  // sequence_num_rollover - computed: false, optional: true, required: false
  private _sequenceNumRollover?: number; 
  public get sequenceNumRollover() {
    return this.getNumberAttribute('sequence_num_rollover');
  }
  public set sequenceNumRollover(value: number) {
    this._sequenceNumRollover = value;
  }
  public resetSequenceNumRollover() {
    this._sequenceNumRollover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumRolloverInput() {
    return this._sequenceNumRollover;
  }

  // tunnel_intf_down - computed: false, optional: true, required: false
  private _tunnelIntfDown?: number; 
  public get tunnelIntfDown() {
    return this.getNumberAttribute('tunnel_intf_down');
  }
  public set tunnelIntfDown(value: number) {
    this._tunnelIntfDown = value;
  }
  public resetTunnelIntfDown() {
    this._tunnelIntfDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelIntfDownInput() {
    return this._tunnelIntfDown;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_stats thunder_vpn_ipsec_stats}
*/
export class DataThunderVpnIpsecStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vpn_ipsec_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVpnIpsecStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVpnIpsecStats to import
  * @param importFromId The id of the existing DataThunderVpnIpsecStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVpnIpsecStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vpn_ipsec_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_stats thunder_vpn_ipsec_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVpnIpsecStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderVpnIpsecStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_vpn_ipsec_stats',
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
  private _stats = new DataThunderVpnIpsecStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderVpnIpsecStatsStats) {
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
      stats: dataThunderVpnIpsecStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderVpnIpsecStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVpnIpsecStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
