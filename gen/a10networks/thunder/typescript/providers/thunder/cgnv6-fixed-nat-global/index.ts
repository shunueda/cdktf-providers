// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_fixed_nat_global
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6FixedNatGlobalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Create Port Mapping File
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_fixed_nat_global#create_port_mapping_file Cgnv6FixedNatGlobal#create_port_mapping_file}
  */
  readonly createPortMappingFile?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_fixed_nat_global#id Cgnv6FixedNatGlobal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Number of old fixed_nat files to store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_fixed_nat_global#port_mapping_files_count Cgnv6FixedNatGlobal#port_mapping_files_count}
  */
  readonly portMappingFilesCount?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_fixed_nat_global#uuid Cgnv6FixedNatGlobal#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_fixed_nat_global#sampling_enable Cgnv6FixedNatGlobal#sampling_enable}
  */
  readonly samplingEnable?: Cgnv6FixedNatGlobalSamplingEnable[] | cdktf.IResolvable;
}
export interface Cgnv6FixedNatGlobalSamplingEnable {
  /**
  * 'all': all; 'total-nat-in-use': Total NAT Addresses in-use; 'total-tcp-allocated': Total TCP Ports Allocated; 'total-tcp-freed': Total TCP Ports Freed; 'total-udp-allocated': Total UDP Ports Allocated; 'total-udp-freed': Total UDP Ports Freed; 'total-icmp-allocated': Total ICMP Ports Allocated; 'total-icmp-freed': Total ICMP Ports Freed; 'nat44-data-session-created': NAT44 Data Sessions Created; 'nat44-data-session-freed': NAT44 Data Sessions Freed; 'nat64-data-session-created': NAT64 Data Sessions Created; 'nat64-data-session-freed': NAT64 Data Sessions Freed; 'dslite-data-session-created': DS-Lite Data Sessions Created; 'dslite-data-session-freed': DS-Lite Data Sessions Freed; 'nat-port-unavailable-tcp': TCP NAT Port Unavailable; 'nat-port-unavailable-udp': UDP NAT Port Unavailable; 'nat-port-unavailable-icmp': ICMP NAT Port Unavailable; 'session-user-quota-exceeded': Sessions User Quota Exceeded; 'nat44-tcp-fullcone-created': NAT44 TCP Full-Cone Created; 'nat44-tcp-fullcone-freed': NAT44 TCP Full-Cone Freed; 'nat44-udp-fullcone-created': NAT44 UDP Full-Cone Created; 'nat44-udp-fullcone-freed': NAT44 UDP Full-Cone Freed; 'nat44-udp-alg-fullcone-created': NAT44 UDP ALG Full-Cone Created; 'nat44-udp-alg-fullcone-freed': NAT44 UDP ALG Full-Cone Freed; 'nat64-tcp-fullcone-created': NAT64 TCP Full-Cone Created; 'nat64-tcp-fullcone-freed': NAT64 TCP Full-Cone Freed; 'nat64-udp-fullcone-created': NAT64 UDP Full-Cone Created; 'nat64-udp-fullcone-freed': NAT64 UDP Full-Cone Freed; 'nat64-udp-alg-fullcone-created': NAT64 UDP ALG Full-Cone Created; 'nat64-udp-alg-fullcone-freed': NAT64 UDP ALG Full-Cone Freed; 'dslite-tcp-fullcone-created': DS-Lite TCP Full-Cone Created; 'dslite-tcp-fullcone-freed': DS-Lite TCP Full-Cone Freed; 'dslite-udp-fullcone-created': DS-Lite UDP Full-Cone Created; 'dslite-udp-fullcone-freed': DS-Lite UDP Full-Cone Freed; 'dslite-udp-alg-fullcone-created': DS-Lite UDP ALG Full-Cone Created; 'dslite-udp-alg-fullcone-freed': DS-Lite UDP ALG Full-Cone Freed; 'fullcone-failure': Full-Cone Session Creation Failed; 'nat44-eim-match': NAT44 Endpoint-Independent-Mapping Matched; 'nat64-eim-match': NAT64 Endpoint-Independent-Mapping Matched; 'dslite-eim-match': DS-Lite Endpoint-Independent-Mapping Matched; 'nat44-eif-match': NAT44 Endpoint-Independent-Filtering Matched; 'nat64-eif-match': NAT64 Endpoint-Independent-Filtering Matched; 'dslite-eif-match': DS-Lite Endpoint-Independent-Filtering Matched; 'nat44-inbound-filtered': NAT44 Endpoint-Dependent Filtering Drop; 'nat64-inbound-filtered': NAT64 Endpoint-Dependent Filtering Drop; 'dslite-inbound-filtered': DS-Lite Endpoint-Dependent Filtering Drop; 'nat44-eif-limit-exceeded': NAT44 Endpoint-Independent-Filtering Limit Exceeded; 'nat64-eif-limit-exceeded': NAT64 Endpoint-Independent-Filtering Limit Exceeded; 'dslite-eif-limit-exceeded': DS-Lite Endpoint-Independent-Filtering Limit Exceeded; 'nat44-hairpin': NAT44 Hairpin Session Created; 'nat64-hairpin': NAT64 Hairpin Session Created; 'dslite-hairpin': DS-Lite Hairpin Session Created; 'standby-drop': Fixed NAT LID Standby Drop; 'fixed-nat-fullcone-self-hairpinning-drop': Self-Hairpinning Drop; 'sixrd-drop': Fixed NAT IPv6 in IPv4 Packet Drop; 'dest-rlist-drop': Fixed NAT Dest Rule List Drop; 'dest-rlist-pass-through': Fixed NAT Dest Rule List Pass-Through; 'dest-rlist-snat-drop': Fixed NAT Dest Rules List Source NAT Drop; 'cross-cpu-helper-created': Cross CPU Helper Session Created; 'cross-cpu-helper-free-retry-lookup': Cross CPU Helper Session Free Retry Lookup; 'cross-cpu-helper-free-not-found': Cross CPU Helper Session Free not Found; 'cross-cpu-helper-free': Cross CPU Helper Session Freed; 'cross-cpu-rcv': Cross CPU Helper Packets Received; 'cross-cpu-bad-l3': Cross CPU Unsupported L3; 'cross-cpu-bad-l4': Cross CPU Unsupported L4; 'cross-cpu-no-session': Cross CPU no Session Found; 'cross-cpu-helper-deleted': Cross CPU Helper Session Deleted; 'cross-cpu-helper-fixed-nat-lid-standby': Cross CPU Helper Fixed NAT LID Standby; 'cross-cpu-helper-cpu-mismatch': Cross CPU Helper CPU Mismatch; 'cross-cpu-sent': Cross CPU Helper Packets Sent; 'config-not-found': Fixed NAT Config not Found; 'fullcone-in-del-q': Full-Cone Session in Delete Queue; 'fullcone-overflow': Full-Cone Session Conn-Count Overflow; 'fullcone-inbound-idx-mismatch': Full-Cone Session Fixed NAT LID mismatch; 'fullcone-retry-lookup': Full-cone session retry look-up; 'fullcone-not-found': Full-cone session not found; 'fullcone-overflow-eim': Full-cone EIM Overflow; 'fullcone-overflow-eif': Full-cone EIF Overflow; 'ha-config-mismatch': HA Fixed NAT Config Mismatch; 'ha-user-quota-exceeded': HA User Quota Exceeded; 'ha-fullcone-mismatch': HA Full-Cone Mismatch; 'ha-dnat-mismatch': HA Destination NAT Config Mismatch; 'ha-nat-port-unavailable': HA NAT Port Unavailable; 'ha-fullcone-failure': HA Full-Cone Failure; 'ha-endpoint-indep-map-match': HA Endpoint-Independent-Mapping Match; 'udp-alg-eim-mismatch': UDP ALG Endpoint-Independent Mapping Mismatch; 'udp-alg-no-nat-ip': UDP ALG User-Quota Unknown NAT IP; 'udp-alg-alloc-failure': UDP ALG Port Allocation Failure; 'mtu-exceeded': Packet Exceeded MTU; 'frag': Fragmented Packets; 'frag-icmp': ICMP Packet Too Big Sent; 'periodic-log-msg-alloc': Fixed NAT Periodic Log Msg Allocated; 'periodic-log-msg-free': Fixed NAT Periodic Log Msg Freed; 'disable-log-msg-alloc': Fixed NAT Disable Log Msg Allocated; 'disable-log-msg-free': Fixed NAT Disable Log Msg Freed; 'sip-alg-reuse-contact-fullcone': SIP ALG Reuse Contact Full-cone Session; 'sip-alg-contact-fullcone-mismatch': SIP ALG Contact Full-cone Session Mismatch; 'sip-alg-create-contact-fullcone-failure': SIP ALG Create Contact Full-cone Session Failure; 'sip-alg-single-rtp-fullcone': SIP ALG Single RTP Full-cone Found; 'sip-alg-rtcp-fullcone-mismatch': SIP ALG RTCP Full-cone NAT Port Mismatch; 'sip-alg-reuse-rtp-rtcp-fullcone': SIP ALG Reuse RTP/RTCP Full-cone Session; 'sip-alg-single-rtcp-fullcone': SIP ALG Single RTCP Full-cone Found; 'sip-alg-create-rtp-fullcone-failure': SIP ALG Create RTP Full-cone Session Failure; 'sip-alg-create-rtcp-fullcone-failure': SIP ALG Create RTCP Full-cone Session Failure; 'icmp-out-of-state-uqe-admin-filtered-sent': Total User Quota Exceeded ICMP admin filtered sent; 'icmp-out-of-state-uqe-host-unreachable-sent': Total User Quota Exceeded ICMP host unreachable sent; 'icmp-out-of-state-uqe-dropped': Total User Queue Exceeded ICMP notification dropped; 'nat-esp-ip-conflicts': Fixed NAT ESP IP Conflicts; 'total-tcp-allocated-shadow': Total TCP Ports Allocated; 'total-tcp-freed-shadow': Total TCP Ports Freed; 'total-udp-allocated-shadow': Total UDP Ports Allocated; 'total-udp-freed-shadow': Total UDP Ports Freed; 'total-icmp-allocated-shadow': Total ICMP Ports Allocated; 'total-icmp-freed-shadow': Total ICMP Ports Freed; 'nat44-data-session-created-shadow': NAT44 Data Sessions Created; 'nat44-data-session-freed-shadow': NAT44 Data Sessions Freed; 'nat64-data-session-created-shadow': NAT64 Data Sessions Created; 'nat64-data-session-freed-shadow': NAT64 Data Sessions Freed; 'dslite-data-session-created-shadow': DS-Lite Data Sessions Created; 'dslite-data-session-freed-shadow': DS-Lite Data Sessions Freed; 'nat44-tcp-fullcone-created-shadow': NAT44 TCP Full-Cone Created; 'nat44-tcp-fullcone-freed-shadow': NAT44 TCP Full-Cone Freed; 'nat44-udp-fullcone-created-shadow': NAT44 UDP Full-Cone Created; 'nat44-udp-fullcone-freed-shadow': NAT44 UDP Full-Cone Freed; 'nat44-udp-alg-fullcone-created-shadow': NAT44 UDP ALG Full-Cone Created;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_fixed_nat_global#counters1 Cgnv6FixedNatGlobal#counters1}
  */
  readonly counters1?: string;
  /**
  * 'nat44-udp-alg-fullcone-freed-shadow': NAT44 UDP ALG Full-Cone Freed; 'nat64-tcp-fullcone-created-shadow': NAT64 TCP Full-Cone Created; 'nat64-tcp-fullcone-freed-shadow': NAT64 TCP Full-Cone Freed; 'nat64-udp-fullcone-created-shadow': NAT64 UDP Full-Cone Created; 'nat64-udp-fullcone-freed-shadow': NAT64 UDP Full-Cone Freed; 'nat64-udp-alg-fullcone-created-shadow': NAT64 UDP ALG Full-Cone Created; 'nat64-udp-alg-fullcone-freed-shadow': NAT64 UDP ALG Full-Cone Freed; 'dslite-tcp-fullcone-created-shadow': DS-Lite TCP Full-Cone Created; 'dslite-tcp-fullcone-freed-shadow': DS-Lite TCP Full-Cone Freed; 'dslite-udp-fullcone-created-shadow': DS-Lite UDP Full-Cone Created; 'dslite-udp-fullcone-freed-shadow': DS-Lite UDP Full-Cone Freed; 'dslite-udp-alg-fullcone-created-shadow': DS-Lite UDP ALG Full-Cone Created; 'dslite-udp-alg-fullcone-freed-shadow': DS-Lite UDP ALG Full-Cone Freed; 'h323-alg-reuse-fullcone': H323 ALG Reuse Full-cone Session; 'h323-alg-fullcone-mismatch': H323 ALG Full-cone Session Mismatch; 'h323-alg-create-fullcone-failure': H323 ALG Create Full-cone Session Failure; 'h323-alg-single-rtp-fullcone': H323 ALG Single RTP Full-cone Found; 'h323-alg-rtcp-fullcone-mismatch': H323 ALG RTCP Full-cone NAT Port Mismatch; 'h323-alg-reuse-rtp-rtcp-fullcone': H323 ALG Reuse RTP/RTCP Full-cone Session; 'h323-alg-single-rtcp-fullcone': H323 ALG Single RTCP Full-cone Found; 'h323-alg-create-rtp-fullcone-failure': H323 ALG Create RTP Full-cone Session Failure; 'h323-alg-create-rtcp-fullcone-failure': H323 ALG Create RTCP Full-cone Session Failure; 'mgcp-alg-reuse-fullcone': MGCP ALG Reuse Full-cone Session; 'mgcp-alg-fullcone-mismatch': MGCP ALG Full-cone Session Mismatch; 'mgcp-alg-create-fullcone-failure': MGCP ALG Create Full-cone Session Failure; 'mgcp-alg-single-rtp-fullcone': MGCP ALG Single RTP Full-cone Found; 'mgcp-alg-rtcp-fullcone-mismatch': MGCP ALG RTCP Full-cone NAT Port Mismatch; 'mgcp-alg-reuse-rtp-rtcp-fullcone': MGCP ALG Reuse RTP/RTCP Full-cone Session; 'mgcp-alg-single-rtcp-fullcone': MGCP ALG Single RTCP Full-cone Found; 'mgcp-alg-create-rtp-fullcone-failure': MGCP ALG Create RTP Full-cone Session Failure; 'mgcp-alg-create-rtcp-fullcone-failure': MGCP ALG Create RTCP Full-cone Session Failure; 'user-unusable-drop': Fixed NAT User Unusable Drop; 'ipv4-user-unusable': Fixed NAT IPv4 User Marked Unusable; 'ipv6-user-unusable': Fixed NAT IPv6 User Marked Unusable; 'ipd-disabled': Fixed NAT IPD disabled; 'dslite_tunnel_frag': IPv4 Fragment DS-Lite Packet; 'total-tcp-overload-acquired': Total TCP ports acquired for port overloading; 'total-udp-overload-acquired': Total UDP ports acquired for port overloading; 'total-tcp-overload-released': Total TCP ports released from port overloading; 'total-udp-overload-released': Total UDP ports released from port overloading; 'total-tcp-alloc-overload': Total TCP ports allocated via overload; 'total-udp-alloc-overload': Total UDP ports allocated via overload; 'total-tcp-free-overload': Total TCP ports freed via overload; 'total-udp-free-overload': Total UDP ports freed via overload; 'port-overload-smp-delete-scheduled': Port overload SMP conn delete scheduled; 'port-overload-smp-mem-allocated': Port overload SMP mem allocated; 'port-overload-out-of-memory': Port overload out of memory; 'port-overload-smp-free': Port overload SMP conn free; 'port-overload-smp-free-no-lid': Port overload SMP conn free no lid; 'port-overload-free-smp-not-found': Port overload free SMP conn not found; 'port-overload-failed': Port overload failed; 'total-tcp-overload-acquired-shadow': Total TCP ports acquired for port overloading shadow; 'total-udp-overload-acquired-shadow': Total UDP ports acquired for port overloading shadow; 'total-tcp-overload-released-shadow': Total TCP ports released from port overloading shadow; 'total-udp-overload-released-shadow': Total UDP ports released from port overloading shadow; 'total-tcp-alloc-overload-shadow': Total TCP allocated via overload shadow; 'total-udp-alloc-overload-shadow': Total UDP allocated via overload shadow; 'total-tcp-free-overload-shadow': Total TCP freed via overload shadow; 'total-udp-free-overload-shadow': Total UDP freed via overload shadow; 'ha-session-user-quota-exceeded': HA Sessions User Quota Exceeded; 'tcp-user-quota-exceeded': TCP User Quota Exceeded; 'udp-user-quota-exceeded': UDP User Quota Exceeded; 'icmp-user-quota-exceeded': ICMP User Quota Exceeded; 'ha-tcp-user-quota-exceeded': HA TCP User Quota Exceeded; 'ha-udp-user-quota-exceeded': HA UDP User Quota Exceeded; 'ha-icmp-user-quota-exceeded': HA ICMP User Quota Exceeded; 'ha-nat-port-unavailable-tcp': HA TCP NAT Port Unavailable; 'ha-nat-port-unavailable-udp': HA UDP NAT Port Unavailable; 'ha-nat-port-unavailable-icmp': HA ICMP NAT Port Unavailable; 'fnat44_fwd_ingress_packets_tcp': Fixed NAT44 Forward Ingress Packets TCP; 'fnat44_fwd_egress_packets_tcp': Fixed NAT44 Forward Egress Packets TCP; 'fnat44_rev_ingress_packets_tcp': Fixed NAT44 Reverse Ingress Packets TCP; 'fnat44_rev_egress_packets_tcp': Fixed NAT44 Reverse Egress Packets TCP; 'fnat44_fwd_ingress_bytes_tcp': Fixed NAT44 Forward Ingress Bytes TCP; 'fnat44_fwd_egress_bytes_tcp': Fixed NAT44 Forward Egress Bytes TCP; 'fnat44_rev_ingress_bytes_tcp': Fixed NAT44 Reverse Ingress Bytes TCP; 'fnat44_rev_egress_bytes_tcp': Fixed NAT44 Reverse Egress Bytes TCP; 'fnat44_fwd_ingress_packets_udp': Fixed NAT44 Forward Ingress Packets UDP; 'fnat44_fwd_egress_packets_udp': Fixed NAT44 Forward Egress Packets UDP; 'fnat44_rev_ingress_packets_udp': Fixed NAT44 Reverse Ingress Packets UDP; 'fnat44_rev_egress_packets_udp': Fixed NAT44 Reverse Egress Packets UDP; 'fnat44_fwd_ingress_bytes_udp': Fixed NAT44 Forward Ingress Bytes UDP; 'fnat44_fwd_egress_bytes_udp': Fixed NAT44 Forward Egress Bytes UDP; 'fnat44_rev_ingress_bytes_udp': Fixed NAT44 Reverse Ingress Bytes UDP; 'fnat44_rev_egress_bytes_udp': Fixed NAT44 Reverse Egress Bytes UDP; 'fnat44_fwd_ingress_packets_icmp': Fixed NAT44 Forward Ingress Packets ICMP; 'fnat44_fwd_egress_packets_icmp': Fixed NAT44 Forward Egress Packets ICMP; 'fnat44_rev_ingress_packets_icmp': Fixed NAT44 Reverse Ingress Packets ICMP; 'fnat44_rev_egress_packets_icmp': Fixed NAT44 Reverse Egress Packets ICMP; 'fnat44_fwd_ingress_bytes_icmp': Fixed NAT44 Forward Ingress Bytes ICMP; 'fnat44_fwd_egress_bytes_icmp': Fixed NAT44 Forward Egress Bytes ICMP; 'fnat44_rev_ingress_bytes_icmp': Fixed NAT44 Reverse Ingress Bytes ICMP; 'fnat44_rev_egress_bytes_icmp': Fixed NAT44 Reverse Egress Bytes ICMP; 'fnat44_fwd_ingress_packets_others': Fixed NAT44 Forward Ingress Packets OTHERS; 'fnat44_fwd_egress_packets_others': Fixed NAT44 Forward Egress Packets OTHERS; 'fnat44_rev_ingress_packets_others': Fixed NAT44 Reverse Ingress Packets OTHERS; 'fnat44_rev_egress_packets_others': Fixed NAT44 Reverse Egress Packets OTHERS; 'fnat44_fwd_ingress_bytes_others': Fixed NAT44 Forward Ingress Bytes OTHERS; 'fnat44_fwd_egress_bytes_others': Fixed NAT44 Forward Egress Bytes OTHERS; 'fnat44_rev_ingress_bytes_others': Fixed NAT44 Reverse Ingress Bytes OTHERS; 'fnat44_rev_egress_bytes_others': Fixed NAT44 Reverse Egress Bytes OTHERS; 'fnat44_fwd_ingress_pkt_size_range1': Fixed NAT44 Forward Ingress Packet size between 0 and 200; 'fnat44_fwd_ingress_pkt_size_range2': Fixed NAT44 Forward Ingress Packet size between 201 and 800; 'fnat44_fwd_ingress_pkt_size_range3': Fixed NAT44 Forward Ingress Packet size between 801 and 1550; 'fnat44_fwd_ingress_pkt_size_range4': Fixed NAT44 Forward Ingress Packet size between 1551 and 9000; 'fnat44_fwd_egress_pkt_size_range1': Fixed NAT44 Forward Egress Packet size between 0 and 200;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_fixed_nat_global#counters2 Cgnv6FixedNatGlobal#counters2}
  */
  readonly counters2?: string;
  /**
  * 'fnat44_fwd_egress_pkt_size_range2': Fixed NAT44 Forward Egress Packet size between 201 and 800; 'fnat44_fwd_egress_pkt_size_range3': Fixed NAT44 Forward Egress Packet size between 801 and 1550; 'fnat44_fwd_egress_pkt_size_range4': Fixed NAT44 Forward Egress Packet size between 1551 and 9000; 'fnat44_rev_ingress_pkt_size_range1': Fixed NAT44 Reverse Ingress Packet size between 0 and 200; 'fnat44_rev_ingress_pkt_size_range2': Fixed NAT44 Reverse Ingress Packet size between 201 and 800; 'fnat44_rev_ingress_pkt_size_range3': Fixed NAT44 Reverse Ingress Packet size between 801 and 1550; 'fnat44_rev_ingress_pkt_size_range4': Fixed NAT44 Reverse Ingress Packet size between 1551 and 9000; 'fnat44_rev_egress_pkt_size_range1': Fixed NAT44 Reverse Egress Packet size between 0 and 200; 'fnat44_rev_egress_pkt_size_range2': Fixed NAT44 Reverse Egress Packet size between 201 and 800; 'fnat44_rev_egress_pkt_size_range3': Fixed NAT44 Reverse Egress Packet size between 801 and 1550; 'fnat44_rev_egress_pkt_size_range4': Fixed NAT44 Reverse Egress Packet size between 1551 and 9000; 'fnat64_fwd_ingress_packets_tcp': Fixed NAT64 Forward Ingress Packets TCP; 'fnat64_fwd_egress_packets_tcp': Fixed NAT64 Forward Egress Packets TCP; 'fnat64_rev_ingress_packets_tcp': Fixed NAT64 Reverse Ingress Packets TCP; 'fnat64_rev_egress_packets_tcp': Fixed NAT64 Reverse Egress Packets TCP; 'fnat64_fwd_ingress_bytes_tcp': Fixed NAT64 Forward Ingress Bytes TCP; 'fnat64_fwd_egress_bytes_tcp': Fixed NAT64 Forward Egress Bytes TCP; 'fnat64_rev_ingress_bytes_tcp': Fixed NAT64 Reverse Ingress Bytes TCP; 'fnat64_rev_egress_bytes_tcp': Fixed NAT64 Reverse Egress Bytes TCP; 'fnat64_fwd_ingress_packets_udp': Fixed NAT64 Forward Ingress Packets UDP; 'fnat64_fwd_egress_packets_udp': Fixed NAT64 Forward Egress Packets UDP; 'fnat64_rev_ingress_packets_udp': Fixed NAT64 Reverse Ingress Packets UDP; 'fnat64_rev_egress_packets_udp': Fixed NAT64 Reverse Egress Packets UDP; 'fnat64_fwd_ingress_bytes_udp': Fixed NAT64 Forward Ingress Bytes UDP; 'fnat64_fwd_egress_bytes_udp': Fixed NAT64 Forward Egress Bytes UDP; 'fnat64_rev_ingress_bytes_udp': Fixed NAT64 Reverse Ingress Bytes UDP; 'fnat64_rev_egress_bytes_udp': Fixed NAT64 Reverse Egress Bytes UDP; 'fnat64_fwd_ingress_packets_icmp': Fixed NAT64 Forward Ingress Packets ICMP; 'fnat64_fwd_egress_packets_icmp': Fixed NAT64 Forward Egress Packets ICMP; 'fnat64_rev_ingress_packets_icmp': Fixed NAT64 Reverse Ingress Packets ICMP; 'fnat64_rev_egress_packets_icmp': Fixed NAT64 Reverse Egress Packets ICMP; 'fnat64_fwd_ingress_bytes_icmp': Fixed NAT64 Forward Ingress Bytes ICMP; 'fnat64_fwd_egress_bytes_icmp': Fixed NAT64 Forward Egress Bytes ICMP; 'fnat64_rev_ingress_bytes_icmp': Fixed NAT64 Reverse Ingress Bytes ICMP; 'fnat64_rev_egress_bytes_icmp': Fixed NAT64 Reverse Egress Bytes ICMP; 'fnat64_fwd_ingress_packets_others': Fixed NAT64 Forward Ingress Packets OTHERS; 'fnat64_fwd_egress_packets_others': Fixed NAT64 Forward Egress Packets OTHERS; 'fnat64_rev_ingress_packets_others': Fixed NAT64 Reverse Ingress Packets OTHERS; 'fnat64_rev_egress_packets_others': Fixed NAT64 Reverse Egress Packets OTHERS; 'fnat64_fwd_ingress_bytes_others': Fixed NAT64 Forward Ingress Bytes OTHERS; 'fnat64_fwd_egress_bytes_others': Fixed NAT64 Forward Egress Bytes OTHERS; 'fnat64_rev_ingress_bytes_others': Fixed NAT64 Reverse Ingress Bytes OTHERS; 'fnat64_rev_egress_bytes_others': Fixed NAT64 Reverse Egress Bytes OTHERS; 'fnat64_fwd_ingress_pkt_size_range1': Fixed NAT64 Forward Ingress Packet size between 0 and 200; 'fnat64_fwd_ingress_pkt_size_range2': Fixed NAT64 Forward Ingress Packet size between 201 and 800; 'fnat64_fwd_ingress_pkt_size_range3': Fixed NAT64 Forward Ingress Packet size between 801 and 1550; 'fnat64_fwd_ingress_pkt_size_range4': Fixed NAT64 Forward Ingress Packet size between 1551 and 9000; 'fnat64_fwd_egress_pkt_size_range1': Fixed NAT64 Forward Egress Packet size between 0 and 200; 'fnat64_fwd_egress_pkt_size_range2': Fixed NAT64 Forward Egress Packet size between 201 and 800; 'fnat64_fwd_egress_pkt_size_range3': Fixed NAT64 Forward Egress Packet size between 801 and 1550; 'fnat64_fwd_egress_pkt_size_range4': Fixed NAT64 Forward Egress Packet size between 1551 and 9000; 'fnat64_rev_ingress_pkt_size_range1': Fixed NAT64 Reverse Ingress Packet size between 0 and 200; 'fnat64_rev_ingress_pkt_size_range2': Fixed NAT64 Reverse Ingress Packet size between 201 and 800; 'fnat64_rev_ingress_pkt_size_range3': Fixed NAT64 Reverse Ingress Packet size between 801 and 1550; 'fnat64_rev_ingress_pkt_size_range4': Fixed NAT64 Reverse Ingress Packet size between 1551 and 9000; 'fnat64_rev_egress_pkt_size_range1': Fixed NAT64 Reverse Egress Packet size between 0 and 200; 'fnat64_rev_egress_pkt_size_range2': Fixed NAT64 Reverse Egress Packet size between 201 and 800; 'fnat64_rev_egress_pkt_size_range3': Fixed NAT64 Reverse Egress Packet size between 801 and 1550; 'fnat64_rev_egress_pkt_size_range4': Fixed NAT64 Reverse Egress Packet size between 1551 and 9000; 'fnatdslite_fwd_ingress_packets_tcp': Fixed DS-Lite Forward Ingress Packets TCP; 'fnatdslite_fwd_egress_packets_tcp': Fixed DS-Lite Forward Egress Packets TCP; 'fnatdslite_rev_ingress_packets_tcp': Fixed DS-Lite Reverse Ingress Packets TCP; 'fnatdslite_rev_egress_packets_tcp': Fixed DS-Lite Reverse Egress Packets TCP; 'fnatdslite_fwd_ingress_bytes_tcp': Fixed DS-Lite Forward Ingress Bytes TCP; 'fnatdslite_fwd_egress_bytes_tcp': Fixed DS-Lite Forward Egress Bytes TCP; 'fnatdslite_rev_ingress_bytes_tcp': Fixed DS-Lite Reverse Ingress Bytes TCP; 'fnatdslite_rev_egress_bytes_tcp': Fixed DS-Lite Reverse Egress Bytes TCP; 'fnatdslite_fwd_ingress_packets_udp': Fixed DS-Lite Forward Ingress Packets UDP; 'fnatdslite_fwd_egress_packets_udp': Fixed DS-Lite Forward Egress Packets UDP; 'fnatdslite_rev_ingress_packets_udp': Fixed DS-Lite Reverse Ingress Packets UDP; 'fnatdslite_rev_egress_packets_udp': Fixed DS-Lite Reverse Egress Packets UDP; 'fnatdslite_fwd_ingress_bytes_udp': Fixed DS-Lite Forward Ingress Bytes UDP; 'fnatdslite_fwd_egress_bytes_udp': Fixed DS-Lite Forward Egress Bytes UDP; 'fnatdslite_rev_ingress_bytes_udp': Fixed DS-Lite Reverse Ingress Bytes UDP; 'fnatdslite_rev_egress_bytes_udp': Fixed DS-Lite Reverse Egress Bytes UDP; 'fnatdslite_fwd_ingress_packets_icmp': Fixed DS-Lite Forward Ingress Packets ICMP; 'fnatdslite_fwd_egress_packets_icmp': Fixed DS-Lite Forward Egress Packets ICMP; 'fnatdslite_rev_ingress_packets_icmp': Fixed DS-Lite Reverse Ingress Packets ICMP; 'fnatdslite_rev_egress_packets_icmp': Fixed DS-Lite Reverse Egress Packets ICMP; 'fnatdslite_fwd_ingress_bytes_icmp': Fixed DS-Lite Forward Ingress Bytes ICMP; 'fnatdslite_fwd_egress_bytes_icmp': Fixed DS-Lite Forward Egress Bytes ICMP; 'fnatdslite_rev_ingress_bytes_icmp': Fixed DS-Lite Reverse Ingress Bytes ICMP; 'fnatdslite_rev_egress_bytes_icmp': Fixed DS-Lite Reverse Egress Bytes ICMP; 'fnatdslite_fwd_ingress_packets_others': Fixed DS-Lite Forward Ingress Packets OTHERS; 'fnatdslite_fwd_egress_packets_others': Fixed DS-Lite Forward Egress Packets OTHERS; 'fnatdslite_rev_ingress_packets_others': Fixed DS-Lite Reverse Ingress Packets OTHERS; 'fnatdslite_rev_egress_packets_others': Fixed DS-Lite Reverse Egress Packets OTHERS; 'fnatdslite_fwd_ingress_bytes_others': Fixed DS-Lite Forward Ingress Bytes OTHERS; 'fnatdslite_fwd_egress_bytes_others': Fixed DS-Lite Forward Egress Bytes OTHERS; 'fnatdslite_rev_ingress_bytes_others': Fixed DS-Lite Reverse Ingress Bytes OTHERS; 'fnatdslite_rev_egress_bytes_others': Fixed DS-Lite Reverse Egress Bytes OTHERS; 'fnatdslite_fwd_ingress_pkt_size_range1': Fixed DS-Lite Forward Ingress Packet size between 0 and 200;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_fixed_nat_global#counters3 Cgnv6FixedNatGlobal#counters3}
  */
  readonly counters3?: string;
  /**
  * 'fnatdslite_fwd_ingress_pkt_size_range2': Fixed DS-Lite Forward Ingress Packet size between 201 and 800; 'fnatdslite_fwd_ingress_pkt_size_range3': Fixed DS-Lite Forward Ingress Packet size between 801 and 1550; 'fnatdslite_fwd_ingress_pkt_size_range4': Fixed DS-Lite Forward Ingress Packet size between 1551 and 9000; 'fnatdslite_fwd_egress_pkt_size_range1': Fixed DS-Lite Forward Egress Packet size between 0 and 200; 'fnatdslite_fwd_egress_pkt_size_range2': Fixed DS-Lite Forward Egress Packet size between 201 and 800; 'fnatdslite_fwd_egress_pkt_size_range3': Fixed DS-Lite Forward Egress Packet size between 801 and 1550; 'fnatdslite_fwd_egress_pkt_size_range4': Fixed DS-Lite Forward Egress Packet size between 1551 and 9000; 'fnatdslite_rev_ingress_pkt_size_range1': Fixed DS-Lite Reverse Ingress Packet size between 0 and 200; 'fnatdslite_rev_ingress_pkt_size_range2': Fixed DS-Lite Reverse Ingress Packet size between 201 and 800; 'fnatdslite_rev_ingress_pkt_size_range3': Fixed DS-Lite Reverse Ingress Packet size between 801 and 1550; 'fnatdslite_rev_ingress_pkt_size_range4': Fixed DS-Lite Reverse Ingress Packet size between 1551 and 9000; 'fnatdslite_rev_egress_pkt_size_range1': Fixed DS-Lite Reverse Egress Packet size between 0 and 200; 'fnatdslite_rev_egress_pkt_size_range2': Fixed DS-Lite Reverse Egress Packet size between 201 and 800; 'fnatdslite_rev_egress_pkt_size_range3': Fixed DS-Lite Reverse Egress Packet size between 801 and 1550; 'fnatdslite_rev_egress_pkt_size_range4': Fixed DS-Lite Reverse Egress Packet size between 1551 and 9000; 'active-subscriber-added': Active Subscriber Added; 'active-subscriber-removed': Active Subscriber Removed; 'config-not-found-in-ctx': Fixed NAT Config Pointer Not Found in MY_CTX;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_fixed_nat_global#counters4 Cgnv6FixedNatGlobal#counters4}
  */
  readonly counters4?: string;
}

export function cgnv6FixedNatGlobalSamplingEnableToTerraform(struct?: Cgnv6FixedNatGlobalSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
    counters2: cdktf.stringToTerraform(struct!.counters2),
    counters3: cdktf.stringToTerraform(struct!.counters3),
    counters4: cdktf.stringToTerraform(struct!.counters4),
  }
}


export function cgnv6FixedNatGlobalSamplingEnableToHclTerraform(struct?: Cgnv6FixedNatGlobalSamplingEnable | cdktf.IResolvable): any {
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
    counters2: {
      value: cdktf.stringToHclTerraform(struct!.counters2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    counters3: {
      value: cdktf.stringToHclTerraform(struct!.counters3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    counters4: {
      value: cdktf.stringToHclTerraform(struct!.counters4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6FixedNatGlobalSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6FixedNatGlobalSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    if (this._counters2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters2 = this._counters2;
    }
    if (this._counters3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters3 = this._counters3;
    }
    if (this._counters4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters4 = this._counters4;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6FixedNatGlobalSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
      this._counters2 = undefined;
      this._counters3 = undefined;
      this._counters4 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
      this._counters2 = value.counters2;
      this._counters3 = value.counters3;
      this._counters4 = value.counters4;
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

  // counters2 - computed: false, optional: true, required: false
  private _counters2?: string; 
  public get counters2() {
    return this.getStringAttribute('counters2');
  }
  public set counters2(value: string) {
    this._counters2 = value;
  }
  public resetCounters2() {
    this._counters2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters2Input() {
    return this._counters2;
  }

  // counters3 - computed: false, optional: true, required: false
  private _counters3?: string; 
  public get counters3() {
    return this.getStringAttribute('counters3');
  }
  public set counters3(value: string) {
    this._counters3 = value;
  }
  public resetCounters3() {
    this._counters3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters3Input() {
    return this._counters3;
  }

  // counters4 - computed: false, optional: true, required: false
  private _counters4?: string; 
  public get counters4() {
    return this.getStringAttribute('counters4');
  }
  public set counters4(value: string) {
    this._counters4 = value;
  }
  public resetCounters4() {
    this._counters4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters4Input() {
    return this._counters4;
  }
}

export class Cgnv6FixedNatGlobalSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : Cgnv6FixedNatGlobalSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6FixedNatGlobalSamplingEnableOutputReference {
    return new Cgnv6FixedNatGlobalSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_fixed_nat_global thunder_cgnv6_fixed_nat_global}
*/
export class Cgnv6FixedNatGlobal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_fixed_nat_global";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6FixedNatGlobal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6FixedNatGlobal to import
  * @param importFromId The id of the existing Cgnv6FixedNatGlobal that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_fixed_nat_global#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6FixedNatGlobal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_fixed_nat_global", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_fixed_nat_global thunder_cgnv6_fixed_nat_global} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6FixedNatGlobalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Cgnv6FixedNatGlobalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_fixed_nat_global',
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
    this._createPortMappingFile = config.createPortMappingFile;
    this._id = config.id;
    this._portMappingFilesCount = config.portMappingFilesCount;
    this._uuid = config.uuid;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_port_mapping_file - computed: false, optional: true, required: false
  private _createPortMappingFile?: number; 
  public get createPortMappingFile() {
    return this.getNumberAttribute('create_port_mapping_file');
  }
  public set createPortMappingFile(value: number) {
    this._createPortMappingFile = value;
  }
  public resetCreatePortMappingFile() {
    this._createPortMappingFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createPortMappingFileInput() {
    return this._createPortMappingFile;
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

  // port_mapping_files_count - computed: false, optional: true, required: false
  private _portMappingFilesCount?: number; 
  public get portMappingFilesCount() {
    return this.getNumberAttribute('port_mapping_files_count');
  }
  public set portMappingFilesCount(value: number) {
    this._portMappingFilesCount = value;
  }
  public resetPortMappingFilesCount() {
    this._portMappingFilesCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portMappingFilesCountInput() {
    return this._portMappingFilesCount;
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new Cgnv6FixedNatGlobalSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: Cgnv6FixedNatGlobalSamplingEnable[] | cdktf.IResolvable) {
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
      create_port_mapping_file: cdktf.numberToTerraform(this._createPortMappingFile),
      id: cdktf.stringToTerraform(this._id),
      port_mapping_files_count: cdktf.numberToTerraform(this._portMappingFilesCount),
      uuid: cdktf.stringToTerraform(this._uuid),
      sampling_enable: cdktf.listMapper(cgnv6FixedNatGlobalSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create_port_mapping_file: {
        value: cdktf.numberToHclTerraform(this._createPortMappingFile),
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
      port_mapping_files_count: {
        value: cdktf.numberToHclTerraform(this._portMappingFilesCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(cgnv6FixedNatGlobalSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6FixedNatGlobalSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
