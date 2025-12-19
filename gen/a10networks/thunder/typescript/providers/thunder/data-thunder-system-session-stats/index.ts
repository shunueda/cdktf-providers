// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemSessionStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#id DataThunderSystemSessionStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#stats DataThunderSystemSessionStats#stats}
  */
  readonly stats?: DataThunderSystemSessionStatsStats;
}
export interface DataThunderSystemSessionStatsStats {
  /**
  * client ssl fatal alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#client_ssl_fatal_alert DataThunderSystemSessionStats#client_ssl_fatal_alert}
  */
  readonly clientSslFatalAlert?: number;
  /**
  * client ssl fin rst
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#client_ssl_fin_rst DataThunderSystemSessionStats#client_ssl_fin_rst}
  */
  readonly clientSslFinRst?: number;
  /**
  * Total SSL Client Reuse
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#client_ssl_reuse_total DataThunderSystemSessionStats#client_ssl_reuse_total}
  */
  readonly clientSslReuseTotal?: number;
  /**
  * Total SSL Client Session Ticket Reuse
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#client_ssl_session_ticket_reuse_total DataThunderSystemSessionStats#client_ssl_session_ticket_reuse_total}
  */
  readonly clientSslSessionTicketReuseTotal?: number;
  /**
  * client template internal error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#client_template_int_err DataThunderSystemSessionStats#client_template_int_err}
  */
  readonly clientTemplateIntErr?: number;
  /**
  * client template unknown error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#client_template_unknown_err DataThunderSystemSessionStats#client_template_unknown_err}
  */
  readonly clientTemplateUnknownErr?: number;
  /**
  * Conn APP SMP Alloc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#conn_app_smp_alloc_counter DataThunderSystemSessionStats#conn_app_smp_alloc_counter}
  */
  readonly connAppSmpAllocCounter?: number;
  /**
  * Conn Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#conn_counter DataThunderSystemSessionStats#conn_counter}
  */
  readonly connCounter?: number;
  /**
  * Conn Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#conn_freed_counter DataThunderSystemSessionStats#conn_freed_counter}
  */
  readonly connFreedCounter?: number;
  /**
  * Conn SMP Aged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#conn_smp_aged_counter DataThunderSystemSessionStats#conn_smp_aged_counter}
  */
  readonly connSmpAgedCounter?: number;
  /**
  * Conn SMP Alloc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#conn_smp_alloc_counter DataThunderSystemSessionStats#conn_smp_alloc_counter}
  */
  readonly connSmpAllocCounter?: number;
  /**
  * Conn SMP Free
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#conn_smp_free_counter DataThunderSystemSessionStats#conn_smp_free_counter}
  */
  readonly connSmpFreeCounter?: number;
  /**
  * Conn SMP Type 0 Available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#conn_smp_type_0_available DataThunderSystemSessionStats#conn_smp_type_0_available}
  */
  readonly connSmpType0Available?: number;
  /**
  * Conn SMP Type 1 Available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#conn_smp_type_1_available DataThunderSystemSessionStats#conn_smp_type_1_available}
  */
  readonly connSmpType1Available?: number;
  /**
  * Conn SMP Type 2 Available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#conn_smp_type_2_available DataThunderSystemSessionStats#conn_smp_type_2_available}
  */
  readonly connSmpType2Available?: number;
  /**
  * Conn SMP Type 3 Available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#conn_smp_type_3_available DataThunderSystemSessionStats#conn_smp_type_3_available}
  */
  readonly connSmpType3Available?: number;
  /**
  * Conn SMP Type 4 Available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#conn_smp_type_4_available DataThunderSystemSessionStats#conn_smp_type_4_available}
  */
  readonly connSmpType4Available?: number;
  /**
  * Conn Type 0 Available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#conn_type_0_available DataThunderSystemSessionStats#conn_type_0_available}
  */
  readonly connType0Available?: number;
  /**
  * Conn Type 1 Available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#conn_type_1_available DataThunderSystemSessionStats#conn_type_1_available}
  */
  readonly connType1Available?: number;
  /**
  * Conn Type 2 Available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#conn_type_2_available DataThunderSystemSessionStats#conn_type_2_available}
  */
  readonly connType2Available?: number;
  /**
  * Conn Type 3 Available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#conn_type_3_available DataThunderSystemSessionStats#conn_type_3_available}
  */
  readonly connType3Available?: number;
  /**
  * Conn Type 4 Available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#conn_type_4_available DataThunderSystemSessionStats#conn_type_4_available}
  */
  readonly connType4Available?: number;
  /**
  * Curr Free Conn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#curr_free_conn DataThunderSystemSessionStats#curr_free_conn}
  */
  readonly currFreeConn?: number;
  /**
  * Diameter Concurrent User-Sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#diameter_concurrent_user_sessions_counter DataThunderSystemSessionStats#diameter_concurrent_user_sessions_counter}
  */
  readonly diameterConcurrentUserSessionsCounter?: number;
  /**
  * Diameter Conn Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#diameter_conn_counter DataThunderSystemSessionStats#diameter_conn_counter}
  */
  readonly diameterConnCounter?: number;
  /**
  * Diameter Conn Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#diameter_conn_freed_counter DataThunderSystemSessionStats#diameter_conn_freed_counter}
  */
  readonly diameterConnFreedCounter?: number;
  /**
  * FP Session FIN/RST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#fp_session_fin_rst DataThunderSystemSessionStats#fp_session_fin_rst}
  */
  readonly fpSessionFinRst?: number;
  /**
  * Blacklist Sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#fw_blacklist_sess DataThunderSystemSessionStats#fw_blacklist_sess}
  */
  readonly fwBlacklistSess?: number;
  /**
  * Blacklist Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#fw_blacklist_sess_created DataThunderSystemSessionStats#fw_blacklist_sess_created}
  */
  readonly fwBlacklistSessCreated?: number;
  /**
  * Blacklist Session Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#fw_blacklist_sess_freed DataThunderSystemSessionStats#fw_blacklist_sess_freed}
  */
  readonly fwBlacklistSessFreed?: number;
  /**
  * GTP-C Echo Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#gtp_c_echo_counter DataThunderSystemSessionStats#gtp_c_echo_counter}
  */
  readonly gtpCEchoCounter?: number;
  /**
  * GTP-C Established
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#gtp_c_est_counter DataThunderSystemSessionStats#gtp_c_est_counter}
  */
  readonly gtpCEstCounter?: number;
  /**
  * GTP-C Half Open
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#gtp_c_half_open_counter DataThunderSystemSessionStats#gtp_c_half_open_counter}
  */
  readonly gtpCHalfOpenCounter?: number;
  /**
  * GTP cumulative Conn Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#gtp_cum_conn_counter DataThunderSystemSessionStats#gtp_cum_conn_counter}
  */
  readonly gtpCumConnCounter?: number;
  /**
  * GTP cumulative Conn Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#gtp_cum_conn_freed_counter DataThunderSystemSessionStats#gtp_cum_conn_freed_counter}
  */
  readonly gtpCumConnFreedCounter?: number;
  /**
  * GTP Current Available Conn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#gtp_curr_free_conn DataThunderSystemSessionStats#gtp_curr_free_conn}
  */
  readonly gtpCurrFreeConn?: number;
  /**
  * GTP-U Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#gtp_u_counter DataThunderSystemSessionStats#gtp_u_counter}
  */
  readonly gtpUCounter?: number;
  /**
  * GTP-U Echo Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#gtp_u_echo_counter DataThunderSystemSessionStats#gtp_u_echo_counter}
  */
  readonly gtpUEchoCounter?: number;
  /**
  * IP Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#ip_counter DataThunderSystemSessionStats#ip_counter}
  */
  readonly ipCounter?: number;
  /**
  * Non TCP/UDP IP sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#other_counter DataThunderSystemSessionStats#other_counter}
  */
  readonly otherCounter?: number;
  /**
  * Reverse NAT TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#reverse_nat_tcp_counter DataThunderSystemSessionStats#reverse_nat_tcp_counter}
  */
  readonly reverseNatTcpCounter?: number;
  /**
  * Reverse NAT UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#reverse_nat_udp_counter DataThunderSystemSessionStats#reverse_nat_udp_counter}
  */
  readonly reverseNatUdpCounter?: number;
  /**
  * SCTP Established
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#sctp_est_counter DataThunderSystemSessionStats#sctp_est_counter}
  */
  readonly sctpEstCounter?: number;
  /**
  * SCTP Half Open
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#sctp_half_open_counter DataThunderSystemSessionStats#sctp_half_open_counter}
  */
  readonly sctpHalfOpenCounter?: number;
  /**
  * Current SSL Server Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#server_ssl_count_curr DataThunderSystemSessionStats#server_ssl_count_curr}
  */
  readonly serverSslCountCurr?: number;
  /**
  * Total SSL Server Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#server_ssl_count_total DataThunderSystemSessionStats#server_ssl_count_total}
  */
  readonly serverSslCountTotal?: number;
  /**
  * server ssl fatal alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#server_ssl_fatal_alert DataThunderSystemSessionStats#server_ssl_fatal_alert}
  */
  readonly serverSslFatalAlert?: number;
  /**
  * server ssl fin rst
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#server_ssl_fin_rst DataThunderSystemSessionStats#server_ssl_fin_rst}
  */
  readonly serverSslFinRst?: number;
  /**
  * Total SSL Server Reuse
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#server_ssl_reuse_total DataThunderSystemSessionStats#server_ssl_reuse_total}
  */
  readonly serverSslReuseTotal?: number;
  /**
  * Total SSL Server Session Ticket Reuse
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#server_ssl_session_ticket_reuse_total DataThunderSystemSessionStats#server_ssl_session_ticket_reuse_total}
  */
  readonly serverSslSessionTicketReuseTotal?: number;
  /**
  * Server TCP Established
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#server_tcp_est_counter DataThunderSystemSessionStats#server_tcp_est_counter}
  */
  readonly serverTcpEstCounter?: number;
  /**
  * Server TCP Half Open
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#server_tcp_half_open_counter DataThunderSystemSessionStats#server_tcp_half_open_counter}
  */
  readonly serverTcpHalfOpenCounter?: number;
  /**
  * server template int error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#server_template_int_err DataThunderSystemSessionStats#server_template_int_err}
  */
  readonly serverTemplateIntErr?: number;
  /**
  * server template unknown error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#server_template_unknown_err DataThunderSystemSessionStats#server_template_unknown_err}
  */
  readonly serverTemplateUnknownErr?: number;
  /**
  * Curr SSL Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#ssl_count_curr DataThunderSystemSessionStats#ssl_count_curr}
  */
  readonly sslCountCurr?: number;
  /**
  * Total SSL Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#ssl_count_total DataThunderSystemSessionStats#ssl_count_total}
  */
  readonly sslCountTotal?: number;
  /**
  * TCP Established
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#tcp_est_counter DataThunderSystemSessionStats#tcp_est_counter}
  */
  readonly tcpEstCounter?: number;
  /**
  * TCP Half Closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#tcp_half_close_counter DataThunderSystemSessionStats#tcp_half_close_counter}
  */
  readonly tcpHalfCloseCounter?: number;
  /**
  * TCP Half Open
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#tcp_half_open_counter DataThunderSystemSessionStats#tcp_half_open_counter}
  */
  readonly tcpHalfOpenCounter?: number;
  /**
  * TCP SYN Half Open
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#tcp_syn_half_open_counter DataThunderSystemSessionStats#tcp_syn_half_open_counter}
  */
  readonly tcpSynHalfOpenCounter?: number;
  /**
  * Total clientside early data connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#total_clientside_early_data_connections DataThunderSystemSessionStats#total_clientside_early_data_connections}
  */
  readonly totalClientsideEarlyDataConnections?: number;
  /**
  * Total clientside failed early data connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#total_clientside_failed_early_data_connections DataThunderSystemSessionStats#total_clientside_failed_early_data_connections}
  */
  readonly totalClientsideFailedEarlyDataConnections?: number;
  /**
  * Total Curr Conn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#total_curr_conn DataThunderSystemSessionStats#total_curr_conn}
  */
  readonly totalCurrConn?: number;
  /**
  * Total Firewall Conn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#total_fw_conn DataThunderSystemSessionStats#total_fw_conn}
  */
  readonly totalFwConn?: number;
  /**
  * Total IP Nat Conn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#total_ip_nat_conn DataThunderSystemSessionStats#total_ip_nat_conn}
  */
  readonly totalIpNatConn?: number;
  /**
  * Totl L2/L3 Connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#total_l2l3_conn DataThunderSystemSessionStats#total_l2l3_conn}
  */
  readonly totalL2L3Conn?: number;
  /**
  * Total L4 Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#total_l4_conn DataThunderSystemSessionStats#total_l4_conn}
  */
  readonly totalL4Conn?: number;
  /**
  * Total L4 Conn Proxy Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#total_l4_conn_proxy DataThunderSystemSessionStats#total_l4_conn_proxy}
  */
  readonly totalL4ConnProxy?: number;
  /**
  * Total L4 Packet Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#total_l4_packet_count DataThunderSystemSessionStats#total_l4_packet_count}
  */
  readonly totalL4PacketCount?: number;
  /**
  * Total L7 Conn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#total_l7_conn DataThunderSystemSessionStats#total_l7_conn}
  */
  readonly totalL7Conn?: number;
  /**
  * Total L7 Packet Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#total_l7_packet_count DataThunderSystemSessionStats#total_l7_packet_count}
  */
  readonly totalL7PacketCount?: number;
  /**
  * Total Local Conn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#total_local_conn DataThunderSystemSessionStats#total_local_conn}
  */
  readonly totalLocalConn?: number;
  /**
  * Total Logging Conn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#total_logging_conn DataThunderSystemSessionStats#total_logging_conn}
  */
  readonly totalLoggingConn?: number;
  /**
  * Total serverside early data connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#total_serverside_early_data_connections DataThunderSystemSessionStats#total_serverside_early_data_connections}
  */
  readonly totalServersideEarlyDataConnections?: number;
  /**
  * Total serverside failed early data connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#total_serverside_failed_early_data_connections DataThunderSystemSessionStats#total_serverside_failed_early_data_connections}
  */
  readonly totalServersideFailedEarlyDataConnections?: number;
  /**
  * Total TCP Conn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#total_tcp_conn DataThunderSystemSessionStats#total_tcp_conn}
  */
  readonly totalTcpConn?: number;
  /**
  * UDP Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#udp_counter DataThunderSystemSessionStats#udp_counter}
  */
  readonly udpCounter?: number;
}

export function dataThunderSystemSessionStatsStatsToTerraform(struct?: DataThunderSystemSessionStatsStatsOutputReference | DataThunderSystemSessionStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_ssl_fatal_alert: cdktf.numberToTerraform(struct!.clientSslFatalAlert),
    client_ssl_fin_rst: cdktf.numberToTerraform(struct!.clientSslFinRst),
    client_ssl_reuse_total: cdktf.numberToTerraform(struct!.clientSslReuseTotal),
    client_ssl_session_ticket_reuse_total: cdktf.numberToTerraform(struct!.clientSslSessionTicketReuseTotal),
    client_template_int_err: cdktf.numberToTerraform(struct!.clientTemplateIntErr),
    client_template_unknown_err: cdktf.numberToTerraform(struct!.clientTemplateUnknownErr),
    conn_app_smp_alloc_counter: cdktf.numberToTerraform(struct!.connAppSmpAllocCounter),
    conn_counter: cdktf.numberToTerraform(struct!.connCounter),
    conn_freed_counter: cdktf.numberToTerraform(struct!.connFreedCounter),
    conn_smp_aged_counter: cdktf.numberToTerraform(struct!.connSmpAgedCounter),
    conn_smp_alloc_counter: cdktf.numberToTerraform(struct!.connSmpAllocCounter),
    conn_smp_free_counter: cdktf.numberToTerraform(struct!.connSmpFreeCounter),
    conn_smp_type_0_available: cdktf.numberToTerraform(struct!.connSmpType0Available),
    conn_smp_type_1_available: cdktf.numberToTerraform(struct!.connSmpType1Available),
    conn_smp_type_2_available: cdktf.numberToTerraform(struct!.connSmpType2Available),
    conn_smp_type_3_available: cdktf.numberToTerraform(struct!.connSmpType3Available),
    conn_smp_type_4_available: cdktf.numberToTerraform(struct!.connSmpType4Available),
    conn_type_0_available: cdktf.numberToTerraform(struct!.connType0Available),
    conn_type_1_available: cdktf.numberToTerraform(struct!.connType1Available),
    conn_type_2_available: cdktf.numberToTerraform(struct!.connType2Available),
    conn_type_3_available: cdktf.numberToTerraform(struct!.connType3Available),
    conn_type_4_available: cdktf.numberToTerraform(struct!.connType4Available),
    curr_free_conn: cdktf.numberToTerraform(struct!.currFreeConn),
    diameter_concurrent_user_sessions_counter: cdktf.numberToTerraform(struct!.diameterConcurrentUserSessionsCounter),
    diameter_conn_counter: cdktf.numberToTerraform(struct!.diameterConnCounter),
    diameter_conn_freed_counter: cdktf.numberToTerraform(struct!.diameterConnFreedCounter),
    fp_session_fin_rst: cdktf.numberToTerraform(struct!.fpSessionFinRst),
    fw_blacklist_sess: cdktf.numberToTerraform(struct!.fwBlacklistSess),
    fw_blacklist_sess_created: cdktf.numberToTerraform(struct!.fwBlacklistSessCreated),
    fw_blacklist_sess_freed: cdktf.numberToTerraform(struct!.fwBlacklistSessFreed),
    gtp_c_echo_counter: cdktf.numberToTerraform(struct!.gtpCEchoCounter),
    gtp_c_est_counter: cdktf.numberToTerraform(struct!.gtpCEstCounter),
    gtp_c_half_open_counter: cdktf.numberToTerraform(struct!.gtpCHalfOpenCounter),
    gtp_cum_conn_counter: cdktf.numberToTerraform(struct!.gtpCumConnCounter),
    gtp_cum_conn_freed_counter: cdktf.numberToTerraform(struct!.gtpCumConnFreedCounter),
    gtp_curr_free_conn: cdktf.numberToTerraform(struct!.gtpCurrFreeConn),
    gtp_u_counter: cdktf.numberToTerraform(struct!.gtpUCounter),
    gtp_u_echo_counter: cdktf.numberToTerraform(struct!.gtpUEchoCounter),
    ip_counter: cdktf.numberToTerraform(struct!.ipCounter),
    other_counter: cdktf.numberToTerraform(struct!.otherCounter),
    reverse_nat_tcp_counter: cdktf.numberToTerraform(struct!.reverseNatTcpCounter),
    reverse_nat_udp_counter: cdktf.numberToTerraform(struct!.reverseNatUdpCounter),
    sctp_est_counter: cdktf.numberToTerraform(struct!.sctpEstCounter),
    sctp_half_open_counter: cdktf.numberToTerraform(struct!.sctpHalfOpenCounter),
    server_ssl_count_curr: cdktf.numberToTerraform(struct!.serverSslCountCurr),
    server_ssl_count_total: cdktf.numberToTerraform(struct!.serverSslCountTotal),
    server_ssl_fatal_alert: cdktf.numberToTerraform(struct!.serverSslFatalAlert),
    server_ssl_fin_rst: cdktf.numberToTerraform(struct!.serverSslFinRst),
    server_ssl_reuse_total: cdktf.numberToTerraform(struct!.serverSslReuseTotal),
    server_ssl_session_ticket_reuse_total: cdktf.numberToTerraform(struct!.serverSslSessionTicketReuseTotal),
    server_tcp_est_counter: cdktf.numberToTerraform(struct!.serverTcpEstCounter),
    server_tcp_half_open_counter: cdktf.numberToTerraform(struct!.serverTcpHalfOpenCounter),
    server_template_int_err: cdktf.numberToTerraform(struct!.serverTemplateIntErr),
    server_template_unknown_err: cdktf.numberToTerraform(struct!.serverTemplateUnknownErr),
    ssl_count_curr: cdktf.numberToTerraform(struct!.sslCountCurr),
    ssl_count_total: cdktf.numberToTerraform(struct!.sslCountTotal),
    tcp_est_counter: cdktf.numberToTerraform(struct!.tcpEstCounter),
    tcp_half_close_counter: cdktf.numberToTerraform(struct!.tcpHalfCloseCounter),
    tcp_half_open_counter: cdktf.numberToTerraform(struct!.tcpHalfOpenCounter),
    tcp_syn_half_open_counter: cdktf.numberToTerraform(struct!.tcpSynHalfOpenCounter),
    total_clientside_early_data_connections: cdktf.numberToTerraform(struct!.totalClientsideEarlyDataConnections),
    total_clientside_failed_early_data_connections: cdktf.numberToTerraform(struct!.totalClientsideFailedEarlyDataConnections),
    total_curr_conn: cdktf.numberToTerraform(struct!.totalCurrConn),
    total_fw_conn: cdktf.numberToTerraform(struct!.totalFwConn),
    total_ip_nat_conn: cdktf.numberToTerraform(struct!.totalIpNatConn),
    total_l2l3_conn: cdktf.numberToTerraform(struct!.totalL2L3Conn),
    total_l4_conn: cdktf.numberToTerraform(struct!.totalL4Conn),
    total_l4_conn_proxy: cdktf.numberToTerraform(struct!.totalL4ConnProxy),
    total_l4_packet_count: cdktf.numberToTerraform(struct!.totalL4PacketCount),
    total_l7_conn: cdktf.numberToTerraform(struct!.totalL7Conn),
    total_l7_packet_count: cdktf.numberToTerraform(struct!.totalL7PacketCount),
    total_local_conn: cdktf.numberToTerraform(struct!.totalLocalConn),
    total_logging_conn: cdktf.numberToTerraform(struct!.totalLoggingConn),
    total_serverside_early_data_connections: cdktf.numberToTerraform(struct!.totalServersideEarlyDataConnections),
    total_serverside_failed_early_data_connections: cdktf.numberToTerraform(struct!.totalServersideFailedEarlyDataConnections),
    total_tcp_conn: cdktf.numberToTerraform(struct!.totalTcpConn),
    udp_counter: cdktf.numberToTerraform(struct!.udpCounter),
  }
}


export function dataThunderSystemSessionStatsStatsToHclTerraform(struct?: DataThunderSystemSessionStatsStatsOutputReference | DataThunderSystemSessionStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_ssl_fatal_alert: {
      value: cdktf.numberToHclTerraform(struct!.clientSslFatalAlert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_ssl_fin_rst: {
      value: cdktf.numberToHclTerraform(struct!.clientSslFinRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_ssl_reuse_total: {
      value: cdktf.numberToHclTerraform(struct!.clientSslReuseTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_ssl_session_ticket_reuse_total: {
      value: cdktf.numberToHclTerraform(struct!.clientSslSessionTicketReuseTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_template_int_err: {
      value: cdktf.numberToHclTerraform(struct!.clientTemplateIntErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_template_unknown_err: {
      value: cdktf.numberToHclTerraform(struct!.clientTemplateUnknownErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_app_smp_alloc_counter: {
      value: cdktf.numberToHclTerraform(struct!.connAppSmpAllocCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_counter: {
      value: cdktf.numberToHclTerraform(struct!.connCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_freed_counter: {
      value: cdktf.numberToHclTerraform(struct!.connFreedCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_smp_aged_counter: {
      value: cdktf.numberToHclTerraform(struct!.connSmpAgedCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_smp_alloc_counter: {
      value: cdktf.numberToHclTerraform(struct!.connSmpAllocCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_smp_free_counter: {
      value: cdktf.numberToHclTerraform(struct!.connSmpFreeCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_smp_type_0_available: {
      value: cdktf.numberToHclTerraform(struct!.connSmpType0Available),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_smp_type_1_available: {
      value: cdktf.numberToHclTerraform(struct!.connSmpType1Available),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_smp_type_2_available: {
      value: cdktf.numberToHclTerraform(struct!.connSmpType2Available),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_smp_type_3_available: {
      value: cdktf.numberToHclTerraform(struct!.connSmpType3Available),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_smp_type_4_available: {
      value: cdktf.numberToHclTerraform(struct!.connSmpType4Available),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_type_0_available: {
      value: cdktf.numberToHclTerraform(struct!.connType0Available),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_type_1_available: {
      value: cdktf.numberToHclTerraform(struct!.connType1Available),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_type_2_available: {
      value: cdktf.numberToHclTerraform(struct!.connType2Available),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_type_3_available: {
      value: cdktf.numberToHclTerraform(struct!.connType3Available),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_type_4_available: {
      value: cdktf.numberToHclTerraform(struct!.connType4Available),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_free_conn: {
      value: cdktf.numberToHclTerraform(struct!.currFreeConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    diameter_concurrent_user_sessions_counter: {
      value: cdktf.numberToHclTerraform(struct!.diameterConcurrentUserSessionsCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    diameter_conn_counter: {
      value: cdktf.numberToHclTerraform(struct!.diameterConnCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    diameter_conn_freed_counter: {
      value: cdktf.numberToHclTerraform(struct!.diameterConnFreedCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fp_session_fin_rst: {
      value: cdktf.numberToHclTerraform(struct!.fpSessionFinRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fw_blacklist_sess: {
      value: cdktf.numberToHclTerraform(struct!.fwBlacklistSess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fw_blacklist_sess_created: {
      value: cdktf.numberToHclTerraform(struct!.fwBlacklistSessCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fw_blacklist_sess_freed: {
      value: cdktf.numberToHclTerraform(struct!.fwBlacklistSessFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_c_echo_counter: {
      value: cdktf.numberToHclTerraform(struct!.gtpCEchoCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_c_est_counter: {
      value: cdktf.numberToHclTerraform(struct!.gtpCEstCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_c_half_open_counter: {
      value: cdktf.numberToHclTerraform(struct!.gtpCHalfOpenCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_cum_conn_counter: {
      value: cdktf.numberToHclTerraform(struct!.gtpCumConnCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_cum_conn_freed_counter: {
      value: cdktf.numberToHclTerraform(struct!.gtpCumConnFreedCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_curr_free_conn: {
      value: cdktf.numberToHclTerraform(struct!.gtpCurrFreeConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_u_counter: {
      value: cdktf.numberToHclTerraform(struct!.gtpUCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_u_echo_counter: {
      value: cdktf.numberToHclTerraform(struct!.gtpUEchoCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_counter: {
      value: cdktf.numberToHclTerraform(struct!.ipCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_counter: {
      value: cdktf.numberToHclTerraform(struct!.otherCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reverse_nat_tcp_counter: {
      value: cdktf.numberToHclTerraform(struct!.reverseNatTcpCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reverse_nat_udp_counter: {
      value: cdktf.numberToHclTerraform(struct!.reverseNatUdpCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_est_counter: {
      value: cdktf.numberToHclTerraform(struct!.sctpEstCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_half_open_counter: {
      value: cdktf.numberToHclTerraform(struct!.sctpHalfOpenCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_ssl_count_curr: {
      value: cdktf.numberToHclTerraform(struct!.serverSslCountCurr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_ssl_count_total: {
      value: cdktf.numberToHclTerraform(struct!.serverSslCountTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_ssl_fatal_alert: {
      value: cdktf.numberToHclTerraform(struct!.serverSslFatalAlert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_ssl_fin_rst: {
      value: cdktf.numberToHclTerraform(struct!.serverSslFinRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_ssl_reuse_total: {
      value: cdktf.numberToHclTerraform(struct!.serverSslReuseTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_ssl_session_ticket_reuse_total: {
      value: cdktf.numberToHclTerraform(struct!.serverSslSessionTicketReuseTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_tcp_est_counter: {
      value: cdktf.numberToHclTerraform(struct!.serverTcpEstCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_tcp_half_open_counter: {
      value: cdktf.numberToHclTerraform(struct!.serverTcpHalfOpenCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_template_int_err: {
      value: cdktf.numberToHclTerraform(struct!.serverTemplateIntErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_template_unknown_err: {
      value: cdktf.numberToHclTerraform(struct!.serverTemplateUnknownErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_count_curr: {
      value: cdktf.numberToHclTerraform(struct!.sslCountCurr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_count_total: {
      value: cdktf.numberToHclTerraform(struct!.sslCountTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_est_counter: {
      value: cdktf.numberToHclTerraform(struct!.tcpEstCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_half_close_counter: {
      value: cdktf.numberToHclTerraform(struct!.tcpHalfCloseCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_half_open_counter: {
      value: cdktf.numberToHclTerraform(struct!.tcpHalfOpenCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_syn_half_open_counter: {
      value: cdktf.numberToHclTerraform(struct!.tcpSynHalfOpenCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_clientside_early_data_connections: {
      value: cdktf.numberToHclTerraform(struct!.totalClientsideEarlyDataConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_clientside_failed_early_data_connections: {
      value: cdktf.numberToHclTerraform(struct!.totalClientsideFailedEarlyDataConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_curr_conn: {
      value: cdktf.numberToHclTerraform(struct!.totalCurrConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_fw_conn: {
      value: cdktf.numberToHclTerraform(struct!.totalFwConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_ip_nat_conn: {
      value: cdktf.numberToHclTerraform(struct!.totalIpNatConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_l2l3_conn: {
      value: cdktf.numberToHclTerraform(struct!.totalL2L3Conn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_l4_conn: {
      value: cdktf.numberToHclTerraform(struct!.totalL4Conn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_l4_conn_proxy: {
      value: cdktf.numberToHclTerraform(struct!.totalL4ConnProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_l4_packet_count: {
      value: cdktf.numberToHclTerraform(struct!.totalL4PacketCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_l7_conn: {
      value: cdktf.numberToHclTerraform(struct!.totalL7Conn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_l7_packet_count: {
      value: cdktf.numberToHclTerraform(struct!.totalL7PacketCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_local_conn: {
      value: cdktf.numberToHclTerraform(struct!.totalLocalConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_logging_conn: {
      value: cdktf.numberToHclTerraform(struct!.totalLoggingConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_serverside_early_data_connections: {
      value: cdktf.numberToHclTerraform(struct!.totalServersideEarlyDataConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_serverside_failed_early_data_connections: {
      value: cdktf.numberToHclTerraform(struct!.totalServersideFailedEarlyDataConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_tcp_conn: {
      value: cdktf.numberToHclTerraform(struct!.totalTcpConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_counter: {
      value: cdktf.numberToHclTerraform(struct!.udpCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemSessionStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemSessionStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientSslFatalAlert !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSslFatalAlert = this._clientSslFatalAlert;
    }
    if (this._clientSslFinRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSslFinRst = this._clientSslFinRst;
    }
    if (this._clientSslReuseTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSslReuseTotal = this._clientSslReuseTotal;
    }
    if (this._clientSslSessionTicketReuseTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSslSessionTicketReuseTotal = this._clientSslSessionTicketReuseTotal;
    }
    if (this._clientTemplateIntErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientTemplateIntErr = this._clientTemplateIntErr;
    }
    if (this._clientTemplateUnknownErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientTemplateUnknownErr = this._clientTemplateUnknownErr;
    }
    if (this._connAppSmpAllocCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.connAppSmpAllocCounter = this._connAppSmpAllocCounter;
    }
    if (this._connCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.connCounter = this._connCounter;
    }
    if (this._connFreedCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.connFreedCounter = this._connFreedCounter;
    }
    if (this._connSmpAgedCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.connSmpAgedCounter = this._connSmpAgedCounter;
    }
    if (this._connSmpAllocCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.connSmpAllocCounter = this._connSmpAllocCounter;
    }
    if (this._connSmpFreeCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.connSmpFreeCounter = this._connSmpFreeCounter;
    }
    if (this._connSmpType0Available !== undefined) {
      hasAnyValues = true;
      internalValueResult.connSmpType0Available = this._connSmpType0Available;
    }
    if (this._connSmpType1Available !== undefined) {
      hasAnyValues = true;
      internalValueResult.connSmpType1Available = this._connSmpType1Available;
    }
    if (this._connSmpType2Available !== undefined) {
      hasAnyValues = true;
      internalValueResult.connSmpType2Available = this._connSmpType2Available;
    }
    if (this._connSmpType3Available !== undefined) {
      hasAnyValues = true;
      internalValueResult.connSmpType3Available = this._connSmpType3Available;
    }
    if (this._connSmpType4Available !== undefined) {
      hasAnyValues = true;
      internalValueResult.connSmpType4Available = this._connSmpType4Available;
    }
    if (this._connType0Available !== undefined) {
      hasAnyValues = true;
      internalValueResult.connType0Available = this._connType0Available;
    }
    if (this._connType1Available !== undefined) {
      hasAnyValues = true;
      internalValueResult.connType1Available = this._connType1Available;
    }
    if (this._connType2Available !== undefined) {
      hasAnyValues = true;
      internalValueResult.connType2Available = this._connType2Available;
    }
    if (this._connType3Available !== undefined) {
      hasAnyValues = true;
      internalValueResult.connType3Available = this._connType3Available;
    }
    if (this._connType4Available !== undefined) {
      hasAnyValues = true;
      internalValueResult.connType4Available = this._connType4Available;
    }
    if (this._currFreeConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.currFreeConn = this._currFreeConn;
    }
    if (this._diameterConcurrentUserSessionsCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.diameterConcurrentUserSessionsCounter = this._diameterConcurrentUserSessionsCounter;
    }
    if (this._diameterConnCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.diameterConnCounter = this._diameterConnCounter;
    }
    if (this._diameterConnFreedCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.diameterConnFreedCounter = this._diameterConnFreedCounter;
    }
    if (this._fpSessionFinRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.fpSessionFinRst = this._fpSessionFinRst;
    }
    if (this._fwBlacklistSess !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwBlacklistSess = this._fwBlacklistSess;
    }
    if (this._fwBlacklistSessCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwBlacklistSessCreated = this._fwBlacklistSessCreated;
    }
    if (this._fwBlacklistSessFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwBlacklistSessFreed = this._fwBlacklistSessFreed;
    }
    if (this._gtpCEchoCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpCEchoCounter = this._gtpCEchoCounter;
    }
    if (this._gtpCEstCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpCEstCounter = this._gtpCEstCounter;
    }
    if (this._gtpCHalfOpenCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpCHalfOpenCounter = this._gtpCHalfOpenCounter;
    }
    if (this._gtpCumConnCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpCumConnCounter = this._gtpCumConnCounter;
    }
    if (this._gtpCumConnFreedCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpCumConnFreedCounter = this._gtpCumConnFreedCounter;
    }
    if (this._gtpCurrFreeConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpCurrFreeConn = this._gtpCurrFreeConn;
    }
    if (this._gtpUCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpUCounter = this._gtpUCounter;
    }
    if (this._gtpUEchoCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpUEchoCounter = this._gtpUEchoCounter;
    }
    if (this._ipCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipCounter = this._ipCounter;
    }
    if (this._otherCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherCounter = this._otherCounter;
    }
    if (this._reverseNatTcpCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.reverseNatTcpCounter = this._reverseNatTcpCounter;
    }
    if (this._reverseNatUdpCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.reverseNatUdpCounter = this._reverseNatUdpCounter;
    }
    if (this._sctpEstCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpEstCounter = this._sctpEstCounter;
    }
    if (this._sctpHalfOpenCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpHalfOpenCounter = this._sctpHalfOpenCounter;
    }
    if (this._serverSslCountCurr !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSslCountCurr = this._serverSslCountCurr;
    }
    if (this._serverSslCountTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSslCountTotal = this._serverSslCountTotal;
    }
    if (this._serverSslFatalAlert !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSslFatalAlert = this._serverSslFatalAlert;
    }
    if (this._serverSslFinRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSslFinRst = this._serverSslFinRst;
    }
    if (this._serverSslReuseTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSslReuseTotal = this._serverSslReuseTotal;
    }
    if (this._serverSslSessionTicketReuseTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSslSessionTicketReuseTotal = this._serverSslSessionTicketReuseTotal;
    }
    if (this._serverTcpEstCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverTcpEstCounter = this._serverTcpEstCounter;
    }
    if (this._serverTcpHalfOpenCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverTcpHalfOpenCounter = this._serverTcpHalfOpenCounter;
    }
    if (this._serverTemplateIntErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverTemplateIntErr = this._serverTemplateIntErr;
    }
    if (this._serverTemplateUnknownErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverTemplateUnknownErr = this._serverTemplateUnknownErr;
    }
    if (this._sslCountCurr !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCountCurr = this._sslCountCurr;
    }
    if (this._sslCountTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCountTotal = this._sslCountTotal;
    }
    if (this._tcpEstCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpEstCounter = this._tcpEstCounter;
    }
    if (this._tcpHalfCloseCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpHalfCloseCounter = this._tcpHalfCloseCounter;
    }
    if (this._tcpHalfOpenCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpHalfOpenCounter = this._tcpHalfOpenCounter;
    }
    if (this._tcpSynHalfOpenCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSynHalfOpenCounter = this._tcpSynHalfOpenCounter;
    }
    if (this._totalClientsideEarlyDataConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalClientsideEarlyDataConnections = this._totalClientsideEarlyDataConnections;
    }
    if (this._totalClientsideFailedEarlyDataConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalClientsideFailedEarlyDataConnections = this._totalClientsideFailedEarlyDataConnections;
    }
    if (this._totalCurrConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalCurrConn = this._totalCurrConn;
    }
    if (this._totalFwConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalFwConn = this._totalFwConn;
    }
    if (this._totalIpNatConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalIpNatConn = this._totalIpNatConn;
    }
    if (this._totalL2L3Conn !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalL2L3Conn = this._totalL2L3Conn;
    }
    if (this._totalL4Conn !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalL4Conn = this._totalL4Conn;
    }
    if (this._totalL4ConnProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalL4ConnProxy = this._totalL4ConnProxy;
    }
    if (this._totalL4PacketCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalL4PacketCount = this._totalL4PacketCount;
    }
    if (this._totalL7Conn !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalL7Conn = this._totalL7Conn;
    }
    if (this._totalL7PacketCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalL7PacketCount = this._totalL7PacketCount;
    }
    if (this._totalLocalConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalLocalConn = this._totalLocalConn;
    }
    if (this._totalLoggingConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalLoggingConn = this._totalLoggingConn;
    }
    if (this._totalServersideEarlyDataConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalServersideEarlyDataConnections = this._totalServersideEarlyDataConnections;
    }
    if (this._totalServersideFailedEarlyDataConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalServersideFailedEarlyDataConnections = this._totalServersideFailedEarlyDataConnections;
    }
    if (this._totalTcpConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalTcpConn = this._totalTcpConn;
    }
    if (this._udpCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpCounter = this._udpCounter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemSessionStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientSslFatalAlert = undefined;
      this._clientSslFinRst = undefined;
      this._clientSslReuseTotal = undefined;
      this._clientSslSessionTicketReuseTotal = undefined;
      this._clientTemplateIntErr = undefined;
      this._clientTemplateUnknownErr = undefined;
      this._connAppSmpAllocCounter = undefined;
      this._connCounter = undefined;
      this._connFreedCounter = undefined;
      this._connSmpAgedCounter = undefined;
      this._connSmpAllocCounter = undefined;
      this._connSmpFreeCounter = undefined;
      this._connSmpType0Available = undefined;
      this._connSmpType1Available = undefined;
      this._connSmpType2Available = undefined;
      this._connSmpType3Available = undefined;
      this._connSmpType4Available = undefined;
      this._connType0Available = undefined;
      this._connType1Available = undefined;
      this._connType2Available = undefined;
      this._connType3Available = undefined;
      this._connType4Available = undefined;
      this._currFreeConn = undefined;
      this._diameterConcurrentUserSessionsCounter = undefined;
      this._diameterConnCounter = undefined;
      this._diameterConnFreedCounter = undefined;
      this._fpSessionFinRst = undefined;
      this._fwBlacklistSess = undefined;
      this._fwBlacklistSessCreated = undefined;
      this._fwBlacklistSessFreed = undefined;
      this._gtpCEchoCounter = undefined;
      this._gtpCEstCounter = undefined;
      this._gtpCHalfOpenCounter = undefined;
      this._gtpCumConnCounter = undefined;
      this._gtpCumConnFreedCounter = undefined;
      this._gtpCurrFreeConn = undefined;
      this._gtpUCounter = undefined;
      this._gtpUEchoCounter = undefined;
      this._ipCounter = undefined;
      this._otherCounter = undefined;
      this._reverseNatTcpCounter = undefined;
      this._reverseNatUdpCounter = undefined;
      this._sctpEstCounter = undefined;
      this._sctpHalfOpenCounter = undefined;
      this._serverSslCountCurr = undefined;
      this._serverSslCountTotal = undefined;
      this._serverSslFatalAlert = undefined;
      this._serverSslFinRst = undefined;
      this._serverSslReuseTotal = undefined;
      this._serverSslSessionTicketReuseTotal = undefined;
      this._serverTcpEstCounter = undefined;
      this._serverTcpHalfOpenCounter = undefined;
      this._serverTemplateIntErr = undefined;
      this._serverTemplateUnknownErr = undefined;
      this._sslCountCurr = undefined;
      this._sslCountTotal = undefined;
      this._tcpEstCounter = undefined;
      this._tcpHalfCloseCounter = undefined;
      this._tcpHalfOpenCounter = undefined;
      this._tcpSynHalfOpenCounter = undefined;
      this._totalClientsideEarlyDataConnections = undefined;
      this._totalClientsideFailedEarlyDataConnections = undefined;
      this._totalCurrConn = undefined;
      this._totalFwConn = undefined;
      this._totalIpNatConn = undefined;
      this._totalL2L3Conn = undefined;
      this._totalL4Conn = undefined;
      this._totalL4ConnProxy = undefined;
      this._totalL4PacketCount = undefined;
      this._totalL7Conn = undefined;
      this._totalL7PacketCount = undefined;
      this._totalLocalConn = undefined;
      this._totalLoggingConn = undefined;
      this._totalServersideEarlyDataConnections = undefined;
      this._totalServersideFailedEarlyDataConnections = undefined;
      this._totalTcpConn = undefined;
      this._udpCounter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientSslFatalAlert = value.clientSslFatalAlert;
      this._clientSslFinRst = value.clientSslFinRst;
      this._clientSslReuseTotal = value.clientSslReuseTotal;
      this._clientSslSessionTicketReuseTotal = value.clientSslSessionTicketReuseTotal;
      this._clientTemplateIntErr = value.clientTemplateIntErr;
      this._clientTemplateUnknownErr = value.clientTemplateUnknownErr;
      this._connAppSmpAllocCounter = value.connAppSmpAllocCounter;
      this._connCounter = value.connCounter;
      this._connFreedCounter = value.connFreedCounter;
      this._connSmpAgedCounter = value.connSmpAgedCounter;
      this._connSmpAllocCounter = value.connSmpAllocCounter;
      this._connSmpFreeCounter = value.connSmpFreeCounter;
      this._connSmpType0Available = value.connSmpType0Available;
      this._connSmpType1Available = value.connSmpType1Available;
      this._connSmpType2Available = value.connSmpType2Available;
      this._connSmpType3Available = value.connSmpType3Available;
      this._connSmpType4Available = value.connSmpType4Available;
      this._connType0Available = value.connType0Available;
      this._connType1Available = value.connType1Available;
      this._connType2Available = value.connType2Available;
      this._connType3Available = value.connType3Available;
      this._connType4Available = value.connType4Available;
      this._currFreeConn = value.currFreeConn;
      this._diameterConcurrentUserSessionsCounter = value.diameterConcurrentUserSessionsCounter;
      this._diameterConnCounter = value.diameterConnCounter;
      this._diameterConnFreedCounter = value.diameterConnFreedCounter;
      this._fpSessionFinRst = value.fpSessionFinRst;
      this._fwBlacklistSess = value.fwBlacklistSess;
      this._fwBlacklistSessCreated = value.fwBlacklistSessCreated;
      this._fwBlacklistSessFreed = value.fwBlacklistSessFreed;
      this._gtpCEchoCounter = value.gtpCEchoCounter;
      this._gtpCEstCounter = value.gtpCEstCounter;
      this._gtpCHalfOpenCounter = value.gtpCHalfOpenCounter;
      this._gtpCumConnCounter = value.gtpCumConnCounter;
      this._gtpCumConnFreedCounter = value.gtpCumConnFreedCounter;
      this._gtpCurrFreeConn = value.gtpCurrFreeConn;
      this._gtpUCounter = value.gtpUCounter;
      this._gtpUEchoCounter = value.gtpUEchoCounter;
      this._ipCounter = value.ipCounter;
      this._otherCounter = value.otherCounter;
      this._reverseNatTcpCounter = value.reverseNatTcpCounter;
      this._reverseNatUdpCounter = value.reverseNatUdpCounter;
      this._sctpEstCounter = value.sctpEstCounter;
      this._sctpHalfOpenCounter = value.sctpHalfOpenCounter;
      this._serverSslCountCurr = value.serverSslCountCurr;
      this._serverSslCountTotal = value.serverSslCountTotal;
      this._serverSslFatalAlert = value.serverSslFatalAlert;
      this._serverSslFinRst = value.serverSslFinRst;
      this._serverSslReuseTotal = value.serverSslReuseTotal;
      this._serverSslSessionTicketReuseTotal = value.serverSslSessionTicketReuseTotal;
      this._serverTcpEstCounter = value.serverTcpEstCounter;
      this._serverTcpHalfOpenCounter = value.serverTcpHalfOpenCounter;
      this._serverTemplateIntErr = value.serverTemplateIntErr;
      this._serverTemplateUnknownErr = value.serverTemplateUnknownErr;
      this._sslCountCurr = value.sslCountCurr;
      this._sslCountTotal = value.sslCountTotal;
      this._tcpEstCounter = value.tcpEstCounter;
      this._tcpHalfCloseCounter = value.tcpHalfCloseCounter;
      this._tcpHalfOpenCounter = value.tcpHalfOpenCounter;
      this._tcpSynHalfOpenCounter = value.tcpSynHalfOpenCounter;
      this._totalClientsideEarlyDataConnections = value.totalClientsideEarlyDataConnections;
      this._totalClientsideFailedEarlyDataConnections = value.totalClientsideFailedEarlyDataConnections;
      this._totalCurrConn = value.totalCurrConn;
      this._totalFwConn = value.totalFwConn;
      this._totalIpNatConn = value.totalIpNatConn;
      this._totalL2L3Conn = value.totalL2L3Conn;
      this._totalL4Conn = value.totalL4Conn;
      this._totalL4ConnProxy = value.totalL4ConnProxy;
      this._totalL4PacketCount = value.totalL4PacketCount;
      this._totalL7Conn = value.totalL7Conn;
      this._totalL7PacketCount = value.totalL7PacketCount;
      this._totalLocalConn = value.totalLocalConn;
      this._totalLoggingConn = value.totalLoggingConn;
      this._totalServersideEarlyDataConnections = value.totalServersideEarlyDataConnections;
      this._totalServersideFailedEarlyDataConnections = value.totalServersideFailedEarlyDataConnections;
      this._totalTcpConn = value.totalTcpConn;
      this._udpCounter = value.udpCounter;
    }
  }

  // client_ssl_fatal_alert - computed: false, optional: true, required: false
  private _clientSslFatalAlert?: number; 
  public get clientSslFatalAlert() {
    return this.getNumberAttribute('client_ssl_fatal_alert');
  }
  public set clientSslFatalAlert(value: number) {
    this._clientSslFatalAlert = value;
  }
  public resetClientSslFatalAlert() {
    this._clientSslFatalAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSslFatalAlertInput() {
    return this._clientSslFatalAlert;
  }

  // client_ssl_fin_rst - computed: false, optional: true, required: false
  private _clientSslFinRst?: number; 
  public get clientSslFinRst() {
    return this.getNumberAttribute('client_ssl_fin_rst');
  }
  public set clientSslFinRst(value: number) {
    this._clientSslFinRst = value;
  }
  public resetClientSslFinRst() {
    this._clientSslFinRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSslFinRstInput() {
    return this._clientSslFinRst;
  }

  // client_ssl_reuse_total - computed: false, optional: true, required: false
  private _clientSslReuseTotal?: number; 
  public get clientSslReuseTotal() {
    return this.getNumberAttribute('client_ssl_reuse_total');
  }
  public set clientSslReuseTotal(value: number) {
    this._clientSslReuseTotal = value;
  }
  public resetClientSslReuseTotal() {
    this._clientSslReuseTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSslReuseTotalInput() {
    return this._clientSslReuseTotal;
  }

  // client_ssl_session_ticket_reuse_total - computed: false, optional: true, required: false
  private _clientSslSessionTicketReuseTotal?: number; 
  public get clientSslSessionTicketReuseTotal() {
    return this.getNumberAttribute('client_ssl_session_ticket_reuse_total');
  }
  public set clientSslSessionTicketReuseTotal(value: number) {
    this._clientSslSessionTicketReuseTotal = value;
  }
  public resetClientSslSessionTicketReuseTotal() {
    this._clientSslSessionTicketReuseTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSslSessionTicketReuseTotalInput() {
    return this._clientSslSessionTicketReuseTotal;
  }

  // client_template_int_err - computed: false, optional: true, required: false
  private _clientTemplateIntErr?: number; 
  public get clientTemplateIntErr() {
    return this.getNumberAttribute('client_template_int_err');
  }
  public set clientTemplateIntErr(value: number) {
    this._clientTemplateIntErr = value;
  }
  public resetClientTemplateIntErr() {
    this._clientTemplateIntErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTemplateIntErrInput() {
    return this._clientTemplateIntErr;
  }

  // client_template_unknown_err - computed: false, optional: true, required: false
  private _clientTemplateUnknownErr?: number; 
  public get clientTemplateUnknownErr() {
    return this.getNumberAttribute('client_template_unknown_err');
  }
  public set clientTemplateUnknownErr(value: number) {
    this._clientTemplateUnknownErr = value;
  }
  public resetClientTemplateUnknownErr() {
    this._clientTemplateUnknownErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTemplateUnknownErrInput() {
    return this._clientTemplateUnknownErr;
  }

  // conn_app_smp_alloc_counter - computed: false, optional: true, required: false
  private _connAppSmpAllocCounter?: number; 
  public get connAppSmpAllocCounter() {
    return this.getNumberAttribute('conn_app_smp_alloc_counter');
  }
  public set connAppSmpAllocCounter(value: number) {
    this._connAppSmpAllocCounter = value;
  }
  public resetConnAppSmpAllocCounter() {
    this._connAppSmpAllocCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connAppSmpAllocCounterInput() {
    return this._connAppSmpAllocCounter;
  }

  // conn_counter - computed: false, optional: true, required: false
  private _connCounter?: number; 
  public get connCounter() {
    return this.getNumberAttribute('conn_counter');
  }
  public set connCounter(value: number) {
    this._connCounter = value;
  }
  public resetConnCounter() {
    this._connCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connCounterInput() {
    return this._connCounter;
  }

  // conn_freed_counter - computed: false, optional: true, required: false
  private _connFreedCounter?: number; 
  public get connFreedCounter() {
    return this.getNumberAttribute('conn_freed_counter');
  }
  public set connFreedCounter(value: number) {
    this._connFreedCounter = value;
  }
  public resetConnFreedCounter() {
    this._connFreedCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connFreedCounterInput() {
    return this._connFreedCounter;
  }

  // conn_smp_aged_counter - computed: false, optional: true, required: false
  private _connSmpAgedCounter?: number; 
  public get connSmpAgedCounter() {
    return this.getNumberAttribute('conn_smp_aged_counter');
  }
  public set connSmpAgedCounter(value: number) {
    this._connSmpAgedCounter = value;
  }
  public resetConnSmpAgedCounter() {
    this._connSmpAgedCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connSmpAgedCounterInput() {
    return this._connSmpAgedCounter;
  }

  // conn_smp_alloc_counter - computed: false, optional: true, required: false
  private _connSmpAllocCounter?: number; 
  public get connSmpAllocCounter() {
    return this.getNumberAttribute('conn_smp_alloc_counter');
  }
  public set connSmpAllocCounter(value: number) {
    this._connSmpAllocCounter = value;
  }
  public resetConnSmpAllocCounter() {
    this._connSmpAllocCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connSmpAllocCounterInput() {
    return this._connSmpAllocCounter;
  }

  // conn_smp_free_counter - computed: false, optional: true, required: false
  private _connSmpFreeCounter?: number; 
  public get connSmpFreeCounter() {
    return this.getNumberAttribute('conn_smp_free_counter');
  }
  public set connSmpFreeCounter(value: number) {
    this._connSmpFreeCounter = value;
  }
  public resetConnSmpFreeCounter() {
    this._connSmpFreeCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connSmpFreeCounterInput() {
    return this._connSmpFreeCounter;
  }

  // conn_smp_type_0_available - computed: false, optional: true, required: false
  private _connSmpType0Available?: number; 
  public get connSmpType0Available() {
    return this.getNumberAttribute('conn_smp_type_0_available');
  }
  public set connSmpType0Available(value: number) {
    this._connSmpType0Available = value;
  }
  public resetConnSmpType0Available() {
    this._connSmpType0Available = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connSmpType0AvailableInput() {
    return this._connSmpType0Available;
  }

  // conn_smp_type_1_available - computed: false, optional: true, required: false
  private _connSmpType1Available?: number; 
  public get connSmpType1Available() {
    return this.getNumberAttribute('conn_smp_type_1_available');
  }
  public set connSmpType1Available(value: number) {
    this._connSmpType1Available = value;
  }
  public resetConnSmpType1Available() {
    this._connSmpType1Available = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connSmpType1AvailableInput() {
    return this._connSmpType1Available;
  }

  // conn_smp_type_2_available - computed: false, optional: true, required: false
  private _connSmpType2Available?: number; 
  public get connSmpType2Available() {
    return this.getNumberAttribute('conn_smp_type_2_available');
  }
  public set connSmpType2Available(value: number) {
    this._connSmpType2Available = value;
  }
  public resetConnSmpType2Available() {
    this._connSmpType2Available = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connSmpType2AvailableInput() {
    return this._connSmpType2Available;
  }

  // conn_smp_type_3_available - computed: false, optional: true, required: false
  private _connSmpType3Available?: number; 
  public get connSmpType3Available() {
    return this.getNumberAttribute('conn_smp_type_3_available');
  }
  public set connSmpType3Available(value: number) {
    this._connSmpType3Available = value;
  }
  public resetConnSmpType3Available() {
    this._connSmpType3Available = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connSmpType3AvailableInput() {
    return this._connSmpType3Available;
  }

  // conn_smp_type_4_available - computed: false, optional: true, required: false
  private _connSmpType4Available?: number; 
  public get connSmpType4Available() {
    return this.getNumberAttribute('conn_smp_type_4_available');
  }
  public set connSmpType4Available(value: number) {
    this._connSmpType4Available = value;
  }
  public resetConnSmpType4Available() {
    this._connSmpType4Available = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connSmpType4AvailableInput() {
    return this._connSmpType4Available;
  }

  // conn_type_0_available - computed: false, optional: true, required: false
  private _connType0Available?: number; 
  public get connType0Available() {
    return this.getNumberAttribute('conn_type_0_available');
  }
  public set connType0Available(value: number) {
    this._connType0Available = value;
  }
  public resetConnType0Available() {
    this._connType0Available = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connType0AvailableInput() {
    return this._connType0Available;
  }

  // conn_type_1_available - computed: false, optional: true, required: false
  private _connType1Available?: number; 
  public get connType1Available() {
    return this.getNumberAttribute('conn_type_1_available');
  }
  public set connType1Available(value: number) {
    this._connType1Available = value;
  }
  public resetConnType1Available() {
    this._connType1Available = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connType1AvailableInput() {
    return this._connType1Available;
  }

  // conn_type_2_available - computed: false, optional: true, required: false
  private _connType2Available?: number; 
  public get connType2Available() {
    return this.getNumberAttribute('conn_type_2_available');
  }
  public set connType2Available(value: number) {
    this._connType2Available = value;
  }
  public resetConnType2Available() {
    this._connType2Available = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connType2AvailableInput() {
    return this._connType2Available;
  }

  // conn_type_3_available - computed: false, optional: true, required: false
  private _connType3Available?: number; 
  public get connType3Available() {
    return this.getNumberAttribute('conn_type_3_available');
  }
  public set connType3Available(value: number) {
    this._connType3Available = value;
  }
  public resetConnType3Available() {
    this._connType3Available = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connType3AvailableInput() {
    return this._connType3Available;
  }

  // conn_type_4_available - computed: false, optional: true, required: false
  private _connType4Available?: number; 
  public get connType4Available() {
    return this.getNumberAttribute('conn_type_4_available');
  }
  public set connType4Available(value: number) {
    this._connType4Available = value;
  }
  public resetConnType4Available() {
    this._connType4Available = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connType4AvailableInput() {
    return this._connType4Available;
  }

  // curr_free_conn - computed: false, optional: true, required: false
  private _currFreeConn?: number; 
  public get currFreeConn() {
    return this.getNumberAttribute('curr_free_conn');
  }
  public set currFreeConn(value: number) {
    this._currFreeConn = value;
  }
  public resetCurrFreeConn() {
    this._currFreeConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currFreeConnInput() {
    return this._currFreeConn;
  }

  // diameter_concurrent_user_sessions_counter - computed: false, optional: true, required: false
  private _diameterConcurrentUserSessionsCounter?: number; 
  public get diameterConcurrentUserSessionsCounter() {
    return this.getNumberAttribute('diameter_concurrent_user_sessions_counter');
  }
  public set diameterConcurrentUserSessionsCounter(value: number) {
    this._diameterConcurrentUserSessionsCounter = value;
  }
  public resetDiameterConcurrentUserSessionsCounter() {
    this._diameterConcurrentUserSessionsCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diameterConcurrentUserSessionsCounterInput() {
    return this._diameterConcurrentUserSessionsCounter;
  }

  // diameter_conn_counter - computed: false, optional: true, required: false
  private _diameterConnCounter?: number; 
  public get diameterConnCounter() {
    return this.getNumberAttribute('diameter_conn_counter');
  }
  public set diameterConnCounter(value: number) {
    this._diameterConnCounter = value;
  }
  public resetDiameterConnCounter() {
    this._diameterConnCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diameterConnCounterInput() {
    return this._diameterConnCounter;
  }

  // diameter_conn_freed_counter - computed: false, optional: true, required: false
  private _diameterConnFreedCounter?: number; 
  public get diameterConnFreedCounter() {
    return this.getNumberAttribute('diameter_conn_freed_counter');
  }
  public set diameterConnFreedCounter(value: number) {
    this._diameterConnFreedCounter = value;
  }
  public resetDiameterConnFreedCounter() {
    this._diameterConnFreedCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diameterConnFreedCounterInput() {
    return this._diameterConnFreedCounter;
  }

  // fp_session_fin_rst - computed: false, optional: true, required: false
  private _fpSessionFinRst?: number; 
  public get fpSessionFinRst() {
    return this.getNumberAttribute('fp_session_fin_rst');
  }
  public set fpSessionFinRst(value: number) {
    this._fpSessionFinRst = value;
  }
  public resetFpSessionFinRst() {
    this._fpSessionFinRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpSessionFinRstInput() {
    return this._fpSessionFinRst;
  }

  // fw_blacklist_sess - computed: false, optional: true, required: false
  private _fwBlacklistSess?: number; 
  public get fwBlacklistSess() {
    return this.getNumberAttribute('fw_blacklist_sess');
  }
  public set fwBlacklistSess(value: number) {
    this._fwBlacklistSess = value;
  }
  public resetFwBlacklistSess() {
    this._fwBlacklistSess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwBlacklistSessInput() {
    return this._fwBlacklistSess;
  }

  // fw_blacklist_sess_created - computed: false, optional: true, required: false
  private _fwBlacklistSessCreated?: number; 
  public get fwBlacklistSessCreated() {
    return this.getNumberAttribute('fw_blacklist_sess_created');
  }
  public set fwBlacklistSessCreated(value: number) {
    this._fwBlacklistSessCreated = value;
  }
  public resetFwBlacklistSessCreated() {
    this._fwBlacklistSessCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwBlacklistSessCreatedInput() {
    return this._fwBlacklistSessCreated;
  }

  // fw_blacklist_sess_freed - computed: false, optional: true, required: false
  private _fwBlacklistSessFreed?: number; 
  public get fwBlacklistSessFreed() {
    return this.getNumberAttribute('fw_blacklist_sess_freed');
  }
  public set fwBlacklistSessFreed(value: number) {
    this._fwBlacklistSessFreed = value;
  }
  public resetFwBlacklistSessFreed() {
    this._fwBlacklistSessFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwBlacklistSessFreedInput() {
    return this._fwBlacklistSessFreed;
  }

  // gtp_c_echo_counter - computed: false, optional: true, required: false
  private _gtpCEchoCounter?: number; 
  public get gtpCEchoCounter() {
    return this.getNumberAttribute('gtp_c_echo_counter');
  }
  public set gtpCEchoCounter(value: number) {
    this._gtpCEchoCounter = value;
  }
  public resetGtpCEchoCounter() {
    this._gtpCEchoCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpCEchoCounterInput() {
    return this._gtpCEchoCounter;
  }

  // gtp_c_est_counter - computed: false, optional: true, required: false
  private _gtpCEstCounter?: number; 
  public get gtpCEstCounter() {
    return this.getNumberAttribute('gtp_c_est_counter');
  }
  public set gtpCEstCounter(value: number) {
    this._gtpCEstCounter = value;
  }
  public resetGtpCEstCounter() {
    this._gtpCEstCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpCEstCounterInput() {
    return this._gtpCEstCounter;
  }

  // gtp_c_half_open_counter - computed: false, optional: true, required: false
  private _gtpCHalfOpenCounter?: number; 
  public get gtpCHalfOpenCounter() {
    return this.getNumberAttribute('gtp_c_half_open_counter');
  }
  public set gtpCHalfOpenCounter(value: number) {
    this._gtpCHalfOpenCounter = value;
  }
  public resetGtpCHalfOpenCounter() {
    this._gtpCHalfOpenCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpCHalfOpenCounterInput() {
    return this._gtpCHalfOpenCounter;
  }

  // gtp_cum_conn_counter - computed: false, optional: true, required: false
  private _gtpCumConnCounter?: number; 
  public get gtpCumConnCounter() {
    return this.getNumberAttribute('gtp_cum_conn_counter');
  }
  public set gtpCumConnCounter(value: number) {
    this._gtpCumConnCounter = value;
  }
  public resetGtpCumConnCounter() {
    this._gtpCumConnCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpCumConnCounterInput() {
    return this._gtpCumConnCounter;
  }

  // gtp_cum_conn_freed_counter - computed: false, optional: true, required: false
  private _gtpCumConnFreedCounter?: number; 
  public get gtpCumConnFreedCounter() {
    return this.getNumberAttribute('gtp_cum_conn_freed_counter');
  }
  public set gtpCumConnFreedCounter(value: number) {
    this._gtpCumConnFreedCounter = value;
  }
  public resetGtpCumConnFreedCounter() {
    this._gtpCumConnFreedCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpCumConnFreedCounterInput() {
    return this._gtpCumConnFreedCounter;
  }

  // gtp_curr_free_conn - computed: false, optional: true, required: false
  private _gtpCurrFreeConn?: number; 
  public get gtpCurrFreeConn() {
    return this.getNumberAttribute('gtp_curr_free_conn');
  }
  public set gtpCurrFreeConn(value: number) {
    this._gtpCurrFreeConn = value;
  }
  public resetGtpCurrFreeConn() {
    this._gtpCurrFreeConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpCurrFreeConnInput() {
    return this._gtpCurrFreeConn;
  }

  // gtp_u_counter - computed: false, optional: true, required: false
  private _gtpUCounter?: number; 
  public get gtpUCounter() {
    return this.getNumberAttribute('gtp_u_counter');
  }
  public set gtpUCounter(value: number) {
    this._gtpUCounter = value;
  }
  public resetGtpUCounter() {
    this._gtpUCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpUCounterInput() {
    return this._gtpUCounter;
  }

  // gtp_u_echo_counter - computed: false, optional: true, required: false
  private _gtpUEchoCounter?: number; 
  public get gtpUEchoCounter() {
    return this.getNumberAttribute('gtp_u_echo_counter');
  }
  public set gtpUEchoCounter(value: number) {
    this._gtpUEchoCounter = value;
  }
  public resetGtpUEchoCounter() {
    this._gtpUEchoCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpUEchoCounterInput() {
    return this._gtpUEchoCounter;
  }

  // ip_counter - computed: false, optional: true, required: false
  private _ipCounter?: number; 
  public get ipCounter() {
    return this.getNumberAttribute('ip_counter');
  }
  public set ipCounter(value: number) {
    this._ipCounter = value;
  }
  public resetIpCounter() {
    this._ipCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipCounterInput() {
    return this._ipCounter;
  }

  // other_counter - computed: false, optional: true, required: false
  private _otherCounter?: number; 
  public get otherCounter() {
    return this.getNumberAttribute('other_counter');
  }
  public set otherCounter(value: number) {
    this._otherCounter = value;
  }
  public resetOtherCounter() {
    this._otherCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherCounterInput() {
    return this._otherCounter;
  }

  // reverse_nat_tcp_counter - computed: false, optional: true, required: false
  private _reverseNatTcpCounter?: number; 
  public get reverseNatTcpCounter() {
    return this.getNumberAttribute('reverse_nat_tcp_counter');
  }
  public set reverseNatTcpCounter(value: number) {
    this._reverseNatTcpCounter = value;
  }
  public resetReverseNatTcpCounter() {
    this._reverseNatTcpCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseNatTcpCounterInput() {
    return this._reverseNatTcpCounter;
  }

  // reverse_nat_udp_counter - computed: false, optional: true, required: false
  private _reverseNatUdpCounter?: number; 
  public get reverseNatUdpCounter() {
    return this.getNumberAttribute('reverse_nat_udp_counter');
  }
  public set reverseNatUdpCounter(value: number) {
    this._reverseNatUdpCounter = value;
  }
  public resetReverseNatUdpCounter() {
    this._reverseNatUdpCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseNatUdpCounterInput() {
    return this._reverseNatUdpCounter;
  }

  // sctp_est_counter - computed: false, optional: true, required: false
  private _sctpEstCounter?: number; 
  public get sctpEstCounter() {
    return this.getNumberAttribute('sctp_est_counter');
  }
  public set sctpEstCounter(value: number) {
    this._sctpEstCounter = value;
  }
  public resetSctpEstCounter() {
    this._sctpEstCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpEstCounterInput() {
    return this._sctpEstCounter;
  }

  // sctp_half_open_counter - computed: false, optional: true, required: false
  private _sctpHalfOpenCounter?: number; 
  public get sctpHalfOpenCounter() {
    return this.getNumberAttribute('sctp_half_open_counter');
  }
  public set sctpHalfOpenCounter(value: number) {
    this._sctpHalfOpenCounter = value;
  }
  public resetSctpHalfOpenCounter() {
    this._sctpHalfOpenCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpHalfOpenCounterInput() {
    return this._sctpHalfOpenCounter;
  }

  // server_ssl_count_curr - computed: false, optional: true, required: false
  private _serverSslCountCurr?: number; 
  public get serverSslCountCurr() {
    return this.getNumberAttribute('server_ssl_count_curr');
  }
  public set serverSslCountCurr(value: number) {
    this._serverSslCountCurr = value;
  }
  public resetServerSslCountCurr() {
    this._serverSslCountCurr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSslCountCurrInput() {
    return this._serverSslCountCurr;
  }

  // server_ssl_count_total - computed: false, optional: true, required: false
  private _serverSslCountTotal?: number; 
  public get serverSslCountTotal() {
    return this.getNumberAttribute('server_ssl_count_total');
  }
  public set serverSslCountTotal(value: number) {
    this._serverSslCountTotal = value;
  }
  public resetServerSslCountTotal() {
    this._serverSslCountTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSslCountTotalInput() {
    return this._serverSslCountTotal;
  }

  // server_ssl_fatal_alert - computed: false, optional: true, required: false
  private _serverSslFatalAlert?: number; 
  public get serverSslFatalAlert() {
    return this.getNumberAttribute('server_ssl_fatal_alert');
  }
  public set serverSslFatalAlert(value: number) {
    this._serverSslFatalAlert = value;
  }
  public resetServerSslFatalAlert() {
    this._serverSslFatalAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSslFatalAlertInput() {
    return this._serverSslFatalAlert;
  }

  // server_ssl_fin_rst - computed: false, optional: true, required: false
  private _serverSslFinRst?: number; 
  public get serverSslFinRst() {
    return this.getNumberAttribute('server_ssl_fin_rst');
  }
  public set serverSslFinRst(value: number) {
    this._serverSslFinRst = value;
  }
  public resetServerSslFinRst() {
    this._serverSslFinRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSslFinRstInput() {
    return this._serverSslFinRst;
  }

  // server_ssl_reuse_total - computed: false, optional: true, required: false
  private _serverSslReuseTotal?: number; 
  public get serverSslReuseTotal() {
    return this.getNumberAttribute('server_ssl_reuse_total');
  }
  public set serverSslReuseTotal(value: number) {
    this._serverSslReuseTotal = value;
  }
  public resetServerSslReuseTotal() {
    this._serverSslReuseTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSslReuseTotalInput() {
    return this._serverSslReuseTotal;
  }

  // server_ssl_session_ticket_reuse_total - computed: false, optional: true, required: false
  private _serverSslSessionTicketReuseTotal?: number; 
  public get serverSslSessionTicketReuseTotal() {
    return this.getNumberAttribute('server_ssl_session_ticket_reuse_total');
  }
  public set serverSslSessionTicketReuseTotal(value: number) {
    this._serverSslSessionTicketReuseTotal = value;
  }
  public resetServerSslSessionTicketReuseTotal() {
    this._serverSslSessionTicketReuseTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSslSessionTicketReuseTotalInput() {
    return this._serverSslSessionTicketReuseTotal;
  }

  // server_tcp_est_counter - computed: false, optional: true, required: false
  private _serverTcpEstCounter?: number; 
  public get serverTcpEstCounter() {
    return this.getNumberAttribute('server_tcp_est_counter');
  }
  public set serverTcpEstCounter(value: number) {
    this._serverTcpEstCounter = value;
  }
  public resetServerTcpEstCounter() {
    this._serverTcpEstCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTcpEstCounterInput() {
    return this._serverTcpEstCounter;
  }

  // server_tcp_half_open_counter - computed: false, optional: true, required: false
  private _serverTcpHalfOpenCounter?: number; 
  public get serverTcpHalfOpenCounter() {
    return this.getNumberAttribute('server_tcp_half_open_counter');
  }
  public set serverTcpHalfOpenCounter(value: number) {
    this._serverTcpHalfOpenCounter = value;
  }
  public resetServerTcpHalfOpenCounter() {
    this._serverTcpHalfOpenCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTcpHalfOpenCounterInput() {
    return this._serverTcpHalfOpenCounter;
  }

  // server_template_int_err - computed: false, optional: true, required: false
  private _serverTemplateIntErr?: number; 
  public get serverTemplateIntErr() {
    return this.getNumberAttribute('server_template_int_err');
  }
  public set serverTemplateIntErr(value: number) {
    this._serverTemplateIntErr = value;
  }
  public resetServerTemplateIntErr() {
    this._serverTemplateIntErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTemplateIntErrInput() {
    return this._serverTemplateIntErr;
  }

  // server_template_unknown_err - computed: false, optional: true, required: false
  private _serverTemplateUnknownErr?: number; 
  public get serverTemplateUnknownErr() {
    return this.getNumberAttribute('server_template_unknown_err');
  }
  public set serverTemplateUnknownErr(value: number) {
    this._serverTemplateUnknownErr = value;
  }
  public resetServerTemplateUnknownErr() {
    this._serverTemplateUnknownErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTemplateUnknownErrInput() {
    return this._serverTemplateUnknownErr;
  }

  // ssl_count_curr - computed: false, optional: true, required: false
  private _sslCountCurr?: number; 
  public get sslCountCurr() {
    return this.getNumberAttribute('ssl_count_curr');
  }
  public set sslCountCurr(value: number) {
    this._sslCountCurr = value;
  }
  public resetSslCountCurr() {
    this._sslCountCurr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCountCurrInput() {
    return this._sslCountCurr;
  }

  // ssl_count_total - computed: false, optional: true, required: false
  private _sslCountTotal?: number; 
  public get sslCountTotal() {
    return this.getNumberAttribute('ssl_count_total');
  }
  public set sslCountTotal(value: number) {
    this._sslCountTotal = value;
  }
  public resetSslCountTotal() {
    this._sslCountTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCountTotalInput() {
    return this._sslCountTotal;
  }

  // tcp_est_counter - computed: false, optional: true, required: false
  private _tcpEstCounter?: number; 
  public get tcpEstCounter() {
    return this.getNumberAttribute('tcp_est_counter');
  }
  public set tcpEstCounter(value: number) {
    this._tcpEstCounter = value;
  }
  public resetTcpEstCounter() {
    this._tcpEstCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpEstCounterInput() {
    return this._tcpEstCounter;
  }

  // tcp_half_close_counter - computed: false, optional: true, required: false
  private _tcpHalfCloseCounter?: number; 
  public get tcpHalfCloseCounter() {
    return this.getNumberAttribute('tcp_half_close_counter');
  }
  public set tcpHalfCloseCounter(value: number) {
    this._tcpHalfCloseCounter = value;
  }
  public resetTcpHalfCloseCounter() {
    this._tcpHalfCloseCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpHalfCloseCounterInput() {
    return this._tcpHalfCloseCounter;
  }

  // tcp_half_open_counter - computed: false, optional: true, required: false
  private _tcpHalfOpenCounter?: number; 
  public get tcpHalfOpenCounter() {
    return this.getNumberAttribute('tcp_half_open_counter');
  }
  public set tcpHalfOpenCounter(value: number) {
    this._tcpHalfOpenCounter = value;
  }
  public resetTcpHalfOpenCounter() {
    this._tcpHalfOpenCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpHalfOpenCounterInput() {
    return this._tcpHalfOpenCounter;
  }

  // tcp_syn_half_open_counter - computed: false, optional: true, required: false
  private _tcpSynHalfOpenCounter?: number; 
  public get tcpSynHalfOpenCounter() {
    return this.getNumberAttribute('tcp_syn_half_open_counter');
  }
  public set tcpSynHalfOpenCounter(value: number) {
    this._tcpSynHalfOpenCounter = value;
  }
  public resetTcpSynHalfOpenCounter() {
    this._tcpSynHalfOpenCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynHalfOpenCounterInput() {
    return this._tcpSynHalfOpenCounter;
  }

  // total_clientside_early_data_connections - computed: false, optional: true, required: false
  private _totalClientsideEarlyDataConnections?: number; 
  public get totalClientsideEarlyDataConnections() {
    return this.getNumberAttribute('total_clientside_early_data_connections');
  }
  public set totalClientsideEarlyDataConnections(value: number) {
    this._totalClientsideEarlyDataConnections = value;
  }
  public resetTotalClientsideEarlyDataConnections() {
    this._totalClientsideEarlyDataConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalClientsideEarlyDataConnectionsInput() {
    return this._totalClientsideEarlyDataConnections;
  }

  // total_clientside_failed_early_data_connections - computed: false, optional: true, required: false
  private _totalClientsideFailedEarlyDataConnections?: number; 
  public get totalClientsideFailedEarlyDataConnections() {
    return this.getNumberAttribute('total_clientside_failed_early_data_connections');
  }
  public set totalClientsideFailedEarlyDataConnections(value: number) {
    this._totalClientsideFailedEarlyDataConnections = value;
  }
  public resetTotalClientsideFailedEarlyDataConnections() {
    this._totalClientsideFailedEarlyDataConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalClientsideFailedEarlyDataConnectionsInput() {
    return this._totalClientsideFailedEarlyDataConnections;
  }

  // total_curr_conn - computed: false, optional: true, required: false
  private _totalCurrConn?: number; 
  public get totalCurrConn() {
    return this.getNumberAttribute('total_curr_conn');
  }
  public set totalCurrConn(value: number) {
    this._totalCurrConn = value;
  }
  public resetTotalCurrConn() {
    this._totalCurrConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalCurrConnInput() {
    return this._totalCurrConn;
  }

  // total_fw_conn - computed: false, optional: true, required: false
  private _totalFwConn?: number; 
  public get totalFwConn() {
    return this.getNumberAttribute('total_fw_conn');
  }
  public set totalFwConn(value: number) {
    this._totalFwConn = value;
  }
  public resetTotalFwConn() {
    this._totalFwConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalFwConnInput() {
    return this._totalFwConn;
  }

  // total_ip_nat_conn - computed: false, optional: true, required: false
  private _totalIpNatConn?: number; 
  public get totalIpNatConn() {
    return this.getNumberAttribute('total_ip_nat_conn');
  }
  public set totalIpNatConn(value: number) {
    this._totalIpNatConn = value;
  }
  public resetTotalIpNatConn() {
    this._totalIpNatConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalIpNatConnInput() {
    return this._totalIpNatConn;
  }

  // total_l2l3_conn - computed: false, optional: true, required: false
  private _totalL2L3Conn?: number; 
  public get totalL2L3Conn() {
    return this.getNumberAttribute('total_l2l3_conn');
  }
  public set totalL2L3Conn(value: number) {
    this._totalL2L3Conn = value;
  }
  public resetTotalL2L3Conn() {
    this._totalL2L3Conn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalL2L3ConnInput() {
    return this._totalL2L3Conn;
  }

  // total_l4_conn - computed: false, optional: true, required: false
  private _totalL4Conn?: number; 
  public get totalL4Conn() {
    return this.getNumberAttribute('total_l4_conn');
  }
  public set totalL4Conn(value: number) {
    this._totalL4Conn = value;
  }
  public resetTotalL4Conn() {
    this._totalL4Conn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalL4ConnInput() {
    return this._totalL4Conn;
  }

  // total_l4_conn_proxy - computed: false, optional: true, required: false
  private _totalL4ConnProxy?: number; 
  public get totalL4ConnProxy() {
    return this.getNumberAttribute('total_l4_conn_proxy');
  }
  public set totalL4ConnProxy(value: number) {
    this._totalL4ConnProxy = value;
  }
  public resetTotalL4ConnProxy() {
    this._totalL4ConnProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalL4ConnProxyInput() {
    return this._totalL4ConnProxy;
  }

  // total_l4_packet_count - computed: false, optional: true, required: false
  private _totalL4PacketCount?: number; 
  public get totalL4PacketCount() {
    return this.getNumberAttribute('total_l4_packet_count');
  }
  public set totalL4PacketCount(value: number) {
    this._totalL4PacketCount = value;
  }
  public resetTotalL4PacketCount() {
    this._totalL4PacketCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalL4PacketCountInput() {
    return this._totalL4PacketCount;
  }

  // total_l7_conn - computed: false, optional: true, required: false
  private _totalL7Conn?: number; 
  public get totalL7Conn() {
    return this.getNumberAttribute('total_l7_conn');
  }
  public set totalL7Conn(value: number) {
    this._totalL7Conn = value;
  }
  public resetTotalL7Conn() {
    this._totalL7Conn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalL7ConnInput() {
    return this._totalL7Conn;
  }

  // total_l7_packet_count - computed: false, optional: true, required: false
  private _totalL7PacketCount?: number; 
  public get totalL7PacketCount() {
    return this.getNumberAttribute('total_l7_packet_count');
  }
  public set totalL7PacketCount(value: number) {
    this._totalL7PacketCount = value;
  }
  public resetTotalL7PacketCount() {
    this._totalL7PacketCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalL7PacketCountInput() {
    return this._totalL7PacketCount;
  }

  // total_local_conn - computed: false, optional: true, required: false
  private _totalLocalConn?: number; 
  public get totalLocalConn() {
    return this.getNumberAttribute('total_local_conn');
  }
  public set totalLocalConn(value: number) {
    this._totalLocalConn = value;
  }
  public resetTotalLocalConn() {
    this._totalLocalConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalLocalConnInput() {
    return this._totalLocalConn;
  }

  // total_logging_conn - computed: false, optional: true, required: false
  private _totalLoggingConn?: number; 
  public get totalLoggingConn() {
    return this.getNumberAttribute('total_logging_conn');
  }
  public set totalLoggingConn(value: number) {
    this._totalLoggingConn = value;
  }
  public resetTotalLoggingConn() {
    this._totalLoggingConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalLoggingConnInput() {
    return this._totalLoggingConn;
  }

  // total_serverside_early_data_connections - computed: false, optional: true, required: false
  private _totalServersideEarlyDataConnections?: number; 
  public get totalServersideEarlyDataConnections() {
    return this.getNumberAttribute('total_serverside_early_data_connections');
  }
  public set totalServersideEarlyDataConnections(value: number) {
    this._totalServersideEarlyDataConnections = value;
  }
  public resetTotalServersideEarlyDataConnections() {
    this._totalServersideEarlyDataConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalServersideEarlyDataConnectionsInput() {
    return this._totalServersideEarlyDataConnections;
  }

  // total_serverside_failed_early_data_connections - computed: false, optional: true, required: false
  private _totalServersideFailedEarlyDataConnections?: number; 
  public get totalServersideFailedEarlyDataConnections() {
    return this.getNumberAttribute('total_serverside_failed_early_data_connections');
  }
  public set totalServersideFailedEarlyDataConnections(value: number) {
    this._totalServersideFailedEarlyDataConnections = value;
  }
  public resetTotalServersideFailedEarlyDataConnections() {
    this._totalServersideFailedEarlyDataConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalServersideFailedEarlyDataConnectionsInput() {
    return this._totalServersideFailedEarlyDataConnections;
  }

  // total_tcp_conn - computed: false, optional: true, required: false
  private _totalTcpConn?: number; 
  public get totalTcpConn() {
    return this.getNumberAttribute('total_tcp_conn');
  }
  public set totalTcpConn(value: number) {
    this._totalTcpConn = value;
  }
  public resetTotalTcpConn() {
    this._totalTcpConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalTcpConnInput() {
    return this._totalTcpConn;
  }

  // udp_counter - computed: false, optional: true, required: false
  private _udpCounter?: number; 
  public get udpCounter() {
    return this.getNumberAttribute('udp_counter');
  }
  public set udpCounter(value: number) {
    this._udpCounter = value;
  }
  public resetUdpCounter() {
    this._udpCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpCounterInput() {
    return this._udpCounter;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats thunder_system_session_stats}
*/
export class DataThunderSystemSessionStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_session_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemSessionStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemSessionStats to import
  * @param importFromId The id of the existing DataThunderSystemSessionStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemSessionStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_session_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_session_stats thunder_system_session_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemSessionStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemSessionStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_session_stats',
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
  private _stats = new DataThunderSystemSessionStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSystemSessionStatsStats) {
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
      stats: dataThunderSystemSessionStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSystemSessionStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemSessionStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
