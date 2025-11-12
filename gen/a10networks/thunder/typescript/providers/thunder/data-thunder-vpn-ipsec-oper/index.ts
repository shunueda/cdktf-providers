// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVpnIpsecOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#id DataThunderVpnIpsecOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IPsec name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#name DataThunderVpnIpsecOper#name}
  */
  readonly name: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#oper DataThunderVpnIpsecOper#oper}
  */
  readonly oper?: DataThunderVpnIpsecOperOper;
}
export interface DataThunderVpnIpsecOperOperSaListPacketsErrLifetimeLifebytes {
}

export function dataThunderVpnIpsecOperOperSaListPacketsErrLifetimeLifebytesToTerraform(struct?: DataThunderVpnIpsecOperOperSaListPacketsErrLifetimeLifebytesOutputReference | DataThunderVpnIpsecOperOperSaListPacketsErrLifetimeLifebytes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataThunderVpnIpsecOperOperSaListPacketsErrLifetimeLifebytesToHclTerraform(struct?: DataThunderVpnIpsecOperOperSaListPacketsErrLifetimeLifebytesOutputReference | DataThunderVpnIpsecOperOperSaListPacketsErrLifetimeLifebytes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataThunderVpnIpsecOperOperSaListPacketsErrLifetimeLifebytesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnIpsecOperOperSaListPacketsErrLifetimeLifebytes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnIpsecOperOperSaListPacketsErrLifetimeLifebytes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataThunderVpnIpsecOperOperSaListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#anti_replay DataThunderVpnIpsecOper#anti_replay}
  */
  readonly antiReplay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#anti_replay_num DataThunderVpnIpsecOper#anti_replay_num}
  */
  readonly antiReplayNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#bytes_decrypted DataThunderVpnIpsecOper#bytes_decrypted}
  */
  readonly bytesDecrypted?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#bytes_encrypted DataThunderVpnIpsecOper#bytes_encrypted}
  */
  readonly bytesEncrypted?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#cavium_bytes_decrypted DataThunderVpnIpsecOper#cavium_bytes_decrypted}
  */
  readonly caviumBytesDecrypted?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#cavium_bytes_encrypted DataThunderVpnIpsecOper#cavium_bytes_encrypted}
  */
  readonly caviumBytesEncrypted?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#cavium_packets_decrypted DataThunderVpnIpsecOper#cavium_packets_decrypted}
  */
  readonly caviumPacketsDecrypted?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#cavium_packets_encrypted DataThunderVpnIpsecOper#cavium_packets_encrypted}
  */
  readonly caviumPacketsEncrypted?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#dh_group DataThunderVpnIpsecOper#dh_group}
  */
  readonly dhGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#encryption_algorithm DataThunderVpnIpsecOper#encryption_algorithm}
  */
  readonly encryptionAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#enforce_ts_decap_drop DataThunderVpnIpsecOper#enforce_ts_decap_drop}
  */
  readonly enforceTsDecapDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#enforce_ts_encap_drop DataThunderVpnIpsecOper#enforce_ts_encap_drop}
  */
  readonly enforceTsEncapDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#frag_after_encap_frag_packets DataThunderVpnIpsecOper#frag_after_encap_frag_packets}
  */
  readonly fragAfterEncapFragPackets?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#frag_received DataThunderVpnIpsecOper#frag_received}
  */
  readonly fragReceived?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#hash_algorithm DataThunderVpnIpsecOper#hash_algorithm}
  */
  readonly hashAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#invalid_tunnel_id DataThunderVpnIpsecOper#invalid_tunnel_id}
  */
  readonly invalidTunnelId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#lifebytes DataThunderVpnIpsecOper#lifebytes}
  */
  readonly lifebytes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#lifetime DataThunderVpnIpsecOper#lifetime}
  */
  readonly lifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#local_ip DataThunderVpnIpsecOper#local_ip}
  */
  readonly localIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#local_port DataThunderVpnIpsecOper#local_port}
  */
  readonly localPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#local_spi DataThunderVpnIpsecOper#local_spi}
  */
  readonly localSpi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#mode DataThunderVpnIpsecOper#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#nat_traversal DataThunderVpnIpsecOper#nat_traversal}
  */
  readonly natTraversal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#no_next_hop DataThunderVpnIpsecOper#no_next_hop}
  */
  readonly noNextHop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#no_tunnel_found DataThunderVpnIpsecOper#no_tunnel_found}
  */
  readonly noTunnelFound?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#packets_decrypted DataThunderVpnIpsecOper#packets_decrypted}
  */
  readonly packetsDecrypted?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#packets_encrypted DataThunderVpnIpsecOper#packets_encrypted}
  */
  readonly packetsEncrypted?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#packets_err_encryption DataThunderVpnIpsecOper#packets_err_encryption}
  */
  readonly packetsErrEncryption?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#packets_err_icv_check DataThunderVpnIpsecOper#packets_err_icv_check}
  */
  readonly packetsErrIcvCheck?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#packets_err_inactive DataThunderVpnIpsecOper#packets_err_inactive}
  */
  readonly packetsErrInactive?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#packets_err_nh_check DataThunderVpnIpsecOper#packets_err_nh_check}
  */
  readonly packetsErrNhCheck?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#packets_err_pad_check DataThunderVpnIpsecOper#packets_err_pad_check}
  */
  readonly packetsErrPadCheck?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#packets_err_pkt_sanity DataThunderVpnIpsecOper#packets_err_pkt_sanity}
  */
  readonly packetsErrPktSanity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#peer_ip DataThunderVpnIpsecOper#peer_ip}
  */
  readonly peerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#peer_port DataThunderVpnIpsecOper#peer_port}
  */
  readonly peerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#pkt_fail_prep_to_send DataThunderVpnIpsecOper#pkt_fail_prep_to_send}
  */
  readonly pktFailPrepToSend?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#pkt_fail_to_send DataThunderVpnIpsecOper#pkt_fail_to_send}
  */
  readonly pktFailToSend?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#prefrag_error DataThunderVpnIpsecOper#prefrag_error}
  */
  readonly prefragError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#prefrag_success DataThunderVpnIpsecOper#prefrag_success}
  */
  readonly prefragSuccess?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#protocol DataThunderVpnIpsecOper#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#qat_bytes_decrypted DataThunderVpnIpsecOper#qat_bytes_decrypted}
  */
  readonly qatBytesDecrypted?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#qat_bytes_encrypted DataThunderVpnIpsecOper#qat_bytes_encrypted}
  */
  readonly qatBytesEncrypted?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#qat_packets_decrypted DataThunderVpnIpsecOper#qat_packets_decrypted}
  */
  readonly qatPacketsDecrypted?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#qat_packets_encrypted DataThunderVpnIpsecOper#qat_packets_encrypted}
  */
  readonly qatPacketsEncrypted?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#rekey_num DataThunderVpnIpsecOper#rekey_num}
  */
  readonly rekeyNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#remote_spi DataThunderVpnIpsecOper#remote_spi}
  */
  readonly remoteSpi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#sa_index DataThunderVpnIpsecOper#sa_index}
  */
  readonly saIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#sequence_num DataThunderVpnIpsecOper#sequence_num}
  */
  readonly sequenceNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#sequence_num_rollover DataThunderVpnIpsecOper#sequence_num_rollover}
  */
  readonly sequenceNumRollover?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#status DataThunderVpnIpsecOper#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#ts_proto DataThunderVpnIpsecOper#ts_proto}
  */
  readonly tsProto?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#tunnel_intf_down DataThunderVpnIpsecOper#tunnel_intf_down}
  */
  readonly tunnelIntfDown?: number;
  /**
  * packets_err_lifetime_lifebytes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#packets_err_lifetime_lifebytes DataThunderVpnIpsecOper#packets_err_lifetime_lifebytes}
  */
  readonly packetsErrLifetimeLifebytes?: DataThunderVpnIpsecOperOperSaListPacketsErrLifetimeLifebytes;
}

export function dataThunderVpnIpsecOperOperSaListStructToTerraform(struct?: DataThunderVpnIpsecOperOperSaListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anti_replay: cdktf.stringToTerraform(struct!.antiReplay),
    anti_replay_num: cdktf.numberToTerraform(struct!.antiReplayNum),
    bytes_decrypted: cdktf.numberToTerraform(struct!.bytesDecrypted),
    bytes_encrypted: cdktf.numberToTerraform(struct!.bytesEncrypted),
    cavium_bytes_decrypted: cdktf.numberToTerraform(struct!.caviumBytesDecrypted),
    cavium_bytes_encrypted: cdktf.numberToTerraform(struct!.caviumBytesEncrypted),
    cavium_packets_decrypted: cdktf.numberToTerraform(struct!.caviumPacketsDecrypted),
    cavium_packets_encrypted: cdktf.numberToTerraform(struct!.caviumPacketsEncrypted),
    dh_group: cdktf.numberToTerraform(struct!.dhGroup),
    encryption_algorithm: cdktf.stringToTerraform(struct!.encryptionAlgorithm),
    enforce_ts_decap_drop: cdktf.numberToTerraform(struct!.enforceTsDecapDrop),
    enforce_ts_encap_drop: cdktf.numberToTerraform(struct!.enforceTsEncapDrop),
    frag_after_encap_frag_packets: cdktf.numberToTerraform(struct!.fragAfterEncapFragPackets),
    frag_received: cdktf.numberToTerraform(struct!.fragReceived),
    hash_algorithm: cdktf.stringToTerraform(struct!.hashAlgorithm),
    invalid_tunnel_id: cdktf.numberToTerraform(struct!.invalidTunnelId),
    lifebytes: cdktf.stringToTerraform(struct!.lifebytes),
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    local_ip: cdktf.stringToTerraform(struct!.localIp),
    local_port: cdktf.numberToTerraform(struct!.localPort),
    local_spi: cdktf.stringToTerraform(struct!.localSpi),
    mode: cdktf.stringToTerraform(struct!.mode),
    nat_traversal: cdktf.numberToTerraform(struct!.natTraversal),
    no_next_hop: cdktf.numberToTerraform(struct!.noNextHop),
    no_tunnel_found: cdktf.numberToTerraform(struct!.noTunnelFound),
    packets_decrypted: cdktf.numberToTerraform(struct!.packetsDecrypted),
    packets_encrypted: cdktf.numberToTerraform(struct!.packetsEncrypted),
    packets_err_encryption: cdktf.numberToTerraform(struct!.packetsErrEncryption),
    packets_err_icv_check: cdktf.numberToTerraform(struct!.packetsErrIcvCheck),
    packets_err_inactive: cdktf.numberToTerraform(struct!.packetsErrInactive),
    packets_err_nh_check: cdktf.numberToTerraform(struct!.packetsErrNhCheck),
    packets_err_pad_check: cdktf.numberToTerraform(struct!.packetsErrPadCheck),
    packets_err_pkt_sanity: cdktf.numberToTerraform(struct!.packetsErrPktSanity),
    peer_ip: cdktf.stringToTerraform(struct!.peerIp),
    peer_port: cdktf.numberToTerraform(struct!.peerPort),
    pkt_fail_prep_to_send: cdktf.numberToTerraform(struct!.pktFailPrepToSend),
    pkt_fail_to_send: cdktf.numberToTerraform(struct!.pktFailToSend),
    prefrag_error: cdktf.numberToTerraform(struct!.prefragError),
    prefrag_success: cdktf.numberToTerraform(struct!.prefragSuccess),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    qat_bytes_decrypted: cdktf.numberToTerraform(struct!.qatBytesDecrypted),
    qat_bytes_encrypted: cdktf.numberToTerraform(struct!.qatBytesEncrypted),
    qat_packets_decrypted: cdktf.numberToTerraform(struct!.qatPacketsDecrypted),
    qat_packets_encrypted: cdktf.numberToTerraform(struct!.qatPacketsEncrypted),
    rekey_num: cdktf.numberToTerraform(struct!.rekeyNum),
    remote_spi: cdktf.stringToTerraform(struct!.remoteSpi),
    sa_index: cdktf.numberToTerraform(struct!.saIndex),
    sequence_num: cdktf.numberToTerraform(struct!.sequenceNum),
    sequence_num_rollover: cdktf.numberToTerraform(struct!.sequenceNumRollover),
    status: cdktf.stringToTerraform(struct!.status),
    ts_proto: cdktf.numberToTerraform(struct!.tsProto),
    tunnel_intf_down: cdktf.numberToTerraform(struct!.tunnelIntfDown),
    packets_err_lifetime_lifebytes: dataThunderVpnIpsecOperOperSaListPacketsErrLifetimeLifebytesToTerraform(struct!.packetsErrLifetimeLifebytes),
  }
}


export function dataThunderVpnIpsecOperOperSaListStructToHclTerraform(struct?: DataThunderVpnIpsecOperOperSaListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anti_replay: {
      value: cdktf.stringToHclTerraform(struct!.antiReplay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    dh_group: {
      value: cdktf.numberToHclTerraform(struct!.dhGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    encryption_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.encryptionAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enforce_ts_decap_drop: {
      value: cdktf.numberToHclTerraform(struct!.enforceTsDecapDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enforce_ts_encap_drop: {
      value: cdktf.numberToHclTerraform(struct!.enforceTsEncapDrop),
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
    hash_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.hashAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invalid_tunnel_id: {
      value: cdktf.numberToHclTerraform(struct!.invalidTunnelId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lifebytes: {
      value: cdktf.stringToHclTerraform(struct!.lifebytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifetime: {
      value: cdktf.numberToHclTerraform(struct!.lifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_ip: {
      value: cdktf.stringToHclTerraform(struct!.localIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_port: {
      value: cdktf.numberToHclTerraform(struct!.localPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_spi: {
      value: cdktf.stringToHclTerraform(struct!.localSpi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_traversal: {
      value: cdktf.numberToHclTerraform(struct!.natTraversal),
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
    peer_ip: {
      value: cdktf.stringToHclTerraform(struct!.peerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_port: {
      value: cdktf.numberToHclTerraform(struct!.peerPort),
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
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    remote_spi: {
      value: cdktf.stringToHclTerraform(struct!.remoteSpi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sa_index: {
      value: cdktf.numberToHclTerraform(struct!.saIndex),
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
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ts_proto: {
      value: cdktf.numberToHclTerraform(struct!.tsProto),
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
    packets_err_lifetime_lifebytes: {
      value: dataThunderVpnIpsecOperOperSaListPacketsErrLifetimeLifebytesToHclTerraform(struct!.packetsErrLifetimeLifebytes),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnIpsecOperOperSaListPacketsErrLifetimeLifebytesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnIpsecOperOperSaListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVpnIpsecOperOperSaListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._antiReplay !== undefined) {
      hasAnyValues = true;
      internalValueResult.antiReplay = this._antiReplay;
    }
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
    if (this._dhGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhGroup = this._dhGroup;
    }
    if (this._encryptionAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionAlgorithm = this._encryptionAlgorithm;
    }
    if (this._enforceTsDecapDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceTsDecapDrop = this._enforceTsDecapDrop;
    }
    if (this._enforceTsEncapDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceTsEncapDrop = this._enforceTsEncapDrop;
    }
    if (this._fragAfterEncapFragPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragAfterEncapFragPackets = this._fragAfterEncapFragPackets;
    }
    if (this._fragReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragReceived = this._fragReceived;
    }
    if (this._hashAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashAlgorithm = this._hashAlgorithm;
    }
    if (this._invalidTunnelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidTunnelId = this._invalidTunnelId;
    }
    if (this._lifebytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifebytes = this._lifebytes;
    }
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    if (this._localIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.localIp = this._localIp;
    }
    if (this._localPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPort = this._localPort;
    }
    if (this._localSpi !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSpi = this._localSpi;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._natTraversal !== undefined) {
      hasAnyValues = true;
      internalValueResult.natTraversal = this._natTraversal;
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
    if (this._peerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerIp = this._peerIp;
    }
    if (this._peerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerPort = this._peerPort;
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
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
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
    if (this._remoteSpi !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteSpi = this._remoteSpi;
    }
    if (this._saIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.saIndex = this._saIndex;
    }
    if (this._sequenceNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceNum = this._sequenceNum;
    }
    if (this._sequenceNumRollover !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceNumRollover = this._sequenceNumRollover;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._tsProto !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsProto = this._tsProto;
    }
    if (this._tunnelIntfDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelIntfDown = this._tunnelIntfDown;
    }
    if (this._packetsErrLifetimeLifebytes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsErrLifetimeLifebytes = this._packetsErrLifetimeLifebytes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnIpsecOperOperSaListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._antiReplay = undefined;
      this._antiReplayNum = undefined;
      this._bytesDecrypted = undefined;
      this._bytesEncrypted = undefined;
      this._caviumBytesDecrypted = undefined;
      this._caviumBytesEncrypted = undefined;
      this._caviumPacketsDecrypted = undefined;
      this._caviumPacketsEncrypted = undefined;
      this._dhGroup = undefined;
      this._encryptionAlgorithm = undefined;
      this._enforceTsDecapDrop = undefined;
      this._enforceTsEncapDrop = undefined;
      this._fragAfterEncapFragPackets = undefined;
      this._fragReceived = undefined;
      this._hashAlgorithm = undefined;
      this._invalidTunnelId = undefined;
      this._lifebytes = undefined;
      this._lifetime = undefined;
      this._localIp = undefined;
      this._localPort = undefined;
      this._localSpi = undefined;
      this._mode = undefined;
      this._natTraversal = undefined;
      this._noNextHop = undefined;
      this._noTunnelFound = undefined;
      this._packetsDecrypted = undefined;
      this._packetsEncrypted = undefined;
      this._packetsErrEncryption = undefined;
      this._packetsErrIcvCheck = undefined;
      this._packetsErrInactive = undefined;
      this._packetsErrNhCheck = undefined;
      this._packetsErrPadCheck = undefined;
      this._packetsErrPktSanity = undefined;
      this._peerIp = undefined;
      this._peerPort = undefined;
      this._pktFailPrepToSend = undefined;
      this._pktFailToSend = undefined;
      this._prefragError = undefined;
      this._prefragSuccess = undefined;
      this._protocol = undefined;
      this._qatBytesDecrypted = undefined;
      this._qatBytesEncrypted = undefined;
      this._qatPacketsDecrypted = undefined;
      this._qatPacketsEncrypted = undefined;
      this._rekeyNum = undefined;
      this._remoteSpi = undefined;
      this._saIndex = undefined;
      this._sequenceNum = undefined;
      this._sequenceNumRollover = undefined;
      this._status = undefined;
      this._tsProto = undefined;
      this._tunnelIntfDown = undefined;
      this._packetsErrLifetimeLifebytes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._antiReplay = value.antiReplay;
      this._antiReplayNum = value.antiReplayNum;
      this._bytesDecrypted = value.bytesDecrypted;
      this._bytesEncrypted = value.bytesEncrypted;
      this._caviumBytesDecrypted = value.caviumBytesDecrypted;
      this._caviumBytesEncrypted = value.caviumBytesEncrypted;
      this._caviumPacketsDecrypted = value.caviumPacketsDecrypted;
      this._caviumPacketsEncrypted = value.caviumPacketsEncrypted;
      this._dhGroup = value.dhGroup;
      this._encryptionAlgorithm = value.encryptionAlgorithm;
      this._enforceTsDecapDrop = value.enforceTsDecapDrop;
      this._enforceTsEncapDrop = value.enforceTsEncapDrop;
      this._fragAfterEncapFragPackets = value.fragAfterEncapFragPackets;
      this._fragReceived = value.fragReceived;
      this._hashAlgorithm = value.hashAlgorithm;
      this._invalidTunnelId = value.invalidTunnelId;
      this._lifebytes = value.lifebytes;
      this._lifetime = value.lifetime;
      this._localIp = value.localIp;
      this._localPort = value.localPort;
      this._localSpi = value.localSpi;
      this._mode = value.mode;
      this._natTraversal = value.natTraversal;
      this._noNextHop = value.noNextHop;
      this._noTunnelFound = value.noTunnelFound;
      this._packetsDecrypted = value.packetsDecrypted;
      this._packetsEncrypted = value.packetsEncrypted;
      this._packetsErrEncryption = value.packetsErrEncryption;
      this._packetsErrIcvCheck = value.packetsErrIcvCheck;
      this._packetsErrInactive = value.packetsErrInactive;
      this._packetsErrNhCheck = value.packetsErrNhCheck;
      this._packetsErrPadCheck = value.packetsErrPadCheck;
      this._packetsErrPktSanity = value.packetsErrPktSanity;
      this._peerIp = value.peerIp;
      this._peerPort = value.peerPort;
      this._pktFailPrepToSend = value.pktFailPrepToSend;
      this._pktFailToSend = value.pktFailToSend;
      this._prefragError = value.prefragError;
      this._prefragSuccess = value.prefragSuccess;
      this._protocol = value.protocol;
      this._qatBytesDecrypted = value.qatBytesDecrypted;
      this._qatBytesEncrypted = value.qatBytesEncrypted;
      this._qatPacketsDecrypted = value.qatPacketsDecrypted;
      this._qatPacketsEncrypted = value.qatPacketsEncrypted;
      this._rekeyNum = value.rekeyNum;
      this._remoteSpi = value.remoteSpi;
      this._saIndex = value.saIndex;
      this._sequenceNum = value.sequenceNum;
      this._sequenceNumRollover = value.sequenceNumRollover;
      this._status = value.status;
      this._tsProto = value.tsProto;
      this._tunnelIntfDown = value.tunnelIntfDown;
      this._packetsErrLifetimeLifebytes.internalValue = value.packetsErrLifetimeLifebytes;
    }
  }

  // anti_replay - computed: false, optional: true, required: false
  private _antiReplay?: string; 
  public get antiReplay() {
    return this.getStringAttribute('anti_replay');
  }
  public set antiReplay(value: string) {
    this._antiReplay = value;
  }
  public resetAntiReplay() {
    this._antiReplay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiReplayInput() {
    return this._antiReplay;
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

  // dh_group - computed: false, optional: true, required: false
  private _dhGroup?: number; 
  public get dhGroup() {
    return this.getNumberAttribute('dh_group');
  }
  public set dhGroup(value: number) {
    this._dhGroup = value;
  }
  public resetDhGroup() {
    this._dhGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhGroupInput() {
    return this._dhGroup;
  }

  // encryption_algorithm - computed: false, optional: true, required: false
  private _encryptionAlgorithm?: string; 
  public get encryptionAlgorithm() {
    return this.getStringAttribute('encryption_algorithm');
  }
  public set encryptionAlgorithm(value: string) {
    this._encryptionAlgorithm = value;
  }
  public resetEncryptionAlgorithm() {
    this._encryptionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAlgorithmInput() {
    return this._encryptionAlgorithm;
  }

  // enforce_ts_decap_drop - computed: false, optional: true, required: false
  private _enforceTsDecapDrop?: number; 
  public get enforceTsDecapDrop() {
    return this.getNumberAttribute('enforce_ts_decap_drop');
  }
  public set enforceTsDecapDrop(value: number) {
    this._enforceTsDecapDrop = value;
  }
  public resetEnforceTsDecapDrop() {
    this._enforceTsDecapDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceTsDecapDropInput() {
    return this._enforceTsDecapDrop;
  }

  // enforce_ts_encap_drop - computed: false, optional: true, required: false
  private _enforceTsEncapDrop?: number; 
  public get enforceTsEncapDrop() {
    return this.getNumberAttribute('enforce_ts_encap_drop');
  }
  public set enforceTsEncapDrop(value: number) {
    this._enforceTsEncapDrop = value;
  }
  public resetEnforceTsEncapDrop() {
    this._enforceTsEncapDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceTsEncapDropInput() {
    return this._enforceTsEncapDrop;
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

  // hash_algorithm - computed: false, optional: true, required: false
  private _hashAlgorithm?: string; 
  public get hashAlgorithm() {
    return this.getStringAttribute('hash_algorithm');
  }
  public set hashAlgorithm(value: string) {
    this._hashAlgorithm = value;
  }
  public resetHashAlgorithm() {
    this._hashAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashAlgorithmInput() {
    return this._hashAlgorithm;
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

  // lifebytes - computed: false, optional: true, required: false
  private _lifebytes?: string; 
  public get lifebytes() {
    return this.getStringAttribute('lifebytes');
  }
  public set lifebytes(value: string) {
    this._lifebytes = value;
  }
  public resetLifebytes() {
    this._lifebytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifebytesInput() {
    return this._lifebytes;
  }

  // lifetime - computed: false, optional: true, required: false
  private _lifetime?: number; 
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }
  public set lifetime(value: number) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
  }

  // local_ip - computed: false, optional: true, required: false
  private _localIp?: string; 
  public get localIp() {
    return this.getStringAttribute('local_ip');
  }
  public set localIp(value: string) {
    this._localIp = value;
  }
  public resetLocalIp() {
    this._localIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpInput() {
    return this._localIp;
  }

  // local_port - computed: false, optional: true, required: false
  private _localPort?: number; 
  public get localPort() {
    return this.getNumberAttribute('local_port');
  }
  public set localPort(value: number) {
    this._localPort = value;
  }
  public resetLocalPort() {
    this._localPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPortInput() {
    return this._localPort;
  }

  // local_spi - computed: false, optional: true, required: false
  private _localSpi?: string; 
  public get localSpi() {
    return this.getStringAttribute('local_spi');
  }
  public set localSpi(value: string) {
    this._localSpi = value;
  }
  public resetLocalSpi() {
    this._localSpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSpiInput() {
    return this._localSpi;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // nat_traversal - computed: false, optional: true, required: false
  private _natTraversal?: number; 
  public get natTraversal() {
    return this.getNumberAttribute('nat_traversal');
  }
  public set natTraversal(value: number) {
    this._natTraversal = value;
  }
  public resetNatTraversal() {
    this._natTraversal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natTraversalInput() {
    return this._natTraversal;
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

  // peer_ip - computed: false, optional: true, required: false
  private _peerIp?: string; 
  public get peerIp() {
    return this.getStringAttribute('peer_ip');
  }
  public set peerIp(value: string) {
    this._peerIp = value;
  }
  public resetPeerIp() {
    this._peerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIpInput() {
    return this._peerIp;
  }

  // peer_port - computed: false, optional: true, required: false
  private _peerPort?: number; 
  public get peerPort() {
    return this.getNumberAttribute('peer_port');
  }
  public set peerPort(value: number) {
    this._peerPort = value;
  }
  public resetPeerPort() {
    this._peerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerPortInput() {
    return this._peerPort;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
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

  // remote_spi - computed: false, optional: true, required: false
  private _remoteSpi?: string; 
  public get remoteSpi() {
    return this.getStringAttribute('remote_spi');
  }
  public set remoteSpi(value: string) {
    this._remoteSpi = value;
  }
  public resetRemoteSpi() {
    this._remoteSpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteSpiInput() {
    return this._remoteSpi;
  }

  // sa_index - computed: false, optional: true, required: false
  private _saIndex?: number; 
  public get saIndex() {
    return this.getNumberAttribute('sa_index');
  }
  public set saIndex(value: number) {
    this._saIndex = value;
  }
  public resetSaIndex() {
    this._saIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saIndexInput() {
    return this._saIndex;
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

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // ts_proto - computed: false, optional: true, required: false
  private _tsProto?: number; 
  public get tsProto() {
    return this.getNumberAttribute('ts_proto');
  }
  public set tsProto(value: number) {
    this._tsProto = value;
  }
  public resetTsProto() {
    this._tsProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsProtoInput() {
    return this._tsProto;
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

  // packets_err_lifetime_lifebytes - computed: false, optional: true, required: false
  private _packetsErrLifetimeLifebytes = new DataThunderVpnIpsecOperOperSaListPacketsErrLifetimeLifebytesOutputReference(this, "packets_err_lifetime_lifebytes");
  public get packetsErrLifetimeLifebytes() {
    return this._packetsErrLifetimeLifebytes;
  }
  public putPacketsErrLifetimeLifebytes(value: DataThunderVpnIpsecOperOperSaListPacketsErrLifetimeLifebytes) {
    this._packetsErrLifetimeLifebytes.internalValue = value;
  }
  public resetPacketsErrLifetimeLifebytes() {
    this._packetsErrLifetimeLifebytes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsErrLifetimeLifebytesInput() {
    return this._packetsErrLifetimeLifebytes.internalValue;
  }
}

export class DataThunderVpnIpsecOperOperSaListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVpnIpsecOperOperSaListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVpnIpsecOperOperSaListStructOutputReference {
    return new DataThunderVpnIpsecOperOperSaListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVpnIpsecOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#in_spi_filter DataThunderVpnIpsecOper#in_spi_filter}
  */
  readonly inSpiFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#out_spi_filter DataThunderVpnIpsecOper#out_spi_filter}
  */
  readonly outSpiFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#remote_ts_filter DataThunderVpnIpsecOper#remote_ts_filter}
  */
  readonly remoteTsFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#remote_ts_v6_filter DataThunderVpnIpsecOper#remote_ts_v6_filter}
  */
  readonly remoteTsV6Filter?: string;
  /**
  * sa_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#sa_list DataThunderVpnIpsecOper#sa_list}
  */
  readonly saList?: DataThunderVpnIpsecOperOperSaListStruct[] | cdktf.IResolvable;
}

export function dataThunderVpnIpsecOperOperToTerraform(struct?: DataThunderVpnIpsecOperOperOutputReference | DataThunderVpnIpsecOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    in_spi_filter: cdktf.stringToTerraform(struct!.inSpiFilter),
    out_spi_filter: cdktf.stringToTerraform(struct!.outSpiFilter),
    remote_ts_filter: cdktf.stringToTerraform(struct!.remoteTsFilter),
    remote_ts_v6_filter: cdktf.stringToTerraform(struct!.remoteTsV6Filter),
    sa_list: cdktf.listMapper(dataThunderVpnIpsecOperOperSaListStructToTerraform, true)(struct!.saList),
  }
}


export function dataThunderVpnIpsecOperOperToHclTerraform(struct?: DataThunderVpnIpsecOperOperOutputReference | DataThunderVpnIpsecOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    in_spi_filter: {
      value: cdktf.stringToHclTerraform(struct!.inSpiFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    out_spi_filter: {
      value: cdktf.stringToHclTerraform(struct!.outSpiFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_ts_filter: {
      value: cdktf.stringToHclTerraform(struct!.remoteTsFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_ts_v6_filter: {
      value: cdktf.stringToHclTerraform(struct!.remoteTsV6Filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sa_list: {
      value: cdktf.listMapperHcl(dataThunderVpnIpsecOperOperSaListStructToHclTerraform, true)(struct!.saList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnIpsecOperOperSaListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnIpsecOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnIpsecOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inSpiFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.inSpiFilter = this._inSpiFilter;
    }
    if (this._outSpiFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.outSpiFilter = this._outSpiFilter;
    }
    if (this._remoteTsFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteTsFilter = this._remoteTsFilter;
    }
    if (this._remoteTsV6Filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteTsV6Filter = this._remoteTsV6Filter;
    }
    if (this._saList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.saList = this._saList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnIpsecOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inSpiFilter = undefined;
      this._outSpiFilter = undefined;
      this._remoteTsFilter = undefined;
      this._remoteTsV6Filter = undefined;
      this._saList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inSpiFilter = value.inSpiFilter;
      this._outSpiFilter = value.outSpiFilter;
      this._remoteTsFilter = value.remoteTsFilter;
      this._remoteTsV6Filter = value.remoteTsV6Filter;
      this._saList.internalValue = value.saList;
    }
  }

  // in_spi_filter - computed: false, optional: true, required: false
  private _inSpiFilter?: string; 
  public get inSpiFilter() {
    return this.getStringAttribute('in_spi_filter');
  }
  public set inSpiFilter(value: string) {
    this._inSpiFilter = value;
  }
  public resetInSpiFilter() {
    this._inSpiFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inSpiFilterInput() {
    return this._inSpiFilter;
  }

  // out_spi_filter - computed: false, optional: true, required: false
  private _outSpiFilter?: string; 
  public get outSpiFilter() {
    return this.getStringAttribute('out_spi_filter');
  }
  public set outSpiFilter(value: string) {
    this._outSpiFilter = value;
  }
  public resetOutSpiFilter() {
    this._outSpiFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outSpiFilterInput() {
    return this._outSpiFilter;
  }

  // remote_ts_filter - computed: false, optional: true, required: false
  private _remoteTsFilter?: string; 
  public get remoteTsFilter() {
    return this.getStringAttribute('remote_ts_filter');
  }
  public set remoteTsFilter(value: string) {
    this._remoteTsFilter = value;
  }
  public resetRemoteTsFilter() {
    this._remoteTsFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteTsFilterInput() {
    return this._remoteTsFilter;
  }

  // remote_ts_v6_filter - computed: false, optional: true, required: false
  private _remoteTsV6Filter?: string; 
  public get remoteTsV6Filter() {
    return this.getStringAttribute('remote_ts_v6_filter');
  }
  public set remoteTsV6Filter(value: string) {
    this._remoteTsV6Filter = value;
  }
  public resetRemoteTsV6Filter() {
    this._remoteTsV6Filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteTsV6FilterInput() {
    return this._remoteTsV6Filter;
  }

  // sa_list - computed: false, optional: true, required: false
  private _saList = new DataThunderVpnIpsecOperOperSaListStructList(this, "sa_list", false);
  public get saList() {
    return this._saList;
  }
  public putSaList(value: DataThunderVpnIpsecOperOperSaListStruct[] | cdktf.IResolvable) {
    this._saList.internalValue = value;
  }
  public resetSaList() {
    this._saList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saListInput() {
    return this._saList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper thunder_vpn_ipsec_oper}
*/
export class DataThunderVpnIpsecOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vpn_ipsec_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVpnIpsecOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVpnIpsecOper to import
  * @param importFromId The id of the existing DataThunderVpnIpsecOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVpnIpsecOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vpn_ipsec_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_oper thunder_vpn_ipsec_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVpnIpsecOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderVpnIpsecOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_vpn_ipsec_oper',
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
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderVpnIpsecOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVpnIpsecOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      oper: dataThunderVpnIpsecOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderVpnIpsecOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVpnIpsecOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
