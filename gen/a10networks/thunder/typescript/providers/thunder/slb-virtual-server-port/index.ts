// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbVirtualServerPortConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'enable': Enable; 'disable': Disable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#action SlbVirtualServerPort#action}
  */
  readonly action?: string;
  /**
  * Disable aFlex entry sync for this port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#aflex_table_entry_syn_disable SlbVirtualServerPort#aflex_table_entry_syn_disable}
  */
  readonly aflexTableEntrySynDisable?: number;
  /**
  * Enable aFlex entry sync for this port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#aflex_table_entry_syn_enable SlbVirtualServerPort#aflex_table_entry_syn_enable}
  */
  readonly aflexTableEntrySynEnable?: number;
  /**
  * 'http': HTTP Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#alt_protocol1 SlbVirtualServerPort#alt_protocol1}
  */
  readonly altProtocol1?: string;
  /**
  * 'tcp': TCP LB service;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#alt_protocol2 SlbVirtualServerPort#alt_protocol2}
  */
  readonly altProtocol2?: string;
  /**
  * Alternate Virtual Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#alternate_port SlbVirtualServerPort#alternate_port}
  */
  readonly alternatePort?: number;
  /**
  * Virtual Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#alternate_port_number SlbVirtualServerPort#alternate_port_number}
  */
  readonly alternatePortNumber?: number;
  /**
  * Enable analytics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#attack_detection SlbVirtualServerPort#attack_detection}
  */
  readonly attackDetection?: number;
  /**
  * Configure auto NAT for the vport
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#auto SlbVirtualServerPort#auto}
  */
  readonly auto?: number;
  /**
  * Prefer to use same source NAT address for a client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#clientip_sticky_nat SlbVirtualServerPort#clientip_sticky_nat}
  */
  readonly clientipStickyNat?: number;
  /**
  * Connection Limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#conn_limit SlbVirtualServerPort#conn_limit}
  */
  readonly connLimit?: number;
  /**
  * enable cpu compute on virtual port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#cpu_compute SlbVirtualServerPort#cpu_compute}
  */
  readonly cpuCompute?: number;
  /**
  * 'def-selection-if-pref-failed': Use default server selection method if prefer method failed; 'def-selection-if-pref-failed-disable': Stop using default server selection method if prefer method failed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#def_selection_if_pref_failed SlbVirtualServerPort#def_selection_if_pref_failed}
  */
  readonly defSelectionIfPrefFailed?: string;
  /**
  * Enable playerid checks on UDP packets once the AX is in active mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#enable_playerid_check SlbVirtualServerPort#enable_playerid_check}
  */
  readonly enablePlayeridCheck?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#enable_scaleout SlbVirtualServerPort#enable_scaleout}
  */
  readonly enableScaleout?: number;
  /**
  * Ethernet interface number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#eth_fwd SlbVirtualServerPort#eth_fwd}
  */
  readonly ethFwd?: number;
  /**
  * Ethernet interface number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#eth_rev SlbVirtualServerPort#eth_rev}
  */
  readonly ethRev?: number;
  /**
  * expand syn-cookie with timestamp and wscale
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#expand SlbVirtualServerPort#expand}
  */
  readonly expand?: number;
  /**
  * Enable extended statistics on virtual port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#extended_stats SlbVirtualServerPort#extended_stats}
  */
  readonly extendedStats?: number;
  /**
  * 'force': Force fast path in SLB processing; 'disable': Disable fast path in SLB processing;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#fast_path SlbVirtualServerPort#fast_path}
  */
  readonly fastPath?: string;
  /**
  * Force routing mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#force_routing_mode SlbVirtualServerPort#force_routing_mode}
  */
  readonly forceRoutingMode?: number;
  /**
  * Enable Global Server Load Balancing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#gslb_enable SlbVirtualServerPort#gslb_enable}
  */
  readonly gslbEnable?: number;
  /**
  * Enable GTP Session Load Balancing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#gtp_session_lb SlbVirtualServerPort#gtp_session_lb}
  */
  readonly gtpSessionLb?: number;
  /**
  * Enable for HA Conn sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#ha_conn_mirror SlbVirtualServerPort#ha_conn_mirror}
  */
  readonly haConnMirror?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#id SlbVirtualServerPort#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ignore global substitute-source-mac
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#ignore_global SlbVirtualServerPort#ignore_global}
  */
  readonly ignoreGlobal?: number;
  /**
  * Enter name of IP Map List to be bound (IP Map List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#ip_map_list SlbVirtualServerPort#ip_map_list}
  */
  readonly ipMapList?: string;
  /**
  * Enable IP-Only LB mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#ip_only_lb SlbVirtualServerPort#ip_only_lb}
  */
  readonly ipOnlyLb?: number;
  /**
  * Use IP address round-robin behavior
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#ip_smart_rr SlbVirtualServerPort#ip_smart_rr}
  */
  readonly ipSmartRr?: number;
  /**
  * Enable IP in IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#ipinip SlbVirtualServerPort#ipinip}
  */
  readonly ipinip?: number;
  /**
  * FPGA assist L7 packet parsing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#l7_hardware_assist SlbVirtualServerPort#l7_hardware_assist}
  */
  readonly l7HardwareAssist?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#l7_service_chain SlbVirtualServerPort#l7_service_chain}
  */
  readonly l7ServiceChain?: number;
  /**
  * enable dynamic memory compute on virtual port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#memory_compute SlbVirtualServerPort#memory_compute}
  */
  readonly memoryCompute?: number;
  /**
  * Message switching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#message_switching SlbVirtualServerPort#message_switching}
  */
  readonly messageSwitching?: number;
  /**
  * SLB Virtual Service Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#name SlbVirtualServerPort#name}
  */
  readonly name?: string;
  /**
  * Next-gen WAF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#ng_waf SlbVirtualServerPort#ng_waf}
  */
  readonly ngWaf?: number;
  /**
  * Don't automatically mark vport up when aFleX is bound
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#no_auto_up_on_aflex SlbVirtualServerPort#no_auto_up_on_aflex}
  */
  readonly noAutoUpOnAflex?: number;
  /**
  * Disable destination NAT, this option only supports in wildcard VIP or when a connection is operated in SSLi + EP mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#no_dest_nat SlbVirtualServerPort#no_dest_nat}
  */
  readonly noDestNat?: number;
  /**
  * Do not log connection over limit event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#no_logging SlbVirtualServerPort#no_logging}
  */
  readonly noLogging?: number;
  /**
  * Enable for HA Conn sync for l4 tcp sessions on SYN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#on_syn SlbVirtualServerPort#on_syn}
  */
  readonly onSyn?: number;
  /**
  * Support server that allow only one connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#one_server_conn SlbVirtualServerPort#one_server_conn}
  */
  readonly oneServerConn?: number;
  /**
  * '0': No optimization; '1': Optimization level 1 (Experimental);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#optimization_level SlbVirtualServerPort#optimization_level}
  */
  readonly optimizationLevel?: string;
  /**
  * SIP Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#p_template_sip_shared SlbVirtualServerPort#p_template_sip_shared}
  */
  readonly pTemplateSipShared?: number;
  /**
  * Name of the packet capture template to be bind with this object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#packet_capture_template SlbVirtualServerPort#packet_capture_template}
  */
  readonly packetCaptureTemplate?: string;
  /**
  * 'src-dst-ip-swap-persist': Create persist session after source IP and destination IP swap; 'use-src-ip-for-dst-persist': Use the source IP to create a destination persist session; 'use-dst-ip-for-src-persist': Use the destination IP to create source IP persist session;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#persist_type SlbVirtualServerPort#persist_type}
  */
  readonly persistType?: string;
  /**
  * Specify NAT pool or pool group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#pool SlbVirtualServerPort#pool}
  */
  readonly pool?: string;
  /**
  * Specify NAT pool or pool group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#pool_shared SlbVirtualServerPort#pool_shared}
  */
  readonly poolShared?: string;
  /**
  * Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#port_number SlbVirtualServerPort#port_number}
  */
  readonly portNumber: number;
  /**
  * Enable port translation under no-dest-nat
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#port_translation SlbVirtualServerPort#port_translation}
  */
  readonly portTranslation?: number;
  /**
  * Set auto NAT pool as higher precedence for source NAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#precedence SlbVirtualServerPort#precedence}
  */
  readonly precedence?: number;
  /**
  * 'tcp': TCP LB service; 'udp': UDP Port; 'others': for no tcp/udp protocol, do IP load balancing; 'diameter': diameter port; 'dns-tcp': DNS service over TCP; 'dns-udp': DNS service over UDP; 'fast-http': Fast HTTP Port; 'fix': FIX Port; 'ftp': File Transfer Protocol Port; 'ftp-proxy': ftp proxy port; 'http': HTTP Port; 'https': HTTPS port; 'imap': imap proxy port; 'mlb': Message based load balancing; 'mms': Microsoft Multimedia Service Port; 'mysql': mssql port; 'mssql': mssql; 'pop3': pop3 proxy port; 'radius': RADIUS Port; 'rtsp': Real Time Streaming Protocol Port; 'sip': Session initiation protocol over UDP; 'sip-tcp': Session initiation protocol over TCP; 'sips': Session initiation protocol over TLS; 'smpp-tcp': SMPP service over TCP; 'spdy': spdy port; 'spdys': spdys port; 'smtp': SMTP Port; 'mqtt': MQTT Port; 'mqtts': MQTTS Port; 'ssl-proxy': Generic SSL proxy; 'ssli': SSL insight; 'ssh': SSH Port; 'tcp-proxy': Generic TCP proxy; 'tftp': TFTP Port; 'fast-fix': Fast FIX port; 'http-over-quic': HTTP3-over-quic port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#protocol SlbVirtualServerPort#protocol}
  */
  readonly protocol: string;
  /**
  * 'v1': Force using old proxy; 'v2': Force using new proxy;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#proxy_layer SlbVirtualServerPort#proxy_layer}
  */
  readonly proxyLayer?: string;
  /**
  * Virtual Port range (Virtual Port range value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#range SlbVirtualServerPort#range}
  */
  readonly range?: number;
  /**
  * Specify the log message rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#rate SlbVirtualServerPort#rate}
  */
  readonly rate?: number;
  /**
  * Redirect HTTP to HTTPS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#redirect_to_https SlbVirtualServerPort#redirect_to_https}
  */
  readonly redirectToHttps?: number;
  /**
  * Reply ACME http-01 challenge. This option only takes effect in HTTP port 80
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#reply_acme_challenge SlbVirtualServerPort#reply_acme_challenge}
  */
  readonly replyAcmeChallenge?: number;
  /**
  * Use alternate virtual port when L7 request fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#req_fail SlbVirtualServerPort#req_fail}
  */
  readonly reqFail?: number;
  /**
  * 'disable': disable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#reselection SlbVirtualServerPort#reselection}
  */
  readonly reselection?: string;
  /**
  * Send client reset when connection number over limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#reset SlbVirtualServerPort#reset}
  */
  readonly reset?: number;
  /**
  * Send client reset when server selection fails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#reset_on_server_selection_fail SlbVirtualServerPort#reset_on_server_selection_fail}
  */
  readonly resetOnServerSelectionFail?: number;
  /**
  * Web Category List name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#resolve_web_cat_list SlbVirtualServerPort#resolve_web_cat_list}
  */
  readonly resolveWebCatList?: string;
  /**
  * rtp traffic try to match the real server of sip smp call-id session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#rtp_sip_call_id_match SlbVirtualServerPort#rtp_sip_call_id_match}
  */
  readonly rtpSipCallIdMatch?: number;
  /**
  * Specify the interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#secs SlbVirtualServerPort#secs}
  */
  readonly secs?: number;
  /**
  * Use alternate virtual port when server selection failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#serv_sel_fail SlbVirtualServerPort#serv_sel_fail}
  */
  readonly servSelFail?: number;
  /**
  * Bind a use-rcv-hop-for-resp Server Group to this Virtual Server (Server Group Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#server_group SlbVirtualServerPort#server_group}
  */
  readonly serverGroup?: string;
  /**
  * Bind a Service Group to this Virtual Server (Service Group Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#service_group SlbVirtualServerPort#service_group}
  */
  readonly serviceGroup?: string;
  /**
  * Reference a Cache template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#shared_partition_cache_template SlbVirtualServerPort#shared_partition_cache_template}
  */
  readonly sharedPartitionCacheTemplate?: number;
  /**
  * Reference a Client SSL template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#shared_partition_client_ssl_template SlbVirtualServerPort#shared_partition_client_ssl_template}
  */
  readonly sharedPartitionClientSslTemplate?: number;
  /**
  * Reference a connection reuse template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#shared_partition_connection_reuse_template SlbVirtualServerPort#shared_partition_connection_reuse_template}
  */
  readonly sharedPartitionConnectionReuseTemplate?: number;
  /**
  * Reference a dblb template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#shared_partition_dblb_template SlbVirtualServerPort#shared_partition_dblb_template}
  */
  readonly sharedPartitionDblbTemplate?: number;
  /**
  * Reference a Diameter template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#shared_partition_diameter_template SlbVirtualServerPort#shared_partition_diameter_template}
  */
  readonly sharedPartitionDiameterTemplate?: number;
  /**
  * Reference a dns template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#shared_partition_dns_template SlbVirtualServerPort#shared_partition_dns_template}
  */
  readonly sharedPartitionDnsTemplate?: number;
  /**
  * Reference a DNS over HTTP(s) template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#shared_partition_doh_template SlbVirtualServerPort#shared_partition_doh_template}
  */
  readonly sharedPartitionDohTemplate?: number;
  /**
  * Reference a dynamic service template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#shared_partition_dynamic_service_template SlbVirtualServerPort#shared_partition_dynamic_service_template}
  */
  readonly sharedPartitionDynamicServiceTemplate?: number;
  /**
  * Reference a external service template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#shared_partition_external_service_template SlbVirtualServerPort#shared_partition_external_service_template}
  */
  readonly sharedPartitionExternalServiceTemplate?: number;
  /**
  * Reference a FIX template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#shared_partition_fix_template SlbVirtualServerPort#shared_partition_fix_template}
  */
  readonly sharedPartitionFixTemplate?: number;
  /**
  * Reference a http policy template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#shared_partition_http_policy_template SlbVirtualServerPort#shared_partition_http_policy_template}
  */
  readonly sharedPartitionHttpPolicyTemplate?: number;
  /**
  * Reference a HTTP template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#shared_partition_http_template SlbVirtualServerPort#shared_partition_http_template}
  */
  readonly sharedPartitionHttpTemplate?: number;
  /**
  * Reference a IMAP/POP3 template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#shared_partition_imap_pop3_template SlbVirtualServerPort#shared_partition_imap_pop3_template}
  */
  readonly sharedPartitionImapPop3Template?: number;
  /**
  * Reference a persist cookie template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#shared_partition_persist_cookie_template SlbVirtualServerPort#shared_partition_persist_cookie_template}
  */
  readonly sharedPartitionPersistCookieTemplate?: number;
  /**
  * Reference a persist destination ip template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#shared_partition_persist_destination_ip_template SlbVirtualServerPort#shared_partition_persist_destination_ip_template}
  */
  readonly sharedPartitionPersistDestinationIpTemplate?: number;
  /**
  * Reference a persist source ip template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#shared_partition_persist_source_ip_template SlbVirtualServerPort#shared_partition_persist_source_ip_template}
  */
  readonly sharedPartitionPersistSourceIpTemplate?: number;
  /**
  * Reference a persist SSL SID template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#shared_partition_persist_ssl_sid_template SlbVirtualServerPort#shared_partition_persist_ssl_sid_template}
  */
  readonly sharedPartitionPersistSslSidTemplate?: number;
  /**
  * Reference a policy template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#shared_partition_policy_template SlbVirtualServerPort#shared_partition_policy_template}
  */
  readonly sharedPartitionPolicyTemplate?: number;
  /**
  * Specify NAT pool or pool group from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#shared_partition_pool SlbVirtualServerPort#shared_partition_pool}
  */
  readonly sharedPartitionPool?: number;
  /**
  * Reference a QUIC template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#shared_partition_quic_template SlbVirtualServerPort#shared_partition_quic_template}
  */
  readonly sharedPartitionQuicTemplate?: number;
  /**
  * Reference a SSL Server template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#shared_partition_server_ssl_template SlbVirtualServerPort#shared_partition_server_ssl_template}
  */
  readonly sharedPartitionServerSslTemplate?: number;
  /**
  * Reference a smpp template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#shared_partition_smpp_template SlbVirtualServerPort#shared_partition_smpp_template}
  */
  readonly sharedPartitionSmppTemplate?: number;
  /**
  * Reference a SMTP template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#shared_partition_smtp_template SlbVirtualServerPort#shared_partition_smtp_template}
  */
  readonly sharedPartitionSmtpTemplate?: number;
  /**
  * Reference a tcp template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#shared_partition_tcp SlbVirtualServerPort#shared_partition_tcp}
  */
  readonly sharedPartitionTcp?: number;
  /**
  * Reference a TCP Proxy template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#shared_partition_tcp_proxy_template SlbVirtualServerPort#shared_partition_tcp_proxy_template}
  */
  readonly sharedPartitionTcpProxyTemplate?: number;
  /**
  * Reference a UDP template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#shared_partition_udp SlbVirtualServerPort#shared_partition_udp}
  */
  readonly sharedPartitionUdp?: number;
  /**
  * Reference a Virtual Port template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#shared_partition_virtual_port_template SlbVirtualServerPort#shared_partition_virtual_port_template}
  */
  readonly sharedPartitionVirtualPortTemplate?: number;
  /**
  * Enable print extended stats in showtech
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#showtech_print_extended_stats SlbVirtualServerPort#showtech_print_extended_stats}
  */
  readonly showtechPrintExtendedStats?: number;
  /**
  * Skip rev tuple hash insertion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#skip_rev_hash SlbVirtualServerPort#skip_rev_hash}
  */
  readonly skipRevHash?: number;
  /**
  * Enable source NAT traffic against VIP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#snat_on_vip SlbVirtualServerPort#snat_on_vip}
  */
  readonly snatOnVip?: number;
  /**
  * 'stats-data-enable': Enable statistical data collection for virtual port; 'stats-data-disable': Disable statistical data collection for virtual port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#stats_data_action SlbVirtualServerPort#stats_data_action}
  */
  readonly statsDataAction?: string;
  /**
  * Substitute Source MAC Address to that of the outgoing interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#substitute_source_mac SlbVirtualServerPort#substitute_source_mac}
  */
  readonly substituteSourceMac?: number;
  /**
  * Support HTTP2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#support_http2 SlbVirtualServerPort#support_http2}
  */
  readonly supportHttp2?: number;
  /**
  * Enable syn-cookie
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#syn_cookie SlbVirtualServerPort#syn_cookie}
  */
  readonly synCookie?: number;
  /**
  * RAM caching template (Cache Template Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_cache SlbVirtualServerPort#template_cache}
  */
  readonly templateCache?: string;
  /**
  * Cache Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_cache_shared SlbVirtualServerPort#template_cache_shared}
  */
  readonly templateCacheShared?: string;
  /**
  * Client SSH Template (Client SSH Config Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_client_ssh SlbVirtualServerPort#template_client_ssh}
  */
  readonly templateClientSsh?: string;
  /**
  * Client SSL Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_client_ssl SlbVirtualServerPort#template_client_ssl}
  */
  readonly templateClientSsl?: string;
  /**
  * Client SSL Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_client_ssl_shared SlbVirtualServerPort#template_client_ssl_shared}
  */
  readonly templateClientSslShared?: string;
  /**
  * Connection Reuse Template (Connection Reuse Template Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_connection_reuse SlbVirtualServerPort#template_connection_reuse}
  */
  readonly templateConnectionReuse?: string;
  /**
  * Connection Reuse Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_connection_reuse_shared SlbVirtualServerPort#template_connection_reuse_shared}
  */
  readonly templateConnectionReuseShared?: string;
  /**
  * DBLB Template (DBLB template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_dblb SlbVirtualServerPort#template_dblb}
  */
  readonly templateDblb?: string;
  /**
  * DBLB Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_dblb_shared SlbVirtualServerPort#template_dblb_shared}
  */
  readonly templateDblbShared?: string;
  /**
  * Diameter Template (diameter template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_diameter SlbVirtualServerPort#template_diameter}
  */
  readonly templateDiameter?: string;
  /**
  * Diameter Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_diameter_shared SlbVirtualServerPort#template_diameter_shared}
  */
  readonly templateDiameterShared?: string;
  /**
  * DNS template (DNS template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_dns SlbVirtualServerPort#template_dns}
  */
  readonly templateDns?: string;
  /**
  * DNS Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_dns_shared SlbVirtualServerPort#template_dns_shared}
  */
  readonly templateDnsShared?: string;
  /**
  * DNS over HTTP(s) Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_doh SlbVirtualServerPort#template_doh}
  */
  readonly templateDoh?: string;
  /**
  * DNS over HTTP(s) Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_doh_shared SlbVirtualServerPort#template_doh_shared}
  */
  readonly templateDohShared?: string;
  /**
  * Dynamic Service Template (dynamic-service template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_dynamic_service SlbVirtualServerPort#template_dynamic_service}
  */
  readonly templateDynamicService?: string;
  /**
  * Dynamic Service Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_dynamic_service_shared SlbVirtualServerPort#template_dynamic_service_shared}
  */
  readonly templateDynamicServiceShared?: string;
  /**
  * External service template (external-service template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_external_service SlbVirtualServerPort#template_external_service}
  */
  readonly templateExternalService?: string;
  /**
  * External Service Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_external_service_shared SlbVirtualServerPort#template_external_service_shared}
  */
  readonly templateExternalServiceShared?: string;
  /**
  * FIX template (FIX Template Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_fix SlbVirtualServerPort#template_fix}
  */
  readonly templateFix?: string;
  /**
  * FIX Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_fix_shared SlbVirtualServerPort#template_fix_shared}
  */
  readonly templateFixShared?: string;
  /**
  * FTP port template (Ftp template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_ftp SlbVirtualServerPort#template_ftp}
  */
  readonly templateFtp?: string;
  /**
  * HTTP Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_http SlbVirtualServerPort#template_http}
  */
  readonly templateHttp?: string;
  /**
  * http-policy template (http-policy template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_http_policy SlbVirtualServerPort#template_http_policy}
  */
  readonly templateHttpPolicy?: string;
  /**
  * Http Policy Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_http_policy_shared SlbVirtualServerPort#template_http_policy_shared}
  */
  readonly templateHttpPolicyShared?: string;
  /**
  * HTTP Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_http_shared SlbVirtualServerPort#template_http_shared}
  */
  readonly templateHttpShared?: string;
  /**
  * IMAP/POP3 Template (IMAP/POP3 Config Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_imap_pop3 SlbVirtualServerPort#template_imap_pop3}
  */
  readonly templateImapPop3?: string;
  /**
  * IMAP/POP3 Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_imap_pop3_shared SlbVirtualServerPort#template_imap_pop3_shared}
  */
  readonly templateImapPop3Shared?: string;
  /**
  * MQTT Template (MQTT Config Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_mqtt SlbVirtualServerPort#template_mqtt}
  */
  readonly templateMqtt?: string;
  /**
  * Cookie persistence (Cookie persistence template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_persist_cookie SlbVirtualServerPort#template_persist_cookie}
  */
  readonly templatePersistCookie?: string;
  /**
  * Cookie Persistence Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_persist_cookie_shared SlbVirtualServerPort#template_persist_cookie_shared}
  */
  readonly templatePersistCookieShared?: string;
  /**
  * Destination IP persistence (Destination IP persistence template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_persist_destination_ip SlbVirtualServerPort#template_persist_destination_ip}
  */
  readonly templatePersistDestinationIp?: string;
  /**
  * Destination IP Persistence Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_persist_destination_ip_shared SlbVirtualServerPort#template_persist_destination_ip_shared}
  */
  readonly templatePersistDestinationIpShared?: string;
  /**
  * Source IP persistence (Source IP persistence template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_persist_source_ip SlbVirtualServerPort#template_persist_source_ip}
  */
  readonly templatePersistSourceIp?: string;
  /**
  * Source IP Persistence Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_persist_source_ip_shared SlbVirtualServerPort#template_persist_source_ip_shared}
  */
  readonly templatePersistSourceIpShared?: string;
  /**
  * SSL SID persistence (SSL SID persistence template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_persist_ssl_sid SlbVirtualServerPort#template_persist_ssl_sid}
  */
  readonly templatePersistSslSid?: string;
  /**
  * SSL SID Persistence Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_persist_ssl_sid_shared SlbVirtualServerPort#template_persist_ssl_sid_shared}
  */
  readonly templatePersistSslSidShared?: string;
  /**
  * Policy Template (Policy template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_policy SlbVirtualServerPort#template_policy}
  */
  readonly templatePolicy?: string;
  /**
  * Policy Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_policy_shared SlbVirtualServerPort#template_policy_shared}
  */
  readonly templatePolicyShared?: string;
  /**
  * QUIC Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_quic SlbVirtualServerPort#template_quic}
  */
  readonly templateQuic?: string;
  /**
  * QUIC Config Client (QUIC Config name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_quic_client SlbVirtualServerPort#template_quic_client}
  */
  readonly templateQuicClient?: string;
  /**
  * QUIC Config Server (QUIC Config name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_quic_server SlbVirtualServerPort#template_quic_server}
  */
  readonly templateQuicServer?: string;
  /**
  * QUIC Template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_quic_shared SlbVirtualServerPort#template_quic_shared}
  */
  readonly templateQuicShared?: string;
  /**
  * RAM caching template (Cache Template Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_ram_cache SlbVirtualServerPort#template_ram_cache}
  */
  readonly templateRamCache?: string;
  /**
  * ICAP reqmod template (reqmod-icap template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_reqmod_icap SlbVirtualServerPort#template_reqmod_icap}
  */
  readonly templateReqmodIcap?: string;
  /**
  * ICAP respmod service template (respmod-icap template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_respmod_icap SlbVirtualServerPort#template_respmod_icap}
  */
  readonly templateRespmodIcap?: string;
  /**
  * Scaleout template (Scaleout template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_scaleout SlbVirtualServerPort#template_scaleout}
  */
  readonly templateScaleout?: string;
  /**
  * Server SSH Template (Server SSH Config Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_server_ssh SlbVirtualServerPort#template_server_ssh}
  */
  readonly templateServerSsh?: string;
  /**
  * Server Side SSL Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_server_ssl SlbVirtualServerPort#template_server_ssl}
  */
  readonly templateServerSsl?: string;
  /**
  * Server SSL Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_server_ssl_shared SlbVirtualServerPort#template_server_ssl_shared}
  */
  readonly templateServerSslShared?: string;
  /**
  * SIP Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_sip SlbVirtualServerPort#template_sip}
  */
  readonly templateSip?: string;
  /**
  * SIP template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_sip_shared SlbVirtualServerPort#template_sip_shared}
  */
  readonly templateSipShared?: string;
  /**
  * SMPP template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_smpp SlbVirtualServerPort#template_smpp}
  */
  readonly templateSmpp?: string;
  /**
  * SMPP Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_smpp_shared SlbVirtualServerPort#template_smpp_shared}
  */
  readonly templateSmppShared?: string;
  /**
  * SMTP Template (SMTP Config Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_smtp SlbVirtualServerPort#template_smtp}
  */
  readonly templateSmtp?: string;
  /**
  * SMTP Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_smtp_shared SlbVirtualServerPort#template_smtp_shared}
  */
  readonly templateSmtpShared?: string;
  /**
  * SSLi template (SSLi Template Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_ssli SlbVirtualServerPort#template_ssli}
  */
  readonly templateSsli?: string;
  /**
  * TCP Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_tcp SlbVirtualServerPort#template_tcp}
  */
  readonly templateTcp?: string;
  /**
  * TCP Proxy Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_tcp_proxy SlbVirtualServerPort#template_tcp_proxy}
  */
  readonly templateTcpProxy?: string;
  /**
  * TCP Proxy Config Client (TCP Proxy Config name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_tcp_proxy_client SlbVirtualServerPort#template_tcp_proxy_client}
  */
  readonly templateTcpProxyClient?: string;
  /**
  * TCP Proxy Config Server (TCP Proxy Config name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_tcp_proxy_server SlbVirtualServerPort#template_tcp_proxy_server}
  */
  readonly templateTcpProxyServer?: string;
  /**
  * TCP Proxy Template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_tcp_proxy_shared SlbVirtualServerPort#template_tcp_proxy_shared}
  */
  readonly templateTcpProxyShared?: string;
  /**
  * TCP Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_tcp_shared SlbVirtualServerPort#template_tcp_shared}
  */
  readonly templateTcpShared?: string;
  /**
  * L4 UDP Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_udp SlbVirtualServerPort#template_udp}
  */
  readonly templateUdp?: string;
  /**
  * UDP Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_udp_shared SlbVirtualServerPort#template_udp_shared}
  */
  readonly templateUdpShared?: string;
  /**
  * Virtual port template (Virtual port template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_virtual_port SlbVirtualServerPort#template_virtual_port}
  */
  readonly templateVirtualPort?: string;
  /**
  * Virtual Port Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#template_virtual_port_shared SlbVirtualServerPort#template_virtual_port_shared}
  */
  readonly templateVirtualPortShared?: string;
  /**
  * Trunk interface number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#trunk_fwd SlbVirtualServerPort#trunk_fwd}
  */
  readonly trunkFwd?: number;
  /**
  * Trunk interface number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#trunk_rev SlbVirtualServerPort#trunk_rev}
  */
  readonly trunkRev?: number;
  /**
  * Use alternate virtual port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#use_alternate_port SlbVirtualServerPort#use_alternate_port}
  */
  readonly useAlternatePort?: number;
  /**
  * Follow CGNv6 source NAT configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#use_cgnv6 SlbVirtualServerPort#use_cgnv6}
  */
  readonly useCgnv6?: number;
  /**
  * Use default forwarding if server selection failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#use_default_if_no_server SlbVirtualServerPort#use_default_if_no_server}
  */
  readonly useDefaultIfNoServer?: number;
  /**
  * Use receive hop for response to client(For packets on default-vlan, also config "vlan-global enable-def-vlan-l2-forwarding".)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#use_rcv_hop_for_resp SlbVirtualServerPort#use_rcv_hop_for_resp}
  */
  readonly useRcvHopForResp?: number;
  /**
  * Set use-rcv-hop group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#use_rcv_hop_group SlbVirtualServerPort#use_rcv_hop_group}
  */
  readonly useRcvHopGroup?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#user_tag SlbVirtualServerPort#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#uuid SlbVirtualServerPort#uuid}
  */
  readonly uuid?: string;
  /**
  * Specify a GSLB View (ID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#view SlbVirtualServerPort#view}
  */
  readonly view?: number;
  /**
  * Use alternate virtual port when down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#when_down SlbVirtualServerPort#when_down}
  */
  readonly whenDown?: number;
  /**
  * Use alternate virtual port when down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#when_down_protocol2 SlbVirtualServerPort#when_down_protocol2}
  */
  readonly whenDownProtocol2?: number;
  /**
  * acl_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#acl_list SlbVirtualServerPort#acl_list}
  */
  readonly aclList?: SlbVirtualServerPortAclListStruct[] | cdktf.IResolvable;
  /**
  * aflex_scripts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#aflex_scripts SlbVirtualServerPort#aflex_scripts}
  */
  readonly aflexScripts?: SlbVirtualServerPortAflexScripts[] | cdktf.IResolvable;
  /**
  * auth_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#auth_cfg SlbVirtualServerPort#auth_cfg}
  */
  readonly authCfg?: SlbVirtualServerPortAuthCfg;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#sampling_enable SlbVirtualServerPort#sampling_enable}
  */
  readonly samplingEnable?: SlbVirtualServerPortSamplingEnable[] | cdktf.IResolvable;
}
export interface SlbVirtualServerPortAclListStruct {
  /**
  * ACL id VPORT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#acl_id SlbVirtualServerPort#acl_id}
  */
  readonly aclId?: number;
  /**
  * Specify ACL precedence (sequence-number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#acl_id_seq_num SlbVirtualServerPort#acl_id_seq_num}
  */
  readonly aclIdSeqNum?: number;
  /**
  * Specify ACL precedence (sequence-number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#acl_id_seq_num_shared SlbVirtualServerPort#acl_id_seq_num_shared}
  */
  readonly aclIdSeqNumShared?: number;
  /**
  * acl id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#acl_id_shared SlbVirtualServerPort#acl_id_shared}
  */
  readonly aclIdShared?: number;
  /**
  * Policy based Source NAT (NAT Pool or Pool Group)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#acl_id_src_nat_pool SlbVirtualServerPort#acl_id_src_nat_pool}
  */
  readonly aclIdSrcNatPool?: string;
  /**
  * Policy based Source NAT (NAT Pool or Pool Group)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#acl_id_src_nat_pool_shared SlbVirtualServerPort#acl_id_src_nat_pool_shared}
  */
  readonly aclIdSrcNatPoolShared?: string;
  /**
  * Apply an access list name (Named Access List)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#acl_name SlbVirtualServerPort#acl_name}
  */
  readonly aclName?: string;
  /**
  * Specify ACL precedence (sequence-number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#acl_name_seq_num SlbVirtualServerPort#acl_name_seq_num}
  */
  readonly aclNameSeqNum?: number;
  /**
  * Specify ACL precedence (sequence-number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#acl_name_seq_num_shared SlbVirtualServerPort#acl_name_seq_num_shared}
  */
  readonly aclNameSeqNumShared?: number;
  /**
  * Apply an access list name (Named Access List)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#acl_name_shared SlbVirtualServerPort#acl_name_shared}
  */
  readonly aclNameShared?: string;
  /**
  * Policy based Source NAT (NAT Pool or Pool Group)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#acl_name_src_nat_pool SlbVirtualServerPort#acl_name_src_nat_pool}
  */
  readonly aclNameSrcNatPool?: string;
  /**
  * Policy based Source NAT (NAT Pool or Pool Group)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#acl_name_src_nat_pool_shared SlbVirtualServerPort#acl_name_src_nat_pool_shared}
  */
  readonly aclNameSrcNatPoolShared?: string;
  /**
  * Policy based Source NAT from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#shared_partition_pool_id SlbVirtualServerPort#shared_partition_pool_id}
  */
  readonly sharedPartitionPoolId?: number;
  /**
  * Policy based Source NAT from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#shared_partition_pool_name SlbVirtualServerPort#shared_partition_pool_name}
  */
  readonly sharedPartitionPoolName?: number;
  /**
  * Specify ACL precedence (sequence-number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#v_acl_id_seq_num SlbVirtualServerPort#v_acl_id_seq_num}
  */
  readonly vAclIdSeqNum?: number;
  /**
  * Specify ACL precedence (sequence-number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#v_acl_id_seq_num_shared SlbVirtualServerPort#v_acl_id_seq_num_shared}
  */
  readonly vAclIdSeqNumShared?: number;
  /**
  * Policy based Source NAT (NAT Pool or Pool Group)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#v_acl_id_src_nat_pool SlbVirtualServerPort#v_acl_id_src_nat_pool}
  */
  readonly vAclIdSrcNatPool?: string;
  /**
  * Policy based Source NAT (NAT Pool or Pool Group)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#v_acl_id_src_nat_pool_shared SlbVirtualServerPort#v_acl_id_src_nat_pool_shared}
  */
  readonly vAclIdSrcNatPoolShared?: string;
  /**
  * Specify ACL precedence (sequence-number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#v_acl_name_seq_num SlbVirtualServerPort#v_acl_name_seq_num}
  */
  readonly vAclNameSeqNum?: number;
  /**
  * Specify ACL precedence (sequence-number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#v_acl_name_seq_num_shared SlbVirtualServerPort#v_acl_name_seq_num_shared}
  */
  readonly vAclNameSeqNumShared?: number;
  /**
  * Policy based Source NAT (NAT Pool or Pool Group)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#v_acl_name_src_nat_pool SlbVirtualServerPort#v_acl_name_src_nat_pool}
  */
  readonly vAclNameSrcNatPool?: string;
  /**
  * Policy based Source NAT (NAT Pool or Pool Group)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#v_acl_name_src_nat_pool_shared SlbVirtualServerPort#v_acl_name_src_nat_pool_shared}
  */
  readonly vAclNameSrcNatPoolShared?: string;
  /**
  * Policy based Source NAT from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#v_shared_partition_pool_id SlbVirtualServerPort#v_shared_partition_pool_id}
  */
  readonly vSharedPartitionPoolId?: number;
  /**
  * Policy based Source NAT from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#v_shared_partition_pool_name SlbVirtualServerPort#v_shared_partition_pool_name}
  */
  readonly vSharedPartitionPoolName?: number;
}

export function slbVirtualServerPortAclListStructToTerraform(struct?: SlbVirtualServerPortAclListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl_id: cdktf.numberToTerraform(struct!.aclId),
    acl_id_seq_num: cdktf.numberToTerraform(struct!.aclIdSeqNum),
    acl_id_seq_num_shared: cdktf.numberToTerraform(struct!.aclIdSeqNumShared),
    acl_id_shared: cdktf.numberToTerraform(struct!.aclIdShared),
    acl_id_src_nat_pool: cdktf.stringToTerraform(struct!.aclIdSrcNatPool),
    acl_id_src_nat_pool_shared: cdktf.stringToTerraform(struct!.aclIdSrcNatPoolShared),
    acl_name: cdktf.stringToTerraform(struct!.aclName),
    acl_name_seq_num: cdktf.numberToTerraform(struct!.aclNameSeqNum),
    acl_name_seq_num_shared: cdktf.numberToTerraform(struct!.aclNameSeqNumShared),
    acl_name_shared: cdktf.stringToTerraform(struct!.aclNameShared),
    acl_name_src_nat_pool: cdktf.stringToTerraform(struct!.aclNameSrcNatPool),
    acl_name_src_nat_pool_shared: cdktf.stringToTerraform(struct!.aclNameSrcNatPoolShared),
    shared_partition_pool_id: cdktf.numberToTerraform(struct!.sharedPartitionPoolId),
    shared_partition_pool_name: cdktf.numberToTerraform(struct!.sharedPartitionPoolName),
    v_acl_id_seq_num: cdktf.numberToTerraform(struct!.vAclIdSeqNum),
    v_acl_id_seq_num_shared: cdktf.numberToTerraform(struct!.vAclIdSeqNumShared),
    v_acl_id_src_nat_pool: cdktf.stringToTerraform(struct!.vAclIdSrcNatPool),
    v_acl_id_src_nat_pool_shared: cdktf.stringToTerraform(struct!.vAclIdSrcNatPoolShared),
    v_acl_name_seq_num: cdktf.numberToTerraform(struct!.vAclNameSeqNum),
    v_acl_name_seq_num_shared: cdktf.numberToTerraform(struct!.vAclNameSeqNumShared),
    v_acl_name_src_nat_pool: cdktf.stringToTerraform(struct!.vAclNameSrcNatPool),
    v_acl_name_src_nat_pool_shared: cdktf.stringToTerraform(struct!.vAclNameSrcNatPoolShared),
    v_shared_partition_pool_id: cdktf.numberToTerraform(struct!.vSharedPartitionPoolId),
    v_shared_partition_pool_name: cdktf.numberToTerraform(struct!.vSharedPartitionPoolName),
  }
}


export function slbVirtualServerPortAclListStructToHclTerraform(struct?: SlbVirtualServerPortAclListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl_id: {
      value: cdktf.numberToHclTerraform(struct!.aclId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acl_id_seq_num: {
      value: cdktf.numberToHclTerraform(struct!.aclIdSeqNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acl_id_seq_num_shared: {
      value: cdktf.numberToHclTerraform(struct!.aclIdSeqNumShared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acl_id_shared: {
      value: cdktf.numberToHclTerraform(struct!.aclIdShared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acl_id_src_nat_pool: {
      value: cdktf.stringToHclTerraform(struct!.aclIdSrcNatPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acl_id_src_nat_pool_shared: {
      value: cdktf.stringToHclTerraform(struct!.aclIdSrcNatPoolShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acl_name: {
      value: cdktf.stringToHclTerraform(struct!.aclName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acl_name_seq_num: {
      value: cdktf.numberToHclTerraform(struct!.aclNameSeqNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acl_name_seq_num_shared: {
      value: cdktf.numberToHclTerraform(struct!.aclNameSeqNumShared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acl_name_shared: {
      value: cdktf.stringToHclTerraform(struct!.aclNameShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acl_name_src_nat_pool: {
      value: cdktf.stringToHclTerraform(struct!.aclNameSrcNatPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acl_name_src_nat_pool_shared: {
      value: cdktf.stringToHclTerraform(struct!.aclNameSrcNatPoolShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_partition_pool_id: {
      value: cdktf.numberToHclTerraform(struct!.sharedPartitionPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shared_partition_pool_name: {
      value: cdktf.numberToHclTerraform(struct!.sharedPartitionPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v_acl_id_seq_num: {
      value: cdktf.numberToHclTerraform(struct!.vAclIdSeqNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v_acl_id_seq_num_shared: {
      value: cdktf.numberToHclTerraform(struct!.vAclIdSeqNumShared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v_acl_id_src_nat_pool: {
      value: cdktf.stringToHclTerraform(struct!.vAclIdSrcNatPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v_acl_id_src_nat_pool_shared: {
      value: cdktf.stringToHclTerraform(struct!.vAclIdSrcNatPoolShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v_acl_name_seq_num: {
      value: cdktf.numberToHclTerraform(struct!.vAclNameSeqNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v_acl_name_seq_num_shared: {
      value: cdktf.numberToHclTerraform(struct!.vAclNameSeqNumShared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v_acl_name_src_nat_pool: {
      value: cdktf.stringToHclTerraform(struct!.vAclNameSrcNatPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v_acl_name_src_nat_pool_shared: {
      value: cdktf.stringToHclTerraform(struct!.vAclNameSrcNatPoolShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v_shared_partition_pool_id: {
      value: cdktf.numberToHclTerraform(struct!.vSharedPartitionPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v_shared_partition_pool_name: {
      value: cdktf.numberToHclTerraform(struct!.vSharedPartitionPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbVirtualServerPortAclListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbVirtualServerPortAclListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aclId !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclId = this._aclId;
    }
    if (this._aclIdSeqNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclIdSeqNum = this._aclIdSeqNum;
    }
    if (this._aclIdSeqNumShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclIdSeqNumShared = this._aclIdSeqNumShared;
    }
    if (this._aclIdShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclIdShared = this._aclIdShared;
    }
    if (this._aclIdSrcNatPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclIdSrcNatPool = this._aclIdSrcNatPool;
    }
    if (this._aclIdSrcNatPoolShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclIdSrcNatPoolShared = this._aclIdSrcNatPoolShared;
    }
    if (this._aclName !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclName = this._aclName;
    }
    if (this._aclNameSeqNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclNameSeqNum = this._aclNameSeqNum;
    }
    if (this._aclNameSeqNumShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclNameSeqNumShared = this._aclNameSeqNumShared;
    }
    if (this._aclNameShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclNameShared = this._aclNameShared;
    }
    if (this._aclNameSrcNatPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclNameSrcNatPool = this._aclNameSrcNatPool;
    }
    if (this._aclNameSrcNatPoolShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclNameSrcNatPoolShared = this._aclNameSrcNatPoolShared;
    }
    if (this._sharedPartitionPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPartitionPoolId = this._sharedPartitionPoolId;
    }
    if (this._sharedPartitionPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPartitionPoolName = this._sharedPartitionPoolName;
    }
    if (this._vAclIdSeqNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.vAclIdSeqNum = this._vAclIdSeqNum;
    }
    if (this._vAclIdSeqNumShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.vAclIdSeqNumShared = this._vAclIdSeqNumShared;
    }
    if (this._vAclIdSrcNatPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.vAclIdSrcNatPool = this._vAclIdSrcNatPool;
    }
    if (this._vAclIdSrcNatPoolShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.vAclIdSrcNatPoolShared = this._vAclIdSrcNatPoolShared;
    }
    if (this._vAclNameSeqNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.vAclNameSeqNum = this._vAclNameSeqNum;
    }
    if (this._vAclNameSeqNumShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.vAclNameSeqNumShared = this._vAclNameSeqNumShared;
    }
    if (this._vAclNameSrcNatPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.vAclNameSrcNatPool = this._vAclNameSrcNatPool;
    }
    if (this._vAclNameSrcNatPoolShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.vAclNameSrcNatPoolShared = this._vAclNameSrcNatPoolShared;
    }
    if (this._vSharedPartitionPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vSharedPartitionPoolId = this._vSharedPartitionPoolId;
    }
    if (this._vSharedPartitionPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vSharedPartitionPoolName = this._vSharedPartitionPoolName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbVirtualServerPortAclListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aclId = undefined;
      this._aclIdSeqNum = undefined;
      this._aclIdSeqNumShared = undefined;
      this._aclIdShared = undefined;
      this._aclIdSrcNatPool = undefined;
      this._aclIdSrcNatPoolShared = undefined;
      this._aclName = undefined;
      this._aclNameSeqNum = undefined;
      this._aclNameSeqNumShared = undefined;
      this._aclNameShared = undefined;
      this._aclNameSrcNatPool = undefined;
      this._aclNameSrcNatPoolShared = undefined;
      this._sharedPartitionPoolId = undefined;
      this._sharedPartitionPoolName = undefined;
      this._vAclIdSeqNum = undefined;
      this._vAclIdSeqNumShared = undefined;
      this._vAclIdSrcNatPool = undefined;
      this._vAclIdSrcNatPoolShared = undefined;
      this._vAclNameSeqNum = undefined;
      this._vAclNameSeqNumShared = undefined;
      this._vAclNameSrcNatPool = undefined;
      this._vAclNameSrcNatPoolShared = undefined;
      this._vSharedPartitionPoolId = undefined;
      this._vSharedPartitionPoolName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aclId = value.aclId;
      this._aclIdSeqNum = value.aclIdSeqNum;
      this._aclIdSeqNumShared = value.aclIdSeqNumShared;
      this._aclIdShared = value.aclIdShared;
      this._aclIdSrcNatPool = value.aclIdSrcNatPool;
      this._aclIdSrcNatPoolShared = value.aclIdSrcNatPoolShared;
      this._aclName = value.aclName;
      this._aclNameSeqNum = value.aclNameSeqNum;
      this._aclNameSeqNumShared = value.aclNameSeqNumShared;
      this._aclNameShared = value.aclNameShared;
      this._aclNameSrcNatPool = value.aclNameSrcNatPool;
      this._aclNameSrcNatPoolShared = value.aclNameSrcNatPoolShared;
      this._sharedPartitionPoolId = value.sharedPartitionPoolId;
      this._sharedPartitionPoolName = value.sharedPartitionPoolName;
      this._vAclIdSeqNum = value.vAclIdSeqNum;
      this._vAclIdSeqNumShared = value.vAclIdSeqNumShared;
      this._vAclIdSrcNatPool = value.vAclIdSrcNatPool;
      this._vAclIdSrcNatPoolShared = value.vAclIdSrcNatPoolShared;
      this._vAclNameSeqNum = value.vAclNameSeqNum;
      this._vAclNameSeqNumShared = value.vAclNameSeqNumShared;
      this._vAclNameSrcNatPool = value.vAclNameSrcNatPool;
      this._vAclNameSrcNatPoolShared = value.vAclNameSrcNatPoolShared;
      this._vSharedPartitionPoolId = value.vSharedPartitionPoolId;
      this._vSharedPartitionPoolName = value.vSharedPartitionPoolName;
    }
  }

  // acl_id - computed: false, optional: true, required: false
  private _aclId?: number; 
  public get aclId() {
    return this.getNumberAttribute('acl_id');
  }
  public set aclId(value: number) {
    this._aclId = value;
  }
  public resetAclId() {
    this._aclId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclIdInput() {
    return this._aclId;
  }

  // acl_id_seq_num - computed: false, optional: true, required: false
  private _aclIdSeqNum?: number; 
  public get aclIdSeqNum() {
    return this.getNumberAttribute('acl_id_seq_num');
  }
  public set aclIdSeqNum(value: number) {
    this._aclIdSeqNum = value;
  }
  public resetAclIdSeqNum() {
    this._aclIdSeqNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclIdSeqNumInput() {
    return this._aclIdSeqNum;
  }

  // acl_id_seq_num_shared - computed: false, optional: true, required: false
  private _aclIdSeqNumShared?: number; 
  public get aclIdSeqNumShared() {
    return this.getNumberAttribute('acl_id_seq_num_shared');
  }
  public set aclIdSeqNumShared(value: number) {
    this._aclIdSeqNumShared = value;
  }
  public resetAclIdSeqNumShared() {
    this._aclIdSeqNumShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclIdSeqNumSharedInput() {
    return this._aclIdSeqNumShared;
  }

  // acl_id_shared - computed: false, optional: true, required: false
  private _aclIdShared?: number; 
  public get aclIdShared() {
    return this.getNumberAttribute('acl_id_shared');
  }
  public set aclIdShared(value: number) {
    this._aclIdShared = value;
  }
  public resetAclIdShared() {
    this._aclIdShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclIdSharedInput() {
    return this._aclIdShared;
  }

  // acl_id_src_nat_pool - computed: false, optional: true, required: false
  private _aclIdSrcNatPool?: string; 
  public get aclIdSrcNatPool() {
    return this.getStringAttribute('acl_id_src_nat_pool');
  }
  public set aclIdSrcNatPool(value: string) {
    this._aclIdSrcNatPool = value;
  }
  public resetAclIdSrcNatPool() {
    this._aclIdSrcNatPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclIdSrcNatPoolInput() {
    return this._aclIdSrcNatPool;
  }

  // acl_id_src_nat_pool_shared - computed: false, optional: true, required: false
  private _aclIdSrcNatPoolShared?: string; 
  public get aclIdSrcNatPoolShared() {
    return this.getStringAttribute('acl_id_src_nat_pool_shared');
  }
  public set aclIdSrcNatPoolShared(value: string) {
    this._aclIdSrcNatPoolShared = value;
  }
  public resetAclIdSrcNatPoolShared() {
    this._aclIdSrcNatPoolShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclIdSrcNatPoolSharedInput() {
    return this._aclIdSrcNatPoolShared;
  }

  // acl_name - computed: false, optional: true, required: false
  private _aclName?: string; 
  public get aclName() {
    return this.getStringAttribute('acl_name');
  }
  public set aclName(value: string) {
    this._aclName = value;
  }
  public resetAclName() {
    this._aclName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameInput() {
    return this._aclName;
  }

  // acl_name_seq_num - computed: false, optional: true, required: false
  private _aclNameSeqNum?: number; 
  public get aclNameSeqNum() {
    return this.getNumberAttribute('acl_name_seq_num');
  }
  public set aclNameSeqNum(value: number) {
    this._aclNameSeqNum = value;
  }
  public resetAclNameSeqNum() {
    this._aclNameSeqNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameSeqNumInput() {
    return this._aclNameSeqNum;
  }

  // acl_name_seq_num_shared - computed: false, optional: true, required: false
  private _aclNameSeqNumShared?: number; 
  public get aclNameSeqNumShared() {
    return this.getNumberAttribute('acl_name_seq_num_shared');
  }
  public set aclNameSeqNumShared(value: number) {
    this._aclNameSeqNumShared = value;
  }
  public resetAclNameSeqNumShared() {
    this._aclNameSeqNumShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameSeqNumSharedInput() {
    return this._aclNameSeqNumShared;
  }

  // acl_name_shared - computed: false, optional: true, required: false
  private _aclNameShared?: string; 
  public get aclNameShared() {
    return this.getStringAttribute('acl_name_shared');
  }
  public set aclNameShared(value: string) {
    this._aclNameShared = value;
  }
  public resetAclNameShared() {
    this._aclNameShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameSharedInput() {
    return this._aclNameShared;
  }

  // acl_name_src_nat_pool - computed: false, optional: true, required: false
  private _aclNameSrcNatPool?: string; 
  public get aclNameSrcNatPool() {
    return this.getStringAttribute('acl_name_src_nat_pool');
  }
  public set aclNameSrcNatPool(value: string) {
    this._aclNameSrcNatPool = value;
  }
  public resetAclNameSrcNatPool() {
    this._aclNameSrcNatPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameSrcNatPoolInput() {
    return this._aclNameSrcNatPool;
  }

  // acl_name_src_nat_pool_shared - computed: false, optional: true, required: false
  private _aclNameSrcNatPoolShared?: string; 
  public get aclNameSrcNatPoolShared() {
    return this.getStringAttribute('acl_name_src_nat_pool_shared');
  }
  public set aclNameSrcNatPoolShared(value: string) {
    this._aclNameSrcNatPoolShared = value;
  }
  public resetAclNameSrcNatPoolShared() {
    this._aclNameSrcNatPoolShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameSrcNatPoolSharedInput() {
    return this._aclNameSrcNatPoolShared;
  }

  // shared_partition_pool_id - computed: false, optional: true, required: false
  private _sharedPartitionPoolId?: number; 
  public get sharedPartitionPoolId() {
    return this.getNumberAttribute('shared_partition_pool_id');
  }
  public set sharedPartitionPoolId(value: number) {
    this._sharedPartitionPoolId = value;
  }
  public resetSharedPartitionPoolId() {
    this._sharedPartitionPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionPoolIdInput() {
    return this._sharedPartitionPoolId;
  }

  // shared_partition_pool_name - computed: false, optional: true, required: false
  private _sharedPartitionPoolName?: number; 
  public get sharedPartitionPoolName() {
    return this.getNumberAttribute('shared_partition_pool_name');
  }
  public set sharedPartitionPoolName(value: number) {
    this._sharedPartitionPoolName = value;
  }
  public resetSharedPartitionPoolName() {
    this._sharedPartitionPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionPoolNameInput() {
    return this._sharedPartitionPoolName;
  }

  // v_acl_id_seq_num - computed: false, optional: true, required: false
  private _vAclIdSeqNum?: number; 
  public get vAclIdSeqNum() {
    return this.getNumberAttribute('v_acl_id_seq_num');
  }
  public set vAclIdSeqNum(value: number) {
    this._vAclIdSeqNum = value;
  }
  public resetVAclIdSeqNum() {
    this._vAclIdSeqNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vAclIdSeqNumInput() {
    return this._vAclIdSeqNum;
  }

  // v_acl_id_seq_num_shared - computed: false, optional: true, required: false
  private _vAclIdSeqNumShared?: number; 
  public get vAclIdSeqNumShared() {
    return this.getNumberAttribute('v_acl_id_seq_num_shared');
  }
  public set vAclIdSeqNumShared(value: number) {
    this._vAclIdSeqNumShared = value;
  }
  public resetVAclIdSeqNumShared() {
    this._vAclIdSeqNumShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vAclIdSeqNumSharedInput() {
    return this._vAclIdSeqNumShared;
  }

  // v_acl_id_src_nat_pool - computed: false, optional: true, required: false
  private _vAclIdSrcNatPool?: string; 
  public get vAclIdSrcNatPool() {
    return this.getStringAttribute('v_acl_id_src_nat_pool');
  }
  public set vAclIdSrcNatPool(value: string) {
    this._vAclIdSrcNatPool = value;
  }
  public resetVAclIdSrcNatPool() {
    this._vAclIdSrcNatPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vAclIdSrcNatPoolInput() {
    return this._vAclIdSrcNatPool;
  }

  // v_acl_id_src_nat_pool_shared - computed: false, optional: true, required: false
  private _vAclIdSrcNatPoolShared?: string; 
  public get vAclIdSrcNatPoolShared() {
    return this.getStringAttribute('v_acl_id_src_nat_pool_shared');
  }
  public set vAclIdSrcNatPoolShared(value: string) {
    this._vAclIdSrcNatPoolShared = value;
  }
  public resetVAclIdSrcNatPoolShared() {
    this._vAclIdSrcNatPoolShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vAclIdSrcNatPoolSharedInput() {
    return this._vAclIdSrcNatPoolShared;
  }

  // v_acl_name_seq_num - computed: false, optional: true, required: false
  private _vAclNameSeqNum?: number; 
  public get vAclNameSeqNum() {
    return this.getNumberAttribute('v_acl_name_seq_num');
  }
  public set vAclNameSeqNum(value: number) {
    this._vAclNameSeqNum = value;
  }
  public resetVAclNameSeqNum() {
    this._vAclNameSeqNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vAclNameSeqNumInput() {
    return this._vAclNameSeqNum;
  }

  // v_acl_name_seq_num_shared - computed: false, optional: true, required: false
  private _vAclNameSeqNumShared?: number; 
  public get vAclNameSeqNumShared() {
    return this.getNumberAttribute('v_acl_name_seq_num_shared');
  }
  public set vAclNameSeqNumShared(value: number) {
    this._vAclNameSeqNumShared = value;
  }
  public resetVAclNameSeqNumShared() {
    this._vAclNameSeqNumShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vAclNameSeqNumSharedInput() {
    return this._vAclNameSeqNumShared;
  }

  // v_acl_name_src_nat_pool - computed: false, optional: true, required: false
  private _vAclNameSrcNatPool?: string; 
  public get vAclNameSrcNatPool() {
    return this.getStringAttribute('v_acl_name_src_nat_pool');
  }
  public set vAclNameSrcNatPool(value: string) {
    this._vAclNameSrcNatPool = value;
  }
  public resetVAclNameSrcNatPool() {
    this._vAclNameSrcNatPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vAclNameSrcNatPoolInput() {
    return this._vAclNameSrcNatPool;
  }

  // v_acl_name_src_nat_pool_shared - computed: false, optional: true, required: false
  private _vAclNameSrcNatPoolShared?: string; 
  public get vAclNameSrcNatPoolShared() {
    return this.getStringAttribute('v_acl_name_src_nat_pool_shared');
  }
  public set vAclNameSrcNatPoolShared(value: string) {
    this._vAclNameSrcNatPoolShared = value;
  }
  public resetVAclNameSrcNatPoolShared() {
    this._vAclNameSrcNatPoolShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vAclNameSrcNatPoolSharedInput() {
    return this._vAclNameSrcNatPoolShared;
  }

  // v_shared_partition_pool_id - computed: false, optional: true, required: false
  private _vSharedPartitionPoolId?: number; 
  public get vSharedPartitionPoolId() {
    return this.getNumberAttribute('v_shared_partition_pool_id');
  }
  public set vSharedPartitionPoolId(value: number) {
    this._vSharedPartitionPoolId = value;
  }
  public resetVSharedPartitionPoolId() {
    this._vSharedPartitionPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vSharedPartitionPoolIdInput() {
    return this._vSharedPartitionPoolId;
  }

  // v_shared_partition_pool_name - computed: false, optional: true, required: false
  private _vSharedPartitionPoolName?: number; 
  public get vSharedPartitionPoolName() {
    return this.getNumberAttribute('v_shared_partition_pool_name');
  }
  public set vSharedPartitionPoolName(value: number) {
    this._vSharedPartitionPoolName = value;
  }
  public resetVSharedPartitionPoolName() {
    this._vSharedPartitionPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vSharedPartitionPoolNameInput() {
    return this._vSharedPartitionPoolName;
  }
}

export class SlbVirtualServerPortAclListStructList extends cdktf.ComplexList {
  public internalValue? : SlbVirtualServerPortAclListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbVirtualServerPortAclListStructOutputReference {
    return new SlbVirtualServerPortAclListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbVirtualServerPortAflexScripts {
  /**
  * aFleX Script Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#aflex SlbVirtualServerPort#aflex}
  */
  readonly aflex?: string;
  /**
  * aFleX Script Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#aflex_shared SlbVirtualServerPort#aflex_shared}
  */
  readonly aflexShared?: string;
}

export function slbVirtualServerPortAflexScriptsToTerraform(struct?: SlbVirtualServerPortAflexScripts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aflex: cdktf.stringToTerraform(struct!.aflex),
    aflex_shared: cdktf.stringToTerraform(struct!.aflexShared),
  }
}


export function slbVirtualServerPortAflexScriptsToHclTerraform(struct?: SlbVirtualServerPortAflexScripts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aflex: {
      value: cdktf.stringToHclTerraform(struct!.aflex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aflex_shared: {
      value: cdktf.stringToHclTerraform(struct!.aflexShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbVirtualServerPortAflexScriptsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbVirtualServerPortAflexScripts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aflex !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflex = this._aflex;
    }
    if (this._aflexShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexShared = this._aflexShared;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbVirtualServerPortAflexScripts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aflex = undefined;
      this._aflexShared = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aflex = value.aflex;
      this._aflexShared = value.aflexShared;
    }
  }

  // aflex - computed: false, optional: true, required: false
  private _aflex?: string; 
  public get aflex() {
    return this.getStringAttribute('aflex');
  }
  public set aflex(value: string) {
    this._aflex = value;
  }
  public resetAflex() {
    this._aflex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexInput() {
    return this._aflex;
  }

  // aflex_shared - computed: false, optional: true, required: false
  private _aflexShared?: string; 
  public get aflexShared() {
    return this.getStringAttribute('aflex_shared');
  }
  public set aflexShared(value: string) {
    this._aflexShared = value;
  }
  public resetAflexShared() {
    this._aflexShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexSharedInput() {
    return this._aflexShared;
  }
}

export class SlbVirtualServerPortAflexScriptsList extends cdktf.ComplexList {
  public internalValue? : SlbVirtualServerPortAflexScripts[] | cdktf.IResolvable

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
  public get(index: number): SlbVirtualServerPortAflexScriptsOutputReference {
    return new SlbVirtualServerPortAflexScriptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbVirtualServerPortAuthCfg {
  /**
  * Specify AAA policy name to bind to the virtual port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#aaa_policy SlbVirtualServerPort#aaa_policy}
  */
  readonly aaaPolicy?: string;
}

export function slbVirtualServerPortAuthCfgToTerraform(struct?: SlbVirtualServerPortAuthCfgOutputReference | SlbVirtualServerPortAuthCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aaa_policy: cdktf.stringToTerraform(struct!.aaaPolicy),
  }
}


export function slbVirtualServerPortAuthCfgToHclTerraform(struct?: SlbVirtualServerPortAuthCfgOutputReference | SlbVirtualServerPortAuthCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aaa_policy: {
      value: cdktf.stringToHclTerraform(struct!.aaaPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbVirtualServerPortAuthCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbVirtualServerPortAuthCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aaaPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.aaaPolicy = this._aaaPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbVirtualServerPortAuthCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aaaPolicy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aaaPolicy = value.aaaPolicy;
    }
  }

  // aaa_policy - computed: false, optional: true, required: false
  private _aaaPolicy?: string; 
  public get aaaPolicy() {
    return this.getStringAttribute('aaa_policy');
  }
  public set aaaPolicy(value: string) {
    this._aaaPolicy = value;
  }
  public resetAaaPolicy() {
    this._aaaPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaPolicyInput() {
    return this._aaaPolicy;
  }
}
export interface SlbVirtualServerPortSamplingEnable {
  /**
  * 'all': all; 'curr_conn': Current established connections; 'total_l4_conn': Total L4 connections established; 'total_l7_conn': Total L7 connections established; 'total_tcp_conn': Total TCP connections established; 'total_conn': Total connections established; 'total_fwd_bytes': Bytes processed in forward direction; 'total_fwd_pkts': Packets processed in forward direction; 'total_rev_bytes': Bytes processed in reverse direction; 'total_rev_pkts': Packets processed in reverse direction; 'total_dns_pkts': Total DNS packets processed; 'total_mf_dns_pkts': Total MF DNS packets; 'es_total_failure_actions': Total failure actions; 'compression_bytes_before': Data into gzip compression engine; 'compression_bytes_after': Data out of gzip compression engine; 'compression_hit': Number of requests compressed; 'compression_miss': Number of requests NOT compressed; 'compression_miss_no_client': Compression miss no client; 'compression_miss_template_exclusion': Compression miss template exclusion; 'curr_req': Current requests; 'total_req': Total requests; 'total_req_succ': Total successful requests; 'peak_conn': Peak connections; 'curr_conn_rate': Current connection rate; 'last_rsp_time': Last response time; 'fastest_rsp_time': Fastest response time; 'slowest_rsp_time': Slowest response time; 'loc_permit': Geo-location Permit count; 'loc_deny': Geo-location Deny count; 'loc_conn': Geo-location Connection count; 'curr_ssl_conn': Current SSL connections; 'total_ssl_conn': Total SSL connections; 'backend-time-to-first-byte': Backend Time from Request to Response First Byte; 'backend-time-to-last-byte': Backend Time from Request to Response Last Byte; 'in-latency': Request Latency at Thunder; 'out-latency': Response Latency at Thunder; 'total_fwd_bytes_out': Bytes processed in forward direction (outbound); 'total_fwd_pkts_out': Packets processed in forward direction (outbound); 'total_rev_bytes_out': Bytes processed in reverse direction (outbound); 'total_rev_pkts_out': Packets processed in reverse direction (outbound); 'curr_req_rate': Current request rate; 'curr_resp': Current response; 'total_resp': Total response; 'total_resp_succ': Total successful responses; 'curr_resp_rate': Current response rate; 'dnsrrl_total_allowed': DNS Response-Rate-Limiting Total Responses Allowed; 'dnsrrl_total_dropped': DNS Response-Rate-Limiting Total Responses Dropped; 'dnsrrl_total_slipped': DNS Response-Rate-Limiting Total Responses Slipped; 'dnsrrl_bad_fqdn': DNS Response-Rate-Limiting Bad FQDN; 'throughput-bits-per-sec': Throughput in bits/sec; 'dynamic-memory-alloc': dynamic memory (bytes) allocated by the vport; 'dynamic-memory-free': dynamic memory (bytes) allocated by the vport; 'dynamic-memory': dynamic memory (bytes) used by the vport(alloc-free); 'ip_only_lb_fwd_bytes': IP-Only-LB Bytes processed in forward direction; 'ip_only_lb_rev_bytes': IP-Only-LB Bytes processed in reverse direction; 'ip_only_lb_fwd_pkts': IP-Only-LB Packets processed in forward direction; 'ip_only_lb_rev_pkts': IP-Only-LB Packets processed in reverse direction; 'total_dns_filter_type_drop': Total DNS Filter Type Drop; 'total_dns_filter_class_drop': Total DNS Filter Class Drop; 'dns_filter_type_a_drop': DNS Filter Type A Drop; 'dns_filter_type_aaaa_drop': DNS Filter Type AAAA Drop; 'dns_filter_type_cname_drop': DNS Filter Type CNAME Drop; 'dns_filter_type_mx_drop': DNS Filter Type MX Drop; 'dns_filter_type_ns_drop': DNS Filter Type NS Drop; 'dns_filter_type_srv_drop': DNS Filter Type SRV Drop; 'dns_filter_type_ptr_drop': DNS Filter Type PTR Drop; 'dns_filter_type_soa_drop': DNS Filter Type SOA Drop; 'dns_filter_type_txt_drop': DNS Filter Type TXT Drop; 'dns_filter_type_any_drop': DNS Filter Type Any Drop; 'dns_filter_type_others_drop': DNS Filter Type OTHERS Drop; 'dns_filter_class_internet_drop': DNS Filter Class INTERNET Drop; 'dns_filter_class_chaos_drop': DNS Filter Class CHAOS Drop; 'dns_filter_class_hesiod_drop': DNS Filter Class HESIOD Drop; 'dns_filter_class_none_drop': DNS Filter Class NONE Drop; 'dns_filter_class_any_drop': DNS Filter Class ANY Drop; 'dns_filter_class_others_drop': DNS Filter Class OTHERS Drop; 'dns_rpz_action_drop': DNS RPZ Action Drop; 'dns_rpz_action_pass_thru': DNS RPZ Action Pass Through; 'dns_rpz_action_tcp_only': DNS RPZ Action TCP Only; 'dns_rpz_action_nxdomain': DNS RPZ Action NXDOMAIN; 'dns_rpz_action_nodata': DNS RPZ Action NODATA; 'dns_rpz_action_local_data': DNS RPZ Action Local Data; 'dns_rpz_trigger_client_ip': DNS RPZ Trigger Client IP; 'dns_rpz_trigger_resp_ip': DNS RPZ Trigger Response IP; 'dns_rpz_trigger_ns_ip': DNS RPZ Trigger NS IP; 'dns_rpz_trigger_qname': DNS RPZ Trigger Qname IP; 'dns_rpz_trigger_ns_name': DNS RPZ Trigger NS Name; 'compression_bytes_before_br': Data into brotli compression engine; 'compression_bytes_after_br': Data out of brotli compression engine; 'compression_bytes_before_total': Data into compression engine; 'compression_bytes_after_total': Data out of compression engine; 'compression_hit_br': Number of requests compressed with brotli; 'compression_miss_br': Number of requests NOT compressed with brotli; 'compression_hit_total': Number of requests compressed; 'compression_miss_total': Number of requests NOT compressed; 'dnsrrl_total_tc': DNS Response-Rate-Limiting Total Responses Replied With Truncated; 'http1_client_idle_timeout': HTTP1 Client Idle Timeout; 'http2_client_idle_timeout': HTTP2 Client Idle Timeout;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#counters1 SlbVirtualServerPort#counters1}
  */
  readonly counters1?: string;
}

export function slbVirtualServerPortSamplingEnableToTerraform(struct?: SlbVirtualServerPortSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function slbVirtualServerPortSamplingEnableToHclTerraform(struct?: SlbVirtualServerPortSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbVirtualServerPortSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbVirtualServerPortSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbVirtualServerPortSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class SlbVirtualServerPortSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SlbVirtualServerPortSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SlbVirtualServerPortSamplingEnableOutputReference {
    return new SlbVirtualServerPortSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port thunder_slb_virtual_server_port}
*/
export class SlbVirtualServerPort extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_virtual_server_port";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbVirtualServerPort resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbVirtualServerPort to import
  * @param importFromId The id of the existing SlbVirtualServerPort that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbVirtualServerPort to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_virtual_server_port", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_virtual_server_port thunder_slb_virtual_server_port} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbVirtualServerPortConfig
  */
  public constructor(scope: Construct, id: string, config: SlbVirtualServerPortConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_virtual_server_port',
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
    this._action = config.action;
    this._aflexTableEntrySynDisable = config.aflexTableEntrySynDisable;
    this._aflexTableEntrySynEnable = config.aflexTableEntrySynEnable;
    this._altProtocol1 = config.altProtocol1;
    this._altProtocol2 = config.altProtocol2;
    this._alternatePort = config.alternatePort;
    this._alternatePortNumber = config.alternatePortNumber;
    this._attackDetection = config.attackDetection;
    this._auto = config.auto;
    this._clientipStickyNat = config.clientipStickyNat;
    this._connLimit = config.connLimit;
    this._cpuCompute = config.cpuCompute;
    this._defSelectionIfPrefFailed = config.defSelectionIfPrefFailed;
    this._enablePlayeridCheck = config.enablePlayeridCheck;
    this._enableScaleout = config.enableScaleout;
    this._ethFwd = config.ethFwd;
    this._ethRev = config.ethRev;
    this._expand = config.expand;
    this._extendedStats = config.extendedStats;
    this._fastPath = config.fastPath;
    this._forceRoutingMode = config.forceRoutingMode;
    this._gslbEnable = config.gslbEnable;
    this._gtpSessionLb = config.gtpSessionLb;
    this._haConnMirror = config.haConnMirror;
    this._id = config.id;
    this._ignoreGlobal = config.ignoreGlobal;
    this._ipMapList = config.ipMapList;
    this._ipOnlyLb = config.ipOnlyLb;
    this._ipSmartRr = config.ipSmartRr;
    this._ipinip = config.ipinip;
    this._l7HardwareAssist = config.l7HardwareAssist;
    this._l7ServiceChain = config.l7ServiceChain;
    this._memoryCompute = config.memoryCompute;
    this._messageSwitching = config.messageSwitching;
    this._name = config.name;
    this._ngWaf = config.ngWaf;
    this._noAutoUpOnAflex = config.noAutoUpOnAflex;
    this._noDestNat = config.noDestNat;
    this._noLogging = config.noLogging;
    this._onSyn = config.onSyn;
    this._oneServerConn = config.oneServerConn;
    this._optimizationLevel = config.optimizationLevel;
    this._pTemplateSipShared = config.pTemplateSipShared;
    this._packetCaptureTemplate = config.packetCaptureTemplate;
    this._persistType = config.persistType;
    this._pool = config.pool;
    this._poolShared = config.poolShared;
    this._portNumber = config.portNumber;
    this._portTranslation = config.portTranslation;
    this._precedence = config.precedence;
    this._protocol = config.protocol;
    this._proxyLayer = config.proxyLayer;
    this._range = config.range;
    this._rate = config.rate;
    this._redirectToHttps = config.redirectToHttps;
    this._replyAcmeChallenge = config.replyAcmeChallenge;
    this._reqFail = config.reqFail;
    this._reselection = config.reselection;
    this._reset = config.reset;
    this._resetOnServerSelectionFail = config.resetOnServerSelectionFail;
    this._resolveWebCatList = config.resolveWebCatList;
    this._rtpSipCallIdMatch = config.rtpSipCallIdMatch;
    this._secs = config.secs;
    this._servSelFail = config.servSelFail;
    this._serverGroup = config.serverGroup;
    this._serviceGroup = config.serviceGroup;
    this._sharedPartitionCacheTemplate = config.sharedPartitionCacheTemplate;
    this._sharedPartitionClientSslTemplate = config.sharedPartitionClientSslTemplate;
    this._sharedPartitionConnectionReuseTemplate = config.sharedPartitionConnectionReuseTemplate;
    this._sharedPartitionDblbTemplate = config.sharedPartitionDblbTemplate;
    this._sharedPartitionDiameterTemplate = config.sharedPartitionDiameterTemplate;
    this._sharedPartitionDnsTemplate = config.sharedPartitionDnsTemplate;
    this._sharedPartitionDohTemplate = config.sharedPartitionDohTemplate;
    this._sharedPartitionDynamicServiceTemplate = config.sharedPartitionDynamicServiceTemplate;
    this._sharedPartitionExternalServiceTemplate = config.sharedPartitionExternalServiceTemplate;
    this._sharedPartitionFixTemplate = config.sharedPartitionFixTemplate;
    this._sharedPartitionHttpPolicyTemplate = config.sharedPartitionHttpPolicyTemplate;
    this._sharedPartitionHttpTemplate = config.sharedPartitionHttpTemplate;
    this._sharedPartitionImapPop3Template = config.sharedPartitionImapPop3Template;
    this._sharedPartitionPersistCookieTemplate = config.sharedPartitionPersistCookieTemplate;
    this._sharedPartitionPersistDestinationIpTemplate = config.sharedPartitionPersistDestinationIpTemplate;
    this._sharedPartitionPersistSourceIpTemplate = config.sharedPartitionPersistSourceIpTemplate;
    this._sharedPartitionPersistSslSidTemplate = config.sharedPartitionPersistSslSidTemplate;
    this._sharedPartitionPolicyTemplate = config.sharedPartitionPolicyTemplate;
    this._sharedPartitionPool = config.sharedPartitionPool;
    this._sharedPartitionQuicTemplate = config.sharedPartitionQuicTemplate;
    this._sharedPartitionServerSslTemplate = config.sharedPartitionServerSslTemplate;
    this._sharedPartitionSmppTemplate = config.sharedPartitionSmppTemplate;
    this._sharedPartitionSmtpTemplate = config.sharedPartitionSmtpTemplate;
    this._sharedPartitionTcp = config.sharedPartitionTcp;
    this._sharedPartitionTcpProxyTemplate = config.sharedPartitionTcpProxyTemplate;
    this._sharedPartitionUdp = config.sharedPartitionUdp;
    this._sharedPartitionVirtualPortTemplate = config.sharedPartitionVirtualPortTemplate;
    this._showtechPrintExtendedStats = config.showtechPrintExtendedStats;
    this._skipRevHash = config.skipRevHash;
    this._snatOnVip = config.snatOnVip;
    this._statsDataAction = config.statsDataAction;
    this._substituteSourceMac = config.substituteSourceMac;
    this._supportHttp2 = config.supportHttp2;
    this._synCookie = config.synCookie;
    this._templateCache = config.templateCache;
    this._templateCacheShared = config.templateCacheShared;
    this._templateClientSsh = config.templateClientSsh;
    this._templateClientSsl = config.templateClientSsl;
    this._templateClientSslShared = config.templateClientSslShared;
    this._templateConnectionReuse = config.templateConnectionReuse;
    this._templateConnectionReuseShared = config.templateConnectionReuseShared;
    this._templateDblb = config.templateDblb;
    this._templateDblbShared = config.templateDblbShared;
    this._templateDiameter = config.templateDiameter;
    this._templateDiameterShared = config.templateDiameterShared;
    this._templateDns = config.templateDns;
    this._templateDnsShared = config.templateDnsShared;
    this._templateDoh = config.templateDoh;
    this._templateDohShared = config.templateDohShared;
    this._templateDynamicService = config.templateDynamicService;
    this._templateDynamicServiceShared = config.templateDynamicServiceShared;
    this._templateExternalService = config.templateExternalService;
    this._templateExternalServiceShared = config.templateExternalServiceShared;
    this._templateFix = config.templateFix;
    this._templateFixShared = config.templateFixShared;
    this._templateFtp = config.templateFtp;
    this._templateHttp = config.templateHttp;
    this._templateHttpPolicy = config.templateHttpPolicy;
    this._templateHttpPolicyShared = config.templateHttpPolicyShared;
    this._templateHttpShared = config.templateHttpShared;
    this._templateImapPop3 = config.templateImapPop3;
    this._templateImapPop3Shared = config.templateImapPop3Shared;
    this._templateMqtt = config.templateMqtt;
    this._templatePersistCookie = config.templatePersistCookie;
    this._templatePersistCookieShared = config.templatePersistCookieShared;
    this._templatePersistDestinationIp = config.templatePersistDestinationIp;
    this._templatePersistDestinationIpShared = config.templatePersistDestinationIpShared;
    this._templatePersistSourceIp = config.templatePersistSourceIp;
    this._templatePersistSourceIpShared = config.templatePersistSourceIpShared;
    this._templatePersistSslSid = config.templatePersistSslSid;
    this._templatePersistSslSidShared = config.templatePersistSslSidShared;
    this._templatePolicy = config.templatePolicy;
    this._templatePolicyShared = config.templatePolicyShared;
    this._templateQuic = config.templateQuic;
    this._templateQuicClient = config.templateQuicClient;
    this._templateQuicServer = config.templateQuicServer;
    this._templateQuicShared = config.templateQuicShared;
    this._templateRamCache = config.templateRamCache;
    this._templateReqmodIcap = config.templateReqmodIcap;
    this._templateRespmodIcap = config.templateRespmodIcap;
    this._templateScaleout = config.templateScaleout;
    this._templateServerSsh = config.templateServerSsh;
    this._templateServerSsl = config.templateServerSsl;
    this._templateServerSslShared = config.templateServerSslShared;
    this._templateSip = config.templateSip;
    this._templateSipShared = config.templateSipShared;
    this._templateSmpp = config.templateSmpp;
    this._templateSmppShared = config.templateSmppShared;
    this._templateSmtp = config.templateSmtp;
    this._templateSmtpShared = config.templateSmtpShared;
    this._templateSsli = config.templateSsli;
    this._templateTcp = config.templateTcp;
    this._templateTcpProxy = config.templateTcpProxy;
    this._templateTcpProxyClient = config.templateTcpProxyClient;
    this._templateTcpProxyServer = config.templateTcpProxyServer;
    this._templateTcpProxyShared = config.templateTcpProxyShared;
    this._templateTcpShared = config.templateTcpShared;
    this._templateUdp = config.templateUdp;
    this._templateUdpShared = config.templateUdpShared;
    this._templateVirtualPort = config.templateVirtualPort;
    this._templateVirtualPortShared = config.templateVirtualPortShared;
    this._trunkFwd = config.trunkFwd;
    this._trunkRev = config.trunkRev;
    this._useAlternatePort = config.useAlternatePort;
    this._useCgnv6 = config.useCgnv6;
    this._useDefaultIfNoServer = config.useDefaultIfNoServer;
    this._useRcvHopForResp = config.useRcvHopForResp;
    this._useRcvHopGroup = config.useRcvHopGroup;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._view = config.view;
    this._whenDown = config.whenDown;
    this._whenDownProtocol2 = config.whenDownProtocol2;
    this._aclList.internalValue = config.aclList;
    this._aflexScripts.internalValue = config.aflexScripts;
    this._authCfg.internalValue = config.authCfg;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // aflex_table_entry_syn_disable - computed: false, optional: true, required: false
  private _aflexTableEntrySynDisable?: number; 
  public get aflexTableEntrySynDisable() {
    return this.getNumberAttribute('aflex_table_entry_syn_disable');
  }
  public set aflexTableEntrySynDisable(value: number) {
    this._aflexTableEntrySynDisable = value;
  }
  public resetAflexTableEntrySynDisable() {
    this._aflexTableEntrySynDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexTableEntrySynDisableInput() {
    return this._aflexTableEntrySynDisable;
  }

  // aflex_table_entry_syn_enable - computed: false, optional: true, required: false
  private _aflexTableEntrySynEnable?: number; 
  public get aflexTableEntrySynEnable() {
    return this.getNumberAttribute('aflex_table_entry_syn_enable');
  }
  public set aflexTableEntrySynEnable(value: number) {
    this._aflexTableEntrySynEnable = value;
  }
  public resetAflexTableEntrySynEnable() {
    this._aflexTableEntrySynEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexTableEntrySynEnableInput() {
    return this._aflexTableEntrySynEnable;
  }

  // alt_protocol1 - computed: false, optional: true, required: false
  private _altProtocol1?: string; 
  public get altProtocol1() {
    return this.getStringAttribute('alt_protocol1');
  }
  public set altProtocol1(value: string) {
    this._altProtocol1 = value;
  }
  public resetAltProtocol1() {
    this._altProtocol1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altProtocol1Input() {
    return this._altProtocol1;
  }

  // alt_protocol2 - computed: false, optional: true, required: false
  private _altProtocol2?: string; 
  public get altProtocol2() {
    return this.getStringAttribute('alt_protocol2');
  }
  public set altProtocol2(value: string) {
    this._altProtocol2 = value;
  }
  public resetAltProtocol2() {
    this._altProtocol2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altProtocol2Input() {
    return this._altProtocol2;
  }

  // alternate_port - computed: false, optional: true, required: false
  private _alternatePort?: number; 
  public get alternatePort() {
    return this.getNumberAttribute('alternate_port');
  }
  public set alternatePort(value: number) {
    this._alternatePort = value;
  }
  public resetAlternatePort() {
    this._alternatePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternatePortInput() {
    return this._alternatePort;
  }

  // alternate_port_number - computed: false, optional: true, required: false
  private _alternatePortNumber?: number; 
  public get alternatePortNumber() {
    return this.getNumberAttribute('alternate_port_number');
  }
  public set alternatePortNumber(value: number) {
    this._alternatePortNumber = value;
  }
  public resetAlternatePortNumber() {
    this._alternatePortNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternatePortNumberInput() {
    return this._alternatePortNumber;
  }

  // attack_detection - computed: false, optional: true, required: false
  private _attackDetection?: number; 
  public get attackDetection() {
    return this.getNumberAttribute('attack_detection');
  }
  public set attackDetection(value: number) {
    this._attackDetection = value;
  }
  public resetAttackDetection() {
    this._attackDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attackDetectionInput() {
    return this._attackDetection;
  }

  // auto - computed: false, optional: true, required: false
  private _auto?: number; 
  public get auto() {
    return this.getNumberAttribute('auto');
  }
  public set auto(value: number) {
    this._auto = value;
  }
  public resetAuto() {
    this._auto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInput() {
    return this._auto;
  }

  // clientip_sticky_nat - computed: false, optional: true, required: false
  private _clientipStickyNat?: number; 
  public get clientipStickyNat() {
    return this.getNumberAttribute('clientip_sticky_nat');
  }
  public set clientipStickyNat(value: number) {
    this._clientipStickyNat = value;
  }
  public resetClientipStickyNat() {
    this._clientipStickyNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientipStickyNatInput() {
    return this._clientipStickyNat;
  }

  // conn_limit - computed: false, optional: true, required: false
  private _connLimit?: number; 
  public get connLimit() {
    return this.getNumberAttribute('conn_limit');
  }
  public set connLimit(value: number) {
    this._connLimit = value;
  }
  public resetConnLimit() {
    this._connLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connLimitInput() {
    return this._connLimit;
  }

  // cpu_compute - computed: false, optional: true, required: false
  private _cpuCompute?: number; 
  public get cpuCompute() {
    return this.getNumberAttribute('cpu_compute');
  }
  public set cpuCompute(value: number) {
    this._cpuCompute = value;
  }
  public resetCpuCompute() {
    this._cpuCompute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuComputeInput() {
    return this._cpuCompute;
  }

  // def_selection_if_pref_failed - computed: false, optional: true, required: false
  private _defSelectionIfPrefFailed?: string; 
  public get defSelectionIfPrefFailed() {
    return this.getStringAttribute('def_selection_if_pref_failed');
  }
  public set defSelectionIfPrefFailed(value: string) {
    this._defSelectionIfPrefFailed = value;
  }
  public resetDefSelectionIfPrefFailed() {
    this._defSelectionIfPrefFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defSelectionIfPrefFailedInput() {
    return this._defSelectionIfPrefFailed;
  }

  // enable_playerid_check - computed: false, optional: true, required: false
  private _enablePlayeridCheck?: number; 
  public get enablePlayeridCheck() {
    return this.getNumberAttribute('enable_playerid_check');
  }
  public set enablePlayeridCheck(value: number) {
    this._enablePlayeridCheck = value;
  }
  public resetEnablePlayeridCheck() {
    this._enablePlayeridCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePlayeridCheckInput() {
    return this._enablePlayeridCheck;
  }

  // enable_scaleout - computed: false, optional: true, required: false
  private _enableScaleout?: number; 
  public get enableScaleout() {
    return this.getNumberAttribute('enable_scaleout');
  }
  public set enableScaleout(value: number) {
    this._enableScaleout = value;
  }
  public resetEnableScaleout() {
    this._enableScaleout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableScaleoutInput() {
    return this._enableScaleout;
  }

  // eth_fwd - computed: false, optional: true, required: false
  private _ethFwd?: number; 
  public get ethFwd() {
    return this.getNumberAttribute('eth_fwd');
  }
  public set ethFwd(value: number) {
    this._ethFwd = value;
  }
  public resetEthFwd() {
    this._ethFwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethFwdInput() {
    return this._ethFwd;
  }

  // eth_rev - computed: false, optional: true, required: false
  private _ethRev?: number; 
  public get ethRev() {
    return this.getNumberAttribute('eth_rev');
  }
  public set ethRev(value: number) {
    this._ethRev = value;
  }
  public resetEthRev() {
    this._ethRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethRevInput() {
    return this._ethRev;
  }

  // expand - computed: false, optional: true, required: false
  private _expand?: number; 
  public get expand() {
    return this.getNumberAttribute('expand');
  }
  public set expand(value: number) {
    this._expand = value;
  }
  public resetExpand() {
    this._expand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expandInput() {
    return this._expand;
  }

  // extended_stats - computed: false, optional: true, required: false
  private _extendedStats?: number; 
  public get extendedStats() {
    return this.getNumberAttribute('extended_stats');
  }
  public set extendedStats(value: number) {
    this._extendedStats = value;
  }
  public resetExtendedStats() {
    this._extendedStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedStatsInput() {
    return this._extendedStats;
  }

  // fast_path - computed: false, optional: true, required: false
  private _fastPath?: string; 
  public get fastPath() {
    return this.getStringAttribute('fast_path');
  }
  public set fastPath(value: string) {
    this._fastPath = value;
  }
  public resetFastPath() {
    this._fastPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastPathInput() {
    return this._fastPath;
  }

  // force_routing_mode - computed: false, optional: true, required: false
  private _forceRoutingMode?: number; 
  public get forceRoutingMode() {
    return this.getNumberAttribute('force_routing_mode');
  }
  public set forceRoutingMode(value: number) {
    this._forceRoutingMode = value;
  }
  public resetForceRoutingMode() {
    this._forceRoutingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceRoutingModeInput() {
    return this._forceRoutingMode;
  }

  // gslb_enable - computed: false, optional: true, required: false
  private _gslbEnable?: number; 
  public get gslbEnable() {
    return this.getNumberAttribute('gslb_enable');
  }
  public set gslbEnable(value: number) {
    this._gslbEnable = value;
  }
  public resetGslbEnable() {
    this._gslbEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbEnableInput() {
    return this._gslbEnable;
  }

  // gtp_session_lb - computed: false, optional: true, required: false
  private _gtpSessionLb?: number; 
  public get gtpSessionLb() {
    return this.getNumberAttribute('gtp_session_lb');
  }
  public set gtpSessionLb(value: number) {
    this._gtpSessionLb = value;
  }
  public resetGtpSessionLb() {
    this._gtpSessionLb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpSessionLbInput() {
    return this._gtpSessionLb;
  }

  // ha_conn_mirror - computed: false, optional: true, required: false
  private _haConnMirror?: number; 
  public get haConnMirror() {
    return this.getNumberAttribute('ha_conn_mirror');
  }
  public set haConnMirror(value: number) {
    this._haConnMirror = value;
  }
  public resetHaConnMirror() {
    this._haConnMirror = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haConnMirrorInput() {
    return this._haConnMirror;
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

  // ignore_global - computed: false, optional: true, required: false
  private _ignoreGlobal?: number; 
  public get ignoreGlobal() {
    return this.getNumberAttribute('ignore_global');
  }
  public set ignoreGlobal(value: number) {
    this._ignoreGlobal = value;
  }
  public resetIgnoreGlobal() {
    this._ignoreGlobal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreGlobalInput() {
    return this._ignoreGlobal;
  }

  // ip_map_list - computed: false, optional: true, required: false
  private _ipMapList?: string; 
  public get ipMapList() {
    return this.getStringAttribute('ip_map_list');
  }
  public set ipMapList(value: string) {
    this._ipMapList = value;
  }
  public resetIpMapList() {
    this._ipMapList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMapListInput() {
    return this._ipMapList;
  }

  // ip_only_lb - computed: false, optional: true, required: false
  private _ipOnlyLb?: number; 
  public get ipOnlyLb() {
    return this.getNumberAttribute('ip_only_lb');
  }
  public set ipOnlyLb(value: number) {
    this._ipOnlyLb = value;
  }
  public resetIpOnlyLb() {
    this._ipOnlyLb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipOnlyLbInput() {
    return this._ipOnlyLb;
  }

  // ip_smart_rr - computed: false, optional: true, required: false
  private _ipSmartRr?: number; 
  public get ipSmartRr() {
    return this.getNumberAttribute('ip_smart_rr');
  }
  public set ipSmartRr(value: number) {
    this._ipSmartRr = value;
  }
  public resetIpSmartRr() {
    this._ipSmartRr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSmartRrInput() {
    return this._ipSmartRr;
  }

  // ipinip - computed: false, optional: true, required: false
  private _ipinip?: number; 
  public get ipinip() {
    return this.getNumberAttribute('ipinip');
  }
  public set ipinip(value: number) {
    this._ipinip = value;
  }
  public resetIpinip() {
    this._ipinip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipinipInput() {
    return this._ipinip;
  }

  // l7_hardware_assist - computed: false, optional: true, required: false
  private _l7HardwareAssist?: number; 
  public get l7HardwareAssist() {
    return this.getNumberAttribute('l7_hardware_assist');
  }
  public set l7HardwareAssist(value: number) {
    this._l7HardwareAssist = value;
  }
  public resetL7HardwareAssist() {
    this._l7HardwareAssist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7HardwareAssistInput() {
    return this._l7HardwareAssist;
  }

  // l7_service_chain - computed: false, optional: true, required: false
  private _l7ServiceChain?: number; 
  public get l7ServiceChain() {
    return this.getNumberAttribute('l7_service_chain');
  }
  public set l7ServiceChain(value: number) {
    this._l7ServiceChain = value;
  }
  public resetL7ServiceChain() {
    this._l7ServiceChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7ServiceChainInput() {
    return this._l7ServiceChain;
  }

  // memory_compute - computed: false, optional: true, required: false
  private _memoryCompute?: number; 
  public get memoryCompute() {
    return this.getNumberAttribute('memory_compute');
  }
  public set memoryCompute(value: number) {
    this._memoryCompute = value;
  }
  public resetMemoryCompute() {
    this._memoryCompute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryComputeInput() {
    return this._memoryCompute;
  }

  // message_switching - computed: false, optional: true, required: false
  private _messageSwitching?: number; 
  public get messageSwitching() {
    return this.getNumberAttribute('message_switching');
  }
  public set messageSwitching(value: number) {
    this._messageSwitching = value;
  }
  public resetMessageSwitching() {
    this._messageSwitching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageSwitchingInput() {
    return this._messageSwitching;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // ng_waf - computed: false, optional: true, required: false
  private _ngWaf?: number; 
  public get ngWaf() {
    return this.getNumberAttribute('ng_waf');
  }
  public set ngWaf(value: number) {
    this._ngWaf = value;
  }
  public resetNgWaf() {
    this._ngWaf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngWafInput() {
    return this._ngWaf;
  }

  // no_auto_up_on_aflex - computed: false, optional: true, required: false
  private _noAutoUpOnAflex?: number; 
  public get noAutoUpOnAflex() {
    return this.getNumberAttribute('no_auto_up_on_aflex');
  }
  public set noAutoUpOnAflex(value: number) {
    this._noAutoUpOnAflex = value;
  }
  public resetNoAutoUpOnAflex() {
    this._noAutoUpOnAflex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAutoUpOnAflexInput() {
    return this._noAutoUpOnAflex;
  }

  // no_dest_nat - computed: false, optional: true, required: false
  private _noDestNat?: number; 
  public get noDestNat() {
    return this.getNumberAttribute('no_dest_nat');
  }
  public set noDestNat(value: number) {
    this._noDestNat = value;
  }
  public resetNoDestNat() {
    this._noDestNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDestNatInput() {
    return this._noDestNat;
  }

  // no_logging - computed: false, optional: true, required: false
  private _noLogging?: number; 
  public get noLogging() {
    return this.getNumberAttribute('no_logging');
  }
  public set noLogging(value: number) {
    this._noLogging = value;
  }
  public resetNoLogging() {
    this._noLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noLoggingInput() {
    return this._noLogging;
  }

  // on_syn - computed: false, optional: true, required: false
  private _onSyn?: number; 
  public get onSyn() {
    return this.getNumberAttribute('on_syn');
  }
  public set onSyn(value: number) {
    this._onSyn = value;
  }
  public resetOnSyn() {
    this._onSyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onSynInput() {
    return this._onSyn;
  }

  // one_server_conn - computed: false, optional: true, required: false
  private _oneServerConn?: number; 
  public get oneServerConn() {
    return this.getNumberAttribute('one_server_conn');
  }
  public set oneServerConn(value: number) {
    this._oneServerConn = value;
  }
  public resetOneServerConn() {
    this._oneServerConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneServerConnInput() {
    return this._oneServerConn;
  }

  // optimization_level - computed: false, optional: true, required: false
  private _optimizationLevel?: string; 
  public get optimizationLevel() {
    return this.getStringAttribute('optimization_level');
  }
  public set optimizationLevel(value: string) {
    this._optimizationLevel = value;
  }
  public resetOptimizationLevel() {
    this._optimizationLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizationLevelInput() {
    return this._optimizationLevel;
  }

  // p_template_sip_shared - computed: false, optional: true, required: false
  private _pTemplateSipShared?: number; 
  public get pTemplateSipShared() {
    return this.getNumberAttribute('p_template_sip_shared');
  }
  public set pTemplateSipShared(value: number) {
    this._pTemplateSipShared = value;
  }
  public resetPTemplateSipShared() {
    this._pTemplateSipShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pTemplateSipSharedInput() {
    return this._pTemplateSipShared;
  }

  // packet_capture_template - computed: false, optional: true, required: false
  private _packetCaptureTemplate?: string; 
  public get packetCaptureTemplate() {
    return this.getStringAttribute('packet_capture_template');
  }
  public set packetCaptureTemplate(value: string) {
    this._packetCaptureTemplate = value;
  }
  public resetPacketCaptureTemplate() {
    this._packetCaptureTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCaptureTemplateInput() {
    return this._packetCaptureTemplate;
  }

  // persist_type - computed: false, optional: true, required: false
  private _persistType?: string; 
  public get persistType() {
    return this.getStringAttribute('persist_type');
  }
  public set persistType(value: string) {
    this._persistType = value;
  }
  public resetPersistType() {
    this._persistType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistTypeInput() {
    return this._persistType;
  }

  // pool - computed: false, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // pool_shared - computed: false, optional: true, required: false
  private _poolShared?: string; 
  public get poolShared() {
    return this.getStringAttribute('pool_shared');
  }
  public set poolShared(value: string) {
    this._poolShared = value;
  }
  public resetPoolShared() {
    this._poolShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolSharedInput() {
    return this._poolShared;
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

  // port_translation - computed: false, optional: true, required: false
  private _portTranslation?: number; 
  public get portTranslation() {
    return this.getNumberAttribute('port_translation');
  }
  public set portTranslation(value: number) {
    this._portTranslation = value;
  }
  public resetPortTranslation() {
    this._portTranslation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portTranslationInput() {
    return this._portTranslation;
  }

  // precedence - computed: false, optional: true, required: false
  private _precedence?: number; 
  public get precedence() {
    return this.getNumberAttribute('precedence');
  }
  public set precedence(value: number) {
    this._precedence = value;
  }
  public resetPrecedence() {
    this._precedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precedenceInput() {
    return this._precedence;
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

  // proxy_layer - computed: false, optional: true, required: false
  private _proxyLayer?: string; 
  public get proxyLayer() {
    return this.getStringAttribute('proxy_layer');
  }
  public set proxyLayer(value: string) {
    this._proxyLayer = value;
  }
  public resetProxyLayer() {
    this._proxyLayer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyLayerInput() {
    return this._proxyLayer;
  }

  // range - computed: false, optional: true, required: false
  private _range?: number; 
  public get range() {
    return this.getNumberAttribute('range');
  }
  public set range(value: number) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }

  // rate - computed: false, optional: true, required: false
  private _rate?: number; 
  public get rate() {
    return this.getNumberAttribute('rate');
  }
  public set rate(value: number) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }

  // redirect_to_https - computed: false, optional: true, required: false
  private _redirectToHttps?: number; 
  public get redirectToHttps() {
    return this.getNumberAttribute('redirect_to_https');
  }
  public set redirectToHttps(value: number) {
    this._redirectToHttps = value;
  }
  public resetRedirectToHttps() {
    this._redirectToHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectToHttpsInput() {
    return this._redirectToHttps;
  }

  // reply_acme_challenge - computed: false, optional: true, required: false
  private _replyAcmeChallenge?: number; 
  public get replyAcmeChallenge() {
    return this.getNumberAttribute('reply_acme_challenge');
  }
  public set replyAcmeChallenge(value: number) {
    this._replyAcmeChallenge = value;
  }
  public resetReplyAcmeChallenge() {
    this._replyAcmeChallenge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replyAcmeChallengeInput() {
    return this._replyAcmeChallenge;
  }

  // req_fail - computed: false, optional: true, required: false
  private _reqFail?: number; 
  public get reqFail() {
    return this.getNumberAttribute('req_fail');
  }
  public set reqFail(value: number) {
    this._reqFail = value;
  }
  public resetReqFail() {
    this._reqFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqFailInput() {
    return this._reqFail;
  }

  // reselection - computed: false, optional: true, required: false
  private _reselection?: string; 
  public get reselection() {
    return this.getStringAttribute('reselection');
  }
  public set reselection(value: string) {
    this._reselection = value;
  }
  public resetReselection() {
    this._reselection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reselectionInput() {
    return this._reselection;
  }

  // reset - computed: false, optional: true, required: false
  private _reset?: number; 
  public get reset() {
    return this.getNumberAttribute('reset');
  }
  public set reset(value: number) {
    this._reset = value;
  }
  public resetReset() {
    this._reset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetInput() {
    return this._reset;
  }

  // reset_on_server_selection_fail - computed: false, optional: true, required: false
  private _resetOnServerSelectionFail?: number; 
  public get resetOnServerSelectionFail() {
    return this.getNumberAttribute('reset_on_server_selection_fail');
  }
  public set resetOnServerSelectionFail(value: number) {
    this._resetOnServerSelectionFail = value;
  }
  public resetResetOnServerSelectionFail() {
    this._resetOnServerSelectionFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetOnServerSelectionFailInput() {
    return this._resetOnServerSelectionFail;
  }

  // resolve_web_cat_list - computed: false, optional: true, required: false
  private _resolveWebCatList?: string; 
  public get resolveWebCatList() {
    return this.getStringAttribute('resolve_web_cat_list');
  }
  public set resolveWebCatList(value: string) {
    this._resolveWebCatList = value;
  }
  public resetResolveWebCatList() {
    this._resolveWebCatList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveWebCatListInput() {
    return this._resolveWebCatList;
  }

  // rtp_sip_call_id_match - computed: false, optional: true, required: false
  private _rtpSipCallIdMatch?: number; 
  public get rtpSipCallIdMatch() {
    return this.getNumberAttribute('rtp_sip_call_id_match');
  }
  public set rtpSipCallIdMatch(value: number) {
    this._rtpSipCallIdMatch = value;
  }
  public resetRtpSipCallIdMatch() {
    this._rtpSipCallIdMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtpSipCallIdMatchInput() {
    return this._rtpSipCallIdMatch;
  }

  // secs - computed: false, optional: true, required: false
  private _secs?: number; 
  public get secs() {
    return this.getNumberAttribute('secs');
  }
  public set secs(value: number) {
    this._secs = value;
  }
  public resetSecs() {
    this._secs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secsInput() {
    return this._secs;
  }

  // serv_sel_fail - computed: false, optional: true, required: false
  private _servSelFail?: number; 
  public get servSelFail() {
    return this.getNumberAttribute('serv_sel_fail');
  }
  public set servSelFail(value: number) {
    this._servSelFail = value;
  }
  public resetServSelFail() {
    this._servSelFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servSelFailInput() {
    return this._servSelFail;
  }

  // server_group - computed: false, optional: true, required: false
  private _serverGroup?: string; 
  public get serverGroup() {
    return this.getStringAttribute('server_group');
  }
  public set serverGroup(value: string) {
    this._serverGroup = value;
  }
  public resetServerGroup() {
    this._serverGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverGroupInput() {
    return this._serverGroup;
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

  // shared_partition_cache_template - computed: false, optional: true, required: false
  private _sharedPartitionCacheTemplate?: number; 
  public get sharedPartitionCacheTemplate() {
    return this.getNumberAttribute('shared_partition_cache_template');
  }
  public set sharedPartitionCacheTemplate(value: number) {
    this._sharedPartitionCacheTemplate = value;
  }
  public resetSharedPartitionCacheTemplate() {
    this._sharedPartitionCacheTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionCacheTemplateInput() {
    return this._sharedPartitionCacheTemplate;
  }

  // shared_partition_client_ssl_template - computed: false, optional: true, required: false
  private _sharedPartitionClientSslTemplate?: number; 
  public get sharedPartitionClientSslTemplate() {
    return this.getNumberAttribute('shared_partition_client_ssl_template');
  }
  public set sharedPartitionClientSslTemplate(value: number) {
    this._sharedPartitionClientSslTemplate = value;
  }
  public resetSharedPartitionClientSslTemplate() {
    this._sharedPartitionClientSslTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionClientSslTemplateInput() {
    return this._sharedPartitionClientSslTemplate;
  }

  // shared_partition_connection_reuse_template - computed: false, optional: true, required: false
  private _sharedPartitionConnectionReuseTemplate?: number; 
  public get sharedPartitionConnectionReuseTemplate() {
    return this.getNumberAttribute('shared_partition_connection_reuse_template');
  }
  public set sharedPartitionConnectionReuseTemplate(value: number) {
    this._sharedPartitionConnectionReuseTemplate = value;
  }
  public resetSharedPartitionConnectionReuseTemplate() {
    this._sharedPartitionConnectionReuseTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionConnectionReuseTemplateInput() {
    return this._sharedPartitionConnectionReuseTemplate;
  }

  // shared_partition_dblb_template - computed: false, optional: true, required: false
  private _sharedPartitionDblbTemplate?: number; 
  public get sharedPartitionDblbTemplate() {
    return this.getNumberAttribute('shared_partition_dblb_template');
  }
  public set sharedPartitionDblbTemplate(value: number) {
    this._sharedPartitionDblbTemplate = value;
  }
  public resetSharedPartitionDblbTemplate() {
    this._sharedPartitionDblbTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionDblbTemplateInput() {
    return this._sharedPartitionDblbTemplate;
  }

  // shared_partition_diameter_template - computed: false, optional: true, required: false
  private _sharedPartitionDiameterTemplate?: number; 
  public get sharedPartitionDiameterTemplate() {
    return this.getNumberAttribute('shared_partition_diameter_template');
  }
  public set sharedPartitionDiameterTemplate(value: number) {
    this._sharedPartitionDiameterTemplate = value;
  }
  public resetSharedPartitionDiameterTemplate() {
    this._sharedPartitionDiameterTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionDiameterTemplateInput() {
    return this._sharedPartitionDiameterTemplate;
  }

  // shared_partition_dns_template - computed: false, optional: true, required: false
  private _sharedPartitionDnsTemplate?: number; 
  public get sharedPartitionDnsTemplate() {
    return this.getNumberAttribute('shared_partition_dns_template');
  }
  public set sharedPartitionDnsTemplate(value: number) {
    this._sharedPartitionDnsTemplate = value;
  }
  public resetSharedPartitionDnsTemplate() {
    this._sharedPartitionDnsTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionDnsTemplateInput() {
    return this._sharedPartitionDnsTemplate;
  }

  // shared_partition_doh_template - computed: false, optional: true, required: false
  private _sharedPartitionDohTemplate?: number; 
  public get sharedPartitionDohTemplate() {
    return this.getNumberAttribute('shared_partition_doh_template');
  }
  public set sharedPartitionDohTemplate(value: number) {
    this._sharedPartitionDohTemplate = value;
  }
  public resetSharedPartitionDohTemplate() {
    this._sharedPartitionDohTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionDohTemplateInput() {
    return this._sharedPartitionDohTemplate;
  }

  // shared_partition_dynamic_service_template - computed: false, optional: true, required: false
  private _sharedPartitionDynamicServiceTemplate?: number; 
  public get sharedPartitionDynamicServiceTemplate() {
    return this.getNumberAttribute('shared_partition_dynamic_service_template');
  }
  public set sharedPartitionDynamicServiceTemplate(value: number) {
    this._sharedPartitionDynamicServiceTemplate = value;
  }
  public resetSharedPartitionDynamicServiceTemplate() {
    this._sharedPartitionDynamicServiceTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionDynamicServiceTemplateInput() {
    return this._sharedPartitionDynamicServiceTemplate;
  }

  // shared_partition_external_service_template - computed: false, optional: true, required: false
  private _sharedPartitionExternalServiceTemplate?: number; 
  public get sharedPartitionExternalServiceTemplate() {
    return this.getNumberAttribute('shared_partition_external_service_template');
  }
  public set sharedPartitionExternalServiceTemplate(value: number) {
    this._sharedPartitionExternalServiceTemplate = value;
  }
  public resetSharedPartitionExternalServiceTemplate() {
    this._sharedPartitionExternalServiceTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionExternalServiceTemplateInput() {
    return this._sharedPartitionExternalServiceTemplate;
  }

  // shared_partition_fix_template - computed: false, optional: true, required: false
  private _sharedPartitionFixTemplate?: number; 
  public get sharedPartitionFixTemplate() {
    return this.getNumberAttribute('shared_partition_fix_template');
  }
  public set sharedPartitionFixTemplate(value: number) {
    this._sharedPartitionFixTemplate = value;
  }
  public resetSharedPartitionFixTemplate() {
    this._sharedPartitionFixTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionFixTemplateInput() {
    return this._sharedPartitionFixTemplate;
  }

  // shared_partition_http_policy_template - computed: false, optional: true, required: false
  private _sharedPartitionHttpPolicyTemplate?: number; 
  public get sharedPartitionHttpPolicyTemplate() {
    return this.getNumberAttribute('shared_partition_http_policy_template');
  }
  public set sharedPartitionHttpPolicyTemplate(value: number) {
    this._sharedPartitionHttpPolicyTemplate = value;
  }
  public resetSharedPartitionHttpPolicyTemplate() {
    this._sharedPartitionHttpPolicyTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionHttpPolicyTemplateInput() {
    return this._sharedPartitionHttpPolicyTemplate;
  }

  // shared_partition_http_template - computed: false, optional: true, required: false
  private _sharedPartitionHttpTemplate?: number; 
  public get sharedPartitionHttpTemplate() {
    return this.getNumberAttribute('shared_partition_http_template');
  }
  public set sharedPartitionHttpTemplate(value: number) {
    this._sharedPartitionHttpTemplate = value;
  }
  public resetSharedPartitionHttpTemplate() {
    this._sharedPartitionHttpTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionHttpTemplateInput() {
    return this._sharedPartitionHttpTemplate;
  }

  // shared_partition_imap_pop3_template - computed: false, optional: true, required: false
  private _sharedPartitionImapPop3Template?: number; 
  public get sharedPartitionImapPop3Template() {
    return this.getNumberAttribute('shared_partition_imap_pop3_template');
  }
  public set sharedPartitionImapPop3Template(value: number) {
    this._sharedPartitionImapPop3Template = value;
  }
  public resetSharedPartitionImapPop3Template() {
    this._sharedPartitionImapPop3Template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionImapPop3TemplateInput() {
    return this._sharedPartitionImapPop3Template;
  }

  // shared_partition_persist_cookie_template - computed: false, optional: true, required: false
  private _sharedPartitionPersistCookieTemplate?: number; 
  public get sharedPartitionPersistCookieTemplate() {
    return this.getNumberAttribute('shared_partition_persist_cookie_template');
  }
  public set sharedPartitionPersistCookieTemplate(value: number) {
    this._sharedPartitionPersistCookieTemplate = value;
  }
  public resetSharedPartitionPersistCookieTemplate() {
    this._sharedPartitionPersistCookieTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionPersistCookieTemplateInput() {
    return this._sharedPartitionPersistCookieTemplate;
  }

  // shared_partition_persist_destination_ip_template - computed: false, optional: true, required: false
  private _sharedPartitionPersistDestinationIpTemplate?: number; 
  public get sharedPartitionPersistDestinationIpTemplate() {
    return this.getNumberAttribute('shared_partition_persist_destination_ip_template');
  }
  public set sharedPartitionPersistDestinationIpTemplate(value: number) {
    this._sharedPartitionPersistDestinationIpTemplate = value;
  }
  public resetSharedPartitionPersistDestinationIpTemplate() {
    this._sharedPartitionPersistDestinationIpTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionPersistDestinationIpTemplateInput() {
    return this._sharedPartitionPersistDestinationIpTemplate;
  }

  // shared_partition_persist_source_ip_template - computed: false, optional: true, required: false
  private _sharedPartitionPersistSourceIpTemplate?: number; 
  public get sharedPartitionPersistSourceIpTemplate() {
    return this.getNumberAttribute('shared_partition_persist_source_ip_template');
  }
  public set sharedPartitionPersistSourceIpTemplate(value: number) {
    this._sharedPartitionPersistSourceIpTemplate = value;
  }
  public resetSharedPartitionPersistSourceIpTemplate() {
    this._sharedPartitionPersistSourceIpTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionPersistSourceIpTemplateInput() {
    return this._sharedPartitionPersistSourceIpTemplate;
  }

  // shared_partition_persist_ssl_sid_template - computed: false, optional: true, required: false
  private _sharedPartitionPersistSslSidTemplate?: number; 
  public get sharedPartitionPersistSslSidTemplate() {
    return this.getNumberAttribute('shared_partition_persist_ssl_sid_template');
  }
  public set sharedPartitionPersistSslSidTemplate(value: number) {
    this._sharedPartitionPersistSslSidTemplate = value;
  }
  public resetSharedPartitionPersistSslSidTemplate() {
    this._sharedPartitionPersistSslSidTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionPersistSslSidTemplateInput() {
    return this._sharedPartitionPersistSslSidTemplate;
  }

  // shared_partition_policy_template - computed: false, optional: true, required: false
  private _sharedPartitionPolicyTemplate?: number; 
  public get sharedPartitionPolicyTemplate() {
    return this.getNumberAttribute('shared_partition_policy_template');
  }
  public set sharedPartitionPolicyTemplate(value: number) {
    this._sharedPartitionPolicyTemplate = value;
  }
  public resetSharedPartitionPolicyTemplate() {
    this._sharedPartitionPolicyTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionPolicyTemplateInput() {
    return this._sharedPartitionPolicyTemplate;
  }

  // shared_partition_pool - computed: false, optional: true, required: false
  private _sharedPartitionPool?: number; 
  public get sharedPartitionPool() {
    return this.getNumberAttribute('shared_partition_pool');
  }
  public set sharedPartitionPool(value: number) {
    this._sharedPartitionPool = value;
  }
  public resetSharedPartitionPool() {
    this._sharedPartitionPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionPoolInput() {
    return this._sharedPartitionPool;
  }

  // shared_partition_quic_template - computed: false, optional: true, required: false
  private _sharedPartitionQuicTemplate?: number; 
  public get sharedPartitionQuicTemplate() {
    return this.getNumberAttribute('shared_partition_quic_template');
  }
  public set sharedPartitionQuicTemplate(value: number) {
    this._sharedPartitionQuicTemplate = value;
  }
  public resetSharedPartitionQuicTemplate() {
    this._sharedPartitionQuicTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionQuicTemplateInput() {
    return this._sharedPartitionQuicTemplate;
  }

  // shared_partition_server_ssl_template - computed: false, optional: true, required: false
  private _sharedPartitionServerSslTemplate?: number; 
  public get sharedPartitionServerSslTemplate() {
    return this.getNumberAttribute('shared_partition_server_ssl_template');
  }
  public set sharedPartitionServerSslTemplate(value: number) {
    this._sharedPartitionServerSslTemplate = value;
  }
  public resetSharedPartitionServerSslTemplate() {
    this._sharedPartitionServerSslTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionServerSslTemplateInput() {
    return this._sharedPartitionServerSslTemplate;
  }

  // shared_partition_smpp_template - computed: false, optional: true, required: false
  private _sharedPartitionSmppTemplate?: number; 
  public get sharedPartitionSmppTemplate() {
    return this.getNumberAttribute('shared_partition_smpp_template');
  }
  public set sharedPartitionSmppTemplate(value: number) {
    this._sharedPartitionSmppTemplate = value;
  }
  public resetSharedPartitionSmppTemplate() {
    this._sharedPartitionSmppTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionSmppTemplateInput() {
    return this._sharedPartitionSmppTemplate;
  }

  // shared_partition_smtp_template - computed: false, optional: true, required: false
  private _sharedPartitionSmtpTemplate?: number; 
  public get sharedPartitionSmtpTemplate() {
    return this.getNumberAttribute('shared_partition_smtp_template');
  }
  public set sharedPartitionSmtpTemplate(value: number) {
    this._sharedPartitionSmtpTemplate = value;
  }
  public resetSharedPartitionSmtpTemplate() {
    this._sharedPartitionSmtpTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionSmtpTemplateInput() {
    return this._sharedPartitionSmtpTemplate;
  }

  // shared_partition_tcp - computed: false, optional: true, required: false
  private _sharedPartitionTcp?: number; 
  public get sharedPartitionTcp() {
    return this.getNumberAttribute('shared_partition_tcp');
  }
  public set sharedPartitionTcp(value: number) {
    this._sharedPartitionTcp = value;
  }
  public resetSharedPartitionTcp() {
    this._sharedPartitionTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionTcpInput() {
    return this._sharedPartitionTcp;
  }

  // shared_partition_tcp_proxy_template - computed: false, optional: true, required: false
  private _sharedPartitionTcpProxyTemplate?: number; 
  public get sharedPartitionTcpProxyTemplate() {
    return this.getNumberAttribute('shared_partition_tcp_proxy_template');
  }
  public set sharedPartitionTcpProxyTemplate(value: number) {
    this._sharedPartitionTcpProxyTemplate = value;
  }
  public resetSharedPartitionTcpProxyTemplate() {
    this._sharedPartitionTcpProxyTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionTcpProxyTemplateInput() {
    return this._sharedPartitionTcpProxyTemplate;
  }

  // shared_partition_udp - computed: false, optional: true, required: false
  private _sharedPartitionUdp?: number; 
  public get sharedPartitionUdp() {
    return this.getNumberAttribute('shared_partition_udp');
  }
  public set sharedPartitionUdp(value: number) {
    this._sharedPartitionUdp = value;
  }
  public resetSharedPartitionUdp() {
    this._sharedPartitionUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionUdpInput() {
    return this._sharedPartitionUdp;
  }

  // shared_partition_virtual_port_template - computed: false, optional: true, required: false
  private _sharedPartitionVirtualPortTemplate?: number; 
  public get sharedPartitionVirtualPortTemplate() {
    return this.getNumberAttribute('shared_partition_virtual_port_template');
  }
  public set sharedPartitionVirtualPortTemplate(value: number) {
    this._sharedPartitionVirtualPortTemplate = value;
  }
  public resetSharedPartitionVirtualPortTemplate() {
    this._sharedPartitionVirtualPortTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionVirtualPortTemplateInput() {
    return this._sharedPartitionVirtualPortTemplate;
  }

  // showtech_print_extended_stats - computed: false, optional: true, required: false
  private _showtechPrintExtendedStats?: number; 
  public get showtechPrintExtendedStats() {
    return this.getNumberAttribute('showtech_print_extended_stats');
  }
  public set showtechPrintExtendedStats(value: number) {
    this._showtechPrintExtendedStats = value;
  }
  public resetShowtechPrintExtendedStats() {
    this._showtechPrintExtendedStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showtechPrintExtendedStatsInput() {
    return this._showtechPrintExtendedStats;
  }

  // skip_rev_hash - computed: false, optional: true, required: false
  private _skipRevHash?: number; 
  public get skipRevHash() {
    return this.getNumberAttribute('skip_rev_hash');
  }
  public set skipRevHash(value: number) {
    this._skipRevHash = value;
  }
  public resetSkipRevHash() {
    this._skipRevHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipRevHashInput() {
    return this._skipRevHash;
  }

  // snat_on_vip - computed: false, optional: true, required: false
  private _snatOnVip?: number; 
  public get snatOnVip() {
    return this.getNumberAttribute('snat_on_vip');
  }
  public set snatOnVip(value: number) {
    this._snatOnVip = value;
  }
  public resetSnatOnVip() {
    this._snatOnVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatOnVipInput() {
    return this._snatOnVip;
  }

  // stats_data_action - computed: false, optional: true, required: false
  private _statsDataAction?: string; 
  public get statsDataAction() {
    return this.getStringAttribute('stats_data_action');
  }
  public set statsDataAction(value: string) {
    this._statsDataAction = value;
  }
  public resetStatsDataAction() {
    this._statsDataAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsDataActionInput() {
    return this._statsDataAction;
  }

  // substitute_source_mac - computed: false, optional: true, required: false
  private _substituteSourceMac?: number; 
  public get substituteSourceMac() {
    return this.getNumberAttribute('substitute_source_mac');
  }
  public set substituteSourceMac(value: number) {
    this._substituteSourceMac = value;
  }
  public resetSubstituteSourceMac() {
    this._substituteSourceMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substituteSourceMacInput() {
    return this._substituteSourceMac;
  }

  // support_http2 - computed: false, optional: true, required: false
  private _supportHttp2?: number; 
  public get supportHttp2() {
    return this.getNumberAttribute('support_http2');
  }
  public set supportHttp2(value: number) {
    this._supportHttp2 = value;
  }
  public resetSupportHttp2() {
    this._supportHttp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportHttp2Input() {
    return this._supportHttp2;
  }

  // syn_cookie - computed: false, optional: true, required: false
  private _synCookie?: number; 
  public get synCookie() {
    return this.getNumberAttribute('syn_cookie');
  }
  public set synCookie(value: number) {
    this._synCookie = value;
  }
  public resetSynCookie() {
    this._synCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synCookieInput() {
    return this._synCookie;
  }

  // template_cache - computed: false, optional: true, required: false
  private _templateCache?: string; 
  public get templateCache() {
    return this.getStringAttribute('template_cache');
  }
  public set templateCache(value: string) {
    this._templateCache = value;
  }
  public resetTemplateCache() {
    this._templateCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateCacheInput() {
    return this._templateCache;
  }

  // template_cache_shared - computed: false, optional: true, required: false
  private _templateCacheShared?: string; 
  public get templateCacheShared() {
    return this.getStringAttribute('template_cache_shared');
  }
  public set templateCacheShared(value: string) {
    this._templateCacheShared = value;
  }
  public resetTemplateCacheShared() {
    this._templateCacheShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateCacheSharedInput() {
    return this._templateCacheShared;
  }

  // template_client_ssh - computed: false, optional: true, required: false
  private _templateClientSsh?: string; 
  public get templateClientSsh() {
    return this.getStringAttribute('template_client_ssh');
  }
  public set templateClientSsh(value: string) {
    this._templateClientSsh = value;
  }
  public resetTemplateClientSsh() {
    this._templateClientSsh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateClientSshInput() {
    return this._templateClientSsh;
  }

  // template_client_ssl - computed: false, optional: true, required: false
  private _templateClientSsl?: string; 
  public get templateClientSsl() {
    return this.getStringAttribute('template_client_ssl');
  }
  public set templateClientSsl(value: string) {
    this._templateClientSsl = value;
  }
  public resetTemplateClientSsl() {
    this._templateClientSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateClientSslInput() {
    return this._templateClientSsl;
  }

  // template_client_ssl_shared - computed: false, optional: true, required: false
  private _templateClientSslShared?: string; 
  public get templateClientSslShared() {
    return this.getStringAttribute('template_client_ssl_shared');
  }
  public set templateClientSslShared(value: string) {
    this._templateClientSslShared = value;
  }
  public resetTemplateClientSslShared() {
    this._templateClientSslShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateClientSslSharedInput() {
    return this._templateClientSslShared;
  }

  // template_connection_reuse - computed: false, optional: true, required: false
  private _templateConnectionReuse?: string; 
  public get templateConnectionReuse() {
    return this.getStringAttribute('template_connection_reuse');
  }
  public set templateConnectionReuse(value: string) {
    this._templateConnectionReuse = value;
  }
  public resetTemplateConnectionReuse() {
    this._templateConnectionReuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateConnectionReuseInput() {
    return this._templateConnectionReuse;
  }

  // template_connection_reuse_shared - computed: false, optional: true, required: false
  private _templateConnectionReuseShared?: string; 
  public get templateConnectionReuseShared() {
    return this.getStringAttribute('template_connection_reuse_shared');
  }
  public set templateConnectionReuseShared(value: string) {
    this._templateConnectionReuseShared = value;
  }
  public resetTemplateConnectionReuseShared() {
    this._templateConnectionReuseShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateConnectionReuseSharedInput() {
    return this._templateConnectionReuseShared;
  }

  // template_dblb - computed: false, optional: true, required: false
  private _templateDblb?: string; 
  public get templateDblb() {
    return this.getStringAttribute('template_dblb');
  }
  public set templateDblb(value: string) {
    this._templateDblb = value;
  }
  public resetTemplateDblb() {
    this._templateDblb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDblbInput() {
    return this._templateDblb;
  }

  // template_dblb_shared - computed: false, optional: true, required: false
  private _templateDblbShared?: string; 
  public get templateDblbShared() {
    return this.getStringAttribute('template_dblb_shared');
  }
  public set templateDblbShared(value: string) {
    this._templateDblbShared = value;
  }
  public resetTemplateDblbShared() {
    this._templateDblbShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDblbSharedInput() {
    return this._templateDblbShared;
  }

  // template_diameter - computed: false, optional: true, required: false
  private _templateDiameter?: string; 
  public get templateDiameter() {
    return this.getStringAttribute('template_diameter');
  }
  public set templateDiameter(value: string) {
    this._templateDiameter = value;
  }
  public resetTemplateDiameter() {
    this._templateDiameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDiameterInput() {
    return this._templateDiameter;
  }

  // template_diameter_shared - computed: false, optional: true, required: false
  private _templateDiameterShared?: string; 
  public get templateDiameterShared() {
    return this.getStringAttribute('template_diameter_shared');
  }
  public set templateDiameterShared(value: string) {
    this._templateDiameterShared = value;
  }
  public resetTemplateDiameterShared() {
    this._templateDiameterShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDiameterSharedInput() {
    return this._templateDiameterShared;
  }

  // template_dns - computed: false, optional: true, required: false
  private _templateDns?: string; 
  public get templateDns() {
    return this.getStringAttribute('template_dns');
  }
  public set templateDns(value: string) {
    this._templateDns = value;
  }
  public resetTemplateDns() {
    this._templateDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDnsInput() {
    return this._templateDns;
  }

  // template_dns_shared - computed: false, optional: true, required: false
  private _templateDnsShared?: string; 
  public get templateDnsShared() {
    return this.getStringAttribute('template_dns_shared');
  }
  public set templateDnsShared(value: string) {
    this._templateDnsShared = value;
  }
  public resetTemplateDnsShared() {
    this._templateDnsShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDnsSharedInput() {
    return this._templateDnsShared;
  }

  // template_doh - computed: false, optional: true, required: false
  private _templateDoh?: string; 
  public get templateDoh() {
    return this.getStringAttribute('template_doh');
  }
  public set templateDoh(value: string) {
    this._templateDoh = value;
  }
  public resetTemplateDoh() {
    this._templateDoh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDohInput() {
    return this._templateDoh;
  }

  // template_doh_shared - computed: false, optional: true, required: false
  private _templateDohShared?: string; 
  public get templateDohShared() {
    return this.getStringAttribute('template_doh_shared');
  }
  public set templateDohShared(value: string) {
    this._templateDohShared = value;
  }
  public resetTemplateDohShared() {
    this._templateDohShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDohSharedInput() {
    return this._templateDohShared;
  }

  // template_dynamic_service - computed: false, optional: true, required: false
  private _templateDynamicService?: string; 
  public get templateDynamicService() {
    return this.getStringAttribute('template_dynamic_service');
  }
  public set templateDynamicService(value: string) {
    this._templateDynamicService = value;
  }
  public resetTemplateDynamicService() {
    this._templateDynamicService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDynamicServiceInput() {
    return this._templateDynamicService;
  }

  // template_dynamic_service_shared - computed: false, optional: true, required: false
  private _templateDynamicServiceShared?: string; 
  public get templateDynamicServiceShared() {
    return this.getStringAttribute('template_dynamic_service_shared');
  }
  public set templateDynamicServiceShared(value: string) {
    this._templateDynamicServiceShared = value;
  }
  public resetTemplateDynamicServiceShared() {
    this._templateDynamicServiceShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDynamicServiceSharedInput() {
    return this._templateDynamicServiceShared;
  }

  // template_external_service - computed: false, optional: true, required: false
  private _templateExternalService?: string; 
  public get templateExternalService() {
    return this.getStringAttribute('template_external_service');
  }
  public set templateExternalService(value: string) {
    this._templateExternalService = value;
  }
  public resetTemplateExternalService() {
    this._templateExternalService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateExternalServiceInput() {
    return this._templateExternalService;
  }

  // template_external_service_shared - computed: false, optional: true, required: false
  private _templateExternalServiceShared?: string; 
  public get templateExternalServiceShared() {
    return this.getStringAttribute('template_external_service_shared');
  }
  public set templateExternalServiceShared(value: string) {
    this._templateExternalServiceShared = value;
  }
  public resetTemplateExternalServiceShared() {
    this._templateExternalServiceShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateExternalServiceSharedInput() {
    return this._templateExternalServiceShared;
  }

  // template_fix - computed: false, optional: true, required: false
  private _templateFix?: string; 
  public get templateFix() {
    return this.getStringAttribute('template_fix');
  }
  public set templateFix(value: string) {
    this._templateFix = value;
  }
  public resetTemplateFix() {
    this._templateFix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateFixInput() {
    return this._templateFix;
  }

  // template_fix_shared - computed: false, optional: true, required: false
  private _templateFixShared?: string; 
  public get templateFixShared() {
    return this.getStringAttribute('template_fix_shared');
  }
  public set templateFixShared(value: string) {
    this._templateFixShared = value;
  }
  public resetTemplateFixShared() {
    this._templateFixShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateFixSharedInput() {
    return this._templateFixShared;
  }

  // template_ftp - computed: false, optional: true, required: false
  private _templateFtp?: string; 
  public get templateFtp() {
    return this.getStringAttribute('template_ftp');
  }
  public set templateFtp(value: string) {
    this._templateFtp = value;
  }
  public resetTemplateFtp() {
    this._templateFtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateFtpInput() {
    return this._templateFtp;
  }

  // template_http - computed: false, optional: true, required: false
  private _templateHttp?: string; 
  public get templateHttp() {
    return this.getStringAttribute('template_http');
  }
  public set templateHttp(value: string) {
    this._templateHttp = value;
  }
  public resetTemplateHttp() {
    this._templateHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateHttpInput() {
    return this._templateHttp;
  }

  // template_http_policy - computed: false, optional: true, required: false
  private _templateHttpPolicy?: string; 
  public get templateHttpPolicy() {
    return this.getStringAttribute('template_http_policy');
  }
  public set templateHttpPolicy(value: string) {
    this._templateHttpPolicy = value;
  }
  public resetTemplateHttpPolicy() {
    this._templateHttpPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateHttpPolicyInput() {
    return this._templateHttpPolicy;
  }

  // template_http_policy_shared - computed: false, optional: true, required: false
  private _templateHttpPolicyShared?: string; 
  public get templateHttpPolicyShared() {
    return this.getStringAttribute('template_http_policy_shared');
  }
  public set templateHttpPolicyShared(value: string) {
    this._templateHttpPolicyShared = value;
  }
  public resetTemplateHttpPolicyShared() {
    this._templateHttpPolicyShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateHttpPolicySharedInput() {
    return this._templateHttpPolicyShared;
  }

  // template_http_shared - computed: false, optional: true, required: false
  private _templateHttpShared?: string; 
  public get templateHttpShared() {
    return this.getStringAttribute('template_http_shared');
  }
  public set templateHttpShared(value: string) {
    this._templateHttpShared = value;
  }
  public resetTemplateHttpShared() {
    this._templateHttpShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateHttpSharedInput() {
    return this._templateHttpShared;
  }

  // template_imap_pop3 - computed: false, optional: true, required: false
  private _templateImapPop3?: string; 
  public get templateImapPop3() {
    return this.getStringAttribute('template_imap_pop3');
  }
  public set templateImapPop3(value: string) {
    this._templateImapPop3 = value;
  }
  public resetTemplateImapPop3() {
    this._templateImapPop3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateImapPop3Input() {
    return this._templateImapPop3;
  }

  // template_imap_pop3_shared - computed: false, optional: true, required: false
  private _templateImapPop3Shared?: string; 
  public get templateImapPop3Shared() {
    return this.getStringAttribute('template_imap_pop3_shared');
  }
  public set templateImapPop3Shared(value: string) {
    this._templateImapPop3Shared = value;
  }
  public resetTemplateImapPop3Shared() {
    this._templateImapPop3Shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateImapPop3SharedInput() {
    return this._templateImapPop3Shared;
  }

  // template_mqtt - computed: false, optional: true, required: false
  private _templateMqtt?: string; 
  public get templateMqtt() {
    return this.getStringAttribute('template_mqtt');
  }
  public set templateMqtt(value: string) {
    this._templateMqtt = value;
  }
  public resetTemplateMqtt() {
    this._templateMqtt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateMqttInput() {
    return this._templateMqtt;
  }

  // template_persist_cookie - computed: false, optional: true, required: false
  private _templatePersistCookie?: string; 
  public get templatePersistCookie() {
    return this.getStringAttribute('template_persist_cookie');
  }
  public set templatePersistCookie(value: string) {
    this._templatePersistCookie = value;
  }
  public resetTemplatePersistCookie() {
    this._templatePersistCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatePersistCookieInput() {
    return this._templatePersistCookie;
  }

  // template_persist_cookie_shared - computed: false, optional: true, required: false
  private _templatePersistCookieShared?: string; 
  public get templatePersistCookieShared() {
    return this.getStringAttribute('template_persist_cookie_shared');
  }
  public set templatePersistCookieShared(value: string) {
    this._templatePersistCookieShared = value;
  }
  public resetTemplatePersistCookieShared() {
    this._templatePersistCookieShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatePersistCookieSharedInput() {
    return this._templatePersistCookieShared;
  }

  // template_persist_destination_ip - computed: false, optional: true, required: false
  private _templatePersistDestinationIp?: string; 
  public get templatePersistDestinationIp() {
    return this.getStringAttribute('template_persist_destination_ip');
  }
  public set templatePersistDestinationIp(value: string) {
    this._templatePersistDestinationIp = value;
  }
  public resetTemplatePersistDestinationIp() {
    this._templatePersistDestinationIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatePersistDestinationIpInput() {
    return this._templatePersistDestinationIp;
  }

  // template_persist_destination_ip_shared - computed: false, optional: true, required: false
  private _templatePersistDestinationIpShared?: string; 
  public get templatePersistDestinationIpShared() {
    return this.getStringAttribute('template_persist_destination_ip_shared');
  }
  public set templatePersistDestinationIpShared(value: string) {
    this._templatePersistDestinationIpShared = value;
  }
  public resetTemplatePersistDestinationIpShared() {
    this._templatePersistDestinationIpShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatePersistDestinationIpSharedInput() {
    return this._templatePersistDestinationIpShared;
  }

  // template_persist_source_ip - computed: false, optional: true, required: false
  private _templatePersistSourceIp?: string; 
  public get templatePersistSourceIp() {
    return this.getStringAttribute('template_persist_source_ip');
  }
  public set templatePersistSourceIp(value: string) {
    this._templatePersistSourceIp = value;
  }
  public resetTemplatePersistSourceIp() {
    this._templatePersistSourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatePersistSourceIpInput() {
    return this._templatePersistSourceIp;
  }

  // template_persist_source_ip_shared - computed: false, optional: true, required: false
  private _templatePersistSourceIpShared?: string; 
  public get templatePersistSourceIpShared() {
    return this.getStringAttribute('template_persist_source_ip_shared');
  }
  public set templatePersistSourceIpShared(value: string) {
    this._templatePersistSourceIpShared = value;
  }
  public resetTemplatePersistSourceIpShared() {
    this._templatePersistSourceIpShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatePersistSourceIpSharedInput() {
    return this._templatePersistSourceIpShared;
  }

  // template_persist_ssl_sid - computed: false, optional: true, required: false
  private _templatePersistSslSid?: string; 
  public get templatePersistSslSid() {
    return this.getStringAttribute('template_persist_ssl_sid');
  }
  public set templatePersistSslSid(value: string) {
    this._templatePersistSslSid = value;
  }
  public resetTemplatePersistSslSid() {
    this._templatePersistSslSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatePersistSslSidInput() {
    return this._templatePersistSslSid;
  }

  // template_persist_ssl_sid_shared - computed: false, optional: true, required: false
  private _templatePersistSslSidShared?: string; 
  public get templatePersistSslSidShared() {
    return this.getStringAttribute('template_persist_ssl_sid_shared');
  }
  public set templatePersistSslSidShared(value: string) {
    this._templatePersistSslSidShared = value;
  }
  public resetTemplatePersistSslSidShared() {
    this._templatePersistSslSidShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatePersistSslSidSharedInput() {
    return this._templatePersistSslSidShared;
  }

  // template_policy - computed: false, optional: true, required: false
  private _templatePolicy?: string; 
  public get templatePolicy() {
    return this.getStringAttribute('template_policy');
  }
  public set templatePolicy(value: string) {
    this._templatePolicy = value;
  }
  public resetTemplatePolicy() {
    this._templatePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatePolicyInput() {
    return this._templatePolicy;
  }

  // template_policy_shared - computed: false, optional: true, required: false
  private _templatePolicyShared?: string; 
  public get templatePolicyShared() {
    return this.getStringAttribute('template_policy_shared');
  }
  public set templatePolicyShared(value: string) {
    this._templatePolicyShared = value;
  }
  public resetTemplatePolicyShared() {
    this._templatePolicyShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatePolicySharedInput() {
    return this._templatePolicyShared;
  }

  // template_quic - computed: false, optional: true, required: false
  private _templateQuic?: string; 
  public get templateQuic() {
    return this.getStringAttribute('template_quic');
  }
  public set templateQuic(value: string) {
    this._templateQuic = value;
  }
  public resetTemplateQuic() {
    this._templateQuic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateQuicInput() {
    return this._templateQuic;
  }

  // template_quic_client - computed: false, optional: true, required: false
  private _templateQuicClient?: string; 
  public get templateQuicClient() {
    return this.getStringAttribute('template_quic_client');
  }
  public set templateQuicClient(value: string) {
    this._templateQuicClient = value;
  }
  public resetTemplateQuicClient() {
    this._templateQuicClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateQuicClientInput() {
    return this._templateQuicClient;
  }

  // template_quic_server - computed: false, optional: true, required: false
  private _templateQuicServer?: string; 
  public get templateQuicServer() {
    return this.getStringAttribute('template_quic_server');
  }
  public set templateQuicServer(value: string) {
    this._templateQuicServer = value;
  }
  public resetTemplateQuicServer() {
    this._templateQuicServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateQuicServerInput() {
    return this._templateQuicServer;
  }

  // template_quic_shared - computed: false, optional: true, required: false
  private _templateQuicShared?: string; 
  public get templateQuicShared() {
    return this.getStringAttribute('template_quic_shared');
  }
  public set templateQuicShared(value: string) {
    this._templateQuicShared = value;
  }
  public resetTemplateQuicShared() {
    this._templateQuicShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateQuicSharedInput() {
    return this._templateQuicShared;
  }

  // template_ram_cache - computed: false, optional: true, required: false
  private _templateRamCache?: string; 
  public get templateRamCache() {
    return this.getStringAttribute('template_ram_cache');
  }
  public set templateRamCache(value: string) {
    this._templateRamCache = value;
  }
  public resetTemplateRamCache() {
    this._templateRamCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateRamCacheInput() {
    return this._templateRamCache;
  }

  // template_reqmod_icap - computed: false, optional: true, required: false
  private _templateReqmodIcap?: string; 
  public get templateReqmodIcap() {
    return this.getStringAttribute('template_reqmod_icap');
  }
  public set templateReqmodIcap(value: string) {
    this._templateReqmodIcap = value;
  }
  public resetTemplateReqmodIcap() {
    this._templateReqmodIcap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateReqmodIcapInput() {
    return this._templateReqmodIcap;
  }

  // template_respmod_icap - computed: false, optional: true, required: false
  private _templateRespmodIcap?: string; 
  public get templateRespmodIcap() {
    return this.getStringAttribute('template_respmod_icap');
  }
  public set templateRespmodIcap(value: string) {
    this._templateRespmodIcap = value;
  }
  public resetTemplateRespmodIcap() {
    this._templateRespmodIcap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateRespmodIcapInput() {
    return this._templateRespmodIcap;
  }

  // template_scaleout - computed: false, optional: true, required: false
  private _templateScaleout?: string; 
  public get templateScaleout() {
    return this.getStringAttribute('template_scaleout');
  }
  public set templateScaleout(value: string) {
    this._templateScaleout = value;
  }
  public resetTemplateScaleout() {
    this._templateScaleout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateScaleoutInput() {
    return this._templateScaleout;
  }

  // template_server_ssh - computed: false, optional: true, required: false
  private _templateServerSsh?: string; 
  public get templateServerSsh() {
    return this.getStringAttribute('template_server_ssh');
  }
  public set templateServerSsh(value: string) {
    this._templateServerSsh = value;
  }
  public resetTemplateServerSsh() {
    this._templateServerSsh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateServerSshInput() {
    return this._templateServerSsh;
  }

  // template_server_ssl - computed: false, optional: true, required: false
  private _templateServerSsl?: string; 
  public get templateServerSsl() {
    return this.getStringAttribute('template_server_ssl');
  }
  public set templateServerSsl(value: string) {
    this._templateServerSsl = value;
  }
  public resetTemplateServerSsl() {
    this._templateServerSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateServerSslInput() {
    return this._templateServerSsl;
  }

  // template_server_ssl_shared - computed: false, optional: true, required: false
  private _templateServerSslShared?: string; 
  public get templateServerSslShared() {
    return this.getStringAttribute('template_server_ssl_shared');
  }
  public set templateServerSslShared(value: string) {
    this._templateServerSslShared = value;
  }
  public resetTemplateServerSslShared() {
    this._templateServerSslShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateServerSslSharedInput() {
    return this._templateServerSslShared;
  }

  // template_sip - computed: false, optional: true, required: false
  private _templateSip?: string; 
  public get templateSip() {
    return this.getStringAttribute('template_sip');
  }
  public set templateSip(value: string) {
    this._templateSip = value;
  }
  public resetTemplateSip() {
    this._templateSip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateSipInput() {
    return this._templateSip;
  }

  // template_sip_shared - computed: false, optional: true, required: false
  private _templateSipShared?: string; 
  public get templateSipShared() {
    return this.getStringAttribute('template_sip_shared');
  }
  public set templateSipShared(value: string) {
    this._templateSipShared = value;
  }
  public resetTemplateSipShared() {
    this._templateSipShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateSipSharedInput() {
    return this._templateSipShared;
  }

  // template_smpp - computed: false, optional: true, required: false
  private _templateSmpp?: string; 
  public get templateSmpp() {
    return this.getStringAttribute('template_smpp');
  }
  public set templateSmpp(value: string) {
    this._templateSmpp = value;
  }
  public resetTemplateSmpp() {
    this._templateSmpp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateSmppInput() {
    return this._templateSmpp;
  }

  // template_smpp_shared - computed: false, optional: true, required: false
  private _templateSmppShared?: string; 
  public get templateSmppShared() {
    return this.getStringAttribute('template_smpp_shared');
  }
  public set templateSmppShared(value: string) {
    this._templateSmppShared = value;
  }
  public resetTemplateSmppShared() {
    this._templateSmppShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateSmppSharedInput() {
    return this._templateSmppShared;
  }

  // template_smtp - computed: false, optional: true, required: false
  private _templateSmtp?: string; 
  public get templateSmtp() {
    return this.getStringAttribute('template_smtp');
  }
  public set templateSmtp(value: string) {
    this._templateSmtp = value;
  }
  public resetTemplateSmtp() {
    this._templateSmtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateSmtpInput() {
    return this._templateSmtp;
  }

  // template_smtp_shared - computed: false, optional: true, required: false
  private _templateSmtpShared?: string; 
  public get templateSmtpShared() {
    return this.getStringAttribute('template_smtp_shared');
  }
  public set templateSmtpShared(value: string) {
    this._templateSmtpShared = value;
  }
  public resetTemplateSmtpShared() {
    this._templateSmtpShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateSmtpSharedInput() {
    return this._templateSmtpShared;
  }

  // template_ssli - computed: false, optional: true, required: false
  private _templateSsli?: string; 
  public get templateSsli() {
    return this.getStringAttribute('template_ssli');
  }
  public set templateSsli(value: string) {
    this._templateSsli = value;
  }
  public resetTemplateSsli() {
    this._templateSsli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateSsliInput() {
    return this._templateSsli;
  }

  // template_tcp - computed: false, optional: true, required: false
  private _templateTcp?: string; 
  public get templateTcp() {
    return this.getStringAttribute('template_tcp');
  }
  public set templateTcp(value: string) {
    this._templateTcp = value;
  }
  public resetTemplateTcp() {
    this._templateTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateTcpInput() {
    return this._templateTcp;
  }

  // template_tcp_proxy - computed: false, optional: true, required: false
  private _templateTcpProxy?: string; 
  public get templateTcpProxy() {
    return this.getStringAttribute('template_tcp_proxy');
  }
  public set templateTcpProxy(value: string) {
    this._templateTcpProxy = value;
  }
  public resetTemplateTcpProxy() {
    this._templateTcpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateTcpProxyInput() {
    return this._templateTcpProxy;
  }

  // template_tcp_proxy_client - computed: false, optional: true, required: false
  private _templateTcpProxyClient?: string; 
  public get templateTcpProxyClient() {
    return this.getStringAttribute('template_tcp_proxy_client');
  }
  public set templateTcpProxyClient(value: string) {
    this._templateTcpProxyClient = value;
  }
  public resetTemplateTcpProxyClient() {
    this._templateTcpProxyClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateTcpProxyClientInput() {
    return this._templateTcpProxyClient;
  }

  // template_tcp_proxy_server - computed: false, optional: true, required: false
  private _templateTcpProxyServer?: string; 
  public get templateTcpProxyServer() {
    return this.getStringAttribute('template_tcp_proxy_server');
  }
  public set templateTcpProxyServer(value: string) {
    this._templateTcpProxyServer = value;
  }
  public resetTemplateTcpProxyServer() {
    this._templateTcpProxyServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateTcpProxyServerInput() {
    return this._templateTcpProxyServer;
  }

  // template_tcp_proxy_shared - computed: false, optional: true, required: false
  private _templateTcpProxyShared?: string; 
  public get templateTcpProxyShared() {
    return this.getStringAttribute('template_tcp_proxy_shared');
  }
  public set templateTcpProxyShared(value: string) {
    this._templateTcpProxyShared = value;
  }
  public resetTemplateTcpProxyShared() {
    this._templateTcpProxyShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateTcpProxySharedInput() {
    return this._templateTcpProxyShared;
  }

  // template_tcp_shared - computed: false, optional: true, required: false
  private _templateTcpShared?: string; 
  public get templateTcpShared() {
    return this.getStringAttribute('template_tcp_shared');
  }
  public set templateTcpShared(value: string) {
    this._templateTcpShared = value;
  }
  public resetTemplateTcpShared() {
    this._templateTcpShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateTcpSharedInput() {
    return this._templateTcpShared;
  }

  // template_udp - computed: false, optional: true, required: false
  private _templateUdp?: string; 
  public get templateUdp() {
    return this.getStringAttribute('template_udp');
  }
  public set templateUdp(value: string) {
    this._templateUdp = value;
  }
  public resetTemplateUdp() {
    this._templateUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateUdpInput() {
    return this._templateUdp;
  }

  // template_udp_shared - computed: false, optional: true, required: false
  private _templateUdpShared?: string; 
  public get templateUdpShared() {
    return this.getStringAttribute('template_udp_shared');
  }
  public set templateUdpShared(value: string) {
    this._templateUdpShared = value;
  }
  public resetTemplateUdpShared() {
    this._templateUdpShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateUdpSharedInput() {
    return this._templateUdpShared;
  }

  // template_virtual_port - computed: false, optional: true, required: false
  private _templateVirtualPort?: string; 
  public get templateVirtualPort() {
    return this.getStringAttribute('template_virtual_port');
  }
  public set templateVirtualPort(value: string) {
    this._templateVirtualPort = value;
  }
  public resetTemplateVirtualPort() {
    this._templateVirtualPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateVirtualPortInput() {
    return this._templateVirtualPort;
  }

  // template_virtual_port_shared - computed: false, optional: true, required: false
  private _templateVirtualPortShared?: string; 
  public get templateVirtualPortShared() {
    return this.getStringAttribute('template_virtual_port_shared');
  }
  public set templateVirtualPortShared(value: string) {
    this._templateVirtualPortShared = value;
  }
  public resetTemplateVirtualPortShared() {
    this._templateVirtualPortShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateVirtualPortSharedInput() {
    return this._templateVirtualPortShared;
  }

  // trunk_fwd - computed: false, optional: true, required: false
  private _trunkFwd?: number; 
  public get trunkFwd() {
    return this.getNumberAttribute('trunk_fwd');
  }
  public set trunkFwd(value: number) {
    this._trunkFwd = value;
  }
  public resetTrunkFwd() {
    this._trunkFwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkFwdInput() {
    return this._trunkFwd;
  }

  // trunk_rev - computed: false, optional: true, required: false
  private _trunkRev?: number; 
  public get trunkRev() {
    return this.getNumberAttribute('trunk_rev');
  }
  public set trunkRev(value: number) {
    this._trunkRev = value;
  }
  public resetTrunkRev() {
    this._trunkRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkRevInput() {
    return this._trunkRev;
  }

  // use_alternate_port - computed: false, optional: true, required: false
  private _useAlternatePort?: number; 
  public get useAlternatePort() {
    return this.getNumberAttribute('use_alternate_port');
  }
  public set useAlternatePort(value: number) {
    this._useAlternatePort = value;
  }
  public resetUseAlternatePort() {
    this._useAlternatePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAlternatePortInput() {
    return this._useAlternatePort;
  }

  // use_cgnv6 - computed: false, optional: true, required: false
  private _useCgnv6?: number; 
  public get useCgnv6() {
    return this.getNumberAttribute('use_cgnv6');
  }
  public set useCgnv6(value: number) {
    this._useCgnv6 = value;
  }
  public resetUseCgnv6() {
    this._useCgnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCgnv6Input() {
    return this._useCgnv6;
  }

  // use_default_if_no_server - computed: false, optional: true, required: false
  private _useDefaultIfNoServer?: number; 
  public get useDefaultIfNoServer() {
    return this.getNumberAttribute('use_default_if_no_server');
  }
  public set useDefaultIfNoServer(value: number) {
    this._useDefaultIfNoServer = value;
  }
  public resetUseDefaultIfNoServer() {
    this._useDefaultIfNoServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultIfNoServerInput() {
    return this._useDefaultIfNoServer;
  }

  // use_rcv_hop_for_resp - computed: false, optional: true, required: false
  private _useRcvHopForResp?: number; 
  public get useRcvHopForResp() {
    return this.getNumberAttribute('use_rcv_hop_for_resp');
  }
  public set useRcvHopForResp(value: number) {
    this._useRcvHopForResp = value;
  }
  public resetUseRcvHopForResp() {
    this._useRcvHopForResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRcvHopForRespInput() {
    return this._useRcvHopForResp;
  }

  // use_rcv_hop_group - computed: false, optional: true, required: false
  private _useRcvHopGroup?: number; 
  public get useRcvHopGroup() {
    return this.getNumberAttribute('use_rcv_hop_group');
  }
  public set useRcvHopGroup(value: number) {
    this._useRcvHopGroup = value;
  }
  public resetUseRcvHopGroup() {
    this._useRcvHopGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRcvHopGroupInput() {
    return this._useRcvHopGroup;
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

  // view - computed: false, optional: true, required: false
  private _view?: number; 
  public get view() {
    return this.getNumberAttribute('view');
  }
  public set view(value: number) {
    this._view = value;
  }
  public resetView() {
    this._view = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view;
  }

  // when_down - computed: false, optional: true, required: false
  private _whenDown?: number; 
  public get whenDown() {
    return this.getNumberAttribute('when_down');
  }
  public set whenDown(value: number) {
    this._whenDown = value;
  }
  public resetWhenDown() {
    this._whenDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenDownInput() {
    return this._whenDown;
  }

  // when_down_protocol2 - computed: false, optional: true, required: false
  private _whenDownProtocol2?: number; 
  public get whenDownProtocol2() {
    return this.getNumberAttribute('when_down_protocol2');
  }
  public set whenDownProtocol2(value: number) {
    this._whenDownProtocol2 = value;
  }
  public resetWhenDownProtocol2() {
    this._whenDownProtocol2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenDownProtocol2Input() {
    return this._whenDownProtocol2;
  }

  // acl_list - computed: false, optional: true, required: false
  private _aclList = new SlbVirtualServerPortAclListStructList(this, "acl_list", false);
  public get aclList() {
    return this._aclList;
  }
  public putAclList(value: SlbVirtualServerPortAclListStruct[] | cdktf.IResolvable) {
    this._aclList.internalValue = value;
  }
  public resetAclList() {
    this._aclList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclListInput() {
    return this._aclList.internalValue;
  }

  // aflex_scripts - computed: false, optional: true, required: false
  private _aflexScripts = new SlbVirtualServerPortAflexScriptsList(this, "aflex_scripts", false);
  public get aflexScripts() {
    return this._aflexScripts;
  }
  public putAflexScripts(value: SlbVirtualServerPortAflexScripts[] | cdktf.IResolvable) {
    this._aflexScripts.internalValue = value;
  }
  public resetAflexScripts() {
    this._aflexScripts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexScriptsInput() {
    return this._aflexScripts.internalValue;
  }

  // auth_cfg - computed: false, optional: true, required: false
  private _authCfg = new SlbVirtualServerPortAuthCfgOutputReference(this, "auth_cfg");
  public get authCfg() {
    return this._authCfg;
  }
  public putAuthCfg(value: SlbVirtualServerPortAuthCfg) {
    this._authCfg.internalValue = value;
  }
  public resetAuthCfg() {
    this._authCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCfgInput() {
    return this._authCfg.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SlbVirtualServerPortSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbVirtualServerPortSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      aflex_table_entry_syn_disable: cdktf.numberToTerraform(this._aflexTableEntrySynDisable),
      aflex_table_entry_syn_enable: cdktf.numberToTerraform(this._aflexTableEntrySynEnable),
      alt_protocol1: cdktf.stringToTerraform(this._altProtocol1),
      alt_protocol2: cdktf.stringToTerraform(this._altProtocol2),
      alternate_port: cdktf.numberToTerraform(this._alternatePort),
      alternate_port_number: cdktf.numberToTerraform(this._alternatePortNumber),
      attack_detection: cdktf.numberToTerraform(this._attackDetection),
      auto: cdktf.numberToTerraform(this._auto),
      clientip_sticky_nat: cdktf.numberToTerraform(this._clientipStickyNat),
      conn_limit: cdktf.numberToTerraform(this._connLimit),
      cpu_compute: cdktf.numberToTerraform(this._cpuCompute),
      def_selection_if_pref_failed: cdktf.stringToTerraform(this._defSelectionIfPrefFailed),
      enable_playerid_check: cdktf.numberToTerraform(this._enablePlayeridCheck),
      enable_scaleout: cdktf.numberToTerraform(this._enableScaleout),
      eth_fwd: cdktf.numberToTerraform(this._ethFwd),
      eth_rev: cdktf.numberToTerraform(this._ethRev),
      expand: cdktf.numberToTerraform(this._expand),
      extended_stats: cdktf.numberToTerraform(this._extendedStats),
      fast_path: cdktf.stringToTerraform(this._fastPath),
      force_routing_mode: cdktf.numberToTerraform(this._forceRoutingMode),
      gslb_enable: cdktf.numberToTerraform(this._gslbEnable),
      gtp_session_lb: cdktf.numberToTerraform(this._gtpSessionLb),
      ha_conn_mirror: cdktf.numberToTerraform(this._haConnMirror),
      id: cdktf.stringToTerraform(this._id),
      ignore_global: cdktf.numberToTerraform(this._ignoreGlobal),
      ip_map_list: cdktf.stringToTerraform(this._ipMapList),
      ip_only_lb: cdktf.numberToTerraform(this._ipOnlyLb),
      ip_smart_rr: cdktf.numberToTerraform(this._ipSmartRr),
      ipinip: cdktf.numberToTerraform(this._ipinip),
      l7_hardware_assist: cdktf.numberToTerraform(this._l7HardwareAssist),
      l7_service_chain: cdktf.numberToTerraform(this._l7ServiceChain),
      memory_compute: cdktf.numberToTerraform(this._memoryCompute),
      message_switching: cdktf.numberToTerraform(this._messageSwitching),
      name: cdktf.stringToTerraform(this._name),
      ng_waf: cdktf.numberToTerraform(this._ngWaf),
      no_auto_up_on_aflex: cdktf.numberToTerraform(this._noAutoUpOnAflex),
      no_dest_nat: cdktf.numberToTerraform(this._noDestNat),
      no_logging: cdktf.numberToTerraform(this._noLogging),
      on_syn: cdktf.numberToTerraform(this._onSyn),
      one_server_conn: cdktf.numberToTerraform(this._oneServerConn),
      optimization_level: cdktf.stringToTerraform(this._optimizationLevel),
      p_template_sip_shared: cdktf.numberToTerraform(this._pTemplateSipShared),
      packet_capture_template: cdktf.stringToTerraform(this._packetCaptureTemplate),
      persist_type: cdktf.stringToTerraform(this._persistType),
      pool: cdktf.stringToTerraform(this._pool),
      pool_shared: cdktf.stringToTerraform(this._poolShared),
      port_number: cdktf.numberToTerraform(this._portNumber),
      port_translation: cdktf.numberToTerraform(this._portTranslation),
      precedence: cdktf.numberToTerraform(this._precedence),
      protocol: cdktf.stringToTerraform(this._protocol),
      proxy_layer: cdktf.stringToTerraform(this._proxyLayer),
      range: cdktf.numberToTerraform(this._range),
      rate: cdktf.numberToTerraform(this._rate),
      redirect_to_https: cdktf.numberToTerraform(this._redirectToHttps),
      reply_acme_challenge: cdktf.numberToTerraform(this._replyAcmeChallenge),
      req_fail: cdktf.numberToTerraform(this._reqFail),
      reselection: cdktf.stringToTerraform(this._reselection),
      reset: cdktf.numberToTerraform(this._reset),
      reset_on_server_selection_fail: cdktf.numberToTerraform(this._resetOnServerSelectionFail),
      resolve_web_cat_list: cdktf.stringToTerraform(this._resolveWebCatList),
      rtp_sip_call_id_match: cdktf.numberToTerraform(this._rtpSipCallIdMatch),
      secs: cdktf.numberToTerraform(this._secs),
      serv_sel_fail: cdktf.numberToTerraform(this._servSelFail),
      server_group: cdktf.stringToTerraform(this._serverGroup),
      service_group: cdktf.stringToTerraform(this._serviceGroup),
      shared_partition_cache_template: cdktf.numberToTerraform(this._sharedPartitionCacheTemplate),
      shared_partition_client_ssl_template: cdktf.numberToTerraform(this._sharedPartitionClientSslTemplate),
      shared_partition_connection_reuse_template: cdktf.numberToTerraform(this._sharedPartitionConnectionReuseTemplate),
      shared_partition_dblb_template: cdktf.numberToTerraform(this._sharedPartitionDblbTemplate),
      shared_partition_diameter_template: cdktf.numberToTerraform(this._sharedPartitionDiameterTemplate),
      shared_partition_dns_template: cdktf.numberToTerraform(this._sharedPartitionDnsTemplate),
      shared_partition_doh_template: cdktf.numberToTerraform(this._sharedPartitionDohTemplate),
      shared_partition_dynamic_service_template: cdktf.numberToTerraform(this._sharedPartitionDynamicServiceTemplate),
      shared_partition_external_service_template: cdktf.numberToTerraform(this._sharedPartitionExternalServiceTemplate),
      shared_partition_fix_template: cdktf.numberToTerraform(this._sharedPartitionFixTemplate),
      shared_partition_http_policy_template: cdktf.numberToTerraform(this._sharedPartitionHttpPolicyTemplate),
      shared_partition_http_template: cdktf.numberToTerraform(this._sharedPartitionHttpTemplate),
      shared_partition_imap_pop3_template: cdktf.numberToTerraform(this._sharedPartitionImapPop3Template),
      shared_partition_persist_cookie_template: cdktf.numberToTerraform(this._sharedPartitionPersistCookieTemplate),
      shared_partition_persist_destination_ip_template: cdktf.numberToTerraform(this._sharedPartitionPersistDestinationIpTemplate),
      shared_partition_persist_source_ip_template: cdktf.numberToTerraform(this._sharedPartitionPersistSourceIpTemplate),
      shared_partition_persist_ssl_sid_template: cdktf.numberToTerraform(this._sharedPartitionPersistSslSidTemplate),
      shared_partition_policy_template: cdktf.numberToTerraform(this._sharedPartitionPolicyTemplate),
      shared_partition_pool: cdktf.numberToTerraform(this._sharedPartitionPool),
      shared_partition_quic_template: cdktf.numberToTerraform(this._sharedPartitionQuicTemplate),
      shared_partition_server_ssl_template: cdktf.numberToTerraform(this._sharedPartitionServerSslTemplate),
      shared_partition_smpp_template: cdktf.numberToTerraform(this._sharedPartitionSmppTemplate),
      shared_partition_smtp_template: cdktf.numberToTerraform(this._sharedPartitionSmtpTemplate),
      shared_partition_tcp: cdktf.numberToTerraform(this._sharedPartitionTcp),
      shared_partition_tcp_proxy_template: cdktf.numberToTerraform(this._sharedPartitionTcpProxyTemplate),
      shared_partition_udp: cdktf.numberToTerraform(this._sharedPartitionUdp),
      shared_partition_virtual_port_template: cdktf.numberToTerraform(this._sharedPartitionVirtualPortTemplate),
      showtech_print_extended_stats: cdktf.numberToTerraform(this._showtechPrintExtendedStats),
      skip_rev_hash: cdktf.numberToTerraform(this._skipRevHash),
      snat_on_vip: cdktf.numberToTerraform(this._snatOnVip),
      stats_data_action: cdktf.stringToTerraform(this._statsDataAction),
      substitute_source_mac: cdktf.numberToTerraform(this._substituteSourceMac),
      support_http2: cdktf.numberToTerraform(this._supportHttp2),
      syn_cookie: cdktf.numberToTerraform(this._synCookie),
      template_cache: cdktf.stringToTerraform(this._templateCache),
      template_cache_shared: cdktf.stringToTerraform(this._templateCacheShared),
      template_client_ssh: cdktf.stringToTerraform(this._templateClientSsh),
      template_client_ssl: cdktf.stringToTerraform(this._templateClientSsl),
      template_client_ssl_shared: cdktf.stringToTerraform(this._templateClientSslShared),
      template_connection_reuse: cdktf.stringToTerraform(this._templateConnectionReuse),
      template_connection_reuse_shared: cdktf.stringToTerraform(this._templateConnectionReuseShared),
      template_dblb: cdktf.stringToTerraform(this._templateDblb),
      template_dblb_shared: cdktf.stringToTerraform(this._templateDblbShared),
      template_diameter: cdktf.stringToTerraform(this._templateDiameter),
      template_diameter_shared: cdktf.stringToTerraform(this._templateDiameterShared),
      template_dns: cdktf.stringToTerraform(this._templateDns),
      template_dns_shared: cdktf.stringToTerraform(this._templateDnsShared),
      template_doh: cdktf.stringToTerraform(this._templateDoh),
      template_doh_shared: cdktf.stringToTerraform(this._templateDohShared),
      template_dynamic_service: cdktf.stringToTerraform(this._templateDynamicService),
      template_dynamic_service_shared: cdktf.stringToTerraform(this._templateDynamicServiceShared),
      template_external_service: cdktf.stringToTerraform(this._templateExternalService),
      template_external_service_shared: cdktf.stringToTerraform(this._templateExternalServiceShared),
      template_fix: cdktf.stringToTerraform(this._templateFix),
      template_fix_shared: cdktf.stringToTerraform(this._templateFixShared),
      template_ftp: cdktf.stringToTerraform(this._templateFtp),
      template_http: cdktf.stringToTerraform(this._templateHttp),
      template_http_policy: cdktf.stringToTerraform(this._templateHttpPolicy),
      template_http_policy_shared: cdktf.stringToTerraform(this._templateHttpPolicyShared),
      template_http_shared: cdktf.stringToTerraform(this._templateHttpShared),
      template_imap_pop3: cdktf.stringToTerraform(this._templateImapPop3),
      template_imap_pop3_shared: cdktf.stringToTerraform(this._templateImapPop3Shared),
      template_mqtt: cdktf.stringToTerraform(this._templateMqtt),
      template_persist_cookie: cdktf.stringToTerraform(this._templatePersistCookie),
      template_persist_cookie_shared: cdktf.stringToTerraform(this._templatePersistCookieShared),
      template_persist_destination_ip: cdktf.stringToTerraform(this._templatePersistDestinationIp),
      template_persist_destination_ip_shared: cdktf.stringToTerraform(this._templatePersistDestinationIpShared),
      template_persist_source_ip: cdktf.stringToTerraform(this._templatePersistSourceIp),
      template_persist_source_ip_shared: cdktf.stringToTerraform(this._templatePersistSourceIpShared),
      template_persist_ssl_sid: cdktf.stringToTerraform(this._templatePersistSslSid),
      template_persist_ssl_sid_shared: cdktf.stringToTerraform(this._templatePersistSslSidShared),
      template_policy: cdktf.stringToTerraform(this._templatePolicy),
      template_policy_shared: cdktf.stringToTerraform(this._templatePolicyShared),
      template_quic: cdktf.stringToTerraform(this._templateQuic),
      template_quic_client: cdktf.stringToTerraform(this._templateQuicClient),
      template_quic_server: cdktf.stringToTerraform(this._templateQuicServer),
      template_quic_shared: cdktf.stringToTerraform(this._templateQuicShared),
      template_ram_cache: cdktf.stringToTerraform(this._templateRamCache),
      template_reqmod_icap: cdktf.stringToTerraform(this._templateReqmodIcap),
      template_respmod_icap: cdktf.stringToTerraform(this._templateRespmodIcap),
      template_scaleout: cdktf.stringToTerraform(this._templateScaleout),
      template_server_ssh: cdktf.stringToTerraform(this._templateServerSsh),
      template_server_ssl: cdktf.stringToTerraform(this._templateServerSsl),
      template_server_ssl_shared: cdktf.stringToTerraform(this._templateServerSslShared),
      template_sip: cdktf.stringToTerraform(this._templateSip),
      template_sip_shared: cdktf.stringToTerraform(this._templateSipShared),
      template_smpp: cdktf.stringToTerraform(this._templateSmpp),
      template_smpp_shared: cdktf.stringToTerraform(this._templateSmppShared),
      template_smtp: cdktf.stringToTerraform(this._templateSmtp),
      template_smtp_shared: cdktf.stringToTerraform(this._templateSmtpShared),
      template_ssli: cdktf.stringToTerraform(this._templateSsli),
      template_tcp: cdktf.stringToTerraform(this._templateTcp),
      template_tcp_proxy: cdktf.stringToTerraform(this._templateTcpProxy),
      template_tcp_proxy_client: cdktf.stringToTerraform(this._templateTcpProxyClient),
      template_tcp_proxy_server: cdktf.stringToTerraform(this._templateTcpProxyServer),
      template_tcp_proxy_shared: cdktf.stringToTerraform(this._templateTcpProxyShared),
      template_tcp_shared: cdktf.stringToTerraform(this._templateTcpShared),
      template_udp: cdktf.stringToTerraform(this._templateUdp),
      template_udp_shared: cdktf.stringToTerraform(this._templateUdpShared),
      template_virtual_port: cdktf.stringToTerraform(this._templateVirtualPort),
      template_virtual_port_shared: cdktf.stringToTerraform(this._templateVirtualPortShared),
      trunk_fwd: cdktf.numberToTerraform(this._trunkFwd),
      trunk_rev: cdktf.numberToTerraform(this._trunkRev),
      use_alternate_port: cdktf.numberToTerraform(this._useAlternatePort),
      use_cgnv6: cdktf.numberToTerraform(this._useCgnv6),
      use_default_if_no_server: cdktf.numberToTerraform(this._useDefaultIfNoServer),
      use_rcv_hop_for_resp: cdktf.numberToTerraform(this._useRcvHopForResp),
      use_rcv_hop_group: cdktf.numberToTerraform(this._useRcvHopGroup),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      view: cdktf.numberToTerraform(this._view),
      when_down: cdktf.numberToTerraform(this._whenDown),
      when_down_protocol2: cdktf.numberToTerraform(this._whenDownProtocol2),
      acl_list: cdktf.listMapper(slbVirtualServerPortAclListStructToTerraform, true)(this._aclList.internalValue),
      aflex_scripts: cdktf.listMapper(slbVirtualServerPortAflexScriptsToTerraform, true)(this._aflexScripts.internalValue),
      auth_cfg: slbVirtualServerPortAuthCfgToTerraform(this._authCfg.internalValue),
      sampling_enable: cdktf.listMapper(slbVirtualServerPortSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aflex_table_entry_syn_disable: {
        value: cdktf.numberToHclTerraform(this._aflexTableEntrySynDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      aflex_table_entry_syn_enable: {
        value: cdktf.numberToHclTerraform(this._aflexTableEntrySynEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      alt_protocol1: {
        value: cdktf.stringToHclTerraform(this._altProtocol1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alt_protocol2: {
        value: cdktf.stringToHclTerraform(this._altProtocol2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alternate_port: {
        value: cdktf.numberToHclTerraform(this._alternatePort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      alternate_port_number: {
        value: cdktf.numberToHclTerraform(this._alternatePortNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      attack_detection: {
        value: cdktf.numberToHclTerraform(this._attackDetection),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto: {
        value: cdktf.numberToHclTerraform(this._auto),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      clientip_sticky_nat: {
        value: cdktf.numberToHclTerraform(this._clientipStickyNat),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_limit: {
        value: cdktf.numberToHclTerraform(this._connLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu_compute: {
        value: cdktf.numberToHclTerraform(this._cpuCompute),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      def_selection_if_pref_failed: {
        value: cdktf.stringToHclTerraform(this._defSelectionIfPrefFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_playerid_check: {
        value: cdktf.numberToHclTerraform(this._enablePlayeridCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_scaleout: {
        value: cdktf.numberToHclTerraform(this._enableScaleout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eth_fwd: {
        value: cdktf.numberToHclTerraform(this._ethFwd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eth_rev: {
        value: cdktf.numberToHclTerraform(this._ethRev),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      expand: {
        value: cdktf.numberToHclTerraform(this._expand),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      extended_stats: {
        value: cdktf.numberToHclTerraform(this._extendedStats),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fast_path: {
        value: cdktf.stringToHclTerraform(this._fastPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_routing_mode: {
        value: cdktf.numberToHclTerraform(this._forceRoutingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gslb_enable: {
        value: cdktf.numberToHclTerraform(this._gslbEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_session_lb: {
        value: cdktf.numberToHclTerraform(this._gtpSessionLb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ha_conn_mirror: {
        value: cdktf.numberToHclTerraform(this._haConnMirror),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_global: {
        value: cdktf.numberToHclTerraform(this._ignoreGlobal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_map_list: {
        value: cdktf.stringToHclTerraform(this._ipMapList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_only_lb: {
        value: cdktf.numberToHclTerraform(this._ipOnlyLb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_smart_rr: {
        value: cdktf.numberToHclTerraform(this._ipSmartRr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipinip: {
        value: cdktf.numberToHclTerraform(this._ipinip),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l7_hardware_assist: {
        value: cdktf.numberToHclTerraform(this._l7HardwareAssist),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l7_service_chain: {
        value: cdktf.numberToHclTerraform(this._l7ServiceChain),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory_compute: {
        value: cdktf.numberToHclTerraform(this._memoryCompute),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      message_switching: {
        value: cdktf.numberToHclTerraform(this._messageSwitching),
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
      ng_waf: {
        value: cdktf.numberToHclTerraform(this._ngWaf),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_auto_up_on_aflex: {
        value: cdktf.numberToHclTerraform(this._noAutoUpOnAflex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_dest_nat: {
        value: cdktf.numberToHclTerraform(this._noDestNat),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_logging: {
        value: cdktf.numberToHclTerraform(this._noLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      on_syn: {
        value: cdktf.numberToHclTerraform(this._onSyn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      one_server_conn: {
        value: cdktf.numberToHclTerraform(this._oneServerConn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      optimization_level: {
        value: cdktf.stringToHclTerraform(this._optimizationLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      p_template_sip_shared: {
        value: cdktf.numberToHclTerraform(this._pTemplateSipShared),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      packet_capture_template: {
        value: cdktf.stringToHclTerraform(this._packetCaptureTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persist_type: {
        value: cdktf.stringToHclTerraform(this._persistType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool: {
        value: cdktf.stringToHclTerraform(this._pool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_shared: {
        value: cdktf.stringToHclTerraform(this._poolShared),
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
      port_translation: {
        value: cdktf.numberToHclTerraform(this._portTranslation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      precedence: {
        value: cdktf.numberToHclTerraform(this._precedence),
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
      proxy_layer: {
        value: cdktf.stringToHclTerraform(this._proxyLayer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      range: {
        value: cdktf.numberToHclTerraform(this._range),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rate: {
        value: cdktf.numberToHclTerraform(this._rate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      redirect_to_https: {
        value: cdktf.numberToHclTerraform(this._redirectToHttps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reply_acme_challenge: {
        value: cdktf.numberToHclTerraform(this._replyAcmeChallenge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      req_fail: {
        value: cdktf.numberToHclTerraform(this._reqFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reselection: {
        value: cdktf.stringToHclTerraform(this._reselection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reset: {
        value: cdktf.numberToHclTerraform(this._reset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reset_on_server_selection_fail: {
        value: cdktf.numberToHclTerraform(this._resetOnServerSelectionFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resolve_web_cat_list: {
        value: cdktf.stringToHclTerraform(this._resolveWebCatList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rtp_sip_call_id_match: {
        value: cdktf.numberToHclTerraform(this._rtpSipCallIdMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secs: {
        value: cdktf.numberToHclTerraform(this._secs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      serv_sel_fail: {
        value: cdktf.numberToHclTerraform(this._servSelFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_group: {
        value: cdktf.stringToHclTerraform(this._serverGroup),
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
      shared_partition_cache_template: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionCacheTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_partition_client_ssl_template: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionClientSslTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_partition_connection_reuse_template: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionConnectionReuseTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_partition_dblb_template: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionDblbTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_partition_diameter_template: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionDiameterTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_partition_dns_template: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionDnsTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_partition_doh_template: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionDohTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_partition_dynamic_service_template: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionDynamicServiceTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_partition_external_service_template: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionExternalServiceTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_partition_fix_template: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionFixTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_partition_http_policy_template: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionHttpPolicyTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_partition_http_template: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionHttpTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_partition_imap_pop3_template: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionImapPop3Template),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_partition_persist_cookie_template: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionPersistCookieTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_partition_persist_destination_ip_template: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionPersistDestinationIpTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_partition_persist_source_ip_template: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionPersistSourceIpTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_partition_persist_ssl_sid_template: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionPersistSslSidTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_partition_policy_template: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionPolicyTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_partition_pool: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionPool),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_partition_quic_template: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionQuicTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_partition_server_ssl_template: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionServerSslTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_partition_smpp_template: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionSmppTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_partition_smtp_template: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionSmtpTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_partition_tcp: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionTcp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_partition_tcp_proxy_template: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionTcpProxyTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_partition_udp: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionUdp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_partition_virtual_port_template: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionVirtualPortTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      showtech_print_extended_stats: {
        value: cdktf.numberToHclTerraform(this._showtechPrintExtendedStats),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      skip_rev_hash: {
        value: cdktf.numberToHclTerraform(this._skipRevHash),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snat_on_vip: {
        value: cdktf.numberToHclTerraform(this._snatOnVip),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stats_data_action: {
        value: cdktf.stringToHclTerraform(this._statsDataAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      substitute_source_mac: {
        value: cdktf.numberToHclTerraform(this._substituteSourceMac),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      support_http2: {
        value: cdktf.numberToHclTerraform(this._supportHttp2),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      syn_cookie: {
        value: cdktf.numberToHclTerraform(this._synCookie),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      template_cache: {
        value: cdktf.stringToHclTerraform(this._templateCache),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_cache_shared: {
        value: cdktf.stringToHclTerraform(this._templateCacheShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_client_ssh: {
        value: cdktf.stringToHclTerraform(this._templateClientSsh),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_client_ssl: {
        value: cdktf.stringToHclTerraform(this._templateClientSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_client_ssl_shared: {
        value: cdktf.stringToHclTerraform(this._templateClientSslShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_connection_reuse: {
        value: cdktf.stringToHclTerraform(this._templateConnectionReuse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_connection_reuse_shared: {
        value: cdktf.stringToHclTerraform(this._templateConnectionReuseShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_dblb: {
        value: cdktf.stringToHclTerraform(this._templateDblb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_dblb_shared: {
        value: cdktf.stringToHclTerraform(this._templateDblbShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_diameter: {
        value: cdktf.stringToHclTerraform(this._templateDiameter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_diameter_shared: {
        value: cdktf.stringToHclTerraform(this._templateDiameterShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_dns: {
        value: cdktf.stringToHclTerraform(this._templateDns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_dns_shared: {
        value: cdktf.stringToHclTerraform(this._templateDnsShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_doh: {
        value: cdktf.stringToHclTerraform(this._templateDoh),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_doh_shared: {
        value: cdktf.stringToHclTerraform(this._templateDohShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_dynamic_service: {
        value: cdktf.stringToHclTerraform(this._templateDynamicService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_dynamic_service_shared: {
        value: cdktf.stringToHclTerraform(this._templateDynamicServiceShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_external_service: {
        value: cdktf.stringToHclTerraform(this._templateExternalService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_external_service_shared: {
        value: cdktf.stringToHclTerraform(this._templateExternalServiceShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_fix: {
        value: cdktf.stringToHclTerraform(this._templateFix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_fix_shared: {
        value: cdktf.stringToHclTerraform(this._templateFixShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_ftp: {
        value: cdktf.stringToHclTerraform(this._templateFtp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_http: {
        value: cdktf.stringToHclTerraform(this._templateHttp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_http_policy: {
        value: cdktf.stringToHclTerraform(this._templateHttpPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_http_policy_shared: {
        value: cdktf.stringToHclTerraform(this._templateHttpPolicyShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_http_shared: {
        value: cdktf.stringToHclTerraform(this._templateHttpShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_imap_pop3: {
        value: cdktf.stringToHclTerraform(this._templateImapPop3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_imap_pop3_shared: {
        value: cdktf.stringToHclTerraform(this._templateImapPop3Shared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_mqtt: {
        value: cdktf.stringToHclTerraform(this._templateMqtt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_persist_cookie: {
        value: cdktf.stringToHclTerraform(this._templatePersistCookie),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_persist_cookie_shared: {
        value: cdktf.stringToHclTerraform(this._templatePersistCookieShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_persist_destination_ip: {
        value: cdktf.stringToHclTerraform(this._templatePersistDestinationIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_persist_destination_ip_shared: {
        value: cdktf.stringToHclTerraform(this._templatePersistDestinationIpShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_persist_source_ip: {
        value: cdktf.stringToHclTerraform(this._templatePersistSourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_persist_source_ip_shared: {
        value: cdktf.stringToHclTerraform(this._templatePersistSourceIpShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_persist_ssl_sid: {
        value: cdktf.stringToHclTerraform(this._templatePersistSslSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_persist_ssl_sid_shared: {
        value: cdktf.stringToHclTerraform(this._templatePersistSslSidShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_policy: {
        value: cdktf.stringToHclTerraform(this._templatePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_policy_shared: {
        value: cdktf.stringToHclTerraform(this._templatePolicyShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_quic: {
        value: cdktf.stringToHclTerraform(this._templateQuic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_quic_client: {
        value: cdktf.stringToHclTerraform(this._templateQuicClient),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_quic_server: {
        value: cdktf.stringToHclTerraform(this._templateQuicServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_quic_shared: {
        value: cdktf.stringToHclTerraform(this._templateQuicShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_ram_cache: {
        value: cdktf.stringToHclTerraform(this._templateRamCache),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_reqmod_icap: {
        value: cdktf.stringToHclTerraform(this._templateReqmodIcap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_respmod_icap: {
        value: cdktf.stringToHclTerraform(this._templateRespmodIcap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_scaleout: {
        value: cdktf.stringToHclTerraform(this._templateScaleout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_server_ssh: {
        value: cdktf.stringToHclTerraform(this._templateServerSsh),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_server_ssl: {
        value: cdktf.stringToHclTerraform(this._templateServerSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_server_ssl_shared: {
        value: cdktf.stringToHclTerraform(this._templateServerSslShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_sip: {
        value: cdktf.stringToHclTerraform(this._templateSip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_sip_shared: {
        value: cdktf.stringToHclTerraform(this._templateSipShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_smpp: {
        value: cdktf.stringToHclTerraform(this._templateSmpp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_smpp_shared: {
        value: cdktf.stringToHclTerraform(this._templateSmppShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_smtp: {
        value: cdktf.stringToHclTerraform(this._templateSmtp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_smtp_shared: {
        value: cdktf.stringToHclTerraform(this._templateSmtpShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_ssli: {
        value: cdktf.stringToHclTerraform(this._templateSsli),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_tcp: {
        value: cdktf.stringToHclTerraform(this._templateTcp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_tcp_proxy: {
        value: cdktf.stringToHclTerraform(this._templateTcpProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_tcp_proxy_client: {
        value: cdktf.stringToHclTerraform(this._templateTcpProxyClient),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_tcp_proxy_server: {
        value: cdktf.stringToHclTerraform(this._templateTcpProxyServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_tcp_proxy_shared: {
        value: cdktf.stringToHclTerraform(this._templateTcpProxyShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_tcp_shared: {
        value: cdktf.stringToHclTerraform(this._templateTcpShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_udp: {
        value: cdktf.stringToHclTerraform(this._templateUdp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_udp_shared: {
        value: cdktf.stringToHclTerraform(this._templateUdpShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_virtual_port: {
        value: cdktf.stringToHclTerraform(this._templateVirtualPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_virtual_port_shared: {
        value: cdktf.stringToHclTerraform(this._templateVirtualPortShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trunk_fwd: {
        value: cdktf.numberToHclTerraform(this._trunkFwd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trunk_rev: {
        value: cdktf.numberToHclTerraform(this._trunkRev),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_alternate_port: {
        value: cdktf.numberToHclTerraform(this._useAlternatePort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_cgnv6: {
        value: cdktf.numberToHclTerraform(this._useCgnv6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_default_if_no_server: {
        value: cdktf.numberToHclTerraform(this._useDefaultIfNoServer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_rcv_hop_for_resp: {
        value: cdktf.numberToHclTerraform(this._useRcvHopForResp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_rcv_hop_group: {
        value: cdktf.numberToHclTerraform(this._useRcvHopGroup),
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
      view: {
        value: cdktf.numberToHclTerraform(this._view),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      when_down: {
        value: cdktf.numberToHclTerraform(this._whenDown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      when_down_protocol2: {
        value: cdktf.numberToHclTerraform(this._whenDownProtocol2),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      acl_list: {
        value: cdktf.listMapperHcl(slbVirtualServerPortAclListStructToHclTerraform, true)(this._aclList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbVirtualServerPortAclListStructList",
      },
      aflex_scripts: {
        value: cdktf.listMapperHcl(slbVirtualServerPortAflexScriptsToHclTerraform, true)(this._aflexScripts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbVirtualServerPortAflexScriptsList",
      },
      auth_cfg: {
        value: slbVirtualServerPortAuthCfgToHclTerraform(this._authCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbVirtualServerPortAuthCfgList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(slbVirtualServerPortSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbVirtualServerPortSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
