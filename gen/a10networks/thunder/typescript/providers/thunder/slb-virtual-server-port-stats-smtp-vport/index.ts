// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbVirtualServerPortStatsSmtpVportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#id SlbVirtualServerPortStatsSmtpVport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#port_number SlbVirtualServerPortStatsSmtpVport#port_number}
  */
  readonly portNumber: number;
  /**
  * 'tcp': TCP LB service; 'udp': UDP Port; 'others': for no tcp/udp protocol, do IP load balancing; 'diameter': diameter port; 'dns-tcp': DNS service over TCP; 'dns-udp': DNS service over UDP; 'fast-http': Fast HTTP Port; 'fix': FIX Port; 'ftp': File Transfer Protocol Port; 'ftp-proxy': ftp proxy port; 'http': HTTP Port; 'https': HTTPS port; 'imap': imap proxy port; 'mlb': Message based load balancing; 'mms': Microsoft Multimedia Service Port; 'mysql': mssql port; 'mssql': mssql; 'pop3': pop3 proxy port; 'radius': RADIUS Port; 'rtsp': Real Time Streaming Protocol Port; 'sip': Session initiation protocol over UDP; 'sip-tcp': Session initiation protocol over TCP; 'sips': Session initiation protocol over TLS; 'smpp-tcp': SMPP service over TCP; 'spdy': spdy port; 'spdys': spdys port; 'smtp': SMTP Port; 'mqtt': MQTT Port; 'mqtts': MQTTS Port; 'ssl-proxy': Generic SSL proxy; 'ssli': SSL insight; 'ssh': SSH Port; 'tcp-proxy': Generic TCP proxy; 'tftp': TFTP Port; 'fast-fix': Fast FIX port; 'http-over-quic': HTTP3-over-quic port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#protocol SlbVirtualServerPortStatsSmtpVport#protocol}
  */
  readonly protocol: string;
  /**
  * Virtual_server_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#virtual_server_name SlbVirtualServerPortStatsSmtpVport#virtual_server_name}
  */
  readonly virtualServerName: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#stats SlbVirtualServerPortStatsSmtpVport#stats}
  */
  readonly stats?: SlbVirtualServerPortStatsSmtpVportStats;
}
export interface SlbVirtualServerPortStatsSmtpVportStatsSmtpVport {
  /**
  * aFlex SMTP EHLO sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#aflex_ehlo_sent SlbVirtualServerPortStatsSmtpVport#aflex_ehlo_sent}
  */
  readonly aflexEhloSent?: number;
  /**
  * aFleX lb reselect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#aflex_lb_reselect SlbVirtualServerPortStatsSmtpVport#aflex_lb_reselect}
  */
  readonly aflexLbReselect?: number;
  /**
  * aFleX lb reselect (succ)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#aflex_lb_reselect_ok SlbVirtualServerPortStatsSmtpVport#aflex_lb_reselect_ok}
  */
  readonly aflexLbReselectOk?: number;
  /**
  * aFlex Mail event abort
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#aflex_mail_fail SlbVirtualServerPortStatsSmtpVport#aflex_mail_fail}
  */
  readonly aflexMailFail?: number;
  /**
  * aFlex SMTP switching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#aflex_switch SlbVirtualServerPortStatsSmtpVport#aflex_switch}
  */
  readonly aflexSwitch?: number;
  /**
  * aFlex SMTP switching success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#aflex_switch_ok SlbVirtualServerPortStatsSmtpVport#aflex_switch_ok}
  */
  readonly aflexSwitchOk?: number;
  /**
  * Total bytes in SMTP commands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#client_bytes SlbVirtualServerPortStatsSmtpVport#client_bytes}
  */
  readonly clientBytes?: number;
  /**
  * Client domain switching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#client_domain_switch SlbVirtualServerPortStatsSmtpVport#client_domain_switch}
  */
  readonly clientDomainSwitch?: number;
  /**
  * Client domain sw (succ)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#client_domain_switch_ok SlbVirtualServerPortStatsSmtpVport#client_domain_switch_ok}
  */
  readonly clientDomainSwitchOk?: number;
  /**
  * Client EHLO saved
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#client_ehlo_saved SlbVirtualServerPortStatsSmtpVport#client_ehlo_saved}
  */
  readonly clientEhloSaved?: number;
  /**
  * Client reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#client_reset SlbVirtualServerPortStatsSmtpVport#client_reset}
  */
  readonly clientReset?: number;
  /**
  * DATA commands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#cmd_data SlbVirtualServerPortStatsSmtpVport#cmd_data}
  */
  readonly cmdData?: number;
  /**
  * EHLO commands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#cmd_ehlo SlbVirtualServerPortStatsSmtpVport#cmd_ehlo}
  */
  readonly cmdEhlo?: number;
  /**
  * ETRN commands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#cmd_etrn SlbVirtualServerPortStatsSmtpVport#cmd_etrn}
  */
  readonly cmdEtrn?: number;
  /**
  * EXPN commands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#cmd_expn SlbVirtualServerPortStatsSmtpVport#cmd_expn}
  */
  readonly cmdExpn?: number;
  /**
  * HELO commands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#cmd_helo SlbVirtualServerPortStatsSmtpVport#cmd_helo}
  */
  readonly cmdHelo?: number;
  /**
  * HELP commands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#cmd_help SlbVirtualServerPortStatsSmtpVport#cmd_help}
  */
  readonly cmdHelp?: number;
  /**
  * Local extension commands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#cmd_local SlbVirtualServerPortStatsSmtpVport#cmd_local}
  */
  readonly cmdLocal?: number;
  /**
  * MAIL commands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#cmd_mail SlbVirtualServerPortStatsSmtpVport#cmd_mail}
  */
  readonly cmdMail?: number;
  /**
  * NOOP commands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#cmd_noop SlbVirtualServerPortStatsSmtpVport#cmd_noop}
  */
  readonly cmdNoop?: number;
  /**
  * QUIT commands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#cmd_quit SlbVirtualServerPortStatsSmtpVport#cmd_quit}
  */
  readonly cmdQuit?: number;
  /**
  * RCPT commands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#cmd_rcpt SlbVirtualServerPortStatsSmtpVport#cmd_rcpt}
  */
  readonly cmdRcpt?: number;
  /**
  * RSET commands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#cmd_rset SlbVirtualServerPortStatsSmtpVport#cmd_rset}
  */
  readonly cmdRset?: number;
  /**
  * STARTTLS commands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#cmd_starttls SlbVirtualServerPortStatsSmtpVport#cmd_starttls}
  */
  readonly cmdStarttls?: number;
  /**
  * TURN commands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#cmd_turn SlbVirtualServerPortStatsSmtpVport#cmd_turn}
  */
  readonly cmdTurn?: number;
  /**
  * Unknown commands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#cmd_unknown SlbVirtualServerPortStatsSmtpVport#cmd_unknown}
  */
  readonly cmdUnknown?: number;
  /**
  * VRFY commands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#cmd_vrfy SlbVirtualServerPortStatsSmtpVport#cmd_vrfy}
  */
  readonly cmdVrfy?: number;
  /**
  * Reply code 200
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#code_200 SlbVirtualServerPortStatsSmtpVport#code_200}
  */
  readonly code200?: number;
  /**
  * Reply code 211
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#code_211 SlbVirtualServerPortStatsSmtpVport#code_211}
  */
  readonly code211?: number;
  /**
  * Reply code 214
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#code_214 SlbVirtualServerPortStatsSmtpVport#code_214}
  */
  readonly code214?: number;
  /**
  * Reply code 220
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#code_220 SlbVirtualServerPortStatsSmtpVport#code_220}
  */
  readonly code220?: number;
  /**
  * Reply code 221
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#code_221 SlbVirtualServerPortStatsSmtpVport#code_221}
  */
  readonly code221?: number;
  /**
  * Reply code 250
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#code_250 SlbVirtualServerPortStatsSmtpVport#code_250}
  */
  readonly code250?: number;
  /**
  * Reply code 251
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#code_251 SlbVirtualServerPortStatsSmtpVport#code_251}
  */
  readonly code251?: number;
  /**
  * Reply code 252
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#code_252 SlbVirtualServerPortStatsSmtpVport#code_252}
  */
  readonly code252?: number;
  /**
  * Reply code 2XX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#code_2xx SlbVirtualServerPortStatsSmtpVport#code_2xx}
  */
  readonly code2Xx?: number;
  /**
  * Reply code 354
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#code_354 SlbVirtualServerPortStatsSmtpVport#code_354}
  */
  readonly code354?: number;
  /**
  * Reply code 3XX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#code_3xx SlbVirtualServerPortStatsSmtpVport#code_3xx}
  */
  readonly code3Xx?: number;
  /**
  * Reply code 421
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#code_421 SlbVirtualServerPortStatsSmtpVport#code_421}
  */
  readonly code421?: number;
  /**
  * Reply code 450
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#code_450 SlbVirtualServerPortStatsSmtpVport#code_450}
  */
  readonly code450?: number;
  /**
  * Reply code 451
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#code_451 SlbVirtualServerPortStatsSmtpVport#code_451}
  */
  readonly code451?: number;
  /**
  * Reply code 452
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#code_452 SlbVirtualServerPortStatsSmtpVport#code_452}
  */
  readonly code452?: number;
  /**
  * Reply code 455
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#code_455 SlbVirtualServerPortStatsSmtpVport#code_455}
  */
  readonly code455?: number;
  /**
  * Reply code 4XX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#code_4xx SlbVirtualServerPortStatsSmtpVport#code_4xx}
  */
  readonly code4Xx?: number;
  /**
  * Reply code 500
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#code_500 SlbVirtualServerPortStatsSmtpVport#code_500}
  */
  readonly code500?: number;
  /**
  * Reply code 501
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#code_501 SlbVirtualServerPortStatsSmtpVport#code_501}
  */
  readonly code501?: number;
  /**
  * Reply code 502
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#code_502 SlbVirtualServerPortStatsSmtpVport#code_502}
  */
  readonly code502?: number;
  /**
  * Reply code 503
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#code_503 SlbVirtualServerPortStatsSmtpVport#code_503}
  */
  readonly code503?: number;
  /**
  * Reply code 504
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#code_504 SlbVirtualServerPortStatsSmtpVport#code_504}
  */
  readonly code504?: number;
  /**
  * Reply code 521
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#code_521 SlbVirtualServerPortStatsSmtpVport#code_521}
  */
  readonly code521?: number;
  /**
  * Reply code 530
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#code_530 SlbVirtualServerPortStatsSmtpVport#code_530}
  */
  readonly code530?: number;
  /**
  * Reply code 550
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#code_550 SlbVirtualServerPortStatsSmtpVport#code_550}
  */
  readonly code550?: number;
  /**
  * Reply code 551
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#code_551 SlbVirtualServerPortStatsSmtpVport#code_551}
  */
  readonly code551?: number;
  /**
  * Reply code 552
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#code_552 SlbVirtualServerPortStatsSmtpVport#code_552}
  */
  readonly code552?: number;
  /**
  * Reply code 553
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#code_553 SlbVirtualServerPortStatsSmtpVport#code_553}
  */
  readonly code553?: number;
  /**
  * Reply code 554
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#code_554 SlbVirtualServerPortStatsSmtpVport#code_554}
  */
  readonly code554?: number;
  /**
  * Reply code 555
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#code_555 SlbVirtualServerPortStatsSmtpVport#code_555}
  */
  readonly code555?: number;
  /**
  * Reply code 556
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#code_556 SlbVirtualServerPortStatsSmtpVport#code_556}
  */
  readonly code556?: number;
  /**
  * Reply code 5XX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#code_5xx SlbVirtualServerPortStatsSmtpVport#code_5xx}
  */
  readonly code5Xx?: number;
  /**
  * Reply code unknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#code_unknown SlbVirtualServerPortStatsSmtpVport#code_unknown}
  */
  readonly codeUnknown?: number;
  /**
  * Current number of SMTP connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#curr_conn SlbVirtualServerPortStatsSmtpVport#curr_conn}
  */
  readonly currConn?: number;
  /**
  * Data size less than 128KB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#data_sz_128k SlbVirtualServerPortStatsSmtpVport#data_sz_128k}
  */
  readonly dataSz128K?: number;
  /**
  * Data size less than 16KB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#data_sz_16k SlbVirtualServerPortStatsSmtpVport#data_sz_16k}
  */
  readonly dataSz16K?: number;
  /**
  * Data size less than 1KB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#data_sz_1k SlbVirtualServerPortStatsSmtpVport#data_sz_1k}
  */
  readonly dataSz1K?: number;
  /**
  * Data size less than 1MB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#data_sz_1m SlbVirtualServerPortStatsSmtpVport#data_sz_1m}
  */
  readonly dataSz1M?: number;
  /**
  * Data size less than 256KB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#data_sz_256k SlbVirtualServerPortStatsSmtpVport#data_sz_256k}
  */
  readonly dataSz256K?: number;
  /**
  * Data size less than 2KB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#data_sz_2k SlbVirtualServerPortStatsSmtpVport#data_sz_2k}
  */
  readonly dataSz2K?: number;
  /**
  * Data size less than 32KB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#data_sz_32k SlbVirtualServerPortStatsSmtpVport#data_sz_32k}
  */
  readonly dataSz32K?: number;
  /**
  * Data size less than 4KB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#data_sz_4k SlbVirtualServerPortStatsSmtpVport#data_sz_4k}
  */
  readonly dataSz4K?: number;
  /**
  * Data size less than 512KB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#data_sz_512k SlbVirtualServerPortStatsSmtpVport#data_sz_512k}
  */
  readonly dataSz512K?: number;
  /**
  * Data size less than 64KB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#data_sz_64k SlbVirtualServerPortStatsSmtpVport#data_sz_64k}
  */
  readonly dataSz64K?: number;
  /**
  * Data size less than 8KB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#data_sz_8k SlbVirtualServerPortStatsSmtpVport#data_sz_8k}
  */
  readonly dataSz8K?: number;
  /**
  * Data size greater than 1MB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#data_sz_gt_1m SlbVirtualServerPortStatsSmtpVport#data_sz_gt_1m}
  */
  readonly dataSzGt1M?: number;
  /**
  * Server EHLO-OK dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#drop_server_ehlo_ok SlbVirtualServerPortStatsSmtpVport#drop_server_ehlo_ok}
  */
  readonly dropServerEhloOk?: number;
  /**
  * Failed to save client EHLO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#fail_to_save_client_ehlo SlbVirtualServerPortStatsSmtpVport#fail_to_save_client_ehlo}
  */
  readonly failToSaveClientEhlo?: number;
  /**
  * Forward REQ data failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#forward_req_data_fail SlbVirtualServerPortStatsSmtpVport#forward_req_data_fail}
  */
  readonly forwardReqDataFail?: number;
  /**
  * Forward request failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#forward_req_fail SlbVirtualServerPortStatsSmtpVport#forward_req_fail}
  */
  readonly forwardReqFail?: number;
  /**
  * Get all headers fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#get_all_headers_fail SlbVirtualServerPortStatsSmtpVport#get_all_headers_fail}
  */
  readonly fetchAllHeadersFail?: number;
  /**
  * Ins response line fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#insert_resonse_line_fail SlbVirtualServerPortStatsSmtpVport#insert_resonse_line_fail}
  */
  readonly insertResonseLineFail?: number;
  /**
  * L4 switching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#l4_switch SlbVirtualServerPortStatsSmtpVport#l4_switch}
  */
  readonly l4Switch?: number;
  /**
  * LB switching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#lb_switch SlbVirtualServerPortStatsSmtpVport#lb_switch}
  */
  readonly lbSwitch?: number;
  /**
  * LB switching (succ)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#lb_switch_ok SlbVirtualServerPortStatsSmtpVport#lb_switch_ok}
  */
  readonly lbSwitchOk?: number;
  /**
  * Line across packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#line_across_packet SlbVirtualServerPortStatsSmtpVport#line_across_packet}
  */
  readonly lineAcrossPacket?: number;
  /**
  * Line extend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#line_extend SlbVirtualServerPortStatsSmtpVport#line_extend}
  */
  readonly lineExtend?: number;
  /**
  * Line extend fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#line_extend_fail SlbVirtualServerPortStatsSmtpVport#line_extend_fail}
  */
  readonly lineExtendFail?: number;
  /**
  * Table extend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#line_table_extend SlbVirtualServerPortStatsSmtpVport#line_table_extend}
  */
  readonly lineTableExtend?: number;
  /**
  * Table extend fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#line_table_extend_fail SlbVirtualServerPortStatsSmtpVport#line_table_extend_fail}
  */
  readonly lineTableExtendFail?: number;
  /**
  * Line too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#line_too_long SlbVirtualServerPortStatsSmtpVport#line_too_long}
  */
  readonly lineTooLong?: number;
  /**
  * Server connection made
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#new_server_conn SlbVirtualServerPortStatsSmtpVport#new_server_conn}
  */
  readonly newServerConn?: number;
  /**
  * No proxy error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#no_proxy SlbVirtualServerPortStatsSmtpVport#no_proxy}
  */
  readonly noProxy?: number;
  /**
  * No tuple error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#no_tuple SlbVirtualServerPortStatsSmtpVport#no_tuple}
  */
  readonly noTuple?: number;
  /**
  * Parse request failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#parse_req_fail SlbVirtualServerPortStatsSmtpVport#parse_req_fail}
  */
  readonly parseReqFail?: number;
  /**
  * Parse request line fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#parse_request_line_fail SlbVirtualServerPortStatsSmtpVport#parse_request_line_fail}
  */
  readonly parseRequestLineFail?: number;
  /**
  * Parse response line fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#parse_resonse_line_fail SlbVirtualServerPortStatsSmtpVport#parse_resonse_line_fail}
  */
  readonly parseResonseLineFail?: number;
  /**
  * Largest number of concurrent SMTP connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#peak_conn SlbVirtualServerPortStatsSmtpVport#peak_conn}
  */
  readonly peakConn?: number;
  /**
  * Read request line fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#read_request_line_fail SlbVirtualServerPortStatsSmtpVport#read_request_line_fail}
  */
  readonly readRequestLineFail?: number;
  /**
  * Recv client ETRN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#recv_client_command_etrn SlbVirtualServerPortStatsSmtpVport#recv_client_command_etrn}
  */
  readonly recvClientCommandEtrn?: number;
  /**
  * Recv client other cmds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#recv_client_command_others SlbVirtualServerPortStatsSmtpVport#recv_client_command_others}
  */
  readonly recvClientCommandOthers?: number;
  /**
  * Recv client RCPT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#recv_client_command_rcpt SlbVirtualServerPortStatsSmtpVport#recv_client_command_rcpt}
  */
  readonly recvClientCommandRcpt?: number;
  /**
  * Recv client STARTTLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#recv_client_command_starttls SlbVirtualServerPortStatsSmtpVport#recv_client_command_starttls}
  */
  readonly recvClientCommandStarttls?: number;
  /**
  * Recv client TURN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#recv_client_command_turn SlbVirtualServerPortStatsSmtpVport#recv_client_command_turn}
  */
  readonly recvClientCommandTurn?: number;
  /**
  * Recv server serv-not-rdy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#recv_server_service_not_ready SlbVirtualServerPortStatsSmtpVport#recv_server_service_not_ready}
  */
  readonly recvServerServiceNotReady?: number;
  /**
  * Recv server unknown-code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#recv_server_unknow_reply_code SlbVirtualServerPortStatsSmtpVport#recv_server_unknow_reply_code}
  */
  readonly recvServerUnknowReplyCode?: number;
  /**
  * Del response line fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#remove_resonse_line_fail SlbVirtualServerPortStatsSmtpVport#remove_resonse_line_fail}
  */
  readonly removeResonseLineFail?: number;
  /**
  * Reply time less than 100m
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#reply_100m SlbVirtualServerPortStatsSmtpVport#reply_100m}
  */
  readonly reply100M?: number;
  /**
  * Reply time less than 100u
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#reply_100u SlbVirtualServerPortStatsSmtpVport#reply_100u}
  */
  readonly reply100U?: number;
  /**
  * Reply time less than 10m
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#reply_10m SlbVirtualServerPortStatsSmtpVport#reply_10m}
  */
  readonly reply10M?: number;
  /**
  * Reply time less than 10u
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#reply_10u SlbVirtualServerPortStatsSmtpVport#reply_10u}
  */
  readonly reply10U?: number;
  /**
  * Reply time less than 1m
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#reply_1m SlbVirtualServerPortStatsSmtpVport#reply_1m}
  */
  readonly reply1M?: number;
  /**
  * Reply time less than 1s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#reply_1s SlbVirtualServerPortStatsSmtpVport#reply_1s}
  */
  readonly reply1S?: number;
  /**
  * Reply time less than 200m
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#reply_200m SlbVirtualServerPortStatsSmtpVport#reply_200m}
  */
  readonly reply200M?: number;
  /**
  * Reply time less than 200u
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#reply_200u SlbVirtualServerPortStatsSmtpVport#reply_200u}
  */
  readonly reply200U?: number;
  /**
  * Reply time less than 20m
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#reply_20m SlbVirtualServerPortStatsSmtpVport#reply_20m}
  */
  readonly reply20M?: number;
  /**
  * Reply time less than 20u
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#reply_20u SlbVirtualServerPortStatsSmtpVport#reply_20u}
  */
  readonly reply20U?: number;
  /**
  * Reply time less than 2m
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#reply_2m SlbVirtualServerPortStatsSmtpVport#reply_2m}
  */
  readonly reply2M?: number;
  /**
  * Reply time less than 2s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#reply_2s SlbVirtualServerPortStatsSmtpVport#reply_2s}
  */
  readonly reply2S?: number;
  /**
  * Reply time less than 500m
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#reply_500m SlbVirtualServerPortStatsSmtpVport#reply_500m}
  */
  readonly reply500M?: number;
  /**
  * Reply time less than 500u
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#reply_500u SlbVirtualServerPortStatsSmtpVport#reply_500u}
  */
  readonly reply500U?: number;
  /**
  * Reply time less than 5m
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#reply_50m SlbVirtualServerPortStatsSmtpVport#reply_50m}
  */
  readonly reply50M?: number;
  /**
  * Reply time less than 50u
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#reply_50u SlbVirtualServerPortStatsSmtpVport#reply_50u}
  */
  readonly reply50U?: number;
  /**
  * Reply time less than 5m
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#reply_5m SlbVirtualServerPortStatsSmtpVport#reply_5m}
  */
  readonly reply5M?: number;
  /**
  * Reply time less than 5s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#reply_5s SlbVirtualServerPortStatsSmtpVport#reply_5s}
  */
  readonly reply5S?: number;
  /**
  * Reply time greater than equal to 5s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#reply_over_5s SlbVirtualServerPortStatsSmtpVport#reply_over_5s}
  */
  readonly replyOver5S?: number;
  /**
  * Request pkt out-of-order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#req_ofo SlbVirtualServerPortStatsSmtpVport#req_ofo}
  */
  readonly reqOfo?: number;
  /**
  * Request retransmit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#req_retran SlbVirtualServerPortStatsSmtpVport#req_retran}
  */
  readonly reqRetran?: number;
  /**
  * SMTP requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#request SlbVirtualServerPortStatsSmtpVport#request}
  */
  readonly request?: number;
  /**
  * SMTP requests (success)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#request_success SlbVirtualServerPortStatsSmtpVport#request_success}
  */
  readonly requestSuccess?: number;
  /**
  * real server not support STARTTLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#rserver_starttls_disable SlbVirtualServerPortStatsSmtpVport#rserver_starttls_disable}
  */
  readonly rserverStarttlsDisable?: number;
  /**
  * Sent client close-conn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#send_client_close_connection SlbVirtualServerPortStatsSmtpVport#send_client_close_connection}
  */
  readonly sendClientCloseConnection?: number;
  /**
  * Sent client go-ahead
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#send_client_go_ahead SlbVirtualServerPortStatsSmtpVport#send_client_go_ahead}
  */
  readonly sendClientGoAhead?: number;
  /**
  * Sent client no-such-cmd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#send_client_no_command SlbVirtualServerPortStatsSmtpVport#send_client_no_command}
  */
  readonly sendClientNoCommand?: number;
  /**
  * Sent client serv-not-rdy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#send_client_service_not_ready SlbVirtualServerPortStatsSmtpVport#send_client_service_not_ready}
  */
  readonly sendClientServiceNotReady?: number;
  /**
  * Sent client serv-rdy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#send_client_service_ready SlbVirtualServerPortStatsSmtpVport#send_client_service_ready}
  */
  readonly sendClientServiceReady?: number;
  /**
  * Sent client STARTTLS-1st
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#send_client_start_tls_first SlbVirtualServerPortStatsSmtpVport#send_client_start_tls_first}
  */
  readonly sendClientStartTlsFirst?: number;
  /**
  * Sent client TLS-not-aval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#send_client_tls_not_available SlbVirtualServerPortStatsSmtpVport#send_client_tls_not_available}
  */
  readonly sendClientTlsNotAvailable?: number;
  /**
  * Sent server RSET
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#send_server_cmd_reset SlbVirtualServerPortStatsSmtpVport#send_server_cmd_reset}
  */
  readonly sendServerCmdReset?: number;
  /**
  * Proxy sends server EHLO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#send_server_ehlo SlbVirtualServerPortStatsSmtpVport#send_server_ehlo}
  */
  readonly sendServerEhlo?: number;
  /**
  * Total bytes in SMTP replies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#server_bytes SlbVirtualServerPortStatsSmtpVport#server_bytes}
  */
  readonly serverBytes?: number;
  /**
  * Server premature close
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#server_prem_close SlbVirtualServerPortStatsSmtpVport#server_prem_close}
  */
  readonly serverPremClose?: number;
  /**
  * Server reselection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#server_reselect SlbVirtualServerPortStatsSmtpVport#server_reselect}
  */
  readonly serverReselect?: number;
  /**
  * Server reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#server_reset SlbVirtualServerPortStatsSmtpVport#server_reset}
  */
  readonly serverReset?: number;
  /**
  * Server selection failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#server_select_fail SlbVirtualServerPortStatsSmtpVport#server_select_fail}
  */
  readonly serverSelectFail?: number;
  /**
  * Server side STARTTLS fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#server_starttls_fail SlbVirtualServerPortStatsSmtpVport#server_starttls_fail}
  */
  readonly serverStarttlsFail?: number;
  /**
  * Init server side STARTTLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#server_starttls_init SlbVirtualServerPortStatsSmtpVport#server_starttls_init}
  */
  readonly serverStarttlsInit?: number;
  /**
  * Source NAT failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#snat_fail SlbVirtualServerPortStatsSmtpVport#snat_fail}
  */
  readonly snatFail?: number;
  /**
  * TCP out reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#tcp_out_reset SlbVirtualServerPortStatsSmtpVport#tcp_out_reset}
  */
  readonly tcpOutReset?: number;
  /**
  * SSL session established
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#tls_established SlbVirtualServerPortStatsSmtpVport#tls_established}
  */
  readonly tlsEstablished?: number;
  /**
  * Too many headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#too_many_headers SlbVirtualServerPortStatsSmtpVport#too_many_headers}
  */
  readonly tooManyHeaders?: number;
  /**
  * Total number of commands received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#total_commands SlbVirtualServerPortStatsSmtpVport#total_commands}
  */
  readonly totalCommands?: number;
  /**
  * Total number of SMTP connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#total_conn SlbVirtualServerPortStatsSmtpVport#total_conn}
  */
  readonly totalConn?: number;
  /**
  * Total number of replies received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#total_replies SlbVirtualServerPortStatsSmtpVport#total_replies}
  */
  readonly totalReplies?: number;
}

export function slbVirtualServerPortStatsSmtpVportStatsSmtpVportToTerraform(struct?: SlbVirtualServerPortStatsSmtpVportStatsSmtpVportOutputReference | SlbVirtualServerPortStatsSmtpVportStatsSmtpVport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aflex_ehlo_sent: cdktf.numberToTerraform(struct!.aflexEhloSent),
    aflex_lb_reselect: cdktf.numberToTerraform(struct!.aflexLbReselect),
    aflex_lb_reselect_ok: cdktf.numberToTerraform(struct!.aflexLbReselectOk),
    aflex_mail_fail: cdktf.numberToTerraform(struct!.aflexMailFail),
    aflex_switch: cdktf.numberToTerraform(struct!.aflexSwitch),
    aflex_switch_ok: cdktf.numberToTerraform(struct!.aflexSwitchOk),
    client_bytes: cdktf.numberToTerraform(struct!.clientBytes),
    client_domain_switch: cdktf.numberToTerraform(struct!.clientDomainSwitch),
    client_domain_switch_ok: cdktf.numberToTerraform(struct!.clientDomainSwitchOk),
    client_ehlo_saved: cdktf.numberToTerraform(struct!.clientEhloSaved),
    client_reset: cdktf.numberToTerraform(struct!.clientReset),
    cmd_data: cdktf.numberToTerraform(struct!.cmdData),
    cmd_ehlo: cdktf.numberToTerraform(struct!.cmdEhlo),
    cmd_etrn: cdktf.numberToTerraform(struct!.cmdEtrn),
    cmd_expn: cdktf.numberToTerraform(struct!.cmdExpn),
    cmd_helo: cdktf.numberToTerraform(struct!.cmdHelo),
    cmd_help: cdktf.numberToTerraform(struct!.cmdHelp),
    cmd_local: cdktf.numberToTerraform(struct!.cmdLocal),
    cmd_mail: cdktf.numberToTerraform(struct!.cmdMail),
    cmd_noop: cdktf.numberToTerraform(struct!.cmdNoop),
    cmd_quit: cdktf.numberToTerraform(struct!.cmdQuit),
    cmd_rcpt: cdktf.numberToTerraform(struct!.cmdRcpt),
    cmd_rset: cdktf.numberToTerraform(struct!.cmdRset),
    cmd_starttls: cdktf.numberToTerraform(struct!.cmdStarttls),
    cmd_turn: cdktf.numberToTerraform(struct!.cmdTurn),
    cmd_unknown: cdktf.numberToTerraform(struct!.cmdUnknown),
    cmd_vrfy: cdktf.numberToTerraform(struct!.cmdVrfy),
    code_200: cdktf.numberToTerraform(struct!.code200),
    code_211: cdktf.numberToTerraform(struct!.code211),
    code_214: cdktf.numberToTerraform(struct!.code214),
    code_220: cdktf.numberToTerraform(struct!.code220),
    code_221: cdktf.numberToTerraform(struct!.code221),
    code_250: cdktf.numberToTerraform(struct!.code250),
    code_251: cdktf.numberToTerraform(struct!.code251),
    code_252: cdktf.numberToTerraform(struct!.code252),
    code_2xx: cdktf.numberToTerraform(struct!.code2Xx),
    code_354: cdktf.numberToTerraform(struct!.code354),
    code_3xx: cdktf.numberToTerraform(struct!.code3Xx),
    code_421: cdktf.numberToTerraform(struct!.code421),
    code_450: cdktf.numberToTerraform(struct!.code450),
    code_451: cdktf.numberToTerraform(struct!.code451),
    code_452: cdktf.numberToTerraform(struct!.code452),
    code_455: cdktf.numberToTerraform(struct!.code455),
    code_4xx: cdktf.numberToTerraform(struct!.code4Xx),
    code_500: cdktf.numberToTerraform(struct!.code500),
    code_501: cdktf.numberToTerraform(struct!.code501),
    code_502: cdktf.numberToTerraform(struct!.code502),
    code_503: cdktf.numberToTerraform(struct!.code503),
    code_504: cdktf.numberToTerraform(struct!.code504),
    code_521: cdktf.numberToTerraform(struct!.code521),
    code_530: cdktf.numberToTerraform(struct!.code530),
    code_550: cdktf.numberToTerraform(struct!.code550),
    code_551: cdktf.numberToTerraform(struct!.code551),
    code_552: cdktf.numberToTerraform(struct!.code552),
    code_553: cdktf.numberToTerraform(struct!.code553),
    code_554: cdktf.numberToTerraform(struct!.code554),
    code_555: cdktf.numberToTerraform(struct!.code555),
    code_556: cdktf.numberToTerraform(struct!.code556),
    code_5xx: cdktf.numberToTerraform(struct!.code5Xx),
    code_unknown: cdktf.numberToTerraform(struct!.codeUnknown),
    curr_conn: cdktf.numberToTerraform(struct!.currConn),
    data_sz_128k: cdktf.numberToTerraform(struct!.dataSz128K),
    data_sz_16k: cdktf.numberToTerraform(struct!.dataSz16K),
    data_sz_1k: cdktf.numberToTerraform(struct!.dataSz1K),
    data_sz_1m: cdktf.numberToTerraform(struct!.dataSz1M),
    data_sz_256k: cdktf.numberToTerraform(struct!.dataSz256K),
    data_sz_2k: cdktf.numberToTerraform(struct!.dataSz2K),
    data_sz_32k: cdktf.numberToTerraform(struct!.dataSz32K),
    data_sz_4k: cdktf.numberToTerraform(struct!.dataSz4K),
    data_sz_512k: cdktf.numberToTerraform(struct!.dataSz512K),
    data_sz_64k: cdktf.numberToTerraform(struct!.dataSz64K),
    data_sz_8k: cdktf.numberToTerraform(struct!.dataSz8K),
    data_sz_gt_1m: cdktf.numberToTerraform(struct!.dataSzGt1M),
    drop_server_ehlo_ok: cdktf.numberToTerraform(struct!.dropServerEhloOk),
    fail_to_save_client_ehlo: cdktf.numberToTerraform(struct!.failToSaveClientEhlo),
    forward_req_data_fail: cdktf.numberToTerraform(struct!.forwardReqDataFail),
    forward_req_fail: cdktf.numberToTerraform(struct!.forwardReqFail),
    get_all_headers_fail: cdktf.numberToTerraform(struct!.fetchAllHeadersFail),
    insert_resonse_line_fail: cdktf.numberToTerraform(struct!.insertResonseLineFail),
    l4_switch: cdktf.numberToTerraform(struct!.l4Switch),
    lb_switch: cdktf.numberToTerraform(struct!.lbSwitch),
    lb_switch_ok: cdktf.numberToTerraform(struct!.lbSwitchOk),
    line_across_packet: cdktf.numberToTerraform(struct!.lineAcrossPacket),
    line_extend: cdktf.numberToTerraform(struct!.lineExtend),
    line_extend_fail: cdktf.numberToTerraform(struct!.lineExtendFail),
    line_table_extend: cdktf.numberToTerraform(struct!.lineTableExtend),
    line_table_extend_fail: cdktf.numberToTerraform(struct!.lineTableExtendFail),
    line_too_long: cdktf.numberToTerraform(struct!.lineTooLong),
    new_server_conn: cdktf.numberToTerraform(struct!.newServerConn),
    no_proxy: cdktf.numberToTerraform(struct!.noProxy),
    no_tuple: cdktf.numberToTerraform(struct!.noTuple),
    parse_req_fail: cdktf.numberToTerraform(struct!.parseReqFail),
    parse_request_line_fail: cdktf.numberToTerraform(struct!.parseRequestLineFail),
    parse_resonse_line_fail: cdktf.numberToTerraform(struct!.parseResonseLineFail),
    peak_conn: cdktf.numberToTerraform(struct!.peakConn),
    read_request_line_fail: cdktf.numberToTerraform(struct!.readRequestLineFail),
    recv_client_command_etrn: cdktf.numberToTerraform(struct!.recvClientCommandEtrn),
    recv_client_command_others: cdktf.numberToTerraform(struct!.recvClientCommandOthers),
    recv_client_command_rcpt: cdktf.numberToTerraform(struct!.recvClientCommandRcpt),
    recv_client_command_starttls: cdktf.numberToTerraform(struct!.recvClientCommandStarttls),
    recv_client_command_turn: cdktf.numberToTerraform(struct!.recvClientCommandTurn),
    recv_server_service_not_ready: cdktf.numberToTerraform(struct!.recvServerServiceNotReady),
    recv_server_unknow_reply_code: cdktf.numberToTerraform(struct!.recvServerUnknowReplyCode),
    remove_resonse_line_fail: cdktf.numberToTerraform(struct!.removeResonseLineFail),
    reply_100m: cdktf.numberToTerraform(struct!.reply100M),
    reply_100u: cdktf.numberToTerraform(struct!.reply100U),
    reply_10m: cdktf.numberToTerraform(struct!.reply10M),
    reply_10u: cdktf.numberToTerraform(struct!.reply10U),
    reply_1m: cdktf.numberToTerraform(struct!.reply1M),
    reply_1s: cdktf.numberToTerraform(struct!.reply1S),
    reply_200m: cdktf.numberToTerraform(struct!.reply200M),
    reply_200u: cdktf.numberToTerraform(struct!.reply200U),
    reply_20m: cdktf.numberToTerraform(struct!.reply20M),
    reply_20u: cdktf.numberToTerraform(struct!.reply20U),
    reply_2m: cdktf.numberToTerraform(struct!.reply2M),
    reply_2s: cdktf.numberToTerraform(struct!.reply2S),
    reply_500m: cdktf.numberToTerraform(struct!.reply500M),
    reply_500u: cdktf.numberToTerraform(struct!.reply500U),
    reply_50m: cdktf.numberToTerraform(struct!.reply50M),
    reply_50u: cdktf.numberToTerraform(struct!.reply50U),
    reply_5m: cdktf.numberToTerraform(struct!.reply5M),
    reply_5s: cdktf.numberToTerraform(struct!.reply5S),
    reply_over_5s: cdktf.numberToTerraform(struct!.replyOver5S),
    req_ofo: cdktf.numberToTerraform(struct!.reqOfo),
    req_retran: cdktf.numberToTerraform(struct!.reqRetran),
    request: cdktf.numberToTerraform(struct!.request),
    request_success: cdktf.numberToTerraform(struct!.requestSuccess),
    rserver_starttls_disable: cdktf.numberToTerraform(struct!.rserverStarttlsDisable),
    send_client_close_connection: cdktf.numberToTerraform(struct!.sendClientCloseConnection),
    send_client_go_ahead: cdktf.numberToTerraform(struct!.sendClientGoAhead),
    send_client_no_command: cdktf.numberToTerraform(struct!.sendClientNoCommand),
    send_client_service_not_ready: cdktf.numberToTerraform(struct!.sendClientServiceNotReady),
    send_client_service_ready: cdktf.numberToTerraform(struct!.sendClientServiceReady),
    send_client_start_tls_first: cdktf.numberToTerraform(struct!.sendClientStartTlsFirst),
    send_client_tls_not_available: cdktf.numberToTerraform(struct!.sendClientTlsNotAvailable),
    send_server_cmd_reset: cdktf.numberToTerraform(struct!.sendServerCmdReset),
    send_server_ehlo: cdktf.numberToTerraform(struct!.sendServerEhlo),
    server_bytes: cdktf.numberToTerraform(struct!.serverBytes),
    server_prem_close: cdktf.numberToTerraform(struct!.serverPremClose),
    server_reselect: cdktf.numberToTerraform(struct!.serverReselect),
    server_reset: cdktf.numberToTerraform(struct!.serverReset),
    server_select_fail: cdktf.numberToTerraform(struct!.serverSelectFail),
    server_starttls_fail: cdktf.numberToTerraform(struct!.serverStarttlsFail),
    server_starttls_init: cdktf.numberToTerraform(struct!.serverStarttlsInit),
    snat_fail: cdktf.numberToTerraform(struct!.snatFail),
    tcp_out_reset: cdktf.numberToTerraform(struct!.tcpOutReset),
    tls_established: cdktf.numberToTerraform(struct!.tlsEstablished),
    too_many_headers: cdktf.numberToTerraform(struct!.tooManyHeaders),
    total_commands: cdktf.numberToTerraform(struct!.totalCommands),
    total_conn: cdktf.numberToTerraform(struct!.totalConn),
    total_replies: cdktf.numberToTerraform(struct!.totalReplies),
  }
}


export function slbVirtualServerPortStatsSmtpVportStatsSmtpVportToHclTerraform(struct?: SlbVirtualServerPortStatsSmtpVportStatsSmtpVportOutputReference | SlbVirtualServerPortStatsSmtpVportStatsSmtpVport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aflex_ehlo_sent: {
      value: cdktf.numberToHclTerraform(struct!.aflexEhloSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aflex_lb_reselect: {
      value: cdktf.numberToHclTerraform(struct!.aflexLbReselect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aflex_lb_reselect_ok: {
      value: cdktf.numberToHclTerraform(struct!.aflexLbReselectOk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aflex_mail_fail: {
      value: cdktf.numberToHclTerraform(struct!.aflexMailFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aflex_switch: {
      value: cdktf.numberToHclTerraform(struct!.aflexSwitch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aflex_switch_ok: {
      value: cdktf.numberToHclTerraform(struct!.aflexSwitchOk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_bytes: {
      value: cdktf.numberToHclTerraform(struct!.clientBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_domain_switch: {
      value: cdktf.numberToHclTerraform(struct!.clientDomainSwitch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_domain_switch_ok: {
      value: cdktf.numberToHclTerraform(struct!.clientDomainSwitchOk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_ehlo_saved: {
      value: cdktf.numberToHclTerraform(struct!.clientEhloSaved),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_reset: {
      value: cdktf.numberToHclTerraform(struct!.clientReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cmd_data: {
      value: cdktf.numberToHclTerraform(struct!.cmdData),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cmd_ehlo: {
      value: cdktf.numberToHclTerraform(struct!.cmdEhlo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cmd_etrn: {
      value: cdktf.numberToHclTerraform(struct!.cmdEtrn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cmd_expn: {
      value: cdktf.numberToHclTerraform(struct!.cmdExpn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cmd_helo: {
      value: cdktf.numberToHclTerraform(struct!.cmdHelo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cmd_help: {
      value: cdktf.numberToHclTerraform(struct!.cmdHelp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cmd_local: {
      value: cdktf.numberToHclTerraform(struct!.cmdLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cmd_mail: {
      value: cdktf.numberToHclTerraform(struct!.cmdMail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cmd_noop: {
      value: cdktf.numberToHclTerraform(struct!.cmdNoop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cmd_quit: {
      value: cdktf.numberToHclTerraform(struct!.cmdQuit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cmd_rcpt: {
      value: cdktf.numberToHclTerraform(struct!.cmdRcpt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cmd_rset: {
      value: cdktf.numberToHclTerraform(struct!.cmdRset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cmd_starttls: {
      value: cdktf.numberToHclTerraform(struct!.cmdStarttls),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cmd_turn: {
      value: cdktf.numberToHclTerraform(struct!.cmdTurn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cmd_unknown: {
      value: cdktf.numberToHclTerraform(struct!.cmdUnknown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cmd_vrfy: {
      value: cdktf.numberToHclTerraform(struct!.cmdVrfy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    code_200: {
      value: cdktf.numberToHclTerraform(struct!.code200),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    code_211: {
      value: cdktf.numberToHclTerraform(struct!.code211),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    code_214: {
      value: cdktf.numberToHclTerraform(struct!.code214),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    code_220: {
      value: cdktf.numberToHclTerraform(struct!.code220),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    code_221: {
      value: cdktf.numberToHclTerraform(struct!.code221),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    code_250: {
      value: cdktf.numberToHclTerraform(struct!.code250),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    code_251: {
      value: cdktf.numberToHclTerraform(struct!.code251),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    code_252: {
      value: cdktf.numberToHclTerraform(struct!.code252),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    code_2xx: {
      value: cdktf.numberToHclTerraform(struct!.code2Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    code_354: {
      value: cdktf.numberToHclTerraform(struct!.code354),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    code_3xx: {
      value: cdktf.numberToHclTerraform(struct!.code3Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    code_421: {
      value: cdktf.numberToHclTerraform(struct!.code421),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    code_450: {
      value: cdktf.numberToHclTerraform(struct!.code450),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    code_451: {
      value: cdktf.numberToHclTerraform(struct!.code451),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    code_452: {
      value: cdktf.numberToHclTerraform(struct!.code452),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    code_455: {
      value: cdktf.numberToHclTerraform(struct!.code455),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    code_4xx: {
      value: cdktf.numberToHclTerraform(struct!.code4Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    code_500: {
      value: cdktf.numberToHclTerraform(struct!.code500),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    code_501: {
      value: cdktf.numberToHclTerraform(struct!.code501),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    code_502: {
      value: cdktf.numberToHclTerraform(struct!.code502),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    code_503: {
      value: cdktf.numberToHclTerraform(struct!.code503),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    code_504: {
      value: cdktf.numberToHclTerraform(struct!.code504),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    code_521: {
      value: cdktf.numberToHclTerraform(struct!.code521),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    code_530: {
      value: cdktf.numberToHclTerraform(struct!.code530),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    code_550: {
      value: cdktf.numberToHclTerraform(struct!.code550),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    code_551: {
      value: cdktf.numberToHclTerraform(struct!.code551),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    code_552: {
      value: cdktf.numberToHclTerraform(struct!.code552),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    code_553: {
      value: cdktf.numberToHclTerraform(struct!.code553),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    code_554: {
      value: cdktf.numberToHclTerraform(struct!.code554),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    code_555: {
      value: cdktf.numberToHclTerraform(struct!.code555),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    code_556: {
      value: cdktf.numberToHclTerraform(struct!.code556),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    code_5xx: {
      value: cdktf.numberToHclTerraform(struct!.code5Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    code_unknown: {
      value: cdktf.numberToHclTerraform(struct!.codeUnknown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_conn: {
      value: cdktf.numberToHclTerraform(struct!.currConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_sz_128k: {
      value: cdktf.numberToHclTerraform(struct!.dataSz128K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_sz_16k: {
      value: cdktf.numberToHclTerraform(struct!.dataSz16K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_sz_1k: {
      value: cdktf.numberToHclTerraform(struct!.dataSz1K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_sz_1m: {
      value: cdktf.numberToHclTerraform(struct!.dataSz1M),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_sz_256k: {
      value: cdktf.numberToHclTerraform(struct!.dataSz256K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_sz_2k: {
      value: cdktf.numberToHclTerraform(struct!.dataSz2K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_sz_32k: {
      value: cdktf.numberToHclTerraform(struct!.dataSz32K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_sz_4k: {
      value: cdktf.numberToHclTerraform(struct!.dataSz4K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_sz_512k: {
      value: cdktf.numberToHclTerraform(struct!.dataSz512K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_sz_64k: {
      value: cdktf.numberToHclTerraform(struct!.dataSz64K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_sz_8k: {
      value: cdktf.numberToHclTerraform(struct!.dataSz8K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_sz_gt_1m: {
      value: cdktf.numberToHclTerraform(struct!.dataSzGt1M),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_server_ehlo_ok: {
      value: cdktf.numberToHclTerraform(struct!.dropServerEhloOk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fail_to_save_client_ehlo: {
      value: cdktf.numberToHclTerraform(struct!.failToSaveClientEhlo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    forward_req_data_fail: {
      value: cdktf.numberToHclTerraform(struct!.forwardReqDataFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    forward_req_fail: {
      value: cdktf.numberToHclTerraform(struct!.forwardReqFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    get_all_headers_fail: {
      value: cdktf.numberToHclTerraform(struct!.fetchAllHeadersFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    insert_resonse_line_fail: {
      value: cdktf.numberToHclTerraform(struct!.insertResonseLineFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_switch: {
      value: cdktf.numberToHclTerraform(struct!.l4Switch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lb_switch: {
      value: cdktf.numberToHclTerraform(struct!.lbSwitch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lb_switch_ok: {
      value: cdktf.numberToHclTerraform(struct!.lbSwitchOk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    line_across_packet: {
      value: cdktf.numberToHclTerraform(struct!.lineAcrossPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    line_extend: {
      value: cdktf.numberToHclTerraform(struct!.lineExtend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    line_extend_fail: {
      value: cdktf.numberToHclTerraform(struct!.lineExtendFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    line_table_extend: {
      value: cdktf.numberToHclTerraform(struct!.lineTableExtend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    line_table_extend_fail: {
      value: cdktf.numberToHclTerraform(struct!.lineTableExtendFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    line_too_long: {
      value: cdktf.numberToHclTerraform(struct!.lineTooLong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_server_conn: {
      value: cdktf.numberToHclTerraform(struct!.newServerConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_proxy: {
      value: cdktf.numberToHclTerraform(struct!.noProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_tuple: {
      value: cdktf.numberToHclTerraform(struct!.noTuple),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_req_fail: {
      value: cdktf.numberToHclTerraform(struct!.parseReqFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_request_line_fail: {
      value: cdktf.numberToHclTerraform(struct!.parseRequestLineFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_resonse_line_fail: {
      value: cdktf.numberToHclTerraform(struct!.parseResonseLineFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peak_conn: {
      value: cdktf.numberToHclTerraform(struct!.peakConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_request_line_fail: {
      value: cdktf.numberToHclTerraform(struct!.readRequestLineFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_client_command_etrn: {
      value: cdktf.numberToHclTerraform(struct!.recvClientCommandEtrn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_client_command_others: {
      value: cdktf.numberToHclTerraform(struct!.recvClientCommandOthers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_client_command_rcpt: {
      value: cdktf.numberToHclTerraform(struct!.recvClientCommandRcpt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_client_command_starttls: {
      value: cdktf.numberToHclTerraform(struct!.recvClientCommandStarttls),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_client_command_turn: {
      value: cdktf.numberToHclTerraform(struct!.recvClientCommandTurn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_server_service_not_ready: {
      value: cdktf.numberToHclTerraform(struct!.recvServerServiceNotReady),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_server_unknow_reply_code: {
      value: cdktf.numberToHclTerraform(struct!.recvServerUnknowReplyCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remove_resonse_line_fail: {
      value: cdktf.numberToHclTerraform(struct!.removeResonseLineFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reply_100m: {
      value: cdktf.numberToHclTerraform(struct!.reply100M),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reply_100u: {
      value: cdktf.numberToHclTerraform(struct!.reply100U),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reply_10m: {
      value: cdktf.numberToHclTerraform(struct!.reply10M),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reply_10u: {
      value: cdktf.numberToHclTerraform(struct!.reply10U),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reply_1m: {
      value: cdktf.numberToHclTerraform(struct!.reply1M),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reply_1s: {
      value: cdktf.numberToHclTerraform(struct!.reply1S),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reply_200m: {
      value: cdktf.numberToHclTerraform(struct!.reply200M),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reply_200u: {
      value: cdktf.numberToHclTerraform(struct!.reply200U),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reply_20m: {
      value: cdktf.numberToHclTerraform(struct!.reply20M),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reply_20u: {
      value: cdktf.numberToHclTerraform(struct!.reply20U),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reply_2m: {
      value: cdktf.numberToHclTerraform(struct!.reply2M),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reply_2s: {
      value: cdktf.numberToHclTerraform(struct!.reply2S),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reply_500m: {
      value: cdktf.numberToHclTerraform(struct!.reply500M),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reply_500u: {
      value: cdktf.numberToHclTerraform(struct!.reply500U),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reply_50m: {
      value: cdktf.numberToHclTerraform(struct!.reply50M),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reply_50u: {
      value: cdktf.numberToHclTerraform(struct!.reply50U),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reply_5m: {
      value: cdktf.numberToHclTerraform(struct!.reply5M),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reply_5s: {
      value: cdktf.numberToHclTerraform(struct!.reply5S),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reply_over_5s: {
      value: cdktf.numberToHclTerraform(struct!.replyOver5S),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_ofo: {
      value: cdktf.numberToHclTerraform(struct!.reqOfo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_retran: {
      value: cdktf.numberToHclTerraform(struct!.reqRetran),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request: {
      value: cdktf.numberToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_success: {
      value: cdktf.numberToHclTerraform(struct!.requestSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rserver_starttls_disable: {
      value: cdktf.numberToHclTerraform(struct!.rserverStarttlsDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_client_close_connection: {
      value: cdktf.numberToHclTerraform(struct!.sendClientCloseConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_client_go_ahead: {
      value: cdktf.numberToHclTerraform(struct!.sendClientGoAhead),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_client_no_command: {
      value: cdktf.numberToHclTerraform(struct!.sendClientNoCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_client_service_not_ready: {
      value: cdktf.numberToHclTerraform(struct!.sendClientServiceNotReady),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_client_service_ready: {
      value: cdktf.numberToHclTerraform(struct!.sendClientServiceReady),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_client_start_tls_first: {
      value: cdktf.numberToHclTerraform(struct!.sendClientStartTlsFirst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_client_tls_not_available: {
      value: cdktf.numberToHclTerraform(struct!.sendClientTlsNotAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_server_cmd_reset: {
      value: cdktf.numberToHclTerraform(struct!.sendServerCmdReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_server_ehlo: {
      value: cdktf.numberToHclTerraform(struct!.sendServerEhlo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_bytes: {
      value: cdktf.numberToHclTerraform(struct!.serverBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_prem_close: {
      value: cdktf.numberToHclTerraform(struct!.serverPremClose),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_reselect: {
      value: cdktf.numberToHclTerraform(struct!.serverReselect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_reset: {
      value: cdktf.numberToHclTerraform(struct!.serverReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_select_fail: {
      value: cdktf.numberToHclTerraform(struct!.serverSelectFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_starttls_fail: {
      value: cdktf.numberToHclTerraform(struct!.serverStarttlsFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_starttls_init: {
      value: cdktf.numberToHclTerraform(struct!.serverStarttlsInit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snat_fail: {
      value: cdktf.numberToHclTerraform(struct!.snatFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_out_reset: {
      value: cdktf.numberToHclTerraform(struct!.tcpOutReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls_established: {
      value: cdktf.numberToHclTerraform(struct!.tlsEstablished),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    too_many_headers: {
      value: cdktf.numberToHclTerraform(struct!.tooManyHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_commands: {
      value: cdktf.numberToHclTerraform(struct!.totalCommands),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_conn: {
      value: cdktf.numberToHclTerraform(struct!.totalConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_replies: {
      value: cdktf.numberToHclTerraform(struct!.totalReplies),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbVirtualServerPortStatsSmtpVportStatsSmtpVportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbVirtualServerPortStatsSmtpVportStatsSmtpVport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aflexEhloSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexEhloSent = this._aflexEhloSent;
    }
    if (this._aflexLbReselect !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexLbReselect = this._aflexLbReselect;
    }
    if (this._aflexLbReselectOk !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexLbReselectOk = this._aflexLbReselectOk;
    }
    if (this._aflexMailFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexMailFail = this._aflexMailFail;
    }
    if (this._aflexSwitch !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexSwitch = this._aflexSwitch;
    }
    if (this._aflexSwitchOk !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexSwitchOk = this._aflexSwitchOk;
    }
    if (this._clientBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientBytes = this._clientBytes;
    }
    if (this._clientDomainSwitch !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientDomainSwitch = this._clientDomainSwitch;
    }
    if (this._clientDomainSwitchOk !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientDomainSwitchOk = this._clientDomainSwitchOk;
    }
    if (this._clientEhloSaved !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientEhloSaved = this._clientEhloSaved;
    }
    if (this._clientReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientReset = this._clientReset;
    }
    if (this._cmdData !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmdData = this._cmdData;
    }
    if (this._cmdEhlo !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmdEhlo = this._cmdEhlo;
    }
    if (this._cmdEtrn !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmdEtrn = this._cmdEtrn;
    }
    if (this._cmdExpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmdExpn = this._cmdExpn;
    }
    if (this._cmdHelo !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmdHelo = this._cmdHelo;
    }
    if (this._cmdHelp !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmdHelp = this._cmdHelp;
    }
    if (this._cmdLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmdLocal = this._cmdLocal;
    }
    if (this._cmdMail !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmdMail = this._cmdMail;
    }
    if (this._cmdNoop !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmdNoop = this._cmdNoop;
    }
    if (this._cmdQuit !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmdQuit = this._cmdQuit;
    }
    if (this._cmdRcpt !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmdRcpt = this._cmdRcpt;
    }
    if (this._cmdRset !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmdRset = this._cmdRset;
    }
    if (this._cmdStarttls !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmdStarttls = this._cmdStarttls;
    }
    if (this._cmdTurn !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmdTurn = this._cmdTurn;
    }
    if (this._cmdUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmdUnknown = this._cmdUnknown;
    }
    if (this._cmdVrfy !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmdVrfy = this._cmdVrfy;
    }
    if (this._code200 !== undefined) {
      hasAnyValues = true;
      internalValueResult.code200 = this._code200;
    }
    if (this._code211 !== undefined) {
      hasAnyValues = true;
      internalValueResult.code211 = this._code211;
    }
    if (this._code214 !== undefined) {
      hasAnyValues = true;
      internalValueResult.code214 = this._code214;
    }
    if (this._code220 !== undefined) {
      hasAnyValues = true;
      internalValueResult.code220 = this._code220;
    }
    if (this._code221 !== undefined) {
      hasAnyValues = true;
      internalValueResult.code221 = this._code221;
    }
    if (this._code250 !== undefined) {
      hasAnyValues = true;
      internalValueResult.code250 = this._code250;
    }
    if (this._code251 !== undefined) {
      hasAnyValues = true;
      internalValueResult.code251 = this._code251;
    }
    if (this._code252 !== undefined) {
      hasAnyValues = true;
      internalValueResult.code252 = this._code252;
    }
    if (this._code2Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.code2Xx = this._code2Xx;
    }
    if (this._code354 !== undefined) {
      hasAnyValues = true;
      internalValueResult.code354 = this._code354;
    }
    if (this._code3Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.code3Xx = this._code3Xx;
    }
    if (this._code421 !== undefined) {
      hasAnyValues = true;
      internalValueResult.code421 = this._code421;
    }
    if (this._code450 !== undefined) {
      hasAnyValues = true;
      internalValueResult.code450 = this._code450;
    }
    if (this._code451 !== undefined) {
      hasAnyValues = true;
      internalValueResult.code451 = this._code451;
    }
    if (this._code452 !== undefined) {
      hasAnyValues = true;
      internalValueResult.code452 = this._code452;
    }
    if (this._code455 !== undefined) {
      hasAnyValues = true;
      internalValueResult.code455 = this._code455;
    }
    if (this._code4Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.code4Xx = this._code4Xx;
    }
    if (this._code500 !== undefined) {
      hasAnyValues = true;
      internalValueResult.code500 = this._code500;
    }
    if (this._code501 !== undefined) {
      hasAnyValues = true;
      internalValueResult.code501 = this._code501;
    }
    if (this._code502 !== undefined) {
      hasAnyValues = true;
      internalValueResult.code502 = this._code502;
    }
    if (this._code503 !== undefined) {
      hasAnyValues = true;
      internalValueResult.code503 = this._code503;
    }
    if (this._code504 !== undefined) {
      hasAnyValues = true;
      internalValueResult.code504 = this._code504;
    }
    if (this._code521 !== undefined) {
      hasAnyValues = true;
      internalValueResult.code521 = this._code521;
    }
    if (this._code530 !== undefined) {
      hasAnyValues = true;
      internalValueResult.code530 = this._code530;
    }
    if (this._code550 !== undefined) {
      hasAnyValues = true;
      internalValueResult.code550 = this._code550;
    }
    if (this._code551 !== undefined) {
      hasAnyValues = true;
      internalValueResult.code551 = this._code551;
    }
    if (this._code552 !== undefined) {
      hasAnyValues = true;
      internalValueResult.code552 = this._code552;
    }
    if (this._code553 !== undefined) {
      hasAnyValues = true;
      internalValueResult.code553 = this._code553;
    }
    if (this._code554 !== undefined) {
      hasAnyValues = true;
      internalValueResult.code554 = this._code554;
    }
    if (this._code555 !== undefined) {
      hasAnyValues = true;
      internalValueResult.code555 = this._code555;
    }
    if (this._code556 !== undefined) {
      hasAnyValues = true;
      internalValueResult.code556 = this._code556;
    }
    if (this._code5Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.code5Xx = this._code5Xx;
    }
    if (this._codeUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeUnknown = this._codeUnknown;
    }
    if (this._currConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.currConn = this._currConn;
    }
    if (this._dataSz128K !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSz128K = this._dataSz128K;
    }
    if (this._dataSz16K !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSz16K = this._dataSz16K;
    }
    if (this._dataSz1K !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSz1K = this._dataSz1K;
    }
    if (this._dataSz1M !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSz1M = this._dataSz1M;
    }
    if (this._dataSz256K !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSz256K = this._dataSz256K;
    }
    if (this._dataSz2K !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSz2K = this._dataSz2K;
    }
    if (this._dataSz32K !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSz32K = this._dataSz32K;
    }
    if (this._dataSz4K !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSz4K = this._dataSz4K;
    }
    if (this._dataSz512K !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSz512K = this._dataSz512K;
    }
    if (this._dataSz64K !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSz64K = this._dataSz64K;
    }
    if (this._dataSz8K !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSz8K = this._dataSz8K;
    }
    if (this._dataSzGt1M !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSzGt1M = this._dataSzGt1M;
    }
    if (this._dropServerEhloOk !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropServerEhloOk = this._dropServerEhloOk;
    }
    if (this._failToSaveClientEhlo !== undefined) {
      hasAnyValues = true;
      internalValueResult.failToSaveClientEhlo = this._failToSaveClientEhlo;
    }
    if (this._forwardReqDataFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardReqDataFail = this._forwardReqDataFail;
    }
    if (this._forwardReqFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardReqFail = this._forwardReqFail;
    }
    if (this._getAllHeadersFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchAllHeadersFail = this._getAllHeadersFail;
    }
    if (this._insertResonseLineFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertResonseLineFail = this._insertResonseLineFail;
    }
    if (this._l4Switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4Switch = this._l4Switch;
    }
    if (this._lbSwitch !== undefined) {
      hasAnyValues = true;
      internalValueResult.lbSwitch = this._lbSwitch;
    }
    if (this._lbSwitchOk !== undefined) {
      hasAnyValues = true;
      internalValueResult.lbSwitchOk = this._lbSwitchOk;
    }
    if (this._lineAcrossPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineAcrossPacket = this._lineAcrossPacket;
    }
    if (this._lineExtend !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineExtend = this._lineExtend;
    }
    if (this._lineExtendFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineExtendFail = this._lineExtendFail;
    }
    if (this._lineTableExtend !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineTableExtend = this._lineTableExtend;
    }
    if (this._lineTableExtendFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineTableExtendFail = this._lineTableExtendFail;
    }
    if (this._lineTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineTooLong = this._lineTooLong;
    }
    if (this._newServerConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.newServerConn = this._newServerConn;
    }
    if (this._noProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noProxy = this._noProxy;
    }
    if (this._noTuple !== undefined) {
      hasAnyValues = true;
      internalValueResult.noTuple = this._noTuple;
    }
    if (this._parseReqFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseReqFail = this._parseReqFail;
    }
    if (this._parseRequestLineFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseRequestLineFail = this._parseRequestLineFail;
    }
    if (this._parseResonseLineFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseResonseLineFail = this._parseResonseLineFail;
    }
    if (this._peakConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakConn = this._peakConn;
    }
    if (this._readRequestLineFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.readRequestLineFail = this._readRequestLineFail;
    }
    if (this._recvClientCommandEtrn !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvClientCommandEtrn = this._recvClientCommandEtrn;
    }
    if (this._recvClientCommandOthers !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvClientCommandOthers = this._recvClientCommandOthers;
    }
    if (this._recvClientCommandRcpt !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvClientCommandRcpt = this._recvClientCommandRcpt;
    }
    if (this._recvClientCommandStarttls !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvClientCommandStarttls = this._recvClientCommandStarttls;
    }
    if (this._recvClientCommandTurn !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvClientCommandTurn = this._recvClientCommandTurn;
    }
    if (this._recvServerServiceNotReady !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvServerServiceNotReady = this._recvServerServiceNotReady;
    }
    if (this._recvServerUnknowReplyCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvServerUnknowReplyCode = this._recvServerUnknowReplyCode;
    }
    if (this._removeResonseLineFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeResonseLineFail = this._removeResonseLineFail;
    }
    if (this._reply100M !== undefined) {
      hasAnyValues = true;
      internalValueResult.reply100M = this._reply100M;
    }
    if (this._reply100U !== undefined) {
      hasAnyValues = true;
      internalValueResult.reply100U = this._reply100U;
    }
    if (this._reply10M !== undefined) {
      hasAnyValues = true;
      internalValueResult.reply10M = this._reply10M;
    }
    if (this._reply10U !== undefined) {
      hasAnyValues = true;
      internalValueResult.reply10U = this._reply10U;
    }
    if (this._reply1M !== undefined) {
      hasAnyValues = true;
      internalValueResult.reply1M = this._reply1M;
    }
    if (this._reply1S !== undefined) {
      hasAnyValues = true;
      internalValueResult.reply1S = this._reply1S;
    }
    if (this._reply200M !== undefined) {
      hasAnyValues = true;
      internalValueResult.reply200M = this._reply200M;
    }
    if (this._reply200U !== undefined) {
      hasAnyValues = true;
      internalValueResult.reply200U = this._reply200U;
    }
    if (this._reply20M !== undefined) {
      hasAnyValues = true;
      internalValueResult.reply20M = this._reply20M;
    }
    if (this._reply20U !== undefined) {
      hasAnyValues = true;
      internalValueResult.reply20U = this._reply20U;
    }
    if (this._reply2M !== undefined) {
      hasAnyValues = true;
      internalValueResult.reply2M = this._reply2M;
    }
    if (this._reply2S !== undefined) {
      hasAnyValues = true;
      internalValueResult.reply2S = this._reply2S;
    }
    if (this._reply500M !== undefined) {
      hasAnyValues = true;
      internalValueResult.reply500M = this._reply500M;
    }
    if (this._reply500U !== undefined) {
      hasAnyValues = true;
      internalValueResult.reply500U = this._reply500U;
    }
    if (this._reply50M !== undefined) {
      hasAnyValues = true;
      internalValueResult.reply50M = this._reply50M;
    }
    if (this._reply50U !== undefined) {
      hasAnyValues = true;
      internalValueResult.reply50U = this._reply50U;
    }
    if (this._reply5M !== undefined) {
      hasAnyValues = true;
      internalValueResult.reply5M = this._reply5M;
    }
    if (this._reply5S !== undefined) {
      hasAnyValues = true;
      internalValueResult.reply5S = this._reply5S;
    }
    if (this._replyOver5S !== undefined) {
      hasAnyValues = true;
      internalValueResult.replyOver5S = this._replyOver5S;
    }
    if (this._reqOfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqOfo = this._reqOfo;
    }
    if (this._reqRetran !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqRetran = this._reqRetran;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    if (this._requestSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestSuccess = this._requestSuccess;
    }
    if (this._rserverStarttlsDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.rserverStarttlsDisable = this._rserverStarttlsDisable;
    }
    if (this._sendClientCloseConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendClientCloseConnection = this._sendClientCloseConnection;
    }
    if (this._sendClientGoAhead !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendClientGoAhead = this._sendClientGoAhead;
    }
    if (this._sendClientNoCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendClientNoCommand = this._sendClientNoCommand;
    }
    if (this._sendClientServiceNotReady !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendClientServiceNotReady = this._sendClientServiceNotReady;
    }
    if (this._sendClientServiceReady !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendClientServiceReady = this._sendClientServiceReady;
    }
    if (this._sendClientStartTlsFirst !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendClientStartTlsFirst = this._sendClientStartTlsFirst;
    }
    if (this._sendClientTlsNotAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendClientTlsNotAvailable = this._sendClientTlsNotAvailable;
    }
    if (this._sendServerCmdReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendServerCmdReset = this._sendServerCmdReset;
    }
    if (this._sendServerEhlo !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendServerEhlo = this._sendServerEhlo;
    }
    if (this._serverBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverBytes = this._serverBytes;
    }
    if (this._serverPremClose !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverPremClose = this._serverPremClose;
    }
    if (this._serverReselect !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverReselect = this._serverReselect;
    }
    if (this._serverReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverReset = this._serverReset;
    }
    if (this._serverSelectFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSelectFail = this._serverSelectFail;
    }
    if (this._serverStarttlsFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverStarttlsFail = this._serverStarttlsFail;
    }
    if (this._serverStarttlsInit !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverStarttlsInit = this._serverStarttlsInit;
    }
    if (this._snatFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatFail = this._snatFail;
    }
    if (this._tcpOutReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpOutReset = this._tcpOutReset;
    }
    if (this._tlsEstablished !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsEstablished = this._tlsEstablished;
    }
    if (this._tooManyHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooManyHeaders = this._tooManyHeaders;
    }
    if (this._totalCommands !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalCommands = this._totalCommands;
    }
    if (this._totalConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalConn = this._totalConn;
    }
    if (this._totalReplies !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalReplies = this._totalReplies;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbVirtualServerPortStatsSmtpVportStatsSmtpVport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aflexEhloSent = undefined;
      this._aflexLbReselect = undefined;
      this._aflexLbReselectOk = undefined;
      this._aflexMailFail = undefined;
      this._aflexSwitch = undefined;
      this._aflexSwitchOk = undefined;
      this._clientBytes = undefined;
      this._clientDomainSwitch = undefined;
      this._clientDomainSwitchOk = undefined;
      this._clientEhloSaved = undefined;
      this._clientReset = undefined;
      this._cmdData = undefined;
      this._cmdEhlo = undefined;
      this._cmdEtrn = undefined;
      this._cmdExpn = undefined;
      this._cmdHelo = undefined;
      this._cmdHelp = undefined;
      this._cmdLocal = undefined;
      this._cmdMail = undefined;
      this._cmdNoop = undefined;
      this._cmdQuit = undefined;
      this._cmdRcpt = undefined;
      this._cmdRset = undefined;
      this._cmdStarttls = undefined;
      this._cmdTurn = undefined;
      this._cmdUnknown = undefined;
      this._cmdVrfy = undefined;
      this._code200 = undefined;
      this._code211 = undefined;
      this._code214 = undefined;
      this._code220 = undefined;
      this._code221 = undefined;
      this._code250 = undefined;
      this._code251 = undefined;
      this._code252 = undefined;
      this._code2Xx = undefined;
      this._code354 = undefined;
      this._code3Xx = undefined;
      this._code421 = undefined;
      this._code450 = undefined;
      this._code451 = undefined;
      this._code452 = undefined;
      this._code455 = undefined;
      this._code4Xx = undefined;
      this._code500 = undefined;
      this._code501 = undefined;
      this._code502 = undefined;
      this._code503 = undefined;
      this._code504 = undefined;
      this._code521 = undefined;
      this._code530 = undefined;
      this._code550 = undefined;
      this._code551 = undefined;
      this._code552 = undefined;
      this._code553 = undefined;
      this._code554 = undefined;
      this._code555 = undefined;
      this._code556 = undefined;
      this._code5Xx = undefined;
      this._codeUnknown = undefined;
      this._currConn = undefined;
      this._dataSz128K = undefined;
      this._dataSz16K = undefined;
      this._dataSz1K = undefined;
      this._dataSz1M = undefined;
      this._dataSz256K = undefined;
      this._dataSz2K = undefined;
      this._dataSz32K = undefined;
      this._dataSz4K = undefined;
      this._dataSz512K = undefined;
      this._dataSz64K = undefined;
      this._dataSz8K = undefined;
      this._dataSzGt1M = undefined;
      this._dropServerEhloOk = undefined;
      this._failToSaveClientEhlo = undefined;
      this._forwardReqDataFail = undefined;
      this._forwardReqFail = undefined;
      this._getAllHeadersFail = undefined;
      this._insertResonseLineFail = undefined;
      this._l4Switch = undefined;
      this._lbSwitch = undefined;
      this._lbSwitchOk = undefined;
      this._lineAcrossPacket = undefined;
      this._lineExtend = undefined;
      this._lineExtendFail = undefined;
      this._lineTableExtend = undefined;
      this._lineTableExtendFail = undefined;
      this._lineTooLong = undefined;
      this._newServerConn = undefined;
      this._noProxy = undefined;
      this._noTuple = undefined;
      this._parseReqFail = undefined;
      this._parseRequestLineFail = undefined;
      this._parseResonseLineFail = undefined;
      this._peakConn = undefined;
      this._readRequestLineFail = undefined;
      this._recvClientCommandEtrn = undefined;
      this._recvClientCommandOthers = undefined;
      this._recvClientCommandRcpt = undefined;
      this._recvClientCommandStarttls = undefined;
      this._recvClientCommandTurn = undefined;
      this._recvServerServiceNotReady = undefined;
      this._recvServerUnknowReplyCode = undefined;
      this._removeResonseLineFail = undefined;
      this._reply100M = undefined;
      this._reply100U = undefined;
      this._reply10M = undefined;
      this._reply10U = undefined;
      this._reply1M = undefined;
      this._reply1S = undefined;
      this._reply200M = undefined;
      this._reply200U = undefined;
      this._reply20M = undefined;
      this._reply20U = undefined;
      this._reply2M = undefined;
      this._reply2S = undefined;
      this._reply500M = undefined;
      this._reply500U = undefined;
      this._reply50M = undefined;
      this._reply50U = undefined;
      this._reply5M = undefined;
      this._reply5S = undefined;
      this._replyOver5S = undefined;
      this._reqOfo = undefined;
      this._reqRetran = undefined;
      this._request = undefined;
      this._requestSuccess = undefined;
      this._rserverStarttlsDisable = undefined;
      this._sendClientCloseConnection = undefined;
      this._sendClientGoAhead = undefined;
      this._sendClientNoCommand = undefined;
      this._sendClientServiceNotReady = undefined;
      this._sendClientServiceReady = undefined;
      this._sendClientStartTlsFirst = undefined;
      this._sendClientTlsNotAvailable = undefined;
      this._sendServerCmdReset = undefined;
      this._sendServerEhlo = undefined;
      this._serverBytes = undefined;
      this._serverPremClose = undefined;
      this._serverReselect = undefined;
      this._serverReset = undefined;
      this._serverSelectFail = undefined;
      this._serverStarttlsFail = undefined;
      this._serverStarttlsInit = undefined;
      this._snatFail = undefined;
      this._tcpOutReset = undefined;
      this._tlsEstablished = undefined;
      this._tooManyHeaders = undefined;
      this._totalCommands = undefined;
      this._totalConn = undefined;
      this._totalReplies = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aflexEhloSent = value.aflexEhloSent;
      this._aflexLbReselect = value.aflexLbReselect;
      this._aflexLbReselectOk = value.aflexLbReselectOk;
      this._aflexMailFail = value.aflexMailFail;
      this._aflexSwitch = value.aflexSwitch;
      this._aflexSwitchOk = value.aflexSwitchOk;
      this._clientBytes = value.clientBytes;
      this._clientDomainSwitch = value.clientDomainSwitch;
      this._clientDomainSwitchOk = value.clientDomainSwitchOk;
      this._clientEhloSaved = value.clientEhloSaved;
      this._clientReset = value.clientReset;
      this._cmdData = value.cmdData;
      this._cmdEhlo = value.cmdEhlo;
      this._cmdEtrn = value.cmdEtrn;
      this._cmdExpn = value.cmdExpn;
      this._cmdHelo = value.cmdHelo;
      this._cmdHelp = value.cmdHelp;
      this._cmdLocal = value.cmdLocal;
      this._cmdMail = value.cmdMail;
      this._cmdNoop = value.cmdNoop;
      this._cmdQuit = value.cmdQuit;
      this._cmdRcpt = value.cmdRcpt;
      this._cmdRset = value.cmdRset;
      this._cmdStarttls = value.cmdStarttls;
      this._cmdTurn = value.cmdTurn;
      this._cmdUnknown = value.cmdUnknown;
      this._cmdVrfy = value.cmdVrfy;
      this._code200 = value.code200;
      this._code211 = value.code211;
      this._code214 = value.code214;
      this._code220 = value.code220;
      this._code221 = value.code221;
      this._code250 = value.code250;
      this._code251 = value.code251;
      this._code252 = value.code252;
      this._code2Xx = value.code2Xx;
      this._code354 = value.code354;
      this._code3Xx = value.code3Xx;
      this._code421 = value.code421;
      this._code450 = value.code450;
      this._code451 = value.code451;
      this._code452 = value.code452;
      this._code455 = value.code455;
      this._code4Xx = value.code4Xx;
      this._code500 = value.code500;
      this._code501 = value.code501;
      this._code502 = value.code502;
      this._code503 = value.code503;
      this._code504 = value.code504;
      this._code521 = value.code521;
      this._code530 = value.code530;
      this._code550 = value.code550;
      this._code551 = value.code551;
      this._code552 = value.code552;
      this._code553 = value.code553;
      this._code554 = value.code554;
      this._code555 = value.code555;
      this._code556 = value.code556;
      this._code5Xx = value.code5Xx;
      this._codeUnknown = value.codeUnknown;
      this._currConn = value.currConn;
      this._dataSz128K = value.dataSz128K;
      this._dataSz16K = value.dataSz16K;
      this._dataSz1K = value.dataSz1K;
      this._dataSz1M = value.dataSz1M;
      this._dataSz256K = value.dataSz256K;
      this._dataSz2K = value.dataSz2K;
      this._dataSz32K = value.dataSz32K;
      this._dataSz4K = value.dataSz4K;
      this._dataSz512K = value.dataSz512K;
      this._dataSz64K = value.dataSz64K;
      this._dataSz8K = value.dataSz8K;
      this._dataSzGt1M = value.dataSzGt1M;
      this._dropServerEhloOk = value.dropServerEhloOk;
      this._failToSaveClientEhlo = value.failToSaveClientEhlo;
      this._forwardReqDataFail = value.forwardReqDataFail;
      this._forwardReqFail = value.forwardReqFail;
      this._getAllHeadersFail = value.fetchAllHeadersFail;
      this._insertResonseLineFail = value.insertResonseLineFail;
      this._l4Switch = value.l4Switch;
      this._lbSwitch = value.lbSwitch;
      this._lbSwitchOk = value.lbSwitchOk;
      this._lineAcrossPacket = value.lineAcrossPacket;
      this._lineExtend = value.lineExtend;
      this._lineExtendFail = value.lineExtendFail;
      this._lineTableExtend = value.lineTableExtend;
      this._lineTableExtendFail = value.lineTableExtendFail;
      this._lineTooLong = value.lineTooLong;
      this._newServerConn = value.newServerConn;
      this._noProxy = value.noProxy;
      this._noTuple = value.noTuple;
      this._parseReqFail = value.parseReqFail;
      this._parseRequestLineFail = value.parseRequestLineFail;
      this._parseResonseLineFail = value.parseResonseLineFail;
      this._peakConn = value.peakConn;
      this._readRequestLineFail = value.readRequestLineFail;
      this._recvClientCommandEtrn = value.recvClientCommandEtrn;
      this._recvClientCommandOthers = value.recvClientCommandOthers;
      this._recvClientCommandRcpt = value.recvClientCommandRcpt;
      this._recvClientCommandStarttls = value.recvClientCommandStarttls;
      this._recvClientCommandTurn = value.recvClientCommandTurn;
      this._recvServerServiceNotReady = value.recvServerServiceNotReady;
      this._recvServerUnknowReplyCode = value.recvServerUnknowReplyCode;
      this._removeResonseLineFail = value.removeResonseLineFail;
      this._reply100M = value.reply100M;
      this._reply100U = value.reply100U;
      this._reply10M = value.reply10M;
      this._reply10U = value.reply10U;
      this._reply1M = value.reply1M;
      this._reply1S = value.reply1S;
      this._reply200M = value.reply200M;
      this._reply200U = value.reply200U;
      this._reply20M = value.reply20M;
      this._reply20U = value.reply20U;
      this._reply2M = value.reply2M;
      this._reply2S = value.reply2S;
      this._reply500M = value.reply500M;
      this._reply500U = value.reply500U;
      this._reply50M = value.reply50M;
      this._reply50U = value.reply50U;
      this._reply5M = value.reply5M;
      this._reply5S = value.reply5S;
      this._replyOver5S = value.replyOver5S;
      this._reqOfo = value.reqOfo;
      this._reqRetran = value.reqRetran;
      this._request = value.request;
      this._requestSuccess = value.requestSuccess;
      this._rserverStarttlsDisable = value.rserverStarttlsDisable;
      this._sendClientCloseConnection = value.sendClientCloseConnection;
      this._sendClientGoAhead = value.sendClientGoAhead;
      this._sendClientNoCommand = value.sendClientNoCommand;
      this._sendClientServiceNotReady = value.sendClientServiceNotReady;
      this._sendClientServiceReady = value.sendClientServiceReady;
      this._sendClientStartTlsFirst = value.sendClientStartTlsFirst;
      this._sendClientTlsNotAvailable = value.sendClientTlsNotAvailable;
      this._sendServerCmdReset = value.sendServerCmdReset;
      this._sendServerEhlo = value.sendServerEhlo;
      this._serverBytes = value.serverBytes;
      this._serverPremClose = value.serverPremClose;
      this._serverReselect = value.serverReselect;
      this._serverReset = value.serverReset;
      this._serverSelectFail = value.serverSelectFail;
      this._serverStarttlsFail = value.serverStarttlsFail;
      this._serverStarttlsInit = value.serverStarttlsInit;
      this._snatFail = value.snatFail;
      this._tcpOutReset = value.tcpOutReset;
      this._tlsEstablished = value.tlsEstablished;
      this._tooManyHeaders = value.tooManyHeaders;
      this._totalCommands = value.totalCommands;
      this._totalConn = value.totalConn;
      this._totalReplies = value.totalReplies;
    }
  }

  // aflex_ehlo_sent - computed: false, optional: true, required: false
  private _aflexEhloSent?: number; 
  public get aflexEhloSent() {
    return this.getNumberAttribute('aflex_ehlo_sent');
  }
  public set aflexEhloSent(value: number) {
    this._aflexEhloSent = value;
  }
  public resetAflexEhloSent() {
    this._aflexEhloSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexEhloSentInput() {
    return this._aflexEhloSent;
  }

  // aflex_lb_reselect - computed: false, optional: true, required: false
  private _aflexLbReselect?: number; 
  public get aflexLbReselect() {
    return this.getNumberAttribute('aflex_lb_reselect');
  }
  public set aflexLbReselect(value: number) {
    this._aflexLbReselect = value;
  }
  public resetAflexLbReselect() {
    this._aflexLbReselect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexLbReselectInput() {
    return this._aflexLbReselect;
  }

  // aflex_lb_reselect_ok - computed: false, optional: true, required: false
  private _aflexLbReselectOk?: number; 
  public get aflexLbReselectOk() {
    return this.getNumberAttribute('aflex_lb_reselect_ok');
  }
  public set aflexLbReselectOk(value: number) {
    this._aflexLbReselectOk = value;
  }
  public resetAflexLbReselectOk() {
    this._aflexLbReselectOk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexLbReselectOkInput() {
    return this._aflexLbReselectOk;
  }

  // aflex_mail_fail - computed: false, optional: true, required: false
  private _aflexMailFail?: number; 
  public get aflexMailFail() {
    return this.getNumberAttribute('aflex_mail_fail');
  }
  public set aflexMailFail(value: number) {
    this._aflexMailFail = value;
  }
  public resetAflexMailFail() {
    this._aflexMailFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexMailFailInput() {
    return this._aflexMailFail;
  }

  // aflex_switch - computed: false, optional: true, required: false
  private _aflexSwitch?: number; 
  public get aflexSwitch() {
    return this.getNumberAttribute('aflex_switch');
  }
  public set aflexSwitch(value: number) {
    this._aflexSwitch = value;
  }
  public resetAflexSwitch() {
    this._aflexSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexSwitchInput() {
    return this._aflexSwitch;
  }

  // aflex_switch_ok - computed: false, optional: true, required: false
  private _aflexSwitchOk?: number; 
  public get aflexSwitchOk() {
    return this.getNumberAttribute('aflex_switch_ok');
  }
  public set aflexSwitchOk(value: number) {
    this._aflexSwitchOk = value;
  }
  public resetAflexSwitchOk() {
    this._aflexSwitchOk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexSwitchOkInput() {
    return this._aflexSwitchOk;
  }

  // client_bytes - computed: false, optional: true, required: false
  private _clientBytes?: number; 
  public get clientBytes() {
    return this.getNumberAttribute('client_bytes');
  }
  public set clientBytes(value: number) {
    this._clientBytes = value;
  }
  public resetClientBytes() {
    this._clientBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientBytesInput() {
    return this._clientBytes;
  }

  // client_domain_switch - computed: false, optional: true, required: false
  private _clientDomainSwitch?: number; 
  public get clientDomainSwitch() {
    return this.getNumberAttribute('client_domain_switch');
  }
  public set clientDomainSwitch(value: number) {
    this._clientDomainSwitch = value;
  }
  public resetClientDomainSwitch() {
    this._clientDomainSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientDomainSwitchInput() {
    return this._clientDomainSwitch;
  }

  // client_domain_switch_ok - computed: false, optional: true, required: false
  private _clientDomainSwitchOk?: number; 
  public get clientDomainSwitchOk() {
    return this.getNumberAttribute('client_domain_switch_ok');
  }
  public set clientDomainSwitchOk(value: number) {
    this._clientDomainSwitchOk = value;
  }
  public resetClientDomainSwitchOk() {
    this._clientDomainSwitchOk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientDomainSwitchOkInput() {
    return this._clientDomainSwitchOk;
  }

  // client_ehlo_saved - computed: false, optional: true, required: false
  private _clientEhloSaved?: number; 
  public get clientEhloSaved() {
    return this.getNumberAttribute('client_ehlo_saved');
  }
  public set clientEhloSaved(value: number) {
    this._clientEhloSaved = value;
  }
  public resetClientEhloSaved() {
    this._clientEhloSaved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientEhloSavedInput() {
    return this._clientEhloSaved;
  }

  // client_reset - computed: false, optional: true, required: false
  private _clientReset?: number; 
  public get clientReset() {
    return this.getNumberAttribute('client_reset');
  }
  public set clientReset(value: number) {
    this._clientReset = value;
  }
  public resetClientReset() {
    this._clientReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientResetInput() {
    return this._clientReset;
  }

  // cmd_data - computed: false, optional: true, required: false
  private _cmdData?: number; 
  public get cmdData() {
    return this.getNumberAttribute('cmd_data');
  }
  public set cmdData(value: number) {
    this._cmdData = value;
  }
  public resetCmdData() {
    this._cmdData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdDataInput() {
    return this._cmdData;
  }

  // cmd_ehlo - computed: false, optional: true, required: false
  private _cmdEhlo?: number; 
  public get cmdEhlo() {
    return this.getNumberAttribute('cmd_ehlo');
  }
  public set cmdEhlo(value: number) {
    this._cmdEhlo = value;
  }
  public resetCmdEhlo() {
    this._cmdEhlo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdEhloInput() {
    return this._cmdEhlo;
  }

  // cmd_etrn - computed: false, optional: true, required: false
  private _cmdEtrn?: number; 
  public get cmdEtrn() {
    return this.getNumberAttribute('cmd_etrn');
  }
  public set cmdEtrn(value: number) {
    this._cmdEtrn = value;
  }
  public resetCmdEtrn() {
    this._cmdEtrn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdEtrnInput() {
    return this._cmdEtrn;
  }

  // cmd_expn - computed: false, optional: true, required: false
  private _cmdExpn?: number; 
  public get cmdExpn() {
    return this.getNumberAttribute('cmd_expn');
  }
  public set cmdExpn(value: number) {
    this._cmdExpn = value;
  }
  public resetCmdExpn() {
    this._cmdExpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdExpnInput() {
    return this._cmdExpn;
  }

  // cmd_helo - computed: false, optional: true, required: false
  private _cmdHelo?: number; 
  public get cmdHelo() {
    return this.getNumberAttribute('cmd_helo');
  }
  public set cmdHelo(value: number) {
    this._cmdHelo = value;
  }
  public resetCmdHelo() {
    this._cmdHelo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdHeloInput() {
    return this._cmdHelo;
  }

  // cmd_help - computed: false, optional: true, required: false
  private _cmdHelp?: number; 
  public get cmdHelp() {
    return this.getNumberAttribute('cmd_help');
  }
  public set cmdHelp(value: number) {
    this._cmdHelp = value;
  }
  public resetCmdHelp() {
    this._cmdHelp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdHelpInput() {
    return this._cmdHelp;
  }

  // cmd_local - computed: false, optional: true, required: false
  private _cmdLocal?: number; 
  public get cmdLocal() {
    return this.getNumberAttribute('cmd_local');
  }
  public set cmdLocal(value: number) {
    this._cmdLocal = value;
  }
  public resetCmdLocal() {
    this._cmdLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdLocalInput() {
    return this._cmdLocal;
  }

  // cmd_mail - computed: false, optional: true, required: false
  private _cmdMail?: number; 
  public get cmdMail() {
    return this.getNumberAttribute('cmd_mail');
  }
  public set cmdMail(value: number) {
    this._cmdMail = value;
  }
  public resetCmdMail() {
    this._cmdMail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdMailInput() {
    return this._cmdMail;
  }

  // cmd_noop - computed: false, optional: true, required: false
  private _cmdNoop?: number; 
  public get cmdNoop() {
    return this.getNumberAttribute('cmd_noop');
  }
  public set cmdNoop(value: number) {
    this._cmdNoop = value;
  }
  public resetCmdNoop() {
    this._cmdNoop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdNoopInput() {
    return this._cmdNoop;
  }

  // cmd_quit - computed: false, optional: true, required: false
  private _cmdQuit?: number; 
  public get cmdQuit() {
    return this.getNumberAttribute('cmd_quit');
  }
  public set cmdQuit(value: number) {
    this._cmdQuit = value;
  }
  public resetCmdQuit() {
    this._cmdQuit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdQuitInput() {
    return this._cmdQuit;
  }

  // cmd_rcpt - computed: false, optional: true, required: false
  private _cmdRcpt?: number; 
  public get cmdRcpt() {
    return this.getNumberAttribute('cmd_rcpt');
  }
  public set cmdRcpt(value: number) {
    this._cmdRcpt = value;
  }
  public resetCmdRcpt() {
    this._cmdRcpt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdRcptInput() {
    return this._cmdRcpt;
  }

  // cmd_rset - computed: false, optional: true, required: false
  private _cmdRset?: number; 
  public get cmdRset() {
    return this.getNumberAttribute('cmd_rset');
  }
  public set cmdRset(value: number) {
    this._cmdRset = value;
  }
  public resetCmdRset() {
    this._cmdRset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdRsetInput() {
    return this._cmdRset;
  }

  // cmd_starttls - computed: false, optional: true, required: false
  private _cmdStarttls?: number; 
  public get cmdStarttls() {
    return this.getNumberAttribute('cmd_starttls');
  }
  public set cmdStarttls(value: number) {
    this._cmdStarttls = value;
  }
  public resetCmdStarttls() {
    this._cmdStarttls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdStarttlsInput() {
    return this._cmdStarttls;
  }

  // cmd_turn - computed: false, optional: true, required: false
  private _cmdTurn?: number; 
  public get cmdTurn() {
    return this.getNumberAttribute('cmd_turn');
  }
  public set cmdTurn(value: number) {
    this._cmdTurn = value;
  }
  public resetCmdTurn() {
    this._cmdTurn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdTurnInput() {
    return this._cmdTurn;
  }

  // cmd_unknown - computed: false, optional: true, required: false
  private _cmdUnknown?: number; 
  public get cmdUnknown() {
    return this.getNumberAttribute('cmd_unknown');
  }
  public set cmdUnknown(value: number) {
    this._cmdUnknown = value;
  }
  public resetCmdUnknown() {
    this._cmdUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdUnknownInput() {
    return this._cmdUnknown;
  }

  // cmd_vrfy - computed: false, optional: true, required: false
  private _cmdVrfy?: number; 
  public get cmdVrfy() {
    return this.getNumberAttribute('cmd_vrfy');
  }
  public set cmdVrfy(value: number) {
    this._cmdVrfy = value;
  }
  public resetCmdVrfy() {
    this._cmdVrfy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdVrfyInput() {
    return this._cmdVrfy;
  }

  // code_200 - computed: false, optional: true, required: false
  private _code200?: number; 
  public get code200() {
    return this.getNumberAttribute('code_200');
  }
  public set code200(value: number) {
    this._code200 = value;
  }
  public resetCode200() {
    this._code200 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get code200Input() {
    return this._code200;
  }

  // code_211 - computed: false, optional: true, required: false
  private _code211?: number; 
  public get code211() {
    return this.getNumberAttribute('code_211');
  }
  public set code211(value: number) {
    this._code211 = value;
  }
  public resetCode211() {
    this._code211 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get code211Input() {
    return this._code211;
  }

  // code_214 - computed: false, optional: true, required: false
  private _code214?: number; 
  public get code214() {
    return this.getNumberAttribute('code_214');
  }
  public set code214(value: number) {
    this._code214 = value;
  }
  public resetCode214() {
    this._code214 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get code214Input() {
    return this._code214;
  }

  // code_220 - computed: false, optional: true, required: false
  private _code220?: number; 
  public get code220() {
    return this.getNumberAttribute('code_220');
  }
  public set code220(value: number) {
    this._code220 = value;
  }
  public resetCode220() {
    this._code220 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get code220Input() {
    return this._code220;
  }

  // code_221 - computed: false, optional: true, required: false
  private _code221?: number; 
  public get code221() {
    return this.getNumberAttribute('code_221');
  }
  public set code221(value: number) {
    this._code221 = value;
  }
  public resetCode221() {
    this._code221 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get code221Input() {
    return this._code221;
  }

  // code_250 - computed: false, optional: true, required: false
  private _code250?: number; 
  public get code250() {
    return this.getNumberAttribute('code_250');
  }
  public set code250(value: number) {
    this._code250 = value;
  }
  public resetCode250() {
    this._code250 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get code250Input() {
    return this._code250;
  }

  // code_251 - computed: false, optional: true, required: false
  private _code251?: number; 
  public get code251() {
    return this.getNumberAttribute('code_251');
  }
  public set code251(value: number) {
    this._code251 = value;
  }
  public resetCode251() {
    this._code251 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get code251Input() {
    return this._code251;
  }

  // code_252 - computed: false, optional: true, required: false
  private _code252?: number; 
  public get code252() {
    return this.getNumberAttribute('code_252');
  }
  public set code252(value: number) {
    this._code252 = value;
  }
  public resetCode252() {
    this._code252 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get code252Input() {
    return this._code252;
  }

  // code_2xx - computed: false, optional: true, required: false
  private _code2Xx?: number; 
  public get code2Xx() {
    return this.getNumberAttribute('code_2xx');
  }
  public set code2Xx(value: number) {
    this._code2Xx = value;
  }
  public resetCode2Xx() {
    this._code2Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get code2XxInput() {
    return this._code2Xx;
  }

  // code_354 - computed: false, optional: true, required: false
  private _code354?: number; 
  public get code354() {
    return this.getNumberAttribute('code_354');
  }
  public set code354(value: number) {
    this._code354 = value;
  }
  public resetCode354() {
    this._code354 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get code354Input() {
    return this._code354;
  }

  // code_3xx - computed: false, optional: true, required: false
  private _code3Xx?: number; 
  public get code3Xx() {
    return this.getNumberAttribute('code_3xx');
  }
  public set code3Xx(value: number) {
    this._code3Xx = value;
  }
  public resetCode3Xx() {
    this._code3Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get code3XxInput() {
    return this._code3Xx;
  }

  // code_421 - computed: false, optional: true, required: false
  private _code421?: number; 
  public get code421() {
    return this.getNumberAttribute('code_421');
  }
  public set code421(value: number) {
    this._code421 = value;
  }
  public resetCode421() {
    this._code421 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get code421Input() {
    return this._code421;
  }

  // code_450 - computed: false, optional: true, required: false
  private _code450?: number; 
  public get code450() {
    return this.getNumberAttribute('code_450');
  }
  public set code450(value: number) {
    this._code450 = value;
  }
  public resetCode450() {
    this._code450 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get code450Input() {
    return this._code450;
  }

  // code_451 - computed: false, optional: true, required: false
  private _code451?: number; 
  public get code451() {
    return this.getNumberAttribute('code_451');
  }
  public set code451(value: number) {
    this._code451 = value;
  }
  public resetCode451() {
    this._code451 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get code451Input() {
    return this._code451;
  }

  // code_452 - computed: false, optional: true, required: false
  private _code452?: number; 
  public get code452() {
    return this.getNumberAttribute('code_452');
  }
  public set code452(value: number) {
    this._code452 = value;
  }
  public resetCode452() {
    this._code452 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get code452Input() {
    return this._code452;
  }

  // code_455 - computed: false, optional: true, required: false
  private _code455?: number; 
  public get code455() {
    return this.getNumberAttribute('code_455');
  }
  public set code455(value: number) {
    this._code455 = value;
  }
  public resetCode455() {
    this._code455 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get code455Input() {
    return this._code455;
  }

  // code_4xx - computed: false, optional: true, required: false
  private _code4Xx?: number; 
  public get code4Xx() {
    return this.getNumberAttribute('code_4xx');
  }
  public set code4Xx(value: number) {
    this._code4Xx = value;
  }
  public resetCode4Xx() {
    this._code4Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get code4XxInput() {
    return this._code4Xx;
  }

  // code_500 - computed: false, optional: true, required: false
  private _code500?: number; 
  public get code500() {
    return this.getNumberAttribute('code_500');
  }
  public set code500(value: number) {
    this._code500 = value;
  }
  public resetCode500() {
    this._code500 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get code500Input() {
    return this._code500;
  }

  // code_501 - computed: false, optional: true, required: false
  private _code501?: number; 
  public get code501() {
    return this.getNumberAttribute('code_501');
  }
  public set code501(value: number) {
    this._code501 = value;
  }
  public resetCode501() {
    this._code501 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get code501Input() {
    return this._code501;
  }

  // code_502 - computed: false, optional: true, required: false
  private _code502?: number; 
  public get code502() {
    return this.getNumberAttribute('code_502');
  }
  public set code502(value: number) {
    this._code502 = value;
  }
  public resetCode502() {
    this._code502 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get code502Input() {
    return this._code502;
  }

  // code_503 - computed: false, optional: true, required: false
  private _code503?: number; 
  public get code503() {
    return this.getNumberAttribute('code_503');
  }
  public set code503(value: number) {
    this._code503 = value;
  }
  public resetCode503() {
    this._code503 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get code503Input() {
    return this._code503;
  }

  // code_504 - computed: false, optional: true, required: false
  private _code504?: number; 
  public get code504() {
    return this.getNumberAttribute('code_504');
  }
  public set code504(value: number) {
    this._code504 = value;
  }
  public resetCode504() {
    this._code504 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get code504Input() {
    return this._code504;
  }

  // code_521 - computed: false, optional: true, required: false
  private _code521?: number; 
  public get code521() {
    return this.getNumberAttribute('code_521');
  }
  public set code521(value: number) {
    this._code521 = value;
  }
  public resetCode521() {
    this._code521 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get code521Input() {
    return this._code521;
  }

  // code_530 - computed: false, optional: true, required: false
  private _code530?: number; 
  public get code530() {
    return this.getNumberAttribute('code_530');
  }
  public set code530(value: number) {
    this._code530 = value;
  }
  public resetCode530() {
    this._code530 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get code530Input() {
    return this._code530;
  }

  // code_550 - computed: false, optional: true, required: false
  private _code550?: number; 
  public get code550() {
    return this.getNumberAttribute('code_550');
  }
  public set code550(value: number) {
    this._code550 = value;
  }
  public resetCode550() {
    this._code550 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get code550Input() {
    return this._code550;
  }

  // code_551 - computed: false, optional: true, required: false
  private _code551?: number; 
  public get code551() {
    return this.getNumberAttribute('code_551');
  }
  public set code551(value: number) {
    this._code551 = value;
  }
  public resetCode551() {
    this._code551 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get code551Input() {
    return this._code551;
  }

  // code_552 - computed: false, optional: true, required: false
  private _code552?: number; 
  public get code552() {
    return this.getNumberAttribute('code_552');
  }
  public set code552(value: number) {
    this._code552 = value;
  }
  public resetCode552() {
    this._code552 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get code552Input() {
    return this._code552;
  }

  // code_553 - computed: false, optional: true, required: false
  private _code553?: number; 
  public get code553() {
    return this.getNumberAttribute('code_553');
  }
  public set code553(value: number) {
    this._code553 = value;
  }
  public resetCode553() {
    this._code553 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get code553Input() {
    return this._code553;
  }

  // code_554 - computed: false, optional: true, required: false
  private _code554?: number; 
  public get code554() {
    return this.getNumberAttribute('code_554');
  }
  public set code554(value: number) {
    this._code554 = value;
  }
  public resetCode554() {
    this._code554 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get code554Input() {
    return this._code554;
  }

  // code_555 - computed: false, optional: true, required: false
  private _code555?: number; 
  public get code555() {
    return this.getNumberAttribute('code_555');
  }
  public set code555(value: number) {
    this._code555 = value;
  }
  public resetCode555() {
    this._code555 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get code555Input() {
    return this._code555;
  }

  // code_556 - computed: false, optional: true, required: false
  private _code556?: number; 
  public get code556() {
    return this.getNumberAttribute('code_556');
  }
  public set code556(value: number) {
    this._code556 = value;
  }
  public resetCode556() {
    this._code556 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get code556Input() {
    return this._code556;
  }

  // code_5xx - computed: false, optional: true, required: false
  private _code5Xx?: number; 
  public get code5Xx() {
    return this.getNumberAttribute('code_5xx');
  }
  public set code5Xx(value: number) {
    this._code5Xx = value;
  }
  public resetCode5Xx() {
    this._code5Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get code5XxInput() {
    return this._code5Xx;
  }

  // code_unknown - computed: false, optional: true, required: false
  private _codeUnknown?: number; 
  public get codeUnknown() {
    return this.getNumberAttribute('code_unknown');
  }
  public set codeUnknown(value: number) {
    this._codeUnknown = value;
  }
  public resetCodeUnknown() {
    this._codeUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeUnknownInput() {
    return this._codeUnknown;
  }

  // curr_conn - computed: false, optional: true, required: false
  private _currConn?: number; 
  public get currConn() {
    return this.getNumberAttribute('curr_conn');
  }
  public set currConn(value: number) {
    this._currConn = value;
  }
  public resetCurrConn() {
    this._currConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currConnInput() {
    return this._currConn;
  }

  // data_sz_128k - computed: false, optional: true, required: false
  private _dataSz128K?: number; 
  public get dataSz128K() {
    return this.getNumberAttribute('data_sz_128k');
  }
  public set dataSz128K(value: number) {
    this._dataSz128K = value;
  }
  public resetDataSz128K() {
    this._dataSz128K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSz128KInput() {
    return this._dataSz128K;
  }

  // data_sz_16k - computed: false, optional: true, required: false
  private _dataSz16K?: number; 
  public get dataSz16K() {
    return this.getNumberAttribute('data_sz_16k');
  }
  public set dataSz16K(value: number) {
    this._dataSz16K = value;
  }
  public resetDataSz16K() {
    this._dataSz16K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSz16KInput() {
    return this._dataSz16K;
  }

  // data_sz_1k - computed: false, optional: true, required: false
  private _dataSz1K?: number; 
  public get dataSz1K() {
    return this.getNumberAttribute('data_sz_1k');
  }
  public set dataSz1K(value: number) {
    this._dataSz1K = value;
  }
  public resetDataSz1K() {
    this._dataSz1K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSz1KInput() {
    return this._dataSz1K;
  }

  // data_sz_1m - computed: false, optional: true, required: false
  private _dataSz1M?: number; 
  public get dataSz1M() {
    return this.getNumberAttribute('data_sz_1m');
  }
  public set dataSz1M(value: number) {
    this._dataSz1M = value;
  }
  public resetDataSz1M() {
    this._dataSz1M = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSz1MInput() {
    return this._dataSz1M;
  }

  // data_sz_256k - computed: false, optional: true, required: false
  private _dataSz256K?: number; 
  public get dataSz256K() {
    return this.getNumberAttribute('data_sz_256k');
  }
  public set dataSz256K(value: number) {
    this._dataSz256K = value;
  }
  public resetDataSz256K() {
    this._dataSz256K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSz256KInput() {
    return this._dataSz256K;
  }

  // data_sz_2k - computed: false, optional: true, required: false
  private _dataSz2K?: number; 
  public get dataSz2K() {
    return this.getNumberAttribute('data_sz_2k');
  }
  public set dataSz2K(value: number) {
    this._dataSz2K = value;
  }
  public resetDataSz2K() {
    this._dataSz2K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSz2KInput() {
    return this._dataSz2K;
  }

  // data_sz_32k - computed: false, optional: true, required: false
  private _dataSz32K?: number; 
  public get dataSz32K() {
    return this.getNumberAttribute('data_sz_32k');
  }
  public set dataSz32K(value: number) {
    this._dataSz32K = value;
  }
  public resetDataSz32K() {
    this._dataSz32K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSz32KInput() {
    return this._dataSz32K;
  }

  // data_sz_4k - computed: false, optional: true, required: false
  private _dataSz4K?: number; 
  public get dataSz4K() {
    return this.getNumberAttribute('data_sz_4k');
  }
  public set dataSz4K(value: number) {
    this._dataSz4K = value;
  }
  public resetDataSz4K() {
    this._dataSz4K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSz4KInput() {
    return this._dataSz4K;
  }

  // data_sz_512k - computed: false, optional: true, required: false
  private _dataSz512K?: number; 
  public get dataSz512K() {
    return this.getNumberAttribute('data_sz_512k');
  }
  public set dataSz512K(value: number) {
    this._dataSz512K = value;
  }
  public resetDataSz512K() {
    this._dataSz512K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSz512KInput() {
    return this._dataSz512K;
  }

  // data_sz_64k - computed: false, optional: true, required: false
  private _dataSz64K?: number; 
  public get dataSz64K() {
    return this.getNumberAttribute('data_sz_64k');
  }
  public set dataSz64K(value: number) {
    this._dataSz64K = value;
  }
  public resetDataSz64K() {
    this._dataSz64K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSz64KInput() {
    return this._dataSz64K;
  }

  // data_sz_8k - computed: false, optional: true, required: false
  private _dataSz8K?: number; 
  public get dataSz8K() {
    return this.getNumberAttribute('data_sz_8k');
  }
  public set dataSz8K(value: number) {
    this._dataSz8K = value;
  }
  public resetDataSz8K() {
    this._dataSz8K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSz8KInput() {
    return this._dataSz8K;
  }

  // data_sz_gt_1m - computed: false, optional: true, required: false
  private _dataSzGt1M?: number; 
  public get dataSzGt1M() {
    return this.getNumberAttribute('data_sz_gt_1m');
  }
  public set dataSzGt1M(value: number) {
    this._dataSzGt1M = value;
  }
  public resetDataSzGt1M() {
    this._dataSzGt1M = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSzGt1MInput() {
    return this._dataSzGt1M;
  }

  // drop_server_ehlo_ok - computed: false, optional: true, required: false
  private _dropServerEhloOk?: number; 
  public get dropServerEhloOk() {
    return this.getNumberAttribute('drop_server_ehlo_ok');
  }
  public set dropServerEhloOk(value: number) {
    this._dropServerEhloOk = value;
  }
  public resetDropServerEhloOk() {
    this._dropServerEhloOk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropServerEhloOkInput() {
    return this._dropServerEhloOk;
  }

  // fail_to_save_client_ehlo - computed: false, optional: true, required: false
  private _failToSaveClientEhlo?: number; 
  public get failToSaveClientEhlo() {
    return this.getNumberAttribute('fail_to_save_client_ehlo');
  }
  public set failToSaveClientEhlo(value: number) {
    this._failToSaveClientEhlo = value;
  }
  public resetFailToSaveClientEhlo() {
    this._failToSaveClientEhlo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failToSaveClientEhloInput() {
    return this._failToSaveClientEhlo;
  }

  // forward_req_data_fail - computed: false, optional: true, required: false
  private _forwardReqDataFail?: number; 
  public get forwardReqDataFail() {
    return this.getNumberAttribute('forward_req_data_fail');
  }
  public set forwardReqDataFail(value: number) {
    this._forwardReqDataFail = value;
  }
  public resetForwardReqDataFail() {
    this._forwardReqDataFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardReqDataFailInput() {
    return this._forwardReqDataFail;
  }

  // forward_req_fail - computed: false, optional: true, required: false
  private _forwardReqFail?: number; 
  public get forwardReqFail() {
    return this.getNumberAttribute('forward_req_fail');
  }
  public set forwardReqFail(value: number) {
    this._forwardReqFail = value;
  }
  public resetForwardReqFail() {
    this._forwardReqFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardReqFailInput() {
    return this._forwardReqFail;
  }

  // get_all_headers_fail - computed: false, optional: true, required: false
  private _getAllHeadersFail?: number; 
  public get fetchAllHeadersFail() {
    return this.getNumberAttribute('get_all_headers_fail');
  }
  public set fetchAllHeadersFail(value: number) {
    this._getAllHeadersFail = value;
  }
  public resetFetchAllHeadersFail() {
    this._getAllHeadersFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllHeadersFailInput() {
    return this._getAllHeadersFail;
  }

  // insert_resonse_line_fail - computed: false, optional: true, required: false
  private _insertResonseLineFail?: number; 
  public get insertResonseLineFail() {
    return this.getNumberAttribute('insert_resonse_line_fail');
  }
  public set insertResonseLineFail(value: number) {
    this._insertResonseLineFail = value;
  }
  public resetInsertResonseLineFail() {
    this._insertResonseLineFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertResonseLineFailInput() {
    return this._insertResonseLineFail;
  }

  // l4_switch - computed: false, optional: true, required: false
  private _l4Switch?: number; 
  public get l4Switch() {
    return this.getNumberAttribute('l4_switch');
  }
  public set l4Switch(value: number) {
    this._l4Switch = value;
  }
  public resetL4Switch() {
    this._l4Switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4SwitchInput() {
    return this._l4Switch;
  }

  // lb_switch - computed: false, optional: true, required: false
  private _lbSwitch?: number; 
  public get lbSwitch() {
    return this.getNumberAttribute('lb_switch');
  }
  public set lbSwitch(value: number) {
    this._lbSwitch = value;
  }
  public resetLbSwitch() {
    this._lbSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbSwitchInput() {
    return this._lbSwitch;
  }

  // lb_switch_ok - computed: false, optional: true, required: false
  private _lbSwitchOk?: number; 
  public get lbSwitchOk() {
    return this.getNumberAttribute('lb_switch_ok');
  }
  public set lbSwitchOk(value: number) {
    this._lbSwitchOk = value;
  }
  public resetLbSwitchOk() {
    this._lbSwitchOk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbSwitchOkInput() {
    return this._lbSwitchOk;
  }

  // line_across_packet - computed: false, optional: true, required: false
  private _lineAcrossPacket?: number; 
  public get lineAcrossPacket() {
    return this.getNumberAttribute('line_across_packet');
  }
  public set lineAcrossPacket(value: number) {
    this._lineAcrossPacket = value;
  }
  public resetLineAcrossPacket() {
    this._lineAcrossPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineAcrossPacketInput() {
    return this._lineAcrossPacket;
  }

  // line_extend - computed: false, optional: true, required: false
  private _lineExtend?: number; 
  public get lineExtend() {
    return this.getNumberAttribute('line_extend');
  }
  public set lineExtend(value: number) {
    this._lineExtend = value;
  }
  public resetLineExtend() {
    this._lineExtend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineExtendInput() {
    return this._lineExtend;
  }

  // line_extend_fail - computed: false, optional: true, required: false
  private _lineExtendFail?: number; 
  public get lineExtendFail() {
    return this.getNumberAttribute('line_extend_fail');
  }
  public set lineExtendFail(value: number) {
    this._lineExtendFail = value;
  }
  public resetLineExtendFail() {
    this._lineExtendFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineExtendFailInput() {
    return this._lineExtendFail;
  }

  // line_table_extend - computed: false, optional: true, required: false
  private _lineTableExtend?: number; 
  public get lineTableExtend() {
    return this.getNumberAttribute('line_table_extend');
  }
  public set lineTableExtend(value: number) {
    this._lineTableExtend = value;
  }
  public resetLineTableExtend() {
    this._lineTableExtend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineTableExtendInput() {
    return this._lineTableExtend;
  }

  // line_table_extend_fail - computed: false, optional: true, required: false
  private _lineTableExtendFail?: number; 
  public get lineTableExtendFail() {
    return this.getNumberAttribute('line_table_extend_fail');
  }
  public set lineTableExtendFail(value: number) {
    this._lineTableExtendFail = value;
  }
  public resetLineTableExtendFail() {
    this._lineTableExtendFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineTableExtendFailInput() {
    return this._lineTableExtendFail;
  }

  // line_too_long - computed: false, optional: true, required: false
  private _lineTooLong?: number; 
  public get lineTooLong() {
    return this.getNumberAttribute('line_too_long');
  }
  public set lineTooLong(value: number) {
    this._lineTooLong = value;
  }
  public resetLineTooLong() {
    this._lineTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineTooLongInput() {
    return this._lineTooLong;
  }

  // new_server_conn - computed: false, optional: true, required: false
  private _newServerConn?: number; 
  public get newServerConn() {
    return this.getNumberAttribute('new_server_conn');
  }
  public set newServerConn(value: number) {
    this._newServerConn = value;
  }
  public resetNewServerConn() {
    this._newServerConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newServerConnInput() {
    return this._newServerConn;
  }

  // no_proxy - computed: false, optional: true, required: false
  private _noProxy?: number; 
  public get noProxy() {
    return this.getNumberAttribute('no_proxy');
  }
  public set noProxy(value: number) {
    this._noProxy = value;
  }
  public resetNoProxy() {
    this._noProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyInput() {
    return this._noProxy;
  }

  // no_tuple - computed: false, optional: true, required: false
  private _noTuple?: number; 
  public get noTuple() {
    return this.getNumberAttribute('no_tuple');
  }
  public set noTuple(value: number) {
    this._noTuple = value;
  }
  public resetNoTuple() {
    this._noTuple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noTupleInput() {
    return this._noTuple;
  }

  // parse_req_fail - computed: false, optional: true, required: false
  private _parseReqFail?: number; 
  public get parseReqFail() {
    return this.getNumberAttribute('parse_req_fail');
  }
  public set parseReqFail(value: number) {
    this._parseReqFail = value;
  }
  public resetParseReqFail() {
    this._parseReqFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseReqFailInput() {
    return this._parseReqFail;
  }

  // parse_request_line_fail - computed: false, optional: true, required: false
  private _parseRequestLineFail?: number; 
  public get parseRequestLineFail() {
    return this.getNumberAttribute('parse_request_line_fail');
  }
  public set parseRequestLineFail(value: number) {
    this._parseRequestLineFail = value;
  }
  public resetParseRequestLineFail() {
    this._parseRequestLineFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseRequestLineFailInput() {
    return this._parseRequestLineFail;
  }

  // parse_resonse_line_fail - computed: false, optional: true, required: false
  private _parseResonseLineFail?: number; 
  public get parseResonseLineFail() {
    return this.getNumberAttribute('parse_resonse_line_fail');
  }
  public set parseResonseLineFail(value: number) {
    this._parseResonseLineFail = value;
  }
  public resetParseResonseLineFail() {
    this._parseResonseLineFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseResonseLineFailInput() {
    return this._parseResonseLineFail;
  }

  // peak_conn - computed: false, optional: true, required: false
  private _peakConn?: number; 
  public get peakConn() {
    return this.getNumberAttribute('peak_conn');
  }
  public set peakConn(value: number) {
    this._peakConn = value;
  }
  public resetPeakConn() {
    this._peakConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peakConnInput() {
    return this._peakConn;
  }

  // read_request_line_fail - computed: false, optional: true, required: false
  private _readRequestLineFail?: number; 
  public get readRequestLineFail() {
    return this.getNumberAttribute('read_request_line_fail');
  }
  public set readRequestLineFail(value: number) {
    this._readRequestLineFail = value;
  }
  public resetReadRequestLineFail() {
    this._readRequestLineFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readRequestLineFailInput() {
    return this._readRequestLineFail;
  }

  // recv_client_command_etrn - computed: false, optional: true, required: false
  private _recvClientCommandEtrn?: number; 
  public get recvClientCommandEtrn() {
    return this.getNumberAttribute('recv_client_command_etrn');
  }
  public set recvClientCommandEtrn(value: number) {
    this._recvClientCommandEtrn = value;
  }
  public resetRecvClientCommandEtrn() {
    this._recvClientCommandEtrn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvClientCommandEtrnInput() {
    return this._recvClientCommandEtrn;
  }

  // recv_client_command_others - computed: false, optional: true, required: false
  private _recvClientCommandOthers?: number; 
  public get recvClientCommandOthers() {
    return this.getNumberAttribute('recv_client_command_others');
  }
  public set recvClientCommandOthers(value: number) {
    this._recvClientCommandOthers = value;
  }
  public resetRecvClientCommandOthers() {
    this._recvClientCommandOthers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvClientCommandOthersInput() {
    return this._recvClientCommandOthers;
  }

  // recv_client_command_rcpt - computed: false, optional: true, required: false
  private _recvClientCommandRcpt?: number; 
  public get recvClientCommandRcpt() {
    return this.getNumberAttribute('recv_client_command_rcpt');
  }
  public set recvClientCommandRcpt(value: number) {
    this._recvClientCommandRcpt = value;
  }
  public resetRecvClientCommandRcpt() {
    this._recvClientCommandRcpt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvClientCommandRcptInput() {
    return this._recvClientCommandRcpt;
  }

  // recv_client_command_starttls - computed: false, optional: true, required: false
  private _recvClientCommandStarttls?: number; 
  public get recvClientCommandStarttls() {
    return this.getNumberAttribute('recv_client_command_starttls');
  }
  public set recvClientCommandStarttls(value: number) {
    this._recvClientCommandStarttls = value;
  }
  public resetRecvClientCommandStarttls() {
    this._recvClientCommandStarttls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvClientCommandStarttlsInput() {
    return this._recvClientCommandStarttls;
  }

  // recv_client_command_turn - computed: false, optional: true, required: false
  private _recvClientCommandTurn?: number; 
  public get recvClientCommandTurn() {
    return this.getNumberAttribute('recv_client_command_turn');
  }
  public set recvClientCommandTurn(value: number) {
    this._recvClientCommandTurn = value;
  }
  public resetRecvClientCommandTurn() {
    this._recvClientCommandTurn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvClientCommandTurnInput() {
    return this._recvClientCommandTurn;
  }

  // recv_server_service_not_ready - computed: false, optional: true, required: false
  private _recvServerServiceNotReady?: number; 
  public get recvServerServiceNotReady() {
    return this.getNumberAttribute('recv_server_service_not_ready');
  }
  public set recvServerServiceNotReady(value: number) {
    this._recvServerServiceNotReady = value;
  }
  public resetRecvServerServiceNotReady() {
    this._recvServerServiceNotReady = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvServerServiceNotReadyInput() {
    return this._recvServerServiceNotReady;
  }

  // recv_server_unknow_reply_code - computed: false, optional: true, required: false
  private _recvServerUnknowReplyCode?: number; 
  public get recvServerUnknowReplyCode() {
    return this.getNumberAttribute('recv_server_unknow_reply_code');
  }
  public set recvServerUnknowReplyCode(value: number) {
    this._recvServerUnknowReplyCode = value;
  }
  public resetRecvServerUnknowReplyCode() {
    this._recvServerUnknowReplyCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvServerUnknowReplyCodeInput() {
    return this._recvServerUnknowReplyCode;
  }

  // remove_resonse_line_fail - computed: false, optional: true, required: false
  private _removeResonseLineFail?: number; 
  public get removeResonseLineFail() {
    return this.getNumberAttribute('remove_resonse_line_fail');
  }
  public set removeResonseLineFail(value: number) {
    this._removeResonseLineFail = value;
  }
  public resetRemoveResonseLineFail() {
    this._removeResonseLineFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeResonseLineFailInput() {
    return this._removeResonseLineFail;
  }

  // reply_100m - computed: false, optional: true, required: false
  private _reply100M?: number; 
  public get reply100M() {
    return this.getNumberAttribute('reply_100m');
  }
  public set reply100M(value: number) {
    this._reply100M = value;
  }
  public resetReply100M() {
    this._reply100M = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reply100MInput() {
    return this._reply100M;
  }

  // reply_100u - computed: false, optional: true, required: false
  private _reply100U?: number; 
  public get reply100U() {
    return this.getNumberAttribute('reply_100u');
  }
  public set reply100U(value: number) {
    this._reply100U = value;
  }
  public resetReply100U() {
    this._reply100U = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reply100UInput() {
    return this._reply100U;
  }

  // reply_10m - computed: false, optional: true, required: false
  private _reply10M?: number; 
  public get reply10M() {
    return this.getNumberAttribute('reply_10m');
  }
  public set reply10M(value: number) {
    this._reply10M = value;
  }
  public resetReply10M() {
    this._reply10M = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reply10MInput() {
    return this._reply10M;
  }

  // reply_10u - computed: false, optional: true, required: false
  private _reply10U?: number; 
  public get reply10U() {
    return this.getNumberAttribute('reply_10u');
  }
  public set reply10U(value: number) {
    this._reply10U = value;
  }
  public resetReply10U() {
    this._reply10U = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reply10UInput() {
    return this._reply10U;
  }

  // reply_1m - computed: false, optional: true, required: false
  private _reply1M?: number; 
  public get reply1M() {
    return this.getNumberAttribute('reply_1m');
  }
  public set reply1M(value: number) {
    this._reply1M = value;
  }
  public resetReply1M() {
    this._reply1M = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reply1MInput() {
    return this._reply1M;
  }

  // reply_1s - computed: false, optional: true, required: false
  private _reply1S?: number; 
  public get reply1S() {
    return this.getNumberAttribute('reply_1s');
  }
  public set reply1S(value: number) {
    this._reply1S = value;
  }
  public resetReply1S() {
    this._reply1S = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reply1SInput() {
    return this._reply1S;
  }

  // reply_200m - computed: false, optional: true, required: false
  private _reply200M?: number; 
  public get reply200M() {
    return this.getNumberAttribute('reply_200m');
  }
  public set reply200M(value: number) {
    this._reply200M = value;
  }
  public resetReply200M() {
    this._reply200M = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reply200MInput() {
    return this._reply200M;
  }

  // reply_200u - computed: false, optional: true, required: false
  private _reply200U?: number; 
  public get reply200U() {
    return this.getNumberAttribute('reply_200u');
  }
  public set reply200U(value: number) {
    this._reply200U = value;
  }
  public resetReply200U() {
    this._reply200U = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reply200UInput() {
    return this._reply200U;
  }

  // reply_20m - computed: false, optional: true, required: false
  private _reply20M?: number; 
  public get reply20M() {
    return this.getNumberAttribute('reply_20m');
  }
  public set reply20M(value: number) {
    this._reply20M = value;
  }
  public resetReply20M() {
    this._reply20M = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reply20MInput() {
    return this._reply20M;
  }

  // reply_20u - computed: false, optional: true, required: false
  private _reply20U?: number; 
  public get reply20U() {
    return this.getNumberAttribute('reply_20u');
  }
  public set reply20U(value: number) {
    this._reply20U = value;
  }
  public resetReply20U() {
    this._reply20U = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reply20UInput() {
    return this._reply20U;
  }

  // reply_2m - computed: false, optional: true, required: false
  private _reply2M?: number; 
  public get reply2M() {
    return this.getNumberAttribute('reply_2m');
  }
  public set reply2M(value: number) {
    this._reply2M = value;
  }
  public resetReply2M() {
    this._reply2M = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reply2MInput() {
    return this._reply2M;
  }

  // reply_2s - computed: false, optional: true, required: false
  private _reply2S?: number; 
  public get reply2S() {
    return this.getNumberAttribute('reply_2s');
  }
  public set reply2S(value: number) {
    this._reply2S = value;
  }
  public resetReply2S() {
    this._reply2S = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reply2SInput() {
    return this._reply2S;
  }

  // reply_500m - computed: false, optional: true, required: false
  private _reply500M?: number; 
  public get reply500M() {
    return this.getNumberAttribute('reply_500m');
  }
  public set reply500M(value: number) {
    this._reply500M = value;
  }
  public resetReply500M() {
    this._reply500M = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reply500MInput() {
    return this._reply500M;
  }

  // reply_500u - computed: false, optional: true, required: false
  private _reply500U?: number; 
  public get reply500U() {
    return this.getNumberAttribute('reply_500u');
  }
  public set reply500U(value: number) {
    this._reply500U = value;
  }
  public resetReply500U() {
    this._reply500U = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reply500UInput() {
    return this._reply500U;
  }

  // reply_50m - computed: false, optional: true, required: false
  private _reply50M?: number; 
  public get reply50M() {
    return this.getNumberAttribute('reply_50m');
  }
  public set reply50M(value: number) {
    this._reply50M = value;
  }
  public resetReply50M() {
    this._reply50M = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reply50MInput() {
    return this._reply50M;
  }

  // reply_50u - computed: false, optional: true, required: false
  private _reply50U?: number; 
  public get reply50U() {
    return this.getNumberAttribute('reply_50u');
  }
  public set reply50U(value: number) {
    this._reply50U = value;
  }
  public resetReply50U() {
    this._reply50U = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reply50UInput() {
    return this._reply50U;
  }

  // reply_5m - computed: false, optional: true, required: false
  private _reply5M?: number; 
  public get reply5M() {
    return this.getNumberAttribute('reply_5m');
  }
  public set reply5M(value: number) {
    this._reply5M = value;
  }
  public resetReply5M() {
    this._reply5M = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reply5MInput() {
    return this._reply5M;
  }

  // reply_5s - computed: false, optional: true, required: false
  private _reply5S?: number; 
  public get reply5S() {
    return this.getNumberAttribute('reply_5s');
  }
  public set reply5S(value: number) {
    this._reply5S = value;
  }
  public resetReply5S() {
    this._reply5S = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reply5SInput() {
    return this._reply5S;
  }

  // reply_over_5s - computed: false, optional: true, required: false
  private _replyOver5S?: number; 
  public get replyOver5S() {
    return this.getNumberAttribute('reply_over_5s');
  }
  public set replyOver5S(value: number) {
    this._replyOver5S = value;
  }
  public resetReplyOver5S() {
    this._replyOver5S = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replyOver5SInput() {
    return this._replyOver5S;
  }

  // req_ofo - computed: false, optional: true, required: false
  private _reqOfo?: number; 
  public get reqOfo() {
    return this.getNumberAttribute('req_ofo');
  }
  public set reqOfo(value: number) {
    this._reqOfo = value;
  }
  public resetReqOfo() {
    this._reqOfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqOfoInput() {
    return this._reqOfo;
  }

  // req_retran - computed: false, optional: true, required: false
  private _reqRetran?: number; 
  public get reqRetran() {
    return this.getNumberAttribute('req_retran');
  }
  public set reqRetran(value: number) {
    this._reqRetran = value;
  }
  public resetReqRetran() {
    this._reqRetran = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqRetranInput() {
    return this._reqRetran;
  }

  // request - computed: false, optional: true, required: false
  private _request?: number; 
  public get request() {
    return this.getNumberAttribute('request');
  }
  public set request(value: number) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }

  // request_success - computed: false, optional: true, required: false
  private _requestSuccess?: number; 
  public get requestSuccess() {
    return this.getNumberAttribute('request_success');
  }
  public set requestSuccess(value: number) {
    this._requestSuccess = value;
  }
  public resetRequestSuccess() {
    this._requestSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestSuccessInput() {
    return this._requestSuccess;
  }

  // rserver_starttls_disable - computed: false, optional: true, required: false
  private _rserverStarttlsDisable?: number; 
  public get rserverStarttlsDisable() {
    return this.getNumberAttribute('rserver_starttls_disable');
  }
  public set rserverStarttlsDisable(value: number) {
    this._rserverStarttlsDisable = value;
  }
  public resetRserverStarttlsDisable() {
    this._rserverStarttlsDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rserverStarttlsDisableInput() {
    return this._rserverStarttlsDisable;
  }

  // send_client_close_connection - computed: false, optional: true, required: false
  private _sendClientCloseConnection?: number; 
  public get sendClientCloseConnection() {
    return this.getNumberAttribute('send_client_close_connection');
  }
  public set sendClientCloseConnection(value: number) {
    this._sendClientCloseConnection = value;
  }
  public resetSendClientCloseConnection() {
    this._sendClientCloseConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendClientCloseConnectionInput() {
    return this._sendClientCloseConnection;
  }

  // send_client_go_ahead - computed: false, optional: true, required: false
  private _sendClientGoAhead?: number; 
  public get sendClientGoAhead() {
    return this.getNumberAttribute('send_client_go_ahead');
  }
  public set sendClientGoAhead(value: number) {
    this._sendClientGoAhead = value;
  }
  public resetSendClientGoAhead() {
    this._sendClientGoAhead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendClientGoAheadInput() {
    return this._sendClientGoAhead;
  }

  // send_client_no_command - computed: false, optional: true, required: false
  private _sendClientNoCommand?: number; 
  public get sendClientNoCommand() {
    return this.getNumberAttribute('send_client_no_command');
  }
  public set sendClientNoCommand(value: number) {
    this._sendClientNoCommand = value;
  }
  public resetSendClientNoCommand() {
    this._sendClientNoCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendClientNoCommandInput() {
    return this._sendClientNoCommand;
  }

  // send_client_service_not_ready - computed: false, optional: true, required: false
  private _sendClientServiceNotReady?: number; 
  public get sendClientServiceNotReady() {
    return this.getNumberAttribute('send_client_service_not_ready');
  }
  public set sendClientServiceNotReady(value: number) {
    this._sendClientServiceNotReady = value;
  }
  public resetSendClientServiceNotReady() {
    this._sendClientServiceNotReady = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendClientServiceNotReadyInput() {
    return this._sendClientServiceNotReady;
  }

  // send_client_service_ready - computed: false, optional: true, required: false
  private _sendClientServiceReady?: number; 
  public get sendClientServiceReady() {
    return this.getNumberAttribute('send_client_service_ready');
  }
  public set sendClientServiceReady(value: number) {
    this._sendClientServiceReady = value;
  }
  public resetSendClientServiceReady() {
    this._sendClientServiceReady = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendClientServiceReadyInput() {
    return this._sendClientServiceReady;
  }

  // send_client_start_tls_first - computed: false, optional: true, required: false
  private _sendClientStartTlsFirst?: number; 
  public get sendClientStartTlsFirst() {
    return this.getNumberAttribute('send_client_start_tls_first');
  }
  public set sendClientStartTlsFirst(value: number) {
    this._sendClientStartTlsFirst = value;
  }
  public resetSendClientStartTlsFirst() {
    this._sendClientStartTlsFirst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendClientStartTlsFirstInput() {
    return this._sendClientStartTlsFirst;
  }

  // send_client_tls_not_available - computed: false, optional: true, required: false
  private _sendClientTlsNotAvailable?: number; 
  public get sendClientTlsNotAvailable() {
    return this.getNumberAttribute('send_client_tls_not_available');
  }
  public set sendClientTlsNotAvailable(value: number) {
    this._sendClientTlsNotAvailable = value;
  }
  public resetSendClientTlsNotAvailable() {
    this._sendClientTlsNotAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendClientTlsNotAvailableInput() {
    return this._sendClientTlsNotAvailable;
  }

  // send_server_cmd_reset - computed: false, optional: true, required: false
  private _sendServerCmdReset?: number; 
  public get sendServerCmdReset() {
    return this.getNumberAttribute('send_server_cmd_reset');
  }
  public set sendServerCmdReset(value: number) {
    this._sendServerCmdReset = value;
  }
  public resetSendServerCmdReset() {
    this._sendServerCmdReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendServerCmdResetInput() {
    return this._sendServerCmdReset;
  }

  // send_server_ehlo - computed: false, optional: true, required: false
  private _sendServerEhlo?: number; 
  public get sendServerEhlo() {
    return this.getNumberAttribute('send_server_ehlo');
  }
  public set sendServerEhlo(value: number) {
    this._sendServerEhlo = value;
  }
  public resetSendServerEhlo() {
    this._sendServerEhlo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendServerEhloInput() {
    return this._sendServerEhlo;
  }

  // server_bytes - computed: false, optional: true, required: false
  private _serverBytes?: number; 
  public get serverBytes() {
    return this.getNumberAttribute('server_bytes');
  }
  public set serverBytes(value: number) {
    this._serverBytes = value;
  }
  public resetServerBytes() {
    this._serverBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverBytesInput() {
    return this._serverBytes;
  }

  // server_prem_close - computed: false, optional: true, required: false
  private _serverPremClose?: number; 
  public get serverPremClose() {
    return this.getNumberAttribute('server_prem_close');
  }
  public set serverPremClose(value: number) {
    this._serverPremClose = value;
  }
  public resetServerPremClose() {
    this._serverPremClose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPremCloseInput() {
    return this._serverPremClose;
  }

  // server_reselect - computed: false, optional: true, required: false
  private _serverReselect?: number; 
  public get serverReselect() {
    return this.getNumberAttribute('server_reselect');
  }
  public set serverReselect(value: number) {
    this._serverReselect = value;
  }
  public resetServerReselect() {
    this._serverReselect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverReselectInput() {
    return this._serverReselect;
  }

  // server_reset - computed: false, optional: true, required: false
  private _serverReset?: number; 
  public get serverReset() {
    return this.getNumberAttribute('server_reset');
  }
  public set serverReset(value: number) {
    this._serverReset = value;
  }
  public resetServerReset() {
    this._serverReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverResetInput() {
    return this._serverReset;
  }

  // server_select_fail - computed: false, optional: true, required: false
  private _serverSelectFail?: number; 
  public get serverSelectFail() {
    return this.getNumberAttribute('server_select_fail');
  }
  public set serverSelectFail(value: number) {
    this._serverSelectFail = value;
  }
  public resetServerSelectFail() {
    this._serverSelectFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSelectFailInput() {
    return this._serverSelectFail;
  }

  // server_starttls_fail - computed: false, optional: true, required: false
  private _serverStarttlsFail?: number; 
  public get serverStarttlsFail() {
    return this.getNumberAttribute('server_starttls_fail');
  }
  public set serverStarttlsFail(value: number) {
    this._serverStarttlsFail = value;
  }
  public resetServerStarttlsFail() {
    this._serverStarttlsFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverStarttlsFailInput() {
    return this._serverStarttlsFail;
  }

  // server_starttls_init - computed: false, optional: true, required: false
  private _serverStarttlsInit?: number; 
  public get serverStarttlsInit() {
    return this.getNumberAttribute('server_starttls_init');
  }
  public set serverStarttlsInit(value: number) {
    this._serverStarttlsInit = value;
  }
  public resetServerStarttlsInit() {
    this._serverStarttlsInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverStarttlsInitInput() {
    return this._serverStarttlsInit;
  }

  // snat_fail - computed: false, optional: true, required: false
  private _snatFail?: number; 
  public get snatFail() {
    return this.getNumberAttribute('snat_fail');
  }
  public set snatFail(value: number) {
    this._snatFail = value;
  }
  public resetSnatFail() {
    this._snatFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatFailInput() {
    return this._snatFail;
  }

  // tcp_out_reset - computed: false, optional: true, required: false
  private _tcpOutReset?: number; 
  public get tcpOutReset() {
    return this.getNumberAttribute('tcp_out_reset');
  }
  public set tcpOutReset(value: number) {
    this._tcpOutReset = value;
  }
  public resetTcpOutReset() {
    this._tcpOutReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpOutResetInput() {
    return this._tcpOutReset;
  }

  // tls_established - computed: false, optional: true, required: false
  private _tlsEstablished?: number; 
  public get tlsEstablished() {
    return this.getNumberAttribute('tls_established');
  }
  public set tlsEstablished(value: number) {
    this._tlsEstablished = value;
  }
  public resetTlsEstablished() {
    this._tlsEstablished = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsEstablishedInput() {
    return this._tlsEstablished;
  }

  // too_many_headers - computed: false, optional: true, required: false
  private _tooManyHeaders?: number; 
  public get tooManyHeaders() {
    return this.getNumberAttribute('too_many_headers');
  }
  public set tooManyHeaders(value: number) {
    this._tooManyHeaders = value;
  }
  public resetTooManyHeaders() {
    this._tooManyHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tooManyHeadersInput() {
    return this._tooManyHeaders;
  }

  // total_commands - computed: false, optional: true, required: false
  private _totalCommands?: number; 
  public get totalCommands() {
    return this.getNumberAttribute('total_commands');
  }
  public set totalCommands(value: number) {
    this._totalCommands = value;
  }
  public resetTotalCommands() {
    this._totalCommands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalCommandsInput() {
    return this._totalCommands;
  }

  // total_conn - computed: false, optional: true, required: false
  private _totalConn?: number; 
  public get totalConn() {
    return this.getNumberAttribute('total_conn');
  }
  public set totalConn(value: number) {
    this._totalConn = value;
  }
  public resetTotalConn() {
    this._totalConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalConnInput() {
    return this._totalConn;
  }

  // total_replies - computed: false, optional: true, required: false
  private _totalReplies?: number; 
  public get totalReplies() {
    return this.getNumberAttribute('total_replies');
  }
  public set totalReplies(value: number) {
    this._totalReplies = value;
  }
  public resetTotalReplies() {
    this._totalReplies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalRepliesInput() {
    return this._totalReplies;
  }
}
export interface SlbVirtualServerPortStatsSmtpVportStats {
  /**
  * smtp_vport block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#smtp_vport SlbVirtualServerPortStatsSmtpVport#smtp_vport}
  */
  readonly smtpVport?: SlbVirtualServerPortStatsSmtpVportStatsSmtpVport;
}

export function slbVirtualServerPortStatsSmtpVportStatsToTerraform(struct?: SlbVirtualServerPortStatsSmtpVportStatsOutputReference | SlbVirtualServerPortStatsSmtpVportStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    smtp_vport: slbVirtualServerPortStatsSmtpVportStatsSmtpVportToTerraform(struct!.smtpVport),
  }
}


export function slbVirtualServerPortStatsSmtpVportStatsToHclTerraform(struct?: SlbVirtualServerPortStatsSmtpVportStatsOutputReference | SlbVirtualServerPortStatsSmtpVportStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    smtp_vport: {
      value: slbVirtualServerPortStatsSmtpVportStatsSmtpVportToHclTerraform(struct!.smtpVport),
      isBlock: true,
      type: "list",
      storageClassType: "SlbVirtualServerPortStatsSmtpVportStatsSmtpVportList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbVirtualServerPortStatsSmtpVportStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbVirtualServerPortStatsSmtpVportStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._smtpVport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smtpVport = this._smtpVport?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbVirtualServerPortStatsSmtpVportStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._smtpVport.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._smtpVport.internalValue = value.smtpVport;
    }
  }

  // smtp_vport - computed: false, optional: true, required: false
  private _smtpVport = new SlbVirtualServerPortStatsSmtpVportStatsSmtpVportOutputReference(this, "smtp_vport");
  public get smtpVport() {
    return this._smtpVport;
  }
  public putSmtpVport(value: SlbVirtualServerPortStatsSmtpVportStatsSmtpVport) {
    this._smtpVport.internalValue = value;
  }
  public resetSmtpVport() {
    this._smtpVport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpVportInput() {
    return this._smtpVport.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport thunder_slb_virtual_server_port_stats_smtp_vport}
*/
export class SlbVirtualServerPortStatsSmtpVport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_virtual_server_port_stats_smtp_vport";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbVirtualServerPortStatsSmtpVport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbVirtualServerPortStatsSmtpVport to import
  * @param importFromId The id of the existing SlbVirtualServerPortStatsSmtpVport that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbVirtualServerPortStatsSmtpVport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_virtual_server_port_stats_smtp_vport", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_smtp_vport thunder_slb_virtual_server_port_stats_smtp_vport} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbVirtualServerPortStatsSmtpVportConfig
  */
  public constructor(scope: Construct, id: string, config: SlbVirtualServerPortStatsSmtpVportConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_virtual_server_port_stats_smtp_vport',
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
    this._portNumber = config.portNumber;
    this._protocol = config.protocol;
    this._virtualServerName = config.virtualServerName;
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

  // port_number - computed: false, optional: false, required: true
  private _portNumber?: number; 
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }
  public set portNumber(value: number) {
    this._portNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumberInput() {
    return this._portNumber;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // virtual_server_name - computed: false, optional: false, required: true
  private _virtualServerName?: string; 
  public get virtualServerName() {
    return this.getStringAttribute('virtual_server_name');
  }
  public set virtualServerName(value: string) {
    this._virtualServerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerNameInput() {
    return this._virtualServerName;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new SlbVirtualServerPortStatsSmtpVportStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: SlbVirtualServerPortStatsSmtpVportStats) {
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
      port_number: cdktf.numberToTerraform(this._portNumber),
      protocol: cdktf.stringToTerraform(this._protocol),
      virtual_server_name: cdktf.stringToTerraform(this._virtualServerName),
      stats: slbVirtualServerPortStatsSmtpVportStatsToTerraform(this._stats.internalValue),
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
      port_number: {
        value: cdktf.numberToHclTerraform(this._portNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_server_name: {
        value: cdktf.stringToHclTerraform(this._virtualServerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: slbVirtualServerPortStatsSmtpVportStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbVirtualServerPortStatsSmtpVportStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
