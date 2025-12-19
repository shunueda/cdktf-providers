// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbQuicStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#id DataThunderSlbQuicStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#stats DataThunderSlbQuicStats#stats}
  */
  readonly stats?: DataThunderSlbQuicStatsStats;
}
export interface DataThunderSlbQuicStatsStats {
  /**
  * a10 socket closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#a10_socket_closed DataThunderSlbQuicStats#a10_socket_closed}
  */
  readonly a10SocketClosed?: number;
  /**
  * a10 socket created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#a10_socket_created DataThunderSlbQuicStats#a10_socket_created}
  */
  readonly a10SocketCreated?: number;
  /**
  * ack timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#ack_alarm DataThunderSlbQuicStats#ack_alarm}
  */
  readonly ackAlarm?: number;
  /**
  * Ack_delay_huge
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#ack_delay_huge DataThunderSlbQuicStats#ack_delay_huge}
  */
  readonly ackDelayHuge?: number;
  /**
  * ack enc frame receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#ack_ecn_frame_rx DataThunderSlbQuicStats#ack_ecn_frame_rx}
  */
  readonly ackEcnFrameRx?: number;
  /**
  * ack enc frame send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#ack_ecn_frame_tx DataThunderSlbQuicStats#ack_ecn_frame_tx}
  */
  readonly ackEcnFrameTx?: number;
  /**
  * ack frame receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#ack_frame_rx DataThunderSlbQuicStats#ack_frame_rx}
  */
  readonly ackFrameRx?: number;
  /**
  * ack frame send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#ack_frame_tx DataThunderSlbQuicStats#ack_frame_tx}
  */
  readonly ackFrameTx?: number;
  /**
  * Ack_rng_huge_1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#ack_rng_huge_1 DataThunderSlbQuicStats#ack_rng_huge_1}
  */
  readonly ackRngHuge1?: number;
  /**
  * Ack_rng_huge_2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#ack_rng_huge_2 DataThunderSlbQuicStats#ack_rng_huge_2}
  */
  readonly ackRngHuge2?: number;
  /**
  * Ack_rng_huge_3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#ack_rng_huge_3 DataThunderSlbQuicStats#ack_rng_huge_3}
  */
  readonly ackRngHuge3?: number;
  /**
  * Acked packet freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#acked_packet_freed DataThunderSlbQuicStats#acked_packet_freed}
  */
  readonly ackedPacketFreed?: number;
  /**
  * App buffer dequeued
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#app_buffer_deq DataThunderSlbQuicStats#app_buffer_deq}
  */
  readonly appBufferDeq?: number;
  /**
  * App buffer enqueued
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#app_buffer_enq DataThunderSlbQuicStats#app_buffer_enq}
  */
  readonly appBufferEnq?: number;
  /**
  * App buffer queue full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#app_buffer_queue_full DataThunderSlbQuicStats#app_buffer_queue_full}
  */
  readonly appBufferQueueFull?: number;
  /**
  * app conn close frame receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#app_conn_close_frame_rx DataThunderSlbQuicStats#app_conn_close_frame_rx}
  */
  readonly appConnCloseFrameRx?: number;
  /**
  * app conn close frame send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#app_conn_close_frame_tx DataThunderSlbQuicStats#app_conn_close_frame_tx}
  */
  readonly appConnCloseFrameTx?: number;
  /**
  * bi stream data blocked frame receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#bi_stream_data_blocked_frame_rx DataThunderSlbQuicStats#bi_stream_data_blocked_frame_rx}
  */
  readonly biStreamDataBlockedFrameRx?: number;
  /**
  * bi stream data blocked frame send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#bi_stream_data_blocked_frame_tx DataThunderSlbQuicStats#bi_stream_data_blocked_frame_tx}
  */
  readonly biStreamDataBlockedFrameTx?: number;
  /**
  * Burst limited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#burst_limited DataThunderSlbQuicStats#burst_limited}
  */
  readonly burstLimited?: number;
  /**
  * Cannot_insert_cid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#cannot_insert_cid DataThunderSlbQuicStats#cannot_insert_cid}
  */
  readonly cannotInsertCid?: number;
  /**
  * Cannot_insert_srt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#cannot_insert_srt DataThunderSlbQuicStats#cannot_insert_srt}
  */
  readonly cannotInsertSrt?: number;
  /**
  * Cannot_retire_cid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#cannot_retire_cid DataThunderSlbQuicStats#cannot_retire_cid}
  */
  readonly cannotRetireCid?: number;
  /**
  * CID CPU Hash
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#cid_cpu_hash DataThunderSlbQuicStats#cid_cpu_hash}
  */
  readonly cidCpuHash?: number;
  /**
  * CID Zero
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#cid_zero DataThunderSlbQuicStats#cid_zero}
  */
  readonly cidZero?: number;
  /**
  * Client connection attempted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#client_conn_attempted DataThunderSlbQuicStats#client_conn_attempted}
  */
  readonly clientConnAttempted?: number;
  /**
  * Client connection created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#client_conn_created DataThunderSlbQuicStats#client_conn_created}
  */
  readonly clientConnCreated?: number;
  /**
  * Client connection failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#client_conn_failed DataThunderSlbQuicStats#client_conn_failed}
  */
  readonly clientConnFailed?: number;
  /**
  * Client connection handshake
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#client_conn_handshake DataThunderSlbQuicStats#client_conn_handshake}
  */
  readonly clientConnHandshake?: number;
  /**
  * Client connection local closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#client_conn_local_closed DataThunderSlbQuicStats#client_conn_local_closed}
  */
  readonly clientConnLocalClosed?: number;
  /**
  * Client connection remote closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#client_conn_remote_closed DataThunderSlbQuicStats#client_conn_remote_closed}
  */
  readonly clientConnRemoteClosed?: number;
  /**
  * close timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#close_alarm DataThunderSlbQuicStats#close_alarm}
  */
  readonly closeAlarm?: number;
  /**
  * Congestion window decrease
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#congest_wnd_dec DataThunderSlbQuicStats#congest_wnd_dec}
  */
  readonly congestWndDec?: number;
  /**
  * Congestion window increase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#congest_wnd_inc DataThunderSlbQuicStats#congest_wnd_inc}
  */
  readonly congestWndInc?: number;
  /**
  * conn close frame receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#conn_close_frame_rx DataThunderSlbQuicStats#conn_close_frame_rx}
  */
  readonly connCloseFrameRx?: number;
  /**
  * conn close frame send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#conn_close_frame_tx DataThunderSlbQuicStats#conn_close_frame_tx}
  */
  readonly connCloseFrameTx?: number;
  /**
  * crypto frame receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#crypto_frame_rx DataThunderSlbQuicStats#crypto_frame_rx}
  */
  readonly cryptoFrameRx?: number;
  /**
  * crypto frame send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#crypto_frame_tx DataThunderSlbQuicStats#crypto_frame_tx}
  */
  readonly cryptoFrameTx?: number;
  /**
  * Crypto stream not found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#crypto_stream_not_found DataThunderSlbQuicStats#crypto_stream_not_found}
  */
  readonly cryptoStreamNotFound?: number;
  /**
  * data blocked frame receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#data_blocked_frame_rx DataThunderSlbQuicStats#data_blocked_frame_rx}
  */
  readonly dataBlockedFrameRx?: number;
  /**
  * data blocked frame send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#data_blocked_frame_tx DataThunderSlbQuicStats#data_blocked_frame_tx}
  */
  readonly dataBlockedFrameTx?: number;
  /**
  * Dcid mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#dcid_mismatch DataThunderSlbQuicStats#dcid_mismatch}
  */
  readonly dcidMismatch?: number;
  /**
  * Decode failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#decode_failed DataThunderSlbQuicStats#decode_failed}
  */
  readonly decodeFailed?: number;
  /**
  * Decode stream error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#decode_stream_error DataThunderSlbQuicStats#decode_stream_error}
  */
  readonly decodeStreamError?: number;
  /**
  * delay timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#delay_alarm DataThunderSlbQuicStats#delay_alarm}
  */
  readonly delayAlarm?: number;
  /**
  * Delayed ACK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#delayed_ack DataThunderSlbQuicStats#delayed_ack}
  */
  readonly delayedAck?: number;
  /**
  * Encode error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#encode_error DataThunderSlbQuicStats#encode_error}
  */
  readonly encodeError?: number;
  /**
  * Err_flow_control
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#err_flow_control DataThunderSlbQuicStats#err_flow_control}
  */
  readonly errFlowControl?: number;
  /**
  * Err_frame_dec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#err_frame_dec DataThunderSlbQuicStats#err_frame_dec}
  */
  readonly errFrameDec?: number;
  /**
  * Err_frame_dec1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#err_frame_dec1 DataThunderSlbQuicStats#err_frame_dec1}
  */
  readonly errFrameDec1?: number;
  /**
  * Err_frame_decb
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#err_frame_decb DataThunderSlbQuicStats#err_frame_decb}
  */
  readonly errFrameDecb?: number;
  /**
  * Err_frame_final_size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#err_frame_final_size DataThunderSlbQuicStats#err_frame_final_size}
  */
  readonly errFrameFinalSize?: number;
  /**
  * Err_protocol_violation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#err_protocol_violation DataThunderSlbQuicStats#err_protocol_violation}
  */
  readonly errProtocolViolation?: number;
  /**
  * Conn closed of error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#error_close DataThunderSlbQuicStats#error_close}
  */
  readonly errorClose?: number;
  /**
  * Exceed flow control
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#exceed_flow_control DataThunderSlbQuicStats#exceed_flow_control}
  */
  readonly exceedFlowControl?: number;
  /**
  * Exceed_max_stream_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#exceed_max_stream_id DataThunderSlbQuicStats#exceed_max_stream_id}
  */
  readonly exceedMaxStreamId?: number;
  /**
  * handshake done frame receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#handshake_done_frame_rx DataThunderSlbQuicStats#handshake_done_frame_rx}
  */
  readonly handshakeDoneFrameRx?: number;
  /**
  * handshake done frame send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#handshake_done_frame_tx DataThunderSlbQuicStats#handshake_done_frame_tx}
  */
  readonly handshakeDoneFrameTx?: number;
  /**
  * HANDSHAKE receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#handshake_rx DataThunderSlbQuicStats#handshake_rx}
  */
  readonly handshakeRx?: number;
  /**
  * HANDSHAKE send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#handshake_tx DataThunderSlbQuicStats#handshake_tx}
  */
  readonly handshakeTx?: number;
  /**
  * conn idle timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#idle_alarm DataThunderSlbQuicStats#idle_alarm}
  */
  readonly idleAlarm?: number;
  /**
  * Illegal_len
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#illegal_len DataThunderSlbQuicStats#illegal_len}
  */
  readonly illegalLen?: number;
  /**
  * Illegal_reason_len
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#illegal_reason_len DataThunderSlbQuicStats#illegal_reason_len}
  */
  readonly illegalReasonLen?: number;
  /**
  * Illegal_rpt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#illegal_rpt DataThunderSlbQuicStats#illegal_rpt}
  */
  readonly illegalRpt?: number;
  /**
  * Illegal_seq
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#illegal_seq DataThunderSlbQuicStats#illegal_seq}
  */
  readonly illegalSeq?: number;
  /**
  * Illegal_stream_len
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#illegal_stream_len DataThunderSlbQuicStats#illegal_stream_len}
  */
  readonly illegalStreamLen?: number;
  /**
  * Illegal_token_len
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#illegal_token_len DataThunderSlbQuicStats#illegal_token_len}
  */
  readonly illegalTokenLen?: number;
  /**
  * INITIAL receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#initial_rx DataThunderSlbQuicStats#initial_rx}
  */
  readonly initialRx?: number;
  /**
  * INITIAL send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#initial_tx DataThunderSlbQuicStats#initial_tx}
  */
  readonly initialTx?: number;
  /**
  * Invalid CID Signature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#invalid_cid_sig DataThunderSlbQuicStats#invalid_cid_sig}
  */
  readonly invalidCidSig?: number;
  /**
  * Invalid conn match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#invalid_conn_match DataThunderSlbQuicStats#invalid_conn_match}
  */
  readonly invalidConnMatch?: number;
  /**
  * Invalid packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#invalid_packet DataThunderSlbQuicStats#invalid_packet}
  */
  readonly invalidPacket?: number;
  /**
  * Invalid session packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#invalid_session_packet DataThunderSlbQuicStats#invalid_session_packet}
  */
  readonly invalidSessionPacket?: number;
  /**
  * Invalid version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#invalid_version DataThunderSlbQuicStats#invalid_version}
  */
  readonly invalidVersion?: number;
  /**
  * Iov alloc len
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#iov_alloc_len DataThunderSlbQuicStats#iov_alloc_len}
  */
  readonly iovAllocLen?: number;
  /**
  * Iov buffer bind
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#iov_buffer_bind DataThunderSlbQuicStats#iov_buffer_bind}
  */
  readonly iovBufferBind?: number;
  /**
  * Iov buffer dup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#iov_buffer_dup DataThunderSlbQuicStats#iov_buffer_dup}
  */
  readonly iovBufferDup?: number;
  /**
  * Iov buffer unbind
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#iov_buffer_unbind DataThunderSlbQuicStats#iov_buffer_unbind}
  */
  readonly iovBufferUnbind?: number;
  /**
  * Iov IO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#iov_io DataThunderSlbQuicStats#iov_io}
  */
  readonly iovIo?: number;
  /**
  * Iov System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#iov_system DataThunderSlbQuicStats#iov_system}
  */
  readonly iovSystem?: number;
  /**
  * QUIC TLS key update received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#key_update_rx DataThunderSlbQuicStats#key_update_rx}
  */
  readonly keyUpdateRx?: number;
  /**
  * QUIC TLS key update sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#key_update_tx DataThunderSlbQuicStats#key_update_tx}
  */
  readonly keyUpdateTx?: number;
  /**
  * Local bi-stream closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#local_bi_stream_closed DataThunderSlbQuicStats#local_bi_stream_closed}
  */
  readonly localBiStreamClosed?: number;
  /**
  * Local bi-stream created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#local_bi_stream_created DataThunderSlbQuicStats#local_bi_stream_created}
  */
  readonly localBiStreamCreated?: number;
  /**
  * Current local bi-stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#local_bi_stream_current DataThunderSlbQuicStats#local_bi_stream_current}
  */
  readonly localBiStreamCurrent?: number;
  /**
  * Local uni-stream closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#local_uni_stream_closed DataThunderSlbQuicStats#local_uni_stream_closed}
  */
  readonly localUniStreamClosed?: number;
  /**
  * Local uni-stream created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#local_uni_stream_created DataThunderSlbQuicStats#local_uni_stream_created}
  */
  readonly localUniStreamCreated?: number;
  /**
  * Current local uni-stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#local_uni_stream_current DataThunderSlbQuicStats#local_uni_stream_current}
  */
  readonly localUniStreamCurrent?: number;
  /**
  * max bi stream frame receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#max_bi_stream_frame_rx DataThunderSlbQuicStats#max_bi_stream_frame_rx}
  */
  readonly maxBiStreamFrameRx?: number;
  /**
  * max bi stream frame send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#max_bi_stream_frame_tx DataThunderSlbQuicStats#max_bi_stream_frame_tx}
  */
  readonly maxBiStreamFrameTx?: number;
  /**
  * max data frame receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#max_data_frame_rx DataThunderSlbQuicStats#max_data_frame_rx}
  */
  readonly maxDataFrameRx?: number;
  /**
  * max data frame send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#max_data_frame_tx DataThunderSlbQuicStats#max_data_frame_tx}
  */
  readonly maxDataFrameTx?: number;
  /**
  * max stream data frame receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#max_stream_data_frame_rx DataThunderSlbQuicStats#max_stream_data_frame_rx}
  */
  readonly maxStreamDataFrameRx?: number;
  /**
  * max stream data frame send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#max_stream_data_frame_tx DataThunderSlbQuicStats#max_stream_data_frame_tx}
  */
  readonly maxStreamDataFrameTx?: number;
  /**
  * Max_stream_too_big
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#max_stream_too_big DataThunderSlbQuicStats#max_stream_too_big}
  */
  readonly maxStreamTooBig?: number;
  /**
  * max uni stream frame receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#max_uni_stream_frame_rx DataThunderSlbQuicStats#max_uni_stream_frame_rx}
  */
  readonly maxUniStreamFrameRx?: number;
  /**
  * max uni stream frame send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#max_uni_stream_frame_tx DataThunderSlbQuicStats#max_uni_stream_frame_tx}
  */
  readonly maxUniStreamFrameTx?: number;
  /**
  * Needs ACK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#needs_ack DataThunderSlbQuicStats#needs_ack}
  */
  readonly needsAck?: number;
  /**
  * new conn id frame receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#new_conn_id_frame_rx DataThunderSlbQuicStats#new_conn_id_frame_rx}
  */
  readonly newConnIdFrameRx?: number;
  /**
  * new conn id frame send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#new_conn_id_frame_tx DataThunderSlbQuicStats#new_conn_id_frame_tx}
  */
  readonly newConnIdFrameTx?: number;
  /**
  * New_conn_id_len_non_zero
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#new_conn_id_len_non_zero DataThunderSlbQuicStats#new_conn_id_len_non_zero}
  */
  readonly newConnIdLenNonZero?: number;
  /**
  * New_conn_id_len_zero
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#new_conn_id_len_zero DataThunderSlbQuicStats#new_conn_id_len_zero}
  */
  readonly newConnIdLenZero?: number;
  /**
  * new token frame receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#new_token_frame_rx DataThunderSlbQuicStats#new_token_frame_rx}
  */
  readonly newTokenFrameRx?: number;
  /**
  * new token frame send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#new_token_frame_tx DataThunderSlbQuicStats#new_token_frame_tx}
  */
  readonly newTokenFrameTx?: number;
  /**
  * no a10 socket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#no_a10_socket DataThunderSlbQuicStats#no_a10_socket}
  */
  readonly noA10Socket?: number;
  /**
  * No congestion window
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#no_congest_wnd DataThunderSlbQuicStats#no_congest_wnd}
  */
  readonly noCongestWnd?: number;
  /**
  * No_next_scid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#no_next_scid DataThunderSlbQuicStats#no_next_scid}
  */
  readonly noNextScid?: number;
  /**
  * no other side socket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#no_other_side_socket DataThunderSlbQuicStats#no_other_side_socket}
  */
  readonly noOtherSideSocket?: number;
  /**
  * No tx queue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#no_tx_queue DataThunderSlbQuicStats#no_tx_queue}
  */
  readonly noTxQueue?: number;
  /**
  * no w engine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#no_w_engine DataThunderSlbQuicStats#no_w_engine}
  */
  readonly noWEngine?: number;
  /**
  * no w socket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#no_w_socket DataThunderSlbQuicStats#no_w_socket}
  */
  readonly noWSocket?: number;
  /**
  * lost detection timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#on_ld_timeout DataThunderSlbQuicStats#on_ld_timeout}
  */
  readonly onLdTimeout?: number;
  /**
  * Packet drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#packet_drop DataThunderSlbQuicStats#packet_drop}
  */
  readonly packetDrop?: number;
  /**
  * Packet loop limited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#packet_loop_limited DataThunderSlbQuicStats#packet_loop_limited}
  */
  readonly packetLoopLimited?: number;
  /**
  * Packet lost
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#packet_lost DataThunderSlbQuicStats#packet_lost}
  */
  readonly packetLost?: number;
  /**
  * Packet out of order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#packet_out_of_order DataThunderSlbQuicStats#packet_out_of_order}
  */
  readonly packetOutOfOrder?: number;
  /**
  * Packet retransmit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#packet_retransmit DataThunderSlbQuicStats#packet_retransmit}
  */
  readonly packetRetransmit?: number;
  /**
  * Packet receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#packet_rx DataThunderSlbQuicStats#packet_rx}
  */
  readonly packetRx?: number;
  /**
  * Packet_too_short
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#packet_too_short DataThunderSlbQuicStats#packet_too_short}
  */
  readonly packetTooShort?: number;
  /**
  * Packet send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#packet_tx DataThunderSlbQuicStats#packet_tx}
  */
  readonly packetTx?: number;
  /**
  * Packet send failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#packet_tx_failed DataThunderSlbQuicStats#packet_tx_failed}
  */
  readonly packetTxFailed?: number;
  /**
  * padding frame receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#padding_frame_rx DataThunderSlbQuicStats#padding_frame_rx}
  */
  readonly paddingFrameRx?: number;
  /**
  * padding frame send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#padding_frame_tx DataThunderSlbQuicStats#padding_frame_tx}
  */
  readonly paddingFrameTx?: number;
  /**
  * Parse error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#parse_error DataThunderSlbQuicStats#parse_error}
  */
  readonly parseError?: number;
  /**
  * path challenge frame receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#path_challenge_frame_rx DataThunderSlbQuicStats#path_challenge_frame_rx}
  */
  readonly pathChallengeFrameRx?: number;
  /**
  * path challenge frame send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#path_challenge_frame_tx DataThunderSlbQuicStats#path_challenge_frame_tx}
  */
  readonly pathChallengeFrameTx?: number;
  /**
  * path response frame receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#path_response_frame_rx DataThunderSlbQuicStats#path_response_frame_rx}
  */
  readonly pathResponseFrameRx?: number;
  /**
  * path response frame send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#path_response_frame_tx DataThunderSlbQuicStats#path_response_frame_tx}
  */
  readonly pathResponseFrameTx?: number;
  /**
  * ping frame receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#ping_frame_rx DataThunderSlbQuicStats#ping_frame_rx}
  */
  readonly pingFrameRx?: number;
  /**
  * ping frame send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#ping_frame_tx DataThunderSlbQuicStats#ping_frame_tx}
  */
  readonly pingFrameTx?: number;
  /**
  * Pkt_acked_failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#pkt_acked_failed DataThunderSlbQuicStats#pkt_acked_failed}
  */
  readonly pktAckedFailed?: number;
  /**
  * Pn delete failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#pn_delete_failed DataThunderSlbQuicStats#pn_delete_failed}
  */
  readonly pnDeleteFailed?: number;
  /**
  * Pn insert failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#pn_insert_failed DataThunderSlbQuicStats#pn_insert_failed}
  */
  readonly pnInsertFailed?: number;
  /**
  * Q connection created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#q_conn_created DataThunderSlbQuicStats#q_conn_created}
  */
  readonly qConnCreated?: number;
  /**
  * Q connection freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#q_conn_freed DataThunderSlbQuicStats#q_conn_freed}
  */
  readonly qConnFreed?: number;
  /**
  * QUIC free
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#quic_free DataThunderSlbQuicStats#quic_free}
  */
  readonly quicFree?: number;
  /**
  * QUIC LB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#quic_lb DataThunderSlbQuicStats#quic_lb}
  */
  readonly quicLb?: number;
  /**
  * QUIC malloc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#quic_malloc DataThunderSlbQuicStats#quic_malloc}
  */
  readonly quicMalloc?: number;
  /**
  * QUIC malloc failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#quic_malloc_failure DataThunderSlbQuicStats#quic_malloc_failure}
  */
  readonly quicMallocFailure?: number;
  /**
  * Quic packet drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#quic_packet_drop DataThunderSlbQuicStats#quic_packet_drop}
  */
  readonly quicPacketDrop?: number;
  /**
  * quick malloc failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#quick_malloc_failure DataThunderSlbQuicStats#quick_malloc_failure}
  */
  readonly quickMallocFailure?: number;
  /**
  * Receive window limited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#receive_wnd_limited DataThunderSlbQuicStats#receive_wnd_limited}
  */
  readonly receiveWndLimited?: number;
  /**
  * Remote bi-stream closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#remote_bi_stream_closed DataThunderSlbQuicStats#remote_bi_stream_closed}
  */
  readonly remoteBiStreamClosed?: number;
  /**
  * Remote bi-stream created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#remote_bi_stream_created DataThunderSlbQuicStats#remote_bi_stream_created}
  */
  readonly remoteBiStreamCreated?: number;
  /**
  * Current remote bi-stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#remote_bi_stream_current DataThunderSlbQuicStats#remote_bi_stream_current}
  */
  readonly remoteBiStreamCurrent?: number;
  /**
  * Remote uni-stream closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#remote_uni_stream_closed DataThunderSlbQuicStats#remote_uni_stream_closed}
  */
  readonly remoteUniStreamClosed?: number;
  /**
  * Remote uni-stream created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#remote_uni_stream_created DataThunderSlbQuicStats#remote_uni_stream_created}
  */
  readonly remoteUniStreamCreated?: number;
  /**
  * Current remote uni-stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#remote_uni_stream_current DataThunderSlbQuicStats#remote_uni_stream_current}
  */
  readonly remoteUniStreamCurrent?: number;
  /**
  * retire conn id frame receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#retire_conn_id_frame_rx DataThunderSlbQuicStats#retire_conn_id_frame_rx}
  */
  readonly retireConnIdFrameRx?: number;
  /**
  * retire conn id frame send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#retire_conn_id_frame_tx DataThunderSlbQuicStats#retire_conn_id_frame_tx}
  */
  readonly retireConnIdFrameTx?: number;
  /**
  * RETRY receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#retry_rx DataThunderSlbQuicStats#retry_rx}
  */
  readonly retryRx?: number;
  /**
  * RETRY send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#retry_tx DataThunderSlbQuicStats#retry_tx}
  */
  readonly retryTx?: number;
  /**
  * RTT_0 receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#rtt_0_rx DataThunderSlbQuicStats#rtt_0_rx}
  */
  readonly rtt0Rx?: number;
  /**
  * RTT_0 send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#rtt_0_tx DataThunderSlbQuicStats#rtt_0_tx}
  */
  readonly rtt0Tx?: number;
  /**
  * RTT updated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#rtt_updated DataThunderSlbQuicStats#rtt_updated}
  */
  readonly rttUpdated?: number;
  /**
  * Server connection attempted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#server_conn_attempted DataThunderSlbQuicStats#server_conn_attempted}
  */
  readonly serverConnAttempted?: number;
  /**
  * Server connection created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#server_conn_created DataThunderSlbQuicStats#server_conn_created}
  */
  readonly serverConnCreated?: number;
  /**
  * Server connection failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#server_conn_failed DataThunderSlbQuicStats#server_conn_failed}
  */
  readonly serverConnFailed?: number;
  /**
  * Server connection handshake
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#server_conn_handshake DataThunderSlbQuicStats#server_conn_handshake}
  */
  readonly serverConnHandshake?: number;
  /**
  * Server connection local closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#server_conn_local_closed DataThunderSlbQuicStats#server_conn_local_closed}
  */
  readonly serverConnLocalClosed?: number;
  /**
  * Server connection remote closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#server_conn_remote_closed DataThunderSlbQuicStats#server_conn_remote_closed}
  */
  readonly serverConnRemoteClosed?: number;
  /**
  * Server_receive_new_token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#server_receive_new_token DataThunderSlbQuicStats#server_receive_new_token}
  */
  readonly serverReceiveNewToken?: number;
  /**
  * Server_rx_handshake_done
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#server_rx_handshake_done DataThunderSlbQuicStats#server_rx_handshake_done}
  */
  readonly serverRxHandshakeDone?: number;
  /**
  * Stateless resert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#stateless_reset DataThunderSlbQuicStats#stateless_reset}
  */
  readonly statelessReset?: number;
  /**
  * stream 09 frame receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#stream_09_frame_rx DataThunderSlbQuicStats#stream_09_frame_rx}
  */
  readonly stream09FrameRx?: number;
  /**
  * stream 09 frame send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#stream_09_frame_tx DataThunderSlbQuicStats#stream_09_frame_tx}
  */
  readonly stream09FrameTx?: number;
  /**
  * stream 0a frame receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#stream_0a_frame_rx DataThunderSlbQuicStats#stream_0a_frame_rx}
  */
  readonly stream0AFrameRx?: number;
  /**
  * stream 0a frame send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#stream_0a_frame_tx DataThunderSlbQuicStats#stream_0a_frame_tx}
  */
  readonly stream0AFrameTx?: number;
  /**
  * stream 0b frame receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#stream_0b_frame_rx DataThunderSlbQuicStats#stream_0b_frame_rx}
  */
  readonly stream0BFrameRx?: number;
  /**
  * stream 0b frame send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#stream_0b_frame_tx DataThunderSlbQuicStats#stream_0b_frame_tx}
  */
  readonly stream0BFrameTx?: number;
  /**
  * stream 0c frame receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#stream_0c_frame_rx DataThunderSlbQuicStats#stream_0c_frame_rx}
  */
  readonly stream0CFrameRx?: number;
  /**
  * stream 0c frame send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#stream_0c_frame_tx DataThunderSlbQuicStats#stream_0c_frame_tx}
  */
  readonly stream0CFrameTx?: number;
  /**
  * stream 0d frame receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#stream_0d_frame_rx DataThunderSlbQuicStats#stream_0d_frame_rx}
  */
  readonly stream0DFrameRx?: number;
  /**
  * stream 0d frame send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#stream_0d_frame_tx DataThunderSlbQuicStats#stream_0d_frame_tx}
  */
  readonly stream0DFrameTx?: number;
  /**
  * stream 0e frame receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#stream_0e_frame_rx DataThunderSlbQuicStats#stream_0e_frame_rx}
  */
  readonly stream0EFrameRx?: number;
  /**
  * stream 0e frame send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#stream_0e_frame_tx DataThunderSlbQuicStats#stream_0e_frame_tx}
  */
  readonly stream0EFrameTx?: number;
  /**
  * stream 0f frame receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#stream_0f_frame_rx DataThunderSlbQuicStats#stream_0f_frame_rx}
  */
  readonly stream0FFrameRx?: number;
  /**
  * stream 0f frame send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#stream_0f_frame_tx DataThunderSlbQuicStats#stream_0f_frame_tx}
  */
  readonly stream0FFrameTx?: number;
  /**
  * Stream_blocked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#stream_blocked DataThunderSlbQuicStats#stream_blocked}
  */
  readonly streamBlocked?: number;
  /**
  * Stream congest
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#stream_congest DataThunderSlbQuicStats#stream_congest}
  */
  readonly streamCongest?: number;
  /**
  * Stream created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#stream_created DataThunderSlbQuicStats#stream_created}
  */
  readonly streamCreated?: number;
  /**
  * stream data blocked frame receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#stream_data_blocked_frame_rx DataThunderSlbQuicStats#stream_data_blocked_frame_rx}
  */
  readonly streamDataBlockedFrameRx?: number;
  /**
  * stream data blocked frame send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#stream_data_blocked_frame_tx DataThunderSlbQuicStats#stream_data_blocked_frame_tx}
  */
  readonly streamDataBlockedFrameTx?: number;
  /**
  * Stream error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#stream_error DataThunderSlbQuicStats#stream_error}
  */
  readonly streamError?: number;
  /**
  * Stream fail to insert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#stream_fail_to_insert DataThunderSlbQuicStats#stream_fail_to_insert}
  */
  readonly streamFailToInsert?: number;
  /**
  * Stream FIN down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#stream_fin_down DataThunderSlbQuicStats#stream_fin_down}
  */
  readonly streamFinDown?: number;
  /**
  * Stream FIN receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#stream_fin_receive DataThunderSlbQuicStats#stream_fin_receive}
  */
  readonly streamFinReceive?: number;
  /**
  * Stream FIN send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#stream_fin_send DataThunderSlbQuicStats#stream_fin_send}
  */
  readonly streamFinSend?: number;
  /**
  * Stream FIN up
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#stream_fin_up DataThunderSlbQuicStats#stream_fin_up}
  */
  readonly streamFinUp?: number;
  /**
  * stream frame receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#stream_frame_rx DataThunderSlbQuicStats#stream_frame_rx}
  */
  readonly streamFrameRx?: number;
  /**
  * stream frame send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#stream_frame_tx DataThunderSlbQuicStats#stream_frame_tx}
  */
  readonly streamFrameTx?: number;
  /**
  * Stream freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#stream_freed DataThunderSlbQuicStats#stream_freed}
  */
  readonly streamFreed?: number;
  /**
  * Stream_id_mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#stream_id_mismatch DataThunderSlbQuicStats#stream_id_mismatch}
  */
  readonly streamIdMismatch?: number;
  /**
  * Stream not send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#stream_not_send DataThunderSlbQuicStats#stream_not_send}
  */
  readonly streamNotSend?: number;
  /**
  * Stream open
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#stream_open DataThunderSlbQuicStats#stream_open}
  */
  readonly streamOpen?: number;
  /**
  * Stream pause data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#stream_pause_data DataThunderSlbQuicStats#stream_pause_data}
  */
  readonly streamPauseData?: number;
  /**
  * Stream resume data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#stream_resume_data DataThunderSlbQuicStats#stream_resume_data}
  */
  readonly streamResumeData?: number;
  /**
  * stream reset frame receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#stream_rst_frame_rx DataThunderSlbQuicStats#stream_rst_frame_rx}
  */
  readonly streamRstFrameRx?: number;
  /**
  * stream reset frame send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#stream_rst_frame_tx DataThunderSlbQuicStats#stream_rst_frame_tx}
  */
  readonly streamRstFrameTx?: number;
  /**
  * stream stop frame receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#stream_stop_frame_rx DataThunderSlbQuicStats#stream_stop_frame_rx}
  */
  readonly streamStopFrameRx?: number;
  /**
  * stream stop frame send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#stream_stop_frame_tx DataThunderSlbQuicStats#stream_stop_frame_tx}
  */
  readonly streamStopFrameTx?: number;
  /**
  * Stream stop send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#stream_stop_send DataThunderSlbQuicStats#stream_stop_send}
  */
  readonly streamStopSend?: number;
  /**
  * Token_len_too_long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#token_len_too_long DataThunderSlbQuicStats#token_len_too_long}
  */
  readonly tokenLenTooLong?: number;
  /**
  * Too_noisy_fuzzing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#too_noisy_fuzzing DataThunderSlbQuicStats#too_noisy_fuzzing}
  */
  readonly tooNoisyFuzzing?: number;
  /**
  * Tx buffer dequeued
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#tx_buffer_deq DataThunderSlbQuicStats#tx_buffer_deq}
  */
  readonly txBufferDeq?: number;
  /**
  * Tx buffer enqueued
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#tx_buffer_enq DataThunderSlbQuicStats#tx_buffer_enq}
  */
  readonly txBufferEnq?: number;
  /**
  * uni stream data blocked frame receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#uni_stream_data_blocked_frame_rx DataThunderSlbQuicStats#uni_stream_data_blocked_frame_rx}
  */
  readonly uniStreamDataBlockedFrameRx?: number;
  /**
  * uni stream data blocked frame send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#uni_stream_data_blocked_frame_tx DataThunderSlbQuicStats#uni_stream_data_blocked_frame_tx}
  */
  readonly uniStreamDataBlockedFrameTx?: number;
  /**
  * Unknown frame
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#unknown_frame DataThunderSlbQuicStats#unknown_frame}
  */
  readonly unknownFrame?: number;
  /**
  * Unknown scid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#unknown_scid DataThunderSlbQuicStats#unknown_scid}
  */
  readonly unknownScid?: number;
  /**
  * Version receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#ver_rx DataThunderSlbQuicStats#ver_rx}
  */
  readonly verRx?: number;
  /**
  * Version send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#ver_tx DataThunderSlbQuicStats#ver_tx}
  */
  readonly verTx?: number;
  /**
  * wsocket closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#wsocket_closed DataThunderSlbQuicStats#wsocket_closed}
  */
  readonly wsocketClosed?: number;
  /**
  * wsocket created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#wsocket_created DataThunderSlbQuicStats#wsocket_created}
  */
  readonly wsocketCreated?: number;
  /**
  * Zero_frame_packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#zero_frame_packet DataThunderSlbQuicStats#zero_frame_packet}
  */
  readonly zeroFramePacket?: number;
}

export function dataThunderSlbQuicStatsStatsToTerraform(struct?: DataThunderSlbQuicStatsStatsOutputReference | DataThunderSlbQuicStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    a10_socket_closed: cdktf.numberToTerraform(struct!.a10SocketClosed),
    a10_socket_created: cdktf.numberToTerraform(struct!.a10SocketCreated),
    ack_alarm: cdktf.numberToTerraform(struct!.ackAlarm),
    ack_delay_huge: cdktf.numberToTerraform(struct!.ackDelayHuge),
    ack_ecn_frame_rx: cdktf.numberToTerraform(struct!.ackEcnFrameRx),
    ack_ecn_frame_tx: cdktf.numberToTerraform(struct!.ackEcnFrameTx),
    ack_frame_rx: cdktf.numberToTerraform(struct!.ackFrameRx),
    ack_frame_tx: cdktf.numberToTerraform(struct!.ackFrameTx),
    ack_rng_huge_1: cdktf.numberToTerraform(struct!.ackRngHuge1),
    ack_rng_huge_2: cdktf.numberToTerraform(struct!.ackRngHuge2),
    ack_rng_huge_3: cdktf.numberToTerraform(struct!.ackRngHuge3),
    acked_packet_freed: cdktf.numberToTerraform(struct!.ackedPacketFreed),
    app_buffer_deq: cdktf.numberToTerraform(struct!.appBufferDeq),
    app_buffer_enq: cdktf.numberToTerraform(struct!.appBufferEnq),
    app_buffer_queue_full: cdktf.numberToTerraform(struct!.appBufferQueueFull),
    app_conn_close_frame_rx: cdktf.numberToTerraform(struct!.appConnCloseFrameRx),
    app_conn_close_frame_tx: cdktf.numberToTerraform(struct!.appConnCloseFrameTx),
    bi_stream_data_blocked_frame_rx: cdktf.numberToTerraform(struct!.biStreamDataBlockedFrameRx),
    bi_stream_data_blocked_frame_tx: cdktf.numberToTerraform(struct!.biStreamDataBlockedFrameTx),
    burst_limited: cdktf.numberToTerraform(struct!.burstLimited),
    cannot_insert_cid: cdktf.numberToTerraform(struct!.cannotInsertCid),
    cannot_insert_srt: cdktf.numberToTerraform(struct!.cannotInsertSrt),
    cannot_retire_cid: cdktf.numberToTerraform(struct!.cannotRetireCid),
    cid_cpu_hash: cdktf.numberToTerraform(struct!.cidCpuHash),
    cid_zero: cdktf.numberToTerraform(struct!.cidZero),
    client_conn_attempted: cdktf.numberToTerraform(struct!.clientConnAttempted),
    client_conn_created: cdktf.numberToTerraform(struct!.clientConnCreated),
    client_conn_failed: cdktf.numberToTerraform(struct!.clientConnFailed),
    client_conn_handshake: cdktf.numberToTerraform(struct!.clientConnHandshake),
    client_conn_local_closed: cdktf.numberToTerraform(struct!.clientConnLocalClosed),
    client_conn_remote_closed: cdktf.numberToTerraform(struct!.clientConnRemoteClosed),
    close_alarm: cdktf.numberToTerraform(struct!.closeAlarm),
    congest_wnd_dec: cdktf.numberToTerraform(struct!.congestWndDec),
    congest_wnd_inc: cdktf.numberToTerraform(struct!.congestWndInc),
    conn_close_frame_rx: cdktf.numberToTerraform(struct!.connCloseFrameRx),
    conn_close_frame_tx: cdktf.numberToTerraform(struct!.connCloseFrameTx),
    crypto_frame_rx: cdktf.numberToTerraform(struct!.cryptoFrameRx),
    crypto_frame_tx: cdktf.numberToTerraform(struct!.cryptoFrameTx),
    crypto_stream_not_found: cdktf.numberToTerraform(struct!.cryptoStreamNotFound),
    data_blocked_frame_rx: cdktf.numberToTerraform(struct!.dataBlockedFrameRx),
    data_blocked_frame_tx: cdktf.numberToTerraform(struct!.dataBlockedFrameTx),
    dcid_mismatch: cdktf.numberToTerraform(struct!.dcidMismatch),
    decode_failed: cdktf.numberToTerraform(struct!.decodeFailed),
    decode_stream_error: cdktf.numberToTerraform(struct!.decodeStreamError),
    delay_alarm: cdktf.numberToTerraform(struct!.delayAlarm),
    delayed_ack: cdktf.numberToTerraform(struct!.delayedAck),
    encode_error: cdktf.numberToTerraform(struct!.encodeError),
    err_flow_control: cdktf.numberToTerraform(struct!.errFlowControl),
    err_frame_dec: cdktf.numberToTerraform(struct!.errFrameDec),
    err_frame_dec1: cdktf.numberToTerraform(struct!.errFrameDec1),
    err_frame_decb: cdktf.numberToTerraform(struct!.errFrameDecb),
    err_frame_final_size: cdktf.numberToTerraform(struct!.errFrameFinalSize),
    err_protocol_violation: cdktf.numberToTerraform(struct!.errProtocolViolation),
    error_close: cdktf.numberToTerraform(struct!.errorClose),
    exceed_flow_control: cdktf.numberToTerraform(struct!.exceedFlowControl),
    exceed_max_stream_id: cdktf.numberToTerraform(struct!.exceedMaxStreamId),
    handshake_done_frame_rx: cdktf.numberToTerraform(struct!.handshakeDoneFrameRx),
    handshake_done_frame_tx: cdktf.numberToTerraform(struct!.handshakeDoneFrameTx),
    handshake_rx: cdktf.numberToTerraform(struct!.handshakeRx),
    handshake_tx: cdktf.numberToTerraform(struct!.handshakeTx),
    idle_alarm: cdktf.numberToTerraform(struct!.idleAlarm),
    illegal_len: cdktf.numberToTerraform(struct!.illegalLen),
    illegal_reason_len: cdktf.numberToTerraform(struct!.illegalReasonLen),
    illegal_rpt: cdktf.numberToTerraform(struct!.illegalRpt),
    illegal_seq: cdktf.numberToTerraform(struct!.illegalSeq),
    illegal_stream_len: cdktf.numberToTerraform(struct!.illegalStreamLen),
    illegal_token_len: cdktf.numberToTerraform(struct!.illegalTokenLen),
    initial_rx: cdktf.numberToTerraform(struct!.initialRx),
    initial_tx: cdktf.numberToTerraform(struct!.initialTx),
    invalid_cid_sig: cdktf.numberToTerraform(struct!.invalidCidSig),
    invalid_conn_match: cdktf.numberToTerraform(struct!.invalidConnMatch),
    invalid_packet: cdktf.numberToTerraform(struct!.invalidPacket),
    invalid_session_packet: cdktf.numberToTerraform(struct!.invalidSessionPacket),
    invalid_version: cdktf.numberToTerraform(struct!.invalidVersion),
    iov_alloc_len: cdktf.numberToTerraform(struct!.iovAllocLen),
    iov_buffer_bind: cdktf.numberToTerraform(struct!.iovBufferBind),
    iov_buffer_dup: cdktf.numberToTerraform(struct!.iovBufferDup),
    iov_buffer_unbind: cdktf.numberToTerraform(struct!.iovBufferUnbind),
    iov_io: cdktf.numberToTerraform(struct!.iovIo),
    iov_system: cdktf.numberToTerraform(struct!.iovSystem),
    key_update_rx: cdktf.numberToTerraform(struct!.keyUpdateRx),
    key_update_tx: cdktf.numberToTerraform(struct!.keyUpdateTx),
    local_bi_stream_closed: cdktf.numberToTerraform(struct!.localBiStreamClosed),
    local_bi_stream_created: cdktf.numberToTerraform(struct!.localBiStreamCreated),
    local_bi_stream_current: cdktf.numberToTerraform(struct!.localBiStreamCurrent),
    local_uni_stream_closed: cdktf.numberToTerraform(struct!.localUniStreamClosed),
    local_uni_stream_created: cdktf.numberToTerraform(struct!.localUniStreamCreated),
    local_uni_stream_current: cdktf.numberToTerraform(struct!.localUniStreamCurrent),
    max_bi_stream_frame_rx: cdktf.numberToTerraform(struct!.maxBiStreamFrameRx),
    max_bi_stream_frame_tx: cdktf.numberToTerraform(struct!.maxBiStreamFrameTx),
    max_data_frame_rx: cdktf.numberToTerraform(struct!.maxDataFrameRx),
    max_data_frame_tx: cdktf.numberToTerraform(struct!.maxDataFrameTx),
    max_stream_data_frame_rx: cdktf.numberToTerraform(struct!.maxStreamDataFrameRx),
    max_stream_data_frame_tx: cdktf.numberToTerraform(struct!.maxStreamDataFrameTx),
    max_stream_too_big: cdktf.numberToTerraform(struct!.maxStreamTooBig),
    max_uni_stream_frame_rx: cdktf.numberToTerraform(struct!.maxUniStreamFrameRx),
    max_uni_stream_frame_tx: cdktf.numberToTerraform(struct!.maxUniStreamFrameTx),
    needs_ack: cdktf.numberToTerraform(struct!.needsAck),
    new_conn_id_frame_rx: cdktf.numberToTerraform(struct!.newConnIdFrameRx),
    new_conn_id_frame_tx: cdktf.numberToTerraform(struct!.newConnIdFrameTx),
    new_conn_id_len_non_zero: cdktf.numberToTerraform(struct!.newConnIdLenNonZero),
    new_conn_id_len_zero: cdktf.numberToTerraform(struct!.newConnIdLenZero),
    new_token_frame_rx: cdktf.numberToTerraform(struct!.newTokenFrameRx),
    new_token_frame_tx: cdktf.numberToTerraform(struct!.newTokenFrameTx),
    no_a10_socket: cdktf.numberToTerraform(struct!.noA10Socket),
    no_congest_wnd: cdktf.numberToTerraform(struct!.noCongestWnd),
    no_next_scid: cdktf.numberToTerraform(struct!.noNextScid),
    no_other_side_socket: cdktf.numberToTerraform(struct!.noOtherSideSocket),
    no_tx_queue: cdktf.numberToTerraform(struct!.noTxQueue),
    no_w_engine: cdktf.numberToTerraform(struct!.noWEngine),
    no_w_socket: cdktf.numberToTerraform(struct!.noWSocket),
    on_ld_timeout: cdktf.numberToTerraform(struct!.onLdTimeout),
    packet_drop: cdktf.numberToTerraform(struct!.packetDrop),
    packet_loop_limited: cdktf.numberToTerraform(struct!.packetLoopLimited),
    packet_lost: cdktf.numberToTerraform(struct!.packetLost),
    packet_out_of_order: cdktf.numberToTerraform(struct!.packetOutOfOrder),
    packet_retransmit: cdktf.numberToTerraform(struct!.packetRetransmit),
    packet_rx: cdktf.numberToTerraform(struct!.packetRx),
    packet_too_short: cdktf.numberToTerraform(struct!.packetTooShort),
    packet_tx: cdktf.numberToTerraform(struct!.packetTx),
    packet_tx_failed: cdktf.numberToTerraform(struct!.packetTxFailed),
    padding_frame_rx: cdktf.numberToTerraform(struct!.paddingFrameRx),
    padding_frame_tx: cdktf.numberToTerraform(struct!.paddingFrameTx),
    parse_error: cdktf.numberToTerraform(struct!.parseError),
    path_challenge_frame_rx: cdktf.numberToTerraform(struct!.pathChallengeFrameRx),
    path_challenge_frame_tx: cdktf.numberToTerraform(struct!.pathChallengeFrameTx),
    path_response_frame_rx: cdktf.numberToTerraform(struct!.pathResponseFrameRx),
    path_response_frame_tx: cdktf.numberToTerraform(struct!.pathResponseFrameTx),
    ping_frame_rx: cdktf.numberToTerraform(struct!.pingFrameRx),
    ping_frame_tx: cdktf.numberToTerraform(struct!.pingFrameTx),
    pkt_acked_failed: cdktf.numberToTerraform(struct!.pktAckedFailed),
    pn_delete_failed: cdktf.numberToTerraform(struct!.pnDeleteFailed),
    pn_insert_failed: cdktf.numberToTerraform(struct!.pnInsertFailed),
    q_conn_created: cdktf.numberToTerraform(struct!.qConnCreated),
    q_conn_freed: cdktf.numberToTerraform(struct!.qConnFreed),
    quic_free: cdktf.numberToTerraform(struct!.quicFree),
    quic_lb: cdktf.numberToTerraform(struct!.quicLb),
    quic_malloc: cdktf.numberToTerraform(struct!.quicMalloc),
    quic_malloc_failure: cdktf.numberToTerraform(struct!.quicMallocFailure),
    quic_packet_drop: cdktf.numberToTerraform(struct!.quicPacketDrop),
    quick_malloc_failure: cdktf.numberToTerraform(struct!.quickMallocFailure),
    receive_wnd_limited: cdktf.numberToTerraform(struct!.receiveWndLimited),
    remote_bi_stream_closed: cdktf.numberToTerraform(struct!.remoteBiStreamClosed),
    remote_bi_stream_created: cdktf.numberToTerraform(struct!.remoteBiStreamCreated),
    remote_bi_stream_current: cdktf.numberToTerraform(struct!.remoteBiStreamCurrent),
    remote_uni_stream_closed: cdktf.numberToTerraform(struct!.remoteUniStreamClosed),
    remote_uni_stream_created: cdktf.numberToTerraform(struct!.remoteUniStreamCreated),
    remote_uni_stream_current: cdktf.numberToTerraform(struct!.remoteUniStreamCurrent),
    retire_conn_id_frame_rx: cdktf.numberToTerraform(struct!.retireConnIdFrameRx),
    retire_conn_id_frame_tx: cdktf.numberToTerraform(struct!.retireConnIdFrameTx),
    retry_rx: cdktf.numberToTerraform(struct!.retryRx),
    retry_tx: cdktf.numberToTerraform(struct!.retryTx),
    rtt_0_rx: cdktf.numberToTerraform(struct!.rtt0Rx),
    rtt_0_tx: cdktf.numberToTerraform(struct!.rtt0Tx),
    rtt_updated: cdktf.numberToTerraform(struct!.rttUpdated),
    server_conn_attempted: cdktf.numberToTerraform(struct!.serverConnAttempted),
    server_conn_created: cdktf.numberToTerraform(struct!.serverConnCreated),
    server_conn_failed: cdktf.numberToTerraform(struct!.serverConnFailed),
    server_conn_handshake: cdktf.numberToTerraform(struct!.serverConnHandshake),
    server_conn_local_closed: cdktf.numberToTerraform(struct!.serverConnLocalClosed),
    server_conn_remote_closed: cdktf.numberToTerraform(struct!.serverConnRemoteClosed),
    server_receive_new_token: cdktf.numberToTerraform(struct!.serverReceiveNewToken),
    server_rx_handshake_done: cdktf.numberToTerraform(struct!.serverRxHandshakeDone),
    stateless_reset: cdktf.numberToTerraform(struct!.statelessReset),
    stream_09_frame_rx: cdktf.numberToTerraform(struct!.stream09FrameRx),
    stream_09_frame_tx: cdktf.numberToTerraform(struct!.stream09FrameTx),
    stream_0a_frame_rx: cdktf.numberToTerraform(struct!.stream0AFrameRx),
    stream_0a_frame_tx: cdktf.numberToTerraform(struct!.stream0AFrameTx),
    stream_0b_frame_rx: cdktf.numberToTerraform(struct!.stream0BFrameRx),
    stream_0b_frame_tx: cdktf.numberToTerraform(struct!.stream0BFrameTx),
    stream_0c_frame_rx: cdktf.numberToTerraform(struct!.stream0CFrameRx),
    stream_0c_frame_tx: cdktf.numberToTerraform(struct!.stream0CFrameTx),
    stream_0d_frame_rx: cdktf.numberToTerraform(struct!.stream0DFrameRx),
    stream_0d_frame_tx: cdktf.numberToTerraform(struct!.stream0DFrameTx),
    stream_0e_frame_rx: cdktf.numberToTerraform(struct!.stream0EFrameRx),
    stream_0e_frame_tx: cdktf.numberToTerraform(struct!.stream0EFrameTx),
    stream_0f_frame_rx: cdktf.numberToTerraform(struct!.stream0FFrameRx),
    stream_0f_frame_tx: cdktf.numberToTerraform(struct!.stream0FFrameTx),
    stream_blocked: cdktf.numberToTerraform(struct!.streamBlocked),
    stream_congest: cdktf.numberToTerraform(struct!.streamCongest),
    stream_created: cdktf.numberToTerraform(struct!.streamCreated),
    stream_data_blocked_frame_rx: cdktf.numberToTerraform(struct!.streamDataBlockedFrameRx),
    stream_data_blocked_frame_tx: cdktf.numberToTerraform(struct!.streamDataBlockedFrameTx),
    stream_error: cdktf.numberToTerraform(struct!.streamError),
    stream_fail_to_insert: cdktf.numberToTerraform(struct!.streamFailToInsert),
    stream_fin_down: cdktf.numberToTerraform(struct!.streamFinDown),
    stream_fin_receive: cdktf.numberToTerraform(struct!.streamFinReceive),
    stream_fin_send: cdktf.numberToTerraform(struct!.streamFinSend),
    stream_fin_up: cdktf.numberToTerraform(struct!.streamFinUp),
    stream_frame_rx: cdktf.numberToTerraform(struct!.streamFrameRx),
    stream_frame_tx: cdktf.numberToTerraform(struct!.streamFrameTx),
    stream_freed: cdktf.numberToTerraform(struct!.streamFreed),
    stream_id_mismatch: cdktf.numberToTerraform(struct!.streamIdMismatch),
    stream_not_send: cdktf.numberToTerraform(struct!.streamNotSend),
    stream_open: cdktf.numberToTerraform(struct!.streamOpen),
    stream_pause_data: cdktf.numberToTerraform(struct!.streamPauseData),
    stream_resume_data: cdktf.numberToTerraform(struct!.streamResumeData),
    stream_rst_frame_rx: cdktf.numberToTerraform(struct!.streamRstFrameRx),
    stream_rst_frame_tx: cdktf.numberToTerraform(struct!.streamRstFrameTx),
    stream_stop_frame_rx: cdktf.numberToTerraform(struct!.streamStopFrameRx),
    stream_stop_frame_tx: cdktf.numberToTerraform(struct!.streamStopFrameTx),
    stream_stop_send: cdktf.numberToTerraform(struct!.streamStopSend),
    token_len_too_long: cdktf.numberToTerraform(struct!.tokenLenTooLong),
    too_noisy_fuzzing: cdktf.numberToTerraform(struct!.tooNoisyFuzzing),
    tx_buffer_deq: cdktf.numberToTerraform(struct!.txBufferDeq),
    tx_buffer_enq: cdktf.numberToTerraform(struct!.txBufferEnq),
    uni_stream_data_blocked_frame_rx: cdktf.numberToTerraform(struct!.uniStreamDataBlockedFrameRx),
    uni_stream_data_blocked_frame_tx: cdktf.numberToTerraform(struct!.uniStreamDataBlockedFrameTx),
    unknown_frame: cdktf.numberToTerraform(struct!.unknownFrame),
    unknown_scid: cdktf.numberToTerraform(struct!.unknownScid),
    ver_rx: cdktf.numberToTerraform(struct!.verRx),
    ver_tx: cdktf.numberToTerraform(struct!.verTx),
    wsocket_closed: cdktf.numberToTerraform(struct!.wsocketClosed),
    wsocket_created: cdktf.numberToTerraform(struct!.wsocketCreated),
    zero_frame_packet: cdktf.numberToTerraform(struct!.zeroFramePacket),
  }
}


export function dataThunderSlbQuicStatsStatsToHclTerraform(struct?: DataThunderSlbQuicStatsStatsOutputReference | DataThunderSlbQuicStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    a10_socket_closed: {
      value: cdktf.numberToHclTerraform(struct!.a10SocketClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    a10_socket_created: {
      value: cdktf.numberToHclTerraform(struct!.a10SocketCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ack_alarm: {
      value: cdktf.numberToHclTerraform(struct!.ackAlarm),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ack_delay_huge: {
      value: cdktf.numberToHclTerraform(struct!.ackDelayHuge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ack_ecn_frame_rx: {
      value: cdktf.numberToHclTerraform(struct!.ackEcnFrameRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ack_ecn_frame_tx: {
      value: cdktf.numberToHclTerraform(struct!.ackEcnFrameTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ack_frame_rx: {
      value: cdktf.numberToHclTerraform(struct!.ackFrameRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ack_frame_tx: {
      value: cdktf.numberToHclTerraform(struct!.ackFrameTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ack_rng_huge_1: {
      value: cdktf.numberToHclTerraform(struct!.ackRngHuge1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ack_rng_huge_2: {
      value: cdktf.numberToHclTerraform(struct!.ackRngHuge2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ack_rng_huge_3: {
      value: cdktf.numberToHclTerraform(struct!.ackRngHuge3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acked_packet_freed: {
      value: cdktf.numberToHclTerraform(struct!.ackedPacketFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    app_buffer_deq: {
      value: cdktf.numberToHclTerraform(struct!.appBufferDeq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    app_buffer_enq: {
      value: cdktf.numberToHclTerraform(struct!.appBufferEnq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    app_buffer_queue_full: {
      value: cdktf.numberToHclTerraform(struct!.appBufferQueueFull),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    app_conn_close_frame_rx: {
      value: cdktf.numberToHclTerraform(struct!.appConnCloseFrameRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    app_conn_close_frame_tx: {
      value: cdktf.numberToHclTerraform(struct!.appConnCloseFrameTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bi_stream_data_blocked_frame_rx: {
      value: cdktf.numberToHclTerraform(struct!.biStreamDataBlockedFrameRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bi_stream_data_blocked_frame_tx: {
      value: cdktf.numberToHclTerraform(struct!.biStreamDataBlockedFrameTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    burst_limited: {
      value: cdktf.numberToHclTerraform(struct!.burstLimited),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cannot_insert_cid: {
      value: cdktf.numberToHclTerraform(struct!.cannotInsertCid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cannot_insert_srt: {
      value: cdktf.numberToHclTerraform(struct!.cannotInsertSrt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cannot_retire_cid: {
      value: cdktf.numberToHclTerraform(struct!.cannotRetireCid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cid_cpu_hash: {
      value: cdktf.numberToHclTerraform(struct!.cidCpuHash),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cid_zero: {
      value: cdktf.numberToHclTerraform(struct!.cidZero),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_conn_attempted: {
      value: cdktf.numberToHclTerraform(struct!.clientConnAttempted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_conn_created: {
      value: cdktf.numberToHclTerraform(struct!.clientConnCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_conn_failed: {
      value: cdktf.numberToHclTerraform(struct!.clientConnFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_conn_handshake: {
      value: cdktf.numberToHclTerraform(struct!.clientConnHandshake),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_conn_local_closed: {
      value: cdktf.numberToHclTerraform(struct!.clientConnLocalClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_conn_remote_closed: {
      value: cdktf.numberToHclTerraform(struct!.clientConnRemoteClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    close_alarm: {
      value: cdktf.numberToHclTerraform(struct!.closeAlarm),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    congest_wnd_dec: {
      value: cdktf.numberToHclTerraform(struct!.congestWndDec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    congest_wnd_inc: {
      value: cdktf.numberToHclTerraform(struct!.congestWndInc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_close_frame_rx: {
      value: cdktf.numberToHclTerraform(struct!.connCloseFrameRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_close_frame_tx: {
      value: cdktf.numberToHclTerraform(struct!.connCloseFrameTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crypto_frame_rx: {
      value: cdktf.numberToHclTerraform(struct!.cryptoFrameRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crypto_frame_tx: {
      value: cdktf.numberToHclTerraform(struct!.cryptoFrameTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crypto_stream_not_found: {
      value: cdktf.numberToHclTerraform(struct!.cryptoStreamNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_blocked_frame_rx: {
      value: cdktf.numberToHclTerraform(struct!.dataBlockedFrameRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_blocked_frame_tx: {
      value: cdktf.numberToHclTerraform(struct!.dataBlockedFrameTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dcid_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.dcidMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    decode_failed: {
      value: cdktf.numberToHclTerraform(struct!.decodeFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    decode_stream_error: {
      value: cdktf.numberToHclTerraform(struct!.decodeStreamError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delay_alarm: {
      value: cdktf.numberToHclTerraform(struct!.delayAlarm),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delayed_ack: {
      value: cdktf.numberToHclTerraform(struct!.delayedAck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    encode_error: {
      value: cdktf.numberToHclTerraform(struct!.encodeError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_flow_control: {
      value: cdktf.numberToHclTerraform(struct!.errFlowControl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_frame_dec: {
      value: cdktf.numberToHclTerraform(struct!.errFrameDec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_frame_dec1: {
      value: cdktf.numberToHclTerraform(struct!.errFrameDec1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_frame_decb: {
      value: cdktf.numberToHclTerraform(struct!.errFrameDecb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_frame_final_size: {
      value: cdktf.numberToHclTerraform(struct!.errFrameFinalSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_protocol_violation: {
      value: cdktf.numberToHclTerraform(struct!.errProtocolViolation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_close: {
      value: cdktf.numberToHclTerraform(struct!.errorClose),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceed_flow_control: {
      value: cdktf.numberToHclTerraform(struct!.exceedFlowControl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceed_max_stream_id: {
      value: cdktf.numberToHclTerraform(struct!.exceedMaxStreamId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    handshake_done_frame_rx: {
      value: cdktf.numberToHclTerraform(struct!.handshakeDoneFrameRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    handshake_done_frame_tx: {
      value: cdktf.numberToHclTerraform(struct!.handshakeDoneFrameTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    handshake_rx: {
      value: cdktf.numberToHclTerraform(struct!.handshakeRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    handshake_tx: {
      value: cdktf.numberToHclTerraform(struct!.handshakeTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    idle_alarm: {
      value: cdktf.numberToHclTerraform(struct!.idleAlarm),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    illegal_len: {
      value: cdktf.numberToHclTerraform(struct!.illegalLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    illegal_reason_len: {
      value: cdktf.numberToHclTerraform(struct!.illegalReasonLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    illegal_rpt: {
      value: cdktf.numberToHclTerraform(struct!.illegalRpt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    illegal_seq: {
      value: cdktf.numberToHclTerraform(struct!.illegalSeq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    illegal_stream_len: {
      value: cdktf.numberToHclTerraform(struct!.illegalStreamLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    illegal_token_len: {
      value: cdktf.numberToHclTerraform(struct!.illegalTokenLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_rx: {
      value: cdktf.numberToHclTerraform(struct!.initialRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_tx: {
      value: cdktf.numberToHclTerraform(struct!.initialTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_cid_sig: {
      value: cdktf.numberToHclTerraform(struct!.invalidCidSig),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_conn_match: {
      value: cdktf.numberToHclTerraform(struct!.invalidConnMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_packet: {
      value: cdktf.numberToHclTerraform(struct!.invalidPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_session_packet: {
      value: cdktf.numberToHclTerraform(struct!.invalidSessionPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_version: {
      value: cdktf.numberToHclTerraform(struct!.invalidVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    iov_alloc_len: {
      value: cdktf.numberToHclTerraform(struct!.iovAllocLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    iov_buffer_bind: {
      value: cdktf.numberToHclTerraform(struct!.iovBufferBind),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    iov_buffer_dup: {
      value: cdktf.numberToHclTerraform(struct!.iovBufferDup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    iov_buffer_unbind: {
      value: cdktf.numberToHclTerraform(struct!.iovBufferUnbind),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    iov_io: {
      value: cdktf.numberToHclTerraform(struct!.iovIo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    iov_system: {
      value: cdktf.numberToHclTerraform(struct!.iovSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key_update_rx: {
      value: cdktf.numberToHclTerraform(struct!.keyUpdateRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key_update_tx: {
      value: cdktf.numberToHclTerraform(struct!.keyUpdateTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_bi_stream_closed: {
      value: cdktf.numberToHclTerraform(struct!.localBiStreamClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_bi_stream_created: {
      value: cdktf.numberToHclTerraform(struct!.localBiStreamCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_bi_stream_current: {
      value: cdktf.numberToHclTerraform(struct!.localBiStreamCurrent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_uni_stream_closed: {
      value: cdktf.numberToHclTerraform(struct!.localUniStreamClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_uni_stream_created: {
      value: cdktf.numberToHclTerraform(struct!.localUniStreamCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_uni_stream_current: {
      value: cdktf.numberToHclTerraform(struct!.localUniStreamCurrent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_bi_stream_frame_rx: {
      value: cdktf.numberToHclTerraform(struct!.maxBiStreamFrameRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_bi_stream_frame_tx: {
      value: cdktf.numberToHclTerraform(struct!.maxBiStreamFrameTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_data_frame_rx: {
      value: cdktf.numberToHclTerraform(struct!.maxDataFrameRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_data_frame_tx: {
      value: cdktf.numberToHclTerraform(struct!.maxDataFrameTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_stream_data_frame_rx: {
      value: cdktf.numberToHclTerraform(struct!.maxStreamDataFrameRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_stream_data_frame_tx: {
      value: cdktf.numberToHclTerraform(struct!.maxStreamDataFrameTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_stream_too_big: {
      value: cdktf.numberToHclTerraform(struct!.maxStreamTooBig),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_uni_stream_frame_rx: {
      value: cdktf.numberToHclTerraform(struct!.maxUniStreamFrameRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_uni_stream_frame_tx: {
      value: cdktf.numberToHclTerraform(struct!.maxUniStreamFrameTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    needs_ack: {
      value: cdktf.numberToHclTerraform(struct!.needsAck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_conn_id_frame_rx: {
      value: cdktf.numberToHclTerraform(struct!.newConnIdFrameRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_conn_id_frame_tx: {
      value: cdktf.numberToHclTerraform(struct!.newConnIdFrameTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_conn_id_len_non_zero: {
      value: cdktf.numberToHclTerraform(struct!.newConnIdLenNonZero),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_conn_id_len_zero: {
      value: cdktf.numberToHclTerraform(struct!.newConnIdLenZero),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_token_frame_rx: {
      value: cdktf.numberToHclTerraform(struct!.newTokenFrameRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_token_frame_tx: {
      value: cdktf.numberToHclTerraform(struct!.newTokenFrameTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_a10_socket: {
      value: cdktf.numberToHclTerraform(struct!.noA10Socket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_congest_wnd: {
      value: cdktf.numberToHclTerraform(struct!.noCongestWnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_next_scid: {
      value: cdktf.numberToHclTerraform(struct!.noNextScid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_other_side_socket: {
      value: cdktf.numberToHclTerraform(struct!.noOtherSideSocket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_tx_queue: {
      value: cdktf.numberToHclTerraform(struct!.noTxQueue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_w_engine: {
      value: cdktf.numberToHclTerraform(struct!.noWEngine),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_w_socket: {
      value: cdktf.numberToHclTerraform(struct!.noWSocket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    on_ld_timeout: {
      value: cdktf.numberToHclTerraform(struct!.onLdTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_drop: {
      value: cdktf.numberToHclTerraform(struct!.packetDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_loop_limited: {
      value: cdktf.numberToHclTerraform(struct!.packetLoopLimited),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_lost: {
      value: cdktf.numberToHclTerraform(struct!.packetLost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_out_of_order: {
      value: cdktf.numberToHclTerraform(struct!.packetOutOfOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_retransmit: {
      value: cdktf.numberToHclTerraform(struct!.packetRetransmit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_rx: {
      value: cdktf.numberToHclTerraform(struct!.packetRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_too_short: {
      value: cdktf.numberToHclTerraform(struct!.packetTooShort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_tx: {
      value: cdktf.numberToHclTerraform(struct!.packetTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_tx_failed: {
      value: cdktf.numberToHclTerraform(struct!.packetTxFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    padding_frame_rx: {
      value: cdktf.numberToHclTerraform(struct!.paddingFrameRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    padding_frame_tx: {
      value: cdktf.numberToHclTerraform(struct!.paddingFrameTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_error: {
      value: cdktf.numberToHclTerraform(struct!.parseError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path_challenge_frame_rx: {
      value: cdktf.numberToHclTerraform(struct!.pathChallengeFrameRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path_challenge_frame_tx: {
      value: cdktf.numberToHclTerraform(struct!.pathChallengeFrameTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path_response_frame_rx: {
      value: cdktf.numberToHclTerraform(struct!.pathResponseFrameRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path_response_frame_tx: {
      value: cdktf.numberToHclTerraform(struct!.pathResponseFrameTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ping_frame_rx: {
      value: cdktf.numberToHclTerraform(struct!.pingFrameRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ping_frame_tx: {
      value: cdktf.numberToHclTerraform(struct!.pingFrameTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkt_acked_failed: {
      value: cdktf.numberToHclTerraform(struct!.pktAckedFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pn_delete_failed: {
      value: cdktf.numberToHclTerraform(struct!.pnDeleteFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pn_insert_failed: {
      value: cdktf.numberToHclTerraform(struct!.pnInsertFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    q_conn_created: {
      value: cdktf.numberToHclTerraform(struct!.qConnCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    q_conn_freed: {
      value: cdktf.numberToHclTerraform(struct!.qConnFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quic_free: {
      value: cdktf.numberToHclTerraform(struct!.quicFree),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quic_lb: {
      value: cdktf.numberToHclTerraform(struct!.quicLb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quic_malloc: {
      value: cdktf.numberToHclTerraform(struct!.quicMalloc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quic_malloc_failure: {
      value: cdktf.numberToHclTerraform(struct!.quicMallocFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quic_packet_drop: {
      value: cdktf.numberToHclTerraform(struct!.quicPacketDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quick_malloc_failure: {
      value: cdktf.numberToHclTerraform(struct!.quickMallocFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    receive_wnd_limited: {
      value: cdktf.numberToHclTerraform(struct!.receiveWndLimited),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remote_bi_stream_closed: {
      value: cdktf.numberToHclTerraform(struct!.remoteBiStreamClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remote_bi_stream_created: {
      value: cdktf.numberToHclTerraform(struct!.remoteBiStreamCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remote_bi_stream_current: {
      value: cdktf.numberToHclTerraform(struct!.remoteBiStreamCurrent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remote_uni_stream_closed: {
      value: cdktf.numberToHclTerraform(struct!.remoteUniStreamClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remote_uni_stream_created: {
      value: cdktf.numberToHclTerraform(struct!.remoteUniStreamCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remote_uni_stream_current: {
      value: cdktf.numberToHclTerraform(struct!.remoteUniStreamCurrent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retire_conn_id_frame_rx: {
      value: cdktf.numberToHclTerraform(struct!.retireConnIdFrameRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retire_conn_id_frame_tx: {
      value: cdktf.numberToHclTerraform(struct!.retireConnIdFrameTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_rx: {
      value: cdktf.numberToHclTerraform(struct!.retryRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_tx: {
      value: cdktf.numberToHclTerraform(struct!.retryTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rtt_0_rx: {
      value: cdktf.numberToHclTerraform(struct!.rtt0Rx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rtt_0_tx: {
      value: cdktf.numberToHclTerraform(struct!.rtt0Tx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rtt_updated: {
      value: cdktf.numberToHclTerraform(struct!.rttUpdated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_conn_attempted: {
      value: cdktf.numberToHclTerraform(struct!.serverConnAttempted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_conn_created: {
      value: cdktf.numberToHclTerraform(struct!.serverConnCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_conn_failed: {
      value: cdktf.numberToHclTerraform(struct!.serverConnFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_conn_handshake: {
      value: cdktf.numberToHclTerraform(struct!.serverConnHandshake),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_conn_local_closed: {
      value: cdktf.numberToHclTerraform(struct!.serverConnLocalClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_conn_remote_closed: {
      value: cdktf.numberToHclTerraform(struct!.serverConnRemoteClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_receive_new_token: {
      value: cdktf.numberToHclTerraform(struct!.serverReceiveNewToken),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_rx_handshake_done: {
      value: cdktf.numberToHclTerraform(struct!.serverRxHandshakeDone),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stateless_reset: {
      value: cdktf.numberToHclTerraform(struct!.statelessReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_09_frame_rx: {
      value: cdktf.numberToHclTerraform(struct!.stream09FrameRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_09_frame_tx: {
      value: cdktf.numberToHclTerraform(struct!.stream09FrameTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_0a_frame_rx: {
      value: cdktf.numberToHclTerraform(struct!.stream0AFrameRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_0a_frame_tx: {
      value: cdktf.numberToHclTerraform(struct!.stream0AFrameTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_0b_frame_rx: {
      value: cdktf.numberToHclTerraform(struct!.stream0BFrameRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_0b_frame_tx: {
      value: cdktf.numberToHclTerraform(struct!.stream0BFrameTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_0c_frame_rx: {
      value: cdktf.numberToHclTerraform(struct!.stream0CFrameRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_0c_frame_tx: {
      value: cdktf.numberToHclTerraform(struct!.stream0CFrameTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_0d_frame_rx: {
      value: cdktf.numberToHclTerraform(struct!.stream0DFrameRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_0d_frame_tx: {
      value: cdktf.numberToHclTerraform(struct!.stream0DFrameTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_0e_frame_rx: {
      value: cdktf.numberToHclTerraform(struct!.stream0EFrameRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_0e_frame_tx: {
      value: cdktf.numberToHclTerraform(struct!.stream0EFrameTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_0f_frame_rx: {
      value: cdktf.numberToHclTerraform(struct!.stream0FFrameRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_0f_frame_tx: {
      value: cdktf.numberToHclTerraform(struct!.stream0FFrameTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_blocked: {
      value: cdktf.numberToHclTerraform(struct!.streamBlocked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_congest: {
      value: cdktf.numberToHclTerraform(struct!.streamCongest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_created: {
      value: cdktf.numberToHclTerraform(struct!.streamCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_data_blocked_frame_rx: {
      value: cdktf.numberToHclTerraform(struct!.streamDataBlockedFrameRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_data_blocked_frame_tx: {
      value: cdktf.numberToHclTerraform(struct!.streamDataBlockedFrameTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_error: {
      value: cdktf.numberToHclTerraform(struct!.streamError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_fail_to_insert: {
      value: cdktf.numberToHclTerraform(struct!.streamFailToInsert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_fin_down: {
      value: cdktf.numberToHclTerraform(struct!.streamFinDown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_fin_receive: {
      value: cdktf.numberToHclTerraform(struct!.streamFinReceive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_fin_send: {
      value: cdktf.numberToHclTerraform(struct!.streamFinSend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_fin_up: {
      value: cdktf.numberToHclTerraform(struct!.streamFinUp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_frame_rx: {
      value: cdktf.numberToHclTerraform(struct!.streamFrameRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_frame_tx: {
      value: cdktf.numberToHclTerraform(struct!.streamFrameTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_freed: {
      value: cdktf.numberToHclTerraform(struct!.streamFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_id_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.streamIdMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_not_send: {
      value: cdktf.numberToHclTerraform(struct!.streamNotSend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_open: {
      value: cdktf.numberToHclTerraform(struct!.streamOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_pause_data: {
      value: cdktf.numberToHclTerraform(struct!.streamPauseData),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_resume_data: {
      value: cdktf.numberToHclTerraform(struct!.streamResumeData),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_rst_frame_rx: {
      value: cdktf.numberToHclTerraform(struct!.streamRstFrameRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_rst_frame_tx: {
      value: cdktf.numberToHclTerraform(struct!.streamRstFrameTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_stop_frame_rx: {
      value: cdktf.numberToHclTerraform(struct!.streamStopFrameRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_stop_frame_tx: {
      value: cdktf.numberToHclTerraform(struct!.streamStopFrameTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_stop_send: {
      value: cdktf.numberToHclTerraform(struct!.streamStopSend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token_len_too_long: {
      value: cdktf.numberToHclTerraform(struct!.tokenLenTooLong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    too_noisy_fuzzing: {
      value: cdktf.numberToHclTerraform(struct!.tooNoisyFuzzing),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tx_buffer_deq: {
      value: cdktf.numberToHclTerraform(struct!.txBufferDeq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tx_buffer_enq: {
      value: cdktf.numberToHclTerraform(struct!.txBufferEnq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uni_stream_data_blocked_frame_rx: {
      value: cdktf.numberToHclTerraform(struct!.uniStreamDataBlockedFrameRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uni_stream_data_blocked_frame_tx: {
      value: cdktf.numberToHclTerraform(struct!.uniStreamDataBlockedFrameTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_frame: {
      value: cdktf.numberToHclTerraform(struct!.unknownFrame),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_scid: {
      value: cdktf.numberToHclTerraform(struct!.unknownScid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ver_rx: {
      value: cdktf.numberToHclTerraform(struct!.verRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ver_tx: {
      value: cdktf.numberToHclTerraform(struct!.verTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wsocket_closed: {
      value: cdktf.numberToHclTerraform(struct!.wsocketClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wsocket_created: {
      value: cdktf.numberToHclTerraform(struct!.wsocketCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zero_frame_packet: {
      value: cdktf.numberToHclTerraform(struct!.zeroFramePacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbQuicStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbQuicStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._a10SocketClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.a10SocketClosed = this._a10SocketClosed;
    }
    if (this._a10SocketCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.a10SocketCreated = this._a10SocketCreated;
    }
    if (this._ackAlarm !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackAlarm = this._ackAlarm;
    }
    if (this._ackDelayHuge !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackDelayHuge = this._ackDelayHuge;
    }
    if (this._ackEcnFrameRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackEcnFrameRx = this._ackEcnFrameRx;
    }
    if (this._ackEcnFrameTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackEcnFrameTx = this._ackEcnFrameTx;
    }
    if (this._ackFrameRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackFrameRx = this._ackFrameRx;
    }
    if (this._ackFrameTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackFrameTx = this._ackFrameTx;
    }
    if (this._ackRngHuge1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackRngHuge1 = this._ackRngHuge1;
    }
    if (this._ackRngHuge2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackRngHuge2 = this._ackRngHuge2;
    }
    if (this._ackRngHuge3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackRngHuge3 = this._ackRngHuge3;
    }
    if (this._ackedPacketFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackedPacketFreed = this._ackedPacketFreed;
    }
    if (this._appBufferDeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.appBufferDeq = this._appBufferDeq;
    }
    if (this._appBufferEnq !== undefined) {
      hasAnyValues = true;
      internalValueResult.appBufferEnq = this._appBufferEnq;
    }
    if (this._appBufferQueueFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.appBufferQueueFull = this._appBufferQueueFull;
    }
    if (this._appConnCloseFrameRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.appConnCloseFrameRx = this._appConnCloseFrameRx;
    }
    if (this._appConnCloseFrameTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.appConnCloseFrameTx = this._appConnCloseFrameTx;
    }
    if (this._biStreamDataBlockedFrameRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.biStreamDataBlockedFrameRx = this._biStreamDataBlockedFrameRx;
    }
    if (this._biStreamDataBlockedFrameTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.biStreamDataBlockedFrameTx = this._biStreamDataBlockedFrameTx;
    }
    if (this._burstLimited !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstLimited = this._burstLimited;
    }
    if (this._cannotInsertCid !== undefined) {
      hasAnyValues = true;
      internalValueResult.cannotInsertCid = this._cannotInsertCid;
    }
    if (this._cannotInsertSrt !== undefined) {
      hasAnyValues = true;
      internalValueResult.cannotInsertSrt = this._cannotInsertSrt;
    }
    if (this._cannotRetireCid !== undefined) {
      hasAnyValues = true;
      internalValueResult.cannotRetireCid = this._cannotRetireCid;
    }
    if (this._cidCpuHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidCpuHash = this._cidCpuHash;
    }
    if (this._cidZero !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidZero = this._cidZero;
    }
    if (this._clientConnAttempted !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientConnAttempted = this._clientConnAttempted;
    }
    if (this._clientConnCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientConnCreated = this._clientConnCreated;
    }
    if (this._clientConnFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientConnFailed = this._clientConnFailed;
    }
    if (this._clientConnHandshake !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientConnHandshake = this._clientConnHandshake;
    }
    if (this._clientConnLocalClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientConnLocalClosed = this._clientConnLocalClosed;
    }
    if (this._clientConnRemoteClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientConnRemoteClosed = this._clientConnRemoteClosed;
    }
    if (this._closeAlarm !== undefined) {
      hasAnyValues = true;
      internalValueResult.closeAlarm = this._closeAlarm;
    }
    if (this._congestWndDec !== undefined) {
      hasAnyValues = true;
      internalValueResult.congestWndDec = this._congestWndDec;
    }
    if (this._congestWndInc !== undefined) {
      hasAnyValues = true;
      internalValueResult.congestWndInc = this._congestWndInc;
    }
    if (this._connCloseFrameRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.connCloseFrameRx = this._connCloseFrameRx;
    }
    if (this._connCloseFrameTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.connCloseFrameTx = this._connCloseFrameTx;
    }
    if (this._cryptoFrameRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoFrameRx = this._cryptoFrameRx;
    }
    if (this._cryptoFrameTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoFrameTx = this._cryptoFrameTx;
    }
    if (this._cryptoStreamNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoStreamNotFound = this._cryptoStreamNotFound;
    }
    if (this._dataBlockedFrameRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataBlockedFrameRx = this._dataBlockedFrameRx;
    }
    if (this._dataBlockedFrameTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataBlockedFrameTx = this._dataBlockedFrameTx;
    }
    if (this._dcidMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcidMismatch = this._dcidMismatch;
    }
    if (this._decodeFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.decodeFailed = this._decodeFailed;
    }
    if (this._decodeStreamError !== undefined) {
      hasAnyValues = true;
      internalValueResult.decodeStreamError = this._decodeStreamError;
    }
    if (this._delayAlarm !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayAlarm = this._delayAlarm;
    }
    if (this._delayedAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayedAck = this._delayedAck;
    }
    if (this._encodeError !== undefined) {
      hasAnyValues = true;
      internalValueResult.encodeError = this._encodeError;
    }
    if (this._errFlowControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.errFlowControl = this._errFlowControl;
    }
    if (this._errFrameDec !== undefined) {
      hasAnyValues = true;
      internalValueResult.errFrameDec = this._errFrameDec;
    }
    if (this._errFrameDec1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.errFrameDec1 = this._errFrameDec1;
    }
    if (this._errFrameDecb !== undefined) {
      hasAnyValues = true;
      internalValueResult.errFrameDecb = this._errFrameDecb;
    }
    if (this._errFrameFinalSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.errFrameFinalSize = this._errFrameFinalSize;
    }
    if (this._errProtocolViolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.errProtocolViolation = this._errProtocolViolation;
    }
    if (this._errorClose !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorClose = this._errorClose;
    }
    if (this._exceedFlowControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedFlowControl = this._exceedFlowControl;
    }
    if (this._exceedMaxStreamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedMaxStreamId = this._exceedMaxStreamId;
    }
    if (this._handshakeDoneFrameRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.handshakeDoneFrameRx = this._handshakeDoneFrameRx;
    }
    if (this._handshakeDoneFrameTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.handshakeDoneFrameTx = this._handshakeDoneFrameTx;
    }
    if (this._handshakeRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.handshakeRx = this._handshakeRx;
    }
    if (this._handshakeTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.handshakeTx = this._handshakeTx;
    }
    if (this._idleAlarm !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleAlarm = this._idleAlarm;
    }
    if (this._illegalLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.illegalLen = this._illegalLen;
    }
    if (this._illegalReasonLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.illegalReasonLen = this._illegalReasonLen;
    }
    if (this._illegalRpt !== undefined) {
      hasAnyValues = true;
      internalValueResult.illegalRpt = this._illegalRpt;
    }
    if (this._illegalSeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.illegalSeq = this._illegalSeq;
    }
    if (this._illegalStreamLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.illegalStreamLen = this._illegalStreamLen;
    }
    if (this._illegalTokenLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.illegalTokenLen = this._illegalTokenLen;
    }
    if (this._initialRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialRx = this._initialRx;
    }
    if (this._initialTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialTx = this._initialTx;
    }
    if (this._invalidCidSig !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidCidSig = this._invalidCidSig;
    }
    if (this._invalidConnMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidConnMatch = this._invalidConnMatch;
    }
    if (this._invalidPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidPacket = this._invalidPacket;
    }
    if (this._invalidSessionPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidSessionPacket = this._invalidSessionPacket;
    }
    if (this._invalidVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidVersion = this._invalidVersion;
    }
    if (this._iovAllocLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.iovAllocLen = this._iovAllocLen;
    }
    if (this._iovBufferBind !== undefined) {
      hasAnyValues = true;
      internalValueResult.iovBufferBind = this._iovBufferBind;
    }
    if (this._iovBufferDup !== undefined) {
      hasAnyValues = true;
      internalValueResult.iovBufferDup = this._iovBufferDup;
    }
    if (this._iovBufferUnbind !== undefined) {
      hasAnyValues = true;
      internalValueResult.iovBufferUnbind = this._iovBufferUnbind;
    }
    if (this._iovIo !== undefined) {
      hasAnyValues = true;
      internalValueResult.iovIo = this._iovIo;
    }
    if (this._iovSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.iovSystem = this._iovSystem;
    }
    if (this._keyUpdateRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyUpdateRx = this._keyUpdateRx;
    }
    if (this._keyUpdateTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyUpdateTx = this._keyUpdateTx;
    }
    if (this._localBiStreamClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.localBiStreamClosed = this._localBiStreamClosed;
    }
    if (this._localBiStreamCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.localBiStreamCreated = this._localBiStreamCreated;
    }
    if (this._localBiStreamCurrent !== undefined) {
      hasAnyValues = true;
      internalValueResult.localBiStreamCurrent = this._localBiStreamCurrent;
    }
    if (this._localUniStreamClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.localUniStreamClosed = this._localUniStreamClosed;
    }
    if (this._localUniStreamCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.localUniStreamCreated = this._localUniStreamCreated;
    }
    if (this._localUniStreamCurrent !== undefined) {
      hasAnyValues = true;
      internalValueResult.localUniStreamCurrent = this._localUniStreamCurrent;
    }
    if (this._maxBiStreamFrameRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBiStreamFrameRx = this._maxBiStreamFrameRx;
    }
    if (this._maxBiStreamFrameTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBiStreamFrameTx = this._maxBiStreamFrameTx;
    }
    if (this._maxDataFrameRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDataFrameRx = this._maxDataFrameRx;
    }
    if (this._maxDataFrameTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDataFrameTx = this._maxDataFrameTx;
    }
    if (this._maxStreamDataFrameRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxStreamDataFrameRx = this._maxStreamDataFrameRx;
    }
    if (this._maxStreamDataFrameTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxStreamDataFrameTx = this._maxStreamDataFrameTx;
    }
    if (this._maxStreamTooBig !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxStreamTooBig = this._maxStreamTooBig;
    }
    if (this._maxUniStreamFrameRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUniStreamFrameRx = this._maxUniStreamFrameRx;
    }
    if (this._maxUniStreamFrameTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUniStreamFrameTx = this._maxUniStreamFrameTx;
    }
    if (this._needsAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.needsAck = this._needsAck;
    }
    if (this._newConnIdFrameRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.newConnIdFrameRx = this._newConnIdFrameRx;
    }
    if (this._newConnIdFrameTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.newConnIdFrameTx = this._newConnIdFrameTx;
    }
    if (this._newConnIdLenNonZero !== undefined) {
      hasAnyValues = true;
      internalValueResult.newConnIdLenNonZero = this._newConnIdLenNonZero;
    }
    if (this._newConnIdLenZero !== undefined) {
      hasAnyValues = true;
      internalValueResult.newConnIdLenZero = this._newConnIdLenZero;
    }
    if (this._newTokenFrameRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.newTokenFrameRx = this._newTokenFrameRx;
    }
    if (this._newTokenFrameTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.newTokenFrameTx = this._newTokenFrameTx;
    }
    if (this._noA10Socket !== undefined) {
      hasAnyValues = true;
      internalValueResult.noA10Socket = this._noA10Socket;
    }
    if (this._noCongestWnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCongestWnd = this._noCongestWnd;
    }
    if (this._noNextScid !== undefined) {
      hasAnyValues = true;
      internalValueResult.noNextScid = this._noNextScid;
    }
    if (this._noOtherSideSocket !== undefined) {
      hasAnyValues = true;
      internalValueResult.noOtherSideSocket = this._noOtherSideSocket;
    }
    if (this._noTxQueue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noTxQueue = this._noTxQueue;
    }
    if (this._noWEngine !== undefined) {
      hasAnyValues = true;
      internalValueResult.noWEngine = this._noWEngine;
    }
    if (this._noWSocket !== undefined) {
      hasAnyValues = true;
      internalValueResult.noWSocket = this._noWSocket;
    }
    if (this._onLdTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.onLdTimeout = this._onLdTimeout;
    }
    if (this._packetDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetDrop = this._packetDrop;
    }
    if (this._packetLoopLimited !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetLoopLimited = this._packetLoopLimited;
    }
    if (this._packetLost !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetLost = this._packetLost;
    }
    if (this._packetOutOfOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetOutOfOrder = this._packetOutOfOrder;
    }
    if (this._packetRetransmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetRetransmit = this._packetRetransmit;
    }
    if (this._packetRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetRx = this._packetRx;
    }
    if (this._packetTooShort !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetTooShort = this._packetTooShort;
    }
    if (this._packetTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetTx = this._packetTx;
    }
    if (this._packetTxFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetTxFailed = this._packetTxFailed;
    }
    if (this._paddingFrameRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.paddingFrameRx = this._paddingFrameRx;
    }
    if (this._paddingFrameTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.paddingFrameTx = this._paddingFrameTx;
    }
    if (this._parseError !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseError = this._parseError;
    }
    if (this._pathChallengeFrameRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathChallengeFrameRx = this._pathChallengeFrameRx;
    }
    if (this._pathChallengeFrameTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathChallengeFrameTx = this._pathChallengeFrameTx;
    }
    if (this._pathResponseFrameRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathResponseFrameRx = this._pathResponseFrameRx;
    }
    if (this._pathResponseFrameTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathResponseFrameTx = this._pathResponseFrameTx;
    }
    if (this._pingFrameRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingFrameRx = this._pingFrameRx;
    }
    if (this._pingFrameTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingFrameTx = this._pingFrameTx;
    }
    if (this._pktAckedFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktAckedFailed = this._pktAckedFailed;
    }
    if (this._pnDeleteFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.pnDeleteFailed = this._pnDeleteFailed;
    }
    if (this._pnInsertFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.pnInsertFailed = this._pnInsertFailed;
    }
    if (this._qConnCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.qConnCreated = this._qConnCreated;
    }
    if (this._qConnFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.qConnFreed = this._qConnFreed;
    }
    if (this._quicFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicFree = this._quicFree;
    }
    if (this._quicLb !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicLb = this._quicLb;
    }
    if (this._quicMalloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicMalloc = this._quicMalloc;
    }
    if (this._quicMallocFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicMallocFailure = this._quicMallocFailure;
    }
    if (this._quicPacketDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicPacketDrop = this._quicPacketDrop;
    }
    if (this._quickMallocFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.quickMallocFailure = this._quickMallocFailure;
    }
    if (this._receiveWndLimited !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiveWndLimited = this._receiveWndLimited;
    }
    if (this._remoteBiStreamClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteBiStreamClosed = this._remoteBiStreamClosed;
    }
    if (this._remoteBiStreamCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteBiStreamCreated = this._remoteBiStreamCreated;
    }
    if (this._remoteBiStreamCurrent !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteBiStreamCurrent = this._remoteBiStreamCurrent;
    }
    if (this._remoteUniStreamClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteUniStreamClosed = this._remoteUniStreamClosed;
    }
    if (this._remoteUniStreamCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteUniStreamCreated = this._remoteUniStreamCreated;
    }
    if (this._remoteUniStreamCurrent !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteUniStreamCurrent = this._remoteUniStreamCurrent;
    }
    if (this._retireConnIdFrameRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.retireConnIdFrameRx = this._retireConnIdFrameRx;
    }
    if (this._retireConnIdFrameTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.retireConnIdFrameTx = this._retireConnIdFrameTx;
    }
    if (this._retryRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryRx = this._retryRx;
    }
    if (this._retryTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryTx = this._retryTx;
    }
    if (this._rtt0Rx !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtt0Rx = this._rtt0Rx;
    }
    if (this._rtt0Tx !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtt0Tx = this._rtt0Tx;
    }
    if (this._rttUpdated !== undefined) {
      hasAnyValues = true;
      internalValueResult.rttUpdated = this._rttUpdated;
    }
    if (this._serverConnAttempted !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverConnAttempted = this._serverConnAttempted;
    }
    if (this._serverConnCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverConnCreated = this._serverConnCreated;
    }
    if (this._serverConnFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverConnFailed = this._serverConnFailed;
    }
    if (this._serverConnHandshake !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverConnHandshake = this._serverConnHandshake;
    }
    if (this._serverConnLocalClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverConnLocalClosed = this._serverConnLocalClosed;
    }
    if (this._serverConnRemoteClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverConnRemoteClosed = this._serverConnRemoteClosed;
    }
    if (this._serverReceiveNewToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverReceiveNewToken = this._serverReceiveNewToken;
    }
    if (this._serverRxHandshakeDone !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverRxHandshakeDone = this._serverRxHandshakeDone;
    }
    if (this._statelessReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.statelessReset = this._statelessReset;
    }
    if (this._stream09FrameRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.stream09FrameRx = this._stream09FrameRx;
    }
    if (this._stream09FrameTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.stream09FrameTx = this._stream09FrameTx;
    }
    if (this._stream0AFrameRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.stream0AFrameRx = this._stream0AFrameRx;
    }
    if (this._stream0AFrameTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.stream0AFrameTx = this._stream0AFrameTx;
    }
    if (this._stream0BFrameRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.stream0BFrameRx = this._stream0BFrameRx;
    }
    if (this._stream0BFrameTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.stream0BFrameTx = this._stream0BFrameTx;
    }
    if (this._stream0CFrameRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.stream0CFrameRx = this._stream0CFrameRx;
    }
    if (this._stream0CFrameTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.stream0CFrameTx = this._stream0CFrameTx;
    }
    if (this._stream0DFrameRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.stream0DFrameRx = this._stream0DFrameRx;
    }
    if (this._stream0DFrameTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.stream0DFrameTx = this._stream0DFrameTx;
    }
    if (this._stream0EFrameRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.stream0EFrameRx = this._stream0EFrameRx;
    }
    if (this._stream0EFrameTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.stream0EFrameTx = this._stream0EFrameTx;
    }
    if (this._stream0FFrameRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.stream0FFrameRx = this._stream0FFrameRx;
    }
    if (this._stream0FFrameTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.stream0FFrameTx = this._stream0FFrameTx;
    }
    if (this._streamBlocked !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamBlocked = this._streamBlocked;
    }
    if (this._streamCongest !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamCongest = this._streamCongest;
    }
    if (this._streamCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamCreated = this._streamCreated;
    }
    if (this._streamDataBlockedFrameRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamDataBlockedFrameRx = this._streamDataBlockedFrameRx;
    }
    if (this._streamDataBlockedFrameTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamDataBlockedFrameTx = this._streamDataBlockedFrameTx;
    }
    if (this._streamError !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamError = this._streamError;
    }
    if (this._streamFailToInsert !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamFailToInsert = this._streamFailToInsert;
    }
    if (this._streamFinDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamFinDown = this._streamFinDown;
    }
    if (this._streamFinReceive !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamFinReceive = this._streamFinReceive;
    }
    if (this._streamFinSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamFinSend = this._streamFinSend;
    }
    if (this._streamFinUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamFinUp = this._streamFinUp;
    }
    if (this._streamFrameRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamFrameRx = this._streamFrameRx;
    }
    if (this._streamFrameTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamFrameTx = this._streamFrameTx;
    }
    if (this._streamFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamFreed = this._streamFreed;
    }
    if (this._streamIdMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamIdMismatch = this._streamIdMismatch;
    }
    if (this._streamNotSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamNotSend = this._streamNotSend;
    }
    if (this._streamOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamOpen = this._streamOpen;
    }
    if (this._streamPauseData !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamPauseData = this._streamPauseData;
    }
    if (this._streamResumeData !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamResumeData = this._streamResumeData;
    }
    if (this._streamRstFrameRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamRstFrameRx = this._streamRstFrameRx;
    }
    if (this._streamRstFrameTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamRstFrameTx = this._streamRstFrameTx;
    }
    if (this._streamStopFrameRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamStopFrameRx = this._streamStopFrameRx;
    }
    if (this._streamStopFrameTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamStopFrameTx = this._streamStopFrameTx;
    }
    if (this._streamStopSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamStopSend = this._streamStopSend;
    }
    if (this._tokenLenTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenLenTooLong = this._tokenLenTooLong;
    }
    if (this._tooNoisyFuzzing !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooNoisyFuzzing = this._tooNoisyFuzzing;
    }
    if (this._txBufferDeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.txBufferDeq = this._txBufferDeq;
    }
    if (this._txBufferEnq !== undefined) {
      hasAnyValues = true;
      internalValueResult.txBufferEnq = this._txBufferEnq;
    }
    if (this._uniStreamDataBlockedFrameRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniStreamDataBlockedFrameRx = this._uniStreamDataBlockedFrameRx;
    }
    if (this._uniStreamDataBlockedFrameTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniStreamDataBlockedFrameTx = this._uniStreamDataBlockedFrameTx;
    }
    if (this._unknownFrame !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownFrame = this._unknownFrame;
    }
    if (this._unknownScid !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownScid = this._unknownScid;
    }
    if (this._verRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.verRx = this._verRx;
    }
    if (this._verTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.verTx = this._verTx;
    }
    if (this._wsocketClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.wsocketClosed = this._wsocketClosed;
    }
    if (this._wsocketCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.wsocketCreated = this._wsocketCreated;
    }
    if (this._zeroFramePacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeroFramePacket = this._zeroFramePacket;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbQuicStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._a10SocketClosed = undefined;
      this._a10SocketCreated = undefined;
      this._ackAlarm = undefined;
      this._ackDelayHuge = undefined;
      this._ackEcnFrameRx = undefined;
      this._ackEcnFrameTx = undefined;
      this._ackFrameRx = undefined;
      this._ackFrameTx = undefined;
      this._ackRngHuge1 = undefined;
      this._ackRngHuge2 = undefined;
      this._ackRngHuge3 = undefined;
      this._ackedPacketFreed = undefined;
      this._appBufferDeq = undefined;
      this._appBufferEnq = undefined;
      this._appBufferQueueFull = undefined;
      this._appConnCloseFrameRx = undefined;
      this._appConnCloseFrameTx = undefined;
      this._biStreamDataBlockedFrameRx = undefined;
      this._biStreamDataBlockedFrameTx = undefined;
      this._burstLimited = undefined;
      this._cannotInsertCid = undefined;
      this._cannotInsertSrt = undefined;
      this._cannotRetireCid = undefined;
      this._cidCpuHash = undefined;
      this._cidZero = undefined;
      this._clientConnAttempted = undefined;
      this._clientConnCreated = undefined;
      this._clientConnFailed = undefined;
      this._clientConnHandshake = undefined;
      this._clientConnLocalClosed = undefined;
      this._clientConnRemoteClosed = undefined;
      this._closeAlarm = undefined;
      this._congestWndDec = undefined;
      this._congestWndInc = undefined;
      this._connCloseFrameRx = undefined;
      this._connCloseFrameTx = undefined;
      this._cryptoFrameRx = undefined;
      this._cryptoFrameTx = undefined;
      this._cryptoStreamNotFound = undefined;
      this._dataBlockedFrameRx = undefined;
      this._dataBlockedFrameTx = undefined;
      this._dcidMismatch = undefined;
      this._decodeFailed = undefined;
      this._decodeStreamError = undefined;
      this._delayAlarm = undefined;
      this._delayedAck = undefined;
      this._encodeError = undefined;
      this._errFlowControl = undefined;
      this._errFrameDec = undefined;
      this._errFrameDec1 = undefined;
      this._errFrameDecb = undefined;
      this._errFrameFinalSize = undefined;
      this._errProtocolViolation = undefined;
      this._errorClose = undefined;
      this._exceedFlowControl = undefined;
      this._exceedMaxStreamId = undefined;
      this._handshakeDoneFrameRx = undefined;
      this._handshakeDoneFrameTx = undefined;
      this._handshakeRx = undefined;
      this._handshakeTx = undefined;
      this._idleAlarm = undefined;
      this._illegalLen = undefined;
      this._illegalReasonLen = undefined;
      this._illegalRpt = undefined;
      this._illegalSeq = undefined;
      this._illegalStreamLen = undefined;
      this._illegalTokenLen = undefined;
      this._initialRx = undefined;
      this._initialTx = undefined;
      this._invalidCidSig = undefined;
      this._invalidConnMatch = undefined;
      this._invalidPacket = undefined;
      this._invalidSessionPacket = undefined;
      this._invalidVersion = undefined;
      this._iovAllocLen = undefined;
      this._iovBufferBind = undefined;
      this._iovBufferDup = undefined;
      this._iovBufferUnbind = undefined;
      this._iovIo = undefined;
      this._iovSystem = undefined;
      this._keyUpdateRx = undefined;
      this._keyUpdateTx = undefined;
      this._localBiStreamClosed = undefined;
      this._localBiStreamCreated = undefined;
      this._localBiStreamCurrent = undefined;
      this._localUniStreamClosed = undefined;
      this._localUniStreamCreated = undefined;
      this._localUniStreamCurrent = undefined;
      this._maxBiStreamFrameRx = undefined;
      this._maxBiStreamFrameTx = undefined;
      this._maxDataFrameRx = undefined;
      this._maxDataFrameTx = undefined;
      this._maxStreamDataFrameRx = undefined;
      this._maxStreamDataFrameTx = undefined;
      this._maxStreamTooBig = undefined;
      this._maxUniStreamFrameRx = undefined;
      this._maxUniStreamFrameTx = undefined;
      this._needsAck = undefined;
      this._newConnIdFrameRx = undefined;
      this._newConnIdFrameTx = undefined;
      this._newConnIdLenNonZero = undefined;
      this._newConnIdLenZero = undefined;
      this._newTokenFrameRx = undefined;
      this._newTokenFrameTx = undefined;
      this._noA10Socket = undefined;
      this._noCongestWnd = undefined;
      this._noNextScid = undefined;
      this._noOtherSideSocket = undefined;
      this._noTxQueue = undefined;
      this._noWEngine = undefined;
      this._noWSocket = undefined;
      this._onLdTimeout = undefined;
      this._packetDrop = undefined;
      this._packetLoopLimited = undefined;
      this._packetLost = undefined;
      this._packetOutOfOrder = undefined;
      this._packetRetransmit = undefined;
      this._packetRx = undefined;
      this._packetTooShort = undefined;
      this._packetTx = undefined;
      this._packetTxFailed = undefined;
      this._paddingFrameRx = undefined;
      this._paddingFrameTx = undefined;
      this._parseError = undefined;
      this._pathChallengeFrameRx = undefined;
      this._pathChallengeFrameTx = undefined;
      this._pathResponseFrameRx = undefined;
      this._pathResponseFrameTx = undefined;
      this._pingFrameRx = undefined;
      this._pingFrameTx = undefined;
      this._pktAckedFailed = undefined;
      this._pnDeleteFailed = undefined;
      this._pnInsertFailed = undefined;
      this._qConnCreated = undefined;
      this._qConnFreed = undefined;
      this._quicFree = undefined;
      this._quicLb = undefined;
      this._quicMalloc = undefined;
      this._quicMallocFailure = undefined;
      this._quicPacketDrop = undefined;
      this._quickMallocFailure = undefined;
      this._receiveWndLimited = undefined;
      this._remoteBiStreamClosed = undefined;
      this._remoteBiStreamCreated = undefined;
      this._remoteBiStreamCurrent = undefined;
      this._remoteUniStreamClosed = undefined;
      this._remoteUniStreamCreated = undefined;
      this._remoteUniStreamCurrent = undefined;
      this._retireConnIdFrameRx = undefined;
      this._retireConnIdFrameTx = undefined;
      this._retryRx = undefined;
      this._retryTx = undefined;
      this._rtt0Rx = undefined;
      this._rtt0Tx = undefined;
      this._rttUpdated = undefined;
      this._serverConnAttempted = undefined;
      this._serverConnCreated = undefined;
      this._serverConnFailed = undefined;
      this._serverConnHandshake = undefined;
      this._serverConnLocalClosed = undefined;
      this._serverConnRemoteClosed = undefined;
      this._serverReceiveNewToken = undefined;
      this._serverRxHandshakeDone = undefined;
      this._statelessReset = undefined;
      this._stream09FrameRx = undefined;
      this._stream09FrameTx = undefined;
      this._stream0AFrameRx = undefined;
      this._stream0AFrameTx = undefined;
      this._stream0BFrameRx = undefined;
      this._stream0BFrameTx = undefined;
      this._stream0CFrameRx = undefined;
      this._stream0CFrameTx = undefined;
      this._stream0DFrameRx = undefined;
      this._stream0DFrameTx = undefined;
      this._stream0EFrameRx = undefined;
      this._stream0EFrameTx = undefined;
      this._stream0FFrameRx = undefined;
      this._stream0FFrameTx = undefined;
      this._streamBlocked = undefined;
      this._streamCongest = undefined;
      this._streamCreated = undefined;
      this._streamDataBlockedFrameRx = undefined;
      this._streamDataBlockedFrameTx = undefined;
      this._streamError = undefined;
      this._streamFailToInsert = undefined;
      this._streamFinDown = undefined;
      this._streamFinReceive = undefined;
      this._streamFinSend = undefined;
      this._streamFinUp = undefined;
      this._streamFrameRx = undefined;
      this._streamFrameTx = undefined;
      this._streamFreed = undefined;
      this._streamIdMismatch = undefined;
      this._streamNotSend = undefined;
      this._streamOpen = undefined;
      this._streamPauseData = undefined;
      this._streamResumeData = undefined;
      this._streamRstFrameRx = undefined;
      this._streamRstFrameTx = undefined;
      this._streamStopFrameRx = undefined;
      this._streamStopFrameTx = undefined;
      this._streamStopSend = undefined;
      this._tokenLenTooLong = undefined;
      this._tooNoisyFuzzing = undefined;
      this._txBufferDeq = undefined;
      this._txBufferEnq = undefined;
      this._uniStreamDataBlockedFrameRx = undefined;
      this._uniStreamDataBlockedFrameTx = undefined;
      this._unknownFrame = undefined;
      this._unknownScid = undefined;
      this._verRx = undefined;
      this._verTx = undefined;
      this._wsocketClosed = undefined;
      this._wsocketCreated = undefined;
      this._zeroFramePacket = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._a10SocketClosed = value.a10SocketClosed;
      this._a10SocketCreated = value.a10SocketCreated;
      this._ackAlarm = value.ackAlarm;
      this._ackDelayHuge = value.ackDelayHuge;
      this._ackEcnFrameRx = value.ackEcnFrameRx;
      this._ackEcnFrameTx = value.ackEcnFrameTx;
      this._ackFrameRx = value.ackFrameRx;
      this._ackFrameTx = value.ackFrameTx;
      this._ackRngHuge1 = value.ackRngHuge1;
      this._ackRngHuge2 = value.ackRngHuge2;
      this._ackRngHuge3 = value.ackRngHuge3;
      this._ackedPacketFreed = value.ackedPacketFreed;
      this._appBufferDeq = value.appBufferDeq;
      this._appBufferEnq = value.appBufferEnq;
      this._appBufferQueueFull = value.appBufferQueueFull;
      this._appConnCloseFrameRx = value.appConnCloseFrameRx;
      this._appConnCloseFrameTx = value.appConnCloseFrameTx;
      this._biStreamDataBlockedFrameRx = value.biStreamDataBlockedFrameRx;
      this._biStreamDataBlockedFrameTx = value.biStreamDataBlockedFrameTx;
      this._burstLimited = value.burstLimited;
      this._cannotInsertCid = value.cannotInsertCid;
      this._cannotInsertSrt = value.cannotInsertSrt;
      this._cannotRetireCid = value.cannotRetireCid;
      this._cidCpuHash = value.cidCpuHash;
      this._cidZero = value.cidZero;
      this._clientConnAttempted = value.clientConnAttempted;
      this._clientConnCreated = value.clientConnCreated;
      this._clientConnFailed = value.clientConnFailed;
      this._clientConnHandshake = value.clientConnHandshake;
      this._clientConnLocalClosed = value.clientConnLocalClosed;
      this._clientConnRemoteClosed = value.clientConnRemoteClosed;
      this._closeAlarm = value.closeAlarm;
      this._congestWndDec = value.congestWndDec;
      this._congestWndInc = value.congestWndInc;
      this._connCloseFrameRx = value.connCloseFrameRx;
      this._connCloseFrameTx = value.connCloseFrameTx;
      this._cryptoFrameRx = value.cryptoFrameRx;
      this._cryptoFrameTx = value.cryptoFrameTx;
      this._cryptoStreamNotFound = value.cryptoStreamNotFound;
      this._dataBlockedFrameRx = value.dataBlockedFrameRx;
      this._dataBlockedFrameTx = value.dataBlockedFrameTx;
      this._dcidMismatch = value.dcidMismatch;
      this._decodeFailed = value.decodeFailed;
      this._decodeStreamError = value.decodeStreamError;
      this._delayAlarm = value.delayAlarm;
      this._delayedAck = value.delayedAck;
      this._encodeError = value.encodeError;
      this._errFlowControl = value.errFlowControl;
      this._errFrameDec = value.errFrameDec;
      this._errFrameDec1 = value.errFrameDec1;
      this._errFrameDecb = value.errFrameDecb;
      this._errFrameFinalSize = value.errFrameFinalSize;
      this._errProtocolViolation = value.errProtocolViolation;
      this._errorClose = value.errorClose;
      this._exceedFlowControl = value.exceedFlowControl;
      this._exceedMaxStreamId = value.exceedMaxStreamId;
      this._handshakeDoneFrameRx = value.handshakeDoneFrameRx;
      this._handshakeDoneFrameTx = value.handshakeDoneFrameTx;
      this._handshakeRx = value.handshakeRx;
      this._handshakeTx = value.handshakeTx;
      this._idleAlarm = value.idleAlarm;
      this._illegalLen = value.illegalLen;
      this._illegalReasonLen = value.illegalReasonLen;
      this._illegalRpt = value.illegalRpt;
      this._illegalSeq = value.illegalSeq;
      this._illegalStreamLen = value.illegalStreamLen;
      this._illegalTokenLen = value.illegalTokenLen;
      this._initialRx = value.initialRx;
      this._initialTx = value.initialTx;
      this._invalidCidSig = value.invalidCidSig;
      this._invalidConnMatch = value.invalidConnMatch;
      this._invalidPacket = value.invalidPacket;
      this._invalidSessionPacket = value.invalidSessionPacket;
      this._invalidVersion = value.invalidVersion;
      this._iovAllocLen = value.iovAllocLen;
      this._iovBufferBind = value.iovBufferBind;
      this._iovBufferDup = value.iovBufferDup;
      this._iovBufferUnbind = value.iovBufferUnbind;
      this._iovIo = value.iovIo;
      this._iovSystem = value.iovSystem;
      this._keyUpdateRx = value.keyUpdateRx;
      this._keyUpdateTx = value.keyUpdateTx;
      this._localBiStreamClosed = value.localBiStreamClosed;
      this._localBiStreamCreated = value.localBiStreamCreated;
      this._localBiStreamCurrent = value.localBiStreamCurrent;
      this._localUniStreamClosed = value.localUniStreamClosed;
      this._localUniStreamCreated = value.localUniStreamCreated;
      this._localUniStreamCurrent = value.localUniStreamCurrent;
      this._maxBiStreamFrameRx = value.maxBiStreamFrameRx;
      this._maxBiStreamFrameTx = value.maxBiStreamFrameTx;
      this._maxDataFrameRx = value.maxDataFrameRx;
      this._maxDataFrameTx = value.maxDataFrameTx;
      this._maxStreamDataFrameRx = value.maxStreamDataFrameRx;
      this._maxStreamDataFrameTx = value.maxStreamDataFrameTx;
      this._maxStreamTooBig = value.maxStreamTooBig;
      this._maxUniStreamFrameRx = value.maxUniStreamFrameRx;
      this._maxUniStreamFrameTx = value.maxUniStreamFrameTx;
      this._needsAck = value.needsAck;
      this._newConnIdFrameRx = value.newConnIdFrameRx;
      this._newConnIdFrameTx = value.newConnIdFrameTx;
      this._newConnIdLenNonZero = value.newConnIdLenNonZero;
      this._newConnIdLenZero = value.newConnIdLenZero;
      this._newTokenFrameRx = value.newTokenFrameRx;
      this._newTokenFrameTx = value.newTokenFrameTx;
      this._noA10Socket = value.noA10Socket;
      this._noCongestWnd = value.noCongestWnd;
      this._noNextScid = value.noNextScid;
      this._noOtherSideSocket = value.noOtherSideSocket;
      this._noTxQueue = value.noTxQueue;
      this._noWEngine = value.noWEngine;
      this._noWSocket = value.noWSocket;
      this._onLdTimeout = value.onLdTimeout;
      this._packetDrop = value.packetDrop;
      this._packetLoopLimited = value.packetLoopLimited;
      this._packetLost = value.packetLost;
      this._packetOutOfOrder = value.packetOutOfOrder;
      this._packetRetransmit = value.packetRetransmit;
      this._packetRx = value.packetRx;
      this._packetTooShort = value.packetTooShort;
      this._packetTx = value.packetTx;
      this._packetTxFailed = value.packetTxFailed;
      this._paddingFrameRx = value.paddingFrameRx;
      this._paddingFrameTx = value.paddingFrameTx;
      this._parseError = value.parseError;
      this._pathChallengeFrameRx = value.pathChallengeFrameRx;
      this._pathChallengeFrameTx = value.pathChallengeFrameTx;
      this._pathResponseFrameRx = value.pathResponseFrameRx;
      this._pathResponseFrameTx = value.pathResponseFrameTx;
      this._pingFrameRx = value.pingFrameRx;
      this._pingFrameTx = value.pingFrameTx;
      this._pktAckedFailed = value.pktAckedFailed;
      this._pnDeleteFailed = value.pnDeleteFailed;
      this._pnInsertFailed = value.pnInsertFailed;
      this._qConnCreated = value.qConnCreated;
      this._qConnFreed = value.qConnFreed;
      this._quicFree = value.quicFree;
      this._quicLb = value.quicLb;
      this._quicMalloc = value.quicMalloc;
      this._quicMallocFailure = value.quicMallocFailure;
      this._quicPacketDrop = value.quicPacketDrop;
      this._quickMallocFailure = value.quickMallocFailure;
      this._receiveWndLimited = value.receiveWndLimited;
      this._remoteBiStreamClosed = value.remoteBiStreamClosed;
      this._remoteBiStreamCreated = value.remoteBiStreamCreated;
      this._remoteBiStreamCurrent = value.remoteBiStreamCurrent;
      this._remoteUniStreamClosed = value.remoteUniStreamClosed;
      this._remoteUniStreamCreated = value.remoteUniStreamCreated;
      this._remoteUniStreamCurrent = value.remoteUniStreamCurrent;
      this._retireConnIdFrameRx = value.retireConnIdFrameRx;
      this._retireConnIdFrameTx = value.retireConnIdFrameTx;
      this._retryRx = value.retryRx;
      this._retryTx = value.retryTx;
      this._rtt0Rx = value.rtt0Rx;
      this._rtt0Tx = value.rtt0Tx;
      this._rttUpdated = value.rttUpdated;
      this._serverConnAttempted = value.serverConnAttempted;
      this._serverConnCreated = value.serverConnCreated;
      this._serverConnFailed = value.serverConnFailed;
      this._serverConnHandshake = value.serverConnHandshake;
      this._serverConnLocalClosed = value.serverConnLocalClosed;
      this._serverConnRemoteClosed = value.serverConnRemoteClosed;
      this._serverReceiveNewToken = value.serverReceiveNewToken;
      this._serverRxHandshakeDone = value.serverRxHandshakeDone;
      this._statelessReset = value.statelessReset;
      this._stream09FrameRx = value.stream09FrameRx;
      this._stream09FrameTx = value.stream09FrameTx;
      this._stream0AFrameRx = value.stream0AFrameRx;
      this._stream0AFrameTx = value.stream0AFrameTx;
      this._stream0BFrameRx = value.stream0BFrameRx;
      this._stream0BFrameTx = value.stream0BFrameTx;
      this._stream0CFrameRx = value.stream0CFrameRx;
      this._stream0CFrameTx = value.stream0CFrameTx;
      this._stream0DFrameRx = value.stream0DFrameRx;
      this._stream0DFrameTx = value.stream0DFrameTx;
      this._stream0EFrameRx = value.stream0EFrameRx;
      this._stream0EFrameTx = value.stream0EFrameTx;
      this._stream0FFrameRx = value.stream0FFrameRx;
      this._stream0FFrameTx = value.stream0FFrameTx;
      this._streamBlocked = value.streamBlocked;
      this._streamCongest = value.streamCongest;
      this._streamCreated = value.streamCreated;
      this._streamDataBlockedFrameRx = value.streamDataBlockedFrameRx;
      this._streamDataBlockedFrameTx = value.streamDataBlockedFrameTx;
      this._streamError = value.streamError;
      this._streamFailToInsert = value.streamFailToInsert;
      this._streamFinDown = value.streamFinDown;
      this._streamFinReceive = value.streamFinReceive;
      this._streamFinSend = value.streamFinSend;
      this._streamFinUp = value.streamFinUp;
      this._streamFrameRx = value.streamFrameRx;
      this._streamFrameTx = value.streamFrameTx;
      this._streamFreed = value.streamFreed;
      this._streamIdMismatch = value.streamIdMismatch;
      this._streamNotSend = value.streamNotSend;
      this._streamOpen = value.streamOpen;
      this._streamPauseData = value.streamPauseData;
      this._streamResumeData = value.streamResumeData;
      this._streamRstFrameRx = value.streamRstFrameRx;
      this._streamRstFrameTx = value.streamRstFrameTx;
      this._streamStopFrameRx = value.streamStopFrameRx;
      this._streamStopFrameTx = value.streamStopFrameTx;
      this._streamStopSend = value.streamStopSend;
      this._tokenLenTooLong = value.tokenLenTooLong;
      this._tooNoisyFuzzing = value.tooNoisyFuzzing;
      this._txBufferDeq = value.txBufferDeq;
      this._txBufferEnq = value.txBufferEnq;
      this._uniStreamDataBlockedFrameRx = value.uniStreamDataBlockedFrameRx;
      this._uniStreamDataBlockedFrameTx = value.uniStreamDataBlockedFrameTx;
      this._unknownFrame = value.unknownFrame;
      this._unknownScid = value.unknownScid;
      this._verRx = value.verRx;
      this._verTx = value.verTx;
      this._wsocketClosed = value.wsocketClosed;
      this._wsocketCreated = value.wsocketCreated;
      this._zeroFramePacket = value.zeroFramePacket;
    }
  }

  // a10_socket_closed - computed: false, optional: true, required: false
  private _a10SocketClosed?: number; 
  public get a10SocketClosed() {
    return this.getNumberAttribute('a10_socket_closed');
  }
  public set a10SocketClosed(value: number) {
    this._a10SocketClosed = value;
  }
  public resetA10SocketClosed() {
    this._a10SocketClosed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a10SocketClosedInput() {
    return this._a10SocketClosed;
  }

  // a10_socket_created - computed: false, optional: true, required: false
  private _a10SocketCreated?: number; 
  public get a10SocketCreated() {
    return this.getNumberAttribute('a10_socket_created');
  }
  public set a10SocketCreated(value: number) {
    this._a10SocketCreated = value;
  }
  public resetA10SocketCreated() {
    this._a10SocketCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a10SocketCreatedInput() {
    return this._a10SocketCreated;
  }

  // ack_alarm - computed: false, optional: true, required: false
  private _ackAlarm?: number; 
  public get ackAlarm() {
    return this.getNumberAttribute('ack_alarm');
  }
  public set ackAlarm(value: number) {
    this._ackAlarm = value;
  }
  public resetAckAlarm() {
    this._ackAlarm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackAlarmInput() {
    return this._ackAlarm;
  }

  // ack_delay_huge - computed: false, optional: true, required: false
  private _ackDelayHuge?: number; 
  public get ackDelayHuge() {
    return this.getNumberAttribute('ack_delay_huge');
  }
  public set ackDelayHuge(value: number) {
    this._ackDelayHuge = value;
  }
  public resetAckDelayHuge() {
    this._ackDelayHuge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackDelayHugeInput() {
    return this._ackDelayHuge;
  }

  // ack_ecn_frame_rx - computed: false, optional: true, required: false
  private _ackEcnFrameRx?: number; 
  public get ackEcnFrameRx() {
    return this.getNumberAttribute('ack_ecn_frame_rx');
  }
  public set ackEcnFrameRx(value: number) {
    this._ackEcnFrameRx = value;
  }
  public resetAckEcnFrameRx() {
    this._ackEcnFrameRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackEcnFrameRxInput() {
    return this._ackEcnFrameRx;
  }

  // ack_ecn_frame_tx - computed: false, optional: true, required: false
  private _ackEcnFrameTx?: number; 
  public get ackEcnFrameTx() {
    return this.getNumberAttribute('ack_ecn_frame_tx');
  }
  public set ackEcnFrameTx(value: number) {
    this._ackEcnFrameTx = value;
  }
  public resetAckEcnFrameTx() {
    this._ackEcnFrameTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackEcnFrameTxInput() {
    return this._ackEcnFrameTx;
  }

  // ack_frame_rx - computed: false, optional: true, required: false
  private _ackFrameRx?: number; 
  public get ackFrameRx() {
    return this.getNumberAttribute('ack_frame_rx');
  }
  public set ackFrameRx(value: number) {
    this._ackFrameRx = value;
  }
  public resetAckFrameRx() {
    this._ackFrameRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackFrameRxInput() {
    return this._ackFrameRx;
  }

  // ack_frame_tx - computed: false, optional: true, required: false
  private _ackFrameTx?: number; 
  public get ackFrameTx() {
    return this.getNumberAttribute('ack_frame_tx');
  }
  public set ackFrameTx(value: number) {
    this._ackFrameTx = value;
  }
  public resetAckFrameTx() {
    this._ackFrameTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackFrameTxInput() {
    return this._ackFrameTx;
  }

  // ack_rng_huge_1 - computed: false, optional: true, required: false
  private _ackRngHuge1?: number; 
  public get ackRngHuge1() {
    return this.getNumberAttribute('ack_rng_huge_1');
  }
  public set ackRngHuge1(value: number) {
    this._ackRngHuge1 = value;
  }
  public resetAckRngHuge1() {
    this._ackRngHuge1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackRngHuge1Input() {
    return this._ackRngHuge1;
  }

  // ack_rng_huge_2 - computed: false, optional: true, required: false
  private _ackRngHuge2?: number; 
  public get ackRngHuge2() {
    return this.getNumberAttribute('ack_rng_huge_2');
  }
  public set ackRngHuge2(value: number) {
    this._ackRngHuge2 = value;
  }
  public resetAckRngHuge2() {
    this._ackRngHuge2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackRngHuge2Input() {
    return this._ackRngHuge2;
  }

  // ack_rng_huge_3 - computed: false, optional: true, required: false
  private _ackRngHuge3?: number; 
  public get ackRngHuge3() {
    return this.getNumberAttribute('ack_rng_huge_3');
  }
  public set ackRngHuge3(value: number) {
    this._ackRngHuge3 = value;
  }
  public resetAckRngHuge3() {
    this._ackRngHuge3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackRngHuge3Input() {
    return this._ackRngHuge3;
  }

  // acked_packet_freed - computed: false, optional: true, required: false
  private _ackedPacketFreed?: number; 
  public get ackedPacketFreed() {
    return this.getNumberAttribute('acked_packet_freed');
  }
  public set ackedPacketFreed(value: number) {
    this._ackedPacketFreed = value;
  }
  public resetAckedPacketFreed() {
    this._ackedPacketFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackedPacketFreedInput() {
    return this._ackedPacketFreed;
  }

  // app_buffer_deq - computed: false, optional: true, required: false
  private _appBufferDeq?: number; 
  public get appBufferDeq() {
    return this.getNumberAttribute('app_buffer_deq');
  }
  public set appBufferDeq(value: number) {
    this._appBufferDeq = value;
  }
  public resetAppBufferDeq() {
    this._appBufferDeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appBufferDeqInput() {
    return this._appBufferDeq;
  }

  // app_buffer_enq - computed: false, optional: true, required: false
  private _appBufferEnq?: number; 
  public get appBufferEnq() {
    return this.getNumberAttribute('app_buffer_enq');
  }
  public set appBufferEnq(value: number) {
    this._appBufferEnq = value;
  }
  public resetAppBufferEnq() {
    this._appBufferEnq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appBufferEnqInput() {
    return this._appBufferEnq;
  }

  // app_buffer_queue_full - computed: false, optional: true, required: false
  private _appBufferQueueFull?: number; 
  public get appBufferQueueFull() {
    return this.getNumberAttribute('app_buffer_queue_full');
  }
  public set appBufferQueueFull(value: number) {
    this._appBufferQueueFull = value;
  }
  public resetAppBufferQueueFull() {
    this._appBufferQueueFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appBufferQueueFullInput() {
    return this._appBufferQueueFull;
  }

  // app_conn_close_frame_rx - computed: false, optional: true, required: false
  private _appConnCloseFrameRx?: number; 
  public get appConnCloseFrameRx() {
    return this.getNumberAttribute('app_conn_close_frame_rx');
  }
  public set appConnCloseFrameRx(value: number) {
    this._appConnCloseFrameRx = value;
  }
  public resetAppConnCloseFrameRx() {
    this._appConnCloseFrameRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appConnCloseFrameRxInput() {
    return this._appConnCloseFrameRx;
  }

  // app_conn_close_frame_tx - computed: false, optional: true, required: false
  private _appConnCloseFrameTx?: number; 
  public get appConnCloseFrameTx() {
    return this.getNumberAttribute('app_conn_close_frame_tx');
  }
  public set appConnCloseFrameTx(value: number) {
    this._appConnCloseFrameTx = value;
  }
  public resetAppConnCloseFrameTx() {
    this._appConnCloseFrameTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appConnCloseFrameTxInput() {
    return this._appConnCloseFrameTx;
  }

  // bi_stream_data_blocked_frame_rx - computed: false, optional: true, required: false
  private _biStreamDataBlockedFrameRx?: number; 
  public get biStreamDataBlockedFrameRx() {
    return this.getNumberAttribute('bi_stream_data_blocked_frame_rx');
  }
  public set biStreamDataBlockedFrameRx(value: number) {
    this._biStreamDataBlockedFrameRx = value;
  }
  public resetBiStreamDataBlockedFrameRx() {
    this._biStreamDataBlockedFrameRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get biStreamDataBlockedFrameRxInput() {
    return this._biStreamDataBlockedFrameRx;
  }

  // bi_stream_data_blocked_frame_tx - computed: false, optional: true, required: false
  private _biStreamDataBlockedFrameTx?: number; 
  public get biStreamDataBlockedFrameTx() {
    return this.getNumberAttribute('bi_stream_data_blocked_frame_tx');
  }
  public set biStreamDataBlockedFrameTx(value: number) {
    this._biStreamDataBlockedFrameTx = value;
  }
  public resetBiStreamDataBlockedFrameTx() {
    this._biStreamDataBlockedFrameTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get biStreamDataBlockedFrameTxInput() {
    return this._biStreamDataBlockedFrameTx;
  }

  // burst_limited - computed: false, optional: true, required: false
  private _burstLimited?: number; 
  public get burstLimited() {
    return this.getNumberAttribute('burst_limited');
  }
  public set burstLimited(value: number) {
    this._burstLimited = value;
  }
  public resetBurstLimited() {
    this._burstLimited = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstLimitedInput() {
    return this._burstLimited;
  }

  // cannot_insert_cid - computed: false, optional: true, required: false
  private _cannotInsertCid?: number; 
  public get cannotInsertCid() {
    return this.getNumberAttribute('cannot_insert_cid');
  }
  public set cannotInsertCid(value: number) {
    this._cannotInsertCid = value;
  }
  public resetCannotInsertCid() {
    this._cannotInsertCid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cannotInsertCidInput() {
    return this._cannotInsertCid;
  }

  // cannot_insert_srt - computed: false, optional: true, required: false
  private _cannotInsertSrt?: number; 
  public get cannotInsertSrt() {
    return this.getNumberAttribute('cannot_insert_srt');
  }
  public set cannotInsertSrt(value: number) {
    this._cannotInsertSrt = value;
  }
  public resetCannotInsertSrt() {
    this._cannotInsertSrt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cannotInsertSrtInput() {
    return this._cannotInsertSrt;
  }

  // cannot_retire_cid - computed: false, optional: true, required: false
  private _cannotRetireCid?: number; 
  public get cannotRetireCid() {
    return this.getNumberAttribute('cannot_retire_cid');
  }
  public set cannotRetireCid(value: number) {
    this._cannotRetireCid = value;
  }
  public resetCannotRetireCid() {
    this._cannotRetireCid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cannotRetireCidInput() {
    return this._cannotRetireCid;
  }

  // cid_cpu_hash - computed: false, optional: true, required: false
  private _cidCpuHash?: number; 
  public get cidCpuHash() {
    return this.getNumberAttribute('cid_cpu_hash');
  }
  public set cidCpuHash(value: number) {
    this._cidCpuHash = value;
  }
  public resetCidCpuHash() {
    this._cidCpuHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidCpuHashInput() {
    return this._cidCpuHash;
  }

  // cid_zero - computed: false, optional: true, required: false
  private _cidZero?: number; 
  public get cidZero() {
    return this.getNumberAttribute('cid_zero');
  }
  public set cidZero(value: number) {
    this._cidZero = value;
  }
  public resetCidZero() {
    this._cidZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidZeroInput() {
    return this._cidZero;
  }

  // client_conn_attempted - computed: false, optional: true, required: false
  private _clientConnAttempted?: number; 
  public get clientConnAttempted() {
    return this.getNumberAttribute('client_conn_attempted');
  }
  public set clientConnAttempted(value: number) {
    this._clientConnAttempted = value;
  }
  public resetClientConnAttempted() {
    this._clientConnAttempted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientConnAttemptedInput() {
    return this._clientConnAttempted;
  }

  // client_conn_created - computed: false, optional: true, required: false
  private _clientConnCreated?: number; 
  public get clientConnCreated() {
    return this.getNumberAttribute('client_conn_created');
  }
  public set clientConnCreated(value: number) {
    this._clientConnCreated = value;
  }
  public resetClientConnCreated() {
    this._clientConnCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientConnCreatedInput() {
    return this._clientConnCreated;
  }

  // client_conn_failed - computed: false, optional: true, required: false
  private _clientConnFailed?: number; 
  public get clientConnFailed() {
    return this.getNumberAttribute('client_conn_failed');
  }
  public set clientConnFailed(value: number) {
    this._clientConnFailed = value;
  }
  public resetClientConnFailed() {
    this._clientConnFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientConnFailedInput() {
    return this._clientConnFailed;
  }

  // client_conn_handshake - computed: false, optional: true, required: false
  private _clientConnHandshake?: number; 
  public get clientConnHandshake() {
    return this.getNumberAttribute('client_conn_handshake');
  }
  public set clientConnHandshake(value: number) {
    this._clientConnHandshake = value;
  }
  public resetClientConnHandshake() {
    this._clientConnHandshake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientConnHandshakeInput() {
    return this._clientConnHandshake;
  }

  // client_conn_local_closed - computed: false, optional: true, required: false
  private _clientConnLocalClosed?: number; 
  public get clientConnLocalClosed() {
    return this.getNumberAttribute('client_conn_local_closed');
  }
  public set clientConnLocalClosed(value: number) {
    this._clientConnLocalClosed = value;
  }
  public resetClientConnLocalClosed() {
    this._clientConnLocalClosed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientConnLocalClosedInput() {
    return this._clientConnLocalClosed;
  }

  // client_conn_remote_closed - computed: false, optional: true, required: false
  private _clientConnRemoteClosed?: number; 
  public get clientConnRemoteClosed() {
    return this.getNumberAttribute('client_conn_remote_closed');
  }
  public set clientConnRemoteClosed(value: number) {
    this._clientConnRemoteClosed = value;
  }
  public resetClientConnRemoteClosed() {
    this._clientConnRemoteClosed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientConnRemoteClosedInput() {
    return this._clientConnRemoteClosed;
  }

  // close_alarm - computed: false, optional: true, required: false
  private _closeAlarm?: number; 
  public get closeAlarm() {
    return this.getNumberAttribute('close_alarm');
  }
  public set closeAlarm(value: number) {
    this._closeAlarm = value;
  }
  public resetCloseAlarm() {
    this._closeAlarm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeAlarmInput() {
    return this._closeAlarm;
  }

  // congest_wnd_dec - computed: false, optional: true, required: false
  private _congestWndDec?: number; 
  public get congestWndDec() {
    return this.getNumberAttribute('congest_wnd_dec');
  }
  public set congestWndDec(value: number) {
    this._congestWndDec = value;
  }
  public resetCongestWndDec() {
    this._congestWndDec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get congestWndDecInput() {
    return this._congestWndDec;
  }

  // congest_wnd_inc - computed: false, optional: true, required: false
  private _congestWndInc?: number; 
  public get congestWndInc() {
    return this.getNumberAttribute('congest_wnd_inc');
  }
  public set congestWndInc(value: number) {
    this._congestWndInc = value;
  }
  public resetCongestWndInc() {
    this._congestWndInc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get congestWndIncInput() {
    return this._congestWndInc;
  }

  // conn_close_frame_rx - computed: false, optional: true, required: false
  private _connCloseFrameRx?: number; 
  public get connCloseFrameRx() {
    return this.getNumberAttribute('conn_close_frame_rx');
  }
  public set connCloseFrameRx(value: number) {
    this._connCloseFrameRx = value;
  }
  public resetConnCloseFrameRx() {
    this._connCloseFrameRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connCloseFrameRxInput() {
    return this._connCloseFrameRx;
  }

  // conn_close_frame_tx - computed: false, optional: true, required: false
  private _connCloseFrameTx?: number; 
  public get connCloseFrameTx() {
    return this.getNumberAttribute('conn_close_frame_tx');
  }
  public set connCloseFrameTx(value: number) {
    this._connCloseFrameTx = value;
  }
  public resetConnCloseFrameTx() {
    this._connCloseFrameTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connCloseFrameTxInput() {
    return this._connCloseFrameTx;
  }

  // crypto_frame_rx - computed: false, optional: true, required: false
  private _cryptoFrameRx?: number; 
  public get cryptoFrameRx() {
    return this.getNumberAttribute('crypto_frame_rx');
  }
  public set cryptoFrameRx(value: number) {
    this._cryptoFrameRx = value;
  }
  public resetCryptoFrameRx() {
    this._cryptoFrameRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoFrameRxInput() {
    return this._cryptoFrameRx;
  }

  // crypto_frame_tx - computed: false, optional: true, required: false
  private _cryptoFrameTx?: number; 
  public get cryptoFrameTx() {
    return this.getNumberAttribute('crypto_frame_tx');
  }
  public set cryptoFrameTx(value: number) {
    this._cryptoFrameTx = value;
  }
  public resetCryptoFrameTx() {
    this._cryptoFrameTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoFrameTxInput() {
    return this._cryptoFrameTx;
  }

  // crypto_stream_not_found - computed: false, optional: true, required: false
  private _cryptoStreamNotFound?: number; 
  public get cryptoStreamNotFound() {
    return this.getNumberAttribute('crypto_stream_not_found');
  }
  public set cryptoStreamNotFound(value: number) {
    this._cryptoStreamNotFound = value;
  }
  public resetCryptoStreamNotFound() {
    this._cryptoStreamNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoStreamNotFoundInput() {
    return this._cryptoStreamNotFound;
  }

  // data_blocked_frame_rx - computed: false, optional: true, required: false
  private _dataBlockedFrameRx?: number; 
  public get dataBlockedFrameRx() {
    return this.getNumberAttribute('data_blocked_frame_rx');
  }
  public set dataBlockedFrameRx(value: number) {
    this._dataBlockedFrameRx = value;
  }
  public resetDataBlockedFrameRx() {
    this._dataBlockedFrameRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataBlockedFrameRxInput() {
    return this._dataBlockedFrameRx;
  }

  // data_blocked_frame_tx - computed: false, optional: true, required: false
  private _dataBlockedFrameTx?: number; 
  public get dataBlockedFrameTx() {
    return this.getNumberAttribute('data_blocked_frame_tx');
  }
  public set dataBlockedFrameTx(value: number) {
    this._dataBlockedFrameTx = value;
  }
  public resetDataBlockedFrameTx() {
    this._dataBlockedFrameTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataBlockedFrameTxInput() {
    return this._dataBlockedFrameTx;
  }

  // dcid_mismatch - computed: false, optional: true, required: false
  private _dcidMismatch?: number; 
  public get dcidMismatch() {
    return this.getNumberAttribute('dcid_mismatch');
  }
  public set dcidMismatch(value: number) {
    this._dcidMismatch = value;
  }
  public resetDcidMismatch() {
    this._dcidMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcidMismatchInput() {
    return this._dcidMismatch;
  }

  // decode_failed - computed: false, optional: true, required: false
  private _decodeFailed?: number; 
  public get decodeFailed() {
    return this.getNumberAttribute('decode_failed');
  }
  public set decodeFailed(value: number) {
    this._decodeFailed = value;
  }
  public resetDecodeFailed() {
    this._decodeFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decodeFailedInput() {
    return this._decodeFailed;
  }

  // decode_stream_error - computed: false, optional: true, required: false
  private _decodeStreamError?: number; 
  public get decodeStreamError() {
    return this.getNumberAttribute('decode_stream_error');
  }
  public set decodeStreamError(value: number) {
    this._decodeStreamError = value;
  }
  public resetDecodeStreamError() {
    this._decodeStreamError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decodeStreamErrorInput() {
    return this._decodeStreamError;
  }

  // delay_alarm - computed: false, optional: true, required: false
  private _delayAlarm?: number; 
  public get delayAlarm() {
    return this.getNumberAttribute('delay_alarm');
  }
  public set delayAlarm(value: number) {
    this._delayAlarm = value;
  }
  public resetDelayAlarm() {
    this._delayAlarm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayAlarmInput() {
    return this._delayAlarm;
  }

  // delayed_ack - computed: false, optional: true, required: false
  private _delayedAck?: number; 
  public get delayedAck() {
    return this.getNumberAttribute('delayed_ack');
  }
  public set delayedAck(value: number) {
    this._delayedAck = value;
  }
  public resetDelayedAck() {
    this._delayedAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayedAckInput() {
    return this._delayedAck;
  }

  // encode_error - computed: false, optional: true, required: false
  private _encodeError?: number; 
  public get encodeError() {
    return this.getNumberAttribute('encode_error');
  }
  public set encodeError(value: number) {
    this._encodeError = value;
  }
  public resetEncodeError() {
    this._encodeError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodeErrorInput() {
    return this._encodeError;
  }

  // err_flow_control - computed: false, optional: true, required: false
  private _errFlowControl?: number; 
  public get errFlowControl() {
    return this.getNumberAttribute('err_flow_control');
  }
  public set errFlowControl(value: number) {
    this._errFlowControl = value;
  }
  public resetErrFlowControl() {
    this._errFlowControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errFlowControlInput() {
    return this._errFlowControl;
  }

  // err_frame_dec - computed: false, optional: true, required: false
  private _errFrameDec?: number; 
  public get errFrameDec() {
    return this.getNumberAttribute('err_frame_dec');
  }
  public set errFrameDec(value: number) {
    this._errFrameDec = value;
  }
  public resetErrFrameDec() {
    this._errFrameDec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errFrameDecInput() {
    return this._errFrameDec;
  }

  // err_frame_dec1 - computed: false, optional: true, required: false
  private _errFrameDec1?: number; 
  public get errFrameDec1() {
    return this.getNumberAttribute('err_frame_dec1');
  }
  public set errFrameDec1(value: number) {
    this._errFrameDec1 = value;
  }
  public resetErrFrameDec1() {
    this._errFrameDec1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errFrameDec1Input() {
    return this._errFrameDec1;
  }

  // err_frame_decb - computed: false, optional: true, required: false
  private _errFrameDecb?: number; 
  public get errFrameDecb() {
    return this.getNumberAttribute('err_frame_decb');
  }
  public set errFrameDecb(value: number) {
    this._errFrameDecb = value;
  }
  public resetErrFrameDecb() {
    this._errFrameDecb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errFrameDecbInput() {
    return this._errFrameDecb;
  }

  // err_frame_final_size - computed: false, optional: true, required: false
  private _errFrameFinalSize?: number; 
  public get errFrameFinalSize() {
    return this.getNumberAttribute('err_frame_final_size');
  }
  public set errFrameFinalSize(value: number) {
    this._errFrameFinalSize = value;
  }
  public resetErrFrameFinalSize() {
    this._errFrameFinalSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errFrameFinalSizeInput() {
    return this._errFrameFinalSize;
  }

  // err_protocol_violation - computed: false, optional: true, required: false
  private _errProtocolViolation?: number; 
  public get errProtocolViolation() {
    return this.getNumberAttribute('err_protocol_violation');
  }
  public set errProtocolViolation(value: number) {
    this._errProtocolViolation = value;
  }
  public resetErrProtocolViolation() {
    this._errProtocolViolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errProtocolViolationInput() {
    return this._errProtocolViolation;
  }

  // error_close - computed: false, optional: true, required: false
  private _errorClose?: number; 
  public get errorClose() {
    return this.getNumberAttribute('error_close');
  }
  public set errorClose(value: number) {
    this._errorClose = value;
  }
  public resetErrorClose() {
    this._errorClose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorCloseInput() {
    return this._errorClose;
  }

  // exceed_flow_control - computed: false, optional: true, required: false
  private _exceedFlowControl?: number; 
  public get exceedFlowControl() {
    return this.getNumberAttribute('exceed_flow_control');
  }
  public set exceedFlowControl(value: number) {
    this._exceedFlowControl = value;
  }
  public resetExceedFlowControl() {
    this._exceedFlowControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedFlowControlInput() {
    return this._exceedFlowControl;
  }

  // exceed_max_stream_id - computed: false, optional: true, required: false
  private _exceedMaxStreamId?: number; 
  public get exceedMaxStreamId() {
    return this.getNumberAttribute('exceed_max_stream_id');
  }
  public set exceedMaxStreamId(value: number) {
    this._exceedMaxStreamId = value;
  }
  public resetExceedMaxStreamId() {
    this._exceedMaxStreamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedMaxStreamIdInput() {
    return this._exceedMaxStreamId;
  }

  // handshake_done_frame_rx - computed: false, optional: true, required: false
  private _handshakeDoneFrameRx?: number; 
  public get handshakeDoneFrameRx() {
    return this.getNumberAttribute('handshake_done_frame_rx');
  }
  public set handshakeDoneFrameRx(value: number) {
    this._handshakeDoneFrameRx = value;
  }
  public resetHandshakeDoneFrameRx() {
    this._handshakeDoneFrameRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handshakeDoneFrameRxInput() {
    return this._handshakeDoneFrameRx;
  }

  // handshake_done_frame_tx - computed: false, optional: true, required: false
  private _handshakeDoneFrameTx?: number; 
  public get handshakeDoneFrameTx() {
    return this.getNumberAttribute('handshake_done_frame_tx');
  }
  public set handshakeDoneFrameTx(value: number) {
    this._handshakeDoneFrameTx = value;
  }
  public resetHandshakeDoneFrameTx() {
    this._handshakeDoneFrameTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handshakeDoneFrameTxInput() {
    return this._handshakeDoneFrameTx;
  }

  // handshake_rx - computed: false, optional: true, required: false
  private _handshakeRx?: number; 
  public get handshakeRx() {
    return this.getNumberAttribute('handshake_rx');
  }
  public set handshakeRx(value: number) {
    this._handshakeRx = value;
  }
  public resetHandshakeRx() {
    this._handshakeRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handshakeRxInput() {
    return this._handshakeRx;
  }

  // handshake_tx - computed: false, optional: true, required: false
  private _handshakeTx?: number; 
  public get handshakeTx() {
    return this.getNumberAttribute('handshake_tx');
  }
  public set handshakeTx(value: number) {
    this._handshakeTx = value;
  }
  public resetHandshakeTx() {
    this._handshakeTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handshakeTxInput() {
    return this._handshakeTx;
  }

  // idle_alarm - computed: false, optional: true, required: false
  private _idleAlarm?: number; 
  public get idleAlarm() {
    return this.getNumberAttribute('idle_alarm');
  }
  public set idleAlarm(value: number) {
    this._idleAlarm = value;
  }
  public resetIdleAlarm() {
    this._idleAlarm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleAlarmInput() {
    return this._idleAlarm;
  }

  // illegal_len - computed: false, optional: true, required: false
  private _illegalLen?: number; 
  public get illegalLen() {
    return this.getNumberAttribute('illegal_len');
  }
  public set illegalLen(value: number) {
    this._illegalLen = value;
  }
  public resetIllegalLen() {
    this._illegalLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get illegalLenInput() {
    return this._illegalLen;
  }

  // illegal_reason_len - computed: false, optional: true, required: false
  private _illegalReasonLen?: number; 
  public get illegalReasonLen() {
    return this.getNumberAttribute('illegal_reason_len');
  }
  public set illegalReasonLen(value: number) {
    this._illegalReasonLen = value;
  }
  public resetIllegalReasonLen() {
    this._illegalReasonLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get illegalReasonLenInput() {
    return this._illegalReasonLen;
  }

  // illegal_rpt - computed: false, optional: true, required: false
  private _illegalRpt?: number; 
  public get illegalRpt() {
    return this.getNumberAttribute('illegal_rpt');
  }
  public set illegalRpt(value: number) {
    this._illegalRpt = value;
  }
  public resetIllegalRpt() {
    this._illegalRpt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get illegalRptInput() {
    return this._illegalRpt;
  }

  // illegal_seq - computed: false, optional: true, required: false
  private _illegalSeq?: number; 
  public get illegalSeq() {
    return this.getNumberAttribute('illegal_seq');
  }
  public set illegalSeq(value: number) {
    this._illegalSeq = value;
  }
  public resetIllegalSeq() {
    this._illegalSeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get illegalSeqInput() {
    return this._illegalSeq;
  }

  // illegal_stream_len - computed: false, optional: true, required: false
  private _illegalStreamLen?: number; 
  public get illegalStreamLen() {
    return this.getNumberAttribute('illegal_stream_len');
  }
  public set illegalStreamLen(value: number) {
    this._illegalStreamLen = value;
  }
  public resetIllegalStreamLen() {
    this._illegalStreamLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get illegalStreamLenInput() {
    return this._illegalStreamLen;
  }

  // illegal_token_len - computed: false, optional: true, required: false
  private _illegalTokenLen?: number; 
  public get illegalTokenLen() {
    return this.getNumberAttribute('illegal_token_len');
  }
  public set illegalTokenLen(value: number) {
    this._illegalTokenLen = value;
  }
  public resetIllegalTokenLen() {
    this._illegalTokenLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get illegalTokenLenInput() {
    return this._illegalTokenLen;
  }

  // initial_rx - computed: false, optional: true, required: false
  private _initialRx?: number; 
  public get initialRx() {
    return this.getNumberAttribute('initial_rx');
  }
  public set initialRx(value: number) {
    this._initialRx = value;
  }
  public resetInitialRx() {
    this._initialRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialRxInput() {
    return this._initialRx;
  }

  // initial_tx - computed: false, optional: true, required: false
  private _initialTx?: number; 
  public get initialTx() {
    return this.getNumberAttribute('initial_tx');
  }
  public set initialTx(value: number) {
    this._initialTx = value;
  }
  public resetInitialTx() {
    this._initialTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialTxInput() {
    return this._initialTx;
  }

  // invalid_cid_sig - computed: false, optional: true, required: false
  private _invalidCidSig?: number; 
  public get invalidCidSig() {
    return this.getNumberAttribute('invalid_cid_sig');
  }
  public set invalidCidSig(value: number) {
    this._invalidCidSig = value;
  }
  public resetInvalidCidSig() {
    this._invalidCidSig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidCidSigInput() {
    return this._invalidCidSig;
  }

  // invalid_conn_match - computed: false, optional: true, required: false
  private _invalidConnMatch?: number; 
  public get invalidConnMatch() {
    return this.getNumberAttribute('invalid_conn_match');
  }
  public set invalidConnMatch(value: number) {
    this._invalidConnMatch = value;
  }
  public resetInvalidConnMatch() {
    this._invalidConnMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidConnMatchInput() {
    return this._invalidConnMatch;
  }

  // invalid_packet - computed: false, optional: true, required: false
  private _invalidPacket?: number; 
  public get invalidPacket() {
    return this.getNumberAttribute('invalid_packet');
  }
  public set invalidPacket(value: number) {
    this._invalidPacket = value;
  }
  public resetInvalidPacket() {
    this._invalidPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidPacketInput() {
    return this._invalidPacket;
  }

  // invalid_session_packet - computed: false, optional: true, required: false
  private _invalidSessionPacket?: number; 
  public get invalidSessionPacket() {
    return this.getNumberAttribute('invalid_session_packet');
  }
  public set invalidSessionPacket(value: number) {
    this._invalidSessionPacket = value;
  }
  public resetInvalidSessionPacket() {
    this._invalidSessionPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidSessionPacketInput() {
    return this._invalidSessionPacket;
  }

  // invalid_version - computed: false, optional: true, required: false
  private _invalidVersion?: number; 
  public get invalidVersion() {
    return this.getNumberAttribute('invalid_version');
  }
  public set invalidVersion(value: number) {
    this._invalidVersion = value;
  }
  public resetInvalidVersion() {
    this._invalidVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidVersionInput() {
    return this._invalidVersion;
  }

  // iov_alloc_len - computed: false, optional: true, required: false
  private _iovAllocLen?: number; 
  public get iovAllocLen() {
    return this.getNumberAttribute('iov_alloc_len');
  }
  public set iovAllocLen(value: number) {
    this._iovAllocLen = value;
  }
  public resetIovAllocLen() {
    this._iovAllocLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iovAllocLenInput() {
    return this._iovAllocLen;
  }

  // iov_buffer_bind - computed: false, optional: true, required: false
  private _iovBufferBind?: number; 
  public get iovBufferBind() {
    return this.getNumberAttribute('iov_buffer_bind');
  }
  public set iovBufferBind(value: number) {
    this._iovBufferBind = value;
  }
  public resetIovBufferBind() {
    this._iovBufferBind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iovBufferBindInput() {
    return this._iovBufferBind;
  }

  // iov_buffer_dup - computed: false, optional: true, required: false
  private _iovBufferDup?: number; 
  public get iovBufferDup() {
    return this.getNumberAttribute('iov_buffer_dup');
  }
  public set iovBufferDup(value: number) {
    this._iovBufferDup = value;
  }
  public resetIovBufferDup() {
    this._iovBufferDup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iovBufferDupInput() {
    return this._iovBufferDup;
  }

  // iov_buffer_unbind - computed: false, optional: true, required: false
  private _iovBufferUnbind?: number; 
  public get iovBufferUnbind() {
    return this.getNumberAttribute('iov_buffer_unbind');
  }
  public set iovBufferUnbind(value: number) {
    this._iovBufferUnbind = value;
  }
  public resetIovBufferUnbind() {
    this._iovBufferUnbind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iovBufferUnbindInput() {
    return this._iovBufferUnbind;
  }

  // iov_io - computed: false, optional: true, required: false
  private _iovIo?: number; 
  public get iovIo() {
    return this.getNumberAttribute('iov_io');
  }
  public set iovIo(value: number) {
    this._iovIo = value;
  }
  public resetIovIo() {
    this._iovIo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iovIoInput() {
    return this._iovIo;
  }

  // iov_system - computed: false, optional: true, required: false
  private _iovSystem?: number; 
  public get iovSystem() {
    return this.getNumberAttribute('iov_system');
  }
  public set iovSystem(value: number) {
    this._iovSystem = value;
  }
  public resetIovSystem() {
    this._iovSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iovSystemInput() {
    return this._iovSystem;
  }

  // key_update_rx - computed: false, optional: true, required: false
  private _keyUpdateRx?: number; 
  public get keyUpdateRx() {
    return this.getNumberAttribute('key_update_rx');
  }
  public set keyUpdateRx(value: number) {
    this._keyUpdateRx = value;
  }
  public resetKeyUpdateRx() {
    this._keyUpdateRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUpdateRxInput() {
    return this._keyUpdateRx;
  }

  // key_update_tx - computed: false, optional: true, required: false
  private _keyUpdateTx?: number; 
  public get keyUpdateTx() {
    return this.getNumberAttribute('key_update_tx');
  }
  public set keyUpdateTx(value: number) {
    this._keyUpdateTx = value;
  }
  public resetKeyUpdateTx() {
    this._keyUpdateTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUpdateTxInput() {
    return this._keyUpdateTx;
  }

  // local_bi_stream_closed - computed: false, optional: true, required: false
  private _localBiStreamClosed?: number; 
  public get localBiStreamClosed() {
    return this.getNumberAttribute('local_bi_stream_closed');
  }
  public set localBiStreamClosed(value: number) {
    this._localBiStreamClosed = value;
  }
  public resetLocalBiStreamClosed() {
    this._localBiStreamClosed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localBiStreamClosedInput() {
    return this._localBiStreamClosed;
  }

  // local_bi_stream_created - computed: false, optional: true, required: false
  private _localBiStreamCreated?: number; 
  public get localBiStreamCreated() {
    return this.getNumberAttribute('local_bi_stream_created');
  }
  public set localBiStreamCreated(value: number) {
    this._localBiStreamCreated = value;
  }
  public resetLocalBiStreamCreated() {
    this._localBiStreamCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localBiStreamCreatedInput() {
    return this._localBiStreamCreated;
  }

  // local_bi_stream_current - computed: false, optional: true, required: false
  private _localBiStreamCurrent?: number; 
  public get localBiStreamCurrent() {
    return this.getNumberAttribute('local_bi_stream_current');
  }
  public set localBiStreamCurrent(value: number) {
    this._localBiStreamCurrent = value;
  }
  public resetLocalBiStreamCurrent() {
    this._localBiStreamCurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localBiStreamCurrentInput() {
    return this._localBiStreamCurrent;
  }

  // local_uni_stream_closed - computed: false, optional: true, required: false
  private _localUniStreamClosed?: number; 
  public get localUniStreamClosed() {
    return this.getNumberAttribute('local_uni_stream_closed');
  }
  public set localUniStreamClosed(value: number) {
    this._localUniStreamClosed = value;
  }
  public resetLocalUniStreamClosed() {
    this._localUniStreamClosed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localUniStreamClosedInput() {
    return this._localUniStreamClosed;
  }

  // local_uni_stream_created - computed: false, optional: true, required: false
  private _localUniStreamCreated?: number; 
  public get localUniStreamCreated() {
    return this.getNumberAttribute('local_uni_stream_created');
  }
  public set localUniStreamCreated(value: number) {
    this._localUniStreamCreated = value;
  }
  public resetLocalUniStreamCreated() {
    this._localUniStreamCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localUniStreamCreatedInput() {
    return this._localUniStreamCreated;
  }

  // local_uni_stream_current - computed: false, optional: true, required: false
  private _localUniStreamCurrent?: number; 
  public get localUniStreamCurrent() {
    return this.getNumberAttribute('local_uni_stream_current');
  }
  public set localUniStreamCurrent(value: number) {
    this._localUniStreamCurrent = value;
  }
  public resetLocalUniStreamCurrent() {
    this._localUniStreamCurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localUniStreamCurrentInput() {
    return this._localUniStreamCurrent;
  }

  // max_bi_stream_frame_rx - computed: false, optional: true, required: false
  private _maxBiStreamFrameRx?: number; 
  public get maxBiStreamFrameRx() {
    return this.getNumberAttribute('max_bi_stream_frame_rx');
  }
  public set maxBiStreamFrameRx(value: number) {
    this._maxBiStreamFrameRx = value;
  }
  public resetMaxBiStreamFrameRx() {
    this._maxBiStreamFrameRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBiStreamFrameRxInput() {
    return this._maxBiStreamFrameRx;
  }

  // max_bi_stream_frame_tx - computed: false, optional: true, required: false
  private _maxBiStreamFrameTx?: number; 
  public get maxBiStreamFrameTx() {
    return this.getNumberAttribute('max_bi_stream_frame_tx');
  }
  public set maxBiStreamFrameTx(value: number) {
    this._maxBiStreamFrameTx = value;
  }
  public resetMaxBiStreamFrameTx() {
    this._maxBiStreamFrameTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBiStreamFrameTxInput() {
    return this._maxBiStreamFrameTx;
  }

  // max_data_frame_rx - computed: false, optional: true, required: false
  private _maxDataFrameRx?: number; 
  public get maxDataFrameRx() {
    return this.getNumberAttribute('max_data_frame_rx');
  }
  public set maxDataFrameRx(value: number) {
    this._maxDataFrameRx = value;
  }
  public resetMaxDataFrameRx() {
    this._maxDataFrameRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDataFrameRxInput() {
    return this._maxDataFrameRx;
  }

  // max_data_frame_tx - computed: false, optional: true, required: false
  private _maxDataFrameTx?: number; 
  public get maxDataFrameTx() {
    return this.getNumberAttribute('max_data_frame_tx');
  }
  public set maxDataFrameTx(value: number) {
    this._maxDataFrameTx = value;
  }
  public resetMaxDataFrameTx() {
    this._maxDataFrameTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDataFrameTxInput() {
    return this._maxDataFrameTx;
  }

  // max_stream_data_frame_rx - computed: false, optional: true, required: false
  private _maxStreamDataFrameRx?: number; 
  public get maxStreamDataFrameRx() {
    return this.getNumberAttribute('max_stream_data_frame_rx');
  }
  public set maxStreamDataFrameRx(value: number) {
    this._maxStreamDataFrameRx = value;
  }
  public resetMaxStreamDataFrameRx() {
    this._maxStreamDataFrameRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStreamDataFrameRxInput() {
    return this._maxStreamDataFrameRx;
  }

  // max_stream_data_frame_tx - computed: false, optional: true, required: false
  private _maxStreamDataFrameTx?: number; 
  public get maxStreamDataFrameTx() {
    return this.getNumberAttribute('max_stream_data_frame_tx');
  }
  public set maxStreamDataFrameTx(value: number) {
    this._maxStreamDataFrameTx = value;
  }
  public resetMaxStreamDataFrameTx() {
    this._maxStreamDataFrameTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStreamDataFrameTxInput() {
    return this._maxStreamDataFrameTx;
  }

  // max_stream_too_big - computed: false, optional: true, required: false
  private _maxStreamTooBig?: number; 
  public get maxStreamTooBig() {
    return this.getNumberAttribute('max_stream_too_big');
  }
  public set maxStreamTooBig(value: number) {
    this._maxStreamTooBig = value;
  }
  public resetMaxStreamTooBig() {
    this._maxStreamTooBig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStreamTooBigInput() {
    return this._maxStreamTooBig;
  }

  // max_uni_stream_frame_rx - computed: false, optional: true, required: false
  private _maxUniStreamFrameRx?: number; 
  public get maxUniStreamFrameRx() {
    return this.getNumberAttribute('max_uni_stream_frame_rx');
  }
  public set maxUniStreamFrameRx(value: number) {
    this._maxUniStreamFrameRx = value;
  }
  public resetMaxUniStreamFrameRx() {
    this._maxUniStreamFrameRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUniStreamFrameRxInput() {
    return this._maxUniStreamFrameRx;
  }

  // max_uni_stream_frame_tx - computed: false, optional: true, required: false
  private _maxUniStreamFrameTx?: number; 
  public get maxUniStreamFrameTx() {
    return this.getNumberAttribute('max_uni_stream_frame_tx');
  }
  public set maxUniStreamFrameTx(value: number) {
    this._maxUniStreamFrameTx = value;
  }
  public resetMaxUniStreamFrameTx() {
    this._maxUniStreamFrameTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUniStreamFrameTxInput() {
    return this._maxUniStreamFrameTx;
  }

  // needs_ack - computed: false, optional: true, required: false
  private _needsAck?: number; 
  public get needsAck() {
    return this.getNumberAttribute('needs_ack');
  }
  public set needsAck(value: number) {
    this._needsAck = value;
  }
  public resetNeedsAck() {
    this._needsAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get needsAckInput() {
    return this._needsAck;
  }

  // new_conn_id_frame_rx - computed: false, optional: true, required: false
  private _newConnIdFrameRx?: number; 
  public get newConnIdFrameRx() {
    return this.getNumberAttribute('new_conn_id_frame_rx');
  }
  public set newConnIdFrameRx(value: number) {
    this._newConnIdFrameRx = value;
  }
  public resetNewConnIdFrameRx() {
    this._newConnIdFrameRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newConnIdFrameRxInput() {
    return this._newConnIdFrameRx;
  }

  // new_conn_id_frame_tx - computed: false, optional: true, required: false
  private _newConnIdFrameTx?: number; 
  public get newConnIdFrameTx() {
    return this.getNumberAttribute('new_conn_id_frame_tx');
  }
  public set newConnIdFrameTx(value: number) {
    this._newConnIdFrameTx = value;
  }
  public resetNewConnIdFrameTx() {
    this._newConnIdFrameTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newConnIdFrameTxInput() {
    return this._newConnIdFrameTx;
  }

  // new_conn_id_len_non_zero - computed: false, optional: true, required: false
  private _newConnIdLenNonZero?: number; 
  public get newConnIdLenNonZero() {
    return this.getNumberAttribute('new_conn_id_len_non_zero');
  }
  public set newConnIdLenNonZero(value: number) {
    this._newConnIdLenNonZero = value;
  }
  public resetNewConnIdLenNonZero() {
    this._newConnIdLenNonZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newConnIdLenNonZeroInput() {
    return this._newConnIdLenNonZero;
  }

  // new_conn_id_len_zero - computed: false, optional: true, required: false
  private _newConnIdLenZero?: number; 
  public get newConnIdLenZero() {
    return this.getNumberAttribute('new_conn_id_len_zero');
  }
  public set newConnIdLenZero(value: number) {
    this._newConnIdLenZero = value;
  }
  public resetNewConnIdLenZero() {
    this._newConnIdLenZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newConnIdLenZeroInput() {
    return this._newConnIdLenZero;
  }

  // new_token_frame_rx - computed: false, optional: true, required: false
  private _newTokenFrameRx?: number; 
  public get newTokenFrameRx() {
    return this.getNumberAttribute('new_token_frame_rx');
  }
  public set newTokenFrameRx(value: number) {
    this._newTokenFrameRx = value;
  }
  public resetNewTokenFrameRx() {
    this._newTokenFrameRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newTokenFrameRxInput() {
    return this._newTokenFrameRx;
  }

  // new_token_frame_tx - computed: false, optional: true, required: false
  private _newTokenFrameTx?: number; 
  public get newTokenFrameTx() {
    return this.getNumberAttribute('new_token_frame_tx');
  }
  public set newTokenFrameTx(value: number) {
    this._newTokenFrameTx = value;
  }
  public resetNewTokenFrameTx() {
    this._newTokenFrameTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newTokenFrameTxInput() {
    return this._newTokenFrameTx;
  }

  // no_a10_socket - computed: false, optional: true, required: false
  private _noA10Socket?: number; 
  public get noA10Socket() {
    return this.getNumberAttribute('no_a10_socket');
  }
  public set noA10Socket(value: number) {
    this._noA10Socket = value;
  }
  public resetNoA10Socket() {
    this._noA10Socket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noA10SocketInput() {
    return this._noA10Socket;
  }

  // no_congest_wnd - computed: false, optional: true, required: false
  private _noCongestWnd?: number; 
  public get noCongestWnd() {
    return this.getNumberAttribute('no_congest_wnd');
  }
  public set noCongestWnd(value: number) {
    this._noCongestWnd = value;
  }
  public resetNoCongestWnd() {
    this._noCongestWnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCongestWndInput() {
    return this._noCongestWnd;
  }

  // no_next_scid - computed: false, optional: true, required: false
  private _noNextScid?: number; 
  public get noNextScid() {
    return this.getNumberAttribute('no_next_scid');
  }
  public set noNextScid(value: number) {
    this._noNextScid = value;
  }
  public resetNoNextScid() {
    this._noNextScid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noNextScidInput() {
    return this._noNextScid;
  }

  // no_other_side_socket - computed: false, optional: true, required: false
  private _noOtherSideSocket?: number; 
  public get noOtherSideSocket() {
    return this.getNumberAttribute('no_other_side_socket');
  }
  public set noOtherSideSocket(value: number) {
    this._noOtherSideSocket = value;
  }
  public resetNoOtherSideSocket() {
    this._noOtherSideSocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noOtherSideSocketInput() {
    return this._noOtherSideSocket;
  }

  // no_tx_queue - computed: false, optional: true, required: false
  private _noTxQueue?: number; 
  public get noTxQueue() {
    return this.getNumberAttribute('no_tx_queue');
  }
  public set noTxQueue(value: number) {
    this._noTxQueue = value;
  }
  public resetNoTxQueue() {
    this._noTxQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noTxQueueInput() {
    return this._noTxQueue;
  }

  // no_w_engine - computed: false, optional: true, required: false
  private _noWEngine?: number; 
  public get noWEngine() {
    return this.getNumberAttribute('no_w_engine');
  }
  public set noWEngine(value: number) {
    this._noWEngine = value;
  }
  public resetNoWEngine() {
    this._noWEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noWEngineInput() {
    return this._noWEngine;
  }

  // no_w_socket - computed: false, optional: true, required: false
  private _noWSocket?: number; 
  public get noWSocket() {
    return this.getNumberAttribute('no_w_socket');
  }
  public set noWSocket(value: number) {
    this._noWSocket = value;
  }
  public resetNoWSocket() {
    this._noWSocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noWSocketInput() {
    return this._noWSocket;
  }

  // on_ld_timeout - computed: false, optional: true, required: false
  private _onLdTimeout?: number; 
  public get onLdTimeout() {
    return this.getNumberAttribute('on_ld_timeout');
  }
  public set onLdTimeout(value: number) {
    this._onLdTimeout = value;
  }
  public resetOnLdTimeout() {
    this._onLdTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onLdTimeoutInput() {
    return this._onLdTimeout;
  }

  // packet_drop - computed: false, optional: true, required: false
  private _packetDrop?: number; 
  public get packetDrop() {
    return this.getNumberAttribute('packet_drop');
  }
  public set packetDrop(value: number) {
    this._packetDrop = value;
  }
  public resetPacketDrop() {
    this._packetDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetDropInput() {
    return this._packetDrop;
  }

  // packet_loop_limited - computed: false, optional: true, required: false
  private _packetLoopLimited?: number; 
  public get packetLoopLimited() {
    return this.getNumberAttribute('packet_loop_limited');
  }
  public set packetLoopLimited(value: number) {
    this._packetLoopLimited = value;
  }
  public resetPacketLoopLimited() {
    this._packetLoopLimited = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetLoopLimitedInput() {
    return this._packetLoopLimited;
  }

  // packet_lost - computed: false, optional: true, required: false
  private _packetLost?: number; 
  public get packetLost() {
    return this.getNumberAttribute('packet_lost');
  }
  public set packetLost(value: number) {
    this._packetLost = value;
  }
  public resetPacketLost() {
    this._packetLost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetLostInput() {
    return this._packetLost;
  }

  // packet_out_of_order - computed: false, optional: true, required: false
  private _packetOutOfOrder?: number; 
  public get packetOutOfOrder() {
    return this.getNumberAttribute('packet_out_of_order');
  }
  public set packetOutOfOrder(value: number) {
    this._packetOutOfOrder = value;
  }
  public resetPacketOutOfOrder() {
    this._packetOutOfOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetOutOfOrderInput() {
    return this._packetOutOfOrder;
  }

  // packet_retransmit - computed: false, optional: true, required: false
  private _packetRetransmit?: number; 
  public get packetRetransmit() {
    return this.getNumberAttribute('packet_retransmit');
  }
  public set packetRetransmit(value: number) {
    this._packetRetransmit = value;
  }
  public resetPacketRetransmit() {
    this._packetRetransmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRetransmitInput() {
    return this._packetRetransmit;
  }

  // packet_rx - computed: false, optional: true, required: false
  private _packetRx?: number; 
  public get packetRx() {
    return this.getNumberAttribute('packet_rx');
  }
  public set packetRx(value: number) {
    this._packetRx = value;
  }
  public resetPacketRx() {
    this._packetRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRxInput() {
    return this._packetRx;
  }

  // packet_too_short - computed: false, optional: true, required: false
  private _packetTooShort?: number; 
  public get packetTooShort() {
    return this.getNumberAttribute('packet_too_short');
  }
  public set packetTooShort(value: number) {
    this._packetTooShort = value;
  }
  public resetPacketTooShort() {
    this._packetTooShort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetTooShortInput() {
    return this._packetTooShort;
  }

  // packet_tx - computed: false, optional: true, required: false
  private _packetTx?: number; 
  public get packetTx() {
    return this.getNumberAttribute('packet_tx');
  }
  public set packetTx(value: number) {
    this._packetTx = value;
  }
  public resetPacketTx() {
    this._packetTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetTxInput() {
    return this._packetTx;
  }

  // packet_tx_failed - computed: false, optional: true, required: false
  private _packetTxFailed?: number; 
  public get packetTxFailed() {
    return this.getNumberAttribute('packet_tx_failed');
  }
  public set packetTxFailed(value: number) {
    this._packetTxFailed = value;
  }
  public resetPacketTxFailed() {
    this._packetTxFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetTxFailedInput() {
    return this._packetTxFailed;
  }

  // padding_frame_rx - computed: false, optional: true, required: false
  private _paddingFrameRx?: number; 
  public get paddingFrameRx() {
    return this.getNumberAttribute('padding_frame_rx');
  }
  public set paddingFrameRx(value: number) {
    this._paddingFrameRx = value;
  }
  public resetPaddingFrameRx() {
    this._paddingFrameRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paddingFrameRxInput() {
    return this._paddingFrameRx;
  }

  // padding_frame_tx - computed: false, optional: true, required: false
  private _paddingFrameTx?: number; 
  public get paddingFrameTx() {
    return this.getNumberAttribute('padding_frame_tx');
  }
  public set paddingFrameTx(value: number) {
    this._paddingFrameTx = value;
  }
  public resetPaddingFrameTx() {
    this._paddingFrameTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paddingFrameTxInput() {
    return this._paddingFrameTx;
  }

  // parse_error - computed: false, optional: true, required: false
  private _parseError?: number; 
  public get parseError() {
    return this.getNumberAttribute('parse_error');
  }
  public set parseError(value: number) {
    this._parseError = value;
  }
  public resetParseError() {
    this._parseError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseErrorInput() {
    return this._parseError;
  }

  // path_challenge_frame_rx - computed: false, optional: true, required: false
  private _pathChallengeFrameRx?: number; 
  public get pathChallengeFrameRx() {
    return this.getNumberAttribute('path_challenge_frame_rx');
  }
  public set pathChallengeFrameRx(value: number) {
    this._pathChallengeFrameRx = value;
  }
  public resetPathChallengeFrameRx() {
    this._pathChallengeFrameRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathChallengeFrameRxInput() {
    return this._pathChallengeFrameRx;
  }

  // path_challenge_frame_tx - computed: false, optional: true, required: false
  private _pathChallengeFrameTx?: number; 
  public get pathChallengeFrameTx() {
    return this.getNumberAttribute('path_challenge_frame_tx');
  }
  public set pathChallengeFrameTx(value: number) {
    this._pathChallengeFrameTx = value;
  }
  public resetPathChallengeFrameTx() {
    this._pathChallengeFrameTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathChallengeFrameTxInput() {
    return this._pathChallengeFrameTx;
  }

  // path_response_frame_rx - computed: false, optional: true, required: false
  private _pathResponseFrameRx?: number; 
  public get pathResponseFrameRx() {
    return this.getNumberAttribute('path_response_frame_rx');
  }
  public set pathResponseFrameRx(value: number) {
    this._pathResponseFrameRx = value;
  }
  public resetPathResponseFrameRx() {
    this._pathResponseFrameRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathResponseFrameRxInput() {
    return this._pathResponseFrameRx;
  }

  // path_response_frame_tx - computed: false, optional: true, required: false
  private _pathResponseFrameTx?: number; 
  public get pathResponseFrameTx() {
    return this.getNumberAttribute('path_response_frame_tx');
  }
  public set pathResponseFrameTx(value: number) {
    this._pathResponseFrameTx = value;
  }
  public resetPathResponseFrameTx() {
    this._pathResponseFrameTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathResponseFrameTxInput() {
    return this._pathResponseFrameTx;
  }

  // ping_frame_rx - computed: false, optional: true, required: false
  private _pingFrameRx?: number; 
  public get pingFrameRx() {
    return this.getNumberAttribute('ping_frame_rx');
  }
  public set pingFrameRx(value: number) {
    this._pingFrameRx = value;
  }
  public resetPingFrameRx() {
    this._pingFrameRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingFrameRxInput() {
    return this._pingFrameRx;
  }

  // ping_frame_tx - computed: false, optional: true, required: false
  private _pingFrameTx?: number; 
  public get pingFrameTx() {
    return this.getNumberAttribute('ping_frame_tx');
  }
  public set pingFrameTx(value: number) {
    this._pingFrameTx = value;
  }
  public resetPingFrameTx() {
    this._pingFrameTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingFrameTxInput() {
    return this._pingFrameTx;
  }

  // pkt_acked_failed - computed: false, optional: true, required: false
  private _pktAckedFailed?: number; 
  public get pktAckedFailed() {
    return this.getNumberAttribute('pkt_acked_failed');
  }
  public set pktAckedFailed(value: number) {
    this._pktAckedFailed = value;
  }
  public resetPktAckedFailed() {
    this._pktAckedFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktAckedFailedInput() {
    return this._pktAckedFailed;
  }

  // pn_delete_failed - computed: false, optional: true, required: false
  private _pnDeleteFailed?: number; 
  public get pnDeleteFailed() {
    return this.getNumberAttribute('pn_delete_failed');
  }
  public set pnDeleteFailed(value: number) {
    this._pnDeleteFailed = value;
  }
  public resetPnDeleteFailed() {
    this._pnDeleteFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pnDeleteFailedInput() {
    return this._pnDeleteFailed;
  }

  // pn_insert_failed - computed: false, optional: true, required: false
  private _pnInsertFailed?: number; 
  public get pnInsertFailed() {
    return this.getNumberAttribute('pn_insert_failed');
  }
  public set pnInsertFailed(value: number) {
    this._pnInsertFailed = value;
  }
  public resetPnInsertFailed() {
    this._pnInsertFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pnInsertFailedInput() {
    return this._pnInsertFailed;
  }

  // q_conn_created - computed: false, optional: true, required: false
  private _qConnCreated?: number; 
  public get qConnCreated() {
    return this.getNumberAttribute('q_conn_created');
  }
  public set qConnCreated(value: number) {
    this._qConnCreated = value;
  }
  public resetQConnCreated() {
    this._qConnCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qConnCreatedInput() {
    return this._qConnCreated;
  }

  // q_conn_freed - computed: false, optional: true, required: false
  private _qConnFreed?: number; 
  public get qConnFreed() {
    return this.getNumberAttribute('q_conn_freed');
  }
  public set qConnFreed(value: number) {
    this._qConnFreed = value;
  }
  public resetQConnFreed() {
    this._qConnFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qConnFreedInput() {
    return this._qConnFreed;
  }

  // quic_free - computed: false, optional: true, required: false
  private _quicFree?: number; 
  public get quicFree() {
    return this.getNumberAttribute('quic_free');
  }
  public set quicFree(value: number) {
    this._quicFree = value;
  }
  public resetQuicFree() {
    this._quicFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicFreeInput() {
    return this._quicFree;
  }

  // quic_lb - computed: false, optional: true, required: false
  private _quicLb?: number; 
  public get quicLb() {
    return this.getNumberAttribute('quic_lb');
  }
  public set quicLb(value: number) {
    this._quicLb = value;
  }
  public resetQuicLb() {
    this._quicLb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicLbInput() {
    return this._quicLb;
  }

  // quic_malloc - computed: false, optional: true, required: false
  private _quicMalloc?: number; 
  public get quicMalloc() {
    return this.getNumberAttribute('quic_malloc');
  }
  public set quicMalloc(value: number) {
    this._quicMalloc = value;
  }
  public resetQuicMalloc() {
    this._quicMalloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicMallocInput() {
    return this._quicMalloc;
  }

  // quic_malloc_failure - computed: false, optional: true, required: false
  private _quicMallocFailure?: number; 
  public get quicMallocFailure() {
    return this.getNumberAttribute('quic_malloc_failure');
  }
  public set quicMallocFailure(value: number) {
    this._quicMallocFailure = value;
  }
  public resetQuicMallocFailure() {
    this._quicMallocFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicMallocFailureInput() {
    return this._quicMallocFailure;
  }

  // quic_packet_drop - computed: false, optional: true, required: false
  private _quicPacketDrop?: number; 
  public get quicPacketDrop() {
    return this.getNumberAttribute('quic_packet_drop');
  }
  public set quicPacketDrop(value: number) {
    this._quicPacketDrop = value;
  }
  public resetQuicPacketDrop() {
    this._quicPacketDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicPacketDropInput() {
    return this._quicPacketDrop;
  }

  // quick_malloc_failure - computed: false, optional: true, required: false
  private _quickMallocFailure?: number; 
  public get quickMallocFailure() {
    return this.getNumberAttribute('quick_malloc_failure');
  }
  public set quickMallocFailure(value: number) {
    this._quickMallocFailure = value;
  }
  public resetQuickMallocFailure() {
    this._quickMallocFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quickMallocFailureInput() {
    return this._quickMallocFailure;
  }

  // receive_wnd_limited - computed: false, optional: true, required: false
  private _receiveWndLimited?: number; 
  public get receiveWndLimited() {
    return this.getNumberAttribute('receive_wnd_limited');
  }
  public set receiveWndLimited(value: number) {
    this._receiveWndLimited = value;
  }
  public resetReceiveWndLimited() {
    this._receiveWndLimited = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveWndLimitedInput() {
    return this._receiveWndLimited;
  }

  // remote_bi_stream_closed - computed: false, optional: true, required: false
  private _remoteBiStreamClosed?: number; 
  public get remoteBiStreamClosed() {
    return this.getNumberAttribute('remote_bi_stream_closed');
  }
  public set remoteBiStreamClosed(value: number) {
    this._remoteBiStreamClosed = value;
  }
  public resetRemoteBiStreamClosed() {
    this._remoteBiStreamClosed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteBiStreamClosedInput() {
    return this._remoteBiStreamClosed;
  }

  // remote_bi_stream_created - computed: false, optional: true, required: false
  private _remoteBiStreamCreated?: number; 
  public get remoteBiStreamCreated() {
    return this.getNumberAttribute('remote_bi_stream_created');
  }
  public set remoteBiStreamCreated(value: number) {
    this._remoteBiStreamCreated = value;
  }
  public resetRemoteBiStreamCreated() {
    this._remoteBiStreamCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteBiStreamCreatedInput() {
    return this._remoteBiStreamCreated;
  }

  // remote_bi_stream_current - computed: false, optional: true, required: false
  private _remoteBiStreamCurrent?: number; 
  public get remoteBiStreamCurrent() {
    return this.getNumberAttribute('remote_bi_stream_current');
  }
  public set remoteBiStreamCurrent(value: number) {
    this._remoteBiStreamCurrent = value;
  }
  public resetRemoteBiStreamCurrent() {
    this._remoteBiStreamCurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteBiStreamCurrentInput() {
    return this._remoteBiStreamCurrent;
  }

  // remote_uni_stream_closed - computed: false, optional: true, required: false
  private _remoteUniStreamClosed?: number; 
  public get remoteUniStreamClosed() {
    return this.getNumberAttribute('remote_uni_stream_closed');
  }
  public set remoteUniStreamClosed(value: number) {
    this._remoteUniStreamClosed = value;
  }
  public resetRemoteUniStreamClosed() {
    this._remoteUniStreamClosed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteUniStreamClosedInput() {
    return this._remoteUniStreamClosed;
  }

  // remote_uni_stream_created - computed: false, optional: true, required: false
  private _remoteUniStreamCreated?: number; 
  public get remoteUniStreamCreated() {
    return this.getNumberAttribute('remote_uni_stream_created');
  }
  public set remoteUniStreamCreated(value: number) {
    this._remoteUniStreamCreated = value;
  }
  public resetRemoteUniStreamCreated() {
    this._remoteUniStreamCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteUniStreamCreatedInput() {
    return this._remoteUniStreamCreated;
  }

  // remote_uni_stream_current - computed: false, optional: true, required: false
  private _remoteUniStreamCurrent?: number; 
  public get remoteUniStreamCurrent() {
    return this.getNumberAttribute('remote_uni_stream_current');
  }
  public set remoteUniStreamCurrent(value: number) {
    this._remoteUniStreamCurrent = value;
  }
  public resetRemoteUniStreamCurrent() {
    this._remoteUniStreamCurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteUniStreamCurrentInput() {
    return this._remoteUniStreamCurrent;
  }

  // retire_conn_id_frame_rx - computed: false, optional: true, required: false
  private _retireConnIdFrameRx?: number; 
  public get retireConnIdFrameRx() {
    return this.getNumberAttribute('retire_conn_id_frame_rx');
  }
  public set retireConnIdFrameRx(value: number) {
    this._retireConnIdFrameRx = value;
  }
  public resetRetireConnIdFrameRx() {
    this._retireConnIdFrameRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retireConnIdFrameRxInput() {
    return this._retireConnIdFrameRx;
  }

  // retire_conn_id_frame_tx - computed: false, optional: true, required: false
  private _retireConnIdFrameTx?: number; 
  public get retireConnIdFrameTx() {
    return this.getNumberAttribute('retire_conn_id_frame_tx');
  }
  public set retireConnIdFrameTx(value: number) {
    this._retireConnIdFrameTx = value;
  }
  public resetRetireConnIdFrameTx() {
    this._retireConnIdFrameTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retireConnIdFrameTxInput() {
    return this._retireConnIdFrameTx;
  }

  // retry_rx - computed: false, optional: true, required: false
  private _retryRx?: number; 
  public get retryRx() {
    return this.getNumberAttribute('retry_rx');
  }
  public set retryRx(value: number) {
    this._retryRx = value;
  }
  public resetRetryRx() {
    this._retryRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryRxInput() {
    return this._retryRx;
  }

  // retry_tx - computed: false, optional: true, required: false
  private _retryTx?: number; 
  public get retryTx() {
    return this.getNumberAttribute('retry_tx');
  }
  public set retryTx(value: number) {
    this._retryTx = value;
  }
  public resetRetryTx() {
    this._retryTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryTxInput() {
    return this._retryTx;
  }

  // rtt_0_rx - computed: false, optional: true, required: false
  private _rtt0Rx?: number; 
  public get rtt0Rx() {
    return this.getNumberAttribute('rtt_0_rx');
  }
  public set rtt0Rx(value: number) {
    this._rtt0Rx = value;
  }
  public resetRtt0Rx() {
    this._rtt0Rx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtt0RxInput() {
    return this._rtt0Rx;
  }

  // rtt_0_tx - computed: false, optional: true, required: false
  private _rtt0Tx?: number; 
  public get rtt0Tx() {
    return this.getNumberAttribute('rtt_0_tx');
  }
  public set rtt0Tx(value: number) {
    this._rtt0Tx = value;
  }
  public resetRtt0Tx() {
    this._rtt0Tx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtt0TxInput() {
    return this._rtt0Tx;
  }

  // rtt_updated - computed: false, optional: true, required: false
  private _rttUpdated?: number; 
  public get rttUpdated() {
    return this.getNumberAttribute('rtt_updated');
  }
  public set rttUpdated(value: number) {
    this._rttUpdated = value;
  }
  public resetRttUpdated() {
    this._rttUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rttUpdatedInput() {
    return this._rttUpdated;
  }

  // server_conn_attempted - computed: false, optional: true, required: false
  private _serverConnAttempted?: number; 
  public get serverConnAttempted() {
    return this.getNumberAttribute('server_conn_attempted');
  }
  public set serverConnAttempted(value: number) {
    this._serverConnAttempted = value;
  }
  public resetServerConnAttempted() {
    this._serverConnAttempted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverConnAttemptedInput() {
    return this._serverConnAttempted;
  }

  // server_conn_created - computed: false, optional: true, required: false
  private _serverConnCreated?: number; 
  public get serverConnCreated() {
    return this.getNumberAttribute('server_conn_created');
  }
  public set serverConnCreated(value: number) {
    this._serverConnCreated = value;
  }
  public resetServerConnCreated() {
    this._serverConnCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverConnCreatedInput() {
    return this._serverConnCreated;
  }

  // server_conn_failed - computed: false, optional: true, required: false
  private _serverConnFailed?: number; 
  public get serverConnFailed() {
    return this.getNumberAttribute('server_conn_failed');
  }
  public set serverConnFailed(value: number) {
    this._serverConnFailed = value;
  }
  public resetServerConnFailed() {
    this._serverConnFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverConnFailedInput() {
    return this._serverConnFailed;
  }

  // server_conn_handshake - computed: false, optional: true, required: false
  private _serverConnHandshake?: number; 
  public get serverConnHandshake() {
    return this.getNumberAttribute('server_conn_handshake');
  }
  public set serverConnHandshake(value: number) {
    this._serverConnHandshake = value;
  }
  public resetServerConnHandshake() {
    this._serverConnHandshake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverConnHandshakeInput() {
    return this._serverConnHandshake;
  }

  // server_conn_local_closed - computed: false, optional: true, required: false
  private _serverConnLocalClosed?: number; 
  public get serverConnLocalClosed() {
    return this.getNumberAttribute('server_conn_local_closed');
  }
  public set serverConnLocalClosed(value: number) {
    this._serverConnLocalClosed = value;
  }
  public resetServerConnLocalClosed() {
    this._serverConnLocalClosed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverConnLocalClosedInput() {
    return this._serverConnLocalClosed;
  }

  // server_conn_remote_closed - computed: false, optional: true, required: false
  private _serverConnRemoteClosed?: number; 
  public get serverConnRemoteClosed() {
    return this.getNumberAttribute('server_conn_remote_closed');
  }
  public set serverConnRemoteClosed(value: number) {
    this._serverConnRemoteClosed = value;
  }
  public resetServerConnRemoteClosed() {
    this._serverConnRemoteClosed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverConnRemoteClosedInput() {
    return this._serverConnRemoteClosed;
  }

  // server_receive_new_token - computed: false, optional: true, required: false
  private _serverReceiveNewToken?: number; 
  public get serverReceiveNewToken() {
    return this.getNumberAttribute('server_receive_new_token');
  }
  public set serverReceiveNewToken(value: number) {
    this._serverReceiveNewToken = value;
  }
  public resetServerReceiveNewToken() {
    this._serverReceiveNewToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverReceiveNewTokenInput() {
    return this._serverReceiveNewToken;
  }

  // server_rx_handshake_done - computed: false, optional: true, required: false
  private _serverRxHandshakeDone?: number; 
  public get serverRxHandshakeDone() {
    return this.getNumberAttribute('server_rx_handshake_done');
  }
  public set serverRxHandshakeDone(value: number) {
    this._serverRxHandshakeDone = value;
  }
  public resetServerRxHandshakeDone() {
    this._serverRxHandshakeDone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverRxHandshakeDoneInput() {
    return this._serverRxHandshakeDone;
  }

  // stateless_reset - computed: false, optional: true, required: false
  private _statelessReset?: number; 
  public get statelessReset() {
    return this.getNumberAttribute('stateless_reset');
  }
  public set statelessReset(value: number) {
    this._statelessReset = value;
  }
  public resetStatelessReset() {
    this._statelessReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessResetInput() {
    return this._statelessReset;
  }

  // stream_09_frame_rx - computed: false, optional: true, required: false
  private _stream09FrameRx?: number; 
  public get stream09FrameRx() {
    return this.getNumberAttribute('stream_09_frame_rx');
  }
  public set stream09FrameRx(value: number) {
    this._stream09FrameRx = value;
  }
  public resetStream09FrameRx() {
    this._stream09FrameRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stream09FrameRxInput() {
    return this._stream09FrameRx;
  }

  // stream_09_frame_tx - computed: false, optional: true, required: false
  private _stream09FrameTx?: number; 
  public get stream09FrameTx() {
    return this.getNumberAttribute('stream_09_frame_tx');
  }
  public set stream09FrameTx(value: number) {
    this._stream09FrameTx = value;
  }
  public resetStream09FrameTx() {
    this._stream09FrameTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stream09FrameTxInput() {
    return this._stream09FrameTx;
  }

  // stream_0a_frame_rx - computed: false, optional: true, required: false
  private _stream0AFrameRx?: number; 
  public get stream0AFrameRx() {
    return this.getNumberAttribute('stream_0a_frame_rx');
  }
  public set stream0AFrameRx(value: number) {
    this._stream0AFrameRx = value;
  }
  public resetStream0AFrameRx() {
    this._stream0AFrameRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stream0AFrameRxInput() {
    return this._stream0AFrameRx;
  }

  // stream_0a_frame_tx - computed: false, optional: true, required: false
  private _stream0AFrameTx?: number; 
  public get stream0AFrameTx() {
    return this.getNumberAttribute('stream_0a_frame_tx');
  }
  public set stream0AFrameTx(value: number) {
    this._stream0AFrameTx = value;
  }
  public resetStream0AFrameTx() {
    this._stream0AFrameTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stream0AFrameTxInput() {
    return this._stream0AFrameTx;
  }

  // stream_0b_frame_rx - computed: false, optional: true, required: false
  private _stream0BFrameRx?: number; 
  public get stream0BFrameRx() {
    return this.getNumberAttribute('stream_0b_frame_rx');
  }
  public set stream0BFrameRx(value: number) {
    this._stream0BFrameRx = value;
  }
  public resetStream0BFrameRx() {
    this._stream0BFrameRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stream0BFrameRxInput() {
    return this._stream0BFrameRx;
  }

  // stream_0b_frame_tx - computed: false, optional: true, required: false
  private _stream0BFrameTx?: number; 
  public get stream0BFrameTx() {
    return this.getNumberAttribute('stream_0b_frame_tx');
  }
  public set stream0BFrameTx(value: number) {
    this._stream0BFrameTx = value;
  }
  public resetStream0BFrameTx() {
    this._stream0BFrameTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stream0BFrameTxInput() {
    return this._stream0BFrameTx;
  }

  // stream_0c_frame_rx - computed: false, optional: true, required: false
  private _stream0CFrameRx?: number; 
  public get stream0CFrameRx() {
    return this.getNumberAttribute('stream_0c_frame_rx');
  }
  public set stream0CFrameRx(value: number) {
    this._stream0CFrameRx = value;
  }
  public resetStream0CFrameRx() {
    this._stream0CFrameRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stream0CFrameRxInput() {
    return this._stream0CFrameRx;
  }

  // stream_0c_frame_tx - computed: false, optional: true, required: false
  private _stream0CFrameTx?: number; 
  public get stream0CFrameTx() {
    return this.getNumberAttribute('stream_0c_frame_tx');
  }
  public set stream0CFrameTx(value: number) {
    this._stream0CFrameTx = value;
  }
  public resetStream0CFrameTx() {
    this._stream0CFrameTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stream0CFrameTxInput() {
    return this._stream0CFrameTx;
  }

  // stream_0d_frame_rx - computed: false, optional: true, required: false
  private _stream0DFrameRx?: number; 
  public get stream0DFrameRx() {
    return this.getNumberAttribute('stream_0d_frame_rx');
  }
  public set stream0DFrameRx(value: number) {
    this._stream0DFrameRx = value;
  }
  public resetStream0DFrameRx() {
    this._stream0DFrameRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stream0DFrameRxInput() {
    return this._stream0DFrameRx;
  }

  // stream_0d_frame_tx - computed: false, optional: true, required: false
  private _stream0DFrameTx?: number; 
  public get stream0DFrameTx() {
    return this.getNumberAttribute('stream_0d_frame_tx');
  }
  public set stream0DFrameTx(value: number) {
    this._stream0DFrameTx = value;
  }
  public resetStream0DFrameTx() {
    this._stream0DFrameTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stream0DFrameTxInput() {
    return this._stream0DFrameTx;
  }

  // stream_0e_frame_rx - computed: false, optional: true, required: false
  private _stream0EFrameRx?: number; 
  public get stream0EFrameRx() {
    return this.getNumberAttribute('stream_0e_frame_rx');
  }
  public set stream0EFrameRx(value: number) {
    this._stream0EFrameRx = value;
  }
  public resetStream0EFrameRx() {
    this._stream0EFrameRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stream0EFrameRxInput() {
    return this._stream0EFrameRx;
  }

  // stream_0e_frame_tx - computed: false, optional: true, required: false
  private _stream0EFrameTx?: number; 
  public get stream0EFrameTx() {
    return this.getNumberAttribute('stream_0e_frame_tx');
  }
  public set stream0EFrameTx(value: number) {
    this._stream0EFrameTx = value;
  }
  public resetStream0EFrameTx() {
    this._stream0EFrameTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stream0EFrameTxInput() {
    return this._stream0EFrameTx;
  }

  // stream_0f_frame_rx - computed: false, optional: true, required: false
  private _stream0FFrameRx?: number; 
  public get stream0FFrameRx() {
    return this.getNumberAttribute('stream_0f_frame_rx');
  }
  public set stream0FFrameRx(value: number) {
    this._stream0FFrameRx = value;
  }
  public resetStream0FFrameRx() {
    this._stream0FFrameRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stream0FFrameRxInput() {
    return this._stream0FFrameRx;
  }

  // stream_0f_frame_tx - computed: false, optional: true, required: false
  private _stream0FFrameTx?: number; 
  public get stream0FFrameTx() {
    return this.getNumberAttribute('stream_0f_frame_tx');
  }
  public set stream0FFrameTx(value: number) {
    this._stream0FFrameTx = value;
  }
  public resetStream0FFrameTx() {
    this._stream0FFrameTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stream0FFrameTxInput() {
    return this._stream0FFrameTx;
  }

  // stream_blocked - computed: false, optional: true, required: false
  private _streamBlocked?: number; 
  public get streamBlocked() {
    return this.getNumberAttribute('stream_blocked');
  }
  public set streamBlocked(value: number) {
    this._streamBlocked = value;
  }
  public resetStreamBlocked() {
    this._streamBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamBlockedInput() {
    return this._streamBlocked;
  }

  // stream_congest - computed: false, optional: true, required: false
  private _streamCongest?: number; 
  public get streamCongest() {
    return this.getNumberAttribute('stream_congest');
  }
  public set streamCongest(value: number) {
    this._streamCongest = value;
  }
  public resetStreamCongest() {
    this._streamCongest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamCongestInput() {
    return this._streamCongest;
  }

  // stream_created - computed: false, optional: true, required: false
  private _streamCreated?: number; 
  public get streamCreated() {
    return this.getNumberAttribute('stream_created');
  }
  public set streamCreated(value: number) {
    this._streamCreated = value;
  }
  public resetStreamCreated() {
    this._streamCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamCreatedInput() {
    return this._streamCreated;
  }

  // stream_data_blocked_frame_rx - computed: false, optional: true, required: false
  private _streamDataBlockedFrameRx?: number; 
  public get streamDataBlockedFrameRx() {
    return this.getNumberAttribute('stream_data_blocked_frame_rx');
  }
  public set streamDataBlockedFrameRx(value: number) {
    this._streamDataBlockedFrameRx = value;
  }
  public resetStreamDataBlockedFrameRx() {
    this._streamDataBlockedFrameRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamDataBlockedFrameRxInput() {
    return this._streamDataBlockedFrameRx;
  }

  // stream_data_blocked_frame_tx - computed: false, optional: true, required: false
  private _streamDataBlockedFrameTx?: number; 
  public get streamDataBlockedFrameTx() {
    return this.getNumberAttribute('stream_data_blocked_frame_tx');
  }
  public set streamDataBlockedFrameTx(value: number) {
    this._streamDataBlockedFrameTx = value;
  }
  public resetStreamDataBlockedFrameTx() {
    this._streamDataBlockedFrameTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamDataBlockedFrameTxInput() {
    return this._streamDataBlockedFrameTx;
  }

  // stream_error - computed: false, optional: true, required: false
  private _streamError?: number; 
  public get streamError() {
    return this.getNumberAttribute('stream_error');
  }
  public set streamError(value: number) {
    this._streamError = value;
  }
  public resetStreamError() {
    this._streamError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamErrorInput() {
    return this._streamError;
  }

  // stream_fail_to_insert - computed: false, optional: true, required: false
  private _streamFailToInsert?: number; 
  public get streamFailToInsert() {
    return this.getNumberAttribute('stream_fail_to_insert');
  }
  public set streamFailToInsert(value: number) {
    this._streamFailToInsert = value;
  }
  public resetStreamFailToInsert() {
    this._streamFailToInsert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamFailToInsertInput() {
    return this._streamFailToInsert;
  }

  // stream_fin_down - computed: false, optional: true, required: false
  private _streamFinDown?: number; 
  public get streamFinDown() {
    return this.getNumberAttribute('stream_fin_down');
  }
  public set streamFinDown(value: number) {
    this._streamFinDown = value;
  }
  public resetStreamFinDown() {
    this._streamFinDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamFinDownInput() {
    return this._streamFinDown;
  }

  // stream_fin_receive - computed: false, optional: true, required: false
  private _streamFinReceive?: number; 
  public get streamFinReceive() {
    return this.getNumberAttribute('stream_fin_receive');
  }
  public set streamFinReceive(value: number) {
    this._streamFinReceive = value;
  }
  public resetStreamFinReceive() {
    this._streamFinReceive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamFinReceiveInput() {
    return this._streamFinReceive;
  }

  // stream_fin_send - computed: false, optional: true, required: false
  private _streamFinSend?: number; 
  public get streamFinSend() {
    return this.getNumberAttribute('stream_fin_send');
  }
  public set streamFinSend(value: number) {
    this._streamFinSend = value;
  }
  public resetStreamFinSend() {
    this._streamFinSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamFinSendInput() {
    return this._streamFinSend;
  }

  // stream_fin_up - computed: false, optional: true, required: false
  private _streamFinUp?: number; 
  public get streamFinUp() {
    return this.getNumberAttribute('stream_fin_up');
  }
  public set streamFinUp(value: number) {
    this._streamFinUp = value;
  }
  public resetStreamFinUp() {
    this._streamFinUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamFinUpInput() {
    return this._streamFinUp;
  }

  // stream_frame_rx - computed: false, optional: true, required: false
  private _streamFrameRx?: number; 
  public get streamFrameRx() {
    return this.getNumberAttribute('stream_frame_rx');
  }
  public set streamFrameRx(value: number) {
    this._streamFrameRx = value;
  }
  public resetStreamFrameRx() {
    this._streamFrameRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamFrameRxInput() {
    return this._streamFrameRx;
  }

  // stream_frame_tx - computed: false, optional: true, required: false
  private _streamFrameTx?: number; 
  public get streamFrameTx() {
    return this.getNumberAttribute('stream_frame_tx');
  }
  public set streamFrameTx(value: number) {
    this._streamFrameTx = value;
  }
  public resetStreamFrameTx() {
    this._streamFrameTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamFrameTxInput() {
    return this._streamFrameTx;
  }

  // stream_freed - computed: false, optional: true, required: false
  private _streamFreed?: number; 
  public get streamFreed() {
    return this.getNumberAttribute('stream_freed');
  }
  public set streamFreed(value: number) {
    this._streamFreed = value;
  }
  public resetStreamFreed() {
    this._streamFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamFreedInput() {
    return this._streamFreed;
  }

  // stream_id_mismatch - computed: false, optional: true, required: false
  private _streamIdMismatch?: number; 
  public get streamIdMismatch() {
    return this.getNumberAttribute('stream_id_mismatch');
  }
  public set streamIdMismatch(value: number) {
    this._streamIdMismatch = value;
  }
  public resetStreamIdMismatch() {
    this._streamIdMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamIdMismatchInput() {
    return this._streamIdMismatch;
  }

  // stream_not_send - computed: false, optional: true, required: false
  private _streamNotSend?: number; 
  public get streamNotSend() {
    return this.getNumberAttribute('stream_not_send');
  }
  public set streamNotSend(value: number) {
    this._streamNotSend = value;
  }
  public resetStreamNotSend() {
    this._streamNotSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNotSendInput() {
    return this._streamNotSend;
  }

  // stream_open - computed: false, optional: true, required: false
  private _streamOpen?: number; 
  public get streamOpen() {
    return this.getNumberAttribute('stream_open');
  }
  public set streamOpen(value: number) {
    this._streamOpen = value;
  }
  public resetStreamOpen() {
    this._streamOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamOpenInput() {
    return this._streamOpen;
  }

  // stream_pause_data - computed: false, optional: true, required: false
  private _streamPauseData?: number; 
  public get streamPauseData() {
    return this.getNumberAttribute('stream_pause_data');
  }
  public set streamPauseData(value: number) {
    this._streamPauseData = value;
  }
  public resetStreamPauseData() {
    this._streamPauseData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamPauseDataInput() {
    return this._streamPauseData;
  }

  // stream_resume_data - computed: false, optional: true, required: false
  private _streamResumeData?: number; 
  public get streamResumeData() {
    return this.getNumberAttribute('stream_resume_data');
  }
  public set streamResumeData(value: number) {
    this._streamResumeData = value;
  }
  public resetStreamResumeData() {
    this._streamResumeData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamResumeDataInput() {
    return this._streamResumeData;
  }

  // stream_rst_frame_rx - computed: false, optional: true, required: false
  private _streamRstFrameRx?: number; 
  public get streamRstFrameRx() {
    return this.getNumberAttribute('stream_rst_frame_rx');
  }
  public set streamRstFrameRx(value: number) {
    this._streamRstFrameRx = value;
  }
  public resetStreamRstFrameRx() {
    this._streamRstFrameRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamRstFrameRxInput() {
    return this._streamRstFrameRx;
  }

  // stream_rst_frame_tx - computed: false, optional: true, required: false
  private _streamRstFrameTx?: number; 
  public get streamRstFrameTx() {
    return this.getNumberAttribute('stream_rst_frame_tx');
  }
  public set streamRstFrameTx(value: number) {
    this._streamRstFrameTx = value;
  }
  public resetStreamRstFrameTx() {
    this._streamRstFrameTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamRstFrameTxInput() {
    return this._streamRstFrameTx;
  }

  // stream_stop_frame_rx - computed: false, optional: true, required: false
  private _streamStopFrameRx?: number; 
  public get streamStopFrameRx() {
    return this.getNumberAttribute('stream_stop_frame_rx');
  }
  public set streamStopFrameRx(value: number) {
    this._streamStopFrameRx = value;
  }
  public resetStreamStopFrameRx() {
    this._streamStopFrameRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamStopFrameRxInput() {
    return this._streamStopFrameRx;
  }

  // stream_stop_frame_tx - computed: false, optional: true, required: false
  private _streamStopFrameTx?: number; 
  public get streamStopFrameTx() {
    return this.getNumberAttribute('stream_stop_frame_tx');
  }
  public set streamStopFrameTx(value: number) {
    this._streamStopFrameTx = value;
  }
  public resetStreamStopFrameTx() {
    this._streamStopFrameTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamStopFrameTxInput() {
    return this._streamStopFrameTx;
  }

  // stream_stop_send - computed: false, optional: true, required: false
  private _streamStopSend?: number; 
  public get streamStopSend() {
    return this.getNumberAttribute('stream_stop_send');
  }
  public set streamStopSend(value: number) {
    this._streamStopSend = value;
  }
  public resetStreamStopSend() {
    this._streamStopSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamStopSendInput() {
    return this._streamStopSend;
  }

  // token_len_too_long - computed: false, optional: true, required: false
  private _tokenLenTooLong?: number; 
  public get tokenLenTooLong() {
    return this.getNumberAttribute('token_len_too_long');
  }
  public set tokenLenTooLong(value: number) {
    this._tokenLenTooLong = value;
  }
  public resetTokenLenTooLong() {
    this._tokenLenTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenLenTooLongInput() {
    return this._tokenLenTooLong;
  }

  // too_noisy_fuzzing - computed: false, optional: true, required: false
  private _tooNoisyFuzzing?: number; 
  public get tooNoisyFuzzing() {
    return this.getNumberAttribute('too_noisy_fuzzing');
  }
  public set tooNoisyFuzzing(value: number) {
    this._tooNoisyFuzzing = value;
  }
  public resetTooNoisyFuzzing() {
    this._tooNoisyFuzzing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tooNoisyFuzzingInput() {
    return this._tooNoisyFuzzing;
  }

  // tx_buffer_deq - computed: false, optional: true, required: false
  private _txBufferDeq?: number; 
  public get txBufferDeq() {
    return this.getNumberAttribute('tx_buffer_deq');
  }
  public set txBufferDeq(value: number) {
    this._txBufferDeq = value;
  }
  public resetTxBufferDeq() {
    this._txBufferDeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txBufferDeqInput() {
    return this._txBufferDeq;
  }

  // tx_buffer_enq - computed: false, optional: true, required: false
  private _txBufferEnq?: number; 
  public get txBufferEnq() {
    return this.getNumberAttribute('tx_buffer_enq');
  }
  public set txBufferEnq(value: number) {
    this._txBufferEnq = value;
  }
  public resetTxBufferEnq() {
    this._txBufferEnq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txBufferEnqInput() {
    return this._txBufferEnq;
  }

  // uni_stream_data_blocked_frame_rx - computed: false, optional: true, required: false
  private _uniStreamDataBlockedFrameRx?: number; 
  public get uniStreamDataBlockedFrameRx() {
    return this.getNumberAttribute('uni_stream_data_blocked_frame_rx');
  }
  public set uniStreamDataBlockedFrameRx(value: number) {
    this._uniStreamDataBlockedFrameRx = value;
  }
  public resetUniStreamDataBlockedFrameRx() {
    this._uniStreamDataBlockedFrameRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniStreamDataBlockedFrameRxInput() {
    return this._uniStreamDataBlockedFrameRx;
  }

  // uni_stream_data_blocked_frame_tx - computed: false, optional: true, required: false
  private _uniStreamDataBlockedFrameTx?: number; 
  public get uniStreamDataBlockedFrameTx() {
    return this.getNumberAttribute('uni_stream_data_blocked_frame_tx');
  }
  public set uniStreamDataBlockedFrameTx(value: number) {
    this._uniStreamDataBlockedFrameTx = value;
  }
  public resetUniStreamDataBlockedFrameTx() {
    this._uniStreamDataBlockedFrameTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniStreamDataBlockedFrameTxInput() {
    return this._uniStreamDataBlockedFrameTx;
  }

  // unknown_frame - computed: false, optional: true, required: false
  private _unknownFrame?: number; 
  public get unknownFrame() {
    return this.getNumberAttribute('unknown_frame');
  }
  public set unknownFrame(value: number) {
    this._unknownFrame = value;
  }
  public resetUnknownFrame() {
    this._unknownFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownFrameInput() {
    return this._unknownFrame;
  }

  // unknown_scid - computed: false, optional: true, required: false
  private _unknownScid?: number; 
  public get unknownScid() {
    return this.getNumberAttribute('unknown_scid');
  }
  public set unknownScid(value: number) {
    this._unknownScid = value;
  }
  public resetUnknownScid() {
    this._unknownScid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownScidInput() {
    return this._unknownScid;
  }

  // ver_rx - computed: false, optional: true, required: false
  private _verRx?: number; 
  public get verRx() {
    return this.getNumberAttribute('ver_rx');
  }
  public set verRx(value: number) {
    this._verRx = value;
  }
  public resetVerRx() {
    this._verRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verRxInput() {
    return this._verRx;
  }

  // ver_tx - computed: false, optional: true, required: false
  private _verTx?: number; 
  public get verTx() {
    return this.getNumberAttribute('ver_tx');
  }
  public set verTx(value: number) {
    this._verTx = value;
  }
  public resetVerTx() {
    this._verTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verTxInput() {
    return this._verTx;
  }

  // wsocket_closed - computed: false, optional: true, required: false
  private _wsocketClosed?: number; 
  public get wsocketClosed() {
    return this.getNumberAttribute('wsocket_closed');
  }
  public set wsocketClosed(value: number) {
    this._wsocketClosed = value;
  }
  public resetWsocketClosed() {
    this._wsocketClosed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wsocketClosedInput() {
    return this._wsocketClosed;
  }

  // wsocket_created - computed: false, optional: true, required: false
  private _wsocketCreated?: number; 
  public get wsocketCreated() {
    return this.getNumberAttribute('wsocket_created');
  }
  public set wsocketCreated(value: number) {
    this._wsocketCreated = value;
  }
  public resetWsocketCreated() {
    this._wsocketCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wsocketCreatedInput() {
    return this._wsocketCreated;
  }

  // zero_frame_packet - computed: false, optional: true, required: false
  private _zeroFramePacket?: number; 
  public get zeroFramePacket() {
    return this.getNumberAttribute('zero_frame_packet');
  }
  public set zeroFramePacket(value: number) {
    this._zeroFramePacket = value;
  }
  public resetZeroFramePacket() {
    this._zeroFramePacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroFramePacketInput() {
    return this._zeroFramePacket;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats thunder_slb_quic_stats}
*/
export class DataThunderSlbQuicStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_quic_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbQuicStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbQuicStats to import
  * @param importFromId The id of the existing DataThunderSlbQuicStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbQuicStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_quic_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_stats thunder_slb_quic_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbQuicStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbQuicStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_quic_stats',
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
  private _stats = new DataThunderSlbQuicStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbQuicStatsStats) {
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
      stats: dataThunderSlbQuicStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSlbQuicStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbQuicStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
