// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemTcpStatsStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#id DataThunderSystemTcpStatsStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#stats DataThunderSystemTcpStatsStats#stats}
  */
  readonly stats?: DataThunderSystemTcpStatsStatsStats;
}
export interface DataThunderSystemTcpStatsStatsStats {
  /**
  * Transition to full stack on when application buffers too much data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#a2bappbuffering DataThunderSystemTcpStatsStats#a2bappbuffering}
  */
  readonly a2Bappbuffering?: number;
  /**
  * ATCP to BTCP Dup/OO ACK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#a2bdupack DataThunderSystemTcpStatsStats#a2bdupack}
  */
  readonly a2Bdupack?: number;
  /**
  * ATCP to BTCP state machine transition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#a2bfsmtransition DataThunderSystemTcpStatsStats#a2bfsmtransition}
  */
  readonly a2Bfsmtransition?: number;
  /**
  * ATCP to BTCP oo data received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#a2boodata DataThunderSystemTcpStatsStats#a2boodata}
  */
  readonly a2Boodata?: number;
  /**
  * ATCP to BTCP partial ack received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#a2bpartialack DataThunderSystemTcpStatsStats#a2bpartialack}
  */
  readonly a2Bpartialack?: number;
  /**
  * ATCP to BTCP receive window
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#a2brcvwnd DataThunderSystemTcpStatsStats#a2brcvwnd}
  */
  readonly a2Brcvwnd?: number;
  /**
  * ATCP to BTCP Rxmitted data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#a2brxdata DataThunderSystemTcpStatsStats#a2brxdata}
  */
  readonly a2Brxdata?: number;
  /**
  * ATCP to BTCP SACK options present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#a2bsackpresent DataThunderSystemTcpStatsStats#a2bsackpresent}
  */
  readonly a2Bsackpresent?: number;
  /**
  * ATCP to BTCP send window
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#a2bsndwnd DataThunderSystemTcpStatsStats#a2bsndwnd}
  */
  readonly a2Bsndwnd?: number;
  /**
  * ATCP to BTCP unsupported TCP options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#a2btcpoptions DataThunderSystemTcpStatsStats#a2btcpoptions}
  */
  readonly a2Btcpoptions?: number;
  /**
  * ATCP to BTCP total transitions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#a2btransitionnum DataThunderSystemTcpStatsStats#a2btransitionnum}
  */
  readonly a2Btransitionnum?: number;
  /**
  * Adaptive TCP buffer allocation fails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#atcpbuffallocfail DataThunderSystemTcpStatsStats#atcpbuffallocfail}
  */
  readonly atcpbuffallocfail?: number;
  /**
  * Adaptive TCP forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#atcpforward DataThunderSystemTcpStatsStats#atcpforward}
  */
  readonly atcpforward?: number;
  /**
  * Adaptive TCP retransmits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#atcprexmit DataThunderSystemTcpStatsStats#atcprexmit}
  */
  readonly atcprexmit?: number;
  /**
  * Adaptive TCP transmit SA drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#atcprexmitsadrop DataThunderSystemTcpStatsStats#atcprexmitsadrop}
  */
  readonly atcprexmitsadrop?: number;
  /**
  * Adaptive TCP sendback ACK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#atcpsendbackack DataThunderSystemTcpStatsStats#atcpsendbackack}
  */
  readonly atcpsendbackack?: number;
  /**
  * Adaptive TCP sent fails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#atcpsendfail DataThunderSystemTcpStatsStats#atcpsendfail}
  */
  readonly atcpsendfail?: number;
  /**
  * Adaptive TCP sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#atcpsent DataThunderSystemTcpStatsStats#atcpsent}
  */
  readonly atcpsent?: number;
  /**
  * ATCP to BTCP total transitions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#b2atransitionnum DataThunderSystemTcpStatsStats#b2atransitionnum}
  */
  readonly b2Atransitionnum?: number;
  /**
  * IO Channel Modified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#bad_iochan DataThunderSystemTcpStatsStats#bad_iochan}
  */
  readonly badIochan?: number;
  /**
  * Ignored RST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#badrst DataThunderSystemTcpStatsStats#badrst}
  */
  readonly badrst?: number;
  /**
  * Challenge ACK limited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#cacklim DataThunderSystemTcpStatsStats#cacklim}
  */
  readonly cacklim?: number;
  /**
  * Congestion control window set do to idle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#cc_idle DataThunderSystemTcpStatsStats#cc_idle}
  */
  readonly ccIdle?: number;
  /**
  * Congestion control window reduced by event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#cc_reduce DataThunderSystemTcpStatsStats#cc_reduce}
  */
  readonly ccReduce?: number;
  /**
  * Connect closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#closed DataThunderSystemTcpStatsStats#closed}
  */
  readonly closed?: number;
  /**
  * Connect initiated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#connattempt DataThunderSystemTcpStatsStats#connattempt}
  */
  readonly connattempt?: number;
  /**
  * Embryonic connect dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#conndrops DataThunderSystemTcpStatsStats#conndrops}
  */
  readonly conndrops?: number;
  /**
  * Connect established
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#connects DataThunderSystemTcpStatsStats#connects}
  */
  readonly connects?: number;
  /**
  * Delayed acks sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#delack DataThunderSystemTcpStatsStats#delack}
  */
  readonly delack?: number;
  /**
  * Connect dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#drops DataThunderSystemTcpStatsStats#drops}
  */
  readonly drops?: number;
  /**
  * Early Retransmission sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#earlyrexmit DataThunderSystemTcpStatsStats#earlyrexmit}
  */
  readonly earlyrexmit?: number;
  /**
  * Drop FIN_WAIT_2 connection after time limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#finwait2_drops DataThunderSystemTcpStatsStats#finwait2_drops}
  */
  readonly finwait2Drops?: number;
  /**
  * Connect dropped in keepalive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#keepdrops DataThunderSystemTcpStatsStats#keepdrops}
  */
  readonly keepdrops?: number;
  /**
  * Keepalive probe sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#keepprobe DataThunderSystemTcpStatsStats#keepprobe}
  */
  readonly keepprobe?: number;
  /**
  * Keepalive timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#keeptimeo DataThunderSystemTcpStatsStats#keeptimeo}
  */
  readonly keeptimeo?: number;
  /**
  * Maxburst limited tx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#mburstlim DataThunderSystemTcpStatsStats#mburstlim}
  */
  readonly mburstlim?: number;
  /**
  * Segments dropped due to PAWS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#pawsdrop DataThunderSystemTcpStatsStats#pawsdrop}
  */
  readonly pawsdrop?: number;
  /**
  * Timeout in persist state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#persistdrop DataThunderSystemTcpStatsStats#persistdrop}
  */
  readonly persistdrop?: number;
  /**
  * Persist timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#persisttimeo DataThunderSystemTcpStatsStats#persisttimeo}
  */
  readonly persisttimeo?: number;
  /**
  * Hdr predict for acks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#predack DataThunderSystemTcpStatsStats#predack}
  */
  readonly predack?: number;
  /**
  * Hdr predict for data pkts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#preddat DataThunderSystemTcpStatsStats#preddat}
  */
  readonly preddat?: number;
  /**
  * Proxy header v1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#proxyheaderv1 DataThunderSystemTcpStatsStats#proxyheaderv1}
  */
  readonly proxyheaderv1?: number;
  /**
  * Proxy header v2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#proxyheaderv2 DataThunderSystemTcpStatsStats#proxyheaderv2}
  */
  readonly proxyheaderv2?: number;
  /**
  * Bytes acked by rcvd acks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#rcvackbyte DataThunderSystemTcpStatsStats#rcvackbyte}
  */
  readonly rcvackbyte?: number;
  /**
  * Rcvd ack packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#rcvackpack DataThunderSystemTcpStatsStats#rcvackpack}
  */
  readonly rcvackpack?: number;
  /**
  * Rcvd acks for unsent data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#rcvacktoomuch DataThunderSystemTcpStatsStats#rcvacktoomuch}
  */
  readonly rcvacktoomuch?: number;
  /**
  * Packet received with bad offset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#rcvbadoff DataThunderSystemTcpStatsStats#rcvbadoff}
  */
  readonly rcvbadoff?: number;
  /**
  * Bytes received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#rcvbyte DataThunderSystemTcpStatsStats#rcvbyte}
  */
  readonly rcvbyte?: number;
  /**
  * Bytes rcvd after window
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#rcvbyteafterwin DataThunderSystemTcpStatsStats#rcvbyteafterwin}
  */
  readonly rcvbyteafterwin?: number;
  /**
  * Rcvd DSACK packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#rcvdsack DataThunderSystemTcpStatsStats#rcvdsack}
  */
  readonly rcvdsack?: number;
  /**
  * Rcvd duplicate acks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#rcvdupack DataThunderSystemTcpStatsStats#rcvdupack}
  */
  readonly rcvdupack?: number;
  /**
  * Duplicate bytes received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#rcvdupbyte DataThunderSystemTcpStatsStats#rcvdupbyte}
  */
  readonly rcvdupbyte?: number;
  /**
  * Duplicate packet received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#rcvduppack DataThunderSystemTcpStatsStats#rcvduppack}
  */
  readonly rcvduppack?: number;
  /**
  * Packet dropped for lack of memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#rcvmemdrop DataThunderSystemTcpStatsStats#rcvmemdrop}
  */
  readonly rcvmemdrop?: number;
  /**
  * Out-of-order bytes received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#rcvoobyte DataThunderSystemTcpStatsStats#rcvoobyte}
  */
  readonly rcvoobyte?: number;
  /**
  * Out-of-order packet received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#rcvoopack DataThunderSystemTcpStatsStats#rcvoopack}
  */
  readonly rcvoopack?: number;
  /**
  * Packet received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#rcvpack DataThunderSystemTcpStatsStats#rcvpack}
  */
  readonly rcvpack?: number;
  /**
  * Packets with data after window
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#rcvpackafterwin DataThunderSystemTcpStatsStats#rcvpackafterwin}
  */
  readonly rcvpackafterwin?: number;
  /**
  * Dup. bytes in part-dup. packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#rcvpartdupbyte DataThunderSystemTcpStatsStats#rcvpartdupbyte}
  */
  readonly rcvpartdupbyte?: number;
  /**
  * Packet with some duplicate data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#rcvpartduppack DataThunderSystemTcpStatsStats#rcvpartduppack}
  */
  readonly rcvpartduppack?: number;
  /**
  * Total packet received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#rcvtotal DataThunderSystemTcpStatsStats#rcvtotal}
  */
  readonly rcvtotal?: number;
  /**
  * Rcvd window probe packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#rcvwinprobe DataThunderSystemTcpStatsStats#rcvwinprobe}
  */
  readonly rcvwinprobe?: number;
  /**
  * Rcvd window update packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#rcvwinupd DataThunderSystemTcpStatsStats#rcvwinupd}
  */
  readonly rcvwinupd?: number;
  /**
  * Packet dropped during reassembly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#reassmemdrop DataThunderSystemTcpStatsStats#reassmemdrop}
  */
  readonly reassmemdrop?: number;
  /**
  * Reassembly Time Out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#reasstimeout DataThunderSystemTcpStatsStats#reasstimeout}
  */
  readonly reasstimeout?: number;
  /**
  * Retransmit timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#rexmttimeo DataThunderSystemTcpStatsStats#rexmttimeo}
  */
  readonly rexmttimeo?: number;
  /**
  * Update RTT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#rttupdated DataThunderSystemTcpStatsStats#rttupdated}
  */
  readonly rttupdated?: number;
  /**
  * SACK received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#sack_rcv_blocks DataThunderSystemTcpStatsStats#sack_rcv_blocks}
  */
  readonly sackRcvBlocks?: number;
  /**
  * SACK recovery episodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#sack_recovery_episode DataThunderSystemTcpStatsStats#sack_recovery_episode}
  */
  readonly sackRecoveryEpisode?: number;
  /**
  * SACK rexmit bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#sack_rexmit_bytes DataThunderSystemTcpStatsStats#sack_rexmit_bytes}
  */
  readonly sackRexmitBytes?: number;
  /**
  * SACK rexmit segments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#sack_rexmits DataThunderSystemTcpStatsStats#sack_rexmits}
  */
  readonly sackRexmits?: number;
  /**
  * SACK sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#sack_send_blocks DataThunderSystemTcpStatsStats#sack_send_blocks}
  */
  readonly sackSendBlocks?: number;
  /**
  * Segs to get RTT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#segstimed DataThunderSystemTcpStatsStats#segstimed}
  */
  readonly segstimed?: number;
  /**
  * Ack packet sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#sndacks DataThunderSystemTcpStatsStats#sndacks}
  */
  readonly sndacks?: number;
  /**
  * Data bytes sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#sndbyte DataThunderSystemTcpStatsStats#sndbyte}
  */
  readonly sndbyte?: number;
  /**
  * Challenge ACK sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#sndcack DataThunderSystemTcpStatsStats#sndcack}
  */
  readonly sndcack?: number;
  /**
  * SYN|FIN|RST packet sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#sndctrl DataThunderSystemTcpStatsStats#sndctrl}
  */
  readonly sndctrl?: number;
  /**
  * FIN packet sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#sndfin DataThunderSystemTcpStatsStats#sndfin}
  */
  readonly sndfin?: number;
  /**
  * Data packet sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#sndpack DataThunderSystemTcpStatsStats#sndpack}
  */
  readonly sndpack?: number;
  /**
  * Window probe sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#sndprobe DataThunderSystemTcpStatsStats#sndprobe}
  */
  readonly sndprobe?: number;
  /**
  * Unnecessary packet retransmit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#sndrexmitbad DataThunderSystemTcpStatsStats#sndrexmitbad}
  */
  readonly sndrexmitbad?: number;
  /**
  * Data byte retransmit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#sndrexmitbyte DataThunderSystemTcpStatsStats#sndrexmitbyte}
  */
  readonly sndrexmitbyte?: number;
  /**
  * Data packet retransmit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#sndrexmitpack DataThunderSystemTcpStatsStats#sndrexmitpack}
  */
  readonly sndrexmitpack?: number;
  /**
  * RST packet sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#sndrst DataThunderSystemTcpStatsStats#sndrst}
  */
  readonly sndrst?: number;
  /**
  * SYN packet sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#sndsyn DataThunderSystemTcpStatsStats#sndsyn}
  */
  readonly sndsyn?: number;
  /**
  * Total packet sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#sndtotal DataThunderSystemTcpStatsStats#sndtotal}
  */
  readonly sndtotal?: number;
  /**
  * URG packet sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#sndurg DataThunderSystemTcpStatsStats#sndurg}
  */
  readonly sndurg?: number;
  /**
  * Window update packet sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#sndwinup DataThunderSystemTcpStatsStats#sndwinup}
  */
  readonly sndwinup?: number;
  /**
  * Conn dropped in rxmt timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#timeoutdrop DataThunderSystemTcpStatsStats#timeoutdrop}
  */
  readonly timeoutdrop?: number;
}

export function dataThunderSystemTcpStatsStatsStatsToTerraform(struct?: DataThunderSystemTcpStatsStatsStatsOutputReference | DataThunderSystemTcpStatsStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    a2bappbuffering: cdktf.numberToTerraform(struct!.a2Bappbuffering),
    a2bdupack: cdktf.numberToTerraform(struct!.a2Bdupack),
    a2bfsmtransition: cdktf.numberToTerraform(struct!.a2Bfsmtransition),
    a2boodata: cdktf.numberToTerraform(struct!.a2Boodata),
    a2bpartialack: cdktf.numberToTerraform(struct!.a2Bpartialack),
    a2brcvwnd: cdktf.numberToTerraform(struct!.a2Brcvwnd),
    a2brxdata: cdktf.numberToTerraform(struct!.a2Brxdata),
    a2bsackpresent: cdktf.numberToTerraform(struct!.a2Bsackpresent),
    a2bsndwnd: cdktf.numberToTerraform(struct!.a2Bsndwnd),
    a2btcpoptions: cdktf.numberToTerraform(struct!.a2Btcpoptions),
    a2btransitionnum: cdktf.numberToTerraform(struct!.a2Btransitionnum),
    atcpbuffallocfail: cdktf.numberToTerraform(struct!.atcpbuffallocfail),
    atcpforward: cdktf.numberToTerraform(struct!.atcpforward),
    atcprexmit: cdktf.numberToTerraform(struct!.atcprexmit),
    atcprexmitsadrop: cdktf.numberToTerraform(struct!.atcprexmitsadrop),
    atcpsendbackack: cdktf.numberToTerraform(struct!.atcpsendbackack),
    atcpsendfail: cdktf.numberToTerraform(struct!.atcpsendfail),
    atcpsent: cdktf.numberToTerraform(struct!.atcpsent),
    b2atransitionnum: cdktf.numberToTerraform(struct!.b2Atransitionnum),
    bad_iochan: cdktf.numberToTerraform(struct!.badIochan),
    badrst: cdktf.numberToTerraform(struct!.badrst),
    cacklim: cdktf.numberToTerraform(struct!.cacklim),
    cc_idle: cdktf.numberToTerraform(struct!.ccIdle),
    cc_reduce: cdktf.numberToTerraform(struct!.ccReduce),
    closed: cdktf.numberToTerraform(struct!.closed),
    connattempt: cdktf.numberToTerraform(struct!.connattempt),
    conndrops: cdktf.numberToTerraform(struct!.conndrops),
    connects: cdktf.numberToTerraform(struct!.connects),
    delack: cdktf.numberToTerraform(struct!.delack),
    drops: cdktf.numberToTerraform(struct!.drops),
    earlyrexmit: cdktf.numberToTerraform(struct!.earlyrexmit),
    finwait2_drops: cdktf.numberToTerraform(struct!.finwait2Drops),
    keepdrops: cdktf.numberToTerraform(struct!.keepdrops),
    keepprobe: cdktf.numberToTerraform(struct!.keepprobe),
    keeptimeo: cdktf.numberToTerraform(struct!.keeptimeo),
    mburstlim: cdktf.numberToTerraform(struct!.mburstlim),
    pawsdrop: cdktf.numberToTerraform(struct!.pawsdrop),
    persistdrop: cdktf.numberToTerraform(struct!.persistdrop),
    persisttimeo: cdktf.numberToTerraform(struct!.persisttimeo),
    predack: cdktf.numberToTerraform(struct!.predack),
    preddat: cdktf.numberToTerraform(struct!.preddat),
    proxyheaderv1: cdktf.numberToTerraform(struct!.proxyheaderv1),
    proxyheaderv2: cdktf.numberToTerraform(struct!.proxyheaderv2),
    rcvackbyte: cdktf.numberToTerraform(struct!.rcvackbyte),
    rcvackpack: cdktf.numberToTerraform(struct!.rcvackpack),
    rcvacktoomuch: cdktf.numberToTerraform(struct!.rcvacktoomuch),
    rcvbadoff: cdktf.numberToTerraform(struct!.rcvbadoff),
    rcvbyte: cdktf.numberToTerraform(struct!.rcvbyte),
    rcvbyteafterwin: cdktf.numberToTerraform(struct!.rcvbyteafterwin),
    rcvdsack: cdktf.numberToTerraform(struct!.rcvdsack),
    rcvdupack: cdktf.numberToTerraform(struct!.rcvdupack),
    rcvdupbyte: cdktf.numberToTerraform(struct!.rcvdupbyte),
    rcvduppack: cdktf.numberToTerraform(struct!.rcvduppack),
    rcvmemdrop: cdktf.numberToTerraform(struct!.rcvmemdrop),
    rcvoobyte: cdktf.numberToTerraform(struct!.rcvoobyte),
    rcvoopack: cdktf.numberToTerraform(struct!.rcvoopack),
    rcvpack: cdktf.numberToTerraform(struct!.rcvpack),
    rcvpackafterwin: cdktf.numberToTerraform(struct!.rcvpackafterwin),
    rcvpartdupbyte: cdktf.numberToTerraform(struct!.rcvpartdupbyte),
    rcvpartduppack: cdktf.numberToTerraform(struct!.rcvpartduppack),
    rcvtotal: cdktf.numberToTerraform(struct!.rcvtotal),
    rcvwinprobe: cdktf.numberToTerraform(struct!.rcvwinprobe),
    rcvwinupd: cdktf.numberToTerraform(struct!.rcvwinupd),
    reassmemdrop: cdktf.numberToTerraform(struct!.reassmemdrop),
    reasstimeout: cdktf.numberToTerraform(struct!.reasstimeout),
    rexmttimeo: cdktf.numberToTerraform(struct!.rexmttimeo),
    rttupdated: cdktf.numberToTerraform(struct!.rttupdated),
    sack_rcv_blocks: cdktf.numberToTerraform(struct!.sackRcvBlocks),
    sack_recovery_episode: cdktf.numberToTerraform(struct!.sackRecoveryEpisode),
    sack_rexmit_bytes: cdktf.numberToTerraform(struct!.sackRexmitBytes),
    sack_rexmits: cdktf.numberToTerraform(struct!.sackRexmits),
    sack_send_blocks: cdktf.numberToTerraform(struct!.sackSendBlocks),
    segstimed: cdktf.numberToTerraform(struct!.segstimed),
    sndacks: cdktf.numberToTerraform(struct!.sndacks),
    sndbyte: cdktf.numberToTerraform(struct!.sndbyte),
    sndcack: cdktf.numberToTerraform(struct!.sndcack),
    sndctrl: cdktf.numberToTerraform(struct!.sndctrl),
    sndfin: cdktf.numberToTerraform(struct!.sndfin),
    sndpack: cdktf.numberToTerraform(struct!.sndpack),
    sndprobe: cdktf.numberToTerraform(struct!.sndprobe),
    sndrexmitbad: cdktf.numberToTerraform(struct!.sndrexmitbad),
    sndrexmitbyte: cdktf.numberToTerraform(struct!.sndrexmitbyte),
    sndrexmitpack: cdktf.numberToTerraform(struct!.sndrexmitpack),
    sndrst: cdktf.numberToTerraform(struct!.sndrst),
    sndsyn: cdktf.numberToTerraform(struct!.sndsyn),
    sndtotal: cdktf.numberToTerraform(struct!.sndtotal),
    sndurg: cdktf.numberToTerraform(struct!.sndurg),
    sndwinup: cdktf.numberToTerraform(struct!.sndwinup),
    timeoutdrop: cdktf.numberToTerraform(struct!.timeoutdrop),
  }
}


export function dataThunderSystemTcpStatsStatsStatsToHclTerraform(struct?: DataThunderSystemTcpStatsStatsStatsOutputReference | DataThunderSystemTcpStatsStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    a2bappbuffering: {
      value: cdktf.numberToHclTerraform(struct!.a2Bappbuffering),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    a2bdupack: {
      value: cdktf.numberToHclTerraform(struct!.a2Bdupack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    a2bfsmtransition: {
      value: cdktf.numberToHclTerraform(struct!.a2Bfsmtransition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    a2boodata: {
      value: cdktf.numberToHclTerraform(struct!.a2Boodata),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    a2bpartialack: {
      value: cdktf.numberToHclTerraform(struct!.a2Bpartialack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    a2brcvwnd: {
      value: cdktf.numberToHclTerraform(struct!.a2Brcvwnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    a2brxdata: {
      value: cdktf.numberToHclTerraform(struct!.a2Brxdata),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    a2bsackpresent: {
      value: cdktf.numberToHclTerraform(struct!.a2Bsackpresent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    a2bsndwnd: {
      value: cdktf.numberToHclTerraform(struct!.a2Bsndwnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    a2btcpoptions: {
      value: cdktf.numberToHclTerraform(struct!.a2Btcpoptions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    a2btransitionnum: {
      value: cdktf.numberToHclTerraform(struct!.a2Btransitionnum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    atcpbuffallocfail: {
      value: cdktf.numberToHclTerraform(struct!.atcpbuffallocfail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    atcpforward: {
      value: cdktf.numberToHclTerraform(struct!.atcpforward),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    atcprexmit: {
      value: cdktf.numberToHclTerraform(struct!.atcprexmit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    atcprexmitsadrop: {
      value: cdktf.numberToHclTerraform(struct!.atcprexmitsadrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    atcpsendbackack: {
      value: cdktf.numberToHclTerraform(struct!.atcpsendbackack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    atcpsendfail: {
      value: cdktf.numberToHclTerraform(struct!.atcpsendfail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    atcpsent: {
      value: cdktf.numberToHclTerraform(struct!.atcpsent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    b2atransitionnum: {
      value: cdktf.numberToHclTerraform(struct!.b2Atransitionnum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_iochan: {
      value: cdktf.numberToHclTerraform(struct!.badIochan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    badrst: {
      value: cdktf.numberToHclTerraform(struct!.badrst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cacklim: {
      value: cdktf.numberToHclTerraform(struct!.cacklim),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cc_idle: {
      value: cdktf.numberToHclTerraform(struct!.ccIdle),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cc_reduce: {
      value: cdktf.numberToHclTerraform(struct!.ccReduce),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    closed: {
      value: cdktf.numberToHclTerraform(struct!.closed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connattempt: {
      value: cdktf.numberToHclTerraform(struct!.connattempt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conndrops: {
      value: cdktf.numberToHclTerraform(struct!.conndrops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connects: {
      value: cdktf.numberToHclTerraform(struct!.connects),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delack: {
      value: cdktf.numberToHclTerraform(struct!.delack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drops: {
      value: cdktf.numberToHclTerraform(struct!.drops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    earlyrexmit: {
      value: cdktf.numberToHclTerraform(struct!.earlyrexmit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    finwait2_drops: {
      value: cdktf.numberToHclTerraform(struct!.finwait2Drops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keepdrops: {
      value: cdktf.numberToHclTerraform(struct!.keepdrops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keepprobe: {
      value: cdktf.numberToHclTerraform(struct!.keepprobe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keeptimeo: {
      value: cdktf.numberToHclTerraform(struct!.keeptimeo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mburstlim: {
      value: cdktf.numberToHclTerraform(struct!.mburstlim),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pawsdrop: {
      value: cdktf.numberToHclTerraform(struct!.pawsdrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    persistdrop: {
      value: cdktf.numberToHclTerraform(struct!.persistdrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    persisttimeo: {
      value: cdktf.numberToHclTerraform(struct!.persisttimeo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    predack: {
      value: cdktf.numberToHclTerraform(struct!.predack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preddat: {
      value: cdktf.numberToHclTerraform(struct!.preddat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxyheaderv1: {
      value: cdktf.numberToHclTerraform(struct!.proxyheaderv1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxyheaderv2: {
      value: cdktf.numberToHclTerraform(struct!.proxyheaderv2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcvackbyte: {
      value: cdktf.numberToHclTerraform(struct!.rcvackbyte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcvackpack: {
      value: cdktf.numberToHclTerraform(struct!.rcvackpack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcvacktoomuch: {
      value: cdktf.numberToHclTerraform(struct!.rcvacktoomuch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcvbadoff: {
      value: cdktf.numberToHclTerraform(struct!.rcvbadoff),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcvbyte: {
      value: cdktf.numberToHclTerraform(struct!.rcvbyte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcvbyteafterwin: {
      value: cdktf.numberToHclTerraform(struct!.rcvbyteafterwin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcvdsack: {
      value: cdktf.numberToHclTerraform(struct!.rcvdsack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcvdupack: {
      value: cdktf.numberToHclTerraform(struct!.rcvdupack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcvdupbyte: {
      value: cdktf.numberToHclTerraform(struct!.rcvdupbyte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcvduppack: {
      value: cdktf.numberToHclTerraform(struct!.rcvduppack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcvmemdrop: {
      value: cdktf.numberToHclTerraform(struct!.rcvmemdrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcvoobyte: {
      value: cdktf.numberToHclTerraform(struct!.rcvoobyte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcvoopack: {
      value: cdktf.numberToHclTerraform(struct!.rcvoopack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcvpack: {
      value: cdktf.numberToHclTerraform(struct!.rcvpack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcvpackafterwin: {
      value: cdktf.numberToHclTerraform(struct!.rcvpackafterwin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcvpartdupbyte: {
      value: cdktf.numberToHclTerraform(struct!.rcvpartdupbyte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcvpartduppack: {
      value: cdktf.numberToHclTerraform(struct!.rcvpartduppack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcvtotal: {
      value: cdktf.numberToHclTerraform(struct!.rcvtotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcvwinprobe: {
      value: cdktf.numberToHclTerraform(struct!.rcvwinprobe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcvwinupd: {
      value: cdktf.numberToHclTerraform(struct!.rcvwinupd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reassmemdrop: {
      value: cdktf.numberToHclTerraform(struct!.reassmemdrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reasstimeout: {
      value: cdktf.numberToHclTerraform(struct!.reasstimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rexmttimeo: {
      value: cdktf.numberToHclTerraform(struct!.rexmttimeo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rttupdated: {
      value: cdktf.numberToHclTerraform(struct!.rttupdated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sack_rcv_blocks: {
      value: cdktf.numberToHclTerraform(struct!.sackRcvBlocks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sack_recovery_episode: {
      value: cdktf.numberToHclTerraform(struct!.sackRecoveryEpisode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sack_rexmit_bytes: {
      value: cdktf.numberToHclTerraform(struct!.sackRexmitBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sack_rexmits: {
      value: cdktf.numberToHclTerraform(struct!.sackRexmits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sack_send_blocks: {
      value: cdktf.numberToHclTerraform(struct!.sackSendBlocks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    segstimed: {
      value: cdktf.numberToHclTerraform(struct!.segstimed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sndacks: {
      value: cdktf.numberToHclTerraform(struct!.sndacks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sndbyte: {
      value: cdktf.numberToHclTerraform(struct!.sndbyte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sndcack: {
      value: cdktf.numberToHclTerraform(struct!.sndcack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sndctrl: {
      value: cdktf.numberToHclTerraform(struct!.sndctrl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sndfin: {
      value: cdktf.numberToHclTerraform(struct!.sndfin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sndpack: {
      value: cdktf.numberToHclTerraform(struct!.sndpack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sndprobe: {
      value: cdktf.numberToHclTerraform(struct!.sndprobe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sndrexmitbad: {
      value: cdktf.numberToHclTerraform(struct!.sndrexmitbad),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sndrexmitbyte: {
      value: cdktf.numberToHclTerraform(struct!.sndrexmitbyte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sndrexmitpack: {
      value: cdktf.numberToHclTerraform(struct!.sndrexmitpack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sndrst: {
      value: cdktf.numberToHclTerraform(struct!.sndrst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sndsyn: {
      value: cdktf.numberToHclTerraform(struct!.sndsyn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sndtotal: {
      value: cdktf.numberToHclTerraform(struct!.sndtotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sndurg: {
      value: cdktf.numberToHclTerraform(struct!.sndurg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sndwinup: {
      value: cdktf.numberToHclTerraform(struct!.sndwinup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeoutdrop: {
      value: cdktf.numberToHclTerraform(struct!.timeoutdrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemTcpStatsStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemTcpStatsStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._a2Bappbuffering !== undefined) {
      hasAnyValues = true;
      internalValueResult.a2Bappbuffering = this._a2Bappbuffering;
    }
    if (this._a2Bdupack !== undefined) {
      hasAnyValues = true;
      internalValueResult.a2Bdupack = this._a2Bdupack;
    }
    if (this._a2Bfsmtransition !== undefined) {
      hasAnyValues = true;
      internalValueResult.a2Bfsmtransition = this._a2Bfsmtransition;
    }
    if (this._a2Boodata !== undefined) {
      hasAnyValues = true;
      internalValueResult.a2Boodata = this._a2Boodata;
    }
    if (this._a2Bpartialack !== undefined) {
      hasAnyValues = true;
      internalValueResult.a2Bpartialack = this._a2Bpartialack;
    }
    if (this._a2Brcvwnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.a2Brcvwnd = this._a2Brcvwnd;
    }
    if (this._a2Brxdata !== undefined) {
      hasAnyValues = true;
      internalValueResult.a2Brxdata = this._a2Brxdata;
    }
    if (this._a2Bsackpresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.a2Bsackpresent = this._a2Bsackpresent;
    }
    if (this._a2Bsndwnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.a2Bsndwnd = this._a2Bsndwnd;
    }
    if (this._a2Btcpoptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.a2Btcpoptions = this._a2Btcpoptions;
    }
    if (this._a2Btransitionnum !== undefined) {
      hasAnyValues = true;
      internalValueResult.a2Btransitionnum = this._a2Btransitionnum;
    }
    if (this._atcpbuffallocfail !== undefined) {
      hasAnyValues = true;
      internalValueResult.atcpbuffallocfail = this._atcpbuffallocfail;
    }
    if (this._atcpforward !== undefined) {
      hasAnyValues = true;
      internalValueResult.atcpforward = this._atcpforward;
    }
    if (this._atcprexmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.atcprexmit = this._atcprexmit;
    }
    if (this._atcprexmitsadrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.atcprexmitsadrop = this._atcprexmitsadrop;
    }
    if (this._atcpsendbackack !== undefined) {
      hasAnyValues = true;
      internalValueResult.atcpsendbackack = this._atcpsendbackack;
    }
    if (this._atcpsendfail !== undefined) {
      hasAnyValues = true;
      internalValueResult.atcpsendfail = this._atcpsendfail;
    }
    if (this._atcpsent !== undefined) {
      hasAnyValues = true;
      internalValueResult.atcpsent = this._atcpsent;
    }
    if (this._b2Atransitionnum !== undefined) {
      hasAnyValues = true;
      internalValueResult.b2Atransitionnum = this._b2Atransitionnum;
    }
    if (this._badIochan !== undefined) {
      hasAnyValues = true;
      internalValueResult.badIochan = this._badIochan;
    }
    if (this._badrst !== undefined) {
      hasAnyValues = true;
      internalValueResult.badrst = this._badrst;
    }
    if (this._cacklim !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacklim = this._cacklim;
    }
    if (this._ccIdle !== undefined) {
      hasAnyValues = true;
      internalValueResult.ccIdle = this._ccIdle;
    }
    if (this._ccReduce !== undefined) {
      hasAnyValues = true;
      internalValueResult.ccReduce = this._ccReduce;
    }
    if (this._closed !== undefined) {
      hasAnyValues = true;
      internalValueResult.closed = this._closed;
    }
    if (this._connattempt !== undefined) {
      hasAnyValues = true;
      internalValueResult.connattempt = this._connattempt;
    }
    if (this._conndrops !== undefined) {
      hasAnyValues = true;
      internalValueResult.conndrops = this._conndrops;
    }
    if (this._connects !== undefined) {
      hasAnyValues = true;
      internalValueResult.connects = this._connects;
    }
    if (this._delack !== undefined) {
      hasAnyValues = true;
      internalValueResult.delack = this._delack;
    }
    if (this._drops !== undefined) {
      hasAnyValues = true;
      internalValueResult.drops = this._drops;
    }
    if (this._earlyrexmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.earlyrexmit = this._earlyrexmit;
    }
    if (this._finwait2Drops !== undefined) {
      hasAnyValues = true;
      internalValueResult.finwait2Drops = this._finwait2Drops;
    }
    if (this._keepdrops !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepdrops = this._keepdrops;
    }
    if (this._keepprobe !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepprobe = this._keepprobe;
    }
    if (this._keeptimeo !== undefined) {
      hasAnyValues = true;
      internalValueResult.keeptimeo = this._keeptimeo;
    }
    if (this._mburstlim !== undefined) {
      hasAnyValues = true;
      internalValueResult.mburstlim = this._mburstlim;
    }
    if (this._pawsdrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.pawsdrop = this._pawsdrop;
    }
    if (this._persistdrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistdrop = this._persistdrop;
    }
    if (this._persisttimeo !== undefined) {
      hasAnyValues = true;
      internalValueResult.persisttimeo = this._persisttimeo;
    }
    if (this._predack !== undefined) {
      hasAnyValues = true;
      internalValueResult.predack = this._predack;
    }
    if (this._preddat !== undefined) {
      hasAnyValues = true;
      internalValueResult.preddat = this._preddat;
    }
    if (this._proxyheaderv1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyheaderv1 = this._proxyheaderv1;
    }
    if (this._proxyheaderv2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyheaderv2 = this._proxyheaderv2;
    }
    if (this._rcvackbyte !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvackbyte = this._rcvackbyte;
    }
    if (this._rcvackpack !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvackpack = this._rcvackpack;
    }
    if (this._rcvacktoomuch !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvacktoomuch = this._rcvacktoomuch;
    }
    if (this._rcvbadoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvbadoff = this._rcvbadoff;
    }
    if (this._rcvbyte !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvbyte = this._rcvbyte;
    }
    if (this._rcvbyteafterwin !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvbyteafterwin = this._rcvbyteafterwin;
    }
    if (this._rcvdsack !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvdsack = this._rcvdsack;
    }
    if (this._rcvdupack !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvdupack = this._rcvdupack;
    }
    if (this._rcvdupbyte !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvdupbyte = this._rcvdupbyte;
    }
    if (this._rcvduppack !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvduppack = this._rcvduppack;
    }
    if (this._rcvmemdrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvmemdrop = this._rcvmemdrop;
    }
    if (this._rcvoobyte !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvoobyte = this._rcvoobyte;
    }
    if (this._rcvoopack !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvoopack = this._rcvoopack;
    }
    if (this._rcvpack !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvpack = this._rcvpack;
    }
    if (this._rcvpackafterwin !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvpackafterwin = this._rcvpackafterwin;
    }
    if (this._rcvpartdupbyte !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvpartdupbyte = this._rcvpartdupbyte;
    }
    if (this._rcvpartduppack !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvpartduppack = this._rcvpartduppack;
    }
    if (this._rcvtotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvtotal = this._rcvtotal;
    }
    if (this._rcvwinprobe !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvwinprobe = this._rcvwinprobe;
    }
    if (this._rcvwinupd !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvwinupd = this._rcvwinupd;
    }
    if (this._reassmemdrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.reassmemdrop = this._reassmemdrop;
    }
    if (this._reasstimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.reasstimeout = this._reasstimeout;
    }
    if (this._rexmttimeo !== undefined) {
      hasAnyValues = true;
      internalValueResult.rexmttimeo = this._rexmttimeo;
    }
    if (this._rttupdated !== undefined) {
      hasAnyValues = true;
      internalValueResult.rttupdated = this._rttupdated;
    }
    if (this._sackRcvBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.sackRcvBlocks = this._sackRcvBlocks;
    }
    if (this._sackRecoveryEpisode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sackRecoveryEpisode = this._sackRecoveryEpisode;
    }
    if (this._sackRexmitBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sackRexmitBytes = this._sackRexmitBytes;
    }
    if (this._sackRexmits !== undefined) {
      hasAnyValues = true;
      internalValueResult.sackRexmits = this._sackRexmits;
    }
    if (this._sackSendBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.sackSendBlocks = this._sackSendBlocks;
    }
    if (this._segstimed !== undefined) {
      hasAnyValues = true;
      internalValueResult.segstimed = this._segstimed;
    }
    if (this._sndacks !== undefined) {
      hasAnyValues = true;
      internalValueResult.sndacks = this._sndacks;
    }
    if (this._sndbyte !== undefined) {
      hasAnyValues = true;
      internalValueResult.sndbyte = this._sndbyte;
    }
    if (this._sndcack !== undefined) {
      hasAnyValues = true;
      internalValueResult.sndcack = this._sndcack;
    }
    if (this._sndctrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.sndctrl = this._sndctrl;
    }
    if (this._sndfin !== undefined) {
      hasAnyValues = true;
      internalValueResult.sndfin = this._sndfin;
    }
    if (this._sndpack !== undefined) {
      hasAnyValues = true;
      internalValueResult.sndpack = this._sndpack;
    }
    if (this._sndprobe !== undefined) {
      hasAnyValues = true;
      internalValueResult.sndprobe = this._sndprobe;
    }
    if (this._sndrexmitbad !== undefined) {
      hasAnyValues = true;
      internalValueResult.sndrexmitbad = this._sndrexmitbad;
    }
    if (this._sndrexmitbyte !== undefined) {
      hasAnyValues = true;
      internalValueResult.sndrexmitbyte = this._sndrexmitbyte;
    }
    if (this._sndrexmitpack !== undefined) {
      hasAnyValues = true;
      internalValueResult.sndrexmitpack = this._sndrexmitpack;
    }
    if (this._sndrst !== undefined) {
      hasAnyValues = true;
      internalValueResult.sndrst = this._sndrst;
    }
    if (this._sndsyn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sndsyn = this._sndsyn;
    }
    if (this._sndtotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.sndtotal = this._sndtotal;
    }
    if (this._sndurg !== undefined) {
      hasAnyValues = true;
      internalValueResult.sndurg = this._sndurg;
    }
    if (this._sndwinup !== undefined) {
      hasAnyValues = true;
      internalValueResult.sndwinup = this._sndwinup;
    }
    if (this._timeoutdrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutdrop = this._timeoutdrop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemTcpStatsStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._a2Bappbuffering = undefined;
      this._a2Bdupack = undefined;
      this._a2Bfsmtransition = undefined;
      this._a2Boodata = undefined;
      this._a2Bpartialack = undefined;
      this._a2Brcvwnd = undefined;
      this._a2Brxdata = undefined;
      this._a2Bsackpresent = undefined;
      this._a2Bsndwnd = undefined;
      this._a2Btcpoptions = undefined;
      this._a2Btransitionnum = undefined;
      this._atcpbuffallocfail = undefined;
      this._atcpforward = undefined;
      this._atcprexmit = undefined;
      this._atcprexmitsadrop = undefined;
      this._atcpsendbackack = undefined;
      this._atcpsendfail = undefined;
      this._atcpsent = undefined;
      this._b2Atransitionnum = undefined;
      this._badIochan = undefined;
      this._badrst = undefined;
      this._cacklim = undefined;
      this._ccIdle = undefined;
      this._ccReduce = undefined;
      this._closed = undefined;
      this._connattempt = undefined;
      this._conndrops = undefined;
      this._connects = undefined;
      this._delack = undefined;
      this._drops = undefined;
      this._earlyrexmit = undefined;
      this._finwait2Drops = undefined;
      this._keepdrops = undefined;
      this._keepprobe = undefined;
      this._keeptimeo = undefined;
      this._mburstlim = undefined;
      this._pawsdrop = undefined;
      this._persistdrop = undefined;
      this._persisttimeo = undefined;
      this._predack = undefined;
      this._preddat = undefined;
      this._proxyheaderv1 = undefined;
      this._proxyheaderv2 = undefined;
      this._rcvackbyte = undefined;
      this._rcvackpack = undefined;
      this._rcvacktoomuch = undefined;
      this._rcvbadoff = undefined;
      this._rcvbyte = undefined;
      this._rcvbyteafterwin = undefined;
      this._rcvdsack = undefined;
      this._rcvdupack = undefined;
      this._rcvdupbyte = undefined;
      this._rcvduppack = undefined;
      this._rcvmemdrop = undefined;
      this._rcvoobyte = undefined;
      this._rcvoopack = undefined;
      this._rcvpack = undefined;
      this._rcvpackafterwin = undefined;
      this._rcvpartdupbyte = undefined;
      this._rcvpartduppack = undefined;
      this._rcvtotal = undefined;
      this._rcvwinprobe = undefined;
      this._rcvwinupd = undefined;
      this._reassmemdrop = undefined;
      this._reasstimeout = undefined;
      this._rexmttimeo = undefined;
      this._rttupdated = undefined;
      this._sackRcvBlocks = undefined;
      this._sackRecoveryEpisode = undefined;
      this._sackRexmitBytes = undefined;
      this._sackRexmits = undefined;
      this._sackSendBlocks = undefined;
      this._segstimed = undefined;
      this._sndacks = undefined;
      this._sndbyte = undefined;
      this._sndcack = undefined;
      this._sndctrl = undefined;
      this._sndfin = undefined;
      this._sndpack = undefined;
      this._sndprobe = undefined;
      this._sndrexmitbad = undefined;
      this._sndrexmitbyte = undefined;
      this._sndrexmitpack = undefined;
      this._sndrst = undefined;
      this._sndsyn = undefined;
      this._sndtotal = undefined;
      this._sndurg = undefined;
      this._sndwinup = undefined;
      this._timeoutdrop = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._a2Bappbuffering = value.a2Bappbuffering;
      this._a2Bdupack = value.a2Bdupack;
      this._a2Bfsmtransition = value.a2Bfsmtransition;
      this._a2Boodata = value.a2Boodata;
      this._a2Bpartialack = value.a2Bpartialack;
      this._a2Brcvwnd = value.a2Brcvwnd;
      this._a2Brxdata = value.a2Brxdata;
      this._a2Bsackpresent = value.a2Bsackpresent;
      this._a2Bsndwnd = value.a2Bsndwnd;
      this._a2Btcpoptions = value.a2Btcpoptions;
      this._a2Btransitionnum = value.a2Btransitionnum;
      this._atcpbuffallocfail = value.atcpbuffallocfail;
      this._atcpforward = value.atcpforward;
      this._atcprexmit = value.atcprexmit;
      this._atcprexmitsadrop = value.atcprexmitsadrop;
      this._atcpsendbackack = value.atcpsendbackack;
      this._atcpsendfail = value.atcpsendfail;
      this._atcpsent = value.atcpsent;
      this._b2Atransitionnum = value.b2Atransitionnum;
      this._badIochan = value.badIochan;
      this._badrst = value.badrst;
      this._cacklim = value.cacklim;
      this._ccIdle = value.ccIdle;
      this._ccReduce = value.ccReduce;
      this._closed = value.closed;
      this._connattempt = value.connattempt;
      this._conndrops = value.conndrops;
      this._connects = value.connects;
      this._delack = value.delack;
      this._drops = value.drops;
      this._earlyrexmit = value.earlyrexmit;
      this._finwait2Drops = value.finwait2Drops;
      this._keepdrops = value.keepdrops;
      this._keepprobe = value.keepprobe;
      this._keeptimeo = value.keeptimeo;
      this._mburstlim = value.mburstlim;
      this._pawsdrop = value.pawsdrop;
      this._persistdrop = value.persistdrop;
      this._persisttimeo = value.persisttimeo;
      this._predack = value.predack;
      this._preddat = value.preddat;
      this._proxyheaderv1 = value.proxyheaderv1;
      this._proxyheaderv2 = value.proxyheaderv2;
      this._rcvackbyte = value.rcvackbyte;
      this._rcvackpack = value.rcvackpack;
      this._rcvacktoomuch = value.rcvacktoomuch;
      this._rcvbadoff = value.rcvbadoff;
      this._rcvbyte = value.rcvbyte;
      this._rcvbyteafterwin = value.rcvbyteafterwin;
      this._rcvdsack = value.rcvdsack;
      this._rcvdupack = value.rcvdupack;
      this._rcvdupbyte = value.rcvdupbyte;
      this._rcvduppack = value.rcvduppack;
      this._rcvmemdrop = value.rcvmemdrop;
      this._rcvoobyte = value.rcvoobyte;
      this._rcvoopack = value.rcvoopack;
      this._rcvpack = value.rcvpack;
      this._rcvpackafterwin = value.rcvpackafterwin;
      this._rcvpartdupbyte = value.rcvpartdupbyte;
      this._rcvpartduppack = value.rcvpartduppack;
      this._rcvtotal = value.rcvtotal;
      this._rcvwinprobe = value.rcvwinprobe;
      this._rcvwinupd = value.rcvwinupd;
      this._reassmemdrop = value.reassmemdrop;
      this._reasstimeout = value.reasstimeout;
      this._rexmttimeo = value.rexmttimeo;
      this._rttupdated = value.rttupdated;
      this._sackRcvBlocks = value.sackRcvBlocks;
      this._sackRecoveryEpisode = value.sackRecoveryEpisode;
      this._sackRexmitBytes = value.sackRexmitBytes;
      this._sackRexmits = value.sackRexmits;
      this._sackSendBlocks = value.sackSendBlocks;
      this._segstimed = value.segstimed;
      this._sndacks = value.sndacks;
      this._sndbyte = value.sndbyte;
      this._sndcack = value.sndcack;
      this._sndctrl = value.sndctrl;
      this._sndfin = value.sndfin;
      this._sndpack = value.sndpack;
      this._sndprobe = value.sndprobe;
      this._sndrexmitbad = value.sndrexmitbad;
      this._sndrexmitbyte = value.sndrexmitbyte;
      this._sndrexmitpack = value.sndrexmitpack;
      this._sndrst = value.sndrst;
      this._sndsyn = value.sndsyn;
      this._sndtotal = value.sndtotal;
      this._sndurg = value.sndurg;
      this._sndwinup = value.sndwinup;
      this._timeoutdrop = value.timeoutdrop;
    }
  }

  // a2bappbuffering - computed: false, optional: true, required: false
  private _a2Bappbuffering?: number; 
  public get a2Bappbuffering() {
    return this.getNumberAttribute('a2bappbuffering');
  }
  public set a2Bappbuffering(value: number) {
    this._a2Bappbuffering = value;
  }
  public resetA2Bappbuffering() {
    this._a2Bappbuffering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a2BappbufferingInput() {
    return this._a2Bappbuffering;
  }

  // a2bdupack - computed: false, optional: true, required: false
  private _a2Bdupack?: number; 
  public get a2Bdupack() {
    return this.getNumberAttribute('a2bdupack');
  }
  public set a2Bdupack(value: number) {
    this._a2Bdupack = value;
  }
  public resetA2Bdupack() {
    this._a2Bdupack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a2BdupackInput() {
    return this._a2Bdupack;
  }

  // a2bfsmtransition - computed: false, optional: true, required: false
  private _a2Bfsmtransition?: number; 
  public get a2Bfsmtransition() {
    return this.getNumberAttribute('a2bfsmtransition');
  }
  public set a2Bfsmtransition(value: number) {
    this._a2Bfsmtransition = value;
  }
  public resetA2Bfsmtransition() {
    this._a2Bfsmtransition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a2BfsmtransitionInput() {
    return this._a2Bfsmtransition;
  }

  // a2boodata - computed: false, optional: true, required: false
  private _a2Boodata?: number; 
  public get a2Boodata() {
    return this.getNumberAttribute('a2boodata');
  }
  public set a2Boodata(value: number) {
    this._a2Boodata = value;
  }
  public resetA2Boodata() {
    this._a2Boodata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a2BoodataInput() {
    return this._a2Boodata;
  }

  // a2bpartialack - computed: false, optional: true, required: false
  private _a2Bpartialack?: number; 
  public get a2Bpartialack() {
    return this.getNumberAttribute('a2bpartialack');
  }
  public set a2Bpartialack(value: number) {
    this._a2Bpartialack = value;
  }
  public resetA2Bpartialack() {
    this._a2Bpartialack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a2BpartialackInput() {
    return this._a2Bpartialack;
  }

  // a2brcvwnd - computed: false, optional: true, required: false
  private _a2Brcvwnd?: number; 
  public get a2Brcvwnd() {
    return this.getNumberAttribute('a2brcvwnd');
  }
  public set a2Brcvwnd(value: number) {
    this._a2Brcvwnd = value;
  }
  public resetA2Brcvwnd() {
    this._a2Brcvwnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a2BrcvwndInput() {
    return this._a2Brcvwnd;
  }

  // a2brxdata - computed: false, optional: true, required: false
  private _a2Brxdata?: number; 
  public get a2Brxdata() {
    return this.getNumberAttribute('a2brxdata');
  }
  public set a2Brxdata(value: number) {
    this._a2Brxdata = value;
  }
  public resetA2Brxdata() {
    this._a2Brxdata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a2BrxdataInput() {
    return this._a2Brxdata;
  }

  // a2bsackpresent - computed: false, optional: true, required: false
  private _a2Bsackpresent?: number; 
  public get a2Bsackpresent() {
    return this.getNumberAttribute('a2bsackpresent');
  }
  public set a2Bsackpresent(value: number) {
    this._a2Bsackpresent = value;
  }
  public resetA2Bsackpresent() {
    this._a2Bsackpresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a2BsackpresentInput() {
    return this._a2Bsackpresent;
  }

  // a2bsndwnd - computed: false, optional: true, required: false
  private _a2Bsndwnd?: number; 
  public get a2Bsndwnd() {
    return this.getNumberAttribute('a2bsndwnd');
  }
  public set a2Bsndwnd(value: number) {
    this._a2Bsndwnd = value;
  }
  public resetA2Bsndwnd() {
    this._a2Bsndwnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a2BsndwndInput() {
    return this._a2Bsndwnd;
  }

  // a2btcpoptions - computed: false, optional: true, required: false
  private _a2Btcpoptions?: number; 
  public get a2Btcpoptions() {
    return this.getNumberAttribute('a2btcpoptions');
  }
  public set a2Btcpoptions(value: number) {
    this._a2Btcpoptions = value;
  }
  public resetA2Btcpoptions() {
    this._a2Btcpoptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a2BtcpoptionsInput() {
    return this._a2Btcpoptions;
  }

  // a2btransitionnum - computed: false, optional: true, required: false
  private _a2Btransitionnum?: number; 
  public get a2Btransitionnum() {
    return this.getNumberAttribute('a2btransitionnum');
  }
  public set a2Btransitionnum(value: number) {
    this._a2Btransitionnum = value;
  }
  public resetA2Btransitionnum() {
    this._a2Btransitionnum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a2BtransitionnumInput() {
    return this._a2Btransitionnum;
  }

  // atcpbuffallocfail - computed: false, optional: true, required: false
  private _atcpbuffallocfail?: number; 
  public get atcpbuffallocfail() {
    return this.getNumberAttribute('atcpbuffallocfail');
  }
  public set atcpbuffallocfail(value: number) {
    this._atcpbuffallocfail = value;
  }
  public resetAtcpbuffallocfail() {
    this._atcpbuffallocfail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atcpbuffallocfailInput() {
    return this._atcpbuffallocfail;
  }

  // atcpforward - computed: false, optional: true, required: false
  private _atcpforward?: number; 
  public get atcpforward() {
    return this.getNumberAttribute('atcpforward');
  }
  public set atcpforward(value: number) {
    this._atcpforward = value;
  }
  public resetAtcpforward() {
    this._atcpforward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atcpforwardInput() {
    return this._atcpforward;
  }

  // atcprexmit - computed: false, optional: true, required: false
  private _atcprexmit?: number; 
  public get atcprexmit() {
    return this.getNumberAttribute('atcprexmit');
  }
  public set atcprexmit(value: number) {
    this._atcprexmit = value;
  }
  public resetAtcprexmit() {
    this._atcprexmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atcprexmitInput() {
    return this._atcprexmit;
  }

  // atcprexmitsadrop - computed: false, optional: true, required: false
  private _atcprexmitsadrop?: number; 
  public get atcprexmitsadrop() {
    return this.getNumberAttribute('atcprexmitsadrop');
  }
  public set atcprexmitsadrop(value: number) {
    this._atcprexmitsadrop = value;
  }
  public resetAtcprexmitsadrop() {
    this._atcprexmitsadrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atcprexmitsadropInput() {
    return this._atcprexmitsadrop;
  }

  // atcpsendbackack - computed: false, optional: true, required: false
  private _atcpsendbackack?: number; 
  public get atcpsendbackack() {
    return this.getNumberAttribute('atcpsendbackack');
  }
  public set atcpsendbackack(value: number) {
    this._atcpsendbackack = value;
  }
  public resetAtcpsendbackack() {
    this._atcpsendbackack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atcpsendbackackInput() {
    return this._atcpsendbackack;
  }

  // atcpsendfail - computed: false, optional: true, required: false
  private _atcpsendfail?: number; 
  public get atcpsendfail() {
    return this.getNumberAttribute('atcpsendfail');
  }
  public set atcpsendfail(value: number) {
    this._atcpsendfail = value;
  }
  public resetAtcpsendfail() {
    this._atcpsendfail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atcpsendfailInput() {
    return this._atcpsendfail;
  }

  // atcpsent - computed: false, optional: true, required: false
  private _atcpsent?: number; 
  public get atcpsent() {
    return this.getNumberAttribute('atcpsent');
  }
  public set atcpsent(value: number) {
    this._atcpsent = value;
  }
  public resetAtcpsent() {
    this._atcpsent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atcpsentInput() {
    return this._atcpsent;
  }

  // b2atransitionnum - computed: false, optional: true, required: false
  private _b2Atransitionnum?: number; 
  public get b2Atransitionnum() {
    return this.getNumberAttribute('b2atransitionnum');
  }
  public set b2Atransitionnum(value: number) {
    this._b2Atransitionnum = value;
  }
  public resetB2Atransitionnum() {
    this._b2Atransitionnum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get b2AtransitionnumInput() {
    return this._b2Atransitionnum;
  }

  // bad_iochan - computed: false, optional: true, required: false
  private _badIochan?: number; 
  public get badIochan() {
    return this.getNumberAttribute('bad_iochan');
  }
  public set badIochan(value: number) {
    this._badIochan = value;
  }
  public resetBadIochan() {
    this._badIochan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIochanInput() {
    return this._badIochan;
  }

  // badrst - computed: false, optional: true, required: false
  private _badrst?: number; 
  public get badrst() {
    return this.getNumberAttribute('badrst');
  }
  public set badrst(value: number) {
    this._badrst = value;
  }
  public resetBadrst() {
    this._badrst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badrstInput() {
    return this._badrst;
  }

  // cacklim - computed: false, optional: true, required: false
  private _cacklim?: number; 
  public get cacklim() {
    return this.getNumberAttribute('cacklim');
  }
  public set cacklim(value: number) {
    this._cacklim = value;
  }
  public resetCacklim() {
    this._cacklim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacklimInput() {
    return this._cacklim;
  }

  // cc_idle - computed: false, optional: true, required: false
  private _ccIdle?: number; 
  public get ccIdle() {
    return this.getNumberAttribute('cc_idle');
  }
  public set ccIdle(value: number) {
    this._ccIdle = value;
  }
  public resetCcIdle() {
    this._ccIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccIdleInput() {
    return this._ccIdle;
  }

  // cc_reduce - computed: false, optional: true, required: false
  private _ccReduce?: number; 
  public get ccReduce() {
    return this.getNumberAttribute('cc_reduce');
  }
  public set ccReduce(value: number) {
    this._ccReduce = value;
  }
  public resetCcReduce() {
    this._ccReduce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccReduceInput() {
    return this._ccReduce;
  }

  // closed - computed: false, optional: true, required: false
  private _closed?: number; 
  public get closed() {
    return this.getNumberAttribute('closed');
  }
  public set closed(value: number) {
    this._closed = value;
  }
  public resetClosed() {
    this._closed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closedInput() {
    return this._closed;
  }

  // connattempt - computed: false, optional: true, required: false
  private _connattempt?: number; 
  public get connattempt() {
    return this.getNumberAttribute('connattempt');
  }
  public set connattempt(value: number) {
    this._connattempt = value;
  }
  public resetConnattempt() {
    this._connattempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connattemptInput() {
    return this._connattempt;
  }

  // conndrops - computed: false, optional: true, required: false
  private _conndrops?: number; 
  public get conndrops() {
    return this.getNumberAttribute('conndrops');
  }
  public set conndrops(value: number) {
    this._conndrops = value;
  }
  public resetConndrops() {
    this._conndrops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conndropsInput() {
    return this._conndrops;
  }

  // connects - computed: false, optional: true, required: false
  private _connects?: number; 
  public get connects() {
    return this.getNumberAttribute('connects');
  }
  public set connects(value: number) {
    this._connects = value;
  }
  public resetConnects() {
    this._connects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectsInput() {
    return this._connects;
  }

  // delack - computed: false, optional: true, required: false
  private _delack?: number; 
  public get delack() {
    return this.getNumberAttribute('delack');
  }
  public set delack(value: number) {
    this._delack = value;
  }
  public resetDelack() {
    this._delack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delackInput() {
    return this._delack;
  }

  // drops - computed: false, optional: true, required: false
  private _drops?: number; 
  public get drops() {
    return this.getNumberAttribute('drops');
  }
  public set drops(value: number) {
    this._drops = value;
  }
  public resetDrops() {
    this._drops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropsInput() {
    return this._drops;
  }

  // earlyrexmit - computed: false, optional: true, required: false
  private _earlyrexmit?: number; 
  public get earlyrexmit() {
    return this.getNumberAttribute('earlyrexmit');
  }
  public set earlyrexmit(value: number) {
    this._earlyrexmit = value;
  }
  public resetEarlyrexmit() {
    this._earlyrexmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get earlyrexmitInput() {
    return this._earlyrexmit;
  }

  // finwait2_drops - computed: false, optional: true, required: false
  private _finwait2Drops?: number; 
  public get finwait2Drops() {
    return this.getNumberAttribute('finwait2_drops');
  }
  public set finwait2Drops(value: number) {
    this._finwait2Drops = value;
  }
  public resetFinwait2Drops() {
    this._finwait2Drops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finwait2DropsInput() {
    return this._finwait2Drops;
  }

  // keepdrops - computed: false, optional: true, required: false
  private _keepdrops?: number; 
  public get keepdrops() {
    return this.getNumberAttribute('keepdrops');
  }
  public set keepdrops(value: number) {
    this._keepdrops = value;
  }
  public resetKeepdrops() {
    this._keepdrops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepdropsInput() {
    return this._keepdrops;
  }

  // keepprobe - computed: false, optional: true, required: false
  private _keepprobe?: number; 
  public get keepprobe() {
    return this.getNumberAttribute('keepprobe');
  }
  public set keepprobe(value: number) {
    this._keepprobe = value;
  }
  public resetKeepprobe() {
    this._keepprobe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepprobeInput() {
    return this._keepprobe;
  }

  // keeptimeo - computed: false, optional: true, required: false
  private _keeptimeo?: number; 
  public get keeptimeo() {
    return this.getNumberAttribute('keeptimeo');
  }
  public set keeptimeo(value: number) {
    this._keeptimeo = value;
  }
  public resetKeeptimeo() {
    this._keeptimeo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keeptimeoInput() {
    return this._keeptimeo;
  }

  // mburstlim - computed: false, optional: true, required: false
  private _mburstlim?: number; 
  public get mburstlim() {
    return this.getNumberAttribute('mburstlim');
  }
  public set mburstlim(value: number) {
    this._mburstlim = value;
  }
  public resetMburstlim() {
    this._mburstlim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mburstlimInput() {
    return this._mburstlim;
  }

  // pawsdrop - computed: false, optional: true, required: false
  private _pawsdrop?: number; 
  public get pawsdrop() {
    return this.getNumberAttribute('pawsdrop');
  }
  public set pawsdrop(value: number) {
    this._pawsdrop = value;
  }
  public resetPawsdrop() {
    this._pawsdrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pawsdropInput() {
    return this._pawsdrop;
  }

  // persistdrop - computed: false, optional: true, required: false
  private _persistdrop?: number; 
  public get persistdrop() {
    return this.getNumberAttribute('persistdrop');
  }
  public set persistdrop(value: number) {
    this._persistdrop = value;
  }
  public resetPersistdrop() {
    this._persistdrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistdropInput() {
    return this._persistdrop;
  }

  // persisttimeo - computed: false, optional: true, required: false
  private _persisttimeo?: number; 
  public get persisttimeo() {
    return this.getNumberAttribute('persisttimeo');
  }
  public set persisttimeo(value: number) {
    this._persisttimeo = value;
  }
  public resetPersisttimeo() {
    this._persisttimeo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persisttimeoInput() {
    return this._persisttimeo;
  }

  // predack - computed: false, optional: true, required: false
  private _predack?: number; 
  public get predack() {
    return this.getNumberAttribute('predack');
  }
  public set predack(value: number) {
    this._predack = value;
  }
  public resetPredack() {
    this._predack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predackInput() {
    return this._predack;
  }

  // preddat - computed: false, optional: true, required: false
  private _preddat?: number; 
  public get preddat() {
    return this.getNumberAttribute('preddat');
  }
  public set preddat(value: number) {
    this._preddat = value;
  }
  public resetPreddat() {
    this._preddat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preddatInput() {
    return this._preddat;
  }

  // proxyheaderv1 - computed: false, optional: true, required: false
  private _proxyheaderv1?: number; 
  public get proxyheaderv1() {
    return this.getNumberAttribute('proxyheaderv1');
  }
  public set proxyheaderv1(value: number) {
    this._proxyheaderv1 = value;
  }
  public resetProxyheaderv1() {
    this._proxyheaderv1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyheaderv1Input() {
    return this._proxyheaderv1;
  }

  // proxyheaderv2 - computed: false, optional: true, required: false
  private _proxyheaderv2?: number; 
  public get proxyheaderv2() {
    return this.getNumberAttribute('proxyheaderv2');
  }
  public set proxyheaderv2(value: number) {
    this._proxyheaderv2 = value;
  }
  public resetProxyheaderv2() {
    this._proxyheaderv2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyheaderv2Input() {
    return this._proxyheaderv2;
  }

  // rcvackbyte - computed: false, optional: true, required: false
  private _rcvackbyte?: number; 
  public get rcvackbyte() {
    return this.getNumberAttribute('rcvackbyte');
  }
  public set rcvackbyte(value: number) {
    this._rcvackbyte = value;
  }
  public resetRcvackbyte() {
    this._rcvackbyte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvackbyteInput() {
    return this._rcvackbyte;
  }

  // rcvackpack - computed: false, optional: true, required: false
  private _rcvackpack?: number; 
  public get rcvackpack() {
    return this.getNumberAttribute('rcvackpack');
  }
  public set rcvackpack(value: number) {
    this._rcvackpack = value;
  }
  public resetRcvackpack() {
    this._rcvackpack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvackpackInput() {
    return this._rcvackpack;
  }

  // rcvacktoomuch - computed: false, optional: true, required: false
  private _rcvacktoomuch?: number; 
  public get rcvacktoomuch() {
    return this.getNumberAttribute('rcvacktoomuch');
  }
  public set rcvacktoomuch(value: number) {
    this._rcvacktoomuch = value;
  }
  public resetRcvacktoomuch() {
    this._rcvacktoomuch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvacktoomuchInput() {
    return this._rcvacktoomuch;
  }

  // rcvbadoff - computed: false, optional: true, required: false
  private _rcvbadoff?: number; 
  public get rcvbadoff() {
    return this.getNumberAttribute('rcvbadoff');
  }
  public set rcvbadoff(value: number) {
    this._rcvbadoff = value;
  }
  public resetRcvbadoff() {
    this._rcvbadoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvbadoffInput() {
    return this._rcvbadoff;
  }

  // rcvbyte - computed: false, optional: true, required: false
  private _rcvbyte?: number; 
  public get rcvbyte() {
    return this.getNumberAttribute('rcvbyte');
  }
  public set rcvbyte(value: number) {
    this._rcvbyte = value;
  }
  public resetRcvbyte() {
    this._rcvbyte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvbyteInput() {
    return this._rcvbyte;
  }

  // rcvbyteafterwin - computed: false, optional: true, required: false
  private _rcvbyteafterwin?: number; 
  public get rcvbyteafterwin() {
    return this.getNumberAttribute('rcvbyteafterwin');
  }
  public set rcvbyteafterwin(value: number) {
    this._rcvbyteafterwin = value;
  }
  public resetRcvbyteafterwin() {
    this._rcvbyteafterwin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvbyteafterwinInput() {
    return this._rcvbyteafterwin;
  }

  // rcvdsack - computed: false, optional: true, required: false
  private _rcvdsack?: number; 
  public get rcvdsack() {
    return this.getNumberAttribute('rcvdsack');
  }
  public set rcvdsack(value: number) {
    this._rcvdsack = value;
  }
  public resetRcvdsack() {
    this._rcvdsack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvdsackInput() {
    return this._rcvdsack;
  }

  // rcvdupack - computed: false, optional: true, required: false
  private _rcvdupack?: number; 
  public get rcvdupack() {
    return this.getNumberAttribute('rcvdupack');
  }
  public set rcvdupack(value: number) {
    this._rcvdupack = value;
  }
  public resetRcvdupack() {
    this._rcvdupack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvdupackInput() {
    return this._rcvdupack;
  }

  // rcvdupbyte - computed: false, optional: true, required: false
  private _rcvdupbyte?: number; 
  public get rcvdupbyte() {
    return this.getNumberAttribute('rcvdupbyte');
  }
  public set rcvdupbyte(value: number) {
    this._rcvdupbyte = value;
  }
  public resetRcvdupbyte() {
    this._rcvdupbyte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvdupbyteInput() {
    return this._rcvdupbyte;
  }

  // rcvduppack - computed: false, optional: true, required: false
  private _rcvduppack?: number; 
  public get rcvduppack() {
    return this.getNumberAttribute('rcvduppack');
  }
  public set rcvduppack(value: number) {
    this._rcvduppack = value;
  }
  public resetRcvduppack() {
    this._rcvduppack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvduppackInput() {
    return this._rcvduppack;
  }

  // rcvmemdrop - computed: false, optional: true, required: false
  private _rcvmemdrop?: number; 
  public get rcvmemdrop() {
    return this.getNumberAttribute('rcvmemdrop');
  }
  public set rcvmemdrop(value: number) {
    this._rcvmemdrop = value;
  }
  public resetRcvmemdrop() {
    this._rcvmemdrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvmemdropInput() {
    return this._rcvmemdrop;
  }

  // rcvoobyte - computed: false, optional: true, required: false
  private _rcvoobyte?: number; 
  public get rcvoobyte() {
    return this.getNumberAttribute('rcvoobyte');
  }
  public set rcvoobyte(value: number) {
    this._rcvoobyte = value;
  }
  public resetRcvoobyte() {
    this._rcvoobyte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvoobyteInput() {
    return this._rcvoobyte;
  }

  // rcvoopack - computed: false, optional: true, required: false
  private _rcvoopack?: number; 
  public get rcvoopack() {
    return this.getNumberAttribute('rcvoopack');
  }
  public set rcvoopack(value: number) {
    this._rcvoopack = value;
  }
  public resetRcvoopack() {
    this._rcvoopack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvoopackInput() {
    return this._rcvoopack;
  }

  // rcvpack - computed: false, optional: true, required: false
  private _rcvpack?: number; 
  public get rcvpack() {
    return this.getNumberAttribute('rcvpack');
  }
  public set rcvpack(value: number) {
    this._rcvpack = value;
  }
  public resetRcvpack() {
    this._rcvpack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvpackInput() {
    return this._rcvpack;
  }

  // rcvpackafterwin - computed: false, optional: true, required: false
  private _rcvpackafterwin?: number; 
  public get rcvpackafterwin() {
    return this.getNumberAttribute('rcvpackafterwin');
  }
  public set rcvpackafterwin(value: number) {
    this._rcvpackafterwin = value;
  }
  public resetRcvpackafterwin() {
    this._rcvpackafterwin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvpackafterwinInput() {
    return this._rcvpackafterwin;
  }

  // rcvpartdupbyte - computed: false, optional: true, required: false
  private _rcvpartdupbyte?: number; 
  public get rcvpartdupbyte() {
    return this.getNumberAttribute('rcvpartdupbyte');
  }
  public set rcvpartdupbyte(value: number) {
    this._rcvpartdupbyte = value;
  }
  public resetRcvpartdupbyte() {
    this._rcvpartdupbyte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvpartdupbyteInput() {
    return this._rcvpartdupbyte;
  }

  // rcvpartduppack - computed: false, optional: true, required: false
  private _rcvpartduppack?: number; 
  public get rcvpartduppack() {
    return this.getNumberAttribute('rcvpartduppack');
  }
  public set rcvpartduppack(value: number) {
    this._rcvpartduppack = value;
  }
  public resetRcvpartduppack() {
    this._rcvpartduppack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvpartduppackInput() {
    return this._rcvpartduppack;
  }

  // rcvtotal - computed: false, optional: true, required: false
  private _rcvtotal?: number; 
  public get rcvtotal() {
    return this.getNumberAttribute('rcvtotal');
  }
  public set rcvtotal(value: number) {
    this._rcvtotal = value;
  }
  public resetRcvtotal() {
    this._rcvtotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvtotalInput() {
    return this._rcvtotal;
  }

  // rcvwinprobe - computed: false, optional: true, required: false
  private _rcvwinprobe?: number; 
  public get rcvwinprobe() {
    return this.getNumberAttribute('rcvwinprobe');
  }
  public set rcvwinprobe(value: number) {
    this._rcvwinprobe = value;
  }
  public resetRcvwinprobe() {
    this._rcvwinprobe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvwinprobeInput() {
    return this._rcvwinprobe;
  }

  // rcvwinupd - computed: false, optional: true, required: false
  private _rcvwinupd?: number; 
  public get rcvwinupd() {
    return this.getNumberAttribute('rcvwinupd');
  }
  public set rcvwinupd(value: number) {
    this._rcvwinupd = value;
  }
  public resetRcvwinupd() {
    this._rcvwinupd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvwinupdInput() {
    return this._rcvwinupd;
  }

  // reassmemdrop - computed: false, optional: true, required: false
  private _reassmemdrop?: number; 
  public get reassmemdrop() {
    return this.getNumberAttribute('reassmemdrop');
  }
  public set reassmemdrop(value: number) {
    this._reassmemdrop = value;
  }
  public resetReassmemdrop() {
    this._reassmemdrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reassmemdropInput() {
    return this._reassmemdrop;
  }

  // reasstimeout - computed: false, optional: true, required: false
  private _reasstimeout?: number; 
  public get reasstimeout() {
    return this.getNumberAttribute('reasstimeout');
  }
  public set reasstimeout(value: number) {
    this._reasstimeout = value;
  }
  public resetReasstimeout() {
    this._reasstimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasstimeoutInput() {
    return this._reasstimeout;
  }

  // rexmttimeo - computed: false, optional: true, required: false
  private _rexmttimeo?: number; 
  public get rexmttimeo() {
    return this.getNumberAttribute('rexmttimeo');
  }
  public set rexmttimeo(value: number) {
    this._rexmttimeo = value;
  }
  public resetRexmttimeo() {
    this._rexmttimeo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rexmttimeoInput() {
    return this._rexmttimeo;
  }

  // rttupdated - computed: false, optional: true, required: false
  private _rttupdated?: number; 
  public get rttupdated() {
    return this.getNumberAttribute('rttupdated');
  }
  public set rttupdated(value: number) {
    this._rttupdated = value;
  }
  public resetRttupdated() {
    this._rttupdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rttupdatedInput() {
    return this._rttupdated;
  }

  // sack_rcv_blocks - computed: false, optional: true, required: false
  private _sackRcvBlocks?: number; 
  public get sackRcvBlocks() {
    return this.getNumberAttribute('sack_rcv_blocks');
  }
  public set sackRcvBlocks(value: number) {
    this._sackRcvBlocks = value;
  }
  public resetSackRcvBlocks() {
    this._sackRcvBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sackRcvBlocksInput() {
    return this._sackRcvBlocks;
  }

  // sack_recovery_episode - computed: false, optional: true, required: false
  private _sackRecoveryEpisode?: number; 
  public get sackRecoveryEpisode() {
    return this.getNumberAttribute('sack_recovery_episode');
  }
  public set sackRecoveryEpisode(value: number) {
    this._sackRecoveryEpisode = value;
  }
  public resetSackRecoveryEpisode() {
    this._sackRecoveryEpisode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sackRecoveryEpisodeInput() {
    return this._sackRecoveryEpisode;
  }

  // sack_rexmit_bytes - computed: false, optional: true, required: false
  private _sackRexmitBytes?: number; 
  public get sackRexmitBytes() {
    return this.getNumberAttribute('sack_rexmit_bytes');
  }
  public set sackRexmitBytes(value: number) {
    this._sackRexmitBytes = value;
  }
  public resetSackRexmitBytes() {
    this._sackRexmitBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sackRexmitBytesInput() {
    return this._sackRexmitBytes;
  }

  // sack_rexmits - computed: false, optional: true, required: false
  private _sackRexmits?: number; 
  public get sackRexmits() {
    return this.getNumberAttribute('sack_rexmits');
  }
  public set sackRexmits(value: number) {
    this._sackRexmits = value;
  }
  public resetSackRexmits() {
    this._sackRexmits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sackRexmitsInput() {
    return this._sackRexmits;
  }

  // sack_send_blocks - computed: false, optional: true, required: false
  private _sackSendBlocks?: number; 
  public get sackSendBlocks() {
    return this.getNumberAttribute('sack_send_blocks');
  }
  public set sackSendBlocks(value: number) {
    this._sackSendBlocks = value;
  }
  public resetSackSendBlocks() {
    this._sackSendBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sackSendBlocksInput() {
    return this._sackSendBlocks;
  }

  // segstimed - computed: false, optional: true, required: false
  private _segstimed?: number; 
  public get segstimed() {
    return this.getNumberAttribute('segstimed');
  }
  public set segstimed(value: number) {
    this._segstimed = value;
  }
  public resetSegstimed() {
    this._segstimed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segstimedInput() {
    return this._segstimed;
  }

  // sndacks - computed: false, optional: true, required: false
  private _sndacks?: number; 
  public get sndacks() {
    return this.getNumberAttribute('sndacks');
  }
  public set sndacks(value: number) {
    this._sndacks = value;
  }
  public resetSndacks() {
    this._sndacks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sndacksInput() {
    return this._sndacks;
  }

  // sndbyte - computed: false, optional: true, required: false
  private _sndbyte?: number; 
  public get sndbyte() {
    return this.getNumberAttribute('sndbyte');
  }
  public set sndbyte(value: number) {
    this._sndbyte = value;
  }
  public resetSndbyte() {
    this._sndbyte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sndbyteInput() {
    return this._sndbyte;
  }

  // sndcack - computed: false, optional: true, required: false
  private _sndcack?: number; 
  public get sndcack() {
    return this.getNumberAttribute('sndcack');
  }
  public set sndcack(value: number) {
    this._sndcack = value;
  }
  public resetSndcack() {
    this._sndcack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sndcackInput() {
    return this._sndcack;
  }

  // sndctrl - computed: false, optional: true, required: false
  private _sndctrl?: number; 
  public get sndctrl() {
    return this.getNumberAttribute('sndctrl');
  }
  public set sndctrl(value: number) {
    this._sndctrl = value;
  }
  public resetSndctrl() {
    this._sndctrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sndctrlInput() {
    return this._sndctrl;
  }

  // sndfin - computed: false, optional: true, required: false
  private _sndfin?: number; 
  public get sndfin() {
    return this.getNumberAttribute('sndfin');
  }
  public set sndfin(value: number) {
    this._sndfin = value;
  }
  public resetSndfin() {
    this._sndfin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sndfinInput() {
    return this._sndfin;
  }

  // sndpack - computed: false, optional: true, required: false
  private _sndpack?: number; 
  public get sndpack() {
    return this.getNumberAttribute('sndpack');
  }
  public set sndpack(value: number) {
    this._sndpack = value;
  }
  public resetSndpack() {
    this._sndpack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sndpackInput() {
    return this._sndpack;
  }

  // sndprobe - computed: false, optional: true, required: false
  private _sndprobe?: number; 
  public get sndprobe() {
    return this.getNumberAttribute('sndprobe');
  }
  public set sndprobe(value: number) {
    this._sndprobe = value;
  }
  public resetSndprobe() {
    this._sndprobe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sndprobeInput() {
    return this._sndprobe;
  }

  // sndrexmitbad - computed: false, optional: true, required: false
  private _sndrexmitbad?: number; 
  public get sndrexmitbad() {
    return this.getNumberAttribute('sndrexmitbad');
  }
  public set sndrexmitbad(value: number) {
    this._sndrexmitbad = value;
  }
  public resetSndrexmitbad() {
    this._sndrexmitbad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sndrexmitbadInput() {
    return this._sndrexmitbad;
  }

  // sndrexmitbyte - computed: false, optional: true, required: false
  private _sndrexmitbyte?: number; 
  public get sndrexmitbyte() {
    return this.getNumberAttribute('sndrexmitbyte');
  }
  public set sndrexmitbyte(value: number) {
    this._sndrexmitbyte = value;
  }
  public resetSndrexmitbyte() {
    this._sndrexmitbyte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sndrexmitbyteInput() {
    return this._sndrexmitbyte;
  }

  // sndrexmitpack - computed: false, optional: true, required: false
  private _sndrexmitpack?: number; 
  public get sndrexmitpack() {
    return this.getNumberAttribute('sndrexmitpack');
  }
  public set sndrexmitpack(value: number) {
    this._sndrexmitpack = value;
  }
  public resetSndrexmitpack() {
    this._sndrexmitpack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sndrexmitpackInput() {
    return this._sndrexmitpack;
  }

  // sndrst - computed: false, optional: true, required: false
  private _sndrst?: number; 
  public get sndrst() {
    return this.getNumberAttribute('sndrst');
  }
  public set sndrst(value: number) {
    this._sndrst = value;
  }
  public resetSndrst() {
    this._sndrst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sndrstInput() {
    return this._sndrst;
  }

  // sndsyn - computed: false, optional: true, required: false
  private _sndsyn?: number; 
  public get sndsyn() {
    return this.getNumberAttribute('sndsyn');
  }
  public set sndsyn(value: number) {
    this._sndsyn = value;
  }
  public resetSndsyn() {
    this._sndsyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sndsynInput() {
    return this._sndsyn;
  }

  // sndtotal - computed: false, optional: true, required: false
  private _sndtotal?: number; 
  public get sndtotal() {
    return this.getNumberAttribute('sndtotal');
  }
  public set sndtotal(value: number) {
    this._sndtotal = value;
  }
  public resetSndtotal() {
    this._sndtotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sndtotalInput() {
    return this._sndtotal;
  }

  // sndurg - computed: false, optional: true, required: false
  private _sndurg?: number; 
  public get sndurg() {
    return this.getNumberAttribute('sndurg');
  }
  public set sndurg(value: number) {
    this._sndurg = value;
  }
  public resetSndurg() {
    this._sndurg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sndurgInput() {
    return this._sndurg;
  }

  // sndwinup - computed: false, optional: true, required: false
  private _sndwinup?: number; 
  public get sndwinup() {
    return this.getNumberAttribute('sndwinup');
  }
  public set sndwinup(value: number) {
    this._sndwinup = value;
  }
  public resetSndwinup() {
    this._sndwinup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sndwinupInput() {
    return this._sndwinup;
  }

  // timeoutdrop - computed: false, optional: true, required: false
  private _timeoutdrop?: number; 
  public get timeoutdrop() {
    return this.getNumberAttribute('timeoutdrop');
  }
  public set timeoutdrop(value: number) {
    this._timeoutdrop = value;
  }
  public resetTimeoutdrop() {
    this._timeoutdrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutdropInput() {
    return this._timeoutdrop;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats thunder_system_tcp_stats_stats}
*/
export class DataThunderSystemTcpStatsStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_tcp_stats_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemTcpStatsStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemTcpStatsStats to import
  * @param importFromId The id of the existing DataThunderSystemTcpStatsStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemTcpStatsStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_tcp_stats_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_stats_stats thunder_system_tcp_stats_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemTcpStatsStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemTcpStatsStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_tcp_stats_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
  private _stats = new DataThunderSystemTcpStatsStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSystemTcpStatsStatsStats) {
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
      stats: dataThunderSystemTcpStatsStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSystemTcpStatsStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemTcpStatsStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
